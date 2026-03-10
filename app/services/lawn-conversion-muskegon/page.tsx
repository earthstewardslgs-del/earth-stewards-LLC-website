import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecological Lawn Transformation in West Michigan | Earth Stewards',
  description: 'Transform a high-maintenance lawn into a resilient, ecological landscape. Earth Stewards helps West Michigan homeowners improve soil health, reduce chemical inputs, and create beautiful, low-maintenance lawns.',
  keywords: 'ecological lawn care, lawn transformation, sustainable lawn, West Michigan lawn care, organic lawn care, soil health, lawn alternatives',
}

export default function EcologicalLawnPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-earth-50">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-earth-900">
                Ecological Lawn Transformation
              </h1>

              <p className="text-xl text-earth-700 leading-relaxed max-w-3xl mx-auto font-semibold">
                Helping West Michigan homeowners transition from high-input turf lawns to healthier, more resilient landscapes.
              </p>

              <p className="text-lg text-earth-700 max-w-3xl mx-auto">
                Many conventional lawns require constant fertilizer, irrigation, and weed control just to stay green. Over time, compacted soil and shallow root systems make lawns increasingly dependent on outside inputs.
                <br /><br />
                Earth Stewards takes a different approach. By improving soil biology, adjusting mowing and watering practices, and introducing resilient plant communities, lawns can become healthier, more beautiful, and far less demanding to maintain.
              </p>

              <p className="text-earth-600">
                Serving Muskegon, Spring Lake, Grand Haven, and surrounding West Michigan communities.
              </p>

              <div className="pt-4">
                <a
                  href="/services/landscape-consultation-muskegon?type=consulting"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all shadow-lg"
                >
                  Schedule Strategic Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Common Lawn Frustrations */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
              Why Conventional Lawns Become High Maintenance
            </h2>

            <p className="text-earth-700 text-lg mb-6">
              Many lawn problems begin beneath the surface. When soil health declines, lawns become dependent on fertilizers, irrigation, and chemical treatments. Understanding <a href="/services/soil-drainage-assessment" className="text-moss-700 hover:underline font-semibold">soil and drainage problems in West Michigan landscapes</a> is often the first step toward creating a more resilient lawn.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-3">
                <li className="flex gap-3 text-earth-700">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Constant weed pressure</span>
                </li>
                <li className="flex gap-3 text-earth-700">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Fertilizer dependence</span>
                </li>
                <li className="flex gap-3 text-earth-700">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Compacted soil</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3 text-earth-700">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Poor drought tolerance</span>
                </li>
                <li className="flex gap-3 text-earth-700">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Thin turf that struggles to recover</span>
                </li>
                <li className="flex gap-3 text-earth-700">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Increasing maintenance costs</span>
                </li>
              </ul>
            </div>

            <p className="text-earth-700 text-lg italic">
              These issues are often symptoms of deeper soil and ecosystem imbalance. When lawns decline despite regular care, the problem is often <a href="/services/soil-drainage-assessment" className="text-moss-700 hover:underline font-semibold">soil compaction or drainage issues beneath the surface</a>.
            </p>
          </div>
        </section>

        {/* The Ecological Approach */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
                A Different Way to Care for Lawns
              </h2>

              <p className="text-earth-700 text-lg mb-6">
                Instead of forcing turf to perform through chemical inputs, ecological lawn care focuses on improving the living system beneath the lawn. Healthy soil biology supports deeper roots, better water retention, and stronger turf resilience.
              </p>

              <div className="bg-moss-50 rounded-2xl border-2 border-moss-200 p-8">
                <h3 className="text-xl font-bold text-earth-900 mb-4">Key principles:</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-earth-800">
                    <span className="text-moss-700 mt-1">✓</span>
                    <span>Improving soil microbial activity</span>
                  </li>
                  <li className="flex gap-3 text-earth-800">
                    <span className="text-moss-700 mt-1">✓</span>
                    <span>Increasing organic matter</span>
                  </li>
                  <li className="flex gap-3 text-earth-800">
                    <span className="text-moss-700 mt-1">✓</span>
                    <span>Encouraging deeper root growth</span>
                  </li>
                  <li className="flex gap-3 text-earth-800">
                    <span className="text-moss-700 mt-1">✓</span>
                    <span>Reducing reliance on fertilizers and herbicides</span>
                  </li>
                  <li className="flex gap-3 text-earth-800">
                    <span className="text-moss-700 mt-1">✓</span>
                    <span>Supporting biodiversity within the landscape</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 30-60-90 Day Framework */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6 text-center">
              The 30–60–90 Day Ecological Lawn Transformation
            </h2>

            <p className="text-earth-700 text-lg mb-12 text-center max-w-3xl mx-auto">
              Transitioning a lawn doesn't require tearing everything out. In many cases, gradual improvements can dramatically improve lawn health while reducing long-term maintenance.
            </p>

            <div className="space-y-8">
              {/* 30 Days */}
              <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    30
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-earth-900">Soil Foundation</h3>
                    <p className="text-moss-700 font-semibold">Goal: Rebuild soil biology</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-20">
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Soil assessment</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Compost tea application</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Humic acid and seaweed amendments</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Raising mowing height to 3.5–4 inches</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Transitioning watering toward deeper, less frequent irrigation</span>
                  </li>
                </ul>
              </div>

              {/* 60 Days */}
              <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    60
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-earth-900">Strengthening the Lawn</h3>
                    <p className="text-moss-700 font-semibold">Goal: Encourage stronger turf competition</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-20">
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Overseeding thin areas</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Applying corn gluten as a natural pre-emergent</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Improving turf density</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Continued soil biology support</span>
                  </li>
                </ul>
              </div>

              {/* 90 Days */}
              <div className="bg-white rounded-2xl border border-earth-200 p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    90
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-earth-900">Long-Term Resilience</h3>
                    <p className="text-moss-700 font-semibold">Goal: Reduce inputs and stabilize the system</p>
                  </div>
                </div>
                <ul className="space-y-3 ml-20">
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Reduced fertilizer dependence</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Improved drought tolerance</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Stronger root systems</span>
                  </li>
                  <li className="flex gap-3 text-earth-700">
                    <span className="text-moss-700 mt-1">•</span>
                    <span>Fewer weeds and healthier turf</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-moss-50 border-y border-moss-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-earth-900 mb-8 text-center">
                Benefits of an Ecological Lawn
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-earth-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-earth-700">
                      <span className="text-moss-700 mt-1">✓</span>
                      <span>Fewer chemical inputs</span>
                    </li>
                    <li className="flex gap-3 text-earth-700">
                      <span className="text-moss-700 mt-1">✓</span>
                      <span>Lower long-term maintenance</span>
                    </li>
                    <li className="flex gap-3 text-earth-700">
                      <span className="text-moss-700 mt-1">✓</span>
                      <span>Improved drought resilience</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-earth-200 p-6">
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-earth-700">
                      <span className="text-moss-700 mt-1">✓</span>
                      <span>Healthier soil ecosystems</span>
                    </li>
                    <li className="flex gap-3 text-earth-700">
                      <span className="text-moss-700 mt-1">✓</span>
                      <span>Better habitat for beneficial insects</span>
                    </li>
                    <li className="flex gap-3 text-earth-700">
                      <span className="text-moss-700 mt-1">✓</span>
                      <span>Beautiful, natural lawn appearance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
              Ecological Lawn Care in West Michigan
            </h2>

            <p className="text-earth-700 text-lg mb-6">
              West Michigan lawns face unique challenges including sandy soils, heavy spring rains, and summer drought stress. Many conventional lawn care methods fail because they ignore the ecological conditions of the region.
            </p>

            <p className="text-earth-700 text-lg">
              Earth Stewards works with the natural conditions of West Michigan landscapes, helping homeowners improve soil health and create lawns that thrive in the local environment. Our approach recognizes that West Michigan lawns require strategies adapted to regional soil types, climate patterns, and native ecosystem dynamics. By working with West Michigan's natural systems rather than against them, we help create lawns that are both beautiful and sustainable.
            </p>
          </div>
        </section>

        {/* When to Consider */}
        <section className="py-16 bg-white border-y border-earth-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-earth-900 mb-8">
                When Homeowners Consider Ecological Lawn Care
              </h2>

              <ul className="space-y-4">
                <li className="flex gap-3 text-earth-700 text-lg">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Lawns requiring constant fertilizer</span>
                </li>
                <li className="flex gap-3 text-earth-700 text-lg">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Persistent weed pressure</span>
                </li>
                <li className="flex gap-3 text-earth-700 text-lg">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Compacted or unhealthy soil</span>
                </li>
                <li className="flex gap-3 text-earth-700 text-lg">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Lawns struggling in drought</span>
                </li>
                <li className="flex gap-3 text-earth-700 text-lg">
                  <span className="text-moss-700 mt-1">•</span>
                  <span>Homeowners wanting lower maintenance landscapes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-10 bg-white rounded-2xl border border-earth-200 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-earth-900 mb-4">
                Start with a Strategic Consultation
              </h3>
              <p className="text-earth-700 mb-8 max-w-3xl mx-auto">
                Every lawn and landscape is different. A <a href="/services/landscape-consultation-muskegon?type=consulting" className="text-moss-700 hover:underline font-semibold">Strategic Consultation</a> helps identify the underlying conditions affecting lawn health and outlines practical steps for long-term ecological improvement.
              </p>
              <a
                href="/services/landscape-consultation-muskegon?type=consulting"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all shadow-lg"
              >
                Schedule Strategic Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-earth-50 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-earth-900 mb-6">
              Related services
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/landscape-consultation-muskegon?type=consulting"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Strategic Consultation →
              </a>
              <a
                href="/services/native-landscaping-muskegon"
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-earth-200 text-moss-700 font-semibold hover:bg-moss-50 transition"
              >
                Native Landscaping →
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
