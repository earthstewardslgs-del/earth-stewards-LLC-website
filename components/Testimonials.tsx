'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Suzanne Welton',
      location: 'Grand Haven, MI',
      role: 'Homeowner',
      text: "We are in love with our garden. It is beautiful and colorful, and the bees, butterflies, and hummingbirds are back. Two years now and it has filled in and still beautiful.",
      rating: 5,
    },
    {
      name: 'Jeanette Kulkarni',
      location: 'Spring Lake, MI',
      role: 'Homeowner and Business Owner',
      text: 'Earth Stewards LLC is very knowledgeable about plants. They designed my entire flower garden. They also maintain both our residence and company. I am very happy with their services and will continue to use them for all my gardening needs.',
      rating: 5,
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-moss-700 to-sage-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grain opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-moss-600 organic-blob blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-700 organic-blob-2 blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-moss-100">
            Don't just take our word for it—hear from property owners across West
            Michigan
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-moss-200">
                  {testimonial.role} • {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-white mb-6">
            Join our growing list of satisfied clients
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-moss-700 font-semibold rounded-full hover:bg-moss-50 transition-all hover:shadow-xl"
          >
            Book a Project Review Call
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
