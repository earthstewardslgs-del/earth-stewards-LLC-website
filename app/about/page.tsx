import type { Metadata } from 'next'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Earth Stewards LLC | Landscape Stewardship in Muskegon, MI',
  description: 'Learn about our approach to landscape design and ecological stewardship. Owner-led landscaping services focused on long-term stability and working with natural systems in West Michigan.',
  keywords: 'about Earth Stewards, landscape philosophy, ecological landscaping, owner-led landscaping Muskegon, landscape stewardship West Michigan',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-earth-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-earth-900 mb-6">
              Landscaping as stewardship
            </h1>
            <p className="text-xl text-earth-700 leading-relaxed max-w-3xl mx-auto">
              Earth Stewards was built on a simple belief: the land supports us constantly — and our work should return that support through thoughtful, functional design.
            </p>
          </div>
        </section>

        {/* Why Earth Stewards Exists */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
            Why Earth Stewards Exists
          </h2>
          <div className="prose prose-lg prose-earth max-w-none space-y-6">
            <p className="text-earth-700 text-lg leading-relaxed">
              We started Earth Stewards from a simple realization: the land gives to us constantly — food, water, stability, beauty, and a place to belong.
            </p>
            <p className="text-earth-700 text-lg leading-relaxed">
              Modern landscaping often asks the land to perform. We approach it differently.
            </p>
            <p className="text-earth-700 text-lg leading-relaxed">
              Our work focuses on helping landscapes function again — so they hold water, support life, stabilize soil, and require less correction over time.
            </p>
            <p className="text-earth-700 text-lg leading-relaxed">
              Not as a trend. As a relationship.
            </p>
          </div>
        </section>

        {/* How It Started */}
        <section className="py-20 bg-white border-y border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
              How It Started
            </h2>
            <div className="prose prose-lg prose-earth max-w-none space-y-6">
              <p className="text-earth-700 text-lg leading-relaxed">
                For years, landscaping often meant controlling nature — removing what appeared naturally and replacing it with what was expected.
              </p>
              <p className="text-earth-700 text-lg leading-relaxed">
                Over time, patterns became clear.
              </p>
              <p className="text-earth-700 text-lg leading-relaxed">
                Some properties constantly struggled: standing water, failing plants, erosion, compacted soil, endless maintenance.
              </p>
              <p className="text-earth-700 text-lg leading-relaxed">
                Others stabilized quickly and stayed that way.
              </p>
              <p className="text-earth-700 text-lg leading-relaxed">
                The difference wasn't effort. It was whether the work aligned with how the site naturally wanted to function.
              </p>
              <p className="text-earth-700 text-lg leading-relaxed">
                Earth Stewards grew from that observation.
              </p>
            </div>
          </div>
        </section>

        {/* What Guides Our Work */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-8">
            What Guides Our Work
          </h2>
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <span className="text-moss-700 text-xl mt-1 flex-shrink-0">•</span>
              <p className="text-earth-700 text-lg">Work with water patterns before selecting plants</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-moss-700 text-xl mt-1 flex-shrink-0">•</span>
              <p className="text-earth-700 text-lg">Support soil life instead of constantly replacing soil</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-moss-700 text-xl mt-1 flex-shrink-0">•</span>
              <p className="text-earth-700 text-lg">Design plant communities, not isolated ornamentals</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-moss-700 text-xl mt-1 flex-shrink-0">•</span>
              <p className="text-earth-700 text-lg">Prioritize long-term stability over short-term aesthetics</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-moss-700 text-xl mt-1 flex-shrink-0">•</span>
              <p className="text-earth-700 text-lg">Educate clients so they understand their land</p>
            </div>
          </div>
        </section>

        {/* What Working With Us Feels Like */}
        <section className="py-20 bg-moss-50 border-y border-moss-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
              What Working With Us Feels Like
            </h2>
            <p className="text-earth-700 text-lg leading-relaxed">
              You can expect clear explanations of what your site is doing and why. Practical options rather than one fixed plan. Phased approaches when appropriate. Honest expectations about maintenance. A landscape that improves over time instead of resetting each season.
            </p>
          </div>
        </section>

        {/* About the Owner */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
            Owner-Led & Hands-On
          </h2>
          <div className="prose prose-lg prose-earth max-w-none space-y-6">
            <p className="text-earth-700 text-lg leading-relaxed">
              Earth Stewards is led by Kendall Hailstone, approaching each project as a partnership with the land rather than something to control.
            </p>
            <p className="text-earth-700 text-lg leading-relaxed">
              Rather than applying one style everywhere, each project begins by reading the land itself — understanding water flow, soil conditions, light patterns, and existing plant communities.
            </p>
            <p className="text-earth-700 text-lg leading-relaxed">
              The goal is simple: create outdoor spaces that participate in their environment instead of fighting it.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center text-center">
            <Image
              src="/images/kendall-hailstone.jpg"
              alt="Kendall Hailstone, owner of Earth Stewards LLC"
              width={220}
              height={220}
              className="rounded-2xl object-cover shadow-md"
              priority
            />
            <p className="mt-4 text-sm text-earth-600">
              Kendall Hailstone — Earth Stewards LLC
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white border-t border-earth-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
              Start with understanding your site.
            </h2>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all shadow-lg hover:shadow-xl"
            >
              Book a Project Review Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
