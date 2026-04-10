# Sygma Solutions -- Next.js Migration

Next.js App Router migration of sygma-solutions.com. All V8 remediation workstreams complete. Ready for DNS cutover.

## Status

**Remediation:** COMPLETE (9/9 workstreams, 10 April 2026)
**Staging:** https://sygma-solutions-nextjs.vercel.app
**Plan:** See Second Brain > Projects > Sygma-Website-Migration > V8_Remediation-Plan.md

## Quick Start

```bash
npm install
npm run dev
```

## What Was Done (V8 Remediation)

- WS-1: Contact form method="POST" safety net + analytics verification
- WS-2: 61 broken images fixed via Cloudinary migration (29 IDs substituted)
- WS-3: Sitewide template fixes (CTAs, footer phone, OG images, semantic HTML)
- WS-4: EUS to EUSR sitewide rebrand (386 replacements, 47 files)
- WS-5: /courses page complete rebuild (SEO content, course cards, FAQ schema)
- WS-6: 18 page-specific content/copy fixes
- WS-7: Schema enrichment (BreadcrumbList, FAQPage, foundingDate, sameAs, courseSchema)
- WS-8: Design system alignment (10 pages to semantic tokens, photo heroes)
- WS-9: 16 new redirect rules (351 total)
- Phase 4: sitemap.ts (63 URLs), README update

## Project Structure

- `src/app/` -- App Router pages and layouts (70 pages)
- `src/components/` -- Shared React components (LocationTemplate, Footer, InnerPageHero)
- `src/lib/` -- Utilities: schema.ts (Course, FAQ, Breadcrumb, Organization, LocalBusiness, Article), cloudinary.ts, metadata.ts
- `src/data/` -- navigation.ts (course catalog), knowledgeHubItems.ts
- `next.config.mjs` -- 351 redirects from legacy site

## Key Technical Details

- Next.js App Router with Cloudinary image loader (cloud: dqf1mp7en)
- Semantic design system tokens (bg-primary, bg-foreground, text-accent, etc.)
- Supabase Edge Function for contact form
- GTM (GTM-WNXQHCB9) + GA4 (G-QVFF0DPG6X) + Google Ads conversion tracking
- Structured data: Course, FAQPage, BreadcrumbList, Organization, LocalBusiness, Article

## Next Steps

- DNS cutover (see V8 plan Phase 5 checklist)
- Post-cutover: Ahrefs re-crawl, Cloudinary image uploads for visual variety
