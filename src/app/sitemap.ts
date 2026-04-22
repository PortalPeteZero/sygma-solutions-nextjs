import { MetadataRoute } from 'next';

const BASE_URL = 'https://sygma-solutions.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  /* ------------------------------------------------------------------ */
  /*  Static pages                                                       */
  /* ------------------------------------------------------------------ */

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/courses`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/accreditations`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/bespoke-training`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/osca`, changeFrequency: 'monthly', priority: 0.7 },
    // /privacy-policy excluded -- noindexed page should not be in sitemap
  ];

  /* ------------------------------------------------------------------ */
  /*  Training hub pages                                                 */
  /* ------------------------------------------------------------------ */

  const trainingHubs: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/training/cable-location-avoidance`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/training/utility-mapping-surveying`, changeFrequency: 'monthly', priority: 0.8 },
  ];

  /* ------------------------------------------------------------------ */
  /*  Individual course pages                                            */
  /* ------------------------------------------------------------------ */

  const courseSlugs = [
    'hsg47-training',
    'cable-avoidance-training',
    'eusr-cat1',
    'proqualcat1-training',
    'proqualcat1plus',
    'rqf-level-2-award',
    'cat-and-genny-training',
    'vscan-and-transmitter-training',
    'eusr-cat2-safe-dig',
    'proqualcat2',
    'eusr-cat1-cat2-combined',
    'proqual-cat1-cat2-combined',
    'eusr-cat1-cat2-usc-combined',
    'cat-manager',
    'eusr-superuser',
    'zs-superuser-scottish-water',
    'service-coordinator-usc',
    'cat4-hsg47-awareness-online',
    'gs6-overhead-power-lines',
    'manufacturer-locator-training',
    'plans-and-process',
    'cable-avoidance-course-comparison',
    '5-day-pas128-surveyor',
    'gpr-training',
    'pas128-awareness',
    'tsa-ices-utility-mapping',
    'advanced-em-locator',
    'level-3-certificate',
    'level-4-diploma',
    'level-5-diploma',
    'level-6-diploma',
    'online-level-3-diploma',
    'online-level-5-diploma',
  ];

  const coursePages: MetadataRoute.Sitemap = courseSlugs.map((slug) => ({
    url: `${BASE_URL}/courses/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  /* ------------------------------------------------------------------ */
  /*  Knowledge hub                                                      */
  /* ------------------------------------------------------------------ */

  const knowledgeHubSlugs = [
    'utility-strikes-first-20-metres',
    'genny-first-methodology',
    'genny-first-in-practice-video',
    'eusr-cat1-vs-proqual-cat1',
    'understanding-pas-128',
    'hsg47-explained',
    'eusr-card-renewal',
    'npors-vs-eusr',
    'strike-prevention-site-managers',
    'citb-funding-utility-training',
    'kier-group-case-study',
    'morgan-sindall-case-study',
    'qts-group-case-study',
    'severn-trent-water-case-study',
  ];

  const knowledgeHubPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/knowledge-hub`, changeFrequency: 'weekly', priority: 0.7 },
    ...knowledgeHubSlugs.map((slug) => ({
      url: `${BASE_URL}/knowledge-hub/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  /* ------------------------------------------------------------------ */
  /*  Locations                                                          */
  /* ------------------------------------------------------------------ */

  const locationPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/locations`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations/manchester`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/locations/birmingham`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/locations/london`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/locations/bristol`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  /* ------------------------------------------------------------------ */
  /*  SEO landing pages                                                  */
  /* ------------------------------------------------------------------ */

  const seoLandingPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/cable-avoidance-training-london`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/cable-avoidance-training-birmingham`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/cable-avoidance-training-manchester`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/cable-avoidance-training-scotland`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/utility-mapping-training-bristol`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  /* ------------------------------------------------------------------ */
  /*  Excluded: /thank-you, /design-your-programme, /designyourprogramme */
  /*  (utility/redirect pages -- not indexable content)                   */
  /* ------------------------------------------------------------------ */

  return [
    ...staticPages,
    ...trainingHubs,
    ...coursePages,
    ...knowledgeHubPages,
    ...locationPages,
    ...seoLandingPages,
  ];
}
