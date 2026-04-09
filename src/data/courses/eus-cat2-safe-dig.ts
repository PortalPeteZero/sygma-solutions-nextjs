import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'eus-cat2-safe-dig',

  metadata: {
    title: 'EUSR CAT2 Safe Dig Training | Safe Excavation Course | Sygma',
    description: 'EUSR CAT2 Safe Dig training course. Safe excavation qualification covering classroom theory, live site practical, and written assessment. Built for operatives excavating near buried services.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig' },
    openGraph: {
      title: 'EUSR CAT2 Safe Dig Training | Safe Excavation Course | Sygma',
      description: 'EUSR CAT2 Safe Dig training course. Safe excavation qualification covering classroom theory, live site practical, and written assessment. Built for operatives excavating near buried services.',
      url: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'EUSR CAT2 Safe Dig: EUSR-Registered Safe Excavation Training',
    sub: 'The complete safe digging course. Classroom theory, live site practical, and written assessment. Built for every operative who excavates near buried services.',
    image: 'Safe-Dig-14',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'EUSR CAT2 Safe Dig' },
    ],
  },

  schemas: {
    course: {
      name: 'EUSR CAT2 Safe Dig Training',
      description: 'EUSR-registered safe excavation training covering classroom theory, live site practical, and written assessment for operatives excavating near buried services.',
      url: '/courses/eus-cat2-safe-dig',
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

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Site Operatives Responsible for Excavation',
        desc: 'Anyone who excavates near buried utilities needs this qualification to operate safely and meet HSG47 competence requirements.',
      },
      {
        title: 'Supervisors Overseeing Dig Operations',
        desc: 'Those managing excavation teams and responsible for ensuring safe digging practices on site.',
      },
      {
        title: 'Organisations Requiring Safe Dig Competency',
        desc: 'Companies across construction and utilities sectors that need to ensure their teams are trained to EUSR standards.',
      },
      {
        title: 'Anyone Combining CAT1 and CAT2',
        desc: 'Operatives who need both cable location (CAT1) and safe excavation (CAT2) competencies in a single qualification path.',
      },
    ],
  },

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
          value: 'EUSR CAT2 Safe Dig Competency Card',
        },
        {
          label: 'Duration',
          value: '1 Day',
        },
        {
          label: 'Format',
          value: 'Classroom + On-Site Practical',
        },
        {
          label: 'Max Delegates',
          value: '8',
        },
        {
          label: 'Equipment',
          value: 'Spade, PPE, Locating equipment',
        },
        {
          label: 'Site Requirement',
          value: 'Live dig area with buried metallic utilities',
        },
        {
          label: 'Pre-Requisite',
          value: 'EUSR CAT1 recommended',
        },
        {
          label: 'CITB Funding',
          value: 'CITB Approved Training Organisation',
        },
        {
          label: 'Certificate Validity',
          value: '3 years',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Classroom Theory',
      items: [
        'Current legislation HSG47 and GS6',
        'Site-specific risk assessments and permits to dig',
        'Occupational health hazards',
        'Excavation hazards',
        'Reading and interpreting utility plans',
        'Detecting and marking underground services',
        'Safe excavation practices',
        'Trench support systems and service exposure',
      ],
    },
    practical: {
      heading: 'On-Site Practical',
      items: [
        'Complete site-specific risk assessment and permit to dig',
        'Use service plans to identify utility routes',
        'Operate locating equipment to confirm service positions',
        'Begin safe dig operation',
        'Excavate to 500mm depth',
        'Dig horizontally to expose buried service',
        'Support exposed service',
        'Complete site reinstatement',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'CAT2 Safe Dig Certification Routes',
    items: [
      {
        title: 'EUSR CAT2 Safe Dig Competency Card',
        desc: 'The industry-standard EUSR CAT2 qualification. On successful completion, your competency card is registered on the EUSR database and valid for 3 years. Widely recognised across UK construction sites and required by most principal contractors.',
      },
      {
        title: 'Personalised Training Record',
        desc: 'Detailed record of classroom theory sessions (T1-T24) and practical assessment outcomes (P1-P4), documenting competencies achieved during the course.',
      },
      {
        title: 'Practical Assessment Evidence',
        desc: 'Documented evidence of safe excavation practices demonstrated during the live site practical, including risk assessment and permit to dig competency.',
      },
      {
        title: 'Ongoing Support',
        desc: 'Access to Sygma support and guidance for maintaining competency and keeping up with regulatory updates over the 3-year validity period.',
      },
    ],
  },

  siteRequirements: {
    items: [
      {
        label: 'Live Dig Area',
        detail: 'A suitable site with buried metallic utilities (cable, pipe or duct) accessible for safe excavation practice.',
      },
      {
        label: 'Meeting Room',
        detail: 'Suitable for up to 8 people with projector or screen and sufficient space for written assessment.',
      },
      {
        label: 'STATS Plans',
        detail: 'Buried service drawings for the practical site showing utility locations and routes.',
      },
      {
        label: 'Delegate Requirements',
        detail: 'Delegates must bring photo ID and appropriate PPE in compliance with national and company health and safety requirements.',
      },
    ],
    note: 'Sygma\'s dedicated training centre in Wigan is available as an alternative venue at no extra cost.',
  },

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may be able to access training funding support through the CITB Employer Network.',
      'Contact your CITB adviser for current eligibility and funding options. Sygma is a CITB Approved Training Organisation and provides all required documentation to support funding applications.',
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Competence',
        title: 'Trained and Competent Operatives',
        desc: 'Formal safety assessment ensures operatives meet competence standards for safe excavation work near buried services.',
      },
      {
        eyebrow: 'Process',
        title: 'Safe System of Work',
        desc: 'Classroom and practical safety training covers systematic approach to planning and executing safe excavation.',
      },
      {
        eyebrow: 'Technique',
        title: 'Safe Excavation Techniques',
        desc: 'Hands-on training in correct digging methods, depth management, and protection of exposed services.',
      },
      {
        eyebrow: 'Protection',
        title: 'Protecting Exposed Services',
        desc: 'Practical skills in supporting and protecting buried utilities once exposed during excavation.',
      },
      {
        eyebrow: 'Standards',
        title: 'NRSWA Highway Operations',
        desc: 'Training aligned with National Road and Street Works Association standards for safe street works.',
      },
      {
        eyebrow: 'Records',
        title: 'Evidenced Training Records',
        desc: 'Written and practical assessment results provided for compliance documentation and audit.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Standards',
        title: 'Beyond Minimum Specification',
        desc: 'Sygma CAT2 content exceeds the EUSR specification, providing deeper coverage of hazards and practical techniques.',
      },
      {
        eyebrow: 'Integration',
        title: 'Pairs with CAT1',
        desc: 'Designed to work seamlessly with EUSR CAT1 training for operatives who need both locate and excavate competencies.',
      },
      {
        eyebrow: 'People',
        title: 'Specialist Trainers',
        desc: 'Directly employed specialists with real-world excavation and utility experience, not generalist H&S trainers.',
      },
      {
        eyebrow: 'Assessment',
        title: 'Real Practical Assessment',
        desc: 'Structured on-site practical in real conditions with live buried services. The goal is competent operatives, not just certificates.',
      },
      {
        eyebrow: 'Independence',
        title: 'Independent',
        desc: 'No surveys, no equipment manufacturing, no utility company relationships. Unbiased training focused on your safety.',
      },
      {
        eyebrow: 'Delivery',
        title: 'We Come to You',
        desc: 'Delivered at your site nationwide. Travel included. No hidden extras. Your team trains in familiar conditions.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Further Training',
    title: 'Related Courses',
    intro: 'Sygma offers a range of utility avoidance and safe excavation training programmes to suit different needs and regulatory requirements.',
    items: [
      {
        eyebrow: 'Cable Location',
        title: 'EUSR CAT1',
        desc: 'The cable location training that precedes CAT2. Covers Genny and CAT equipment operation and utility detection.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Alternative Standard',
        title: 'ProQual CAT2',
        desc: 'An alternative to EUSR CAT2, accredited through ProQual with equivalent practical assessment.',
        href: '/courses/proqualcat2-training',
      },
      {
        eyebrow: 'Combined Pathway',
        title: 'EUSR CAT1 and CAT2 Combined',
        desc: 'Complete locate and excavate training in a single combined programme, suitable for teams needing both competencies.',
        href: '/courses/eus-cat1-cat2-combined',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world safe excavation skills.',
      href: '/osca',
    },
    {
      title: 'Bespoke Training',
      desc: 'Design a tailored programme around your site risks, equipment, and team size.',
      href: '/contact',
    },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Safe-Dig-01', alt: 'Safe Dig excavation training in progress' },
        { src: 'Safe-Dig-05', alt: 'Delegates learning safe excavation techniques' },
        { src: 'Safe-Dig-09', alt: 'Live site practical safe digging assessment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Safe-Dig-14', alt: 'EUSR CAT2 Safe Dig training on site' },
        { src: 'on-site-training-03', alt: 'On-site excavation safety training' },
        { src: 'on-site-training-01', alt: 'Practical safe dig assessment' },
      ],
    },
  ],

  faqs: [
    {
      q: 'What is CAT2 Safe Dig training?',
      a: 'CAT2 Safe Dig is EUSR-registered training for the safe excavation process near buried utilities. It focuses on the digging team and safe working practices. Unlike CAT1 which covers locating services, CAT2 covers how to safely excavate, expose and protect services once located.',
    },
    {
      q: 'Who should attend CAT2 training?',
      a: 'Excavation supervisors, site operatives, and teams responsible for managing the digging process near buried services. Anyone combining CAT1 and CAT2 competencies should attend.',
    },
    {
      q: 'Is CAT2 EUSR-registered?',
      a: 'Yes. The CAT2 Safe Dig qualification is EUSR-registered and valid for 3 years.',
    },
    {
      q: 'How long is the course?',
      a: 'CAT2 training is a 1-day format combining classroom theory in the morning and live site practical in the afternoon.',
    },
    {
      q: 'Can it be delivered in-house?',
      a: 'Yes. Sygma delivers CAT2 training at your premises nationwide, using your site for the practical assessment.',
    },
    {
      q: 'What is the difference between CAT1 and CAT2?',
      a: 'CAT1 covers cable location and detection using Genny and CAT equipment. CAT2 covers safe excavation and protecting services during the digging process. Both are required for full competency in utility avoidance.',
    },
    {
      q: 'What is HSG47?',
      a: 'HSG47 is the HSE guidance on avoiding danger from underground services. It requires that anyone excavating near buried utilities must be trained, competent, and working to a safe system of work. CAT2 training meets these requirements.',
    },
    {
      q: 'What qualifications do the Sygma trainers hold?',
      a: 'All Sygma trainers are specialist utility professionals with real-world excavation and field experience. They are not generalist H&S trainers. Many hold CICES membership and PAS128 field experience.',
    },
    {
      q: 'Can we combine CAT1 and CAT2 training?',
      a: 'Yes. Sygma offers combined CAT1 and CAT2 courses that cover both cable location and safe excavation in a structured programme.',
    },
    {
      q: 'Is the course suitable for delegates with no previous excavation experience?',
      a: 'Yes. The course is designed to take delegates from basic safety awareness to competent safe excavation practice.',
    },
  ],

  cta: {
    title: 'Book EUSR CAT2 Safe Dig Training',
    description: 'On-site delivery available nationwide. Your team trains at your location with your actual buried services and site conditions.',
    primaryLabel: 'Check Availability and Book',
    primaryHref: '/contact',
    secondaryLabel: 'Get in Touch',
    secondaryHref: '/contact',
  },
};
