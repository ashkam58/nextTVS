
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material'
import PartsSection from '../../components/PartsSection'
import FAQ from '../../components/FAQ'
import Testimonials from '../../components/Testimonials'
import PageBanner from '../../components/PageBanner'
import MapSection from '../../components/MapSection'
import AnimateGridOnMount from '../../components/AnimateGridOnMount'
import ScrollReveal from '../../components/ScrollReveal'
import ScrollRide from '../../components/ScrollRide'



const services = [
  { title: 'General Service', desc: 'Free first 3 services* · Periodic maintenance by certified technicians.' },
  { title: 'Engine & Electrical', desc: 'Tune-ups, spark plugs, battery health, EFI diagnostics.' },
  { title: 'Brakes & Tyres', desc: 'Brake pads, rotor check, wheel alignment, tyre replacement.' },
  { title: 'Pickup & Drop', desc: 'Teghra / Barauni pickup and drop on request.' },
]

export default function ServicesPage() {
  return (
    <Box>
  <PageBanner title="TVS Service & Genuine Parts" subtitle="Certified service, genuine parts, aur pickup-drop facility. Book service on WhatsApp." image="/hero/servicehero.png" ctaLabel="Book Service" ctaHref="/contact" />
  <ScrollRide imageSrc='/hero/tlogo.png' alt='Rider' />

      <Container maxWidth="lg" sx={{py:4}}>
        <Typography variant="h4" sx={{mb:2}}>Services</Typography>
        <AnimateGridOnMount>
          <ScrollReveal direction="up">
            <Grid container spacing={2} sx={{mb:4}}>
              {services.map((s, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={3} className="anime-item">
                  <Card><CardContent>
                    <Typography variant="h6">{s.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
                  </CardContent></Card>
                </Grid>
              ))}
            </Grid>
          </ScrollReveal>
        </AnimateGridOnMount>

        <Button size="large" variant="contained" href="https://wa.me/917480012328?text=Service%20booking%20chahiye." target="_blank">
          Book Service on WhatsApp
        </Button>

        <Box sx={{mt:5}}>
          <AnimateGridOnMount>
            <ScrollReveal direction="up">
              <PartsSection />
            </ScrollReveal>
          </AnimateGridOnMount>
        </Box>

        <Box sx={{mt:6}}>
          <FAQ />
        </Box>

        <Box sx={{mt:6}}>
          <Testimonials />
        </Box>

        <Box sx={{mt:6}}>
          <MapSection />
        </Box>
      </Container>
    </Box>
  )
}
