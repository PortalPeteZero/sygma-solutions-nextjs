import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'HSG47 Explained | Underground Services Guide | Sygma',
  description: 'What is HSG47 and what training does it require? HSE guidance for avoiding danger from underground services explained.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/hsg47-explained' },
  openGraph: {
    title: 'HSG47 Training: What HSG47 Requires and How Cable Avoidance Training Aligns',
    description: 'What is HSG47 and what training does it require? The HSE guidance for avoiding danger from underground services explained, with how cable avoidance training maps to its requirements.',
    url: 'https://sygma-solutions.com/knowledge-hub/hsg47-explained',
    type: 'article',
    images: [
      {
        url: 'dig-02',
        width: 1200,
        height: 630,
        alt: 'HSG47 safe digging practices',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Hsg47Explained() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'HSG47 Explained' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'HSG47 Training: What HSG47 Requires and How Cable Avoidance Training Aligns',
            description: 'What is HSG47 and what training does it require? The HSE guidance for avoiding danger from underground services explained, with how cable avoidance training maps to its requirements.',
            url: '/knowledge-hub/hsg47-explained',
            datePublished: '2026-03-09',
            image: 'dig-02',
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
        image="dig-01"
        alt="HSG47 safe digging practices explained with practical excavation guidance"
        eyebrow="Knowledge Hub"
        headline="HSG47 Training: What It Requires and How Training Aligns"
        sub="HSG47 is the principal guidance document for avoiding danger from underground services. This guide explains the key requirements and how cable avoidance training maps to them."
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
              HSG47, published by the Health and Safety Executive, is the principal guidance document for avoiding danger from underground services during ground works. Its full title is "Avoiding danger from underground services" and it applies to anyone who plans, manages, or carries out work that involves breaking ground. If your organisation excavates, you need to know what HSG47 says and what it expects of you.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What HSG47 Is (and What It Is Not)</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              HSG47 is not legislation. It is guidance published by the HSE to support compliance with the Health and Safety at Work Act 1974 and the Construction (Design and Management) Regulations 2015. Following HSG47 is not a legal requirement in the strictest sense, but it describes what the HSE considers to be good practice. If a utility strike occurs and the HSE investigates, one of the first things they will assess is whether the organisation followed the principles set out in HSG47. Not following it does not automatically mean a prosecution, but it significantly weakens any defence.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Who HSG47 Applies To</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              HSG47 applies to everyone in the chain of responsibility for ground works. This includes clients who commission work, designers who specify where work will take place, principal contractors who plan and manage the work, and the operatives who carry it out. It is not just a document for the person holding the excavator controls or the CAT. It applies equally to the supervisor who plans the work, the project manager who allocates resources, and the client who defines the scope.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">The Key Requirements</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              HSG47 sets out a clear sequence of steps that should be followed before, during, and after excavation. While the full document is detailed, the core requirements can be summarised in four areas.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Planning the Work</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Before any ground is broken, the organisation responsible must obtain up-to-date plans from all relevant asset owners. This means contacting the owners of electricity, gas, water, telecoms, and any other services that may be present in the area. HSG47 is clear that relying on a single source of plans, or using out-of-date records, is not acceptable. Plans must be current, and the information from all asset owners must be collated into a single picture of what is expected to be below the surface.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Locating Services</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              HSG47 states that plans alone are not sufficient and that cable locating equipment should be used to trace the routes of buried services on site. The guidance specifically references the use of a CAT and Genny, and it recommends using both passive and active (Genny) detection methods. This is an important point: HSG47 does not say that passive detection alone is adequate. It expects the Genny to be used as part of the survey process.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Safe Digging Practices</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Once services have been located and marked, HSG47 sets out how excavation should be carried out safely. This includes hand digging within defined proximity zones, the correct use of mechanical plant, and the precautions to take when working near different types of service. The guidance distinguishes between electricity cables, gas mains, water pipes, and telecoms infrastructure, each of which presents different risks and requires different precautions.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="dig-08" width={1200} height={800} alt="Safe digging near buried utilities" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="cat-36" width={1200} height={800} alt="CAT and Genny used for utility detection" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="dig-03" width={1200} height={800} alt="Hand digging within proximity zone" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3 mt-8">Competence</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              HSG47 requires that anyone who uses cable locating equipment is competent to do so. Competence means having the knowledge, skills, and experience to use the equipment correctly, interpret the results accurately, and make safe decisions based on what the equipment is telling them. The guidance does not specify a particular qualification, but it makes clear that training is expected and that competence must be maintained.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How Training Maps to HSG47</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Every cable avoidance course that Sygma delivers is structured around the principles in HSG47. Our courses cover plans interpretation, all four locating modes, all Genny signal application methods, signal interpretation, depth estimation, and safe digging practices. The assessment criteria in both our EUSR CAT1 and ProQual CAT1 courses map directly to the competence expectations set out in the guidance.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              For supervisors and managers who need to understand the planning and management requirements of HSG47 without the hands-on locator training, our CAT4 and HSG47 Awareness Online course covers the guidance in detail, including the responsibilities of each duty holder and the practical steps required to comply.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              HSG47 is not a box to tick. It is the baseline standard for safe excavation in the UK. If your organisation is not following it, you are exposed to both safety risk and regulatory risk. The starting point is making sure your people are trained, competent, and equipped to follow the process it describes.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="cat-40" width={1200} height={800} alt="Practical cable avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="dig-07" width={1200} height={800} alt="Excavation safety assessment session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden aspect-[4/3]">
                <Image src="cat-28" width={1200} height={800} alt="Team completing utility avoidance course" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/knowledge-hub/strike-prevention-site-managers" className="text-primary hover:underline">Utility Strike Prevention: A Guide for Site Managers</Link></li>
                <li><Link href="/knowledge-hub/utility-strikes-first-20-metres" className="text-primary hover:underline">4 Behaviours That Can Cause Cable Strikes on Site</Link></li>
              </ul>
            </div>

            <div className="bg-primary/5 border border-border rounded-xl p-6 mt-4">
              <h3 className="font-bold text-foreground mb-2">Related Courses</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/courses/cat4-hsg47-awareness-online" className="text-primary hover:underline">CAT4 and HSG47 Awareness Online</Link></li>
                <li><Link href="/courses/eus-cat1" className="text-primary hover:underline">EUSR CAT1 Cable Avoidance Training</Link></li>
                <li><Link href="/courses/proqualcat1-training" className="text-primary hover:underline">ProQual CAT1 Training</Link></li>
                <li><Link href="/courses/plans-and-process" className="text-primary hover:underline">Plans and Process Training</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
