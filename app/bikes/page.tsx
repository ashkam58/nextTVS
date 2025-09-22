import type { Metadata } from 'next'
import Script from 'next/script'
import { Box, Container, Grid, Typography, Stack, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import bikes from '../../data/bikes.json'
import BikeCard from '../../components/BikeCard'
import AnimateGridOnMount from '../../components/AnimateGridOnMount'
import ScrollReveal from '../../components/ScrollReveal'
import Testimonials from '../../components/Testimonials'
import PageBanner from '../../components/PageBanner'
import { Suspense } from 'react'
import ScrollRide from '../../components/ScrollRide'
import Link from 'next/link'

const bikesFaq = [
  {
    question: 'Is Tahalka TVS an authorised TVS dealership in Begusarai?',
    answer: 'Yes. Tahalka TVS is the authorised TVS showroom and service centre for Begusarai, based on NH-28 at Teghra Chowk with trained technicians and genuine parts.'
  },
  {
    question: 'Can I book a TVS bike test ride online from Bihar?',
    answer: 'Absolutely. Share your contact on WhatsApp (+91 73197 62328) or use the contact form and we will schedule a Begusarai or Barauni doorstep test ride slot.'
  },
  {
    question: 'Do you provide TVS service and roadside support around Begusarai?',
    answer: 'We handle periodic service, accidental repairs, and emergency assistance across Begusarai, Barauni, Samastipur, and nearby highways through our authorised TVS service crew.'
  },
  {
    question: 'What finance and exchange offers are available in Begusarai?',
    answer: 'We partner with leading finance providers for low down payment EMI plans, plus instant exchange valuation for your current scooter or motorcycle.'
  },
  {
    question: 'How quickly can I get delivery of a new TVS scooter?',
    answer: 'Popular models like Jupiter, Raider, Apache RTR, and Ronin are in ready stock at Tahalka TVS. Same-day registration and delivery is available for most Begusarai customers.'
  }
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: bikesFaq.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
}

export const metadata: Metadata = {
  title: 'TVS Bikes & Scooters in Begusarai | Tahalka TVS Bihar',
  description: 'Explore prices, mileage, and offers for the latest TVS bikes and scooters at Tahalka TVS Begusarai. Authorised TVS showroom and service centre for Bihar riders.',
  keywords: [
    'TVS Begusarai',
    'TVS bikes Begusarai',
    'TVS service center Begusarai',
    'TVS showroom Bihar',
    'Tahalka TVS',
    'TVS scooter Begusarai'
  ],
  alternates: { canonical: '/bikes' },
  openGraph: {
    title: 'TVS Bikes & Scooters in Begusarai | Tahalka TVS Bihar',
    description: 'Authorised Tahalka TVS showroom on NH-28, Teghra Chowk. Book test rides, service slots, and access genuine TVS parts for Begusarai and Barauni.',
    url: 'https://tahalka-tvs.example/bikes',
    siteName: 'Tahalka TVS',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/hero/bikes-hero.svg',
        width: 1200,
        height: 675,
        alt: 'TVS bikes and scooters showroom in Begusarai Bihar'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tahalka TVS Begusarai | Latest TVS Bikes & Scooters',
    description: 'Shop authorised TVS bikes, scooters, and service support across Begusarai and Bihar from Tahalka TVS.',
    images: ['/hero/bikes-hero.svg']
  }
}

export default function BikesPage() {
  return (
    <Box component='section'>
      <PageBanner
        title='Begusarai TVS Bikes & Scooters'
        subtitle='Authorised Tahalka TVS dealership on NH-28, Teghra Chowk. Explore on-road prices, quick finance, and same-day delivery across Begusarai, Barauni, and Samastipur.'
        image='hero/bikes-hero.svg'
        ctaLabel='Book a Test Ride'
        ctaHref='/contact'
      />

      <Script id='bikes-faq-schema' type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(faqJsonLd)}
      </Script>

      <ScrollRide imageSrc='/hero/scrollRidebike.png' alt='Rider exploring Begusarai on a TVS bike' />

      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4} alignItems='stretch'>
          <Grid item xs={12} md={8}>
            <Typography
              variant='h1'
              component='h1'
              sx={{ fontSize: { xs: 32, md: 40 }, fontWeight: 800, lineHeight: 1.15 }}
            >
              Tahalka TVS - Begusarai's authorised TVS bike showroom
            </Typography>
            <Typography variant='body1' color='text.secondary' sx={{ mt: 2 }}>
              From Apache RTR race machines to Jupiter family scooters, Tahalka TVS keeps the entire TVS Motor
              range ready for Bihar roads. Visit our NH-28 Teghra Chowk outlet for informed recommendations,
              one-hour finance approvals, and genuine TVS accessories that keep your ride rugged in Begusarai's
              weather.
            </Typography>
            <Stack component='ul' spacing={1.2} sx={{ mt: 3, pl: 3 }}>
              <Typography component='li' variant='body1'>
                Authorised TVS showroom &amp; service centre registered with TVS Motor Company for Begusarai district.
              </Typography>
              <Typography component='li' variant='body1'>
                Same-day RTO paperwork, number plate fitment, and fast EMI approvals with minimum documentation.
              </Typography>
              <Typography component='li' variant='body1'>
                Genuine TVS spare parts, engine oil, and accessories stocked for Apache, Raider, Jupiter, Ronin, Ntorq, and more.
              </Typography>
              <Typography component='li' variant='body1'>
                Doorstep pickup &amp; drop for service within Begusarai, Barauni, and nearby industrial areas.
              </Typography>
            </Stack>
            <Typography variant='body2' sx={{ mt: 3 }}>
              Looking for maintenance tips and ride stories? Read the latest updates on our{' '}
              <Link href='/blog'>TVS Begusarai blog</Link>.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                p: 3,
                borderRadius: 3,
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}
            >
              <Typography variant='h2' component='h2' sx={{ fontSize: 20, fontWeight: 700 }}>
                Begusarai showroom info
              </Typography>
              <Typography variant='body2' sx={{ mt: 2, fontWeight: 600 }}>
                Location
              </Typography>
              <Typography variant='body2'>NH-28, Teghra Chowk, Begusarai, Bihar 851133</Typography>
              <Typography variant='body2' sx={{ mt: 2, fontWeight: 600 }}>
                Sales &amp; Test Ride
              </Typography>
              <Typography variant='body2'>+91 73197 62328</Typography>
              <Typography variant='body2' sx={{ mt: 2, fontWeight: 600 }}>
                Service Desk
              </Typography>
              <Typography variant='body2'>+91 74800 12328</Typography>
              <Typography variant='body2' sx={{ mt: 2, fontWeight: 600 }}>
                Timings
              </Typography>
              <Typography variant='body2'>Monday - Sunday: 9:30 AM to 8:00 PM</Typography>
              <Typography variant='caption' color='text.secondary' sx={{ mt: 2, display: 'block' }}>
                Walk-ins welcome. Pre-book slots on WhatsApp for priority delivery.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant='h2' component='h2' sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 700, mb: 3 }}>
          2025 TVS bike &amp; scooter line-up for Bihar
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
          Compare mileage, features, and ex-showroom pricing for every TVS motorcycle and scooter sold in Bihar.
          Filter your favourites and tap to request an on-road quote for Begusarai.
        </Typography>
        <AnimateGridOnMount>
          <ScrollReveal direction='up'>
            <Suspense>
              <Grid container spacing={2}>
                {bikes.map((b: any) => (
                  <Grid key={b.slug} item xs={12} sm={6} md={4} className='anime-item'>
                    <BikeCard bike={b} />
                  </Grid>
                ))}
              </Grid>
            </Suspense>
          </ScrollReveal>
        </AnimateGridOnMount>
      </Container>

      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant='h2' component='h2' sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 700, mb: 2 }}>
          Begusarai riders ask
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ mb: 3 }}>
          Answers for the most common TVS Begusarai and Bihar service centre searches. Call or ping us on WhatsApp
          if you need more personalised assistance.
        </Typography>
        {bikesFaq.map((item, index) => (
          <Accordion key={item.question} defaultExpanded={index === 0} sx={{ mb: 1.5 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}-content`} id={`faq-${index}-header`}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body2' color='text.secondary'>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>

      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 6 } }}>
        <Testimonials />
      </Container>
    </Box>
  )
}
