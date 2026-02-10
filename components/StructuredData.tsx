export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    '@id': 'https://earthstewardsllc.org',
    name: 'Earth Stewards LLC',
    alternateName: 'Earth Stewards Landscape Design',
    description: 'Professional landscape design, garden restoration, and ecological landscaping services in Muskegon and Ottawa County, Michigan. Specializing in native plants, pollinator gardens, and low-maintenance landscapes.',
    url: 'https://earthstewardsllc.org',
    logo: 'https://earthstewardsllc.org/images/logo.png',
    image: 'https://earthstewardsllc.org/images/logo.png',
    telephone: '+1-231-769-0769',
    email: 'earthstewardslgs@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Muskegon',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '43.2342',
      longitude: '-86.2484',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Muskegon',
        containedInPlace: {
          '@type': 'State',
          name: 'Michigan',
        },
      },
      {
        '@type': 'City', 
        name: 'Grand Haven',
        containedInPlace: {
          '@type': 'State',
          name: 'Michigan',
        },
      },
      {
        '@type': 'City',
        name: 'Holland',
        containedInPlace: {
          '@type': 'State',
          name: 'Michigan',
        },
      },
      {
        '@type': 'City',
        name: 'Norton Shores',
        containedInPlace: {
          '@type': 'State',
          name: 'Michigan',
        },
      },
      {
        '@type': 'City',
        name: 'Spring Lake',
        containedInPlace: {
          '@type': 'State',
          name: 'Michigan',
        },
      },
      {
        '@type': 'City',
        name: 'Zeeland',
        containedInPlace: {
          '@type': 'State',
          name: 'Michigan',
        },
      },
      'Ottawa County, MI',
      'Muskegon County, MI',
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/earthstewardsllc',
    ],
    slogan: 'Landscapes designed to stay manageable and get better over time',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscape Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Native Landscaping & Design',
            description: 'Custom landscape design and installation using native plants for Muskegon and West Michigan properties. Lower maintenance, pollinator-friendly landscapes.',
            areaServed: 'Muskegon County, MI',
            serviceType: 'Landscape Design',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Garden Restoration Services',
            description: 'Garden cleanup, restoration, and redesign services. Transform overgrown or struggling gardens into functional, beautiful spaces.',
            areaServed: 'Ottawa County, MI',
            serviceType: 'Garden Restoration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pollinator Garden Installation',
            description: 'Pollinator-friendly garden design and installation with native plants that support bees, butterflies, and hummingbirds.',
            areaServed: 'West Michigan',
            serviceType: 'Pollinator Gardens',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Maintenance & Plant Care',
            description: 'Expert maintenance services that reduce recurring problems and gradually lower the amount of work your yard needs.',
            areaServed: 'Muskegon, MI',
            serviceType: 'Landscape Maintenance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Consultation',
            description: 'Professional consultation to help you understand what your yard needs and what will realistically work for your situation.',
            areaServed: 'West Michigan',
            serviceType: 'Consultation',
          },
        },
      ],
    },
    knowsAbout: [
      'Native Plant Landscaping',
      'Ecological Landscaping',
      'Pollinator Gardens',
      'Low Maintenance Landscapes',
      'Garden Restoration',
      'Sustainable Landscaping',
      'Invasive Species Management',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
