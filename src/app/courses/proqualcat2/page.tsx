import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import Link from 'next/link';
import InnerPageHero from "@/components/InnerPageHero";
import { courseSchema, faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metadata } from 'next';

const faqs = [
  {
    q: "How many criteria does ProQual CAT2 cover?",
    a: "ProQual CAT2 covers 24 individual theory criteria (T1-T24) and 15 individual practical criteria across four assessment stages (P1.1, P1.2, P2.1-P2.5, P3.1-P3.5, P4.1-P4.3). Every criterion is assessed independently. There is no aggregated pass mark that allows a weak area to be masked by strong performance elsewhere. Completing all criteria demonstrates competence across the full scope of safe excavation practice.",
  },
  {
    q: "Do we need to hold ProQual CAT1 before attending ProQual CAT2?",
    a: "ProQual CAT1 or EUSR CAT1 (or an equivalent utility locating qualification) is strongly recommended as a pre-requisite. There is no formal entry requirement, but ProQual CAT2 includes on-site locating work as part of the safe dig assessment. Delegates who are not comfortable operating a CAT and Genny locator will find the practical element difficult. The entry level for this training course assumes basic understanding of utility avoidance principles.",
  },
  {
    q: "Can ProQual CAT2 be delivered on the same day as ProQual CAT1?",
    a: "For most groups, combining CAT1 and CAT2 in a single day is not recommended due to the breadth of content and the on-site practical requirements of both qualifications. However, Sygma Solutions can design a two-day combined programme for groups who need both qualifications. Contact us to discuss your specific requirements.",
  },
  {
    q: "Is ProQual CAT2 better than EUSR CAT2?",
    a: "Neither is universally better. The right qualification depends on the competence framework your organisation uses. ProQual tends to be preferred in regulated sectors where independent certification matters. EUSR is widely recognised across utility companies and private contractors. Both meet BS 8475:2015 standard. Discuss with your training provider which suits your team\u2019s needs.",
  },
  {
    q: "What practical assessment is involved?",
    a: "ProQual CAT2 includes an on-site practical assessment that covers safe digging technique, hazard identification, and CAT/Genny operation. Delegates must demonstrate competence across multiple real-world scenarios. The practical element runs concurrently with the theory delivery. You\u2019ll be assessed using the CAT and Genny in a controlled field setting.",
  },
  {
    q: "How long does ProQual CAT2 take?",
    a: "ProQual CAT2 is typically delivered as a two-day course (16 hours). This allows sufficient time for both theory and practical elements to be covered thoroughly without rushing. Some organisations may deliver it across three days with shorter daily sessions. Sygma Solutions can discuss flexible scheduling options.",
  },
  {
    q: "Is ProQual CAT2 suitable for supervisors and managers?",
    a: "Yes. ProQual CAT2 is designed for anyone involved in safe excavation work, including site supervisors, managers, and ground workers. The breadth of criteria (24 theory, 15 practical) ensures comprehensive coverage of safe practice across all roles. Supervisors particularly benefit from the assessment planning and hazard management criteria.",
  },
  {
    q: "Can we run ProQual CAT2 in-house at our organisation?",
    a: "Only approved training providers can deliver ProQual qualifications. Sygma Solutions is an approved provider and can deliver ProQual CAT2 at your site if you have suitable facilities (classroom space and an area safe for practical work with locating equipment). Contact us to discuss your requirements.",
  },
];

