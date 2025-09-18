'use client'

import { Box, Container, Typography, Button, Grid } from '@mui/material'
import Link from 'next/link'
import { keyframes } from '@emotion/react'

type Props = {
  title: string
  subtitle?: string
  image?: string
  ctaLabel?: string
  ctaHref?: string
}

// Neon border animation (runs around the edges)
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

// Gentle float for the hero image
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`

export default function PageBanner({ title, subtitle, image = '/hero.svg', ctaLabel, ctaHref }: Props) {
  return (
    <Box sx={{ bgcolor: 'transparent', py: { xs: 2, md: 4 } }}>
      {/* Neon frame wrapper */}
      <Box
        sx={{
          position: 'relative',
          borderRadius: 3,
          overflow: 'hidden',
          p: { xs: 0.75, md: 1 }, // space for the neon border thickness
          // subtle inner background so the neon pops
          background: 'rgba(255,255,255,0.02)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 30px rgba(0,0,0,0.25)',
          // the animated neon gradient ring
          '&:before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: { xs: '2px', md: '3px' },
            background: 'conic-gradient(from 0deg, #00e5ff, #8b5cf6, #ff1cf7, #00e5ff)',
            // carve out the center so only the border shows
            WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            animation: `${spin} 6s linear infinite`,
            zIndex: 0,
          },
          // soft glow that follows the ring
          '&:after': {
            content: '""',
            position: 'absolute',
            inset: -12,
            borderRadius: 'inherit',
            background: 'conic-gradient(from 0deg, rgba(0,229,255,0.6), rgba(139,92,246,0.6), rgba(255,28,247,0.6), rgba(0,229,255,0.6))',
            filter: 'blur(18px)',
            animation: `${spin} 8s linear infinite`,
            zIndex: 0,
          },
        }}
      >
        {/* Actual card surface */}
        <Box sx={{ position: 'relative', zIndex: 1, borderRadius: 2.5, bgcolor: 'background.paper' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: '#000',
                    letterSpacing: 0.2,
                  }}
                  className="hero-animate"
                >
                  {title}
                </Typography>
                {subtitle && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 2, opacity: 0.9 }}
                  >
                    {subtitle}
                  </Typography>
                )}
                {/* Gen-Z Hinglish slogan */}
                <Typography variant="subtitle2" sx={{ mt: 1, color: '#000', fontWeight: 700 }}>
                  Ride karo, swag dikhao — Tahalka se nayi TVS pakdo!
                </Typography>
                {ctaLabel && ctaHref && (
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href={ctaHref}
                    sx={{
                      mt: 3,
                      textTransform: 'none',
                      fontWeight: 700,
                      borderRadius: 999,
                      px: 3,
                      py: 1.25,
                      background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)',
                      boxShadow: '0 0 18px rgba(236,72,153,0.6)',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #0ea5e9, #7c3aed, #f472b6)',
                        boxShadow: '0 0 26px rgba(236,72,153,0.85)',
                      },
                    }}
                  >
                    {ctaLabel}
                  </Button>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: '100%',
                    maxHeight: 360,
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.25), 0 0 30px rgba(139,92,246,0.35)',
                    animation: `${float} 6s ease-in-out infinite`,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
