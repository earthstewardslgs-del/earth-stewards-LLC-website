import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Native Landscaping in Muskegon, MI | Earth Stewards LLC',
  description:
    'Native landscaping in Muskegon that looks intentional. Clean designs using native and climate-adapted plants—less watering, fewer problems, and better structure.',
  keywords:
    'native landscaping Muskegon, low maintenance landscaping Muskegon MI, ecological landscaping, native plants Michigan, pollinator garden, climate adapted plants West Michigan',
}

export default function NativeLandscapingPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does native landscaping have to look wild?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We design native-forward landscapes to look intentional—clean edges, structured plant groupings, and a maintenance plan that fits your comfort level for neatness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only install native plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We prioritize native plants where they make sense, and we also use climate-adapted and pollinator-friendly plants when they provide better structure, durability, or seasonal balance. The goal is a landscape that thrives and stays manageable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will native landscaping reduce maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It often reduces recurring problems like constant replanting, heavy watering, and high-input lawn care. Every landscape needs some seasonal maintenance, but the goal is less work over time as the planting stabilizes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you choose the right plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We match plants to your site: sunlight, soil type, moisture and drainage, and how you want to use the space. That is how we build landscapes that hold up long-term in West Michigan.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      <Script
        id="faq-native-landscaping"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Native Landscaping in Muskegon That Looks Intentional
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                We design landscapes that thrive in West Michigan conditions and
                become easier to manage every year—without sacrificing curb
                appeal.
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
                  <p className="font-semibold text-earth-900">Less recurring work</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Plants suited to your site reduce replanting, watering, and corrections.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Clean and intentional</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Structured designs that look maintained—not wild.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Better every year</p>
                  <p className="text-earth-700 text-sm mt-1">
                    As plants establish, the landscape improves and requires less input.
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
                Sometimes the existing landscape simply doesn’t match the site — plants struggle, spacing fails, and the yard never settles into a comfortable rhythm.
              </p>
              <p>
                We redesign the space using climate‑adapted plant communities so it looks intentional and matures reliably instead of needing constant correction.
              </p>

              <h3 className="text-2xl font-semibold text-earth-900 tracking-wide mt-8 mb-4 border-l-4 border-moss-600 pl-3">Good fit if you want</h3>
              <ul>
                <li>Less watering and fewer recurring problems</li>
                <li>Support for pollinators and beneficial insects</li>
                <li>A landscape that stabilizes instead of constantly declining</li>
                <li>Seasonal interest and year-round structure</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we do</h3>
              <p className="text-earth-700 mt-2">
                We match plants to your site conditions and design for how you actually use the space.
              </p>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Site assessment: sun, soil, drainage, and goals</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Design that looks intentional with clean edges and structure</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Native and climate-adapted plant selection</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Installation and establishment support</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Maintenance plan that reduces work over time</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
            <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mb-4 border-l-4 border-moss-600 pl-3">What you leave with</h2>
            <p className="text-earth-700 mt-2">
              A landscape designed for West Michigan conditions—plants that thrive without constant inputs, structure that holds up through seasons, and a maintenance approach that gets easier as the garden establishes.
            </p>
          </div>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/pollinator-garden-installation"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Pollinator Garden Installation →
              </a>
              <a
                href="/services/lawn-conversion-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Lawn Conversion →
              </a>
              <a
                href="/services/landscape-consultation-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Consultation →
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
                  <span>Does native landscaping have to look wild?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  No. We design native-forward landscapes to look intentional—clean edges, structured plant groupings, and a maintenance plan that fits your comfort level for neatness.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Do you only install native plants?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  No. We prioritize native plants where they make sense, and we also use climate-adapted and pollinator-friendly plants when they provide better structure, durability, or seasonal balance. The goal is a landscape that thrives and stays manageable.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Will native landscaping reduce maintenance?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  It often reduces recurring problems like constant replanting, heavy watering, and high-input lawn care. Every landscape needs some seasonal maintenance, but the goal is less work over time as the planting stabilizes.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>How do you choose the right plants?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  We match plants to your site: sunlight, soil type, moisture and drainage, and how you want to use the space. That is how we build landscapes that hold up long-term in West Michigan.
                </p>
              </details>
            </div>
          </section>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Start with a site visit</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We will evaluate conditions and goals, then recommend a design direction and implementation plan—either phased over time or installed in one project.
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
