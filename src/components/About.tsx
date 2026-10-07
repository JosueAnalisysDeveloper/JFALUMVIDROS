import Reveal from './Reveal'

export default function About() {
  return (
    <section id="quem-somos" className="px-6 py-20 md:py-28">
      <Reveal>
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-[#0b2a4a]/45 p-8 text-center shadow-2xl backdrop-blur-md md:p-12">
          <p className="text-xs uppercase tracking-tight text-white/80 md:text-sm">Nossa história</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tighter text-white md:text-6xl">Quem Somos?</h2>
          <p className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
            A <strong>JF Alumvidros</strong> é uma empresa especializada em executar projetos de esquadrias de alumínio, guarda-corpo,
            portão basculante, box de vidro temperado e vidro temperado, possuindo importante participação no ramo em que atua. A empresa
            foi fundada em 2018 pelo empresário <strong>Jefferson Harlen</strong>.
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
            Prestamos serviços de envidraçamento, fachada de vidro temperado, execução de corrimão de vidro e alumínio, fechamento com
            vidro temperado, portões com lambris e muito mais.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
