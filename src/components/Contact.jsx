const contacts = [
  {
    name: 'Email',
    note: 'adityakrp2006@gmail.com',
    href: 'mailto:adityakrp2006@gmail.com',
  },
  {
    name: 'GitHub',
    note: 'github.com/aditya-kumar-patraan1',
    href: 'https://github.com/aditya-kumar-patraan1',
    external: true,
  },
  {
    name: 'LinkedIn',
    note: 'linkedin.com/in/aditya-kumar--',
    href: 'https://www.linkedin.com/in/aditya-kumar--/',
    external: true,
  },
  {
    name: 'LeetCode',
    note: 'leetcode.com/u/Adi_12321 — Knight · Rating 1922',
    href: 'https://leetcode.com/u/Adi_12321/',
    external: true,
  },
]

export default function Contact() {
  return (
    <section className="chapter">
      <span className="chapter-tag fade-up">Chapter 08</span>
      <h2 className="chapter-title fade-up">Say hello</h2>
      <p className="contact-intro fade-up">
        Open to interesting work, collaborations, or cool ideas. I read everything that isn&apos;t a pitch.
      </p>
      <div className="contact-list">
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.href}
            className="contact-item fade-up"
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
            style={{ textDecoration: 'none' }}
          >
            <div className="contact-item-left">
              <span className="contact-name">{c.name}</span>
              <span className="contact-note" style={{ marginTop: '5px', display: 'block' }}>{c.note}</span>
            </div>
            <span className="contact-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}

