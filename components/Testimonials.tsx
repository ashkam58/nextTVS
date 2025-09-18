'use client'

import { Grid, Card, CardContent, Typography, Avatar, Box, Chip, Rating, Stack, Divider } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import PlaceIcon from '@mui/icons-material/Place'
import GoogleIcon from '@mui/icons-material/Google'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Rohit', text: 'Tahalka TVS se bike liya — service bahut acchi aur staff friendly. Test ride bhi easily mili.', rating: 5, source: 'Google', date: 'Aug 2025', location: 'Nagpur' },
  { name: 'Suman', text: 'Service centre quick hai, genuine parts milte hain. Pickup-drop convenient tha.', rating: 4.5, source: 'Google', date: 'Jul 2025', location: 'Bhopal' },
  { name: 'Anil', text: 'Offers achhe the aur finance bhi smooth hua. Recommended!', rating: 5, source: 'Google', date: 'Jun 2025', location: 'Pune' }
]

const MotionCard = motion(Card)

function initial(name = '') {
  return name?.trim()?.[0]?.toUpperCase() || '?' // graceful fallback
}

export default function Testimonials() {
  return (
    <Box sx={{
      position: 'relative',
      py: { xs: 6, md: 8 },
      px: { xs: 2, md: 4 },
      // 🔥 New background color (gradient with subtle glow)
      background: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 55%, #ef4444 100%)',
      color: 'white',
      overflow: 'hidden',
      borderRadius: 3,
    }}>
      {/* Ambient blobs for vibe */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: 320, height: 320,
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 60%)',
          filter: 'blur(40px)',
          top: -60, left: -40,
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          width: 360, height: 360,
          background: 'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.18), transparent 60%)',
          filter: 'blur(50px)',
          bottom: -80, right: -60,
        }
      }}/>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', md: 'center' }} sx={{ mb: 3, position: 'relative' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: 0.3 }}>
          Customer Reviews
        </Typography>
        <Chip
          icon={<VerifiedIcon />}
          label="100% Verified Feedback"
          color="success"
          variant="filled"
          sx={{ bgcolor: 'rgba(34,197,94,0.2)', color: '#d1fae5', borderColor: 'rgba(34,197,94,0.5)' }}
        />
      </Stack>

      <Grid container spacing={2}>
        {testimonials.map((t, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <MotionCard
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              elevation={0}
              sx={{
                height: '100%',
                position: 'relative',
                borderRadius: 3,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
                overflow: 'hidden',
              }}
            >
              {/* Decorative quote icon */}
              <FormatQuoteIcon sx={{ position: 'absolute', right: 12, top: 12, opacity: 0.18, fontSize: 36 }} />

              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                  <Box sx={{
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      inset: -2,
                      borderRadius: '50%',
                      background: 'conic-gradient(from 180deg at 50% 50%, #a78bfa, #60a5fa, #34d399, #f472b6, #a78bfa)',
                      zIndex: 0,
                    }
                  }}>
                    <Avatar sx={{ position: 'relative', zIndex: 1, bgcolor: 'rgba(0,0,0,0.3)', border: '2px solid rgba(255,255,255,0.35)' }}>{initial(t.name)}</Avatar>
                  </Box>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white' }}>{t.name}</Typography>
                      <Chip size="small" icon={<VerifiedIcon sx={{ fontSize: 16 }} />} label="Verified" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.35)', color: 'white' }} />
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Rating value={t.rating} precision={0.5} readOnly size="small" />
                      <Typography variant="caption" sx={{ opacity: 0.85 }}>{t.rating.toFixed(1)}</Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.6 }}>
                  {t.text}
                </Typography>

                <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.2)' }} />

                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ opacity: 0.9 }}>
                  <Chip size="small" icon={<GoogleIcon />} label={t.source} sx={{ bgcolor: 'rgba(255,255,255,0.14)', color: 'white' }} />
                  <Typography variant="caption">{t.date}</Typography>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <PlaceIcon fontSize="small" sx={{ opacity: 0.9 }} />
                    <Typography variant="caption">{t.location}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      {/* Footer microcopy */}
      <Typography variant="caption" sx={{ display: 'block', mt: 2, opacity: 0.8 }}>
        Real people. Real rides. Screenshots available on request.
      </Typography>
    </Box>
  )
}
