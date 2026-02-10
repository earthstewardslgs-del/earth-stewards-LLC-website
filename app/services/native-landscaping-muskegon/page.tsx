import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Native & Low-Maintenance Landscaping in Muskegon | Earth Stewards',
  description:
    'Create a beautiful, low-maintenance landscape designed for West Michigan conditions. Native or traditional plantings tailored to your property and goals.',
  keywords:
    'native landscaping Muskegon, native plants Michigan, low maintenance landscaping, ecological landscaping West Michigan',
}

export default function Page() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

            {/* HERO */}
            <section className="space-y-6 text-center">
              <h1 className="text-4xl font-bold">
                Native Landscaping in Muskegon That Looks Intentional — Not Wild
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We design landscapes that thrive in West Michigan conditions and
                become easier to manage every year.
              </p>
            </section>

            {/* PROBLEMS */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Is your yard stuck in maintenance mode?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Grass struggles in dry or shady areas</li>
                <li>Beds constantly overgrown or weedy</li>
                <li>Plants die every year and need replacing</li>
                <li>Too much mowing to keep up with</li>
                <li>Drainage issues or soggy areas</li>
                <li>You want habitat — but not a messy look</li>
              </ul>
            </section>

            {/* BENEFITS */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                What Native Landscaping Changes
              </h2>
              <p>
                Instead of forcing plants to survive here, we match plants to
                soil, moisture, and sunlight so the yard stabilizes naturally.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Less watering</li>
                <li>Fewer inputs (fertilizer & pesticides)</li>
                <li>More seasonal interest</li>
                <li>Stronger soil structure</li>
                <li>Reduced recurring problems</li>
              </ul>
            </section>

            {/* PROCESS */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Process</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Site Visit</strong> — evaluate sun, soil, and drainage
                </li>
                <li>
                  <strong>Design Plan</strong> — aligned with your goals
                </li>
                <li>
                  <strong>Installation</strong> — prepared for long-term success
                </li>
                <li>
                  <strong>Support</strong> — guidance as the landscape fills in
                </li>
              </ol>
            </section>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
