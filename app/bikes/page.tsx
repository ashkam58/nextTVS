
import { Box, Container, Grid, Typography, TextField } from '@mui/material'
import bikes from '../../data/bikes.json'
import BikeCard from '../../components/BikeCard'
import AnimateGridOnMount from '../../components/AnimateGridOnMount'
import ScrollReveal from '../../components/ScrollReveal'
import Testimonials from '../../components/Testimonials'
import PageBanner from '../../components/PageBanner'
import { Suspense } from 'react'
import ScrollRide from '../../components/ScrollRide'

export default function BikesPage() {
  return (
    <Box>
  <PageBanner title="All Bikes & Scooters" subtitle="TVS bikes & scooters — test rides, offers, and easy finance." image="hero/heroTahalka.png" ctaLabel="See Offers" ctaHref="/" />


      <Container maxWidth="lg" sx={{py:4}}>
        <AnimateGridOnMount>
          <ScrollReveal direction="up">
            <Suspense>
              <Grid container spacing={2}>
                {bikes.map((b:any) => (
                  <Grid key={b.slug} item xs={12} sm={6} md={4} className="anime-item"><BikeCard bike={b} /></Grid>
                ))}
              </Grid>
            </Suspense>
          </ScrollReveal>
        </AnimateGridOnMount>
      </Container>

        <ScrollRide imageSrc='/hero/scrollRidebike.png' alt='Rider' />


      <Container maxWidth="lg" sx={{py:4}}>
        <Testimonials />
      </Container>
    </Box>
  )
}
