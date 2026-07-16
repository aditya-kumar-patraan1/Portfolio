const eduItems = [
  {
    name: 'Maharaja Surajmal Institute, GGSIPU',
    detail: 'Bachelor of Computer Applications (BCA) · GPA: 9.87 / 10',
    date: '2023 - 2026',
    initial: 'M',
    color: '#dc2626',
    bg: '#fef2f2',
  },
  {
    name: 'LeetCode — Knight',
    detail: 'Rating: 1,922 · Rank #7,445 globally · Top 4% out of 5,000,000 · 1000+ problems solved',
    date: '2023 - Present',
    initial: '⚔️',
    color: '#f59e0b',
    bg: '#fffbeb',
  },
  {
    name: 'AI Prompt Competition',
    detail: '2nd Position — AI-themed inter-college competition',
    date: '2024',
    initial: '🥈',
    color: '#6366f1',
    bg: '#eef2ff',
  },
]

export default function Education() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 03</span>
      <h2 className="chapter-title fade-up">Education & Achievements</h2>
      <div className="work-list">
        {eduItems.map((item) => (
          <div key={item.name} className="work-item">
            <div
              className="work-logo"
              style={{ background: item.bg, color: item.color, borderColor: 'transparent', fontSize: '1.2rem' }}
            >
              {item.initial}
            </div>
            <div className="work-info">
              <div className="work-company">{item.name}</div>
              <div className="work-role">{item.detail}</div>
            </div>
            <div className="work-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
