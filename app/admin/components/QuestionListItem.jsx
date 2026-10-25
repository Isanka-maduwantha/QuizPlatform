export default function QuestionListItem({ question, isUsed, onShow }) {
  return (
    <div className={`ad-item ${isUsed ? "done" : ""}`}>
      <span>
        {isUsed ? "✓ " : ""}
        {question.text}
      </span>
      <button className="btn ghost" onClick={onShow}>
        {isUsed ? "Show Again" : "Show on Screen"}
      </button>
    </div>
  );
}
