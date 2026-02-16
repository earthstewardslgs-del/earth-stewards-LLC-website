import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pollinator Garden Installation in Muskegon, MI | Earth Stewards LLC',
  description:
    'Pollinator garden installation in Muskegon and West Michigan. Beautiful gardens that support bees and butterflies with season-long blooms—designed to stay clean and manageable.',
  keywords:
    'pollinator garden installation Muskegon, pollinator garden Muskegon MI, butterfly garden, bee garden, native pollinator plants West Michigan, hummingbird garden',
}

export default function PollinatorGardenPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do pollinator gardens have to look wild?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We design pollinator gardens to look intentional with clean edges, structured plant groupings, and balanced spacing. You can support pollinators without a messy look.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only use native plants in pollinator gardens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. We often use natives because they support local pollinators and thrive in West Michigan conditions, but we can also include non-invasive, pollinator-friendly plants when they fit your goals and site.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take for a pollinator garden to fill in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most pollinator gardens look sparse the first year as plants establish roots. By year two they fill in noticeably, and by year three they often reach a more mature, dense look with consistent blooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will a pollinator garden be lower maintenance than annuals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Often, yes. Once established, many pollinator plantings require less watering and replanting than annual flower beds. They still need seasonal maintenance, but the goal is less work over time.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      <Script
        id="faq-pollinator-garden"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Pollinator Garden Installation in West Michigan
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                We install pollinator-friendly plantings that support bees and butterflies while still looking clean
                and intentional—designed for beauty, structure, and long-term manageability in Muskegon.
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
                  <p className="font-semibold text-earth-900">Season-long blooms</p>
                  <p className="text-earth-700 text-sm mt-1">
                    A planned bloom sequence from spring through fall.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Looks intentional</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Structure, edges, and spacing so it feels finished—not chaotic.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Lower inputs</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Often less watering and replanting once established.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mt-2 mb-4 border-l-4 border-moss-600 pl-3">When people call us</h2>
              <p>
                Many homeowners want to support wildlife but worry a habitat garden will feel chaotic or temporary.
              </p>
              <p>
                We install season‑long bloom plantings arranged with structure so pollinators are supported while the garden still reads as a maintained space.
              </p>

              <h3 className="text-2xl font-semibold text-earth-900 tracking-wide mt-8 mb-4 border-l-4 border-moss-600 pl-3">Why homeowners choose pollinator gardens</h3>
              <ul>
                <li>Want to see more bees, butterflies, and birds</li>
                <li>Prefer a lower-maintenance alternative to annual beds</li>
                <li>Want blooms from spring through fall</li>
                <li>Like the idea of a more resilient landscape</li>
                <li>Want a designed look without weekly upkeep</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we do</h3>
              <p className="text-earth-700 mt-2">
                The goal is a stable planting that fills in over time—without looking messy.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Site-based plant selection</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Sun exposure, soil, and drainage determine what will actually thrive.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Bloom sequence planning</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Spring-through-fall nectar so pollinators have consistent resources.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Structure and spacing</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Layers, height variation, and clean edges for a finished look.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Establishment plan</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Mulch and care guidance so weeds don't take over while the garden fills in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
            <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mb-4 border-l-4 border-moss-600 pl-3">What you leave with</h2>
            <p className="text-earth-700 mt-2">
              Pollinator gardens often look sparse the first year. That is normal—perennials focus on root
              development before putting energy into flowering and spreading.
            </p>

            <ol className="mt-6 space-y-3 text-earth-800 text-sm list-decimal pl-5">
              <li>
                <strong>Year 1:</strong> Establishment phase—watering, weed control, roots developing
              </li>
              <li>
                <strong>Year 2:</strong> Noticeable fill-in—more blooms, stronger growth
              </li>
              <li>
                <strong>Year 3:</strong> More mature look—denser planting, consistent seasonal interest
              </li>
            </ol>
          </section>

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
                href="/services/landscape-maintenance-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Maintenance →
              </a>
              <a
                href="/services/ecological-garden-care"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Ecological Garden Care →
              </a>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Frequently asked questions
            </h2>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do pollinator gardens have to look wild?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                No. We design pollinator gardens to look intentional with clean edges, structured plant groupings, and balanced spacing. You can support pollinators without a messy look.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do you only use native plants in pollinator gardens?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Not necessarily. We often use natives because they support local pollinators and thrive in West Michigan conditions, but we can also include non-invasive, pollinator-friendly plants when they fit your goals and site.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>How long does it take for a pollinator garden to fill in?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Most pollinator gardens look sparse the first year as plants establish roots. By year two they fill in noticeably, and by year three they often reach a more mature, dense look with consistent blooms.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Will a pollinator garden be lower maintenance than annuals?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Often, yes. Once established, many pollinator plantings require less watering and replanting than annual flower beds. They still need seasonal maintenance, but the goal is less work over time.
              </p>
            </details>
          </section>

          <section className="mt-6 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Ready to attract more pollinators?</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We will assess your site and recommend a pollinator planting that fits your yard, your style, and your
              maintenance comfort level.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
