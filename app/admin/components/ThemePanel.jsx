import { COLOR_FIELDS, PRESETS } from "@/lib/theme";

export default function ThemePanel({ theme, draft, setDraft, teams, music, onAction, onVolumeChange }) {
  const currentTheme = draft || theme;

  return (
    <>
      <p style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 8 }}>
        Choose A Theme Preset
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
            >
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: preset.theme.pop,
                }}
              />
              {preset.name}
            </button>
          );
        })}
      </div>

      <p style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", color: "var(--ink-muted)", margin: "16px 0 8px" }}>
        Customize Brand Colors
      </p>
      <div className="theme-swatches">
        {COLOR_FIELDS.map(({ key, label }) => (
          <div key={key} className="theme-swatch-box">
            <span className="theme-swatch-label">{label}</span>
            <div className="theme-input-group">
              <input
                type="color"
                value={currentTheme[key] || "#FFFFFF"}
                onChange={(event) =>
                  setDraft({ ...currentTheme, [key]: event.target.value })
                }
              />
              <input
                type="text"
                value={currentTheme[key] || ""}
                onChange={(event) =>
                  setDraft({ ...currentTheme, [key]: event.target.value })
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="theme-preview-card"
        style={{
          backgroundColor: currentTheme.bg || "#0D0A1A",
          color: currentTheme.ink || "#F5F3FF",
          borderColor: currentTheme.card || "#181230",
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
        <div
          style={{
            padding: 12,
            borderRadius: 12,
            backgroundColor: currentTheme.card || "#181230",
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

      <div className="ad-row">
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
        <p style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 10 }}>
          Audio &amp; Sound FX Deck
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
