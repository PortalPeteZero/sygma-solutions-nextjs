import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'online-level-3-diploma',

  metadata: {
    title: 'Online Level 3 Certificate in Utility Mapping | Sygma Solutions',
    description: 'Online Level 3 Certificate in Utility Mapping and Surveying. Flexible online delivery with live tutor support via MS Teams. Entry-level RQF qualification.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-3-diploma' },
    openGraph: {
      title: 'Online Level 3 Certificate in Utility Mapping | Sygma Solutions',
      description: 'Online Level 3 Certificate in Utility Mapping and Surveying. Flexible online delivery with live tutor support.',
      url: 'https://sygma-solutions.com/courses/online-level-3-diploma',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'Online Level 3 Certificate in Utility Mapping and Surveying',
    sub: 'Entry-level RQF qualification delivered entirely online via Microsoft Teams. For operatives and field staff who want formal recognition of their utility mapping competency. Self-paced learning with live tutor support sessions throughout. No classroom attendance required.',
    images: [
      'GPR_06_ymxpsk',
      'MALA-GPR-11',
      'Advanced-EM-04',
    ],
    alts: [
      'Online Level 3 utility mapping training',
      'MS Teams-based online qualification',
      'Online learning support for Level 3 qualification',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Online Level 3 Certificate' },
    ],
  },

  schemas: {
    course: {
      name: 'Online Level 3 Certificate in Utility Mapping and Surveying',
      description: 'Online Level 3 Certificate delivered via Microsoft Teams. Entry-level Ofqual-regulated qualification.',
      url: '/courses/online-level-3-diploma',
      credential: 'Level 3 Certificate in Utility Surveying',
      duration: 'Part-time',
      mode: ['online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Online Level 3 Certificate' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: 'Level 3',
      label: 'Ofqual Regulated',
      detail: 'Formal recognition on the Regulated Qualifications Framework.',
    },
    {
      value: 'Online Delivery',
      label: 'Flexible Format',
      detail: 'Study from home with live MS Teams tutor support and self-paced modules.',
    },
    {
      value: 'Portfolio Assessment',
      label: 'No Exams',
      detail: 'Evidence-based assessment using your professional practice.',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Qualification For',
    title: 'Ideal For',
    items: [
      {
        title: 'Utility Field Operatives',
        desc: 'Professionals in utility surveying and cable avoidance roles seeking formal recognition of foundational competency without classroom requirements.',
      },
      {
        title: 'Remote and Distributed Teams',
        desc: 'Companies with teams across multiple locations who need flexible online access to training and assessment support.',
      },
      {
        title: 'Career Changers',
        desc: 'Professionals entering utility mapping from related sectors who can study around existing employment and home commitments.',
      },
      {
        title: 'CPD and Career Progression',
        desc: 'Experienced operatives ready to formalise skills and progress toward Level 4 and Level 5 qualifications.',
      },
    ],
  },

  infoBar: [
    {
      label: 'Level',
      value: '3 (Ofqual-regulated)',
    },
    {
      label: 'Delivery',
      value: 'Online via Microsoft Teams',
    },
    {
      label: 'Assessment',
      value: 'Portfolio-based, no exam',
    },
    {
      label: 'Prerequisite',
      value: 'None',
    },
    {
      label: 'Duration',
      value: '6–12 months (flexible)',
    },
  ],

  about: {
    eyebrow: 'Qualification Overview',
    title: 'What Is the Online Level 3 Certificate?',
    paragraphs: [
      'The Online Level 3 Certificate in Utility Mapping and Surveying is an Ofqual-regulated qualification designed for utility field operatives and surveying professionals. It develops foundational competency in utility detection, site reconnaissance, and PAS128 Quality Levels D and C -- the desktop and early fieldwork phases of utility surveying.',
      'Unlike traditional classroom-based qualifications, this online format is built for working professionals. You progress through structured learning modules at your own pace, with regular live MS Teams sessions where tutors guide your development, answer questions, and provide mentoring. There is no requirement to attend a physical training centre or leave your location.',
      'Assessment is entirely portfolio-based. You gather evidence from your actual utility surveying work -- site reports, survey records, observations from real projects -- and submit this alongside knowledge workbooks covering any areas not fully demonstrated in your fieldwork. Your assessor works alongside you to ensure your evidence clearly demonstrates competency. There is no written examination.',
      'On completion of the Level 3 Certificate, you can progress to the Level 4 Diploma for advanced technical qualification, or use this qualification to support career development in utility surveying and cable avoidance roles.',
    ],
    sidebar: {
      eyebrow: 'Assessment Overview',
      items: [
        {
          label: 'Approach',
          value: 'Portfolio-based evidence from your professional practice',
        },
        {
          label: 'Duration',
          value: 'Typically 6–12 months depending on evidence availability',
        },
        {
          label: 'Support',
          value: 'Live MS Teams sessions fortnightly; email and assessor mentoring',
        },
        {
          label: 'Exam',
          value: 'None. Assessment is entirely portfolio and workbook-based',
        },
        {
          label: 'Prerequisites',
          value: 'None. Entry-level qualification',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Desktop and Reconnaissance',
      subheading: 'PAS128 Quality Levels D and C',
      items: [
        'Utility mapping principles and best practice across UK infrastructure',
        'PAS128 standard application and understanding of quality levels',
        'Desktop survey techniques: plans, records, utility identification',
        'Site reconnaissance planning and health and safety considerations',
        'Service identification and colour coding standards',
        'Surface features recognition and marking conventions',
        'Site safety and risk assessment in utility work',
        'Record keeping and professional documentation standards',
      ],
    },
    practical: {
      heading: 'Field Evidence and Site Work',
      subheading: 'Early Fieldwork Competency',
      intro: 'Practical competency demonstrated through site assessments and field observations recorded in your professional practice.',
      items: [
        'Site reconnaissance and visual identification methods',
        'Surface feature mapping and utility location observations',
        'Health and safety protocols on utility sites',
        'Use of basic location equipment for utility indication',
        'Hazard identification and risk management in the field',
        'Photography and documentation of utility features',
        'Collaborative working with site teams and contractors',
        'Communication of findings and site-specific reports',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Receive',
    title: 'Level 3 Certificate Outcomes',
    items: [
      {
        title: 'Level 3 Certificate',
        desc: 'The formal certificate awarded on successful completion, registered on the Regulated Qualifications Framework (RQF).',
      },
      {
        title: 'Portfolio of Evidence',
        desc: 'A comprehensive record of all evidence submitted, assessor feedback and competency sign-off.',
      },
      {
        title: 'Assessment Report',
        desc: 'Detailed feedback from your assessor confirming your foundational utility surveying competency at Level 3.',
      },
      {
        title: 'Progression Pathway',
        desc: 'Clear route to Level 4 Diploma for those seeking advanced technical qualification and career development.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Flexibility',
        title: 'Study From Home',
        desc: 'No need to travel to a training centre. Online delivery via MS Teams fits around your work and home commitments.',
      },
      {
        eyebrow: 'Support',
        title: 'Live Tutoring',
        desc: 'Regular live sessions with experienced tutors who understand field work. Not pre-recorded content. Real people, real answers.',
      },
      {
        eyebrow: 'Practice-Focused',
        title: 'Your Work Is Your Evidence',
        desc: 'Assessment draws directly from your actual utility surveying practice. No artificial exercises. Your real projects count.',
      },
      {
        eyebrow: 'Approved Centre',
        title: 'ProQual Trusted Provider',
        desc: 'Sygma is an approved ProQual centre with qualified, experienced assessors. Your qualification is formally recognised.',
      },
      {
        eyebrow: 'Career Progression',
        title: 'Clear Pathway',
        desc: 'Level 3 is the foundation for Level 4 and Level 5 progression. Build formally recognised expertise step by step.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Qualifications',
    title: 'ProQual Utility Mapping Pathway',
    items: [
      {
        eyebrow: 'In-Person Alternative',
        title: 'Level 3 Certificate (In-Centre)',
        desc: 'Traditional classroom-based version of the Level 3 Certificate with tutor-led sessions at our Wigan training centre.',
        href: '/courses/level-3-certificate',
      },
      {
        eyebrow: 'Level 4',
        title: 'Level 4 Diploma',
        desc: 'Advanced qualification covering electromagnetic detection and GPR. Portfolio-based assessment with tutor mentoring.',
        href: '/courses/level-4-diploma',
      },
      {
        eyebrow: 'Level 5',
        title: 'Level 5 Diploma (Online)',
        desc: 'Advanced online qualification for practitioners and managers seeking full operational competency and technical leadership.',
        href: '/courses/online-level-5-diploma',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify your practical skills in real field conditions.',
      href: '/osca',
    },
    {
      title: 'Bespoke Training',
      desc: 'Tailored online or in-person training to support your qualification journey and develop specific competencies.',
      href: '/contact',
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may be eligible to access training funding support through the CITB Employer Network.',
      'Contact your CITB adviser or Sygma directly to discuss current funding eligibility and how to access employer network funding for online Level 3 training.',
    ],
  },

  faqs: [
    {
      q: 'How is the online Level 3 delivered?',
      a: 'Live sessions via Microsoft Teams (fortnightly) plus self-paced learning modules. You progress through the qualification content with structured assessor support throughout. Sessions are recorded so you can catch up if you miss a live session.',
    },
    {
      q: 'How long does it take to complete?',
      a: 'Most delegates complete within 6–12 months. Your progress depends on how quickly you can gather evidence from your work and complete assessor-led review sessions.',
    },
    {
      q: 'Can I take this if I am working full-time?',
      a: 'Yes. The online Level 3 is designed for working professionals. You progress at your own pace with MS Teams sessions scheduled fortnightly. Live sessions are recorded, so you can attend flexibly.',
    },
    {
      q: 'What do I need to provide as evidence?',
      a: 'Portfolio evidence from your professional practice in utility mapping or surveying roles. Your existing work and site records generate much of what is needed for the qualification.',
    },
    {
      q: 'Is there a written exam?',
      a: 'No. The Level 3 assessment is entirely portfolio-based. You submit evidence from your professional practice supplemented by knowledge workbooks covering any areas not fully demonstrated in your fieldwork.',
    },
    {
      q: 'What equipment or access do I need?',
      a: 'You need access to Microsoft Teams, a computer or tablet, and the ability to use basic documentation tools (Word, email). You do not need specialist utility mapping equipment for the online Level 3.',
    },
    {
      q: 'Can I progress to Level 4 after Level 3?',
      a: 'Yes. On completion of the Level 3 Certificate, you are eligible to enrol in the Level 4 Diploma, which covers advanced electromagnetic detection and GPR techniques.',
    },
    {
      q: 'How much does it cost?',
      a: 'Contact us for current pricing and payment options. Many employers access funding through CITB levy support or other training grants.',
    },
  ],

  cta: {
    title: 'Enrol in Online Level 3 Certificate',
    description: 'Flexible online delivery with live tutor support via Microsoft Teams. Contact us for enrolment information and programme start dates.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
    secondaryLabel: 'Request More Information',
    secondaryHref: '/contact',
  },
};
