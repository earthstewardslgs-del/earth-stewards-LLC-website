import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological Landscape Design in Muskegon, MI | Earth Stewards',
  description: 'Ecological landscape design in Muskegon, MI. Site-based analysis, planting plans, and phased recommendations rooted in function, beauty, and long-term stewardship.',
  keywords: 'ecological landscape design Muskegon, native landscape design, landscape design West Michigan, plant communities, landscape architecture Muskegon MI',
}

export default function DesignPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-earth-50 pt-20">
        {/* Hero Section */}
        <section className="relative pt-36 pb-10 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="space-y-4">
                <h1 className="font-display text-5xl font-bold text-earth-900 mb-2">
                  Ecological Landscape Design in Muskegon, MI
                </h1>

                <p className="text-base text-earth-600 font-medium">
                  Native plant-forward design • ecological function • seasonal beauty
                </p>

                <p className="text-xl text-earth-700 leading-relaxed max-w-3xl mx-auto">
                  Designing landscapes that function beautifully and endure over time.
                </p>

                <p className="text-earth-600">
                  Serving Muskegon, Ottawa County, and surrounding West Michigan communities
                </p>

                <div className="w-16 h-px bg-stone-300 mx-auto mt-6 mb-8"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-earth max-w-none space-y-6">
            <p className="text-earth-700 text-lg leading-relaxed">
              Ecological landscape design turns site realities into a living system. We study how your property behaves — water movement, soil conditions, sunlight patterns, and existing plant communities — and translate those findings into a plan that's resilient, intentional, and beautiful in every season.
            </p>

            <p className="text-earth-700 text-lg leading-relaxed">
              This is functional design rooted in ecological literacy — where beauty emerges from balance, seasonal rhythm, and plant communities that thrive together. These landscapes are designed to be resilient and visually compelling, structured to look intentional in every season.
            </p>

            <p className="text-earth-700 text-lg leading-relaxed">
              We approach this work with gratitude for what the land already provides. Design is our way of giving back — restoring habitat, strengthening ecological function, and shaping outdoor spaces that support both people and place.
            </p>

            <p className="text-earth-700 text-lg leading-relaxed">
              Earth Stewards provides ecological landscape design for homeowners in Muskegon, Grand Haven, Spring Lake, and surrounding West Michigan communities. Our designs focus on native plants, soil health, and water-wise landscapes that thrive in the conditions of the Lake Michigan region.
            </p>
          </div>
        </section>

        {/* Most Projects Begin with a Strategic Consultation */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-moss-50 rounded-2xl p-8 border-2 border-moss-200">
            <h2 className="font-display text-2xl font-bold text-earth-900 mb-4">
              Most Projects Begin with a Strategic Consultation
            </h2>
            <p className="text-earth-700 text-lg mb-3">
              Most ecological landscape design projects begin with a Strategic Consultation.
            </p>
            <p className="text-earth-700 text-lg mb-3">
              This allows us to understand how your property functions ecologically before developing a detailed design.
            </p>
            <p className="text-earth-700 text-lg">
              If you proceed with a design within 30 days, the full consultation fee is applied toward the design cost.
            </p>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
            Outcomes
          </h2>
          <p className="text-earth-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Designed to improve infiltration, support soil life, and build durable habitat — expressed through intentional beauty, seasonal structure, and cohesive plant communities.
          </p>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-moss-50 border-y border-moss-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
              Pricing
            </h2>
            <p className="text-2xl font-semibold text-earth-900 mb-2 text-center">
              Starting at $900
            </p>
            <p className="text-earth-700 text-lg mb-8 text-center">
              Final pricing based on size and scope.
            </p>

            {/* What the Design Includes */}
            <div className="bg-white rounded-2xl p-8 border border-earth-200 max-w-3xl mx-auto">
              <h3 className="font-display text-2xl font-bold text-earth-900 mb-6 text-center">
                What the Design Includes
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <span className="text-earth-700">Site analysis informed by the Strategic Consultation</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <span className="text-earth-700">Conceptual layout for planting areas and landscape structure</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <span className="text-earth-700">Plant palette tailored to site conditions</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <span className="text-earth-700">Ecological planting strategy</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <span className="text-earth-700">Phased implementation recommendations</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <span className="text-earth-700">Written design summary and guidance for installation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-8 text-center">
              What's Included
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Site-based ecological analysis</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Custom planting layout</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Native plant matrix with bloom timing and mature height</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Species images for clarity</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Installation quantity breakdown</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Preliminary installation cost estimate</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Phasing recommendations when appropriate</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Alternative concepts when project complexity warrants comparison</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
            Process
          </h2>
          <p className="text-earth-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            All design projects begin with a Strategic Landscape Consulting Session to ensure clarity before documentation begins.
          </p>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-6">
              Ready to start with clarity?
            </h3>
            <a
              href="/#schedule"
              className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule Strategic Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
