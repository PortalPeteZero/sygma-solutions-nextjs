import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videoObjectSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

const YOUTUBE_ID = "tQTrObaCcLE";

export const metadata: Metadata = {
  title: 'CAT and Genny Training Video: The Full Method | Sygma',
  description: 'Watch Sygma\'s CAT and Genny training video: pre-use checks, voltstick, direct connection, signal clamp, airborne signal checks, pinpointing and depth in ten minutes.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/cat-and-genny-training-video' },
  openGraph: {
    title: 'CAT and Genny Training Video: The Full Method | Sygma',
    description: 'Watch Sygma\'s CAT and Genny training video: pre-use checks, voltstick, direct connection, signal clamp, airborne signal checks, pinpointing and depth in ten minutes.',
    url: 'https://sygma-solutions.com/knowledge-hub/cat-and-genny-training-video',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CatAndGennyTrainingVideoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoObjectSchema({
        name: "CAT and Genny Training Video: The Full Method in 10 Minutes",
        description: "Sygma's ten-minute CAT and Genny training video covering the complete method: pre-use inspection, service due date check, voltstick, direct connection, signal clamp, marking up, airborne signal checks and depth readings.",
        url: "/knowledge-hub/cat-and-genny-training-video",
        youtubeId: YOUTUBE_ID,
        uploadDate: "2026-03-22T16:15:13+00:00",
        duration: "PT9M40S",
        thumbnailUrl: `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "CAT and Genny Training Video: The Full Method in 10 Minutes" },
      ]) }} />
      <InnerPageHero
        image="/articles/videos/tQTrObaCcLE.jpg"
        alt="CAT and Genny training: the full method demonstrated end to end"
        eyebrow="Knowledge Hub"
        headline="CAT and Genny Training Video: The Full Method in 10 Minutes"
        sub="The whole method end to end in under ten minutes: pre-use checks, applying a signal, locating, pinpointing, airborne signal checks and taking a depth reading."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "The Full Method in 10 Minutes" },
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
              title="CAT and Genny Training Video: The Full Method in 10 Minutes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full aspect-video rounded-lg border-0"
            />
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4">What This Video Covers</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The complete Sygma method in under ten minutes, in the order it happens on site. It is the video to put in front of anyone who has done a course and needs the whole sequence refreshed before they stand over real ground.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Before You Switch Anything On</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A visual inspection of the CAT and Genny, confirming the service due date on the CAT display, and the voltstick check before touching or connecting to any metallic surface. The checks take a minute and they are not optional.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Applying the Signal</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Direct connection to street furniture and metal casings, tracing a water main from the hydrant, what happens to the tone when the earth connection is made (nothing: the change comes on the signal side), and using the signal clamp around a pipe or cable, including the safety check with the customer for critical electrical appliances.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Locating, Marking Up and the Airborne Check</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Holding the CAT at waist height with the housing parallel to the ground, moving the Genny at least ten metres from the marking-up area, and scanning across the assumed route to check for airborne signals: the false signal that comes through the air rather than the ground, and how to prove you have one.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Masked Cables and Depth</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A strong signal can mask a second cable or pipe running close by. The video shows how to recognise the possibility and what a depth reading actually refers to when the target is a pipe rather than a cable.
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
                <Link href="/knowledge-hub/genny-cat-direct-connection" className="text-primary hover:underline font-medium">
                  Genny and CAT Direct Connection: Street Lighting, LV and Telecoms
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub/signal-clamp" className="text-primary hover:underline font-medium">
                  The Signal Clamp: What It Does, and When You Need One
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
