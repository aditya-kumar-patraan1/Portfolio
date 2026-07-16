'use client'

import React, { useState, useEffect, useRef } from 'react'

const TypewriterText = ({
  strings = [],
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className = '',
  cursorClassName = '',
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!strings.length) return

    const currentString = strings[currentIndex]

    const tick = () => {
      if (isPaused) {
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, pauseTime)
        return
      }

      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1))
        if (displayText.length <= 1) {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % strings.length)
        }
        timeoutRef.current = setTimeout(tick, deleteSpeed)
      } else {
        setDisplayText(currentString.slice(0, displayText.length + 1))
        if (displayText.length === currentString.length - 1) {
          setIsPaused(true)
          return
        }
        timeoutRef.current = setTimeout(tick, speed)
      }
    }

    timeoutRef.current = setTimeout(tick, isPaused ? pauseTime : isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, currentIndex, isDeleting, isPaused, strings, speed, deleteSpeed, pauseTime])

  return (
    <span className={className}>
      {displayText}
      <span
        className={`inline-block w-0.5 h-[1em] ml-1 align-middle animate-cursor-blink ${cursorClassName}`}
        style={{ background: 'var(--violet-light)' }}
      />
    </span>
  )
}

export default TypewriterText
