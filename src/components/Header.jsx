'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Github, Linkedin, Terminal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'
import { portfolioData } from '../data/data'

const navItems = [
  { name: 'About',     href: '#about',     section: true },
  { name: 'Projects',  href: '#projects',  section: true },
  { name: 'Skills',    href: '#skills',    section: true },
  { name: 'Education', href: '#education', section: true },
  { name: 'Resume',    href: '/resume',    section: false },
  { name: 'Leetcode',  href: '/leetcode',  section: false },
  { name: 'Contact',   href: '#contact',   section: true },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['home', 'about', 'projects', 'skills', 'education', 'contact']
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35, rootMargin: '-70px 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const go = async (item) => {
    setOpen(false)
    if (item.section) {
      if (pathname === '/') {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        await router.push(`/?section=${item.href.slice(1)}`)
      }
    } else {
      router.push(item.href)
    }
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6,6,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center border"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #818cf8)',
                borderColor: 'rgba(129,140,248,0.5)',
              }}>
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div className="syne font-bold text-lg leading-none">
              <span style={{ color: 'var(--text-1)' }}>Aditya</span>
              <span className="text-gradient-indigo">.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = item.section && active === item.href.slice(1)
              return (
                <button
                  key={item.name}
                  onClick={() => go(item)}
                  className="nav-link focus:outline-none mono text-xs"
                  style={{ color: isActive ? 'var(--indigo-bright)' : 'var(--text-2)', background: isActive ? 'rgba(129,140,248,0.08)' : undefined }}
                >
                  {isActive && <span className="mr-1 text-emerald-400">›</span>}
                  {item.name}
                </button>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
              style={{ background: 'var(--surface)', borderColor: 'var(--border-2)', color: 'var(--text-2)' }}
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
              style={{ background: 'var(--surface)', borderColor: 'var(--border-2)', color: 'var(--text-2)' }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <div className="w-px h-5 mx-1" style={{ background: 'var(--border-2)' }} />
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-lg flex items-center justify-center border focus:outline-none"
              style={{ background: 'var(--surface)', borderColor: 'var(--border-2)', color: 'var(--text-2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {open
                  ? <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.15 }}><X className="w-4 h-4" /></motion.div>
                  : <motion.div key="m" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.15 }}><Menu className="w-4 h-4" /></motion.div>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t"
            style={{ background: 'rgba(6,6,15,0.96)', backdropFilter: 'blur(20px)', borderColor: 'var(--border-2)' }}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => go(item)}
                  className="w-full text-left px-4 py-2.5 rounded-lg text-sm mono transition-all focus:outline-none"
                  style={{ color: active === item.href.slice(1) ? 'var(--indigo-bright)' : 'var(--text-2)' }}
                >
                  {active === item.href.slice(1) && <span className="mr-2 text-emerald-400">›</span>}
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
