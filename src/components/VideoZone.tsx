import { useRef } from 'react'
import type { ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

/**
 * Um único vídeo de fundo que acompanha várias seções (hero, quem somos, diferenciais).
 * Ele fica fixo na tela enquanto o conteúdo rola por cima, e escurece aos poucos para manter
 * o texto legível. No fim, dissolve no azul da próxima seção, sem corte seco.
 */
export default function VideoZone({ children }: { children: ReactNode }) {
  const zona = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: zona, offset: ['start start', 'end end'] })
  const escuro = useTransform(scrollYProgress, [0, 0.35, 1], [0.15, 0.55, 0.8])

  return (
    <div ref={zona} className="relative bg-[#0b2a4a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Fundo em azul da marca enquanto o vídeo carrega */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a4a] via-[#1f6e99] to-[#0b2a4a]" />
          <video className="absolute inset-0 h-full w-full object-cover" src={VIDEO_URL} autoPlay loop muted playsInline />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2a4a]/60 via-transparent to-[#0b2a4a]/50" />
          <motion.div style={{ opacity: escuro }} className="absolute inset-0 bg-[#0b2a4a]" />
        </div>
      </div>

      <div className="relative z-10">{children}</div>

      {/* Dissolve o vídeo no azul da seção seguinte */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-48 bg-gradient-to-b from-transparent to-[#0b2a4a] md:h-72" />
    </div>
  )
}
