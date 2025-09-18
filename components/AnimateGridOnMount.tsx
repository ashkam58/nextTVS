'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function AnimateGridOnMount({ children }: { children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const items = Array.from(ref.current.querySelectorAll<HTMLElement>('.anime-item'))

    anime.timeline({ easing: 'easeOutCubic' }).add({
      targets: items,
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 700,
      delay: anime.stagger(80),
    })

    // store handlers so we can remove them later
    const handlers = new Map<HTMLElement, { onEnter: () => void; onLeave: () => void }>()

    items.forEach((el) => {
      const onEnter = () => {
        anime.remove(el)
        anime({ targets: el, scale: 1.03, duration: 250, easing: 'easeOutCubic' })
      }
      const onLeave = () => {
        anime.remove(el)
        anime({ targets: el, scale: 1, duration: 250, easing: 'easeOutCubic' })
      }
      handlers.set(el, { onEnter, onLeave })
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      handlers.forEach((h, el) => {
        el.removeEventListener('mouseenter', h.onEnter)
        el.removeEventListener('mouseleave', h.onLeave)
      })
    }
  }, [])

  return <div ref={ref}>{children}</div>
}
