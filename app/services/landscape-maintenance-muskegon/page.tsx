import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Landscape Maintenance & Garden Care in Muskegon, MI | Earth Stewards LLC',
  description: 'Professional landscape maintenance that makes your yard easier over time. Seasonal cleanup, pruning, and garden care in Muskegon and West Michigan.',
  keywords: 'landscape maintenance Muskegon, garden care, seasonal cleanup, pruning services, yard maintenance Muskegon MI, garden maintenance West Michigan',
}

export default function LandscapeMaintenancePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Landscape Maintenance & Garden Care in Muskegon, MI
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Landscape maintenance that makes your yard easier over time
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
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-earth max-w-none">
            
            <p className="text-xl text-earth-800 leading-relaxed">
              A good maintenance plan isn't just keeping things "clean." It's stabilizing the landscape so it becomes healthier, fuller, and less work year after year. We maintain both traditional gardens and ecological landscapes with an approach built around long-term success.
            </p>

            <h2>Maintenance Services We Provide</h2>
            <ul>
              <li>Seasonal cleanup (spring/fall)</li>
              <li>Pruning and shaping for plant health</li>
              <li>Weed management strategies</li>
              <li>Invasive species removal and control</li>
              <li>Garden bed restoration and overgrown recovery</li>
              <li>Soil improvement and amendments</li>
              <li>Plant health monitoring and problem solving</li>
            </ul>

            <h2>The Difference: Maintenance With a Plan</h2>
            <p>
              Many landscapes become high-maintenance because the underlying structure isn't working — plants are crowded, the soil is depleted, or weeds/invasives keep taking advantage of open ground.
            </p>
            <p>
              We look for the "why" behind recurring issues and recommend improvements that reduce effort long-term.
            </p>

            <h2>Great for Homeowners Who Want…</h2>
            <ul>
              <li>A yard that looks cared for without weekly stress</li>
              <li>Help getting back on track after a few busy seasons</li>
              <li>Better results without harsh chemical dependence</li>
              <li>A long-term plan, not random one-off visits</li>
            </ul>

            <h2>Serving Muskegon & West Michigan</h2>
            <p>
              Earth Stewards LLC provides landscape maintenance in Muskegon and surrounding communities including Norton Shores, North Muskegon, Whitehall, Montague, and nearby Ottawa County areas.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start With a Site Visit
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll walk the property, identify what your landscape needs, and recommend a practical maintenance plan.
            </p>
            <a
              href="/#schedule"
              className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
