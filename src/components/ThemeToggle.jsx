'use client'

import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? 'Light mode' : 'Dark mode'}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 focus:outline-none"
      style={{
        background: 'var(--surface-2)',
        borderColor: 'var(--border-2)',
        color: isDark ? 'var(--indigo-bright)' : 'var(--amber)',
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div key="moon"
            initial={{ rotate: -30, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 30, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            <Moon className="w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div key="sun"
            initial={{ rotate: 30, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -30, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            <Sun className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

export default ThemeToggle