'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Star, BookOpen, Award, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '../data/data'

const { education: edu } = portfolioData
const issuerTag = { IBM: 'tag-cyan', HackerRank: 'tag-emerald', OneRoadmap: 'tag-indigo' }

const Education = () => (
  <section id="education" className="section relative" style={{ background: 'var(--bg-0)' }}>
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: 'linear-gradient(90deg, transparent, var(--indigo), var(--cyan), transparent)' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="mb-16">
        <p className="mono text-xs mb-3" style={{ color: 'var(--text-3)' }}>// 04. education</p>
        <h2 className="syne text-4xl sm:text-5xl font-extrabold" style={{ color: 'var(--text-1)' }}>
          Academic<br />
          <span className="text-gradient-indigo">Journey.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* Main card */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bento p-8" style={{ borderLeft: '3px solid var(--indigo)' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.25)' }}>🎓</div>
            <div>
              <h3 className="syne font-bold text-lg" style={{ color: 'var(--text-1)' }}>{edu.degree}</h3>
              <p className="mono text-xs mt-0.5" style={{ color: 'var(--indigo-bright)' }}>{edu.status}</p>
            </div>
          </div>

          <div className="space-y-2.5 mb-6">
            {[
              { Icon: MapPin,   txt: edu.institution },
              { Icon: Calendar, txt: edu.year },
              { Icon: Star,     txt: `GPA: ${edu.gpa}` },
            ].map(({ Icon, txt }, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-2)' }}>
                <Icon className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--indigo)' }} />
                {txt}
              </div>
            ))}
          </div>

          {/* GPA bar */}
          <div className="mb-6">
            <div className="flex justify-between mono text-xs mb-2" style={{ color: 'var(--text-3)' }}>
              <span>Academic Performance</span><span style={{ color: 'var(--indigo-bright)' }}>{edu.gpa}</span>
            </div>
            <div className="prog-track">
              <motion.div className="prog-fill prog-indigo"
                initial={{ width: 0 }} whileInView={{ width: '98.73%' }}
                viewport={{ once: true }} transition={{ duration: 1.3, delay: 0.3 }} />
            </div>
          </div>

          <div className="space-y-2">
            {edu.achievements.map((a, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex items-start gap-2.5 p-2.5 rounded-lg text-xs"
                style={{ background: 'rgba(129,140,248,0.06)' }}>
                <Award className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: 'var(--indigo)' }} />
                <span style={{ color: 'var(--text-2)' }}>{a}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="bento p-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5" style={{ color: 'var(--emerald)' }} />
            <h3 className="syne font-bold" style={{ color: 'var(--text-1)' }}>Key Coursework</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {edu.coursework.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 p-2.5 rounded-lg text-xs border"
                style={{ background: 'var(--bg-3)', borderColor: 'var(--border-2)' }}>
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--emerald)' }} />
                <span style={{ color: 'var(--text-2)' }}>{c}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="mb-10">
        <p className="mono text-xs mb-1" style={{ color: 'var(--text-3)' }}>// certifications</p>
        <h3 className="syne text-3xl font-extrabold" style={{ color: 'var(--text-1)' }}>
          Credentials<span style={{ color: 'var(--emerald)' }}>.</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {edu.certifications.map((cert, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="card-brutal flex flex-col p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`tag ${issuerTag[cert.issuer] || 'tag-indigo'}`}>{cert.issuer}</span>
              <span className="mono text-[10px]" style={{ color: 'var(--text-3)' }}>{cert.year}</span>
            </div>
            <h4 className="syne font-bold text-sm mb-2 flex-1" style={{ color: 'var(--text-1)' }}>{cert.name}</h4>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-3)' }}>{cert.description}</p>
            <div className="flex items-center gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-2)' }}>
              <div className="w-3.5 h-3.5 rounded-full"
                style={{ background: 'linear-gradient(135deg, var(--indigo), var(--emerald))' }} />
              <span className="mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--indigo-bright)' }}>Certified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Education