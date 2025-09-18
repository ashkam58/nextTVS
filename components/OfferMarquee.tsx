
'use client'
import * as React from 'react'
import { Box, Link as MLink } from '@mui/material'
import offers from '../data/offers.json'
import anime from 'animejs'

export default function OfferMarquee() {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current) return
    anime({
      targets: ref.current.querySelectorAll('span'),
      translateX: ['0%', '-100%'],
      easing: 'linear',
      duration: 14000,
      loop: true,
      delay: anime.stagger(200)
    })
  }, [])

  return (
    <Box sx={{ bgcolor: 'secondary.main', color: '#fff', py: 1, overflow:'hidden' }}>
      <div className="offer-marquee" ref={ref}>
        {offers.concat(offers).map((o, i) => (
          <span key={i}><MLink href={o.href} style={{color:'#fff', fontWeight:700}}>{o.text}</MLink> &nbsp;•&nbsp;</span>
        ))}
      </div>
    </Box>
  )
}
