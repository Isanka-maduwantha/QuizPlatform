export default function RapidFireControls({ teams, question, secondsLeft, correctCounts, onAction, points }) {
  return (
    <section className="rapid-fire-controls">
      <div className="ad-row">
        <span className="ad-time rapid-fire-time">⏱️ {secondsLeft ?? 0}s</span>
        <span className="badge">
          {teams[0].name}: {correctCounts[0]} correct | {teams[1].name}: {correctCounts[1]} correct
        </span>
      </div>
      <div className="ad-q-preview">
        <p className="ad-q">{question ? question.text : "No more questions in this round"}</p>
        <p className="rapid-fire-answer">Answer: {question?.answer_text}</p>
      </div>
      <div className="ad-row">
        <button className="btn ta" onClick={() => onAction("rok", { team: 0 })}>
          ✓ {teams[0].name} +{points} [1]
        </button>
        <button className="btn tb" onClick={() => onAction("rok", { team: 1 })}>
          ✓ {teams[1].name} +{points} [2]
        </button>
        <button className="btn" onClick={() => onAction("rpass")}>Pass [0]</button>
        <button className="btn danger rapid-fire-end" onClick={() => onAction("rend")}>
          End Rapid Fire
        </button>
      </div>
    </section>
  );
}
