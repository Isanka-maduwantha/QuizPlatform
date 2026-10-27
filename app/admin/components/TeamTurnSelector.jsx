export default function TeamTurnSelector({ teams, activeTeamIndex, onSelectTeam }) {
  return (
    <section className="live-team-turn" aria-labelledby="live-team-turn-title">
      <h3 id="live-team-turn-title">
        Select participating team <span>[Press Tab to toggle]</span>
      </h3>
      <div className="school-cards-grid">
        {teams.map((team, index) => {
          const isActive = activeTeamIndex === index;
          return (
            <button
              type="button"
              key={index}
              className={`school-card ${isActive ? "active" : ""}`}
              onClick={() => onSelectTeam(index)}
            >
              <span className="school-card-info">
                <span
                  className="school-card-avatar"
                  style={{ background: index === 0 ? "var(--a)" : "var(--b)" }}
                >
                  {index === 0 ? "A" : "B"}
                </span>
                <span className="school-card-details">
                  <span className="school-card-name">{team.name}</span>
                  {isActive ? (
                    <span className="school-card-badge">🎯 Active Turn (Answering)</span>
                  ) : (
                    <span className="mut school-card-hint">Tap to set turn</span>
                  )}
                </span>
              </span>
              <span className="school-card-score">{team.score} pts</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
