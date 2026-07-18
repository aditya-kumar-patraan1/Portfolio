import SapImage from "../assets/sap.png"
import MsiImage from "../assets/MSI.png"

const workItems = [
  {
    company: 'SAP Labs India',
    role: 'Scholar — upcoming opportunity (SAP Labs India Scholar Program)',
    date: '2026',
    image: SapImage,
    color: '#0070f3',
    bg: '#ffffff',
    imgPad: '4px',
    link: 'https://www.sap.com/india/index.html',
  },
  {
    company: 'Maharaja Surajmal Institute, GGSIPU',
    role: 'BCA — GPA 9.87 / 10 · Data Structures, Full-Stack, DBMS, Networking',
    date: '2023 - 2026',
    image: MsiImage,
    color: '#dc2626',
    bg: '#fef2f2',
    imgPad: '6px',
    link: 'https://www.msijanakpuri.com/',
  },
]

function WorkLogo({ item }) {
  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.14)',
        background: item.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.company}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            padding: item.imgPad || '4px',
            display: 'block',
            mixBlendMode: 'multiply',
          }}
        />
      ) : (
        <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.icon}</span>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 02</span>
      <h2 className="chapter-title fade-up">Work &amp; Education</h2>
      <div className="work-list">
        {workItems.map((item) => (
          <a
            key={item.company}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-item work-item-link"
          >
            <WorkLogo item={item} />
            <div className="work-info">
              <div className="work-company">{item.company}</div>
              <div className="work-role">{item.role}</div>
            </div>
            <div className="work-date">{item.date}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
