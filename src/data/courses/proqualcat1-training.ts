import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const faqs = [
  {
    q: 'What is the difference between ProQual CAT1 and EUS CAT1?',
    a: 'They are not equivalent qualifications. ProQual CAT1 is significantly more thorough. It covers topics that EUS does not assess at all, including CDM Regulations, risk assessment monitoring and reporting, and Safe Systems of Work aligned with HASAWA, HSG47, and GS6. Where EUS relies on multiple choice questions, ProQual uses written theory papers that require candidates to demonstrate understanding in their own words. ProQual also requires both theory and practical assessment across most criteria, whereas EUS covers many areas through MCQ alone with no practical demonstration. In 21 years, Sygma has had to add content to every qualification on the market to make it fit for industry. The ProQual CAT1 is the only one we do not have to add anything to, because it covers everything needed. If your industry standard is a lower-level qualification, ProQual CAT1 will be several steps up from what your team is used to.',
  },
  {
    q: 'What is the CITB funding status?',
    a: 'Sygma is a CITB-approved training organisation, and this course is CITB-listed. If your organisation is registered with CITB and paying the levy, training can be grant-funded. Funding eligibility is based on your business type, headcount and levy contribution. Contact CITB directly to check your eligibility and current funding rates. Sygma will help you submit the training claim.',
  },
  {
    q: 'Why does ProQual CAT1 take 2 days?',
    a: 'ProQual\'s content requirements are significantly more extensive than other qualifications. The standard 1-day format covers the core cable avoidance methodology and equipment operation. ProQual adds CDM Regulations assessment, formal risk assessment, detailed Safe Systems of Work documentation (HASAWA and HSG47 context), compliance with GS6, and an additional set of theory questions that test the depth of understanding in a second written paper. A 2-day course allows delegates to learn it properly, practice it on site, and demonstrate competence on both the standard CAT and Genny content and on the regulatory requirements. One day is simply not enough time to do it justice.',
  },
  {
    q: 'I already have EUS CAT1 or EUSR CAT1. Can I upgrade to ProQual CAT1?',
    a: 'Yes. Delegates who hold a current EUS or EUSR CAT1 certificate can take a 1-day top-up course. This covers the additional theory content (CDM, risk assessment, Safe Systems of Work) and the second written paper, plus any gaps in your practical skills. You will then be able to sit the full ProQual CAT1 assessment.',
  },
  {
    q: 'What is the ProQual CAT1 Plus format?',
    a: 'This is a 2-day course with additional time for deeper dive into the regulatory context and risk assessment methodology, plus an extended practical session. It is designed for supervisors, health and safety managers, or trainers who need to understand not just the how but the why behind Safe Systems of Work. You will leave the course with the knowledge to assess the adequacy of your team\'s locating practices and to coach others.',
  },
  {
    q: 'Can the course be delivered at my site?',
    a: 'Yes. Site delivery is standard. The practical component is designed to be delivered on your site using your utility layout, soil types, and the services your team encounters daily. This means the training is applied immediately to your real working environment. If site delivery is not possible, Sygma\'s Wigan HQ is available as an alternative.',
  },
  {
    q: 'What if my team cannot commit to 2 days?',
    a: 'A 1-day in-house certified format is available. This covers the cable avoidance methodology, equipment operation, and practical assessment. It does not include the ProQual accreditation and its additional regulatory content. If you later need ProQual, the 1-day top-up (see above) gets you to the full qualification. Many organisations start with 1-day certified training and upgrade later if business requirements change.',
  },
  {
    q: 'What is the split-course option?',
    a: 'Theory delivered on day 1, then a 3-month gap, then practical and assessment on day 2. This allows your team to apply the theory on site between sessions, and the trainer can tune the second day specifically to the problems your team has encountered. It is also an option if you cannot release 8 people for 2 consecutive days. Feedback from clients who use this format is strong: the time between sessions helps the knowledge stick.',
  },
  {
    q: 'Do the candidates need their own equipment?',
    a: 'For the most practical benefit, yes. Ideally, each operative uses their own site equipment during the training so they learn to operate the specific CAT and Genny models they use daily. Sygma provides Radiodetection CAT4 and Genny4 as backup for those who do not have equipment on site. Any manufacturer\'s cable locator and signal generator is suitable for the training.',
  },
  {
    q: 'What about EUSR CAT1 accreditation?',
    a: 'A 1-day EUSR-accredited course is available. This is a lighter qualification than ProQual (no CDM, no formal Safe Systems of Work assessment) but is still well-respected and covers the full cable avoidance methodology. It is a popular choice for organisations whose clients specify EUSR accreditation and is frequently chosen by those seeking a comprehensive but shorter qualification.',
  },
  {
    q: 'Does the certification cover my whole team or just those on the training?',
    a: 'Certification is individual. Each person on the training receives their own certificate with their names and results on it. If you train 4 delegates, 4 people are certified. This is how the construction industry works: the certification sits with the person, not with the organisation. When someone leaves, the certification goes with them.',
  },
  {
    q: 'What if someone fails the assessment?',
    a: 'Sygma courses are designed for people to pass. The trainer will work through any areas of doubt during the 2 days. If someone does not reach the required standard on the written paper (70% for ProQual) or in the practical assessment, Sygma can provide support and allow a re-assessment, usually within a week at no additional cost. In 21 years, this rarely happens. The trainer knows their subject and will make sure delegates understand.',
  },
];

