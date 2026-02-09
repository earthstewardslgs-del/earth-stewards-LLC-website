'use client'

import { useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sliderPositions, setSliderPositions] = useState<{[key: number]: number}>({})

  const handleSliderChange = (projectIndex: number, position: number) => {
    setSliderPositions(prev => ({ ...prev, [projectIndex]: position }))
  }

  const projects = [
    {
      title: 'Shaded Garden Rescue',
      category: 'residential',
      location: 'Spring Lake, MI',
      description:
        'Diagnosed a struggling garden where sun-loving plants were fighting a losing battle in deep shade. Completely redesigned the space with shade-tolerant perennials, hostas, astilbe, and ferns that now thrive in low-light conditions—creating a lush, layered sanctuary that finally works with the site instead of against it.',
      image: 'kulkarni',
      beforeAfter: false, // This project doesn't have before/after
      stats: { plants: '30+', area: '400 sq ft', season: 'Summer 2024' },
    },
    {
      title: 'Garden Cleanup & Reorganization',
      category: 'residential',
      location: 'Grand Haven, MI',
      description:
        'Transformed a chaotic, overgrown backyard garden buried under pallets, weeds, and years of neglect. Cleared debris, reorganized raised bed placement, mulched pathways, and created clean, functional growing spaces the homeowner can actually use and maintain.',
      image: 'garden-cleanup',
      beforeAfter: true, // Has before/after slider
      stats: { beds: '6 raised beds', area: '600 sq ft', season: 'Fall 2024' },
    },
    {
      title: 'Commercial Pollinator Meadow',
      category: 'commercial',
      location: 'Muskegon, MI',
      description:
        'Created a low-maintenance native meadow for an office complex, reducing mowing costs by 75%.',
      image: 'meadow',
      beforeAfter: false,
      stats: { plants: '200+', area: '2 acres', season: 'Fall 2023' },
    },
    {
      title: 'Backyard Wildlife Habitat',
      category: 'residential',
      location: 'Holland, MI',
      description:
        'Designed a layered ecosystem with native trees, shrubs, and perennials supporting local wildlife.',
      image: 'wildlife',
      beforeAfter: false,
      stats: { plants: '60+', area: '1,200 sq ft', season: 'Spring 2024' },
    },
    {
      title: 'Municipal Park Restoration',
      category: 'municipal',
      location: 'Norton Shores, MI',
      description:
        'Restored a degraded park area with native grasses and wildflowers, creating a community gathering space.',
      image: 'park',
      beforeAfter: false,
      stats: { plants: '500+', area: '3 acres', season: 'Fall 2023' },
    },
    {
      title: 'Lakefront Native Garden',
      category: 'residential',
      location: 'Spring Lake, MI',
      description:
        'Stabilized eroding shoreline with native plants while enhancing views and water quality.',
      image: 'lakefront',
      beforeAfter: false,
      stats: { plants: '75+', area: '1,500 sq ft', season: 'Summer 2024' },
    },
    {
      title: 'Church Grounds Transformation',
      category: 'commercial',
      location: 'Zeeland, MI',
      description:
        'Replaced high-maintenance lawn with native prairie, reducing water use and maintenance costs.',
      image: 'church',
      beforeAfter: false,
      stats: { plants: '150+', area: '1.5 acres', season: 'Spring 2023' },
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-earth-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grain"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-200 organic-blob-2 blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-earth-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-earth-700">
            See how we've transformed properties across West Michigan with native
            landscapes
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === filter.id
                  ? 'bg-moss-600 text-white shadow-lg'
                  : 'bg-white text-earth-700 hover:bg-moss-50 border-2 border-moss-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with optional before/after slider */}
              <div className="aspect-[4/3] relative overflow-hidden group">
                {project.beforeAfter ? (
                  // Before/After Slider
                  <div className="relative w-full h-full">
                    {/* After Image (full) */}
                    <img
                      src={`/images/${project.image}-after.jpg`}
                      alt={`${project.title} - After`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Before Image (clipped by slider) */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPositions[index] || 50}%` }}
                    >
                      <img
                        src={`/images/${project.image}-before.jpg`}
                        alt={`${project.title} - Before`}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ width: '100vw', maxWidth: 'none' }}
                      />
                    </div>

                    {/* Slider Handle */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                      style={{ left: `${sliderPositions[index] || 50}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-moss-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                      </div>
                    </div>

                    {/* Slider Input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions[index] || 50}
                      onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />

                    {/* Labels */}
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                      Before
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                      After
                    </div>
                  </div>
                ) : project.image === 'kulkarni' ? (
                  // Regular Image (for kulkarni project)
                  <img
                    src="/images/kulkarni-01.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  // Placeholder for projects without images yet
                  <div className="aspect-[4/3] bg-gradient-to-br from-moss-300 to-sage-400 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <svg
                        className="w-16 h-16 mx-auto mb-2 opacity-75"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3M7,7.25V11.5C7,11.5 9,10 11,10C13,10 13,12 16,12C18,12 18,11 18,11V6.87C17.5,7.21 16.6,7.5 16,7.5C14,7.5 14,6.25 11,6.25C9.4,6.25 8.07,6.75 7,7.25Z" />
                      </svg>
                      <p className="text-sm font-semibold">Project Photo</p>
                    </div>
                  </div>
                )}
                
                {/* Overlay and category badge */}
                {!project.beforeAfter && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-moss-700 capitalize z-10">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-earth-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-sm text-earth-600 mb-3">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.location}
                </div>
                <p className="text-earth-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-earth-200">
                  <div className="text-center">
                    <div className="font-display font-bold text-moss-700">
                      {project.stats.plants}
                    </div>
                    <div className="text-xs text-earth-600">Plants</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display font-bold text-moss-700">
                      {project.stats.area}
                    </div>
                    <div className="text-xs text-earth-600">Area</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display font-bold text-moss-700 text-sm">
                      {project.stats.season}
                    </div>
                    <div className="text-xs text-earth-600">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-earth-700 mb-6">
            Ready to see your property transformed?
          </p>
          <a
            href="#schedule"
            className="inline-flex items-center px-8 py-4 bg-moss-600 text-white font-semibold rounded-full hover:bg-moss-700 transition-all hover:shadow-xl"
          >
            Start Your Project
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
