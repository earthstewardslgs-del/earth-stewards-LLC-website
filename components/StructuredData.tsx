export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://earthstewardsllc.org',
    name: 'Earth Stewards LLC',
    description: 'Professional native landscape design and installation serving Muskegon and Ottawa Counties, Michigan.',
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
      },
      {
        '@type': 'City', 
        name: 'Grand Haven',
      },
      {
        '@type': 'City',
        name: 'Holland',
      },
      {
        '@type': 'City',
        name: 'Norton Shores',
      },
      {
        '@type': 'City',
        name: 'Spring Lake',
      },
      {
        '@type': 'City',
        name: 'Zeeland',
      },
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
      'https://www.instagram.com/earthstewardsllc',
      'https://www.linkedin.com/company/earthstewardsllc',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscape Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Design & Installation',
            description: 'Custom landscape design and professional installation that works long-term with proper site assessment and plant selection.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Maintenance & Plant Care',
            description: 'Expert maintenance services that reduce recurring problems and gradually lower the amount of work your yard needs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultation & Guidance',
            description: 'Professional consultation to help you understand what your yard needs and what will realistically work for your situation.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
