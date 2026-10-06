import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ShinyTextProps {
  text: string
  color?: string
  shineColor?: string
  speed?: number // seconds per sweep
  spread?: number // gradient angle in degrees
  className?: string
}

export default function ShinyText({
  text,
  color = '#64CEFB',
  shineColor = '#ffffff',
  speed = 3,
  spread = 100,
  className = '',
}: ShinyTextProps) {
  const progress = useMotionValue(0)
  const elapsed = useRef(0)
  const last = useRef<number | null>(null)

  useAnimationFrame((time) => {
    if (last.current === null) last.current = time
    elapsed.current += time - last.current
    last.current = time
    const cycle = speed * 1000
    // 0 -> 100 sweeps left to right, then restarts
    progress.set(((elapsed.current % cycle) / cycle) * 100)
  })

  const backgroundPosition = useTransform(progress, (p) => `${150 - p * 2}% center`)

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: '200% auto',
        backgroundPosition,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {text}
    </motion.span>
  )
}
