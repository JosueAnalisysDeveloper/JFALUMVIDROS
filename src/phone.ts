/** Máscara de telefone brasileiro: +55 99 99999-9999 (celular) ou +55 99 9999-9999 (fixo). */
export function formatTelefone(raw: string): string {
  let d = raw.replace(/\D/g, '')
  if (raw.trimStart().startsWith('+')) d = d.slice(2) // tira o 55 do prefixo já exibido
  else if (d.length > 11 && d.startsWith('55')) d = d.slice(2) // número colado com 55 na frente
  d = d.slice(0, 11)
  if (!d) return ''

  const ddd = d.slice(0, 2)
  const num = d.slice(2)
  const corte = num.startsWith('9') ? 5 : 4 // celular começa com 9
  const parte = num.length > corte ? `${num.slice(0, corte)}-${num.slice(corte)}` : num
  return `+55 ${ddd}${parte ? ` ${parte}` : ''}`
}

/** Celular (+55 DD 9XXXX-XXXX) ou fixo (+55 DD XXXX-XXXX), com DDD válido. */
export const TELEFONE_PATTERN = '\\+55 [1-9][0-9] (9[0-9]{4}|[2-8][0-9]{3})-[0-9]{4}'
