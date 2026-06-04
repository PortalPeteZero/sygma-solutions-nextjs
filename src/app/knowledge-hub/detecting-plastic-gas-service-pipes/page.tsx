import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import KnowledgeHubSidebar from "@/components/KnowledgeHubSidebar";
import type { Metadata } from 'next';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Detecting Plastic Gas Service Pipes: Methods and Their Limits | Sygma',
  description: "Why Genny and CAT don't find plastic gas service pipes, and what each alternative (Gas Tracker II acoustic, sonde, GPR, plans + trial holes) can and can't do on a real UK site.",
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/detecting-plastic-gas-service-pipes' },
  openGraph: {
    title: 'Detecting Plastic Gas Service Pipes: Methods and Their Limits | Sygma',
    description: "Why Genny and CAT don't find plastic gas service pipes, and what each alternative (Gas Tracker II acoustic, sonde, GPR, plans + trial holes) can and can't do on a real UK site.",
    url: 'https://sygma-solutions.com/knowledge-hub/detecting-plastic-gas-service-pipes',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'article',
  },
};

export default function DetectingPlasticGasServicePipes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema({
        headline: "Detecting Plastic Gas Service Pipes: Methods and Their Limits",
        description: "Why Genny and CAT don't find plastic gas service pipes, and what each alternative (Gas Tracker II acoustic, sonde, GPR, plans + trial holes) can and can't do on a real UK site.",
        url: "/knowledge-hub/detecting-plastic-gas-service-pipes",
        datePublished: "2026-06-04",
        image: "cat-44",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([
        { label: "Knowledge Hub", to: "/knowledge-hub" },
        { label: "Detecting Plastic Gas Service Pipes" },
      ]) }} />
      <InnerPageHero
        image="cat-44"
        alt="Detecting plastic gas service pipes on a UK site with CAT, Genny, Gas Tracker, GPR and trial holes"
        eyebrow="Field Note · Underground Utilities"
        headline="Detecting Plastic Gas Service Pipes: Methods and Their Limits"
        sub="Strikes on plastic gas service pipes are one of the harder problems in utility detection. The pipes don't show up on the kit most teams carry, and the methods that can find them all come with practical limits that matter on a real UK job site."
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "Detecting Plastic Gas Service Pipes" },
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

          {/* Co-brand attribution */}
          <div className="border-l-4 border-accent bg-muted/30 pl-4 py-3 mb-8 text-sm">
            <p className="text-muted-foreground"><strong className="text-foreground">Prepared by Sygma Solutions</strong> for <strong className="text-foreground">The Clancy Group</strong>. Field note on what works, what fails, and where the practical limits sit when detecting plastic gas service pipes on a UK site. Reading time ~6 minutes.</p>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Strikes on plastic gas service pipes are one of the harder problems in utility detection. The pipes don't show up on the kit most teams carry, and the methods that can find them all come with practical limits that matter on a real UK job site. This is what's available, and where each method falls short.
          </p>

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">01 &middot; Why Genny and CAT don't see them</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A standard locator setup is a signal generator (Genny) paired with a Cable Avoidance Tool (CAT). It works by detecting electromagnetic fields. Either the conductor is radiating its own signal in Power mode, or the Genny is energising it so the CAT can pick it up. Plastic isn't a conductor, so there is nothing to detect.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A modern UK domestic gas service is yellow medium-density polyethylene (MDPE), commonly 25mm or 32mm outside diameter, with 20mm seen on smaller older runs. There is no metal in the pipe wall and nothing the Genny can clamp onto. That's the starting position before any other method is considered.
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

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">02 &middot; Acoustic location: Gas Tracker II</h2>

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

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">03 &middot; Sonde or camera insertion</h2>

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

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">04 &middot; Ground Penetrating Radar</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            GPR is the most promising non-invasive option, and we've had real success with it on plastic gas services. It works by sending a radar pulse into the ground and reading the reflections from anything with different dielectric properties.
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
            <strong className="text-foreground">Ground conditions.</strong> Conductive, wet, or heavily mineralised ground attenuates the signal. In some clay soils GPR effectively can't see past the first few hundred millimetres. Solid concrete or tarmac surfaces above the pipe also affect the picture.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Resolution.</strong> A widely-cited rule of thumb in GPR practice is that a target should be at least roughly 10% of the depth at which it's buried in order to be reliably resolved. A 25mm domestic gas service at the IGEM/TD/4 minimum cover of 450mm in a footpath comes out at about 5.6%. A 32mm service at the same depth is about 7.1%. Both sit below the 10% threshold, and in practice the pipe itself is often invisible.
          </p>

          <figure className="my-8">
            <div className="bg-muted/30 border border-border rounded-lg p-4 overflow-x-auto">
              <svg viewBox="0 0 720 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="gprTitle gprDesc" className="w-full h-auto max-w-full">
                <title id="gprTitle">GPR resolution: pipe diameter as percentage of depth</title>
                <desc id="gprDesc">Two scenarios. Left: a 100mm pipe at 1000mm depth sits at 10 percent ratio, within GPR resolution range. Right: a 25mm pipe at 450mm depth sits at about 5.6 percent, below typical GPR resolution.</desc>
                <rect x="0" y="0" width="720" height="290" fill="#fbfaf6"/>
                <g>
                  <text x="180" y="32" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0a2540">100mm pipe at 1000mm depth</text>
                  <text x="180" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#2e7d4f" fontWeight="600">Ratio: 10.0% &middot; within GPR range</text>
                  <rect x="40" y="68" width="280" height="180" fill="#e8d9b8"/>
                  <line x1="40" y1="68" x2="320" y2="68" stroke="#0a2540" strokeWidth="2"/>
                  <rect x="145" y="56" width="70" height="14" fill="#0a2540" rx="2"/>
                  <text x="180" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff" fontWeight="700">GPR</text>
                  <line x1="330" y1="68" x2="330" y2="228" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4,3"/>
                  <text x="338" y="151" fontFamily="Inter, sans-serif" fontSize="11" fill="#4a4a4a">1000mm</text>
                  <ellipse cx="180" cy="228" rx="22" ry="9" fill="#ffc20e" stroke="#0a2540" strokeWidth="1.5"/>
                  <text x="180" y="262" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#0a2540">100mm &Oslash;</text>
                </g>
                <line x1="360" y1="22" x2="360" y2="270" stroke="#c8d0db" strokeWidth="1"/>
                <g transform="translate(370,0)">
                  <text x="160" y="32" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0a2540">25mm pipe at 450mm depth (footpath)</text>
                  <text x="160" y="52" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fill="#b00020" fontWeight="600">Ratio: 5.6% &middot; below typical resolution</text>
                  <rect x="20" y="68" width="280" height="180" fill="#e8d9b8"/>
                  <line x1="20" y1="68" x2="300" y2="68" stroke="#0a2540" strokeWidth="2"/>
                  <rect x="125" y="56" width="70" height="14" fill="#0a2540" rx="2"/>
                  <text x="160" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#fff" fontWeight="700">GPR</text>
                  <line x1="310" y1="68" x2="310" y2="142" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4,3"/>
                  <text x="318" y="108" fontFamily="Inter, sans-serif" fontSize="11" fill="#4a4a4a">450mm</text>
                  <ellipse cx="160" cy="142" rx="6" ry="3" fill="#ffc20e" stroke="#0a2540" strokeWidth="1"/>
                  <text x="160" y="166" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#0a2540">25mm &Oslash;</text>
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

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">05 &middot; Plans, visual cues and trial holes</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The fallback most teams reach for is a combination of plans, visual judgement, and careful exposure.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Plans rarely show the service itself. They generally show the main, and the assumption is that the service runs from the main to the meter. In a textbook install, that's a 90-degree branch off the main, in the footpath, into the property at the meter position. The team is "expecting it" within a defined corridor and can trial-hole or hand-dig to expose it.
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

          <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Where this leaves us</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            There isn't one method that finds every plastic gas service pipe before the spade goes in. Gas Tracker II and sonde insertion need gas-qualified access at the customer end. GPR works in the right ground but struggles with smaller-diameter, deeper, or moled services. Plans and visual judgement narrow the corridor without eliminating the surprises.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Detecting plastic gas pipes is a layered problem, not a single-tool one. Every method covered above has a place. None of them, on its own, removes the strike risk.
          </p>

          <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
            <h3 className="font-bold text-foreground mb-3">References</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
              <li>IGEM/TD/4 Edition 5, Polyethylene (PE) and steel gas services and service pipework. The Institution of Gas Engineers and Managers.</li>
              <li>Gas Tracker II Training Presentation. A.T.M.S. (Advantech Marketing Services), distributor for MADE-SA in the UK.</li>
              <li>HSE Pipelines and Gas Supply Industry FAQs, minimum cover depths.</li>
              <li>Sensoft / GPR Training Courses, GPR resolution rule of thumb (target diameter at least 10% of depth).</li>
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
