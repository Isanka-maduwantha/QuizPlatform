import { NextResponse } from 'next/server';
import { pool, getState, setState } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
export const dynamic = 'force-dynamic';

const DEF = {
  theme: { a: '#0284C7', b: '#EC4899', pop: '#FACC15', bg: '#0D0A1A', ink: '#F5F3FF', card: '#181230' },
  music: { on: false, volume: 0.4, sfx: true },
};

const withDefaults = (s) => ({
  activeTeam: 0,
  round: 1,
  wrongRule: 'opponent_5',
  autoAdvance: true,
  autoAdvanceSecs: 3,
  lastAnswer: null,
  ...s,
  theme: { ...DEF.theme, ...(s?.theme || {}) },
  music: { ...DEF.music, ...(s?.music || {}) },
});

async function findNextQuestion(rnd, subject, used) {
  const usedList = [0, ...(used || [])];
  let query, params;
  if (+rnd === 2 && subject) {
    query = `
      SELECT q.id FROM questions q
      LEFT JOIN subjects s ON s.id = q.subject_id
      WHERE q.rnd = 2 AND s.name = ? AND q.id NOT IN (?)
      ORDER BY q.id LIMIT 1
    `;
    params = [subject, usedList];
  } else {
    query = `
      SELECT id FROM questions
      WHERE rnd = ? AND id NOT IN (?)
      ORDER BY id LIMIT 1
    `;
    params = [+rnd, usedList];
  }
  const [r] = await pool.query(query, params);
  return r[0]?.id ?? null;
}

async function nextRapid(s) {
  const [r] = await pool.query('SELECT id FROM questions WHERE rnd=3 AND id NOT IN (?) ORDER BY id LIMIT 1', [[0, ...s.used]]);
  return r[0]?.id ?? null;
}

export async function GET(req) {
  const s = withDefaults(await getState()), admin = isAdmin(req);
  let q = null;
  if (s.qid) {
    const [r] = await pool.query('SELECT * FROM questions WHERE id=?', [s.qid]);
    const x = r[0];
    if (x) {
      q = { id: x.id, rnd: x.rnd, text: x.text, options: x.options };
      if (admin || s.revealed) { q.correct = x.correct; q.answer_text = x.answer_text; }
    }
  }
  return NextResponse.json({ state: s, q, now: Date.now(), admin });
}

