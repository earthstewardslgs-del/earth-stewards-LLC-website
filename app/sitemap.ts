import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://earthstewardsllc.org'
  const now = new Date()

  const serviceSlugs = [
    'ecological-garden-care',
    'ecological-landscaping',
    'garden-restoration-muskegon',
    'invasive-species-removal-muskegon',
    'landscape-consultation-muskegon',
    'landscape-maintenance-muskegon',
    'lawn-conversion-muskegon',
    'native-landscaping-muskegon',
    'overgrown-yard-cleanup',
    'pollinator-garden-installation',
    'soil-drainage-assessment',
  ]

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },

    // If you have a dedicated consultation page (separate from the service page),
    // keep this. If not, you can delete this entry.
    {
      url: `${baseUrl}/consultation`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
