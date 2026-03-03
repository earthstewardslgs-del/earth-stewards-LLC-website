import type { Metadata } from 'next'
import ConsultationPageClient from './ConsultationPageClient'

export const metadata: Metadata = {
  title: 'Landscape Consultation & Strategy in Muskegon, MI | Earth Stewards LLC',
  description:
    'Professional landscape consulting in Muskegon. Site Assessment ($75) for project scope, or Strategic Consulting ($225) for long-term planning with recording and written summary.',
  keywords:
    'landscape consulting Muskegon, site assessment Muskegon, strategic landscape consulting, garden consultation Muskegon MI, landscape planning West Michigan',
}

export default function Page() {
  return <ConsultationPageClient />
}
