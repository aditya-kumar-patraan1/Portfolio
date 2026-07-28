import SchoolImage from '../assets/school.png'
import KnightImage from '../assets/knight.png'

const eduItems = [
  {
    name: 'Spring Meadows Public School',
    detail: '🥇 1st Position — Commerce Stream · 🏆 Delhi Topper in Computer Science · 100 / 100',
    image: SchoolImage,
    color: '#16a34a',
    bg: '#ffffff',
    isCircle: true,
    link: 'https://springmeadowspublicschool.com/',
  },
  {
    name: 'LeetCode — Knight',
    detail: 'Rating: 1,922 · Rank #7,445 globally · Top 4% out of 5,000,000 · 1500+ problems solved',
    image: KnightImage,
    color: '#f59e0b',
    bg: 'transparent',
    isCircle: false,
  },
  {
    name: 'AI Prompt Competition',
    detail: '2nd Position — AI-themed inter-college competition',
    date: '2024',
    initial: '🥈',
    color: '#6366f1',
    bg: '#eef2ff',
    isCircle: true,
  },
]

export default function Education() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 03</span>
      <h2 className="chapter-title fade-up">Education & Achievements</h2>
      <div className="work-list">
        {eduItems.map((item) => {
          const logoEl = (
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: item.isCircle ? '50%' : '0',
                border: item.isCircle ? '1px solid var(--border-strong)' : 'none',
                background: item.isCircle ? item.bg : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.color,
                fontSize: '2rem',
                flexShrink: 0,
                overflow: item.isCircle ? 'hidden' : 'visible',
              }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: item.isCircle ? '6px' : '0px',
                    display: 'block',
                    mixBlendMode: item.isCircle ? 'multiply' : 'normal',
                  }}
                />
              ) : (
                item.initial
              )}
            </div>
          )

          const content = (
            <>
              {logoEl}
              <div className="work-info">
                <div className="work-company">{item.name}</div>
                <div className="work-role">{item.detail}</div>
              </div>
            </>
          )

          return item.link ? (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-item edu-item work-item-link"
            >
              {content}
            </a>
          ) : (
            <div key={item.name} className="work-item edu-item">
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
