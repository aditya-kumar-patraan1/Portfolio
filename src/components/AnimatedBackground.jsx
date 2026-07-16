'use client'

import React, { useEffect, useRef } from 'react'

const AnimatedBackground = ({ className = '' }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Floating orbs
    const orbs = [
      { x: 0.2, y: 0.3, r: 280, color: '129,140,248', speed: 0.0004 },
      { x: 0.8, y: 0.7, r: 220, color: '52,211,153',  speed: 0.0003 },
      { x: 0.5, y: 0.9, r: 180, color: '251,191,36',  speed: 0.0005 },
    ]
    let t = 0

    const draw = () => {
      t += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb) => {
        const x = (orb.x + Math.sin(t * orb.speed) * 0.1) * canvas.width
        const y = (orb.y + Math.cos(t * orb.speed) * 0.08) * canvas.height

        const grad = ctx.createRadialGradient(x, y, 0, x, y, orb.r)
        grad.addColorStop(0, `rgba(${orb.color}, 0.12)`)
        grad.addColorStop(0.5, `rgba(${orb.color}, 0.04)`)
        grad.addColorStop(1, `rgba(${orb.color}, 0)`)

        ctx.beginPath()
        ctx.arc(x, y, orb.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100" />

      {/* Orb canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Top-right geometric accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10"
        style={{
          background: 'conic-gradient(from 180deg at 100% 0%, #818cf8 0deg, #34d399 120deg, transparent 240deg)',
        }}
      />
      {/* Bottom-left */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-8"
        style={{
          background: 'conic-gradient(from 0deg at 0% 100%, #fbbf24 0deg, #fb7185 90deg, transparent 180deg)',
        }}
      />
    </div>
  )
}

export default AnimatedBackground
