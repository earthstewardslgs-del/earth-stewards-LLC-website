import Link from 'next/link'

export default function StartStep() {
  return (
    <section className="py-20 bg-earth-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Start with the right step
        </h2>

        <p className="text-lg text-earth-700 mb-12 max-w-2xl mx-auto">
          Some property owners are ready to move forward with a specific improvement. Others first need clarity about how their landscape functions as a whole.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 border rounded-xl bg-white">
            <h3 className="text-2xl font-semibold mb-4">Targeted Improvements</h3>
            <p className="mb-6 text-earth-700">
              You have a specific area you'd like to improve and need clarity on scope, feasibility, and rough cost direction.
            </p>
            <Link
              href="/services/landscape-consultation-muskegon?type=assessment"
              className="inline-block px-6 py-3 rounded-lg bg-earth-800 text-white hover:bg-earth-700 transition"
            >
              Start with a Site Assessment
            </Link>
          </div>

          <div className="p-8 border rounded-xl bg-white">
            <h3 className="text-2xl font-semibold mb-4">Ecological Planning</h3>
            <p className="mb-6 text-earth-700">
              You want to understand how water, sun, soil, and plant communities interact — and determine a long-term path forward for your landscape.
            </p>
            <Link
              href="/services/landscape-consultation-muskegon?type=consulting"
              className="inline-block px-6 py-3 rounded-lg bg-earth-600 text-white hover:bg-earth-500 transition"
            >
              Book a Strategic Consultation
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
