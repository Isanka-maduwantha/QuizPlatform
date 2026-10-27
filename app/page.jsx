import Link from "next/link";

const features = [
  {
    icon: "◈",
    title: "Your brand, your arena",
    description: "Shape the colors, team identities, and visual style around your event.",
  },
  {
    icon: "♫",
    title: "Sound that builds energy",
    description: "Chimes, countdowns, buzzers, and victory fanfares—generated in the browser.",
  },
  {
    icon: "⚡",
    title: "Fast-paced rounds",
    description: "Switch from thoughtful questions to rapid-fire buzzer rounds in a tap.",
  },
  {
    icon: "✦",
    title: "A finish worth celebrating",
    description: "Reveal the final scores with a winner podium and a burst of confetti.",
  },
];

export default function Home() {
  return (
    <main className="home-shell">
      <header className="home-nav">
        <Link className="home-brand" href="/" aria-label="MindSpark home">
          <span className="home-brand-mark" aria-hidden="true">✦</span>
          <span>mindspark<span className="home-brand-dot">.</span></span>
        </Link>

        <nav className="home-nav-links" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
        </nav>

        <Link className="home-nav-cta" href="/admin">
          Open host studio <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="home-hero">
        <div className="home-hero-copy">
          <div className="home-eyebrow">
            <span className="home-eyebrow-dot" />
            THE LIVE QUIZ EXPERIENCE
          </div>
          <h1>Make every answer <span>a moment.</span></h1>
          <p>
            Bring your audience into the action. MindSpark turns quiz night into
            a live, high-energy show—with a host console and a big-screen display
            working in sync.
          </p>

          <div className="home-actions">
            <Link className="home-button home-button-primary" href="/admin">
              <span>Start hosting</span><span aria-hidden="true">↗</span>
            </Link>
            <Link className="home-button home-button-secondary" href="/display" target="_blank">
              <span className="home-play-icon" aria-hidden="true">▶</span>
              Preview the display
            </Link>
          </div>

          <div className="home-proof">
            <span className="home-proof-avatars" aria-hidden="true">
              <i>Q</i><i>+</i>
            </span>
            <span>Made for classrooms, events, and everything in between.</span>
          </div>
        </div>

        <div className="home-preview-wrap" aria-label="Live quiz preview">
          <div className="home-preview-glow" />
          <div className="home-preview-card">
            <div className="home-preview-top">
              <div className="home-preview-brand">
                <span className="home-preview-mark">✦</span>
                <span>MINDSpark <b>LIVE</b></span>
              </div>
              <span className="home-live-pill"><i /> ON AIR</span>
            </div>

            <div className="home-preview-score">
              <div className="home-score-team home-score-blue">
                <span><i>A</i> Team Aurora</span><strong>240</strong>
              </div>
              <div className="home-score-team home-score-pink">
                <span><i>B</i> Team Nova</span><strong>210</strong>
              </div>
            </div>

            <div className="home-question">
              <span className="home-question-label">ROUND 02 <i>•</i> SCIENCE</span>
              <p>Which planet has the most moons?</p>
              <div className="home-answer-grid">
                <span className="home-answer home-answer-red"><i>▲</i> Jupiter</span>
                <span className="home-answer home-answer-blue"><i>◆</i> Saturn</span>
                <span className="home-answer home-answer-yellow"><i>●</i> Neptune</span>
                <span className="home-answer home-answer-green"><i>■</i> Uranus</span>
              </div>
            </div>
            <div className="home-preview-footer">
              <span><i /> HOST CONTROL</span>
              <span>LIVE SCOREBOARD <b>↗</b></span>
            </div>
          </div>
          <span className="home-float-chip home-chip-top"><span>✦</span> THE CROWD IS IN</span>
          <span className="home-float-chip home-chip-bottom"><span>↗</span> 2 TEAMS · 1 ARENA</span>
        </div>
      </section>

      <section className="home-roles" id="how-it-works" aria-label="Choose your view">
        <Link className="home-role-card home-role-host" href="/admin">
          <div className="home-role-icon">⌘</div>
          <div className="home-role-content">
            <span className="home-role-kicker">FOR THE HOST</span>
            <h2>Run the whole show.</h2>
            <p>Choose questions, control the pace, manage teams, and shape the arena—all from one studio.</p>
            <span className="home-role-link">Enter host studio <b aria-hidden="true">→</b></span>
          </div>
          <span className="home-role-number">01</span>
        </Link>
        <Link className="home-role-card home-role-display" href="/display" target="_blank">
          <div className="home-role-icon">▣</div>
          <div className="home-role-content">
            <span className="home-role-kicker">FOR THE BIG SCREEN</span>
            <h2>Put the action on stage.</h2>
            <p>Show bold questions, live scores, and every big reveal on a projector or TV.</p>
            <span className="home-role-link">Open the display <b aria-hidden="true">↗</b></span>
          </div>
          <span className="home-role-number">02</span>
        </Link>
      </section>

      <section className="home-features" id="features">
        <div className="home-section-heading">
          <div>
            <span className="home-section-kicker">BUILT FOR THE BIG MOMENTS</span>
            <h2>Everything you need to bring the room to life.</h2>
          </div>
          <span className="home-section-note">One console. One shared moment.</span>
        </div>
        <div className="home-feature-grid">
          {features.map((feature, index) => (
            <article className="home-feature" key={feature.title}>
              <span className={`home-feature-icon home-feature-icon-${index + 1}`} aria-hidden="true">
                {feature.icon}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <Link className="home-brand" href="/">
          <span className="home-brand-mark" aria-hidden="true">✦</span>
          <span>mindspark<span className="home-brand-dot">.</span></span>
        </Link>
        <span>Make your next quiz one to remember.</span>
      </footer>
    </main>
  );
}
