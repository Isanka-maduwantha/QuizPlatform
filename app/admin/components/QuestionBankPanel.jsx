export default function QuestionBankPanel({
  form,
  setForm,
  questions,
  subjects,
  message,
  subjectName,
  setSubjectName,
  onAddQuestion,
  onAddSubject,
  onDelete,
}) {
  return (
    <>
      <QuestionForm form={form} setForm={setForm} subjects={subjects} />
      <div className="ad-row question-bank-add">
        <button className="btn" onClick={onAddQuestion}>+ Add Question to Bank</button>
        {message && <span className="question-bank-message">{message}</span>}
      </div>
      <div className="ad-row question-bank-subject-add">
        <input
          placeholder="New Subject Name (e.g. History)"
          value={subjectName}
          onChange={(event) => setSubjectName(event.target.value)}
        />
        <button className="btn ghost" onClick={onAddSubject}>+ Add Subject</button>
      </div>
      <div className="ad-cols">
        <SubjectList subjects={subjects} onDelete={onDelete} />
        <AllQuestionsList questions={questions} onDelete={onDelete} />
      </div>
    </>
  );
}

function QuestionForm({ form, setForm, subjects }) {
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  return (
    <div className="ad-form">
      <select value={form.rnd} onChange={(event) => update("rnd", +event.target.value)}>
        <option value={1}>Round 1: General Knowledge</option>
        <option value={2}>Round 2: Subject Challenge</option>
        <option value={3}>Round 3: Rapid Fire</option>
      </select>
      {form.rnd === 2 ? (
        <select value={form.subject_id} onChange={(event) => update("subject_id", event.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>{subject.name}</option>
          ))}
        </select>
      ) : <div />}

      <input
        className="full"
        placeholder="Question Text (Supports Sinhala, English, Unicode)"
        value={form.text}
        onChange={(event) => update("text", event.target.value)}
      />
      {form.rnd === 3 ? (
        <input
          className="full"
          placeholder="Correct Answer Text"
          value={form.answer_text}
          onChange={(event) => update("answer_text", event.target.value)}
        />
      ) : (
        <>
          {form.o.map((option, index) => (
            <input
              key={index}
              placeholder={`Option ${"ABCD"[index]}`}
              value={option}
              onChange={(event) =>
                update("o", form.o.map((current, optionIndex) =>
                  optionIndex === index ? event.target.value : current
                ))
              }
            />
          ))}
          <select className="full" value={form.correct} onChange={(event) => update("correct", +event.target.value)}>
            {"ABCD".split("").map((letter, index) => (
              <option key={letter} value={index}>Correct Option: {letter}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

function SubjectList({ subjects, onDelete }) {
  return (
    <div>
      <h3>Active Subjects ({subjects.length})</h3>
      <div className="ad-list">
        {subjects.map((subject) => (
          <div className="ad-item" key={subject.id}>
            <span>{subject.name}</span>
            <button className="btn ghost danger" onClick={() => onDelete(subject.id, "subject")}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AllQuestionsList({ questions, onDelete }) {
  return (
    <div>
      <h3>All Questions ({questions.length})</h3>
      <div className="ad-list">
        {questions.map((question) => (
          <div className="ad-item" key={question.id}>
            <span>
              <b>R{question.rnd}</b> {question.subject ? `[${question.subject}] ` : ""}
              {question.text}
            </span>
            <button className="btn ghost danger" onClick={() => onDelete(question.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
