import Link from "next/link";

export default function Home() {
  return (
    <main className="wrap" style={{ maxWidth: 1100, padding: "48px 20px" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: 52 }}>
        <div
          style={{
            width: 72,
            height: 72,
            margin: "0 auto 20px",
            borderRadius: 22,
            background: "linear-gradient(135deg, var(--pop) 0%, #EA580C 100%)",
            display: "grid",
            placeItems: "center",
            fontSize: 36,
            boxShadow: "0 8px 30px var(--pop-glow)",
          }}
        >
          ⚡
        </div>
        <h1
          style={{
            fontSize: "clamp(38px, 6vw, 68px)",
            fontWeight: 900,
            letterSpacing: "-1.5px",
            marginBottom: 16,
            background: "linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MindSpark Quiz Arena
        </h1>
        <p
          className="mut"
          style={{
            fontSize: "clamp(18px, 2.2vw, 22px)",
            maxWidth: 680,
            margin: "0 auto 28px",
            lineHeight: 1.5,
          }}
        >
          A Kahoot-inspired live quiz show platform designed for stage projectors, school competitions, and corporate arenas with full theme customization.
        </p>

        <div className="row" style={{ justifyContent: "center", gap: 16 }}>
          <Link
            className="btn"
            href="/display"
            target="_blank"
            style={{ fontSize: 17, padding: "14px 28px" }}
          >
            📺 Open Projector Display
          </Link>
          <Link
            className="btn ghost"
            href="/admin"
            style={{ fontSize: 17, padding: "14px 28px" }}
          >
            🎛️ Host Control Console
          </Link>
        </div>
      </section>

      {/* Dual Launch Cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))",
          gap: 24,
          marginBottom: 52,
        }}
      >
        {/* Projector Display Card */}
        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 32 }}>📺</span>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800 }}>Projector Display Screen</h2>
                <span className="badge" style={{ marginTop: 4 }}>For Auditorium / TV / Projector</span>
              </div>
            </div>
            <p className="mut" style={{ lineHeight: 1.6, marginBottom: 20 }}>
              The audience and contestant-facing display. Features Kahoot-style bold 4-option cards (▲ ◆ ● ■), circular animated SVG countdown timer, dynamic live scoreboards, audio fanfare, and 1st/2nd place podium celebrations with confetti!
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> 4-Color geometric option tiles
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> Animated circular countdown timer with audio ticks
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> Rapid fire blitz mode with live buzzer counters
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> Olympic-style podium celebration with confetti rain
              </li>
            </ul>
          </div>
          <Link className="btn" href="/display" target="_blank" style={{ width: "100%" }}>
            Launch Display Screen →
          </Link>
        </div>

        {/* Host Control Studio Card */}
        <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 32 }}>🎛️</span>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800 }}>Host Broadcast Studio</h2>
                <span className="badge ok" style={{ marginTop: 4 }}>For Quiz Host / Operator</span>
              </div>
            </div>
            <p className="mut" style={{ lineHeight: 1.6, marginBottom: 20 }}>
              The command center. Control which questions appear on the big screen, start timers, reveal answers, award points with quick keyboard shortcuts, test sound effects, and customize themes in real-time.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> Instant keyboard controls (Space, T, 1, 2, 0, Esc)
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> 7 Brand theme presets & custom hex palette editor
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> Live Theme Preview card before applying
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                <span style={{ color: "var(--ok)", fontWeight: 900 }}>✓</span> Question Bank manager supporting Sinhala & English
              </li>
            </ul>
          </div>
          <Link className="btn ghost" href="/admin" style={{ width: "100%" }}>
            Open Host Studio →
          </Link>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 28, marginBottom: 10 }}>🎨</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Custom Themes</h3>
          <p className="mut" style={{ fontSize: 14, lineHeight: 1.4 }}>
            Tailor colors, backgrounds, team badges, and typography to perfectly match your school or company branding.
          </p>
        </div>

        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 28, marginBottom: 10 }}>🔊</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Web Audio SFX</h3>
          <p className="mut" style={{ fontSize: 14, lineHeight: 1.4 }}>
            Real-time synthesized chime, buzzer, timer countdown ticks, and victory fanfare without needing external audio files.
          </p>
        </div>

        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 28, marginBottom: 10 }}>⚡</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Rapid Fire Round</h3>
          <p className="mut" style={{ fontSize: 14, lineHeight: 1.4 }}>
            Fast-action round where teams buzz in. Real-time timer and instant score counters keep contestants on their toes.
          </p>
        </div>

        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontSize: 28, marginBottom: 10 }}>🏆</div>
          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Winner Podium</h3>
          <p className="mut" style={{ fontSize: 14, lineHeight: 1.4 }}>
            Olympic-style 1st and 2nd place podium with celebration confetti showers and victory melodies to close the show in style.
          </p>
        </div>
      </section>
    </main>
  );
}
