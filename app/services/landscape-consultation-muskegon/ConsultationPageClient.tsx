'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const faqItems = [
  {
    q: "What's the difference between a Site Assessment and Strategic Consulting?",
    a: "A Site Assessment ($75) is focused on determining project scope and rough budget direction — primarily for people ready to hire installation work soon. Strategic Consulting ($225) is a deeper session covering soil, drainage, plant strategy, and long-term planning. It includes a written summary, plant suggestions, and a full recording, designed for property owners who want clarity before making changes.",
  },
  {
    q: 'Is the Site Assessment fee credited toward a project?',
    a: 'Yes. The $75 Site Assessment fee is credited toward any project you hire us for.',
  },
  {
    q: 'Do you provide a recording of the Strategic Consulting Session?',
    a: 'Yes—Strategic Consulting includes a full session recording delivered after the visit, plus a written summary with plant suggestions. You can revisit the plan while working on the yard without needing to take notes during the conversation.',
  },
  {
    q: 'Do I need a consultation before landscaping work?',
    a: 'Not always, but it helps prevent unnecessary work and makes sure changes fit your site conditions. Many clients use a Site Assessment to clarify direction before investing in installation.',
  },
  {
    q: 'Will you recommend plants for my yard?',
    a: 'Yes. Strategic Consulting includes written plant suggestions that match your soil, light, moisture, and maintenance comfort level — native, traditional, or a mix — based on your goals and the site.',
  },
  {
    q: 'Can I do the work myself after the visit?',
    a: 'Absolutely. Many homeowners use Strategic Consulting as a roadmap and implement improvements gradually on their own. If you want help with execution, we can also outline done-for-you options.',
  },
  {
    q: 'How long does each visit take?',
    a: 'A Site Assessment typically takes 45–60 minutes. Strategic Consulting runs 1.5 to 2 hours depending on property size and how many areas we work through together.',
  },
  {
    q: "What if I'm not ready to hire work yet?",
    a: "That's completely fine. Many people book Strategic Consulting specifically to avoid making expensive mistakes. The goal is clarity, not commitment.",
  },
  {
    q: 'Do you work in Spring Lake, Grand Haven, and Norton Shores?',
    a: 'Yes. We serve Muskegon, Norton Shores, Spring Lake, Grand Haven, and surrounding West Michigan communities. Contact us to confirm coverage for your specific location.',
  },
]

