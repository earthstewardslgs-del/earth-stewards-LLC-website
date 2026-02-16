import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Invasive Plant Removal in Muskegon, MI | Earth Stewards LLC',
  description:
    'Invasive plant removal in Muskegon and West Michigan. Targeted control for buckthorn, honeysuckle, bittersweet, and knotweed that prevents regrowth.',
  keywords:
    'invasive plant removal Muskegon, invasive species removal Muskegon MI, buckthorn removal, honeysuckle removal, bittersweet removal, knotweed control, ecological landscaping Muskegon',
}

export default function InvasiveSpeciesRemovalPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What invasive plants do you remove in Muskegon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We commonly remove and control buckthorn, honeysuckle, bittersweet, knotweed, garlic mustard, and other aggressive species. During a site visit we identify what is present and recommend the safest, most effective approach for your property.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will invasives come back after removal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some species resprout or re-seed after cutting. That is why we combine removal with a follow-up strategy and, when appropriate, replacement planting so the area does not revert to the same problem.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you use chemicals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sometimes. The approach depends on the species, location, and risk of regrowth. We prefer the lowest-impact method that actually solves the problem, and we will explain options during the visit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I do after invasives are removed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The goal is to replace “empty territory” with something stable. That may mean native planting, groundcovers, mulching, or a phased restoration plan. We will recommend next steps that fit your goals and maintenance comfort level.',
        },
      },
    ],
  }

  const faqs = [
    {
      q: 'What invasive plants do you remove in Muskegon?',
      a: 'We commonly remove and control buckthorn, honeysuckle, bittersweet, knotweed, garlic mustard, and other aggressive species. During a site visit we identify what is present and recommend the safest, most effective approach for your property.',
    },
    {
      q: 'Will invasives come back after removal?',
      a: 'Some species resprout or re-seed after cutting. That is why we combine removal with a follow-up strategy and, when appropriate, replacement planting so the area does not revert to the same problem.',
    },
    {
      q: 'Do you use chemicals?',
      a: 'Sometimes. The approach depends on the species, location, and risk of regrowth. We prefer the lowest-impact method that actually solves the problem, and we will explain options during the visit.',
    },
    {
      q: 'What should I do after invasives are removed?',
      a: 'The goal is to replace “empty territory” with something stable. That may mean native planting, groundcovers, mulching, or a phased restoration plan. We will recommend next steps that fit your goals and maintenance comfort level.',
    },
  ]

  return (
    <>
      <Navigation />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        {/* Hero */}
        <section className="py-20 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
              Invasive Plant Removal
            </h1>
            <p className="mt-6 text-xl text-earth-700 max-w-3xl mx-auto">
              Some plants don’t just grow — they take territory. We remove invasive species and help the area recover
              so you aren’t fighting the same patch every season in Muskegon and across West Michigan.
            </p>
          </div>
        </section>

        {/* Two-column: context + what we do */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="prose prose-lg prose-earth max-w-none">
              <h2 className="text-2xl font-semibold text-earth-900 tracking-wide mt-2 mb-4 border-l-4 border-moss-600 pl-3">
                When people call us
              </h2>
              <p>
                Invasive plants spread each season, gradually crowding out everything else. Over time, a small patch
                becomes a high-maintenance problem zone — and pulling or cutting alone often makes it feel endless.
              </p>
              <p>
                We interrupt the cycle with targeted removal and a plan for what comes next, so the area doesn’t
                immediately revert.
              </p>

              <p className="mt-4 mb-2 font-semibold text-earth-900">Common signs you&apos;re dealing with an invasive problem:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vines or aggressive plants swallowing beds, fences, or edges</li>
                <li>Growth that returns quickly even after pulling or cutting</li>
                <li>Shaded thickets where nothing else thrives</li>
                <li>Repeated “reset work” that never seems to hold</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-8">
              <h2 className="font-display text-2xl font-semibold text-earth-900 mb-4">What we do</h2>
              <ul className="space-y-4 text-earth-700">
                {[
                  'Identify the species and the regrowth risk',
                  'Remove invasives using the lowest-impact method that actually works',
                  'Reduce re-sprouting and re-seeding pressure with follow-up strategy',
                  'Create a stable replacement plan so “empty territory” doesn’t revert',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-moss-700">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What you leave with */}
        <section className="py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-moss-200 bg-moss-50/40 p-8">
            <h3 className="text-2xl font-semibold text-earth-900 tracking-wide mt-2 mb-4 border-l-4 border-moss-600 pl-3">
              What you leave with
            </h3>
            <p className="text-earth-800 text-lg leading-relaxed">
              Clear space that stays manageable — plus a next-step plan that prevents the same invasion from returning.
              Whether that means restoration, replanting, or phased improvements, you’ll know what to do next and why.
            </p>
          </div>
        </section>

        {/* Related services */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-earth-900 mb-6">Related services</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/overgrown-yard-cleanup"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
            >
              Overgrown Yard Cleanup →
            </Link>
            <Link
              href="/services/soil-drainage-assessment"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
            >
              Soil & Drainage Assessment →
            </Link>
            <Link
              href="/services/garden-restoration-muskegon"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
            >
              Garden Restoration →
            </Link>
            <Link
              href="/services/ecological-garden-care"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
            >
              Ecological Garden Care →
            </Link>
            <Link
              href="/services/landscape-maintenance-muskegon"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
            >
              Landscape Maintenance →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-earth-900 text-earth-50 p-10">
            <h2 className="font-display text-3xl font-bold">Ready to stop re-fighting the same patch?</h2>
            <p className="mt-3 text-earth-100 text-lg max-w-2xl">
              If you suspect invasives are the driver, we&apos;ll confirm what&apos;s present and recommend the right approach for your
              property — then help you replace the problem zone with something stable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/landscape-consultation-muskegon"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-moss-600 hover:bg-moss-700 text-white font-semibold transition-colors"
              >
                Schedule a Site Consultation
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-earth-200/40 text-earth-50 hover:bg-earth-800 transition-colors"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-earth-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-semibold text-earth-900">{f.q}</span>
                  <span className="text-moss-700 group-open:rotate-90 transition-transform">›</span>
                </summary>
                <div className="mt-4 text-earth-700 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
