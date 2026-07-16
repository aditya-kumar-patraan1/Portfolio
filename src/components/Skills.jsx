'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/data'

const cats = [
  { key: 'languages',   label: 'Languages',       prog: 'prog-indigo', tag: 'tag-indigo', accent: 'var(--indigo)',  icon: '</>' },
  { key: 'frameworks',  label: 'Frameworks',       prog: 'prog-emerald', tag: 'tag-emerald', accent: 'var(--emerald)', icon: '⚛' },
  { key: 'backend',     label: 'Backend',          prog: 'prog-cyan',   tag: 'tag-cyan',   accent: 'var(--cyan)',   icon: '⬡' },
  { key: 'databases',   label: 'Databases',        prog: 'prog-amber',  tag: 'tag-amber',  accent: 'var(--amber)',  icon: '◫' },
  { key: 'realtime',    label: 'Realtime / WebRTC',prog: 'prog-rose',   tag: 'tag-rose',   accent: 'var(--rose)',   icon: '◈' },
  { key: 'dataScience', label: 'Data Science',     prog: 'prog-amber',  tag: 'tag-amber',  accent: 'var(--amber)',  icon: '∫' },
  { key: 'tools',       label: 'Dev Tools',        prog: 'prog-indigo', tag: 'tag-indigo', accent: 'var(--indigo)', icon: '⚙' },
]

const SkillRow = ({ skill, prog }) => {
  const [fired, setFired] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setFired(true) }, { threshold: 0.4 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2 text-sm">
          <span>{skill.icon}</span>
          <span style={{ color: 'var(--text-2)' }}>{skill.name}</span>
        </div>
        <span className="mono text-xs font-bold" style={{ color: 'var(--text-3)' }}>{skill.level}%</span>
      </div>
      <div className="prog-track">
        <motion.div className={`prog-fill ${prog}`}
          initial={{ width: 0 }} animate={{ width: fired ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.1, ease: [0.4,0,0.2,1] }} />
      </div>
    </div>
  )
}

const SkillCard = ({ cat }) => {
  const data = portfolioData.skills[cat.key]
  if (!data?.length) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.55 }}
      className="bento p-6"
      style={{ borderLeft: `3px solid ${cat.accent}` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-lg"
          style={{ background: `${cat.accent}15`, border: `1px solid ${cat.accent}30`, color: cat.accent }}>
          {cat.icon}
        </div>
        <h3 className="syne font-bold text-sm" style={{ color: 'var(--text-1)' }}>{cat.label}</h3>
        <span className={`tag ${cat.tag} ml-auto`}>{data.length} skills</span>
      </div>
      <div className="space-y-4">
        {data.map((s) => <SkillRow key={s.name} skill={s} prog={cat.prog} />)}
      </div>
    </motion.div>
  )
}

const Skills = () => (
  <section id="skills" className="section" style={{ background: 'var(--bg-0)' }}>
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, var(--emerald), var(--cyan), transparent)' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
        <p className="mono text-xs mb-3" style={{ color: 'var(--text-3)' }}>// 02. skills</p>
        <h2 className="syne text-4xl sm:text-5xl font-extrabold" style={{ color: 'var(--text-1)' }}>
          Technical<br />
          <span className="text-gradient-indigo">Arsenal.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {cats.map((c) => <SkillCard key={c.key} cat={c} />)}
      </div>

      {/* Soft skills row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: '🧩', title: 'Problem Solving', desc: 'Analytical & creative thinking', color: 'var(--amber)' },
          { icon: '🤝', title: 'Collaboration',   desc: 'Agile team environments',        color: 'var(--emerald)' },
          { icon: '📚', title: 'Always Learning', desc: 'Staying current with tech',       color: 'var(--indigo)' },
        ].map(({ icon, title, desc, color }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="card-brutal p-5 text-center"
          >
            <div className="text-3xl mb-3">{icon}</div>
            <p className="syne font-bold text-sm mb-1" style={{ color }}>{title}</p>
            <p className="mono text-xs" style={{ color: 'var(--text-3)' }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills