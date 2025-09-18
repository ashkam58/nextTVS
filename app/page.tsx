
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Hero from '../components/Hero'
import ScrollRide from '../components/ScrollRide'
import OfferMarquee from '../components/OfferMarquee'
import bikes from '../data/bikes.json'
import BikeCard from '../components/BikeCard'
import AnimateGridOnMount from '../components/AnimateGridOnMount'
import ScrollReveal from '../components/ScrollReveal'
import PartsSection from '../components/PartsSection'
import Link from 'next/link'
import Testimonials from '../components/Testimonials'
import NewsletterCTA from '../components/NewsletterCTA'

export default function HomePage() {
  return (
    <Box>
      <OfferMarquee />
      <Hero />
      <Container maxWidth="lg" sx={{py:4}}>
        <Typography variant="h5" sx={{mb:2}}>Featured Bikes</Typography>
        <AnimateGridOnMount>
          <ScrollReveal direction="up">
            <Grid container spacing={2}>
              {bikes.slice(0,3).map((b:any) => (
                <Grid key={b.slug} item xs={12} sm={6} md={4} className="anime-item"><BikeCard bike={b} /></Grid>
              ))}
            </Grid>
          </ScrollReveal>
        </AnimateGridOnMount>
        <Button sx={{mt:2}} component={Link} href="/bikes">See all bikes</Button>
      </Container>
                <ScrollRide imageSrc='/hero/tlogo.png'/>

      <Container maxWidth="lg" sx={{py:4}}>
        <Typography variant="h5" sx={{mb:2}}>TVS Service · Begusarai</Typography>
        <Typography variant="body1" color="text.secondary" sx={{mb:2}}>
          Free first 3 services* · Quick service bay · Genuine parts · Pickup & Drop (Teghra/Barauni).
        </Typography>
        <Grid container spacing={2} sx={{mb:2}}>
          <Grid item xs={12} sm={6}>
            <Button size="large" variant="contained" href="https://wa.me/917480012328?text=Service%20booking%20chahiye." target="_blank">Book Service on WhatsApp</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button size="large" variant="outlined" component={Link} href="/services">Explore Services</Button>
          </Grid>
        </Grid>

        <AnimateGridOnMount>
          <ScrollReveal direction="up">
            <PartsSection />
          </ScrollReveal>
        </AnimateGridOnMount>
      </Container>

      <Container maxWidth="lg" sx={{py:4}}>
        <Testimonials />
      </Container>

      <Container maxWidth="lg" sx={{py:4}}>
        <NewsletterCTA />
      </Container>
    </Box>
  )
}
