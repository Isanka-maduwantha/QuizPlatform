export default function LiveRoundControls({
  activeRound,
  activeSubject,
  remainingQuestions,
  subjects,
  seconds,
  onSelectRound,
  onSelectSubject,
  onSetSeconds,
  onLaunch,
}) {
  return (
    <>
      <div className="round-selector-bar">
        <div className="round-pills">
          <button
            className={`round-pill-btn ${activeRound === 1 ? "active" : ""}`}
            onClick={() => onSelectRound(1)}
          >
            🌍 Round 1: General
          </button>
          <button
            className={`round-pill-btn ${activeRound === 2 ? "active" : ""}`}
            onClick={() => onSelectRound(2)}
          >
            🎯 Round 2: Subject
          </button>
          <button
            className={`round-pill-btn ${activeRound === 3 ? "active" : ""}`}
            onClick={() => onSelectRound(3)}
          >
            ⚡ Round 3: Rapid Fire
          </button>
        </div>

        <div className="live-round-actions">
          <span className="badge">📚 {remainingQuestions} Questions Left</span>
          <button className="btn" onClick={onLaunch}>
            {activeRound === 3 ? "Launch Rapid Fire ⚡" : "Next Question ⏩"}
          </button>
        </div>
      </div>

      {activeRound === 2 && (
        <div className="ad-row live-subject-picker">
          <span className="mut">Select Subject:</span>
          {subjects.map((subject) => (
            <button
              key={subject.id}
              className={`btn ${activeSubject === subject.name ? "sel" : "ghost"}`}
              onClick={() => onSelectSubject(subject.name)}
            >
              {subject.name}
            </button>
          ))}
        </div>
      )}

      {activeRound === 3 && (
        <label className="live-rapid-duration">
          Question timer
          <input
            type="number"
            min="3"
            max="60"
            value={seconds}
            onChange={(event) => onSetSeconds(+event.target.value || 10)}
          />
          <span>seconds</span>
        </label>
      )}
    </>
  );
}
