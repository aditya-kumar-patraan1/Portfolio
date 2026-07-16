import { useEffect, useRef, useCallback } from 'react'

/* ─── Draw vector spider (matches provided image: round white body, legs from sides) ─── */
function drawSpider(ctx, x, y, angle, legPhase, size = 1) {
  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(angle)

  const isDark = !document.body.classList.contains('light')
  const bodyFill  = isDark ? 'rgba(228,228,235,0.97)' : 'rgba(20,20,35,0.90)'
  const bodyShade = isDark ? 'rgba(170,170,188,0.80)' : 'rgba(50,50,70,0.60)'
  const legStroke = isDark ? 'rgba(205,205,218,0.92)' : 'rgba(30,30,50,0.82)'

  const S = size * 1.0  /* overall scale — medium */

  /* ── LEGS ──
     Spider faces −X direction (left = front).
     Legs spread out from the sides of the cephalothorax.
     [side, hipAngleDeg, seg1Length, seg2Length, phaseOffset] */
  const LEGS = [
    // right side (positive Y in local space)
    [ 1,  55,  9*S,  8*S, 0.0 ],
    [ 1,  80,  9*S,  8*S, 0.9 ],
    [ 1, 105,  8*S,  7*S, 1.8 ],
    [ 1, 130,  7*S,  7*S, 2.7 ],
    // left side
    [-1,  55,  9*S,  8*S, 3.6 ],
    [-1,  80,  9*S,  8*S, 4.5 ],
    [-1, 105,  8*S,  7*S, 5.4 ],
    [-1, 130,  7*S,  7*S, 6.3 ],
  ]

  ctx.lineCap  = 'round'
  ctx.lineJoin = 'round'

  for (const [side, hipDeg, l1, l2, phOff] of LEGS) {
    const wiggle = Math.sin(legPhase + phOff) * 0.18
    const a1 = (hipDeg * Math.PI / 180) + wiggle
    const kx = Math.cos(a1) * l1
    const ky = Math.sin(a1) * l1 * side
    const a2 = a1 + 0.55 * side
    const ex = kx + Math.cos(a2) * l2
    const ey = ky + Math.sin(a2) * l2 * side

    /* shadow for depth */
    ctx.strokeStyle = bodyShade
    ctx.lineWidth = 1.8 * S
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(kx, ky)
    ctx.lineTo(ex, ey)
    ctx.stroke()

    /* main leg */
    ctx.strokeStyle = legStroke
    ctx.lineWidth = 1.1 * S
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(kx, ky)
    ctx.lineTo(ex, ey)
    ctx.stroke()
  }

  /* ── ABDOMEN (large round, back = +X direction) ── */
  ctx.fillStyle = bodyShade
  ctx.beginPath()
  ctx.ellipse(6.5*S, 0, 6.2*S, 5.5*S, 0, 0, Math.PI*2)
  ctx.fill()

  ctx.fillStyle = bodyFill
  ctx.beginPath()
  ctx.ellipse(6*S, 0, 6*S, 5.2*S, 0, 0, Math.PI*2)
  ctx.fill()

  /* abdomen highlight */
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.08)'
  ctx.beginPath()
  ctx.ellipse(4.8*S, -1.5*S, 2.5*S, 1.8*S, -0.4, 0, Math.PI*2)
  ctx.fill()

  /* ── CEPHALOTHORAX (smaller round, front = −X direction) ── */
  ctx.fillStyle = bodyShade
  ctx.beginPath()
  ctx.ellipse(-2.5*S, 0, 4.2*S, 3.8*S, 0, 0, Math.PI*2)
  ctx.fill()

  ctx.fillStyle = bodyFill
  ctx.beginPath()
  ctx.ellipse(-3*S, 0, 4*S, 3.5*S, 0, 0, Math.PI*2)
  ctx.fill()

  /* cephalothorax highlight */
  ctx.fillStyle = isDark ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.07)'
  ctx.beginPath()
  ctx.ellipse(-3.8*S, -1*S, 1.6*S, 1.1*S, -0.3, 0, Math.PI*2)
  ctx.fill()

  /* ── EYES (4 eyes on the front face) ── */
  const eyeColor = isDark ? '#1a1a2e' : '#ddddf0'
  ctx.fillStyle = eyeColor
  ctx.beginPath(); ctx.arc(-6.2*S, -1.1*S, 0.85*S, 0, Math.PI*2); ctx.fill()
  ctx.beginPath(); ctx.arc(-6.2*S,  1.1*S, 0.85*S, 0, Math.PI*2); ctx.fill()
  ctx.beginPath(); ctx.arc(-5.2*S, -2*S,   0.65*S, 0, Math.PI*2); ctx.fill()
  ctx.beginPath(); ctx.arc(-5.2*S,  2*S,   0.65*S, 0, Math.PI*2); ctx.fill()

  /* eye shine */
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.beginPath(); ctx.arc(-6.5*S, -1.4*S, 0.28*S, 0, Math.PI*2); ctx.fill()
  ctx.beginPath(); ctx.arc(-6.5*S,  0.8*S, 0.28*S, 0, Math.PI*2); ctx.fill()

  ctx.restore()
}

