import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Landscape Consultation in Muskegon, MI | Earth Stewards LLC',
  description:
    'Landscape consultation in Muskegon, MI. Get clear guidance on drainage, layout, plants, and next steps—before you invest in major work.',
  keywords:
    'landscape consultation Muskegon, garden consultation Muskegon MI, landscape planning, site assessment West Michigan, garden advice Muskegon',
}

export default function LandscapeConsultationPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What happens during a landscape consultation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We walk the property with you and evaluate sun, soil, drainage, existing plants, and problem areas. We’ll talk through your goals and maintenance comfort level, then outline clear next steps—whether you DIY or hire us for the work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can a consultation help if I’m not doing a full redesign?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many yards improve with targeted changes—fixing drainage, adjusting plant placement, simplifying high-effort areas, or improving soil. A consultation helps you avoid spending money on changes that won’t hold up long-term.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will you recommend native plants only?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We can recommend native, pollinator-friendly, and traditional options depending on your goals, site conditions, and the look you want. The goal is a landscape that thrives and stays manageable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I get a plan after the visit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You’ll leave with a clear direction and prioritized recommendations. If you want a more detailed design plan or phased implementation roadmap, we can outline options based on your property and goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if I need a consultation or a soil & drainage assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you’re unsure what to do overall—layout, plants, maintenance, or general direction—start with a consultation. If the main issue is persistent plant failure, standing water, or drainage/soil problems, a dedicated soil & drainage assessment may be the better starting point.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-landscape-consultation"
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
                Landscape Consultation & Planning Guidance
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Before investing in major work, we help you understand what your yard actually needs—drainage,
                layout, plant selection, or a simpler maintenance strategy—so you can move forward with confidence.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
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
                  View Our Work
                </a>
              </div>

              {/* QUICK VALUE CARDS */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Stop trial-and-error</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Identify the root cause before you buy plants or hire big work.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Clear priorities</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Know what matters first (and what can wait) for your budget and timeline.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">A yard that stays manageable</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Recommendations that fit your maintenance comfort level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT: STORY + PROBLEM */}
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Understand the problem before spending money</h2>
              <p>
                Many landscape issues repeat because the underlying cause isn’t identified—wrong plant placement,
                drainage patterns, soil limitations, or expectations that don’t match the site.
              </p>
              <p>
                A consultation helps you see what’s actually happening and what will work long-term.
              </p>

              <h3>Good fit for you if…</h3>
              <ul>
                <li>You’re not sure where to start (or what to do next)</li>
                <li>Plants keep failing and you’re tired of replacing them</li>
                <li>You want a cleaner, more intentional look with less ongoing effort</li>
                <li>You’re deciding between DIY and hiring help</li>
                <li>You want to phase improvements over time instead of a full overhaul</li>
              </ul>
            </div>

            {/* RIGHT: WHAT YOU GET */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What you’ll leave with</h3>
              <p className="text-earth-700 mt-2">
                A clear direction you can act on—without guessing.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">A diagnosis</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Why things aren’t working (and what’s driving recurring issues).
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">A prioritized plan</p>
                  <p className="text-earth-700 text-sm mt-1">
                    What to do first, what to do later, and what to avoid.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Next steps (DIY or done-for-you)</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Clear options based on your budget, timeline, and maintenance comfort level.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DURING THE VISIT */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900">During the visit</h3>
              <p className="text-earth-700 mt-2">We’ll walk the property and discuss:</p>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Why certain plants struggle (sun, soil, moisture, spacing)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Drainage patterns and practical fixes</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Whether small adjustments or a redesign makes more sense</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Plant choices that fit your style and maintenance comfort level</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Realistic next steps you can do yourself—or we can handle</span>
                </li>
              </ul>
            </div>

            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Different goals are welcome</h2>
              <p>
                Some clients want a more ecological, pollinator-friendly yard. Others want traditional curb appeal
                with fewer headaches. Most want something in-between.
              </p>
              <p>
                We’re not here to force a style—we’re here to make your landscape work for your site and your life.
              </p>

              <h3>Related services</h3>
              <ul>
                <li>
                  <a className="text-moss-700 hover:text-moss-900 font-semibold" href="/services/soil-drainage-assessment">
                    Soil &amp; Drainage Assessment
                  </a>{' '}
                  — if plants keep dying or water sits where it shouldn’t
                </li>
                <li>
                  <a className="text-moss-700 hover:text-moss-900 font-semibold" href="/services/garden-restoration-muskegon">
                    Garden Restoration
                  </a>{' '}
                  — if beds are overgrown, failing, or confusing to maintain
                </li>
                <li>
                  <a className="text-moss-700 hover:text-moss-900 font-semibold" href="/services/landscape-maintenance-muskegon">
                    Landscape Maintenance
                  </a>{' '}
                  — if you want the yard to get easier year after year
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Get Clear on What Your Yard Needs</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll walk your property and give you an honest assessment of what’s happening—plus a clear,
              prioritized path forward.
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
                className="inline-flex items-center px-8 py-4 bg-earth-50 text-moss-800 font-semibold rounded-full border border-earth-200 hover:bg-earth-100 transition-all"
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
