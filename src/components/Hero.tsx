// =============================================================================
// LINCHPIN Learning — Catalog Hero
// =============================================================================

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="hero-label">THE LIBRARY</span>
        <h1 className="hero-heading">
          LINCHPIN <em>Learning</em>
        </h1>
        <p className="hero-subtitle">
          Courses built by practitioners, not professors. Every instructor has
          done the work — led the campaign, secured the grant, managed the
          crisis, passed the bill. This is where hard-won expertise becomes
          your competitive advantage.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">13</span>
            <span className="hero-stat-label">Courses</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">9</span>
            <span className="hero-stat-label">Instructors</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">158</span>
            <span className="hero-stat-label">Lessons</span>
          </div>
        </div>
      </div>
    </section>
  );
}
