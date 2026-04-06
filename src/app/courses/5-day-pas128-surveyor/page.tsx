import Link from 'next/link';
import { Metadata } from 'next';
import InnerPageHero from '@/components/InnerPageHero';
import { CheckCircle } from 'lucide-react';
import { courseSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema';

const faqs = [{q: "What is the maximum number of delegates per 5 Day course?",a: "Maximum 8 delegates per course. The small group size allows every delegate to complete a practical assessment during the course and benefit from one-to-one coaching throughout."},{q: "Does Sygma supply the locating equipment?",a: "Sygma carries a stock of EM locators and GPR equipment. We strongly recommend you bring your own equipment for the course wherever possible, so delegates practise with the tools they will use on site. Equipment hire rates are available on request."},{q: "Is there a resit option if a delegate does not pass the written exam?",a: "Yes. If a delegate does not achieve the pass mark in their initial attempt, they are entitled to one resit. The resit is normally arranged within 4-6 weeks and is conducted as an open-book assessment. Contact Sygma after the course to discuss resit arrangements."},{q: "Can the course be delivered in-house at our premises?",a: "Yes. The 5 Day PAS128 Surveyor Course is regularly delivered at company premises nationwide. You need a meeting space suitable for up to 8 delegates, outdoor practical area with buried services, and STATS utility plans. Contact the bookings team to arrange in-house delivery."},{q: "What does the practical assessment cover?",a: "The practical assessment is conducted on a real utility area and assesses each delegate's ability to locate buried services using EM locating equipment and GPR in a range of scenarios. The assessor rates competency against PAS128 B methodology (EM and GPR), and marks are recorded as part of the official course result."},{q: "Is PAS128 knowledge tested?",a: "Yes. The written knowledge paper includes questions on PAS128 survey types D, C, B and A, detection methods, deliverables, and other aspects of the PAS128 standard. The exam takes approximately 2.5 hours and must be completed under formal exam conditions."}];

export const metadata: Metadata = {
  title: '5-Day PAS128 Surveyor Course | Sygma Solutions',
  description: 'Intensive PAS128 surveyor training: PAS128 D, C, B, EM locating, GPR, written exam and practical assessments. The UK\'s most comprehensive utility surveyor course.',
  canonical: 'https://sygma-solutions.vercel.app/courses/5-day-pas128-surveyor',
  openGraph: {
    title: '5-Day PAS128 Surveyor Course | Sygma Solutions',
    description: 'Intensive PAS128 surveyor training: PAS128 D, C, B, EM locating, GPR, written exam and practical assessments.',
    url: 'https://sygma-solutions.vercel.app/courses/5-day-pas128-surveyor',
    type: 'website'
  }
};

export default function Pas128Surveyor() {
  return (
    <>
      <InnerPageHero
        eyebrow="Utility Mapping"
        headline="5-Day PAS128 Surveyor Course: Intensive Practical and Theoretical Training"
        sub="The UK's most comprehensive PAS128 surveyor training course. Five days covering PAS128 types D, C and B, advanced EM locating, GPR theory and practical, written exam and individual practical assessments on real buried services. Delivered by working surveyors, not generalists."
        images={[
          "/images/courses/MALA-GPR-05.webp",
          "/images/courses/MALA-GPR-14.webp",
          "/images/courses/Advanced-EM-04.webp",
        ]}
        alts={[
          "5 Day PAS128 surveyor course - practical session",
          "PAS128 surveyor training with GPR equipment",
          "Advanced EM locating methods taught in the 5 day course",
        ]}
        breadcrumbs={[
          { label: "Training", to: "/training/utility-mapping-surveying" },
          { label: "5 Day PAS128 Surveyor" },
        ]}
      />

      {/* Info bar */}
      <section className="bg-muted/40 border-b border-border py-5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            ["Duration", "5 consecutive days, 09:00 to ~16:30"],
            ["Max Delegates", "8 per course"],
            ["Assessment", "Written exam and practical test"],
            ["Qualification", "Sygma certification on completion"],
            ["Delivery", "In-house or open courses"],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{label}</p>
              <p className="text-sm font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-photo strip */}
      <section className="container mx-auto px-6 md:px-8 pb-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-3">
          <img loading="lazy" src="/images/courses/MALA-GPR-06.webp" alt="5 Day PAS128 surveyor course - practical session" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="/images/courses/Advanced-EM-08.webp" alt="PAS128 surveyor training - hands-on assessment" className="rounded-lg object-cover aspect-[4/3] w-full" />
          <img loading="lazy" src="/images/courses/MALA-GPR-32.webp" alt="5 Day PAS128 surveyor course - electromagnetic survey practical" className="rounded-lg object-cover aspect-[4/3] w-full" />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: courseSchema({
            name: "5-Day PAS128 Surveyor Course",
            description: "Intensive five-day PAS128 surveyor training covering PAS128 D, C and B survey types with EM locating and GPR. Written exam and practical assessments included.",
            url: "/courses/5-day-pas128-surveyor",
            credential: "5-Day PAS128 Surveyor Certificate",
            duration: "5 days",
            mode: ["onsite"]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: faqPageSchema(faqs)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbSchema([
            { label: "Training", to: "/training/utility-mapping-surveying" },
            { label: "5 Day PAS128 Surveyor" }
          ])
        }}
      />

      {/* About section and rest of content... */}
      <section className="container mx-auto px-6 md:px-8 py-14 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The Five-Day Programme</p>
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-foreground">Intensive Training From PAS128 Theory Through to Practical Surveying</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>The 5 Day PAS128 Surveyor Course is the comprehensive entry point to professional utility surveying. In five intensive days, delegates progress from PAS128 theory (types D, C and B, detection methods, and deliverables) through advanced EM locating techniques to GPR theory and practical operation, all completed with a written knowledge exam and individual practical assessments on real buried services.</p>
              <p>The course is structured to build knowledge day by day, with practical hands-on learning from day 2 onwards. Sygma's approach to delivery is based on what actually happens on the ground, not what exam papers say should happen. Every delegate who completes the course leaves with practical, tested competency in locating buried services using electromagnetic and GPR methods.</p>
              <p>The written exam and practical assessments are conducted under formal conditions, giving delegates a recognized record of achievement. Many delegates use the 5 Day course as a foundation before progressing into the wider TSA and ICES Utility Mapping Programme or towards ProQual Level 3, Level 4 or Level 5 qualifications.</p>
            </div>
          </div>
          <div className="bg-muted/30 rounded-xl border border-border p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">What the Course Covers</p>
            {[
              ["Day 1", "PAS128 standard and types D, C, B. Site reconnaissance (visual survey). Plans and preparation."],
              ["Day 2", "EM locating theory. Equipment operation. Introduction to practical site work."],
              ["Day 3", "Advanced EM techniques. Transmitter operation. Signal interpretation. Practical assessment preparation."],
              ["Day 4", "GPR theory. GPR equipment operation. GPR practical application on site."],
              ["Day 5", "Written exam (morning). Practical assessment (afternoon). Results and feedback."],
            ].map(([day, content]) => (
              <div key={day} className="flex gap-3 py-3 border-b border-border last:border-0">
                <span className="font-bold text-accent shrink-0 w-16">{day}</span>
                <span className="text-sm text-muted-foreground">{content}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}