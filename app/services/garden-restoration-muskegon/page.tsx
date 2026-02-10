import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Garden Restoration & Bed Rebuilding in Muskegon | Earth Stewards',
  description:
    'Overgrown or failing beds? We restore gardens to health with proper spacing, soil care, and plant selection that actually lasts—so your landscape looks intentional and stays manageable.',
  keywords:
    'garden restoration Muskegon, overgrown garden, bed rebuilding, garden cleanup West Michigan, landscape reset Muskegon',
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
          text:
            'Yes. Restoration looks at why the space stopped working (crowding, soil, drainage, invasives, plant selection) and stabilizes it so it stays manageable long-term.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you keep any of the existing plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Often, yes. We keep what’s working, remove what isn’t, and rebuild spacing and structure so the garden can thrive.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we do the work in phases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Many restorations are done in phases based on priorities and budget—starting with the areas that cause the most stress or recurring problems.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-earth-50">
        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Garden Restoration &amp; Bed Rebuilding in Muskegon
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                If your garden has become overgrown, sparse, or confusing to
                maintain, we rebuild it with spacing, soil care, and plant
                structure so it stabilizes instead of constantly needing rescue
                work.
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

        {/* CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Problem */}
          <section className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-earth-900">
              Overgrown, struggling, or neglected beds?
            </h2>
            <p className="text-earth-700 text-lg max-w-3xl">
              Many gardens start with good intentions and then slowly become
              difficult to manage—crowded plants, invasive spread, bare soil, or
              sections that never thrive.
            </p>
            <p className="text-earth-700 text-lg max-w-3xl">
              Restoration improves what’s already there rather than starting
              over. The goal is a landscape that looks intentional again and
              becomes easier to maintain moving forward.
            </p>
          </section>

          {/* Before / After outcome */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              What changes after restoration
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Before
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-earth-700">
                  <li>Crowding and constant “messy” growth</li>
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
                  <li>Less recurring “rescue work”</li>
                  <li>A baseline that’s actually maintainable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What it means (cards) */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              What garden restoration means
            </h2>

            <p className="text-earth-700 text-lg max-w-3xl">
              Restoration isn’t just cleanup. It’s identifying why the space
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

          {/* Common situations */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Common situations we help with
            </h2>

            <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <ul className="grid gap-3 md:grid-cols-2 list-disc pl-6 text-earth-700">
                <li>Overgrown planting beds</li>
                <li>Previous landscaping that failed</li>
                <li>Invasive species taking over</li>
                <li>Areas that constantly look messy</li>
                <li>Too much maintenance required</li>
                <li>Plants dying each year</li>
                <li>Bare or eroding soil</li>
                <li>Newly purchased homes needing improvement</li>
              </ul>
            </div>
          </section>

          {/* Approach */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Our approach
            </h2>

            <p className="text-earth-700 text-lg max-w-3xl">
              We keep what works, remove what doesn’t, and improve the rest—so
              the landscape looks maintained without constant intervention.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Typical restoration work may include
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-earth-700">
                  <li>Selective clearing and pruning</li>
                  <li>Invasive species removal</li>
                  <li>Soil improvement</li>
                  <li>Re-spacing crowded plants</li>
                  <li>Adding appropriate plantings</li>
                  <li>Converting high-effort areas into stable plantings</li>
                  <li>Mulching and finishing</li>
                </ul>
              </div>

              <div className="bg-moss-50 rounded-2xl border border-moss-200 p-6">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Traditional or ecological — your choice
                </h3>
                <p className="text-earth-800">
                  Some homeowners want a cleaner version of an existing
                  landscape. Others want a lower-input, habitat-supportive
                  garden.
                </p>
                <p className="text-earth-800 mt-2">
                  We guide the level of change based on your goals, comfort
                  level, and maintenance preference.
                </p>
              </div>
            </div>
          </section>

          {/* Related services */}
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
                Invasive Species Removal →
              </a>
              <a
                href="/services/ecological-garden-care"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Ecological Garden Care →
              </a>
              <a
                href="/services/landscape-maintenance-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Maintenance →
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-6 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start With a Site Visit
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              A walkthrough helps determine what can be improved, what should be
              removed, and what will actually work in your conditions. You’ll
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

          {/* FAQ (must match JSON-LD above) */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              FAQs
            </h2>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Is garden restoration different than a basic cleanup?
              </p>
              <p className="text-earth-700 mt-2">
                Yes. Restoration looks at why the space stopped working
                (crowding, soil, drainage, invasives, plant selection) and
                stabilizes it so it stays manageable long-term.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Do you keep any of the existing plants?
              </p>
              <p className="text-earth-700 mt-2">
                Often, yes. We keep what’s working, remove what isn’t, and
                rebuild spacing and structure so the garden can thrive.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Can we do the work in phases?
              </p>
              <p className="text-earth-700 mt-2">
                Yes. Many restorations are done in phases based on priorities
                and budget—starting with the areas that cause the most stress or
                recurring problems.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