export const metadata: Metadata = {
  title: 'ProQual CAT2 | Safe Excavation Qualification',
  description: 'ProQual CAT2 safe excavation qualification. BS 8475:2015 certified. Two-day course covering 24 theory and 15 practical criteria. Book your training.',
  alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat2' },
  openGraph: {
    title: 'ProQual CAT2 | Safe Excavation Qualification',
    description: 'ProQual CAT2 safe excavation qualification. BS 8475:2015 certified. Two-day course covering 24 theory and 15 practical criteria. Book your training.',
    url: 'https://sygma-solutions.com/courses/proqualcat2',
    siteName: 'Sygma Solutions',
    type: 'website',
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ProQualCat2Page() {
  const course = {
    title: "ProQual CAT2 (Safe Excavation & Hazard Management)",
    tagline:
      "The independent certification for safe excavation in the UK. Covers 24 theory criteria and 15 practical assessment points across four stages.",
    description:
      "ProQual CAT2 is a comprehensive two-day qualification covering safe excavation practice, utility avoidance, and hazard management. It meets the BS 8475:2015 standard for independent certification. The course includes both theory and on-site practical assessment, ensuring delegates are truly competent to plan and manage safe dig operations.",
    about:
      "ProQual CAT2 is one of the UK\u2019s most comprehensive safe excavation qualifications. It goes deeper than the entry-level CAT1, covering advanced hazard identification, safe dig planning, and utility company liaison. Every criterion is assessed independently - there is no aggregate pass mark that allows weaker areas to be masked by strong performance elsewhere.",
    highlights: [
      "24 individual theory criteria assessed (T1-T24)",
      "15 individual practical criteria across four assessment stages",
      "On-site practical assessment included",
      "Independent certification to BS 8475:2015",
      "Recognised by utility companies and regulators",
      "Two-day delivery (16 hours)",
      "Covers safe dig planning and supervision",
    ],
    pricing: "Contact us for a tailored quote",
    duration: "2 days (16 hours)",
    level: "Advanced",
    standard: "BS 8475:2015",
    ctaText: "Book Now",
    ctaLink: "/contact",
    image: "https://images.lovable.art/7e9b9e0d-5c0d-4b5b-8c2e-3f8d4a6c9b1a",
  };

  const schemaData = courseSchema({
    name: course.title,
    description: course.description,
    url: "/courses/proqualcat2",
  });

  const faqSchemaData = faqPageSchema(faqs);
  const breadcrumbs = breadcrumbSchema([
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: course.title },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchemaData }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbs }} />
      <InnerPageHero
        headline={course.title}
        sub={course.tagline}
        image={course.image}
        alt="ProQual CAT2 safe excavation training with practical digging techniques"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: course.title },
        ]}
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <div className="text-2xl font-bold text-primary">24</div>
              <div>
                <h3 className="font-semibold">Theory Criteria</h3>
                <p className="text-sm text-muted-foreground">
                  Individual T1-T24 assessment points
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl font-bold text-primary">15</div>
              <div>
                <h3 className="font-semibold">Practical Criteria</h3>
                <p className="text-sm text-muted-foreground">
                  Four assessment stages P1-P4
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="text-2xl font-bold text-primary">2</div>
              <div>
                <h3 className="font-semibold">Days</h3>
                <p className="text-sm text-muted-foreground">
                  16 hours of comprehensive training
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-sm max-w-none mb-12">
            <h2>{course.about}</h2>
            <p>{course.description}</p>
          </div>

          <div className="bg-light p-8 rounded-lg mb-12">
            <h3 className="text-xl font-semibold mb-6">What You\u2019ll Learn</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {course.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">&#x2713;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Course Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold">Duration</dt>
                  <dd className="text-muted-foreground">{course.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Level</dt>
                  <dd className="text-muted-foreground">{course.level}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Standard</dt>
                  <dd className="text-muted-foreground">{course.standard}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Pricing</dt>
                  <dd className="text-muted-foreground">{course.pricing}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Why ProQual CAT2?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Independent Certification:</strong> Recognised
                  certification body, not tied to any single utility company
                </li>
                <li>
                  <strong>Comprehensive Assessment:</strong> 39 individual
                  criteria ensure genuine competence across all areas
                </li>
                <li>
                  <strong>On-Site Practical:</strong> Real-world assessment in
                  a controlled field setting
                </li>
                <li>
                  <strong>Career Advancement:</strong> Highly valued across
                  regulated sectors
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your Team?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              ProQual CAT2 certification demonstrates genuine competence in safe
              excavation. Sygma Solutions delivers this advanced qualification
              with experienced instructors and flexible scheduling.
            </p>
            <Link
              href={course.ctaLink}
              className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-light transition"
            >
              {course.ctaText}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Related ProQual Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "ProQual CAT1",
                desc: "Entry-level safe excavation. Ideal foundation before CAT2.",
                link: "/courses/proqualcat1-training",
              },
              {
                title: "Utility Avoidance Hub",
                desc: "Browse all utility avoidance and location training courses.",
                link: "/training/cable-location-avoidance",
              },
              {
                title: "Cable Avoidance",
                desc: "Specialist training in cable identification and safe practice.",
                link: "/courses/cable-avoidance-training",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.link}
                className="bg-light p-6 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
