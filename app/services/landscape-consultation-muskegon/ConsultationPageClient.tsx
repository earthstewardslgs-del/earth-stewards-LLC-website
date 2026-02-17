'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const faqItems = [
  {
    q: "What's the difference between a Site Assessment and a Consulting Session?",
    a: "A Site Assessment is a shorter visit focused on determining project scope and priorities—primarily for people considering hiring us for work. A Consulting Session is a longer, deeper engagement covering soil, drainage, plant strategy, and long-term planning. It ends with a full recording delivered to you, and is designed for homeowners who want to understand their property well enough to make decisions independently.",
  },
  {
    q: 'Is the Site Assessment fee credited toward a project?',
    a: 'Yes. The $75 Site Assessment fee is credited toward any project you hire us for. It is not a separate charge on top of project costs.',
  },
  {
    q: 'Do you provide a recording of the Consulting Session?',
    a: 'Yes—the Consulting Session includes a full recording delivered after the visit. You can revisit the plan while working on the yard without needing to take notes during the conversation.',
  },
  {
    q: 'Do I need a consultation before landscaping work?',
    a: 'Not always, but it helps prevent unnecessary work and makes sure changes fit your site conditions. Many clients use a Site Assessment to clarify long-term direction before investing in changes.',
  },
  {
    q: 'Will you recommend plants for my yard?',
    a: 'Yes. We suggest plant options that match your soil, light, moisture, and maintenance comfort level—native, traditional, or a mix—based on your goals and the site.',
  },
  {
    q: 'Can I do the work myself after the visit?',
    a: 'Absolutely. Many homeowners use the Consulting Session as a roadmap and implement improvements gradually on their own. If you want help with execution, we can also outline done-for-you options.',
  },
  {
    q: 'What if my main issue is drainage or plants keep dying?',
    a: 'If the core issue is persistent wet areas, standing water, or repeated plant failure, a Soil and Drainage Assessment may be the better starting point. We will tell you what makes the most sense.',
  },
  {
    q: 'How long does each visit take?',
    a: 'A Site Assessment typically takes 45–60 minutes. A Consulting Session runs 1.5 to 2 hours depending on property size and how many areas we work through together.',
  },
  {
    q: "What if I'm not ready to hire work yet?",
    a: "That's completely fine. Many people book consulting specifically to avoid making expensive mistakes or unnecessary projects. The goal is clarity, not commitment.",
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
Professional Landscape Consultation
</h1>

              <p className="text-xl text-earth-700 leading-relaxed mb-6">
This visit is for clarity. We walk the property together, interpret what the site is doing, and help you understand your landscape well enough to make confident decisions—whether you hire us or move forward on your own.
</p>

              <p className="text-earth-700 max-w-3xl mx-auto">
                A landscape consultation gives you the interpretive expertise to read your own property—so the decisions you make are grounded in what the site actually needs.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Norton Shores, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/?service=assessment#schedule"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Schedule a Visit
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
                  <p className="font-semibold text-earth-900">Clarity before cost</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Avoid spending money on plants or projects that won't hold up long-term.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Work with site conditions</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Use your property's natural patterns to your advantage.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Lower effort over time</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Better decisions now prevent constant correction later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opening context section */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl font-bold text-earth-900">
              Understand your property before changing it
            </h2>
            <p className="text-earth-700 text-lg">
              Most landscape problems don't come from plants — they come from decisions made without understanding the site.
            </p>
            <p className="text-earth-700 text-lg">
              Drainage issues, dying plants, constant maintenance, overgrowth, and repeated "fixes" usually trace back to working against conditions instead of with them.
            </p>
            <p className="text-earth-700 text-lg">
              We offer two types of visits depending on what you need right now.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-moss-600 pl-4">
                <h3 className="text-xl font-bold text-earth-900">Site Assessment</h3>
                <p className="text-moss-700 font-semibold text-sm mt-1">Planning a project with us</p>
              </div>
              <p className="text-earth-700">For homeowners preparing to hire work.</p>
              <p className="text-earth-600 font-medium">You want to:</p>
              <ul className="space-y-2 text-earth-700">
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Know what should happen first</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Understand rough cost direction</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Confirm we're the right fit</span></li>
                <li className="flex gap-2"><span className="text-moss-700 mt-0.5">•</span><span>Move toward installation</span></li>
              </ul>
              <p className="text-earth-600 text-sm italic">This is a starting step before a project. This visit is not for developing a full plan — it's for determining whether a project should move forward.</p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-earth-900 pl-4">
                <h3 className="text-xl font-bold text-earth-900">Landscape Consulting Session</h3>
                <p className="text-earth-700 font-semibold text-sm mt-1">Understanding your land</p>
              </div>
              <p className="text-earth-700">For homeowners who want clarity before committing to work.</p>
              <p className="text-earth-600 font-medium">You want to:</p>
              <ul className="space-y-2 text-earth-700">
                <li className="flex gap-2"><span className="text-earth-500 mt-0.5">•</span><span>Stop guessing why things struggle</span></li>
                <li className="flex gap-2"><span className="text-earth-500 mt-0.5">•</span><span>Understand drainage, soil, and light patterns</span></li>
                <li className="flex gap-2"><span className="text-earth-500 mt-0.5">•</span><span>Make confident long-term decisions</span></li>
                <li className="flex gap-2"><span className="text-earth-500 mt-0.5">•</span><span>Possibly implement changes yourself</span></li>
              </ul>
              <p className="text-earth-700 text-sm font-medium">You leave with a recorded walkthrough and a clear plan — whether you hire us or not.</p>
              <p className="text-earth-600 text-sm italic">This is not a project quote — it's professional landscape advice.</p>
            </div>
          </div>
        </section>

        {/* Service tier selection */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-earth-900 mb-4 text-center">
              Choose the level of guidance you need
            </h2>
            <p className="text-earth-700 text-center max-w-3xl mx-auto mb-8">
              Not everyone needs the same level of help. Some people just need to know whether a project makes sense. Others want to understand their property deeply before making decisions. Choose the visit that fits what you're hoping to get out of the conversation.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* Card 1: Site Assessment */}
              <div
                ref={assessmentRef}
                className={`bg-earth-50 rounded-2xl border p-8 flex flex-col transition-shadow ${
                  selected === 'assessment'
                    ? 'border-earth-700 ring-2 ring-moss-600 ring-offset-4'
                    : 'border-earth-200'
                }`}
              >
                <p className="text-xs font-semibold text-moss-700 uppercase tracking-widest mb-2">Entry Visit</p>
                <h3 className="text-2xl font-bold text-earth-900 mb-1">Site Assessment</h3>
                <p className="text-earth-600 text-sm mb-2">Best for: preparing to hire work</p>
                <p className="text-earth-600 text-sm mb-6 italic">This visit is primarily for determining scope and priorities if you're considering hiring us for work.</p>
                <ul className="space-y-3 text-earth-800 flex-1">
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Walk the property together</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Identify problems and priorities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Rough cost expectations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>Credited toward future project</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-earth-200">
                  <p className="text-earth-900 font-semibold mb-4">$75 — credited if hired</p>
                  <a
                    href="/?service=assessment#schedule"
                    className="inline-flex items-center px-6 py-3 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                  >
                    Schedule Site Assessment
                  </a>
                </div>
              </div>

              {/* Card 2: Consulting Session */}
              <div
                ref={consultingRef}
                className={`bg-earth-900 rounded-2xl border p-8 flex flex-col transition-shadow ${
                  selected === 'consulting'
                    ? 'border-earth-400 ring-2 ring-moss-600 ring-offset-4'
                    : 'border-earth-800'
                }`}
              >
                <p className="text-xs font-semibold text-moss-400 uppercase tracking-widest mb-2">Planning & Strategy</p>
                <h3 className="text-2xl font-bold text-earth-50 mb-1">Landscape Consulting Session</h3>
                <p className="text-earth-400 text-sm mb-2">Best for: planning your landscape yourself</p>
                <p className="text-earth-400 text-sm mb-6">or wanting expert guidance before committing to installation</p>
                <ul className="space-y-3 text-earth-200 flex-1">
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-400">✓</span>
                    <span>Understand WHY the yard behaves the way it does</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-400">✓</span>
                    <span>Clear long-term strategy (not trial-and-error fixes)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-400">✓</span>
                    <span>Ask questions freely — we adapt to your goals</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-400">✓</span>
                    <span>Full recording so you don't have to remember everything</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-earth-700">
                  <p className="text-earth-300 text-sm mb-4">If you're unsure which plants, projects, or direction make sense, this session is designed for that stage.</p>
                  <p className="text-earth-200 font-semibold mb-4">Typically 2–3× the cost of a site assessment</p>
                  <a
                    href="/?service=consulting#schedule"
                    className="inline-flex items-center px-6 py-3 bg-white text-earth-900 font-semibold rounded-full hover:bg-earth-50 transition-all"
                  >
                    Book Consulting Session
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mt-2 mb-4 border-l-4 border-moss-600 pl-3">Read the landscape before changing it</h2>
              <p>
                Many homeowners call us after trying multiple fixes: plants that keep dying, wet areas that never
                dry out, constant trimming to keep things presentable, or beds that collapse into weeds every
                season.
              </p>
              <p>
                The issue is usually not effort—it's a mismatch between the landscape and the conditions.
                A consultation helps you understand what your yard needs so improvements hold up in West
                Michigan's climate.
              </p>

              <h3 className="text-2xl font-semibold text-earth-900 tracking-wide mt-8 mb-4 border-l-4 border-moss-600 pl-3">Common reasons people book a consultation</h3>
              <ul>
                <li>Plants keep failing and you're tired of replacing them</li>
                <li>Standing water, soggy spots, or confusing drainage patterns</li>
                <li>Beds that need constant mulching, trimming, or resetting</li>
                <li>A yard that looks okay briefly—then chaotic again</li>
                <li>Unsure whether you need maintenance, restoration, or redesign</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">What we look at during the visit</h3>
              <p className="text-earth-700 mt-2">
                We walk the property together and observe how the space functions.
              </p>

              <ul className="mt-6 space-y-3 text-earth-800">
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Sunlight exposure throughout the day</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Drainage patterns and water movement</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Soil structure and compaction</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Plant spacing and competition</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
                  <span>Recurring maintenance problem areas</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-moss-700">✓</span>
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
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
                <p className="text-xs font-semibold text-moss-700 uppercase tracking-widest mb-3">After a Consulting Session</p>
                <ul className="space-y-3 text-earth-800">
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>A long-term decision framework you can apply for years</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>DIY-friendly guidance or done-for-you options</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>A full recording of the session so you can revisit the plan while working on the yard — no note-taking required</span>
                  </li>
                </ul>
                <p className="mt-4 text-earth-600 text-sm italic">This is not a project quote — it's professional landscape advice.</p>
                <p className="mt-2 text-earth-700 text-sm">Many clients use this session even when they plan to do the work themselves.</p>
                <p className="mt-4 text-earth-700 text-sm">You don't need to prepare anything beforehand. Many properties we visit are confusing, overgrown, or feel unmanageable — that's exactly when this session is most useful.</p>
              </div>
            </div>

            <div className="prose prose-lg prose-earth max-w-none">
              <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mt-2 mb-4 border-l-4 border-moss-600 pl-3">Different goals are welcome</h2>
              <p>
                Some clients want habitat support and ecological function. Others want a cleaner, easier yard.
                Most want a balance.
              </p>
              <p>
                We're not trying to force a style—we help your property and your expectations meet in the middle.
              </p>

              <section className="space-y-4">
                <h2 className="font-display text-2xl font-bold text-earth-900">
                  Related services
                </h2>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/services/soil-drainage-assessment"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
                  >
                    Soil & Drainage Assessment →
                  </a>
                  <a
                    href="/services/garden-restoration-muskegon"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
                  >
                    Garden Restoration →
                  </a>
                  <a
                    href="/services/lawn-conversion-muskegon"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
                  >
                    Lawn Conversion →
                  </a>
                  <a
                    href="/services/landscape-maintenance-muskegon"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
                  >
                    Landscape Maintenance →
                  </a>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">
              Get Clear Direction For Your Yard
            </h3>
            <p className="text-earth-700 mb-6 max-w-3xl mx-auto">
              Whether you need a quick read on priorities or a long-term strategy session for your property, we'll help you understand your landscape and make confident decisions from there.
            </p>
            <div className="text-earth-600 text-sm mb-8 max-w-xl mx-auto space-y-1">
              <p>Hiring a project soon → Site Assessment</p>
              <p>Want to understand the land first → Consulting Session</p>
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
