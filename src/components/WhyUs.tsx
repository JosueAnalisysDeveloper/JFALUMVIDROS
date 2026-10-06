import { CalendarCheck, FileText, MessageCircle, Ruler, ShieldCheck, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'
import { useLuz } from '../hooks'

const motivos: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: CalendarCheck, title: 'Desde 2018', text: 'Experiência no ramo de vidros e esquadrias, fundada por Jefferson Harlen.' },
  { icon: Ruler, title: 'Projetos sob medida', text: 'Cada vão é medido e executado para o seu ambiente.' },
  { icon: ShieldCheck, title: 'Segurança e qualidade', text: 'Vidro temperado e ferragens de qualidade em parceria com a Morumbi.' },
  { icon: FileText, title: 'Orçamento gratuito', text: 'Orçamento sem compromisso, para você decidir com tranquilidade.' },
  { icon: Wrench, title: 'Orientação técnica', text: 'Equipe especializada que indica a melhor solução para cada caso.' },
  { icon: MessageCircle, title: 'Resposta em até 24 horas', text: 'Fale com a gente pelo WhatsApp e receba retorno rápido.' },
]

export default function WhyUs() {
  const luz = useLuz()
  return (
    <section id="porque" className="bg-[#0b2a4a] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs uppercase tracking-tight text-[#64CEFB] md:text-sm">Diferenciais</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tighter text-white md:text-5xl">Por que escolher a JF Alumvidros?</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {motivos.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <article onMouseMove={luz} className="js-luz h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#64CEFB]/40">
                <Icon className="h-9 w-9 text-[#64CEFB]" />
                <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
