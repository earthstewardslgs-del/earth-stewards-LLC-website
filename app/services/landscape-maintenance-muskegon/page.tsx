import type { Metadata } from 'next'
import Script from 'next/script'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Landscape Maintenance in Muskegon, MI | Earth Stewards LLC',
  description:
    'Landscape maintenance in Muskegon, MI that reduces work over time—seasonal cleanup, pruning, weeding, soil care, and invasive control with a long-term plan.',
  keywords:
    'landscape maintenance Muskegon, yard maintenance Muskegon MI, seasonal cleanup, pruning services, weed management, invasive species removal, garden care West Michigan',
}

export default function LandscapeMaintenancePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What’s different about your landscape maintenance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We focus on long-term stability, not just trimming. That means pruning for plant health, preventing weeds and invasives from taking over, improving soil when needed, and making recommendations that reduce maintenance over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you maintain traditional gardens as well as native or ecological landscapes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We maintain traditional gardens, mixed plantings, and ecological/native-forward landscapes. We tailor the plan to your goals, site conditions, and the level of maintenance you want long-term.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer seasonal cleanups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Spring and fall cleanups are available, and we time cutting and removal in ways that support plant health and (when applicable) pollinators and beneficial insects.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can maintenance include invasive species removal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Invasive plant control can be included as part of maintenance, especially when invasives are driving recurring problems. For major infestations, we may recommend dedicated invasive removal with follow-up visits.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do we start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We start with a site visit to review your landscape, identify the main problem drivers, and recommend a practical maintenance plan based on your goals and schedule.',
        },
      },
    ],
  }

  return (
    <>
      <Navigation />

      {/* JSON-LD FAQ for SEO */}
      <Script
        id="faq-landscape-maintenance"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-earth-50">
        {/* HERO */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Landscape Maintenance That Reduces Work Over Time
              </h1>

              <p className="text-xl text-earth-700 max-w-3xl mx-auto">
                Our maintenance focuses on stabilizing your landscape—not just keeping it trimmed. We manage growth,
                soil health, and plant balance so your yard requires less effort each season instead of more.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
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

              {/* QUICK VALUE CARDS */}
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Fewer recurring problems</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Address weeds, crowding, and soil issues at the root—so they don’t keep returning.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">Healthier plants</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Pruning and timing based on plant health—not just appearance.
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-earth-200 p-5 text-left">
                  <p className="font-semibold text-earth-900">A plan that fits you</p>
                  <p className="text-earth-700 text-sm mt-1">
                    Traditional, ecological, or mixed—built around your comfort level and time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <div className="prose prose-lg prose-earth max-w-none">
              <h2>Maintenance that supports long-term success</h2>
              <p>
                A good maintenance plan isn’t just keeping things “clean.” It’s stabilizing the landscape so it becomes
                healthier, fuller, and easier to manage year after year.
              </p>
              <p>
                We maintain both traditional gardens and ecological landscapes with an approach built around plant
                health, soil health, and realistic maintenance levels.
              </p>

              <h3>Great fit if you want…</h3>
              <ul>
                <li>A yard that looks cared for without weekly stress</li>
                <li>Help getting back on track after a few busy seasons</li>
                <li>Better results without relying on harsh chemicals</li>
                <li>Consistency and a long-term plan—not random one-off visits</li>
              </ul>
            </div>

            {/* RIGHT: SERVICES LIST */}
            <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900">Maintenance services we provide</h3>
              <p className="text-earth-700 mt-2">
                Services are tailored to your property and the type of landscape you have.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Seasonal care</p>
                  <ul className="mt-3 space-y-2 text-earth-800 text-sm">
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Spring &amp; fall cleanup</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Cutbacks &amp; timing guidance</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Bed edge refresh &amp; finishing</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Weeds &amp; invasives</p>
                  <ul className="mt-3 space-y-2 text-earth-800 text-sm">
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Targeted weed management</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Invasive species removal &amp; control</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Stabilization so it doesn’t return</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Plant health</p>
                  <ul className="mt-3 space-y-2 text-earth-800 text-sm">
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Pruning &amp; shaping for health</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Monitoring competition &amp; crowding</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Problem-solving recurring failures</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-earth-50 border border-earth-200 p-5">
                  <p className="font-semibold text-earth-900">Soil &amp; structure</p>
                  <ul className="mt-3 space-y-2 text-earth-800 text-sm">
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Soil improvement &amp; amendments</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Bed restoration &amp; overgrown recovery</li>
                    <li className="flex gap-2"><span className="text-moss-700">✓</span>Recommendations to reduce maintenance</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-sm text-earth-700">
                Want specialized care for pollinator/native-forward beds? See{' '}
                <a className="text-moss-700 hover:text-moss-900 font-semibold" href="/services/ecological-garden-care">
                  Ecological Garden Care
                </a>
                .
              </div>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="mt-14 bg-moss-50 rounded-2xl border-2 border-moss-200 p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-earth-900">Maintenance with a plan</h3>
                <p className="text-earth-700 mt-2">
                  Many landscapes become high-maintenance because the structure isn’t working—plants are crowded,
                  weeds/invasives exploit open ground, or soil is depleted.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-moss-200 p-6">
                  <p className="font-semibold text-earth-900">Step 1: Site visit</p>
                  <p className="text-earth-700 text-sm mt-2">
                    We assess what’s driving the work: growth patterns, soil health, weeds/invasives, and priorities.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-moss-200 p-6">
                  <p className="font-semibold text-earth-900">Step 2: Practical plan</p>
                  <p className="text-earth-700 text-sm mt-2">
                    A maintenance approach aligned with your goals and the time you want to spend in the yard.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-moss-200 p-6">
                  <p className="font-semibold text-earth-900">Step 3: Seasonal care</p>
                  <p className="text-earth-700 text-sm mt-2">
                    Timed visits that support plant health and prevent “resetting” the landscape each year.
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-moss-200 p-6">
                  <p className="font-semibold text-earth-900">Step 4: Less work over time</p>
                  <p className="text-earth-700 text-sm mt-2">
                    As structure improves, recurring problems drop and the landscape becomes easier to manage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-earth-900 mb-4">Start With a Site Visit</h3>
            <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
              We’ll walk the property, identify what’s driving the maintenance load, and recommend a practical plan
              that makes your yard easier to manage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
              >
                Schedule Consultation
              </a>
              <a
                href="/#projects"
                className="inline-flex items-center px-8 py-4 bg-earth-50 text-moss-800 font-semibold rounded-full border border-earth-200 hover:bg-earth-100 transition-all"
              >
                See Recent Projects
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
