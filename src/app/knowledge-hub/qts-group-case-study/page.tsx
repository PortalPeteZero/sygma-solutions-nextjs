import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'QTS Group | Rail Utility Training Case Study | Sygma',
  description: 'How Sygma designed a rail-specific CAT4 programme with surface laid cables module and ZSI Super User training for QTS Group.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/qts-group-case-study' },
  openGraph: {
    title: 'QTS Group: Rail-Specific CAT4 and Surface Laid Cables',
    description: 'How Sygma designed a rail-specific CAT4 programme with surface laid cables module and ZSI Super User training for QTS Group.',
    url: 'https://sygma-solutions.com/knowledge-hub/qts-group-case-study',
    type: 'article',
    images: [
      {
        url: 'CAT4-and-Genny-65',
        width: 1200,
        height: 630,
        alt: 'QTS Group rail-specific CAT4 training programme',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QtsGroupCaseStudy() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'QTS Group Case Study' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'QTS Group: Rail-Specific CAT4 and Surface Laid Cables',
            description: 'How Sygma designed a rail-specific CAT4 programme with surface laid cables module and ZSI Super User training for QTS Group.',
            url: '/knowledge-hub/qts-group-case-study',
            datePublished: '2026-01-15',
            image: 'CAT4-and-Genny-65',
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
        image="CAT4-and-Genny-65"
        alt="QTS Group rail-specific cable avoidance training with surface laid cables module"
        eyebrow="Case Study"
        headline="QTS Group: Rail-Specific CAT4 and Surface Laid Cables"
        sub="How Sygma designed a rail-specific programme incorporating QTS's own toolbox talk and ZSI Super User Coach delivery model."
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
              QTS Group is a major rail infrastructure contractor operating across the UK network. Rail environments present a specific utility risk that standard buried utility training does not address: surface laid cables. Sygma designed a bespoke programme that covers both conventional cable avoidance and the specialist risks unique to rail.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Brief from QTS Group</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              QTS Group approached Sygma because their operatives work in rail environments where surface laid cables are a significant and specific hazard. Standard cable avoidance courses focus on buried services detected using CAT and Genny equipment, but they do not cover the risks associated with cables running along the surface in rail corridors. QTS needed a programme that combined conventional CAT4/Genny4 training with a specialist surface laid cables module built around QTS's own toolbox talk (QTS/SS/2022).
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In addition, QTS wanted to develop internal capability through their ZSI Super User Coach model, enabling selected individuals to deliver ongoing refresher training within the organisation.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Sygma Designed</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma designed a 1-day bespoke programme covering nine modules. The programme includes conventional CAT4/Genny4 content alongside a dedicated surface laid cables specialist module. Assessment is by MCQ with a 70% pass mark. ZSI Super User Coach training is delivered separately as an additional programme.
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
                  <tr><td className="px-4 py-3 text-muted-foreground">Underground Services Overview</td><td className="px-4 py-3 text-muted-foreground">Types of buried and surface utility infrastructure in rail environments</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">HSG47 and Rail Context</td><td className="px-4 py-3 text-muted-foreground">How HSG47 guidance applies specifically to rail infrastructure work</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Plans Interpretation</td><td className="px-4 py-3 text-muted-foreground">Reading and interpreting utility plans in a rail corridor</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">CAT4 Modes and Operation</td><td className="px-4 py-3 text-muted-foreground">All four detection modes with focus on rail-specific signal behaviour</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Genny4 Signal Application</td><td className="px-4 py-3 text-muted-foreground">All signal application methods including direct connection, induction, and clamp</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Depth Estimation</td><td className="px-4 py-3 text-muted-foreground">Depth measurement technique, limitations, and interpretation</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Surface Laid Cables (QTS/SS/2022)</td><td className="px-4 py-3 text-muted-foreground">Specialist module built around QTS's own toolbox talk on surface laid cable risks</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Safe Digging Practices</td><td className="px-4 py-3 text-muted-foreground">Excavation safety, proximity zones, and hand digging requirements</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">MCQ Assessment</td><td className="px-4 py-3 text-muted-foreground">Multiple choice assessment with 70% pass mark</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How It Works in Practice</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sessions are limited to a maximum of 8 delegates. The training day runs from 9am to 3:30pm. Practical elements require access to a site with buried metallic utilities for live detection exercises. Each delegate needs their own CAT4, with at least one Genny4 available per group. Feedback is collected via QR-code survey at the end of the session.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-65" width={1200} height={800} alt="Rail-specific cable avoidance training for QTS Group" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-61" width={1200} height={800} alt="Practical cable avoidance assessment on site" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Safe-Dig-03" width={1200} height={800} alt="Safe digging practices near underground services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
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
                  <tr><td className="px-4 py-3 text-muted-foreground">Surface Laid Cable Competence</td><td className="px-4 py-3 text-muted-foreground">Operatives trained on the specific risks of surface laid cables in rail environments</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">QTS Toolbox Talk Embedded</td><td className="px-4 py-3 text-muted-foreground">QTS/SS/2022 integrated directly into the training programme</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Assessed Competence</td><td className="px-4 py-3 text-muted-foreground">MCQ assessment with 70% pass mark provides documented evidence of understanding</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Internal Coaching Capability</td><td className="px-4 py-3 text-muted-foreground">ZSI Super User Coaches trained to deliver ongoing refresher content within QTS</td></tr>
                  <tr><td className="px-4 py-3 text-muted-foreground">Rail-Specific Programme</td><td className="px-4 py-3 text-muted-foreground">Training designed for rail environments, not adapted from a generic course</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
              <h3 className="font-bold text-foreground mb-2">Want a Programme Built Around Your Organisation?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                If your team works in a specialist environment that standard training does not address, Sygma can design a programme around your specific risks, toolbox talks, and operational procedures.
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
