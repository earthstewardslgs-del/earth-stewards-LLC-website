import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Low-Maintenance Lawn Conversion in Muskegon, MI | Earth Stewards LLC',
  description:
    'Convert high-maintenance lawn into attractive, low-work landscaping in Muskegon, MI. Reduce mowing with plantings designed for your site, goals, and preferred level of neatness.',
  keywords:
    'lawn conversion Muskegon, replace lawn, reduce mowing, low maintenance landscaping, lawn alternatives Michigan, no mow landscaping, groundcover lawn alternative',
}

export default function LawnConversionPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a lawn conversion?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A lawn conversion replaces high-maintenance turf with stable plantings—such as perennial beds, groundcovers, or low-mow meadow-style areas—designed for your site conditions and preferred level of neatness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will it look messy or unkept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We design lawn conversions to look intentional with clean edges, structured plant groupings, and a maintenance plan that matches how “neat” you want the space to feel.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much maintenance will it take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most conversions reduce weekly mowing, but every landscape still needs some seasonal care. We recommend plantings and a plan that lowers work over time as the area fills in and stabilizes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas are best to convert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common candidates include steep slopes, dry or burnt-out turf, unused backyard zones, difficult edges, and areas that never look good despite regular mowing and inputs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer phased conversions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many homeowners start with one problem zone first, then expand as the results prove out. We can recommend a phased plan that fits your budget and timeline.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-lawn-conversion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Lawn Conversion &amp; Low-Mow Landscapes
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Tired of mowing space you don’t even use? We convert high-effort lawn into attractive plantings that
                reduce upkeep—while still matching your preferred level of neatness and control.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Schedule Site Visit
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
                >
                  View Our Work
                </a>
              </div>

              {/* QUICK VALUE CARDS */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Less mowing</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Replace constant turf upkeep with plantings that stabilize and fill in.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Looks intentional</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Clean edges and structure—designed to match your “neatness” comfort level.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Better long-term</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Less burn-out, fewer recurring issues, and fewer inputs as the space matures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Tired of mowing but don’t want a messy yard?</h2>
              <p>
                Some lawns never become easy—dry patches, constant growth, and weekly upkeep just to keep things
                acceptable. A lawn conversion replaces high-effort turf with stable plantings that fill in, look
                intentional, and reduce ongoing work.
              </p>
              <p>
                This isn’t removing lawn just for appearance. It’s changing the structure of the landscape so it
                maintains itself better.
              </p>

              <h3>Good candidates for conversion</h3>
              <ul>
                <li>Slopes that are hard to mow</li>
                <li>Areas that burn out every summer</li>
                <li>Edges you constantly trim</li>
                <li>Backyard spaces you don’t actually use</li>
                <li>Sections that never look good no matter what you try</li>
              </ul>
            </div>

            {/* RIGHT: OPTIONS + PROCESS */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we build instead of turf</h3>
              <p className="text-earth-700 mt-2">
                We evaluate sun, soil, drainage, and how you use the space—then choose a planting strategy that fits.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Low-growing meadow</p>
                  <p className="text-earth-700 text-sm mt-2">
                    A more natural look with seasonal interest—designed to be managed, not wild.
                  </p>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Perennial beds</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Mixed or native-forward plantings with structure, edges, and clear “intentional” design.
                  </p>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Groundcover zones</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Simple, low-maintenance coverage where turf struggles—especially in awkward or unused areas.
                  </p>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Habitat-supportive</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Plantings that support pollinators and wildlife while still looking clean and designed.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-moss-200 bg-moss-50 p-6">
                <p className="font-semibold text-earth-900">How it works</p>
                <ol className="mt-3 space-y-2 text-earth-800 text-sm list-decimal pl-5">
                  <li>Site visit to assess sun, soil, drainage, and your goals</li>
                  <li>Recommend an option that fits your maintenance comfort level</li>
                  <li>Preparation + installation for long-term success</li>
                  <li>Guidance so the area fills in and gets easier over time</li>
                </ol>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Start with a walkthrough</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll look at the space and recommend what level of change makes sense—full conversion or phased over
              time—so it looks intentional and stays manageable.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Schedule Consultation
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
              >
                See Recent Projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
