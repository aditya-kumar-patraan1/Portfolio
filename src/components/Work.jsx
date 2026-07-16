const workItems = [
  {
    company: 'SAP Labs India',
    role: 'Scholar — upcoming opportunity (SAP Labs India Scholar Program)',
    date: '2026',
    initial: 'S',
    color: '#0070f3',
    bg: '#e0f0ff',
  },
  {
    company: 'Geek Room MSIT Chapter',
    role: 'Head of Development — community of 25,000+ developers',
    date: 'Sept 2023 - Present',
    initial: '🚀',
    color: '#0ea5e9',
    bg: '#e0f2fe',
  },
  {
    company: 'Maharaja Surajmal Institute, GGSIPU',
    role: 'BCA — GPA 9.87 / 10 · Data Structures, Full-Stack, DBMS, Networking',
    date: '2023 - 2026',
    initial: 'M',
    color: '#dc2626',
    bg: '#fef2f2',
  },
]

function WorkLogo({ item }) {
  return (
    <div
      className="work-logo"
      style={{ background: item.bg, color: item.color, borderColor: 'transparent' }}
    >
      {item.initial}
    </div>
  )
}

export default function Work() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 02</span>
      <h2 className="chapter-title fade-up">Work & Education</h2>
      <div className="work-list">
        {workItems.map((item) => (
          <div key={item.company} className="work-item">
            <WorkLogo item={item} />
            <div className="work-info">
              <div className="work-company">{item.company}</div>
              <div className="work-role">{item.role}</div>
            </div>
            <div className="work-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

