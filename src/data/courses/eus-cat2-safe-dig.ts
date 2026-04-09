import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'eus-cat2-safe-dig',

  metadata: {
    title: 'EUSR CAT 2 Training | Safe Dig Course | Sygma',
    description: 'EUSR CAT2 safe excavation training covering HSG47 safe digging practice. EUSR-registered outcomes delivered by specialist utility avoidance trainers.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig' },
    openGraph: {
      title: 'EUSR CAT 2 Training | Safe Dig Course | Sygma',
      description: 'EUSR CAT2 safe excavation training covering HSG47 safe digging practice. EUSR-registered outcomes delivered by specialist utility avoidance trainers.',
      url: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Safe Dig and Advanced',
    headline: 'EUSR CAT2 Safe Dig: EUSR-Registered Safe Excavation Training',
    sub: 'The complete safe digging course. Classroom theory, live site practical, and written assessment. Built for every operative who excavates near buried services.',
    image: 'Safe-Dig-01',
    alt: 'EUSR CAT2 safe digging training with vacuum excavation and hand-dig demonstration',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'EUSR CAT2 Safe Dig' },
    ],
  },

  schemas: {
    course: {
      name: 'EUSR CAT2 Safe Dig Training',
      description: 'EUSR CAT2 safe excavation training from Sygma Solutions. EUSR-registered qualification covering HSG47 safe digging practice, proximity working, and live dig practical assessment.',
      url: '/courses/eus-cat2-safe-dig',
      credential: 'EUSR CAT2 / EUSR CAT2',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'EUSR CAT2 Safe Dig' },
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
      value: '70-80%',
      label: 'Increase in Genny Usage',
      detail: 'Measured through locator data downloads after Sygma training.',
    },
    {
      value: 'Proven',
      label: 'Strike Reduction Record',
      detail: 'Clients report measurable reductions in service strikes.',
    },
  ],

  infoBar: [
    {
      label: 'Duration',
      value: '1 Day',
    },
    {
      label: 'Max Delegates',
      value: '8',
    },
    {
      label: 'Registration',
      value: 'EUSR Registered',
    },
    {
      label: 'Format',
      value: 'Classroom + On-Site Practical',
    },
    {
      label: 'Pre-Requisite',
      value: 'EUSR CAT1 recommended',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Site Operatives Responsible for Excavation',
        desc: 'Anyone who physically excavates around buried services',
      },
      {
        title: 'Supervisors Overseeing Dig Operations',
        desc: 'Those accountable for safe digging practice on site',
      },
      {
        title: 'Organisations Requiring Safe Dig Competency',
        desc: 'Companies that need to evidence safe excavation training across their workforce',
      },
      {
        title: 'Anyone Combining CAT1 and CAT2',
        desc: 'Delegates who want complete utility avoidance competency covering both locating and safe excavation',
      },
    ],
  },

  about: {
    eyebrow: 'About This Course',
    title: 'What Is EUSR CAT2 Safe Dig?',
    paragraphs: [
      'EUSR CAT2 Safe Dig is the EUSR-recognised qualification that takes delegates from locate to excavate. Whereas EUSR CAT1 training focuses on finding underground utilities with a CAT and Genny locator, CAT2 covers what happens next: how to safely dig through to a service, expose it correctly, protect it during work, and reinstate the ground safely afterwards.',
      'It is a hands-on course. Every delegate will plan a safe dig, carry out a written risk assessment and permit to dig, operate locating equipment on site, excavate to the 500mm level, and then dig horizontally to expose a live buried service under assessment conditions.',
      'The course is built to HSG47 and GS6 standards. It covers the full range of occupational hazards associated with excavation work, including silica dust, vibration, noise, asbestos, and Leptospirosis, as well as ground hazards such as made-up ground, groundwater, and loose ground.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        {
          label: 'Qualification',
          value: 'EUSR CAT2 Safe Dig (EUSR Registered)',
        },
        {
          label: 'Duration',
          value: '1 Day (Classroom and On-Site Practical)',
        },
        {
          label: 'Course Format',
          value: 'Classroom theory + On-site practical dig + MCQ assessment',
        },
        {
          label: 'Assessment',
          value: 'Multiple choice questions (MCQs) and practical on-site observation',
        },
        {
          label: 'Maximum Delegates',
          value: '8 per session',
        },
        {
          label: 'Pricing',
          value: 'Per course, not per person. Contact Sygma for a quote.',
        },
        {
          label: 'Delivery Options',
          value: 'On-site at client premises (nationwide) or Sygma HQ, Wigan',
        },
        {
          label: 'Equipment',
          value: 'Locator and signal generator equipment provided; delegates encouraged to bring own equipment. Sygma provides Radiodetection CAT4 and Genny4 as standard, This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX',
        },
        {
          label: 'Site Requirement',
          value: 'Live dig area with buried metallic utilities and meeting or conference room',
        },
        {
          label: 'Pre-Requisite',
          value: 'Delegates should hold EUSR CAT1 or equivalent; photographic ID required on the day',
        },
        {
          label: 'CITB Funding',
          value: 'May be accessible via the CITB Employer Network; contact your CITB adviser for current options',
        },
        {
          label: 'Accreditation',
          value: 'EUSR Registered | CITB Approved Training Organisation',
        },
      ],
    },
  },

  courseContent: {
    title: 'How the Day Is Structured',
    theory: {
      heading: 'Classroom Theory',
      items: [
        'Current legislation, HSG47 and GS6 guidance, and what they require of excavating operatives',
        'Site-specific risk assessments, company procedures and permits to dig',
        'Occupational health hazards: Leptospirosis, asbestos, silica dust, noise and vibration',
        'Excavation hazards: loose ground, made-up ground, groundwater and stored materials',
        'Reading and interpreting utility plans, their limitations, and what to do when plans are unavailable',
        'Detecting and marking underground services with locating equipment',
        'Safe excavation practices: hand tools, handheld power tools, and horizontal excavation',
        'Trench support systems and service exposure, support and reinstatement',
      ],
    },
    practical: {
      heading: 'On-Site Practical',
      items: [
        'Complete a site-specific risk assessment and permit to dig',
        'Use service plans and site information to identify indicated utility routes',
        'Operate locating equipment to confirm service positions',
        'Begin the safe dig operation, removing surface material with services marked',
        'Excavate to 500mm depth using appropriate tools and safe digging practice',
        'Dig horizontally beneath the remaining surface to expose the indicated buried service',
        'Support the exposed service appropriately',
        'Complete site reinstatement',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'At the End of This Course',
    items: [
      {
        title: 'EUSR CAT2 Safe Dig Competency Card',
        desc: 'Valid for 3 years, nationally recognised evidence of safe excavation competency',
      },
      {
        title: 'Personalised Training Record',
        desc: 'Detailed breakdown of all theory criteria T1 to T24 and practical criteria P1 to P4',
      },
      {
        title: 'Practical Assessment Evidence',
        desc: 'Documented evidence of hands-on safe digging competency',
      },
      {
        title: 'Ongoing Support',
        desc: 'Access to Sygma trainers for post-course questions',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Safe-Dig-05', alt: 'Safe dig training in progress' },
        { src: 'Safe-Dig-12', alt: 'On-site practical dig' },
        { src: 'Safe-Dig-02', alt: 'Service exposure technique' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'Safe-Dig-06', alt: 'EUSR CAT2 Safe Dig live excavation' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Safe-Dig-07', alt: 'EUSR CAT2 safe dig practical training' },
        { src: 'Safe-Dig-14', alt: 'Safe excavation technique demonstration' },
        { src: 'Safe-Dig-03', alt: 'Hand dig assessment near buried services' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Safe-Dig-08', alt: 'Service exposure during safe dig training' },
        { src: 'Safe-Dig-31', alt: 'EUSR CAT2 on-site excavation assessment' },
        { src: 'Safe-Dig-34', alt: 'Sygma safe dig training completion' },
      ],
    },
  ],

  siteRequirements: {
    items: [
      {
        label: 'Site Requirements',
        detail: 'A live dig area with buried metallic utilities. One power cable to a site cabin is not sufficient. The site must have a realistic variety of underground services. The practical area should be close to the meeting room. If distances require driving, Sygma must be notified. Sygma Solutions can advise on site suitability or arrange access to specific sites if required.',
      },
      {
        label: 'Meeting Room and Welfare',
        detail: 'A comfortable meeting or conference room with sufficient desk space for all delegates to write. Space for a projector and a clear projection wall or screen. Appropriate welfare facilities. Sygma\'s dedicated training centre in Wigan is available at no extra cost as an alternative.',
      },
      {
        label: 'Utility Plans',
        detail: 'STATS plans appropriate to the training site should be available for the practical. If no plans are available, Sygma Solutions can supply suitable plans at an additional cost agreed prior to booking.',
      },
      {
        label: 'Delegates',
        detail: 'All delegates must bring government-issued photographic ID (driving licence, passport, or residence permit). All delegates must have appropriate PPE. Sygma recommends that delegates hold EUSR CAT1 or an equivalent utility locating qualification.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'May be accessible via the CITB Employer Network; contact your CITB adviser for current options',
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Competence',
        title: 'Trained and Competent Operatives',
        desc: 'Every delegate meets the HSG47 definition of competence through hands-on assessment in real site conditions.',
      },
      {
        eyebrow: 'Process',
        title: 'Safe System of Work',
        desc: 'Permits to dig, risk assessments, site-specific procedures, and hazard communication form the foundation of the course.',
      },
      {
        eyebrow: 'Technique',
        title: 'Safe Excavation Techniques',
        desc: 'Hand tools, power tools, trench support, and protective systems taught and assessed in live digging conditions.',
      },
      {
        eyebrow: 'Protection',
        title: 'Protecting Exposed Services',
        desc: 'Service support, marking, and reinstatement techniques prevent damage and maintain safety during excavation.',
      },
      {
        eyebrow: 'Standards',
        title: 'NRSWA Highway Operations',
        desc: 'Traffic management, lane rental, highway access, and utility service protection covered where applicable.',
      },
      {
        eyebrow: 'Records',
        title: 'Evidenced Training Records',
        desc: 'EUSR registration, certificates, and documented practical assessments provide audit-ready proof of competence.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Standards',
        title: 'Beyond the Minimum Specification',
        desc: 'Sygma content goes above and beyond the EUSR CAT2 minimum spec. Practical assessment in real site conditions.',
      },
      {
        eyebrow: 'Integration',
        title: 'Pairs with CAT1',
        desc: 'If your team locates and digs, they need both. EUSR CAT2 covers safe excavation hazards, protecting exposed services, and occupational health.',
      },
      {
        eyebrow: 'People',
        title: 'Specialist Trainers',
        desc: 'Directly employed. Ex-utility surveyors or ex-equipment manufacturer specialists. TAQA qualified.',
      },
      {
        eyebrow: 'Assessment',
        title: 'Real Practical Assessment',
        desc: 'On-site practicals in real conditions. Competent operatives, not just certificates.',
      },
      {
        eyebrow: 'Independence',
        title: 'Independent',
        desc: 'No surveys, no equipment, no manufacturer relationships.',
      },
      {
        eyebrow: 'Delivery',
        title: 'We Come to You',
        desc: 'At your site. Travel included. No hidden extras.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Other Training Options',
    title: 'Related Courses',
    items: [
      {
        eyebrow: 'Cable Location',
        title: 'EUSR CAT1',
        desc: 'Cable location qualification. Pairs with CAT2 for complete locate-and-dig competence.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Alternative Standard',
        title: 'ProQual CAT2',
        desc: 'ProQual-accredited safe excavation qualification. Externally verified by ProQual Accreditations.',
        href: '/courses/proqualcat2',
      },
      {
        eyebrow: 'Combined Pathway',
        title: 'EUSR CAT1 and CAT2 Combined',
        desc: 'Two-day combined course covering both location and safe excavation.',
        href: '/courses/eus-cat1-cat2-combined',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'Bespoke Training',
      desc: 'Design a tailored programme around your site risks, equipment, and team size.',
      href: '/contact',
    },
  ],

  faqs: [
    {
      q: 'Do delegates need to hold EUSR CAT1 before attending EUSR CAT2?',
      a: 'It is strongly recommended. EUSR CAT2 assumes familiarity with CAT and Genny locating equipment, as the on-site practical element requires delegates to operate a locator before commencing the dig. Delegates who have not completed EUSR CAT1 or an equivalent utility locating course may struggle with the practical element.',
    },
    {
      q: 'What happens if the site does not have a suitable live dig area?',
      a: 'Sygma Solutions can advise on site suitability before your booking is confirmed. If your site is not suitable, we can often arrange access to an alternative site. Alternatively, courses can be delivered at Sygma\'s training centre in Wigan at no extra cost. Please contact us before booking if you are unsure.',
    },
    {
      q: 'What is the pass mark for the written assessment?',
      a: 'Sygma Solutions does not publish a fixed percentage pass mark for the EUSR CAT2 written assessment. Assessment is conducted by EUSR-registered criteria. Delegates who do not pass on the day will receive guidance on the areas that require improvement before a reassessment can be arranged.',
    },
    {
      q: 'Can EUSR CAT1 and EUSR CAT2 be delivered on the same day?',
      a: 'Yes. Sygma Solutions offers a combined EUSR CAT1 and CAT2 training day for teams who need both qualifications. Contact us for pricing and logistics for combined delivery.',
    },
    {
      q: 'How does EUSR CAT2 relate to the ProQual CAT2 Safe Dig qualification?',
      a: 'EUSR CAT2 and ProQual CAT2 cover the same operational area: safe excavation near buried services. ProQual CAT2 is assessed against a broader and more detailed criteria framework, whereas EUSR CAT2 follows the EUSR specification. Both are industry-recognised qualifications. The right choice depends on your organisation\'s competency framework requirements. Sygma offers both.',
    },
    {
      q: 'What STATS plans are needed for the course?',
      a: 'STATS plans are the utility drawings for the specific site where the practical excavation will take place. They should be sourced from the relevant utility owners and operators before the course date. If you are unable to obtain plans, Sygma Solutions can supply suitable plans for an additional cost agreed before booking. Please discuss this with us when making your enquiry.',
    },
  ],

  cta: {
    title: 'Book EUSR CAT2 Safe Dig Training',
    description: 'Available on-site at your premises nationwide or at Sygma HQ in Wigan. Up to 8 delegates per session. EUSR registration included on pass. Contact us for a quote.',
    primaryLabel: 'Check Availability and Book',
    primaryHref: '/contact#enquiry-form',
    secondaryLabel: 'Get in Touch',
    secondaryHref: '/contact#enquiry-form',
  },
};
