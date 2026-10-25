export default function AdminPanel({
  id,
  title,
  wide,
  isDragging,
  isClosed,
  orderIndex,
  orderLength,
  onDragOver,
  onDrop,
  onDragStart,
  onDragEnd,
  onMove,
  onToggle,
  children,
}) {
  return (
    <section
      className={`ad-panel ${wide ? "wide" : ""} ${isDragging ? "dragging" : ""}`}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <header className="ad-head" draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <span className="ad-grip" aria-hidden="true">
          ⠿
        </span>
        <h2>{title}</h2>
        <div className="ad-tools">
          <button
            className="ad-ic"
            onClick={() => onMove(-1)}
            disabled={orderIndex === 0}
            title="Move Up"
          >
            ↑
          </button>
          <button
            className="ad-ic"
            onClick={() => onMove(1)}
            disabled={orderIndex === orderLength - 1}
            title="Move Down"
          >
            ↓
          </button>
          <button
            className="ad-ic"
            onClick={onToggle}
            aria-expanded={!isClosed}
            title={isClosed ? "Expand" : "Collapse"}
          >
            {isClosed ? "+" : "−"}
          </button>
        </div>
      </header>
      {!isClosed && <div className="ad-body">{children}</div>}
    </section>
  );
}
