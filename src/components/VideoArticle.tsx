import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videoObjectSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { VideoLibraryEntry } from "@/data/videoLibrary";
import { videoLibrary } from "@/data/videoLibrary";

/**
 * The shared shell for a knowledge hub video page.
 *
 * It exists so the TAGGING cannot drift between pages. Every video page gets the same
 * VideoObject (with key moments and a thumbnail array), the same BreadcrumbList, the same
 * canonical and OG treatment, a jump-to list of the key moments, and a link UP to the course
 * page that owns the commercial term. Previously each page hand-rolled its own schema block,
 * which is how one of them silently shipped without a VideoObject at all.
 *
 * The body prose stays per-page: it is the part that has to be written, not generated.
 */
export function VideoArticle({
  entry,
  children,
  alsoRead,
}: {
  entry: VideoLibraryEntry;
  children: React.ReactNode;
  /** Slugs of other video pages to cross-link. Falls back to the next two in the library. */
  alsoRead?: string[];
}) {
  const related = (
    alsoRead?.length
      ? videoLibrary.filter((v) => alsoRead.includes(v.slug))
      : videoLibrary.filter((v) => v.slug !== entry.slug).slice(0, 3)
  ).slice(0, 3);

  const mmss = (s: number) =>
    s >= 3600
      ? `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`
      : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: videoObjectSchema({
            name: entry.h1,
            description: entry.description,
            url: `/knowledge-hub/${entry.slug}`,
            youtubeId: entry.youtubeId,
            uploadDate: entry.uploadDate,
            duration: entry.duration,
            thumbnailUrl: [
              `https://i.ytimg.com/vi/${entry.youtubeId}/maxresdefault.jpg`,
              `https://i.ytimg.com/vi/${entry.youtubeId}/sddefault.jpg`,
              `https://i.ytimg.com/vi/${entry.youtubeId}/hqdefault.jpg`,
            ],
            keyMoments: entry.keyMoments,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema([
            { label: "Knowledge Hub", to: "/knowledge-hub" },
            { label: entry.h1 },
          ]),
        }}
      />

      <InnerPageHero
        image={entry.heroImage}
        alt={entry.heroAlt}
        eyebrow="Knowledge Hub"
        headline={entry.h1}
        sub={entry.sub}
        breadcrumbs={[{ label: "Knowledge Hub", to: "/knowledge-hub" }, { label: entry.crumb }]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/knowledge-hub#videos"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors"
          >
            &larr; Back to Videos
          </Link>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="container mx-auto px-6 md:px-8 flex gap-12 items-start">
          <aside className="hidden lg:block w-60 shrink-0 sticky top-24">
            <KnowledgeHubSidebar />
          </aside>
          <article className="min-w-0 flex-1 max-w-3xl">
            <div className="mb-10">
              <iframe
                src={`https://www.youtube.com/embed/${entry.youtubeId}`}
                title={entry.h1}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full aspect-video rounded-lg border-0"
              />
            </div>

            {entry.keyMoments.length > 0 && (
              <div className="mb-10 border border-border rounded-lg p-6">
                <h2 className="text-lg font-bold text-foreground mb-3">What Is Covered, and When</h2>
                <ul className="space-y-2">
                  {entry.keyMoments.map((m) => (
                    <li key={m.startOffset} className="text-sm">
                      <a
                        href={`https://www.youtube.com/watch?v=${entry.youtubeId}&t=${m.startOffset}s`}
                        className="text-primary hover:underline font-medium"
                        rel="noopener"
                      >
                        <span className="tabular-nums font-semibold">{mmss(m.startOffset)}</span>
                        <span className="text-muted-foreground"> &middot; </span>
                        {m.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {children}

            {related.length > 0 && (
              <div className="bg-muted/40 rounded-lg p-6 mb-10">
                <h3 className="text-lg font-bold text-foreground mb-3">Also in the Knowledge Hub</h3>
                <ul className="space-y-2">
                  {related.map((v) => (
                    <li key={v.slug}>
                      <Link
                        href={`/knowledge-hub/${v.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {v.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-border pt-8">
              <p className="text-muted-foreground mb-4">
                Want this in your team&rsquo;s hands rather than on their screens? Sygma&rsquo;s{" "}
                <Link href={entry.course.href} className="text-primary font-semibold hover:underline">
                  {entry.course.label}
                </Link>{" "}
                is delivered on site, UK-wide, by trainers who do this work.
              </p>
              <Link
                href={entry.course.href}
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors gap-2"
              >
                {entry.course.cta} <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

/** Shared metadata builder, so title/canonical/OG cannot drift between video pages. */
export function videoMetadata(entry: VideoLibraryEntry) {
  const url = `https://sygma-solutions.com/knowledge-hub/${entry.slug}`;
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url,
      type: "video.other" as const,
      images: [`https://i.ytimg.com/vi/${entry.youtubeId}/maxresdefault.jpg`],
    },
  };
}
