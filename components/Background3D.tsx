"use client"

import React, { useEffect, useRef } from 'react'
import anime from 'animejs'
import styles from './Background3D.module.css'

export default function Background3D() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const shapesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!rootRef.current || !shapesRef.current) return

    // respect reduced motion
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const nodes = Array.from(shapesRef.current.querySelectorAll<HTMLElement>('.' + styles.shape))

    // simple staggered, looping 3D transforms
    const anims = nodes.map((el, i) => {
      const dur = 5500 + i * 700
      return anime({
        targets: el,
        translateZ: [ -60 - i * 8, 40 + i * 6 ],
        rotateY: [ -8, 8 ],
        translateX: [ -20 + i * 6, 20 - i * 6 ],
        translateY: [ -6, 6 ],
        duration: dur,
        direction: 'alternate',
        easing: 'easeInOutSine',
        loop: true,
        autoplay: true
      })
    })

    // a slow global shimmer pulse
    const shimmer = anime({ targets: rootRef.current, opacity: [0.85, 1], duration: 8000, direction: 'alternate', loop: true, easing: 'linear' })

    return () => {
      anims.forEach(a => anime.remove(a.animatables.map((x: any) => x.target as HTMLElement)))
      anime.remove(rootRef.current)
      nodes.forEach(n => anime.remove(n))
      shimmer.pause()
    }
  }, [])

  return (
    <div ref={rootRef} className={styles.bgRoot} aria-hidden="true">
      <div className={styles.container}>
        <div ref={shapesRef} className={styles.shapes}>
          <div className={styles.shape} />
          <div className={styles.shape} />
          <div className={styles.shape} />
          <div className={styles.shape} />
          <div className={styles.shape} />
          <div className={styles.shape} />
        </div>
      </div>
    </div>
  )
}
