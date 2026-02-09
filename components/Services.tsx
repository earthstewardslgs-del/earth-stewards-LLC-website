'use client'

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.5,3.09L15,5.59L10.5,3.09L6,5.59V21.09L10.5,18.59L15,21.09L19.5,18.59V3.09M18,17.41L15,19.09L12,17.41L9,19.09L7.5,18.09V6.91L9,5.91L12,7.59L15,5.91L18,7.59V17.41Z" />
        </svg>
      ),
      title: 'Landscape Design & Installation',
      heading: 'Beautiful Landscapes That Actually Work Long-Term',
      description:
        'We design landscapes that look good now and stay manageable later. Whether you want a traditional curb appeal, a habitat-friendly space, or a mix, we match the design to your goals, time commitment, and property conditions — so you don&apos;t set up fighting your yard every season.',
      features: [
        'Site assessment and soil analysis (no plants survive)',
        'Custom design plans aligned with your maintenance comfort level',
        'Plant selection that fits your site, soil, and drainage',
        'Practical spacing and layout for long-term growth',
        'Habitat-supportive planting options (optional)',
        'Professional installation done correctly the first time',
        'Clean edging, mulching, and finishing details',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20M12,8A3,3 0 0,0 9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11A3,3 0 0,0 12,8Z" />
        </svg>
      ),
      title: 'Landscape Maintenance & Plant Care',
      heading: 'Maintenance That Makes Your Yard Easier Over Time',
      description:
        'We don&apos;t just maintain landscapes — we stabilize them. Our care approach reduces recurring problems, keeps plants healthy (not just appearing healthy), and gradually lowers the amount of work your yard needs each year.',
      features: [
        'Seasonal cleanup without harming beneficial growth',
        'Deadheading for plant health, not just appearance',
        'Invasive species removal and control',
        'Targeted weeding (not blanket spraying)',
        'Soil improvement for long-term stability',
        'Ongoing plant health monitoring',
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3L1,9L5,11.18V17.18L12,21L19,17.18V11.18L21,10.09V17H23V9L12,3M18.82,9L12,12.72L5.18,9L12,5.28L18.82,9M17,15.99L12,18.72L7,15.99V12.27L12,15L17,12.27V15.99Z" />
        </svg>
      ),
      title: 'Consultation & Guidance',
      heading: 'Practical Advice Before You Spend Money',
      description:
        'Not sure what your yard needs? We help you understand what&apos;s really failing, what will actually work on your site, and what will realistically fit in your schedule — whether you plan to DIY or hire.',
      features: [
        'On-site consultations',
        'Garden problem diagnosis',
        'Plant identification',
        'Soil and drainage evaluation (critical)',
        'DIY guidance and next steps',
        'Continued support when questions come up',
      ],
    },
  ]

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grain opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-moss-100 organic-blob blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-earth-700">
            Comprehensive native landscaping solutions from design to ongoing
            care
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-earth-50 rounded-2xl p-8 hover-lift border-2 border-transparent hover:border-moss-300 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-moss-600 text-white rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-semibold text-earth-900 mb-4">
                {service.title}
              </h3>
              <h4 className="text-lg font-semibold text-moss-700 mb-3">
                {service.heading}
              </h4>
              <p className="text-earth-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start text-earth-700 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-moss-600 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all hover:shadow-xl"
          >
            Discuss Your Project
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
        </div>
      </div>
    </section>
  )
}
