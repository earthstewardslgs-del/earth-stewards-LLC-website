import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Garden Restoration in Muskegon, MI | Earth Stewards LLC',
  description:
    'Garden restoration in Muskegon and West Michigan. Rebuild overgrown or failing beds with proper spacing, soil care, and plant selection that lasts.',
  keywords:
    'garden restoration Muskegon, bed rebuilding Muskegon MI, overgrown garden West Michigan, landscape restoration, perennial bed restoration, garden renovation Muskegon',
}

export default function GardenRestorationPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is garden restoration different than a basic cleanup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Restoration looks at why the space stopped working—crowding, soil, drainage, invasives, plant selection—and stabilizes it so it stays manageable long-term.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you keep any of the existing plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Often, yes. We keep what is working, remove what is not, and rebuild spacing and structure so the garden can thrive.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we do the work in phases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many restorations are done in phases based on priorities and budget—starting with the areas that cause the most stress or recurring problems.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Garden Restoration and Bed Rebuilding in Muskegon
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                If your garden has become overgrown, sparse, or confusing to
                maintain, we rebuild it with spacing, soil care, and plant
                structure so it stabilizes instead of constantly needing rescue
                work in West Michigan's climate.
              </p>
              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West
                Michigan communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Start With a Site Visit
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <section className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-earth-900">
              When people call us
            </h2>
            <p className="text-earth-700 text-lg max-w-3xl">
              Many gardens start with good intentions and then slowly become
              difficult to manage—crowded plants, invasive spread, bare soil, or
              sections that never thrive.
            </p>
            <p className="text-earth-700 text-lg max-w-3xl">
              Restoration improves what is already there rather than starting
              over. The goal is a landscape that looks intentional again and
              becomes easier to maintain moving forward.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              What we do
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Before
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-earth-700">
                  <li>Crowding and constant messy growth</li>
                  <li>Weeds and invasives taking advantage of bare soil</li>
                  <li>Plants failing year after year</li>
                  <li>Maintenance that never seems to catch up</li>
                </ul>
              </div>

              <div className="bg-moss-50 rounded-2xl border border-moss-200 p-6">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  After
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-earth-800">
                  <li>Clear spacing, structure, and defined beds</li>
                  <li>Stronger plant health and seasonal consistency</li>
                  <li>Less recurring rescue work</li>
                  <li>A baseline that is actually maintainable</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-earth-900 tracking-wide border-l-4 border-moss-600 pl-3">
              What you leave with
            </h2>

            <p className="text-earth-700 text-lg max-w-3xl">
              Restoration is not just cleanup. It is identifying why the space
              stopped working and correcting the underlying problems.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Site conditions
                </h3>
                <p className="text-earth-700">
                  Light, soil, drainage, and microclimates that affect what will
                  actually thrive.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Plant competition
                </h3>
                <p className="text-earth-700">
                  Crowding, aggressive species, and spacing issues that cause
                  decline over time.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Maintenance burden
                </h3>
                <p className="text-earth-700">
                  What makes the garden feel like a constant job—and how to
                  reduce that.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Seasonal performance
                </h3>
                <p className="text-earth-700">
                  How the garden behaves across the year, not just during peak
                  summer.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/overgrown-yard-cleanup"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Overgrown Yard Cleanup →
              </a>
              <a
                href="/services/invasive-species-removal-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Invasive Plant Removal →
              </a>
              <a
                href="/services/landscape-maintenance-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Maintenance →
              </a>
              <a
                href="/services/soil-drainage-assessment"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Soil and Drainage Assessment →
              </a>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Frequently asked questions
            </h2>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Is garden restoration different than a basic cleanup?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Yes. Restoration looks at why the space stopped working—crowding, soil, drainage, invasives, plant selection—and stabilizes it so it stays manageable long-term.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do you keep any of the existing plants?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Often, yes. We keep what is working, remove what is not, and rebuild spacing and structure so the garden can thrive.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Can we do the work in phases?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Yes. Many restorations are done in phases based on priorities and budget—starting with the areas that cause the most stress or recurring problems.
              </p>
            </details>
          </section>

          <section className="mt-6 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start with a site visit
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              A walkthrough helps determine what can be improved, what should be
              removed, and what will actually work in your conditions. You will
              leave with a clear direction—whether you implement gradually or
              move forward with a full restoration.
            </p>
            <a
              href="/#schedule"
              className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
            >
              Schedule Consultation
            </a>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
