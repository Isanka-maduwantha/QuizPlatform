import { NextResponse } from 'next/server';
import { pool, getState, setState } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { DEFAULT_THEME } from '@/lib/theme';
export const dynamic = 'force-dynamic';

const DEF = {
  theme: DEFAULT_THEME,
  music: { on: false, volume: 0.4, sfx: true },
};

const DEFAULT_SCORING_RULES = {
  correctPoints: 10,
  secondChancePoints: 5,
  wrongAction: 'standard',
  wrongPenalty: 0,
  passBonus: 5,
  rapidFirePoints: 5,
};


const WRONG_ACTIONS = new Set(['standard', 'opponent', 'reveal']);
const POINT_LIMIT = 10000;

function pointsOrDefault(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed)
    ? Math.min(POINT_LIMIT, Math.max(0, Math.round(parsed)))
    : fallback;
}

function legacyScoringRules(wrongRule) {
  if (wrongRule === 'opponent_10') return { ...DEFAULT_SCORING_RULES, passBonus: 10 };
  if (wrongRule === 'zero') return { ...DEFAULT_SCORING_RULES, passBonus: 0 };
  if (wrongRule === 'penalty') {
    return { ...DEFAULT_SCORING_RULES, wrongPenalty: 5 };
  }
  return DEFAULT_SCORING_RULES;
}
function normalizeScoringRules(candidate, fallback = DEFAULT_SCORING_RULES) {
  const rules =
    candidate && typeof candidate === 'object' && !Array.isArray(candidate)
      ? candidate
      : {};

  return {
    correctPoints: pointsOrDefault(
      rules.correctPoints,
      fallback.correctPoints
    ),

    secondChancePoints: pointsOrDefault(
      rules.secondChancePoints,
      fallback.secondChancePoints ?? DEFAULT_SCORING_RULES.secondChancePoints
    ),

    wrongAction: WRONG_ACTIONS.has(rules.wrongAction)
      ? rules.wrongAction
      : fallback.wrongAction,

    wrongPenalty: pointsOrDefault(
      rules.wrongPenalty,
      fallback.wrongPenalty
    ),

    passBonus: pointsOrDefault(
      rules.passBonus,
      fallback.passBonus
    ),

    rapidFirePoints: pointsOrDefault(
      rules.rapidFirePoints,
      fallback.rapidFirePoints
    ),
  };
}

