"use client"

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import styles from './ParallaxShowcase.module.css'

type Layer = {
  src: string
  depth: number
  alt?: string
}

const layers: Layer[] = [
  { src: '/bikes/bikes-hero.png', depth: 0.1, alt: 'TVS lineup background' },
  { src: '/bikes/ntorq-125.jpg', depth: 0.25, alt: 'NTORQ 125' },
  { src: '/bikes/raider-125.jpg', depth: 0.5, alt: 'Raider 125' }
]

export default function ParallaxShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const layerRefs = useRef<HTMLImageElement[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // entrance animation using anime.js
    anime.timeline({ easing: 'easeOutExpo' })
      .add({ targets: layerRefs.current, translateY: [60, 0], opacity: [0, 1], delay: anime.stagger(120), duration: 800 })

    // Parallax scroll handler
    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const delta = (viewportCenter - centerY) / window.innerHeight // -0.5 .. 0.5 range

      layerRefs.current.forEach((img, i) => {
        const depth = layers[i]?.depth ?? 0.2
        const translateY = delta * depth * 100 // px
        img.style.transform = `translate3d(0, ${translateY}px, 0) scale(${1 + depth * 0.03})`
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // resize handler to recompute on viewport changes
    const onResize = () => onScroll()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.showcase} aria-hidden="false">
      <div className={styles.stage}>
        {layers.map((l, idx) => (
          <img
            key={l.src}
            ref={el => { if (el) layerRefs.current[idx] = el }}
            src={l.src}
            alt={l.alt ?? ''}
            className={styles.layer}
            style={{ zIndex: 10 + idx }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  )
}
