import CodedoodleBanner from '../assets/CodedoodleBanner.png'
import IntellicareBanner from '../assets/IntellicareBanner.png'
import CalmnestBanner from '../assets/CalmnestBanner.png'

const projects = [
  {
    name: 'CodeDoodle — Real-time Code Collaboration',
    date: '2024',
    desc: 'A real-time code collaboration platform where developers can code together, meet face-to-face via WebRTC, use an AI chatbot & code reviewer, and save code in multiple programming languages.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'Gemini API'],
    website: 'https://code-doodle-editor.vercel.app/',
    source: 'https://github.com/aditya-kumar-patraan1/Code-Doodle-Editor',
    banner: CodedoodleBanner,
  },
  {
    name: 'IntelliCare — AI Medical Platform',
    date: '2024',
    desc: 'An AI-based medical platform where users can locate nearby hospitals, schedule face-to-face meetings via WebRTC, get AI remedy suggestions, manage appointments, and save documents as PDFs.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'Gemini API', 'Express.js'],
    website: 'https://intelli-care.vercel.app/',
    source: 'https://github.com/aditya-kumar-patraan1/Dr_IntelliCare',
    banner: IntellicareBanner,
  },
  {
    name: 'ElvaTree — Dashboard & Raffle Platform',
    date: '2024',
    desc: 'A feature-rich dashboard with a raffle system, buy/sell credits to win prizes, transaction analysis, and an AI code reviewer that detects errors and suggests correct code.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    website: 'https://evaltree-dashboard.vercel.app/',
    source: 'https://github.com/aditya-kumar-patraan1/ElvaTree-Task',
    banner: '/elvatree_banner.png',
  },
  {
    name: 'CalmNest — Mental Wellness Platform',
    date: '2024',
    desc: 'A mental wellness platform offering guided meditation, mood journaling, breathing exercises, real-time AI support via Zen AI chatbot, and a personal mindfulness dashboard.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Gemini API'],
    website: 'https://calm-nest-iota.vercel.app/',
    source: 'https://github.com/aditya-kumar-patraan1/CalmNest',
    banner: CalmnestBanner,
  },
]

export default function Projects() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 05</span>
      <h2 className="chapter-title fade-up">Selected Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.name} className="project-card">
            <div className="project-banner">
              <img src={p.banner} alt={p.name} loading="lazy" />
            </div>
            <div className="project-body">
              <div className="project-date">{p.date}</div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.website && (
                  <a href={p.website} className="btn-project btn-project-primary" target="_blank" rel="noopener noreferrer">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                    Website
                  </a>
                )}
                {p.source && (
                  <a href={p.source} className="btn-project btn-project-secondary" target="_blank" rel="noopener noreferrer">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

