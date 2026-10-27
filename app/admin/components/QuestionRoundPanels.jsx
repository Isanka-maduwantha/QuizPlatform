import QuestionListItem from "./QuestionListItem";

export function GeneralRoundPanel({ questions, filter, onFilterChange, isUsed, onShowQuestion }) {
  const visible = questions
    .filter((question) => question.rnd === 1)
    .filter((question) => !filter || question.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <div className="round-search">
        <input
          type="text"
          placeholder="Search Round 1 questions..."
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
        />
      </div>
      <QuestionList questions={visible} isUsed={isUsed} onShowQuestion={onShowQuestion} />
    </div>
  );
}

export function SubjectRoundPanel({
  questions,
  subjects,
  activeSubject,
  filter,
  isUsed,
  onSelectSubject,
  onShowQuestion,
}) {
  const visible = questions
    .filter((question) => question.rnd === 2 && (!activeSubject || question.subject === activeSubject))
    .filter((question) => !filter || question.text.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <div className="ad-row">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            className={`btn ${activeSubject === subject.name ? "sel" : "ghost"}`}
            onClick={() => onSelectSubject(subject.name)}
          >
            🎯 {subject.name}
          </button>
        ))}
      </div>
      {activeSubject ? (
        <QuestionList questions={visible} isUsed={isUsed} onShowQuestion={onShowQuestion} />
      ) : (
        <p className="mut subject-round-hint">
          Select a subject above to display on screen and show questions.
        </p>
      )}
    </>
  );
}

export function RapidFireSetupPanel({ seconds, onSecondsChange, remainingQuestions, onLaunch }) {
  return (
    <>
      <div className="ad-row">
        <label className="rapid-fire-duration">
          Timer Seconds:
          <input
            type="number"
            min="10"
            value={seconds}
            onChange={(event) => onSecondsChange(+event.target.value || 120)}
          />
        </label>
        <button className="btn" onClick={onLaunch}>⚡ Launch Rapid Fire</button>
      </div>
      <p className="mut rapid-fire-remaining">
        {remainingQuestions} unasked rapid fire questions remaining
      </p>
    </>
  );
}

function QuestionList({ questions, isUsed, onShowQuestion }) {
  return (
    <div className="ad-list">
      {questions.map((question) => (
        <QuestionListItem
          key={question.id}
          question={question}
          isUsed={isUsed(question.id)}
          onShow={() => onShowQuestion(question.id)}
        />
      ))}
    </div>
  );
}
