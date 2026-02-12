import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Soil & Drainage Assessment in Muskegon, MI | Earth Stewards LLC',
  description:
    'Soil and drainage assessment in Muskegon and West Michigan. Diagnose why plants keep dying or areas stay wet, then get practical fixes to stop repeating failures.',
  keywords:
    'soil assessment Muskegon, drainage assessment Muskegon MI, drainage problems West Michigan, soil compaction, standing water yard, grading evaluation',
}

export default function SoilDrainagePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why do my plants keep dying even when I water them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plant failure is often caused by water movement and root-zone conditions—too wet, too dry, compacted soil, or drainage patterns that change across the yard. Replacing plants without addressing the underlying cause often leads to the same result.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do you look at during a soil and drainage assessment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We evaluate soil type and compaction, drainage patterns after rain, grading and downspout impacts, moisture levels in the root zone, and whether plant choices match the site conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you do soil testing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We start with an on-site assessment of soil structure and drainage behavior. If lab soil testing would be helpful for your goals, we can recommend what to test for and next steps based on what we find.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the solution require major construction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not always. Many problems improve with practical changes like plant placement, soil improvement, minor grading adjustments, or redirecting water sources. We will recommend the simplest effective fix first.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      <Script
        id="faq-soil-drainage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Soil and Drainage Assessment
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                If plants keep dying or areas stay wet, the issue is usually below the surface. We identify soil and
                drainage problems in Muskegon and recommend clear solutions so you stop repeating failed plantings.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Schedule Assessment
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
                >
                  View Our Work
                </a>
              </div>

              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Stop repeating failures</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Diagnose the cause so you don't keep replacing plants.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Clear priorities</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Know what matters first—and what changes will actually help.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Practical solutions</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Often simple fixes beat expensive overhauls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>When people call us</h2>
              <p>
                Repeated plant loss often comes down to water movement—too wet, too dry, or inconsistent conditions
                within the same yard. Compacted soil and poor drainage can suffocate roots even when everything looks
                fine on the surface.
              </p>
              <p>
                Replacing plants without addressing this usually leads to the same outcome—just with new plants.
              </p>

              <h3>Common symptoms</h3>
              <ul>
                <li>Standing water after rain</li>
                <li>Soggy zones that never dry out</li>
                <li>Dry patches that burn out quickly</li>
                <li>Plants that decline despite doing everything right</li>
                <li>Mulch that washes or soil that erodes</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we do</h3>
              <p className="text-earth-700 mt-2">
                We look at the root causes—not just surface symptoms.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Soil structure</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Soil type, compaction, and root-zone conditions.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Drainage behavior</p>
                  <p className="text-earth-700 text-sm mt-2">
                    How water moves after rain and where it collects.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Grading and downspouts</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Slopes, runoff paths, and water sources impacting the yard.
                  </p>
                </div>
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Plant and site match</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Whether current or planned plants fit the conditions.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-moss-200 bg-moss-50 p-6">
                <p className="font-semibold text-earth-900">Then we recommend solutions</p>
                <p className="text-earth-800 text-sm mt-2">
                  Not always major construction. Often the best fixes are placement changes, soil improvement, drainage
                  redirection, or minor grading adjustments—prioritized for impact.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
            <h2>What you leave with</h2>
            <ul className="mt-6 space-y-3 text-earth-800">
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Clear diagnosis of what is driving the problem</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Prioritized recommendations—what matters most first</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Plant selection guidance matched to moisture and sunlight</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-moss-700">✓</span>
                <span>Options you can DIY or hire us to implement</span>
              </li>
            </ul>
          </div>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/landscape-consultation-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Landscape Consultation →
              </a>
              <a
                href="/services/garden-restoration-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Garden Restoration →
              </a>
              <a
                href="/services/native-landscaping-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Native Landscaping →
              </a>
              <a
                href="/services/lawn-conversion-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Lawn Conversion →
              </a>
            </div>
          </section>

          <section className="mt-16 space-y-6">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Frequently asked questions
            </h2>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Why do my plants keep dying even when I water them?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Plant failure is often caused by water movement and root-zone conditions—too wet, too dry, compacted soil, or drainage patterns that change across the yard. Replacing plants without addressing the underlying cause often leads to the same result.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>What do you look at during a soil and drainage assessment?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                We evaluate soil type and compaction, drainage patterns after rain, grading and downspout impacts, moisture levels in the root zone, and whether plant choices match the site conditions.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Do you do soil testing?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                We start with an on-site assessment of soil structure and drainage behavior. If lab soil testing would be helpful for your goals, we can recommend what to test for and next steps based on what we find.
              </p>
            </details>

            <details className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                <span>Will the solution require major construction?</span>
                <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-earth-700 leading-relaxed">
                Not always. Many problems improve with practical changes like plant placement, soil improvement, minor grading adjustments, or redirecting water sources. We will recommend the simplest effective fix first.
              </p>
            </details>
          </section>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Find out what is actually wrong</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We will assess your soil and drainage conditions and recommend practical solutions that work—so your yard
              stops cycling through the same issues.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Schedule Assessment
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center px-8 py-4 bg-earth-50 text-moss-800 font-semibold rounded-full border border-earth-200 hover:bg-earth-100 transition-all"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
