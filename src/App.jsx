import { useState, useEffect, useCallback } from 'react'
import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Education from './components/Education'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import KonamiOverlay from './components/KonamiOverlay'
import SpiderCursor from './components/SpiderCursor'

const KONAMI_SEQ = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight']

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [konamiActive, setKonamiActive] = useState(false)
  const [konamiKeys, setKonamiKeys] = useState([])

  /* Apply / remove .light class on body */
  useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }
  }, [lightMode])

  /* Konami code */
  const handleKeyDown = useCallback((e) => {
    setKonamiKeys(prev => {
      const next = [...prev, e.key].slice(-KONAMI_SEQ.length)
      if (JSON.stringify(next) === JSON.stringify(KONAMI_SEQ)) {
        setKonamiActive(true)
      }
      return next
    })
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  /* Scroll fade-up animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  })

  return (
    <>
      {/* Top-left web corner */}
      <svg className="web-corner web-corner-tl" width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.15">
          {[0, 25, 50, 75, 100, 125, 150, 175, 200].map(v => (
            <line key={v} x1="0" y1="0" x2={v} y2="200" />
          ))}
          {[40, 80, 120, 160].map(r => (
            <path key={r} d={`M${r},0 Q${r * 0.3},${r * 0.3} 0,${r}`} />
          ))}
        </g>
      </svg>

      {/* Top-right web corner */}
      <svg className="web-corner web-corner-tr" width="200" height="200" viewBox="0 0 200 200" aria-hidden="true">
        <g stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.15">
          {[0, 25, 50, 75, 100, 125, 150, 175, 200].map(v => (
            <line key={v} x1="0" y1="0" x2={v} y2="200" />
          ))}
          {[40, 80, 120, 160].map(r => (
            <path key={r} d={`M${r},0 Q${r * 0.3},${r * 0.3} 0,${r}`} />
          ))}
        </g>
      </svg>

      {/* Interactive spider on canvas */}
      <SpiderCursor />

      <div className="page-wrapper">
        <div className="container">
          <div className="header-label fade-up">
            <span>🕷</span>
            <span>FRIENDLY NEIGHBORHOOD</span>
            <span className="slash">/</span>
            <span>PORTFOLIO 2026</span>
          </div>

          <Hero />
          <About />
          <Work />
          <Education />
          <Stack />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

      <FloatingNav lightMode={lightMode} setLightMode={setLightMode} />

      {konamiActive && <KonamiOverlay onClose={() => setKonamiActive(false)} />}
    </>
  )
}

export default App
