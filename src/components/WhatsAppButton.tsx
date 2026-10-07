import { WHATSAPP } from '../hooks'

const MSG = 'Olá! Vim pelo site da JF Alumvidros e gostaria de um orçamento.'

/** Botão flutuante no canto inferior direito que abre o WhatsApp do proprietário. */
export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a JF Alumvidros no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
    </a>
  )
}
