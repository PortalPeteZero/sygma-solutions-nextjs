import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Why Connect the Genny First | Training Guide | Sygma',
  description: 'Passive detection alone is not enough to identify buried services. Sygma\'s Genny-First methodology and why it produces measurable improvements in site safety.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/genny-first-methodology' },
  openGraph: {
    title: 'Why Connect the Genny First | Training Guide | Sygma',
    description: 'Passive detection alone is not enough to identify buried services. Sygma\'s Genny-First methodology and why it produces measurable improvements in site safety.',
    url: 'https://sygma-solutions.com/knowledge-hub/genny-first-methodology',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function GennyFirstMethodology() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema({
        headline: "Why You Should Always Connect the Genny First",
        description: "Passive detection alone is not enough to identify buried services. Sygma's Genny-First methodology and why it produces measurable improvements in site safety.",
        url: "/knowledge-hub/genny-first-methodology",
        datePublished: "2026-03-09",
        image: "cat-16",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "Why You Should Always Connect the Genny First" },
      ]) }} />
      <InnerPageHero
        image="cat-83"
        alt="Genny-first methodology for effective underground utility signal tracing"
        eyebrow="Knowledge Hub"
        headline="Why You Should Always Connect the Genny First"
        sub="Passive detection alone is not enough. Sygma's Genny-First methodology and why it produces measurable improvements in site safety."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "Why You Should Always Connect the Genny First" },
        ]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link href="/knowledge-hub?filter=articles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
            &larr; Back to Articles
          </Link>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="container mx-auto px-6 md:px-8 flex gap-12 items-start">
          <aside className="hidden lg:block w-60 shrink-0 sticky top-24">
            <KnowledgeHubSidebar />
          </aside>
          <article className="min-w-0 flex-1 max-w-3xl">

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            If you observe cable avoidance practice on construction sites across the UK, you will see the same pattern in the majority of cases. The operative takes a CAT from the van, switches it on, walks the area in Power mode and Radio mode, marks a few lines on the ground, and puts the locator away. The Genny stays in the van, still in its case, unused.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            This approach is so widespread that many operatives consider it the standard workflow. It is not. It is an incomplete survey that leaves a significant proportion of buried services undetected. The Genny is not optional equipment, and it is not a backup tool for difficult sites. It is a fundamental part of the locating process, and it should be the starting point, not the afterthought.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Passive Detection Actually Detects</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A CAT in Power mode detects electromagnetic fields radiating from live electricity cables. This is useful, but it only finds cables that are carrying load at the time of the survey. An electricity cable that is connected but not in use, or one that is carrying a balanced three-phase load, may produce little or no detectable signal.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Radio mode detects very low frequency radio signals that couple onto metallic conductors from long-wave radio transmitters. These signals can travel along metal pipes and cables, making them detectable. However, the strength of the re-radiated signal depends on the length of the conductor, its depth, the soil conditions, and its proximity to other metallic services. Plastic pipes, fibre optic cables, and short sections of metallic service will often produce no response in Radio mode.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Put simply: passive modes detect what happens to be detectable at that moment. They do not detect everything that is buried in the ground.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What the Manufacturers Say</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            This is not a point Sygma is making in isolation. The manufacturer documentation backs it up. The RadioDetection ABC book states that despite passive signals existing, the best signal to trace is an active signal that has been deliberately applied. The C-Scope manual advises that most buried metallic services not found in Radio mode should be detected using a generator. A Leica blog post suggests that passive-only detection could miss up to 60% of buried utilities. Based on Sygma's own CAT and Genny training data, the real-world figure may be closer to 70 to 80%.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            These are not fringe opinions. They are in the documentation that ships with the equipment. The case for Genny First is not something Sygma invented. It is the conclusion that follows logically from reading what the manufacturers have been saying all along.
          </p>

          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-64" width={1200} height={900} alt="Genny and CAT training on a live utility site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-81" width={1200} height={900} alt="CAT and Genny training practical session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-39" width={1200} height={900} alt="Signal generator application during CAT and Genny training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What the Genny Does Differently</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The Genny (signal generator) applies a known signal at a specific frequency onto a target service. The CAT then detects that known signal in Genny mode. Because you are applying the signal yourself rather than relying on whatever happens to be present, you control what gets detected. You can target specific services, apply signals to non-metallic ducts (using methods like Capacitance), and systematically work through each service in the area.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            There are five signal application methods available, each suited to different situations. Direct Connection attaches the signal lead directly to a metallic service or tracer wire, producing the strongest and most targeted signal. Clamp places a signal clamp around a cable or pipe without needing to disconnect it. Capacitance couples a signal onto a non-metallic duct through its outer wall. Induction radiates a signal into the ground from a distance, which can couple onto nearby services, though with less precision. Nulling Out is used to eliminate a known signal from one service to make an adjacent service easier to detect.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Why Genny-First, Not Genny-Second</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The conventional approach taught by many providers is to scan in passive modes first and then use the Genny if needed. The problem with this sequence is that once an operative has completed a passive scan and believes the area is clear, the motivation to then set up and use the Genny drops significantly. In practice, it rarely happens.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Sygma's Genny-First methodology reverses this. The operative starts by applying a Genny signal to a known service, locates it, and then moves systematically through the area applying signals to each service point. Passive modes are used afterwards to identify any additional services that were not targeted with the Genny. This approach ensures the Genny is always used, and it positions passive detection as a supplementary check rather than the primary method.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            There is a simpler way to put it. If an operative does a passive sweep and finds nothing, they still need the Genny to confirm the area is clear. If they find something, they still need the Genny to trace it properly. Both outcomes lead to the same place. So why not just start there?
          </p>

          <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-82" width={1200} height={900} alt="Genny signal application on a live utility site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-02" width={1200} height={900} alt="Active detection with Genny signal generator" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden aspect-[4/3] bg-muted">
              <Image src="cat-10" width={1200} height={900} alt="CAT and Genny training in practice" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What About Avoidance Mode?</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Newer CAT locators include an avoidance or all-scan mode that appears to detect in Power, Radio, and Genny modes simultaneously. Some operatives and site procedures use an initial avoidance sweep in place of working through the individual modes. It is worth being clear about what avoidance mode actually does.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            According to the CAT4 specification, the sensitivity in avoidance mode is the same as in the individual Power and Radio modes. It does not detect anything that the individual modes could not detect separately. An avoidance sweep will still miss the same buried services that a passive-only survey would miss. The Genny is the only thing that changes that picture, and avoidance mode is not a substitute for it.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Numbers</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Organisations that have sent their operatives through Sygma's training programmes and adopted the Genny-First methodology consistently report a 70 to 80% increase in Genny usage rates. This is not a marginal improvement. For a workforce that was previously leaving the Genny in the van on the majority of jobs, it represents a fundamental shift in how pre-excavation surveys are carried out.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The corresponding effect on strike rates varies by organisation and sector, but the direction is consistent: more Genny usage means more services identified before excavation, which means fewer surprises when the ground is opened.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What to Look for in Training</h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            If your operatives are not routinely using the Genny on every job, the issue is almost certainly one of training rather than equipment. A course that spends 30 minutes demonstrating the Genny at the end of the day will not change behaviour. What changes behaviour is structured, hands-on practice with all five signal application methods, realistic scenarios that demonstrate why passive-only surveying fails, and assessment criteria that require Genny competence to pass. Any course that allows an operative to pass without demonstrating Genny proficiency is not preparing them for real-world conditions.
          </p>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
            <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/knowledge-hub/utility-strikes-first-20-metres" className="text-primary hover:underline">4 Behaviours That Can Cause Cable Strikes on Site</Link></li>
              <li><Link href="/knowledge-hub/genny-first-in-practice-video" className="text-primary hover:underline">Genny First in Practice: Watch the Video</Link></li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
            <h3 className="font-bold text-foreground mb-2">Related Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/genny-cat-training" className="text-primary hover:underline">Genny and CAT Training</Link></li>
              <li><Link href="/courses/eus-cat1" className="text-primary hover:underline">EUSR CAT1 Cable Avoidance Training</Link></li>
              <li><Link href="/courses/proqualcat1-training" className="text-primary hover:underline">ProQual CAT1 Training</Link></li>
              <li><Link href="/courses/advanced-em-locator" className="text-primary hover:underline">Advanced Electromagnetic Locator Training</Link></li>
            </ul>
          </div>

          </article>
        </div>
      </div>
    </>
  );
}
