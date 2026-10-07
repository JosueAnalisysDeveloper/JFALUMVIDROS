import { useLuz } from '../hooks'
import morumbi from '../assets/morumbi.webp'

export default function Partner() {
  const luz = useLuz()
  return (
    <section className="bg-aurora bg-aurora-blue px-6 py-16 md:py-20">
      <div
        onMouseMove={luz}
        className="js-luz mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-white/20 bg-white/10 p-6 text-center md:flex-row md:gap-10 md:p-8 md:text-left"
      >
        <img src={morumbi} alt="Morumbi Vidros e Ferragens" className="h-40 w-40 shrink-0 rounded-xl bg-white object-cover md:h-48 md:w-48" />
        <div>
          <p className="text-xs uppercase tracking-tight text-white/80 md:text-sm">Parceria</p>
          <h2 className="mt-1 text-2xl font-medium tracking-tighter text-white md:text-3xl">Morumbi Vidros e Ferragens</h2>
          <p className="mt-2 text-sm text-white/80 md:text-base">
            Trabalhamos em parceria com a Morumbi para garantir vidros, ferragens e acessórios de qualidade em todos os nossos projetos.
          </p>
        </div>
      </div>
    </section>
  )
}
