
'use client'
import * as React from 'react'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import anime from 'animejs'
import styles from './Hero.module.css'
import Background3D from './Background3D'

export default function Hero() {
  React.useEffect(() => {
    anime({
      targets: '.hero-animate',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(120),
      duration: 700,
      easing: 'easeOutQuad'
    })

    // gentle floating for background shapes
    anime({ targets: `.${styles.shape}`, translateY: [-8, 8], duration: 4000, direction: 'alternate', loop: true, easing: 'easeInOutSine' })
  }, [])

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 6, md: 10 }, mb: 4 }} className={styles.heroRoot}>
      <Background3D />
      <div className={styles.bgLayer} aria-hidden="true">
        <div className={styles.shape} />
        <div className={styles.shape} />
      </div>
      <Container maxWidth="lg" sx={{ display:'grid', gridTemplateColumns:{md:'1.1fr 1fr'}, gap:4, alignItems:'center' }}>
        <Stack spacing={2} sx={{ position: 'relative', zIndex: 2 }}>
          <Typography className="hero-animate" variant="h3" fontWeight={800}>
            Begusarai ka apna TVS Showroom — <em>Tahalka TVS</em>
          </Typography>
          <Typography className="hero-animate" variant="h6" color="text.secondary">
            Seedha-saadha website · Tez seva · WhatsApp par turant booking. Test ride, service, genuine parts — sab ek jagah.
          </Typography>
          <Stack className="hero-animate" direction="row" spacing={2}>
            <Button size="large" variant="contained" component={Link} href="/bikes">Browse Bikes</Button>
            <Button size="large" variant="outlined" component={Link} href="/services">View Services</Button>
          </Stack>
          <Typography className="hero-animate" variant="body2" color="text.secondary">
            First 3 services FREE* · Exchange bonus · Student discount — <Link href="/contact">details</Link>
          </Typography>
        </Stack>
        <Box sx={{ display:'flex', justifyContent:'center', position: 'relative', zIndex: 2 }}>
          <Box sx={{ position: 'relative', width: { xs: '100%', md: '100%' }, height: { xs: 240, md: 480 }, maxWidth: 720 }}>
            <Image
              src="/hero/mainhero.webp"
              alt="Tahalka TVS - Begusarai"
              fill
              style={{ objectFit: 'contain', borderRadius: 16, boxShadow: '0 12px 40px rgba(0,0,0,0.15)' }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
