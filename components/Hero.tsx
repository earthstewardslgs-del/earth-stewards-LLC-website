'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with grain texture */}
      <div className="absolute inset-0 grain">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-earth-50 to-moss-50"></div>
      </div>

      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-moss-200/30 organic-blob blur-3xl"></div>
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-sage-200/30 organic-blob-2 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-earth-900 leading-tight text-balance animate-fade-in-up">
                Beautiful Landscapes.{' '}
                <span className="text-moss-700">Healthy Ecosystems.</span>{' '}
                <span className="text-sage-700">Lasting Value.</span>
              </h1>
              <p className="text-lg sm:text-xl text-earth-700 leading-relaxed max-w-xl animate-fade-in-up delay-200">
                Professional native landscape design and installation serving
                Muskegon and Ottawa Counties. We create sustainable,
                low-maintenance gardens that support local ecosystems and
                enhance your property.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#schedule"
                className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Schedule Consultation
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full border-2 border-moss-600 hover:bg-moss-50 transition-all hover:shadow-lg"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-scale-in delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/images/hero-project.jpg"
                alt="Native landscape installation project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sage-300/40 organic-blob -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-moss-300/40 organic-blob-2 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-earth-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
