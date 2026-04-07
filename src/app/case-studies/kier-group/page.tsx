import type { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kier Group | Bespoke Training Case Study | Sygma',
  description: 'How Sygma built a bespoke utility avoidance training programme around Kier Group\'s systems, policies, and incident data.',
  alternates: { canonical: 'https://sygma-solutions.com/case-studies/kier-group' },
  openGraph: {
    title: 'Kier Group | Bespoke Training Case Study | Sygma',
    description: 'How Sygma built a bespoke utility avoidance training programme around Kier Group\'s systems, policies, and incident data.',
    url: 'https://sygma-solutions.com/case-studies/kier-group',
    siteName: 'Sygma Solutions',
    type: 'website',
  },
};

const outcomes = [
  { outcome: 'Operatives apply Kier\'s own permit system correctly', how: 'The programme uses Kier\'s actual permit documentation throughout. Operatives do not have to translate from a generic template.' },
  { outcome: 'Real incidents drive behaviour change', how: 'Company-specific lessons learned create a different level of engagement than generic case studies. Delegates understand these incidents happened in their business.' },
  { outcome: 'CAT Manager data becomes a live safety tool', how: 'Operatives leave with the skills to interrogate their own data, not just collect it.' },
  { outcome: 'Strike investigation is embedded, not theoretical', how: 'Delegates practise USAG form completion on realistic scenarios matched to Kier\'s process.' },
  { outcome: 'Peer coaching raises the standard across the group', how: 'Operatives who can assess each other\'s technique in the field provide a multiplier effect beyond the training day itself.' },
  { outcome: 'Honest feedback reaches L&D and H&S', how: 'QR-code feedback system ensures Kier receives unfiltered delegate data, not responses shaped by the presence of the trainer.' },
];

const programme = [
  { module: 'Kier Permit to Dig System', detail: 'The full Kier permit to dig documentation and process. Operatives work through the actual Kier permit using current Kier documentation, rather than a generic template that requires mental translation on site.' },
  { module: 'Kier Company Policies and Procedures', detail: 'Kier-specific H&S policies, reporting chains, and site protocols as they apply to utility avoidance. Delegates are tested on the correct Kier procedure, not a generic industry framework.' },
  { module: 'Lessons Learned from Kier Incidents', detail: 'Strike and near-miss events drawn from within the Kier business. Delegates discuss what went wrong, why it went wrong, and what the correct procedure would have looked like.' },
  { module: 'CAT Manager Data Analysis', detail: 'Operatives work through CAT Manager data from Kier\'s fleet. They learn to identify what the data shows about equipment usage patterns, missed Genny deployment, and individual operative behaviour.' },
  { module: 'USAG Form Completion', detail: 'Strike investigation using the USAG (Utility Strike Analysis Group) form. Delegates complete the form using realistic scenarios drawn from the Kier environment.' },
  { module: 'Practical Peer Assessment', detail: 'Afternoon practical session where operatives coach and assess each other on equipment operation. Trainer observes and scores. Delegates who can assess each other\'s technique in the field are more effective than those who have only been assessed by a trainer.' },
];

