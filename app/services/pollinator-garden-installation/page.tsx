import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pollinator Garden Installation in Muskegon, MI | Earth Stewards LLC',
  description:
    'Pollinator garden installation in Muskegon, MI. Beautiful, intentional gardens that support bees and butterflies with season-long blooms—designed to stay clean and manageable.',
  keywords:
    'pollinator garden installation Muskegon, pollinator garden Muskegon MI, butterfly garden, bee garden, native pollinator plants, hummingbird garden Muskegon, West Michigan pollinator garden',
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
          text:
            'No. We design pollinator gardens to look intentional with clean edges, structured plant groupings, and balanced spacing. You can support pollinators without a messy look.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only use native plants in pollinator gardens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Not necessarily. We often use natives because they support local pollinators and thrive in West Michigan conditions, but we can also include non-invasive, pollinator-friendly plants when they fit your goals and site.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take for a pollinator garden to fill in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Most pollinator gardens look sparse the first year as plants establish roots. By year two they fill in noticeably, and by year three they often reach a more mature, dense look with consistent blooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will a pollinator garden be lower maintenance than annuals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Often, yes. Once established, many pollinator plantings require less watering and replanting than annual flower beds. They still need seasonal maintenance, but the goal is less work over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s included in a pollinator garden installation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'We evaluate sun, soil, and drainage; select an appropriate plant palette with season-long bloom; prepare the bed properly; install plants with correct spacing; and recommend an establishment care plan so the garden succeeds long-term.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-pollinator-garden"
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
                Pollinator Garden Installation in West Michigan
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                We install pollinator-friendly plantings that support bees and butterflies while still looking clean
                and intentional—designed for beauty, structure, and long-term manageability.
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

        {/* CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* WHAT IT DOES + WHY */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>What a pollinator garden does</h2>
              <p>
                Pollinator gardens use flowering plants that provide nectar, pollen, and habitat for bees, butterflies,
                and hummingbirds. When designed well, they’re also durable, beautiful, and easier to manage than
                constantly replanting annuals.
              </p>
              <p>
                We focus on plantings that thrive in West Michigan—so the garden gets stronger over time instead of
                constantly needing rescue work.
              </p>

              <h3>Why homeowners choose pollinator gardens</h3>
              <ul>
                <li>Want to see more bees, butterflies, and birds</li>
                <li>Prefer a lower-maintenance alternative to annual beds</li>
                <li>Want blooms from spring through fall</li>
                <li>Like the idea of a more resilient landscape</li>
                <li>Want a designed look without weekly upkeep</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">How we design pollinator gardens</h3>
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
                    Mulch + care guidance so weeds don’t take over while the garden fills in.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* COMMON PLANTS */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">Common plants we use</h2>
            <p className="text-earth-700 text-lg max-w-4xl">
              Plant selection depends on your site conditions. Here are a few commonly used options in West Michigan
              pollinator plantings:
            </p>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <ul className="grid gap-3 md:grid-cols-2 list-disc pl-6 text-earth-700 text-lg">
                <li>Purple Coneflower (Echinacea)</li>
                <li>Black-Eyed Susan (Rudbeckia)</li>
                <li>Wild Bergamot (Monarda)</li>
                <li>Milkweed (Asclepias)</li>
                <li>Joe Pye Weed</li>
                <li>Asters (fall bloom)</li>
                <li>Little Bluestem (structure + winter interest)</li>
                <li>Other site-appropriate natives and non-invasive perennials</li>
              </ul>
            </div>
          </section>

          {/* WHAT TO EXPECT */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900">What to expect after installation</h3>
              <p className="text-earth-700 mt-2">
                Pollinator gardens often look sparse the first year. That’s normal—perennials focus on root
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
            </div>

            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Clean, designed, and pollinator-supportive</h2>
              <p>
                You don’t have to choose between beauty and ecological function. With the right plant palette,
                structure, and edges, a pollinator garden can look crisp and intentional while supporting wildlife.
              </p>
              <p>
                If you’re also considering low-mow or lawn alternatives, you may like{' '}
                <a className="text-moss-700 hover:text-moss-900 font-semibold" href="/services/lawn-conversion-muskegon">
                  Lawn Conversion
                </a>{' '}
                or{' '}
                <a className="text-moss-700 hover:text-moss-900 font-semibold" href="/services/native-landscaping-muskegon">
                  Native Landscaping
                </a>
                .
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-6 p-10 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Ready to Attract More Pollinators?</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll assess your site and recommend a pollinator planting that fits your yard, your style, and your
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

          {/* FAQ (visible; matches JSON-LD) */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">FAQs</h2>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">Do pollinator gardens have to look wild?</p>
              <p className="text-earth-700 mt-2">
                No. We design pollinator gardens to look intentional with clean edges, structured plant groupings, and
                balanced spacing. You can support pollinators without a messy look.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">How long does it take to fill in?</p>
              <p className="text-earth-700 mt-2">
                Most gardens look sparse the first year, fill in noticeably in year two, and reach a more mature look
                by year three.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                What’s included in a pollinator garden installation?
              </p>
              <p className="text-earth-700 mt-2">
                We evaluate sun, soil, and drainage; select an appropriate plant palette with season-long bloom;
                prepare the bed; install plants with correct spacing; and provide establishment care guidance so the
                garden succeeds long-term.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
