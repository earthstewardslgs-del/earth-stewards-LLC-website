import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Invasive Species Removal in Muskegon, MI | Earth Stewards LLC',
  description: 'Remove buckthorn, honeysuckle, and invasive vines in Muskegon. Strategic removal and native replanting to prevent re-growth. Serving West Michigan.',
  keywords: 'invasive species removal Muskegon, buckthorn removal, honeysuckle removal, invasive plant control Michigan, invasive vine removal',
}

export default function InvasiveSpeciesPage() {
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
                Invasive Species Removal in Muskegon, MI
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Invasive species removal that protects your landscape
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
              Invasive plants don't just "spread." They take over, crowd out healthy growth, and create a cycle of constant maintenance. We remove invasives strategically and stabilize the area so it doesn't immediately return.
            </p>

            <h2>Common Invasive Problems We See</h2>
            <p>
              If you're dealing with any of these, you're not alone:
            </p>
            <ul>
              <li>Vines or aggressive plants taking over beds and edges</li>
              <li>"Weeds" that keep coming back no matter what you do</li>
              <li>Areas where nothing else seems to thrive</li>
              <li>Overgrown natural edges and neglected corners</li>
              <li>Invasives spreading into neighboring properties or natural areas</li>
            </ul>

            <h2>Our Approach: Remove + Stabilize</h2>
            <p>
              Removal is only half the job. We focus on long-term control so you're not right back where you started.
            </p>
            <ul>
              <li>Identify the invasive species and scope of spread</li>
              <li>Remove using the appropriate method (cutting, digging, targeted control when needed)</li>
              <li>Dispose of material correctly to prevent re-seeding or re-rooting</li>
              <li>Improve soil and replant with appropriate species</li>
              <li>Optional follow-up visits to keep it from returning</li>
            </ul>

            <h2>Why This Matters</h2>
            <p>
              Invasive species can:
            </p>
            <ul>
              <li>Crowd out desirable plants</li>
              <li>Increase erosion and bare soil</li>
              <li>Reduce habitat quality</li>
              <li>Create high-maintenance "problem zones"</li>
              <li>Spread quickly across seasons</li>
            </ul>
            <p>
              Stopping the spread early saves time and money.
            </p>

            <h2>Serving Muskegon & Surrounding Areas</h2>
            <p>
              We provide invasive species removal in Muskegon and nearby communities in West Michigan, including Norton Shores, North Muskegon, Whitehall, Montague, and surrounding Ottawa County areas.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start With a Site Visit
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll identify what you're dealing with, explain realistic options, and recommend the most effective next step.
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
