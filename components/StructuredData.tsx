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
    telephone: '+1-616-555-1234',
    email: 'info@earthstewardsllc.com',
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
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/earthstewardsllc',
      'https://www.instagram.com/earthstewardsllc',
      'https://www.linkedin.com/company/earthstewardsllc',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Native Landscaping Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Native Landscape Design & Installation',
            description: 'Custom native landscape design tailored to your property with professional installation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Maintenance & Care',
            description: 'Expert maintenance services for native landscapes through every season.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultation & Education',
            description: 'Expert guidance for DIY enthusiasts and property managers on native landscaping.',
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
