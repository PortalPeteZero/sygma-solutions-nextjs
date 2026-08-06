import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videoObjectSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

const YOUTUBE_ID = "TOssiNUyVKQ";

export const metadata: Metadata = {
  title: 'Genny and CAT Direct Connection on Street Lighting | Sygma',
  description: 'Watch Sygma\'s direct connection video: earthing the Genny, connecting at a lighting column, concrete columns, gas risers and telecoms access on a real UK street.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/genny-cat-direct-connection' },
  openGraph: {
    title: 'Genny and CAT Direct Connection on Street Lighting | Sygma',
    description: 'Watch Sygma\'s direct connection video: earthing the Genny, connecting at a lighting column, concrete columns, gas risers and telecoms access on a real UK street.',
    url: 'https://sygma-solutions.com/knowledge-hub/genny-cat-direct-connection',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function GennyCatDirectConnectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoObjectSchema({
        name: "Genny and CAT Direct Connection: Street Lighting, LV and Telecoms",
        description: "Sygma's six-minute on-site video showing direct connection with a Genny and CAT: earthing, connecting at a street lighting column, concrete columns, gas risers and telecoms chambers.",
        url: "/knowledge-hub/genny-cat-direct-connection",
        youtubeId: YOUTUBE_ID,
        uploadDate: "2026-08-04T07:29:44+00:00",
        duration: "PT6M6S",
        thumbnailUrl: `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "Genny and CAT Direct Connection: Street Lighting, LV and Telecoms" },
      ]) }} />
      <InnerPageHero
        image="/articles/videos/genny-cat-direct-connection-hero.jpg"
        alt="A connection lead clipped onto the door tab of a street lighting column"
        eyebrow="Knowledge Hub"
        headline="Genny and CAT Direct Connection: Street Lighting, LV and Telecoms"
        sub="Six minutes on a real street: setting up and earthing the Genny4, connecting at a lighting column, what to do when the column is concrete, gas risers, and the approvals you need before a telecoms lid comes up."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "Direct Connection on Site" },
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
              title="Genny and CAT Direct Connection: Street Lighting, LV and Telecoms"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full aspect-video rounded-lg border-0"
            />
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4">What This Video Covers</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Six minutes of real fieldwork, not slides. A utility detection survey should always start with the Genny applying a signal to known services, and this video shows exactly what that looks like at the roadside: the earth pin going in, the leads going on, the tone changing, and the trace coming off a live lighting column. It finishes on the connections most teams never think to make: gas risers, water hydrants, and the crossbonding system in domestic properties.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Setting Up and Earthing the Genny</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The earth pin goes in very close to the column, at a shallow angle to minimise contact with anything below. Keeping the Genny and its leads close to the column lets you work the CAT right up to it. A change in tone from the Genny confirms a good circuit, and once you have it the Genny can be muted while you locate.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            On a tee'd off network the signal can run the LV main and pick up the services with it. On a dedicated loop-in circuit only the street lighting is located, and more work must be done: the video is straight about which is which.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Tracing, Depth and the 90-Degree Rule</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With the signal applied, the cable is traced with the CAT at 90 degrees to its route. The video covers following the line, what to watch for at junctions and where multiple Genny signals are present, and taking a depth reading properly.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Beyond the Column: Risers, Hydrants and Crossbonding</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Street furniture is only the start. Direct connections can be made to metal casings, water hydrants for the water main, and via the crossbonding system at domestic properties, which puts a full signal on the LV service. The habit the video builds: read the plan looking for places to apply the signal, not just places to scan.
          </p>

          <div className="bg-muted/40 rounded-lg p-6 mb-10">
            <h3 className="text-lg font-bold text-foreground mb-3">Also in the Knowledge Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/knowledge-hub/genny-first-in-practice-video" className="text-primary hover:underline font-medium">
                  CAT & Genny Training: The Genny First Approach Explained
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub/cat-genny-signal-application-webinar" className="text-primary hover:underline font-medium">
                  CAT and Genny Training Webinar: Signal Application
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline font-medium">
                  The Genny-First Methodology
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
