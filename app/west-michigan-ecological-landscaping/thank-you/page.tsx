import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Earth Stewards LLC',
  description: 'Thank you for your consultation request. We\'ll be in touch soon.',
  robots: 'noindex, nofollow',
}

export default function ThankYouPage() {
  return (
    <>
      {/* Meta Pixel Lead Conversion Tracking */}
      <Script id="meta-pixel-lead" strategy="afterInteractive">
        {`
          if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead');
          }
        `}
      </Script>

      <main className="min-h-screen bg-earth-50">
        {/* Hero Confirmation Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Earth Stewards LLC"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>

              {/* Success Icon */}
              <div className="w-20 h-20 bg-moss-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 max-w-3xl mx-auto leading-tight">
                Thank You — Your Inquiry Has Been Received
              </h1>

              <p className="text-xl sm:text-2xl text-earth-700 max-w-3xl mx-auto leading-relaxed">
                We've received your consultation request and will review your message shortly.
              </p>

              <div className="max-w-2xl mx-auto pt-4">
                <p className="text-lg text-earth-700 leading-relaxed">
                  A member of the Earth Stewards team will follow up within 1–2 business days to learn more about your property and discuss potential next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-earth-900 mb-6">
                What Happens Next
              </h2>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <p className="text-earth-700 text-lg">
                    We review the details you shared about your property
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <p className="text-earth-700 text-lg">
                    We reach out to schedule a conversation if the project appears to be a good fit
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-moss-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <p className="text-earth-700 text-lg">
                    We discuss possible next steps for design, installation, or stewardship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reassurance Section */}
        <section className="py-16 bg-moss-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-moss-200 shadow-md">
              <p className="text-earth-700 text-lg leading-relaxed text-center">
                Earth Stewards works with properties across Muskegon, Ottawa County, and surrounding West Michigan communities to create landscapes that support beauty, habitat, and long-term ecological resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Return Navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-earth-900 text-white font-semibold rounded-full hover:bg-earth-800 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Earth Stewards
            </Link>
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
    </>
  )
}
