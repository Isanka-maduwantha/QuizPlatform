export default function DisplayScoreboard({ teams, isTie, view, activeTeamIdx, turnPhase }) {
  return (
    <div className="sb">
      {teams.map((team, idx) => {
        const isLeader = !isTie && team.score > teams[1 - idx].score;
        const isTurn = view === "question" && activeTeamIdx === idx;

        return (
          <div
            key={idx}
            className={`tm t${idx} ${isLeader ? "leading" : ""} ${isTurn ? "active-turn" : ""}`}
          >
            <div className="tm-info">
              <div className="tm-avatar">{idx === 0 ? "A" : "B"}</div>
              <div className="tm-details">
                <span className="tm-name">{team.name}</span>
                {isTurn && (
                  <span className="turn-pill">
                    {turnPhase === "member2"
                      ? "🔄 Member 2 Turn"
                      : turnPhase === "passed"
                      ? "⚡ Bonus / Passed Turn"
                      : "🎯 Active Turn"}
                  </span>
                )}
                {isLeader && !isTurn && <span className="tm-status">👑 Leader</span>}
              </div>
            </div>
            {/* <div className="tm-score-wrap">
              <b>{team.score}</b>
              <span className="tm-pts">pts</span>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
