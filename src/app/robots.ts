import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // Ahrefs site audit + bot: ignore Next.js build chunks
      // (they rotate hashes on every deploy and cause noisy 404s
      // in audit reports -- Google still crawls them normally)
      { userAgent: 'AhrefsSiteAudit', disallow: '/_next/' },
      { userAgent: 'AhrefsBot', disallow: '/_next/' },
    ],
    host: 'https://sygma-solutions.com',
    sitemap: 'https://sygma-solutions.com/sitemap.xml',
  };
}
