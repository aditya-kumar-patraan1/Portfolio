'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, ExternalLink, Code2, Zap, Trophy } from 'lucide-react'
import { portfolioData } from '../data/data'
import AnimatedBackground from './AnimatedBackground'

const ROLES = [
  'Full Stack Developer',
  'DSA Enthusiast',
  'LeetCode Knight ⚔️',
  'React Engineer',
  'Problem Solver',
]

const Typewriter = () => {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const curr = ROLES[idx]
    let timer
    if (paused) {
      timer = setTimeout(() => { setPaused(false); setDel(true) }, 1800)
    } else if (del) {
      if (txt.length === 0) { setDel(false); setIdx((i) => (i + 1) % ROLES.length) }
      else { timer = setTimeout(() => setTxt(t => t.slice(0, -1)), 35) }
    } else {
      if (txt === curr) { setPaused(true) }
      else { timer = setTimeout(() => setTxt(curr.slice(0, txt.length + 1)), 70) }
    }
    return () => clearTimeout(timer)
  }, [txt, del, paused, idx])

  return (
    <span className="mono" style={{ color: 'var(--emerald)' }}>
      {txt}
      <span className="animate-blink ml-0.5" style={{ borderRight: '2px solid var(--emerald)' }}>&nbsp;</span>
    </span>
  )
}

const statData = [
  { val: '20+', label: 'Projects', icon: Code2,  color: 'var(--indigo)' },
  { val: '1900+', label: 'LC Rating', icon: Zap,   color: 'var(--emerald)' },
  { val: '9.87', label: 'GPA',      icon: Trophy, color: 'var(--amber)' },
]

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const h = (e) => setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 14,
      y: (e.clientY / window.innerHeight - 0.5) * 14,
    })
    window.addEventListener('mousemove', h, { passive: true })
    return () => window.removeEventListener('mousemove', h)
  }, [])

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }
  const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] } } }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg-0)' }}>
      <AnimatedBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

          {/* TEXT */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-7 max-w-2xl">

            {/* Status chip */}
            <motion.div variants={item}>
              <span className="tag tag-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="space-y-1">
              <p className="mono text-sm" style={{ color: 'var(--text-3)' }}>// hello world</p>
              <h1 className="syne font-extrabold tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.05 }}>
                <span style={{ color: 'var(--text-1)' }}>I'm </span>
                <span className="text-gradient-indigo">Aditya</span>
                <br />
                <span style={{ color: 'var(--text-1)' }}>Kumar</span>
                <span style={{ color: 'var(--amber)' }}>.</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={item} className="text-lg sm:text-xl font-medium" style={{ color: 'var(--text-2)' }}>
              &lt; <Typewriter /> /&gt;
            </motion.div>

            {/* Tagline */}
            <motion.p variants={item} className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              {portfolioData.personal.tagline} Ranked{' '}
              <span className="text-gradient-indigo font-bold">Top 3% globally</span>{' '}
              on LeetCode with a{' '}
              <span style={{ color: 'var(--amber)', fontWeight: 700 }}>Knight badge</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <motion.button
                className="btn btn-indigo"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-4 h-4" />
                Get In Touch
              </motion.button>
              <motion.a
                href="/aditya_resume.pdf" download
                className="btn btn-outline"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-3">
              {[
                { href: portfolioData.personal.github,   Icon: Github,   label: 'GitHub' },
                { href: portfolioData.personal.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:scale-110"
                  style={{ background: 'var(--surface-2)', borderColor: 'var(--border-2)', color: 'var(--text-2)' }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              <span className="mono text-xs" style={{ color: 'var(--text-3)' }}>
                {portfolioData.personal.location}
              </span>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              {statData.map(({ val, label, icon: Icon, color }) => (
                <div key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                  style={{ background: 'var(--bg-2)', borderColor: 'var(--border-2)' }}
                >
                  <Icon className="w-4 h-4" style={{ color }} />
                  <div>
                    <div className="syne font-bold text-sm" style={{ color }}>{val}</div>
                    <div className="mono text-[10px]" style={{ color: 'var(--text-3)' }}>{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25,0.46,0.45,0.94] }}
            className="flex justify-center"
            style={{
              transform: `perspective(800px) rotateX(${mouse.y * 0.15}deg) rotateY(${mouse.x * 0.15}deg)`,
              transition: 'transform 0.12s ease-out',
            }}
          >
            <div className="relative">
              {/* Spinning border ring */}
              <motion.div
                className="absolute rounded-full animate-spin-slow"
                style={{
                  inset: '-4px',
                  background: 'conic-gradient(from 0deg, #6366f1, #34d399, #fbbf24, #fb7185, #6366f1)',
                  borderRadius: '50%',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-0)' }} />
              </motion.div>

              {/* Image */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2"
                style={{ borderColor: 'var(--bg-0)' }}>
                <Image src="/image.png" alt={portfolioData.personal.name} width={320} height={320}
                  className="w-full h-full object-cover" priority />
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, transparent 60%)' }} />
              </div>

              {/* Floating badges */}
              {[
                { txt: '⚔️ Knight', sub: 'LeetCode', pos: 'top-2 -right-14', color: 'var(--indigo)', delay: 1.1 },
                { txt: '🏆 #1',    sub: 'Uni Topper', pos: '-bottom-2 -left-16', color: 'var(--amber)',   delay: 1.3 },
                { txt: '🟩 MERN',  sub: 'Stack', pos: 'top-1/2 -left-16 -translate-y-1/2', color: 'var(--emerald)', delay: 1.5 },
              ].map(({ txt, sub, pos, color, delay }) => (
                <motion.div key={txt}
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, type: 'spring', stiffness: 280, damping: 22 }}
                  className={`absolute ${pos} px-3 py-1.5 rounded-xl border text-xs font-bold z-20`}
                  style={{ background: 'var(--bg-1)', borderColor: color, color, boxShadow: `0 0 12px ${color}44` }}
                >
                  <div>{txt}</div>
                  <div className="mono text-[9px] opacity-60">{sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-1.5 focus:outline-none group"
          aria-label="Scroll down"
        >
          <span className="mono text-[10px]" style={{ color: 'var(--text-3)' }}>scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4" style={{ color: 'var(--indigo)' }} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
