export default function TeamScorePanel({ teams, onAction }) {
  return (
    <>
      {teams.map((team, index) => (
        <div className="ad-team" key={index}>
          <input
            defaultValue={team.name}
            onBlur={(event) =>
              onAction("names", {
                names: teams.map((entry, teamIndex) =>
                  teamIndex === index ? event.target.value : entry.name
                ),
              })
            }
            aria-label={`Team ${index + 1} Name`}
          />
          <strong>{team.score}</strong>
          <button className="btn ghost" onClick={() => onAction("adj", { team: index, delta: 10 })}>+10</button>
          <button className="btn ghost" onClick={() => onAction("adj", { team: index, delta: 5 })}>+5</button>
          <button className="btn ghost" onClick={() => onAction("adj", { team: index, delta: -5 })}>−5</button>
        </div>
      ))}
      <div className="ad-row team-score-actions">
        <button className="btn ghost" onClick={() => onAction("idle")}>📺 Show Lobby / Scores</button>
        <button className="btn" onClick={() => onAction("win")}>🏆 Show Winner Podium</button>
        <button
          className="btn ghost danger team-reset"
          onClick={() => confirm("Reset all scores and question history?") && onAction("reset")}
        >
          Reset Match
        </button>
      </div>
    </>
  );
}
