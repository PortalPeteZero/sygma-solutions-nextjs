import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videoObjectSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

const YOUTUBE_ID = "ghlb9u8YTIk";

export const metadata: Metadata = {
  title: 'CAT and Genny Training Webinar: Signal Application | Sygma',
  description: 'Watch Sygma\'s 72-minute CAT and Genny webinar on signal application: why street lighting first, dual frequency, earthing, direct connection vs induction, and signal splitting.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/cat-genny-signal-application-webinar' },
  openGraph: {
    title: 'CAT and Genny Training Webinar: Signal Application | Sygma',
    description: 'Watch Sygma\'s 72-minute CAT and Genny webinar on signal application: why street lighting first, dual frequency, earthing, direct connection vs induction, and signal splitting.',
    url: 'https://sygma-solutions.com/knowledge-hub/cat-genny-signal-application-webinar',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CatGennySignalApplicationWebinarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoObjectSchema({
        name: "CAT and Genny Training Webinar: Signal Application",
        description: "Sygma's full signal application webinar for CAT and Genny operators: connection versus induction, street lighting first, dual frequency on the Genny4, earthing technique, tracing pipes versus cables, signal splitting and scan technique.",
        url: "/knowledge-hub/cat-genny-signal-application-webinar",
        youtubeId: YOUTUBE_ID,
        uploadDate: "2026-04-26T14:28:46+00:00",
        duration: "PT1H12M19S",
        thumbnailUrl: `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "CAT and Genny Training Webinar: Signal Application" },
      ]) }} />
      <InnerPageHero
        image="/articles/videos/webinar-hero.jpg"
        alt="Setting up the Genny4 transmitter beside a lighting column"
        eyebrow="Knowledge Hub"
        headline="CAT and Genny Training Webinar: Signal Application"
        sub="The full 72-minute webinar. Signal application from first principles: why you start with street lighting, the two ways lighting is wired, dual frequency, earthing the transmitter, and where the signal actually goes once you have applied it."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "Signal Application Webinar" },
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
              title="CAT and Genny Training Webinar: Signal Application"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full aspect-video rounded-lg border-0"
            />
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4">What This Webinar Covers</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Seventy-two minutes of theory with live questions from working operators. It starts from the two main ways of using a transmitter, connection and induction, and builds up to the thing most courses never explain: where the signal actually goes once it is on the network, and what that means for what your CAT is showing you.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Street Lighting First, and the Two Ways It Is Wired</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The webinar makes the case Sygma teaches on every course: connect at the lighting column first. On a tee'd off network the same LV main that feeds the houses feeds the lighting, so one connection can light up the whole street. On a loop-in loop-out circuit you get the lighting alone. You often do not know which you have until you are on site, and the webinar is straight about the twenty minutes you waste finding out the hard way.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Dual Frequency and the Wraparound Trick</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The Genny4 series sends out two frequencies at once. The higher frequency jumps gaps and makes techniques like wrapping the lead around a concrete column work. The webinar covers when dual frequency helps you and when it misleads you.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Earthing: Close, Not Far</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A long-running myth says the earth pin should go metres from the column. The webinar demonstrates the opposite: put it nice and close, keep the circuit tight, and you can work the CAT right up to the column. It also covers using water as an earth when there is no soft ground.
          </p>
          <h2 className="text-2xl font-black text-foreground mb-4">Pipes, Cables and Signal Splitting</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Tracing a pipe is not like tracing a cable: a metal pipe leaks signal along its length, and corroded insulation leaks faster. The webinar works through signal splitting at junctions with real numbers, the 70/30 splits, what happens at every tee, and why a 10% remnant next to a 40% branch is so hard to see. It closes on scan technique, including why Sygma no longer teaches zigzag scans.
          </p>

          <div className="bg-muted/40 rounded-lg p-6 mb-10">
            <h3 className="text-lg font-bold text-foreground mb-3">Also in the Knowledge Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/knowledge-hub/locating-hv-cables" className="text-primary hover:underline font-medium">
                  How to Locate HV Cables with a CAT and Genny
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline font-medium">
                  The Genny-First Methodology
                </Link>
              </li>
              <li>
                <Link href="/knowledge-hub/genny-cat-direct-connection" className="text-primary hover:underline font-medium">
                  Genny and CAT Direct Connection: Street Lighting, LV and Telecoms
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
