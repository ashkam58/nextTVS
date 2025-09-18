
import { notFound } from 'next/navigation'
import bikes from '../../../data/bikes.json'
import { Box, Container, Grid, Typography, Chip, Stack, Button, Divider } from '@mui/material'
import AnimateGridOnMount from '../../../components/AnimateGridOnMount'
import ScrollReveal from '../../../components/ScrollReveal'

export default function BikeDetail({ params }: { params: { slug: string } }) {
  const bike = (bikes as any[]).find(b => b.slug === params.slug)
  if (!bike) return notFound()

  const waTestRide = `https://wa.me/917319762328?text=${encodeURIComponent(bike.whatsappTemplate)}`

  return (
    <Box>
      <Container maxWidth="lg" sx={{py:4}}>
        <AnimateGridOnMount>
          <ScrollReveal direction="up">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} className="anime-item">
                <img src={bike.image} alt={bike.name} style={{width:'100%', borderRadius:12}}/>
              </Grid>
              <Grid item xs={12} md={6} className="anime-item">
                <Typography variant="h3" fontWeight={800}>{bike.name}</Typography>
                <Typography variant="h6" color="primary">{bike.price}</Typography>
                <Stack direction="row" spacing={1} sx={{my:2, flexWrap:'wrap'}}>
                  <Chip label={bike.engine} />
                  <Chip label={bike.mileage} />
                  <Chip label={bike.brake} />
                </Stack>
                <Typography variant="subtitle1" sx={{mb:1}}>Highlights</Typography>
                <ul>
                  {bike.highlights.map((h:string, i:number) => <li key={i}><Typography variant="body1">{h}</Typography></li>)}
                </ul>
                <Stack direction="row" spacing={2} sx={{mt:2}}>
                  <Button size="large" variant="contained" href={waTestRide} target="_blank">Book Test Ride (WhatsApp)</Button>
                  <Button size="large" variant="outlined" href="https://wa.me/917319762328?text=EMI%20details%20please" target="_blank">Ask EMI Details</Button>
                </Stack>
              </Grid>
            </Grid>
          </ScrollReveal>
        </AnimateGridOnMount>
        <Divider sx={{my:4}}/>
        <Typography variant="body2" color="text.secondary">*Prices are indicative. Please contact showroom for on-road price.</Typography>
      </Container>
    </Box>
  )
}
