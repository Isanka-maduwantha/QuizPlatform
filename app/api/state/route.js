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
  directTeam: 0,
  turnPhase: 'member1',
  eliminatedOptions: [],
  round: 1,
  wrongRule: 'opponent_5',
  autoAdvance: true,
  autoAdvanceSecs: 3,
  lastAnswer: null,
  ...s,
  eliminatedOptions: Array.isArray(s?.eliminatedOptions) ? s.eliminatedOptions : [],
  turnPhase: s?.turnPhase || 'member1',
  directTeam: s?.directTeam !== undefined ? s.directTeam : (s?.activeTeam ?? 0),
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
      s.activeTeam = +b.team;
      if (b.setDirect !== false && (!s.qid || s.turnPhase === 'member1')) {
        s.directTeam = +b.team;
      }
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
      s.eliminatedOptions = [];
      s.turnPhase = 'member1';
      break;
    case 'subject':
      s.subject = b.subject;
      s.round = 2;
      s.view = 'subject';
      s.qid = null;
      s.lastAnswer = null;
      s.eliminatedOptions = [];
      s.turnPhase = 'member1';
      break;
    case 'show':
      s.qid = b.id;
      s.revealed = false;
      s.timerEnd = null;
      s.view = 'question';
      s.lastAnswer = null;
      s.eliminatedOptions = [];
      s.turnPhase = 'member1';
      if (b.team !== undefined) {
        s.directTeam = +b.team;
        s.activeTeam = +b.team;
      } else {
        s.directTeam = s.activeTeam ?? 0;
      }
      break;
    case 'timer':
      s.timerEnd = Date.now() + b.seconds * 1000;
      break;
    case 'reveal':
      s.revealed = true;
      s.timerEnd = null;
      s.turnPhase = 'completed';
      if (s.qid && !s.used.includes(s.qid)) s.used.push(s.qid);
      break;
    case 'resetChances':
      s.eliminatedOptions = [];
      s.turnPhase = 'member1';
      s.activeTeam = s.directTeam ?? 0;
      s.revealed = false;
      s.lastAnswer = null;
      s.timerEnd = null;
      break;
    case 'passTurn': {
      if (s.view === 'question' && s.qid && !s.revealed) {
        const round = +s.round || 1;
        const currentPhase = s.turnPhase || 'member1';
        const directTeam = s.directTeam !== undefined ? s.directTeam : (s.activeTeam ?? 0);
        const oppTeam = 1 - directTeam;

        if (round === 1 && currentPhase === 'member1') {
          s.turnPhase = 'member2';
          s.activeTeam = directTeam;
          s.timerEnd = null;
          s.lastAnswer = {
            option: null,
            correct: false,
            team: directTeam,
            awardedTeam: null,
            points: 0,
            phase: 'member2',
            text: `Passed! Chance goes back to another member of ${s.teams[directTeam].name}`,
          };
        } else if ((round === 1 && currentPhase === 'member2') || (round === 2 && currentPhase === 'member1')) {
          s.turnPhase = 'passed';
          s.activeTeam = oppTeam;
          s.timerEnd = null;
          s.lastAnswer = {
            option: null,
            correct: false,
            team: directTeam,
            awardedTeam: null,
            points: 0,
            phase: 'passed',
            text: `Passed! Chance passes to opposite team: ${s.teams[oppTeam].name}`,
          };
        } else {
          s.revealed = true;
          s.turnPhase = 'completed';
          s.timerEnd = null;
          if (!s.used.includes(s.qid)) s.used.push(s.qid);
          s.lastAnswer = {
            option: null,
            correct: false,
            team: s.activeTeam,
            awardedTeam: null,
            points: 0,
            phase: 'completed',
            text: `No answer given. Correct answer revealed.`,
          };
        }
      }
      break;
    }
    case 'answer': {
      if (!s.qid || s.revealed) break;
      const optIndex = +b.option;
      if (s.eliminatedOptions.includes(optIndex)) break;

      const directTeam = s.directTeam !== undefined ? s.directTeam : (s.activeTeam ?? 0);
      const team = s.activeTeam !== undefined ? s.activeTeam : directTeam;
      const oppTeam = 1 - directTeam;
      const rule = b.wrongRule || s.wrongRule || 'opponent_5';
      const round = +s.round || 1;
      const currentPhase = s.turnPhase || 'member1';

      let isCorrect = false;
      const [rq] = await pool.query('SELECT correct FROM questions WHERE id=?', [s.qid]);
      isCorrect = rq[0]?.correct === optIndex;

      if (isCorrect) {
        if (!s.used.includes(s.qid)) s.used.push(s.qid);
        s.revealed = true;
        s.timerEnd = null;
        s.turnPhase = 'completed';

        let pts = 10;
        if (currentPhase === 'passed') {
          if (rule === 'opponent_10') pts = 10;
          else if (rule === 'zero') pts = 0;
          else pts = 5; // default pass bonus
        } else {
          pts = b.correctPoints ?? 10;
        }

        s.teams[team].score += pts;
        s.lastAnswer = {
          option: optIndex,
          correct: true,
          team,
          awardedTeam: team,
          points: pts,
          phase: currentPhase,
          text: currentPhase === 'passed'
            ? `Correct! +${pts} bonus pts to ${s.teams[team].name}`
            : `Correct! +${pts} pts to ${s.teams[team].name}`,
        };
      } else {
        // FALSE answer
        if (!s.eliminatedOptions.includes(optIndex)) {
          s.eliminatedOptions.push(optIndex);
        }
        s.timerEnd = null;

        if (round === 1 && currentPhase === 'member1') {
          // General round: chance goes back to another member of the same team
          s.revealed = false;
          s.turnPhase = 'member2';
          s.activeTeam = directTeam;
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team: directTeam,
            awardedTeam: null,
            points: 0,
            phase: 'member2',
            text: `Wrong! Chance goes back to another member of ${s.teams[directTeam].name}`,
          };
        } else if ((round === 1 && currentPhase === 'member2') || (round === 2 && currentPhase === 'member1')) {
          // General round 2nd member wrong OR Round 2 1st attempt wrong -> go to opposite team
          s.revealed = false;
          s.turnPhase = 'passed';
          s.activeTeam = oppTeam;

          if (rule === 'penalty') {
            s.teams[directTeam].score -= 5;
          }

          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team: directTeam,
            awardedTeam: null,
            points: 0,
            phase: 'passed',
            text: `Wrong! Chance passes to opposite team: ${s.teams[oppTeam].name}`,
          };
        } else {
          // Opposite team was also false (or all remaining options eliminated)
          s.revealed = true;
          s.turnPhase = 'completed';
          if (!s.used.includes(s.qid)) s.used.push(s.qid);

          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team,
            awardedTeam: null,
            points: 0,
            phase: 'completed',
            text: `Wrong! No points awarded. Correct answer revealed.`,
          };
        }
      }
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
        s.eliminatedOptions = [];
        s.turnPhase = 'member1';
        if (b.switchTeam !== false) {
          s.directTeam = 1 - (s.directTeam ?? s.activeTeam ?? 0);
          s.activeTeam = s.directTeam;
        } else if (b.team !== undefined) {
          s.directTeam = +b.team;
          s.activeTeam = +b.team;
        } else {
          s.directTeam = s.activeTeam ?? 0;
        }
      } else {
        s.qid = null;
        s.view = 'idle';
        s.lastAnswer = null;
        s.eliminatedOptions = [];
        s.turnPhase = 'member1';
      }
      break;
    }
    case 'award':
      if (b.team !== null) s.teams[b.team].score += 10;
      if (s.qid && !s.used.includes(s.qid)) s.used.push(s.qid);
      s.view = 'idle';
      s.qid = null;
      s.lastAnswer = null;
      s.eliminatedOptions = [];
      s.turnPhase = 'member1';
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
      s.directTeam = 0;
      s.turnPhase = 'member1';
      s.eliminatedOptions = [];
      s.lastAnswer = null;
      break;
  }
  await setState(s);
  return NextResponse.json({ ok: true, state: s });
}