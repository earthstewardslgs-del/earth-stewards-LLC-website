'use client'

export default function WhyNative() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20M12,8A3,3 0 0,0 9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11A3,3 0 0,0 12,8Z" />
        </svg>
      ),
      title: 'Lower Water Needs',
      description:
        'Uses rainfall more effectively and often requires minimal irrigation after establishment.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.5,17L9.5,12L14.5,7L16,8.5L12.5,12L16,15.5L14.5,17M8.5,17L3.5,12L8.5,7L10,8.5L6.5,12L10,15.5L8.5,17M21,10V9L15,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H11V19.13L11.13,19H5V5H15V10H21Z" />
        </svg>
      ),
      title: 'Less Work Over Time',
      description:
        'Designed to stabilize and become easier to manage each season.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3M7,7.25V11.5C7,11.5 9,10 11,10C13,10 13,12 16,12C18,12 18,11 18,11V6.87C17.5,7.21 16.6,7.5 16,7.5C14,7.5 14,6.25 11,6.25C9.4,6.25 8.07,6.75 7,7.25Z" />
        </svg>
      ),
      title: 'Supports Pollinators & Wildlife',
      description:
        'Creates habitat for butterflies, birds, and beneficial insects.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      ),
      title: 'Adds Lasting Property Appeal',
      description:
        'A landscape that looks intentional, healthy, and cared for year-round.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
      ),
      title: 'Natural & Sincere',
      description:
        'We care deeply about the landscapes we work in and the people who live with them. Guided by respect for natural systems and craftsmanship, we aim to leave every space healthier than we found it.',
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
            Why Work With Us
          </h2>
          <p className="text-xl text-earth-700">
            Landscapes designed to stay manageable and get better over time
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
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
        <div className="text-center mt-16 mb-12">
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

        {/* Detailed Benefits List */}
        <div className="bg-earth-800 text-white rounded-3xl p-8 md:p-12 space-y-8">
          <div className="border-b border-earth-700 pb-8">
            <h3 className="text-2xl font-display font-bold mb-3">Water Conservation</h3>
            <p className="text-earth-200 leading-relaxed">
              Landscapes designed for local conditions rely more on rainfall and less on irrigation once established — helping reduce watering needs during typical seasons.
            </p>
          </div>

          <div className="border-b border-earth-700 pb-8">
            <h3 className="text-2xl font-display font-bold mb-3">Lower Maintenance</h3>
            <p className="text-earth-200 leading-relaxed">
              Spend less time mowing, fertilizing, and managing recurring problems. A well-planned landscape stabilizes and becomes easier to care for each year.
            </p>
          </div>

          <div className="border-b border-earth-700 pb-8">
            <h3 className="text-2xl font-display font-bold mb-3">Supports Pollinators</h3>
            <p className="text-earth-200 leading-relaxed">
              Flowering plants provide food and habitat for butterflies, bees, birds, and other beneficial wildlife that help keep ecosystems balanced.
            </p>
          </div>

          <div className="border-b border-earth-700 pb-8">
            <h3 className="text-2xl font-display font-bold mb-3">Year-Round Interest</h3>
            <p className="text-earth-200 leading-relaxed">
              Thoughtful plant selection keeps the landscape visually appealing across seasons — from spring growth to winter structure.
            </p>
          </div>

          <div className="border-b border-earth-700 pb-8">
            <h3 className="text-2xl font-display font-bold mb-3">Reduces Chemical Use</h3>
            <p className="text-earth-200 leading-relaxed">
              Plants suited to the region are naturally more resilient, reducing the need for fertilizers and pest treatments.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold mb-3">Improves Property Appeal</h3>
            <p className="text-earth-200 leading-relaxed">
              A healthy, intentional landscape enhances curb appeal and creates an inviting outdoor space people enjoy using.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
