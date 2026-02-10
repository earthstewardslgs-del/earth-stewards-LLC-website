import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Overgrown Yard Cleanup in Muskegon, MI | Landscape Reset Services',
  description: 'We reset messy, neglected yards into manageable spaces so you can move forward with a clear plan — not just a temporary cleanup.',
  keywords: 'overgrown yard cleanup Muskegon, property cleanup, garden reset, neglected yard West Michigan',
}

export default function OvergrownCleanupPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Overgrown Yard & Garden Cleanup
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                When a yard feels overwhelming, the hardest part is knowing where to start. We clear, organize, and reset the space so you can move forward with a manageable plan instead of constant catch-up work.
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
            
            <h2>Not sure where to start?</h2>
            <p>
              Some properties reach a point where maintenance alone doesn't fix the problem. Plants compete, spacing disappears, weeds take advantage of open ground, and the yard feels unmanageable.
            </p>
            <p>
              Cleanup isn't just cutting everything back — that usually makes it worse next season.
            </p>

            <h2>We focus on resetting structure</h2>
            <p>
              We identify what should stay, what should be removed, and how to stabilize the space so it doesn't immediately revert.
            </p>
            <p>Typical work includes:</p>
            <ul>
              <li>Selective clearing and pruning</li>
              <li>Removing aggressive or failing plants</li>
              <li>Re-establishing spacing and edges</li>
              <li>Mulching and soil stabilization</li>
              <li>Creating a maintainable baseline</li>
            </ul>
            <p>
              The goal is to get the landscape back to a workable starting point.
            </p>

            <h2>Good for</h2>
            <ul>
              <li>Newly purchased homes</li>
              <li>Neglected properties</li>
              <li>Rentals becoming residences</li>
              <li>Yards that feel overwhelming</li>
            </ul>
            <p>
              After the reset, ongoing care becomes realistic again.
            </p>

          </div>

          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Ready to Reset Your Yard?
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll assess the situation and create a plan to get you back to a manageable starting point.
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
