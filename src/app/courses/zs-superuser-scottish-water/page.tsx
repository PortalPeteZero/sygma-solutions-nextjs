import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';

const faqs = [
  {
    q: 'What is the difference between the ZS Superuser and the EUS Superuser?',
    a: 'The structure, duration, assessments, and standard of both cat and genny training courses are identical. The ZS Superuser is mapped specifically to the Scottish Water Zero Strike Initiative (ZSI) framework. It uses ZSI documentation, Scottish Water-specific examples and case studies, and the ZSI Operators\' Guide. The EUS Superuser is built around the EUS (EUSR) framework and is relevant across all clients and sectors. If your team works in the Scottish Water supply chain, the ZS Superuser training course is the right course.',
  },
  {
    q: 'Do delegates need to hold EUS CAT1 and CAT2 before attending?',
    a: 'Yes. Delegates must hold both EUSR category EUS CAT1 and EUS Safe Dig CAT2 certification before attending the ZS Superuser cat and genny training course. These are the minimum training requirements and prerequisite qualifications set by the Scottish Water Zero Strike Initiative for anyone working on a ZSI site.',
  },
  {
    q: 'Does the course cover the ZSI Operators\' Guide?',
    a: 'Yes. The ZSI Operators\' Guide is embedded into the delivery, covering planning, preparation, documentation, survey and marking, breaking ground, and reinstatement to the ZSI standard. Delegates leave understanding their responsibilities under the guide and how to apply them when coaching their teams.',
  },
  {
    q: 'What is the advanced locator equipment standard?',
    a: 'The advanced locator is the minimum cat and genny equipment standard required by Scottish Water\'s Zero Strike Initiative. It means all cable avoidance tools and signal generators used on ZSI sites must meet advanced locator specifications or higher. This requirement is covered in the training course and built into the practical training on locating underground services.',
  },
  {
    q: 'How many delegates can attend?',
    a: 'A maximum of 6 delegates per cat and genny training course. The small group size allows for individual practical assessments and meaningful coaching sessions where each delegate can develop practical skills and complete their assessments. Contact Sygma if you have a larger team. Additional course dates can be arranged.',
  },
  {
    q: 'Can Sygma deliver this course at our premises?',
    a: 'Yes. All ZS Superuser cat and genny training courses are delivered in-house at your premises. You need a room for up to 6 delegates and a suitable outdoor site area with buried services and underground utilities for the practical sessions. Sygma can advise on site suitability and equipment requirements.',
  },
  {
    q: 'What cat and genny equipment do delegates need for the course?',
    a: 'Delegates should bring their own cat and genny equipment that meets the advanced locator standard required by Scottish Water\'s Zero Strike Initiative. This means cable avoidance tools (CAT) and signal generators (genny) at advanced specification or higher. If your genny equipment does not meet the ZSI standard, contact Sygma before the training course to discuss options. The course covers how to operate cat and genny in all modes including passive modes, different frequencies, and genny-first methodology.',
  },
  {
    q: 'How does the ZS Superuser support safe excavation and compliance?',
    a: 'The ZS Superuser cat and genny training directly supports safe excavation by ensuring delegates can locate utility services and underground services before any excavation work begins. The course covers current legislation including HSG47 guidance for avoiding danger from underground services, risk assessment planning, and best practice for reducing utility strikes. Certification confirms the delegate is competent to locate buried services and coach others in safe excavation compliance within the Scottish Water supply chain.',
  },
  {
    q: 'What is the EUSR category requirement for the ZS Superuser?',
    a: 'The EUSR category prerequisite for the ZS Superuser is EUS CAT1 (cable avoidance training) and EUS CAT2 Safe Dig (safe excavation). These qualifications from the awarding body confirm the delegate has the foundation knowledge and skills to operate cat and genny equipment safely. The ZS Superuser builds on this with advanced genny training, utility strike investigation, coaching competency, and assessment skills specific to Scottish Water\'s Zero Strike Initiative.',
  },
  {
    q: 'Does the certification have an expiry date?',
    a: 'The ZS Superuser certification issued by Sygma is a recognised record of completing the training course and all associated assessments. While Sygma certification does not carry a fixed expiry date, best practice and Scottish Water\'s own requirements mean that refresher cat and genny training should be conducted regularly to maintain competency. EUSR category registrations carry their own expiry date and require re-assessment to maintain your qualification as a leading provider of safe utility location services.',
  },
];

export const metadata: Metadata = {
  title: 'ZS Superuser Cat and Genny | Scottish Water | Sygma',
  description: 'Super user cat and genny training for the Scottish Water supply chain. Advanced location, strike investigation and coaching assessment.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/zs-superuser-scottish-water' },
  openGraph: {
    title: 'ZS Superuser Cat and Genny | Scottish Water | Sygma',
    description: 'Super user cat and genny training for the Scottish Water supply chain. Advanced location, strike investigation and coaching assessment.',
    url: 'https://sygma-solutions.com/courses/zs-superuser-scottish-water',
    type: 'website',
  },
};

export default function ZsSuperuserScottishWater() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'ZS Superuser Cat and Genny Training',
            description: 'Super user cat and genny training course for Scottish Water supply chain. Advanced location, strike investigation and coaching assessment for locating utility services and underground utilities.',
            url: 'https://sygma-solutions.com/courses/zs-superuser-scottish-water',
            provider: {
              '@type': 'Organization',
              name: 'Sygma Solutions',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Training',
                item: 'https://sygma-solutions.com/training/cable-location-avoidance',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'ZS Superuser: Scottish Water',
              },
            ],
          }),
        }}
      />

      <InnerPageHero
        eyebrow="Utility Avoidance"
        headline="ZS Superuser: Advanced Location, Strike Investigation, and Coaching for Scottish Water Supply Chain"
        sub="Sygma's ZS Superuser course is the ZSI-specific super user cat and genny training programme, built for teams working within the Scottish Water supply chain. This advanced training course follows the same structure and standard as the EUS Superuser, mapped to the Zero Strike Initiative framework for locating underground services and buried utilities."
        image="New-Landscape-03"
        alt="Scottish Water ZS Superuser cable avoidance training course"
        breadcrumbs={[
          { label: 'Training', href: '/training/cable-location-avoidance' },
          { label: 'ZS Superuser: Scottish Water' },
        ]}
      />

      {/* Key USP stats */}
      <section className="bg-foreground py-6">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">21 Years</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">One Specialism</p>
              <p className="text-xs text-white/60">Cat and genny training for underground utility location is all we do.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">70-80%</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Increase in Genny Usage</p>
              <p className="text-xs text-white/60">Measured through CAT Manager data downloads after Sygma genny training.</p>
            </div>
            <div className="bg-white/5 rounded-xl border border-accent/30 p-5 text-center">
              <p className="text-3xl font-black text-accent mb-1">Proven</p>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">Strike Reduction Record</p>
              <p className="text-xs text-white/60">Clients report measurable reductions in utility strikes after completing cat and genny training courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Enquire About the ZS Superuser Cat and Genny Training Course</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            2 days, maximum 6 delegates. In-house cat and genny training at your site anywhere in the UK. Built specifically for Scottish Water supply chain teams operating under the Zero Strike Initiative to locate utility services and underground utilities safely.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/courses/eus-superuser"
              className="inline-flex items-center px-6 py-3 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View EUS Superuser (Non-Scottish Water)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
