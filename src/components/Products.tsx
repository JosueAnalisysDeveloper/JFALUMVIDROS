import { useLuz } from '../hooks'
import espelhos from '../assets/espelhos.webp'
import espelhosDecorativos from '../assets/espelhos-decorativos.webp'
import box from '../assets/box-banheiro.webp'
import janelas from '../assets/janelas.webp'
import portasVidro from '../assets/portas-vidro.webp'
import guardaCorpo from '../assets/guarda-corpo.webp'
import portasAluminio from '../assets/portas-aluminio.webp'
import portoesAluminio from '../assets/portoes-aluminio.webp'
import acessorios from '../assets/acessorios.webp'
import cortina from '../assets/cortina-vidro.webp'

const items = [
  { title: 'Espelhos', img: espelhos },
  { title: 'Espelhos decorativos', img: espelhosDecorativos },
  { title: 'Box de banheiro', img: box },
  { title: 'Janelas', img: janelas },
  { title: 'Portas de vidro', img: portasVidro },
  { title: 'Guarda-corpo', img: guardaCorpo },
  { title: 'Portas de alumínio', img: portasAluminio },
  { title: 'Portões de alumínio', img: portoesAluminio },
  { title: 'Acessórios para vidro', img: acessorios },
  { title: 'Cortina de vidro', img: cortina },
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
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
          {items.map(({ title, img }) => (
            <article
              key={title}
              onMouseMove={luz}
              className="js-luz overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-[#64CEFB]/40"
            >
              <img src={img} alt={title} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <h3 className="px-3 py-4 text-center text-sm font-semibold text-white md:text-base">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
