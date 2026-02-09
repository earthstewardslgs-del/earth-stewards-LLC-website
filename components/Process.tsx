'use client'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Walk the Property',
      description:
        'We meet on site, look at how the yard behaves, and talk through what\'s frustrating you and what you want it to become. You\'ll leave knowing what\'s realistic and what your options are.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Make a Plan',
      description:
        'We create a design tailored to your goals, budget, and maintenance comfort level — whether that\'s simple improvements or a full transformation.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.5,3.09L15,5.59L10.5,3.09L6,5.59V21.09L10.5,18.59L15,21.09L19.5,18.59V3.09M18,17.41L15,19.09L12,17.41L9,19.09L7.5,18.09V6.91L9,5.91L12,7.59L15,5.91L18,7.59V17.41Z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Build It Right',
      description:
        'We prepare the space properly and install plants and materials in a way that sets the landscape up for long-term success.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,7L7,12L12,17L17,12L12,7Z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Support Over Time',
      description:
        'We\'re available for follow-up care, adjustments, and questions as your landscape grows in and stabilizes.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grain opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-moss-100 organic-blob blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
            What It&apos;s Like to Work With Us
          </h2>
          <p className="text-xl text-earth-700">
            A simple, clear process so you know what to expect at every step.
          </p>
        </div>

        {/* Process steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-moss-100 text-moss-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="font-display text-6xl font-bold text-moss-200">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-display text-3xl font-bold text-earth-900">
                  {step.title}
                </h3>
                <p className="text-lg text-earth-700 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual element */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                  <img
                    src={`/images/step-${step.number}.png`}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline connector (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-1 bg-moss-200 -translate-x-1/2 -z-10"></div>
      </div>
    </section>
  )
}
