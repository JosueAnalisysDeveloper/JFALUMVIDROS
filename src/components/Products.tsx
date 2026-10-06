import { DoorOpen, ShowerHead, Blinds, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLuz } from '../hooks'

const items: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: DoorOpen, title: 'Portas de vidro', text: 'Portas de vidro temperado e esquadrias de alumínio, sob medida para casa e comércio.' },
  { icon: ShowerHead, title: 'Boxes de banheiro', text: 'Box de vidro temperado com acabamento e vedação de qualidade.' },
  { icon: Blinds, title: 'Cortinas de vidro', text: 'Fechamento de varandas e sacadas com mais conforto e visual moderno.' },
  { icon: Wrench, title: 'Acessórios', text: 'Ferragens, puxadores, roldanas e acessórios para vidro e alumínio.' },
]

export default function Products() {
  const luz = useLuz()
  return (
    <section id="servicos" className="bg-[#0b2a4a] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-tight text-[#64CEFB] md:text-sm">Nossos serviços</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tighter text-white md:text-5xl">
          Vidro e alumínio para cada ambiente
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              onMouseMove={luz}
              className="js-luz rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#64CEFB]/40"
            >
              <Icon className="h-9 w-9 text-[#64CEFB]" />
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
