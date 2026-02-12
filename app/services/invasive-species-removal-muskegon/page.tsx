import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Invasive Plant Removal in Muskegon, MI | Earth Stewards LLC',
  description:
    'Invasive plant removal in Muskegon and West Michigan. Targeted control for buckthorn, honeysuckle, bittersweet, and knotweed that prevents regrowth.',
  keywords:
    'invasive plant removal Muskegon, buckthorn removal Muskegon MI, honeysuckle removal, invasive species control West Michigan, bittersweet removal, knotweed control, ecological landscaping Muskegon',
}

export default function InvasiveSpeciesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What invasive plants do you remove in Muskegon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We remove and control common West Michigan invasives like buckthorn, honeysuckle, bittersweet, knotweed, garlic mustard, and other aggressive species. During a site visit we identify what is present and recommend the safest, most effective approach for your property.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will invasive plants come back after removal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many invasives resprout or re-seed if the work stops at cutting it down. Our approach focuses on long-term control: removing the plant correctly, handling debris properly, and stabilizing the area with the right follow-up plan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you use chemicals for invasive species removal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We prioritize mechanical removal when it is effective. If targeted treatment is the most responsible option for a specific species or situation, we explain why and use a precise method designed to minimize impact on surrounding plants.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you prevent invasives from spreading during removal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use species-appropriate handling and disposal so material does not re-root or re-seed. That can include bagging seed heads, removing roots and rhizomes when needed, and keeping disturbed soil covered and stabilized after the work.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do after invasive removal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bare soil invites the next wave of weeds. We typically recommend stabilizing the area with the right planting plan—native, pollinator-friendly, or traditional based on your goals—plus targeted mulching and follow-up care to keep the site moving in the right direction.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      <Script
        id="faq-invasive-species"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Invasive Plant Removal in Muskegon
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Buckthorn, bittersweet, honeysuckle, knotweed—these plants spread fast in West Michigan and
                turn small issues into constant maintenance. We remove invasives with targeted
                methods that prevent regrowth and protect the plants you actually want to keep.
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

              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Targeted removal</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Species-specific strategy—not a one-size-fits-all cleanup.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Protect what you want</p>
                  <p className="text-earth-700 text-sm mt-1">
                    We work carefully around desirable plants and landscapes.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Prevent regrowth</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Removal plus stabilization so you don't end up back at square one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>When people call us</h2>
              <p>
                Invasive plants don't just spread—they crowd out healthy growth, reduce habitat value,
                and create high-maintenance problem zones that keep getting worse each season in Muskegon's climate.
              </p>
              <p>
                The key is handling them correctly the first time—so you're not re-fighting the same battle
                every year.
              </p>

              <h3>Common signs you're dealing with an invasive problem</h3>
              <ul>
                <li>Vines or aggressive plants swallowing beds, fences, or edges</li>
                <li>Weeds that return quickly even after pulling or cutting</li>
                <li>Areas where nothing else thrives due to crowding and competition</li>
                <li>Overgrown natural edges and neglected corners that keep expanding</li>
                <li>Spread toward neighboring properties or nearby natural areas</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we do</h3>
              <p className="text-earth-700 mt-2">
                We identify the species, choose the right method, and stabilize the area so it stays under control.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">1) Identify and scope</p>
                  <p className="text-earth-700 text-sm mt-1">
                    We confirm what's present and how it's spreading—roots, runners, seed, or resprout.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">2) Targeted removal</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Mechanical removal when possible; targeted treatment only when it's the most responsible option.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">3) Stabilize the site</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Bare soil invites the next wave. We recommend the right planting or mulch plan for long-term control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
              <h2>What you leave with</h2>
              <p className="text-earth-700 mt-2">
                Removal is only half the job. The goal is long-term control—without damaging the landscape you want.
              </p>
              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Species identification and realistic plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Appropriate method: pull, dig, cut, or targeted control if needed</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Correct handling and disposal to prevent re-rooting or re-seeding</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Stabilization plan: planting, mulch, and phased follow-ups when needed</span>
                </li>
              </ul>
            </div>

            <div className="prose prose-lg prose-earth max-w-none">
              <h3>Why it matters beyond aesthetics</h3>
              <p>Invasive species in West Michigan can:</p>
              <ul>
                <li>Crowd out desirable plants and create dead zones</li>
                <li>Increase erosion and bare soil</li>
                <li>Reduce habitat quality for birds and beneficial insects</li>
                <li>Turn small edges into large, recurring maintenance problems</li>
                <li>Spread quickly across seasons if left untreated</li>
              </ul>
              <p>
                Stopping the spread early is almost always more cost-effective than tackling a full takeover later.
              </p>
            </div>
          </div>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/garden-restoration-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Garden Restoration →
              </a>
              <a
                href="/services/overgrown-yard-cleanup"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Overgrown Yard Cleanup →
              </a>
              <a
                href="/services/ecological-garden-care"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Ecological Garden Care →
              </a>
              <a
                href="/services/landscape-maintenance-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Maintenance →
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
                  <span>What invasive plants do you remove in Muskegon?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  We remove and control common West Michigan invasives like buckthorn, honeysuckle, bittersweet, knotweed, garlic mustard, and other aggressive species. During a site visit we identify what is present and recommend the safest, most effective approach for your property.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Will invasive plants come back after removal?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Many invasives resprout or re-seed if the work stops at cutting it down. Our approach focuses on long-term control: removing the plant correctly, handling debris properly, and stabilizing the area with the right follow-up plan.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>Do you use chemicals for invasive species removal?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  We prioritize mechanical removal when it is effective. If targeted treatment is the most responsible option for a specific species or situation, we explain why and use a precise method designed to minimize impact on surrounding plants.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>How do you prevent invasives from spreading during removal?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  We use species-appropriate handling and disposal so material does not re-root or re-seed. That can include bagging seed heads, removing roots and rhizomes when needed, and keeping disturbed soil covered and stabilized after the work.
                </p>
              </details>

              <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                  <span>What should I do after invasive removal?</span>
                  <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-earth-700 leading-relaxed">
                  Bare soil invites the next wave of weeds. We typically recommend stabilizing the area with the right planting plan—native, pollinator-friendly, or traditional based on your goals—plus targeted mulching and follow-up care to keep the site moving in the right direction.
                </p>
              </details>
            </div>
          </section>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Start with a site visit</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We'll identify what you're dealing with, explain realistic options, and recommend the most effective next step—whether
              that's a one-time removal or a phased plan that prevents return.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Schedule Consultation
              </a>
              <a
                href="/services/garden-restoration-muskegon"
                className="inline-flex items-center px-8 py-4 bg-earth-50 text-moss-800 font-semibold rounded-full border border-earth-200 hover:bg-earth-100 transition-all"
              >
                Explore Garden Restoration
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
