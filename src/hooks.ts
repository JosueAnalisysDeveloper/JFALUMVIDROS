import { useCallback } from 'react'
import type { MouseEvent } from 'react'

/** Escreve a posição do mouse em --x/--y; o brilho em si é CSS (.js-luz). */
export function useLuz() {
  return useCallback((ev: MouseEvent<HTMLElement>) => {
    const el = ev.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${ev.clientX - r.left}px`)
    el.style.setProperty('--y', `${ev.clientY - r.top}px`)
  }, [])
}

export const WHATSAPP = '5585988052608'
export const INSTAGRAM = 'jfalumvidros'
