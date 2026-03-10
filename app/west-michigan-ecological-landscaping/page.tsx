import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ecological Landscaping in West Michigan | Earth Stewards LLC',
  description: 'Create a more beautiful, functional, and ecological landscape. Ecological design, native plant integration, and long-term stewardship for West Michigan properties seeking beauty, habitat, and resilience.',
  keywords: 'ecological landscaping West Michigan, native landscaping Muskegon, ecological landscape design West Michigan, native garden design Muskegon, ecological lawn transition West Michigan, soil and drainage consultation West Michigan',
}

export default function WestMichiganLandingPage() {
  return (
    <main className="min-h-screen bg-earth-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
        <div className="absolute inset-0 grain opacity-30"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Earth Stewards LLC"
                width={120}
                height={120}
                className="mx-auto"
                priority
              />
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-900 max-w-4xl mx-auto leading-tight">
              Create a More Beautiful, Functional, and Ecological Landscape
            </h1>

            <p className="text-xl sm:text-2xl text-earth-700 max-w-3xl mx-auto leading-relaxed">
              Ecological design, native plant integration, and long-term stewardship for West Michigan properties seeking beauty, habitat, and resilience.
            </p>

            <div className="pt-6">
              <a
                href="#consultation"
                className="inline-flex items-center px-10 py-5 bg-moss-600 text-white text-lg font-semibold rounded-full hover:bg-moss-700 transition-all shadow-xl hover:shadow-2xl"
              >
                Request a Consultation
              </a>
            </div>

            <p className="text-earth-600 text-lg font-medium pt-4">
              Serving Muskegon, Ottawa County, and surrounding West Michigan communities.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-900 mb-6">
              Is This the Right Fit for Your Property?
            </h2>
            <p className="text-lg text-earth-700">
              Earth Stewards works with West Michigan property owners who want landscapes that are both beautiful and ecologically grounded.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">✓</span>
              </div>
              <p className="text-earth-700 text-lg">
                Property owners who want to reduce lawn and increase habitat
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">✓</span>
              </div>
              <p className="text-earth-700 text-lg">
                People seeking landscapes that are beautiful but less reliant on conventional high-input landscaping
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">✓</span>
              </div>
              <p className="text-earth-700 text-lg">
                West Michigan properties dealing with soil or drainage challenges
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">✓</span>
              </div>
              <p className="text-earth-700 text-lg">
                Businesses interested in more resilient and lower-maintenance landscapes
              </p>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-xl">✓</span>
              </div>
              <p className="text-earth-700 text-lg">
                Anyone wanting ecological design, installation, or long-term landscape stewardship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways We Help Section */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-900 mb-4">
              Ways We Help
            </h2>
            <p className="text-lg text-earth-700">
              From design and installation to ongoing care, we help West Michigan properties become more beautiful, functional, and ecologically resilient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ecological Landscape Design */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-earth-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-moss-600 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.5,3.09L15,5.59L10.5,3.09L6,5.59V21.09L10.5,18.59L15,21.09L19.5,18.59V3.09M18,17.41L15,19.09L12,17.41L9,19.09L7.5,18.09V6.91L9,5.91L12,7.59L15,5.91L18,7.59V17.41Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Ecological Landscape Design
              </h3>
              <p className="text-earth-700">
                Site-based design that creates beautiful, resilient landscapes adapted to your property's unique conditions and long-term vision.
              </p>
            </div>

            {/* Native Plant Installation */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-earth-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-moss-600 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20M12,8A3,3 0 0,0 9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11A3,3 0 0,0 12,8Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Native Plant Installation
              </h3>
              <p className="text-earth-700">
                Thoughtful integration of native plants that support pollinators, wildlife, and ecological health while creating beautiful seasonal interest.
              </p>
            </div>

            {/* Stewardship / Seasonal Care */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-earth-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-moss-600 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Stewardship / Seasonal Landscape Care
              </h3>
              <p className="text-earth-700">
                Ongoing care that helps landscapes establish, mature, and thrive over time—not just one-off maintenance visits.
              </p>
            </div>

            {/* Lawn Reduction */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-earth-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-moss-600 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Lawn Reduction / Ecological Lawn Transition
              </h3>
              <p className="text-earth-700">
                Reduce high-maintenance turf and transition to more resilient, ecologically valuable landscapes that require less water, fertilizer, and upkeep.
              </p>
            </div>

            {/* Soil and Drainage Guidance */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-earth-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-moss-600 text-white rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,3L1,9L5,11.18V17.18L12,21L19,17.18V11.18L21,10.09V17H23V9L12,3M18.82,9L12,12.72L5.18,9L12,5.28L18.82,9M17,15.99L12,18.72L7,15.99V12.27L12,15L17,12.27V15.99Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Soil and Drainage Guidance
              </h3>
              <p className="text-earth-700">
                Site-informed analysis of soil conditions, water movement, and drainage patterns to help you understand what's happening beneath the surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-earth-700">
              A clear, straightforward process that reduces uncertainty and helps you move forward with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-moss-100 text-moss-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Initial Consultation
              </h3>
              <p className="text-earth-700">
                We learn about your property, goals, and current landscape challenges.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-moss-100 text-moss-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Site-Informed Recommendations
              </h3>
              <p className="text-earth-700">
                We evaluate conditions and suggest the most helpful next steps based on ecology, maintenance goals, and long-term vision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-moss-100 text-moss-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Design, Installation, or Stewardship
              </h3>
              <p className="text-earth-700">
                Projects may move into design, implementation, or ongoing landscape stewardship depending on the needs of the property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Earth Stewards Section */}
      <section className="py-16 bg-moss-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-900 mb-6">
              Why Earth Stewards
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-earth-200">
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Local Knowledge of West Michigan Conditions
              </h3>
              <p className="text-earth-700">
                We understand West Michigan's sandy soils, seasonal rainfall patterns, and microclimates—and design landscapes that work with these realities.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-earth-200">
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Ecological Approach Rooted in Real Site Conditions
              </h3>
              <p className="text-earth-700">
                We study how your property behaves—water movement, sun patterns, soil structure—and create solutions that fit the land, not force it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-earth-200">
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Thoughtful Integration of Native Plants
              </h3>
              <p className="text-earth-700">
                Native plants are part of the strategy—not the only strategy. We integrate them where they make ecological and aesthetic sense.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-earth-200">
              <h3 className="text-xl font-bold text-earth-900 mb-3">
                Long-Term Stewardship, Not One-Off Landscaping
              </h3>
              <p className="text-earth-700">
                We help landscapes establish and thrive over time—supporting you through seasonal changes, phased expansions, and long-term ecological goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-900 mb-4">
              Request a Property Consultation
            </h2>
            <p className="text-lg text-earth-700">
              Tell us a little about your property and we'll follow up about next steps.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mreabyzp"
            method="POST"
            className="bg-earth-50 rounded-3xl p-8 sm:p-10 border-2 border-earth-200 shadow-lg"
          >
<input
    type="hidden"
    name="_redirect"
    value="https://earthstewardsllc.org/west-michigan-ecological-landscaping/thank-you"
  />
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-earth-900 font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:border-moss-600 focus:ring-2 focus:ring-moss-200 outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-earth-900 font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:border-moss-600 focus:ring-2 focus:ring-moss-200 outline-none transition"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-earth-900 font-semibold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:border-moss-600 focus:ring-2 focus:ring-moss-200 outline-none transition"
              />
            </div>

            {/* City / Township */}
            <div className="mb-6">
              <label htmlFor="location" className="block text-earth-900 font-semibold mb-2">
                City / Township *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:border-moss-600 focus:ring-2 focus:ring-moss-200 outline-none transition"
              />
            </div>

            {/* What kind of help */}
            <div className="mb-6">
              <label htmlFor="help-type" className="block text-earth-900 font-semibold mb-2">
                What kind of help are you looking for? *
              </label>
              <select
                id="help-type"
                name="help-type"
                required
                className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:border-moss-600 focus:ring-2 focus:ring-moss-200 outline-none transition bg-white"
              >
                <option value="">Select one...</option>
                <option value="Ecological landscape design">Ecological landscape design</option>
                <option value="Native plant installation">Native plant installation</option>
                <option value="Stewardship / garden care">Stewardship / garden care</option>
                <option value="Lawn reduction or ecological lawn transition">Lawn reduction or ecological lawn transition</option>
                <option value="Soil or drainage consultation">Soil or drainage consultation</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            {/* What stage */}
            <div className="mb-6">
              <label htmlFor="stage" className="block text-earth-900 font-semibold mb-2">
                What stage are you in? *
              </label>
              <select
                id="stage"
                name="stage"
                required
                className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:border-moss-600 focus:ring-2 focus:ring-moss-200 outline-none transition bg-white"
              >
                <option value="">Select one...</option>
                <option value="Ready to start soon">Ready to start soon</option>
                <option value="Planning in the next few months">Planning in the next few months</option>
                <option value="Exploring ideas">Exploring ideas</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-earth-900 font-semibold mb-2">
                Tell us a little about your property or goals
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:border-moss-600 focus:ring-2 focus:ring-moss-200 outline-none transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-10 py-4 bg-moss-600 text-white text-lg font-semibold rounded-full hover:bg-moss-700 transition-all shadow-lg hover:shadow-xl"
              >
                Request My Consultation
              </button>
            </div>

            <p className="text-center text-earth-600 text-sm mt-6">
              We'll review your inquiry and follow up about next steps.
            </p>
          </form>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-earth-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-earth-200 mb-2">Earth Stewards LLC</p>
          <p className="text-earth-300 text-sm">Ecological landscaping rooted in West Michigan conditions</p>
          <p className="text-earth-400 text-sm mt-4">
            <a href="mailto:earthstewardslgs@gmail.com" className="hover:text-white transition">
              earthstewardslgs@gmail.com
            </a>
            {' '} | {' '}
            <a href="tel:+12317690769" className="hover:text-white transition">
              (231) 769-0769
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}
