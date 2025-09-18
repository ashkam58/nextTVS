'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

type Props = {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right'
  stagger?: number
}

export default function ScrollReveal({ children, direction = 'up', stagger = 80 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = Array.from(el.querySelectorAll<HTMLElement>('.anime-item'))
    if (!items.length) return

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // animate items with a speed-themed effect
          anime.remove(items)
          anime({
            targets: items,
            translateY: direction === 'up' ? [40, 0] : 0,
            translateX: direction === 'left' ? [50, 0] : direction === 'right' ? [-50, 0] : 0,
            opacity: [0, 1],
            skewX: ['8deg', '0deg'],
            duration: 700,
            easing: 'cubicBezier(.2,.9,.2,1)',
            delay: anime.stagger(stagger),
          })
          obs.disconnect()
        }
      })
    }, { threshold: 0.12 })

    observer.observe(el)

    return () => observer.disconnect()
  }, [direction, stagger])

    return <div ref={ref}>{children}</div>
  }
