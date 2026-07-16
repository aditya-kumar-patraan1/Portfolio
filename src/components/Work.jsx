import SapImage from "../assets/sap.png"

const workItems = [
  {
    company: 'SAP Labs India',
    role: 'Scholar — upcoming opportunity (SAP Labs India Scholar Program)',
    date: '2026',
    image: SapImage,
    color: '#0070f3',
    bg: '#e0f0ff',
  },
  {
    company: 'Maharaja Surajmal Institute, GGSIPU',
    role: 'BCA — GPA 9.87 / 10 · Data Structures, Full-Stack, DBMS, Networking',
    date: '2023 - 2026',
    image: '🎓',
    color: '#dc2626',
    bg: '#fef2f2',
  },
]

function WorkLogo({ item }) {
  return (
    <div
      // 1. Added flex-shrink-0 so the text next to the logo doesn't squash the box
      className="work-logo flex-shrink-0 flex items-center justify-center overflow-hidden"
      style={{ background: item.bg, color: item.color, borderColor: 'transparent' }}
    >
      {item.image ? (
        <img 
          src={item.image} 
          // 2. Used !object-contain (with Tailwind's ! important modifier) and reduced padding to p-1.5
          className="work-logo-img w-full h-full !object-contain p-1.5 block" 
          // 3. Inline style guarantees it overrides any conflicting global CSS rules
          style={{ objectFit: 'contain' }}
          alt={item.company} 
        />
      ) : (
        <span className="select-none font-medium text-xl">{item.icon}</span>
      )}
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

