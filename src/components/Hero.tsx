import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import ShinyText from './ShinyText'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4'

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden bg-black">
      {/* Fundo em azul da marca enquanto o vídeo carrega */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b2a4a] via-[#1f6e99] to-[#0b2a4a]" />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2a4a]/60 via-transparent to-[#0b2a4a]/70" />

      <div className="relative z-10 flex h-full flex-col">
        <Navbar />

        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 pt-4 lg:grid-cols-2 lg:gap-12">
          <p className="max-w-md text-sm text-white/80 md:text-base">
            Especialistas em esquadrias de alumínio, guarda-corpo, portão basculante, box e vidro
            temperado, com projetos sob medida e acabamento de qualidade.
          </p>
          <p className="text-sm text-white/80 md:text-base lg:text-right">
            Desde 2018 transformando espaços, fundada por Jefferson Harlen.
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-tight text-white/80 md:text-sm">
            Quem Somos · Vidraçaria
          </p>
          <h1 className="text-5xl font-medium leading-[0.85] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block">JF</span>
            <span className="block pb-2">
              <ShinyText text="Alumvidros." />
            </span>
          </h1>
          <a
            href="#contato"
            className="btn-anim group mt-10 inline-flex items-center gap-2 rounded-full bg-[#0a3d91] px-6 py-3 text-white transition-colors hover:bg-[#0b2a4a] md:px-8 md:py-4"
          >
            Solicite seu orçamento
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
