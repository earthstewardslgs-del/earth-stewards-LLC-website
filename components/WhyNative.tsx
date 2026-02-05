'use client'

export default function WhyNative() {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20M12,8A3,3 0 0,0 9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11A3,3 0 0,0 12,8Z" />
        </svg>
      ),
      title: 'Water Conservation',
      description:
        'Native plants are adapted to local rainfall patterns, requiring up to 60% less watering once established.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.5,17L9.5,12L14.5,7L16,8.5L12.5,12L16,15.5L14.5,17M8.5,17L3.5,12L8.5,7L10,8.5L6.5,12L10,15.5L8.5,17M21,10V9L15,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H11V19.13L11.13,19H5V5H15V10H21Z" />
        </svg>
      ),
      title: 'Low Maintenance',
      description:
        'Spend less time on yard work. Native landscapes need minimal mowing, fertilizing, and pest control.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3M7,7.25V11.5C7,11.5 9,10 11,10C13,10 13,12 16,12C18,12 18,11 18,11V6.87C17.5,7.21 16.6,7.5 16,7.5C14,7.5 14,6.25 11,6.25C9.4,6.25 8.07,6.75 7,7.25Z" />
        </svg>
      ),
      title: 'Supports Pollinators',
      description:
        'Native plants provide essential food and habitat for local bees, butterflies, and other beneficial insects.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.5,20Q4.22,20 2.61,18.43 1,16.85 1,14.58 1,12.63 2.17,11.1 3.35,9.57 5.25,9.15 5.88,6.85 7.75,5.43 9.63,4 12,4 14.93,4 16.96,6.04 19,8.07 19,11 20.73,11.2 21.86,12.5 23,13.78 23,15.5 23,17.38 21.69,18.69 20.38,20 18.5,20M12,10.5 14,12.5 12,14.5 11,13.5 11,18 13,18 13,13.5 12,12.5M5,9Q6.25,9 7.13,9.88 8,10.75 8,12L6,12Q6,11.2 5.41,10.6 4.81,10 4,10 3.2,10 2.6,10.6 2,11.2 2,12 2,12.8 2.6,13.4 3.2,14 4,14L4,16Q2.35,16 1.17,14.83 0,13.65 0,12 0,10.35 1.17,9.17 2.35,8 4,8Z" />
        </svg>
      ),
      title: 'Year-Round Beauty',
      description:
        'Four-season interest with spring blooms, summer color, fall foliage, and winter structure.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z" />
        </svg>
      ),
      title: 'Reduces Chemicals',
      description:
        "Native plants resist local pests and diseases naturally, eliminating the need for harmful pesticides.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
        </svg>
      ),
      title: 'Increases Property Value',
      description:
        'Professional native landscaping enhances curb appeal and can increase property values by 15-20%.',
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
            Why Choose Native Landscaping?
          </h2>
          <p className="text-xl text-earth-700">
            Native plants aren't just beautiful—they're the smartest choice for
            your property and the environment
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Stats bar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl font-bold text-moss-700 mb-2">
                60%
              </div>
              <div className="text-earth-700">Less Water Usage</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-moss-700 mb-2">
                80%
              </div>
              <div className="text-earth-700">Less Maintenance</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-moss-700 mb-2">
                3x
              </div>
              <div className="text-earth-700">More Pollinators</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-moss-700 mb-2">
                20%
              </div>
              <div className="text-earth-700">Property Value Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
