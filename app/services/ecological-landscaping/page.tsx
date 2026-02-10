export default function EcologicalLandscapingPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="py-24 bg-earth-50">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-display text-5xl font-bold text-earth-900 mb-6">
            Ecological Landscaping — How We Design Landscapes That Last
          </h1>

          <p className="text-xl text-earth-700 leading-relaxed mb-6">
            Most landscapes look good at installation but slowly become work. 
            Plants outgrow their space, beds need constant resetting, and problem areas return every season.
          </p>

          <p className="text-lg text-earth-700 leading-relaxed">
            Ecological landscaping simply means designing a yard so it stabilizes instead of declining. 
            Sometimes that includes native plants — but it also includes spacing, soil conditions, drainage patterns, 
            and choosing plants suited to real conditions, not just appearance.
          </p>
        </div>
      </section>

      {/* What it means */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-earth-900 mb-6">
            What this approach focuses on
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-earth-700 text-lg">
            <ul className="space-y-4">
              <li>• Sunlight and moisture patterns</li>
              <li>• Soil structure and compaction</li>
              <li>• Plant competition and spacing</li>
            </ul>
            <ul className="space-y-4">
              <li>• Maintenance expectations</li>
              <li>• Recurring problem areas</li>
              <li>• Long-term stability instead of short-term appearance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What it does NOT mean */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-earth-900 mb-6">
            What it does NOT mean
          </h2>

          <p className="text-lg text-earth-700 mb-8">
            Ecological landscaping is often misunderstood. A stable landscape should still look intentional and cared for.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-earth-700 text-lg">
            <ul className="space-y-3">
              <li>• Not letting the yard go wild</li>
              <li>• Not zero maintenance</li>
              <li>• Not only native plants</li>
            </ul>
            <ul className="space-y-3">
              <li>• Not removing structure</li>
              <li>• Not ignoring appearance</li>
              <li>• Not turning yards into prairie restorations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* When this helps */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-earth-900 mb-6">
            When this approach helps most
          </h2>

          <ul className="space-y-4 text-lg text-earth-700">
            <li>• Beds constantly need re-mulching or replanting</li>
            <li>• Areas fail despite repeated effort</li>
            <li>• Yards become overgrown quickly</li>
            <li>• Weekly upkeep is required just to stay presentable</li>
            <li>• The landscape never seems to “settle in”</li>
          </ul>
        </div>
      </section>

      {/* Connection to services */}
      <section className="py-24 bg-moss-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-earth-900 mb-6">
            How this connects to our services
          </h2>

          <p className="text-lg text-earth-700 leading-relaxed mb-8">
            Ecological landscaping isn’t a separate service — it’s how we approach all of them.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-lg text-moss-700">
            <a href="/services/native-landscaping-muskegon">Native Plant Landscapes →</a>
            <a href="/services/lawn-conversion-muskegon">Lawn Conversion →</a>
            <a href="/services/garden-restoration-muskegon">Garden Restoration →</a>
            <a href="/services/landscape-maintenance-muskegon">Long-Term Maintenance →</a>
            <a href="/services/soil-drainage-assessment">Soil & Drainage Assessment →</a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold text-earth-900 mb-6">
            A landscape should get easier over time
          </h2>

          <p className="text-lg text-earth-700 leading-relaxed mb-10">
            If your yard keeps demanding more work every year, the design — not the effort — is usually the problem. 
            Our goal is to help the space function so upkeep becomes simpler instead of constant.
          </p>

          <a
            href="/#contact"
            className="inline-block bg-moss-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-moss-700 transition"
          >
            Discuss Your Project
          </a>
        </div>
      </section>

    </main>
  )
}
