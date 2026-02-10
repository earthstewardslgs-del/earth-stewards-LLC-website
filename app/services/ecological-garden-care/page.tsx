import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological Garden Care & Native Garden Maintenance in Muskegon | Earth Stewards',
  description:
    'Specialized maintenance for native and pollinator gardens in Muskegon. Stabilize plantings, prevent takeover, and reduce yearly work instead of increasing it.',
  keywords:
    'ecological garden care Muskegon, native garden maintenance, pollinator garden maintenance, habitat garden care West Michigan',
}

export default function EcologicalGardenCarePage() {

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is ecological garden care different from regular landscaping maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Traditional maintenance often focuses on trimming and resetting plants repeatedly. Ecological garden care focuses on stability — managing competition, timing cuts correctly, and guiding the planting so it becomes easier each year.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will a native garden eventually need less work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. When maintained correctly, native and habitat gardens mature and stabilize. Over time they require less watering, fewer replacements, and fewer large cleanups.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you cut everything down every fall?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Timing matters for plant health and pollinators. We cut selectively and seasonally so the garden remains healthy and structured rather than constantly restarting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you take over care of an existing native garden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many clients already have plantings but struggle with maintenance. We evaluate what is working, correct what is not, and guide the garden toward stability.',
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

        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
              Ecological & Native Garden Care
            </h1>

            <p className="text-xl text-earth-700 max-w-3xl mx-auto">
              Native and habitat gardens need a different maintenance approach. We guide growth, prevent takeover,
              and help the planting stabilize so it becomes easier instead of harder each year.
            </p>

            <p className="text-earth-600">
              Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
                Schedule Site Visit
              </a>
              <a href="/#projects" className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all">
                View Our Work
              </a>
            </div>

            {/* VALUE CARDS */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/70 rounded-2xl border border-earth-200 p-5">
                <p className="font-semibold text-earth-900">Prevent takeover</p>
                <p className="text-earth-700 text-sm mt-1">Manage competition before problems start</p>
              </div>
              <div className="bg-white/70 rounded-2xl border border-earth-200 p-5">
                <p className="font-semibold text-earth-900">Guide maturity</p>
                <p className="text-earth-700 text-sm mt-1">Plants fill in instead of collapsing</p>
              </div>
              <div className="bg-white/70 rounded-2xl border border-earth-200 p-5">
                <p className="font-semibold text-earth-900">Less work yearly</p>
                <p className="text-earth-700 text-sm mt-1">Maintenance decreases over time</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="prose prose-lg prose-earth max-w-none">
            <h2>Maintenance designed for evolving gardens</h2>
            <p>
              Ecological plantings are meant to change gradually — not be reset repeatedly.
              Incorrect timing, over-cutting, and blanket cleanup can undo stability.
            </p>

            <h3>Good fit if…</h3>
            <ul>
              <li>Your native garden looks messy despite effort</li>
              <li>Plants compete aggressively</li>
              <li>Sections collapse mid-season</li>
              <li>You’re unsure when to cut or leave growth</li>
              <li>You want less yearly maintenance</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-2xl border border-earth-200 p-8">
            <h3 className="text-2xl font-bold text-earth-900">What we manage</h3>

            <ul className="mt-6 space-y-4 text-earth-800">
              <li>✓ Seasonal cutting at appropriate timing</li>
              <li>✓ Targeted weed & invasive control</li>
              <li>✓ Monitoring plant competition</li>
              <li>✓ Supporting natural fill-in</li>
              <li>✓ Adjusting density over time</li>
              <li>✓ Soil improvement when needed</li>
            </ul>
          </div>

        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 text-center bg-moss-50 border-2 border-moss-200 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Maintain Your Garden Properly
            </h3>
            <p className="text-earth-700 mb-6">
              We create a care plan that supports long-term stability — not constant correction.
            </p>
            <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
              Schedule Consultation
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
