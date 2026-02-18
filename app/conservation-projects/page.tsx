import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Conservation & Community Ecological Projects | Earth Stewards LLC',
  description: 'Ecological landscaping implementation partner for municipalities, conservation districts, HOAs, and funded environmental projects in West Michigan.',
  keywords: 'conservation projects Muskegon, ecological restoration West Michigan, stormwater mitigation, shoreline stabilization, habitat restoration, watershed projects, municipal landscaping, grant funded projects',
}

export default function ConservationProjectsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-earth-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display text-5xl font-bold text-earth-900 mb-6">
                For Conservation & Community Projects
              </h1>

              <p className="text-xl text-earth-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                Ecological implementation that works beyond installation
              </p>

              <p className="text-earth-700 max-w-3xl mx-auto">
                Earth Stewards installs landscapes designed to function long term and support water quality, habitat, and maintenance-reduction goals. We welcome collaboration with municipalities, conservation districts, HOAs, and nonprofits to help implement ecological projects reliably on the ground.
              </p>

              <p className="text-earth-600">
                Serving Muskegon & Ottawa Counties and surrounding West Michigan communities
              </p>
            </div>
          </div>
        </section>

        {/* What We Help Implement */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-12 text-center">
            What We Help Implement
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Stormwater mitigation */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900 mb-4 border-l-4 border-moss-600 pl-3">
                Stormwater mitigation systems
              </h3>
              <ul className="space-y-2 text-earth-700">
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Rain gardens and bioswales</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Infiltration basins</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Vegetated drainage corridors</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Permeable landscape retrofits</span></li>
              </ul>
            </div>

            {/* Shoreline & buffer */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900 mb-4 border-l-4 border-moss-600 pl-3">
                Shoreline & buffer stabilization
              </h3>
              <ul className="space-y-2 text-earth-700">
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Riparian buffer restoration</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Erosion control plantings</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Lakefront and streambank stabilization</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Wetland edge restoration</span></li>
              </ul>
            </div>

            {/* Habitat restoration */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900 mb-4 border-l-4 border-moss-600 pl-3">
                Habitat restoration & turf conversion
              </h3>
              <ul className="space-y-2 text-earth-700">
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Native meadow establishment</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Pollinator habitat corridors</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Lawn-to-native conversion</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Wildlife support plantings</span></li>
              </ul>
            </div>

            {/* Low-input retrofits */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8">
              <h3 className="text-2xl font-bold text-earth-900 mb-4 border-l-4 border-moss-600 pl-3">
                Low-input landscape retrofits
              </h3>
              <ul className="space-y-2 text-earth-700">
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Reduced-maintenance site redesign</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Green infrastructure parking lot islands</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Municipal grounds conversion</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>HOA common area redesign</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Projects Succeed */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
              Why Projects Succeed
            </h2>
            <div className="prose prose-lg prose-earth max-w-none">
              <p className="text-earth-700 text-lg">
                Installations are designed for real human behavior and realistic maintenance rather than ideal conditions. We plan for how people actually use spaces, what maintenance is realistically available, and what the site will look like in three years—not just at planting.
              </p>
              <p className="text-earth-700 text-lg">
                A rain garden that functions in year five matters more than one that looks perfect in year one. We install systems that account for mowing patterns, visibility concerns, seasonal water flow, and the fact that most sites will not receive intensive care after establishment.
              </p>
              <p className="text-earth-700 text-lg">
                When needed, we document key installation decisions so project coordinators can confidently report outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Landowner Guidance */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
            Landowner Guidance & Stewardship
          </h2>
          <div className="prose prose-lg prose-earth max-w-none">
            <p className="text-earth-700 text-lg">
              After installation, we walk the property owner through what was planted, what to expect seasonally, and what the system is designed to do. This includes explaining what normal establishment looks like, when intervention is needed, and how to communicate concerns before they become problems.
            </p>
            <p className="text-earth-700 text-lg">
              Setting clear expectations at handoff prevents confusion later. Landowners understand what success looks like, what typical first-year growth patterns are, and when to reach out if something seems off.
            </p>
          </div>
        </section>

        {/* Working With Funded Projects */}
        <section className="py-16 bg-moss-50 border-y border-moss-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
              Working With Funded Projects
            </h2>
            <div className="prose prose-lg prose-earth max-w-none">
              <p className="text-earth-700 text-lg">
                Earth Stewards is intentionally preparing to support conservation- and watershed-funded installations and is comfortable collaborating with project managers, designers, and landowners during implementation. While we are newer to formal grant-funded coordination, our workflow is structured around clear communication, site adjustments, and documentation so the installed system matches the intended ecological function. Our goal is to make implementation predictable and straightforward for both the coordinating organization and the property owner.
              </p>
            </div>
          </div>
        </section>

        {/* Collaborative Implementation */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
            Collaborative Implementation
          </h2>
          <div className="prose prose-lg prose-earth max-w-none">
            <p className="text-earth-700 text-lg">
              We recognize that ecological plans often represent site-specific goals and constraints. When field conditions differ from drawings, we communicate before changing intent. We aim to preserve function first and adapt details second, working with the project coordinator when adjustments are needed.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-8 text-center">
              Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-moss-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-earth-900 font-semibold text-lg">Durability over decoration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-moss-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-earth-900 font-semibold text-lg">Ecological function over constant upkeep</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-moss-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-earth-900 font-semibold text-lg">Systems that stabilize over time</p>
              </div>
            </div>
          </div>
        </section>

        {/* How Organizations Work With Us */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-8 text-center">
            How Organizations Can Work With Us
          </h2>
          <div className="space-y-6">
            <div className="flex gap-3 text-earth-700 text-lg">
              <span className="text-moss-700 mt-1 flex-shrink-0">•</span>
              <p>We can implement directly from an existing plan or specification.</p>
            </div>
            <div className="flex gap-3 text-earth-700 text-lg">
              <span className="text-moss-700 mt-1 flex-shrink-0">•</span>
              <p>We can walk a site with the project lead to help translate goals into a buildable scope.</p>
            </div>
            <div className="flex gap-3 text-earth-700 text-lg">
              <span className="text-moss-700 mt-1 flex-shrink-0">•</span>
              <p>We can support multi-site installation periods during active project seasons.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-earth-200">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-8 text-center">
              Start a Conversation
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-moss-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-earth-900">Phone</div>
                  <a href="tel:+12317690769" className="text-moss-700 hover:text-moss-800 text-lg">
                    (231) 769-0769
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-moss-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-earth-900">Email</div>
                  <a href="mailto:earthstewardslgs@gmail.com" className="text-moss-700 hover:text-moss-800 text-lg">
                    earthstewardslgs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-moss-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-earth-900">Service Area</div>
                  <div className="text-earth-700 text-lg">Muskegon & Ottawa Counties, MI</div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-earth-200">
              <a
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Contact for project coordination
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
