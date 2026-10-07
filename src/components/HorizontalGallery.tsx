import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { produtos } from '../data'
import { useLuz } from '../hooks'

const lista = Object.values(produtos)

/** Galeria horizontal: ao rolar a página, o painel fica preso e a fita anda para o lado. */
export default function HorizontalGallery() {
  const luz = useLuz()
  const caixa = useRef<HTMLDivElement>(null)
  const fita = useRef<HTMLDivElement>(null)
  const [curso, setCurso] = useState(0)

  useEffect(() => {
    const medir = () => {
      if (fita.current) setCurso(Math.max(0, fita.current.scrollWidth - window.innerWidth))
    }
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [])

  const { scrollYProgress } = useScroll({ target: caixa, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -curso])

  return (
    <section id="servicos" ref={caixa} className="bg-aurora relative h-[350vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-xs uppercase tracking-tight text-[#64CEFB] md:text-sm">Nossos trabalhos</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tighter text-white md:text-5xl">
            Vidro e alumínio para cada ambiente
          </h2>
        </div>
        <motion.div ref={fita} style={{ x }} className="mt-8 flex gap-5 px-6 will-change-transform md:mt-10">
          {lista.map((p) => (
            <article
              key={p.title}
              onMouseMove={luz}
              className="js-luz w-60 flex-none overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:w-72 md:w-80"
            >
              <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <h3 className="px-3 py-4 text-center text-sm font-semibold text-white md:text-base">{p.title}</h3>
            </article>
          ))}
        </motion.div>
        <div className="mx-auto mt-8 h-1 w-48 overflow-hidden rounded bg-white/10">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-[#64CEFB]" />
        </div>
      </div>
    </section>
  )
}
