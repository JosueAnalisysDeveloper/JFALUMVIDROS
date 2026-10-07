import { MessageCircle } from 'lucide-react'
import { WHATSAPP } from '../hooks'

const MSG = 'Olá! Vi seus serviços através do site da JF Alumvidros e gostaria de um orçamento.'

/** Botão flutuante do WhatsApp (canto inferior direito) que expande o texto ao passar o mouse. */
export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp com a JF Alumvidros"
      className="group fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full bg-emerald-500 p-4 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-600"
    >
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-300" />
      </span>
      <MessageCircle className="h-7 w-7 fill-white text-emerald-500" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 ease-in-out group-hover:ml-3 group-hover:max-w-xs">
        Falar no WhatsApp
      </span>
    </a>
  )
}
