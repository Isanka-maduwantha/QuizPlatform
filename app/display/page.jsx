"use client";
import "./display.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { getThemeVars } from "@/lib/theme";
import DisplayHeader from "./components/DisplayHeader";
import DisplayScoreboard from "./components/DisplayScoreboard";

// Format seconds into M:SS or SS
const fmt = (s) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

// Web Audio API Synthesizer
let ctx;
function getAudioContext() {
  if (!ctx && typeof window !== "undefined") {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (ctx && ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

function tone(freq, dur, type = "sine", vol = 0.25, delay = 0) {
  try {
    const c = getAudioContext();
    if (!c) return;
    const o = c.createOscillator();
    const g = c.createGain();
    const t = c.currentTime + delay;

    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    o.connect(g);
    g.connect(c.destination);

    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    o.start(t);
    o.stop(t + dur);
  } catch {}
}

const SFX = {
  tick: (isUrgent) => {
    tone(isUrgent ? 880 : 540, 0.08, "triangle", isUrgent ? 0.35 : 0.2);
  },
  fanfare: () => {
    const notes = [440, 554, 659, 880];
    notes.forEach((f, i) => tone(f, 0.3, "triangle", 0.25, i * 0.1));
  },
  chime: () => {
    tone(523.25, 0.35, "sine", 0.2, 0);
    tone(659.25, 0.35, "sine", 0.2, 0.08);
    tone(783.99, 0.35, "sine", 0.25, 0.16);
    tone(1046.5, 0.6, "sine", 0.3, 0.24);
  },
  buzz: () => {
    tone(130, 0.7, "sawtooth", 0.3);
    tone(115, 0.7, "sawtooth", 0.25, 0.05);
  },
  ding: () => {
    tone(880, 0.2, "sine", 0.3);
    tone(1320, 0.4, "triangle", 0.35, 0.08);
  },
  win: () => {
    const chord1 = [523, 659, 784, 1046];
    const chord2 = [587, 698, 880, 1174];
    const chord3 = [659, 830, 987, 1318];
    const chord4 = [784, 987, 1174, 1568];
    [chord1, chord2, chord3, chord4].forEach((chord, step) => {
      chord.forEach((f) => tone(f, 0.5, "triangle", 0.25, step * 0.22));
    });
  },
};

// Kahoot Iconic Shapes
const SHAPES = [
  { shape: "⬣", letter: "A" },
  { shape: "◆", letter: "B" },
  { shape: "●", letter: "C" },
  { shape: "■", letter: "D" },
];

export default function Display() {
  const [d, setD] = useState(null);
  const [now, setNow] = useState(Date.now());
  const [off, setOff] = useState(0);
  const [armed, setArmed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const au = useRef(null);
  const prev = useRef(null);
  const lastLeft = useRef(null);
  const confettiCanvasRef = useRef(null);
  const confettiAnimId = useRef(null);

  // Confetti Particle Engine
  const fireConfetti = useCallback(() => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const particles = [];
    const colors = ["#E21B3C", "#1368CE", "#D89E00", "#26890C", "#FACC15", "#EC4899", "#A855F7"];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: width * 0.5,
        y: height * 0.45,
        r: Math.random() * 8 + 4,
        dx: (Math.random() - 0.5) * 22,
        dy: (Math.random() - 0.7) * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngle: 0,
        tiltAngleInc: Math.random() * 0.1 + 0.05,
        opacity: 1,
      });
    }

    let start = performance.now();
    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      let alive = false;
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.35; // gravity
        p.dx *= 0.98; // drag
        p.tiltAngle += p.tiltAngleInc;
        p.tilt = Math.sin(p.tiltAngle) * 12;
        p.opacity -= 0.007;

        if (p.opacity > 0 && p.y < height + 50) {
          alive = true;
          ctx.beginPath();
          ctx.lineWidth = p.r;
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
          ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      if (alive && performance.now() - start < 4500) {
        confettiAnimId.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }
    cancelAnimationFrame(confettiAnimId.current);
    confettiAnimId.current = requestAnimationFrame(draw);
  }, []);

  // Poll state from server
  useEffect(() => {
    let on = true;
    const fetchState = async () => {
      try {
        const res = await fetch("/api/state", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (on) {
            setD(json);
            setOff(json.now - Date.now());
          }
        }
      } catch {}
    };

    fetchState();
    const intervalA = setInterval(fetchState, 1000);
    const intervalB = setInterval(() => setNow(Date.now()), 150);

    return () => {
      on = false;
      clearInterval(intervalA);
      clearInterval(intervalB);
      cancelAnimationFrame(confettiAnimId.current);
    };
  }, []);

  const s = d?.state;
  const q = d?.q;
  const left = s?.timerEnd ? Math.max(0, Math.ceil((s.timerEnd - (now + off)) / 1000)) : null;
  const music = s?.music || {};

  // Background audio sync
  useEffect(() => {
    const a = au.current;
    if (!a || !s) return;
    a.volume = Math.min(1, Math.max(0, music.volume ?? 0.4));
    if (armed && music.on) {
      a.play().catch(() => {});
    } else {
      a.pause();
    }
  }, [armed, music.on, music.volume, s]);

  // Audio SFX & Confetti Triggers on state change
  useEffect(() => {
    const p = prev.current;
    prev.current = d;
    if (!d || !p || !armed || !d.state.music?.sfx) return;

    const oldState = p.state;
    const newState = d.state;

    // Check if an answer attempt was made
    const oldAns = oldState.lastAnswer;
    const newAns = newState.lastAnswer;
    const answerSubmitted =
      newAns &&
      (!oldAns ||
        oldAns.option !== newAns.option ||
        oldAns.phase !== newAns.phase ||
        oldAns.correct !== newAns.correct);

    if (answerSubmitted) {
      if (newAns.correct) {
        SFX.chime();
        fireConfetti();
      } else {
        SFX.buzz();
      }
    }
    // Final reveal triggered without new answer object (e.g. host spacebar reveal)
    else if (!oldState.revealed && newState.revealed) {
      SFX.chime();
    }
    // Winner screen
    else if (oldState.view !== "winner" && newState.view === "winner") {
      SFX.win();
      fireConfetti();
    }
    // New Question appeared
    else if (oldState.qid !== newState.qid && newState.qid) {
      SFX.fanfare();
    }
    // Points awarded (manual adjustment)
    else if (
      newState.teams[0].score + newState.teams[1].score >
      oldState.teams[0].score + oldState.teams[1].score
    ) {
      SFX.ding();
    }
  }, [d, armed, fireConfetti]);

  // Timer Tick & Buzzer SFX
  useEffect(() => {
    if (!armed || !music.sfx) return;
    if (lastLeft.current !== null && left !== null && left !== lastLeft.current) {
      if (left > 0 && left <= 10) {
        SFX.tick(left <= 5);
      } else if (lastLeft.current > 0 && left === 0) {
        SFX.buzz();
      }
    }
    lastLeft.current = left;
  }, [left, armed, music.sfx]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!d) {
    return (
      <main className="disp" style={{ display: "grid", placeItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div className="brand-icon" style={{ margin: "0 auto 16px", width: 64, height: 64, fontSize: 32 }}>⚡</div>
          <h2 style={{ fontWeight: 800 }}>Connecting to MindSpark...</h2>
        </div>
      </main>
    );
  }

  const T = s.teams;
  const th = s.theme || {};
  const got = Array.isArray(s.got) ? s.got : [0, 0];
  const isTie = T[0].score === T[1].score;
  const winningTeam = T[0].score > T[1].score ? T[0] : T[1];
  const runnerUpTeam = T[0].score > T[1].score ? T[1] : T[0];
  const activeTeamIdx = s.activeTeam ?? 0;
  const activeTeam = T[activeTeamIdx];
  const directTeamIdx = s.directTeam !== undefined ? s.directTeam : activeTeamIdx;
  const directTeam = T[directTeamIdx];
  const turnPhase = s.turnPhase || "member1";
  const eliminated = Array.isArray(s.eliminatedOptions) ? s.eliminatedOptions : [];

  const vars = getThemeVars(th);

  // Timer circle metrics
  const totalTimerDuration = 30; // standard question timer
  const timerRadius = 32;
  const timerCircumference = 2 * Math.PI * timerRadius;
  const timerOffset = left !== null
    ? timerCircumference - (Math.min(1, left / totalTimerDuration) * timerCircumference)
    : 0;

  return (
    <main className="disp" style={vars}>
      <canvas ref={confettiCanvasRef} className="confetti-canvas" />
      <audio ref={au} src="/sounds/bg.mp3" loop preload="auto" />

      {/* Floating Sound Activation if not armed */}
      {!armed && (
        <button
          className="btn snd-float"
          onClick={() => {
            setArmed(true);
            getAudioContext();
            tone(440, 0.05, "sine", 0.001);
          }}
        >
          <span>🔊</span> Enable Audio & Sound FX
        </button>
      )}

      <DisplayHeader
        isFullscreen={isFullscreen}
        armed={armed}
        onToggleFullscreen={toggleFullscreen}
        onToggleAudio={() => {
          setArmed(!armed);
          if (!armed) getAudioContext();
        }}
      />

      <DisplayScoreboard
        teams={T}
        isTie={isTie}
        view={s.view}
        activeTeamIdx={activeTeamIdx}
        turnPhase={turnPhase}
      />

      {/* Dynamic Game Stage */}
      <section className="stage">
        {/* IDLE / LOBBY VIEW */}
        {s.view === "idle" && (
          <div className="lobby-card">
            <div className="lobby-spark">⚡</div>
            <h1 className="lobby-title">MindSpark Quiz Arena</h1>
            <p className="lobby-desc">
              Get ready! The host is selecting the next question. Next turn: <b>{activeTeam?.name}</b>
            </p>
            <div className="vs-banner">
              <div className="vs-team t0">{T[0].name} ({T[0].score} pts)</div>
              <div className="vs-pill">VS</div>
              <div className="vs-team t1">{T[1].name} ({T[1].score} pts)</div>
            </div>
          </div>
        )}

        {/* ROUND 2 SUBJECT TITLE CARD */}
        {s.view === "subject" && (
          <div className="subject-card">
            <div className="subject-badge">
              <span>🎯</span> Round 2 • Subject Challenge
            </div>
            <h1 className="subject-title">{s.subject}</h1>
            <p className="subject-hint">Get ready for questions in {s.subject}!</p>
          </div>
        )}

        {/* ACTIVE QUESTION MODE (KAHOOT 4-GRID) */}
        {s.view === "question" && q && (
          <>
            <div className="q-header">
              <div className="q-round-tag">
                <span className="round-pill">
                  {q.rnd === 1 ? "Round 1: General Knowledge" : `Round 2: ${s.subject || "Subject"}`}
                </span>
                {turnPhase === "member1" && directTeam && (
                  <span
                    className="round-pill"
                    style={{
                      background: directTeamIdx === 0 ? "var(--a)" : "var(--b)",
                      borderColor: "rgba(255, 255, 255, 0.4)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    🎯 Question for: {directTeam.name} (Member 1)
                  </span>
                )}
                {turnPhase === "member2" && directTeam && (
                  <span
                    className="round-pill pill-bounce"
                    style={{
                      background: directTeamIdx === 0 ? "var(--a)" : "var(--b)",
                      borderColor: "var(--pop)",
                      boxShadow: "0 0 20px var(--pop-glow)",
                    }}
                  >
                    🔄 2nd Chance: {directTeam.name} (Another Member)
                  </span>
                )}
                {turnPhase === "passed" && activeTeam && (
                  <span
                    className="round-pill pill-bounce"
                    style={{
                      background: activeTeamIdx === 0 ? "var(--a)" : "var(--b)",
                      borderColor: "var(--pop)",
                      boxShadow: "0 0 25px var(--pop-glow)",
                    }}
                  >
                    ⚡ Passed to: {activeTeam.name} (Opposite Team)
                  </span>
                )}
              </div>

              {left !== null && (
                <div className={`timer-widget ${left <= 5 ? "timer-urgent" : ""}`}>
                  <div className="timer-circle">
                    <svg viewBox="0 0 76 76">
                      <circle className="timer-bg" cx="38" cy="38" r={timerRadius} />
                      <circle
                        className="timer-progress"
                        cx="38"
                        cy="38"
                        r={timerRadius}
                        strokeDasharray={timerCircumference}
                        strokeDashoffset={timerOffset}
                      />
                    </svg>
                    <span className="timer-num">{left}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Answer Result Banner if an answer attempt or reveal occurred */}
            {s.lastAnswer && (
              <div className={`result-banner ${s.lastAnswer.correct ? "correct" : "wrong"}`}>
                <span>{s.lastAnswer.correct ? "🎉" : "❌"}</span>
                <span>{s.lastAnswer.text}</span>
              </div>
            )}

            <div className="q-box">
              <h2 className="q-text">{q.text}</h2>
            </div>

            <div className="opts-grid">
              {(q.options || []).map((opt, idx) => {
                const isEliminated = eliminated.includes(idx);
                const isCorrect = s.revealed && idx === q.correct;
                const isRevealedWrong = s.revealed && idx !== q.correct && !isEliminated;
                const shape = SHAPES[idx] || { shape: "●", letter: String.fromCharCode(65 + idx) };

                return (
                  <div
                    key={idx}
                    className={`opt-card opt-${idx} ${isCorrect ? "revealed-correct" : ""} ${isEliminated ? "is-eliminated" : ""} ${isRevealedWrong ? "revealed-wrong" : ""}`}
                  >
                    <div className="opt-shape">
                      <span>{shape.shape}</span>
                      <span className="opt-letter">{shape.letter}</span>
                    </div>
                    <span className="opt-text">{opt}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* RAPID FIRE BLITZ ROUND */}
        {s.view === "rapid" && (
          <div className="rapid-box">
            <div className="rapid-tag">
              <span>⚡</span> Rapid Fire Blitz • First Buzzer Answers
            </div>
            <div className={`rapid-timer-big ${left !== null && left <= 10 ? "urgent" : ""}`}>
              {fmt(left ?? 0)}
            </div>
            {left === 0 ? (
              <h2 className="rapid-q" style={{ color: "var(--danger)" }}>
                ⏰ Time’s Up!
              </h2>
            ) : (
              <h2 className="rapid-q">{q ? q.text : "No more questions in this round"}</h2>
            )}
          </div>
        )}

        {/* RAPID FIRE SUMMARY */}
        {s.view === "rapidEnd" && (
          <div className="lobby-card">
            <div className="lobby-spark" style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
              🏁
            </div>
            <h1 className="lobby-title">Rapid Fire Complete!</h1>
            <p className="lobby-desc">Points scored during this rapid fire round:</p>
            <div className="vs-banner">
              <div className="vs-team t0">
                {T[0].name}: +{got[0] * 5} pts ({got[0]} correct)
              </div>
              <div className="vs-team t1">
                {T[1].name}: +{got[1] * 5} pts ({got[1]} correct)
              </div>
            </div>
          </div>
        )}

        {/* WINNER PODIUM CELEBRATION */}
        {s.view === "winner" && (
          <div className="winner-stage">
            <h1 className="winner-headline">
              {isTie ? "🤝 It’s an Epic Tie!" : `🎉 ${winningTeam.name} Wins!`}
            </h1>

            <div className="podium-container">
              {/* 2nd Place */}
              <div className="podium-col">
                <div className="podium-crest">🥈</div>
                <div className="podium-name">{isTie ? T[1].name : runnerUpTeam.name}</div>
                <div className="podium-score">{isTie ? T[1].score : runnerUpTeam.score} pts</div>
                <div className="podium-pillar pillar-2nd">2</div>
              </div>

              {/* 1st Place Champion */}
              <div className="podium-col">
                <div className="podium-crest">🏆</div>
                <div className="podium-name">{isTie ? T[0].name : winningTeam.name}</div>
                <div className="podium-score">{isTie ? T[0].score : winningTeam.score} pts</div>
                <div className="podium-pillar pillar-1st">1</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}