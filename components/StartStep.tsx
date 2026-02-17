import Link from 'next/link'

export default function StartStep() {
  return (
    <section className="py-20 bg-earth-50">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-serif mb-6">
          Start with the right step
        </h2>

        <p className="text-lg text-earth-700 mb-12 max-w-2xl mx-auto">
          Some homeowners are ready to hire work. Others first need to understand why their landscape behaves the way it does.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-8 border rounded-xl bg-white">
            <h3 className="text-2xl font-semibold mb-4">Planning a project</h3>
            <p className="mb-6 text-earth-700">
              You want work done and need to know scope, order, and next steps before installation.
            </p>
            <Link
              href="/services/landscape-consultation-muskegon?type=assessment"
              className="inline-block px-6 py-3 rounded-lg bg-earth-800 text-white hover:bg-earth-700 transition"
            >
              Start with a Site Assessment
            </Link>
          </div>

          <div className="p-8 border rounded-xl bg-white">
            <h3 className="text-2xl font-semibold mb-4">Understanding your land</h3>
            <p className="mb-6 text-earth-700">
              You want clarity before committing — drainage, plants, layout, and long-term direction.
            </p>
            <Link
              href="/services/landscape-consultation-muskegon?type=consulting"
              className="inline-block px-6 py-3 rounded-lg bg-earth-600 text-white hover:bg-earth-500 transition"
            >
              Book a Consulting Session
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
