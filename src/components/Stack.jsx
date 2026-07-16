const stackData = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'HTML/CSS', 'C++', 'SQL'],
  },
  {
    category: 'Problem Solving',
    items: ['Data Structures & Algorithms'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'MERN Stack', 'Socket.IO', 'Django', 'FastAPI'],
  },
  {
    category: 'Developer Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Postman', 'Vercel', 'Render', 'WebRTC'],
  },
  {
    category: 'Databases & APIs',
    items: ['MongoDB', 'REST APIs', 'Gemini API', 'GROQ API', 'Overpass API'],
  },
]

export default function Stack() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 04</span>
      <h2 className="chapter-title fade-up">Stack</h2>
      <div className="stack-grid">
        {stackData.map((row) => (
          <div key={row.category} className="stack-row">
            <div className="stack-category">{row.category}</div>
            <div className="stack-items">
              {row.items.map((item) => (
                <span key={item} className="stack-item">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
