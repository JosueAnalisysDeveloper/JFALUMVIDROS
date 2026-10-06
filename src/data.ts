import espelhos from './assets/espelhos.webp'
import espelhosDecorativos from './assets/espelhos-decorativos.webp'
import box from './assets/box-banheiro.webp'
import janelas from './assets/janelas.webp'
import portasVidro from './assets/portas-vidro.webp'
import guardaCorpo from './assets/guarda-corpo.webp'
import portasAluminio from './assets/portas-aluminio.webp'
import portoesAluminio from './assets/portoes-aluminio.webp'
import acessorios from './assets/acessorios.webp'
import cortina from './assets/cortina-vidro.webp'

export interface Produto { title: string; img: string; text: string }

export const produtos: Record<string, Produto> = {
  espelhos: { title: 'Espelhos', img: espelhos, text: 'Espelhos sob medida para quartos, closets e salas.' },
  espelhosDecorativos: { title: 'Espelhos decorativos', img: espelhosDecorativos, text: 'Composições bisotadas que dão destaque ao ambiente.' },
  box: { title: 'Box de banheiro', img: box, text: 'Box de vidro temperado com acabamento e vedação de qualidade.' },
  janelas: { title: 'Janelas', img: janelas, text: 'Janelas de alumínio e vidro, em diversos modelos de abertura.' },
  portasVidro: { title: 'Portas de vidro', img: portasVidro, text: 'Portas e divisórias de vidro de correr ou de abrir.' },
  guardaCorpo: { title: 'Guarda-corpo', img: guardaCorpo, text: 'Segurança e visual moderno para escadas, sacadas e jardins.' },
  portasAluminio: { title: 'Portas de alumínio', img: portasAluminio, text: 'Esquadrias de alumínio com vidro, resistentes e duráveis.' },
  portoesAluminio: { title: 'Portões de alumínio', img: portoesAluminio, text: 'Portões de alumínio, incluindo basculantes e de correr.' },
  acessorios: { title: 'Acessórios para vidro', img: acessorios, text: 'Ferragens, suportes e acessórios para vidro e alumínio.' },
  cortina: { title: 'Cortina de vidro', img: cortina, text: 'Fechamento de varandas e sacadas com mais conforto.' },
}

export const grupos = [
  {
    id: 'vidro-temperado',
    titulo: 'Vidro temperado',
    descricao: 'Segurança e transparência para banheiros, varandas e fachadas.',
    itens: [produtos.box, produtos.portasVidro, produtos.guardaCorpo, produtos.cortina],
  },
  {
    id: 'espelhos-acessorios',
    titulo: 'Espelhos e acessórios',
    descricao: 'Espelhos decorativos e as ferragens que completam o projeto.',
    itens: [produtos.espelhos, produtos.espelhosDecorativos, produtos.acessorios],
  },
  {
    id: 'aluminio',
    titulo: 'Esquadrias de alumínio',
    descricao: 'Janelas, portas e portões com durabilidade e bom acabamento.',
    itens: [produtos.janelas, produtos.portasAluminio, produtos.portoesAluminio],
  },
]
