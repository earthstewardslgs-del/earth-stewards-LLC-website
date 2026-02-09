'use client'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-earth-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grain"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-moss-200 organic-blob-2 blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Contact info */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
              Let&apos;s Grow Something Beautiful Together
            </h2>
            <p className="text-xl text-earth-700 mb-8">
              Ready to transform your property with native landscaping? Get in
              touch for a free consultation.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-moss-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-earth-900">Phone</div>
                  <a
                    href="tel:+12317690769"
                    className="text-moss-700 hover:text-moss-800"
                  >
                    (231) 769-0769
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-moss-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-earth-900">Email</div>
                  <a
                    href="mailto:earthstewardslgs@gmail.com"
                    className="text-moss-700 hover:text-moss-800"
                  >
                    earthstewardslgs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-moss-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-earth-900">
                    Service Area
                  </div>
                  <div className="text-earth-700">
                    Muskegon & Ottawa Counties, MI
                  </div>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-white rounded-2xl p-6 border-2 border-moss-200">
              <h3 className="font-display text-xl font-bold text-earth-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-earth-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat & Sun</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div id="schedule" className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-earth-900 mb-6">
              Request a Free Consultation
            </h3>
            <form 
              action="https://formspree.io/f/mreabyzp" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Earth Stewards LLC Contact Form Submission" />
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-earth-900 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:border-moss-500 focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-earth-900 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:border-moss-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-earth-900 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:border-moss-500 focus:outline-none transition-colors"
                  placeholder="(231) 769-0769"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-semibold text-earth-900 mb-2"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:border-moss-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="design">Design & Installation</option>
                  <option value="maintenance">Maintenance Services</option>
                  <option value="consultation">Consultation Only</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-earth-900 mb-2"
                >
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-earth-200 rounded-lg focus:border-moss-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your property, goals, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all hover:shadow-xl"
              >
                Send Message
              </button>

              <p className="text-sm text-earth-600 text-center">
                We&apos;ll respond within 1-2 business days
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
