import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Native Landscaping in Muskegon, MI | Earth Stewards LLC',
  description: 'Native plant landscape design and installation in Muskegon, Michigan. Lower-maintenance landscapes that work with nature. Serving Muskegon & Ottawa County.',
  keywords: 'native landscaping Muskegon, native plants Michigan, lawn conversion, ecological landscaping, low maintenance landscaping Muskegon',
}

export default function NativeLandscapingPage() {
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
                Native Landscaping in Muskegon, MI
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Native landscaping that looks intentional — and works with nature
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
              Native landscaping can be both beautiful and practical. We design landscapes that fit your property, your style, and your maintenance comfort level — from native-forward plantings to blended landscapes that still feel polished and familiar.
            </p>

            <h2>What Native Landscaping Can Do for Your Property</h2>
            <p>
              A landscape designed for local conditions can reduce recurring problems and create a yard that gets easier over time.
            </p>
            <ul>
              <li>Lower water needs once established</li>
              <li>Fewer inputs (fertilizer, pesticides, constant replanting)</li>
              <li>More seasonal interest and structure</li>
              <li>Improved soil health and resilience</li>
              <li>Increased habitat for birds and pollinators</li>
            </ul>

            <h2>Lawn Conversion to Ecologically Functional Landscapes</h2>
            <p>
              Want less mowing and more purpose? We convert lawns into stable, ecologically functional landscapes that look designed — not messy. Whether you want a full transformation or a phased approach, we'll recommend a plan that makes sense for your space and budget.
            </p>

            <h2>Our Process</h2>
            <ol>
              <li><strong>Site visit</strong> to review sun, soil, drainage, and your goals</li>
              <li><strong>Design plan</strong> aligned with your desired look and maintenance level</li>
              <li><strong>Installation</strong> with proper preparation for long-term success</li>
              <li><strong>Support & care</strong> as the landscape establishes and fills in</li>
            </ol>

            <h2>Serving Muskegon & West Michigan</h2>
            <p>
              Earth Stewards LLC serves Muskegon and surrounding areas including Norton Shores, North Muskegon, Whitehall, Montague, and nearby Ottawa County communities.
            </p>

          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Start With a Site Visit
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll walk the property, answer questions, and recommend options that will actually work in your conditions.
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