export default function CaseStudyKier() {
  return (
    <>
      <InnerPageHero
        eyebrow="Case Study"
        image="CAT4-and-Genny-43"
        alt="Kier Group cable avoidance training case study with Sygma Solutions"
        headline="Kier Group: Bespoke Utility Avoidance Refresher"
        sub="How Sygma built a 1-day refresher programme around Kier's own systems, policies, and incident data."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Bespoke Training', href: '/bespoke-training' },
          { label: 'Kier Group', href: '/case-studies/kier-group' },
        ]}
      />

      {/* Summary panel */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: 'Client', value: 'Kier Group' },
              { label: 'Programme', value: '1-Day Bespoke Utility Avoidance Refresher' },
              { label: 'Audience', value: 'Operatives (prior 2-day foundation required)' },
              { label: 'Format', value: 'Classroom + practical, on-site or at Sygma centres' },
              { label: 'Key elements', value: 'Kier permit, company policies, CAT Manager data, strike investigation, peer assessment' },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-background p-4">
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-80 md:h-[400px] overflow-hidden">
        <Image src="Safe-Dig-01" width={1200} height={800} alt="Kier Group safe digging training operations" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-center" />
      </div>

      {/* The Brief */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">The Brief</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">The Brief from Kier Group</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Kier Group is one of the UK's leading infrastructure, construction, and services businesses. With large numbers of operatives working on sites where buried utilities are a constant presence, Kier's H&S and L&D teams needed more than a standard refresher course.</p>
            <p>Standard utility avoidance refresher programmes teach operatives to use a CAT and Genny correctly and to follow HSG47 principles. But Kier's site operatives already know how to use the equipment. What they needed was a refresher programme that spoke to their specific environment: Kier's permit to dig system, Kier's company policies, lessons learned from strikes that had happened within the Kier business, and how to get the most from the CAT Manager data that Kier's safety team monitors across the fleet.</p>
            <p>Kier required a programme that assumed prior competency, built for an operative who has already attended the 2-day foundation course, and delivered it in a single day, incorporating practical coaching and peer assessment.</p>
          </div>
        </div>
      </section>

      {/* What Sygma Designed */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">What Sygma Designed</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground">What Sygma Designed</h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">Sygma Solutions worked with Kier's L&D and H&S teams to design a 1-day bespoke refresher programme built specifically for Kier operatives. The programme is structured in two halves: a morning classroom session focused on Kier-specific policies, procedures, and data analysis, followed by an afternoon practical coaching and peer assessment block.</p>

          <div className="overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3 text-left font-bold text-foreground w-1/3">Module</th>
                  <th className="px-5 py-3 text-left font-bold text-foreground">Detail</th>
                </tr>
              </thead>
              <tbody>
                {programme.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-semibold text-foreground align-top">{row.module}</td>
                    <td className="px-5 py-4 text-muted-foreground align-top">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Prerequisite:</span> This programme is designed for operatives who have already completed the 2-day foundation utility avoidance course. It is not suitable as a standalone programme for operatives with no prior training. Kier and Sygma agreed this prerequisite at programme design stage to ensure the refresher delivers value rather than retreading basic content.
          </div>
        </div>
      </section>

      {/* Image Grid - Training in Action */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            <Image src="CAT4-and-Genny-01" width={1200} height={800} alt="Kier Group CAT and Genny training with operatives" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
            <Image src="CAT4-and-Genny-02" width={1200} height={800} alt="Kier Group delegates practising CAT and Genny equipment operation" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
            <Image src="Safe-Dig-02" width={1200} height={800} alt="Kier Group safe digging practical assessment session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full rounded-lg object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">How It Works</p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-foreground">How It Works in Practice</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>The programme can be delivered at Kier's own facilities, at a Kier site, or at Sygma's Wigan Training Centre. Delivery location is agreed in advance based on which practical assessment environment is most appropriate for the delegate group.</p>
            <p>Delegate groups are kept to a size that allows meaningful peer coaching in the afternoon session. The morning classroom session is more flexible on numbers.</p>
            <p>All delegates complete Sygma's QR-code feedback form at the end of the day. Trainer scores are not visible until the following working day, ensuring delegates give honest feedback without social pressure. Kier's L&D and H&S team receives a full group report.</p>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="grid grid-cols-3 gap-3 h-52 md:h-64">
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-50" width={1200} height={800} alt="Kier Group utility avoidance field training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="Safe-Dig-11" width={1200} height={800} alt="Practical safe digging assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="overflow-hidden rounded-lg">
          <Image src="CAT4-and-Genny-40" width={1200} height={800} alt="Cable detection equipment in bespoke training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      {/* Outcomes */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">Outcomes</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground">Key Outcomes for Kier Group</h2>
          <p className="mb-8 text-muted-foreground">The Kier bespoke programme delivers outcomes that a generic refresher course cannot match.</p>
          <div className="overflow-x-auto rounded-xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-3 text-left font-bold text-foreground w-2/5">Outcome</th>
                  <th className="px-5 py-3 text-left font-bold text-foreground">How the Programme Delivers It</th>
                </tr>
              </thead>
              <tbody>
                {outcomes.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="px-5 py-4 font-semibold text-foreground align-top">{row.outcome}</td>
                    <td className="px-5 py-4 text-muted-foreground align-top">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground">Want a Programme Built Around Your Organisation?</h2>
          <p className="mb-8 text-muted-foreground leading-relaxed">The Kier programme is one example of how Sygma designs bespoke training around a client's specific requirements. If you have similar needs, company-specific procedures, CAT Manager integration, or management-level training built around your risk profile, we can build the same for your organisation.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact#enquiry-form" className="rounded-lg bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow hover:opacity-90 transition-opacity">
              Get in Touch
            </Link>
            <Link href="/bespoke-training" className="rounded-lg border border-border px-7 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-accent">Also See</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Severn Trent Water Case Study', desc: '2-day manager training with company-specific policies and strike investigation.', href: '/case-studies/severn-trent-water' },
              { label: 'OSCA On-Site Competency Assessment', desc: 'GPS-stamped, photo-verified competency evidence for operatives.', href: '/osca' },
              { label: 'Bespoke Training', desc: 'How Sygma designs custom training programmes for organisations.', href: '/bespoke-training' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-lg border border-border bg-background p-4 hover:border-primary transition-colors">
                <p className="mb-1 text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}