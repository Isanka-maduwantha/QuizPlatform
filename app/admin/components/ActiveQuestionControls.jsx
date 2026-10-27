import { OPT_CONFIG } from "./hostConstants";

export default function ActiveQuestionControls({
  state,
  question,
  teams,
  activeTeamIndex,
  activeTeam,
  directTeamIndex,
  directTeam,
  turnPhase,
  round,
  secondsLeft,
  autoCountdown,
  onAnswer,
  onAction,
  onNextQuestion,
  onSkipCountdown,
}) {
  return (
    <div>
      <div className="ad-q-preview">
        <QuestionStatus
          state={state}
          question={question}
          activeTeamIndex={activeTeamIndex}
          activeTeam={activeTeam}
          directTeamIndex={directTeamIndex}
          directTeam={directTeam}
          turnPhase={turnPhase}
          secondsLeft={secondsLeft}
        />
        <p className="ad-q">{question.text}</p>
        <TurnStatus state={state} activeTeamIndex={activeTeamIndex} activeTeam={activeTeam} turnPhase={turnPhase} />
        <AnswerPad state={state} question={question} onAnswer={onAnswer} />
        {autoCountdown !== null && (
          <div className="auto-advance-bar">
            <div className="auto-advance-text">
              <span>⏱️</span>
              <span>
                Answer evaluated! Loading next question for {teams[1 - activeTeamIndex]?.name} in {autoCountdown}s...
              </span>
            </div>
            <button className="btn" onClick={onSkipCountdown}>
              Skip Countdown &amp; Load Now ⏭️
            </button>
          </div>
        )}
      </div>
      <QuestionActions
        state={state}
        turnPhase={turnPhase}
        round={round}
        onAction={onAction}
        onNextQuestion={onNextQuestion}
      />
    </div>
  );
}

function QuestionStatus({
  state,
  question,
  activeTeamIndex,
  activeTeam,
  directTeamIndex,
  directTeam,
  turnPhase,
  secondsLeft,
}) {
  const teamStyle = (teamIndex) => ({
    background: teamIndex === 0 ? "var(--a)" : "var(--b)",
    color: "#FFF",
    border: turnPhase === "member1" ? undefined : "2px solid var(--pop)",
  });

  return (
    <div className="active-question-status">
      <div className="active-question-badges">
        <span className="badge ok">
          {question.rnd === 1 ? "Round 1" : `Round 2: ${state.subject}`}
        </span>
        {turnPhase === "member1" && (
          <span className="badge" style={teamStyle(directTeamIndex)}>
            🎯 Direct Turn: {directTeam?.name} (Member 1)
          </span>
        )}
        {turnPhase === "member2" && (
          <span className="badge" style={teamStyle(directTeamIndex)}>
            🔄 2nd Chance: {directTeam?.name} (Another Member)
          </span>
        )}
        {turnPhase === "passed" && (
          <span className="badge" style={teamStyle(activeTeamIndex)}>
            ⚡ Passed Turn: {activeTeam?.name} (Bonus Chance)
          </span>
        )}
      </div>
      {secondsLeft !== null && (
        <span className="ad-time" style={{ color: secondsLeft <= 5 ? "var(--danger)" : "var(--pop)" }}>
          ⏱️ {secondsLeft}s
        </span>
      )}
    </div>
  );
}

function TurnStatus({ state, activeTeamIndex, activeTeam, turnPhase }) {
  const status = {
    member1: "Member 1 • 10 pts",
    member2: "Another Member • 10 pts",
    passed: "Opposite Team • Bonus Chance",
  }[turnPhase];

  return (
    <div className="host-turn-status-banner">
      <div>
        <span className="host-turn-label">Current Answering Turn: </span>
        <span className="host-turn-team" style={{ color: activeTeamIndex === 0 ? "var(--a)" : "var(--b)" }}>
          {activeTeam?.name}
        </span>
        <span className="host-turn-phase">({status})</span>
      </div>
      {state.revealed ? (
        <span className="badge ok">✓ Question Completed</span>
      ) : (
        <span className="badge">Active Question</span>
      )}
    </div>
  );
}

function AnswerPad({ state, question, onAnswer }) {
  return (
    <div className="active-answer-pad">
      <span className="active-answer-help">
        Select answer by touch or keyboard [A, B, C, D]
      </span>
      <div className="answer-touch-pad">
        {(question.options || []).map((option, index) => {
          const isCorrect = index === question.correct;
          const isEliminated = (state.eliminatedOptions || []).includes(index);
          const optionConfig = OPT_CONFIG[index] || {
            letter: String.fromCharCode(65 + index),
            shape: "●",
            gradient: "var(--card)",
          };

          return (
            <button
              key={index}
              className={`ans-btn ${state.revealed && isCorrect ? "is-correct" : ""} ${isEliminated ? "is-wrong" : ""}`}
              style={{
                background: optionConfig.gradient,
                opacity: isEliminated || (state.revealed && !isCorrect) ? 0.35 : 1,
              }}
              onClick={() => onAnswer(index)}
              disabled={state.revealed || isEliminated}
            >
              <span className="ans-key-badge">
                <span>{optionConfig.shape}</span>
                <span className="ans-key-letter">{optionConfig.letter}</span>
              </span>
              <span className="ans-text">{option}</span>
              {isEliminated && <span className="ans-wrong-hint">❌ FALSE</span>}
              {isCorrect && !isEliminated && (
                <span className="ans-correct-hint">
                  ✓ CORRECT {state.revealed ? "" : "(Host Hint)"}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function QuestionActions({ state, turnPhase, round, onAction, onNextQuestion }) {
  return (
    <div className="ad-row">
      <button className="btn" onClick={() => onAction("timer", { seconds: 30 })}>
        ⏱️ Start 30s Timer [T]
      </button>
      <button className="btn ghost" onClick={() => onAction("timer", { seconds: 15 })}>
        15s Timer
      </button>
      {!state.revealed ? (
        <>
          <button className="btn ghost action-pass" onClick={() => onAction("passTurn")}>
            {turnPhase === "member1" && round === 1
              ? "🔄 Pass to Member 2 [P]"
              : turnPhase === "member2" || round === 2
              ? "⚡ Pass to Opposite Team [P]"
              : "❌ No Answer / End Turn [P]"}
          </button>
          {state.eliminatedOptions?.length > 0 && (
            <button className="btn ghost" onClick={() => onAction("resetChances")}>
              ↺ Reset Chances
            </button>
          )}
          <button className="btn ok action-push" onClick={() => onAction("reveal")}>
            💡 Reveal Answer Only [Space]
          </button>
        </>
      ) : (
        <button className="btn action-push" onClick={onNextQuestion}>
          Next Question ⏭️ [Space]
        </button>
      )}
    </div>
  );
}
