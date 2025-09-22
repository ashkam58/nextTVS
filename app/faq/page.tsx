import type { Metadata } from 'next'
import Script from 'next/script'
import { Box, Container, Grid, Typography, Paper, Stack } from '@mui/material'
import PageBanner from '../../components/PageBanner'
import FAQ, { FAQItem } from '../../components/FAQ'

const faqItems: FAQItem[] = [
  {
    q: 'Tahalka TVS Begusarai kis location par hai?',
    a: 'Hum NH-28 par Teghra Chowk, Begusarai (PIN 851133) mein hain. Nearby towns jaise Barauni, Sahebpur Kamal, aur Samastipur se 30-45 minute drive hai.'
  },
  {
    q: 'TVS service center Begusarai mein kitne baje tak khula rehta hai?',
    a: 'Service bay roz subah 9:30 baje se raat 8:00 baje tak chalta hai. Monday se Sunday tak open, par WhatsApp booking se priority lane milta hai.'
  },
  {
    q: 'Doorstep pick-up & drop available hai kya?',
    a: 'Haan, Begusarai shaher, Barauni industrial area, aur NH-31 corridor tak doorstep pick-up & drop available hai. +91 74800 12328 par ping karke slot lock karein.'
  },
  {
    q: 'TVS bike test ride kaise book karun?',
    a: 'Website ke Contact form se request bhejiye ya WhatsApp +91 73197 62328 par naam aur model share karein. Hum ya to showroom visit schedule karte hain ya doorstep test ride.'
  },
  {
    q: 'Finance aur EMI options kya milte hain?',
    a: 'TVS Credit, HDB, IDFC, aur local co-operative banks ke saath tie-ups hain. 7-10% down payment se EMI start hoti hai. Aadhaar, PAN, aur income proof saath laayein.'
  },
  {
    q: 'Exchange offer Begusarai mein milta hai?',
    a: 'Yes, old bike ya scooter kisi bhi brand ka lekar aayiye. Instant valuation ke saath exchange bonus aur festival offers add kar sakte hain.'
  },
  {
    q: 'Genuine TVS parts kaise order karein?',
    a: 'Parts counter par stock maintain rehta hai. Agar koi item back-order mein ho, hum 48 ghante mein TVS warehouse se mangwa dete hain. WhatsApp par part number share karein.'
  },
  {
    q: 'Bihar road trips ke liye kaun sa TVS bike best rahega?',
    a: 'Long rides ke liye TVS Ronin aur Apache RTR 200 4V popular choices hain. Touring seats, Bluetooth navigation, aur dual-channel ABS support ke saath aate hain.'
  },
  {
    q: 'Service record maintain hota hai kya?',
    a: 'Har service job card TVS Motor ke DMS system mein update hota hai. Is se warranty claims aur resale value dono strong rehte hain.'
  },
  {
    q: 'Emergency breakdown support milta hai?',
    a: '24x7 roadside assistance add-on ke saath towing aur on-spot repair ki facility hai. Subscription parts & service desk se le sakte hain.'
  }
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a
    }
  }))
}

export const metadata: Metadata = {
  title: 'Tahalka TVS Begusarai FAQ | TVS Service & Showroom Questions',
  description: 'Tahalka TVS Begusarai ke frequently asked questions. TVS service timings, test ride booking, EMI, aur doorstep pick-up details Bihar riders ke liye.',
  keywords: [
    'TVS Begusarai FAQ',
    'TVS service center Begusarai questions',
    'Tahalka TVS Bihar',
    'TVS showroom Teghra Chowk',
    'TVS bike EMI Begusarai'
  ],
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Tahalka TVS Begusarai FAQ | TVS Service & Showroom Questions',
    description: 'Authorised TVS dealership FAQ for Begusarai, Bihar. Find answers on service slots, finance, test rides, and roadside support.',
    url: 'https://tahalka-tvs.example/faq',
    siteName: 'Tahalka TVS',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/hero/bikes-hero.svg',
        width: 1200,
        height: 675,
        alt: 'Tahalka TVS Begusarai showroom FAQ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tahalka TVS Begusarai FAQ',
    description: 'Get quick answers about TVS bikes, service, EMI, and exchange programs in Begusarai, Bihar.',
    images: ['/hero/bikes-hero.svg']
  }
}

export default function FAQPage() {
  return (
    <Box component='section'>
      <PageBanner
        title='Tahalka TVS Begusarai FAQ'
        subtitle='Authorised TVS showroom & service centre ke popular sawaal aur unke jawaab – Begusarai, Barauni, aur aas-paas ke riders ke liye.'
        image='hero/bikes-hero.svg'
        ctaLabel='Talk to Service Advisor'
        ctaHref='/contact'
      />

      <Script id='faq-structured-data' type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(faqJsonLd)}
      </Script>

      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <FAQ items={faqItems} title='Begusarai riders puchte hain' />
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, background: 'rgba(14, 165, 233, 0.07)', border: '1px solid rgba(14, 165, 233, 0.25)' }}>
              <Typography variant='h2' component='h2' sx={{ fontSize: 22, fontWeight: 700, mb: 2 }}>
                Quick links for Bihar riders
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>Sales & Test Ride</Typography>
                  <Typography variant='body2' color='text.secondary'>+91 73197 62328 · NH-28, Teghra Chowk, Begusarai</Typography>
                </Box>
                <Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>Service Hotline</Typography>
                  <Typography variant='body2' color='text.secondary'>+91 74800 12328 · Doorstep pickup available</Typography>
                </Box>
                <Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>Timings</Typography>
                  <Typography variant='body2' color='text.secondary'>Daily 9:30 AM – 8:00 PM (Sunday included)</Typography>
                </Box>
                <Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>Service Coverage</Typography>
                  <Typography variant='body2' color='text.secondary'>Begusarai · Barauni · Ballia · Tilrath · Bihat · NH-31 corridor</Typography>
                </Box>
                <Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>Need personal guidance?</Typography>
                  <Typography variant='body2' color='text.secondary'>WhatsApp par apna sawal bhejein ya Contact page se callback book karein.</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

