import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Low-Maintenance Lawn Conversion in Muskegon, MI | Earth Stewards LLC',
  description: 'Replace high-maintenance lawn areas with attractive, low-work plantings designed for your goals, property conditions, and comfort level.',
  keywords: 'lawn conversion Muskegon, replace lawn, low maintenance landscaping, lawn alternatives Michigan, reduce mowing',
}

export default function LawnConversionPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Lawn Conversion & Low-Mow Landscapes
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Tired of mowing large areas that don't get used? We convert lawn space into attractive plantings that reduce upkeep while still matching your preferred level of neatness and control.
              </p>
              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
                  Schedule Site Visit
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
            
            <h2>Tired of mowing but don't want a messy yard?</h2>
            <p>
              Some lawns never become easy — dry patches, constant growth, and weekly upkeep just to keep things acceptable. A lawn conversion replaces high-effort turf areas with stable plantings that fill in, look intentional, and reduce ongoing work.
            </p>
            <p>
              This isn't removing lawn just for appearance. It's changing the structure of the landscape so it maintains itself better.
            </p>

            <h2>Good candidates for conversion</h2>
            <ul>
              <li>Slopes that are hard to mow</li>
              <li>Areas that burn out every summer</li>
              <li>Edges you constantly trim</li>
              <li>Backyard spaces you don't actually use</li>
              <li>Sections that never look good no matter what you try</li>
            </ul>

            <h2>What we do</h2>
            <p>
              We evaluate sun, soil, drainage, and how you use the space. Then we replace turf with a planting designed to stabilize and fill in over time.
            </p>
            <p>Options can include:</p>
            <ul>
              <li>Low-growing meadow plantings</li>
              <li>Native or mixed perennial beds</li>
              <li>Habitat-supportive plantings</li>
              <li>Simple low-maintenance groundcover areas</li>
            </ul>
            <p>
              The goal is a yard that looks designed but needs less intervention.
            </p>

          </div>

          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start with a walkthrough
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll look at the space and recommend what level of change makes sense for you — full conversion or phased over time.
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
