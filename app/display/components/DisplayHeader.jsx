export default function DisplayHeader({ isFullscreen, armed, onToggleFullscreen, onToggleAudio }) {
  const hideUnavailableLogo = (event) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <header className="disp-header">
      <div className="brand-section">
        <div className="brand-icon">⚡</div>
        <div>
          <div className="brand-title">MindSpark</div>
          <div className="brand-sub">Live Quiz Arena</div>
        </div>
      </div>

      <div className="logos">
        <img src="/logos/school.png" alt="School logo" onError={hideUnavailableLogo} />
        <img src="/logos/event.png" alt="Event logo" onError={hideUnavailableLogo} />
        <img src="/logos/campus.png" alt="Campus logo" onError={hideUnavailableLogo} />
      </div>

      <div className="header-actions">
        <button
          className="icon-btn"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          onClick={onToggleFullscreen}
        >
          {isFullscreen ? "🗗" : "⛶"}
        </button>
        <button
          className="icon-btn"
          title={armed ? "Sound Enabled" : "Sound Muted"}
          onClick={onToggleAudio}
        >
          {armed ? "🔊" : "🔇"}
        </button>
      </div>
    </header>
  );
}
