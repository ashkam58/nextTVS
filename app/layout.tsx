
import type { Metadata } from 'next'
import './globals.css'
// Removed invalid import: AppRouterCacheProvider from '@mui/material-nextjs/v14-appRouter'
import ThemeClientProvider from '../components/ThemeClientProvider'
import Navbar from '../components/Navbar'
import PageInfoBar from '../components/PageInfoBar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Tahalka TVS | Begusarai TVS Showroom & Service',
  description: 'Tahalka TVS — NH-28, Teghra Chowk, Begusarai. Bikes, scooters, genuine parts, and service. Book a test ride on WhatsApp.',
  keywords: ['TVS Begusarai','Tahalka TVS','TVS bikes','TVS service','Begusarai showroom','Teghra Chowk'],
  openGraph: {
    title: 'Tahalka TVS',
    description: 'Begusarai ka trusted TVS showroom & service centre',
    url: 'https://tahalka-tvs.example', // replace in production
    siteName: 'Tahalka TVS',
    images: [{ url: '/hero.svg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: { canonical: '/' }
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Tahalka TVS',
    image: '/logo.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'NH-28, Teghra Chowk',
      addressLocality: 'Begusarai',
      addressRegion: 'Bihar',
      postalCode: '851133',
      addressCountry: 'IN'
    },
    telephone: '+917319762328',
    areaServed: 'Begusarai, Teghra, Barauni',
    url: 'https://tahalka-tvs.example'
  }

  return (
    <html lang="en">
      <body>
        <ThemeClientProvider>
          <Navbar />
          {/* spacer to offset the fixed navbar height */}
          <div style={{ height: 72 }} aria-hidden />
          <PageInfoBar />
          <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
          <main>{children}</main>
          <WhatsAppFloat />
          <Footer />
        </ThemeClientProvider>
      </body>
    </html>
  )
}
