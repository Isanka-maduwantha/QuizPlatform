export default function RapidFireControls({
  state,
  revealed,
  teams,
  question,
  secondsLeft,
  correctCounts,
  onAction,
  points,
  remainingQuestions,
  perQuestionSeconds = 10,
}) {
  const isRevealed = Boolean(revealed ?? state?.revealed);
  const isTimeUp = secondsLeft === 0;

  return (
    <section className="rapid-fire-controls">
      <div className="ad-row">
        <span
          className={`ad-time rapid-fire-time ${isTimeUp ? "urgent" : ""}`}
          style={{ color: isTimeUp ? "var(--danger)" : undefined }}
        >
          ⏱️ {secondsLeft ?? 0}s {isTimeUp ? "— TIME UP!" : ""}
        </span>
        <button
          className="btn ghost"
          onClick={() => onAction("timer", { seconds: perQuestionSeconds })}
          title={`Reset ${perQuestionSeconds}s timer for this question`}
        >
          🔄 Reset {perQuestionSeconds}s [T]
        </button>
        <span className="badge">
          {teams[0].name}: {correctCounts[0]} correct | {teams[1].name}: {correctCounts[1]} correct
        </span>
        {remainingQuestions !== undefined && (
          <span className="badge">📚 {remainingQuestions} Left</span>
        )}
      </div>
      <div className="ad-q-preview">
        <p className="ad-q">{question ? question.text : "No more questions in this round"}</p>
        <p className="rapid-fire-answer">
          Answer: {question?.answer_text || "—"}
          {isRevealed && (
            <span className="badge ok" style={{ marginLeft: 10, verticalAlign: "middle" }}>
              ✓ Revealed to Audience
            </span>
          )}
        </p>
      </div>
      <div className="ad-row">
        <button className="btn ta" onClick={() => onAction("rok", { team: 0 })}>
          ✓ {teams[0].name} +{points} [1]
        </button>
        <button className="btn tb" onClick={() => onAction("rok", { team: 1 })}>
          ✓ {teams[1].name} +{points} [2]
        </button>
        {!isRevealed ? (
          <button className="btn ok" onClick={() => onAction("reveal")}>
            💡 Reveal Answer [R]
          </button>
        ) : (
          <button className="btn ghost" onClick={() => onAction("rhide")}>
            🙈 Hide Answer [R]
          </button>
        )}
        <button className="btn" onClick={() => onAction("rpass")}>
          Pass [0]
        </button>
        <button className="btn danger rapid-fire-end" onClick={() => onAction("rend")}>
          End Rapid Fire
        </button>
      </div>
    </section>
  );
}
