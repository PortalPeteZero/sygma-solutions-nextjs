import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import Image from 'next/image';

const faqs = [
  {
    q: 'Can I use an NPORS card instead of an EUSR card on a utility contract?',
    a: 'Only if the client or network operator accepts it. Most major utility network operators specify EUSR registration. Check with your principal contractor before assuming NPORS will be accepted.',
  },
  {
    q: 'Is one qualification harder than the other?',
    a: 'The practical content is similar. Both assess safe use of the CAT and Genny. The assessment format may differ between providers, but the core competency requirement is comparable.',
  },
  {
    q: 'Do I need to retrain if I switch from NPORS to EUSR?',
    a: 'Yes. They are separate qualifications on separate registers. You would need to complete the EUS CAT1 course and assessment to obtain an EUSR card, regardless of whether you already hold NPORS.',
  },
  {
    q: 'Can Sygma deliver NPORS cable avoidance training?',
    a: 'Sygma specialises in EUS and ProQual qualifications. If your client requires EUSR registration or you want an Ofqual-regulated qualification, we can help. Contact us to discuss your specific requirements.',
  },
];

export const metadata: Metadata = {
  title: 'NPORS vs EUSR | Which Qualification to Choose | Sygma',
  description: 'NPORS and EUSR both offer cable avoidance qualifications but serve different purposes. This guide explains the differences and how to choose.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/npors-vs-eusr' },
  openGraph: {
    title: 'NPORS vs EUSR Cable Avoidance: Which Qualification Do You Need?',
    description: 'NPORS and EUSR both offer cable avoidance qualifications but they serve different purposes. This guide explains the differences, who accepts each one, and how to choose.',
    url: 'https://sygma-solutions.com/knowledge-hub/npors-vs-eusr',
    type: 'article',
    images: [
      {
        url: 'CAT4-and-Genny-52',
        width: 1200,
        height: 630,
        alt: 'NPORS versus EUSR qualification',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NporsVsEusr() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'NPORS vs EUSR Cable Avoidance' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'NPORS vs EUSR Cable Avoidance: Which Qualification Do You Need?',
            description: 'NPORS and EUSR both offer cable avoidance qualifications but they serve different purposes. This guide explains the differences, who accepts each one, and how to choose.',
            url: '/knowledge-hub/npors-vs-eusr',
            datePublished: '2026-03-10',
            image: 'CAT4-and-Genny-52',
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
        image="CAT4-and-Genny-61"
        alt="NPORS versus EUSR cable avoidance training accreditation comparison"
        eyebrow="Knowledge Hub"
        headline="NPORS vs EUSR Cable Avoidance"
        sub="Two different cable avoidance qualifications, two different registers. This guide explains what each one covers, who accepts it, and which one is right for your team."
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
              If you manage operatives who work near underground services, you will have come across two cable avoidance qualifications: NPORS and EUSR (sometimes written as EUS). Both involve training on cable avoidance tools (CAT and Genny), and both result in a card that proves the operative has been assessed. But they are not the same qualification, they sit on different registers, and different clients accept different ones. This guide sets out the key differences so you can make the right choice.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Is EUSR?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              EUSR stands for Energy and Utility Skills Register. It is maintained by Energy and Utility Skills (EUS), the sector skills body for the UK energy and utilities industry. The relevant qualification for cable avoidance is EUS CAT1, which covers the safe use of cable avoidance tools (CAT and Genny) in all four locating modes: Power, Radio, Genny, and Avoidance.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              EUS CAT1 is a one-day course that includes theory, practical training, and an assessment. On successful completion, the operative is registered on the EUSR database and issued a card valid for three years. Employers and clients can verify the operative's status online via the EUSR register.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Is NPORS?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              NPORS stands for National Plant Operators Registration Scheme. It is an independent registration body that covers a wide range of plant and equipment competency categories. The relevant cable avoidance category is NPORS Cable Avoidance Tool (CAT and Genny), which covers similar ground to EUS CAT1 in terms of safe use of the equipment.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              NPORS assessments can be carried out as a standalone test of competency (a Traditional card) or through a training and assessment route (a Trained Operator card). The NPORS card is also valid for a set period and the operative's status can be checked on the NPORS register.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-06" width={1200} height={800} alt="Cable avoidance equipment in use during training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-52" width={1200} height={800} alt="Practical utility detection demonstration" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Safe-Dig-04" width={1200} height={800} alt="Safe excavation near underground services" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Key Differences</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The core practical content is similar. Both qualifications assess whether an operative can use a CAT and Genny safely to locate underground services before excavation. The differences sit around the qualification framework, the register, and who recognises each one.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Industry alignment.</strong> EUSR is specifically designed for the energy and utilities sector. The EUS register is the standard database that most major utility companies, network operators, and their contractors use to verify operative competency. If you work on contracts for gas, electric, water, or telecoms network operators, EUS CAT1 is almost certainly what your client requires.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Broader construction.</strong> NPORS is widely used across the construction sector for plant and equipment competency. If your operatives work primarily in general construction rather than utility-specific contracts, an NPORS cable avoidance card may be sufficient and may align better with the other NPORS categories your team already holds.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>CSCS alignment.</strong> NPORS cards can be linked to CSCS (Construction Skills Certification Scheme) through the NPORS CSCS logo card route. This can be useful if your operatives need a single card that covers multiple plant categories alongside cable avoidance.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Register checks.</strong> Each qualification sits on its own register. Clients who specify EUSR will check the EUSR register. Clients who accept NPORS will check the NPORS register. Holding one does not appear on the other.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Which One Should You Choose?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The answer depends on your client requirements. Start by checking what your principal contractor or network operator specifies. In the utility sector, EUS CAT1 is the most commonly required qualification by a significant margin. Major network operators and their Tier 1 contractors typically require EUSR registration as a minimum for anyone working near underground services on their projects.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If you work across both utility and general construction contracts, you may find it practical to hold both. Some operatives carry an EUSR card for utility work and an NPORS card for construction sites where NPORS is the accepted standard.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If you are unsure, speak to your client or principal contractor before booking. Getting the wrong qualification means your operative holds a valid card that the specific client does not recognise, which is a wasted day and a wasted budget.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What About ProQual CAT1?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              There is a third option worth considering. <Link href="/courses/proqualcat1-training" className="text-primary hover:underline">ProQual CAT1</Link> is an externally verified, ProQual-accredited qualification that goes beyond what either EUS or NPORS require. It is awarded by ProQual Accreditations and uses a rigorous criteria-based competency model rather than a percentage pass mark. Many clients accept it in place of, or alongside, EUS CAT1. If you want the most thorough assessment of your operative's cable avoidance competency, ProQual CAT1 is worth looking at.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-65" width={1200} height={800} alt="Delegates using CAT and Genny equipment" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="CAT4-and-Genny-51" width={1200} height={800} alt="Utility avoidance assessment exercise" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="Safe-Dig-04" width={1200} height={800} alt="Team training on safe digging practices" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
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
                <li><Link href="/knowledge-hub/eusr-card-renewal" className="text-primary hover:underline">How to Renew Your EUSR Card</Link></li>
                <li><Link href="/knowledge-hub/eus-cat1-vs-proqual-cat1" className="text-primary hover:underline">EUS CAT1 vs ProQual CAT1: Which One Does Your Operative Need?</Link></li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
              <h3 className="font-black text-foreground mb-3">Need Help Choosing?</h3>
              <p className="text-muted-foreground mb-4">
                If you are not sure which qualification your team needs, get in touch. Sygma's trainers can advise on what your client requires and recommend the right course.
              </p>
              <Link href="/courses/eus-cat1" className="text-primary font-semibold hover:underline">View EUS CAT1 Course Details &rsaquo;</Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
