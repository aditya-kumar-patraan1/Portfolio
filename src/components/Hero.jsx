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
          <span className="stat-number">1500+</span>
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
      <div className="hero-actions">
        <a
          href="https://res.cloudinary.com/dlkuodrjm/image/upload/v1784397498/AdityaResume_sqq6i4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
          View Resume
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-resume-arrow">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7,7 17,7 17,17"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
