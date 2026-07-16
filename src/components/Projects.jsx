'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/data'

const techTagColor = (tech) => {
  const map = {
    React: 'tag-cyan', 'Next.js': 'tag-indigo', 'Node.js': 'tag-emerald',
    MongoDB: 'tag-emerald', 'Express.js': 'tag-indigo', 'Tailwind CSS': 'tag-cyan',
    'Socket.IO': 'tag-rose', WebRTC: 'tag-rose', 'Gemini Api': 'tag-amber',
    'Gemini API': 'tag-amber', JavaScript: 'tag-amber', Python: 'tag-indigo',
    Sockets: 'tag-rose',
  }
  return map[tech] || 'tag-indigo'
}

const ProjectCard = ({ project, i }) => {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [hover, setHover] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    setPos({ x, y })
    setTilt({
      x: -((e.clientY - r.top) / r.height - 0.5) * 10,
      y: ((e.clientX - r.left) / r.width - 0.5) * 10,
    })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, delay: i * 0.08 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setTilt({ x: 0, y: 0 }) }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="bento flex flex-col group h-full relative overflow-hidden"
    >
      {/* Spotlight */}
      <div className="absolute inset-0 pointer-events-none rounded-[20px] z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(129,140,248,0.14) 0%, transparent 55%)`,
          opacity: hover ? 1 : 0,
        }} />

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img src={project.image} alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hover ? 1.07 : 1 }} transition={{ duration: 0.5 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-2)] via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 z-20">
          <span className="tag tag-indigo">{project.category}</span>
          {project.featured && (
            <span className="tag tag-amber flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> Featured
            </span>
          )}
        </div>

        {/* Quick links on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3 z-20"
          initial={{ opacity: 0 }} animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110"
            style={{ background: 'rgba(99,102,241,0.85)' }}>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.7)' }}>
            <Github className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 relative z-10">
        <h3 className="syne font-bold text-lg mb-2 group-hover:text-gradient-indigo transition-colors"
          style={{ color: 'var(--text-1)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1 mb-4 line-clamp-3" style={{ color: 'var(--text-2)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span key={t} className={`tag ${techTagColor(t)}`}>{t}</span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto pt-2 border-t" style={{ borderColor: 'var(--border-2)' }}>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="btn btn-indigo flex-1 justify-center py-2 text-xs">
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost flex items-center gap-1.5 px-3 py-2 text-xs">
            <Github className="w-3.5 h-3.5" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => (
  <section id="projects" className="section relative" style={{ background: 'var(--bg-1)' }}>
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, var(--amber), var(--rose), transparent)' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
        <p className="mono text-xs mb-3" style={{ color: 'var(--text-3)' }}>// 03. projects</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="syne text-4xl sm:text-5xl font-extrabold" style={{ color: 'var(--text-1)' }}>
            Featured<br />
            <span className="text-gradient-warm">Work.</span>
          </h2>
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost flex items-center gap-2 self-start sm:self-auto text-sm">
            <Github className="w-4 h-4" />
            View GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} i={i} />
        ))}
      </div>
    </div>
  </section>
)

export default Projects