import type { Metadata } from 'next'
import StructuredData from '@/components/StructuredData'
import './globals.css'

export const metadata: Metadata = {
  title: 'Earth Stewards LLC | Professional Native Landscape Design & Installation',
  description: 'Expert native landscaping services in Muskegon and Ottawa Counties. Custom design, professional installation, and ongoing maintenance for beautiful, sustainable landscapes.',
  keywords: 'native landscaping, landscape design, Muskegon, Ottawa County, sustainable landscaping, native plants, pollinator gardens, Michigan landscaping, ecological landscaping',
  authors: [{ name: 'Earth Stewards LLC' }],
  metadataBase: new URL('https://earthstewardsllc.org'),
  alternates: {
    canonical: 'https://earthstewardsllc.org',
  },
  openGraph: {
    title: 'Earth Stewards LLC | Professional Native Landscape Design & Installation',
    description: 'Expert native landscaping services in Muskegon and Ottawa Counties.',
    url: 'https://earthstewardsllc.org',
    siteName: 'Earth Stewards LLC',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Earth Stewards LLC Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earth Stewards LLC | Professional Native Landscape Design',
    description: 'Expert native landscaping services in Muskegon and Ottawa Counties.',
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
