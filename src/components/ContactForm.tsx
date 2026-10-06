import { useState } from 'react'
import type { FormEvent } from 'react'
import { Check, Send } from 'lucide-react'
import { WHATSAPP } from '../hooks'

const beneficios = ['Orçamento gratuito e sem compromisso', 'Orientação técnica especializada', 'Resposta em até 24 horas']
const campo = 'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#64CEFB]'

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false)

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const msg = `Olá! Gostaria de um orçamento.\nNome: ${d.get('nome')}\nWhatsApp: ${d.get('whatsapp')}\nE-mail: ${d.get('email')}\nCidade: ${d.get('cidade')}`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setEnviado(true)
  }

  return (
    <section id="contato" className="bg-[#1f6e99] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <div className="h-1 w-16 rounded bg-[#64CEFB]" />
          <h2 className="mt-5 text-4xl font-medium tracking-tighter text-white md:text-6xl">
            Solicite seu <span className="text-[#64CEFB]">orçamento</span>
          </h2>
          <p className="mt-5 max-w-md text-white/80 md:text-lg">
            Preencha o formulário e receba um orçamento personalizado. Nossa equipe entrará em contato em até 24 horas.
          </p>
          <ul className="mt-8 space-y-4">
            {beneficios.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/90">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15"><Check className="h-4 w-4 text-[#64CEFB]" /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={enviar} className="space-y-5 rounded-2xl border border-white/15 bg-[#0b2a4a]/80 p-6 backdrop-blur-sm md:p-8">
          {[
            { id: 'nome', label: 'Nome', type: 'text', ph: 'Seu nome completo' },
            { id: 'whatsapp', label: 'WhatsApp', type: 'tel', ph: '(85) 99999-9999' },
            { id: 'email', label: 'E-mail', type: 'email', ph: 'seu@email.com' },
            { id: 'cidade', label: 'Cidade', type: 'text', ph: 'Sua cidade' },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="mb-2 block text-sm font-medium text-white">{f.label}</label>
              <input id={f.id} name={f.id} type={f.type} placeholder={f.ph} required={f.id !== 'email'} className={campo} />
            </div>
          ))}
          <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0a3d91] px-8 py-4 font-medium text-white transition-colors hover:bg-[#64CEFB] hover:text-[#0b2a4a]">
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            Solicitar orçamento
          </button>
          <p className="text-center text-xs text-white/60">
            {enviado ? 'Abrimos o WhatsApp com seus dados. Basta enviar a mensagem!' : 'Seus dados não serão compartilhados.'}
          </p>
        </form>
      </div>
    </section>
  )
}
