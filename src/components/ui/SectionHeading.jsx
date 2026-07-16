'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({ label, title, highlight, description, center = true, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65 }}
    className={`${center ? 'text-center' : ''} mb-16 ${className}`}
  >
    {label && (
      <p className="mono text-xs mb-3" style={{ color: 'var(--text-3)' }}>// {label.toLowerCase()}</p>
    )}
    <h2 className="syne text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-1)' }}>
      {title}{' '}
      {highlight && <span className="text-gradient-indigo">{highlight}</span>}
    </h2>
    {description && (
      <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-2)' }}>{description}</p>
    )}
  </motion.div>
)

export default SectionHeading
