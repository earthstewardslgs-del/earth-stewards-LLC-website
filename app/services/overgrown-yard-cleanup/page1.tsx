import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Overgrown Yard Cleanup in Muskegon, MI | Earth Stewards LLC',
  description:
    'Overgrown yard cleanup in Muskegon, MI. We reset neglected landscapes into clean, manageable spaces—with a plan that prevents it from turning back into chaos next season.',
  keywords:
    'overgrown yard cleanup Muskegon, yard cleanup Muskegon MI, property cleanup, garden cleanup, landscape reset, neglected yard West Michigan, overgrown garden cleanup',
}

export default function OvergrownCleanupPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this just a one-time cleanup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'It can be, but our goal is more than a temporary cutback. We reset the structure—what stays, what goes, and how the space should be stabilized—so it’s actually manageable afterward.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you haul away debris?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. We handle removal and proper disposal of cleared material as part of the reset plan, based on the scope of the project.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help if I just bought a house with a neglected yard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Yes. Overgrown cleanups are common for newly purchased homes. We create a clean baseline so you can maintain it and decide what improvements to make next.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will everything grow right back?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'If a cleanup is only “cut everything down,” it often grows back worse. We focus on selective clearing, restoring spacing, stabilizing soil, and (when needed) follow-up recommendations so the yard doesn’t revert quickly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the next step after the reset?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'After the reset, you can maintain the baseline yourself, schedule ongoing maintenance, or move into restoration or new planting projects. We’ll recommend the most practical path based on your goals.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-overgrown-cleanup"
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
                Overgrown Yard &amp; Garden Cleanup
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                When a yard feels overwhelming, the hardest part is knowing where to start. We clear, organize,
                and reset the space so you can move forward with a manageable plan instead of constant catch-up work.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
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
                  <p className="font-semibold text-earth-900">Reset, not just cut back</p>
                  <p className="text-earth-700 text-sm mt-1">
                    We restore structure so the yard becomes manageable again.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Clear next steps</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Know what to maintain, what to improve, and what to ignore.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">A clean baseline</p>
                  <p className="text-earth-700 text-sm mt-1">
                    So ongoing care doesn’t feel like constant catch-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT: PROBLEM */}
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Not sure where to start?</h2>
              <p>
                Some properties reach a point where maintenance alone doesn’t fix the problem. Plants compete, spacing
                disappears, weeds take advantage of open ground, and the yard becomes unmanageable.
              </p>
              <p>
                Cleanup isn’t just cutting everything back—that often makes it worse next season. The goal is a reset
                that creates a stable baseline.
              </p>

              <h3>Good fit for</h3>
              <ul>
                <li>Newly purchased homes</li>
                <li>Neglected properties</li>
                <li>Rentals becoming residences</li>
                <li>Yards that feel overwhelming</li>
              </ul>

              <p>After the reset, ongoing care becomes realistic again.</p>
            </div>

            {/* RIGHT: WHAT WE DO */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">We focus on resetting structure</h3>
              <p className="text-earth-700 mt-2">
                We identify what should stay, what should be removed, and how to stabilize the space so it doesn’t
                immediately revert.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Selective clearing</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Pruning and removal based on what helps the yard recover—not a blanket cutback.
                  </p>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Remove problem plants</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Aggressive, failing, or invasive growth that’s driving the chaos.
                  </p>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Restore edges &amp; spacing</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Re-establish bed lines and spacing so the yard looks intentional again.
                  </p>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Stabilize soil</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Mulching and finishing so open ground doesn’t become a weed factory.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-moss-200 bg-moss-50 p-6">
                <p className="font-semibold text-earth-900">The goal</p>
                <p className="text-earth-800 text-sm mt-2">
                  Get the landscape back to a workable starting point—so maintenance and improvements become
                  realistic again.
                </p>
              </div>
            </div>
          </div>

          {/* RELATED SERVICES */}
          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-earth-900 mb-4">Next steps after a reset</h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/garden-restoration-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Garden Restoration →
              </a>
              <a
                href="/services/landscape-maintenance-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Maintenance →
              </a>
              <a
                href="/services/invasive-species-removal-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Invasive Species Removal →
              </a>
              <a
                href="/services/landscape-consultation-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Consultation →
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Ready to Reset Your Yard?</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll assess the situation, reset the landscape into a clean baseline, and recommend the most practical
              plan to keep it manageable.
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
          </div>

          {/* FAQ (visible; matches JSON-LD) */}
          <div className="mt-16 space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">FAQs</h2>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">Is this just a one-time cleanup?</p>
              <p className="text-earth-700 mt-2">
                It can be, but our goal is more than a temporary cutback. We reset the structure—what stays, what
                goes, and how the space should be stabilized—so it’s actually manageable afterward.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">Will everything grow right back?</p>
              <p className="text-earth-700 mt-2">
                If a cleanup is only “cut everything down,” it often grows back worse. We focus on selective
                clearing, restoring spacing, stabilizing soil, and follow-up recommendations so the yard doesn’t
                revert quickly.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-6">
              <p className="font-semibold text-earth-900">What’s next after the reset?</p>
              <p className="text-earth-700 mt-2">
                You can maintain the baseline yourself, schedule ongoing maintenance, or move into restoration or
                new planting projects. We’ll recommend the most practical next step for your goals.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
