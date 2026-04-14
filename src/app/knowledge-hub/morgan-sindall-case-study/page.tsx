import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Morgan Sindall | PAS128 Leadership Briefings | Sygma',
  description: 'How Sygma designed PAS128 utility survey training at the leadership level for Morgan Sindall\'s project management teams.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/morgan-sindall-case-study' },
  openGraph: {
    title: 'Morgan Sindall: PAS128 Leadership Briefings',
    description: 'How Sygma designed PAS128 utility survey training at the leadership level for Morgan Sindall\'s project management teams.',
    url: 'https://sygma-solutions.com/knowledge-hub/morgan-sindall-case-study',
    type: 'article',
    images: [
      {
        url: 'cat-43',
        width: 1200,
        height: 630,
        alt: 'Morgan Sindall PAS128 leadership training briefing',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MorganSindallCaseStudy() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'Morgan Sindall Case Study' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'Morgan Sindall: PAS128 Leadership Briefings',
            description: 'How Sygma designed PAS128 utility survey training at the leadership level for Morgan Sindall\'s project management teams.',
            url: '/knowledge-hub/morgan-sindall-case-study',
            datePublished: '2026-01-15',
            image: 'cat-28',
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
        image="cat-36"
        alt="Morgan Sindall PAS128 leadership briefing for project managers"
        eyebrow="Case Study"
        headline="Morgan Sindall: PAS128 Leadership Briefings"
        sub="How Sygma designed PAS128 utility survey training at the leadership level for Morgan Sindall's project management teams."
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
              Morgan Sindall is one of the UK's major construction and infrastructure companies. Their project managers needed to understand PAS128 well enough to specify, commission, and verify utility surveys on their projects. This was not operative-level training. It was leadership-level knowledge designed to reduce legal and commercial risk.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Brief from Morgan Sindall</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Morgan Sindall identified a gap at the project management level. Their PMs were commissioning utility surveys as part of standard project planning, but many did not fully understand what PAS128 required, what the different quality levels meant, or how to verify that a delivered survey actually met the specification. This created both legal exposure under CDM 2015 and commercial risk from surveys that did not provide the information needed to design and build safely.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Morgan Sindall needed training that was pitched at the right level. Not a hands-on surveying course, but a structured briefing that would give project managers the confidence to make informed decisions about utility surveys on their projects.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Sygma Designed</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma designed a PAS128 leadership briefing programme covering six core modules, delivered as a classroom session to small groups of 6 to 10 delegates. The programme is available as a half-day or full-day format depending on the depth required.
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
                  <tr><td className="px-4 py-3 text-muted-foreground">What Is PAS128</td><td className="px-4 py-3 text-muted-foreground">The purpose, scope, and structure of the specification</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Quality Levels (D/C/B/A)</td><td className="px-4 py-3 text-muted-foreground">What each quality level delivers and when each is appropriate</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Legal Duty of Care Under CDM</td><td className="px-4 py-3 text-muted-foreground">How PAS128 connects to CDM 2015 responsibilities for clients and principal designers</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">How to Specify Compliant Surveys</td><td className="px-4 py-3 text-muted-foreground">Writing specifications that result in the right survey being delivered</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">How to Verify Deliverables</td><td className="px-4 py-3 text-muted-foreground">Checking that survey outputs meet the specified quality level</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">PAS128 in Infrastructure Frameworks</td><td className="px-4 py-3 text-muted-foreground">How PAS128 integrates with major infrastructure procurement frameworks</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How It Works in Practice</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sessions are delivered in a classroom setting at Morgan Sindall offices or at Sygma's training centre. Group sizes are kept small, between 6 and 10 delegates, to allow for detailed discussion and scenario work. This is not operative-level training and does not include practical surveying elements. Delegate feedback is captured via QR-code surveys at the end of each session.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <Image src="cat-68" width={1200} height={900} alt="PAS128 leadership briefing for project managers" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <Image src="cat-69" width={1200} height={900} alt="Utility survey mapping and detection" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <Image src="cat-70" width={1200} height={900} alt="Team completing utility training course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
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
                  <tr><td className="px-4 py-3 text-muted-foreground">Informed Commissioning</td><td className="px-4 py-3 text-muted-foreground">Project managers can specify the correct PAS128 quality level for each project phase</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Reduced Legal Exposure</td><td className="px-4 py-3 text-muted-foreground">Teams understand their CDM duties in relation to underground services information</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Quality Verification</td><td className="px-4 py-3 text-muted-foreground">PMs can check survey deliverables against the specification before accepting them</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Commercial Protection</td><td className="px-4 py-3 text-muted-foreground">Reduces the risk of paying for surveys that do not deliver the required information</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Framework Alignment</td><td className="px-4 py-3 text-muted-foreground">Training content maps to the frameworks Morgan Sindall operates under</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
              <h3 className="font-bold text-foreground mb-2">Want a Programme Built Around Your Organisation?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                If your project managers or leadership team need to understand PAS128 in the context of your own projects and frameworks, Sygma can design a briefing programme tailored to your requirements.
              </p>
              <Link href="/bespoke-training" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                Learn about bespoke training →
              </Link>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/knowledge-hub/severn-trent-water-case-study" className="text-primary hover:underline">Severn Trent Water: 2-Day Bespoke Manager Training</Link></li>
                <li><Link href="/bespoke-training" className="text-primary hover:underline">When Does Your Organisation Need a Bespoke Programme?</Link></li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
              <h3 className="font-bold text-foreground mb-2">Related Courses</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses/pas128-awareness" className="text-primary hover:underline">PAS128 Awareness Training</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
