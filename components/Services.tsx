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
      description:
        'Custom landscape design and professional installation that works long-term. We assess your site, select appropriate plants, and install correctly — so the landscape can establish properly instead of requiring constant intervention.',
      links: [
        { text: 'Native Landscaping', href: '/services/native-landscaping-muskegon' },
        { text: 'Pollinator Gardens', href: '/services/pollinator-garden-installation' },
        { text: 'Lawn Conversion', href: '/services/lawn-conversion-muskegon' },
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20M12,8A3,3 0 0,0 9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11A3,3 0 0,0 12,8Z" />
        </svg>
      ),
      title: 'Landscape Maintenance & Plant Care',
      description:
        'Expert maintenance services that reduce recurring problems and gradually lower the amount of work your yard needs. We maintain both traditional gardens and ecological landscapes.',
      links: [
        { text: 'Landscape Maintenance', href: '/services/landscape-maintenance-muskegon' },
        { text: 'Ecological Garden Care', href: '/services/ecological-garden-care' },
      ],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3L1,9L5,11.18V17.18L12,21L19,17.18V11.18L21,10.09V17H23V9L12,3M18.82,9L12,12.72L5.18,9L12,5.28L18.82,9M17,15.99L12,18.72L7,15.99V12.27L12,15L17,12.27V15.99Z" />
        </svg>
      ),
      title: 'Consultation & Guidance',
      description:
        'Professional consultation to help you understand what your yard needs and what will realistically work for your situation — whether you plan to DIY or hire.',
      links: [
        { text: 'Landscape Consultation', href: '/services/landscape-consultation-muskegon' },
        { text: 'Soil & Drainage Assessment', href: '/services/soil-drainage-assessment' },
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
            From design and installation to ongoing care and guidance
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
              <p className="text-earth-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Links */}
              <div className="space-y-3">
                {service.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-moss-600 hover:text-moss-700 font-medium transition-colors group"
                  >
                    <span className="flex items-center">
                      {link.text}
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1"
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
                    </span>
                  </a>
                ))}
              </div>
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
