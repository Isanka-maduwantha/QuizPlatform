import { COLOR_FIELDS, DEFAULT_THEME, isColorLight, PRESETS } from "@/lib/theme";

function getColorValue(theme, key) {
  if (theme[key]) return theme[key];
  const light = isColorLight(theme.bg);
  const fallback = {
    inkMuted: light ? "#64748B" : "#A7A5B4",
    border: light ? "#0F172A" : "#FFFFFF",
    action: theme.pop || DEFAULT_THEME.pop,
    highlight: theme.danger || "#EF4444",
  };
  return fallback[key] || "#FFFFFF";
}

export default function ThemePanel({ theme, draft, setDraft, teams, music, onAction, onVolumeChange }) {
  const currentTheme = draft || theme;

  return (
    <>
      <p className="theme-section-title">
        Pick a look
      </p>
      <div className="theme-presets">
        {PRESETS.map((preset) => {
          const isActive =
            currentTheme.bg === preset.theme.bg && currentTheme.a === preset.theme.a;

          return (
            <button
              key={preset.name}
              className={`preset-chip ${isActive ? "active" : ""}`}
              onClick={() => setDraft(preset.theme)}
              aria-pressed={isActive}
            >
              <span className="preset-chip-swatches" aria-hidden="true">
                {[preset.theme.pop, preset.theme.a, preset.theme.b].map((color) => (
                  <i key={color} style={{ backgroundColor: color }} />
                ))}
              </span>
              <span className="preset-chip-copy">
                <b>{preset.name}</b>
                <small>{preset.tag}</small>
              </span>
            </button>
          );
        })}
      </div>

      <p className="theme-section-title theme-colors-title">
        Fine-tune colors
      </p>
      <div className="theme-swatches">
        {COLOR_FIELDS.map(({ key, label }) => {
          const value = getColorValue(currentTheme, key);
          return (
            <div key={key} className="theme-swatch-box">
              <span className="theme-swatch-label">{label}</span>
              <div className="theme-input-group">
                <input
                  type="color"
                  value={value}
                  onChange={(event) =>
                    setDraft({ ...currentTheme, [key]: event.target.value })
                  }
                />
                <input
                  type="text"
                  value={value}
                  onChange={(event) =>
                    setDraft({ ...currentTheme, [key]: event.target.value })
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="theme-preview-card"
        style={{
          backgroundColor: currentTheme.bg || "#0C0B14",
          color: currentTheme.ink || "#F5F3FF",
          borderColor: currentTheme.border || currentTheme.pop || currentTheme.card || "#181230",
        }}
      >
        <div className="theme-preview-header">Live Theme Preview</div>
        <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
          <span style={{ padding: "4px 10px", borderRadius: 8, background: currentTheme.a, color: "#FFF", fontSize: 12, fontWeight: 800 }}>
            {teams[0].name} (10 pts)
          </span>
          <span style={{ padding: "4px 10px", borderRadius: 8, background: currentTheme.b, color: "#FFF", fontSize: 12, fontWeight: 800 }}>
            {teams[1].name} (20 pts)
          </span>
        </div>
        <div className="theme-preview-actions">
          <span style={{ background: currentTheme.action || currentTheme.pop || "var(--action)", color: "var(--action-ink)" }}>Primary action</span>
          <span style={{ background: currentTheme.highlight || currentTheme.b, color: "#FFFFFF" }}>Highlight</span>
          <span style={{ color: currentTheme.inkMuted || "var(--ink-muted)" }}>Muted text</span>
        </div>
        <div
          style={{
            padding: 12,
            borderRadius: 12,
            backgroundColor: currentTheme.card || "#13121E",
            border: `1px solid ${currentTheme.pop}44`,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>
            Sample Question on Screen?
          </div>
          <div className="preview-grid">
            <div className="preview-opt" style={{ background: "linear-gradient(135deg, #E21B3C, #B9142F)" }}>
              ▲ Option A
            </div>
            <div className="preview-opt" style={{ background: "linear-gradient(135deg, #1368CE, #0F52A4)" }}>
              ◆ Option B
            </div>
          </div>
        </div>
      </div>

      <div className="ad-row theme-actions">
        <button
          className="btn ok"
          onClick={async () => {
            await onAction("theme", { theme: currentTheme });
            setDraft(null);
          }}
        >
          Apply Theme to Entire System
        </button>
        {draft && (
          <button className="btn ghost" onClick={() => setDraft(null)}>
            Discard Changes
          </button>
        )}
      </div>

      <div className="audio-deck">
        <p className="theme-section-title">
          Audio &amp; sound
        </p>
        <div className="ad-row">
          <button
            className={`btn ${music.on ? "ok" : "ghost"}`}
            onClick={() =>
              onAction("music", { music: { ...music, on: !music.on } })
            }
          >
            🎵 Background Music: {music.on ? "ON" : "OFF"}
          </button>
          <button className="btn ghost" onClick={() => onVolumeChange(music.volume - 0.1)}>
            −
          </button>
          <b>{Math.round(music.volume * 100)}%</b>
          <button className="btn ghost" onClick={() => onVolumeChange(music.volume + 0.1)}>
            +
          </button>
          <button
            className={`btn ${music.sfx ? "ok" : "ghost"}`}
            onClick={() =>
              onAction("music", { music: { ...music, sfx: !music.sfx } })
            }
          >
            🔔 SFX: {music.sfx ? "ON" : "OFF"}
          </button>
        </div>
      </div>
    </>
  );
}
