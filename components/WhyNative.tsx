'use client'

export default function WhyNative() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20M12,8A3,3 0 0,0 9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11A3,3 0 0,0 12,8Z" />
        </svg>
      ),
      title: 'Start With Observation',
      description:
        'Before making changes, we take time to understand how a landscape functions. Soil conditions, drainage patterns, sunlight, and existing plant communities all tell a story about what the land needs.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3M7,7.25V11.5C7,11.5 9,10 11,10C13,10 13,12 16,12C18,12 18,11 18,11V6.87C17.5,7.21 16.6,7.5 16,7.5C14,7.5 14,6.25 11,6.25C9.4,6.25 8.07,6.75 7,7.25Z" />
        </svg>
      ),
      title: 'Work With the Living System',
      description:
        'Rather than forcing landscapes into rigid designs, we work with natural patterns already present on the site. Plant communities, soil health, and water movement guide our decisions.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
        </svg>
      ),
      title: 'Stewardship Over Time',
      description:
        'Healthy landscapes grow and evolve. Our goal is to guide landscapes toward stability and resilience so they become easier to care for while supporting the broader ecosystem.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-moss-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grain"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-200 organic-blob-2 blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
            Our Approach to Landscape Stewardship
          </h2>
          <p className="text-xl text-earth-700 mb-6">
            Every landscape provides something—shade, beauty, habitat, clean water, living soil. At Earth Stewards, our work begins with a sense of gratitude for what the land already offers.
          </p>
          <p className="text-xl text-earth-700">
            Landscape stewardship, to us, means caring for the living systems that support the places we call home. By working with natural processes—healthy soil, water movement, and resilient plant communities—we help landscapes thrive while giving something back to the earth that sustains us.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-moss-100 text-moss-700 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-earth-700 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conservation projects link */}
        <div className="text-center mt-16 mb-6">
          <p className="text-sm text-earth-500">
            We also collaborate on community and conservation projects —{' '}
            <a 
              href="/conservation-projects" 
              className="text-earth-500 hover:text-moss-700 underline transition-colors"
            >
              implementation partnerships →
            </a>
          </p>
        </div>

        {/* About page link */}
        <div className="text-center mt-8">
          <p className="text-base text-earth-700">
            Curious why we approach landscapes this way?{' '}
            <a 
              href="/about" 
              className="text-earth-700 hover:text-moss-700 hover:underline transition-colors"
            >
              Learn about Earth Stewards →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
