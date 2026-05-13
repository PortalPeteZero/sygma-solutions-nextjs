import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block crawl-budget sinks that GSC Coverage report 2026-05-13 confirmed
        // Google was wasting time on. The URLs either don't exist (redirect),
        // exist but shouldn't be indexed (/api/, /feed/), or are legacy
        // WordPress paths that produce noise (114 noindex'd date archives
        // + RSS feeds). Disallowing here prevents Google fetching them at all,
        // freeing budget for actual content pages.
        disallow: [
          '/api/',
          '/_next/',
          '/wp-content/',
          '/wp-includes/',
          '/wp-admin/',
          '/wp-login.php',
          '/wp-json/',
          '/xmlrpc.php',
          '/feed/',
          '/*/feed/',
          '/comments/feed/',
          '/category/*/feed/',
          // WordPress year/month date archives -- 67 of the 114 "Excluded by
          // noindex" URLs follow this pattern (/2018/02/, /2019/03/, etc.)
          '/2018/',
          '/2019/',
          '/2020/',
          '/2021/',
          '/2022/',
          '/2023/',
          '/2024/',
          '/2025/',
          '/2026/',
          // Old Joomla-style + WordPress query-string pagination
          '/news/?*',
          '/*?p=*',
          '/*?s=*',
          '/*?format=*',
          '/*?trk=*',
        ],
      },
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
