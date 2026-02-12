import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological Garden Care in Muskegon, MI | Earth Stewards LLC',
  description:
    'Ecological garden care in Muskegon that works with seasonal cycles and site conditions. Help landscapes mature into healthier, easier spaces over time.',
  keywords:
    'ecological garden care Muskegon, adaptive garden maintenance, sustainable landscape care West Michigan, native plant maintenance, holistic garden care Muskegon MI',
}

export default function EcologicalGardenCarePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is ecological garden care different from regular maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ecological garden care works with seasonal cycles, site conditions, and plant communities. Rather than recurring upkeep, this is time‑limited establishment work that helps a landscape settle correctly before it becomes routine maintenance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my garden still look maintained?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The goal is an intentional, cared-for look achieved through timing, structure, and selective work rather than constant trimming.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only maintain native plant gardens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. This approach works for native, traditional, and mixed plantings. We tailor care to your site conditions and the kind of landscape you want to live with.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does maintenance usually get easier over time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Often, yes. As plants establish, spacing improves, and the planting fills in appropriately, recurring pressure tends to decrease and care becomes more seasonal rather than constant.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      <Script
        id="faq-ecological-garden-care"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Establishment & Seasonal Guidance for Developing Landscapes
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                This service guides a young or recently changed landscape through its establishment years. We adjust spacing, manage early weeds, and respond to West Michigan conditions so the planting stabilizes instead of becoming high-maintenance.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Norton Shores, Spring Lake, Grand Haven, and nearby West Michigan communities.
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
                  <p className="font-semibold text-earth-900">Seasonal timing</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Work that follows growth cycles—so the garden can recover and thrive.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Guided maturity</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Support natural fill-in and structure as the planting evolves.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Healthier over time</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Reduce recurring pressure by improving spacing, density, and soil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>When people call us</h2>
              <p>
                Plants respond to light, temperature, moisture, and competition—not a calendar. When maintenance
                ignores those patterns, gardens can become stuck in a cycle of overgrowth, collapse, and repeated
                reset work.
              </p>
              <p>
                Our approach is simple: understand what the site is doing, then make targeted moves that support
                healthier cycles—so the landscape becomes more stable and enjoyable over time.
              </p>

              <h3>Good fit for gardens that</h3>
              <ul>
                <li>Are native-forward or pollinator-focused</li>
                <li>Need to work with seasonal patterns</li>
                <li>Should feel natural but still intentional</li>
                <li>Benefit from less intervention as they establish</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we do</h3>
              <p className="text-earth-700 mt-2">
                Care tailored to how the garden functions—not just how it looks.
              </p>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Seasonal pruning and cutbacks timed for plant health</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Selective weeding and invasive control</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Monitoring plant spacing and community balance</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Soil health and mulching strategies</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Support for beneficial insects and pollinators</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
            <h2>What you leave with</h2>
            <p className="text-earth-700 mt-2">
              We aim for a garden that supports people, wildlife, and the rhythms of the place—without forcing the
              landscape into constant correction. The result is a space that feels cared for, functions better, and
              holds up through seasons in West Michigan.
            </p>
          </div>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/landscape-maintenance-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Maintenance →
              </a>
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
                  <span>How is ecological garden care different from regular maintenance?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Ecological garden care works with seasonal cycles, site conditions, and plant communities. Rather than recurring upkeep, this is time‑limited establishment work that helps a landscape settle correctly before it becomes routine maintenance.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Will my garden still look maintained?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Yes. The goal is an intentional, cared-for look achieved through timing, structure, and selective work rather than constant trimming.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Do you only maintain native plant gardens?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  No. This approach works for native, traditional, and mixed plantings. We tailor care to your site conditions and the kind of landscape you want to live with.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Does maintenance usually get easier over time?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Often, yes. As plants establish, spacing improves, and the planting fills in appropriately, recurring pressure tends to decrease and care becomes more seasonal rather than constant.
                </p>
              </details>
            </div>
          </section>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Start with a site visit</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We will walk the property and observe how the garden functions through its current season, then recommend a care approach that supports healthier cycles and easier management over time.
            </p>
            <a
              href="/#schedule"
              className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
