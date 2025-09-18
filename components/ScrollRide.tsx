"use client"

import { useEffect, useRef } from 'react'
import styles from './ScrollRide.module.css'
import anime from 'animejs'

function clamp(v: number, a = 0, b = 1) { return Math.max(a, Math.min(b, v)) }

type ScrollRideProps = {
  imageSrc?: string
  alt?: string
}

/**
 * ScrollRide
 * - imageSrc: URL path to the image to animate (defaults to /hero/tlogo.png)
 * - alt: alt text for the image
 *
 * This component is a client-only animation that moves an image across the screen
 * as the section scrolls into view. Pass a different `imageSrc` on each page to reuse it.
 */
export default function ScrollRide({ imageSrc = '/hero/tlogo.png', alt = 'TVS bike riding' }: ScrollRideProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const bikeRef = useRef<HTMLImageElement | null>(null)
  const linesRef = useRef<HTMLDivElement | null>(null)
  const shimmerRef = useRef<HTMLDivElement | null>(null)
  const sparklePoolRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // entrance animation
    anime({ targets: el, opacity: [0,1], translateY: [24,0], duration: 700, easing: 'easeOutQuad' })

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const h = window.innerHeight
      // progress when element center travels through viewport
      const progress = clamp((h - rect.top) / (h + rect.height), 0, 1)

      // compute translateX in px: start off-screen left (-200), end off-screen right (window.innerWidth + 200)
      const start = -260
      const end = window.innerWidth + 260
      const tx = start + (end - start) * progress

      const bob = Math.sin(progress * Math.PI) * -22
      const rot = (progress * 12) - 6

      if (bikeRef.current) {
        bikeRef.current.style.transform = `translate3d(${tx}px, ${bob}px, 0) rotate(${rot}deg)`
      }

      if (linesRef.current) {
        linesRef.current.style.opacity = `${Math.max(0, progress * 1.2)}`
        linesRef.current.style.width = `${18 + progress * 70}vw`
      }

      if (shimmerRef.current) {
        shimmerRef.current.style.opacity = `${Math.pow(progress, 0.8) * 0.95}`
      }

      // spawn sparkles occasionally when entering the mid-progress
      if (progress > 0.25 && progress < 0.85 && Math.random() > 0.92 && sparklePoolRef.current) {
        const s = document.createElement('div')
        s.className = styles.sparkle
        const left = Math.random() * 80 + 10
        const top = Math.random() * 60 + 20
        s.style.left = left + '%'
        s.style.top = top + '%'
        sparklePoolRef.current.appendChild(s)
        anime({ targets: s, opacity: [0,1,0], scale: [0.6,1.2,0.8], translateY: [-6, -18, -28], duration: 900, easing: 'easeOutCubic', complete: () => s.remove() })
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section ref={ref} className={styles.container} aria-label="Bike scroll showcase">
      <div className={styles.track}>
        <div ref={shimmerRef} className={styles.goldShimmer} />
        <div ref={linesRef} className={styles.speedLines} />
        <div ref={sparklePoolRef} />
        <img ref={bikeRef} className={styles.bike} src={imageSrc} alt={alt} draggable={false} />
      </div>
    </section>
  )
}
