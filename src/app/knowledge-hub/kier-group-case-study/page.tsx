import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { cloudinaryOgImage } from '@/lib/metadata';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kier Group | Bespoke Utility Avoidance Refresher | Sygma',
  description: 'How Sygma built a 1-day bespoke utility avoidance refresher around Kier\'s own systems, policies, and incident data.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/kier-group-case-study' },
  openGraph: {
    title: 'Kier Group: Bespoke Utility Avoidance Refresher',
    description: 'How Sygma built a 1-day bespoke utility avoidance refresher around Kier\'s own systems, policies, and incident data.',
    url: 'https://sygma-solutions.com/knowledge-hub/kier-group-case-study',
    type: 'article',
    images: [cloudinaryOgImage('cat-11', 'Kier Group bespoke utility avoidance refresher training')],
  },
};

export default function KierGroupCaseStudy() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'Kier Group Case Study' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'Kier Group: Bespoke Utility Avoidance Refresher',
            description: 'How Sygma built a 1-day bespoke utility avoidance refresher around Kier\'s own systems, policies, and incident data.',
            url: '/knowledge-hub/kier-group-case-study',
            datePublished: '2026-01-15',
            image: 'cat-70',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema(breadcrumbs),
        }}
      />

      <InnerPageHero
        image="cat-89"
        alt="Kier Group bespoke utility avoidance refresher training with Sygma"
        eyebrow="Case Study"
        headline="Kier Group: Bespoke Utility Avoidance Refresher"
        sub="How Sygma designed a 1-day refresher programme built around Kier's own permit system, company policies, and real incident data."
        breadcrumbs={breadcrumbs}
      />

      <div className="lg:hidden bg-background pt-6 pb-2">
        <div className="container mx-auto px-6 md:px-8">
          <Link href="/knowledge-hub?filter=articles" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors">
            ← Back to Articles
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
              Kier is one of the UK's leading infrastructure businesses. Their operatives already knew how to use cable avoidance equipment. What they needed was something different: a refresher programme that went beyond generic training and addressed Kier's own systems, policies, and lessons learned from real incidents on their sites.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Brief from Kier Group</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Kier approached Sygma with a specific challenge. Their operatives held valid cable avoidance qualifications, but the standard refresher courses available in the market were too generic. Kier wanted a programme that would reinforce the fundamentals while embedding their own company-specific processes into the training. This included their permit to dig system, internal policies on utility avoidance, lessons learned from actual utility strikes on Kier projects, and data from their CAT Manager system.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The goal was not to replace the foundation qualification but to build a refresher layer on top of it that would be immediately recognisable and relevant to Kier operatives. Every scenario, every example, and every process reference needed to come from Kier's own world.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Sygma Designed</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma designed a 1-day bespoke refresher programme structured around six modules, each tied directly to Kier's operational requirements. The morning session covers classroom-based content, and the afternoon moves into practical peer assessment.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left px-4 py-3 font-bold text-foreground">Module</th>
                    <th className="text-left px-4 py-3 font-bold text-foreground">Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 text-muted-foreground">Kier Permit to Dig System</td><td className="px-4 py-3 text-muted-foreground">How to correctly complete and apply the Kier permit process before breaking ground</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Kier Company Policies</td><td className="px-4 py-3 text-muted-foreground">Internal policies governing utility avoidance on Kier projects</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Lessons Learned from Kier Incidents</td><td className="px-4 py-3 text-muted-foreground">Real strike incidents from Kier sites, analysed for root cause and prevention</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">CAT Manager Data Analysis</td><td className="px-4 py-3 text-muted-foreground">Using CAT Manager as a live management tool, not just a logging device</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">USAG Form Completion</td><td className="px-4 py-3 text-muted-foreground">Correct completion of the Underground Services Avoidance Group form</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Practical Peer Assessment</td><td className="px-4 py-3 text-muted-foreground">Hands-on assessment where operatives evaluate each other's technique</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The prerequisite for this refresher is a completed 2-day foundation cable avoidance course. This ensures that every delegate attending the Kier-specific day already has the technical baseline, allowing the refresher to focus entirely on application within Kier's framework.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How It Works in Practice</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The programme can be delivered at Kier facilities, on Kier project sites, or at Sygma's training centre in Wigan. Delegate feedback is captured via QR-code surveys at the end of each session, providing Kier with immediate, measurable data on training effectiveness and areas for further development.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <Image src="cat-66" width={1200} height={900} alt="Bespoke utility avoidance training for Kier Group" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <Image src="cat-14" width={1200} height={900} alt="CAT and Genny practical assessment session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <Image src="cat-77" width={1200} height={900} alt="Safe digging practices on infrastructure site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Key Outcomes</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left px-4 py-3 font-bold text-foreground">Outcome</th>
                    <th className="text-left px-4 py-3 font-bold text-foreground">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-3 text-muted-foreground">Kier Permit Applied Correctly</td><td className="px-4 py-3 text-muted-foreground">Operatives can correctly complete and apply Kier's permit to dig process</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Real Incidents Drive Behaviour Change</td><td className="px-4 py-3 text-muted-foreground">Lessons from actual Kier strikes create more impact than hypothetical examples</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">CAT Manager as a Live Tool</td><td className="px-4 py-3 text-muted-foreground">Operatives understand CAT Manager as a management and compliance tool, not just a data logger</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">USAG Embedded</td><td className="px-4 py-3 text-muted-foreground">Correct USAG form completion is practised and assessed during the session</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Peer Coaching Multiplier</td><td className="px-4 py-3 text-muted-foreground">Operatives learn to assess and coach each other, extending the training effect beyond the classroom</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Honest Feedback Loop</td><td className="px-4 py-3 text-muted-foreground">QR-code feedback gives Kier immediate, unfiltered data on training effectiveness</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
              <h3 className="font-bold text-foreground mb-2">Want a Programme Built Around Your Organisation?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                If your team needs training that reflects your own systems, policies, and risk profile, Sygma can design a bespoke programme. We work with your data, your processes, and your people.
              </p>
              <Link href="/bespoke-training" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                Learn about bespoke training →
              </Link>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/knowledge-hub/severn-trent-water-case-study" className="text-primary hover:underline">Severn Trent Water: 2-Day Bespoke Manager Training</Link></li>
                <li><Link href="/osca" className="text-primary hover:underline">OSCA: The Case for On-Site Competency Assessment</Link></li>
                <li><Link href="/bespoke-training" className="text-primary hover:underline">When Does Your Organisation Need a Bespoke Programme?</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
