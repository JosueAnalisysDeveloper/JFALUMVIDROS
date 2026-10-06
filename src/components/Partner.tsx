import { Handshake } from 'lucide-react'
import { useLuz } from '../hooks'

export default function Partner() {
  const luz = useLuz()
  return (
    <section className="bg-[#1f6e99] px-6 py-16 md:py-20">
      <div
        onMouseMove={luz}
        className="js-luz mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-8 text-center md:flex-row md:text-left"
      >
        <Handshake className="h-12 w-12 shrink-0 text-white" />
        <div>
          <p className="text-xs uppercase tracking-tight text-white/80 md:text-sm">Parceria</p>
          <h2 className="mt-1 text-2xl font-medium tracking-tighter text-white md:text-3xl">Morumbi Ferragens</h2>
          <p className="mt-2 text-sm text-white/80 md:text-base">
            Trabalhamos em parceria com a Morumbi Ferragens para garantir ferragens e acessórios de qualidade em todos os nossos projetos.
          </p>
        </div>
      </div>
    </section>
  )
}
