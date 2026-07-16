'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Lightbulb, Trophy, Rocket, ChevronRight } from 'lucide-react'
import { portfolioData } from '../data/data'

const useCount = (target, run) => {
  const [n, setN] = useState(0)
  const num = parseInt(target.replace(/\D/g, '')) || 0
  const suf = target.replace(/[0-9]/g, '')
  useEffect(() => {
    if (!run || !num) return
    let v = 0
    const step = num / 80
    const t = setInterval(() => {
      v += step
      if (v >= num) { setN(num); clearInterval(t) }
      else setN(Math.floor(v))
    }, 16)
    return () => clearInterval(t)
  }, [run, num])
  return `${n}${suf}`
}

const StatBox = ({ stat, i }) => {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  const val = useCount(stat.value, vis)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.5 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  const colors = ['var(--indigo)', 'var(--emerald)', 'var(--amber)', 'var(--rose)']
  const c = colors[i % colors.length]
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
      className="bento p-6 text-center"
    >
      <div className="syne text-3xl font-black mb-1" style={{ color: c }}>{val}</div>
      <div className="mono text-xs" style={{ color: 'var(--text-3)' }}>{stat.label}</div>
    </motion.div>
  )
}

const pills = [
  { Icon: Code,      label: 'Development', bg: '#6366f110', border: '#6366f130', color: 'var(--indigo)' },
  { Icon: Database,  label: 'Backend',     bg: '#10b98110', border: '#10b98130', color: 'var(--emerald)' },
  { Icon: Lightbulb, label: 'DSA',         bg: '#f59e0b10', border: '#f59e0b30', color: 'var(--amber)' },
  { Icon: Trophy,    label: 'Excellence',  bg: '#fb718510', border: '#fb718530', color: 'var(--rose)' },
]

const About = () => (
  <section id="about" className="section relative" style={{ background: 'var(--bg-1)' }}>
    {/* Section marker */}
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, var(--indigo), var(--emerald), transparent)' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
        <p className="mono text-xs mb-3" style={{ color: 'var(--text-3)' }}>// 01. about</p>
        <h2 className="syne text-4xl sm:text-5xl font-extrabold" style={{ color: 'var(--text-1)' }}>
          Crafting Digital<br />
          <span className="text-gradient-indigo">Solutions.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT */}
        <div className="space-y-6">
          <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            {portfolioData.about.description}
          </motion.p>

          {/* Highlights */}
          <div className="space-y-2.5">
            {portfolioData.about.highlights.map((h, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-accent flex items-center gap-3 px-4 py-3 text-sm"
              >
                <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--indigo)' }} />
                <span style={{ color: 'var(--text-2)' }}>{h}</span>
              </motion.div>
            ))}
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {pills.map(({ Icon, label, bg, border, color }, i) => (
              <motion.div key={label}
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.08 }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm font-medium"
                style={{ background: bg, borderColor: border, color }}
              >
                <Icon className="w-4 h-4" />
                {label}
              </motion.div>
            ))}
          </div>

          {/* Always learning */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="card-brutal flex items-center gap-4 p-4 mt-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, var(--indigo), var(--emerald))' }}>
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: 'var(--text-1)' }}>Always Learning</p>
              <p className="text-xs mono mt-0.5" style={{ color: 'var(--text-3)' }}>
                new_tech.forEach(t =&gt; skill.push(t))
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioData.about.stats.map((s, i) => <StatBox key={i} stat={s} i={i} />)}
          </div>

          {/* LeetCode card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="bento p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.25)' }}>⚡</div>
              <div>
                <p className="font-bold" style={{ color: 'var(--text-1)' }}>LeetCode Knight</p>
                <p className="mono text-xs" style={{ color: 'var(--text-3)' }}>1900+ Rating · Top 3% Globally</p>
              </div>
              <span className="tag tag-amber ml-auto">Knight</span>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Global Rank', val: 'Top 3%', w: '97%', cls: 'prog-amber' },
                { label: 'Problems Solved', val: '1200+', w: '82%', cls: 'prog-indigo' },
                { label: 'Contest Rating', val: '1900+', w: '76%', cls: 'prog-emerald' },
              ].map(({ label, val, w, cls }) => (
                <div key={label}>
                  <div className="flex justify-between mono text-xs mb-1.5" style={{ color: 'var(--text-3)' }}>
                    <span>{label}</span><span style={{ color: 'var(--text-2)' }}>{val}</span>
                  </div>
                  <div className="prog-track">
                    <motion.div className={`prog-fill ${cls}`}
                      initial={{ width: 0 }} whileInView={{ width: w }}
                      viewport={{ once: true }} transition={{ duration: 1.3, ease: [0.4,0,0.2,1], delay: 0.3 }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* University topper */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.35 }}
            className="bento p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.25)' }}>🎓</div>
            <div>
              <p className="font-bold" style={{ color: 'var(--text-1)' }}>University Topper 🏆</p>
              <p className="mono text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>GPA: 9.873/10 · MSI, GGSIPU</p>
            </div>
            <span className="tag tag-indigo ml-auto">#1</span>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
)

export default About