const withDefaults = (s) => {
  const savedTheme = s?.theme || {};
  const hasLegacyDefault =
    savedTheme.bg === '#0D0A1A' &&
    savedTheme.card === '#181230' &&
    savedTheme.ink === '#F5F3FF' &&
    savedTheme.a === '#0284C7' &&
    savedTheme.b === '#EC4899' &&
    savedTheme.pop === '#FACC15';

  return {
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
    theme: { ...DEF.theme, ...(hasLegacyDefault ? {} : savedTheme) },
    music: { ...DEF.music, ...(s?.music || {}) },
    scoringRules: normalizeScoringRules(
      s?.scoringRules || legacyScoringRules(s?.wrongRule),
      DEFAULT_SCORING_RULES
    ),
    rapidSeconds: Number(s?.rapidSeconds) > 0 ? Number(s?.rapidSeconds) : 10,
    rapidManualTimer: s?.rapidManualTimer !== undefined ? Boolean(s.rapidManualTimer) : true,
  };
};

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
      if (b.scoringRules !== undefined) {
        s.scoringRules = normalizeScoringRules(
          { ...s.scoringRules, ...b.scoringRules },
          s.scoringRules
        );
      } else if (b.wrongRule !== undefined) {
        s.scoringRules = normalizeScoringRules(
          legacyScoringRules(b.wrongRule),
          s.scoringRules
        );
      }
      if (b.autoAdvance !== undefined) s.autoAdvance = b.autoAdvance;
      if (b.autoAdvanceSecs !== undefined) s.autoAdvanceSecs = b.autoAdvanceSecs;
      if (b.rapidSeconds !== undefined) s.rapidSeconds = Number(b.rapidSeconds) > 0 ? Number(b.rapidSeconds) : 10;
      if (b.rapidManualTimer !== undefined) s.rapidManualTimer = Boolean(b.rapidManualTimer);
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
      s.timerEnd = b.seconds > 0 ? Date.now() + b.seconds * 1000 : null;
      if (s.view === 'rapid') s.revealed = false;
      break;
    case 'reveal':
    case 'rreveal':
      s.revealed = true;
      s.timerEnd = null;
      s.turnPhase = 'completed';
      if (s.qid && !s.used.includes(s.qid)) s.used.push(s.qid);
      break;
    case 'rhide':
      s.revealed = false;
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
      const rules = s.scoringRules;
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

        const pts =
          currentPhase === 'passed'
            ? rules.passBonus
            : currentPhase === 'member2'
              ? rules.secondChancePoints
              : rules.correctPoints;

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
        if (rules.wrongPenalty > 0) {
          s.teams[team].score -= rules.wrongPenalty;
        }

        if (rules.wrongAction === 'reveal' ||
          (rules.wrongAction === 'opponent' && currentPhase === 'passed')) {
          s.revealed = true;
          s.turnPhase = 'completed';
          if (!s.used.includes(s.qid)) s.used.push(s.qid);
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team,
            awardedTeam: null,
            points: -rules.wrongPenalty,
            phase: 'completed',
            text: rules.wrongPenalty > 0
              ? `Wrong! −${rules.wrongPenalty} pts. Correct answer revealed.`
              : `Wrong! No points awarded. Correct answer revealed.`,
          };
        } else if (rules.wrongAction === 'opponent') {
          s.revealed = false;
          s.turnPhase = 'passed';
          s.activeTeam = oppTeam;
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team,
            awardedTeam: null,
            points: -rules.wrongPenalty,
            phase: 'passed',
            text: rules.wrongPenalty > 0
              ? `Wrong! −${rules.wrongPenalty} pts. Chance passes to ${s.teams[oppTeam].name}.`
              : `Wrong! Chance passes to ${s.teams[oppTeam].name}.`,
          };
        } else if (round === 1 && currentPhase === 'member1') {
          // General round: chance goes back to another member of the same team
          s.revealed = false;
          s.turnPhase = 'member2';
          s.activeTeam = directTeam;
          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team: directTeam,
            awardedTeam: null,
            points: -rules.wrongPenalty,
            phase: 'member2',
            text: rules.wrongPenalty > 0
              ? `Wrong! −${rules.wrongPenalty} pts. Chance goes back to another member of ${s.teams[directTeam].name}.`
              : `Wrong! Chance goes back to another member of ${s.teams[directTeam].name}`,
          };
        } else if ((round === 1 && currentPhase === 'member2') || (round === 2 && currentPhase === 'member1')) {
          // General round 2nd member wrong OR Round 2 1st attempt wrong -> go to opposite team
          s.revealed = false;
          s.turnPhase = 'passed';
          s.activeTeam = oppTeam;

          s.lastAnswer = {
            option: optIndex,
            correct: false,
            team: directTeam,
            awardedTeam: null,
            points: -rules.wrongPenalty,
            phase: 'passed',
            text: rules.wrongPenalty > 0
              ? `Wrong! −${rules.wrongPenalty} pts. Chance passes to opposite team: ${s.teams[oppTeam].name}`
              : `Wrong! Chance passes to opposite team: ${s.teams[oppTeam].name}`,
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
            points: -rules.wrongPenalty,
            phase: 'completed',
            text: rules.wrongPenalty > 0
              ? `Wrong! −${rules.wrongPenalty} pts. Correct answer revealed.`
              : `Wrong! No points awarded. Correct answer revealed.`,
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
    case 'rapid': {
      s.view = 'rapid';
      s.round = 3;
      s.got = [0, 0];
      const perQ = Number(b.seconds) > 0 ? Number(b.seconds) : (s.rapidSeconds || 10);
      s.rapidSeconds = perQ;
      if (b.rapidManualTimer !== undefined) s.rapidManualTimer = Boolean(b.rapidManualTimer);
      s.qid = await nextRapid(s);
      s.timerEnd = s.qid && !s.rapidManualTimer ? Date.now() + perQ * 1000 : null;
      s.revealed = false;
      s.lastAnswer = null;
      break;
    }
    case 'rok': {
      if (s.view === 'rapid' && s.qid) {
        s.teams[b.team].score += s.scoringRules.rapidFirePoints;
        s.got[b.team]++;
        if (!s.used.includes(s.qid)) s.used.push(s.qid);
        s.qid = await nextRapid(s);
        s.revealed = false;
        if (s.qid) {
          const perQ = s.rapidSeconds || 10;
          s.timerEnd = !s.rapidManualTimer ? Date.now() + perQ * 1000 : null;
        } else {
          s.timerEnd = null;
          s.view = 'rapidEnd';
        }
      }
      break;
    }
    case 'rpass': {
      if (s.view === 'rapid' && s.qid) {
        if (!s.used.includes(s.qid)) s.used.push(s.qid);
        s.qid = await nextRapid(s);
        s.revealed = false;
        if (s.qid) {
          const perQ = s.rapidSeconds || 10;
          s.timerEnd = !s.rapidManualTimer ? Date.now() + perQ * 1000 : null;
        } else {
          s.timerEnd = null;
          s.view = 'rapidEnd';
        }
      }
      break;
    }
    case 'rend':
      s.view = 'rapidEnd';
      s.timerEnd = null;
      s.qid = null;
      s.lastAnswer = null;
      s.revealed = false;
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