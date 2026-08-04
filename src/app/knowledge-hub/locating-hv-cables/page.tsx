import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videoObjectSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

const YOUTUBE_ID = "4NL6ioJtWLE";

export const metadata: Metadata = {
  title: 'How to Locate HV Cables with a CAT and Genny | Sygma',
  description: 'Watch Sygma\'s video on locating HV cables with a CAT and Genny: why HV is hardest, two-man parallel sweeps, blind induction sweeps and nulling out the LV.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/locating-hv-cables' },
  openGraph: {
    title: 'How to Locate HV Cables with a CAT and Genny | Sygma',
    description: 'Watch Sygma\'s video on locating HV cables with a CAT and Genny: why HV is hardest, two-man parallel sweeps, blind induction sweeps and nulling out the LV.',
    url: 'https://sygma-solutions.com/knowledge-hub/locating-hv-cables',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function LocatingHvCablesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoObjectSchema({
        name: "How to Locate HV Cables with a CAT and Genny",
        description: "Sygma's mini-session on locating HV cables: why HV defeats passive scanning, induction over the route, the two-man parallel CAT and Genny sweep, blind induction sweeps, joint orientation and nulling out the LV signal.",
        url: "/knowledge-hub/locating-hv-cables",
        youtubeId: YOUTUBE_ID,
        uploadDate: "2026-04-26T12:49:51+00:00",
        duration: "PT12M40S",
        thumbnailUrl: `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "How to Locate HV Cables with a CAT and Genny" },
      ]) }} />
      <InnerPageHero
        image="/articles/videos/locating-hv-hero.jpg"
        alt="A CAT pinpointing over a fresh red mark on wet tarmac"
        eyebrow="Knowledge Hub"
        headline="How to Locate HV Cables with a CAT and Genny"
        sub="HV are the hardest cables to detect. Where you can and cannot get a connection, the two-man parallel sweep, the blind induction sweep, and how to null out the LV to see what is underneath."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "Locating HV Cables" },
        ]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link href="/knowledge-hub#videos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
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
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="How to Locate HV Cables with a CAT and Genny"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full aspect-video rounded-lg border-0"
            />
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4">What This Video Covers</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A short session on the cables everyone worries about most. HV sits deeper than LV, often beneath it, and there is usually no way to make a direct connection, so the standard toolkit needs adapting. This video covers the adaptations in the order you would use them.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Why HV Is the Hardest Case</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            In a typical footpath the LV sits above the HV. The shallower cable takes the induced signal and screens the deeper one, so a standard induction sweep finds the LV and misses the HV entirely. Knowing that failure mode is the starting point for everything else in the session.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">The Two-Man Parallel Sweep</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            One operator walks the Genny, the other walks the CAT in parallel, ten metres apart, inducing over the assumed route. The video demonstrates the spacing, why ten metres matters, and what the signal looks like when the cable changes position across the footpath, which is not uncommon.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Blind Induction Sweeps and Joint Orientation</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Where there is no plan line to follow, the blind induction sweep works a whole area methodically. The session also covers reading the orientation of joints, and the difference between a 2x1 sweep and the tighter patterns.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Nulling Out the LV</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When plans say HV is present but the LV is all you can hear, nulling out puts the LV signal to sleep: the dead zone either side on the Genny display shows it working, and what is left is what was hiding underneath.
          </p>

          <div className="bg-muted/40 rounded-lg p-6 mb-10">
            <h3 className="text-lg font-bold text-foreground mb-3">Also in the Knowledge Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/knowledge-hub/cat-genny-signal-application-webinar" className="text-primary hover:underline font-medium">
                  CAT and Genny Training Webinar: Signal Application
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub/genny-first-in-practice-video" className="text-primary hover:underline font-medium">
                  CAT & Genny Training: The Genny First Approach Explained
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub/strike-prevention-site-managers" className="text-primary hover:underline font-medium">
                  Utility Strike Prevention: A Guide for Site Managers
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">
              Want this method in your team's hands, not just on their screens? Sygma's <Link href="/courses/cat-and-genny-training" className="text-primary font-semibold hover:underline">CAT and Genny training</Link> covers signal application, connection techniques and site practice, delivered on-site, UK-wide.
            </p>
            <Link
              href="/courses/cat-and-genny-training"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors gap-2"
            >
              View Cable Avoidance Course <ArrowRight size={16} />
            </Link>
          </div>

          </article>
        </div>
      </div>
    </>
  );
}
