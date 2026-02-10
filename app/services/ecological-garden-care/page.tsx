import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological & Native Garden Maintenance in Muskegon, MI | Earth Stewards',
  description:
    'Specialized care for native and pollinator gardens—seasonal cutbacks, targeted weeding, and ongoing guidance so your garden matures beautifully and gets easier over time.',
  keywords:
    'ecological garden care, native garden maintenance, pollinator garden care Muskegon, native plant maintenance, garden maintenance West Michigan',
}

export default function EcologicalGardenCarePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Do you maintain gardens that aren’t fully native?",
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. We can maintain mixed plantings and conventional beds too, using an approach that reduces recurring problems and supports long-term health.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my garden look messy in spring or fall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'We aim for “intentional” at every stage—clean edges, smart timing, and the right level of tidiness for your preferences.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often do you visit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'It depends on size and goals. Many gardens do well with a few focused visits per season plus a simple care plan.',
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
                Ecological & Native Garden Care
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Native and habitat gardens need a different approach than
                traditional landscaping. We maintain them in a way that supports
                plant health, prevents takeover, and keeps them looking
                intentional.
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
          {/* Intro */}
          <section className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-earth-900">
              Maintenance for gardens meant to evolve
            </h2>
            <p className="text-earth-700 text-lg max-w-3xl">
              Ecological and native-forward gardens don’t follow the same rules
              as traditional landscaping. Over-cutting, blanket mulching, or
              routine trimming can undo the stability they’re designed to
              create.
            </p>
            <p className="text-earth-700 text-lg max-w-3xl">
              We maintain these spaces so they mature instead of being
              constantly restarted.
            </p>
          </section>

          {/* What we do (cards) */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              What this includes
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Seasonal timing (not “whenever”)
                </h3>
                <p className="text-earth-700">
                  Cutbacks and cleanups scheduled to support plant health and
                  protect overwintering habitat.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Targeted weed management
                </h3>
                <p className="text-earth-700">
                  We focus on problem species and hotspots—without blanket
                  spraying or unnecessary disturbance.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Competition & balance
                </h3>
                <p className="text-earth-700">
                  We monitor plant competition and adjust density so strong
                  plants don’t smother the rest.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-earth-900 mb-2">
                  Soil support when needed
                </h3>
                <p className="text-earth-700">
                  Small corrections (mulch strategy, organic matter, drainage
                  tweaks) that help the planting stabilize.
                </p>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              The goal
            </h2>

            <div className="bg-moss-50 rounded-2xl border border-moss-200 p-6">
              <p className="text-earth-800 text-lg">
                <strong>Less intervention each year — not more.</strong>
              </p>
              <p className="text-earth-700 mt-2">
                Good care gradually reduces effort instead of locking you into
                permanent maintenance.
              </p>
            </div>
          </section>

          {/* How it works */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              How we work
            </h2>

            <ol className="grid gap-4 md:grid-cols-2">
              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 01</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Site visit & goals
                </p>
                <p className="text-earth-700 mt-2">
                  We review the planting, problem areas, and how “managed” you
                  want the look.
                </p>
              </li>

              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 02</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Care plan
                </p>
                <p className="text-earth-700 mt-2">
                  A simple seasonal plan: what to do, when to do it, and what to
                  stop doing.
                </p>
              </li>

              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 03</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Maintenance visits
                </p>
                <p className="text-earth-700 mt-2">
                  Focused work that supports stability: weeds, balance, timing,
                  and corrective tweaks.
                </p>
              </li>

              <li className="bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <p className="text-sm font-semibold text-moss-700">Step 04</p>
                <p className="text-lg font-semibold text-earth-900 mt-1">
                  Adjust as it matures
                </p>
                <p className="text-earth-700 mt-2">
                  We refine the approach as the garden fills in so it keeps
                  improving over time.
                </p>
              </li>
            </ol>
          </section>

          {/* Internal links */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/invasive-species-removal-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Invasive Species Removal →
              </a>
              <a
                href="/services/pollinator-garden-installation"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Pollinator Garden Installation →
              </a>
              <a
                href="/services/native-landscaping-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Native Landscaping →
              </a>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-6 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Maintain Your Ecological Garden Properly
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We’ll create a care plan that supports the garden’s natural
              development while keeping it looking intentional.
            </p>
            <a
              href="/#schedule"
              className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
            >
              Schedule Consultation
            </a>
          </section>

          {/* FAQ (visible content that matches JSON-LD above) */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              FAQs
            </h2>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Do you maintain gardens that aren’t fully native?
              </p>
              <p className="text-earth-700 mt-2">
                Yes. We can maintain mixed plantings and conventional beds too,
                using an approach that reduces recurring problems and supports
                long-term health.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                Will my garden look messy in spring or fall?
              </p>
              <p className="text-earth-700 mt-2">
                We aim for “intentional” at every stage—clean edges, smart
                timing, and the right level of tidiness for your preferences.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">
                How often do you visit?
              </p>
              <p className="text-earth-700 mt-2">
                It depends on size and goals. Many gardens do well with a few
                focused visits per season plus a simple care plan.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
