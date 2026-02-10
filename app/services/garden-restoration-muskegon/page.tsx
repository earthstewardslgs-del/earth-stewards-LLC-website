import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Garden Restoration & Bed Rebuilding in Muskegon | Earth Stewards',
  description: 'Overgrown or failing beds? We restore gardens to health with proper spacing, soil care, and plant selection that actually lasts.',
  keywords: 'garden restoration Muskegon, overgrown garden, bed rebuilding, garden cleanup West Michigan',
}

export default function GardenRestorationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Garden Restoration & Bed Rebuilding in Muskegon
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                If your garden has become overgrown, sparse, or confusing to maintain, we rebuild it with proper spacing, soil care, and plant structure so it stabilizes instead of constantly needing rescue work.
              </p>
              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
                  Start With a Site Visit
                </a>
                <a href="/#projects" className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-earth max-w-none">
            
            <h2>Overgrown, Struggling, or Neglected Yard?</h2>
            <p>
              Many properties end up with gardens that were once planted with good intentions but became difficult to manage — crowded plants, invasive species, bare soil, or areas that never seem to thrive.
            </p>
            <p>
              Garden restoration focuses on improving what's already there rather than starting over. The goal is a landscape that looks intentional again and becomes easier to maintain moving forward.
            </p>

            <h2>What Garden Restoration Means</h2>
            <p>
              Restoration is not just cleanup. It's evaluating why the space stopped working and correcting the underlying problems.
            </p>
            <p>We assess:</p>
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
            <p>Typical restoration work may include:</p>
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

          </div>

          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start With a Site Visit
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              A walkthrough helps determine what can be improved, what should be removed, and what will actually work in your conditions. You'll leave with a clear direction — whether you choose to implement gradually or move forward with a full restoration.
            </p>
            <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
              Schedule Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
