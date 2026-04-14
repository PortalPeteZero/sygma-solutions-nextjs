import { Metadata } from 'next';
import Link from 'next/link';
import InnerPageHero from '@/components/InnerPageHero';
import KnowledgeHubSidebar from '@/components/KnowledgeHubSidebar';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'CITB Funding for Utility Training | The 2026 Position | Sygma',
  description: 'How the CITB Employer Network model works, what it means for your training budget, and how Sygma can help you access it.',
  alternates: { canonical: 'https://sygma-solutions.com/knowledge-hub/citb-funding-utility-training' },
  openGraph: {
    title: 'CITB Funding for Utility Training: The 2026 Position',
    description: 'How the CITB Employer Network model works, what it means for your training budget, and how Sygma can help you access it.',
    url: 'https://sygma-solutions.com/knowledge-hub/citb-funding-utility-training',
    type: 'article',
    images: [
      {
        url: 'cat-38',
        width: 1200,
        height: 630,
        alt: 'CITB funding for utility avoidance training',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CitbFundingUtilityTraining() {
  const breadcrumbs = [
    { label: 'Knowledge Hub', to: '/knowledge-hub' },
    { label: 'CITB Funding for Utility Training' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleSchema({
            headline: 'CITB Funding for Utility Training: The 2026 Position',
            description: 'How the CITB Employer Network model works, what it means for your training budget, and how Sygma can help you access it.',
            url: '/knowledge-hub/citb-funding-utility-training',
            datePublished: '2026-03-15',
            image: 'cat-57',
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
        image="cat-13"
        alt="CITB funding for utility avoidance and cable avoidance training"
        eyebrow="Knowledge Hub"
        headline="CITB Funding for Utility Training: The 2026 Position"
        sub="How the CITB Employer Network model works, what it means for your training budget, and how Sygma can help you access it."
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
              If your organisation is registered with the CITB, you may be eligible for funding that reduces the cost of utility avoidance training. The CITB operates an Employer Network model that channels levy contributions back into training grants. This article explains how the system works, who qualifies, and how Sygma can help you access the funding available to you.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Is CITB Funding?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The Construction Industry Training Board (CITB) is a statutory body that collects a levy from construction employers and redistributes it as grants for training. The purpose is straightforward: to ensure that the construction industry invests in the skills and competence of its workforce. Employers who pay into the levy are entitled to claim grants back when their employees complete eligible training courses.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The CITB does not deliver training itself. It funds training delivered by Approved Training Organisations (ATOs) that meet the CITB's quality and content standards. Sygma is a CITB Approved Training Organisation, which means that eligible employers can claim grants for Sygma courses that fall within the CITB funding framework.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How the Employer Network Model Works</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The CITB Employer Network model is the mechanism through which funding decisions are made. Employer Networks are groups of construction employers who work together to identify the training priorities for their sector or region. These networks feed into the CITB's overall funding strategy, ensuring that grant money is directed towards the skills that the industry actually needs.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              For individual employers, the practical effect is that the CITB publishes a schedule of eligible courses and grant rates. When your employees complete an eligible course with an approved provider, you submit a grant claim to the CITB. The grant amount varies by course type and duration, but it can significantly offset the direct cost of training.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Who Is Eligible?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              To access CITB training grants, your organisation must be registered with the CITB as a levy-paying employer. Registration is based on your organisation's activities: if your business carries out construction work as defined by the Industrial Training Act, you are likely required to register and pay the levy. Once registered, you become eligible to claim grants for eligible training completed by your employees.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              If you are unsure whether your organisation is registered, or whether you are currently claiming the grants you are entitled to, the CITB website has a registration checker. Many employers pay the levy but do not claim grants, which means they are effectively leaving money on the table.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">What Training Is Eligible?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The CITB publishes a directory of eligible courses and their associated grant rates. Utility avoidance training, including cable avoidance (CAT and Genny) courses, falls within the scope of eligible training. However, not all courses from all providers qualify. The training must be delivered by a CITB Approved Training Organisation, and the course content must meet the CITB's standards for the relevant skills area.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma is a CITB ATO. Our courses that fall within the CITB framework are eligible for grant claims. When you book an eligible course with Sygma, we can confirm the grant value and provide the documentation you need to submit your claim.
            </p>

            <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden my-10">
              <div className="overflow-hidden">
                <Image src="cat-55" width={1200} height={900} alt="CITB approved cable avoidance training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden">
                <Image src="cat-56" width={1200} height={900} alt="Practical utility avoidance training session" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden">
                <Image src="cat-58" width={1200} height={900} alt="Safe excavation practices training" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">How to Access CITB Funding for Your Training</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              The process is straightforward. First, confirm that your organisation is registered with the CITB and is up to date with levy payments. Second, check that the course you want to book is eligible for a grant. Third, book the course with a CITB Approved Training Organisation. Fourth, after your employees complete the training, submit a grant claim to the CITB with the relevant course completion documentation.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma can help at every stage. When you enquire about a course, we will confirm whether it is CITB-eligible and what the current grant rate is. After the course, we provide the completion certificates and documentation you need for your claim. If you are new to claiming grants, we can walk you through the process.
            </p>

            <h2 className="text-2xl font-black text-foreground mb-4 mt-10">Which Sygma Courses Qualify?</h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Sygma delivers a range of utility avoidance and cable avoidance courses. Those that fall within the CITB framework are eligible for grant claims. The specific courses and grant values can change as the CITB updates its funding schedule, so we always recommend confirming eligibility at the time of booking. As a general guide, our EUSR and ProQual cable avoidance courses, safe digging courses, and plans and process training are typically within scope.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              If you are paying the CITB levy and not claiming grants for your training, you are paying twice: once through the levy and once for the training itself. Making sure you claim what you are entitled to is not optional. It is a basic part of managing your training budget effectively.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
              <h3 className="font-bold text-foreground mb-2">Ready to Book CITB-Eligible Training?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Contact Sygma to discuss your training requirements. We will confirm CITB eligibility, current grant rates, and help you with the documentation for your claim.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                Get in touch →
              </Link>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/accreditations" className="text-primary hover:underline">Sygma Accreditations and Approvals</Link></li>
                <li><Link href="/courses" className="text-primary hover:underline">View All Sygma Courses</Link></li>
                <li><Link href="/contact" className="text-primary hover:underline">Contact Sygma</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
