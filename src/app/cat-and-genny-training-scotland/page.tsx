import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';
import Link from 'next/link';
import PhoneLink from '@/components/PhoneLink';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'CAT and Genny Training Scotland | EUSR CAT 1',
  description: 'CAT and Genny training across Scotland. On-site CAT4 and Genny courses in Edinburgh, Glasgow and the Central Belt. EUSR CAT 1, ProQual accredited. CITB ATO.',
  alternates: { canonical: 'https://sygma-solutions.com/cat-and-genny-training-scotland' },
  openGraph: {
    title: 'CAT and Genny Training Scotland | EUSR CAT 1',
    description: 'CAT and Genny training across Scotland. On-site CAT4 and Genny courses in Edinburgh, Glasgow and the Central Belt. EUSR CAT 1, ProQual accredited. CITB ATO.',
    url: 'https://sygma-solutions.com/cat-and-genny-training-scotland',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CatAndGennyTrainingScotland() {
  const faqs = [
    { q: 'What does a CAT and Genny course in Scotland cover?', a: 'Your operatives learn to operate the CAT4 cable avoidance tool and the Genny signal generator: the four CAT locating modes, applying a Genny signal to a target line, reading depth and signal, and the EUSR Category 1 standard for locating buried services. Theory is paired with practical instruction on your own site in Scotland.' },
    { q: 'Do you deliver CAT and Genny training across Scotland?', a: 'Yes. Sygma delivers on site across the Central Belt — Edinburgh, Glasgow and the surrounding regions — and further afield to Aberdeen, Dundee and beyond. Travel is included in the quote with no surcharge for delivery across mainland Scotland. Your team trains on the buried services in the ground at your depot or project.' },
    { q: 'Do you bring the CAT4 and Genny equipment?', a: 'Yes. Our trainers bring the CAT4 tools, Genny signal generators and all assessment materials to your Scottish site, and your team can train on their own kit so they finish confident with the equipment they use every day.' },
    { q: 'What qualification do operatives receive?', a: 'One CAT and Genny programme leads to a Sygma in-house certificate the same day, the <a href=/courses/eusr-cat1>EUSR Category 1</a> card, or the externally verified <a href=/courses/proqualcat1-training>ProQual CAT1</a> qualification. We help you pick the route your clients and frameworks require.' },
    { q: 'Is CITB funding available for CAT and Genny training in Scotland?', a: 'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered Scottish businesses may be able to access funding towards CAT and Genny course costs through the CITB Employer Network model.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: courseSchema({ name: 'CAT and Genny Training Scotland', description: 'On-site CAT and Genny equipment training (CAT4 and Genny) across the Central Belt and mainland Scotland. EUSR CAT 1 and ProQual accredited, CITB Approved Training Organisation.', url: '/cat-and-genny-training-scotland', duration: '1 day', mode: ['onsite'] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "All Courses", to: "/courses" }, { label: "CAT and Genny Training Scotland" }]) }} />

      {/* Hero */}
      <div className="relative w-full overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="eyebrow text-accent mb-2">CAT &amp; Genny Equipment Training</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground mb-3">CAT and Genny Training Scotland | On-Site Across the Central Belt</h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">Sygma Solutions delivers CAT and Genny training across Scotland, on your site, on the CAT4 cable avoidance tool and Genny signal generator your operatives use every day. EUSR and ProQual accredited, a CITB Approved Training Organisation, 21 years in underground utility location. We travel to you, with no travel surcharge across mainland Scotland.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/locations" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Locations</Link>
            <span className="text-primary-foreground/50">/</span>
            <span className="text-primary-foreground/80">Scotland</span>
          </nav>
        </div>
      </div>

      {/* Stats bar */}
      <section className="bg-muted/30 border-y border-border py-5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            {['21 Years in Business', '70,000 Utility Strikes Per Year in the UK', 'CITB Approved Training Organisation'].map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses table */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">What We Deliver</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CAT and Genny Courses We Deliver in Scotland</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">Each course is a private, in-house session at your Scottish premises with hands-on practical training on genuine CAT4 and Genny equipment. You choose the date; we bring the tools, signal generators and assessors. Every route certifies operatives to locate buried utilities before excavation.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-left px-5 py-3 font-bold">Course</th>
                <th className="text-left px-5 py-3 font-bold hidden md:table-cell">Duration</th>
                <th className="text-left px-5 py-3 font-bold">Most Suitable For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: 'CAT and Genny Training (In-House Certificate)', href: '/courses/cat-and-genny-training', duration: '1 day', suitable: 'Operatives new to CAT and Genny equipment. Practical CAT4 and Genny instruction with a same-day Sygma certificate.' },
                { course: 'EUSR CAT1 (EUSR Category 1)', href: '/courses/eusr-cat1', duration: '1 day', suitable: 'Teams that need the EUSR card. The industry-standard CAT and Genny qualification.' },
                { course: 'ProQual CAT1 (Accredited by ProQual)', href: '/courses/proqualcat1-training', duration: '1 day', suitable: 'Teams needing an externally verified, individually assessed qualification.' },
                { course: 'ProQual CAT1 Plus (Most Advanced)', href: '/courses/proqualcat1plus', duration: '2 days', suitable: 'Operatives in complex, high-risk environments. The most advanced CAT and Genny qualification in the UK.' },
                { course: 'OSCA (On-Site Competency Assessment)', href: '/osca', duration: 'Half or full day', suitable: 'Verifying real site competency between training cycles, on your own ground.' },
              ].map((row, i) => (
                <tr key={row.course} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                  <td className="px-5 py-3 font-semibold text-foreground"><Link href={row.href} className="text-primary hover:underline">{row.course}</Link></td>
                  <td className="px-5 py-3 text-muted-foreground hidden md:table-cell">{row.duration}</td>
                  <td className="px-5 py-3 text-muted-foreground">{row.suitable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted"><Image src="cat-07" width={1200} height={900} alt="CAT4 cable avoidance tool in use on a site in Scotland" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted"><Image src="cat-79" width={1200} height={900} alt="Genny signal generator during CAT and Genny training in Scotland" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg aspect-[4/3] bg-muted"><Image src="cat-85" width={1200} height={900} alt="Practical CAT and Genny equipment training in the Central Belt" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* What you'll learn */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Equipment Skills</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">What Your Team Will Learn: CAT4 and Genny Operation</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-bold text-foreground mb-3">The CAT4 Cable Avoidance Tool</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">Operatives learn how the CAT4 detects buried services, how to sweep methodically, how to read signal strength and depth, and where the tool&apos;s limits lie. We cover gain settings, the difference between shallow and deep services, and the everyday mistakes that cause missed lines and strikes.</p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">The Genny Signal Generator</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">The Genny turns a guess into a located service. Trainees learn direct connection and induction, applying a clean signal to a target cable or pipe, and tracing it accurately. Our Genny-first methodology is the biggest single difference between a competent operator and a confident one.</p>
          </div>
        </div>
        <h3 className="font-bold text-foreground mb-4">The Four CAT Locating Modes</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { mode: '1. Power Mode', desc: 'Passive detection of the field from loaded power cables. Unloaded cables may give little or no signal.' },
            { mode: '2. Genny (Signal) Mode', desc: 'Active location using a signal applied by the Genny — the most accurate way to identify and trace a line.' },
            { mode: '3. Radio Mode', desc: 'Passive detection of VLF radio signals re-radiated by metallic services. Signal varies with depth and soil.' },
            { mode: '4. Avoidance Mode', desc: 'All passive modes combined into one sweep — the standard pre-dig safety check.' },
          ].map((item) => (
            <div key={item.mode} className="border border-border rounded-lg bg-card p-5">
              <h4 className="font-bold text-foreground mb-1 text-sm">{item.mode}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why on-site Scotland */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">On-Site Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Scottish Teams Choose On-Site CAT and Genny Training</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>Scotland&apos;s ground is busy: Scottish Water&apos;s ongoing mains and wastewater investment, renewables and grid-connection works across the country, and dense city-centre development in Edinburgh and Glasgow all put operatives near buried services daily. Competent CAT4 and Genny operation is what keeps those crews and networks safe.</p>
            <p>Training on your own site in Scotland means your team learns the equipment against the services and ground conditions they actually work in, not a demonstration field. That is the difference between a classroom pass and a confident operator on a live dig.</p>
            <p>We deliver across the Central Belt — Edinburgh, Glasgow and the surrounding regions — and further afield across mainland Scotland, half day or full day, with travel included.</p>
          </div>
        </div>
      </section>

      {/* CITB */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Funding</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CITB Funding for CAT and Genny Training in Scotland</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>Sygma Solutions is a CITB Approved Training Organisation. Scottish construction businesses registered with CITB may be able to access funding support towards eligible CAT and Genny course costs through the CITB Employer Network model. Ask your adviser, or contact Sygma and we will help you through it.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-primary mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Questions About CAT and Genny Training in Scotland</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6 bg-background">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:font-semibold [&_a:hover]:underline" dangerouslySetInnerHTML={{ __html: a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other regions + sibling differentiation */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Other Regions</p>
        <h2 className="text-2xl font-black mb-6 text-foreground">CAT and Genny Training Across the UK</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">Sygma delivers on-site CAT and Genny training UK-wide. See our regional course guides:</p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/cat-and-genny-training-london" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">CAT and Genny Training London</Link>
          <Link href="/cat-and-genny-training-birmingham" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">CAT and Genny Training Birmingham</Link>
          <Link href="/cat-and-genny-training-manchester" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">CAT and Genny Training Manchester</Link>
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed border-l-2 border-border pl-4">Looking at the wider cable-avoidance and utility-avoidance picture rather than the CAT and Genny equipment specifically? See <Link href="/cable-avoidance-training-scotland" className="text-primary font-semibold hover:underline">Cable Avoidance Training Scotland</Link>.</p>
      </section>

      {/* CTA */}
      <section className="bg-primary border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-primary-foreground">Get a Quote for CAT and Genny Training in Scotland</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us how many delegates need CAT and Genny training, the route you need — in-house, EUSR or ProQual — and your preferred dates. We will confirm availability and send a quote within one working day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors">Get a Scotland CAT and Genny Quote</Link>
            <PhoneLink className="inline-flex items-center px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">Call Us</PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}
