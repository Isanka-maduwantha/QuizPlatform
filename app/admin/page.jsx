"use client";
import "./admin.css";
import { useCallback, useEffect, useState, useRef } from "react";
import AdminPanel from "./components/AdminPanel";
import ThemePanel from "./components/ThemePanel";
import ScoringRulesPanel from "./components/ScoringRulesPanel";
import LiveHostDeck from "./components/LiveHostDeck";
import TeamScorePanel from "./components/TeamScorePanel";
import QuestionBankPanel from "./components/QuestionBankPanel";
import {
  GeneralRoundPanel,
  RapidFireSetupPanel,
  SubjectRoundPanel,
} from "./components/QuestionRoundPanels";
import { getThemeVars } from "@/lib/theme";

const post = (url, body, method = "POST") =>
  fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

const blank = { rnd: 1, subject_id: "", text: "", o: ["", "", "", ""], correct: 0, answer_text: "" };
const PANELS = ["live", "teams", "look", "r1", "r2", "r3", "manage"];

const TITLES = {
  live: "⚡ Live Host Deck",
  teams: "🏆 Teams & Scoreboard",
  look: "🎨 Theme Studio & Sound",
  r1: "🌍 Round 1: General Knowledge",
  r2: "🎯 Round 2: Subject Challenge",
  r3: "⚡ Round 3: Rapid Fire",
  manage: "📝 Question Bank & Subjects",
};

const WIDE = { manage: true };
const VIEWS = {
  idle: "Lobby Screen (Scores)",
  subject: "Subject Title Announcement",
  question: "Active Question (Kahoot 4-Grid)",
  rapid: "Rapid Fire Blitz",
  rapidEnd: "Rapid Fire Result",
  winner: "Winner Podium Celebration",
};

