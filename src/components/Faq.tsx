import { useState } from 'react'
import { CalendarCheck, ChevronDown, Cog, Gem, KeyRound, ShieldCheck, Sparkles, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

const perguntas: { icon: LucideIcon; q: string; a: string }[] = [
  { icon: KeyRound, q: 'Perdi as chaves do fechamento de sacada ou do box de vidro. O que devo fazer?', a: 'Envie uma foto do fecho ou da fechadura pelo WhatsApp. Nossa equipe identifica o modelo e orienta a melhor solução para a troca ou reposição.' },
  { icon: ShieldCheck, q: 'As borrachas de vedação (escovinhas/perfis) do vidro ressecaram ou caíram. Vocês vendem ou trocam?', a: 'O ressecamento é comum com o tempo e com a exposição ao sol, e prejudica a vedação contra água, vento e ruído. Mande fotos pelo WhatsApp e nossa equipe orienta sobre a substituição.' },
  { icon: Cog, q: 'O que fazer se a roldana do meu box de vidro ou sacada estiver travando ou fazendo ruído?', a: 'Quase sempre é sujeira acumulada no trilho, desgaste da roldana ou desalinhamento da folha. Limpe o trilho e não force a abertura; se o problema continuar, chame nossa equipe para avaliar.' },
  { icon: Gem, q: 'Qual a diferença entre vidro temperado e vidro laminado?', a: 'O temperado passa por tratamento térmico, fica bem mais resistente que o vidro comum e, se quebra, se divide em pequenos fragmentos menos cortantes. O laminado une duas lâminas com uma película, e os cacos ficam presos a ela, o que dá mais segurança e isolamento acústico.' },
  { icon: Sparkles, q: 'Os espelhos mancham ou ficam pretos nas bordas com o tempo?', a: 'Isso acontece quando a umidade e alguns produtos de limpeza (como os com amônia ou abrasivos) atingem a camada refletiva pela borda. Evite deixar água parada nas bordas e limpe com pano macio e produto neutro.' },
  { icon: Wrench, q: 'Vocês vendem e fornecem peças de reposição individuais (ferragens, dobradiças, fechos)?', a: 'Trabalhamos em parceria com a Morumbi Vidros e Ferragens. Chame no WhatsApp com a peça ou o modelo que você precisa e confirmamos a disponibilidade.' },
  { icon: CalendarCheck, q: 'Como funciona a manutenção preventiva do envidraçamento de sacada?', a: 'Recomenda-se limpar os trilhos, lubrificar as roldanas com produto adequado, verificar as borrachas de vedação e revisar o conjunto periodicamente. Fale com a gente para orientar a manutenção do seu sistema.' },
]

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(0)
  return (
    <section id="duvidas" className="bg-aurora px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-tight text-[#64CEFB] md:text-sm">Dúvidas frequentes</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tighter text-white md:text-5xl">Tire suas dúvidas</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {perguntas.map(({ icon: Icon, q, a }, i) => {
            const open = aberta === i
            return (
              <Reveal key={q} delay={0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-[#64CEFB]/40">
                  <button
                    className="flex w-full items-center gap-4 p-5 text-left"
                    aria-expanded={open}
                    onClick={() => setAberta(open ? null : i)}
                  >
                    <Icon className="h-6 w-6 shrink-0 text-[#64CEFB]" />
                    <span className="flex-1 font-semibold text-white">{q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#64CEFB] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[3.75rem] text-sm leading-relaxed text-white/75">{a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
