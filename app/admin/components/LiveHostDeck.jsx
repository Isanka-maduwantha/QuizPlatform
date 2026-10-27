import LiveRoundControls from "./LiveRoundControls";
import TeamTurnSelector from "./TeamTurnSelector";
import ActiveQuestionControls from "./ActiveQuestionControls";
import RapidFireControls from "./RapidFireControls";
import HostStandby from "./HostStandby";

export default function LiveHostDeck({
  state,
  question,
  teams,
  subjects,
  activeTeamIndex,
  activeTeam,
  directTeamIndex,
  directTeam,
  turnPhase,
  round,
  subject,
  remainingQuestions,
  seconds,
  setSeconds,
  secondsLeft,
  correctCounts,
  scoringRules,
  autoAdvance,
  autoCountdown,
  viewLabels,
  onAction,
  onAnswer,
  onNextQuestion,
  onSkipCountdown,
}) {
  const launch = () => {
    if (round === 3) onAction("rapid", { seconds });
    else onAction("nextQuestion", { rnd: round, subject });
  };

  const selectRound = (nextRound) => {
    if (nextRound === 2) {
      onAction("round", {
        round: nextRound,
        subject: subject || subjects[0]?.name || "Physics",
      });
    } else {
      onAction("round", { round: nextRound });
    }
  };

  return (
    <div className="live-controls-wrap">
      <LiveRoundControls
        activeRound={round}
        activeSubject={subject}
        remainingQuestions={remainingQuestions}
        subjects={subjects}
        seconds={seconds}
        onSelectRound={selectRound}
        onSelectSubject={(selectedSubject) => onAction("round", { round: 2, subject: selectedSubject })}
        onSetSeconds={setSeconds}
        onLaunch={launch}
      />
      <TeamTurnSelector
        teams={teams}
        activeTeamIndex={activeTeamIndex}
        onSelectTeam={(team) => onAction("activeTeam", { team })}
      />
      <div className="host-policy-bar">
        <label className="host-policy-item">
          <input
            type="checkbox"
            checked={autoAdvance}
            onChange={(event) => onAction("settings", { autoAdvance: event.target.checked })}
          />
          <span>Auto-load next question (3s delay)</span>
        </label>
      </div>

      {state.view === "question" && question ? (
        <ActiveQuestionControls
          state={state}
          question={question}
          teams={teams}
          activeTeamIndex={activeTeamIndex}
          activeTeam={activeTeam}
          directTeamIndex={directTeamIndex}
          directTeam={directTeam}
          turnPhase={turnPhase}
          round={round}
          secondsLeft={secondsLeft}
          autoCountdown={autoCountdown}
          onAnswer={onAnswer}
          onAction={onAction}
          onNextQuestion={onNextQuestion}
          onSkipCountdown={onSkipCountdown}
        />
      ) : state.view === "rapid" ? (
        <RapidFireControls
          teams={teams}
          question={question}
          secondsLeft={secondsLeft}
          correctCounts={correctCounts}
          points={scoringRules.rapidFirePoints}
          onAction={onAction}
        />
      ) : (
        <HostStandby view={state.view} viewLabels={viewLabels} onLaunch={launch} />
      )}
    </div>
  );
}
