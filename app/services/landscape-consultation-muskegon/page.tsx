import type { Metadata } from 'next'
import ConsultationPageClient from './ConsultationPageClient'

export const metadata: Metadata = {
  title: 'Landscape Consulting & Site Assessment in Muskegon, MI | Earth Stewards LLC',
  description:
    'Get clear guidance on drainage, soil, layout, and plant strategy. Choose a quick Site Assessment for project scope, or a recorded Consulting Session for deeper planning—whether you hire us or not.',
  keywords:
    'landscape consulting Muskegon, site assessment Muskegon, garden consultation Muskegon MI, landscape planning West Michigan, landscape consulting session, recorded landscape consultation',
}

export default function Page() {
  return <ConsultationPageClient />
}