export async function POST(req) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'auth' }, { status: 401 });
  const s = withDefaults(await getState()), b = await req.json(), live = s.timerEnd && Date.now() < s.timerEnd;

  switch (b.action) {
    case 'names':
      s.teams[0].name = b.names[0] || 'Team A';
      s.teams[1].name = b.names[1] || 'Team B';
      break;
    case 'adj':
      s.teams[b.team].score += b.delta;
      break;
    case 'activeTeam':
      s.activeTeam = b.team;
      break;
    case 'round':
      s.round = b.round;
      if (b.subject !== undefined) s.subject = b.subject;
      break;
    case 'settings':
      if (b.wrongRule !== undefined) s.wrongRule = b.wrongRule;
      if (b.autoAdvance !== undefined) s.autoAdvance = b.autoAdvance;
      if (b.autoAdvanceSecs !== undefined) s.autoAdvanceSecs = b.autoAdvanceSecs;
      break;
    case 'idle':
      s.view = 'idle';
      s.qid = null;
      s.timerEnd = null;
      s.lastAnswer = null;
      break;
    case 'subject':
      s.subject = b.subject;
      s.round = 2;
      s.view = 'subject';
      s.qid = null;
      s.lastAnswer = null;
      break;
    case 'show':
      s.qid = b.id;
      s.revealed = false;
      s.timerEnd = null;
      s.view = 'question';
      s.lastAnswer = null;
      if (b.team !== undefined) s.activeTeam = b.team;
      break;
    case 'timer':
      s.timerEnd = Date.now() + b.seconds * 1000;
      break;
    case 'reveal':
      s.revealed = true;
      s.timerEnd = null;
      break;
    case 'answer': {
      // Option selected (0, 1, 2, 3) by touch or keyboard
      const optIndex = +b.option;
      const team = b.team !== undefined ? +b.team : (s.activeTeam ?? 0);
      const opponent = 1 - team;
      const rule = b.wrongRule || s.wrongRule || 'opponent_5';

      let isCorrect = false;
      if (s.qid) {
        const [rq] = await pool.query('SELECT correct FROM questions WHERE id=?', [s.qid]);
        isCorrect = rq[0]?.correct === optIndex;
        if (!s.used.includes(s.qid)) s.used.push(s.qid);
      }

      if (isCorrect) {
        const pts = b.correctPoints ?? 10;
        s.teams[team].score += pts;
        s.lastAnswer = {
          option: optIndex,
          correct: true,
          team,
          awardedTeam: team,
          points: pts,
          text: `Correct! +${pts} pts to ${s.teams[team].name}`,
        };
      } else {
        if (rule === 'opponent_5') {
          s.teams[opponent].score += 5;
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team,
            awardedTeam: opponent,
            points: 5,
            text: `Wrong! +5 pts bonus to ${s.teams[opponent].name}`,
          };
        } else if (rule === 'opponent_10') {
          s.teams[opponent].score += 10;
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team,
            awardedTeam: opponent,
            points: 10,
            text: `Wrong! +10 pts to ${s.teams[opponent].name}`,
          };
        } else if (rule === 'penalty') {
          s.teams[team].score -= 5;
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team,
            awardedTeam: team,
            points: -5,
            text: `Wrong! -5 pts penalty to ${s.teams[team].name}`,
          };
        } else {
          // 'zero'
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team,
            awardedTeam: null,
            points: 0,
            text: `Wrong! No points awarded`,
          };
        }
      }

      s.revealed = true;
      s.timerEnd = null;
      break;
    }
    case 'nextQuestion': {
      const rnd = b.rnd ?? s.round ?? 1;
      const subject = b.subject ?? s.subject ?? null;
      const nextId = await findNextQuestion(rnd, subject, s.used);
      if (nextId) {
        s.qid = nextId;
        s.revealed = false;
        s.timerEnd = null;
        s.view = 'question';
        s.lastAnswer = null;
        if (b.switchTeam !== false) {
          s.activeTeam = 1 - (s.activeTeam ?? 0);
        }
      } else {
        s.qid = null;
        s.view = 'idle';
        s.lastAnswer = null;
      }
      break;
    }
    case 'award':
      if (b.team !== null) s.teams[b.team].score += 10;
      if (s.qid && !s.used.includes(s.qid)) s.used.push(s.qid);
      s.view = 'idle';
      s.qid = null;
      s.lastAnswer = null;
      break;
    case 'rapid':
      s.view = 'rapid';
      s.round = 3;
      s.got = [0, 0];
      s.timerEnd = Date.now() + b.seconds * 1000;
      s.qid = await nextRapid(s);
      s.revealed = false;
      s.lastAnswer = null;
      break;
    case 'rok':
      if (live) {
        s.teams[b.team].score += 5;
        s.got[b.team]++;
        if (!s.used.includes(s.qid)) s.used.push(s.qid);
        s.qid = await nextRapid(s);
      }
      break;
    case 'rpass':
      if (live) {
        if (!s.used.includes(s.qid)) s.used.push(s.qid);
        s.qid = await nextRapid(s);
      }
      break;
    case 'rend':
      s.view = 'rapidEnd';
      s.timerEnd = null;
      s.qid = null;
      s.lastAnswer = null;
      break;
    case 'win':
      s.view = 'winner';
      break;
    case 'theme':
      s.theme = { ...DEF.theme, ...b.theme };
      break;
    case 'music':
      s.music = { ...DEF.music, ...b.music };
      break;
    case 'reset':
      s.teams.forEach((t) => (t.score = 0));
      s.used = [];
      s.view = 'idle';
      s.qid = null;
      s.timerEnd = null;
      s.activeTeam = 0;
      s.lastAnswer = null;
      break;
  }
  await setState(s);
  return NextResponse.json({ ok: true, state: s });
}