/* ─── Draw dotted straight thread ─── */
function drawStraightThread(ctx, p0, p2, alpha, tEnd = 1) {
  if (alpha <= 0) return
  ctx.save()
  ctx.setLineDash([3, 7])
  ctx.lineWidth = 0.9
  ctx.strokeStyle = `rgba(160,175,205,${alpha})`
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(p0.x, p0.y)
  ctx.lineTo(
    p0.x + (p2.x - p0.x) * tEnd,
    p0.y + (p2.y - p0.y) * tEnd
  )
  ctx.stroke()
  ctx.restore()
}

/* ─── Draw vertical drop thread (intro animation) ─── */
function drawDropThread(ctx, x, startY, endY, alpha) {
  if (alpha <= 0) return
  ctx.save()
  ctx.setLineDash([3, 7])
  ctx.lineWidth = 0.9
  ctx.strokeStyle = `rgba(160,175,205,${alpha})`
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(x, startY)
  ctx.lineTo(x, endY)
  ctx.stroke()
  ctx.restore()
}

/* ─── Ease functions ─── */
function easeOutBounce(t) {
  if (t < 1/2.75) return 7.5625*t*t
  if (t < 2/2.75) { t -= 1.5/2.75;   return 7.5625*t*t + 0.75 }
  if (t < 2.5/2.75) { t -= 2.25/2.75; return 7.5625*t*t + 0.9375 }
  t -= 2.625/2.75
  return 7.5625*t*t + 0.984375
}

/* ─── Pick a random idle waypoint inside the viewport ─── */
function randomWaypoint() {
  const margin = 80
  return {
    x: margin + Math.random() * (window.innerWidth  - margin * 2),
    y: margin + Math.random() * (window.innerHeight - margin * 2),
  }
}

