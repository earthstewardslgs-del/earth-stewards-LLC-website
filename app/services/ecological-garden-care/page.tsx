import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological Landscaping in West Michigan | Earth Stewards LLC',
  description:
    'Ecological landscaping in West Michigan—an approach to designing landscapes that look intentional, fit real site conditions, and get easier to maintain over time.',
  keywords:
    'ecological landscaping West Michigan, ecological landscaping Muskegon, low maintenance landscaping Muskegon MI, sustainable landscaping Michigan, climate adapted plants Michigan, landscape design Muskegon',
}

const faqItems = [
  {
    q: 'What does “ecological landscaping” mean?',
    a: 'Ecological landscaping means designing a yard around real site conditions—sun, soil, moisture, and plant competition—so it stabilizes over time instead of requiring constant resetting.',
  },
  {
    q: 'Is ecological landscaping the same as native landscaping?',
    a: 'Not exactly. Native plants can be part of ecological landscaping, but the core idea is long-term stability: correct spacing, soil health, drainage behavior, and plant selection that fits your site and goals.',
  },
  {
    q: 'Will it look wild or messy?',
    a: 'No. A well-designed ecological landscape can look clean and intentional. We use structure, edges, and balanced plant groupings so the space reads as maintained—not overgrown.',
  },
  {
    q: 'Does ecological landscaping mean “no maintenance”?',
    a: 'No landscape is truly zero-maintenance. The goal is to reduce ongoing effort over time by choosing plants and layouts that don’t collapse into weeds, crowding, or repeated failures.',
  },
  {
    q: 'When does this approach help most?',
    a: 'It helps most when beds keep failing, problem areas return each season, the yard needs weekly upkeep to look presentable, or you’re tired of replacing plants and redoing mulch year after year.',
  },
]

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

export default function EcologicalLandscapingPage() {
  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-ecological-landscaping"
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
                Ecological Landscaping
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Most landscapes look great at installation—then slowly become work. Plants outgrow their space, beds
                need constant resetting, and problem areas return every season. Ecological landscaping is simply
                designing a yard so it stabilizes instead of declining.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Start With a Consultation
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
                  <p className="font-semibold text-earth-900">Built for real conditions</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Plants matched to sun, soil, and moisture—not just appearance.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Looks intentional</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Structure and edges so it reads as maintained—not wild.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Less work over time</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Better spacing and stability so effort decreases each season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* WHAT IT MEANS + FOCUS AREAS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>What we mean by ecological landscaping</h2>
              <p>
                Ecological landscaping means designing your landscape so it functions well in your specific site
                conditions—so it fills in, stays healthy, and becomes easier to maintain.
              </p>
              <p>
                Sometimes that includes native plants. Other times it’s about spacing, soil conditions, drainage
                patterns, and choosing plants that are actually suited to your yard (and your preferred level of
                neatness).
              </p>

              <h3>What it focuses on</h3>
              <ul>
                <li>Sunlight and moisture patterns</li>
                <li>Soil structure and compaction</li>
                <li>Drainage behavior after rain</li>
                <li>Plant competition and correct spacing</li>
                <li>Maintenance expectations and your comfort level</li>
                <li>Long-term stability—not short-term appearance</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What it does NOT mean</h3>
              <p className="text-earth-700 mt-3">
                Ecological landscaping is often misunderstood. A stable landscape should still look intentional and
                cared for.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-earth-700">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Not “letting it go”</p>
                  <p className="text-sm mt-1">We don’t aim for chaos. We aim for structure that lasts.</p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Not zero maintenance</p>
                  <p className="text-sm mt-1">It’s about reducing effort over time—not eliminating it.</p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Not only natives</p>
                  <p className="text-sm mt-1">Native-forward is an option, not a rule.</p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Not a prairie restoration</p>
                  <p className="text-sm mt-1">Most clients want a designed yard with a clean look.</p>
                </div>
              </div>
            </div>
          </div>

          {/* WHEN THIS HELPS MOST */}
          <div className="mt-16 bg-moss-50 rounded-2xl border-2 border-moss-200 p-10">
            <h2 className="text-2xl font-bold text-earth-900">When this approach helps most</h2>
            <p className="text-earth-700 mt-4 max-w-4xl">
              If your landscape never seems to “settle in,” it’s usually not because you’re not trying hard enough—
              it’s because the design doesn’t match the site.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-earth-800">
              <div className="bg-white rounded-xl border border-earth-200 p-5">
                • Beds constantly need re-mulching or replanting
              </div>
              <div className="bg-white rounded-xl border border-earth-200 p-5">
                • Areas fail despite repeated effort
              </div>
              <div className="bg-white rounded-xl border border-earth-200 p-5">
                • Yards become overgrown quickly
              </div>
              <div className="bg-white rounded-xl border border-earth-200 p-5">
                • Weekly upkeep is required just to stay presentable
              </div>
              <div className="bg-white rounded-xl border border-earth-200 p-5">
                • The landscape keeps cycling through the same problems
              </div>
              <div className="bg-white rounded-xl border border-earth-200 p-5">
                • Plants die and get replaced year after year
              </div>
            </div>
          </div>

          {/* CONNECTION TO SERVICES */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>How this connects to our services</h2>
              <p>
                Ecological landscaping isn’t a separate service—it’s how we approach all of them. Whether you want a
                native-forward yard or a more traditional look with fewer headaches, the goal is the same:
                long-term stability and a landscape that gets easier over time.
              </p>

              <p>
                If you’re unsure what the right next step is, starting with a{' '}
                <a className="text-moss-700 hover:text-moss-900 font-semibold" href="/services/landscape-consultation-muskegon">
                  Landscape Consultation
                </a>{' '}
                is usually the fastest way to get clarity.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">Explore related services</h3>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-moss-700 font-semibold">
                <a
                  href="/services/native-landscaping-muskegon"
                  className="rounded-xl border border-earth-200 bg-earth-50 p-5 hover:bg-earth-100 transition"
                >
                  Native Plant Landscapes →
                </a>
                <a
                  href="/services/lawn-conversion-muskegon"
                  className="rounded-xl border border-earth-200 bg-earth-50 p-5 hover:bg-earth-100 transition"
                >
                  Lawn Conversion →
                </a>
                <a
                  href="/services/garden-restoration-muskegon"
                  className="rounded-xl border border-earth-200 bg-earth-50 p-5 hover:bg-earth-100 transition"
                >
                  Garden Restoration →
                </a>
                <a
                  href="/services/landscape-maintenance-muskegon"
                  className="rounded-xl border border-earth-200 bg-earth-50 p-5 hover:bg-earth-100 transition"
                >
                  Long-Term Maintenance →
                </a>
                <a
                  href="/services/soil-drainage-assessment"
                  className="rounded-xl border border-earth-200 bg-earth-50 p-5 hover:bg-earth-100 transition"
                >
                  Soil &amp; Drainage Assessment →
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              A landscape should get easier over time
            </h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              If your yard keeps demanding more work every year, the design—not the effort—is usually the problem.
              We can help you create a plan that fits your site, your goals, and your preferred level of neatness.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Start With a Consultation
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-earth-50 text-moss-800 font-semibold rounded-full border border-earth-200 hover:bg-earth-100 transition-all"
              >
                Discuss Your Project
              </a>
            </div>
          </div>

          {/* FAQ (visible) */}
          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl text-earth-900">FAQ</h2>
              <p className="text-earth-700 mt-2">
                Quick answers about ecological landscaping and what it means for your yard.
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
