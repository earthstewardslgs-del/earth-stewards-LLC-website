import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Soil and Drainage Problems in West Michigan Landscapes | Earth Stewards',
  description:
    'Learn why plants fail in wet or compacted soil and how drainage problems develop in West Michigan landscapes. Earth Stewards helps diagnose root causes and guide long-term ecological solutions.',
  keywords:
    'soil problems Muskegon, drainage problems West Michigan, soil compaction, standing water yard, wet soil solutions, plant failure causes',
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
                Understanding Soil and Drainage Problems
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                If plants keep dying or areas stay wet, the issue is usually below the surface. Many landscape problems begin with soil structure, compaction, or water movement across the property.
                <br /><br />
                At Earth Stewards, we help homeowners understand what is actually happening beneath their landscape so the right long-term solutions can be chosen.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/services/landscape-consultation-muskegon?type=consulting"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Schedule Strategic Consultation
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
                  <p className="font-semibold text-earth-900">Diagnosing the real cause</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Drainage problems rarely come from one issue. Soil structure, compaction, grading, and water flow often work together.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Why quick fixes fail</p>
                  <p className="text-earth-700 text-sm mt-1">
                    French drains and surface fixes sometimes treat symptoms rather than the underlying cause.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Understanding your property</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Water movement, soil health, and plant selection all influence long-term landscape success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mt-2 mb-4 border-l-4 border-moss-600 pl-3">When people call us</h2>
              <p>
                When plants repeatedly fail, the cause is often underground — water movement, soil compaction, or drainage patterns that the surface doesn't reveal.
              </p>
              <p>
                We diagnose how the site actually behaves so solutions address the cause instead of repeating replacements.
              </p>

              <h3 className="text-2xl font-semibold text-earth-900 tracking-wide mt-8 mb-4 border-l-4 border-moss-600 pl-3">Common symptoms</h3>
              <ul>
                <li>Standing water after rain</li>
                <li>Soggy zones that never dry out</li>
                <li>Dry patches that burn out quickly</li>
                <li>Plants that decline despite doing everything right</li>
                <li>Mulch that washes or soil that erodes</li>
              </ul>
            </div>


            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-earth-900">What we do</h3>
                <p className="text-earth-700 mt-2">
                  We look at the root causes—not just surface symptoms.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                    <p className="font-semibold text-earth-900">Soil structure</p>
                    <p className="text-earth-700 text-sm mt-2">
                      Compaction, drainage capacity, and how roots interact with soil.
                    </p>
                  </div>
                  <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                    <p className="font-semibold text-earth-900">Water movement</p>
                    <p className="text-earth-700 text-sm mt-2">
                      Where water flows, pools, and infiltrates during and after rain.
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

              <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
                <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mb-4 border-l-4 border-moss-600 pl-3">What a Strategic Consultation Helps You Understand</h2>
                <ul className="mt-6 space-y-3 text-earth-800">
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>What is actually driving the moisture or drainage problem</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Which issues matter most to address first</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>How soil structure and water movement influence plant success</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Practical options for improving the landscape long-term</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Help Section */}
          <section className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 shadow-sm">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
              How We Help
            </h2>
            <p className="text-earth-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              The best way to understand drainage or soil problems is through a Strategic Consultation, where we evaluate how the entire property functions — including sun exposure, soil structure, water movement, and plant performance.
              <br /><br />
              Rather than focusing on a single symptom, the consultation looks at the landscape as a system so solutions work long-term.
            </p>
            <div className="text-center">
              <a
                href="/services/landscape-consultation-muskegon?type=consulting"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all shadow-lg"
              >
                Schedule Strategic Consultation
              </a>
            </div>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="font-display text-2xl font-bold text-earth-900">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
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
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Understand what's actually happening beneath your landscape</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              A Strategic Consultation helps you see how soil, water, and plant communities interact—so you can make informed decisions about long-term solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/services/landscape-consultation-muskegon?type=consulting"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Schedule Strategic Consultation
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
