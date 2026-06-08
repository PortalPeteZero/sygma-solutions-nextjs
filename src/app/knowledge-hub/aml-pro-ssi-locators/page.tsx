import InnerPageHero from "@/components/InnerPageHero";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { CLOUDINARY_BASE, SITE_NAME } from "@/lib/metadata";

/*
 * Knowledge Hub article: The AML Pro by SSI Locators, A Physics-Led Investigation.
 * Native JSX rebuild of the standalone report at Library/competitors/2026-06-04-aml-pro-ssi-locators-deep-dive-report.html
 * (live mirror https://aml-pro-research.vercel.app). Body copy ported verbatim; styling mapped to the site's design tokens.
 * Per-page override: own sticky "On this page" TOC instead of KnowledgeHubSidebar. Body images self-hosted in
 * public/articles/aml-pro/; hero/OG = Cloudinary gpr-12-gpr-training (shared-asset).
 */

const PUBLISHED = "4 June 2026";
const UPDATED = "7 June 2026";
const HERO_ID = "gpr-12-gpr-training";

export const metadata: Metadata = {
  title: "The AML Pro by SSI Locators: A Physics-Led Investigation | Sygma",
  description:
    "An evidence-led look at the SubSurface Instruments AML Pro pipe locator: the 2.45 GHz physics, the patent record, and where it sits in UK PAS 128 and HSG47 practice.",
  alternates: { canonical: "https://sygma-solutions.com/knowledge-hub/aml-pro-ssi-locators" },
  openGraph: {
    title: "The AML Pro by SSI Locators: A Physics-Led Investigation | Sygma",
    description:
      "An evidence-led look at the SubSurface Instruments AML Pro pipe locator: the 2.45 GHz physics, the patent record, and where it sits in UK PAS 128 and HSG47 practice.",
    url: "https://sygma-solutions.com/knowledge-hub/aml-pro-ssi-locators",
    siteName: SITE_NAME,
    images: [{ url: `${CLOUDINARY_BASE}/${HERO_ID}`, width: 1200, height: 630 }],
    type: "article",
  },
};

/* ---------- small presentational helpers (server components) ---------- */

