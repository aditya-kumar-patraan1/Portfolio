export default function Hero() {
  return (
    <section className="hero fade-up">
      <h1 className="hero-name">
        <span className="hi">Hi, I'm </span>
        <span className="name">Aditya.</span>
      </h1>
      <p className="hero-subtitle">
        Full-Stack Developer & DSA enthusiast — turning logic into clean code and complex problems into elegant solutions.
      </p>
      <hr className="hero-divider" />
      <div className="hero-stats">
        <div className="fade-up">
          <span className="stat-number">1000+</span>
          <span className="stat-label">LeetCode problems</span>
        </div>
        <div className="fade-up">
          <span className="stat-number">Knight</span>
          <span className="stat-label">LeetCode rank (1922 rating)</span>
        </div>
        <div className="fade-up">
          <span className="stat-number">Top 4%</span>
          <span className="stat-label">Global rank #7,445</span>
        </div>
      </div>
    </section>
  )
}
