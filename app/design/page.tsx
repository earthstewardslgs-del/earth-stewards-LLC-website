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

                <p className="text-xl text-earth-700 leading-relaxed max-w-2xl mx-auto">
                  A thoughtful plan for landscapes that support life, beauty, and ecological balance.
                </p>

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

        {/* Pricing */}
        <section className="py-16 bg-moss-50 border-y border-moss-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
              Landscape Design Investment
            </h2>
            <p className="text-2xl font-semibold text-earth-900 mb-2">
              Starting at $900
            </p>
            <p className="text-earth-700 text-lg">
              Final pricing depends on site size, complexity, and design scope.
            </p>
          </div>
        </section>

        {/* What This Design Helps You Achieve */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-8 text-center">
            What This Design Helps You Achieve
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto">
            <li className="flex gap-3 items-start">
              <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
              <p className="text-earth-700 text-lg">A landscape that supports pollinators and local ecology</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
              <p className="text-earth-700 text-lg">Reduced long-term maintenance through plant community design</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
              <p className="text-earth-700 text-lg">Seasonal structure and year-round visual interest</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
              <p className="text-earth-700 text-lg">A clear installation roadmap you can follow at your own pace</p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
              <p className="text-earth-700 text-lg">Confidence that plants are matched to your soil, light, and moisture conditions</p>
            </li>
          </ul>
        </section>

        {/* Your Design Package Includes */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-8 text-center">
              Your Design Package Includes
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Site-based ecological analysis</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Conceptual planting layout tailored to site conditions</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Native plant spreadsheet with bloom timing and mature height</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Installation quantity breakdown</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Preliminary installation cost estimate</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Phased implementation recommendations</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Species images for clarity</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-moss-700 mt-1 flex-shrink-0">✓</span>
                  <p className="text-earth-700 text-lg">Written design summary with installation guidance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Design Process */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-10 text-center">
            The Design Process
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Strategic Consultation</h3>
                <p className="text-earth-700">
                  We begin with a focused consultation to understand your site conditions, goals, and ecological opportunities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Site Analysis</h3>
                <p className="text-earth-700">
                  Sun exposure, soil conditions, drainage patterns, and existing vegetation are evaluated to guide the design.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Concept Development</h3>
                <p className="text-earth-700">
                  A conceptual planting layout and ecological strategy are developed based on the site's conditions.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Design Documentation</h3>
                <p className="text-earth-700">
                  You receive a complete design package including the plant matrix, quantities, installation guidance, and phased implementation options.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">Implementation Support (Optional)</h3>
                <p className="text-earth-700">
                  You may install the design yourself, work with a contractor, or have Earth Stewards assist with implementation.
                </p>
              </div>
            </div>
          </div>
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