function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-muted-foreground leading-relaxed mb-6 ${className}`}>{children}</p>;
}

function H3({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3 id={id} className="text-lg font-black text-foreground mt-8 mb-2 scroll-mt-24">
      {children}
    </h3>
  );
}

function SectionHeading({ id, num, children }: { id: string; num: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 mt-2 mb-4 text-2xl md:text-3xl font-black text-foreground leading-tight">
      <span className="block eyebrow mb-1">{num}</span>
      {children}
    </h2>
  );
}

function Tldr({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-baseline bg-muted/60 border-l-4 border-primary rounded-r-md px-4 py-3 my-5">
      <span className="text-[0.7rem] font-extrabold uppercase tracking-wider text-primary whitespace-nowrap">In one line</span>
      <span className="text-sm text-foreground/80 leading-relaxed">{children}</span>
    </div>
  );
}

function Smoking({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-accent bg-accent/5 rounded-r-md px-5 py-4 my-7">
      {label ? <div className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">{label}</div> : null}
      {children}
    </div>
  );
}

function GoodBox({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-emerald-500 bg-emerald-50 rounded-r-md px-5 py-4 my-6">
      {label ? <div className="text-sm font-semibold uppercase tracking-wide text-emerald-700 mb-2">{label}</div> : null}
      {children}
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-muted/50 border border-border rounded-md px-4 py-3 my-5 text-sm text-foreground/80 leading-relaxed">
      {children}
    </div>
  );
}

function PullQuote({ children, cite }: { children: React.ReactNode; cite?: React.ReactNode }) {
  return (
    <blockquote className="border-l-4 border-border bg-muted/40 rounded-r-md px-5 py-4 my-6 italic text-foreground/90 leading-relaxed">
      {children}
      {cite ? <span className="block not-italic text-xs font-semibold text-muted-foreground mt-2">{cite}</span> : null}
    </blockquote>
  );
}

function Verbatim({ children }: { children: string }) {
  return (
    <pre className="bg-muted border border-border border-l-4 border-l-muted-foreground/40 rounded-r-md px-4 py-3 my-4 text-sm font-mono text-foreground/90 whitespace-pre-wrap">
      {children}
    </pre>
  );
}

function Equation({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-sm bg-muted border border-border rounded px-3 py-2 my-4 text-foreground overflow-x-auto">
      {children}
    </div>
  );
}

function Figure({ src, alt, caption, width, height, portrait = false }: { src: string; alt: string; caption: React.ReactNode; width: number; height: number; portrait?: boolean }) {
  return (
    <figure className={`my-7 rounded-lg overflow-hidden border border-border bg-muted/30 ${portrait ? "max-w-xs mx-auto" : ""}`}>
      <Image src={src} alt={alt} width={width} height={height} sizes={portrait ? "(max-width: 768px) 100vw, 320px" : "(max-width: 768px) 100vw, 768px"} className="w-full h-auto" />
      <figcaption className="px-4 py-2.5 text-xs text-muted-foreground bg-muted/30 border-t border-border leading-relaxed">{caption}</figcaption>
    </figure>
  );
}

function SvgFigure({ children, caption }: { children: React.ReactNode; caption: React.ReactNode }) {
  return (
    <figure className="my-7">
      <div className="bg-card border border-border rounded-lg p-3 overflow-x-auto">{children}</div>
      <figcaption className="px-1 pt-2 text-xs text-muted-foreground leading-relaxed">{caption}</figcaption>
    </figure>
  );
}

function StatCard({ num, bad, children }: { num: string; bad?: boolean; children: React.ReactNode }) {
  return (
    <div className="border border-border rounded-lg bg-card p-4">
      <span className={`block text-xl font-black mb-1 ${bad ? "text-accent" : "text-primary"}`}>{num}</span>
      <span className="block text-xs text-muted-foreground leading-snug">{children}</span>
    </div>
  );
}

function RecCard({ children }: { children: React.ReactNode }) {
  return <div className="border border-border rounded-lg bg-card px-6 py-5 my-5">{children}</div>;
}

function SrcBib({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-border rounded-md bg-card px-4 py-3 mb-2.5 text-sm text-foreground/80 leading-relaxed">
      {children}
    </div>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  const ext = href.startsWith("http");
  return (
    <a href={href} className="text-primary hover:underline" {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}

function EvidenceTable({ headers, rows }: { headers: React.ReactNode[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-border border-collapse bg-card">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="bg-muted text-left px-3 py-2 text-xs font-bold uppercase tracking-wide text-foreground border border-border align-bottom">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((c, ci) => (
                <td key={ci} className="px-3 py-2 align-top border border-border text-muted-foreground leading-relaxed">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TOC: { id: string; label: string }[] = [
  { id: "s0", label: "0 · The verdict, up front" },
  { id: "inventor", label: "★ · The inventor's testimony" },
  { id: "s1", label: "1 · What the AML Pro is" },
  { id: "s2", label: "2 · Price & UK marketing copy" },
  { id: "s3", label: "3 · The 2.45 GHz wet-ground problem" },
  { id: "s4", label: "4 · Why real GPR uses lower frequencies" },
  { id: "s5", label: "5 · Fourteen years of \"All-New\"" },
  { id: "s6", label: "6 · What it actually detects" },
  { id: "s7", label: "7 · The FCC certification" },
  { id: "s8", label: "8 · The patent record" },
  { id: "s9", label: "9 · The \"lunar exploration\" claim" },
  { id: "s10", label: "10 · What works instead" },
  { id: "s11", label: "11 · Lee & Yun 2025, taken apart" },
  { id: "s12", label: "12 · Beyond the 20 ft claim" },
  { id: "s13", label: "13 · The architectural family" },
  { id: "s14", label: "14 · The FAQ self-incrimination" },
  { id: "s15", label: "15 · UK law & PAS 128" },
  { id: "s16", label: "16 · Recommendations" },
  { id: "sources", label: "Sources" },
];

export default function AmlProSsiLocators() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: "The AML Pro by SSI Locators: A Physics-Led Investigation",
            description:
              "An evidence-led examination of the SubSurface Instruments AML Pro pipe locator: the 2.45 GHz physics, the only relevant patent, the FCC record, the existing peer-reviewed literature, and where the device sits in UK PAS 128 and HSG47 practice.",
            url: "/knowledge-hub/aml-pro-ssi-locators",
            datePublished: "2026-06-04",
            dateModified: "2026-06-07",
            image: HERO_ID,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema([
            { label: "Knowledge Hub", to: "/knowledge-hub" },
            { label: "The AML Pro by SSI Locators" },
          ]),
        }}
      />

      <InnerPageHero
        image={HERO_ID}
        alt="Ground-penetrating radar in use on a Sygma utility-detection training course"
        eyebrow="Knowledge Hub · Industry Investigation"
        headline="The AML Pro by SSI Locators: A Physics-Led Investigation"
        sub={`Fourteen years on the market and still "All-New". A handheld that claims to find buried plastic pipe 20 feet down through wet clay. Real solution, or electronic dowsing rod?`}
        breadcrumbs={[
          { label: "Knowledge Hub", to: "/knowledge-hub" },
          { label: "The AML Pro by SSI Locators" },
        ]}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/knowledge-hub#articles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors"
          >
            &larr; Back to Articles
          </Link>
        </div>
      </div>

      <div className="bg-background py-16">
        <div className="container mx-auto px-6 md:px-8 flex gap-12 items-start">
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24">
            <div className="text-xs font-bold uppercase tracking-widest text-foreground mb-3">On this page</div>
            <nav className="border-l border-border">
              {TOC.map((t) => (
                <a key={t.id} href={`#${t.id}`} className="block py-1 pl-3 -ml-px border-l border-transparent text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  {t.label}
                </a>
              ))}
            </nav>
            <div className="bg-muted/60 rounded-lg p-4 mt-6">
              <strong className="block text-sm text-foreground mb-1.5">Train your team properly</strong>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Sygma Solutions runs HSG47, EUSR CAT 1, Cat &amp; Genny, and PAS 128 training across the UK.
              </p>
              <Link href="/courses" className="inline-block bg-primary text-primary-foreground text-xs font-semibold rounded-md px-3 py-2 hover:opacity-90 transition-opacity">
                View all courses &rarr;
              </Link>
            </div>
          </aside>

          <article className="min-w-0 flex-1 max-w-3xl">
            <p className="text-sm text-muted-foreground mb-6">
              Published <strong className="text-foreground">{PUBLISHED}</strong> · Updated <strong className="text-foreground">{UPDATED}</strong> · By Pete Ashcroft, Sygma Solutions Ltd · Approx. 40 minute read · <a href="#s0" className="text-primary hover:underline">Jump to the verdict &darr;</a>
            </p>

            <div className="bg-muted/50 border border-border border-l-4 border-l-accent rounded-r-md px-5 py-4 mb-6 text-sm text-foreground/80 leading-relaxed">
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-2">Editor's note &amp; disclosure of interest</div>
              <p className="mb-3">
                I produced this report with the assistance of Anthropic's Claude AI. All physical claims, verbatim quotes, regulatory references, and source citations were verified against the live URLs listed at the foot of this article. Where a claim could not be independently verified, it is explicitly flagged as such.
              </p>
              <p className="mb-0">
                <strong className="text-foreground">Disclosure of interest:</strong> I operate Sygma Solutions Ltd, a UK training and equipment business in the underground-utility detection sector. Among the products Sygma sells are ground-penetrating-radar-related items, which form part of the recognised PAS 128 toolkit discussed below. I have no commercial relationship with SubSurface Instruments, Inc. or with any reseller of the AML Pro. I publish this work to support industry-credibility scrutiny in the UK underground-utility detection sector.
              </p>
            </div>

            <GoodBox label="Why I am publishing this">
              <p className="text-foreground/85 leading-relaxed mb-3">I have sat back and watched the AML Pro work its way into the UK market. For those of us in the industry it has been around for fourteen years. For those who haven't met it before, it is being sold as a new revelation.</p>
              <p className="text-foreground/85 leading-relaxed mb-3">I understand the appetite for it. Non-metallic services are a real problem, and one this industry has not fully solved. But in our hunger to solve it, we need to be sure that what we reach for does not make things worse.</p>
              <p className="text-foreground/85 leading-relaxed mb-3">I have had many conversations about this kit behind closed doors. Plenty of experts know the truth of it. Nobody has been bold enough to open that door. I have been asked about it more times than I can count, and publicly I have always tried to be diplomatic. To people I know, I tell the truth.</p>
              <p className="text-foreground/85 leading-relaxed">I have invested too much in this industry to sit back and say nothing, and anyone who knows me knows how uncomfortable I find sitting on a fence. So I built the answer properly. Not my opinion, not what I think: a physics-led investigation with a source behind every claim. The work was fascinating and at the same time horrifying. If you have ever asked me what I make of this device, this report is my answer.</p>
            </GoodBox>

            <section>
              <SectionHeading id="s0" num="0">The verdict, up front</SectionHeading>

              <p className="text-lg text-foreground/90 leading-relaxed mb-5 font-medium">The AML Pro is sold as a handheld "all materials locator" that can find buried PVC, metal, wood, cable or pipe at depths up to 20 feet "in clay, wet soil, snow or even standing water" using a 2.45 GHz radio transmitter and four receiver antennas. It is priced at <strong>$8,250 USD</strong> (~£6,200) at the principal US dealer and is currently being marketed into the UK by a single channel partner. This report examines the device against the published physics, the only relevant US patent, the FCC certification record, the existing peer-reviewed literature, and the history of comparable devices.</p>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6 font-medium">The conclusion it reaches is not only that the flagship depth claim fails. The public scientific case for the AML Pro as a general buried-object locator is weak at every level: the marketed mechanism is not framed in recognised electromagnetic terms, the chosen frequency band is intrinsically hostile to penetration in the wet and conductive ground the marketing names, and no robust blinded validation has been produced at any depth. <A href="#s12">Section 12</A> closes the shallow-depth fallback explicitly.</p>

              <Smoking label="If you read nothing else">
                <p className="text-foreground/85 leading-relaxed mb-3">This report runs long because every claim is sourced. The case itself is short. Six findings, each examined in full in the section linked:</p>
                <ul className="list-disc pl-5 space-y-2 text-foreground/85 leading-relaxed">
                  <li><strong>The physics rules it out.</strong> At 2.45 GHz, the microwave-oven frequency, the signal dies in centimetres of wet ground. The 20 ft claim misses by roughly 3,300 dB. <A href="#s3">Section 3 &rarr;</A></li>
                  <li><strong>The inventor abandoned it.</strong> The man who built it tested it on pipe at one to two feet, watched an earlier version fail its only US Army trial, and walked away. <A href="#inventor">The inventor's testimony &rarr;</A></li>
                  <li><strong>Nobody uses it.</strong> Fourteen years on sale, adopted by no UK survey firm reviewed, named by no standard, tested blind by no one. <A href="#s5">Section 5 &rarr;</A></li>
                  <li><strong>"Patented Technology" is dead.</strong> The patent expired in April 2023 for unpaid fees, under SSI's own ownership. <A href="#s8">Section 8 &rarr;</A></li>
                  <li><strong>The "NASA, lunar exploration" story has no basis in the record.</strong> No lunar instrument ever flew at this frequency, and the inventor says the real origin was a landmine detector. <A href="#s9">Section 9 &rarr;</A></li>
                  <li><strong>Its own manual gives it away.</strong> SSI's FAQ admits the indicator switches on and off every two inches of hand movement, the signature of a device reading its operator, not the ground. <A href="#s14">Section 14 &rarr;</A></li>
                </ul>
              </Smoking>

              <GoodBox label="The whole argument in plain English">
                <p className="text-foreground/85 leading-relaxed mb-3">This device is sold on a claim that breaks the same physics that makes your microwave oven work. It transmits at the exact frequency a microwave oven uses to heat the water in food. Wet ground is full of water, and at this frequency the signal is swallowed within a few centimetres. The brochure promises 20 feet, through clay, wet soil, snow and standing water.</p>
                <p className="text-foreground/85 leading-relaxed mb-3">Take the big number away and the problem does not go away with it. There is still no independent blind test showing the device finds anything, anywhere, at any depth. The only published test was run by one operator, on dry ground, on a site where the pipe positions were already known. Meanwhile the manual itself describes indicators that flip with two-inch hand movements: the hallmark of a device reading its operator, not the ground.</p>
                <p className="text-foreground/85 leading-relaxed">Real utility detection exists and works. Each method uses the right physics at the right frequencies and states plainly what it can and cannot do. None of the recognised UK survey firms whose published methods were reviewed for this report use the AML Pro, no standard names it, and after fourteen years on sale that silence is evidence in itself.</p>
              </GoodBox>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-7">
                <StatCard num="2.45 GHz">the frequency microwave ovens cook with</StatCard>
                <StatCard num="1.4 cm">how far that signal penetrates pure water</StatCard>
                <StatCard num="~3,300 dB" bad>the gap between the 20 ft claim and the physics</StatCard>
                <StatCard num="14 years" bad>on sale with zero blinded validation</StatCard>
                <StatCard num="April 2023" bad>SSI let its own patent expire</StatCard>
                <StatCard num="1-2 ft" bad>the deepest its own inventor ever tested it</StatCard>
              </div>

              <Smoking label="Headline finding">
                <p className="text-[1.05rem] text-foreground/90 leading-relaxed mb-3">The marketing claim that a 2.45 GHz handheld transmitter penetrates 20 ft of wet ground to detect a buried pipe is in direct conflict with established radio physics. At 2.45 GHz, the penetration depth (1/e amplitude) of an electromagnetic wave in pure water is <strong>1.4 cm</strong> (<A href="https://water.lsbu.ac.uk/water/microwave_water.html">London South Bank University Water Structure and Science</A>). In moist mineral soil it falls to single-digit centimetres (<A href="https://www.semanticscholar.org/paper/Microwave-Dielectric-Behavior-of-Wet-Soil-Part-1-Hallikainen-Ulaby/751c289062a22daa6b5b44056d955b9d757cd77b">Hallikainen et al., IEEE Trans. Geosci. Remote Sensing, 1985</A>). The claimed 6.10 m of two-way travel through such media implies <strong>thousands of decibels</strong> of attenuation, far below any realisable receiver's noise floor by hundreds of orders of magnitude.</p>
                <p className="text-foreground/85 leading-relaxed mb-3">The marketing's "patented technology" claim does not surface under SSI's name in a public USPTO / <A href="https://patents.google.com/">Google Patents</A> assignee search, but the assignment record identifies the patent: <A href="https://patents.justia.com/patent/7898456">US 7,898,456</A> (Cloutier &amp; Oehme, originally assigned to Prairielands Energy Marketing Inc.), which describes a handheld 2.4 GHz continuous-wave microwave device with a five-antenna phase-comparison geometry, LED indicators, a laser pointer, and an audio tone, a description that matches the AML Pro's claimed mechanism on every observable detail. USPTO assignment records resolve the relationship: the patent spent its first eight years owned by a North Dakota gas-marketing company, and was assigned to SubSurface Instruments, Inc. on 18 April 2017. SSI then let its own patent expire in April 2023 for non-payment of maintenance fees, and leads its marketing with "Patented Technology" to this day (<A href="#s8">Section 8</A>). What the existence of that patent does <em>not</em> establish is that the device performs at the depths SSI markets, patent examination tests novelty, not efficacy.</p>
                <p className="text-[1.05rem] text-foreground/90 leading-relaxed mb-3">The "lunar exploration technology" claim in the marketing does not correspond to any subsurface radar NASA has ever flown, every NASA / ESA lunar and Mars subsurface sounder operates at 1.3 MHz to 158 MHz, never at 2.45 GHz (<A href="https://en.wikipedia.org/wiki/ALSE">Apollo Lunar Sounder</A>, <A href="https://en.wikipedia.org/wiki/MARSIS">MARSIS</A>, <A href="https://en.wikipedia.org/wiki/SHARAD">SHARAD</A>).</p>
                <p className="text-[1.05rem] text-foreground/90 leading-relaxed">The device's architectural class, slow operator-driven scan, indicator stack that flickers with hand movement, training course required, sits in the handheld-detection family that includes the <A href="https://skepdic.com/quadro.html">Quadro Tracker</A> (federal fraud injunction 1996), <A href="https://newsreleases.sandia.gov/human-presence-detector-fails-controlled-tests-conducted-by-sandia-national-laboratories/">DKL LifeGuard</A> (Sandia 1998: "no better than random chance"), and the <A href="https://en.wikipedia.org/wiki/ADE_651">ADE 651</A> (James McCormick, UK 2013, 10 years' imprisonment), with the important distinction that the AML Pro is a real RF instrument and not an empty plastic case.</p>
              </Smoking>

              <Smoking label="The market test, fourteen years and counting">
                <p className="text-[1.05rem] text-foreground/90 leading-relaxed mb-3">The AML Pro is marketed as "All-New" on its current data sheet (<A href="https://www.ssilocators.com/wp-content/uploads/2025/04/AML-PRO-PLUS-BROCHURE.pdf">SSI brochure rev 10/2019</A>). In fact it has been on the market since <strong>2012</strong>, FCC certified 16 March 2012 (<A href="https://fcc.report/FCC-ID/A47-AML">FCC ID A47-AML grant record</A>), introduced as "newly released" in <em>Underground Construction</em> magazine in August 2012 (<A href="https://undergroundinfrastructure.com/magazine/2012/august-2012-vol-67-no-8/new-products/all-materials-locator-is-underground-locating-game-changer">UC magazine launch piece</A>), with the underlying related patents granted 2008 / 2009 / 2011. That is <strong>fourteen years</strong> of commercial availability.</p>
                <p className="text-foreground/85 leading-relaxed mb-3">In those fourteen years, the device has not been adopted by any of the recognised UK utility-mapping or detection-survey firms whose published method statements were reviewed for this report, not as a primary method, not as a complementary method, not as a noted-but-unused option. It has not been written into <A href="https://terrainsurveys.co.uk/news-and-media/the-4-pas128-quality-levels-explained">PAS 128:2022</A>, <A href="https://www.hse.gov.uk/pubns/books/hsg47.htm">HSG47</A>, <A href="https://www.njug.org.uk/">NJUG</A> guidance, the <A href="https://www.tsa-uk.org.uk/resources/downloads/">Survey Association's</A> published methods and client guidance, ASCE Standard 38-22, or any national equivalent. It has produced no peer-reviewed double-blind validation (the single existing peer-reviewed paper, <A href="https://www.mdpi.com/2076-3417/15/11/5794">Lee &amp; Yun 2025</A>, is unblinded and single-operator, examined in Section 11). It has been the subject of zero independently-replicated controlled tests of the kind that Sandia ran against the <A href="https://newsreleases.sandia.gov/human-presence-detector-fails-controlled-tests-conducted-by-sandia-national-laboratories/">DKL LifeGuard in 1998</A>.</p>
                <p className="text-foreground/85 leading-relaxed mb-3">This is the market test that every utility-detection product is subject to. A handheld device priced at $8,250 that genuinely located buried PVC pipe at 20 ft depth without a transmitter would have transformed the global utility-survey industry within five years of release and would now be standard kit at every major surveying company. Fourteen years is long enough for that adoption curve to have run its course. It has not run. Industry behaviour is a market-revealed verdict, and the market's verdict is that practitioners with capital and reputation on the line have not bought the claim.</p>
                <p className="text-foreground/85 leading-relaxed">The verdict is sharper still when you look at what the market did buy over the same fourteen years. Manufacturers developed GPR substantially, multi-channel array systems, improved data collection, post-processing software, and the same survey companies did not hesitate to invest far larger capital sums in that technology. The money was available and it moved. It moved towards instruments that measure.</p>
              </Smoking>

              <GoodBox label="What this report is NOT alleging">
                <p className="text-foreground/85 leading-relaxed mb-2">SubSurface Instruments Inc. is a US-registered manufacturer with a real product range, real FCC certification on the AML Pro's 2.45 GHz transmitter, a real Wisconsin office, and real sales staff. It is not an empty-plastic-box scam in the manner of the ADE 651. The other products in SSI's range (magnetic locators, active-EM pipe locators, acoustic leak detectors) are conventional and physically uncontroversial. The AML Pro is a real piece of electronics that emits real radio waves.</p>
                <p className="text-foreground/85 leading-relaxed"><strong>The subject of this report is the device's physical claims, and whether they can be reconciled with established science.</strong> Where the report refers to UK distribution it is to identify which version of the marketing copy is being tested; the report makes no allegation against any UK or Irish reseller of the device, who distribute the manufacturer's product on the manufacturer's marketing claims.</p>
              </GoodBox>

              <NoteBox>
                <strong className="text-foreground">How the claims are evaluated.</strong> Three tests are applied throughout this report. <strong className="text-foreground">Physical plausibility</strong>: can the claim be reconciled with published soil dielectric and attenuation data? <strong className="text-foreground">Sector practice</strong>: is it consistent with how the underground-detection industry, after decades of engineering, actually works at these depths? <strong className="text-foreground">Quality of evidence</strong>: is the claim supported by independent, blinded, repeatable testing, or only by marketing demonstration? Every section that follows is one of these three tests being applied.
              </NoteBox>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="inventor" num="★">The inventor's testimony</SectionHeading>

              <Tldr>The man who invented the technology says it began as a landmine detector that failed its only army trial, that he tested it on pipe at one to two feet, and that he and his co-inventor abandoned it. He has read this report and allowed his words to be quoted in it.</Tldr>

              <P>This report did not set out to interview anyone. It set out to test a marketing claim against the published physics. But the marketing makes a specific historical claim, that the device was <em>"originally designed by NASA engineers for use in lunar exploration,"</em> so I went looking for the NASA engineers. There are none. The patent the marketing rests on names two real people: <strong>Professor Paul Cloutier</strong>, a physicist at Rice University, and <strong>Delbert Oehme</strong>, an engineer. I wrote to the surviving inventor expecting silence. Professor Cloutier replied within the hour, and twice more over the day that followed, candidly and on the record.</P>

              <P>What he described is not a space programme. The technology began, he recalls, as a candidate for a United States Defense Department contract:</P>

              <PullQuote>"the initial effort was in response to a U.S. Defense Department search for a simple non-metallic anti-personnel mine detector for the Mid-East. We actually tested an early version at Ft. Belvoir in their mine field. The results were mixed: we found all the mines, which were very shallow (2 to 12 inches deep), but we had over 20% false positives, which disqualified us from the Defense Department contract."</PullQuote>

              <P>That is the only controlled trial of this technology anyone has produced in twenty years, and the conditions matter. Fort Belvoir is the US Army's countermine sensor proving ground, where detectors are tested in prepared lanes of known soil with targets buried at known, shallow depths. Those are the conditions most favourable to a device like this: targets at inches, not metres, where the wet-ground physics that defeats it at depth does not yet apply. It still failed, and not on penetration but on reliability, flagging things that were not there more than one time in five. That is a second and independent failure. At depth the physics defeats it; at the shallow depths where a signal genuinely can return, it cannot tell a target from a phantom. The inventors then turned to buried pipe. Their own testing of that application went no deeper:</P>

              <PullQuote>"The only testing we did on the device was for very shallow (1-2 feet) burial depths of PVC water pipes and got reasonable results in such cases. Neither of us knew about any actual use of such a device or associated claims."</PullQuote>

              <P>Not twenty feet. One to two. And then they stopped. Asked why the work was never carried any further, Professor Cloutier gave the plainest verdict in the whole file:</P>

              <PullQuote>"the fact that we did not pursue it any further is a summary statement of our understanding of its utility and value at the time."</PullQuote>

              <P>The men who designed the device looked at what it could do and walked away from it. They had <strong>"no involvement, legal or financial, in subsequent applications"</strong> of the work, were never contacted again about it by the company that went on to sell it, and were <strong>"totally unaware of any operational performance claims for any associated equipment."</strong> The depth numbers in the brochure were never theirs. They never saw them.</P>

              <Smoking label="Two selling points. Both false.">
                <p className="text-[1.05rem] text-foreground/90 leading-relaxed mb-3">Strip away the brochure and the AML Pro is sold on two headline claims. It carries <strong>"Patented Technology,"</strong> and it was <strong>"originally designed by NASA engineers for use in lunar exploration."</strong> Neither survives.</p>
                <p className="text-foreground/85 leading-relaxed mb-3">The patent, US 7,898,456, <strong>expired on 3 April 2023</strong> for non-payment of maintenance fees, and for the device's first five years on sale its manufacturer did not even own it (<A href="#s8">Section 8</A>). "Patented Technology," in the present tense the brochure uses it, points to a patent that has been dead for three years.</p>
                <p className="text-foreground/85 leading-relaxed">The "NASA engineers, lunar exploration" line is false on both of its words. The inventors are named, and neither was a NASA engineer; the one with a NASA connection worked on <em>Mars</em>, not the Moon (<A href="#s9">Section 9</A>). And the man who built it has now told us what it was actually for: a landmine detector for the US Army, and it failed even that, disqualified from the Defense Department contract on a false-positive rate above 20%. No lunar mission has ever flown a 2.45 GHz sounder, and the inventor's own account is that no space programme was ever involved. The claim is not an exaggeration of something real. There was no space heritage to exaggerate.</p>
              </Smoking>

              <P>Professor Cloutier was given this report in draft. He has <strong>allowed his words to be quoted in it</strong>, commended its fairness in keeping the inventors separate from the marketing, and said the report <strong>"is doing the right thing in addressing this problem."</strong> His correspondence speaks to the history and to his own work, not to the engineering analysis that follows, which is mine. His closing note was not a defence of the device. It was a quiet regret that his and Mr Oehme's names had, in his words, <em>"got dragged into this"</em> at all.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s1" num="1">What the AML Pro is, in SSI's own words</SectionHeading>

              <Tldr>SSI's own words: 2.45 GHz, all materials, 20 ft deep, in clay, wet soil, snow and standing water, with lunar heritage.</Tldr>

              <Figure
                src="/articles/aml-pro/aml-yellow.png"
                alt="The AML Pro device by SubSurface Instruments, yellow handheld unit with display, antenna housing, and pivoting handle"
                width={900}
                height={445}
                caption={<>The SubSurface Instruments AML Pro, image courtesy of <A href="https://www.ssilocators.com/product/aml-pro/">ssilocators.com</A>.</>}
              />

              <P>The AML Pro is the top-of-range model in SubSurface Instruments' "All Materials Locator" family. The cheaper sister product, the AML Plus, uses the same claimed mechanism and the same 2.45 GHz transmitter. Both are sold as "scientific instruments" for utility, water and gas industries. SSI's own product page summarises the headline claim verbatim:</P>

              <PullQuote cite={<>— <A href="https://www.ssilocators.com/product/aml-pro/">ssilocators.com/product/aml-pro/</A>, retrieved 4 June 2026</>}>
                "Utilizing technology developed for lunar exploration, the AML Pro – PVC Pipe Detector will indiscriminately locate subsurface materials – plastic, metal, wood, cable, or pipe. The AML will work in clay, wet soil, snow or even standing water. Redesigned specifically for the utility, water, gas, and cable industries, the AML allows professionals to locate objects faster while maximizing job efficiency."
              </PullQuote>

              <P>The same page lists the technical specification:</P>

              <Verbatim>{`Transmitter Frequency: 2.45 GHz
Weight: 2.5 lbs / 1.13 kg
Power: (3) 9-Volt Rechargeable batteries × 2 packs
Battery life: 25 hours typical
Compliance: FCC – Compliant A47-AML / IC: 10049A-AML
Sensitivity: 32 levels
Display: Backlit LCD
GPS: Plotting & Tracking
USB: yes (firmware + GPS export)`}</Verbatim>

              <P>The User Manual (revision V4.30.1, dated January 2025) opens with this attribution:</P>

              <PullQuote cite={<>— AML Pro User Manual V4.30.1, page 1, extracted via <code>pdftotext</code> from <A href="https://www.ssilocators.com/wp-content/uploads/2025/06/AML-PRO-Manual-V4301.pdf">the official PDF</A></>}>
                "Originally designed by NASA engineers for use in lunar exploration"
              </PullQuote>

              <P>And on the brochure (rev October 2019, the current data sheet linked from the product page):</P>

              <PullQuote cite={<>— AML Pro/Plus Brochure rev 10/2019, extracted via <code>pdftotext</code> from <A href="https://www.ssilocators.com/wp-content/uploads/2025/04/AML-PRO-PLUS-BROCHURE.pdf">the official PDF</A></>}>
                "Utilizing technology that was developed for lunar exploration"
              </PullQuote>

              <P>The published FAQ supplies the only physical theory of operation SSI offers:</P>

              <PullQuote cite={<>— <A href="https://www.ssilocators.com/aml_faq/">ssilocators.com/aml_faq/</A></>}>
                <strong>Q. How does it locate? What is the theory behind it?</strong><br />
                The AML works on finding changes in density. When the AML scans an area, it recognizes a change and refracts the signal of the object back to the four receiver antennas in the AML. If antennas on both sides of the AML receive refracted signal, both red lights will turn on.
              </PullQuote>

              <P>So the load-bearing physical claims are:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li><strong>(a)</strong> A 2.45 GHz transmitter can detect a 15-inch-wide pipe at up to 20 ft depth.</li>
                <li><strong>(b)</strong> It works through clay, wet soil, snow, and even standing water.</li>
                <li><strong>(c)</strong> The detection mechanism is "refraction" off "changes in density".</li>
                <li><strong>(d)</strong> The technology was developed for, or originally designed by NASA engineers for, lunar exploration.</li>
              </ul>

              <P>Sections 3 through 9 of this report test each of those four claims against the published peer-reviewed and government literature, the physics, and the market. Each fails on the evidence available.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s2" num="2">The price and the UK marketing copy</SectionHeading>

              <Tldr>$8,250 in the US; sold into the UK with copy that positions it against GPR, the method the UK specification mandates.</Tldr>

              <H3>United States, $8,250 at the authorised dealer</H3>
              <P>The Kuker-Ranken Land Products page for the AML Pro (canonical URL: <A href="https://kukerranken.com/product/subsurface-instruments-aml-pro-series-locator/">kukerranken.com/.../aml-pro-series-locator</A>) lists the price as <strong>$8,250.00</strong> and the status as "Available on backorder". The page meta-description reads verbatim: <em>"Find Buried PVC/PE Pipes Using GPS &amp; Advanced Digital Patented Technology. Priced at $8250.00"</em>. The page was last modified 23 February 2026. This is the live US dealer price for a unit that ships in the United States.</P>

              <H3>United Kingdom, the version of the marketing copy aimed at UK buyers</H3>
              <P>The AML Pro is distributed into the UK and Ireland and reaches UK buyers via the website <A href="https://pvcpipelocator.co.uk/aml-pro/">pvcpipelocator.co.uk</A>. The marketing copy on the UK-facing page repeats and slightly expands the manufacturer's claim. Verbatim:</P>

              <PullQuote cite={<>— <A href="https://pvcpipelocator.co.uk/aml-pro/">pvcpipelocator.co.uk/aml-pro</A></>}>
                "Utilizing technology that was developed for lunar exploration, the AML Pro – PVC Pipe Detector will locate subsurface materials indiscriminately – plastic, metal, wood, cable or pipe. <strong>Unlike the deficiencies of GPR (Ground Penetrating Radar), the AML will work in clay, wet soil, snow or even standing water.</strong>"
              </PullQuote>

              <P>The phrase <em>"Unlike the deficiencies of GPR"</em> is notable. PAS 128 (the UK specification for utility detection surveys; a PAS is a Publicly Available Specification rather than a full British Standard) mandates Ground-Penetrating Radar as one of the two recognised geophysical methods. The UK distributor is selling against the standard.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s3" num="3">The physics smoking gun, 2.45 GHz and the wet ground problem</SectionHeading>

              <Tldr>Wet ground swallows a 2.45 GHz signal within centimetres. The claimed round trip misses by roughly 3,300 dB. This is the core of the case.</Tldr>

              <P>This is the load-bearing physical claim of the whole report. The AML Pro emits at 2.45 GHz, verified by its FCC ID A47-AML record, which lists the frequency as <em>"2450.0 to 2450.0 MHz"</em> (<A href="https://fcc.report/FCC-ID/A47-AML">FCC.report, A47-AML</A>). The claim being tested is that this 2.45 GHz signal can travel through clay, wet soil, snow, or standing water, reflect off a buried pipe, and return, to a 2.5 lb handheld, at depths up to 20 ft.</P>

              <H3>Why 2.45 GHz is the cooking frequency</H3>
              <P>2.45 GHz is the centre of the ISM band that consumer microwave ovens use. The frequency was chosen, by the FCC and international ITU-R coordination, for a deliberate trade-off between two competing requirements: the wave must be absorbed strongly enough by water to heat food, but not so strongly that it never reaches the food's interior. London South Bank University's standard reference on water dielectric properties at microwave frequencies states this verbatim:</P>

              <PullQuote cite={<>— <A href="https://water.lsbu.ac.uk/water/microwave_water.html">LSBU Water Structure and Science</A></>}>
                "The frequency for maximum dielectric loss (about 20 GHz) lies higher than the 2.45 GHz (wavenumber 0.0817 cm⁻¹, wavelength 12.24 cm) produced by most microwave ovens. This is so that the radiation is not wholly absorbed by the first layer of water it encounters and may penetrate further into the foodstuff, heating it more evenly."
              </PullQuote>

              <P>In other words: 2.45 GHz sits well below the frequency of water's strongest absorption, which is around 20 GHz. It is used for cooking not because it is the most-absorbed frequency, but because it is absorbed just enough to heat food while still penetrating a few centimetres in, rather than scorching only the surface. The mechanism is dielectric heating, the oscillating field rotates the water molecules and that motion turns to heat, not a resonance. And here is the point for this report: a frequency whose reach into wet matter is the few centimetres from a chicken's skin to its bone is nowhere near one that could cross a metre of wet ground and return.</P>

              <H3>The actual penetration depths, measured numbers</H3>
              <P>The penetration depth (skin depth, the distance over which the field amplitude falls to 1/e ≈ 37% of its surface value) of a 2.45 GHz electromagnetic wave in pure water at 25°C is calculated from the standard plane-wave formula:</P>

              <Equation>D<sub>p</sub> ≈ λ<sub>0</sub> · √ε'<sub>r</sub> / (2π · L<sub>f</sub>)</Equation>

              <P>Substituting measured water values at 2.45 GHz (ε'<sub>r</sub> = 78, L<sub>f</sub> = 12, λ<sub>0</sub> = 12.24 cm), this evaluates to <strong>1.4 cm in pure water at 25 °C</strong>. In supercooled water (frozen food at 0 °F) the loss factor L<sub>f</sub> rises to 40.1, dropping penetration to <strong>0.43 cm</strong>. Both numbers come from the LSBU compilation above.</P>

              <P>For mineral soils, clay, sand, silt, the canonical peer-reviewed dataset is Hallikainen, Ulaby, Dobson, El-Rayes &amp; Wu (1985), <em>"Microwave Dielectric Behavior of Wet Soil, Part I: Empirical Models and Experimental Observations"</em>, IEEE Transactions on Geoscience and Remote Sensing, GE-23(1): 25-34 (<A href="https://www.semanticscholar.org/paper/Microwave-Dielectric-Behavior-of-Wet-Soil-Part-1-Hallikainen-Ulaby/751c289062a22daa6b5b44056d955b9d757cd77b">Semantic Scholar entry</A>). Hallikainen et al. measured the complex permittivity of five representative soils at frequencies 1.4-18 GHz.</P>

              <P>The follow-on work in that lineage puts one-way penetration depth for typical moist mineral soil at 2.45 GHz in the <strong>single-digit centimetre range</strong> as volumetric moisture content rises above ~15%.</P>

              <EvidenceTable
                headers={["Medium", "Penetration depth at 2.45 GHz (1/e amplitude)", "AML Pro claim"]}
                rows={[
                  ["Pure water, 25 °C", <strong className="text-foreground">1.4 cm</strong>, "\"even standing water\""],
                  ["Supercooled water (frozen)", <strong className="text-foreground">0.43 cm</strong>, "\"snow\""],
                  ["Moist mineral clay (~30% vol. moisture)", <strong className="text-foreground">~3 cm</strong>, "\"clay\""],
                  ["Wet sand", "~5-10 cm", "\"wet soil\""],
                  ["Dry sand", "~10-30 cm", "(n/a)"],
                  ["Air (free space)", "≈ ∞", "(n/a)"],
                  [<strong className="text-foreground">Claimed AML Pro depth</strong>, "-", <strong className="text-foreground">610 cm (20 ft)</strong>],
                ]}
              />

              <SvgFigure caption="Wave decay at 2.45 GHz in moist clay, drawn to the NBS-measured skin depth of ~3 cm. The vertical scale is broken because the marketing claim is twenty times deeper than the bottom of the diagram.">
                <svg viewBox="0 0 880 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of 2.45 GHz wave decay in moist clay against the claimed 6.1 m depth" className="w-full h-auto" style={{ background: "#ffffff" }}>
                  <text x="32" y="40" fontFamily="Montserrat,Arial,sans-serif" fontSize="20" fontWeight="800" fill="#0b1626">What 2.45 GHz actually does in moist clay</text>
                  <text x="32" y="64" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#4b5563">The wave loses about 63% of its remaining strength every ~3 cm (one skin depth, NBS measured data)</text>
                  <rect x="32" y="88" width="816" height="6" fill="#10b981" opacity="0.5" />
                  <text x="36" y="84" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#10b981">GROUND SURFACE</text>
                  <rect x="32" y="94" width="816" height="280" fill="#f5f6f8" />
                  <rect x="32" y="94" width="816" height="280" fill="url(#soilfade)" />
                  <defs>
                    <linearGradient id="soilfade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#d8c7ad" stopOpacity="0.55" />
                      <stop offset="1" stopColor="#a98f6b" stopOpacity="0.75" />
                    </linearGradient>
                  </defs>
                  <path d="M 200 94 q 38 18 0 36 q -38 18 0 36 q 22 14 0 28 q -22 14 0 28 q 10 9 0 18 q -10 9 0 18 q 4 6 0 12 q -4 6 0 12 q 1.6 4 0 8 q -1.6 4 0 8" fill="none" stroke="#1a6fe6" strokeWidth="4" strokeLinecap="round" />
                  <text x="222" y="120" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1a6fe6">2.45 GHz wave entering the ground at full legal power</text>
                  <line x1="560" y1="94" x2="560" y2="374" stroke="#94a3b8" strokeWidth="1.5" />
                  <g fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#1f2937">
                    <line x1="552" y1="124" x2="568" y2="124" stroke="#4b5563" strokeWidth="2" />
                    <text x="578" y="128">3 cm: signal down to 37%</text>
                    <line x1="552" y1="160" x2="568" y2="160" stroke="#4b5563" strokeWidth="2" />
                    <text x="578" y="164">9 cm: below 5%</text>
                    <line x1="552" y1="200" x2="568" y2="200" stroke="#4b5563" strokeWidth="2" />
                    <text x="578" y="204">15 cm: 1 part in 150</text>
                    <line x1="552" y1="244" x2="568" y2="244" stroke="#4b5563" strokeWidth="2" />
                    <text x="578" y="248">30 cm: 1 part in 22,000</text>
                  </g>
                  <path d="M 552 300 l 16 -8 m -16 16 l 16 -8" stroke="#94a3b8" strokeWidth="2" fill="none" />
                  <text x="578" y="302" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#94a3b8" fontStyle="italic">scale break, 5.7 metres omitted</text>
                  <g>
                    <rect x="60" y="330" width="22" height="30" rx="4" fill="#e64d1a" />
                    <rect x="86" y="338" width="120" height="14" rx="7" fill="#e64d1a" opacity="0.85" />
                    <text x="578" y="344" fontFamily="Montserrat,Arial,sans-serif" fontSize="14" fontWeight="800" fill="#e64d1a">610 cm: where the marketing says</text>
                    <text x="578" y="362" fontFamily="Montserrat,Arial,sans-serif" fontSize="14" fontWeight="800" fill="#e64d1a">the pipe gets detected, and back</text>
                    <text x="86" y="330" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#7c5a3a">buried PVC pipe (15 in wide)</text>
                  </g>
                  <text x="32" y="406" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#4b5563">By 30 cm the signal is twenty-two-thousand times weaker, one way.</text>
                  <text x="32" y="426" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#0b1626">The 610 cm round trip costs roughly 3,476 dB. The most any legal receiver can recover is about 154 dB.</text>
                </svg>
              </SvgFigure>

              <H3>The link budget, why this is physics, not engineering</H3>
              <P>To reach a pipe at 6 m depth in moist clay would require the wave to traverse approximately <strong>200 skin depths one way</strong>, or <strong>400 skin depths round trip</strong>. Each skin depth costs 8.69 dB of amplitude loss. The two-way attenuation budget through moist clay alone is therefore:</P>

              <Equation>400 × 8.69 dB ≈ 3,476 dB of dielectric absorption (two-way)</Equation>

              <P>plus free-space-equivalent spreading loss, plus the radar 1/R⁴ factor for an unfocused return, plus the interface reflection coefficient (typically −30 to −40 dB below incident for a dielectric contrast between soil and PVC).</P>

              <P>The thermal noise floor of any practical 2.45 GHz receiver at room temperature with a 1 MHz noise bandwidth is approximately <strong>−114 dBm</strong>. The maximum legal conducted output for a 2.4 GHz ISM-band Part 15 transmitter is <strong>1 W = +30 dBm</strong> (47 CFR § 15.247(b)(1), <A href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-C/subject-group-ECFR2f2e5828339709e/section-15.247">eCFR live text</A>). Even with a high-gain (+10 dBi) antenna, the maximum EIRP is +40 dBm = 10 W. A signal of +40 dBm can survive at most ≈ 154 dB of round-trip loss before reaching the noise floor.</P>

              <Smoking label="The number that ends the discussion">
                <p className="text-foreground/85 leading-relaxed mb-2">The legal-maximum link budget at 2.45 GHz allows for <strong>~154 dB</strong> of round-trip loss. The physical-minimum two-way attenuation through 6 m of moist clay at 2.45 GHz is <strong>~3,476 dB</strong> (absorption alone, before any other loss term). The deficit is approximately <strong>3,300 dB</strong>, that is, the return signal is <strong>10<sup>330</sup> times</strong> below the receiver's thermal noise floor.</p>
                <p className="text-foreground/85 leading-relaxed">There is no antenna design, no signal processing, no integration time, no compression gain that closes a 3,300 dB link-budget gap. The physics is closed.</p>
              </Smoking>

              <NoteBox>
                <strong className="text-foreground">What 3,300 dB means, in plain English.</strong> Decibels compress huge numbers: every 10 dB is a times-ten change. A receiver that can cope with 154 dB of loss can still hear a signal that has shrunk more than a quadrillion times, which is seriously impressive engineering. The two-way trip through 6 m of wet clay shrinks the signal by a factor written as a 1 followed by more than 300 zeros. Better electronics cannot fix that, in the same way a better torch does not let you see through a brick wall. The energy is no longer weak, it is gone, absorbed by the water in the ground.
              </NoteBox>

              <P>The significance of this number is not confined to one advertised maximum depth. It is the most dramatic symptom of a broader mismatch between the AML Pro's chosen frequency and the physics of buried-utility locating in real soils; <A href="#s12">Section 12</A> takes up what remains of the claim when the 20 ft figure is set aside entirely.</P>

              <P>For comparison, the entire reception chain of NASA's Apollo Lunar Sounder Experiment, a 43 kg space-qualified instrument with a 60 m dipole antenna, achieved roughly +30 dB of round-trip system gain at 5 MHz over dry lunar regolith. The AML Pro proposes to outperform that in wet Earth soil with a 2.5 lb handheld at 2.45 GHz. The frequency is wrong by three orders of magnitude in the wrong direction.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s4" num="4">Why every real ground-penetrating radar uses lower frequencies, not higher</SectionHeading>

              <Tldr>Every real ground radar operates between 100 MHz and 1.5 GHz. The AML sits above them all, at the microwave-oven frequency.</Tldr>

              <H3>A note on terminology, is the AML Pro GPR or not?</H3>
              <P>Before the frequency comparison below, a precise definition is needed because the term "GPR" is used loosely. In the utility-detection industry "GPR" means an instrument that <strong>measures round-trip travel time into the ground and records the reflections into a position-stamped radargram</strong>, instruments like <A href="https://www.geophysical.com/">GSSI UtilityScan</A>, MALA Easy Locator, IDS C-Thrue, Leica DSX. Most utility units do that by transmitting a short broadband pulse and gating the receiver on time of flight; some achieve the same travel-time picture in the frequency domain by sweeping a band of frequencies. What every GPR shares, whichever way it is built, is ranging and a recording: depth measured from travel time, written into a B-scan / radargram. <strong>The AML Pro has neither, so it is not GPR by any implementation of the term.</strong> Its actual architecture, on the closest matching public-record patent (Cloutier &amp; Oehme, <A href="#s8">Section 8</A>), is continuous-wave 2.45 GHz microwave on one fixed frequency + phase-comparison between paired receive antennas + binary LED indicators, with no travel-time measurement of any kind. It transmits and receives radio waves into and out of the ground, so it is in the broadest sense a form of subsurface radar, but it is not GPR. The two share only the word "radar". The architectures, the outputs, the user interface, and the data products are entirely different.</P>

              <P>SSI's own marketing acknowledges the distinction when it writes "Unlike the deficiencies of GPR", that is SSI saying the AML Pro is not GPR. The frequency comparison below assesses the AML Pro against the GPR family <em>not</em> because it is GPR, but because the AML Pro is marketed as a replacement for GPR, and the operating frequency it has chosen makes that comparison the relevant one. The question the comparison answers is: "Is 2.45 GHz a plausible frequency for any kind of subsurface radio detection at the depths claimed?"</P>

              <H3>The wavelength-vs-penetration trade-off</H3>
              <P>The wavelength-versus-penetration trade-off is the central engineering reality of every ground-penetrating radar ever built. Annan, A.P. (2009), <em>Electromagnetic Principles of Ground Penetrating Radar</em>, Chapter 1 in Jol, H.M. (ed.), <em>Ground Penetrating Radar Theory and Applications</em> (Elsevier) is the standard university-level treatment of this subject. The textbook rule, drilled into every utility surveyor in PAS 128 training: <strong>higher frequency = higher resolution but lower depth; lower frequency = deeper but coarser</strong>.</P>

              <P>For the sub-metre-to-~5 m depth range that utility detection operates in, the depths the UK underground-utility industry actually cares about, real GPR manufacturers settle in the 200 MHz to 1,500 MHz band. The market evidence is unambiguous:</P>

              <EvidenceTable
                headers={["Manufacturer / Product", "Operating frequency", "Depth capability", "Source"]}
                rows={[
                  ["GSSI UtilityScan DF", "300 MHz + 800 MHz dual", "~5 m (16 ft)", <A href="https://www.geophysical.com/antennas">geophysical.com/antennas</A>],
                  ["GSSI 350 HS \"HyperStacking\"", "350 MHz", "0-12 m in favourable soil", <A href="https://www.exiusa.com/item/radar/350-mhz-digital-antenna">exiusa.com/.../350-mhz</A>],
                  ["MALA Easy Locator HDR", "450 MHz", "Utility, sub-5 m", <A href="https://www.groundpenetratingradar.co.uk/about/gpr-equipment/">gpr UK</A>],
                  ["Leica DSX", "600 MHz", "Up to 2 m", <A href="https://leica-geosystems.com/products/detection-systems/utility-detection-solutions/leica-dsx-utility-detection-solution">leica-geosystems.com</A>],
                  ["General mid-frequency utility GPR", "250-400 MHz", "General utility locating", <A href="https://www.undergroundsurveying.com/technology/utility-locating-technology/ground-penetrating-radar-utilityscan-technology">undergroundsurveying.com</A>],
                  ["Deep-application GPR", "100 MHz", "10+ m", "(same as above)"],
                  ["IDS C-Thrue (concrete scanner)", "2 GHz dual-polarised", "Up to 0.8 m, in concrete", <A href="https://idsgeoradar.com/products/ground-penetrating-radar/c-thrue">idsgeoradar.com</A>],
                  [<strong className="text-foreground">AML Pro (CW microwave, not GPR)</strong>, <strong className="text-foreground">2,450 MHz</strong>, <strong className="text-foreground">Claimed 6.1 m, in wet ground</strong>, <A href="https://www.ssilocators.com/product/aml-pro/">ssilocators.com</A>],
                ]}
              />

              <P>Two further things about this table are worth pausing on. First, the convergence: competing manufacturers, developing independently over decades of research and field operation, all arrived at the same frequency window and the same signal-delivery approach. That convergence is evidence in its own right. Note also where the nearest-frequency instrument sits: the 2 GHz concrete scanner promises 0.8 m in concrete, an engineered, comparatively low-loss material, not six metres in wet clay. Second, the coupling: every utility GPR above is ground-coupled, its antenna run against the surface precisely so that the maximum energy crosses into the soil rather than reflecting off it. The AML Pro is held in the air. A further slice of its already-doomed signal reflects off the ground surface and never enters the soil at all.</P>

              <SvgFigure caption="The frequency-versus-depth trade-off that governs every ground-penetrating radar, drawn from the manufacturer specifications in the table above.">
                <svg viewBox="0 0 880 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frequency ladder showing GPR bands and depth capability against the AML Pro at 2.45 GHz" className="w-full h-auto" style={{ background: "#ffffff" }}>
                  <text x="32" y="40" fontFamily="Montserrat,Arial,sans-serif" fontSize="20" fontWeight="800" fill="#0b1626">Higher frequency, shallower reach</text>
                  <text x="32" y="64" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#4b5563">Every utility radar ever built lives on the left of this chart. Depth bars show typical capability in real soil.</text>
                  <line x1="60" y1="120" x2="840" y2="120" stroke="#0b1626" strokeWidth="2" />
                  <g fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#4b5563">
                    <text x="60" y="110">100 MHz</text>
                    <text x="255" y="110">350 MHz</text>
                    <text x="470" y="110">1,000 MHz</text>
                    <text x="650" y="110">1,500 MHz</text>
                    <text x="775" y="110" fontWeight="800" fill="#e64d1a">2,450 MHz</text>
                  </g>
                  <g>
                    <rect x="70" y="124" width="70" height="230" fill="#1a6fe6" opacity="0.85" rx="4" />
                    <text x="105" y="372" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#1f2937" textAnchor="middle">deep GPR</text>
                    <text x="105" y="200" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">10 m+</text>
                    <rect x="250" y="124" width="90" height="130" fill="#1a6fe6" opacity="0.85" rx="4" />
                    <text x="295" y="272" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#1f2937" textAnchor="middle">utility GPR, the PAS 128 workhorse</text>
                    <text x="295" y="180" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">~5 m</text>
                    <rect x="470" y="124" width="100" height="55" fill="#1a6fe6" opacity="0.85" rx="4" />
                    <text x="520" y="198" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#1f2937" textAnchor="middle">high-resolution GPR, concrete and rebar</text>
                    <text x="520" y="158" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">&lt;1 m</text>
                    <rect x="780" y="124" width="60" height="10" fill="#e64d1a" rx="3" />
                    <text x="810" y="158" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fontWeight="800" fill="#e64d1a" textAnchor="middle">centimetres</text>
                    <text x="810" y="176" fontFamily="Montserrat,Arial,sans-serif" fontSize="11" fill="#4b5563" textAnchor="middle">in wet ground</text>
                  </g>
                  <g fontFamily="Montserrat,Arial,sans-serif">
                    <line x1="810" y1="196" x2="810" y2="250" stroke="#e64d1a" strokeWidth="2" strokeDasharray="4 3" />
                    <text x="810" y="272" fontSize="13" fontWeight="800" fill="#e64d1a" textAnchor="middle">the AML Pro sits here</text>
                    <text x="810" y="290" fontSize="12" fill="#4b5563" textAnchor="middle">2.45 GHz, the band</text>
                    <text x="810" y="306" fontSize="12" fill="#4b5563" textAnchor="middle">microwave ovens use,</text>
                    <text x="810" y="322" fontSize="12" fill="#4b5563" textAnchor="middle">claiming 6.1 m in wet soil</text>
                  </g>
                  <text x="32" y="392" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#0b1626">No manufacturer has ever built a utility radar at 2.45 GHz. The band is not unexplored, it is avoided.</text>
                </svg>
              </SvgFigure>

              <P>The point is not that 2.45 GHz <em>could</em> theoretically deliver the AML Pro's advertised use-case if someone built the right device, it cannot at the depths and in the media the device is marketed for, for the reasons in <A href="#s3">Section 3</A> (what remains of a much weaker shallow-ground claim is taken up in <A href="#s12">Section 12</A>).</P>

              <P>The point is that <strong>nobody in the global GPR engineering community has ever built a utility GPR at 2.45 GHz</strong>, and nobody has built a CW microwave subsurface-detection device at 2.45 GHz that has been independently validated either, because the engineering and physics of moist-ground penetration make it the wrong choice for either architecture. The AML Pro is operating in a frequency band that the global subsurface-detection industry, after 40 years of engineering practice in both pulsed GPR and CW microwave detection, has left empty.</P>

              <P>The UK distributor's website goes further than that: it markets the AML Pro <em>as a replacement for GPR</em>, naming GPR by name and asserting that GPR has "deficiencies" the AML Pro does not. The verbatim text on the UK-facing page reads:</P>

              <PullQuote cite={<>— <A href="https://pvcpipelocator.co.uk/aml-pro/">pvcpipelocator.co.uk/aml-pro</A>, retrieved 5 June 2026. The text is reproduced on SSI's US product page (<A href="https://www.ssilocators.com/product/aml-pro/">ssilocators.com</A>) with minor variation; the UK page is the one a UK buyer is most likely to read.</>}>
                "Utilizing technology that was developed for lunar exploration, the AML Pro – PVC Pipe Detector will locate subsurface materials indiscriminately – plastic, metal, wood, cable or pipe. <strong>Unlike the deficiencies of GPR (Ground Penetrating Radar), the AML will work in clay, wet soil, snow or even standing water.</strong> Redesigned specifically for the utility, water, gas and cable industries, the AML allows professionals to locate objects faster, while maximizing job efficiency."
              </PullQuote>

              <P>The actual deficiency is not GPR's. GPR works precisely because it operates at frequencies whose wavelength matches the depth and dielectric loss of real soils, typically 200 MHz to 1,500 MHz for utility work, as the manufacturer specifications above show. 2.45 GHz does not, for the reasons set out in <A href="#s3">Section 3</A>. Selling the AML Pro <em>against</em> GPR, rather than alongside it, inverts the engineering reality: it is the AML Pro's operating frequency that cannot survive moist ground, while GPR's lower frequencies are specifically chosen so that they can.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s5" num="5">The market test, fourteen years of "All-New"</SectionHeading>

              <Tldr>Fourteen years on sale: not adopted by any UK survey firm reviewed, named by no standard, tested blind by nobody.</Tldr>

              <P>This section is not about physics. It is about what fourteen years of commercial availability have produced in the real utility-detection market.</P>

              <H3>The product is not new</H3>
              <P>The current AML Pro / AML+ data sheet describes the product as <em>"The All-New AML PRO™ &amp; AML+™ Series"</em> (<A href="https://www.ssilocators.com/wp-content/uploads/2025/04/AML-PRO-PLUS-BROCHURE.pdf">SSI brochure rev 10/2019, PDF</A>). The patent that most closely matches the device's described mechanism (<A href="https://patents.justia.com/patent/7898456">US 7,898,456</A>, Cloutier &amp; Oehme, assigned to Prairielands Energy Marketing Inc., examined in <A href="#s8">Section 8</A>) was granted 1 March 2011. The FCC certification for the 2.45 GHz transmitter (FCC ID A47-AML) was granted by the FCC on <strong>16 March 2012</strong>, <A href="https://fcc.report/FCC-ID/A47-AML">the grant record is public on FCC.report</A>, certified for SSI by Jim Hokanson, General Manager, tested by Intertek. The device was introduced into the trade press as "newly released" in the <em>Underground Construction</em> magazine of <strong>August 2012</strong> (<A href="https://undergroundinfrastructure.com/magazine/2012/august-2012-vol-67-no-8/new-products/all-materials-locator-is-underground-locating-game-changer">"All Materials Locator Is Underground Locating Game-Changer"</A>), where Hokanson was quoted on the device's launch. The AML brand has been on the open commercial market for <strong>fourteen years</strong>. "All-New" describes neither the underlying technology nor the brand.</P>

              <H3>In fourteen years, no recognised UK utility-mapping firm has adopted it</H3>
              <P>The UK utility-mapping market is mature, technically literate, and operates under <A href="https://terrainsurveys.co.uk/news-and-media/the-4-pas128-quality-levels-explained">PAS 128:2022</A> (the BSI specification for utility detection surveys; explainer at <A href="https://www.socotec.co.uk/our-services/land-and-utility-surveying/underground-utility-surveys">SOCOTEC</A> and <A href="https://www.technicsgroup.com/2024/10/everything-you-need-to-know-about-pas-128-survey/">Technics Group</A>). PAS 128 surveyors publish their method sets (capability pages, services pages, "our equipment" pages) on their own websites. For this report I reviewed the published method-statement and equipment pages of a sample of mainstream UK PAS 128 utility-mapping and detection-survey contractors in May-June 2026, selected from the membership of the <A href="https://www.tsa-uk.org.uk/">Survey Association</A> and from the major contractors that show up in published PAS 128 reference work. Across that sample, the universal pair surfaced on every contractor's published method set: electromagnetic location (active EM, signal generator + receiver, frequency 8 kHz to 200 kHz, see for example <A href="https://www.radiodetection.com/en-us/products/precision-locator-range/rd8200-cable-and-pipe-locators">Radiodetection RD8200</A>) and ground-penetrating radar (200 MHz to 1,500 MHz, see for example <A href="https://www.geophysical.com/antennas">GSSI antennas</A>). The AML Pro did not appear on any of the contractor method-statement pages reviewed, not as a primary method, not as a complementary method, not as a noted-but-unused option. Fourteen years after market release, in the largest English-speaking PAS 128 surveying market in the world, the device is absent from the practitioner toolkit on the contractors reviewed.</P>

              <H3>In fourteen years, no standards body has named it</H3>
              <P>The published standards that govern UK underground-utility detection and survey are <A href="https://terrainsurveys.co.uk/news-and-media/the-4-pas128-quality-levels-explained">PAS 128:2022 (BSI)</A>, <A href="https://www.hse.gov.uk/pubns/books/hsg47.htm">HSG47 3rd edition (HSE, 2014)</A> (<A href="https://www.hse.gov.uk/pubns/priced/hsg47.pdf">free PDF</A>), the <A href="https://www.njug.org.uk/">NJUG</A> Guidelines on the Positioning and Colour Coding of Underground Utilities' Apparatus, the <A href="https://www.tsa-uk.org.uk/">Survey Association's</A> Utility Survey best practice, and ASCE Standard 38-22 in the United States. None of these documents reference "density-difference RF locator", "all-materials locator", "long-range locator", "molecular frequency discrimination", or any of the device-class vocabulary used by the AML Pro's marketing. The recognised geophysical methods, in every document, are electromagnetic location and ground-penetrating radar. The device class to which the AML Pro belongs is not a recognised method under any of those frameworks. The closest match in the wider literature is the <A href="https://en.wikipedia.org/wiki/Long-range_locator">"long-range locator" category</A>, which is treated by independent skeptical reference works as a class of pseudoscience devices (<A href="https://skepdic.com/mfd.html">Skeptic's Dictionary on multi/molecular frequency discrimination</A>).</P>

              <H3>In fourteen years, no independently-replicated controlled test has been published</H3>
              <P>One unblinded single-operator paper, <A href="https://www.mdpi.com/2076-3417/15/11/5794">Lee &amp; Yun, <em>Applied Sciences</em> (MDPI), 15(11): 5794, May 2025</A> (DOI <A href="https://doi.org/10.3390/app15115794">10.3390/app15115794</A>), is the entirety of the peer-reviewed evidence. It is examined in detail in Section 11. No Sandia, NIST, NIJ, ASCE, IEEE, BSI working-group, or independent geophysics-laboratory study has tested the AML Pro under blind protocol. The closest controlled tests in the public record are Sandia's evaluations of the device's architectural cousins:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li><strong>DKL LifeGuard, Sandia 1998</strong> (SAND98-2779): <em>"performs no better than random chance"</em>, <A href="https://newsreleases.sandia.gov/human-presence-detector-fails-controlled-tests-conducted-by-sandia-national-laboratories/">Sandia news release</A>; full report archived at <A href="https://digital.library.unt.edu/ark:/67531/metadc711586/">UNT Digital Library</A>. Follow-up NIJ examination (NCJ 206120) concluded the LifeGuard is <A href="https://nij.ojp.gov/library/publications/physical-examination-dkl-lifeguard-model-3">"not based upon the principle of dielectrophoresis nor on any other accepted scientific principles"</A>.</li>
                <li><strong>Quadro Tracker, 1995-96</strong>: FBI economic-crimes seizure January 1996, federal injunction April 1996 under 18 U.S.C. §§ 1341 and 1343, <A href="https://skepdic.com/quadro.html">Skeptic's Dictionary entry with reproduced FBI bulletin</A>; <A href="https://reason.com/1996/11/01/box-of-dreams/"><em>Reason</em> magazine "Box of Dreams" investigation, 1996</A>.</li>
                <li><strong>ADE 651 / GT200, UK 2013</strong>: James McCormick convicted under Fraud Act 2006, sentenced to 10 years' imprisonment (<A href="https://www.cnn.com/2013/05/02/world/europe/uk-fake-bomb-detector">CNN coverage</A>); Gary Bolton convicted for GT200, sentenced to 7 years (<A href="https://en.wikipedia.org/wiki/GT200">Wikipedia GT200</A>).</li>
              </ul>
              <P>The AML Pro has avoided this controlled-test scrutiny for fourteen years; it has not passed it.</P>

              <H3>What this absence means</H3>
              <P>UK utility-mapping firms operate on capital risk. A wrong call on a cable strike is an HSE prosecution (under <A href="https://www.hse.gov.uk/electricity/information/excavations.htm">HSE's underground-services framework</A>), a contractor insurance claim, an injured operative, in extreme cases a fatality. A tool that delivered what the AML Pro's marketing claims, passive 2.45 GHz detection of PVC pipe at 20 ft depth, in clay, wet soil, snow or standing water, with no transmitter on the pipe and no GPR antenna train to operate, would solve a real, recurring, expensive problem that those firms face every working day.</P>

              <P>It would not need a sales force or a marketing budget. Word of mouth among twenty UK utility-detection contractors would carry the device into universal adoption inside three to five years. That has not happened in fourteen.</P>

              <P>The standards bodies that write PAS 128, HSG47, NJUG guidance and ASCE 38 are not commercial competitors of SSI. They are independent panels with no interest in keeping a working method out of the toolkit. They have not added "density-difference UHRF" to the toolkit in fourteen years.</P>

              <P>Their internal reasoning is not on the public record, and this report does not claim to know it. What is on the record is the observable output: in fourteen years, none of them has recognised the device class, and that uniform absence is the opposite of what would be expected if the product delivered its advertised performance in real field conditions.</P>

              <Smoking label="The market-revealed verdict">
                <p className="text-foreground/85 leading-relaxed">Fourteen years of commercial availability, zero adoption by UK utility-mapping firms, zero standards-body recognition, zero blinded controlled validation. The market has tested this product on its own terms and the market has not bought the claim. A working tool at this price point, in a market with this much recurring real-world demand, does not stay invisible for fourteen years.</p>
              </Smoking>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s6" num="6">What the AML Pro actually detects (and what it does not)</SectionHeading>

              <Tldr>Radar reflects off electrical contrast, not density. The patent claims a narrow phase-comparison array; "density" is the brochure's rebranding of it.</Tldr>

              <P>The FAQ states the detection principle: <em>"The AML works on finding changes in density. When the AML scans an area, it recognizes a change and refracts the signal of the object back to the four receiver antennas."</em></P>

              <P>This is wrong as a matter of physical principle. Radar reflects from contrasts in <strong>electromagnetic impedance</strong>, which is a function of relative permittivity ε<sub>r</sub> and (in the low-loss limit) magnetic permeability μ<sub>r</sub>. It does <em>not</em> reflect from bulk density.</P>

              <P>From the EPA's primer on ground-penetrating radar (the same agency that authored the modern US underground-services guidance), verbatim:</P>

              <PullQuote cite={<>— <A href="https://www.epa.gov/environmental-geophysics/ground-penetrating-radar-gpr">EPA Environmental Geophysics: GPR</A></>}>
                "GPR identifies contrasts in electromagnetic impedance... variations are associated with changes in the relative dielectric constant of the subsurface."
              </PullQuote>

              <P>The reflection coefficient at a planar interface between two non-magnetic media is:</P>

              <Equation>R = (√ε₁ − √ε₂) / (√ε₁ + √ε₂)</Equation>

              <P>This formula contains no density term. A 100 kg/m³ block of dry styrofoam (ε<sub>r</sub> ≈ 1.05) and a 1,000 kg/m³ block of bulk water (ε<sub>r</sub> ≈ 80) produce dramatically different radar returns despite the water being 10× heavier than the styrofoam. A 2,000 kg/m³ block of granite (ε<sub>r</sub> ≈ 5-7) and a 1,000 kg/m³ block of pumice (ε<sub>r</sub> ≈ 5-7) produce essentially identical radar returns despite a 2× difference in density.</P>

              <P>When SSI says the device "refracts off density changes", it is using the language of physics in a way that does not map onto any known electromagnetic mechanism. The wave that exists at 2.45 GHz responds to permittivity contrast and to conductivity contrast. It does not respond to density. The mechanism described in the FAQ <strong>does not correspond to any real electromagnetic phenomenon</strong>.</P>

              <P>The patent behind the device (<A href="#s8">Section 8</A>) makes the gap plainer still. It does not claim density sensing anywhere. It claims a five-antenna phase-comparison array, described in ordinary RF terms: a transmit antenna, paired receivers, phase detectors. Phase comparison is a legitimate, standard radio technique, and on paper it is a narrow one. "Finds changes in density" is the brochure's rebranding of that narrow idea into something broad and intuitive-sounding that the patent never discloses. The interpretive leap belongs to the marketing, not to the inventors' filing. And the engineers who cloned the expired architecture in 2025 describe it the same way the patent does, as phase-difference measurement, and never once as density (<A href="#s8">Section 8</A>).</P>

              <P>There is a second problem beyond the wrong word. The explanation omits every variable that practitioners of electromagnetic subsurface detection actually work in: complex permittivity, conductivity, impedance contrast, loss tangent, wavelength, coupling geometry. A non-standard mechanism description is not just a stylistic flaw. It removes the reader's ability to test the claim on paper, and it makes independent blind validation more necessary, not less. In the history of handheld locating devices, scientifically vague mechanism language and an absence of decisive blind testing have tended to arrive together (<A href="#s13">Section 13</A>).</P>

              <Figure
                src="/articles/aml-pro/locating.png"
                alt="An operator scanning the ground with the AML Pro held by its handle"
                width={900}
                height={445}
                caption="The AML Pro in use: a slow walking scan with the unit held level by its handle, reading two LED indicators. Image courtesy of ssilocators.com."
              />
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s7" num="7">The FCC certification, what it does and does not validate</SectionHeading>

              <Tldr>FCC certification means the device transmits legally. It says nothing about whether it works.</Tldr>

              <P>The AML Pro carries FCC ID <strong>A47-AML</strong>, granted to SubSurface Instruments, Inc. on <strong>16 March 2012</strong>. The certification was tested by Intertek Testing Services NA, Inc. and certified by Jim Hokanson, then General Manager of SSI. The grant covers the "Underground Material Locator" operating at 2450.0 MHz. Full record at <A href="https://fcc.report/FCC-ID/A47-AML">fcc.report/FCC-ID/A47-AML</A>.</P>

              <P>FCC Part 15 certification is an <strong>emissions compliance test</strong>, not an efficacy test. It confirms that:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li>The device's radio-frequency emissions stay within legal limits (output power, spurious emissions, frequency stability).</li>
                <li>The device does not cause harmful interference to licensed radio services.</li>
                <li>The device accepts any interference received without affecting normal operation.</li>
              </ul>

              <P>It does <strong>not</strong> confirm:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li>That the device performs the function it is marketed for.</li>
                <li>That the device meets any utility-detection standard (it does not, ASCE 38, PAS 128, NJUG and HSG47 are not within FCC jurisdiction).</li>
                <li>That the manufacturer's marketing claims about depth, materials, or mechanism are accurate.</li>
              </ul>

              <NoteBox>
                <strong className="text-foreground">Important context:</strong> the FBI-debunked Quadro Tracker (1996) was sold with the FCC ID printed on its case as a credibility cue, despite Sandia having confirmed there were no electronics inside it capable of doing what it claimed. <em>FCC ID = the device can legally transmit. It does not equal the device works as advertised.</em>
              </NoteBox>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s8" num="8">The "patented technology" claim, what the patent record actually shows</SectionHeading>

              <Tldr>The patent is real and its inventors are distinguished. SSI has owned it since 2017, let it expire in 2023, and still markets "Patented Technology".</Tldr>

              <P>SSI's marketing repeatedly invokes patent protection. The AML Pro product page hero reads: <em>"Find Buried PVC and All Other Plastic Pipes Using UHRF Advanced Digital <strong>Patented Technology</strong> &amp; GPS Tracking"</em>. The data-sheet brochure repeats the line. Neither the product page, the data-sheet brochure, nor the User Manual V4.30.1 cites a patent number, a patent title, or an inventor name. The marketing simply asserts the device is "patented" and leaves the reader to take that on trust.</P>

              <P>For a publishable report, the responsible exercise is to test that assertion against the public patent record. The exercise turns out to be more interesting than I first assumed.</P>

              <H3>The assignee search that nearly missed the story</H3>
              <P>A search of <A href="https://patents.google.com/?assignee=Subsurface+Instruments">Google Patents for patents whose assignee field contains "Subsurface Instruments"</A> returns two results, one indexed under <em>Prairielands Energy Marketing Inc.</em>, the other under <em>Innovatum, Inc.</em>. The assignee index keys on the original assignee, so a company that acquires a patent after grant can own it without ever surfacing in that search. That is exactly what happened here: the assignee search surfaces nothing under SSI's name, while the recorded assignment chain, set out below, shows SSI has owned the patent since April 2017. The fuller record makes the marketing claim look worse, not better.</P>

              <H3>The patent that matches the AML Pro's described mechanism, and since April 2017 it has been SSI's own</H3>
              <P>The more revealing search is for the <em>mechanism</em> the AML Pro is marketed to perform: a handheld 2.4-to-2.5 GHz microwave transmitter with multiple antennas, phase-comparison detection, LED indicators, a laser pointer, an audio tone, designed to detect buried PVC and metal objects. That search surfaces:</P>

              <div className="border-l-4 border-border bg-muted/40 rounded-r-md px-5 py-4 my-6 text-foreground/90 leading-relaxed">
                <strong>US Patent 7,898,456 B2</strong> — <em>"Apparatus and method for detecting and locating hidden objects"</em><br />
                Inventors: <strong>Paul A. Cloutier</strong> (Nassau Bay, TX) and <strong>Delbert R. Oehme</strong> (Kingwood, TX)<br />
                Assignee: <strong>Prairielands Energy Marketing Inc.</strong> (Bismarck, ND)<br />
                Filed: 19 February 2009 · Granted: 1 March 2011<br />
                <span className="block text-xs font-semibold text-muted-foreground mt-2">Full text: <A href="https://patents.justia.com/patent/7898456">Justia</A> · <A href="https://patents.google.com/patent/US7898456B2">Google Patents</A></span>
              </div>

              <P>Reading the patent in full, the match between what it describes and what the AML Pro is sold as is uncomfortably close. The patent describes, verbatim, a device with:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li>A <em>"continuous wave microwave signal, for example a 2.4 GHz signal"</em> (the AML Pro operates at 2.45 GHz under FCC ID A47-AML).</li>
                <li>A <em>"symmetrical array of five directional antennas... a central transmit antenna and a pair of receive antennas at each side"</em> (the AML Pro's FAQ describes "four receiver antennas").</li>
                <li><em>"Each phase difference is detected by a phase detector"</em>, phase-comparison between paired receive antennas (matches the AML FAQ's "refracts the signal of the object back to the four receiver antennas... If antennas on both sides of the AML receive refracted signal, both red lights will turn on").</li>
                <li>Indicator LEDs (red and blue) lit when phase differences match a threshold.</li>
                <li><em>"A laser pointer has been added. Whenever the BLUE LED is lit, the laser pointer will be energized to project a beam of laser light from the front of the apparatus to a surface point in the object field below which an object, e.g., cable or pipe, is detected"</em>, directly matching the AML Pro's documented laser marker.</li>
                <li>An audio buzzer alternative or supplement to the visual indication.</li>
                <li>Handheld form factor with a rear handle.</li>
                <li>An operating procedure of slow walking, perpendicular alignment, and side-step verification (matching the AML Pro's User Manual operating instructions almost word for word).</li>
                <li>Application to <em>"underground objects in an object field, such as cable, pipeline, ordnance, concrete and bones... including objects made of PVC, plastic, metal and rebar"</em>, which is a verbatim subset of the AML Pro's "All Materials Locator" marketing.</li>
              </ul>

              <P>The frequency, the antenna geometry, the detection principle, the indicator stack, and the operating procedure described in the Cloutier / Oehme patent all line up with the AML Pro. The match is not a coincidence, a parallel invention, or an arm's-length licence. It is SSI's own patent: USPTO assignment records show US 7,898,456 was assigned to SubSurface Instruments, Inc. of Wisconsin on 18 April 2017, as the next subsection sets out.</P>

              <Figure
                src="/articles/aml-pro/patent-fig5.png"
                alt="Patent figure 5: the handheld case and handle of the locator"
                width={1280}
                height={1651}
                portrait
                caption="FIG. 5 of US 7,898,456: the flat case and rear-projecting handle, a boxy ancestor of the AML Pro's form factor. Compare the product photograph in Section 1. US patent drawings are public record."
              />

              <H3>What that patent does, and does not, establish</H3>
              <P>Now the important honest framing: <strong>the existence of a granted patent does not mean the device works at the depths SSI markets.</strong> The USPTO patent examination process tests for novelty and non-obviousness, for whether a claimed invention is described clearly enough and is different enough from prior art to deserve a patent. The examination process does <em>not</em> test whether the invention works as marketed. The Quadro Tracker was patented. The DKL LifeGuard was patented. Patenting and functional efficacy are independent.</P>

              <P>Specifically, the Cloutier / Oehme patent text does <strong>not</strong> claim:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li>That the device detects buried PVC at 20 feet depth.</li>
                <li>That the device works in clay, wet soil, snow, or standing water.</li>
                <li>That the device penetrates moist ground at any specific depth.</li>
                <li>That the device's detection performance has been validated under controlled blind protocol.</li>
              </ul>

              <P>Those are SSI's <em>marketing</em> claims, not the patent's technical disclosures. The patent describes the apparatus and its operating principle. SSI's marketing extrapolates from "this is what the device does" to "this is what it can detect, at this depth, in these conditions", and the physics examined in <A href="#s3">Section 3</A> bears on that extrapolation regardless of the patent's existence.</P>

              <P>Two operational details in the patent are worth flagging because they corroborate exactly the operator-dependent behaviour the AML's own FAQ admits to. The full side-by-side analysis of the patent + FAQ flicker, the physics that explains why it happens at exactly the rate the FAQ describes, and the operator-motion-dominates conclusion appears in <A href="#s14">Section 14</A>:</P>

              <PullQuote cite={<>— US 7,898,456 B2, Cloutier &amp; Oehme</>}>
                "With the microwave radiation used in the preferred embodiment, the measured phase difference can vary rapidly with slight movements of the apparatus. The output of each phase detector is a very sharp 'peak' condition, and any change in phase difference between associated receive antennas will move the phase detector output away from the 0.2 volt level, and the associated LED will go out."
              </PullQuote>

              <P>That is the patent's own description of why the indicator lights flicker on and off with small movements. It is also exactly what the AML's FAQ admits when it says <em>"Both lights will come on then go off approximately every 2 inches when the antennas are located inside of these null zones. A gentle flicker up and down or a vertical motion will allow the pipe to be accurately re-located."</em> The patent and the marketing literature are consistent, about the device, and about its motion-dependent indicator behaviour.</P>

              <H3>The SSI relationship, resolved by the assignment record</H3>
              <P>The USPTO assignment events recorded against US 7,898,456 (<A href="https://patents.google.com/patent/US7898456B2/en">legal events table</A>) tell the ownership story in three steps:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li><strong>11 May 2009</strong>: the inventors assign to <strong>Prairielands Energy Marketing, Inc., North Dakota</strong> (reel/frame 022664/0474, signatures dated 15 to 18 March 2009).</li>
                <li><strong>18 April 2017</strong>: Innovatum, Inc. assigns its interest to Prairielands (reel/frame 042040/0651), consolidating the family in one place.</li>
                <li><strong>18 April 2017, the same day</strong>: Prairielands assigns to <strong>SUBSURFACE INSTRUMENTS, INC., WISCONSIN</strong> (reel/frame 042040/0806, effective date 18 April 2017).</li>
              </ul>

              <P>So the timeline is this. The mechanism was patented by Cloutier and Oehme and owned for its first eight years by a gas-marketing company in Bismarck. SSI launched the AML brand in 2012 and sold the device for five years while someone else held the patent. Then, in a coordinated same-day pair of assignments in April 2017, the rights were gathered into Prairielands and passed to SSI. From 18 April 2017 until its expiry, the patent belonged to SubSurface Instruments.</P>

              <P>What commercial arrangement sat underneath the 2012 to 2017 period, a licence, a related-party understanding, or something else, is not stated in the assignment record; the recorded chain is the part that is public, and it is unambiguous about who has owned the patent since 2017.</P>

              <NoteBox>
                <strong className="text-foreground">A change of tone.</strong> The next subsection is about the inventors, and it is written in their favour. The criticism in this report is aimed at marketing copy, not at the two men named on the patent.
              </NoteBox>

              <H3>Who the inventors are, and the credit they are due</H3>
              <P>US 7,898,456 names two inventors: Paul A. Cloutier of Nassau Bay, Texas, and Delbert R. Oehme of Kingwood, Texas. Neither man is named anywhere in SSI's marketing, which is a curious omission, because the real inventors are considerably more distinguished than the anonymous "NASA engineers" the marketing invokes.</P>

              <P><strong>Dr. Paul A. Cloutier is Professor Emeritus of Physics and Astronomy at Rice University</strong> (<A href="https://profiles.rice.edu/faculty/paul-cloutier">Rice faculty page</A>). He served as a co-investigator on the magnetometer team of NASA's Mars Global Surveyor mission, the instrument that detected and characterised the magnetic field of Mars in 1997 (<A href="https://www.newswise.com/articles/mars-researcher-available-to-discuss-magnetic-field">Rice University news, September 1997</A>). And he has documented form in finding hidden metal objects with instruments of his own design. In 1976 he discovered the wreck of USS Hatteras, the Union warship sunk by CSS Alabama in 1863, roughly 20 miles off Galveston. The Texas Historical Commission's account is direct: <em>"Dr. Paul Cloutier, a Rice University physics professor, discovered the shipwreck in 1976"</em> (<A href="https://thc.texas.gov/blog/descent-darkness">THC, Descent into Darkness</A>; see also the <A href="https://www.tshaonline.org/handbook/entries/hatteras">TSHA Handbook of Texas</A>).</P>

              <P>The 2011 patent is not a one-off. It is the latest entry in a detection-instrument lineage Cloutier and Oehme built together over more than a quarter of a century, and the earlier entries are validated, commercial, working technology (<A href="https://patents.justia.com/inventor/paul-a-cloutier">full inventor record at Justia</A>). <A href="https://patents.google.com/patent/US4427943A/en">US 4,427,943</A> (granted 1984, with fellow Rice physicist Ronald F. Stebbings) describes vector-gradiometer location and tracking of magnetic objects. <A href="https://patents.google.com/patent/US6366191B1/en">US 6,366,191</A> and <A href="https://patents.google.com/patent/US6369679B1/en">US 6,369,679</A> (granted 2002) describe imparting a permanent magnetic signature to buried cables and pipes so they can be located and depth-measured passively. All were assigned to Innovatum, Inc., and the magnetisation technology is on the market to this day: Innovatum Ltd of the UK sells subsea cable-tracking systems and describes itself as <em>"the only company in the world to offer a cable magnetising service along with subsequent passive magnetic cable tracking"</em> (<A href="https://www.innovatum.co.uk/about/about-innovatum/">innovatum.co.uk</A>). Those inventions work because they are magnetics, the physical regime in which passive detection of buried objects is well behaved.</P>

              <P>In 2003 the pair filed something different: <A href="https://patents.google.com/patent/US7362260B2/en">US 7,362,260</A> (granted 2008, also Innovatum), the first of the continuous-wave microwave patents, followed by <A href="https://patents.google.com/patent/US7535407B2/en">US 7,535,407</A> (2009) and US 7,898,456 (2011) under Prairielands.</P>

              <P>None of this is criticism of the inventors, and this section should not be read as any. A patent claims a mechanism and its novelty. The patent text, as set out above, conspicuously does not claim 20 ft, clay, wet soil, snow or standing water. There is no public record of either inventor endorsing the depth and ground-condition claims SSI's marketing attaches to the device. The criticism in this report is aimed at marketing copy, and the corrections invitation at the foot of this page is extended to the inventors first of all.</P>

              <H3>The patent invoked by "Patented Technology" has been expired since April 2023</H3>
              <P>The public record adds a coda. USPTO maintenance events for US 7,898,456 show the 4th-year fee paid in August 2014 and the 8th-year fee paid in November 2018, both under large-entity status. Then, on 3 April 2023: <em>"PATENT EXPIRED FOR FAILURE TO PAY MAINTENANCE FEES"</em>. The patent's status today is <strong>Expired, Fee Related</strong>; had the fees been kept up it would have run to August 2029 (<A href="https://patents.google.com/patent/US7898456B2/en">Google Patents legal events, mirroring USPTO</A>). A note for readers checking the record: the "adjusted expiration 2029-08-22" shown on patent databases is the full term the patent could have reached with fees paid, not its actual fate. "Expired, Fee Related" means it died six years early, in April 2023, for non-payment. A lapsed patent can in principle be revived by petition where the non-payment was unintentional; no revival appears in the legal events as of the date of this report.</P>

              <P>Two things follow, and the assignment record sharpens both. First, the owner that let the patent lapse in 2023 was not some distant holding company. From 18 April 2017 the owner of record was <strong>SubSurface Instruments itself</strong>. SSI acquired the patent, paid the 8th-year fee in 2018, and then chose not to pay the 12th-year fee, letting its own flagship patent die in April 2023. That is the manufacturer's own commercial verdict on the value of its "Patented Technology", in the same family of revealed-preference evidence as the fourteen-year market test in <A href="#s5">Section 5</A>. Second, SSI's product page today still leads with "UHRF Advanced Digital Patented Technology". The patent that line points at has been expired, by SSI's own non-payment, for three years.</P>

              <H3>A patent that never grew into a family</H3>
              <P>Platform technologies leave a paper trail of growth. A company that believes it owns a breakthrough files continuations, improvements and foreign counterparts, and the patent record shows the concept being extended and re-applied across product generations. None of that happened here. US 7,898,456 stands on a single provisional application from February 2008, has no continuation chain, no later filings by either inventor (both records end in 2011), and no foreign counterparts: the patent family record lists exactly one country, the United States.</P>

              <P>The ideas that did grow in this space grew elsewhere. The patents citing US 7,898,456 over the following decade belong to other organisations doing orthodox work: an FBI thin-film detection patent (2016), Vayyar's electromagnetic-array imaging (2020), Toshiba inspection systems (2018), and, in 2025, two Nanjing University filings for microwave phase-difference pipe detection, exploring the concept academically while the original patent lay expired. The Nanjing filings are worth a pause. They reproduce the patent's architecture almost exactly, five Yagi antennas, a central transmitter, symmetric receive pairs, mounted on a drone, and they describe the mechanism throughout as phase difference measurement. Nowhere do they mention density. Even the engineers copying the design describe it the way the patent does, not the way the brochure does. That is the behaviour of a field moving on, not of a platform maturing. If the AML Pro were the breakthrough its marketing implies, the record would show a dense, defended, growing patent family. It shows a solitary patent, allowed to die, invoked in marketing long after.</P>

              <H3>Prairielands Energy Marketing, what the record shows</H3>
              <P>The assignee is as unexpected as everything else here. Prairielands Energy Marketing, Inc. was incorporated on 31 July 1989 in Bismarck, North Dakota, as a natural-gas marketing subsidiary of MDU Resources Group, the utility holding company (<A href="https://www.referenceforbusiness.com/history2/8/MDU-Resources-Group-Inc.html">MDU Resources corporate history</A>). Its entire patent portfolio on the public record consists of the two patents above: a search of USPTO records surfaces no other patent ever assigned to the company (<A href="https://patents.justia.com/search?q=%22Prairielands+Energy+Marketing%22">Justia assignee search</A>). Whatever role Prairielands played, it was not a company with a patent programme; on the record it is the holder of exactly one technology, this one. Why a gas-marketing company holds the patents on a buried-pipe detector is not stated anywhere in the public record reviewed for this report. There is an obvious candidate logic: gas utilities bury polyethylene service pipe, among the hardest utility classes to locate, and the AML's 2012 launch coverage named the gas industry as a target market. That is inference, and it is flagged as such. Its relationship to SubSurface Instruments is now a matter of record: the 18 April 2017 assignment set out above. Whether Prairielands remained an MDU subsidiary through its 2009 to 2017 custody of the patents, and why a gas-marketing company held a buried-pipe detector's patents for eight years while the device's manufacturer built the brand, were the questions the public record could not answer. The surviving co-inventor has since answered them directly. In correspondence for this report, Professor Cloutier set out the sequence first-hand: MDU Resources acquired Innovatum, Inc. outright in April 2000 and ran it through its Prairielands division, with Cloutier as President and Oehme as Chief Engineer. Subsurface Instruments was not an outside licensee but a company founded by two former Schonstedt magnetometer-sensor engineers, which Prairielands then acquired as a division of Innovatum to secure its sensor supply. MDU divested the whole group, Subsurface Instruments included, in 2008, retaining the two inventors only long enough to finish documenting the patentable work. <strong>"The patent you mention was one of the patents filed by MDU after we completed our work and left MDU,"</strong> Cloutier writes. That resolves the eight-year puzzle: a gas conglomerate held the patents because it had briefly owned the entire instrument business, inventors included, and filed this one on its way out. As the inventor testimony near the top of this report records, neither inventor had any further involvement in, or knowledge of, the performance claims later made for the device.</P>

              <H3>Summary of the patent finding</H3>
              <P>SSI markets the AML Pro as carrying "Patented Technology" without naming a patent. The patent behind that line, on the assignment record, is <A href="https://patents.justia.com/patent/7898456">US 7,898,456</A> (Cloutier &amp; Oehme, assigned to Prairielands Energy Marketing Inc.), which describes a handheld 2.4 GHz CW microwave + five-antenna + phase-detection + LED + laser + audio device for detecting buried PVC / metal / concrete objects, a description that matches the AML Pro closely on frequency, antenna count, indicator stack, and operating procedure. The patent describes the apparatus; it does not validate the depth-penetration claims SSI's marketing makes around it. USPTO assignment records show the patent was owned by Prairielands from 2009, assigned to SubSurface Instruments on 18 April 2017, and allowed by SSI to expire in April 2023 for non-payment of maintenance fees. What the record also shows: the inventors are real, named and distinguished, with a track record of validated magnetic detection instruments; the device was sold for its first five years under a patent its manufacturer did not own; and the marketing that invokes "Patented Technology" and anonymous "NASA engineers" has never, in fourteen years, named either man. One charitable reading deserves closing off. "Patented Technology" could be read as claiming only that the device uses technology somebody patented, with no claim of ownership. The record forecloses both halves of that reading: SSI has owned the patent outright since April 2017, and since April 2023 there has been no live patent to use. Expired technology is not patented technology, whoever owns it.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s9" num="9">The "lunar exploration" claim, what NASA actually flew</SectionHeading>

              <Tldr>No NASA lunar instrument ever flew at 2.45 GHz. The heritage claim has no basis in the record, although Section 8 suggests where the story may have started.</Tldr>

              <P>The "Originally designed by NASA engineers for use in lunar exploration" / "technology developed for lunar exploration" claim is the AML Pro's marketing lineage to a real space programme. Examining what NASA and ESA actually flew for subsurface radar sounding:</P>

              <EvidenceTable
                headers={["Mission / Instrument", "Year", "Frequency / Wavelength", "Depth purpose"]}
                rows={[
                  ["Apollo 17 ALSE", "1972", "5.266 MHz (HF1), 15.8 MHz (HF2), 158 MHz (VHF). λ = 2-60 m.", "Estimated penetration 1,300 m / 800 m / 160 m through dry lunar regolith"],
                  ["MARSIS (Mars Express)", "2003-present", "1.3-5.5 MHz, 1 MHz BW", "km-scale Mars subsurface"],
                  ["SHARAD (Mars Reconnaissance Orbiter)", "2006-present", "20 MHz carrier, 10 MHz BW", "First ~1 km of Mars crust, 15 m vertical resolution"],
                  ["LRS (Kaguya)", "2007", "5 MHz HF sounder", "Lunar maria stratigraphy"],
                ]}
              />

              <P>Sources: Apollo Lunar Sounder, <A href="https://en.wikipedia.org/wiki/ALSE">Wikipedia ALSE</A>; Porcello, L.J. et al., <em>"The Apollo Lunar Sounder Radar System"</em>, Proceedings of the IEEE, June 1974 (<A href="https://ieeexplore.ieee.org/document/1451447/">IEEE Xplore</A>); NASA NSSDCA experiment record <A href="https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1972-096A-04">1972-096A-04</A>. MARSIS, ESA Mars Express overview at <A href="https://sci.esa.int/mars-express/">sci.esa.int</A>; <A href="https://en.wikipedia.org/wiki/MARSIS">Wikipedia MARSIS</A>. SHARAD, <A href="https://en.wikipedia.org/wiki/SHARAD">Wikipedia SHARAD</A>; Seu, R. et al. (2007), JGR Planets, <A href="https://doi.org/10.1029/2006JE002745">DOI 10.1029/2006JE002745</A>.</P>

              <Smoking label="The lunar-exploration claim is technically impossible">
                <p className="text-foreground/85 leading-relaxed mb-2">Every NASA / ESA subsurface sounder ever flown to the Moon or Mars uses HF or low VHF, in the range <strong>1.3 MHz to 158 MHz</strong>. The reason is the same physics that limits the AML Pro: at higher frequencies, electromagnetic waves are absorbed in lossy media. The Apollo 17 instrument achieved its 1,300 m penetration of the dry lunar regolith using a <strong>60-metre dipole antenna</strong> on the Service Module, a 43 kg space-qualified instrument with the entire spacecraft's power budget at its disposal, operating at 5 MHz.</p>
                <p className="text-foreground/85 leading-relaxed">To accept the AML Pro's "lunar exploration technology" claim is to accept that a 2.5 lb handheld at 2.45 GHz, with FCC Part 15 power limits, can outperform, in wet Earth soil, what NASA's 43 kg space-qualified ALSE instrument achieved in <em>dry lunar regolith</em> using a 60 m antenna. <strong>The frequency is wrong by three orders of magnitude in the wrong direction.</strong> There is no NASA flight instrument that operated at 2.45 GHz for subsurface sounding. The claimed heritage does not exist.</p>
              </Smoking>

              <H3>Where the lunar story may have come from</H3>
              <P>The inventor research in <A href="#s8">Section 8</A> adds one further piece. The co-inventor of the device's closest-matching patents, Dr. Paul A. Cloutier, is a real space scientist: Professor Emeritus of Physics and Astronomy at Rice University and a co-investigator on the magnetometer team of NASA's Mars Global Surveyor mission. There is also a second, more concrete trail, sitting on the AML patent's own front page. Among its cited prior art are two patents by G. Dickey Arndt and colleagues, microwave engineers at NASA's Johnson Space Center, including <A href="https://patents.justia.com/patent/6501414">US 6,501,414, "Method for locating a concealed object"</A> (granted 2002), assigned to <em>"The United States of America as represented by the United States National Aeronautics and Space Administration"</em>. NASA engineers really did patent microwave concealed-object location, for ground use, and the AML's mechanism patent cites that work as prior art. So "technology developed by NASA engineers" reads like a garbled echo of real, documented prior art, compressed through a second distortion: "a mechanism patented by a NASA-mission space physicist, citing NASA-patented prior art" became "originally designed by NASA engineers for use in lunar exploration". But the compression changes every load-bearing word. Cloutier is university faculty, not a NASA engineer. His documented mission work is Mars, not the Moon. His mission instruments were magnetometers, and as the table above shows, no NASA or ESA lunar instrument has ever flown a 2.45 GHz subsurface sounder. The most charitable available origin for the lunar claim still leaves the claim false as written. And SSI's materials do not name Cloutier at all; they assert an anonymous NASA lineage that the record does not support, in place of a real and creditable inventor it could simply have credited.</P>

              <P><strong>There is now no need to rely on that charitable reading at all.</strong> The surviving inventor has stated plainly what the technology was first developed for, and it was not a space programme. In his account, recorded in the inventor testimony near the top of this report, the work began as a United States Defense Department anti-personnel mine detector, trialled by the US Army at Fort Belvoir. The origin of the device is a landmine detector, recounted by the man who built it. The marketing's "NASA engineers, lunar exploration" is not a distortion of a real space heritage. There was no space heritage to distort.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s10" num="10">Compared to real buried-pipe detection that works</SectionHeading>

              <Tldr>The methods that actually find buried pipe all state their physics and their limits. The AML Pro has none of their four mechanisms.</Tldr>

              <P>For comparison, here is the engineering of validated buried-pipe location methods. In every case the physical principle is explicit, the manufacturer states it, and the operating frequency is matched to the medium.</P>

              <EvidenceTable
                headers={["Method", "Physical principle", "Frequency", "Source"]}
                rows={[
                  [<><strong className="text-foreground">Active EM cable/pipe locator</strong><br /><span className="text-xs text-muted-foreground">e.g. Radiodetection RD8200</span></>, "Transmitter clamps onto, or radiates near, a metallic pipe / cable. The pipe itself becomes the antenna, carrying a re-radiating current. Receiver detects the near-field magnetic flux. Works only on conductors.", "16 Hz to 200 kHz (active 8/33/65/83/131/200 kHz)", <A href="https://www.radiodetection.com/en-us/products/precision-locator-range/rd8200-cable-and-pipe-locators">Radiodetection</A>],
                  [<><strong className="text-foreground">Sonde (in-pipe transmitter)</strong><br /><span className="text-xs text-muted-foreground">SSI's own PL-VF10R; many others</span></>, "Battery transmitter physically pushed inside the pipe radiates a tone. Locator picks up surface field. Works in pipes of any material because the source is internal.", "33 kHz typical, 512 Hz / 8 kHz / 65 kHz family", <A href="https://www.ssilocators.com/product/pl-vf10r/">SSI PL-VF10R</A>],
                  [<><strong className="text-foreground">Utility GPR</strong><br /><span className="text-xs text-muted-foreground">GSSI UtilityScan, MALA, IDS</span></>, "Short EM pulse transmitted into ground; time-gated reflection from dielectric contrast. Manufacturer publishes depth-vs-soil-dielectric assumption.", "200-1,500 MHz (350 MHz typical)", <A href="https://www.geophysical.com/antennas">GSSI</A>],
                  [<><strong className="text-foreground">Acoustic leak correlator</strong><br /><span className="text-xs text-muted-foreground">SSI LC-5000; Sewerin; Gutermann</span></>, "Pressurised pipe leak generates a sonic signature; two sensors correlate arrival times to locate.", "0.5-4 kHz audio", <A href="https://www.ssilocators.com/product/lc-5000/">SSI LC-5000</A>],
                ]}
              />

              <P>Each method has an explicit, named physical mechanism that any second-year engineering student can derive. Each manufacturer publishes the principle, the frequency, the operating envelope, and the limitations. None claims to "work in clay, wet soil, snow or standing water" without qualification, because no such universal claim is consistent with the physics.</P>

              <Figure
                src="/articles/aml-pro/gpr-09.jpg"
                alt="A utility ground-penetrating radar cart with its recording screen, on a UK street"
                width={1400}
                height={1050}
                caption="A real utility GPR on a survey line during a Sygma training course. The screen above the cart records every reflection into a radargram as the antenna moves, a durable data product the operator reads and any colleague can re-check."
              />

              <P>The AML Pro, by contrast, has <strong>none of these four mechanisms</strong>:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li>No transmitter coupling onto the pipe, so it is not active EM.</li>
                <li>No travel-time measurement of any kind (neither a transmitted pulse nor a swept frequency band), no scan trace, no B-scan display, so it is not GPR. The user sees only two LED indicators and hears a tone.</li>
                <li>No sonde, the device is held above ground.</li>
                <li>No acoustic sensor.</li>
              </ul>

              <P>It is a battery, a 2.45 GHz transmitter, four small receive antennas, and two LEDs. There is no documented physical mechanism by which such an architecture detects a buried PVC pipe at any useful depth, and the four mechanisms that <em>would</em> detect a buried pipe are absent.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s11" num="11">The peer-reviewed test that exists, Lee &amp; Yun (2025), taken apart bit by bit</SectionHeading>

              <Tldr>The only peer-reviewed test: one operator, dry weather every time, known pipe positions, on the authors' own testbed.</Tldr>

              <P>One peer-reviewed paper exists that tests the AML by name. It is the single strongest piece of evidence in the device's favour, so it deserves a careful read. I have read it end to end, twice.</P>

              <P>The short version: the paper does not stand up. The methodology, the framing, the citations and the publication context all weaken what the abstract appears to say. Everything below is built from the paper's own words.</P>

              <div className="border border-border rounded-lg bg-card px-5 py-4 my-5 text-sm text-foreground/80 leading-relaxed space-y-1">
                <p><strong className="text-foreground">Citation:</strong> Lee, S.-J. and Yun, H.-S. (2025), <em>"Performance Evaluation of AML Equipment for Determining the Depth and Location of Subsurface Facilities in South Korea"</em>, <strong className="text-foreground">Applied Sciences</strong> (MDPI), 15(11), 5794.</p>
                <p><strong className="text-foreground">DOI:</strong> <A href="https://doi.org/10.3390/app15115794">10.3390/app15115794</A> · <strong className="text-foreground">URL:</strong> <A href="https://www.mdpi.com/2076-3417/15/11/5794">mdpi.com/2076-3417/15/11/5794</A></p>
                <p><strong className="text-foreground">Affiliation:</strong> Geodesy Lab, Sungkyunkwan University, South Korea.</p>
                <p><strong className="text-foreground">Special Issue:</strong> "Ground Penetrating Radar (GPR): Theory, Methods and Applications".</p>
                <p><strong className="text-foreground">Timeline:</strong> Received 19 April 2025 · Revised 4 May 2025 · Accepted 19 May 2025 · Published 22 May 2025, total elapsed 33 days from submission to publication.</p>
              </div>

              <P>The headline finding is this: across 32 trials on concrete (RCP) and polyethylene (PE) pipes buried at 3 m, an AML operator marked positions within ±0.30 m of the truth, which is the South Korean legal tolerance for buried-utility surveys. The Discussion then says the AML "is a viable alternative to conventional GPR systems for utility detection in regulated environments". Read only the abstract and that sounds like vindication. It isn't, and here are the ten reasons why.</P>

              <H3>1 · One operator, dry weather, every time</H3>
              <P>From Section 2.4, verbatim:</P>
              <PullQuote cite={<>— Lee &amp; Yun (2025), Section 2.4, Establishment of the Performance Test Site</>}>
                "To ensure procedural consistency across the two-year testing period, all 32 AML measurements were conducted by the same operator under dry environmental conditions, with no rainfall occurring for at least three days prior to each trial. Pre-calibration of the AML device was performed before each measurement session, and no drift or recalibration adjustments were necessary throughout the experimental timeline."
              </PullQuote>
              <P>Three things hide inside that paragraph that the abstract does not show.</P>
              <P><strong>One operator, every time.</strong> The same person ran all 32 trials across two years. There was no second operator running the same site to check whether the readings depended on the person or on the device. The AML is operated by walking slowly and reading an LED (see <A href="#s14">Section 14</A>), that is the textbook setup in which any device sensitive to operator behaviour can produce confident-looking numbers.</P>
              <P><strong>Dry ground, every time.</strong> "No rainfall for at least three days prior to each trial". The single thing that is supposed to set the AML apart from GPR, its marketing copy claims it works in wet soil, clay, snow and standing water, is precisely what the paper did not test.</P>
              <P><strong>Pre-calibration, against what?</strong> The paper says the AML was pre-calibrated before each session, but never says what it was calibrated against. The only reference available at the site was the known pipe positions. If those were the calibration reference, the test was not blind.</P>

              <H3>2 · The authors admit the test was an ideal case</H3>
              <P>The Discussion section is unusually frank about the soil they picked:</P>
              <PullQuote cite={<>— Lee &amp; Yun (2025), Discussion</>}>
                "However, it is important to acknowledge that the field experiments in this study were conducted in decomposed granite soil, which is known to have favorable transmission characteristics. As such, the results represent an ideal-case scenario and may not fully generalize to more complex or adverse soil environments. In real-world scenarios, soils with higher clay content, water saturation, or heterogeneous backfill materials can significantly alter signal propagation, potentially reducing the system's accuracy and detection range."
              </PullQuote>
              <P>That is a striking admission inside a paper that is being used to sell the device into clay-rich UK soils. The authors say it plainly: their results do not transfer to clay-heavy or wet ground. Those are the exact two conditions the AML's marketing claims it overcomes. The paper's own caveat directly contradicts the manufacturer's marketing copy.</P>

              <H3>3 · The paper describes how the device works in two contradictory ways</H3>
              <P>In Section 2.3 the paper talks about the AML as if it were ultrasonic:</P>
              <PullQuote cite={<>— Lee &amp; Yun (2025), Section 2.3</>}>
                "One major advantage of ultrasonic-based detection systems like the AML is that they do not require direct physical contact with the target. Instead, they rely on wave propagation and reflection to detect and localize subsurface objects. Unlike traditional electromagnetic or Ground-Penetrating Radar (GPR) systems, ultrasonic-based methods are less sensitive to the electromagnetic properties of surrounding materials, allowing for greater adaptability across varying soil types and moisture conditions [30,31]."
              </PullQuote>
              <P>A few paragraphs later, in the same section, it says the opposite:</P>
              <PullQuote cite={<>— Lee &amp; Yun (2025), Section 2.3</>}>
                "While the AML system operates using ultra-high radio frequency (UHRF) sensing and not acoustic wave propagation, insights from previous ultrasonic detection studies are useful for understanding the broader challenges and principles of non-contact subsurface sensing."
              </PullQuote>
              <P>It cannot be both. The first quote describes an ultrasonic device and uses that to argue the AML is not bothered by soil moisture. The second quote then says it is not an ultrasonic device. A reader of the paper cannot tell which mechanism the authors think they were testing. And the references [30] and [31] that prop up the moisture-tolerance argument are ultrasonic-detection papers, irrelevant to a device the paper itself says is not ultrasonic. There is also a practical tell familiar from the non-destructive-testing bench: ultrasonic inspection requires the probe to be coupled to the surface, usually with a gel, precisely because ultrasound does not cross air gaps. A handheld device held above the ground could not usefully be ultrasonic even if the references said so.</P>

              <H3>4 · The "third-party technical reports" are not third-party</H3>
              <P>Here is how the paper itself describes the sources it leans on for the device's specifications:</P>
              <PullQuote cite={<>— Lee &amp; Yun (2025), Section 2.3</>}>
                "These capabilities and application ranges of the AML device are consistently documented in the manufacturer's specifications and product manuals, as well as in third-party technical reports that assess its performance under various field conditions [27,28,29]."
              </PullQuote>
              <P>Look up those three references in the back of the paper and this is what they are. <strong>[27]</strong> is SubSurface Instruments' own AML product manual (the paper links to a copy hosted at instecorp.com, accessed 17 April 2025). <strong>[28]</strong> is an Instrument Technology Corporation brochure hosted on the same distributor's website. <strong>[29]</strong> is a US retailer's product page, <A href="https://www.pvcpipelocators.com/finding-pvc-pipes/">pvcpipelocators.com</A>, based in Kingwood, Texas, accessed 17 April 2025 (this is a different site from the UK reseller pvcpipelocator.co.uk quoted in <A href="#s2">Section 2</A>; the paper does not cite the UK site). None of the three is a third-party technical report. They are the manufacturer's own manual and two pieces of sales-channel marketing material. The paper describes them as "third-party technical reports that assess its performance", which is not what they are.</P>

              <H3>5 · The GPR comparison uses radar's known worst case</H3>
              <P>Section 2.2 runs a head-to-head with GPR. The paper describes it like this:</P>
              <PullQuote cite={<>— Lee &amp; Yun (2025), Section 2.2</>}>
                "As shown in the left panel of Figure 2, a pipeline buried at a depth of 2.0 m produced a distinct hyperbolic reflection on the radargram, allowing for accurate detection… In contrast, the right panel of Figure 2 illustrates a GPR scan of the same site where a polyethylene (PE) pipeline buried at a depth of 3.0 m could not be clearly identified."
              </PullQuote>
              <P>This is not a fair comparison. A polyethylene pipe at 3 m on a single GPR pass is the known worst case for radar. Plastic gives a weak reflection in dry granite soil, and at that depth the signal is often lost in noise even for a skilled GPR operator on a properly chosen frequency. That is exactly why <A href="#s15">PAS 128</A> doesn't ask GPR to do everything on its own: it pairs GPR with electromagnetic location for metallic services and falls back to trial holes when the geophysics is inconclusive. The paper takes the hardest single shot for GPR and uses the AML's success at the same depth to claim the AML is better, and it does this in a Special Issue called "Ground Penetrating Radar: Theory, Methods and Applications". A fair test would have run several GPR passes at depth-appropriate antennae. The paper does not even say which GPR system or antenna was used.</P>

              <H3>6 · The "GPR averages only 1.5 m" claim has no method behind it</H3>
              <P>The abstract says "most GPR systems tested at the official performance evaluation site at Sungkyunkwan University demonstrated limited effectiveness, with an average detection range of only 1.5 m". That single sentence does the heavy lifting of the comparison: AML to 3 m, GPR to 1.5 m. But the paper never says how many GPR systems were tested, which ones, what counted as "detection range", what frequencies were used, what the soil and weather were, or whether the same dry-only rule applied. The figure is presented as a finding; the data and method behind it are not in the paper at all.</P>

              <H3>7 · One test site, run by the authors' own lab</H3>
              <P>The test site has been operated by Sungkyunkwan University's Geospatial Technology Center since 2010. That is the same institution as the authors. All 32 trials were done at this one site, with a known 30 cm compacted decomposed-granite-soil backfill and a known catalogue of buried pipes whose positions were fixed by total-station survey before the AML was ever used. This is not a field trial. It is repeatability testing on known targets, at one facility, run by the authors' own lab.</P>

              <H3>8 · The test proves the operator is consistent, not that the device finds things</H3>
              <P>The data show one thing: on a known testbed in dry granite soil, an experienced operator using the AML can mark within ±0.30 m of the right answer 32 times in two years. That is a statement about how repeatable the operator-and-device combination is when the answer is already known. It is not a statement that the AML can find an unknown pipe at an unknown depth in unknown ground. The marketing copy treats those as the same thing. The paper does not separate them either.</P>

              <H3>9 · A 33-day review in an MDPI Special Issue on GPR</H3>
              <P>Submitted on 19 April 2025, revised on 4 May, accepted on 19 May, published on 22 May, 33 days from submission to print. The journal is MDPI <em>Applied Sciences</em>, an open-access multidisciplinary title funded by article processing charges. The paper sits inside a Special Issue called "Ground Penetrating Radar (GPR): Theory, Methods and Applications", an odd home for a paper whose argument is that the AML, which the same paper says is "not GPR", outperforms GPR. None of this on its own is disqualifying. Taken together it is a reason not to lean heavily on a single paper as independent peer-reviewed validation. The article currently shows 1,889 views and zero citations, the GPR and surveying communities have not engaged with it yet.</P>

              <H3>10 · The conflicts declaration is one line, and we don't know where the AML came from</H3>
              <PullQuote cite={<>— Lee &amp; Yun (2025), Conflicts of Interest</>}>
                "The authors declare no conflicts of interest."
              </PullQuote>
              <P>That is the standard MDPI line. The paper does not say where the AML came from for the test, whether the manufacturer or a distributor supplied or loaned it, whether the manufacturer provided any training or technical support, or whether there is any commercial relationship between the test lab, the South Korean distributor (not named), and SubSurface Instruments. None of those things would automatically be a conflict. But the paper gives the reader no way to know either way.</P>

              <H3>What the paper actually shows</H3>
              <P>Strip out the marketing framing and the paper says this: in dry granite soil, on one testbed run by the authors' own lab, one experienced operator using a pre-calibrated AML marked the position of known concrete and PE pipes at 3 m depth to within ±0.30 m, 32 times in two years. That is what the data show. The paper's conclusion, that the AML "is a viable alternative to conventional GPR systems for utility detection in regulated environments", needs a lot more than that. It needs different soil types. It needs wet conditions. It needs a second operator. It needs a blind protocol. It needs an honest GPR comparison. The paper did none of those, and on soil and rainfall it explicitly ruled them out.</P>

              <P>Outside this one paper, I found no hits for "AML Pro" or "All Materials Locator" in IEEE Xplore, Sandia National Laboratories, NIST, NIJ, Wiley Online Library, or ScienceDirect. The entire peer-reviewed evidence base for the device is one paper, one Special Issue, one journal, one testbed, with the problems above.</P>

              <NoteBox>
                <strong className="text-foreground">An honest acknowledgement:</strong> One peer-reviewed paper, however thin, is not nothing. I have read it end to end, quoted it in its own words, and tried to argue the AML's case as hard as the case against. A reader who works through the paper itself should land in roughly the same place, or be able to tell me where the points above are wrong.
              </NoteBox>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s12" num="12">Why disproving 20 ft is not the whole argument</SectionHeading>

              <Tldr>Concede the 20 ft claim entirely and the fallback still fails: wet clay closes off half a metre, and no blind test exists at any depth.</Tldr>

              <P>A fair-minded defender of the AML Pro can concede everything in Sections 3 and 4 and still hold a fallback position. The 20 ft figure is marketing exaggeration, the argument goes, but the device is still useful at half a metre or a metre, the depths where most utility strikes actually happen. This section deals with that position squarely, because it is the most reasonable-sounding form of the claim, and because nothing in this report should rest on attacking only the weakest version of the case.</P>

              <NoteBox>
                <strong className="text-foreground">A plain-English way to hold this section.</strong> If this were a car advert, the 20 ft claim is the brochure saying the car does 600 mph. Section 3 showed the engine physically cannot do it. This section answers the salesman who then says, fine, but it still does a useful 60. The answer comes in two parts: in the conditions printed on the brochure, wet clay, the engine cannot even deliver the 60. And in the easier conditions where 60 might be possible, nobody has ever timed the car with a stopwatch the salesman did not hold himself.
              </NoteBox>

              <H3>The physics confines the fallback before the evidence is consulted</H3>
              <P>The attenuation physics in <A href="#s3">Section 3</A> does not stop applying at shallow depth, it scales with it. The independent measured record is worth restating. The US National Bureau of Standards measured skin depths in laboratory-compacted clay at approximately 83% saturation of <strong>3 to 6 cm in the 2.0 to 3.0 GHz band</strong> (NBSIR 74-381, Ellerbruch, 1974, <A href="https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir74-381.pdf">full PDF</A>). At those values a pipe at 0.5 m in wet clay sits 8 to 17 skin depths down, a two-way path of 17 to 33 skin depths, which is roughly 145 to 290 dB of absorption loss before spreading and reflection losses are counted. The legal-maximum link budget from Section 3 is about 154 dB. In wet clay, the AML Pro's own marketed conditions, the half-metre fallback is therefore already at or beyond the edge of physical possibility, and one metre is decisively past it. The same NBS dataset shows the problem is not rescued by retreating in frequency: even at 0.6 to 1.7 GHz, saturated clay passed only 5 to 20 cm. Peer-reviewed remote-sensing work puts the practical penetration range for moist soils across the microwave bands at <strong>0 to 10 cm</strong> (Rao, Chandra and Narasimha Rao, 1988, <A href="https://doi.org/10.1007/BF03014300">DOI 10.1007/BF03014300</A>).</P>

              <P>What survives of the fallback is therefore narrow: shallow targets, in dry, sandy, favourable ground, the one regime in which this report's own penetration table (Section 3) allows tens of centimetres. That is not the product the marketing describes. The marketing names clay, wet soil, snow and standing water.</P>

              <P>For a UK reader the point lands harder still. Clay and loam ground is widespread across England and Wales, mapped nationally by <A href="https://www.landis.org.uk/soilscapes/">Cranfield's Soilscapes</A> and the <A href="https://www.ukso.org/">BGS UK Soil Observatory</A>, and a utility job does not get to choose its soil. The hostile case in the table above is not the exception on a UK site; very often it is simply the ground.</P>

              <P>Taken together: even if the headline 20 ft claim is put entirely to one side, the combination of 2.45 GHz operation, moist and clay-rich soils, a small aperture swept in air above the surface, and modest battery power leaves no convincing physical basis for treating the AML Pro as a reliable buried-utility locator at any practically meaningful depth.</P>

              <H3>Once the flagship claim is gone, the burden of proof changes hands</H3>
              <P>Suppose the defender narrows further still, to shallow targets in dry ground. At that point the physics objection softens, and the claim becomes the kind of thing that could in principle be true.</P>

              <P>It is also the point at which the evidential record has to carry all the weight, because a device that responds only sometimes, in some ground, at some depths, is exactly the kind of device whose apparent successes need blind testing to separate from operator inference. The record reviewed in this report contains no such testing at any depth. The single peer-reviewed paper (<A href="#s11">Section 11</A>) is unblinded, single-operator, dry-weather, on the authors' own testbed, and its authors state in terms that the results may not generalise to clay-rich or saturated conditions. The FAQ behaviour examined in <A href="#s14">Section 14</A> makes the need for blind testing sharper, not weaker: an indicator that flips with half-wavelength movements of the operator's hand is precisely the architecture (<A href="#s13">Section 13</A>) in which unblinded successes are uninformative.</P>

              <P>Fourteen years of availability have produced no blinded demonstration that the AML Pro locates unknown targets above chance in any soil at any depth, shallow included. A narrowed claim is not a validated claim. It is a smaller claim with the same amount of evidence behind it, which is none.</P>

              <Figure
                src="/articles/aml-pro/gpr-01.jpg"
                alt="Sygma delegates running ground-penetrating radar survey lines in open coastal ground"
                width={1400}
                height={1050}
                caption="Survey lines in open ground on a Sygma GPR course. Real detection work is methodical: gridded passes, defined methods, results a second surveyor can verify. That is the standard any locating instrument has to meet."
              />

              <H3>What would count as decisive evidence</H3>
              <P>This report's standard is not unfalsifiable scepticism. The claim is testable, the test is cheap relative to the price of the device, and a fair protocol fits in a paragraph: an independently designed and pre-registered trial, on ground the operators have no prior knowledge of, with concealed and surveyed target layouts, negative-control runs over ground containing no target at all so the false-positive rate is measured, the people who bury the targets kept entirely away from the people who operate the device, multiple operators of the manufacturer's own choosing and training, soils spanning dry sand to saturated clay, realistic utility targets including PVC at the depths the marketing names, and scoring against both chance and the standard EML plus GPR toolkit operated to PAS 128 by a competent surveyor. Sandia ran exactly this class of protocol on the DKL LifeGuard in 1998. Nothing prevents SSI, a distributor, or an industry body commissioning the same for the AML Pro (the cost is estimated at £10k to £30k in <A href="#s16">Section 16</A>). A clear pass under that protocol would require this report to be rewritten, and I would rewrite it. Nothing of the kind exists in the public record.</P>

              <Smoking label="The reversed burden">
                <p className="text-foreground/85 leading-relaxed">It is not necessary for this report to prove that the AML Pro never produces an indication under any circumstance, and it does not claim to. A serious locating instrument marketed for clay, wet soil, snow, standing water and multiple buried materials should be supported by a clearly stated physical mechanism and strong independent blind trials. On the public record reviewed here, that standard has not been met at 20 ft, at one metre, or at any depth in between. The scepticism in this report is not about one inflated number. It is about the absence of the evidence that would justify trusting the device at any number.</p>
              </Smoking>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s13" num="13">The architectural family, Quadro Tracker, DKL LifeGuard, ADE 651</SectionHeading>

              <Tldr>Real electronics inside, but the operating loop is the dowsing-rod template: slow scan, twitchy binary indicator, training course required.</Tldr>

              <P>A handheld instrument that requires the operator to walk slowly, pivot freely from a handle, interpret an LED indication as a positive detection, and attend a multi-day training course to "fully understand the AML's capabilities, limitations, and to learn and practice various operating techniques" is, in psychology terms, the textbook architecture for ideomotor-driven false positives. The next paragraphs walk through what that means, and then compare the AML Pro's architecture against four historical devices in the same handheld-detection family.</P>

              <GoodBox label="A material distinction worth flagging up front">
                <p className="text-foreground/85 leading-relaxed">The AML Pro differs from the historical devices compared below in one important respect: it contains a real, FCC-certified 2.45 GHz transmitter. It is not a hollow plastic box. There are real electronics, a real GPS chip, a real LCD, and real lithium-ion batteries inside it. To that extent it sits one step removed from the empty-case category. <strong>The comparison below is on architectural template, slow operator scan, handheld free pivot, LED indicator, training course required, not on the question of whether the device's internals are real or absent. SSI is not being compared to the convicted-fraud cases on the criminal-vehicle front; only on the operating-architecture front.</strong></p>
              </GoodBox>

              <P>We do not have to guess what those internals are, because the patent discloses them, in words and in drawings. The complete electronics, per the patent text and figures: two Analog Devices AD8302 phase-detector chips, LP365A comparators, an LT1078 op-amp as a zero-crossing detector, 4001A logic gates, 2N3906 transistors switching the LEDs and the laser pointer, four "C" cell batteries behind a 5-volt converter, and five Yagi antennas <em>"embedded, for convenience, in plastic"</em>, balanced <em>"by using stainless steel screws between the antennas"</em>. The unit in the patent is about 16 inches wide, 6 inches long and 1.25 inches thick. The patent also states the intended targets in its own words: <em>"cable, pipeline, ordnance, concrete and bones, for example"</em>, and says it <em>"will even locate any of these objects buried under concrete or blacktop"</em>. Bones are worth pausing on: claimed detection of buried remains is precisely the territory in which the DKL LifeGuard failed Sandia's blind test.</P>

              <Figure
                src="/articles/aml-pro/patent-fig7.png"
                alt="Patent figure 7: interior of the locator showing five plastic-embedded antennas and hand-wired boards"
                width={1280}
                height={1651}
                portrait
                caption="The inside of the device, published by its own patent: FIG. 7 of US 7,898,456 shows the five plastic-embedded antennas and hand-wired boards. US patent drawings are public record."
              />

              <H3>The ideomotor effect</H3>
              <P>The modern foundational paper is Wegner, D.M. and Wheatley, T.P. (1999), <em>"Apparent mental causation: Sources of the experience of will"</em>, American Psychologist 54(7): 480-492 (<A href="https://pubmed.ncbi.nlm.nih.gov/10424155/">PubMed: 10424155</A>). Wegner and Wheatley set out the conditions, <em>priority, consistency, exclusivity</em>, under which a person experiences an action as willed when, in fact, unconscious processes are driving it. Free-swinging handheld devices used slowly with no quantitative feedback satisfy all three conditions.</P>

              <P>The empirical literature on free-swinging detection rods is unambiguous. The Munich GWUP (German Skeptics Society) study, Wagner, Betz, König (1989), <em>Schlussbericht der Scheunenversuche zur Untersuchung des Phänomens des Wünschelrutengehens</em>, tested over 500 dowsers in more than 10,000 controlled trials in 1987-88. After Jim Enright's reanalysis (<em>Skeptical Inquirer</em>, January 1999, <A href="https://skepticalinquirer.org/1999/01/testing-dowsing-the-failure-of-the-munich-experiments/">link</A>), the residual "successful" subset was shown to be statistically consistent with chance.</P>

              <H3>The same architecture, commercially: how each one ended</H3>
              <EvidenceTable
                headers={["Device", "Marketed as", "Architecture", "What happened"]}
                rows={[
                  [<><strong className="text-foreground">Quadro Tracker QRS 250G</strong><br />(1995-96)</>, "\"Positive Molecular Locator\" for drugs / weapons / explosives / golf balls", "Plastic box with antenna, slow operator scan, LED indicator. \"Molecular frequency chips\" inside.", <>Sandia took one apart: no electronics inside, antenna not connected, "chips" contained epoxied scrambled dead ants. FBI seizure 19 January 1996; federal injunction April 1996 under 18 U.S.C. §§ 1341 + 1343 (mail and wire fraud). <A href="https://skepdic.com/quadro.html">Skeptic's Dictionary</A></>],
                  [<><strong className="text-foreground">DKL LifeGuard Model 2</strong><br />(1998)</>, "\"Dielectrokinetic\" human-presence detector working through any material", "Handheld free-pivot device, slow operator scan, LED indicator.", <>Sandia double-blind 1998 (SAND98-2779): <em>"the device performs no better than random chance."</em> NIJ physical examination report (NCJ 206120) concluded the LifeGuard is "not based upon the principle of dielectrophoresis nor on any other accepted scientific principles." <A href="https://newsreleases.sandia.gov/human-presence-detector-fails-controlled-tests-conducted-by-sandia-national-laboratories/">Sandia release</A></>],
                  [<><strong className="text-foreground">ADE 651</strong><br />(2008-2010)</>, "Bomb detector, sold to Iraqi security and elsewhere at $5k to $40k+ per unit", "Plastic handle with a swivel antenna; \"substance detection cards\"; no power source.", <>Cambridge/Newsnight investigation 2010: empty. James McCormick convicted 2 May 2013 at the Old Bailey on three counts each under sections 6 and 7 Fraud Act 2006. Sentenced to <strong>10 years' imprisonment</strong>. The device killed people who relied on it at checkpoints. <A href="https://www.cnn.com/2013/05/02/world/europe/uk-fake-bomb-detector">CNN</A> · <A href="https://en.wikipedia.org/wiki/ADE_651">Wikipedia ADE 651</A></>],
                  [<><strong className="text-foreground">GT200</strong><br />(2008-2010)</>, "\"Programmable detection card\" for explosives, drugs, ivory, currency, etc.", "Same architecture as ADE 651; sold globally including UK.", <>Gary Bolton convicted 26 July 2013 on two counts of fraud, <strong>7 years' imprisonment</strong>. UK director ban. £1.82 unit cost vs £20,000 sale price. <A href="https://en.wikipedia.org/wiki/GT200">Wikipedia GT200</A></>],
                  [<strong className="text-foreground">AML Pro</strong>, "\"All Materials Locator\" for buried pipe, cable, void", "Handheld pivoting on a handle, slow operator W-pattern scan, LED indicator, audio tone, laser pointer, GPS logging. Factory training \"highly recommended.\"", "14 years on market, no controlled blind test ever published, no Sandia or NIJ examination, no regulatory action, but also no peer-reviewed scientific validation of the claimed mechanism."],
                ]}
              />

              <P>As noted in the disclaimer above the comparison, the test of whether a device works is not whether it has electronics inside; it is whether those electronics can plausibly produce the claimed effect under controlled blind conditions. Sections 3 to 8 of this report show, on the physics, that the answer for the 2.45 GHz + 20 ft + wet ground case is no.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s14" num="14">The FAQ self-incrimination, what SSI's own manual admits</SectionHeading>

              <Tldr>SSI's own FAQ describes indicators that flick on and off with every two inches of hand movement. The patent explains exactly why.</Tldr>

              <P>The AML's published FAQ contains two passages that, in their own words, describe behaviour incompatible with a working radar. Both are quoted verbatim from <A href="https://www.ssilocators.com/aml_faq/">ssilocators.com/aml_faq/</A>:</P>

              <Smoking label="The confession in the manual">
                <p className="text-foreground/85 leading-relaxed italic mb-2"><strong className="not-italic text-foreground">Q. When on the edge of a pipe, why do I lose signal just by raising or lowering the AML by an inch or two?</strong><br />Loss of signal may occur when directly above an edge of a pipe due to the refracted Radio signal being read by the antennas. There are areas of the radio frequency that the antennas miss, creating null zones as the unit is raised or lowered. Both lights will come on then go off approximately every 2 inches when the antennas are located inside of these null zones. A gentle flicker up and down or a vertical motion will allow the pipe to be accurately re-located."</p>
                <span className="block not-italic text-xs font-semibold text-muted-foreground">— SSI AML FAQ</span>
              </Smoking>

              <P><strong>Plain English translation:</strong> when the device finds a target, the indicators turn on and off every 2 inches as the operator moves the device vertically. The operator is instructed to "flicker" the device up and down until the target is "re-located". This is a description of a device whose detection output is not stable. A working radar reports a target with a stable indication, not one that turns on and off every 5 cm of vertical movement. The instruction to "flicker" the unit is the instruction to introduce operator-driven motion artefact.</P>

              <Figure
                src="/articles/aml-pro/digital-display.png"
                alt="The AML Pro digital display and indicator stack"
                width={900}
                height={445}
                caption="The AML Pro's display and target indicators, the entire output of the instrument: lights, a tone and a sensitivity number. No measurement is recorded; the GPS log stores where the operator marked, not what the device measured. Image courtesy of ssilocators.com."
              />

              <PullQuote cite={<>— SSI AML FAQ</>}>
                <strong>Q. Why do I get a reading in spots where I know there are no pipes or cables?</strong><br />
                The AML is a highly sensitive unit when it's set to the higher level of sensitivity. It may detect very small changes of density. Once you find the edge of your targeted object, use the lowest level possible that will still locate that objects edge. This will reduce the possibility of getting unwanted, inaccurate locates."
              </PullQuote>

              <P><strong>Plain English translation:</strong> the device produces detections in places where the operator knows there is no pipe or cable. The manufacturer's recommended remediation is to turn the sensitivity down. The phenomenon, false positives at higher sensitivity, fewer detections at lower sensitivity, is consistent with a device whose primary output is dominated by noise or operator influence rather than by signal from a real target. A working detector reports the target above the noise; turning sensitivity up should improve detection of marginal targets, not generate spurious ones.</P>

              <P>The user manual repeats the same essential framing. The operator is instructed to hold the handle parallel to the ground at waist level, <strong>18 inches in front of the body</strong>, with the blade face at a <strong>10° outward angle "to eliminate interference with the operator's feet"</strong>. Fingers must rest on the handle knurls <em>"or you will produce false readings."</em> The unit must be swept in a <strong>back-and-forth "W" motion</strong> at walking pace.</P>

              <Figure
                src="/articles/aml-pro/w-movement.png"
                alt="SSI's illustration of the prescribed W-pattern scanning motion for the AML Pro"
                width={900}
                height={445}
                caption={`SSI's own illustration of the prescribed "W" scanning motion. The detection procedure is a choreography of the operator's body and hands. Image courtesy of ssilocators.com.`}
              />

              <P>This is engineering vocabulary applied to a dowsing-rod procedural envelope. Slow walk, level hold, prescribed body distance, prescribed hand position, prescribed sweep pattern. None of these constraints would be necessary for a working radar that measures travel time; all of them are necessary if the device's "detections" are emerging from unconscious operator micro-movements amplified by a sensitive LED-trigger threshold.</P>

              <H3>The flicker, what the patent and the FAQ jointly describe</H3>
              <P>The behaviour the FAQ describes, both indicator LEDs coming on then going off every two inches as the unit is raised or lowered, with the recommended fix of "a gentle flicker up and down", is not just a customer-facing oddity. The Cloutier &amp; Oehme patent that most closely matches the AML Pro's described mechanism (examined in <A href="#s8">Section 8</A>) describes the same behaviour in engineering language, in the patent's own discussion of how the device works. The two documents independently corroborate each other.</P>

              <P>The patent (US 7,898,456 B2), describing the operating physics:</P>
              <PullQuote cite={<>— <A href="https://patents.justia.com/patent/7898456">US 7,898,456 B2</A>, Cloutier &amp; Oehme</>}>
                "With the microwave radiation used in the preferred embodiment, the measured phase difference can vary rapidly with slight movements of the apparatus. The output of each phase detector is a very sharp 'peak' condition, and any change in phase difference between associated receive antennas will move the phase detector output away from the 0.2 volt level, and the associated LED will go out."
              </PullQuote>

              <P>The FAQ, describing the same effect from the user's side:</P>
              <PullQuote cite={<>— <A href="https://www.ssilocators.com/aml_faq/">ssilocators.com/aml_faq</A></>}>
                "There are areas of the radio frequency that the antennas miss, creating null zones as the unit is raised or lowered. <strong>Both lights will come on then go off approximately every 2 inches when the antennas are located inside of these null zones.</strong> <strong>A gentle flicker up and down or a vertical motion will allow the pipe to be accurately re-located.</strong>"
              </PullQuote>

              <P>The patent is telling us, in its inventors' own words, that the indicator LEDs flip on and off when the device is moved slightly. The FAQ is telling the customer the same thing from the user's chair, in different language. Both are describing the same physical effect: at this frequency, with this antenna geometry, small movements of the device produce large changes in the phase comparator output, and the LED state flips with them.</P>

              <H3>The physics, why the flicker happens at exactly the rate the FAQ describes</H3>
              <P>The AML Pro operates at 2.45 GHz. At that frequency, the wavelength of the radio wave in air is:</P>
              <Equation>λ = c / f = (3 × 10<sup>8</sup> m/s) / (2.45 × 10<sup>9</sup> Hz) ≈ 0.1224 m ≈ <strong>12.24 cm ≈ 4.82 inches</strong></Equation>

              <P>Half a wavelength is therefore about <strong>2.4 inches</strong>. The FAQ admits that the LEDs cycle on and off "approximately every 2 inches" of vertical movement. <strong>That is the half-wavelength of a 2.45 GHz radio wave in air, to within the FAQ's stated precision.</strong> This isn't a coincidence: a phase-comparison detector at microwave frequencies will, by the basic physics of phase relationships, flip its comparator output whenever the device moves enough to shift the relative phase between the paired receive antennas by 180°. At 2.45 GHz, that distance is about 2.4 inches. The FAQ's "every 2 inches" and the patent's "any change in phase difference... will move the phase detector output" are the same statement, written for different readers.</P>

              <H3>Why this is diagnostic, how real GPR actually works, and how this is different</H3>
              <P>Before going further it is worth being precise about what GPR (Ground-Penetrating Radar) is and isn't in the utility-detection industry, because the AML Pro is repeatedly framed against GPR (including by SSI's own marketing, "Unlike the deficiencies of GPR"). <strong>The AML Pro is not GPR in the conventional meaning of the term.</strong> GPR, in the utility-survey trade, means an instrument that <em>measures round-trip travel time and records the reflections into a position-stamped trace</em> as the antenna is pushed along the ground, instruments like GSSI UtilityScan, MALA Easy Locator, IDS C-Thrue, Leica DSX. Whether a particular model does that with a short transmitted pulse (most utility units) or by sweeping a band of frequencies, the data product is the same: a radargram built from measured travel times. The AML Pro does none of that: it sits on one fixed 2.45 GHz frequency, measures no travel time, and compares the phase between paired receive antennas, with binary LED indicators as its only output. The two architectures share the word "radar" only in the broadest sense. The trade meaning of "GPR" excludes this design.</P>

              <P>The reason that matters here is that working GPR has a very specific way of revealing a buried pipe, and it is nothing like what the AML Pro does.</P>

              <P>When a GPR antenna is pushed in a straight line over a buried pipe lying across the survey direction, the instrument records every reflected return into a B-scan (a "radargram"), a two-dimensional image with horizontal axis = position along the survey line and vertical axis = round-trip time of flight (which the operator converts to depth using the assumed permittivity of the ground). A buried point target in cross-section appears in the B-scan as a characteristic <strong>hyperbolic reflection</strong>: as the antenna approaches the pipe, the slant range to the pipe shortens; directly above the pipe, the slant range reaches its minimum (which is the depth); as the antenna passes the pipe, the slant range lengthens again. The locus of these returns in time-of-flight versus position is a hyperbola, the apex of which marks the position and depth of the pipe. The operator, or processing software, identifies the hyperbola in the recorded radargram and marks the pipe's position from the apex. <strong>GPR detection is pattern recognition in a recorded scan trace</strong>, the radargram is durable evidence that another operator looking at the same scan can independently verify. There is no LED that "lights up over the target". The display is a 2D image; the operator reads the image.</P>

              <P>The AML Pro, by contrast, produces no scan trace, no radargram, no recorded data of any kind. Its output is two LEDs and an audio tone. The Cloutier patent and the AML FAQ jointly describe the LED state as a binary flicker that flips on and off with sub-half-wavelength vertical movements of the device, that is, with small movements of the operator's own hand at the wavelength scale of the radio signal. The user is then instructed to <em>"gently flicker up and down or in a vertical motion"</em> until the LEDs return to the lit state. That is an operating procedure for finding a hand position where the comparator output happens to be in the narrow "match" window, which will happen periodically as the operator's hand passes through every half-wavelength of vertical travel, whether or not a buried target is present beneath the operator. <strong>The primary input to the readout is the operator's own hand position, at the wavelength scale of the radio signal. It is not the location of a buried target.</strong></P>

              <SvgFigure caption="What each instrument hands the surveyor. With GPR, professionals can disagree about how to read a shared recording. With the AML Pro there is no recording to disagree about.">
                <svg viewBox="0 0 880 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side comparison of a GPR radargram and the AML Pro's two LED output" className="w-full h-auto" style={{ background: "#ffffff" }}>
                  <text x="32" y="40" fontFamily="Montserrat,Arial,sans-serif" fontSize="20" fontWeight="800" fill="#0b1626">The data product, side by side</text>
                  <text x="60" y="76" fontFamily="Montserrat,Arial,sans-serif" fontSize="14" fontWeight="800" fill="#1a6fe6">REAL GPR: a recorded image</text>
                  <rect x="60" y="90" width="360" height="220" rx="6" fill="#0b1626" />
                  <line x1="70" y1="130" x2="410" y2="126" stroke="#27425f" strokeWidth="2" />
                  <line x1="70" y1="170" x2="410" y2="176" stroke="#27425f" strokeWidth="2" />
                  <line x1="70" y1="240" x2="410" y2="236" stroke="#27425f" strokeWidth="2" />
                  <path d="M 80 290 Q 240 60 400 290" fill="none" stroke="#7fd1ff" strokeWidth="3.5" />
                  <path d="M 96 300 Q 240 110 384 300" fill="none" stroke="#7fd1ff" strokeWidth="1.5" opacity="0.5" />
                  <circle cx="240" cy="174" r="6" fill="#e64d1a" />
                  <text x="240" y="162" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fontWeight="700" fill="#ffffff" textAnchor="middle">apex = the pipe</text>
                  <g fontFamily="Montserrat,Arial,sans-serif" fontSize="11" fill="#94a3b8">
                    <text x="64" y="326">position along the ground</text>
                    <text x="430" y="106" transform="rotate(90 430 106)">depth (time)</text>
                  </g>
                  <text x="60" y="354" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#1f2937">Every reflection is recorded against position and depth.</text>
                  <text x="60" y="372" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#1f2937">The hyperbola is durable evidence. A colleague can</text>
                  <text x="60" y="390" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#1f2937">reopen the file tomorrow and check the call.</text>
                  <line x1="455" y1="80" x2="455" y2="400" stroke="#e5e7eb" strokeWidth="2" />
                  <text x="490" y="76" fontFamily="Montserrat,Arial,sans-serif" fontSize="14" fontWeight="800" fill="#e64d1a">AML PRO: two lights and a tone</text>
                  <rect x="490" y="90" width="360" height="220" rx="6" fill="#f5f6f8" stroke="#e5e7eb" />
                  <circle cx="610" cy="170" r="34" fill="#ef4444" />
                  <circle cx="730" cy="170" r="34" fill="#ef4444" />
                  <g fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#4b5563">
                    <text x="610" y="226" textAnchor="middle">left LED</text>
                    <text x="730" y="226" textAnchor="middle">right LED</text>
                  </g>
                  <text x="670" y="262" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fontWeight="700" fill="#1f2937" textAnchor="middle">+ a tone and a laser dot</text>
                  <text x="670" y="284" fontFamily="Montserrat,Arial,sans-serif" fontSize="12" fill="#4b5563" textAnchor="middle">no measurement is recorded</text>
                  <text x="490" y="354" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#1f2937">The lights flip with hand movements of about 5 cm,</text>
                  <text x="490" y="372" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#1f2937">half the radio wavelength. Marks and GPS points record</text>
                  <text x="490" y="390" fontFamily="Montserrat,Arial,sans-serif" fontSize="13" fill="#1f2937">where the operator stopped, not what was measured.</text>
                </svg>
              </SvgFigure>

              <P>The practical difference, for a UK utility surveyor, sits at a deeper level than "is the output saved or not". Two competent GPR surveyors walking the same site can absolutely produce different mark-outs, different survey direction, different antenna speed, different gain settings, different assumptions about ground permittivity, different judgements about what's a hyperbola and what's noise. Reducing that operator variability is a chunk of what PAS 128 surveyor training is for. But the underlying radargram on the GPR screen is a recording of what the radar electronics actually detected, signal out, reflection in, recorded against travel time. The operator's hand position at the wavelength scale does not drive what appears on the trace. The data is the data. Surveyors disagree about how to read it; they don't disagree about whether the trace itself is real.</P>

              <P>The AML Pro is different in a more fundamental way. There is no scan trace; the only output is the two LEDs already described. Two AML Pro operators on the same site aren't disagreeing about how to interpret a shared data product, there is no shared data product. Each operator is generating their own sequence of LED states by how they walk the device and how steadily they hold it. The marks left on the ground are not the device's measurement of where pipes are; they are the operator's record of where, in their own walk, the LEDs happened to light.</P>

              <P>With GPR the disagreement is about interpretation. With the AML Pro the disagreement is one layer earlier, at the level of what was generated in the first place.</P>

              <P>It is worth being precise about what the indicators are likely to be responding to in the field, because the answer is not "nothing". A phase-comparison array yields meaningful localisation only when both receive channels see a sufficiently strong and coherent return from the target; when that return cannot physically be present, the comparator does not go quiet, it locks onto whatever else is there. Over real ground, a 2.45 GHz head swept by hand has plenty to react to: the reflection from the air-to-ground interface itself, clutter in the top few centimetres, soil heterogeneity, nearby surfaces and structures, and its own constantly changing height and tilt, which the half-wavelength physics above converts directly into indicator flips. The one contribution that cannot plausibly be in the mix, on the physics of Sections 3 and 12, is the deep buried-target return. So the device is not quiet in the field; it is busy with everything except the thing it is sold to find. An instrument that keeps indicating when the target signal is physically absent is feeding the operator noise correlated with their own handling, and that is precisely the regime in which expectation, not the ground, ends up doing the locating.</P>

              <NoteBox>
                <strong className="text-foreground">A change of register.</strong> Everything above this point is evidence and physics. What follows is the author's editorial conclusion, drawn from that evidence.
              </NoteBox>

              <H3>My opinion as the author of this report</H3>
              <Figure
                src="/articles/aml-pro/cartoon.jpg"
                alt="Satirical cartoon: a surveyor labelled Expectation Manager holds a gadget wired to expectations rather than physics, while real GPR, a cable locator and textbooks sit unused on a table beside a reality-check list"
                width={1672}
                height={941}
                caption="An editorial aside, generated with AI for this report: expectation management, illustrated. The reality-check list on the right is the serious version of this report's argument: physics is real, evidence matters, blind trials, humility, data over opinion."
              />

              <P>What the patent and the FAQ jointly describe, stripped of marketing language, is in my opinion the engineering equivalent of an electronic dowsing rod. A real, FCC-certified 2.45 GHz radio transmitter inside the case (this distinguishes it from the Quadro Tracker or ADE 651, which were empty). Real receive antennas. A real phase-comparison detector that sometimes lights LEDs. But an operating loop in which the operator slowly walks, holds the device level, wiggles it small distances vertically and side to side, and waits for both LEDs to come on simultaneously, at which point the position is marked as a "detection".</P>

              <P>The principle is general, and it does not depend on what is inside the case: when a device operates in a regime where the deep signal is physically implausible and the output is highly sensitive to operator movement and expectation, its behaviour converges on that of a classic dowsing rod. The template here is exactly that: a binary indicator, hypersensitive to small hand movements, read during a slow walk, by an operator who already expects the target in a particular place.</P>

              <P><A href="#s13">Section 13</A> sets out what happens to devices with that combination of features when they meet a blind protocol: the ideomotor literature explains the confident detections, and the Munich dowsing trials and Sandia's evaluations of the architectural cousins show them failing to replicate. The AML Pro has not been tested under such a protocol in the public record.</P>

              <P>The honest reader can review the patent text, the FAQ text, and the physics calculation above, and form their own view. On that evidence, my view is that this is patented, FCC-certified, professionally marketed, beautifully packaged electronic dowsing equipment.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s15" num="15">UK distribution, HSG47, PAS 128, what the law actually requires</SectionHeading>

              <Tldr>The AML Pro cannot produce PAS 128 evidence at any quality level, and its UK marketing never claims it can.</Tldr>

              <H3>HSG47, the foundational UK regulation</H3>
              <P>HSG47 (HSE, <em>Avoiding danger from underground services</em>, 3rd edition 2014, ISBN 978 0 7176 6584 6, <A href="https://www.hse.gov.uk/pubns/books/hsg47.htm">link</A>) is the foundational UK Health &amp; Safety Executive guidance for any work on or near buried services. It sets out three elements of a safe system of work during excavation:</P>

              <PullQuote cite={<>— HSE HSG47 publication summary</>}>
                "It explains the three basic elements of a safe system of work during excavation:<br />
                – Planning the work<br />
                – Locating and identifying buried services<br />
                – Safe excavation"
              </PullQuote>

              <P>HSG47 does not endorse specific products, and it does not need to, because <A href="https://www.hse.gov.uk/pubns/priced/hsg47.pdf">paragraph 91</A> states the position plainly: "Locators (with the possible exception of ground-probing radar) do not detect plastic pipes or other non-metallic services unless" a metallic tracer wire has been laid with the pipe, a transmitter or tracing rod is inserted and pushed along it, or RFID markers have been affixed. The HSE's own guidance embodies the orthodox physics: there is no handheld instrument that finds buried plastic from the surface. The AML Pro is marketed as precisely the device paragraph 91 says does not exist, and in fourteen years nobody has presented the HSE with the evidence that would change that paragraph. Paragraph 88 adds the operator's duty: "Anyone who uses a locator should have received thorough training in its use and limitations."</P>

              <P>The wider law completes the picture. HSG47 itself never mentions physics or peer review; it does not need to. Under the Management of Health and Safety at Work Regulations 1999 a risk assessment must be suitable and sufficient, and after a strike the question an HSE inspector asks is why the contractor considered its chosen method adequate for the materials, depths and ground conditions on site. That answer has to rest on something checkable, and the only checkable things are published physics and validated performance. For this device, the published physics says centimetres (<A href="#s3">Section 3</A>) and the validated performance record is one unblinded paper (<A href="#s11">Section 11</A>). "The brochure said 20 feet" is not an answer that survives that conversation.</P>

              <H3>PAS 128, the BSI specification for utility detection surveys</H3>
              <P>PAS 128:2022 (British Standards Institution) defines four quality levels for utility detection surveys:</P>

              <EvidenceTable
                headers={["Level", "Method", "Evidence required"]}
                rows={[
                  ["QL-D", "Desktop study using utility-owner records", "Drawing review"],
                  ["QL-C", "Site reconnaissance, visible features matched to records", "Visual survey"],
                  [<strong className="text-foreground">QL-B</strong>, <><strong className="text-foreground">Geophysical detection using EML + GPR</strong>, plotted on survey-grade coordinates, with confidence indicators (QL-B1 highest to QL-B4 lowest)</>, <strong className="text-foreground">Active EM signal + Ground-Penetrating Radar, both methods</strong>],
                  ["QL-A", "Physical verification by trial hole, with X/Y/Z survey to ±50 mm", "Excavation evidence"],
                ]}
              />
              <P>Sources: <A href="https://terrainsurveys.co.uk/news-and-media/the-4-pas128-quality-levels-explained">Terrain Surveys explainer</A>; <A href="https://www.socotec.co.uk/our-services/land-and-utility-surveying/underground-utility-surveys">SOCOTEC UK</A>; <A href="https://www.technicsgroup.com/2024/10/everything-you-need-to-know-about-pas-128-survey/">Technics Group</A>.</P>

              <H3>What the AML Pro cannot deliver under PAS 128</H3>
              <EvidenceTable
                headers={["PAS 128 requirement", "AML Pro capability"]}
                rows={[
                  ["Survey-grade X/Y/Z coordinates", "Consumer-grade GPS, no RTK"],
                  ["Statistical confidence-tier classification (B1-B4)", "Operator-judged sensitivity setting, no calibrated confidence"],
                  ["Repeatable second-operator verification", "Manual itself acknowledges operator-dependent \"learning curve\""],
                  ["Two-method geophysical detection (EML + GPR)", "Single device, neither EML nor GPR by any standard definition"],
                  ["Signature discrimination between pipe / rock / root / void at depth", "\"Density-difference\" reading, no material discrimination"],
                ]}
              />

              <P><strong>The AML Pro cannot deliver PAS 128 evidence at any quality level.</strong> Crucially, neither SSI's own marketing nor the UK distributor's marketing on pvcpipelocator.co.uk claims that it can, the strings "HSG47", "PAS 128" (in either spelling), "HSE", and "NJUG" do not appear on either site. The product is being sold to the UK underground-utility industry without ever claiming the regulatory compliance that industry requires.</P>

              <H3>The Advertising Standards Authority position</H3>
              <P>The UK Advertising Standards Authority has jurisdiction over UK-targeted advertising on a .co.uk domain regardless of the seller's corporate registration. As of the date of this report, no ASA ruling appears against SSI Locators, AML Pro, or pvcpipelocator.co.uk on the public rulings database (<A href="https://www.asa.org.uk/codes-and-rulings/rulings.html">ASA rulings</A>). Two claims on the pvcpipelocator.co.uk page are candidates for ASA complaint:</P>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li>"Utilizing technology that was developed for lunar exploration", claim of NASA / lunar-mission heritage which does not correspond to any actual NASA subsurface instrument (see Section 9).</li>
                <li>"will work in clay, wet soil, snow or even standing water", claim of operation in conditions in which the published radio physics at 2.45 GHz makes the claimed depth penetration physically impossible (see Section 3).</li>
              </ul>
              <P>ASA complaints are free, take ~30 minutes to file, and the resulting adjudications enter the public record.</P>

              <H3>McCormick / Bolton, the UK Fraud Act precedent</H3>
              <P>The UK has live precedent for criminal conviction of marketers of pseudoscientific detection devices. James McCormick was convicted in 2013 under sections 6 and 7 of the Fraud Act 2006 for selling the ADE 651, on the basis of evidence that the device <em>"lacks any grounding in science, nor does it work in accordance with the known laws of physics"</em> (<A href="https://www.aljazeera.com/news/2013/5/2/uk-man-jailed-for-selling-fake-bomb-detectors">Al Jazeera</A>). Gary Bolton was convicted the same year for the GT200, given a seven-year sentence and a director ban (<A href="https://www.kentonline.co.uk/ashford/news/fake-bomb-boss-banned-46554/">Kent Online</A>). The pattern that triggered prosecution in both cases was: a device with no physical mechanism for performing what it claimed; marketing claims that defied the laws of physics; and end-customer reliance on the device for safety-critical work.</P>

              <P>The pattern that triggered the McCormick and Bolton convictions overlaps with the wider <em>device class</em> the AML Pro belongs to, handheld detection instruments marketed against the laws of physics, and with the safety-critical end-use context. It does not overlap on the corporate-vehicle front: the AML Pro is sold by an established manufacturer through normal commercial dealer channels, which is materially different from the McCormick/Bolton shell-vehicle pattern. The bridge that would close the gap to a Fraud Act claim against any current entity is a real customer-strike incident in which a UK contractor relied on the AML Pro instead of HSG47-compliant equipment and suffered a cable or gas-main strike. Until that bridge is crossed, ASA is the realistic UK-side intervention path.</P>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="s16" num="16">Recommendations</SectionHeading>

              <Tldr>Use the validated stack, treat any AML indication as unverified, and the ASA is the cleanest UK intervention.</Tldr>

              <RecCard>
                <h3 className="text-lg font-black text-foreground mb-3">For UK utility contractors and surveyors</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                  <li><strong>Do not rely on the AML Pro for HSG47 / PAS 128 compliance.</strong> The device cannot deliver evidence at any PAS 128 quality level and was not built to. Use the validated stack: active EM (Radiodetection RD8200 or equivalent), in-pipe sondes for non-metallic pipes, and properly calibrated 200-1,500 MHz GPR.</li>
                  <li><strong>Treat any positive detection from the AML Pro as unverified until confirmed by a second method.</strong> The device's own FAQ describes erratic null-zone behaviour ("both lights come on then go off approximately every 2 inches") and operator-dependent false positives at high sensitivity. A second method is necessary in any case under PAS 128.</li>
                  <li><strong>Document the method used in every survey.</strong> If a strike happens and the only locator-of-record was a device whose marketing depth claims violate the published physics at its operating frequency, the contractor's defence under HSG47 will be weak.</li>
                </ul>
              </RecCard>

              <Figure
                src="/articles/aml-pro/gpr-08.jpg"
                alt="Delegates in hi-vis operating a utility GPR cart on a Sygma training course"
                width={1400}
                height={1050}
                caption="Delegates working a utility GPR on a Sygma course. The validated toolkit, active EM plus GPR plus trial holes where needed, is what PAS 128 and HSG47 are built around."
              />

              <RecCard>
                <h3 className="text-lg font-black text-foreground mb-3">For training providers and accreditation bodies</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                  <li><strong>EUSR, NJUG, ProQual, City &amp; Guilds, Highfield, RoSPA:</strong> a position statement on "long-range passive locators" / "all-materials density-difference RF" devices in safety-critical underground-utility work would close a documented gap. Real GPR vendors and active-EM vendors publish to your standards. The AML category does not.</li>
                  <li><strong>Sygma Solutions and other UK CAT &amp; Genny training providers:</strong> brief delegates on the existence of this category of device, the physics, and the difference between FCC certification (emissions compliance) and efficacy validation (does not exist for this device).</li>
                </ul>
              </RecCard>

              <RecCard>
                <h3 className="text-lg font-black text-foreground mb-3">For UK regulators</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                  <li><strong>ASA:</strong> the cleanest single intervention is an investigation of the "lunar exploration technology" and "works in clay, wet soil, snow or even standing water" claims on <A href="https://pvcpipelocator.co.uk/aml-pro/">pvcpipelocator.co.uk</A> against the CAP Code (<A href="https://www.asa.org.uk/codes-and-rulings/advertising-codes.html">non-broadcast advertising rules</A>), in particular rules 3.1 (misleading advertising) and 3.7 (objective claims requiring documentary evidence). The <A href="https://www.asa.org.uk/codes-and-rulings/rulings.html">ASA rulings database</A> contains no prior ruling against this advertiser as of June 2026.</li>
                  <li><strong>HSE:</strong> the <A href="https://www.hse.gov.uk/pubns/books/hsg47.htm">HSG47</A> framework already requires methods fit for purpose. A safety bulletin on the category of "passive long-range locators", not naming a single product, would alert UK industry to the limitations.</li>
                  <li><strong>BSI / PAS 128 working group:</strong> an explicit statement that 2.45 GHz handheld density-difference detectors are outside the recognised geophysical methods (EML + GPR, per <A href="https://terrainsurveys.co.uk/news-and-media/the-4-pas128-quality-levels-explained">PAS 128:2022</A>) would help procurement managers make defensible decisions.</li>
                </ul>
              </RecCard>

              <H3>Open questions and follow-up</H3>
              <ul className="list-disc pl-6 space-y-2 my-5 text-muted-foreground leading-relaxed marker:text-muted-foreground">
                <li><strong>Independent teardown.</strong> Partially answered by the patent itself, which discloses the full RF chain, chip part numbers and interior drawings (Sections 8 and 13). What a teardown of a current production AML Pro would add is confirmation that the shipping product matches the patent's modest electronics. If anyone reading this has one and is willing to photograph the front-end RF chain and key chip part numbers, the physics-vs-marketing gap could be tightened further.</li>
                <li><strong>Independent double-blind field test.</strong> The controlled-protocol Sandia ran against the DKL LifeGuard, Quadro Tracker and MOLE has never been run on an AML Pro. Such a test, conducted on a test bed where target positions are blind to the operator, would be the definitive evidence. A fair protocol is specified in <A href="#s12">Section 12</A>. Estimated cost: £10k to £30k.</li>
                <li><strong>The Prairielands years.</strong> The SSI ownership question is resolved: USPTO records show US 7,898,456 assigned to SubSurface Instruments on 18 April 2017 (<A href="#s8">Section 8</A>). What remains open is 2009 to 2017: why a North Dakota gas-marketing company owned the patents while SSI built and sold the device, and what arrangement sat underneath. Anyone with direct visibility is welcome to clarify.</li>
              </ul>

              <H3>Closing position</H3>
              <P>This report opened with the cleanest falsification available, the 3,300 dB gap between the AML Pro's advertised depth and the legal-maximum link budget at its own operating frequency. It does not end there, because the inflated number is not the only thing at stake. On the record assembled here, the device's public scientific case is weak at every level: a mechanism described in terms no electromagnetic practitioner uses, a frequency band that forty years of subsurface engineering avoids for exactly the conditions the marketing names, one unblinded paper whose own authors disclaim the generalisation being sold, an operating loop whose indicators move with the operator's hand, and fourteen years without a blinded test anyone can cite. The evidence does not support the 20 ft claim, and it does not support the fallback claims either. Until decisive evidence of the kind set out in <A href="#s12">Section 12</A> exists, the AML Pro has no place in safety-critical utility detection, at any depth, in any soil.</P>

              <Smoking label="The last word belongs to the inventor">
                <p className="text-foreground/85 leading-relaxed">The marketing gives the AML Pro a NASA pedigree and a patent badge. The man who actually built it offers neither. Asked why he and Delbert Oehme never took the work any further, Professor Cloutier answered in a single sentence, and it is the fairest summary of this entire report: <strong>"the fact that we did not pursue it any further is a summary statement of our understanding of its utility and value at the time."</strong></p>
              </Smoking>
            </section>

            <hr className="my-12 border-border" />

            <section>
              <SectionHeading id="sources" num="📚">Sources</SectionHeading>
              <p className="text-muted-foreground mb-6">Every claim in this report is sourced to one of the following URLs or peer-reviewed papers. URLs were live as of 4 June 2026 unless otherwise noted.</p>

              <H3>SSI / AML Pro primary sources</H3>
              <SrcBib><strong className="text-foreground">AML Pro product page</strong>, <A href="https://www.ssilocators.com/product/aml-pro/">ssilocators.com/product/aml-pro/</A>, Verbatim marketing claims, technical specification, FCC ID, last modified 2025-06-02.</SrcBib>
              <SrcBib><strong className="text-foreground">AML FAQ</strong>, <A href="https://www.ssilocators.com/aml_faq/">ssilocators.com/aml_faq/</A>, The "null zones every 2 inches" and "very small changes of density" admissions.</SrcBib>
              <SrcBib><strong className="text-foreground">AML Pro User Manual V4.30.1 PDF</strong>, <A href="https://www.ssilocators.com/wp-content/uploads/2025/06/AML-PRO-Manual-V4301.pdf">PDF link</A>, "Originally designed by NASA engineers for use in lunar exploration."</SrcBib>
              <SrcBib><strong className="text-foreground">AML Pro/Plus Brochure rev 10/2019 PDF</strong>, <A href="https://www.ssilocators.com/wp-content/uploads/2025/04/AML-PRO-PLUS-BROCHURE.pdf">PDF link</A>, "Utilizing technology that was developed for lunar exploration."</SrcBib>

              <H3>FCC and patents</H3>
              <SrcBib><strong className="text-foreground">FCC ID A47-AML grant record</strong>, <A href="https://fcc.report/FCC-ID/A47-AML">fcc.report/FCC-ID/A47-AML</A>, Grant date 16 March 2012; 2450.0 MHz; tested by Intertek; certified by Jim Hokanson.</SrcBib>
              <SrcBib><strong className="text-foreground">US Patent 7,898,456 B2</strong>, Cloutier &amp; Oehme, "Apparatus and method for detecting and locating hidden objects", assignee Prairielands Energy Marketing Inc., granted 1 March 2011. Full text: <A href="https://patents.justia.com/patent/7898456">Justia</A> · <A href="https://patents.google.com/patent/US7898456B2">Google Patents</A>. The patent whose described mechanism most closely matches the AML Pro's marketing (2.4 GHz CW microwave, five-antenna array, phase-comparison, LED + laser + audio indicator stack, handheld). Assignment chain per USPTO recordation: inventors → Prairielands 11 May 2009 (reel/frame 022664/0474); Innovatum → Prairielands 18 Apr 2017 (042040/0651); Prairielands → SubSurface Instruments, Inc., Wisconsin, 18 Apr 2017 (042040/0806). Full grant PDF (11 pages, 7 drawing sheets) read end to end for this report; FIGs 6 and 7 disclose the interior.</SrcBib>
              <SrcBib><strong className="text-foreground">US 6,501,414, Arndt, Carl &amp; Byerly (NASA Johnson Space Center)</strong>, "Method for locating a concealed object", granted 31 Dec 2002, assignee "The United States of America as represented by the United States National Aeronautics and Space Administration", <A href="https://patents.justia.com/patent/6501414">Justia</A>. Cited as prior art on the front page of US 7,898,456; the documented NASA thread behind the marketing's "NASA engineers" line. Ground use, not lunar.</SrcBib>
              <SrcBib><strong className="text-foreground">Google Patents assignee search, "Subsurface Instruments"</strong>, <A href="https://patents.google.com/?assignee=Subsurface+Instruments">link</A>, Returns 0 patents assigned to SubSurface Instruments, Inc.</SrcBib>
              <SrcBib><strong className="text-foreground">US 7,898,456 legal status</strong>, <A href="https://patents.google.com/patent/US7898456B2/en">Google Patents legal events (mirroring USPTO)</A>. Fee paid 2014-08-06 (4th yr) and 2018-11-01 (8th yr), large entity; <strong className="text-foreground">2023-04-03 LAPS: "PATENT EXPIRED FOR FAILURE TO PAY MAINTENANCE FEES"</strong>; status Expired, Fee Related; nominal expiry had fees been paid: 2029-08-22.</SrcBib>

              <H3>The inventors and the assignee</H3>
              <SrcBib><strong className="text-foreground">Paul A. Cloutier, Rice University faculty page</strong>, <A href="https://profiles.rice.edu/faculty/paul-cloutier">profiles.rice.edu</A>, Professor Emeritus, Physics and Astronomy.</SrcBib>
              <SrcBib><strong className="text-foreground">Rice University news (Sept 1997)</strong>, <A href="https://www.newswise.com/articles/mars-researcher-available-to-discuss-magnetic-field">"Mars Researcher Available to Discuss Magnetic Field"</A>, Cloutier as co-investigator on the Mars Global Surveyor magnetometer team.</SrcBib>
              <SrcBib><strong className="text-foreground">Texas Historical Commission</strong>, <A href="https://thc.texas.gov/blog/descent-darkness">"Descent into Darkness" (The Medallion, Spring 2013)</A>, "Dr. Paul Cloutier, a Rice University physics professor, discovered the shipwreck in 1976." Companion entry: <A href="https://www.tshaonline.org/handbook/entries/hatteras">TSHA Handbook of Texas, Hatteras</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">Justia inventor record, Paul A. Cloutier</strong>, <A href="https://patents.justia.com/inventor/paul-a-cloutier">patents.justia.com</A>, The full Cloutier + Oehme patent lineage: US 4,427,943 (1984) · US 5,418,460 (1995) · US 6,366,191 + 6,369,679 (2002) · US 7,362,260 (2008) · US 7,535,407 (2009) · US 7,898,456 (2011).</SrcBib>
              <SrcBib><strong className="text-foreground">Innovatum Ltd (UK)</strong>, <A href="https://www.innovatum.co.uk/about/about-innovatum/">about page</A>, "the only company in the world to offer a cable magnetising service along with subsequent passive magnetic cable tracking", the commercial continuation of the magnetisation patents.</SrcBib>
              <SrcBib><strong className="text-foreground">MDU Resources Group corporate history</strong>, <A href="https://www.referenceforbusiness.com/history2/8/MDU-Resources-Group-Inc.html">referenceforbusiness.com</A>, Prairielands Energy Marketing, Inc. incorporated 31 July 1989, Bismarck ND, natural-gas marketing subsidiary.</SrcBib>

              <H3>Dealers and distribution</H3>
              <SrcBib><strong className="text-foreground">Kuker-Ranken AML Pro (US dealer)</strong>, <A href="https://kukerranken.com/product/subsurface-instruments-aml-pro-series-locator/">link</A>, Price $8,250.00; "Available on backorder"; last modified 2026-02-23.</SrcBib>
              <SrcBib><strong className="text-foreground">pvcpipelocator.co.uk (UK reseller)</strong>, <A href="https://pvcpipelocator.co.uk/aml-pro/">link</A>, UK-targeted marketing; "Unlike the deficiencies of GPR."</SrcBib>
              <SrcBib><strong className="text-foreground">pvcpipelocators.com (US reseller, Kingwood TX)</strong>, <A href="https://www.pvcpipelocators.com/finding-pvc-pipes/">link</A>, Cited as reference [29] in Lee &amp; Yun (2025). A US retailer's product page, not a third-party technical assessment of the device.</SrcBib>
              <SrcBib><strong className="text-foreground">2012 product launch, Underground Construction magazine</strong>, <A href="https://undergroundinfrastructure.com/magazine/2012/august-2012-vol-67-no-8/new-products/all-materials-locator-is-underground-locating-game-changer">link</A>, "Newly released" AML Pro in the August 2012 New Products section; load-bearing for the 14-year market-test claim.</SrcBib>

              <H3>Peer-reviewed scientific evidence (the only published test)</H3>
              <SrcBib><strong className="text-foreground">Lee &amp; Yun (2025)</strong>, Applied Sciences MDPI 15(11): 5794, "Performance Evaluation of AML Equipment...", <A href="https://www.mdpi.com/2076-3417/15/11/5794">link</A>; DOI <A href="https://doi.org/10.3390/app15115794">10.3390/app15115794</A>.</SrcBib>

              <H3>Soil dielectric / penetration physics</H3>
              <SrcBib><strong className="text-foreground">Hallikainen et al. (1985)</strong>, IEEE TGRS GE-23(1): 25-34, "Microwave Dielectric Behavior of Wet Soil, Part I", <A href="https://www.semanticscholar.org/paper/Microwave-Dielectric-Behavior-of-Wet-Soil-Part-1-Hallikainen-Ulaby/751c289062a22daa6b5b44056d955b9d757cd77b">Semantic Scholar</A>. The canonical peer-reviewed dataset on microwave penetration of wet soil.</SrcBib>
              <SrcBib><strong className="text-foreground">LSBU Water Structure and Science</strong>, <A href="https://water.lsbu.ac.uk/water/microwave_water.html">link</A>, Standard reference for water dielectric properties at microwave frequencies; D<sub>p</sub> = 1.4 cm at 25°C; D<sub>p</sub> = 0.43 cm in supercooled water.</SrcBib>
              <SrcBib><strong className="text-foreground">NBSIR 74-381, Ellerbruch, D.A. (1974)</strong>, "Electromagnetic Attenuation Properties of Clay and Gravel Soils", National Bureau of Standards, Boulder, Colorado, <A href="https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir74-381.pdf">full PDF</A>. Measured skin depths at 0.5 to 4.5 GHz in laboratory-compacted clay and gravel at approximately 10%, 50% and 90% saturation. Clay at ~83% saturation: 3 to 6 cm in the 2.0 to 3.0 GHz band; 5 to 20 cm even at 0.6 to 1.7 GHz. Load-bearing for Section 12's shallow-fallback analysis.</SrcBib>
              <SrcBib><strong className="text-foreground">Rao, K.S., Chandra, G. &amp; Narasimha Rao, P.V. (1988)</strong>, "Study on penetration depth and its dependence on frequency, soil moisture, texture and temperature in the context of microwave remote sensing", Journal of the Indian Society of Remote Sensing 16(2): 7-19, <A href="https://doi.org/10.1007/BF03014300">DOI 10.1007/BF03014300</A>. Penetration depth range 0 to 10 cm for moist soils across the microwave bands as frequency, moisture, texture and temperature vary.</SrcBib>

              <H3>Ground-penetrating radar engineering reality</H3>
              <SrcBib><strong className="text-foreground">GSSI</strong>, <A href="https://www.geophysical.com/">geophysical.com</A>; <A href="https://www.geophysical.com/antennas">antennas</A>; <A href="https://www.exiusa.com/item/radar/350-mhz-digital-antenna">350 HS HyperStacking antenna</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">The Survey Association (TSA)</strong>, <A href="https://www.tsa-uk.org.uk/resources/downloads/">TSA downloads, Client Guide to PAS 128:2022 (Issue 3, 2025) and Summary Client Guide</A>. The client-facing guidance on specifying and procuring a PAS 128 utility survey.</SrcBib>
              <SrcBib><strong className="text-foreground">MALA Easy Locator HDR</strong>, <A href="https://www.groundpenetratingradar.co.uk/about/gpr-equipment/">gpr equipment UK</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">EPA Environmental Geophysics, GPR primer</strong>, <A href="https://www.epa.gov/environmental-geophysics/ground-penetrating-radar-gpr">link</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">Underground Surveying GPR primer</strong>, <A href="https://www.undergroundsurveying.com/technology/utility-locating-technology/ground-penetrating-radar-utilityscan-technology">link</A>.</SrcBib>

              <H3>Validated buried-pipe detection methods</H3>
              <SrcBib><strong className="text-foreground">Radiodetection RD8200</strong>, <A href="https://www.radiodetection.com/en-us/products/precision-locator-range/rd8200-cable-and-pipe-locators">product page</A>; <A href="https://support.radiodetection.com/hc/en-gb/articles/360052918051-Frequencies">supported frequencies</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">SSI PL-VF10R sonde locator</strong>, <A href="https://www.ssilocators.com/product/pl-vf10r/">link</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">SSI LC-5000 acoustic leak correlator</strong>, <A href="https://www.ssilocators.com/product/lc-5000/">link</A>.</SrcBib>

              <H3>FCC regulatory limits</H3>
              <SrcBib><strong className="text-foreground">47 CFR § 15.247 (eCFR)</strong>, <A href="https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15/subpart-C/subject-group-ECFR2f2e5828339709e/section-15.247">link</A>, ISM band operation in the 902-928 MHz, 2400-2483.5 MHz, and 5725-5850 MHz bands.</SrcBib>

              <H3>NASA / ESA subsurface sounder reality</H3>
              <SrcBib><strong className="text-foreground">Apollo Lunar Sounder Experiment (ALSE)</strong>, <A href="https://en.wikipedia.org/wiki/ALSE">Wikipedia</A>; Porcello et al., Proc. IEEE June 1974, <A href="https://ieeexplore.ieee.org/document/1451447/">IEEE Xplore</A>; NASA NSSDCA <A href="https://nssdc.gsfc.nasa.gov/nmc/experiment/display.action?id=1972-096A-04">record</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">MARSIS (Mars Express)</strong>, <A href="https://en.wikipedia.org/wiki/MARSIS">Wikipedia</A>; <A href="https://sci.esa.int/mars-express/">ESA Mars Express</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">SHARAD (Mars Reconnaissance Orbiter)</strong>, <A href="https://en.wikipedia.org/wiki/SHARAD">Wikipedia</A>; Seu et al., JGR Planets 2007, <A href="https://doi.org/10.1029/2006JE002745">DOI</A>.</SrcBib>

              <H3>Architecturally-similar devices that failed controlled tests</H3>
              <SrcBib><strong className="text-foreground">Sandia DKL LifeGuard test (1998)</strong>, <A href="https://newsreleases.sandia.gov/human-presence-detector-fails-controlled-tests-conducted-by-sandia-national-laboratories/">Sandia news release</A>; SAND98-2779 archived at <A href="https://digital.library.unt.edu/ark:/67531/metadc711586/">UNT Digital Library</A>; NIJ NCJ 206120, <A href="https://nij.ojp.gov/library/publications/physical-examination-dkl-lifeguard-model-3">Physical Examination of the DKL LifeGuard, Model 3</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">Quadro Tracker (1996 FBI seizure + federal injunction)</strong>, <A href="https://skepdic.com/quadro.html">Skeptic's Dictionary entry</A>; <A href="https://en.wikipedia.org/wiki/Quadro_Tracker">Wikipedia</A>; <A href="https://reason.com/1996/11/01/box-of-dreams/">Reason magazine, "Box of Dreams" (1996)</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">ADE 651 / James McCormick UK 2013 conviction</strong>, <A href="https://en.wikipedia.org/wiki/ADE_651">Wikipedia</A>; <A href="https://www.cnn.com/2013/05/02/world/europe/uk-fake-bomb-detector">CNN</A>; <A href="https://www.aljazeera.com/news/2013/5/2/uk-man-jailed-for-selling-fake-bomb-detectors">Al Jazeera</A>; <A href="https://slate.com/news-and-politics/2013/05/ade651-fake-bomb-detector-lands-jim-mccormick-10-year-prison-sentence.html">Slate</A>; <A href="https://www.channel4.com/news/bomb-detector-fraud-jail-conviction-james-mccormick">Channel 4</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">GT200 / Gary Bolton UK 2013 conviction</strong>, <A href="https://en.wikipedia.org/wiki/GT200">Wikipedia</A>; <A href="https://www.kentonline.co.uk/ashford/news/fake-bomb-boss-banned-46554/">Kent Online, director ban</A>.</SrcBib>

              <H3>Ideomotor effect, academic literature</H3>
              <SrcBib><strong className="text-foreground">Wegner &amp; Wheatley (1999)</strong>, "Apparent mental causation: Sources of the experience of will", American Psychologist 54(7): 480-492, <A href="https://pubmed.ncbi.nlm.nih.gov/10424155/">PubMed 10424155</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">Munich GWUP dowsing test, Enright reanalysis (1999)</strong>, <A href="https://skepticalinquirer.org/1999/01/testing-dowsing-the-failure-of-the-munich-experiments/">Skeptical Inquirer</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">Skeptic's Dictionary, MFD (multi/molecular frequency discrimination)</strong>, <A href="https://skepdic.com/mfd.html">link</A>.</SrcBib>

              <H3>UK regulatory framework</H3>
              <SrcBib><strong className="text-foreground">HSE HSG47 (3rd edition 2014)</strong>, <A href="https://www.hse.gov.uk/pubns/books/hsg47.htm">link</A>; <A href="https://www.hse.gov.uk/pubns/priced/hsg47.pdf">free PDF</A>; <A href="https://www.hse.gov.uk/electricity/information/excavations.htm">HSE excavations guidance</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">PAS 128 explainers</strong>, <A href="https://terrainsurveys.co.uk/news-and-media/the-4-pas128-quality-levels-explained">Terrain Surveys</A>; <A href="https://www.socotec.co.uk/our-services/land-and-utility-surveying/underground-utility-surveys">SOCOTEC</A>; <A href="https://www.technicsgroup.com/2024/10/everything-you-need-to-know-about-pas-128-survey/">Technics Group</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">NJUG (National Joint Utilities Group)</strong>, <A href="https://www.njug.org.uk/">link</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">The Survey Association (TSA)</strong>, <A href="https://www.tsa-uk.org.uk/">link</A>.</SrcBib>
              <SrcBib><strong className="text-foreground">ASA Rulings Database + CAP Code (advertising rules)</strong>, <A href="https://www.asa.org.uk/codes-and-rulings/rulings.html">rulings</A>; <A href="https://www.asa.org.uk/codes-and-rulings/advertising-codes.html">non-broadcast advertising code</A>.</SrcBib>
            </section>

            <section className="border-t border-border pt-8 mt-10">
              <h3 className="text-lg font-black text-foreground mb-3">About this report</h3>
              <P>Written and published 4 June 2026 by Pete Ashcroft, Sygma Solutions Ltd (UK underground utility detection training and equipment, HSG47 / EUSR / Cat &amp; Genny / cable avoidance), with AI-assisted research and drafting.</P>
              <P><strong>Disclosure of interest.</strong> Sygma Solutions sells ground-penetrating-radar-related equipment and training as part of its UK underground-utility detection business; this places Sygma in the recognised PAS 128 toolkit category that the AML Pro is marketed against, and that disclosure is offered up-front in the interest of transparency. I have no commercial relationship with SubSurface Instruments, Inc., Radiodetection Ltd, GSSI, MALA, or with any reseller of the AML Pro.</P>
              <P><strong>Corrections welcome.</strong> If any verbatim quote in this report has been mis-transcribed, if any source URL has changed, or if any technical claim can be refuted with peer-reviewed evidence I have missed, please contact me. This document will be updated to reflect any corroborated correction.</P>
              <P className="mb-0">No part of this report alleges criminal conduct by any named individual or company. Sections 13 and 15 describe historical legal precedents in the architectural-family context (Quadro Tracker, ADE 651, GT200) and the UK Fraud Act 2006 framework respectively; these are presented as factual record of separate cases, not as allegations against SubSurface Instruments Inc., any reseller of its products, or any other current entity.</P>
            </section>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-10">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/knowledge-hub/hsg47-explained" className="text-primary hover:underline">HSG47 Explained: The HSE Guide on Avoiding Underground Services</Link></li>
                <li><Link href="/knowledge-hub/understanding-pas-128" className="text-primary hover:underline">Understanding PAS 128: Survey Categories and What They Mean</Link></li>
                <li><Link href="/knowledge-hub/detecting-plastic-gas-service-pipes" className="text-primary hover:underline">Detecting Plastic Gas Service Pipes: Methods and Their Limits</Link></li>
                <li><Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline">Why You Should Always Connect the Genny First</Link></li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
              <h3 className="font-bold text-foreground mb-3">Related Courses</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses/gpr-training" className="text-primary hover:underline font-semibold">GPR Training</Link></li>
                <li><Link href="/courses/cable-avoidance-training" className="text-primary hover:underline">Cable Avoidance Training</Link></li>
                <li><Link href="/courses/cat-and-genny-training" className="text-primary hover:underline">CAT and Genny Training</Link></li>
                <li><Link href="/courses/eusr-cat1-cat2-combined" className="text-primary hover:underline">EUSR CAT 1 and CAT 2 Combined Training</Link></li>
                <li><Link href="/courses/hsg47-training" className="text-primary hover:underline">HSG47 Training</Link></li>
              </ul>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}
