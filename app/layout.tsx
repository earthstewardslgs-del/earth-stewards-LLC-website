import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Earth Stewards LLC | Professional Native Landscape Design & Installation',
  description: 'Expert native landscaping services in Muskegon and Ottawa Counties. Custom design, professional installation, and ongoing maintenance for beautiful, sustainable landscapes.',
  keywords: 'native landscaping, landscape design, Muskegon, Ottawa County, sustainable landscaping, native plants, pollinator gardens',
  openGraph: {
    title: 'Earth Stewards LLC | Professional Native Landscape Design & Installation',
    description: 'Expert native landscaping services in Muskegon and Ottawa Counties.',
    images: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
