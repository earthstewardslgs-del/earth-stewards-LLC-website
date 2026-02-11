import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Landscape Consultation in Muskegon, MI | Earth Stewards LLC',
  description:
    'Landscape consultation in Muskegon and West Michigan. Get clear guidance on drainage, soil, layout, plants, and next steps before you invest in major work.',
  keywords:
    'landscape consultation Muskegon, garden consultation Muskegon MI, landscape planning West Michigan, site assessment Muskegon, garden advice Muskegon',
}

const faqItems = [
  {
    q: 'Do I need a consultation before landscaping work?',
    a: 'Not always, but it helps prevent unnecessary work and makes sure changes fit your site conditions. Many clients use a consultation to prioritize what matters most before investing in plants or major projects.',
  },
  {
    q: 'Will you recommend plants for my yard?',
    a: 'Yes. We suggest plant options that match your soil, light, moisture, and maintenance comfort level native, traditional, or a mix based on your goals and the site.',
  },
  {
    q: 'Can I do the work myself after the visit?',
    a: 'Absolutely. Many homeowners use the consultation as a roadmap and implement improvements gradually. If you want help, we can also outline done-for-you options.',
  },
  {
    q: 'What if my main issue is drainage or plants keep dying?',
    a: 'If the core issue is persistent wet areas, standing water, or repeated plant failure, a Soil and Drainage Assessment may be the better starting point. We will tell you what makes the most sense.',
  },
]

export default function LandscapeConsultationPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <Navigation />

      <Script
        id="faq-landscape-consultation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Landscape Consultation in Muskegon and West Michigan
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Before changing your yard, it helps to understand what your property is already doing.
                Sunlight, drainage, soil conditions, and plant competition shape how a landscape develops and many
                recurring yard problems come from working against those patterns instead of with them.
              </p>

              <p className="text-earth-700 max-w-3xl mx-auto">
                A landscape consultation gives you clear direction before investing in planting, maintenance, or
                major work.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Norton Shores, Spring Lake, Grand Haven, and surrounding West Michigan communities.
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

              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Clarity before cost</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Avoid spending money on plants or projects that will not last.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Work with site conditions</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Use your property natural patterns to your advantage.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Lower effort over time</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Better decisions now prevent constant correction later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Read the landscape before changing it</h2>
              <p>
                Many homeowners call us after trying multiple fixes: plants that keep dying, wet areas that never
                dry out, constant trimming to keep things presentable, or beds that collapse into weeds every
                season.
              </p>
              <p>
                The issue is usually not effort it is mismatch between the landscape and the conditions.
                A consultation helps you understand what your yard needs so improvements hold up in West
                Michigan climate.
              </p>

              <h3>Common reasons people book a consultation</h3>
              <ul>
                <li>Plants keep failing and you are tired of replacing them</li>
                <li>Standing water, soggy spots, or confusing drainage patterns</li>
                <li>Beds that need constant mulching, trimming, or resetting</li>
                <li>A yard that looks okay briefly then chaotic again</li>
                <li>Unsure whether you need maintenance, restoration, or redesign</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we look at during the visit</h3>
              <p className="text-earth-700 mt-2">
                We walk the property together and observe how the space functions.
              </p>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Sunlight exposure throughout the day</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Drainage patterns and water movement</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Soil structure and compaction</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Plant spacing and competition</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Recurring maintenance problem areas</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>How you want the space to feel and function</span>
                </li>
              </ul>

              <div className="mt-8 rounded-xl bg-earth-50 border border-earth-200 p-5">
                <p className="font-semibold text-earth-900">No prep needed</p>
                <p className="text-earth-700 text-sm mt-1">
                  You do not need a plan in advance just show us what is frustrating you.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900">What you leave with</h3>
              <p className="text-earth-700 mt-2">
                You will not leave with a rigid blueprint you will leave with direction.
              </p>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>What to fix first and what can wait</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>What not to spend money on</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Whether adjustment, restoration, or redesign makes sense</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>DIY-friendly guidance or done-for-you options</span>
                </li>
              </ul>
            </div>

            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Different goals are welcome</h2>
              <p>
                Some clients want habitat support and ecological function. Others want a cleaner, easier yard.
                Most want a balance.
              </p>
              <p>
                We are not trying to force a style we help your property and your expectations meet in the middle.
              </p>

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
                </div>
              </section>
            </div>
          </div>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Get Clear Direction For Your Yard
            </h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              A landscape consultation helps you make confident decisions before investing in landscaping work
              with a plan that fits your site conditions.
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

          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl text-earth-900">FAQ</h2>
              <p className="text-earth-700 mt-2">
                Quick answers about landscape consultations in Muskegon and West Michigan.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-earth-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
