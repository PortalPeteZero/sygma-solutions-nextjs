import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'online-level-5-diploma',

  metadata: {
    title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
    description: 'Online ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Nationally recognised advanced qualification delivered online with flexible study.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-5-diploma' },
    openGraph: {
      title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
      description: 'Online ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Advanced qualification with flexible online delivery.',
      url: 'https://sygma-solutions.com/courses/online-level-5-diploma',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying (Online)',
    sub: 'Nationally recognised Level 5 qualification in utility surveying delivered entirely online. Flexible study with practical assessments conducted in-person at your location or ours. For experienced practitioners seeking advanced competency and technical leadership.',
    image: 'Utility-Mapping-02',
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Online Level 5 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'Online Level 5 Diploma in Utility Mapping',
      description: 'ProQual RQF Level 5 nationally recognised qualification in utility mapping and surveying delivered online.',
      url: '/courses/online-level-5-diploma',
      credential: 'Level 5 Diploma',
      duration: 'Flexible',
      mode: ['online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Online Level 5 Diploma' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: 'Level 5',
      label: 'Ofqual Regulated',
      detail: 'Nationally recognised qualification on the Regulated Qualifications Framework.',
    },
    {
      value: 'Blended Delivery',
      label: 'Online + Practical',
      detail: 'Online learning with in-person practical assessments at your location or ours.',
    },
    {
      value: 'Portfolio & Practical',
      label: 'Assessment',
      detail: 'Evidence-based assessment combined with practical field competency verification.',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Qualification For',
    title: 'Ideal For',
    items: [
      {
        title: 'Experienced Utility Surveyors',
        desc: 'Senior practitioners with substantial field experience seeking formal advanced qualification and technical leadership credentials.',
      },
      {
        title: 'Survey Company Managers and Directors',
        desc: 'Business leaders in utility surveying who need advanced qualifications to demonstrate technical capability and operational expertise.',
      },
      {
        title: 'Consultants and Specialists',
        desc: 'Technical consultants, specialists, and subject matter experts in utility mapping and surveying seeking formal recognition of expertise.',
      },
      {
        title: 'Career Advancement and CPD',
        desc: 'Professionals progressing from Level 3 and Level 4 seeking the highest formal qualification in utility surveying and specialist technical leadership.',
      },
    ],
  },

  infoBar: [
    {
      label: 'Level',
      value: '5 (Ofqual-regulated)',
    },
    {
      label: 'Prerequisite',
      value: 'Level 4 Diploma or equivalent',
    },
    {
      label: 'Delivery',
      value: 'Online with in-person practical assessments',
    },
    {
      label: 'Assessment',
      value: 'Portfolio + practical field assessment',
    },
    {
      label: 'Duration',
      value: '6–12 months (flexible)',
    },
  ],

  about: {
    eyebrow: 'Qualification Overview',
    title: 'What Is the ProQual Level 5 Diploma (Online)?',
    paragraphs: [
      'The ProQual Level 5 Diploma in Utility Mapping and Surveying is an Ofqual-regulated, nationally recognised qualification for experienced practitioners seeking the highest formal qualification in utility surveying. It builds on Level 4 competency, developing expertise in advanced detection techniques, specialist methodologies, and technical leadership in utility surveying.',
      'This online delivery model is designed specifically for experienced professionals who can study flexibly around their work commitments. You progress through advanced technical learning modules at your own pace via online support, complemented by live mentoring sessions. Unlike desk-based learning alone, Level 5 includes practical field assessments conducted in-person -- either at your location or at Sygma\'s Wigan training centre -- to verify your advanced practical competency in real utility surveying environments.',
      'Assessment combines portfolio evidence from your professional practice with practical field verification. Your assessor evaluates evidence of advanced competency in specialist detection methods, project leadership, complex survey planning, and technical decision-making. The practical assessment ensures you can demonstrate advanced techniques confidently in real-world utility surveying conditions.',
      'On completion, you hold the highest formal qualification in the ProQual utility mapping pathway, with evidence of both advanced technical knowledge and verified practical competency. This qualification opens doors to senior technical roles, consultancy, management positions, and recognised expertise in the utility surveying industry.',
    ],
    sidebar: {
      eyebrow: 'Assessment Overview',
      items: [
        {
          label: 'Approach',
          value: 'Portfolio-based evidence plus in-person practical field assessment',
        },
        {
          label: 'Duration',
          value: 'Typically 6–12 months depending on evidence and assessment scheduling',
        },
        {
          label: 'Support',
          value: 'Online mentoring, live sessions, and practical assessor guidance',
        },
        {
          label: 'Practical Assessment',
          value: 'Conducted in-person at your location or Sygma\'s Wigan centre',
        },
        {
          label: 'Prerequisites',
          value: 'ProQual Level 4 Diploma or equivalent advanced competency',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Advanced EM and Technical Competency',
      subheading: 'Specialist Detection and Project Leadership',
      items: [
        'Advanced electromagnetic detection principles and specialist applications',
        'Signal interpretation in complex utility environments and multi-layered services',
        'Depth estimation and accuracy assessment in challenging ground conditions',
        'Frequency optimisation and equipment selection for specialist surveys',
        'Integration of EM, GPR and GNSS in complex utility mapping projects',
        'Quality assurance and quality control in utility surveying',
        'Technical project planning and survey methodology design',
        'Risk assessment and management in complex utility surveying operations',
      ],
    },
    practical: {
      heading: 'Advanced Practical Field Competency',
      subheading: 'Verified In-Person Assessment',
      intro: 'Advanced practical competency demonstrated through in-person field assessment and portfolio evidence from complex utility surveying projects.',
      items: [
        'Advanced field survey planning and methodology implementation',
        'Complex utility detection in multi-service, congested ground environments',
        'Specialist GPR interpretation and advanced radargram analysis',
        'Integration of multiple detection methods in single survey projects',
        'Quality verification and audit of survey data and interpretation',
        'Team leadership and quality management in field operations',
        'Technical decision-making and problem-solving in complex utility scenarios',
        'Communication of findings and technical reporting for complex projects',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Receive',
    title: 'Level 5 Diploma Certification Routes',
    items: [
      {
        title: 'ProQual Level 5 Diploma Certificate',
        desc: 'The formal certificate awarded on successful completion, registered on the Regulated Qualifications Framework (RQF).',
      },
      {
        title: 'Portfolio of Advanced Evidence',
        desc: 'A comprehensive record of all portfolio evidence submitted, assessor feedback, and competency sign-off demonstrating advanced technical expertise.',
      },
      {
        title: 'Practical Assessment Report',
        desc: 'Detailed report from the practical assessor confirming your verified in-person competency in advanced utility mapping techniques.',
      },
      {
        title: 'Qualification Registered on RQF',
        desc: 'Your qualification is registered on the Regulated Qualifications Framework, making it formally recognised as the highest level in utility surveying across the UK.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Flexibility',
        title: 'Online Delivery',
        desc: 'Study the theory and advanced technical knowledge online at your own pace. No requirement to attend classroom sessions. Live mentoring available to support your progress.',
      },
      {
        eyebrow: 'Verified Competency',
        title: 'Practical Assessment',
        desc: 'In-person field assessment at your location or our centre verifies your advanced practical skills in real utility surveying conditions. Online study plus proven practical capability.',
      },
      {
        eyebrow: 'Expertise',
        title: 'Specialist Assessors',
        desc: 'Your assessor is a senior utility surveying professional with real-world experience in advanced techniques and project leadership.',
      },
      {
        eyebrow: 'Practice-Led',
        title: 'Evidence From Your Work',
        desc: 'Assessment draws on your actual professional practice and complex projects. You apply advanced learning to real utility surveying scenarios.',
      },
      {
        eyebrow: 'Approved Centre',
        title: 'ProQual Recognised',
        desc: 'Sygma is an approved ProQual centre. Your Level 5 Diploma is formally recognised and externally moderated.',
      },
      {
        eyebrow: 'Career Progression',
        title: 'Highest Qualification',
        desc: 'Level 5 is the peak of the ProQual utility mapping pathway. Opens doors to senior roles, consultancy, and recognised technical expertise.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Qualifications',
    title: 'ProQual Utility Mapping Pathway',
    items: [
      {
        eyebrow: 'Level 3',
        title: 'Level 3 Certificate (Online)',
        desc: 'Foundation qualification in utility surveying. Online delivery with live MS Teams support. Desktop skills and site reconnaissance.',
        href: '/courses/online-level-3-diploma',
      },
      {
        eyebrow: 'Level 4',
        title: 'Level 4 Diploma',
        desc: 'Advanced qualification covering electromagnetic detection and GPR. Portfolio-based assessment with tutor mentoring.',
        href: '/courses/level-4-diploma',
      },
      {
        eyebrow: 'Specialist Skills',
        title: 'GPR Training',
        desc: 'Specialist skills training in ground-penetrating radar operation and advanced radargram interpretation.',
        href: '/courses/gpr-training',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify your practical skills in real-world field conditions.',
      href: '/osca',
    },
    {
      title: 'Bespoke Training',
      desc: 'Tailored specialist training to support your Level 5 journey and develop bespoke advanced competencies.',
      href: '/contact',
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may be eligible to access training funding support through the CITB Employer Network.',
      'Contact your CITB adviser or Sygma directly to discuss current funding eligibility for Level 5 advanced qualification and how to access employer network support.',
    ],
  },

  faqs: [
    {
      q: 'Is the Level 5 Diploma nationally recognised?',
      a: 'Yes. The ProQual RQF Level 5 Diploma is a nationally recognised qualification on the Regulated Qualifications Framework. It is the highest formal qualification in the utility mapping pathway.',
    },
    {
      q: 'How is the online delivery structured?',
      a: 'The course combines online learning modules and mentoring (flexible pace) with in-person practical assessments. You study theory and advanced techniques online, then practical assessment happens in-person either at your location or at Sygma\'s Wigan training centre.',
    },
    {
      q: 'How long does the Level 5 Diploma take?',
      a: 'Study duration is flexible, typically ranging from 6–12 months depending on your pace, evidence availability, and practical assessment scheduling.',
    },
    {
      q: 'What practical assessments are required?',
      a: 'Practical assessment verifies your advanced competency in specialist detection techniques, complex survey methodology, and technical decision-making in real utility surveying environments.',
    },
    {
      q: 'Can assessments be conducted at my location?',
      a: 'Yes. Practical assessments can be arranged at your premises or at Sygma\'s Wigan training centre, depending on what works best for your circumstances.',
    },
    {
      q: 'Is prior experience required?',
      a: 'You must have completed the ProQual Level 4 Diploma or demonstrate equivalent advanced competency in utility surveying. Level 5 is designed for experienced practitioners seeking the highest qualification.',
    },
    {
      q: 'What if I don\'t have all the evidence needed when I start?',
      a: 'Your assessor will help you identify gaps and plan how to gather evidence from your ongoing professional practice. Your assessor supports you throughout the qualification, not just at the end.',
    },
    {
      q: 'Is there a written exam?',
      a: 'No. Level 5 assessment is portfolio-based combined with in-person practical assessment. You submit evidence from your professional practice and demonstrate advanced competency in field conditions. No written exam.',
    },
    {
      q: 'What happens after Level 5?',
      a: 'Level 5 is the highest formal qualification in the ProQual utility mapping pathway. Many Level 5 graduates move into senior technical roles, consultancy, management positions, or undertake specialist CPD to maintain and extend their expertise.',
    },
  ],

  cta: {
    title: 'Enrol in Online Level 5 Diploma',
    description: 'Advanced qualification combining flexible online study with verified practical assessment. Contact us for enrolment information and to discuss your pathway.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
    secondaryLabel: 'Request Course Information',
    secondaryHref: '/contact',
  },
};
