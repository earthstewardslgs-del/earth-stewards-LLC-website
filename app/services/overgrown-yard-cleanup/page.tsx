import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Overgrown Yard Cleanup in Muskegon, MI | Earth Stewards LLC',
  description:
    'Overgrown yard cleanup in Muskegon and West Michigan. We clear overgrowth, remove problem plants and debris, restore paths and beds, and leave your property manageable again.',
  keywords:
    'overgrown yard cleanup Muskegon, yard cleanup Muskegon MI, property cleanup West Michigan, neglected yard cleanup, overgrown garden cleanup, brush removal Muskegon',
  alternates: {
    canonical: 'https://www.earthstewardsllc.com/services/overgrown-yard-cleanup',
  },
  openGraph: {
    title: 'Overgrown Yard Cleanup | Earth Stewards LLC',
    description:
      'We clear overgrowth, remove problem plants and debris, restore paths and garden beds, and leave your property cleaner and manageable again.',
    url: 'https://www.earthstewardsllc.com/services/overgrown-yard-cleanup',
    siteName: 'Earth Stewards LLC',
    type: 'website',
  },
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
          text: 'It can be. We can complete a one-time cleanup, but we also explain what should stay, what should go, and what will help the property remain manageable afterward.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you haul away debris?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Debris removal and disposal can be included based on the project scope, access, and volume of material.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help if I just bought a house with a neglected yard?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We often help new homeowners create a clean baseline so they can see what is there, maintain the property, and decide what improvements to make next.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will everything grow right back?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some regrowth is normal, especially from established roots and seed banks. We reduce rapid return by clearing selectively, removing problem plants where practical, restoring spacing, and giving you follow-up recommendations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What affects the cost of an overgrown yard cleanup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing depends on the size and density of the overgrowth, access, woody or invasive growth, disposal volume, equipment needs, and the level of restoration requested.',
        },
      },
    ],
  }

  const services = [
    'Cutting back heavy overgrowth',
    'Removing invasive shrubs, vines, and volunteer trees',
    'Clearing buried patios, walkways, and garden edges',
    'Removing brush and accumulated landscape debris',
    'Preserving worthwhile plants where practical',
    'Hauling and disposing of cleared material',
    'Preparing beds for mulch, planting, or future maintenance',
    'Recommending the simplest way to keep the property manageable',
  ]

  return (
    <>
      <Navigation />

      <Script
        id="faq-overgrown-cleanup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-moss-700">
                Overgrown yard cleanup in West Michigan
              </p>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Overgrown Yard Cleanup Without Judgment
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Has your yard become more than you can handle? Earth Stewards clears overgrowth, removes problem plants and debris, restores paths and garden beds, and leaves you with a cleaner, manageable property.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Norton Shores, Spring Lake, Grand Haven, and nearby West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Request a Yard Cleanup Estimate
                </a>
                <a
                  href="tel:+12317690769"
                  className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
                >
                  Call (231) 769-0769
                </a>
              </div>

              <p className="text-sm text-earth-600">
                Not sure what should stay or go? We identify worthwhile plants before clearing.
              </p>

              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">No judgment</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Yards can become overwhelming quickly. We are here to help.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Selective cleanup</p>
                  <p className="text-earth-700 text-sm mt-1">
                    We clear problem growth while preserving valuable plants where practical.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">A manageable result</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Paths, beds, patios, and important plants become visible again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="border-l-4 border-earth-900 pl-6">
                <h2 className="text-3xl font-bold text-earth-900">When this service helps</h2>
              </div>

              <p className="text-earth-700 text-lg">
                People usually contact us when a yard has become difficult to use or maintain. The property may have been neglected, inherited, recently purchased, or overtaken after a few fast-growing seasons.
              </p>

              <p className="text-earth-700 text-lg">
                We help uncover what is worth keeping, remove the growth causing the problem, and create a practical starting point for maintenance or future improvements.
              </p>

              <div className="border-l-4 border-earth-900 pl-6 mt-8">
                <h3 className="text-xl font-bold text-earth-900">This service may be a good fit if</h3>
              </div>

              <ul className="space-y-3 text-earth-700">
                <li className="flex gap-3"><span className="text-moss-700">✓</span><span>The property feels out of control</span></li>
                <li className="flex gap-3"><span className="text-moss-700">✓</span><span>You do not know what should stay or go</span></li>
                <li className="flex gap-3"><span className="text-moss-700">✓</span><span>Invasive plants, vines, or volunteer trees have taken over</span></li>
                <li className="flex gap-3"><span className="text-moss-700">✓</span><span>Paths, patios, or garden beds have disappeared beneath growth</span></li>
                <li className="flex gap-3"><span className="text-moss-700">✓</span><span>You want a clean starting point before planning improvements</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-earth-900">What cleanup may include</h2>
              <p className="text-earth-700 mt-2">
                Every property is different. We match the cleanup plan to the site, your priorities, and what can realistically be maintained afterward.
              </p>

              <ul className="mt-6 space-y-3 text-earth-800">
                {services.map((service) => (
                  <li key={service} className="flex gap-3">
                    <span className="mt-1 text-moss-700">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className="mt-16">
            <div className="border-l-4 border-earth-900 pl-6 mb-8">
              <h2 className="text-3xl font-bold text-earth-900">How it works</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-earth-200 p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-moss-700">Step 1</p>
                <h3 className="text-xl font-bold text-earth-900 mt-2">Tell us about the property</h3>
                <p className="text-earth-700 mt-3">
                  Share the property location, a short description, and photos if available.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-moss-700">Step 2</p>
                <h3 className="text-xl font-bold text-earth-900 mt-2">We assess the cleanup</h3>
                <p className="text-earth-700 mt-3">
                  We identify what should stay, what needs removal, disposal needs, access, and useful next steps.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-moss-700">Step 3</p>
                <h3 className="text-xl font-bold text-earth-900 mt-2">We restore a manageable baseline</h3>
                <p className="text-earth-700 mt-3">
                  We complete the agreed cleanup and leave the property clearer, usable, and easier to maintain.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Request a Yard Cleanup Estimate
              </a>
            </div>
          </section>

          <div className="mt-16 bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
            <div className="border-l-4 border-earth-900 pl-6 mb-4">
              <h2 className="text-3xl font-bold text-earth-900">What you leave with</h2>
            </div>

            <p className="text-earth-700 mt-2">
              You leave with a cleaner, organized property where important plants, paths, patios, and garden areas are visible and manageable again.
            </p>

            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-earth-800">
              <li className="flex gap-3"><span className="text-moss-700">✓</span><span>Visible, usable paths and outdoor areas</span></li>
              <li className="flex gap-3"><span className="text-moss-700">✓</span><span>Reduced invasive and problem growth</span></li>
              <li className="flex gap-3"><span className="text-moss-700">✓</span><span>Preserved plants worth keeping where practical</span></li>
              <li className="flex gap-3"><span className="text-moss-700">✓</span><span>Recommendations for maintenance or future improvements</span></li>
            </ul>
          </div>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-earth-900">What affects the cost?</h2>
              <p className="text-earth-700 mt-4">
                Cleanup pricing depends on the size and density of the overgrowth, access to the work area, woody or invasive growth, disposal volume, equipment needs, and the level of restoration requested.
              </p>
              <p className="text-earth-700 mt-4">
                Photos are helpful, but some properties require an on-site assessment before we can provide an accurate estimate.
              </p>
            </div>

            <div className="bg-earth-900 text-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Locally focused, thoughtful service</h2>
              <p className="mt-4 text-earth-100">
                Earth Stewards LLC serves homeowners across the Muskegon and Ottawa County area with cleanup that balances immediate results and long-term manageability.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">Locally owned</span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">Selective clearing</span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">Debris removal available</span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">West Michigan service area</span>
              </div>
            </div>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">Related services</h2>
            <div className="flex flex-wrap gap-3">
              <a href="/services/garden-restoration-muskegon" className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition">
                Garden Restoration →
              </a>
              <a href="/services/landscape-maintenance-muskegon" className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition">
                Landscape Maintenance →
              </a>
              <a href="/services/invasive-species-removal-muskegon" className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition">
                Invasive Species Removal →
              </a>
              <a href="/services/landscape-consultation-muskegon" className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition">
                Landscape Consultation →
              </a>
            </div>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">Frequently asked questions</h2>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Is this just a one-time cleanup?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                It can be. We can complete a one-time cleanup, but we also explain what should stay, what should go, and what will help the property remain manageable afterward.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do you haul away debris?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Yes. Debris removal and disposal can be included based on the project scope, access, and volume of material.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Can you help if I just bought a house with a neglected yard?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Yes. We often help new homeowners create a clean baseline so they can see what is there, maintain the property, and decide what improvements to make next.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Will everything grow right back?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Some regrowth is normal, especially from established roots and seed banks. We reduce rapid return by clearing selectively, removing problem plants where practical, restoring spacing, and giving you follow-up recommendations.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>What affects the cost of an overgrown yard cleanup?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Pricing depends on the size and density of the overgrowth, access, woody or invasive growth, disposal volume, equipment needs, and the level of restoration requested.
              </p>
            </details>
          </section>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Ready to make the yard manageable again?</h2>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              Tell us what is happening on the property. We will help identify the most practical cleanup plan and next step.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Request a Yard Cleanup Estimate
              </a>
              <a
                href="tel:+12317690769"
                className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
              >
                Call (231) 769-0769
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
