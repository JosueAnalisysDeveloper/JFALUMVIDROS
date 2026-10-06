import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { label: 'Página Inicial', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Instagram', href: 'https://www.instagram.com/jfalumvidrosoficial/' },
]

const linkClass = 'text-sm text-white/80 transition-colors hover:text-white'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
      <Logo />

      <div className="hidden items-center gap-8 rounded-full border border-gray-700 bg-black/20 px-8 py-3 backdrop-blur-sm lg:flex">
        {links.map((l) => (
          <a key={l.label} href={l.href} className={linkClass}>
            {l.label}
          </a>
        ))}
        <a href="#contato" className={`${linkClass} group flex items-center gap-1`}>
          Falar Conosco
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <button
        className="text-white lg:hidden"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      {open && (
        <div className="absolute left-6 right-6 top-20 flex flex-col gap-4 rounded-2xl border border-gray-700 bg-black/80 p-6 backdrop-blur-md lg:hidden">
          {[...links, { label: 'Falar Conosco', href: '#contato' }].map((l) => (
            <a key={l.label} href={l.href} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
