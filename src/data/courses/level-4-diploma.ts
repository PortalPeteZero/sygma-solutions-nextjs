import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'level-4-diploma',

  metadata: {
    title: 'ProQual Level 4 Diploma in Utility Mapping | Sygma Solutions',
    description: 'ProQual Level 4 Diploma in Utility Mapping and Surveying. Portfolio-based advanced qualification. Ofqual-regulated. For specialist technical practitioners.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-4-diploma' },
    openGraph: {
      title: 'ProQual Level 4 Diploma in Utility Mapping | Sygma Solutions',
      description: 'ProQual RQF Level 4 Diploma in Utility Mapping and Surveying. Advanced technical qualification.',
      url: 'https://sygma-solutions.com/courses/level-4-diploma',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      siteName: SITE_NAME,
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: 'ProQual Level 4 Diploma in Utility Mapping and Surveying',
    sub: 'Ofqual-regulated qualification in advanced utility mapping and surveying. Develop specialist competency in electromagnetic detection and GPR. The second level in the ProQual pathway.',
    images: [
      'GPR_06_ymxpsk',
      'RD_8100_1_aeiaur',
      'GPR_17_jq0zfl',
    ],
    alts: [
      'Advanced GPR survey training for Level 4 diploma',
      'Radiodetection RD8100 equipment used in Level 4 utility mapping',
      'Professional GPR data collection techniques for Level 4 qualification',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 4 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 4 Diploma in Utility Mapping and Surveying',
      description: 'Ofqual-regulated Level 4 Diploma in Utility Mapping and Surveying. Portfolio-based assessment with ongoing tutor support.',
      url: '/courses/level-4-diploma',
      credential: 'Level 4 Diploma in Utility Surveying',
      duration: 'Part-time',
      mode: ['online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 4 Diploma' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: 'Level 4',
      label: 'Ofqual Regulated',
      detail: 'Formal recognition on the Regulated Qualifications Framework.',
    },
    {
      value: 'Level 3 Certificate Required',
      label: 'Prerequisite',
      detail: 'Must complete Level 3 before enrolling in Level 4.',
    },
    {
      value: 'Portfolio-Based',
      label: 'Assessment',
      detail: 'No exams. Evidence-based assessment from your professional practice.',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Qualification For',
    title: 'Designed For',
    items: [
      {
        title: 'Practising Utility Surveyors',
        desc: 'Professionals with practical experience in utility mapping and surveying looking to gain formal recognition of advanced competency.',
      },
      {
        title: 'Candidates Who Have Completed Sygma Training',
        desc: 'Those who have completed Level 3 Certificate and wish to progress to advanced qualification.',
      },
      {
        title: 'Survey Company Owners and Managers',
        desc: 'Leaders in utility surveying organisations who need advanced technical qualifications to demonstrate capability.',
      },
      {
        title: 'TSA/ICES Programme Candidates',
        desc: 'Those progressing through the TSA and ICES Utility Mapping Programme seeking to structure learning into formal qualifications.',
      },
      {
        title: 'Career Progression and CPD',
        desc: 'Professionals seeking formal qualifications to support career advancement and continuing professional development.',
      },
    ],
  },

  infoBar: [
    {
      label: 'Level',
      value: '4 (Ofqual-regulated)',
    },
    {
      label: 'Prerequisite',
      value: 'Level 3 Certificate',
    },
    {
      label: 'Assessment',
      value: 'Evidence portfolio + workbook',
    },
    {
      label: 'Equipment',
      value: 'MALA GPR, Leica DSX, Radiodetection RD8200',
    },
    {
      label: 'Delivery',
      value: 'Wigan centre, online and in-house',
    },
  ],

  about: {
    eyebrow: 'Qualification Overview',
    title: 'What Is the ProQual Level 4 Diploma?',
    paragraphs: [
      'The ProQual Level 4 Diploma in Utility Mapping and Surveying is an Ofqual-regulated qualification that develops advanced competency in electromagnetic detection and ground-penetrating radar (GPR). It is the second level in the ProQual utility mapping pathway and must be completed before progressing to Level 5.',
      'Where Level 3 focused on desktop surveys and site reconnaissance (PAS128 Quality Levels D and C), Level 4 advances into the practical detection phases -- PAS128 Quality Level B. You will develop practical expertise in signal interpretation, depth estimation, and systematic survey methodology across electromagnetic and GPR technologies.',
      'The Level 4 qualification is assessed through structured evidence portfolios and workbooks. This portfolio-based approach means assessment draws on your actual professional practice. You apply real evidence from your utility surveying work, supplemented by knowledge workbooks covering any areas not fully demonstrated in the field. There is no written exam.',
      'Your assessor works alongside you throughout the qualification, helping you identify evidence gaps, plan how to gather evidence, and build confidence in applying advanced techniques. Assessment is continuous and supportive, not a single high-stakes examination at the end.',
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
          value: 'Typically 6-9 months depending on evidence availability',
        },
        {
          label: 'Support',
          value: 'Ongoing assessor mentoring via regular review sessions',
        },
        {
          label: 'Exam',
          value: 'None. Assessment is entirely portfolio and workbook-based',
        },
        {
          label: 'Prerequisites',
          value: 'ProQual Level 3 Certificate in Utility Surveying',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'EM Detection Evidence',
      subheading: 'ICES GEUS01 E and G',
      items: [
        'Advanced electromagnetic detection principles and applications',
        'Use of electromagnetic equipment in active, passive and induction modes',
        'Signal interpretation and anomaly identification',
        'Depth estimation techniques and accuracy assessment',
        'Frequency selection and optimisation for different service types',
        'Avoidance of signal interference and identifying false signals',
        'Equipment calibration and pre-use checks for EM locators',
        'Integration of EM detection with other survey methodologies',
      ],
    },
    practical: {
      heading: 'GPR Evidence',
      subheading: 'ICES GEUS01 F (Part 1)',
      intro: 'Practical GPR competency demonstrated through field data collection and interpretation on real utility sites.',
      items: [
        'Ground-penetrating radar operating principles and limitations',
        'Radargram interpretation and signal recognition',
        'Hyperbola identification and utilities extraction',
        'Depth and velocity calibration methods',
        'Field data collection with GPS integration and positioning',
        'Equipment configuration and antenna selection',
        'Data quality assessment and validation protocols',
        'Systematic GPR survey planning and execution',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Receive',
    title: 'Level 4 Diploma Certification Routes',
    items: [
      {
        title: 'ProQual Level 4 Diploma Certificate',
        desc: 'The formal certificate awarded on successful completion, registered on the Regulated Qualifications Framework (RQF).',
      },
      {
        title: 'Portfolio of Evidence Record',
        desc: 'A comprehensive record of all evidence submitted, assessor feedback and competency sign-off across EM detection and GPR modules.',
      },
      {
        title: 'External Assessment Report',
        desc: 'A detailed report from the external assessor confirming your advanced competency in utility mapping and surveying at Level 4.',
      },
      {
        title: 'Qualification Registered on RQF',
        desc: 'Your qualification is registered on the Regulated Qualifications Framework, making it formally recognised across the UK.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Status',
        title: 'ProQual Approved Centre',
        desc: 'Sygma is an approved centre for ProQual qualifications. All assessors are qualified and externally moderated.',
      },
      {
        eyebrow: 'Expertise',
        title: 'Specialist Assessors',
        desc: 'Your assessor is a utility surveying professional with real-world field experience, not a generalist trainer.',
      },
      {
        eyebrow: 'Support',
        title: 'Portfolio Support',
        desc: 'Ongoing mentoring and guidance throughout your qualification journey. Regular review sessions with your assessor.',
      },
      {
        eyebrow: 'Practice-Led',
        title: 'Evidence From Your Work',
        desc: 'Assessment draws on your actual professional practice and real projects, not artificial exercises.',
      },
      {
        eyebrow: 'Independence',
        title: 'Independent',
        desc: 'No equipment relationships or survey interests. Unbiased, specialist teaching.',
      },
      {
        eyebrow: 'Progression',
        title: 'Career Progression',
        desc: 'Clear progression pathway from Level 3 through Level 4 to Level 5, with ongoing CPD support.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Qualifications',
    title: 'ProQual Utility Mapping Pathway',
    items: [
      {
        eyebrow: 'Level 3',
        title: 'Level 3 Certificate',
        desc: 'Foundation qualification in utility surveying. Desktop skills, site reconnaissance and PAS128 introduction.',
        href: '/courses/level-3-certificate',
      },
      {
        eyebrow: 'Level 5',
        title: 'Level 5 Diploma',
        desc: 'Advanced qualification for practitioners and managers. EM detection, GPR and technical leadership.',
        href: '/courses/level-5-diploma',
      },
      {
        eyebrow: 'Skills Training',
        title: 'GPR Training',
        desc: 'Specialist skills training in ground-penetrating radar operation and interpretation.',
        href: '/courses/gpr-training',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify your practical skills in real conditions.',
      href: '/osca',
    },
    {
      title: 'Bespoke Training',
      desc: 'Tailored technical training to support your qualification journey and develop specific competencies.',
      href: '/contact',
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may be eligible to access training funding support through the CITB Employer Network.',
      'Contact your CITB adviser or Sygma directly to discuss current funding eligibility, available support, and how to access employer network funding for Level 4 qualification.',
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'GPR_06_ymxpsk', alt: 'Advanced GPR training and competency development' },
        { src: 'RD_8100_1_aeiaur', alt: 'Radiodetection equipment used in utility mapping' },
        { src: 'GPR_05_Mala_Compact_mvupzg', alt: 'MALA GPR systems for Level 4 surveying' },
      ],
    },
  ],

  faqs: [
    {
      q: 'How long does Level 4 take to complete?',
      a: 'Most candidates complete within 6-9 months, depending on experience and evidence availability. The timeline depends on how quickly you can gather work-based evidence and progress through assessor-led review sessions. Your assessor will advise on realistic timescales at enrolment.',
    },
    {
      q: 'Is the Level 4 the same as the TSA and ICES programme?',
      a: 'No. The ProQual Level 4 Diploma in Utility Mapping and Surveying is a distinct qualification. The TSA and ICES Utility Mapping Programme (7 modules, 17+ days) provides structured training evidence that supports the Level 4 qualification. Many delegates complete the TSA and ICES programme first, then use that evidence as part of their Level 4 portfolio submission.',
    },
    {
      q: 'Can I study part-time whilst working?',
      a: 'Yes. The Level 4 is portfolio-based and designed for working professionals. You progress at your own pace, applying your professional experience as evidence. Assessor support is provided via regular review sessions (usually monthly) to guide your portfolio development.',
    },
    {
      q: 'What if I don\'t have all the evidence needed when I enrol?',
      a: 'This is normal. Your assessor will help you identify gaps and plan how to gather evidence from your existing work or through additional training. Your assessor is there to support you throughout, not just to assess at the end.',
    },
    {
      q: 'Is there a written exam?',
      a: 'No. The Level 4 assessment is portfolio-based. You submit evidence from your professional practice (reports, site records, assessor observations), supplemented by knowledge workbooks covering any areas not fully demonstrated by workplace evidence. No written exam is required.',
    },
    {
      q: 'Do I need to have completed the TSA/ICES programme first?',
      a: 'No. The TSA and ICES programme is optional and not a prerequisite. However, many candidates find completing structured training first helps accelerate portfolio development. You only need to have completed the Level 3 Certificate to enrol in Level 4.',
    },
    {
      q: 'What equipment do I need access to?',
      a: 'You should have access to the equipment you use in your professional practice. Common equipment includes MALA GPR systems, Leica DSX GNSS, and Radiodetection locators (RD8200/RD8100). Your assessor will work with you to plan how to gather evidence using your available equipment.',
    },
    {
      q: 'Can I appeal my assessment or request a re-assessment?',
      a: 'Yes. All ProQual qualifications include formal appeals processes and opportunities to resubmit evidence against assessment criteria. Your assessor will explain the process and support you through any appeals or reassessment.',
    },
    {
      q: 'What happens after I complete Level 4?',
      a: 'You can progress to the Level 5 Diploma if you wish to develop further technical expertise in management, specialist detection techniques or consultancy. Many candidates also undertake CPD (continuing professional development) through specialist training courses to maintain and develop their skills.',
    },
  ],

  cta: {
    title: 'Enrol in Level 4 Diploma',
    description: 'Portfolio-based assessment with full assessor support. Contact us to discuss enrolment, evidence requirements, and pricing.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
  },
};
