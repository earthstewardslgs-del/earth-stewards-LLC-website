import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological & Adaptive Garden Care in Muskegon | Earth Stewards LLC',
  description:
    'Holistic garden care that works with natural growth cycles, site conditions, and plant communities — creating landscapes that mature into healthier, easier spaces over time.',
  keywords:
    'ecological garden care Muskegon, holistic landscape maintenance, adaptive garden care, low maintenance garden care Michigan, sustainable landscape maintenance',
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
          text: 'Instead of repeatedly cutting everything back to the same shape, ecological care focuses on timing, plant relationships, and site conditions so the garden gradually stabilizes and requires less intervention over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this mean the garden will look wild?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The goal is an intentional, cared-for appearance — just maintained in a way that supports how plants actually grow rather than constantly fighting them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only maintain native plant gardens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. This approach works for traditional, mixed, and native plantings. The focus is understanding how the space functions and guiding it toward balance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will maintenance decrease over time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Usually yes. As spacing improves and plant communities stabilize, recurring problems tend to reduce and the work becomes lighter and more seasonal rather than constant.',
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
              Ecological & Adaptive Garden Care
            </h1>

            <p className="text-xl text-earth-700 max-w-3xl mx-auto">
              Some landscapes are maintained by constant correction.
              Others are guided so they mature into stability.
              Our approach focuses on understanding growth patterns,
              seasonal cycles, and site conditions — so the garden
              becomes healthier and easier over time.
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
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Maintenance designed for living systems</h2>
              <p>
                Plants don’t grow on a calendar — they grow in response to light,
                temperature, moisture, and competition. When maintenance ignores
                those patterns, landscapes require constant effort to keep them
                presentable.
              </p>

              <p>
                Ecological care works differently. Instead of repeatedly resetting
                the yard, we guide its development so structure improves, pressure
                decreases, and the space becomes more resilient.
              </p>

              <h3>Good fit if you notice:</h3>
              <ul>
                <li>Plants collapsing or competing heavily</li>
                <li>Areas that never seem to settle in</li>
                <li>Constant trimming just to keep order</li>
                <li>Weeds filling gaps every season</li>
                <li>The yard requiring more effort each year</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">Ongoing care may include</h3>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li>Seasonal cutting at ecological timing</li>
                <li>Selective thinning instead of blanket trimming</li>
                <li>Weed pressure reduction through density</li>
                <li>Adjusting spacing as plants mature</li>
                <li>Monitoring plant relationships and dominance</li>
                <li>Soil improvement when needed</li>
                <li>Supporting natural fill-in instead of constant replanting</li>
              </ul>
            </div>

          </div>

          {/* PHILOSOPHY */}
          <div className="mt-16 prose prose-lg prose-earth max-w-none">
            <h2>Working with the site, not against it</h2>
            <p>
              The goal is not strict control and not neglect — it’s guidance.
              By understanding how the landscape behaves, we can encourage balance
              between people, plants, and habitat so the space feels intentional
              while still functioning naturally.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Care that helps your landscape mature
            </h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll assess your site and create a care plan that supports long-term stability
              instead of repeated correction.
            </p>
            <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
              Schedule Consultation
            </a>
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-earth-900 mb-8 text-center">Common Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-earth-900">How is this different from standard maintenance?</h3>
                <p className="text-earth-700 mt-2">
                  Standard maintenance keeps resetting growth. Ecological care guides development so problems gradually decrease instead of repeating.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-earth-900">Will the yard still look maintained?</h3>
                <p className="text-earth-700 mt-2">
                  Yes — the intention is a cared-for appearance, achieved through timing and structure rather than constant cutting.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-earth-900">Do you only maintain native gardens?</h3>
                <p className="text-earth-700 mt-2">
                  No. This approach works for traditional, mixed, and ecological plantings alike.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-earth-900">Will maintenance become easier?</h3>
                <p className="text-earth-700 mt-2">
                  In most cases yes — as the planting stabilizes, recurring work reduces and care becomes more seasonal.
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
