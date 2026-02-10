import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Landscape Consultation in Muskegon, MI | Site & Planting Guidance',
  description: 'Not sure what your yard needs? Get clear guidance on plants, drainage, layout, and next steps before investing in major work.',
  keywords: 'landscape consultation Muskegon, garden advice, landscape planning, site assessment West Michigan',
}

export default function LandscapeConsultationPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Landscape Consultation & Planning Guidance
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Before investing in major work, we help you understand what your yard actually needs — drainage, layout changes, plant selection, or a simpler maintenance strategy.
              </p>
              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
                  Schedule Consultation
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
            
            <h2>Understand the problem before spending money</h2>
            <p>
              Many landscape issues repeat because the underlying cause isn't identified — wrong plant placement, drainage patterns, or unrealistic expectations for the site.
            </p>
            <p>
              A consultation clarifies what's happening and what will actually work.
            </p>

            <h2>During the visit</h2>
            <p>We walk the property and discuss:</p>
            <ul>
              <li>Why certain plants struggle</li>
              <li>What maintenance level the site supports</li>
              <li>Whether redesign or adjustment makes more sense</li>
              <li>Realistic next steps (DIY or hired)</li>
            </ul>
            <p>
              You leave with a clear direction instead of trial-and-error.
            </p>

          </div>

          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Get Clear on What Your Yard Needs
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll walk your property and give you an honest assessment of what's happening and what will actually work.
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
