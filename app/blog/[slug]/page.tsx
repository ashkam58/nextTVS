import type { Metadata } from 'next'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Box, Container, Typography, Divider, Stack, Chip, Button } from '@mui/material'
import PageBanner from '../../../components/PageBanner'
import blogPosts from '../../../data/blog.json'

const siteUrl = 'https://tahalka-tvs.example'

type BlogPageParams = { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPageParams): Metadata {
  const post = blogPosts.find(item => item.slug === params.slug)
  if (!post) {
    return {
      title: 'Tahalka TVS Begusarai Blog',
      description: 'TVS bikes and service updates from Tahalka TVS Begusarai.'
    }
  }

  const url = `${siteUrl}/blog/${post.slug}`

  return {
    title: `${post.title} | Tahalka TVS Begusarai Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Tahalka TVS Begusarai`,
      description: post.excerpt,
      url,
      type: 'article',
      siteName: 'Tahalka TVS',
      locale: 'en_IN',
      publishedTime: post.date,
      images: [
        {
          url: post.cover,
          width: 1200,
          height: 675,
          alt: post.heroAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.cover]
    }
  }
}

export default function BlogArticlePage({ params }: BlogPageParams) {
  const post = blogPosts.find(item => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    alternativeHeadline: post.excerpt,
    description: post.excerpt,
    articleSection: post.category,
    datePublished: post.date,
    keywords: post.keywords,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    image: post.cover,
    author: {
      '@type': 'Organization',
      name: 'Tahalka TVS Begusarai'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tahalka TVS Begusarai',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/hero/tlogo.png`
      }
    }
  }

  return (
    <Box component='article'>
      <PageBanner
        title={post.title}
        subtitle={post.excerpt}
        image={post.cover}
        ctaLabel={post.cta?.label ?? 'Book a Visit'}
        ctaHref={post.cta?.href ?? '/contact'}
      />

      <Script id={`blog-post-schema-${post.slug}`} type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(articleJsonLd)}
      </Script>

      <Container maxWidth='md' sx={{ py: { xs: 4, md: 6 } }}>
        <Stack direction='row' spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
          <Chip label={post.category} size='small' color='primary' />
          <Chip label={new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} size='small' />
          <Chip label={`${post.readTimeMinutes} min read`} size='small' />
        </Stack>

        {post.sections.map(section => (
          <Box key={section.heading} sx={{ mb: 4 }}>
            <Typography variant='h2' component='h2' sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 700, mb: 1.5 }}>
              {section.heading}
            </Typography>
            {section.body.map((paragraph, idx) => (
              <Typography key={`${section.heading}-${idx}`} variant='body1' color='text.secondary' sx={{ mb: 2 }}>
                {paragraph}
              </Typography>
            ))}
          </Box>
        ))}

        {post.cta && (
          <Box sx={{ mt: 4 }}>
            <Divider sx={{ mb: 3 }} />
            <Typography variant='h3' component='h3' sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 700, mb: 1 }}>
              Ready to take the next step?
            </Typography>
            <Typography variant='body1' color='text.secondary' sx={{ mb: 2 }}>
              Tahalka TVS helps Begusarai riders with quick service bookings, finance paperwork, and genuine accessories.
            </Typography>
            <Button component={Link} href={post.cta.href} variant='contained' sx={{ textTransform: 'none' }}>
              {post.cta.label}
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  )
}
