import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Soil & Drainage Assessment in Muskegon, MI | Fix Plant Failures',
  description: 'Plants struggling or dying? We diagnose soil and drainage issues and give practical solutions that prevent repeated failures.',
  keywords: 'soil assessment Muskegon, drainage problems, soil testing, why plants keep dying, drainage evaluation West Michigan',
}

export default function SoilDrainagePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Soil & Drainage Assessment
              </h1>
              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                If plants keep dying or areas stay wet, the issue is usually below the surface. We identify soil and drainage problems and give clear solutions so you stop repeating failed plantings.
              </p>
              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
                  Schedule Assessment
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
            
            <h2>When plants keep failing</h2>
            <p>
              Repeated plant loss often comes down to water movement — too wet, too dry, or inconsistent conditions within the same yard.
            </p>
            <p>
              Replacing plants without addressing this usually leads to the same outcome.
            </p>

            <h2>We evaluate</h2>
            <ul>
              <li>Soil type and compaction</li>
              <li>Drainage patterns after rain</li>
              <li>Downspout and grading effects</li>
              <li>Root zone moisture levels</li>
              <li>Matching plants to conditions</li>
            </ul>

            <h2>Then recommend solutions</h2>
            <p>
              Not always major construction — often placement, selection, or grading adjustments solve the issue.
            </p>
            <p>
              The goal is predictable performance so plants stop cycling in and out.
            </p>

          </div>

          <div className="mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Find Out What's Actually Wrong
            </h3>
            <p className="text-earth-700 mb-6 max-w-2xl mx-auto">
              We'll assess your soil and drainage conditions and give you practical solutions that work.
            </p>
            <a href="/#schedule" className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all">
              Schedule Assessment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
