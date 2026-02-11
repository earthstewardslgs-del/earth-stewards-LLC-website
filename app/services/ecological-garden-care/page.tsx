import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological & Adaptive Garden Care in Muskegon, MI | Earth Stewards LLC',
  description:
    'Holistic garden care in Muskegon, MI that works with seasonal cycles, site conditions, and plant communities—helping landscapes mature into healthier, easier spaces over time.',
  keywords:
    'ecological garden care Muskegon, holistic garden maintenance, adaptive garden care, sustainable landscape maintenance West Michigan, low maintenance garden care Michigan',
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
          text: 'Ecological garden care works with seasonal cycles, site conditions, and plant communities. Instead of repeatedly “resetting” growth, we guide the garden’s development so it matures into better balance over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my garden still look maintained?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The goal is an intentional, cared-for look—achieved through timing, structure, and selective work rather than constant trimming.',
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
      {
        '@type': 'Question',
        name: 'How often do you visit for ecological garden care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on the site and goals. Some gardens do well with seasonal visits; others benefit from a few targeted check-ins during establishment. We’ll recommend a cadence that fits your landscape and comfort level.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-ecological-garden-care"
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
                Ecological &amp; Adaptive Garden Care
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Great landscapes aren’t maintained by constant correction—they’re guided through seasons, growth
                cycles, and real site conditions. We help gardens mature into healthier, more resilient spaces that
                feel intentional and become easier to live with over time.
              </p>

              {/* Local SEO signal */}
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

              {/* QUICK VALUE CARDS */}
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

        {/* MAIN CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT: STORY + FIT */}
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Care designed for living systems</h2>
              <p>
                Plants respond to light, temperature, moisture, and competition—not a calendar. When maintenance
                ignores those patterns, gardens can become stuck in a cycle of overgrowth, collapse, and repeated
                “reset” work.
              </p>
              <p>
                Our approach is simple: understand what the site is doing, then make targeted moves that support
                healthier cycles—so the landscape becomes more stable and enjoyable over time.
              </p>

              <h3>Good fit if you notice…</h3>
              <ul>
                <li>Plants competing heavily or collapsing into each other</li>
                <li>Weeds filling open gaps every season</li>
                <li>Constant trimming just to keep things “in bounds”</li>
                <li>Areas that never seem to settle in or thrive</li>
                <li>A garden that asks for more work each year</li>
              </ul>
            </div>

            {/* RIGHT: WHAT WE DO */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">Ongoing care may include</h3>
              <p className="text-earth-700 mt-2">
                Targeted work that respects seasons, growth patterns, and what your site can support.
              </p>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Seasonal cutting at ecological timing (not calendar timing)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Selective thinning instead of blanket trimming</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Weed pressure reduction through density</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Adjusting plant spacing as they mature</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Monitoring competition and dominance</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Soil improvement when needed</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Supporting natural fill-in instead of constant replanting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PHILOSOPHY + RELATED */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900">Working with the site</h3>
              <p className="text-earth-700 mt-2">
                We aim for a garden that supports people, wildlife, and the rhythms of the place—without forcing the
                landscape into constant correction. The result is a space that feels cared for, functions better, and
                holds up through seasons.
              </p>
              <p className="text-earth-700 mt-4">
                If your garden needs a reset first, we can help you rebuild structure and then maintain it in a way
                that supports long-term health.
              </p>
            </div>

            <div className="prose prose-lg prose-earth max-w-none">
              <section className="space-y-4">
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
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Care that helps your landscape mature</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll assess your site and create a care approach that supports long-term health—so the garden becomes
              more resilient and easier to manage through seasons.
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

          {/* FAQ (VISIBLE) */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-earth-900 mb-8 text-center">Common Questions</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-earth-200 p-6">
                <h3 className="font-semibold text-earth-900">
                  How is ecological garden care different from standard maintenance?
                </h3>
                <p className="text-earth-700 mt-2">
                  Standard maintenance often repeats the same actions on a schedule. Ecological care uses timing,
                  selective work, and site awareness so the garden can mature into better balance over time.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6">
                <h3 className="font-semibold text-earth-900">Will the yard still look maintained?</h3>
                <p className="text-earth-700 mt-2">
                  Yes. The goal is a cared-for appearance—supported through structure, spacing, and seasonal timing
                  rather than constant cutting.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6">
                <h3 className="font-semibold text-earth-900">Do you only maintain native plant gardens?</h3>
                <p className="text-earth-700 mt-2">
                  No. We apply this approach to native, traditional, and mixed gardens. We match care to your goals,
                  site conditions, and the kind of landscape you want to live with.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6">
                <h3 className="font-semibold text-earth-900">Does the work usually get lighter over time?</h3>
                <p className="text-earth-700 mt-2">
                  Often, yes. As plants establish and the planting fills appropriately, recurring pressure tends to
                  decrease and care becomes more seasonal.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
