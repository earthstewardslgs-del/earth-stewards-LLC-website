import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Garden Restoration Services in Muskegon, MI | Earth Stewards LLC',
  description: 'Transform overgrown, neglected gardens in Muskegon. Professional garden restoration and cleanup services. Fix crowding, invasives, and failing landscapes.',
  keywords: 'garden restoration Muskegon, overgrown garden cleanup, neglected yard restoration, garden redesign Muskegon MI, landscape restoration West Michigan',
}

export default function GardenRestorationPage() {
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
                Garden Restoration Services in Muskegon, MI
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Overgrown, struggling, or neglected yard?
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
              Many properties end up with gardens that were once planted with good intentions but became difficult to manage — crowded plants, invasive species, bare soil, or areas that never seem to thrive.
            </p>
            <p>
              Garden restoration focuses on improving what's already there rather than starting over. The goal is a landscape that looks intentional again and becomes easier to maintain moving forward.
            </p>

            <h2>What Garden Restoration Means</h2>
            <p>
              Restoration is not just cleanup. It's evaluating why the space stopped working and correcting the underlying problems.
            </p>
            <p>
              We assess:
            </p>
            <ul>
              <li>Light conditions</li>
              <li>Soil quality and drainage</li>
              <li>Plant crowding and competition</li>
              <li>Invasive or aggressive species</li>
              <li>Maintenance burden</li>
              <li>Seasonal performance</li>
            </ul>
            <p>
              Then we stabilize the landscape so it can function long-term.
            </p>

            <h2>Common Situations We Help With</h2>
            <ul>
              <li>Overgrown planting beds</li>
              <li>Previous landscaping that failed</li>
              <li>Invasive species taking over</li>
              <li>Areas that constantly look messy</li>
              <li>Too much maintenance required</li>
              <li>Plants dying each year</li>
              <li>Bare or eroding soil</li>
              <li>Newly purchased homes needing improvement</li>
            </ul>

            <h2>Our Approach</h2>
            <p>
              We keep what works, remove what doesn't, and improve the rest.
            </p>
            <p>
              Typical restoration work may include:
            </p>
            <ul>
              <li>Selective clearing and pruning</li>
              <li>Invasive species removal</li>
              <li>Soil improvement</li>
              <li>Re-spacing crowded plants</li>
              <li>Adding appropriate plantings</li>
              <li>Converting high-effort areas into stable plantings</li>
              <li>Mulching and finishing</li>
            </ul>
            <p>
              The result is a yard that looks maintained without constant intervention.
            </p>

            <h2>Traditional or Ecological — Your Choice</h2>
            <p>
              Some homeowners want a cleaner version of their existing landscape. Others want to transition toward a lower-input or habitat-supportive garden.
            </p>
            <p>
              We guide the level of change based on your goals, comfort level, and maintenance preference.
            </p>

            <h2>Serving Muskegon & Surrounding Areas</h2>
            <p>
              Earth Stewards LLC provides garden restoration services in Muskegon and nearby West Michigan communities including Norton Shores, North Muskegon, Whitehall, Montague, and Grand Haven.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start With a Site Visit
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              A walkthrough helps determine what can be improved, what should be removed, and what will actually work in your conditions. You'll leave with a clear direction — whether you choose to implement gradually or move forward with a full restoration.
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
