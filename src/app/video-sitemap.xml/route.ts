import { videoLibrary, legacyVideoPages } from "@/data/videoLibrary";

const SITE = "https://sygma-solutions.com";

/**
 * A Google video sitemap.
 *
 * This is a hand-authored route rather than an entry in `sitemap.ts` because Next's
 * `MetadataRoute.Sitemap` type cannot express the `video:video` extension — it emits URLs and
 * nothing else. Until now that meant the site had thirteen video pages and not one video
 * sitemap entry, so the only thing telling Google a video existed was the on-page JSON-LD.
 *
 * Covers the eight new pages and the five that came before them.
 */
function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** ISO 8601 duration (PT1H20M51S) -> seconds, which is what a video sitemap wants. */
function durationSeconds(iso: string): number {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso);
  if (!m) return 0;
  return (+(m[1] ?? 0)) * 3600 + (+(m[2] ?? 0)) * 60 + (+(m[3] ?? 0));
}

export const dynamic = "force-static";

export function GET() {
  const all = [
    ...videoLibrary.map((v) => ({
      slug: v.slug,
      youtubeId: v.youtubeId,
      // the video sitemap title is the H1, not the <title>: no " | Sygma" suffix
      title: v.h1,
      description: v.description,
      uploadDate: v.uploadDate,
      duration: v.duration,
    })),
    ...legacyVideoPages,
  ];

  const entries = all
    .map((v) => {
      const secs = durationSeconds(v.duration);
      return `  <url>
    <loc>${SITE}/knowledge-hub/${v.slug}</loc>
    <video:video>
      <video:thumbnail_loc>https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg</video:thumbnail_loc>
      <video:title>${esc(v.title)}</video:title>
      <video:description>${esc(v.description)}</video:description>
      <video:player_loc allow_embed="yes">https://www.youtube.com/embed/${v.youtubeId}</video:player_loc>
      <video:duration>${secs}</video:duration>
      <video:publication_date>${v.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
      <video:publisher>Sygma Solutions</video:publisher>
    </video:video>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
