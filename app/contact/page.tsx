
import { Box, Container, Grid, Typography, Card, CardContent, Button, TextField, Stack } from '@mui/material'
import PageBanner from '../../components/PageBanner'
import MapSection from '../../components/MapSection'
import AnimateGridOnMount from '../../components/AnimateGridOnMount'
import ScrollReveal from '../../components/ScrollReveal'
import ScrollRide from '../../components/ScrollRide'


export default function ContactPage() {
  return (
    <Box>
      <PageBanner title="Contact Tahalka TVS" subtitle="Visit our showroom or book service via WhatsApp. Hum aapki madad karenge." image="/bikes/raider_125.svg" ctaLabel="Get Directions" ctaHref="https://maps.google.com/?q=NH-28,+Teghra+Chowk,+Begusarai,+Bihar+851133" />
      
      <Container maxWidth="lg" sx={{py:4}}>
        <Typography variant="h4" sx={{mb:2}}>Contact · Tahalka TVS</Typography>
        <AnimateGridOnMount>
          <ScrollReveal direction="up">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} className="anime-item">
                <Card><CardContent>
                  <Typography variant="h6">Showroom & Service</Typography>
                  <Typography variant="body2" color="text.secondary">
                    NH-28, Teghra Chowk, Begusarai, Bihar-851133
                  </Typography>
                  <Stack spacing={1} sx={{mt:2}}>
                    <Button variant="contained" href="https://wa.me/917319762328" target="_blank">Sales WhatsApp: +91 7319762328</Button>
                    <Button variant="outlined" href="https://wa.me/917480012328" target="_blank">Service WhatsApp: +91 7480012328</Button>
                    <Button variant="text" href="https://maps.google.com/?q=NH-28,+Teghra+Chowk,+Begusarai,+Bihar+851133" target="_blank">Open in Google Maps</Button>
                  </Stack>
                </CardContent></Card>
              </Grid>
              <Grid item xs={12} md={6} className="anime-item">
                <Card><CardContent>
                  <Typography variant="h6" sx={{mb:1}}>Quick Enquiry (opens WhatsApp)</Typography>
                  <TextField fullWidth label="Your Name" name="name" sx={{mb:2}} />
                  <TextField fullWidth label="What do you need? (bike/service/parts)" name="need" sx={{mb:2}} />
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" href={"https://wa.me/917319762328?text="+encodeURIComponent("Namaste, mujhe bike ke baare mein jankari chahiye.")} target="_blank">Ask Sales</Button>
                    <Button variant="outlined" href={"https://wa.me/917480012328?text="+encodeURIComponent("Namaste, mujhe service/parts chahiye.")} target="_blank">Ask Service</Button>
                  </Stack>
                </CardContent></Card>
                <ScrollRide imageSrc='/hero/scrollRidecontact.png' alt='Rider' />
              </Grid>
            </Grid>
          </ScrollReveal>
        </AnimateGridOnMount>
      </Container>
      <Container maxWidth="lg" sx={{py:4}}>
        <MapSection />
      </Container>
    </Box>
  )
}
