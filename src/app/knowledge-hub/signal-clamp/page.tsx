import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE_NAME } from '@/lib/metadata';

const OG_IMAGE = 'https://sygma-solutions.com/articles/signal-clamp/clamp-comms-cable-access-box.jpeg';

export const metadata: Metadata = {
  title: 'The Signal Clamp: What It Does and When to Use It | Sygma Solutions',
  description: "What a signal clamp is, how it compares with direct connection and induction, and the situations on site where it finds the services a Genny and CAT miss.",
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/signal-clamp' },
  openGraph: {
    title: 'The Signal Clamp: What It Does and When to Use It | Sygma Solutions',
    description: "What a signal clamp is, how it compares with direct connection and induction, and the situations on site where it finds the services a Genny and CAT miss.",
    url: 'https://sygma-solutions.com/knowledge-hub/signal-clamp',
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 900 }],
    type: 'article',
  },
};

const FAQS = [
  {
    q: "What is a signal clamp?",
    a: "A signal clamp, sometimes called an induction clamp, is an accessory for the Genny. It clips around a cable or pipe at an accessible point and applies the locating signal to that one service without cutting into it or interrupting the supply, so the CAT can then follow it.",
  },
  {
    q: "When do you use a signal clamp instead of induction?",
    a: "Use a clamp when you need a clean signal on one specific service rather than a broad signal across everything nearby. That covers congested ground where induction lights up too many services, comms cables that a 33 kHz induction signal cannot follow, and any cable you can reach at an access point.",
  },
  {
    q: "Can you use a signal clamp on a live cable?",
    a: "Yes. The clamp applies the signal by induction through a closed core around the cable, without any direct electrical connection, so it is safe to use on live services where clipping a direct connection lead would not be.",
  },
  {
    q: "What frequency does a signal clamp use?",
    a: "Because the clamp is a form of connection, the Genny can drive it at both 33 kHz and 131 kHz. Standard induction is limited to 33 kHz. The higher 131 kHz frequency is what high-resistance lines such as communications cables need to carry a usable signal.",
  },
];

