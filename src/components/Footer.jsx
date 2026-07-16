'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Github, Linkedin, Instagram, ArrowUp, Terminal } from 'lucide-react'
import { portfolioData } from '../data/data'

const Footer = () => {
  const [fab, setFab] = useState(false)
  useEffect(() => {
    const h = () => setFab(window.scrollY > 400)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const year = new Date().getFullYear()
  const links = [
    { name: 'About', href: '#about' }, { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }, { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]
  const socials = [
    { href: portfolioData.personal.github,    Icon: Github,    label: 'GitHub' },
    { href: portfolioData.personal.linkedin,  Icon: Linkedin,  label: 'LinkedIn' },
    { href: portfolioData.personal.instagram, Icon: Instagram, label: 'Instagram' },
  ]

  return (
    <>
      <footer style={{ background: 'var(--bg-0)', borderTop: '1px solid var(--border-2)' }}>
        {/* Rainbow line */}
        <div className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, var(--indigo), var(--emerald), var(--amber), var(--rose), var(--cyan), var(--indigo))' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center border"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)', borderColor: 'rgba(129,140,248,0.4)' }}>
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                <div className="syne font-bold text-xl">
                  <span style={{ color: 'var(--text-1)' }}>Aditya</span>
                  <span className="text-gradient-indigo">.</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-3)' }}>
                {portfolioData.personal.tagline}
              </p>
              <div className="flex gap-2">
                {socials.map(({ href, Icon, label }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all"
                    style={{ background: 'var(--surface)', borderColor: 'var(--border-2)', color: 'var(--text-3)' }}
                    whileHover={{ scale: 1.12, color: 'var(--indigo-bright)', borderColor: 'rgba(129,140,248,0.4)' }}>
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <p className="mono text-xs uppercase tracking-wider mb-5" style={{ color: 'var(--text-3)' }}>Sections</p>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.name}>
                    <button
                      onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm transition-colors focus:outline-none hover:translate-x-1 transform inline-block"
                      style={{ color: 'var(--text-2)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--indigo-bright)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                    >
                      <span style={{ color: 'var(--indigo)', marginRight: 6 }}>›</span>{l.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact snippet */}
            <div>
              <p className="mono text-xs uppercase tracking-wider mb-5" style={{ color: 'var(--text-3)' }}>Contact</p>
              <div className="space-y-2.5 text-sm" style={{ color: 'var(--text-2)' }}>
                <a href={`mailto:${portfolioData.personal.email}`}
                  className="block transition-colors"
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--indigo-bright)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}>
                  {portfolioData.personal.email}
                </a>
                <p style={{ color: 'var(--text-3)' }}>{portfolioData.personal.location}</p>
                <div className="flex items-center gap-2 mono text-xs mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span style={{ color: 'var(--emerald)' }}>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t" style={{ borderColor: 'var(--border-2)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="mono text-xs flex items-center gap-1.5" style={{ color: 'var(--text-3)' }}>
              © {year} <span style={{ color: 'var(--indigo-bright)' }}>{portfolioData.personal.name}</span>
              <span className="mx-1">·</span>
              Built with <Heart className="w-3 h-3 text-rose-500 fill-current" /> and caffeine ☕
            </div>
            <div className="mono text-xs" style={{ color: 'var(--text-3)' }}>
              Next.js · Tailwind · Framer Motion
            </div>
          </div>
        </div>
      </footer>

      {/* FAB */}
      <AnimatePresence>
        {fab && (
          <motion.button
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center text-white border focus:outline-none"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #818cf8)',
              borderColor: 'rgba(129,140,248,0.4)',
              boxShadow: '0 0 24px rgba(99,102,241,0.4)',
            }}
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.93 }}>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer