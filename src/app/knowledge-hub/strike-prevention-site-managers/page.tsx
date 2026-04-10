import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import Image from 'next/image';

const faqs = [
  {
    q: 'What is the most common cause of utility strikes?',
    a: 'Failure to carry out a proper pre-excavation survey. In most cases, the operative either did not use a cable avoidance tool at all, used it incorrectly, or did not follow the correct sequence of locating modes. Training and on-site supervision are the most effective controls.',
  },
  {
    q: 'Do all site operatives need cable avoidance training?',
    a: 'Anyone who excavates or breaks ground near underground services should hold a current cable avoidance qualification such as EUSR CAT1 or ProQual CAT1. Even operatives who are not digging should understand the risks if they are working in the vicinity of excavation work.',
  },
  {
    q: 'How often should cable avoidance training be renewed?',
    a: 'EUSR CAT1 accreditation is valid for three years. However, competency can drift well before the card expires. Regular on-site checks or OSCA assessments between renewal dates help catch and correct bad habits early.',
  },
  {
    q: 'What should I do if a utility strike occurs on my site?',
    a: 'Stop work immediately. Evacuate the area if there is any risk of gas, electricity, or other hazards. Contact the relevant network operator and your principal contractor. Do not attempt to repair the damage yourself. Record the incident and preserve the scene for investigation.',
  },
];

export const metadata: Metadata = {
  title: 'Cable Strike Prevention for Site Managers | Sygma',
  description: 'Practical guidance for site managers on preventing underground utility strikes. Covers pre-dig procedures, training, supervision, and response.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/strike-prevention-site-managers' },
  openGraph: {
    title: 'Utility Strike Prevention: A Guide for Site Managers',
    description: 'Practical guidance for site managers on preventing underground utility strikes. Covers pre-dig procedures, training requirements, supervision, and what to do when things go wrong.',
    url: 'https://sygma-solutions.com/knowledge-hub/strike-prevention-site-managers',
    type: 'article',
    images: [
      {
        url: 'Safe-Dig-01',
        width: 1200,
        height: 630,
        alt: 'Utility strike prevention',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StrikePreventionSiteManagers() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'Strike Prevention for Site Managers' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'Utility Strike Prevention: A Guide for Site Managers',
            description: 'Practical guidance for site managers on preventing underground utility strikes. Covers pre-dig procedures, training requirements, supervision, and what to do when things go wrong.',
            url: '/knowledge-hub/strike-prevention-site-managers',
            datePublished: '2026-03-10',
            image: 'Safe-Dig-01',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema(breadcrumbs),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: faqPageSchema(faqs),
        }}
      />

      <InnerPageHero
        image="Safe-Dig-01"
        eyebrow="Knowledge Hub"
        headline="Utility Strike Prevention: A Guide for Site Managers"
        sub="Most utility strikes are preventable. This guide covers the practical steps site managers can take to protect their teams, their programme, and their reputation."
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
              Underground utility strikes remain one of the most common and most preventable incidents on UK construction and infrastructure sites. A single strike can shut down a site for days, injure or kill an operative, disrupt services to thousands of homes, and result in significant financial penalties and reputational damage. As a site manager, you are the person best placed to make sure your team follows the right procedures every time they break ground.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Why Strikes Still Happen</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The technology exists to locate most underground services before excavation begins. Cable avoidance tools (CAT and Genny) are standard issue on almost every site. Yet strikes continue to happen, and the root causes are almost always human rather than technical. The most common contributing factors are poor pre-dig survey technique, time pressure overriding safe working procedures, lack of training or expired training, and failure to consult service plans before starting work.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              As a site manager, you cannot control every swing of every excavator bucket. But you can control the systems, culture, and checks that make it far less likely that someone will dig without surveying properly.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Before Any Excavation Starts</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Every excavation on your site should follow a consistent pre-dig procedure. This is not optional and it is not something that can be skipped when the programme is under pressure. The basics are straightforward: obtain up-to-date service plans from all relevant utility companies, ensure the operative carrying out the survey holds a current cable avoidance qualification (EUSR CAT1 or ProQual CAT1 as a minimum), and confirm the operative has the right equipment and knows how to use it in all four locating modes.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Service plans should be available on site before digging begins. They are not a formality. Plans show the approximate routes of buried services, and while they are never perfectly accurate, they give the operative a starting point for their scan. An operative working without plans is working blind.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Safe-Dig-03" width={1200} height={800} alt="Strike prevention training for site managers" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-09" width={1200} height={800} alt="Utility locator equipment demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Safe-Dig-09" width={1200} height={800} alt="Safe digging procedures near buried services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Training Is Not a Tick-Box Exercise</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Holding a current card is the minimum. It confirms the operative passed a course, but it does not confirm what they are doing on site today. Competency can drift significantly over the three-year life of an EUSR or ProQual card, particularly if the operative does not use the equipment regularly or has picked up shortcuts from colleagues.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Site managers should watch how operatives actually carry out their surveys, not just check that the card is in date. Are they connecting the Genny first? Are they scanning in all four modes? Are they marking out what they find? If the answer to any of these is no, the training has not translated into practice and you have a gap that needs closing.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <Link href="/osca" className="text-primary hover:underline">OSCA (On-Site Competency Assessment)</Link> is designed to address exactly this problem. It provides a GPS-stamped, independent assessment of what your operatives are actually doing in the field, not just what they demonstrated in a training centre.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Supervision and Culture</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The biggest single risk factor for utility strikes is time pressure. When the programme is tight and the team is under pressure to deliver, corners get cut. The pre-dig survey is the first thing to suffer because it is the easiest thing to skip. Nobody sees you skip it until something goes wrong.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              As a site manager, your job is to make it clear that the survey is non-negotiable. That means building survey time into the programme, not treating it as something that happens on top of productive work. It means calling out shortcuts when you see them, even when the team is behind schedule. And it means creating a culture where operatives feel able to stop and say "I need to scan this properly" without being told to hurry up.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Equipment Checks</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Cable avoidance tools need to be in good working order. A CAT with a flat battery, a damaged Genny, or a unit that has not been calibrated is not fit for purpose. Site managers should ensure that equipment is checked before use each day and that any faults are reported and dealt with, not worked around. If the equipment is not working, the excavation does not start.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">When Things Go Wrong</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If a strike does happen, the priority is safety. Stop all work in the affected area immediately. If there is any possibility of a gas leak, exposed live electricity, or ruptured water main, evacuate the area and call the emergency services. Do not attempt to repair the damage or re-energise anything.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Once the immediate danger is dealt with, report the incident to the relevant network operator and your principal contractor. Preserve the scene and any evidence, including the service plans that were in use, the equipment settings, and the identity of the operative and supervisor. This information will be needed for the investigation and will help you understand what went wrong and how to prevent it happening again.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Building Strike Prevention Into Your Site</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The most effective approach to strike prevention is not a single intervention but a combination of properly trained operatives, current service plans, working equipment, visible supervision, and a culture that prioritises doing it right over doing it fast. None of these is complicated. All of them require consistent effort from site management.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If you want to go further, consider investing in <Link href="/contact" className="text-primary hover:underline">bespoke training</Link> that is tailored to your specific site risks, or using <Link href="/osca" className="text-primary hover:underline">OSCA</Link> to get an independent picture of your team's real-world competency.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-60" width={1200} height={800} alt="On-site cable avoidance assessment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Safe-Dig-01" width={1200} height={800} alt="Excavation safety management training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-45" width={1200} height={800} alt="Site managers reviewing utility avoidance procedures" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Frequently Asked Questions</h2>

            <div className="space-y-6 mt-6 mb-10">
              {faqs.map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-bold text-foreground mb-2">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/knowledge-hub/hsg47-explained" className="text-primary hover:underline">HSG47 Explained: What the Guidance Requires</Link></li>
                <li><Link href="/knowledge-hub/utility-strikes-first-20-metres" className="text-primary hover:underline">4 Behaviours That Can Cause Cable Strikes on Site</Link></li>
                <li><Link href="/knowledge-hub/genny-first-methodology" className="text-primary hover:underline">Why You Should Always Connect the Genny First</Link></li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
              <h3 className="font-black text-foreground mb-3">Improve Your Team's Competency</h3>
              <p className="text-muted-foreground mb-4">
                Sygma delivers EUSR CAT1, ProQual CAT1, and bespoke cable avoidance training across the UK. We also offer OSCA on-site assessments to verify real-world competency. Get in touch to discuss what your site needs.
              </p>
              <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Sygma &rsaquo;</Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
