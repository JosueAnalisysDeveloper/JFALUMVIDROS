import { Clock, Instagram, MapPin, Phone } from 'lucide-react'
import { INSTAGRAM, WHATSAPP } from '../hooks'

const ENDERECO = 'Rua Oitenta e Sete, 18, Jereissate II, Pacatuba, Ceará'
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO)}&output=embed`

const info = [
  { icon: MapPin, label: 'Endereço', value: ENDERECO, href: undefined as string | undefined },
  { icon: Phone, label: 'Telefone / WhatsApp', value: '(85) 98805-2608', href: `https://wa.me/${WHATSAPP}` },
  { icon: Instagram, label: 'Instagram', value: `@${INSTAGRAM}`, href: `https://instagram.com/${INSTAGRAM}` },
  { icon: Clock, label: 'Horário de funcionamento', value: 'Abre às 8:00 · Fecha às 17:30', href: undefined },
]

export default function Location() {
  return (
    <section id="localizacao" className="bg-[#0b2a4a] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-tight text-[#64CEFB] md:text-sm">Onde estamos</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tighter text-white md:text-5xl">Venha nos visitar</h2>
          <ul className="mt-8 space-y-5">
            {info.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  <Icon className="h-5 w-5 text-[#64CEFB]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-tight text-white/60">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="text-white transition-colors hover:text-[#64CEFB]">{value}</a>
                  ) : (
                    <p className="text-white">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <iframe
          title="Mapa da JF Alumvidros"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-80 w-full rounded-2xl border border-white/10 lg:h-full lg:min-h-[26rem]"
        />
      </div>
    </section>
  )
}
