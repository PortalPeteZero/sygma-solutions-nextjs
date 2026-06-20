import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import Image from 'next/image';
import { CLOUDINARY_BASE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Detecting Plastic Pipes: Methods and Their Limits | Sygma',
  description: "Why CAT and Genny can't find plastic gas or water pipes, and what each alternative (acoustic, sonde, GPR, tracer wire, trial holes) can and can't do on site.",
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/detecting-plastic-gas-service-pipes' },
  openGraph: {
    title: 'Detecting Plastic Pipes: Methods and Their Limits | Sygma',
    description: "Why CAT and Genny can't find plastic gas or water pipes, and what each alternative (acoustic, sonde, GPR, tracer wire, trial holes) can and can't do on site.",
    url: 'https://sygma-solutions.com/knowledge-hub/detecting-plastic-gas-service-pipes',
    siteName: SITE_NAME,
    images: [{ url: `${CLOUDINARY_BASE}/cat-44`, width: 1200, height: 630 }],
    type: 'article',
  },
};

export default function DetectingPlasticGasServicePipes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema({
        headline: "Detecting Plastic Pipes: Methods and Their Limits",
        description: "Why Genny and CAT can't find plastic gas or water pipes, and what each alternative (acoustic, sonde, GPR, tracer wire, plans + trial holes) can and can't do on a real UK site.",
        url: "/knowledge-hub/detecting-plastic-gas-service-pipes",
        datePublished: "2026-06-04",
        dateModified: "2026-06-19",
        image: "cat-44",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "Detecting Plastic Pipes" },
      ]) }} />
      <InnerPageHero
        image="cat-44"
        alt="Detecting plastic gas and water pipes on a UK site with CAT, Genny, Gas Tracker, GPR and trial holes"
        eyebrow="Field Note · Underground Utilities"
        headline="Detecting Plastic Pipes: Methods and Their Limits"
        sub="Plastic pipes, gas and water alike, are one of the harder problems in utility detection. They don't show up on the kit most teams carry, and the methods that can find them all come with practical limits that matter on a real UK job site."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "Detecting Plastic Pipes" },
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
            Strikes on plastic pipes, gas and water alike, are one of the harder problems in utility detection. They don't show up on the kit most teams carry, and every method that can find them comes with a practical limit that matters once you're on a real site. Gas brings the obvious danger, but a struck water main makes its own expensive mess, and the detection problem is much the same either way. Here's what's available, and where each one runs out of road.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">01 &middot; Why Genny and CAT don't see them</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A standard locator setup is a <Link href="/courses/cat-and-genny-training" className="text-primary hover:underline">signal generator (Genny)</Link> paired with a <Link href="/courses/cable-avoidance-training" className="text-primary hover:underline">Cable Avoidance Tool (CAT)</Link>. It works by detecting electromagnetic fields. Either the conductor is radiating its own signal in Power mode, or the Genny is energising it so the CAT can pick it up. Plastic isn't a conductor, so there is nothing to detect.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A modern UK domestic gas service is yellow medium-density polyethylene (MDPE), commonly 25mm or 32mm outside diameter, with 20mm seen on smaller older runs. There is no metal in the pipe wall and nothing the Genny can clamp onto. That's the starting position before any other method is considered.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Water tells the same story in a different colour. A modern UK water service is blue MDPE, usually 25mm, and every bit as non-conductive as the gas pipe running near it. Older water mains were iron and will still answer a CAT, but the blue plastic that has replaced them will not. Gas or water, once the pipe is plastic there is nothing for the locator to clamp onto.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            It's worth being clear about what that rules out, because the marketing around locators muddies it. No electromagnetic (EM) locator finds a bare plastic pipe, whatever the brochure says. The HSE makes the same point in HSG47: locators, with the possible exception of ground-penetrating radar, will not detect plastic pipes unless a metallic tracer wire was laid with them, a tracing rod is fed into the pipe, or RFID markers were fitted. If none of that went in with the pipe, it is invisible to EM kit. That single fact sits behind everything below, and it's why any handheld claiming to find bare plastic at depth deserves a hard look first. We took one such claim apart in our <Link href="/knowledge-hub/aml-pro-ssi-locators" className="text-primary hover:underline">investigation into the AML Pro by SSI Locators</Link>.
          </p>

          <figure className="my-8">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/plastic-gas-pipes/cat-genny.jpg" width={1200} height={750} alt="Operator using a Genny and CAT on a UK street" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">Genny and CAT4 in use. Effective on metallic and energised utilities, invisible to plastic gas services.</figcaption>
          </figure>

          <div className="grid sm:grid-cols-3 gap-4 my-8">
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">25 / 32 mm</p>
              <p className="text-xs text-muted-foreground">Typical outside diameter for a UK domestic MDPE gas service.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">375 mm</p>
              <p className="text-xs text-muted-foreground">Minimum cover in private ground (IGEM/TD/4 Edition 5).</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">450 mm</p>
              <p className="text-xs text-muted-foreground">Minimum cover in footpaths and highways (IGEM/TD/4 Edition 5).</p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">02 &middot; Plastic water pipes: deeper, lower stakes, same blind spot</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Everything so far applies to any plastic pipe, but a water service differs from a gas one in two ways that matter on site. The first is depth. A gas service sits at 375mm to 450mm of cover under IGEM/TD/4. A water service goes deeper: the Water Supply (Water Fittings) Regulations 1999 put it between 750mm and 1350mm below the surface, deep enough to keep it clear of frost. So the typical water pipe is roughly twice as far down as the gas one, which takes a hard detection problem and makes it harder.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-8">
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">25 mm</p>
              <p className="text-xs text-muted-foreground">Typical outside diameter for a UK domestic blue MDPE water service.</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">750 mm</p>
              <p className="text-xs text-muted-foreground">Minimum cover for a water service (Water Supply (Water Fittings) Regulations 1999).</p>
            </div>
            <div className="border border-border rounded-lg bg-card p-4">
              <p className="text-2xl font-black text-foreground mb-1">1350 mm</p>
              <p className="text-xs text-muted-foreground">Maximum cover under the same regulations. Gas sits at just 375 to 450mm.</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A word of caution on all of these figures, gas and water alike: they are what the regulations call for, not a promise of what is in the ground. Services get laid shallow to clear an obstruction, ground levels are cut down or built up long after the pipe went in, resurfacing adds or strips cover, and older services predate the current rules altogether. We have dug expecting a pipe at the depth the standard sets and found it at half that. The shallower-than-spec pipe is the dangerous one, because the team digs in confident it is still well below them. Treat any quoted cover depth as a starting assumption to prove on site, never a guarantee.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The second difference is consequence. A struck water pipe will not ignite, so it does not carry the immediate danger to life that a gas strike does. But it is far from harmless. A cut main floods the excavation in seconds, undermines the trench, cuts off supply to everyone downstream, and can pull contamination back into the network through the open end. Add the repair bill, the traffic management and the third-party claims, and a water strike is an expensive, disruptive day even when nobody is hurt.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The methods below apply to water as much as gas, with one practical difference. Access is usually easier, since a water service can often be reached at the stop tap or boundary box rather than needing a gas-qualified meter removal. The physics is unchanged though. There is still nothing for a CAT and Genny to find, GPR still has to resolve a small pipe against the ground around it, and the extra depth only widens that gap. Where a tracer wire, detectable tape or a marker went in with the pipe, it can be found. Where nothing did, a water pipe is every bit as invisible as a gas one.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">03 &middot; Acoustic location: Gas Tracker II</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The standard non-invasive option for plastic gas services is acoustic location. The most established product in the UK is the Gas Tracker II, made by MADE-SA in France and distributed in the UK by A.T.M.S. (Advantech Marketing Services). It's the kit most utility-detection specialists reach for when the supply is plastic.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 items-start my-8 border border-border rounded-xl bg-card p-5">
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden sm:col-span-1">
              <Image src="/articles/plastic-gas-pipes/gas-tracker-receiver.jpg" width={900} height={675} alt="Gas Tracker II receiver tablet and ground sensor" sizes="(max-width: 640px) 100vw, 300px" className="w-full h-full object-cover" />
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Acoustic plastic gas pipe locator</p>
              <h3 className="text-lg font-black text-foreground mb-2">Gas Tracker II</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">An acoustic wave is injected into the gas in a live or dead pipe. It propagates along the pipe through the gas itself (not the pipe wall), stimulating tiny vibrations of the wall and surrounding soil. A ground sensor on the surface detects the maximum signal directly above the pipe, even in noisy urban environments.</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The catch is access. The transmitter has to be coupled to the gas at the customer end, normally by removing the meter and fitting a "resonant volume" in its place. That means closing the supply valve, disconnecting the meter, fitting and pressurising the transmitter, running the trace, then reinstating the meter and completing a full tightness test before the gas is turned back on. It's gas-qualified work with all the safety implications that come with it. It isn't a job a typical site team would carry out themselves.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            There's also customer-side disruption. An isolated supply, time on site, and a re-test before the property is back to normal. Gas Tracker II is a real option for a planned investigation but not a quick check before breaking ground.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            It also works less well over soft ground than over tarmac or paving slabs, where the soil compaction between pipe and surface gives the cleanest signal. Pipes inserted in ducts or old metal carrier pipes often can't be traced at all.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">04 &middot; Sonde or camera insertion</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A similar route is to insert a sonde (a small radio-frequency transmitter on a flexible rod) or a self-tracing CCTV camera into the pipe and locate it from the surface as it travels along.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The access problem is the same as Gas Tracker II. The pipe has to be opened at the customer end, the sonde or camera fed in, and everything reinstated and tightness-tested afterwards. Same gas-qualified requirement, same downtime.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Where it can be useful is on longer runs or where the route bends in ways acoustic methods struggle with. The operator can stop, locate, mark, and continue along the pipe rather than trying to interpret one signal across the whole length.
          </p>

          <figure className="my-8">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/plastic-gas-pipes/sonde.jpeg" width={1200} height={750} alt="Pipe sonde transmitter on a flexible push rod" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">A pipe sonde fitted to a flexible push rod. Detectable from the surface as it travels along the pipe, but only useful once the pipe has been opened at the customer end.</figcaption>
          </figure>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">05 &middot; Ground Penetrating Radar</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <Link href="/courses/gpr-training" className="text-primary hover:underline">Ground Penetrating Radar</Link> is the most promising non-invasive option, and we've had real success with it on plastic services. It works by sending a radar pulse into the ground and reading the reflections from anything with different dielectric properties. For a fuller primer on the method, Guideline Geo, who manufacture GPR systems, keep a clear <a href="https://guidelinegeo.com/methods/ground-penetrating-radar-gpr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">overview of how ground-penetrating radar works</a>.
          </p>

          <figure className="my-8">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/plastic-gas-pipes/mala-gpr.jpg" width={1200} height={750} alt="MALA Ground Penetrating Radar in use on a UK pavement" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">MALA GPR cart in use. GPR is the most capable non-invasive option, but its ability to resolve a domestic gas service depends heavily on diameter, depth, and ground conditions.</figcaption>
          </figure>

          <p className="text-muted-foreground leading-relaxed mb-6">
            It also has the most caveats. Three of them matter on a real job.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Ground conditions.</strong> Conductive, wet, or heavily mineralised ground attenuates the signal. In some clay soils GPR effectively can't see past the first few hundred millimetres. Solid concrete or tarmac surfaces above the pipe also affect the picture. This isn't a UK quirk: the PE100+ Association, the European trade body for polyethylene pipe, makes the same point, that GPR needs a contrast in material properties, struggles in congested ground, and loses depth fast in clay or saturated soils.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Resolution.</strong> A widely-cited rule of thumb in GPR practice is that a target should be at least roughly 10% of the depth at which it's buried in order to be reliably resolved. A 25mm domestic gas service at the IGEM/TD/4 minimum cover of 450mm in a footpath comes out at about 5.6%. A 32mm service at the same depth is about 7.1%. A blue water service is deeper again, so it scores worse: a 25mm pipe at 750mm of cover works out around 3.3%. All of these sit well below the 10% threshold, and in practice the pipe itself is often invisible.
          </p>

          <figure className="my-8">
            <div className="bg-muted/30 border border-border rounded-lg p-4 overflow-x-auto">
              <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="gprTitle gprDesc" className="w-full h-auto max-w-full">
                <title id="gprTitle">GPR resolution: pipe diameter as a percentage of depth</title>
                <desc id="gprDesc">Two pipes shown as circular cross-sections against a normalised depth bar. Left: a 100mm pipe at 1000mm depth is a 10 percent diameter-to-depth ratio, at the edge of GPR resolution. Right: a 25mm pipe at 450mm depth is about 5.6 percent, below typical GPR resolution.</desc>
                <rect x="0" y="0" width="720" height="300" fill="#fbfaf6"/>
                <g>
                  <text x="180" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0a2540">100mm pipe at 1000mm depth</text>
                  <text x="180" y="51" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#2e7d4f" fontWeight="600">Ratio 10.0% &middot; within GPR range</text>
                  <rect x="40" y="72" width="275" height="200" fill="#e8d9b8"/>
                  <line x1="40" y1="72" x2="315" y2="72" stroke="#0a2540" strokeWidth="2"/>
                  <rect x="135" y="60" width="70" height="14" fill="#0a2540" rx="2"/>
                  <text x="170" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff" fontWeight="700">GPR</text>
                  <line x1="325" y1="72" x2="325" y2="238" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4,3"/>
                  <line x1="320" y1="72" x2="330" y2="72" stroke="#4a4a4a" strokeWidth="1"/>
                  <line x1="320" y1="238" x2="330" y2="238" stroke="#4a4a4a" strokeWidth="1"/>
                  <text x="333" y="159" fontFamily="Inter, sans-serif" fontSize="11" fill="#4a4a4a">1000mm</text>
                  <circle cx="170" cy="238" r="9" fill="#ffc20e" stroke="#0a2540" strokeWidth="1.5"/>
                  <text x="170" y="262" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#0a2540" fontWeight="600">100mm &Oslash;</text>
                </g>
                <line x1="360" y1="22" x2="360" y2="280" stroke="#c8d0db" strokeWidth="1"/>
                <g transform="translate(360,0)">
                  <text x="180" y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0a2540">25mm pipe at 450mm depth (footpath)</text>
                  <text x="180" y="51" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#b00020" fontWeight="600">Ratio 5.6% &middot; below typical resolution</text>
                  <rect x="22" y="72" width="275" height="200" fill="#e8d9b8"/>
                  <line x1="22" y1="72" x2="297" y2="72" stroke="#0a2540" strokeWidth="2"/>
                  <rect x="132" y="60" width="70" height="14" fill="#0a2540" rx="2"/>
                  <text x="167" y="70" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff" fontWeight="700">GPR</text>
                  <line x1="307" y1="72" x2="307" y2="238" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4,3"/>
                  <line x1="302" y1="72" x2="312" y2="72" stroke="#4a4a4a" strokeWidth="1"/>
                  <line x1="302" y1="238" x2="312" y2="238" stroke="#4a4a4a" strokeWidth="1"/>
                  <text x="315" y="159" fontFamily="Inter, sans-serif" fontSize="11" fill="#4a4a4a">450mm</text>
                  <circle cx="167" cy="238" r="5" fill="#ffc20e" stroke="#0a2540" strokeWidth="1.5"/>
                  <text x="167" y="262" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#0a2540" fontWeight="600">25mm &Oslash;</text>
                </g>
              </svg>
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">The 10% rule of thumb: target diameter should be at least roughly 10% of depth for GPR to resolve it reliably. A typical UK domestic gas service sits well below that, even at minimum statutory cover.</figcaption>
          </figure>

          <p className="text-muted-foreground leading-relaxed mb-6">
            What GPR can pick up, in the right conditions, is the disturbed backfill, the "scar" left in the ground when the trench was cut and refilled. That scar tells you where the pipe runs even when you can't resolve the pipe itself.
          </p>

          <blockquote className="border-l-4 border-accent pl-5 py-2 my-8 italic text-lg text-foreground">
            This is where moled services break the model. There is no backfill scar, no marker tape, and the soil around the pipe is the same as the soil around it. GPR has very little to look at.
          </blockquote>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A moled service is one that's been pushed underground using a pneumatic mole, with no open trench. There is no backfill scar and no marker tape. The soil around the pipe is the same as the soil around it. GPR has very little to look at.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Moled pipes also don't run straight. The mole tracks where the path of least resistance takes it. Vertical position can drift up or down through the run, and horizontal position can wander. So even when you've located the meter and the main, you can't draw a confident line between them.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The same fact makes the dig phase harder. There's no sand bed, no warning tape, no change in ground conditions. The first sign the pipe is there is often the strike itself.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">06 &middot; Plans, visual cues and trial holes</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The fallback most teams reach for is a combination of plans, visual judgement, and careful exposure.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Plans rarely show the service itself. They generally show the main, and the assumption is that the service runs from the main to the meter. In a textbook install, that's a 90-degree branch off the main, in the footpath, into the property at the meter position. The team is "expecting it" within a defined corridor and can trial-hole or <Link href="/knowledge-hub/hsg47-explained" className="text-primary hover:underline">hand-dig to expose it under HSG47 guidance</Link>.
          </p>

          <figure className="my-8">
            <div className="aspect-[16/10] bg-muted rounded-lg overflow-hidden">
              <Image src="/articles/plastic-gas-pipes/gas-pipe-trench-1.jpg" width={1200} height={750} alt="Yellow plastic gas service pipe exposed in a trench" sizes="(max-width: 768px) 100vw, 768px" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">A yellow MDPE gas service exposed in a trench. Once you're on top of it the colour is unmistakable. The challenge is getting to it without striking it first.</figcaption>
          </figure>

          <figure className="my-8">
            <div className="bg-muted/30 border border-border rounded-lg p-4 overflow-x-auto">
              <svg viewBox="0 0 720 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="routeTitle routeDesc" className="w-full h-auto max-w-full">
                <title id="routeTitle">Expected service pipe route compared to real-world variations</title>
                <desc id="routeDesc">Top: textbook 90-degree run from gas main to meter, with a narrow expected dig corridor. Bottom: real-world services running at 45 degrees, dog-legging around buried obstacles, or entering well off square.</desc>
                <rect x="0" y="0" width="720" height="400" fill="#fbfaf6"/>
                <g>
                  <text x="24" y="28" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0a2540">Expected on a drawing: 90&deg; branch from main to meter</text>
                  <rect x="40" y="50" width="640" height="42" fill="#cfd8e3" stroke="#0a2540" strokeWidth="1"/>
                  <text x="360" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#0a2540" fontWeight="600">Property</text>
                  <rect x="40" y="142" width="640" height="22" fill="#dde2e8" stroke="#aab3bf" strokeWidth="0.5"/>
                  <text x="670" y="156" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="10" fill="#4a4a4a">Footpath</text>
                  <line x1="40" y1="174" x2="680" y2="174" stroke="#b00020" strokeWidth="3"/>
                  <text x="670" y="190" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="10" fill="#b00020" fontWeight="700">Gas main</text>
                  <rect x="345" y="92" width="30" height="82" fill="#ffc20e" fillOpacity="0.18" stroke="#f5b400" strokeWidth="0.8" strokeDasharray="2,2"/>
                  <rect x="350" y="92" width="20" height="14" fill="#ffc20e" stroke="#0a2540" strokeWidth="1"/>
                  <line x1="370" y1="99" x2="395" y2="99" stroke="#0a2540" strokeWidth="0.6"/>
                  <text x="398" y="102" fontFamily="Inter, sans-serif" fontSize="10" fill="#0a2540">Meter</text>
                  <line x1="360" y1="106" x2="360" y2="174" stroke="#ffc20e" strokeWidth="3" strokeDasharray="6,3"/>
                  <line x1="378" y1="135" x2="395" y2="135" stroke="#0a2540" strokeWidth="0.6"/>
                  <text x="398" y="138" fontFamily="Inter, sans-serif" fontSize="10" fill="#0a2540">Service (90&deg;)</text>
                  <text x="345" y="190" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#8a6a00" fontStyle="italic">Expected dig zone</text>
                </g>
                <line x1="40" y1="218" x2="680" y2="218" stroke="#c8d0db" strokeWidth="1"/>
                <g transform="translate(0,230)">
                  <text x="24" y="22" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0a2540">Seen on site: 45&deg;, dog-legs, off-square entries</text>
                  <rect x="40" y="44" width="640" height="42" fill="#cfd8e3" stroke="#0a2540" strokeWidth="1"/>
                  <text x="360" y="68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#0a2540" fontWeight="600">Property</text>
                  <rect x="40" y="118" width="640" height="22" fill="#dde2e8" stroke="#aab3bf" strokeWidth="0.5"/>
                  <line x1="40" y1="150" x2="680" y2="150" stroke="#b00020" strokeWidth="3"/>
                  <path d="M 180 86 L 540 86 L 540 150 L 180 150 Z" fill="#ffc20e" fillOpacity="0.10" stroke="#f5b400" strokeWidth="0.7" strokeDasharray="2,2"/>
                  <text x="540" y="80" textAnchor="end" fontFamily="Inter, sans-serif" fontSize="9" fill="#8a6a00" fontStyle="italic">Actual corridor of probability</text>
                  <rect x="200" y="86" width="20" height="14" fill="#ffc20e" stroke="#0a2540" strokeWidth="1"/>
                  <rect x="510" y="86" width="20" height="14" fill="#ffc20e" stroke="#0a2540" strokeWidth="1"/>
                  <line x1="210" y1="100" x2="295" y2="150" stroke="#ffc20e" strokeWidth="3" strokeDasharray="6,3"/>
                  <text x="244" y="128" fontFamily="Inter, sans-serif" fontSize="10" fill="#0a2540" fontWeight="600">45&deg;</text>
                  <polyline points="520,100 520,128 450,128 450,150" fill="none" stroke="#ffc20e" strokeWidth="3" strokeDasharray="6,3"/>
                  <text x="465" y="146" fontFamily="Inter, sans-serif" fontSize="10" fill="#0a2540" fontWeight="600">Dog-leg</text>
                  <rect x="485" y="111" width="22" height="22" fill="#6a737f"/>
                  <text x="496" y="127" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff">Obs</text>
                </g>
              </svg>
            </div>
            <figcaption className="text-xs text-muted-foreground italic mt-2">The textbook route assumes 90&deg; from main to meter. On real sites, services come off at 45&deg;, dog-leg around buried obstacles, or enter the property well off square. The corridor of probability is wider than it looks on a drawing.</figcaption>
          </figure>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The reality on the ground is messier. Service pipes don't always run square to the property. We've seen them come off the main at 45 degrees. We've seen them dog-leg around obstacles that aren't on any drawing. We've seen meter positions that have been moved at some point, with the original service still in place.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Asking a team to allow for every angle and direction the pipe might take from the house to the main is not a realistic instruction. The corridor of probability is wider than it looks on paper, and it changes property by property.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">07 &middot; How other countries design the problem out</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Everything above is about finding a pipe that's already in the ground with nothing built in to help you. There's another way to look at it: make the pipe findable the day it goes in, so nobody is ever stood over wet clay guessing with a radar. The UK leans hard on detection after the fact. Plenty of other countries lean harder on prevention at installation, and it's worth knowing how, because it explains a lot of the kit you'll come across and it's where most of the strike risk actually lives.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Tracer wire, made law.</strong> In the United States this isn't left to good practice. Federal rule 49 CFR 192.321 requires plastic gas pipe that isn't encased to be laid with "an electrically conducting wire or other means of locating the pipe while it is underground." Industry practice puts numbers on it: a copper-clad steel conductor brought up to access points at intervals, so a locator can clip straight on. Canada says the same in CSA B149.1, and Australia and New Zealand take the same line in their AS/NZS 4645 gas-distribution standards. The honest footnote, and any UK detection team will recognise it, is that a tracer wire only helps if it survived. The biggest single cause of "un-locatable" plastic pipe in the US isn't missing wire, it's wire that's corroded, been cut, or been torn off during directional drilling. 3M told the US regulator there are thousands of miles of plastic pipe sitting under wire that's broken or badly installed, and therefore just as invisible to a locator as bare pipe. A wire is only any use if it's intact and somebody can find the end of it.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Detectable tape and marker balls.</strong> Buried a foot or so above the pipe, detectable warning tape is plastic film with a thin aluminium core: a visual warning if you dig onto it, and a metal target a detector can catch before you do. Colour follows the standard code, gas-yellow for gas and blue for water, across the US, Canada, Australia and New Zealand. Electronic marker balls go a step further: passive, battery-free tuned circuits, effectively low-frequency RFID, dropped over joints, tees and crossings. A locator pings a frequency and the marker answers back with position and depth, down to about 1.5 metres. The clever part is the frequency is coded by utility, so the locator only hears the service it's after, 83.0 kHz for gas and so on. Markers flag points rather than the whole run, so they're usually a belt-and-braces measure alongside tracer wire.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Knowing where it is, on paper.</strong> Often the best prevention isn't in the ground at all, it's in the records. The US runs the national 811 "call before you dig" service, where utilities must physically mark their assets in a dig zone on request. The Netherlands goes furthest: under the WIBON law any mechanical excavation has to be notified before it starts, and every network operator has to keep accurate digital records, delivered as proper vector mapping rather than the scanned PDFs common elsewhere. France's DT-DICT regime grades every registered network by how accurate its records are, so a contractor knows in advance whether the plan can be trusted or whether the line needs detecting first. The same idea sits behind the quality-level standards, US ASCE 38 and Australian AS 5488, which grade utility data from desktop records up to physically exposed and measured. UK readers will know the logic from <Link href="/knowledge-hub/understanding-pas-128" className="text-primary hover:underline">PAS 128</Link>: "it's on the plan" is the lowest tier of confidence, and a plastic pipe with no wire, tape or marker can rarely be graded any higher without putting a spade in the ground. It's exactly the discipline taught on the <Link href="/courses/5-day-pas128-surveyor" className="text-primary hover:underline">PAS 128 surveyor course</Link> and in <Link href="/training/utility-mapping-surveying" className="text-primary hover:underline">utility mapping and surveying</Link>.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">What it means for a UK site.</strong> None of these systems is magic, and none of them helps with a pipe laid decades ago with nothing fitted to find it. The takeaway is the one the physics gave us at the start: no conductor, no wire, no tape, no marker, and there's nothing for an electromagnetic locator to detect, which is exactly why no handheld can credibly claim to find bare plastic at depth, however it's marketed. Where other countries are ahead is in making the next pipe easier than the last one. Tracer wire, detectable tape, marker balls and accurate digital records are all cheap to fit on the day, and they're the only thing that reliably turns an invisible plastic pipe into a findable one.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Where this leaves us</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            There isn't one method that finds every plastic pipe before the spade goes in. Gas Tracker II and sonde insertion need gas-qualified access at the customer end. GPR works in the right ground but struggles with smaller-diameter, deeper, or moled services. Plans and visual judgement narrow the corridor without eliminating the surprises. And the international picture says the same thing from the other side: the countries making real progress did it by building locatability in at installation, not by inventing a better way to find bare plastic from the surface.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Detecting plastic pipes is a layered problem, not a single-tool one. Every method covered above has a place, none of them removes the strike risk on its own, and any kit that promises to is worth treating with caution.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            For teams working around buried services on UK sites, the practical answer is competence in multiple methods and a clear-eyed view of when each one fails. Sygma's <Link href="/courses/gpr-training" className="text-primary hover:underline">GPR Training</Link>, <Link href="/courses/cable-avoidance-training" className="text-primary hover:underline">Cable Avoidance Training</Link>, and <Link href="/courses/eusr-cat1-cat2-combined" className="text-primary hover:underline">EUSR CAT 1 and CAT 2 Combined</Link> cover these methods alongside the safe-dig protocols that protect the team when the method runs out.
          </p>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
            <h3 className="font-bold text-foreground mb-3">References</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
              <li>IGEM/TD/4 Edition 5, Polyethylene (PE) and steel gas services and service pipework. The Institution of Gas Engineers and Managers.</li>
              <li>HSE, HSG47: Avoiding danger from underground services (plastic pipes and locators).</li>
              <li>HSE Pipelines and Gas Supply Industry FAQs (minimum cover depths).</li>
              <li>Gas Tracker II, MADE S.A. (France); UK distribution via A.T.M.S. (Advantech MS).</li>
              <li>PE100+ Association, Is it possible to detect buried PE pipes from the surface?</li>
              <li>GPR resolution rule of thumb: target diameter on the order of 10% of depth (standard GPR practice).</li>
              <li>49 CFR 192.321(e), Installation of plastic pipe (locating-wire requirement).</li>
              <li>CSA B149.1, tracer wire on underground plastic gas piping; AS/NZS 4645 gas-distribution series.</li>
              <li>3M and PHMSA, Systems to Locate Plastic Pipes (broken and corroded tracer wire).</li>
              <li>3M Electronic Marker System (EMS) ball markers (gas 83.0 kHz, utility-coded frequencies).</li>
              <li>Netherlands WIBON / KLIC (mandatory pre-excavation notification and digital records); France DT-DICT accuracy classes.</li>
              <li>ASCE 38 and AS 5488 utility-data quality levels; PAS 128 (UK equivalent).</li>
              <li>Water Supply (Water Fittings) Regulations 1999, Schedule 2 (depth of underground water service pipes: not less than 750mm, not more than 1350mm).</li>
              <li>Guideline Geo, Ground Penetrating Radar (GPR) method overview, <a href="https://guidelinegeo.com/methods/ground-penetrating-radar-gpr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">guidelinegeo.com</a> (further reading on GPR principles, resolution and ground conditions).</li>
            </ol>
          </div>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-4">
            <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline">Why You Should Always Connect the Genny First</Link></li>
              <li><Link href="/knowledge-hub/hsg47-explained" className="text-primary hover:underline">HSG47 Explained: The HSE Guide on Avoiding Underground Services</Link></li>
              <li><Link href="/knowledge-hub/utility-strikes-first-20-metres" className="text-primary hover:underline">4 Behaviours That Can Cause Cable Strikes on Site</Link></li>
              <li><Link href="/knowledge-hub/understanding-pas-128" className="text-primary hover:underline">Understanding PAS 128: Survey Categories and What They Mean</Link></li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
            <h3 className="font-bold text-foreground mb-3">Related Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses/cat-and-genny-training" className="text-primary hover:underline font-semibold">CAT and Genny Training</Link></li>
              <li><Link href="/courses/cable-avoidance-training" className="text-primary hover:underline">Cable Avoidance Training</Link></li>
              <li><Link href="/courses/eusr-cat1-cat2-combined" className="text-primary hover:underline">EUSR CAT 1 and CAT 2 Combined Training</Link></li>
              <li><Link href="/courses/hsg47-training" className="text-primary hover:underline">HSG47 Training</Link></li>
              <li><Link href="/training/utility-mapping-surveying" className="text-primary hover:underline">Utility Mapping and Surveying</Link></li>
            </ul>
          </div>

          </article>
        </div>
      </div>
    </>
  );
}
