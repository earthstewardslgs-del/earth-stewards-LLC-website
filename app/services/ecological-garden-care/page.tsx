import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Native & Ecological Garden Maintenance in Muskegon, MI',
  description: 'Specialized care for native and pollinator gardens that keeps them healthy, balanced, and easier to manage each season.',
  keywords: 'ecological garden care, native garden maintenance, pollinator garden care Muskegon, native plant maintenance',
}

export default function EcologicalGardenCarePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Ecological & Native Garden Care
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Native and habitat gardens need a different approach than traditional landscaping. We maintain them in a way that supports plant health, prevents takeover, and keeps them looking intentional.
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
            
            <h2>Maintenance for gardens meant to evolve</h2>
            <p>
              Ecological and native-forward gardens don't follow the same rules as traditional landscaping. Over-cutting, blanket mulching, or routine trimming can undo the stability they're designed to create.
            </p>
            <p>
              We maintain these spaces so they mature instead of being constantly restarted.
            </p>

            <h2>What this includes</h2>
            <ul>
              <li>Seasonal cutting at appropriate times</li>
              <li>Targeted weed management</li>
              <li>Monitoring plant competition</li>
              <li>Supporting natural fill-in</li>
              <li>Soil improvement when needed</li>
              <li>Adjusting density over time</li>
            </ul>

            <h2>The goal</h2>
            <p>
              Less intervention each year — not more.
            </p>
            <p>
              Good care gradually reduces effort instead of locking you into permanent maintenance.
            </p>

          </div>

          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Maintain Your Ecological Garden Properly
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll create a care plan that supports the garden's natural development while keeping it looking intentional.
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
