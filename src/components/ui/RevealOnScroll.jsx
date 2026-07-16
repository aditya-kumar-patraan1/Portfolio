'use client'

import React from 'react'
import { motion } from 'framer-motion'

const RevealOnScroll = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.6,
  className = '',
  once = true,
}) => {
  const directionMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  }

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
  once = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({
  children,
  direction = 'up',
  distance = 20,
  className = '',
}) => {
  const directionMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directionMap[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnScroll
