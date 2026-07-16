import { useEffect } from 'react'

export default function KonamiOverlay({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="konami-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Konami easter egg"
    >
      <div className="konami-content" onClick={e => e.stopPropagation()}>
        <span className="konami-emoji" role="img" aria-label="Spider">🕷️</span>
        <p className="konami-title">Your Spider-Senses are tingling!</p>
        <p className="konami-sub">You found the secret code. True dev spotted. 🎉</p>
        <button className="konami-close" onClick={onClose}>
          Swing away
        </button>
      </div>
    </div>
  )
}
