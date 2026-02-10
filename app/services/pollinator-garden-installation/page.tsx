import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pollinator Garden Installation in Muskegon, MI | Earth Stewards LLC',
  description: 'Pollinator-friendly garden design and installation in Muskegon. Support bees, butterflies, and hummingbirds with native plants that actually thrive.',
  keywords: 'pollinator garden Muskegon, butterfly garden, bee garden, native pollinator plants Michigan, hummingbird garden West Michigan',
}

export default function PollinatorGardenPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Pollinator Garden Installation
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Gardens that support local pollinators while requiring less maintenance than traditional landscaping
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
            
            <h2>What a Pollinator Garden Does</h2>
            <p>
              Pollinator gardens use flowering plants that provide nectar and habitat for bees, butterflies, and hummingbirds. Most also happen to be lower-maintenance than traditional annuals or high-input perennials.
            </p>
            <p>
              Native plants evolved alongside local pollinators, so they provide the right nutrition and bloom timing. This makes them more effective than generic "pollinator-friendly" plants from garden centers.
            </p>

            <h2>Why Homeowners Choose Pollinator Gardens</h2>
            <p>
              Most people start with one of these goals:
            </p>
            <ul>
              <li>Want to see more bees, butterflies, and birds in their yard</li>
              <li>Looking for lower-maintenance alternatives to traditional beds</li>
              <li>Tired of replanting annuals every season</li>
              <li>Want blooms from spring through fall</li>
              <li>Prefer plants that survive on rainfall once established</li>
            </ul>

            <h2>How We Design Pollinator Gardens</h2>
            <p>
              We assess sun exposure, soil drainage, and existing conditions to select plants that will actually thrive in your specific site. The goal is a stable planting that fills in over time rather than requiring constant replacement.
            </p>
            <p>
              Typical pollinator garden elements:
            </p>
            <ul>
              <li>Native perennials selected for bloom sequence (spring through fall nectar)</li>
              <li>Proper spacing to allow natural spread without overcrowding</li>
              <li>Layering with different plant heights for visual interest and habitat</li>
              <li>Mulching to suppress weeds during establishment</li>
              <li>Optional native grasses for structure and winter interest</li>
            </ul>

            <h2>Common Plants We Use</h2>
            <p>
              Plant selection depends on your site conditions, but frequently used species include:
            </p>
            <ul>
              <li>Purple Coneflower (Echinacea) — long blooming, attracts many pollinators</li>
              <li>Black-Eyed Susan (Rudbeckia) — reliable perennial, thrives in most conditions</li>
              <li>Wild Bergamot (Monarda) — loved by hummingbirds and bees</li>
              <li>Milkweed (Asclepias) — essential for monarch butterflies</li>
              <li>Joe Pye Weed — late-season nectar when other blooms are gone</li>
              <li>Asters — critical fall food source for pollinators</li>
              <li>Little Bluestem Grass — adds structure, winter interest</li>
            </ul>

            <h2>What to Expect After Installation</h2>
            <p>
              Pollinator gardens look sparse the first year. This is normal. Perennials focus on root development before putting energy into flowering and spreading.
            </p>
            <p>
              By the second season, plants fill in more. By the third year, the garden reaches maturity with dense growth and consistent blooms. This is why proper spacing matters — plants need room to reach their natural size.
            </p>

            <h2>Maintenance Requirements</h2>
            <p>
              Once established, pollinator gardens need minimal care:
            </p>
            <ul>
              <li>Leave seed heads through winter (food for birds, habitat for beneficial insects)</li>
              <li>Cut back dead growth in early spring</li>
              <li>Occasional weeding during the first two seasons</li>
              <li>No fertilizer needed if soil is decent</li>
              <li>No supplemental watering after first season (in most cases)</li>
            </ul>

            <h2>Service Area</h2>
            <p>
              We install pollinator gardens in Muskegon and surrounding West Michigan communities including Norton Shores, North Muskegon, Whitehall, Montague, Grand Haven, and Spring Lake.
            </p>

          </div>

          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Ready to Attract More Pollinators?
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll assess your site and recommend plants that will thrive in your specific conditions.
            </p>
            <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
              Schedule Site Visit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
