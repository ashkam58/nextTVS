'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function TextReveal({ text, className }: { text: string, className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const letters = el.querySelectorAll('.char')
    anime.timeline({ easing: 'easeOutExpo' }).add({
      targets: letters,
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(35),
    })
  }, [text])

  return (
    <div ref={ref} className={className} style={{ display: 'inline-block' }}>
      {Array.from(text).map((ch, i) => (
        <span key={i} className="char" style={{ display: 'inline-block', whiteSpace: 'pre' }}>{ch}</span>
      ))}
    </div>
  )
}

