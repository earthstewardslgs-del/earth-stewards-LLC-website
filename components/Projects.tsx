'use client'

import { useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sliderPositions, setSliderPositions] = useState<{[key: number]: number}>({})
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryProject, setGalleryProject] = useState<any>(null)
  const [galleryPhotoIndex, setGalleryPhotoIndex] = useState(0)

  const handleSliderChange = (projectIndex: number, position: number) => {
    setSliderPositions(prev => ({ ...prev, [projectIndex]: position }))
  }

  const openGallery = (project: any) => {
    setGalleryProject(project)
    setGalleryPhotoIndex(0)
    setGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setGalleryOpen(false)
    setGalleryProject(null)
    setGalleryPhotoIndex(0)
    document.body.style.overflow = 'auto'
  }

  const nextPhoto = () => {
    if (galleryProject && galleryPhotoIndex < (galleryProject.photoCount - 1)) {
      setGalleryPhotoIndex(prev => prev + 1)
      setSliderPositions(prev => ({ ...prev, gallery: 50 }))
    }
  }

  const prevPhoto = () => {
    if (galleryPhotoIndex > 0) {
      setGalleryPhotoIndex(prev => prev - 1)
      setSliderPositions(prev => ({ ...prev, gallery: 50 }))
    }
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
      photoCount: 5, // Number of before/after photo pairs
      stats: { beds: '6 raised beds', area: '600 sq ft', season: 'Fall 2024' },
    },
    {
      title: 'Holiday Entrance Planters',
      category: 'commercial',
      location: 'Muskegon, MI',
      description:
        'Created welcoming seasonal planters for Superior Monument Co's front entrance. Designed elegant, professional winter arrangements with evergreens, birch branches, and festive touches that greet visitors and clients throughout the holiday season.',
      image: 'superior-monument',
      beforeAfter: false,
      photoCount: 3,
      stats: { planters: '2 custom', height: '4 ft tall', season: 'Winter 2024' },
    },
    {
      title: 'Condo Porch Garden Revival',
      category: 'residential',
      location: 'Spring Lake, MI',
      description:
        'Restored a neglected back porch garden space that had become overgrown and unusable. Cleared debris and dying plants, reset cracked pavers, cleaned garden beds, and replanted with fresh perennials and grasses—transforming a messy eyesore into a tidy, inviting outdoor retreat.',
      image: 'windy-drift',
      beforeAfter: true,
      photoCount: 1,
      stats: { area: '200 sq ft', pavers: 'Reset', season: 'Fall 2024' },
    },
    {
      title: 'Condo Patio Garden Refresh',
      category: 'residential',
      location: 'Spring Lake, MI',
      description:
        'Revitalized a neglected back porch garden at a condo. Cleared overgrown weeds, removed debris and dead plant material, cleaned hardscape surfaces, and gave the space a fresh start—ready for the homeowner to enjoy again.',
      image: 'windy-drift',
      beforeAfter: true,
      photoCount: 1,
      stats: { area: '200 sq ft', cleanup: 'Full weeding', season: 'Fall 2024' },
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
                  <div className="relative w-full h-full select-none">
                    {/* After Image (full background) */}
                    <div className="absolute inset-0">
                      <img
                        src={`/images/${project.image}-after-1.jpg`}
                        alt={`${project.title} - After`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Before Image Container (clipped by slider) */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - (sliderPositions[index] || 50)}% 0 0)` }}
                    >
                      <img
                        src={`/images/${project.image}-before-1.jpg`}
                        alt={`${project.title} - Before`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Slider Line and Handle */}
                    <div 
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
                      style={{ left: `${sliderPositions[index] || 50}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-moss-600">
                        <div className="flex gap-0.5">
                          <div className="w-0.5 h-4 bg-moss-700"></div>
                          <div className="w-0.5 h-4 bg-moss-700"></div>
                        </div>
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
                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold z-10 pointer-events-none">
                      BEFORE
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold z-10 pointer-events-none">
                      AFTER
                    </div>
                    
                    {/* View Gallery Button for multi-photo projects */}
                    {project.photoCount && project.photoCount > 1 && (
                      <button
                        onClick={() => openGallery(project)}
                        className="absolute top-4 left-4 bg-moss-700 hover:bg-moss-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all z-30 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        View Gallery ({project.photoCount} photos)
                      </button>
                    )}
                  </div>
                ) : project.image === 'kulkarni' ? (
                  // Regular Image (for kulkarni project)
                  <img
                    src="/images/kulkarni-01.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : project.image === 'superior-monument' ? (
                  // Regular Image (for superior monument project)
                  <img
                    src="/images/superior-monument-1.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : project.image === 'windy-drift' ? (
                  // Before/After preview for windy-drift (handled above with beforeAfter slider)
                  null
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
                
                {/* View Photos button for multi-photo projects without before/after */}
                {!project.beforeAfter && project.photoCount && project.photoCount > 1 && (
                  <button
                    onClick={() => openGallery(project)}
                    className="absolute top-4 left-4 bg-moss-700 hover:bg-moss-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-all z-30 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View Photos ({project.photoCount})
                  </button>
                )}
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

      {/* Gallery Modal */}
      {galleryOpen && galleryProject && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-earth-100 transition-colors"
          >
            <svg className="w-6 h-6 text-earth-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Photo Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
            {galleryPhotoIndex + 1} / {galleryProject.photoCount}
          </div>

          {/* Main Image Display */}
          <div className="max-w-6xl w-full mx-auto">
            <div className="aspect-[16/10] relative rounded-lg overflow-hidden shadow-2xl">
              {galleryProject.beforeAfter ? (
                /* Before/After Slider */
                <>
                  {/* After Image */}
                  <div className="absolute inset-0">
                    <img
                      src={`/images/${galleryProject.image}-after-${galleryPhotoIndex + 1}.jpg`}
                      alt={`${galleryProject.title} - After ${galleryPhotoIndex + 1}`}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>

                  {/* Before Image (clipped) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - (sliderPositions.gallery || 50)}% 0 0)` }}
                  >
                    <img
                      src={`/images/${galleryProject.image}-before-${galleryPhotoIndex + 1}.jpg`}
                      alt={`${galleryProject.title} - Before ${galleryPhotoIndex + 1}`}
                      className="w-full h-full object-contain bg-black"
                    />
                  </div>

                  {/* Slider Line and Handle */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
                    style={{ left: `${sliderPositions.gallery || 50}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-moss-600">
                      <div className="flex gap-1">
                        <div className="w-1 h-6 bg-moss-700"></div>
                        <div className="w-1 h-6 bg-moss-700"></div>
                      </div>
                    </div>
                  </div>

                  {/* Slider Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPositions.gallery || 50}
                    onChange={(e) => handleSliderChange('gallery', parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />

                  {/* Before/After Labels */}
                  <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold z-10 pointer-events-none">
                    BEFORE
                  </div>
                  <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold z-10 pointer-events-none">
                    AFTER
                  </div>
                </>
              ) : (
                /* Regular Photo Gallery */
                <img
                  src={`/images/${galleryProject.image}-${galleryPhotoIndex + 1}.jpg`}
                  alt={`${galleryProject.title} ${galleryPhotoIndex + 1}`}
                  className="w-full h-full object-contain bg-black"
                />
              )}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevPhoto}
                disabled={galleryPhotoIndex === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  galleryPhotoIndex === 0
                    ? 'bg-earth-300 text-earth-500 cursor-not-allowed'
                    : 'bg-white text-earth-900 hover:bg-earth-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              <button
                onClick={nextPhoto}
                disabled={galleryPhotoIndex >= galleryProject.photoCount - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  galleryPhotoIndex >= galleryProject.photoCount - 1
                    ? 'bg-earth-300 text-earth-500 cursor-not-allowed'
                    : 'bg-white text-earth-900 hover:bg-earth-100'
                }`}
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: galleryProject.photoCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setGalleryPhotoIndex(i)
                    setSliderPositions(prev => ({ ...prev, gallery: 50 }))
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === galleryPhotoIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
