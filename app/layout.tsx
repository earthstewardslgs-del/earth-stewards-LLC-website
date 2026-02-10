import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landscape Design & Native Landscaping in Muskegon, MI | Earth Stewards LLC',
  description: 'Landscape design, garden restoration, and ecological landscaping in Muskegon and Ottawa County. Lower-maintenance landscapes that look better and work with nature. Serving West Michigan.',
  keywords: 'native landscaping Muskegon, landscaping services Muskegon MI, low maintenance landscaping, pollinator garden installation, garden restoration service, invasive species removal, landscape consultation Muskegon, eco friendly landscaping West Michigan, native plants Michigan, landscape design Ottawa County',
  authors: [{ name: 'Earth Stewards LLC' }],
  metadataBase: new URL('https://earthstewardsllc.org'),
  alternates: {
    canonical: 'https://earthstewardsllc.org',
  },
  openGraph: {
    title: 'Landscape Design & Native Landscaping in Muskegon, MI | Earth Stewards LLC',
    description: 'Landscape design, garden restoration, and ecological landscaping in Muskegon and Ottawa County. Lower-maintenance landscapes that look better and work with nature.',
    url: 'https://earthstewardsllc.org',
    siteName: 'Earth Stewards LLC',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Earth Stewards LLC - Native Landscaping Muskegon MI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landscape Design & Native Landscaping in Muskegon, MI',
    description: 'Landscape design, garden restoration, and ecological landscaping in Muskegon and Ottawa County.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