export default function Admin() {
  const [d, setD] = useState(null);
  const [qs, setQs] = useState({ questions: [], subjects: [] });
  const [pw, setPw] = useState("");
  const [secs, setSecs] = useState(120);
  const [f, setF] = useState(blank);
  const [sn, setSn] = useState("");
  const [msg, setMsg] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [now, setNow] = useState(Date.now());
  const [order, setOrder] = useState(PANELS);
  const [shut, setShut] = useState({});
  const [drag, setDrag] = useState(null);
  const [draft, setDraft] = useState(null);
  const themeVars = getThemeVars(draft || d?.state?.theme || {});

  // Auto-advance countdown state
  const [autoCountdown, setAutoCountdown] = useState(null);
  const autoTimerRef = useRef(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/state", { cache: "no-store" });
      if (res.ok) setD(await res.json());
    } catch {}
  }, []);

  const loadQ = useCallback(async () => {
    try {
      const r = await fetch("/api/questions");
      if (r.ok) setQs(await r.json());
    } catch {}
  }, []);

  useEffect(() => {
    load();
    loadQ();
    try {
      const o = JSON.parse(localStorage.getItem("adm-order"));
      if (Array.isArray(o) && o.length === PANELS.length && PANELS.every((p) => o.includes(p))) {
        setOrder(o);
      }
      setShut(JSON.parse(localStorage.getItem("adm-shut") || "{}"));
    } catch {}

    const intA = setInterval(load, 1200);
    const intB = setInterval(() => setNow(Date.now()), 400);
    return () => {
      clearInterval(intA);
      clearInterval(intB);
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [load, loadQ]);

  const save = (key, val) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {}
  };

  const saveOrder = (o) => {
    setOrder(o);
    save("adm-order", o);
  };

  const move = (id, dir) => {
    const i = order.indexOf(id),
      j = i + dir;
    if (j < 0 || j >= order.length) return;
    const o = [...order];
    [o[i], o[j]] = [o[j], o[i]];
    saveOrder(o);
  };

  const drop = (target) => {
    if (!drag || drag === target) return;
    const to = order.indexOf(target);
    const o = order.filter((x) => x !== drag);
    o.splice(to, 0, drag);
    saveOrder(o);
    setDrag(null);
  };

  const toggle = (id) => {
    const n = { ...shut, [id]: !shut[id] };
    setShut(n);
    save("adm-shut", n);
  };

  const resetLayout = () => {
    saveOrder(PANELS);
    setShut({});
    save("adm-shut", {});
  };

  const act = async (action, x = {}) => {
    const r = await post("/api/state", { action, ...x });
    if (r.ok) {
      const j = await r.json();
      if (j.state) {
        setD((prevD) => (prevD ? { ...prevD, state: j.state } : null));
      }
    }
    load();
    return r.ok;
  };

  const login = async () => {
    const r = await post("/api/login", { password: pw });
    setMsg(r.ok ? "" : "Invalid password. Check .env.local");
    load();
    loadQ();
  };

  const s = d?.state;
  const T = s?.teams || [{ name: "Team A", score: 0 }, { name: "Team B", score: 0 }];
  const q = d?.q;
  const activeTeamIdx = s?.activeTeam ?? 0;
  const activeTeam = T[activeTeamIdx];
  const directTeamIdx = s?.directTeam !== undefined ? s.directTeam : activeTeamIdx;
  const directTeam = T[directTeamIdx];
  const turnPhase = s?.turnPhase || "member1";
  const eliminated = Array.isArray(s?.eliminatedOptions) ? s.eliminatedOptions : [];
  const activeRound = s?.round ?? 1;
  const activeSubject = s?.subject;
  const scoringRules = s?.scoringRules || {
    correctPoints: 10,
    wrongAction: "standard",
    wrongPenalty: 0,
    passBonus: 5,
    rapidFirePoints: 5,
  };
  const autoAdvance = s?.autoAdvance ?? true;
  const autoAdvanceSecs = s?.autoAdvanceSecs ?? 3;

  // Clear countdown timer when question changes
  useEffect(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setAutoCountdown(null);
  }, [s?.qid, s?.revealed]);

  // Handle answering option (by Touch or Keyboard A, B, C, D)
  const submitAnswer = useCallback(
    async (optIndex) => {
      if (!s || !s.qid || s.revealed) return;
      if (s.eliminatedOptions?.includes(optIndex)) return;

      const res = await post("/api/state", {
        action: "answer",
        option: optIndex,
        team: activeTeamIdx,
      });

      if (res.ok) {
        const j = await res.json();
        if (j.state) {
          setD((prevD) => (prevD ? { ...prevD, state: j.state } : null));

          // If answer was evaluated as final (revealed = true), start auto-advance countdown if enabled
          if (j.state.revealed && autoAdvance) {
            let sec = autoAdvanceSecs;
            setAutoCountdown(sec);
            if (autoTimerRef.current) clearInterval(autoTimerRef.current);

            autoTimerRef.current = setInterval(() => {
              sec -= 1;
              if (sec <= 0) {
                clearInterval(autoTimerRef.current);
                autoTimerRef.current = null;
                setAutoCountdown(null);
                act("nextQuestion", {
                  rnd: activeRound,
                  subject: activeSubject,
                  switchTeam: true,
                });
              } else {
                setAutoCountdown(sec);
              }
            }, 1000);
          } else if (!j.state.revealed) {
            // Not revealed! Chances remain (another member or opposite team)
            if (autoTimerRef.current) {
              clearInterval(autoTimerRef.current);
              autoTimerRef.current = null;
            }
            setAutoCountdown(null);
          }
        }
      }
      load();
    },
    [s, activeTeamIdx, autoAdvance, autoAdvanceSecs, activeRound, activeSubject, act, load]
  );

  // Skip countdown and immediately advance
  const skipToNextQuestion = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setAutoCountdown(null);
    act("nextQuestion", {
      rnd: activeRound,
      subject: activeSubject,
      switchTeam: true,
    });
  }, [activeRound, activeSubject, act]);

  // Keyboard shortcuts listener for live host desk
  useEffect(() => {
    if (!d || !d.admin) return;
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;

      const state = d.state;

      // A, B, C, D Answer Keys
      if (state.view === "question" && state.qid && !state.revealed) {
        const key = e.key.toLowerCase();
        if ((key === "a" || key === "1") && !state.eliminatedOptions?.includes(0)) {
          e.preventDefault();
          submitAnswer(0);
          return;
        }
        if ((key === "b" || key === "2") && !state.eliminatedOptions?.includes(1)) {
          e.preventDefault();
          submitAnswer(1);
          return;
        }
        if ((key === "c" || key === "3") && !state.eliminatedOptions?.includes(2)) {
          e.preventDefault();
          submitAnswer(2);
          return;
        }
        if ((key === "d" || key === "4") && !state.eliminatedOptions?.includes(3)) {
          e.preventDefault();
          submitAnswer(3);
          return;
        }
        if (key === "p") {
          e.preventDefault();
          act("passTurn");
          return;
        }
      }

      // Space: Reveal or Skip Countdown
      if (e.code === "Space") {
        e.preventDefault();
        if (state.view === "question") {
          if (!state.revealed) {
            act("reveal");
          } else {
            skipToNextQuestion();
          }
        }
      }
      // T: Start 30s Timer
      else if (e.key === "t" || e.key === "T") {
        if (state.view === "question") {
          act("timer", { seconds: 30 });
        }
      }
      // Tab: Switch Participating School
      else if (e.key === "Tab") {
        e.preventDefault();
        act("activeTeam", { team: 1 - activeTeamIdx });
      }
      // Escape: Return to Lobby
      else if (e.key === "Escape") {
        act("idle");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [d, activeTeamIdx, submitAnswer, skipToNextQuestion, act]);

  if (!d) {
    return (
      <main className="ad" style={themeVars}>
        <div className="wrap" style={{ textAlign: "center", padding: "100px 20px" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
          <h2>Loading Host Studio...</h2>
        </div>
      </main>
    );
  }

  if (!d.admin) {
    return (
      <main className="ad" style={themeVars}>
        <div className="wrap" style={{ maxWidth: 440, margin: "80px auto" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🔒</div>
            <h1 style={{ fontSize: 26, marginBottom: 8 }}>MindSpark Admin</h1>
            <p className="mut" style={{ marginBottom: 20 }}>
              Enter admin password to access host control console.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="password"
                placeholder="Admin Password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
              />
              <button className="btn" onClick={login}>
                Log in to Host Studio
              </button>
              {msg && <span style={{ color: "var(--danger)", fontSize: 14 }}>{msg}</span>}
            </div>
          </div>
        </div>
      </main>
    );
  }

  const got = Array.isArray(s.got) ? s.got : [0, 0];
  const left = s.timerEnd
    ? Math.max(0, Math.ceil((s.timerEnd - (now + (d.now - Date.now()))) / 1000))
    : null;
  const byRnd = (r, sub) =>
    qs.questions
      .filter((x) => x.rnd === r && (!sub || x.subject === sub))
      .filter((x) => !searchFilter || x.text.toLowerCase().includes(searchFilter.toLowerCase()));
  const used = (id) => s.used.includes(id);
  const th = draft || s.theme || {};
  const mu = s.music || { on: false, volume: 0.4, sfx: true };
  const setVol = (v) =>
    act("music", { music: { ...mu, volume: Math.min(1, Math.max(0, +v.toFixed(1))) } });

  const remainingQuestions = qs.questions.filter((x) => {
    if (activeRound === 1) return x.rnd === 1 && !used(x.id);
    if (activeRound === 2) return x.rnd === 2 && (!activeSubject || x.subject === activeSubject) && !used(x.id);
    return x.rnd === 3 && !used(x.id);
  }).length;

  const addQuestion = async () => {
    const r = await post("/api/questions", {
      rnd: +f.rnd,
      subject_id: f.subject_id ? +f.subject_id : null,
      text: f.text,
      options: f.o,
      correct: +f.correct,
      answer_text: f.answer_text,
    });
    if (r.ok) {
      setF({ ...blank, rnd: f.rnd, subject_id: f.subject_id });
      setMsg("✓ Question added successfully!");
      loadQ();
    } else {
      setMsg("Please check the fields. All fields required.");
    }
  };

  const del = async (id, kind = "question") => {
    if (confirm(`Delete this ${kind}?`)) {
      await post("/api/questions", { id, kind }, "DELETE");
      loadQ();
    }
  };

  const BODIES = {
    live: (
      <LiveHostDeck
        state={s}
        question={q}
        teams={T}
        subjects={qs.subjects}
        activeTeamIndex={activeTeamIdx}
        activeTeam={activeTeam}
        directTeamIndex={directTeamIdx}
        directTeam={directTeam}
        turnPhase={turnPhase}
        round={activeRound}
        subject={activeSubject}
        remainingQuestions={remainingQuestions}
        seconds={secs}
        setSeconds={setSecs}
        secondsLeft={left}
        correctCounts={got}
        scoringRules={scoringRules}
        autoAdvance={autoAdvance}
        autoCountdown={autoCountdown}
        viewLabels={VIEWS}
        onAction={act}
        onAnswer={submitAnswer}
        onNextQuestion={skipToNextQuestion}
        onSkipCountdown={skipToNextQuestion}
      />
    ),
    teams: <TeamScorePanel teams={T} onAction={act} />,
    look: (
      <ThemePanel
        theme={th}
        draft={draft}
        setDraft={setDraft}
        teams={T}
        music={mu}
        onAction={act}
        onVolumeChange={setVol}
      />
    ),
    r1: (
      <GeneralRoundPanel
        questions={qs.questions}
        filter={searchFilter}
        onFilterChange={setSearchFilter}
        isUsed={used}
        onShowQuestion={(id) => act("show", { id, team: activeTeamIdx })}
      />
    ),
    r2: (
      <SubjectRoundPanel
        questions={qs.questions}
        subjects={qs.subjects}
        activeSubject={s.subject}
        filter={searchFilter}
        isUsed={used}
        onSelectSubject={(subject) => act("subject", { subject })}
        onShowQuestion={(id) => act("show", { id, team: activeTeamIdx })}
      />
    ),
    r3: (
      <RapidFireSetupPanel
        seconds={secs}
        onSecondsChange={setSecs}
        remainingQuestions={byRnd(3).filter((question) => !used(question.id)).length}
        onLaunch={() => act("rapid", { seconds: secs })}
      />
    ),
    manage: (
      <QuestionBankPanel
        form={f}
        setForm={setF}
        questions={qs.questions}
        subjects={qs.subjects}
        message={msg}
        subjectName={sn}
        setSubjectName={setSn}
        onAddQuestion={addQuestion}
        onAddSubject={async () => {
          if (sn.trim()) {
            await post("/api/questions", { kind: "subject", name: sn.trim() });
            setSn("");
            loadQ();
          }
        }}
        onDelete={del}
      />
    ),
  };

  const renderPanel = (id, panelClass = "", fixed = false) => {
    const i = order.indexOf(id);
    const closed = shut[id];
    const title = TITLES[id];

    return (
      <AdminPanel
        key={id}
        id={id}
        title={title}
        wide={WIDE[id]}
        isDragging={drag === id}
        isClosed={closed}
        orderIndex={i}
        orderLength={order.length}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => drop(id)}
        onDragStart={() => setDrag(id)}
        onDragEnd={() => setDrag(null)}
        onMove={(direction) => move(id, direction)}
        onToggle={() => toggle(id)}
        panelClass={panelClass}
        fixed={fixed}
      >
        {BODIES[id]}
      </AdminPanel>
    );
  };

  const isLiveQuestion = s.view === "question" || s.view === "rapid";

  return (
    <main className="ad" style={themeVars}>
      {/* Keyboard Shortcuts Helper Bar */}
      <div className="kb-cheatsheet">
        <span>⚡ Host Shortcuts:</span>
        <span className="kb-badge"><span className="kb-key">A / B / C / D</span> Select Answer</span>
        <span className="kb-badge"><span className="kb-key">Tab</span> Switch School</span>
        <span className="kb-badge"><span className="kb-key">T</span> 30s Timer</span>
        <span className="kb-badge"><span className="kb-key">Space</span> Reveal / Next</span>
        <span className="kb-badge"><span className="kb-key">Esc</span> Lobby</span>
      </div>

      <header className="ad-top">
        <div className="ad-top-brand">
          <div className="brand-icon" style={{ width: 42, height: 42, fontSize: 22 }}>
            ⚡
          </div>
          <div>
            <h1>MindSpark Host Studio</h1>
            <div style={{ marginTop: 4 }}>
              <span className={`ad-status-pill ${isLiveQuestion ? "on-air" : ""}`}>
                {isLiveQuestion ? "● ON AIR" : "● STANDBY"}: {VIEWS[s.view] || s.view}
              </span>
            </div>
          </div>
        </div>

        <div className="ad-score">
          <div className={`pill a ${activeTeamIdx === 0 && isLiveQuestion ? "active-pill" : ""}`}>
            <span>{T[0].name}</span>
            <b>{T[0].score}</b>
          </div>
          <div className={`pill b ${activeTeamIdx === 1 && isLiveQuestion ? "active-pill" : ""}`}>
            <span>{T[1].name}</span>
            <b>{T[1].score}</b>
          </div>
        </div>

        <div className="ad-row">
          <a className="btn" href="/display" target="_blank" rel="noreferrer">
            📺 Open Projector Display
          </a>
          <button className="btn ghost" onClick={resetLayout}>
            Reset Layout
          </button>
        </div>
      </header>

      <div className="ad-primary-grid">
        <div className="ad-side-column">
          {renderPanel("look", "ad-theme-panel", true)}
          <ScoringRulesPanel
            rules={scoringRules}
            onSave={(rules) => act("settings", { scoringRules: rules })}
          />
        </div>
        {renderPanel("live", "ad-live-panel", true)}
      </div>
      <div className="ad-grid">
        {order.filter((id) => id !== "look" && id !== "live").map(renderPanel)}
      </div>
    </main>
  );
}