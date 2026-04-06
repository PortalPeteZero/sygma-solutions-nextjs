/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sygma-solutions.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [],
  },
  exclude: ['/thank-you'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
};
