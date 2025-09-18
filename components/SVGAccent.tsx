'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'

export default function SVGAccent() {
  const ref = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const paths = Array.from(ref.current.querySelectorAll<SVGPathElement>('path'))
    paths.forEach(p => {
      const len = p.getTotalLength()
      p.style.strokeDasharray = String(len)
      p.style.strokeDashoffset = String(len)
    })
    anime({ targets: paths, strokeDashoffset: 0, duration: 1200, delay: anime.stagger(100), easing: 'easeOutSine' })
  }, [])

  return (
    <svg ref={ref} width="120" height="120" viewBox="0 0 120 120" fill="none" style={{position:'absolute', right:16, top:16}}>
      <path d="M10 60 C40 10, 80 10, 110 60" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 80 C40 40, 80 40, 110 80" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