export const courseData: CoursePageData = {
  slug: 'proqual-cat1-training',

  metadata: {
    title: 'ProQual CAT1 Cable Locator Training | Sygma',
    description: 'ProQual CAT1 training -- comprehensive cable location and avoidance qualification. Proven track record reducing service strikes. Delivered nationwide with on-site practical assessment.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqual-cat1-training' },
    openGraph: {
      title: 'ProQual CAT1 Cable Locator Training | Sygma',
      description: 'ProQual CAT1 training -- comprehensive cable location and avoidance qualification. Proven track record reducing service strikes. Delivered nationwide with on-site practical assessment.',
      url: 'https://sygma-solutions.com/courses/proqual-cat1-training',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Cable Location',
    headline: 'ProQual CAT1: The Comprehensive Cable Locator Qualification',
    sub: 'The only cable location qualification Sygma does not have to supplement. Designed for operatives who will locate underground utilities professionally. Includes comprehensive regulatory context, risk assessment, and Safe Systems of Work aligned with HSG47 and HASAWA.',
    image: 'CAT4-and-Genny-40',
    alt: 'ProQual CAT1 training showing cable locator and signal generator operation',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Training' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT1 Cable Locator Training',
      description: 'ProQual CAT1 training -- comprehensive cable location and avoidance qualification. Proven track record reducing service strikes. Delivered nationwide with on-site practical assessment.',
      url: '/courses/proqual-cat1-training',
      duration: '1-2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Training' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: '21 Years',
      label: 'One Specialism',
      detail: 'Underground utility location training is all we do.',
    },
    {
      value: 'Proven',
      label: 'Strike Reduction Record',
      detail: 'Clients report measurable reductions in service strikes.',
    },
    {
      value: 'Only One',
      label: 'Qualification we do not supplement',
      detail: 'ProQual CAT1 covers everything needed without additional content.',
    },
  ],

  infoBar: [
    {
      label: 'Format',
      value: '1-day or 2-day, accredited or in-house',
    },
    {
      label: 'Duration',
      value: '1 or 2 days',
    },
    {
      label: 'Max Delegates',
      value: '8',
    },
    {
      label: 'Assessment',
      value: 'Written (70%) + practical',
    },
    {
      label: 'Delivery',
      value: 'Your site, nationwide',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Professional Locators',
        desc: 'This qualification is designed for operatives who will use cable location professionally. If your team is entering this as a core skill, ProQual CAT1 is the industry standard that demonstrates that competence.',
      },
      {
        title: 'Organisations Requiring Comprehensive Qualification',
        desc: 'Clients, contractors, and utilities that require staff to hold a formally-accredited cable location qualification. This is your mandatory training.',
      },
      {
        title: 'Health and Safety Managers',
        desc: 'Responsible for Safe Systems of Work and CDM compliance. This course gives you the authority to verify that your team\'s cable location practices are compliant and effective.',
      },
      {
        title: 'Supervisors and Trainers',
        desc: 'Those who coach others or induct new team members. The regulatory and risk assessment context means you will understand the why behind every safety requirement.',
      },
    ],
  },

  about: {
    eyebrow: 'Why This Qualification Exists',
    title: 'Why ProQual CAT1 Matters',
    paragraphs: [
      'Most cable location training teaches operatives to use the equipment, not to understand the principles. They know what the beep means. They do not understand how the signal behaves in soil, what happens near a joint, or why they cannot trust a passive Power mode reading. The result is a technician, not a locator.',
      'ProQual CAT1 was designed to create true professional locators. It covers electromagnetic theory in detail, systematic survey methodology, signal interpretation in complex conditions, and the regulatory context (CDM Regulations, HASAWA, HSG47, GS6) that underpins safe practice. You will understand not just what to do but why it matters.',
      'The qualification includes formal risk assessment and Safe Systems of Work documentation. This means you can sit on a pre-construct meeting and contribute to the locating plan. This is a qualification for people who are entrusted with the safety of their teams.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        {
          label: 'Standard Duration',
          value: '2 days',
        },
        {
          label: 'Accreditation',
          value: 'ProQual Level 2 (formally accredited qualification)',
        },
        {
          label: 'Theory Assessment',
          value: 'Written paper (2 papers, 70% pass each)',
        },
        {
          label: 'Practical Assessment',
          value: 'Observed assessment on real buried services',
        },
        {
          label: 'Location',
          value: 'Your site or Wigan HQ',
        },
        {
          label: 'Max Delegates',
          value: '8',
        },
        {
          label: 'Equipment',
          value: 'Use your own or Sygma-provided Radiodetection CAT4 and Genny4',
        },
        {
          label: 'CITB',
          value: 'CITB-approved, eligible for grant funding',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Classroom: Theory',
      subheading: 'The full technical and regulatory context',
      items: [
        'Legal, financial and health consequences of cable strikes (HSG47, HASAWA)',
        'CDM Regulations and designer/client responsibilities',
        'Utility network types, materials and connectivity',
        'Reading and interpreting utility plans (STATS)',
        'Electromagnetic theory and how cable locators work',
        'All four locator modes: Power, Radio, Genny, Avoidance',
        'Signal interpretation and depth estimation',
        'Safe Systems of Work and risk assessment methodology',
      ],
    },
    practical: {
      heading: 'Site-Based: Practical',
      subheading: 'Every principle proved on real buried utilities',
      items: [
        'Planning a survey using service plans',
        'Identifying above-ground indicators of buried services',
        'Direct connection, capacitance, and induction techniques',
        'Locating joints, T-connections, and direction changes',
        'Earth positioning and signal nulling',
        'Full utility survey methodology',
        'Individual practical assessment',
      ],
    },
  },

  formats: {
    eyebrow: 'Course Formats',
    title: 'Formats Available',
    rows: [
      {
        format: '1-day In-House (Certified)',
        duration: '1 day',
        maxDelegates: '8',
        assessment: 'Written MCQ (70%) + practical',
      },
      {
        format: '1-day EUSR CAT1 (Accredited)',
        duration: '1 day',
        maxDelegates: '8',
        assessment: 'Written MCQ (70%) + practical',
      },
      {
        format: '1-day ProQual CAT1 (Accredited) -- Top-Up Only',
        duration: '1 day',
        maxDelegates: '8',
        assessment: 'Full ProQual assessment',
      },
      {
        format: '2-day In-House (Certified)',
        duration: '2 days',
        maxDelegates: '8',
        assessment: 'Written MCQ (70%) + practical',
      },
      {
        format: '2-day ProQual CAT1 (Accredited)',
        duration: '2 days',
        maxDelegates: '8',
        assessment: 'Two written papers (70% each) + practical',
      },
      {
        format: '2-day ProQual CAT1 Plus (Accredited)',
        duration: '2 days',
        maxDelegates: '8',
        assessment: 'Two written papers (70% each) + extended practical',
      },
      {
        format: 'Split Course (Certified) -- Theory + 3 months + Practical',
        duration: '2 days (3 months apart)',
        maxDelegates: '8',
        assessment: 'Written MCQ (70%) + practical',
      },
    ],
  },

  certRoutes: {
    eyebrow: 'Your Accreditation Options',
    title: 'Certification Routes',
    items: [
      {
        title: 'ProQual CAT1',
        desc: 'The fully comprehensive qualification. Covers cable location methodology, regulatory context (CDM, HASAWA), Safe Systems of Work, and GS6 compliance. Two written papers test depth of understanding. The industry standard for professional locators and organisations that will not compromise on safety competence.',
      },
      {
        title: 'EUSR CAT1',
        desc: 'A respected, lighter accreditation. Covers cable avoidance methodology and equipment operation without the regulatory content of ProQual. Frequently specified by clients and a popular choice for organisations seeking a comprehensive qualification in a shorter timeframe.',
      },
      {
        title: 'In-House Certified',
        desc: 'Not accredited externally, but Sygma-certified. Covers the same cable location methodology as the accredited courses, plus practical assessment on your site. Many organisations use this as their standard and add accreditation later if client requirements change.',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-57', alt: 'Practical cable locator training' },
        { src: 'CAT4-and-Genny-58', alt: 'Genny signal generator operation' },
        { src: 'CAT4-and-Genny-59', alt: 'Underground service location demonstration' },
      ],
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB-approved training organisation. This course is CITB-listed and may be eligible for grant funding if your organisation is registered with CITB and paying the levy.',
      'Your funding eligibility depends on your business type, headcount, and levy contribution. Contact CITB directly to find out your current funding rates. Sygma will help you submit the training claim and will work with CITB to process the funding.',
      'CITB funding can cover tuition fees (within the daily rate), and sometimes travel and accommodation expenses depending on your agreement with CITB.',
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Why HSG47 Matters',
        title: 'Safe Working Near Underground Services',
        desc: 'HSG47 (Avoiding Danger from Underground Services) is the HSE\'s definitive guidance on safe working near buried utilities. Your organisation\'s Safe System of Work must be compliant. Cable location sits at the heart of this compliance. If your team is not locating utilities correctly, your SSOW is incomplete.',
      },
      {
        eyebrow: 'ProQual CAT1 Alignment',
        title: 'Regulatory Context',
        desc: 'ProQual CAT1 training is aligned to HSG47 and is designed for operatives and managers to understand the regulatory context of safe practice. You will learn what HSG47 requires, why it requires it, and how your cable location practices fit into your organisation\'s overall compliance picture.',
      },
      {
        eyebrow: 'CDM Regulations',
        title: 'Designer Responsibility',
        desc: 'This course covers CDM Regulations and the designer\'s responsibility to plan for safe cable location before work starts. If you attend pre-construct meetings or contribute to safety plans, you need to understand the regulatory framework.',
      },
    ],
  },

  siteRequirements: {
    items: [
      {
        label: 'Access',
        detail: 'A safe area to work (ideally where your team will be working) with buried utilities that we can locate and demonstrate on. This does not need to be glamorous -- we train on real working sites every day.',
      },
      {
        label: 'Service Plans',
        detail: 'Copies of any available utility plans (STATS, CAD drawings, or marked-up prints). These help us plan the survey and teach delegates how to interpret plans (including inaccuracies).',
      },
      {
        label: 'Utility Access',
        detail: 'If possible, the ability to make direct connection to utility cabinets or services (with appropriate permissions). This teaches the transmission method.',
      },
      {
        label: 'Accommodation',
        detail: 'A dry space for the theory component (classroom or office). This does not need to be elaborate -- a meeting room or site hut is fine.',
      },
      {
        label: 'Weather Contingency',
        detail: 'If the practical is rained out, Sygma will reschedule the practical component for a subsequent date.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: '21 Years, One Specialism',
        title: 'Focused Expertise',
        desc: 'Cable location is all we do. No sideline in scaffolding, no part-time training. We have invested two decades in understanding how cable location failures happen and how to build teams that do not fail.',
      },
      {
        eyebrow: 'Post-Strike Investigation',
        title: 'Evidence-Based Training',
        desc: 'We have investigated more cable strikes than any other training organisation in the UK. This means our trainers know exactly what causes failures and what habits prevent them. Every lesson is evidence-based.',
      },
      {
        eyebrow: 'Real Site Delivery',
        title: 'Training on Your Ground',
        desc: 'Training on your site, using your utilities and your soil. This is not classroom theory; it is proof. Your operatives see how the equipment behaves in their working environment.',
      },
      {
        eyebrow: 'Proven Results',
        title: 'Measurable Improvements',
        desc: 'Clients report measurable reductions in service strikes. We have data showing Genny usage increases from locator downloads after Sygma training.',
      },
      {
        eyebrow: 'No Fluff',
        title: 'Complete Qualification',
        desc: 'ProQual CAT1 is the only qualification we offer that we do not have to supplement with additional content. It covers everything needed. That is unusual, and it is deliberate.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Further Training Options',
    items: [
      {
        eyebrow: 'Cable Location',
        title: 'CAT and Genny Training',
        desc: 'The hands-on cable location course. Genny and CAT equipment operation with emphasis on field-verified habits that eliminate service strikes.',
        href: '/courses/genny-cat-training',
      },
      {
        eyebrow: 'Advanced Training',
        title: 'Cable Location Trainer Development',
        desc: 'Train the trainer. Designed for Sygma-certified trainers who want to become formally accredited under ProQual standards.',
        href: '/courses/trainer-development',
      },
      {
        eyebrow: 'Compliance',
        title: 'Cable Strike Investigation',
        desc: 'What went wrong. Post-strike investigation, safety case documentation, incident reporting and learning.',
        href: '/courses/cable-strike-investigation',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'GS6 Safety Training',
      desc: 'If you are working in gas environments, GS6 compliance is mandatory. The ProQual CAT1 course includes GS6 alignment, so if you add GS6 training, you will have a joined-up safety case.',
      href: '/courses/gs6-safety-training',
    },
    {
      title: 'Confined Space Entry',
      desc: 'If your team will enter pits or chambers to locate services, Confined Space Entry training is needed. This is separate from cable location but is often required by the same organisations.',
      href: '/courses/confined-space-entry',
    },
  ],

  cta: {
    title: 'Ready to Train Your Team?',
    description: 'Contact Sygma to discuss formats, dates, and accreditation. We will work around your schedule.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
    secondaryLabel: 'Back to Cable Location Training',
    secondaryHref: '/training/cable-location-avoidance',
  },

  faqs,
};
