import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'cable-avoidance-course-comparison',

  metadata: {
    title: 'EUS CAT1 vs ProQual CAT1 vs CAT1 Plus | Sygma Solutions',
    description: 'Compare EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus cable avoidance courses. Find the right CAT and Genny qualification for your team.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/cable-avoidance-course-comparison' },
    openGraph: {
      title: 'EUS CAT1 vs ProQual CAT1 vs CAT1 Plus | Sygma Solutions',
      description: 'Compare EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus cable avoidance courses. Find the right CAT and Genny qualification for your team.',
      url: 'https://sygma-solutions.com/courses/cable-avoidance-course-comparison',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'EUS CAT1 vs ProQual CAT1 vs ProQual CAT1 Plus: Which Cable Avoidance Course Is Right for Your Team?',
    sub: 'Three qualifications. One comparison. Sygma delivers all three. Use this page to understand the difference and choose what your team actually needs.',
    image: 'CAT4-and-Genny-02',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Course Comparison' },
    ],
  },

  schemas: {
    course: {
      name: 'EUS CAT1 vs ProQual CAT1 vs ProQual CAT1 Plus',
      description: 'Comparison of EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus cable avoidance training courses and qualifications.',
      url: '/courses/cable-avoidance-course-comparison',
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Course Comparison' },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-03', alt: 'Sygma course comparison - practical session' },
        { src: 'Safe-Dig-03', alt: 'Sygma course comparison - hands-on assessment' },
        { src: 'Utility-Mapping-02', alt: 'Sygma course comparison - on-site delivery' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'CAT4-and-Genny-45', alt: 'Sygma course comparison - live training environment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-10', alt: 'Cable avoidance training course comparison' },
        { src: 'CAT4-and-Genny-52', alt: 'Utility locating qualification assessment' },
        { src: 'Safe-Dig-04', alt: 'Comparing CAT training qualifications' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-41', alt: 'ProQual vs EUS training comparison' },
        { src: 'CAT4-and-Genny-53', alt: 'Hands-on training qualification assessment' },
        { src: 'Safe-Dig-04', alt: 'Utility avoidance course practical training' },
      ],
    },
  ],

  whoFor: {
    eyebrow: 'Who This Is For',
    title: 'Who Is This Page For?',
    items: [
      {
        title: 'Procurement managers, H&S leads, and site managers',
        desc: 'Who need to decide which cable avoidance qualification to specify for their operatives.',
      },
      {
        title: 'Teams needing EUS CAT1',
        desc: 'When your contract or client requires EUSR card holders.',
      },
      {
        title: 'Organisations seeking higher standards',
        desc: 'Who want operatives accredited to externally audited industry standards.',
      },
      {
        title: 'High-risk environments',
        desc: 'Where thorough signal application technique is critical.',
      },
    ],
  },

  about: {
    eyebrow: 'Context',
    title: 'What This Comparison Covers',
    paragraphs: [
      'The EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus are the three main cable avoidance qualifications you are likely to encounter when specifying training for operatives who locate and avoid buried services.',
      'All three relate to the use of a Cable Avoidance Tool (CAT) and Signal Generator (Genny) on site, but they are not equivalent qualifications. The ProQual qualifications are significantly more thorough. They cover more assessment areas, include topics that EUS does not assess at all, and use written theory papers rather than multiple choice questions. The differences are substantial and worth understanding before you specify training for your team.',
      'The EUS CAT1 is the most widely held qualification and is recognised across the utility sector. The ProQual qualifications are accredited to a higher standard and externally audited and are awarded by ProQual Accreditations, a dedicated accreditation arm of ProQual AB Limited.',
      'Important: this comparison is based on the published minimum specifications for each qualification. How well a provider delivers to those specifications varies. Sygma delivers above the minimum specification for every qualification it offers. The ProQual CAT1 is the only qualification where we do not need to add content, because we helped develop it to the standard the industry actually requires.',
    ],
  },

  courseContent: {
    theory: {
      heading: 'Not All CAT1 Courses Are Created Equal',
      subheading: 'Why ProQual CAT1 Is a Significantly Higher Standard',
      items: [
        'The difference between EUS CAT1 and ProQual CAT1 is not just about how competency is assessed. It is about what is assessed. ProQual CAT1 covers assessment areas that EUS does not include at all.',
        'Topics EUS does not cover: CDM Regulations, risk assessment monitoring and reporting, and Safe Systems of Work aligned with HASAWA, HSG47, and GS6. These are absent from the EUS specification entirely.',
        'Topics EUS covers only by MCQ (insufficient): Legislation including HSAWA, NRSWA, HSG47, GS6, and PAS128. The features and need for a safe system of work. Risks of over-reliance on utility plans. Specific locator features including shallow cable alert, Avoidance mode, depth estimation, and calibration. Data-enabled locator use. A multiple choice question tests whether someone can pick the right answer from a list. It does not demonstrate that they understand the subject or can apply it on site. ProQual assesses all of these through written theory papers, and in many cases requires a practical demonstration as well.',
        'ProQual CAT1 is assessed to an individually mapped criterion standard. Each candidate is assessed against every criterion individually, and the assessor documents whether each one was met. That record is externally verified by a ProQual Accreditations auditor. If a candidate does not meet every criterion, they do not pass.',
        'ProQual CAT1 Plus goes further still. The two-day format allows comprehensive hands-on assessment of techniques that the standard CAT1 course covers in theory only, including capacitance, signal clamp, and the full Genny First survey methodology.',
        'In 21 years of delivering utility avoidance training, Sygma has had to add content to every qualification on the market to make it fit for the real demands of the industry. Every single one. The ProQual CAT1 is the first qualification we developed in partnership with an awarding body that covers everything needed from a course in this subject. It is the only qualification we do not have to supplement, because the syllabus was built to the standard the industry actually needs.',
        'If your procurement framework gives you a choice between EUS CAT1 and ProQual CAT1, the ProQual qualification delivers a measurably higher standard of assessed competence. It covers more, it assesses deeper, and it documents everything to a standard that can be externally verified.',
      ],
    },
    practical: {
      heading: 'The Comparison Tables',
      subheading: 'Side-by-side comparison of EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus',
      items: [
        'EUS CAT1 column reflects the published EUS Category 1 minimum specification. The EUS standard itself states: the specification does not preclude employers and providers from adding to the specification in their own training programmes. Sygma Solutions has always done so. ProQual columns reflect the published ProQual specification as delivered by Sygma Solutions Ltd.',
      ],
    },
  },

  faqs: [
    {
      q: 'Can my team hold both EUS CAT1 and ProQual CAT1?',
      a: 'Yes. They are separate qualifications issued by different bodies. An operative can hold both. In practice, most clients who move to ProQual CAT1 do so as a direct upgrade; their team completes ProQual CAT1 instead of renewing their EUS CAT1. Both are valid for three years.',
    },
    {
      q: 'Is ProQual CAT1 accepted by the same principal contractors as EUS CAT1?',
      a: 'This varies by contractor and procurement framework. EUS CAT1 remains the more widely mandated qualification across the utility sector. ProQual CAT1 is accepted by a growing number of principal contractors and is often specified alongside or in place of EUS CAT1 by organisations that require a higher assessment standard. If your contract specifies EUS CAT1 by name, speak to your client before substituting. Sygma can advise based on your sector and client base.',
    },
    {
      q: 'What does ProQual CAT1 Plus add that standard ProQual CAT1 does not?',
      a: 'ProQual CAT1 Plus is a two-day qualification. The additional day covers: comprehensive signal clamp and capacitance technique in hands-on practical assessment (not theory only), the full Genny First survey methodology as a formally assessed criterion, expanded knowledge of PAS128, permit to dig, and multi-frequency transmitter operation, and optional elements covering Sonde location and GPR awareness. The CAT1 Plus is the most advanced cable avoidance qualification available in the UK.',
    },
    {
      q: 'Is ProQual CAT1 an Ofqual-regulated qualification?',
      a: 'No. ProQual CAT1, CAT1 Plus and CAT2 are issued by ProQual Accreditations, a dedicated accreditation arm of ProQual AB Limited. They are externally audited industry accreditations. They are not listed on the Ofqual national qualifications register. The EUS CAT1 is also not an Ofqual-regulated qualification. Neither qualification is an RQF-listed award.',
    },
    {
      q: 'How long are these qualifications valid?',
      a: 'All three are valid for three years. Renewal requires re-assessment, not simply a refresher day.',
    },
    {
      q: 'Can Sygma deliver the EUS CAT1 and ProQual CAT1 on the same day or back-to-back?',
      a: 'Yes. Sygma delivers all three qualifications (EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus) to your premises, UK-wide. For teams that want to upgrade from EUS CAT1 to ProQual CAT1, both can be scheduled as part of a planned training programme. Contact us to discuss your requirements.',
    },
    {
      q: 'What is the "Genny First" methodology in ProQual CAT1 Plus?',
      a: 'Genny First is the principle that operatives should apply the signal transmitter to every available utility connection point before switching to passive induction. It maximises the opportunity to apply a targeted, distinguishable signal to specific utilities, reducing the risk of ambiguous results from induction alone. ProQual CAT1 Plus assessment criterion PP3.3 requires candidates to "conduct a survey using the transmitter first and exhaust all transmitter connection opportunities before moving to induction." This is the only cable avoidance qualification in the UK with this principle formally embedded in its assessed criteria. Sygma helped write this standard.',
    },
  ],

  cta: {
    title: 'Not Sure Which Option Is Right for You?',
    description: 'Sygma delivers all three qualifications to your premises, UK-wide. If you are not sure which qualification to specify, call us or send an enquiry and we will advise based on your client requirements, procurement framework and the work your team carries out.',
    primaryLabel: 'Request a Quote',
    primaryHref: '/contact',
    secondaryLabel: 'Call Us',
    secondaryHref: 'tel:+442039718252',
  },
};
