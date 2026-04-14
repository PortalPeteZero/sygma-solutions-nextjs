import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Severn Trent Water | Manager Training Case Study | Sygma',
  description: 'How Sygma designed a 2-day management training and assessment programme built around Severn Trent Water\'s own policies.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/severn-trent-water-case-study' },
  openGraph: {
    title: 'Severn Trent Water: 2-Day Bespoke Manager Training',
    description: 'How Sygma designed a 2-day management training and assessment programme built around Severn Trent Water\'s own policies.',
    url: 'https://sygma-solutions.com/knowledge-hub/severn-trent-water-case-study',
    type: 'article',
    images: [
      {
        url: 'cat-44',
        width: 1200,
        height: 630,
        alt: 'Severn Trent Water bespoke manager training programme',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SevernTrentWaterCaseStudy() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'Severn Trent Water Case Study' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'Severn Trent Water: 2-Day Bespoke Manager Training',
            description: 'How Sygma designed a 2-day management training and assessment programme built around Severn Trent Water\'s own policies.',
            url: '/knowledge-hub/severn-trent-water-case-study',
            datePublished: '2026-01-15',
            image: 'cat-15',
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
        image="cat-78"
        alt="Severn Trent Water bespoke management training and assessment programme"
        eyebrow="Case Study"
        headline="Severn Trent Water: 2-Day Bespoke Manager Training"
        sub="How Sygma designed a management training and assessment programme built around Severn Trent Water's own policies, procedures, and compliance requirements."
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
              Severn Trent Water is one of the UK's largest water and wastewater companies. Their site managers and supervisors needed management-level utility avoidance training that went beyond standard operative courses. The programme had to include formal assessment, not just attendance, and be built around Severn Trent's own policies and procedures.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Brief from Severn Trent Water</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Severn Trent identified that their site managers and supervisors were making decisions about excavation work without having the management-level knowledge to do so safely. Standard cable avoidance courses train operatives on how to use equipment, but they do not address the management responsibilities: understanding policies, interpreting CAT Manager data, investigating strikes, and ensuring correct USAG form completion. Severn Trent needed a programme pitched at the management level with formal assessment to evidence competence.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Group sizes were to be kept to a maximum of 6 delegates to ensure meaningful discussion and individual assessment.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Sygma Designed</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma designed a 2-day programme with a flexible classroom and practical split. The programme covers five core modules, with the USAG form completion module formally assessed.
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
                  <tr><td className="px-4 py-3 text-muted-foreground">STW Policies and Procedures</td><td className="px-4 py-3 text-muted-foreground">Severn Trent Water's internal policies governing utility avoidance and safe excavation</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Management-Level Utility Avoidance</td><td className="px-4 py-3 text-muted-foreground">The management responsibilities that go beyond operative-level equipment use</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">CAT Manager Data Analysis</td><td className="px-4 py-3 text-muted-foreground">Interpreting CAT Manager data as a management and compliance tool</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Strike Investigation</td><td className="px-4 py-3 text-muted-foreground">How to investigate and learn from utility strike incidents</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">USAG Form Completion (Assessed)</td><td className="px-4 py-3 text-muted-foreground">Formally assessed completion of the Underground Services Avoidance Group form</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How It Works in Practice</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The 2-day programme has a flexible split between classroom and practical elements, which can be adjusted based on the needs of each cohort. Sessions can be delivered at Severn Trent Water facilities, on a managed site with buried services, or at Sygma's training centre in Wigan. Group sizes are capped at 6 delegates to allow for individual attention and meaningful assessment. Feedback is collected via QR-code survey at the end of the programme.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden">
                <Image src="cat-79" width={1200} height={900} alt="Severn Trent Water management training programme" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden">
                <Image src="cat-80" width={1200} height={900} alt="Excavation safety management assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden">
                <Image src="cat-81" width={1200} height={900} alt="Cable avoidance training for site managers" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
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
                  <tr><td className="px-4 py-3 text-muted-foreground">Policy-Aligned Competence</td><td className="px-4 py-3 text-muted-foreground">Managers trained on Severn Trent's own policies, not generic industry guidance</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Assessed, Not Just Attended</td><td className="px-4 py-3 text-muted-foreground">Formal assessment provides documented evidence of management-level understanding</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">CAT Manager as Management Tool</td><td className="px-4 py-3 text-muted-foreground">Managers understand how to use CAT Manager data for oversight and compliance</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Strike Investigation Capability</td><td className="px-4 py-3 text-muted-foreground">Managers can lead or contribute to strike investigations with structured methodology</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">USAG Compliance</td><td className="px-4 py-3 text-muted-foreground">Correct USAG form completion practised and formally assessed</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Small Group Quality</td><td className="px-4 py-3 text-muted-foreground">Maximum 6 delegates ensures individual attention and meaningful discussion</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
              <h3 className="font-bold text-foreground mb-2">Want a Programme Built Around Your Organisation?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                If your managers and supervisors need training that reflects your own policies, procedures, and compliance requirements, Sygma can design a bespoke programme built around your organisation.
              </p>
              <Link href="/bespoke-training" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                Learn about bespoke training →
              </Link>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/knowledge-hub/kier-group-case-study" className="text-primary hover:underline">Kier Group: Bespoke Utility Avoidance Refresher</Link></li>
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
