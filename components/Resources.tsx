'use client'

export default function Resources() {
  const resources = [
    {
      category: 'Plant Guides',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,2L14,6.5V17.5L19,13V2M6.5,5C4.55,5 2.45,5.4 1,6.5V21.16C1,21.41 1.25,21.66 1.5,21.66C1.6,21.66 1.65,21.59 1.75,21.59C3.1,20.94 5.05,20.5 6.5,20.5C8.45,20.5 10.55,20.9 12,22C13.35,21.15 15.8,20.5 17.5,20.5C19.15,20.5 20.85,20.81 22.25,21.56C22.35,21.61 22.4,21.59 22.5,21.59C22.75,21.59 23,21.34 23,21.09V6.5C22.4,6.05 21.75,5.75 21,5.5V7.5L21,13V19C19.9,18.65 18.7,18.5 17.5,18.5C15.8,18.5 13.35,19.15 12,20V13L12,8.5V6.5C10.55,5.4 8.45,5 6.5,5Z" />
        </svg>
      ),
      items: [
        'Native Plants for Shade Gardens',
        'Pollinator-Friendly Perennials',
        'Native Grasses for Every Season',
        'Rain Garden Plant Selection',
      ],
    },
    {
      category: 'How-To Articles',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      ),
      items: [
        'Planning Your Native Garden',
        'Best Planting Times in Michigan',
        'Seasonal Maintenance Calendar',
        'Managing Invasive Species',
      ],
    },
    {
      category: 'Video Tutorials',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
        </svg>
      ),
      items: [
        'Proper Planting Techniques',
        'Dividing Native Perennials',
        'Creating Wildlife Corridors',
        'Spring Garden Cleanup',
      ],
    },
  ]

  return (
    <section
      id="resources"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grain opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-100 organic-blob blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
            Educational Resources
          </h2>
          <p className="text-xl text-earth-700">
            Expand your knowledge of native plants and sustainable landscaping
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div
              key={resource.category}
              className="bg-earth-50 rounded-2xl p-8 border-2 border-transparent hover:border-moss-300 transition-all hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-moss-600 text-white rounded-xl flex items-center justify-center mb-6">
                {resource.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-earth-900 mb-6">
                {resource.category}
              </h3>
              <ul className="space-y-3">
                {resource.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-start text-earth-700 hover:text-moss-700 transition-colors group"
                    >
                      <svg
                        className="w-5 h-5 text-moss-600 mr-3 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-br from-moss-600 to-sage-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-3xl font-bold mb-4">
              Get Native Landscaping Tips
            </h3>
            <p className="text-moss-100 mb-8">
              Subscribe to our newsletter for seasonal planting guides, care tips,
              and exclusive offers
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-earth-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-moss-700 font-semibold rounded-full hover:bg-moss-50 transition-all hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-moss-200 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
