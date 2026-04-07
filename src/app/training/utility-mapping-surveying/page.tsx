import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';

export const metadata: Metadata = {
  title: 'Utility Mapping & Survey Courses | PAS128 | Sygma',
  description: "Complete utility mapping and surveying training pathway. From PAS128 awareness to ProQual Level 6 Diploma, delivered by the UK's leading specialist provider.",
  alternates: { canonical: 'https://sygma-solutions.com/training/utility-mapping-surveying' },
  openGraph: {
    title: 'Utility Mapping & Survey Courses | PAS128 | Sygma',
    description: "Complete utility mapping and surveying training pathway. From PAS128 awareness to ProQual Level 6 Diploma, delivered by the UK's leading specialist provider.",
    url: 'https://sygma-solutions.com/training/utility-mapping-surveying',
    type: 'website',
  },
};

export default function UtilityMappingHub() {
  return (
    <>
      <InnerPageHero
        eyebrow="Utility Mapping"
        headline="Utility Mapping and Surveying Training: The Complete Career Pathway"
        sub="The UK's most complete PAS128 utility mapping training pathway. From introductory training courses through to a ProQual Level 6 Management Diploma: everything a utility mapping professional needs to locate buried services safely and build a credible, certified career."
        image="Utility-Mapping-03"
        breadcrumbs={[
          { label: 'Training', href: '/training' },
          { label: 'Utility Mapping & Surveying' },
        ]}
      />

      {/* Training Pathway Hub Content */}
      <section className="bg-muted/40 border-y border-border py-5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Complete Utility Mapping Training Pathway</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            From PAS128 awareness through to Level 6 Diploma. All courses delivered by the UK's leading utility surveying specialist provider.
          </p>
        </div>
      </section>

      {/* Training Modules Overview */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Training Pathway</p>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Utility Mapping Courses at All Levels</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'PAS128 Awareness',
              href: '/courses/pas128-awareness',
              desc: 'Entry-level awareness of the PAS128 standard for those who commission, receive or act on utility surveys.',
            },
            {
              title: '5 Day PAS128 Surveyor Course',
              href: '/courses/5-day-pas128-surveyor',
              desc: 'Intensive foundation course covering Modules 1-3 with written exam and practical assessment.',
            },
            {
              title: 'GPR Training',
              href: '/courses/gpr-training',
              desc: 'Specialised Ground Penetrating Radar training for advanced geophysical surveying.',
            },
            {
              title: 'TSA and ICES Utility Mapping Programme',
              href: '/courses/tsa-ices-utility-mapping',
              desc: 'The most comprehensive utility surveyor training. Seven modules covering all ICES competencies.',
            },
            {
              title: 'ProQual Level 3 Certificate',
              href: '/courses/level-3-certificate',
              desc: 'First nationally recognised qualification on the utility mapping pathway.',
            },
            {
              title: 'ProQual Level 4 Diploma',
              href: '/courses/level-4-diploma',
              desc: 'Higher-level qualification for experienced utility surveyors.',
            },
            {
              title: 'ProQual Level 5 Diploma',
              href: '/courses/level-5-diploma',
              desc: 'Advanced professional qualification with full ICES competency coverage.',
            },
            {
              title: 'ProQual Level 6 Management Diploma',
              href: '/courses/level-6-diploma',
              desc: 'Top-level qualification for utility mapping and surveying management professionals.',
            },
          ].map((course) => (
            <Link
              key={course.title}
              href={course.href}
              className="group bg-background rounded-xl border border-border p-6 hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{course.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Sygma */}
      <section className="bg-muted/20 py-14">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Why Sygma</p>
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-foreground">Why Train With Sygma?</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'TSA Approved', body: 'Approved training provider for TSA and ICES utility mapping courses.' },
              { title: 'Specialist Trainers', body: 'Ex-surveyors and equipment manufacturers, TAQA qualified.' },
              { title: 'Real Practical Assessment', body: 'Assessment on live sites with real buried services.' },
              { title: 'Independent', body: 'No equipment sales, no manufacturer relationships.' },
              { title: 'Flexible Delivery', body: 'Open courses or in-house delivery nationwide UK.' },
              { title: 'Career Pathway', body: 'Complete progression from awareness through Level 6 management.' },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 border-y border-border py-14">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-foreground">Start Your Utility Mapping Training</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore the full range of utility mapping and surveying courses, from introductory awareness through to advanced management qualifications.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
