'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ThankYouPage() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.fbq) return

    const key = 'es_lead_fired'

    // Prevent duplicate conversion events
    if (sessionStorage.getItem(key)) return

    window.fbq('track', 'Lead')
    sessionStorage.setItem(key, '1')
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-50">
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50">
          <div className="absolute inset-0 grain opacity-30"></div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              {/* Success icon */}
              <div className="w-20 h-20 bg-moss-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-4">
                Thank You!
              </h1>
              
              <p className="text-xl text-earth-700 mb-6">
                Your message has been sent successfully.
              </p>

              <p className="text-earth-600 mb-8">
                We've received your consultation request and will get back to you within 1-2 business days. 
                We're excited to help bring your landscape vision to life!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all"
                >
                  Return to Home
                </Link>
                <Link
                  href="/#projects"
                  className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all"
                >
                  View Our Work
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-earth-200">
                <p className="text-sm text-earth-600 mb-4">Need to reach us immediately?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="tel:+12317690769"
                    className="text-moss-700 hover:text-moss-800 font-semibold"
                  >
                    📞 (231) 769-0769
                  </a>
                  <a
                    href="mailto:earthstewardslgs@gmail.com"
                    className="text-moss-700 hover:text-moss-800 font-semibold"
                  >
                    ✉️ earthstewardslgs@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
