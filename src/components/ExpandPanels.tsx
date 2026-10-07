import { useState } from 'react'
import Reveal from './Reveal'
import { grupos } from '../data'
import type { Produto } from '../data'

/** Painéis que expandem: o painel ativo cresce e os outros cedem espaço (flex em CSS). */
function Paineis({ itens }: { itens: Produto[] }) {
  const [aberto, setAberto] = useState(0)
  return (
    <div className="flex h-[36rem] flex-col gap-2 md:h-80 md:flex-row">
      {itens.map((p, i) => (
        <div
          key={p.title}
          role="button"
          tabIndex={0}
          aria-expanded={aberto === i}
          data-aberto={aberto === i}
          onClick={() => setAberto(i)}
          onMouseEnter={() => setAberto(i)}
          onFocus={() => setAberto(i)}
          className="group relative min-h-0 flex-1 cursor-pointer overflow-hidden rounded-xl border border-white/10 outline-none transition-[flex] duration-500 ease-[cubic-bezier(.16,1,.3,1)] focus-visible:ring-2 focus-visible:ring-[#64CEFB] data-[aberto=true]:flex-[3]"
        >
          <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-data-[aberto=true]:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2a4a] via-[#0b2a4a]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h4 className="whitespace-nowrap text-sm font-semibold text-white/80 transition-colors group-data-[aberto=true]:text-white md:text-base">{p.title}</h4>
            <p className="mt-1 max-w-sm text-xs text-white/80 opacity-0 transition-opacity duration-500 group-data-[aberto=true]:opacity-100 md:text-sm">{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExpandPanels() {
  return (
    <section id="categorias" className="bg-aurora bg-aurora-mid px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl space-y-16">
        <Reveal>
          <p className="text-xs uppercase tracking-tight text-[#64CEFB] md:text-sm">Categorias</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tighter text-white md:text-5xl">Conheça cada linha de produtos</h2>
        </Reveal>
        {grupos.map((g) => (
          <Reveal key={g.id}>
            <div id={g.id}>
              <div className="mb-5 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{g.titulo}</h3>
                <p className="text-sm text-white/70 md:max-w-sm md:text-right">{g.descricao}</p>
              </div>
              <Paineis itens={g.itens} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
