import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: '5-day-pas128-surveyor',

  metadata: {
    title: '5-Day PAS 128 Surveyor Course | Sygma Solutions',
    description: 'Five-day PAS 128 utility mapping course covering survey levels D through B. Advanced EM, GPR, written exam, practical assessment. Wigan and Worcester dates.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/5-day-pas128-surveyor' },
    openGraph: {
      title: '5-Day PAS 128 Surveyor Course | Sygma Solutions',
      description: 'Five-day PAS 128 utility mapping course covering survey levels D through B. Advanced EM, GPR, written exam, practical assessment.',
      url: 'https://sygma-solutions.com/courses/5-day-pas128-surveyor',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: '5 Day PAS128 Utility Mapping and Surveying Course: Advanced Training for Utility Surveyors',
    sub: 'Five intensive days. Every PAS128 survey level from D through to B. Advanced electromagnetic and GPR training delivered by the most experienced utility mapping trainers and assessors in the UK. With a written exam and full practical assessment, this is the course that turns competent locators into confident surveyors.',
    image: 'Utility-Mapping-04',
    alt: 'PAS128 utility mapping and surveying course',
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: '5 Day PAS128 Surveyor' },
    ],
  },

  schemas: {
    course: {
      name: '5-Day PAS 128 Surveyor Course',
      description: 'Five-day PAS 128 utility mapping course covering survey levels D through B. Advanced EM, GPR, written exam, practical assessment. Wigan and Worcester dates.',
      url: '/courses/5-day-pas128-surveyor',
      credential: 'PAS128 Surveyor Certificate',
      duration: '5 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: '5 Day PAS128 Surveyor' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: '5 Days', value: 'Intensive classroom and site training' },
    { label: '3 Venue Options', value: 'Wigan, Worcester or your own site' },
    { label: 'TSA, ICES & EUSR Approved', value: 'Mapped to ICES competencies for Utility Mapping' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-03', alt: 'PAS128 surveyor course -- electromagnetic locating practical session' },
        { src: 'MALA-GPR-05', alt: 'PAS128 surveyor course -- GPR survey equipment in use' },
        { src: 'Advanced-EM-06', alt: 'PAS128 surveyor course -- advanced EM training on site' },
      ],
    },
  ],

  about: {
    eyebrow: 'What This Course Covers',
    title: 'The Full PAS128 Surveyor Programme',
    paragraphs: [
      'Most underground utility location training focuses on a single piece of equipment or a single task. The 5 Day PAS128 Utility Mapping and Surveying Course does something different. Over five days, delegates work through every aspect of a compliant utility survey: from desktop research and site reconnaissance through to electromagnetic location and full ground penetrating radar operation, culminating in a two-man practical assessment on a real survey site.',
      'The course covers PAS128 Survey Levels D and C in Module 1, PAS128 Level B electromagnetic detection in Modules 2A and 2B, and PAS128 Level B GPR in Module 3. On Day 5, delegates complete both a full practical operational test and a formal written exam.',
      'It is the only course of this scope delivered by a provider with this depth of real-world utility mapping experience. Every Sygma trainer is a practising or former utility mapping professional, not a career trainer reading from a spec. The course content goes beyond the minimum requirements at every stage.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '5 days' },
        { label: 'Formats', value: 'Open course (Wigan or Worcester) or private at your site' },
        { label: 'Assessment', value: 'Written exam (70% pass mark) and practical operational test' },
        { label: 'Accreditations', value: 'TSA Approved, CICES Approved, EUSR Accredited, ProQual Centre' },
        { label: 'Equipment', value: 'RD8000, RD8100, RD8200, vLoc Pro 3, MALA EL CORE GPR, DS2000 GPR, Proceq GS8000 GPR' },
        { label: 'ProQual Level 3', value: 'Optional add-on (completed on Day 5)' },
        { label: 'ICES Mapping', value: 'GEUS01 A-D, E&G, F Part 1' },
      ],
    },
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Designed For',
    items: [
      {
        title: 'Utility surveyors entering the profession',
        desc: 'A thorough foundation in PAS128 processes from Day 1',
      },
      {
        title: 'Experienced locators moving into mapping and surveying',
        desc: 'Formalises and extends existing site skills to surveyor level',
      },
      {
        title: 'Self-employed contractors building their service offering',
        desc: 'Recognised accreditation supporting client confidence',
      },
      {
        title: 'Utility mapping company employees',
        desc: 'Structured training aligned to ICES competencies and ProQual pathways',
      },
      {
        title: 'Delegates pursuing ProQual Level 3, 4 or 5 qualifications',
        desc: 'This course fulfils evidence requirements for Level 4 and 5 and includes an optional Level 3 add-on',
      },
    ],
  },

  courseContent: {
    eyebrow: 'Course Structure',
    title: 'Five Days of Structured, Progressive Training',
    theory: {
      heading: 'Course Overview',
      subheading: 'Each day builds on the last. By Day 5, delegates have the knowledge and practical experience to conduct a full PAS128-compliant utility survey using all detection methods.',
      items: [
        'Day 1: Utility Networks, STATS Plans and Site Reconnaissance',
        'Day 2: Electrical Theory, EM Theory and Legislation',
        'Day 3: Advanced EM Locating with Radiodetection RD8000, RD8100, RD8200 and Vivax-Metrotech vLoc Pro 3',
        'Day 4: GPR Theory and Operation',
        'Day 5: Assessment Day',
      ],
    },
    practical: {
      heading: 'Daily Topics',
      items: [
        'Overview of utility networks: electricity, gas, water, communications (how services are supplied and distributed)',
        'Cable and pipe types, materials and connectivity',
        'Surveying methodology and types: how to undertake a utility survey, where to start and why, incorporating the PAS128 process flowchart',
        'STATS plans: conventions, variations, abbreviations and meanings (study of a wide variety of plans)',
        'PAS128 Survey Type D introduced',
        'Practical: delegates conduct a PAS128 Survey Type C site reconnaissance, draw the assumed route of buried services on a blank base plan, and compare their findings with STATS plans',
        'Basic electrical theory: a back-to-basics practical approach using bulbs, wires, batteries and magnets',
        'Electromagnetic theory: how an EM locator works, how and where to apply a signal, and the limitations of the technology',
        'Legislation and health and safety: overview of HSG47 requirements and implications',
        'Correct use and application of different frequencies',
        'Distorted magnetic fields, depth measurement and current',
        'Current Direction (CD) / Signal Direction (SD)',
        'Deep sonde location technique',
        'Passive signals and their limitations',
        'PAS128 Detection Methods (Normative) M1 to M4 EM (classroom and site)',
        'Practical: delegates use EM locators in active and passive modes on a real survey site, comparing results against \'locating without a locator\' and STATS plans',
        'Ground Penetrating Radar theory: how GPR works, what the settings and controls do, and how different ground conditions affect results',
        'Real-world GPR data examples',
        'PAS128 Detection Methods M1 to M4 (non-post processing)',
        'Practical: delegates use GPR on site to locate a variety of buried utilities in different situations',
        'Practical operational test: two-man team surveys a small site area using STATS plans and all detection methods including site reconnaissance, EM locating with RD8000/RD8100/RD8200 or vLoc Pro 3, and GPR with MALA EL CORE, DS2000 or Proceq GS8000',
        'Delegates provide a sketch plan of located services with depths, demonstrating PAS128 Level B quality levels B1 to B4 (non-post processing)',
        'Equipment use and methodology is observed; proof of location must be demonstrated to the examiner',
        'Any locatable buried utility not found results in a 2% reduction in overall exam score per occurrence',
        'Written exam: combination of graphical and written questions under exam conditions',
        'Pass mark: 70% overall',
        'ProQual assessments completed in line with the nationally recognised qualification for delegates on the Level 3 add-on option',
      ],
    },
  },

  formats: {
    eyebrow: 'Delivery',
    title: 'Three Ways to Book',
    rows: [
      {
        format: 'Open Course',
        duration: '5 days',
        maxDelegates: 'Sygma Solutions Utility Mapping Centre, Wigan',
        assessment: 'Fixed course dates, open to individuals and small groups. Contact the bookings team to check availability and reserve your place.',
      },
      {
        format: 'Open Course',
        duration: '5 days',
        maxDelegates: 'The Survey School, Worcester',
        assessment: 'Fixed course dates at The Survey School in Worcester, delivered in partnership with The Survey School. Ideal for delegates in the Midlands, South, and Wales. The Survey School is the UK\'s leading professional training provider for the land and mapping sector.',
      },
      {
        format: 'Private Course',
        duration: '5 days',
        maxDelegates: 'Your premises or a site of your choice',
        assessment: 'Arranged to suit your team\'s schedule and location requirements. Pricing is based on group size, location and any bespoke requirements.',
      },
    ],
  },

  certRoutes: {
    eyebrow: 'Accreditation',
    title: 'Accreditations and Qualification Pathways',
    items: [
      { title: 'TSA Approved', desc: 'Training courses approved by the Survey Association' },
      { title: 'CICES Approved', desc: 'Mapped to ICES competencies for Utility Mapping' },
      { title: 'EUSR Accredited', desc: 'Nationally recognised utility sector accreditation' },
      { title: 'ProQual Approved Centre', desc: 'Assessments conducted in line with nationally recognised ProQual standards' },
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Build on This Course',
    items: [
      {
        eyebrow: 'Utility Mapping',
        title: 'GPR Training',
        desc: 'Standalone or extended GPR training for existing surveyors.',
        href: '/courses/gpr-training',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'TSA and ICES Utility Mapping Programme',
        desc: 'Full 7-module programme for the complete ICES competency framework',
        href: '/courses/tsa-ices-utility-mapping',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'ProQual Level 3 Certificate',
        desc: 'Nationally recognised qualification (can be added to this course)',
        href: '/courses/level-3-certificate',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'ProQual Level 4 Diploma',
        desc: 'Next qualification step for working surveyors',
        href: '/courses/level-4-diploma',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'PAS128 Awareness',
        desc: 'Entry-level PAS128 course for those who procure or interpret surveys',
        href: '/courses/pas128-awareness',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world skills.',
      href: '/osca',
    },
    {
      title: 'Bespoke Training',
      desc: 'Design a tailored programme around your site risks, equipment, and team size.',
      href: '/contact',
    },
  ],

  whySygma: {
    items: [
      {
        eyebrow: 'Real Survey Experience',
        title: 'Real Survey Experience',
        desc: 'Every trainer is an active PAS128 surveyor, not a classroom instructor. They survey on live sites and understand what works in the field.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Specialist Trainers',
        desc: 'Directly employed, TAQA qualified, with backgrounds in utility surveying or equipment manufacturing. Your trainers have done the job.',
      },
      {
        eyebrow: 'Five Full Days of Practical',
        title: 'Five Full Days of Practical',
        desc: 'This is the most comprehensive PAS128 course available. Every day includes site work. By Day 5, delegates are ready to survey independently.',
      },
      {
        eyebrow: 'Independent and Unbiased',
        title: 'Independent and Unbiased',
        desc: 'We are not tied to any manufacturer and do not sell equipment. Training reflects what works in practice, not what a supplier wants to sell.',
      },
      {
        eyebrow: 'Small Class Sizes',
        title: 'Small Class Sizes',
        desc: 'Maximum 8 delegates ensures every delegate receives individual attention during practical assessments and hands-on training.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'We Come to You',
        desc: 'Private courses delivered at your site with all equipment provided. Travel is included in the course rate.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation (ATO) and a member of the CITB Employer Network. Employers registered with CITB may be able to access Employer Network funding towards training costs. Contact your CITB adviser or Sygma for guidance on eligibility.',
    ],
  },

  faqs: [
    {
      q: 'Do I need prior locating experience to attend?',
      a: 'No prior formal training is required. The course starts from first principles on Day 1. That said, delegates who have some experience with electromagnetic locating will find the advanced content on Days 3 and 4 more immediately applicable.',
    },
    {
      q: 'Can I use my own GPR or EM equipment?',
      a: 'Yes. Radiodetection RD8000, RD8100 and RD8200, Vivax-Metrotech vLoc Pro 3, MALA EL CORE GPR, DS2000 GPR and Proceq GS8000 GPR are all available for use on site. If you prefer to train on your own or your company\'s equipment, please bring it from Day 3 onwards. Let the bookings team know in advance so arrangements can be made.',
    },
    {
      q: 'What is the ProQual Level 3 add-on and do I need it?',
      a: 'The ProQual Level 3 Certificate in Utility Mapping and Surveying is an optional nationally recognised qualification that can be completed alongside the 5 Day course. It enables the CSCS card for utility mapping roles. If you are pursuing the Level 4 or Level 5 qualifications, the Level 3 is part of the pathway.',
    },
    {
      q: 'How does this course count towards Level 4 or Level 5?',
      a: 'The 5 Day course generates assessed evidence that can be used within the ProQual Level 4 and Level 5 portfolios. Speak to the bookings team about how to plan your training pathway.',
    },
    {
      q: 'Is there additional support available for new entrants to the industry?',
      a: 'Yes. If you are new to the sector and do not have a workplace mentor, Sygma offers additional practical sessions throughout the year on demand. These are tailored to where individuals are in their development. Contact the bookings team for details.',
    },
    {
      q: 'What certification do I receive?',
      a: 'Successful delegates receive a certificate of course completion confirming that they have passed both the written exam and the practical assessment to PAS128 Level B standard. Delegates on the ProQual Level 3 add-on receive their ProQual certificate separately upon processing by ProQual.',
    },
  ],

  cta: {
    title: 'Enquire About the 5 Day PAS128 Surveyor Course',
    description: 'Open course dates available in Wigan and Worcester throughout the year. Private courses arranged to suit your team. Contact us to check availability, discuss the ProQual Level 3 add-on, or request a quotation.',
    primaryLabel: 'Check Availability and Enquire',
    primaryHref: '/contact',
    secondaryLabel: 'View All Utility Mapping Training',
    secondaryHref: '/training/utility-mapping-surveying',
  },
};
