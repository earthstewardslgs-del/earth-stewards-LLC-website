import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lawn Conversion in Muskegon, MI | Earth Stewards LLC',
  description:
    'Lawn conversion in Muskegon and West Michigan. Replace high-maintenance turf with attractive plantings that reduce mowing and match your site conditions.',
  keywords:
    'lawn conversion Muskegon, reduce mowing Muskegon MI, lawn alternatives West Michigan, low maintenance landscaping, no mow garden, groundcover alternatives, native lawn replacement',
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
          text: 'A lawn conversion replaces high-maintenance turf with stable plantings such as perennial beds, groundcovers, or low-mow meadow-style areas designed for your site conditions and preferred level of neatness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will it look messy or unkept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We design lawn conversions to look intentional with clean edges, structured plant groupings, and a maintenance plan that matches how neat you want the space to feel.',
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

      <Script
        id="faq-lawn-conversion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Lawn Conversion and Low-Mow Landscapes
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Tired of mowing space you don't even use? We convert high-effort lawn into attractive plantings that
                reduce upkeep in West Michigan—while still matching your preferred level of neatness and control.
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
                    Clean edges and structure—designed to match your neatness comfort level.
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

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mt-2 mb-4 border-l-4 border-moss-600 pl-3">When people call us</h2>
              <p>
                If mowing feels endless, the issue isn’t the grass — it’s that the space is asking for a different use. Large turf areas often require constant input in West Michigan conditions.
              </p>
              <p>
                We convert portions of lawn into stable plantings sized to how you actually use the yard, reducing weekly upkeep while keeping an intentional look.
              </p>

              <h3 className="text-2xl font-semibold text-earth-900 tracking-wide mt-8 mb-4 border-l-4 border-moss-600 pl-3">Good candidates for conversion</h3>
              <ul>
                <li>Slopes that are hard to mow</li>
                <li>Areas that burn out every summer</li>
                <li>Edges you constantly trim</li>
                <li>Backyard spaces you don't actually use</li>
                <li>Sections that never look good no matter what you try</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we do</h3>
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
                    Mixed or native-forward plantings with structure, edges, and clear intentional design.
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
                  <li>Preparation and installation for long-term success</li>
                  <li>Guidance so the area fills in and gets easier over time</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-14 bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
            <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mb-4 border-l-4 border-moss-600 pl-3">What you leave with</h2>
            <p className="text-earth-700 mt-2">
              A conversion plan designed for your site conditions, maintenance comfort level, and aesthetic preferences.
            </p>
            <ul className="mt-6 space-y-3 text-earth-800">
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Clear understanding of what will thrive in your specific conditions</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Realistic timeline and phasing options</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Maintenance plan that reduces work as the planting establishes</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Clean, intentional design that doesn't look like you gave up on the yard</span>
              </li>
            </ul>
          </div>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/native-landscaping-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Native Landscaping →
              </a>
              <a
                href="/services/pollinator-garden-installation"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Pollinator Garden Installation →
              </a>
              <a
                href="/services/landscape-consultation-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Consultation →
              </a>
              <a
                href="/services/ecological-landscaping"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Ecological Landscaping Approach →
              </a>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-display font-bold text-3xl text-earth-900 mb-8 text-center">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>What is a lawn conversion?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  A lawn conversion replaces high-maintenance turf with stable plantings such as perennial beds, groundcovers, or low-mow meadow-style areas designed for your site conditions and preferred level of neatness.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Will it look messy or unkept?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  No. We design lawn conversions to look intentional with clean edges, structured plant groupings, and a maintenance plan that matches how neat you want the space to feel.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>How much maintenance will it take?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Most conversions reduce weekly mowing, but every landscape still needs some seasonal care. We recommend plantings and a plan that lowers work over time as the area fills in and stabilizes.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>What areas are best to convert?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Common candidates include steep slopes, dry or burnt-out turf, unused backyard zones, difficult edges, and areas that never look good despite regular mowing and inputs.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Do you offer phased conversions?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Yes. Many homeowners start with one problem zone first, then expand as the results prove out. We can recommend a phased plan that fits your budget and timeline.
                </p>
              </details>
            </div>
          </section>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Start with a walkthrough</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We'll look at the space and recommend what level of change makes sense—full conversion or phased over
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
