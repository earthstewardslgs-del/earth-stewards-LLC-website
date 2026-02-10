import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Native & Low-Maintenance Landscaping in Muskegon, MI | Earth Stewards LLC',
  description:
    'Native-forward and low-maintenance landscaping in Muskegon, MI. Clean, intentional designs using native and climate-adapted plants—less watering, fewer recurring problems, and better seasonal structure in West Michigan conditions.',
  keywords:
    'native landscaping Muskegon, low maintenance landscaping Muskegon MI, ecological landscaping Muskegon, climate adapted plants Michigan, native plants Michigan, lawn alternatives Muskegon, pollinator garden Muskegon, West Michigan landscaping',
}

export default function Page() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does native landscaping have to look wild?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'No. We design native-forward landscapes to look intentional—clean edges, structured plant groupings, and a maintenance plan that fits your comfort level for neatness.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only install native plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'No. We prioritize native plants where they make sense, and we also use climate-adapted and pollinator-friendly plants when they provide better structure, durability, or seasonal balance. The goal is a landscape that thrives and stays manageable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will native landscaping reduce maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'It often reduces recurring problems like constant replanting, heavy watering, and high-input lawn care. Every landscape needs some seasonal maintenance, but the goal is less work over time as the planting stabilizes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you choose the right plants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'We match plants to your site: sunlight, soil type, moisture/drainage, and how you want to use the space. That’s how we build landscapes that hold up long-term in West Michigan.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do we start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'We start with a site visit to evaluate conditions and goals. Then we recommend a design direction and an implementation plan—either phased over time or installed in one project.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-native-landscaping"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Native-Forward Landscaping in Muskegon That Looks Intentional — Not Wild
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

              <p className="text-sm text-earth-600">
                Curious what we mean by “ecological landscaping”?{' '}
                <a
                  href="/services/ecological-landscaping"
                  className="text-moss-700 font-semibold hover:text-moss-800 underline underline-offset-4"
                >
                  Read our approach →
                </a>
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

              {/* QUICK VALUE CARDS */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Designed for Michigan</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Plants matched to sun, soil, and moisture—so they hold up.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Looks clean &amp; intentional</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Structure, edges, and planting patterns that feel “finished.”
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Lower inputs over time</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Less watering and fewer recurring problems as it stabilizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* PROBLEMS */}
          <section className="space-y-6">
            <h2 className="font-display text-3xl font-bold text-earth-900">
              Is your yard stuck in maintenance mode?
            </h2>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <ul className="grid gap-3 md:grid-cols-2 list-disc pl-6 text-earth-700 text-lg">
                <li>Grass struggles in dry or shady areas</li>
                <li>Beds constantly overgrown or weedy</li>
                <li>Plants die every year and need replacing</li>
                <li>Too much mowing to keep up with</li>
                <li>Drainage issues or soggy areas</li>
                <li>You want habitat — but not a messy look</li>
              </ul>
            </div>
          </section>

          {/* BENEFITS */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              What native-forward landscaping changes
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="prose prose-lg prose-earth max-w-none">
                <p>
                  Instead of forcing plants to survive here, we match plants to soil,
                  moisture, and sunlight so the yard stabilizes naturally. We often
                  use native plants, and we also incorporate climate-adapted plants
                  when they perform better for structure, durability, or seasonal
                  balance. That usually means fewer recurring problems—and a
                  landscape that looks better as it matures.
                </p>
              </div>

              <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
                <h3 className="text-xl font-bold text-earth-900">
                  Benefits you’ll notice
                </h3>
                <ul className="mt-5 space-y-3 text-earth-800">
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Less watering (once established)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Fewer inputs (fertilizer &amp; pesticides)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>More seasonal interest and structure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Stronger soil structure and resilience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Reduced recurring “problem zones”</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Our process
            </h2>

            <ol className="grid gap-4 md:grid-cols-2">
              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 01</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Site Visit
                </p>
                <p className="text-earth-700 mt-2">
                  Evaluate sun, soil, drainage, and how you want to use the
                  space.
                </p>
              </li>

              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 02</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Design Direction
                </p>
                <p className="text-earth-700 mt-2">
                  A plan aligned with your goals, style, and maintenance comfort
                  level.
                </p>
              </li>

              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 03</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Installation
                </p>
                <p className="text-earth-700 mt-2">
                  Proper prep and planting for long-term success—not quick
                  fixes.
                </p>
              </li>

              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 04</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Support
                </p>
                <p className="text-earth-700 mt-2">
                  Guidance as the landscape fills in so it keeps looking
                  intentional as it matures.
                </p>
              </li>
            </ol>
          </section>

          {/* RELATED SERVICES */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/ecological-landscaping"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Ecological Landscaping Approach →
              </a>
              <a
                href="/services/lawn-conversion-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Lawn Conversion →
              </a>
              <a
                href="/services/pollinator-garden-installation"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Pollinator Garden Installation →
              </a>
              <a
                href="/services/landscape-maintenance-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Maintenance →
              </a>
              <a
                href="/services/landscape-consultation-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Consultation →
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-6 p-10 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start With a Site Visit
            </h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll look at your property conditions and goals, then recommend a
              design direction that looks clean, fits your style, and stays
              manageable long-term.
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
                View Our Work
              </a>
            </div>
          </section>

          {/* FAQ (must match JSON-LD above) */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              FAQs
            </h2>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Does native landscaping have to look wild?
              </p>
              <p className="text-earth-700 mt-2">
                No. We design native-forward landscapes to look intentional—clean
                edges, structured plant groupings, and a maintenance plan that fits
                your comfort level for neatness.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Do you only install native plants?
              </p>
              <p className="text-earth-700 mt-2">
                No. We prioritize native plants where they make sense, and we also
                use climate-adapted and pollinator-friendly plants when they provide
                better structure, durability, or seasonal balance. The goal is a
                landscape that thrives and stays manageable.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Will native landscaping reduce maintenance?
              </p>
              <p className="text-earth-700 mt-2">
                It often reduces recurring problems like constant replanting,
                heavy watering, and high-input lawn care. Every landscape needs
                some seasonal maintenance, but the goal is less work over time
                as the planting stabilizes.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                How do you choose the right plants?
              </p>
              <p className="text-earth-700 mt-2">
                We match plants to your site: sunlight, soil type,
                moisture/drainage, and how you want to use the space. That’s how
                we build landscapes that hold up long-term in West Michigan.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">How do we start?</p>
              <p className="text-earth-700 mt-2">
                We start with a site visit to evaluate conditions and goals.
                Then we recommend a design direction and an implementation
                plan—either phased over time or installed in one project.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
