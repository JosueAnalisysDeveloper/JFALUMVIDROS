import { WHATSAPP } from '../hooks'

const MSG = 'Olá! Vim pelo site da JF Alumvidros e gostaria de um orçamento.'

/** Botão flutuante no canto inferior direito que abre o WhatsApp da loja. */
export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a JF Alumvidros no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110 active:scale-95 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:hidden" />
      <svg viewBox="0 0 32 32" className="h-8 w-8 md:h-9 md:w-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 4.5a11.5 11.5 0 0 0-9.9 17.3L4.5 27.5l5.9-1.5A11.5 11.5 0 1 0 16 4.5Z" />
        <path d="M12.2 10.6c-.4 0-.9.3-1.1.9-.5 1.3.2 3.1 1.9 5 1.7 1.8 3.5 2.8 5 2.6.6-.1 1.1-.7 1.2-1.3l-.1-.6-2.2-1-.9.9c-1-.4-2.1-1.4-2.6-2.5l.8-.8-1-2.3-.5-.1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  )
}
