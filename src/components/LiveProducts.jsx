const products = [
  {
    name: 'CodeDoodle',
    desc: 'Real-time code collaboration with WebRTC & AI',
    tags: ['React', 'Socket.IO', 'WebRTC'],
    url: 'https://code-doodle-editor.vercel.app/',
  },
  {
    name: 'IntelliCare',
    desc: 'AI-powered medical platform with hospital locator',
    tags: ['React', 'Gemini API', 'WebRTC'],
    url: 'https://intelli-care.vercel.app/',
  },
  {
    name: 'ElvaTree',
    desc: 'Dashboard & raffle platform with AI code reviewer',
    tags: ['React', 'JavaScript'],
    url: 'https://evaltree-dashboard.vercel.app/',
  },
  {
    name: 'Code Reviewer',
    desc: 'AI-powered instant code feedback tool',
    tags: ['React', 'Gemini API'],
    url: 'https://codedoodle.onrender.com/',
  },
]

export default function LiveProducts() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 05</span>
      <h2 className="chapter-title fade-up">Live Products</h2>
      <div className="products-grid">
        {products.map((p) => (
          <a
            key={p.name}
            href={p.url}
            className="product-card fade-up"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div className="product-status">Live</div>
            <div className="product-name">{p.name}</div>
            <div className="product-desc">{p.desc}</div>
            <div className="product-tags">
              {p.tags.map(t => (
                <span key={t} className="product-tag">{t}</span>
              ))}
            </div>
            <span className="product-visit">
              Visit ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
