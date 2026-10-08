import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import ShinyText from './ShinyText'

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full">
      <div className="flex h-full flex-col">
        <Navbar />


        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 text-center">
          
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