export default function SpiderCursor() {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)

  const S = useRef({
    /* position */
    x: 0, y: 0,
    angle: 0,

    /* intro drop animation */
    introActive: true,
    introT: 0,
    introSpeed: 0.006,
    introStartX: 0,
    introStartY: -40,
    introEndY: 0,

    /* rotation phase (before moving) */
    rotating: false,
    targetAngle: 0,

    /* straight-line motion */
    line: null,
    t: 1,
    speed: 0.006,   /* slow-to-medium */

    /* legs */
    legPhase: 0,
    moving: false,

    /* old threads */
    threads: [],

    /* drop thread alpha */
    dropThreadAlpha: 0.6,
    dropLanded: false,

    /* idle wandering */
    isUserClick: false,
    idleWaiting: false,
    idlePauseT: 0,
  })

  const triggerMoveTo = useCallback((from, to, isClick) => {
    const s = S.current
    const dx = to.x - from.x
    const dy = to.y - from.y

    /* save partial thread if interrupted mid-way */
    if (s.line && s.t < 1) {
      const midX = s.line.p0.x + (s.line.p2.x - s.line.p0.x) * s.t
      const midY = s.line.p0.y + (s.line.p2.y - s.line.p0.y) * s.t
      if (s.isUserClick) {
        s.threads.push({ p0: s.line.p0, p2: { x: midX, y: midY }, alpha: 0.4 })
      }
    }

    s.isUserClick = isClick
    s.idleWaiting = false
    s.targetAngle = Math.atan2(dy, dx) + Math.PI
    s.rotating    = true
    s.line        = { p0: from, p2: to }
    s.t           = 1  /* hold until rotation finishes */
  }, [])

  const frame = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const s = S.current

    /* ── INTRO DROP ── */
    if (s.introActive) {
      s.introT = Math.min(1, s.introT + s.introSpeed)
      const eased = easeOutBounce(s.introT)
      s.y = s.introStartY + (s.introEndY - s.introStartY) * eased
      s.x = s.introStartX
      s.legPhase += s.introT > 0.05 ? 0.14 : 0
      s.angle = 0

      drawDropThread(ctx, s.x, 0, s.y, s.dropThreadAlpha)
      drawSpider(ctx, s.x, s.y, s.angle, s.legPhase, 1.0)

      if (s.introT >= 1) {
        s.introActive = false
        s.dropLanded  = true
        s.idleWaiting = true
        s.idlePauseT  = 80   /* ~1.3 s pause after landing before wandering */
      }
      rafRef.current = requestAnimationFrame(frame)
      return
    }

    /* ── FADE DROP THREAD after landing ── */
    if (s.dropLanded && s.dropThreadAlpha > 0) {
      s.dropThreadAlpha = Math.max(0, s.dropThreadAlpha - 0.004)
      drawDropThread(ctx, s.introStartX, 0, s.introEndY, s.dropThreadAlpha)
    }

    /* ── IDLE WANDER ── */
    const isIdle = !s.rotating && (!s.line || s.t >= 1)
    if (isIdle && s.idleWaiting) {
      s.idlePauseT -= 1
      if (s.idlePauseT <= 0) {
        s.idleWaiting = false
        const wp = randomWaypoint()
        triggerMoveTo({ x: s.x, y: s.y }, wp, false)
      }
    }

    /* ── ROTATION PHASE ── */
    if (s.rotating) {
      let diff = s.targetAngle - s.angle
      while (diff >  Math.PI) diff -= Math.PI * 2
      while (diff < -Math.PI) diff += Math.PI * 2
      const ROTATE_SPEED = 0.09
      if (Math.abs(diff) < 0.05) {
        s.angle    = s.targetAngle
        s.rotating = false
        s.t        = 0
      } else {
        s.angle += Math.sign(diff) * Math.min(ROTATE_SPEED, Math.abs(diff))
      }
    }

    /* ── STRAIGHT-LINE MOTION ── */
    if (!s.rotating && s.line && s.t < 1) {
      s.t = Math.min(1, s.t + s.speed)
      s.x = s.line.p0.x + (s.line.p2.x - s.line.p0.x) * s.t
      s.y = s.line.p0.y + (s.line.p2.y - s.line.p0.y) * s.t
      s.legPhase += 0.18
      s.moving = true

      if (s.t >= 1) {
        if (s.isUserClick) {
          s.threads.push({ p0: s.line.p0, p2: s.line.p2, alpha: 0.5 })
          if (s.threads.length > 5) s.threads.shift()
        }
        s.line        = null
        s.moving      = false
        s.idleWaiting = true
        s.idlePauseT  = s.isUserClick ? 80 : 45
        s.isUserClick = false
      }
    } else if (!s.rotating) {
      s.moving = false
    }

    /* ── FADE OLD THREADS ── */
    s.threads.forEach(th => { th.alpha = Math.max(0, th.alpha - 0.0025) })
    s.threads = s.threads.filter(th => th.alpha > 0.01)
    s.threads.forEach(th => drawStraightThread(ctx, th.p0, th.p2, th.alpha))

    /* active thread (only for user clicks) */
    if (s.line && !s.rotating && s.isUserClick) {
      drawStraightThread(ctx, s.line.p0, s.line.p2, 0.55, s.t)
    }

    drawSpider(ctx, s.x, s.y, s.angle, s.legPhase, 1.0)

    rafRef.current = requestAnimationFrame(frame)
  }, [triggerMoveTo])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      const s = S.current
      if (s.introActive && s.introT === 0) {
        s.introStartX = window.innerWidth * 0.84
        s.introEndY   = Math.min(window.innerHeight * 0.45, 280)
        s.x = s.introStartX
        s.y = s.introStartY
      }
    }
    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(frame)

    const onClick = (e) => {
      if (e.target.closest('.floating-nav')) return
      const s = S.current
      if (s.introActive) return
      const from = { x: s.x, y: s.y }
      const to   = { x: e.clientX, y: e.clientY }
      triggerMoveTo(from, to, true)
    }

    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', onClick)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [frame, triggerMoveTo])

  return <canvas ref={canvasRef} id="spider-canvas" aria-hidden="true" />
}
