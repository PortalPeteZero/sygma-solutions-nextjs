/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sygma-solutions.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      // Standard: all content indexable for all bots
      { userAgent: '*', allow: '/' },
      // Ahrefs site audit specifically: ignore Next.js build chunks
      // (they rotate hashes on every deploy and cause noisy 404s
      // in audit reports -- Google still crawls them normally)
      { userAgent: 'AhrefsSiteAudit', disallow: ['/_next/'] },
      { userAgent: 'AhrefsBot', disallow: ['/_next/'] },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/thank-you', '/design-your-programme', '/designyourprogramme', '/privacy-policy'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
};