export default function SignalClampArticle() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema({
        headline: "The Signal Clamp: What It Does, and When You Need One",
        description: "What a signal clamp is, how it compares with direct connection and induction, and the situations on a UK site where it finds services the Genny and CAT miss.",
        url: "/knowledge-hub/signal-clamp",
        datePublished: "2026-07-01",
        dateModified: "2026-07-01",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "The Signal Clamp" },
      ]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(FAQS) }} />

      <InnerPageHero
        image="/articles/signal-clamp/clamp-comms-cable-access-box.jpeg"
        alt="A signal clamp fitted around a communications cable in a footway access box, with the Genny transmitter feeding it"
        eyebrow="Field Note · Cable Location"
        headline="The Signal Clamp: What It Does, and When You Need One"
        sub="A Genny and CAT will find most buried services, but not all of them. The signal clamp is the tool that puts a clean, reliable signal on the ones they miss."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "The Signal Clamp" },
        ]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link href="/knowledge-hub#articles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
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
            A Genny and CAT will find most buried services, but not all of them. Some cables carry no usable signal by induction. Others sit among so many services that the trace becomes a guess. In both cases there is a tool that puts a clean, reliable signal on the exact service you are trying to find: the signal clamp. Despite that, plenty of teams leave the clamp at the bottom of the kit bag, or do not carry one at all. Here is what it does, how it compares with the other ways of applying a signal, and where it earns its place on site.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">01 &middot; What a signal clamp is</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A signal clamp, sometimes called an induction clamp, is an accessory for the <Link href="/courses/cat-and-genny-training" className="text-primary hover:underline">Genny</Link>, the transmitter side of a Genny and CAT set (for example the Radiodetection Genny4 and gCAT4+). It is a split core that opens and clips around a cable or pipe at any point you can reach: a cable riser, an inspection chamber, a stop valve, a footway access box, or where a service enters a building.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            When the Genny drives a signal through the clamp, the clamp induces that signal onto the service running through it, the way a transformer passes energy from one winding to another. It does this without cutting into the cable and without interrupting the supply, so it is safe on live services where a direct connection would not be. The <Link href="/courses/cable-avoidance-training" className="text-primary hover:underline">Cable Avoidance Tool (CAT)</Link> then works as normal, following the signal now travelling along that one service.
          </p>

          <figure className="my-8">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/signal-clamp/comms-access-box-locate-sunny.jpeg" width={1200} height={900} alt="Operator locating at a communications access box, the Genny driving a signal clamp on the cable inside" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">Locating at a communications access box. The Genny drives a clamp on the target cable inside the box, so the team can trace it cleanly from the access point rather than relying on a weak induction signal.</figcaption>
          </figure>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Because the clamp is a form of connection, the Genny can drive it at both <strong className="text-foreground">33 kHz and 131 kHz</strong>. Induction is limited to 33 kHz alone. That second frequency matters, as we will see.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">02 &middot; How it compares with direct connection and induction</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The Genny can apply a signal in several ways. For buried services, three matter most.
          </p>

          <figure className="my-8">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/signal-clamp/genny-applications.jpg" width={1200} height={750} alt="The ways a Genny can apply a signal: direct connection, signal clamp, and induction" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-contain bg-white" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">The Genny can apply a signal in several ways. For buried services the three that matter are direct connection, induction and the clamp.</figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <figure>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <Image src="/articles/signal-clamp/method-direct-connection.jpg" width={900} height={675} alt="A Genny making a direct connection to a service with a connection lead" sizes="(max-width: 640px) 100vw, 384px" className="w-full h-full object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground italic mt-2">Direct connection: the cleanest signal, but it needs safe access to the conductor.</figcaption>
            </figure>
            <figure>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <Image src="/articles/signal-clamp/method-induction.jpg" width={900} height={675} alt="A Genny applying a signal by induction, sitting on the ground above the service" sizes="(max-width: 640px) 100vw, 384px" className="w-full h-full object-cover" />
              </div>
              <figcaption className="text-xs text-muted-foreground italic mt-2">Induction: fast and needs no access, but it radiates into every service in range.</figcaption>
            </figure>
          </div>

          <ul className="space-y-3 mb-6 text-muted-foreground leading-relaxed list-disc pl-5">
            <li><strong className="text-foreground">Direct connection.</strong> The Genny is clipped straight onto the conductor. The cleanest, strongest signal there is, but it needs safe access to the conductor, which you rarely have on a live buried service, and it is not possible on HV.</li>
            <li><strong className="text-foreground">Induction.</strong> The Genny sits on the ground and radiates a signal that couples into nearby metal. Fast, needs no access, and useful for a first sweep. But it radiates into every service in range, so in congested ground it lights everything up and the target is lost among them. It is limited to 33 kHz, which cannot follow high-resistance lines such as comms cables.</li>
            <li><strong className="text-foreground">Clamping.</strong> The Genny drives the signal through a clamp fitted around one specific service. That service carries a strong signal and the ones around it carry only a weak return, so you can follow the target with confidence. It works on live cables, and it gives access to 131 kHz.</li>
          </ul>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Put simply, induction is broad and fast but indiscriminate. A clamp is precise. It puts the signal where you want it and nowhere else.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">03 &middot; Where a signal clamp earns its place</h2>

          <h3 className="text-xl font-black text-foreground mb-3 mt-8">Congested ground and trial holes</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Footpaths packed with cables are the hardest case. Getting an induction signal cleanly onto every service is difficult, and shallower cables mask deeper ones. This is where trial holes earn their place. Once a service is exposed in the trial hole, a clamp goes straight onto it, so each cable can be clamped in turn and traced out individually. One trial hole, worked this way, turns a difficult survey into a set of clean, separate traces, which is exactly the discipline that sits alongside <Link href="/courses/hsg47-training" className="text-primary hover:underline">HSG47 safe digging</Link>.
          </p>

          <figure className="my-8">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/signal-clamp/trial-hole-footpath.jpg" width={1200} height={750} alt="A trial hole in a footpath with multiple buried services exposed across the trench" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">A trial hole exposing the services across a footpath. Each one can be clamped in turn and traced out cleanly.</figcaption>
          </figure>

          <h3 className="text-xl font-black text-foreground mb-3 mt-8">Communications cables</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Comms cables, BT and cable TV, are the clearest example. They are high-resistance lines, so a 33 kHz induction signal cannot follow them at all. At a footway access box the cable is reachable, so it can be clamped directly and traced with the 131 kHz signal these lines need. Without a clamp there is often no way to put a usable signal on them.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <figure>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <Image src="/articles/signal-clamp/comms-access-box-locate-1.jpeg" width={900} height={675} alt="Locating a communications cable from an access box with a signal clamp" sizes="(max-width: 640px) 100vw, 384px" className="w-full h-full object-cover" />
              </div>
            </figure>
            <figure>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <Image src="/articles/signal-clamp/comms-access-box-locate-2.jpeg" width={900} height={675} alt="Tracing a clamped communications cable away from the access chamber" sizes="(max-width: 640px) 100vw, 384px" className="w-full h-full object-cover" />
              </div>
            </figure>
          </div>
          <p className="text-xs text-muted-foreground italic -mt-4 mb-8">Clamp the comms cable at the access box, then trace it cleanly along its buried route on 131 kHz.</p>

          <h3 className="text-xl font-black text-foreground mb-3 mt-8">Cables you can reach above ground</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Not every clamp needs a trial hole. Where a service is accessible above ground, a cable coming down a pole or running down a wall before it enters the ground, it can be clamped there in seconds and traced cleanly along its buried route. No excavation and no delay.
          </p>

          <figure className="my-8">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/signal-clamp/clamp-cable-down-wall.jpg" width={1200} height={750} alt="A signal clamp around a cable where it runs down a wall into the floor, with the Genny alongside" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">A clamp on a cable where it drops down a wall, no excavation needed.</figcaption>
          </figure>

          <h3 className="text-xl font-black text-foreground mb-3 mt-8">HV cables</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            High voltage is the strongest case of all. There is no safe way to make a direct connection to an HV cable, and induction struggles because HV sits deep and is often masked by the shallower cables above it. The reliable way to get a signal onto HV is to expose it in a trial hole and clamp it, which puts a clean signal straight onto the cable where a strike does the most damage.
          </p>

          <figure className="my-8">
            <div className="bg-muted/30 border border-border rounded-lg p-4 overflow-x-auto">
              <img src="/articles/signal-clamp/hv-masking-cross-section.svg" alt="Cross-section of a footpath showing a deep HV cable masked from the induction signal by a shallower cable above it" className="w-full h-auto max-w-full" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">In congested ground the induction signal lights up the shallow services, but a deep HV cable sitting beneath a shallower one is screened from it and can be missed. Exposing the HV in a trial hole and clamping it puts a clean signal straight onto it.</figcaption>
          </figure>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">04 &middot; The cost case</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A signal clamp is not expensive kit. List price is around &pound;331, and with the discounts usually available it works out closer to &pound;215, one per Genny and CAT set.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">~&pound;215</p>
              <p className="text-xs text-muted-foreground">Typical cost of a signal clamp after discount. One per Genny and CAT set.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">Far more</p>
              <p className="text-xs text-muted-foreground">The cost of a single utility strike: repair, standby, delay, reinstatement, penalty, and on HV a safety risk.</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Set the price of the clamp against the cost of a single utility strike: the repair, the standby, the programme delay and reinstatement, the client penalty, and on HV a genuine safety risk. A clamp pays for itself many times over the first time it prevents a strike. As risk reduction per pound spent, there are few better buys.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The bottom line</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The value of a signal clamp comes down to one thing, a confident trace instead of a guess. It finds services that induction cannot follow, it separates one cable from the crowd in congested ground, and it puts a clean signal on the cables where a strike does the most damage. Every confident trace is a strike that does not happen.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            If your teams carry a Genny and CAT but not a clamp, they are working without the one tool that covers the hardest and most dangerous services. It is a small addition to the kit and a large addition to what they can safely locate. Using one well is a skill worth training for, as part of a <Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline">Genny-First approach</Link> to safe location. Sygma covers the clamp alongside every other signal-application method on our <Link href="/courses/cat-and-genny-training" className="text-primary hover:underline">CAT and Genny Training</Link> and <Link href="/courses/cable-avoidance-training" className="text-primary hover:underline">Cable Avoidance Training</Link> courses.
          </p>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
            <h3 className="font-bold text-foreground mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <p className="font-semibold text-foreground mb-1">{f.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-4">
            <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline">Why You Should Always Connect the Genny First</Link></li>
              <li><Link href="/knowledge-hub/detecting-plastic-gas-service-pipes" className="text-primary hover:underline">Detecting Plastic Pipes: Methods and Their Limits</Link></li>
              <li><Link href="/knowledge-hub/utility-strikes-first-20-metres" className="text-primary hover:underline">4 Behaviours That Can Cause Cable Strikes on Site</Link></li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
            <h3 className="font-bold text-foreground mb-3">Related Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/cat-and-genny-training" className="text-primary hover:underline font-semibold">CAT and Genny Training</Link></li>
              <li><Link href="/courses/cable-avoidance-training" className="text-primary hover:underline">Cable Avoidance Training</Link></li>
              <li><Link href="/courses/hsg47-training" className="text-primary hover:underline">HSG47 Training</Link></li>
              <li><Link href="/courses/eusr-cat1-cat2-combined" className="text-primary hover:underline">EUSR CAT 1 and CAT 2 Combined Training</Link></li>
            </ul>
          </div>

          </article>
        </div>
      </div>
    </>
  );
}
