"use client";
import "./admin.css";
import { useCallback, useEffect, useState, useRef } from "react";
import AdminPanel from "./components/AdminPanel";
import QuestionListItem from "./components/QuestionListItem";
import ThemePanel from "./components/ThemePanel";
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

const WIDE = { live: true, manage: true };
const VIEWS = {
  idle: "Lobby Screen (Scores)",
  subject: "Subject Title Announcement",
  question: "Active Question (Kahoot 4-Grid)",
  rapid: "Rapid Fire Blitz",
  rapidEnd: "Rapid Fire Result",
  winner: "Winner Podium Celebration",
};

// Kahoot option styles for Host Deck
const OPT_CONFIG = [
  { letter: "A", shape: "▲", gradient: "linear-gradient(135deg, #E21B3C 0%, #B9142F 100%)" },
  { letter: "B", shape: "◆", gradient: "linear-gradient(135deg, #1368CE 0%, #0F52A4 100%)" },
  { letter: "C", shape: "●", gradient: "linear-gradient(135deg, #D89E00 0%, #AA7D00 100%)" },
  { letter: "D", shape: "■", gradient: "linear-gradient(135deg, #26890C 0%, #1E6C0A 100%)" },
];

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
  const wrongRule = s?.wrongRule || "opponent_5";
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
        wrongRule,
        correctPoints: 10,
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
    [s, activeTeamIdx, wrongRule, autoAdvance, autoAdvanceSecs, activeRound, activeSubject, act, load]
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

  const showItem = (x) => {
    const isUsed = used(x.id);
    return (
      <QuestionListItem
        key={x.id}
        question={x}
        isUsed={isUsed}
        onShow={() => act("show", { id: x.id, team: activeTeamIdx })}
      />
    );
  };

  const BODIES = {
    // ⚡ LIVE HOST DECK
    live: (
      <div className="live-controls-wrap">
        {/* 1. Round Type Selector */}
        <div className="round-selector-bar">
          <div className="round-pills">
            <button
              className={`round-pill-btn ${activeRound === 1 ? "active" : ""}`}
              onClick={() => act("round", { round: 1 })}
            >
              🌍 Round 1: General
            </button>
            <button
              className={`round-pill-btn ${activeRound === 2 ? "active" : ""}`}
              onClick={() => {
                const sub = activeSubject || qs.subjects[0]?.name || "Physics";
                act("round", { round: 2, subject: sub });
              }}
            >
              🎯 Round 2: Subject
            </button>
            <button
              className={`round-pill-btn ${activeRound === 3 ? "active" : ""}`}
              onClick={() => act("round", { round: 3 })}
            >
              ⚡ Round 3: Rapid Fire
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="badge">
              📚 {remainingQuestions} Questions Left
            </span>
            <button
              className="btn"
              style={{ padding: "8px 16px", fontSize: 13 }}
              onClick={() => {
                if (activeRound === 3) {
                  act("rapid", { seconds: secs });
                } else {
                  act("nextQuestion", { rnd: activeRound, subject: activeSubject });
                }
              }}
            >
              {activeRound === 3 ? "Launch Rapid Fire ⚡" : "Next Question ⏩"}
            </button>
          </div>
        </div>

        {/* Round 2 Subject Picker */}
        {activeRound === 2 && (
          <div className="ad-row" style={{ margin: "4px 0" }}>
            <span className="mut" style={{ fontSize: 13, fontWeight: 700 }}>
              Select Subject:
            </span>
            {qs.subjects.map((sub) => (
              <button
                key={sub.id}
                className={`btn ${activeSubject === sub.name ? "sel" : "ghost"}`}
                style={{ padding: "6px 14px", fontSize: 13 }}
                onClick={() => act("round", { round: 2, subject: sub.name })}
              >
                {sub.name}
              </button>
            ))}
          </div>
        )}

        {/* 2. Participating School Turn Selector */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", color: "var(--ink-muted)" }}>
              Select Participating School (Answering Turn) <span style={{ opacity: 0.7 }}>[Press Tab to toggle]</span>
            </span>
          </div>

          <div className="school-cards-grid">
            {T.map((t, idx) => {
              const isActive = activeTeamIdx === idx;
              return (
                <div
                  key={idx}
                  className={`school-card ${isActive ? "active" : ""}`}
                  onClick={() => act("activeTeam", { team: idx })}
                >
                  <div className="school-card-info">
                    <div
                      className="school-card-avatar"
                      style={{ background: idx === 0 ? "var(--a)" : "var(--b)" }}
                    >
                      {idx === 0 ? "A" : "B"}
                    </div>
                    <div className="school-card-details">
                      <span className="school-card-name">{t.name}</span>
                      {isActive ? (
                        <span className="school-card-badge">🎯 Active Turn (Answering)</span>
                      ) : (
                        <span className="mut" style={{ fontSize: 12 }}>Tap to set turn</span>
                      )}
                    </div>
                  </div>
                  <span className="school-card-score">{t.score} pts</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Host Policy & Auto-Advance Settings */}
        <div className="host-policy-bar">
          <div className="host-policy-item">
            <span style={{ fontWeight: 700 }}>If Answer is Wrong:</span>
            <select
              value={wrongRule}
              onChange={(e) => act("settings", { wrongRule: e.target.value })}
              style={{ padding: "4px 8px", fontSize: 13 }}
            >
              <option value="opponent_5">Pass to Opponent (+5 pts bonus)</option>
              <option value="opponent_10">Full marks to Opponent (+10 pts)</option>
              <option value="zero">No points awarded (0 pts)</option>
              <option value="penalty">Penalty to answering team (-5 pts)</option>
            </select>
          </div>

          <div className="host-policy-item">
            <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={autoAdvance}
                onChange={(e) => act("settings", { autoAdvance: e.target.checked })}
              />
              <span style={{ fontWeight: 700 }}>Auto-load next question (3s delay)</span>
            </label>
          </div>
        </div>

        {/* 4. Active Question Preview & Interactive Answer Pad (A, B, C, D) */}
        {s.view === "question" && q ? (
          <div>
            <div className="ad-q-preview">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <span className="badge ok">
                    {q.rnd === 1 ? "Round 1" : `Round 2: ${s.subject}`}
                  </span>
                  {turnPhase === "member1" && (
                    <span
                      className="badge"
                      style={{
                        background: directTeamIdx === 0 ? "var(--a)" : "var(--b)",
                        color: "#FFF",
                      }}
                    >
                      🎯 Direct Turn: {directTeam?.name} (Member 1)
                    </span>
                  )}
                  {turnPhase === "member2" && (
                    <span
                      className="badge"
                      style={{
                        background: directTeamIdx === 0 ? "var(--a)" : "var(--b)",
                        color: "#FFF",
                        border: "2px solid var(--pop)",
                      }}
                    >
                      🔄 2nd Chance: {directTeam?.name} (Another Member)
                    </span>
                  )}
                  {turnPhase === "passed" && (
                    <span
                      className="badge"
                      style={{
                        background: activeTeamIdx === 0 ? "var(--a)" : "var(--b)",
                        color: "#FFF",
                        border: "2px solid var(--pop)",
                      }}
                    >
                      ⚡ Passed Turn: {activeTeam?.name} (Bonus Chance)
                    </span>
                  )}
                </div>

                {left !== null && (
                  <span className="ad-time" style={{ color: left <= 5 ? "var(--danger)" : "var(--pop)" }}>
                    ⏱️ {left}s
                  </span>
                )}
              </div>

              <p className="ad-q">{q.text}</p>

              {/* Host Turn Phase Status Bar */}
              <div className="host-turn-status-banner">
                <div>
                  <span style={{ opacity: 0.8 }}>Current Answering Turn: </span>
                  <span style={{ color: activeTeamIdx === 0 ? "var(--a)" : "var(--b)", fontSize: 16 }}>
                    {activeTeam?.name}
                  </span>
                  <span style={{ marginLeft: 8, fontSize: 12, opacity: 0.7 }}>
                    ({turnPhase === "member1" ? "Member 1 • 10 pts" : turnPhase === "member2" ? "Another Member • 10 pts" : "Opposite Team • Bonus Chance"})
                  </span>
                </div>
                {s.revealed ? (
                  <span className="badge ok">✓ Question Completed</span>
                ) : (
                  <span className="badge">Active Question</span>
                )}
              </div>

              {/* Answer Pad: Touch buttons or Keyboard keys A, B, C, D */}
              <div style={{ marginTop: 14 }}>
                <span style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", color: "var(--ink-muted)" }}>
                  Select Answer by Touch or Keyboard [A, B, C, D]
                </span>

                <div className="answer-touch-pad">
                  {(q.options || []).map((opt, k) => {
                    const isCorrect = k === q.correct;
                    const isEliminated = (s.eliminatedOptions || []).includes(k);
                    const optCfg = OPT_CONFIG[k] || { letter: String.fromCharCode(65 + k), shape: "●", gradient: "var(--card)" };
                    const isRevealed = s.revealed;

                    return (
                      <button
                        key={k}
                        className={`ans-btn ${isRevealed && isCorrect ? "is-correct" : ""} ${isEliminated ? "is-wrong" : ""}`}
                        style={{
                          background: optCfg.gradient,
                          opacity: isEliminated ? 0.35 : (isRevealed && !isCorrect ? 0.35 : 1),
                        }}
                        onClick={() => submitAnswer(k)}
                        disabled={isRevealed || isEliminated}
                      >
                        <div className="ans-key-badge">
                          <span>{optCfg.shape}</span>
                          <span style={{ fontSize: 11, marginLeft: 2 }}>{optCfg.letter}</span>
                        </div>
                        <span className="ans-text">{opt}</span>
                        {isEliminated && (
                          <span className="ans-wrong-hint">
                            ❌ FALSE
                          </span>
                        )}
                        {isCorrect && !isEliminated && (
                          <span className="ans-correct-hint">
                            ✓ CORRECT {isRevealed ? "" : "(Host Hint)"}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Auto Advance Countdown Bar if triggered */}
              {autoCountdown !== null && (
                <div className="auto-advance-bar">
                  <div className="auto-advance-text">
                    <span>⏱️</span>
                    <span>
                      Answer evaluated! Loading next question for {T[1 - activeTeamIdx]?.name} in {autoCountdown}s...
                    </span>
                  </div>
                  <button className="btn" style={{ padding: "6px 14px", fontSize: 13 }} onClick={skipToNextQuestion}>
                    Skip Countdown & Load Now ⏭️
                  </button>
                </div>
              )}
            </div>

            {/* Quick Actions Row */}
            <div className="ad-row">
              <button className="btn" onClick={() => act("timer", { seconds: 30 })}>
                ⏱️ Start 30s Timer [T]
              </button>
              <button className="btn ghost" onClick={() => act("timer", { seconds: 15 })}>
                15s Timer
              </button>
              {!s.revealed ? (
                <>
                  <button
                    className="btn ghost"
                    style={{ borderColor: "var(--pop)", color: "var(--pop)" }}
                    onClick={() => act("passTurn")}
                    title="Pass to next chance/member or opposite team"
                  >
                    {turnPhase === "member1" && activeRound === 1
                      ? "🔄 Pass to Member 2 [P]"
                      : turnPhase === "member2" || activeRound === 2
                      ? "⚡ Pass to Opposite Team [P]"
                      : "❌ No Answer / End Turn [P]"}
                  </button>
                  {s.eliminatedOptions && s.eliminatedOptions.length > 0 && (
                    <button
                      className="btn ghost"
                      onClick={() => act("resetChances")}
                      title="Clear wrong answers and reset to Member 1"
                    >
                      ↺ Reset Chances
                    </button>
                  )}
                  <button className="btn ok" onClick={() => act("reveal")} style={{ marginLeft: "auto" }}>
                    💡 Reveal Answer Only [Space]
                  </button>
                </>
              ) : (
                <button className="btn" onClick={skipToNextQuestion} style={{ marginLeft: "auto" }}>
                  Next Question ⏭️ [Space]
                </button>
              )}
            </div>
          </div>
        ) : s.view === "rapid" ? (
          <div>
            <div className="ad-row">
              <span className="ad-time" style={{ fontSize: 36 }}>
                ⏱️ {left ?? 0}s
              </span>
              <span className="badge">
                {T[0].name}: {got[0]} correct | {T[1].name}: {got[1]} correct
              </span>
            </div>
            <div className="ad-q-preview">
              <p className="ad-q">{q ? q.text : "No more questions in this round"}</p>
              <p style={{ fontSize: 18, color: "var(--ok)", fontWeight: 800 }}>
                Answer: {q?.answer_text}
              </p>
            </div>
            <div className="ad-row">
              <button className="btn ta" onClick={() => act("rok", { team: 0 })}>
                ✓ {T[0].name} +5 [1]
              </button>
              <button className="btn tb" onClick={() => act("rok", { team: 1 })}>
                ✓ {T[1].name} +5 [2]
              </button>
              <button className="btn" onClick={() => act("rpass")}>
                Pass [0]
              </button>
              <button className="btn danger" onClick={() => act("rend")} style={{ marginLeft: "auto" }}>
                End Rapid Fire
              </button>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "24px 16px" }}>
            <p className="mut" style={{ fontSize: 16, marginBottom: 14 }}>
              Current Display Screen: <b>{VIEWS[s.view] || s.view}</b>
            </p>
            <p className="mut" style={{ fontSize: 14, marginBottom: 18 }}>
              Select a round and school above, then click <b>"Next Question ⏩"</b> to display the first question on screen!
            </p>
            <button
              className="btn"
              onClick={() => act("nextQuestion", { rnd: activeRound, subject: activeSubject })}
            >
              Launch First Question ⏩
            </button>
          </div>
        )}
      </div>
    ),

    // TEAMS & SCORES
    teams: (
      <>
        {T.map((t, i) => (
          <div className="ad-team" key={i}>
            <input
              defaultValue={t.name}
              onBlur={(e) =>
                act("names", {
                  names: [i === 0 ? e.target.value : T[0].name, i === 1 ? e.target.value : T[1].name],
                })
              }
              aria-label={`Team ${i + 1} Name`}
            />
            <strong>{t.score}</strong>
            <button className="btn ghost" onClick={() => act("adj", { team: i, delta: 10 })}>
              +10
            </button>
            <button className="btn ghost" onClick={() => act("adj", { team: i, delta: 5 })}>
              +5
            </button>
            <button className="btn ghost" onClick={() => act("adj", { team: i, delta: -5 })}>
              −5
            </button>
          </div>
        ))}
        <div className="ad-row" style={{ marginTop: 18 }}>
          <button className="btn ghost" onClick={() => act("idle")}>
            📺 Show Lobby / Scores
          </button>
          <button className="btn" onClick={() => act("win")}>
            🏆 Show Winner Podium
          </button>
          <button
            className="btn ghost danger"
            onClick={() => confirm("Reset all scores and question history?") && act("reset")}
            style={{ marginLeft: "auto" }}
          >
            Reset Match
          </button>
        </div>
      </>
    ),

    // THEME STUDIO & SOUND
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

    // ROUND 1: GENERAL KNOWLEDGE
    r1: (
      <div>
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Search Round 1 questions..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div className="ad-list">{byRnd(1).map(showItem)}</div>
      </div>
    ),

    // ROUND 2: SUBJECT CHALLENGE
    r2: (
      <>
        <div className="ad-row">
          {qs.subjects.map((x) => (
            <button
              key={x.id}
              className={`btn ${s.subject === x.name ? "sel" : "ghost"}`}
              onClick={() => act("subject", { subject: x.name })}
            >
              🎯 {x.name}
            </button>
          ))}
        </div>
        <div className="ad-list">
          {s.subject ? (
            byRnd(2, s.subject).map(showItem)
          ) : (
            <p className="mut" style={{ padding: 12 }}>
              Select a subject above to display on screen and show questions.
            </p>
          )}
        </div>
      </>
    ),

    // ROUND 3: RAPID FIRE
    r3: (
      <>
        <div className="ad-row">
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            Timer Seconds:
            <input
              type="number"
              min="10"
              value={secs}
              onChange={(e) => setSecs(+e.target.value || 120)}
              style={{ width: 90 }}
            />
          </label>
          <button className="btn" onClick={() => act("rapid", { seconds: secs })}>
            ⚡ Launch Rapid Fire
          </button>
        </div>
        <div style={{ marginTop: 12 }}>
          <span className="mut">
            {byRnd(3).filter((x) => !used(x.id)).length} unasked rapid fire questions remaining
          </span>
        </div>
      </>
    ),

    // QUESTION BANK & SUBJECTS
    manage: (
      <>
        <div className="ad-form">
          <select value={f.rnd} onChange={(e) => setF({ ...f, rnd: +e.target.value })}>
            <option value={1}>Round 1: General Knowledge</option>
            <option value={2}>Round 2: Subject Challenge</option>
            <option value={3}>Round 3: Rapid Fire</option>
          </select>

          {f.rnd === 2 ? (
            <select
              value={f.subject_id}
              onChange={(e) => setF({ ...f, subject_id: e.target.value })}
            >
              <option value="">Select Subject</option>
              {qs.subjects.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              ))}
            </select>
          ) : (
            <div />
          )}

          <input
            className="full"
            placeholder="Question Text (Supports Sinhala, English, Unicode)"
            value={f.text}
            onChange={(e) => setF({ ...f, text: e.target.value })}
          />

          {f.rnd === 3 ? (
            <input
              className="full"
              placeholder="Correct Answer Text"
              value={f.answer_text}
              onChange={(e) => setF({ ...f, answer_text: e.target.value })}
            />
          ) : (
            <>
              {f.o.map((o, k) => (
                <input
                  key={k}
                  placeholder={`Option ${"ABCD"[k]}`}
                  value={o}
                  onChange={(e) =>
                    setF({ ...f, o: f.o.map((y, j) => (j === k ? e.target.value : y)) })
                  }
                />
              ))}
              <select
                className="full"
                value={f.correct}
                onChange={(e) => setF({ ...f, correct: +e.target.value })}
              >
                {"ABCD".split("").map((c, k) => (
                  <option key={c} value={k}>
                    Correct Option: {c}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        <div className="ad-row" style={{ marginTop: 14 }}>
          <button className="btn" onClick={addQuestion}>
            + Add Question to Bank
          </button>
          {msg && <span style={{ color: "var(--pop)", fontWeight: 700 }}>{msg}</span>}
        </div>

        <div className="ad-row" style={{ marginTop: 20 }}>
          <input
            placeholder="New Subject Name (e.g. History)"
            value={sn}
            onChange={(e) => setSn(e.target.value)}
          />
          <button
            className="btn ghost"
            onClick={async () => {
              if (sn.trim()) {
                await post("/api/questions", { kind: "subject", name: sn.trim() });
                setSn("");
                loadQ();
              }
            }}
          >
            + Add Subject
          </button>
        </div>

        <div className="ad-cols">
          <div>
            <h3>Active Subjects ({qs.subjects.length})</h3>
            <div className="ad-list">
              {qs.subjects.map((x) => (
                <div className="ad-item" key={x.id}>
                  <span>{x.name}</span>
                  <button className="btn ghost danger" onClick={() => del(x.id, "subject")}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>All Questions ({qs.questions.length})</h3>
            <div className="ad-list">
              {qs.questions.map((x) => (
                <div className="ad-item" key={x.id}>
                  <span>
                    <b>R{x.rnd}</b> {x.subject ? `[${x.subject}] ` : ""}
                    {x.text}
                  </span>
                  <button className="btn ghost danger" onClick={() => del(x.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    ),
  };

  const renderPanel = (id) => {
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

      <div className="ad-grid">{order.map(renderPanel)}</div>
    </main>
  );
}