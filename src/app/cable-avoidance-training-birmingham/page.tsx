import { faqPageSchema, breadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Cable Avoidance Training Birmingham | CAT and Genny Courses',
  description: 'Cable avoidance training in Birmingham and the Midlands. CAT and Genny courses at your site. EUSR, ProQual accredited. CITB ATO.',
  alternates: { canonical: 'https://sygma-solutions.com/cable-avoidance-training-birmingham' },
  openGraph: {
    title: 'Cable Avoidance Training Birmingham | CAT and Genny Courses',
    description: 'Cable avoidance training in Birmingham and the Midlands. CAT and Genny courses at your site. EUSR, ProQual accredited. CITB ATO.',
    url: 'https://sygma-solutions.com/cable-avoidance-training-birmingham',
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE],
    type: 'website',
  },
};

export default function CableAvoidanceBirmingham() {
  const faqs = [
  { q: 'Do you deliver cable avoidance training in Birmingham?', a: 'Yes. Sygma Solutions delivers cable avoidance and CAT and Genny training at client sites across Birmingham and the Midlands.' },
  { q: 'Can we do half day training?', a: 'Yes. We offer flexible half day and full day training sessions to suit your schedule.' },
  { q: 'What is the travel cost?', a: 'Travel costs are included in the course quote. Contact us with your site location and we will confirm the full cost.' },
  { q: 'Can you deliver at our depot?', a: 'Yes. Sygma delivers at client premises across Birmingham and the Midlands including depots, sites, training rooms and open yard space.' },
  { q: 'Is CITB funding available?', a: 'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered businesses may access funding through the CITB Employer Network model.' },
];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageSchema(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema([{ label: "All Courses", to: "/courses" }, { label: "Cable Avoidance Training Birmingham" }]) }} />

      <div className="relative w-full h-96 overflow-hidden bg-foreground">
        <Image
          src="cat-31"
          alt="Cable avoidance training in Birmingham"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/30" />
        <div className="absolute inset-0 border-l-4 border-accent" />
        <div className="relative flex flex-col justify-end p-8 md:p-12 h-full">
          <div className="eyebrow text-accent mb-2">Utility Avoidance</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary-foreground mb-3">Cable Avoidance Training Birmingham | Midlands Coverage</h1>
          <p className="text-lg text-primary-foreground/80 max-w-3xl">Sygma Solutions delivers cable avoidance training and practical CAT and Genny equipment instruction at your site across Birmingham and the Midlands. With 21 years delivering on capital projects, infrastructure sites and contractor premises nationwide, our specialist trainers come to you. Choose full day or half day training to suit your schedule.</p>
          <nav className="flex items-center gap-2 mt-6 text-sm">
            <Link href="/locations" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Locations</Link>
            <span className="text-primary-foreground/50">/</span>
            <span className="text-primary-foreground/80">Birmingham</span>
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

      {/* Courses section */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">What We Deliver</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Courses We Deliver in Birmingham and the Midlands</h2>
        <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">We deliver cable avoidance training and genny courses at your premises across Birmingham, the West Midlands and surrounding areas. All courses are private, in-house sessions delivered with hands-on practical training using genuine CAT and Genny equipment. You choose the date. We bring the tools, signal generators and assessors.</p>
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
                { course: 'CAT and Genny Training (In-House Certificate)', href: '/courses/cable-avoidance-training', duration: '1 day', suitable: 'Operatives new to cable avoidance training.' },
                { course: 'EUSR CAT1 (EUSR Category 1)', href: '/courses/eus-cat1', duration: '1 day', suitable: 'Industry-standard cable avoidance qualification.' },
                { course: 'ProQual CAT1 (Accredited by ProQual Accreditations)', href: '/courses/proqualcat1-training', duration: '1 day', suitable: 'Higher assessment standard for cable avoidance.' },
                { course: 'ProQual CAT1 Plus (Most Advanced Available)', href: '/courses/proqualcat1plus', duration: '2 days', suitable: 'Operatives in complex, high-risk environments.' },
                { course: 'Advanced Electromagnetic Location', href: '/courses/advanced-em-locator', duration: '1 day', suitable: 'Experienced operatives using RD8200 and related locators.' },
                { course: 'OSCA (On-Site Competency Assessment)', href: '/osca', duration: 'Half day or full day', suitable: 'Verify actual site competency between training cycles.' },
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
      <div className="grid grid-cols-3 gap-3 h-72 md:h-96">
        <div className="overflow-hidden rounded-lg"><Image src="cat-32" width={1200} height={900} alt="Operative scanning with CAT4" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="cat-33" width={1200} height={900} alt="Genny signal application during training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" /></div>
        <div className="overflow-hidden rounded-lg"><Image src="cat-19" width={1200} height={900} alt="CAT and Genny session near underground services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" /></div>
      </div>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><Image src="cat-93" width={1200} height={900} alt="CAT and Genny training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" /></div>

      {/* Why on-site */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="eyebrow text-primary mb-3">On-Site Delivery</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Midlands Teams Choose On-Site Training</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <p>The Midlands has significant infrastructure development and underground service complexity across manufacturing, logistics, and construction sectors. On-site training means your teams learn cable avoidance in the environment they actually work in.</p>
            <p>Sygma delivers at client premises across Birmingham, the West Midlands, East Midlands, Staffordshire and surrounding areas. Available for full day or half day training sessions to fit your schedule.</p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-96 overflow-hidden"><Image src="cat-35" width={1200} height={900} alt="Utility avoidance training site conditions" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top" /></div>

      {/* CITB Funding */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Funding</p>
        <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">CITB Funding for Cable Avoidance Training in the Midlands</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>Sygma Solutions is a CITB Approved Training Organisation. If your construction business is registered with CITB, you may be able to access funding support towards eligible cable avoidance training costs.</p>
          <p>Contact Sygma and we can guide you through the funding process.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <p className="eyebrow text-primary mb-3">Common Questions</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Questions About CAT and Genny Training in Birmingham</h2>
          <div className="space-y-4">
            {[
              { q: 'Do you deliver cable avoidance training in Birmingham?', a: 'Yes. Sygma Solutions delivers cable avoidance and CAT and Genny training at client sites across Birmingham and the Midlands.' },
              { q: 'Can we do half day training?', a: 'Yes. We offer flexible half day and full day training sessions to suit your schedule.' },
              { q: 'What is the travel cost?', a: 'Travel costs are included in the course quote. Contact us with your site location and we will confirm the full cost.' },
              { q: 'Can you deliver at our depot?', a: 'Yes. Sygma delivers at client premises across Birmingham and the Midlands including depots, sites, training rooms and open yard space.' },
              { q: 'Is CITB funding available?', a: 'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered businesses may access funding through the CITB Employer Network model.' },
            ].map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6 bg-background">
                <h3 className="font-bold text-foreground mb-3">{q}</h3>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training in Other Regions */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="eyebrow text-primary mb-3">Other Regions</p>
        <h2 className="text-2xl font-black mb-6 text-foreground">Cable Avoidance Training Across the UK</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">Sygma delivers on-site cable avoidance training UK-wide:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/cable-avoidance-training-london" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">Cable Avoidance Training London</Link>
          <Link href="/cable-avoidance-training-manchester" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">Cable Avoidance Training Manchester</Link>
          <Link href="/cable-avoidance-training-scotland" className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-semibold text-foreground hover:bg-muted/30 transition-colors">Cable Avoidance Training Scotland</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-primary-foreground">Get a Quote for CAT and Genny Training in Birmingham</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us how many delegates need training, the course duration, and your preferred dates. We will confirm availability and send a quote within one working day.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-primary-foreground text-primary font-bold text-sm hover:bg-primary-foreground/90 transition-colors">Get a Birmingham CAT and Genny Training Quote</Link>
            <a href="tel:+442039718252" className="inline-flex items-center px-6 py-3 rounded-md border border-primary-foreground text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">Call Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
