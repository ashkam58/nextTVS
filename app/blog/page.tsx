import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Box, Container, Grid, Typography, Card, CardActionArea, CardContent, Chip, Stack } from '@mui/material'
import PageBanner from '../../components/PageBanner'
import ScrollReveal from '../../components/ScrollReveal'
import blogPosts from '../../data/blog.json'

const blogStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Tahalka TVS Begusarai Blog',
  description: 'Latest TVS bike launches, service tips, and finance offers for riders across Begusarai and Bihar.',
  url: 'https://tahalka-tvs.example/blog',
  inLanguage: 'en-IN',
  blogPost: blogPosts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    keywords: post.keywords,
    url: `https://tahalka-tvs.example/blog/${post.slug}`,
    about: post.category
  }))
}

const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

export const metadata: Metadata = {
  title: 'Tahalka TVS Blog | TVS Bikes, Service & Finance in Begusarai',
  description: 'Guides and latest updates from Tahalka TVS Begusarai covering TVS bike launches, authorised service advice, and financing offers for Bihar riders.',
  keywords: [
    'TVS blog Begusarai',
    'TVS service tips Bihar',
    'TVS bike news Begusarai',
    'Tahalka TVS updates'
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Tahalka TVS Blog | TVS Bikes, Service & Finance in Begusarai',
    description: 'Stay ahead with TVS bike reviews, service checklists, and EMI hacks curated for Begusarai and Bihar riders.',
    url: 'https://tahalka-tvs.example/blog',
    siteName: 'Tahalka TVS',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/hero/bikes-hero.svg',
        width: 1200,
        height: 675,
        alt: 'TVS riders in Begusarai reading Tahalka TVS blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tahalka TVS Begusarai Blog',
    description: 'TVS service and bike guidance for Begusarai and Bihar riders from Tahalka TVS.',
    images: ['/hero/bikes-hero.svg']
  }
}

export default function BlogPage() {
  return (
    <Box component='section'>
      <PageBanner
        title='Tahalka TVS Blog — Begusarai insights'
        subtitle='Everything TVS for Bihar: showroom launches, service hacks, financing advice, and road trip inspiration from Begusarai.'
        image='hero/bikes-hero.svg'
        ctaLabel='Talk to a TVS Expert'
        ctaHref='/contact'
      />

      <Script id='blog-structured-data' type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(blogStructuredData)}
      </Script>

      <Container maxWidth='lg' sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant='h1' component='h1' sx={{ fontSize: { xs: 32, md: 40 }, fontWeight: 800, mb: 2 }}>
          TVS bikes, service, and finance stories for Bihar riders
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ mb: 4 }}>
          Explore detailed guides tailored for Begusarai, Barauni, and neighbouring towns. We keep the focus on
          TVS Motor updates, local service programmes, and real finance examples so you can ride smarter every day.
        </Typography>
        <Grid container spacing={3}>
          {blogPosts.map(post => (
            <Grid item xs={12} md={6} key={post.slug}>
              <ScrollReveal direction='up'>
                <Card component='article' sx={{ height: '100%' }}>
                  <CardActionArea component={Link} href={`/blog/${post.slug}`} sx={{ alignItems: 'flex-start' }}>
                    <CardContent>
                      <Stack direction='row' spacing={1} sx={{ mb: 1.5 }}>
                        <Chip label={post.category} size='small' color='primary' variant='outlined' />
                        <Chip label={`${post.readTimeMinutes} min read`} size='small' variant='outlined' />
                      </Stack>
                      <Typography variant='h2' component='h2' sx={{ fontSize: 22, fontWeight: 700, mb: 1 }}>
                        {post.title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                        {dateFormatter.format(new Date(post.date))}
                      </Typography>
                      <Typography variant='body1' color='text.secondary'>
                        {post.excerpt}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