export default function ConsultationPageClient() {
  const assessmentRef = useRef<HTMLDivElement>(null)
  const consultingRef = useRef<HTMLDivElement>(null)
  const params = useSearchParams()
  const selectedType = params.get('type')
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (!selectedType) return
    setSelected(selectedType)

    if (selectedType === 'assessment' && assessmentRef.current) {
      assessmentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    if (selectedType === 'consulting' && consultingRef.current) {
      consultingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [selectedType])

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <Navigation />

      <Script
        id="faq-landscape-consultation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display text-5xl font-bold text-earth-900 mb-6">
                Landscape Consultation & Strategy
              </h1>

              <p className="text-xl text-earth-700 leading-relaxed mb-6">
                Every property behaves differently. We walk your site together, interpret what the landscape is doing, and help you make grounded decisions — whether you're preparing to hire work or want a long-term plan before making changes.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Norton Shores, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Schedule a Visit
                </a>
                <a
                  href="/design"
                  className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
                >
                  Explore Ecological Design
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Value-building context section - MOVED BEFORE service cards */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl font-bold text-earth-900">
              Understand your property before changing it
            </h2>

            <p className="text-earth-700 text-lg">
              Most landscape problems aren't cosmetic—they're functional. Drainage issues, failing plants, and constant corrections happen when the original design didn't account for how the site actually behaves.
            </p>

            <p className="text-earth-700 text-lg">
              A consultation helps you see what your property is doing—so you can work with it instead of against it.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-earth-900 mb-6">
                We look at
              </h3>
              <ul className="space-y-3 text-earth-700">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700 flex-shrink-0">→</span>
                  <span>Where water goes during rain</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700 flex-shrink-0">→</span>
                  <span>Sun and shade patterns across seasons</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700 flex-shrink-0">→</span>
                  <span>Soil type and compaction</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700 flex-shrink-0">→</span>
                  <span>Existing plant performance</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700 flex-shrink-0">→</span>
                  <span>Maintenance expectations and comfort level</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700 flex-shrink-0">→</span>
                  <span>How you want the space to feel and function</span>
                </li>
              </ul>

              <div className="mt-8 rounded-xl bg-earth-50 border border-earth-200 p-5">
                <p className="font-semibold text-earth-900">No prep needed</p>
                <p className="text-earth-700 text-sm mt-1">
                  You don't need a plan in advance—just show us what's frustrating you.
                </p>
              </div>
            </div>

            <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
              <h3 className="text-2xl font-semibold text-earth-900 tracking-wide mb-6 border-l-4 border-moss-600 pl-3">What you leave with</h3>

              <p className="text-xs font-semibold text-moss-700 uppercase tracking-widest mb-3">After a Site Assessment</p>
              <ul className="space-y-3 text-earth-800 mb-8">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>What to fix first and what can wait</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>What not to spend money on</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Whether adjustment, restoration, or redesign makes sense</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Clarity on next project steps</span>
                </li>
              </ul>

              <div className="border-t border-moss-200 pt-6">
                <p className="text-xs font-semibold text-moss-700 uppercase tracking-widest mb-3">After Strategic Consulting</p>
                <ul className="space-y-3 text-earth-800">
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>A long-term decision framework you can apply for years</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Written summary with plant suggestions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Full session recording — revisit the plan anytime</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>DIY-friendly guidance or done-for-you options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Two Options Section - NOW AFTER VALUE-BUILDING */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-earth-900 mb-4">
                Choose the right consultation for your needs
              </h2>
              <p className="text-earth-700 max-w-2xl mx-auto">
                Whether you're ready to move forward with installation or need strategic direction first, we have an option that fits.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Site Assessment Card */}
              <div
                ref={assessmentRef}
                className={`bg-white rounded-3xl border-2 p-8 shadow-lg transition-all ${
                  selected === 'assessment' ? 'ring-2 ring-moss-600 ring-offset-4' : 'border-earth-200'
                }`}
              >
                <h3 className="text-3xl font-bold text-earth-900 mb-3">
                  Site Assessment
                </h3>

                <p className="text-sm font-semibold text-moss-700 mb-4">
                  Best for: preparing to move forward with installation
                </p>

                <p className="text-earth-700 mb-6">
                  This visit determines scope, priorities, and rough cost direction if you're considering hiring us for work. It's focused on next steps — not long-term planning.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Know what should happen first</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Understand rough budget direction</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Confirm we're the right fit</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Move toward installation</span>
                  </li>
                </ul>

                <div className="border-t border-earth-200 pt-6 mb-6">
                  <p className="text-3xl font-bold text-earth-900 mb-2">$75</p>
                  <p className="text-sm text-earth-600">
                    Credited toward project cost if you move forward
                  </p>
                </div>

                <a
                  href="/?service=assessment#schedule"
                  className="block w-full px-6 py-3 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all text-center"
                >
                  Schedule Assessment
                </a>

                <p className="text-sm text-earth-600 mt-4 text-center">
                  This visit clarifies whether a project should move forward and what it would involve.
                </p>
              </div>

              {/* Strategic Consulting Card */}
              <div
                ref={consultingRef}
                className={`bg-white rounded-3xl border-2 p-8 shadow-lg transition-all ${
                  selected === 'consulting' ? 'ring-2 ring-moss-600 ring-offset-4' : 'border-earth-200'
                }`}
              >
                <h3 className="text-3xl font-bold text-earth-900 mb-3">
                  Strategic Landscape Consulting
                </h3>

                <p className="text-sm font-semibold text-moss-700 mb-4">
                  Best for: property owners who want long-term strategy before making changes
                </p>

                <p className="text-earth-700 mb-6">
                  This session is focused on understanding how your landscape functions — including soil, drainage, sunlight, and long-term goals — so you can make confident decisions with a clear roadmap.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Diagnose why issues are happening</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Develop a long-term strategy (not trial-and-error fixes)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Ask questions freely — we adapt to your goals</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Written summary with plant suggestions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-moss-700 mt-0.5">✓</span>
                    <span className="text-earth-700">Full session recording for future reference</span>
                  </li>
                </ul>

                <div className="border-t border-earth-200 pt-6 mb-6">
                  <p className="text-3xl font-bold text-earth-900 mb-2">$225</p>
                  <p className="text-sm text-earth-600 mb-2">
                    Strategic Landscape Consulting Session
                  </p>
                  <p className="text-sm text-moss-700 font-semibold">
                    50% credited toward formal ecological design (if pursued)
                  </p>
                </div>

                <a
                  href="/?service=consulting#schedule"
                  className="block w-full px-6 py-3 bg-earth-900 text-white font-semibold rounded-full hover:bg-earth-800 transition-all text-center"
                >
                  Book Consulting Session
                </a>

                <p className="text-sm text-earth-600 mt-4 text-center">
                  This session provides strategic direction — not installation pricing or scaled design drawings.
                </p>
              </div>
            </div>

            {/* Design Link Section */}
            <div className="max-w-3xl mx-auto mt-16 p-8 bg-moss-50 rounded-2xl border-2 border-moss-200 text-center">
              <h3 className="text-2xl font-bold text-earth-900 mb-4">
                Looking for a full design plan?
              </h3>
              <p className="text-earth-700 mb-6">
                If your project needs a documented planting plan — including a layout, plant matrix, plant recommendations, and an installation estimate — explore our Ecological Landscape Design service.
              </p>
              <a
                href="/design"
                className="inline-flex items-center text-moss-700 hover:text-moss-800 font-semibold hover:underline transition-colors"
              >
                Ecological Landscape Design →
              </a>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Get Clear Direction For Your Yard
            </h3>
            <p className="text-earth-700 mb-6 max-w-3xl mx-auto">
              Whether you need a quick read on priorities or a long-term strategy session for your property, we'll help you understand your landscape and make confident decisions from there.
            </p>
            <div className="text-earth-600 text-sm mb-8 max-w-xl mx-auto space-y-1">
              <p>Hiring a project soon → Site Assessment</p>
              <p>Want to understand the land first → Strategic Consulting</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/?service=assessment#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Schedule Assessment
              </a>
              <a
                href="/?service=consulting#schedule"
                className="inline-flex items-center px-8 py-4 bg-earth-900 text-white font-semibold rounded-full hover:bg-earth-800 transition-all"
              >
                Book Consulting Session
              </a>
            </div>
          </div>

          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="font-display font-bold text-3xl text-earth-900">FAQ</h2>
              <p className="text-earth-700 mt-2">
                Quick answers about landscape consultations in Muskegon and West Michigan.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-2xl border border-earth-200 p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-earth-900 flex items-center justify-between">
                    <span>{item.q}</span>
                    <span className="text-moss-700 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-earth-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}
