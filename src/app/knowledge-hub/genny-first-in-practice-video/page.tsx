import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videoObjectSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';

const YOUTUBE_ID = "IgxGksU3WQ4";

export const metadata: Metadata = {
  title: 'CAT and Genny Training: The Genny First Approach | Sygma',
  description: 'Watch Sygma\'s CAT and Genny training video: why connecting the signal generator first is the correct approach to underground utility location.',
  alternates: {
    canonical: 'https://sygma-solutions.com/knowledge-hub/genny-first-in-practice-video',
  },
  openGraph: {
    title: 'CAT and Genny Training: The Genny First Approach | Sygma',
    description: 'Watch Sygma\'s CAT and Genny training video: why connecting the signal generator first is the correct approach to underground utility location.',
    url: 'https://sygma-solutions.com/knowledge-hub/genny-first-in-practice-video',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

export default function GennyFirstVideo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: videoObjectSchema({
        name: "CAT and Genny Training: The Genny First Approach Explained",
        description: "Sygma's 16-minute cable avoidance training video explains why connecting the signal generator first is the correct approach to underground utility location — not a last resort.",
        url: "/knowledge-hub/genny-first-in-practice-video",
        youtubeId: YOUTUBE_ID,
        uploadDate: "2026-03-22",
        duration: "PT16M7S",
        thumbnailUrl: `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "CAT and Genny Training: The Genny First Approach Explained" },
      ]) }} />
      <InnerPageHero
        image="/images/courses/CAT4-and-Genny-41.webp"
        alt="Video guide showing the Genny-first cable detection method in practice"
        eyebrow="Knowledge Hub"
        headline="CAT & Genny Training: The Genny First Approach Explained"
        sub="Why the standard Power, Radio, Genny sequence is the wrong way round — and what the manufacturer manuals have been saying all along."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "Genny First Approach Explained" },
        ]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link href="/knowledge-hub?filter=videos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
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
              title="CAT and Genny Training: The Genny First Approach Explained"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full aspect-video rounded-lg border-0"
            />
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4">What This Video Covers</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This video is aimed at CAT and Genny operators — the people on the ground using this kit day to day. It is particularly relevant for anyone who has completed EUSR Category 1 Locate training or a one-day cable avoidance course and wants to understand the methodology behind the equipment, not just how to switch it on. It challenges the standard sequence most operators are trained in: Power, then Radio, then Genny. It argues that sequence is the wrong way round, explains why the industry already knows this but has not caught up with it in practice, and sets out the case for putting the Genny first every time.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4">The Sequence Everyone Is Taught</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Ask most trained CAT and Genny operators how they start an underground utility location survey and you will get the same answer. Power mode first, then Radio, then the Genny if nothing has shown up. It is the order they were taught. It is often the order written into on-site competency documents and assessment checklists. And across the industry, companies acknowledge they want to increase Genny usage and reduce strikes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            There is a contradiction in all of that. If increased Genny usage is the goal, and if it is widely accepted that many utility strikes could have been avoided with a transmitter, then why is the transmitter being left until last?
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4">What the Manufacturer Manuals Say</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The evidence for the Genny being the most effective tool does not come from Sygma. It comes from the manufacturers themselves. User guides state that power and radio signals may not be present, and advise using a Genny whenever searching for pipes. Instruction manuals describe using a Genny as the most reliable way to detect a pipe or cable. The RadioDetection ABC book makes the point clearly: despite passive signals existing, the best signal to trace is an active signal that has been deliberately applied.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A Leica blog post suggests that up to 60% of buried utilities could be missed when detecting in passive modes only. In practice, based on Sygma's CAT and Genny training data, that figure may be closer to 70 or 80%. The C-Scope manual puts it this way: most buried metallic services not found in Radio mode should be detected using a generator. These are not fringe opinions. They are in the documentation that comes with the equipment.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4">The Logic Problem with Passive First</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The most common defence of the Power, Radio, Genny sequence is this: we use passive modes first, and if we do not find anything, then we use the Genny. That statement contains its own contradiction. It admits the Genny will find what the passive modes missed. The logical question is why not just use it first.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Think of it this way. You walk into a completely dark room. You spend five minutes fumbling around trying to make sense of what is in there. Then you switch the light on. Nobody would do it that way. They would switch the light on first. That is exactly what Genny First means.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The same logic applies to an initial sweep. If that sweep finds nothing, you still need the Genny. If it finds something, you still need the Genny to trace it properly. Both outcomes lead to the same place. So what is the initial sweep actually achieving?
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4">What About Avoidance Mode?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Newer locators include an avoidance or all-scan mode that appears to scan in Genny, Power, and Radio simultaneously. Some workflows recommend an initial sweep in avoidance mode before moving into detailed scans. The technical specification for the CAT4 shows the sensitivity in avoidance mode is the same as in the individual modes. It will not detect anything that the individual modes could not detect. And because detailed individual scans are still required regardless, the case for an initial avoidance sweep is not straightforward. Starting with the Genny and doing Power and Radio at the end is more efficient and harder to shortcut under time pressure.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4">Time Pressure and the Genny That Never Gets Used</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            On a real site, under real time pressure, the step that goes last is the step that gets skipped. If the Genny is the last thing on the list, it is the most vulnerable to being dropped when the job feels routine. Sygma's CAT and Genny training data consistently shows a significant increase in Genny usage among operatives trained in the Genny First method. The approach itself is not technically difficult. The training is about making it the first instinct rather than a fallback.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4">Looking at the Data Differently</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Many companies measure Genny usage through pie charts from CAT data downloads, looking for roughly equal use across modes. But if 60% or more of buried utilities can only be found with the Genny, equal usage across modes is not actually the right target. More importantly, pie charts do not show which mode was used first. Drilling into the raw data to see how surveys actually start gives a much more useful picture of whether operators are working the way they have been trained, or reverting to passive first once they are back on site.
          </p>

          <div className="bg-muted/40 rounded-lg p-6 mb-10">
            <h3 className="text-lg font-bold text-foreground mb-3">Also in the Knowledge Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline font-medium">
                  Why You Should Always Connect the Genny First
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground mb-4">
              Ready to train your team in the Genny First approach? Sygma's CAT and Genny training covers the full methodology, connection techniques, data analysis, and site application — delivered on-site, UK-wide.
            </p>
            <Link
              href="/courses/genny-cat-training"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors gap-2"
            >
              View CAT and Genny Training <ArrowRight size={16} />
            </Link>
          </div>

          </article>
        </div>
      </div>
    </>
  );
}
