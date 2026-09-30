import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Fall Yard Cleanup in Muskegon, MI | Earth Stewards LLC',
  description:
    'Fall yard cleanup in Muskegon and West Michigan: leaf cleanup, garden bed cleanup, selective perennial cutbacks, pruning, edging, and debris removal.',
  alternates: {
    canonical: 'https://earthstewardsllc.org/services/fall-cleanup',
  },
  openGraph: {
    title: 'Fall Yard Cleanup in Muskegon & West Michigan | Earth Stewards LLC',
    description:
      'Get your property cleaned up and ready for winter with thoughtful fall cleanup that balances a neat appearance with ecological care.',
    url: 'https://earthstewardsllc.org/services/fall-cleanup',
    siteName: 'Earth Stewards LLC',
    type: 'website',
  },
}

export default function FallCleanupPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://earthstewardsllc.org/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Fall Yard Cleanup',
        item: 'https://earthstewardsllc.org/services/fall-cleanup',
      },
    ],
  }

  const services = [
    'Leaf cleanup from lawns, walkways, patios, and landscape areas',
    'Garden bed cleanup and removal of seasonal debris',
    'Selective perennial cutbacks based on the plant and site',
    'Removal of dead annuals and spent seasonal plantings',
    'Light seasonal pruning where appropriate',
    'Re-establishing clean garden edges where needed',
    'Clearing walkways, entrances, patios, and outdoor living areas',
    'Hauling and disposal of leaves, brush, and landscape debris',
    'Preparing the property for a cleaner, more manageable spring',
  ]

  return (
    <>
      <Navigation />


      <Script
        id="breadcrumb-fall-cleanup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-moss-700">
                Seasonal landscape care for West Michigan
              </p>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Fall Yard Cleanup in Muskegon & West Michigan
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Get your property ready for winter with thoughtful leaf cleanup, garden bed cleanup, selective cutbacks, pruning, edging, and seasonal landscape care.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Norton Shores, Spring Lake, Grand Haven, and nearby West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Request a Fall Cleanup Estimate
                </a>
                <a
                  href="tel:+12317690769"
                  className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
                >
                  Call (231) 769-0769
                </a>
              </div>

              <p className="text-sm text-earth-600">
                Clean and intentional — without automatically stripping every garden bed bare.
              </p>

              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">A cleaner property</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Leaves, spent growth, and seasonal debris are brought back under control.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Selective cutbacks</p>
                  <p className="text-earth-700 text-sm mt-1">
                    We consider the plant before deciding what should be cut and what can remain.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Ready for winter</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Beds, walkways, entrances, and outdoor spaces are left orderly and manageable.
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
                <h2 className="text-3xl font-bold text-earth-900">
                  Fall cleanup without over-cleaning the landscape
                </h2>
              </div>

              <p className="text-earth-700 text-lg">
                A fall cleanup should make your property look cared for and prepare it for winter — but that does not always mean removing every leaf or cutting every perennial to the ground.
              </p>

              <p className="text-earth-700 text-lg">
                Earth Stewards takes a more thoughtful approach. We clean the areas that need attention while considering plant health, soil protection, winter interest, bird food, and habitat for beneficial insects.
              </p>

              <div className="border-l-4 border-earth-900 pl-6 mt-8">
                <h3 className="text-xl font-bold text-earth-900">
                  This service may be a good fit if
                </h3>
              </div>

              <ul className="space-y-3 text-earth-700">
                <li className="flex gap-3">
                  <span className="text-moss-700">✓</span>
                  <span>Leaves and seasonal debris are piling up around the property</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-700">✓</span>
                  <span>Garden beds need to be cleaned up before winter</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-700">✓</span>
                  <span>You want help deciding what should be cut back and what should remain</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-700">✓</span>
                  <span>Walkways, patios, and entrances need seasonal cleanup</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-moss-700">✓</span>
                  <span>You want the property neat without sacrificing ecological value</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-earth-900">
                What fall cleanup may include
              </h2>

              <p className="text-earth-700 mt-2">
                Every property is different. We build the cleanup around the landscape, your priorities, and the level of seasonal maintenance you want.
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
                <p className="text-sm font-bold uppercase tracking-wider text-moss-700">
                  Step 1
                </p>
                <h3 className="text-xl font-bold text-earth-900 mt-2">
                  Tell us about the property
                </h3>
                <p className="text-earth-700 mt-3">
                  Share your property location, what you would like cleaned up, and photos if available.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-moss-700">
                  Step 2
                </p>
                <h3 className="text-xl font-bold text-earth-900 mt-2">
                  We assess the seasonal needs
                </h3>
                <p className="text-earth-700 mt-3">
                  We look at leaves, garden beds, cutbacks, pruning, access, disposal needs, and any priorities you have for the property.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-earth-200 p-7 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-moss-700">
                  Step 3
                </p>
                <h3 className="text-xl font-bold text-earth-900 mt-2">
                  We clean up and prepare for winter
                </h3>
                <p className="text-earth-700 mt-3">
                  We complete the agreed work and leave the landscape cleaner, orderly, and easier to manage going into winter and spring.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Request a Fall Cleanup Estimate
              </a>
            </div>
          </section>

          <div className="mt-16 bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
            <div className="border-l-4 border-earth-900 pl-6 mb-4">
              <h2 className="text-3xl font-bold text-earth-900">
                An ecological approach to fall cleanup
              </h2>
            </div>

            <p className="text-earth-700 mt-2">
              Fallen leaves and standing plant stems are not automatically waste. In the right places, they help protect soil, return organic matter to the landscape, provide overwintering habitat, and add winter structure.
            </p>

            <p className="text-earth-700 mt-4">
              Our goal is to balance those benefits with the clean, intentional appearance you want around your home or business.
            </p>

            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-earth-800">
              <li className="flex gap-3">
                <span className="text-moss-700">✓</span>
                <span>Remove heavy leaf buildup where it creates problems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-moss-700">✓</span>
                <span>Keep appropriate leaf material where it benefits garden soil</span>
              </li>
              <li className="flex gap-3">
                <span className="text-moss-700">✓</span>
                <span>Leave selected stems or seed heads when they provide habitat or winter interest</span>
              </li>
              <li className="flex gap-3">
                <span className="text-moss-700">✓</span>
                <span>Cut back plants that benefit from fall cleanup or where a tidier appearance is preferred</span>
              </li>
            </ul>
          </div>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-earth-900">
                What affects the cost?
              </h2>
              <p className="text-earth-700 mt-4">
                Fall cleanup pricing depends on property size, leaf volume, the number and density of garden beds, cutting back or pruning needs, debris disposal, access, and the overall condition of the landscape.
              </p>
              <p className="text-earth-700 mt-4">
                Photos can often help us understand the scope, although larger or more involved properties may need an on-site assessment before we provide an accurate estimate.
              </p>
            </div>

            <div className="bg-earth-900 text-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Local fall cleanup for West Michigan</h2>
              <p className="mt-4 text-earth-100">
                Earth Stewards LLC serves homeowners and properties across the Muskegon and Ottawa County area with seasonal landscape care that combines a clean appearance with thoughtful ecological practices.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">
                  Locally owned
                </span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">
                  Thoughtful cutbacks
                </span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">
                  Debris removal available
                </span>
                <span className="px-3 py-2 rounded-full bg-white/10 text-sm">
                  West Michigan service area
                </span>
              </div>
            </div>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="/services/overgrown-yard-cleanup"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Overgrown Yard Cleanup →
              </a>
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
                href="/services/landscape-consultation-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Consultation →
              </a>
            </div>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Frequently asked questions
            </h2>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>What is included in a fall cleanup?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Fall cleanup can include leaf and debris removal, garden bed cleanup, selective perennial cutbacks, edging, seasonal pruning where appropriate, removal of dead annuals, and cleanup of walkways and landscape areas. The exact scope is based on your property and priorities.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do you remove all leaves from garden beds?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Not necessarily. We can remove heavy accumulations where they create problems while leaving some leaf material in appropriate garden areas where it can protect soil and provide winter habitat. We tailor the approach to the property and the level of neatness you prefer.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do you cut back all perennials in the fall?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                No. Some plants benefit from being cut back, while others provide winter structure, seed for birds, or habitat for beneficial insects. We use selective cutbacks rather than automatically cutting every perennial to the ground.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do you haul away leaves and landscape debris?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Yes. Hauling and disposal of leaves, brush, and other landscape debris can be included depending on the project scope, access, and volume of material.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>When should fall cleanup be scheduled in West Michigan?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Most fall cleanup work takes place from October into November as leaves drop and plants enter dormancy. Some properties benefit from an earlier visit followed by a final cleanup after the majority of leaves have fallen.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>What affects the cost of a fall cleanup?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Pricing depends on property size, leaf volume, number and density of garden beds, the amount of cutting back or pruning requested, debris disposal needs, access, and the overall condition of the landscape.
              </p>
            </details>
          </section>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">
              Ready to get your property cleaned up for winter?
            </h2>

            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              Tell us what your property needs this fall. We will help determine the most practical cleanup plan and get your landscape ready for the season ahead.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Request a Fall Cleanup Estimate
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
