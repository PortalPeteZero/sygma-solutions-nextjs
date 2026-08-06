import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

interface KnowledgeHubItem {
  title: string;
  type: "article" | "video";
  category: string;
  desc: string;
  href: string;
  image?: string;
  youtubeId?: string;
}

/**
 * The Knowledge Hub list, rendered ON THE SERVER.
 *
 * WHY THIS EXISTS (6 Aug 2026). `KnowledgeHubClient` is a client component: it calls
 * `useSearchParams`, so Next bails to the Suspense fallback during server rendering. That
 * fallback was `null`, which meant the served HTML for /knowledge-hub contained the 23 hub
 * slugs only inside the JavaScript payload and NOT ONE `<a href="/knowledge-hub/...">`. The
 * only crawlable anchors on the page were the nav and the footer.
 *
 * Measured consequence, GSC URL inspection on 6 Aug: three of the five video pages were
 * "URL is unknown to Google" — never fetched, weeks after shipping, despite being in the
 * sitemap. The two that WERE indexed are the two with prose links from already-indexed pages
 * (the course pages, and hsg47-explained). A sitemap is a hint; a link is a path.
 *
 * So this renders the same grid, unfiltered, as the fallback. Googlebot and any no-JS visitor
 * get every article as a real anchor; the client component hydrates over it for the filtering
 * UI. Keep the markup in step with KnowledgeHubClient so the swap is invisible.
 *
 * Regression check (belongs in any future audit of this page):
 *   curl -s https://sygma-solutions.com/knowledge-hub | grep -c 'href="/knowledge-hub/'
 * It must be >= the number of hub items. It was 0.
 */
export default function KnowledgeHubStaticList({ items }: { items: KnowledgeHubItem[] }) {
  const filterButtons = [
    { label: "All", href: "/knowledge-hub" },
    { label: "Articles", href: "/knowledge-hub#articles" },
    { label: "Videos", href: "/knowledge-hub#videos" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center gap-2 mb-8">
          {filterButtons.map((btn, i) => (
            <Link
              key={btn.label}
              href={btn.href}
              scroll={false}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-border rounded-xl bg-card flex flex-col overflow-hidden"
            >
              {item.type === "article" && item.image && (
                <Link href={item.href} className="relative block overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=""
                  />
                </Link>
              )}
              {item.type === "video" && item.youtubeId && (
                <Link href={item.href} className="relative block overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    loading="lazy"
                    src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </Link>
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="eyebrow mb-3">{item.category}</div>
                <h3 className="font-black text-foreground mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  {item.type === "video" ? "Watch video" : "Read more"} <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
