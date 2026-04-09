import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'level-5-diploma',

  metadata: {
    title: 'ProQual Level 5 Diploma in Utility Mapping | Sygma Solutions',
    description: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Highest operational qualification. Portfolio-based assessment. For senior surveyors and managers.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-5-diploma' },
    openGraph: {
      title: 'ProQual Level 5 Diploma in Utility Mapping | Sygma Solutions',
      description: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Highest operational qualification for utility mapping professionals.',
      url: 'https://sygma-solutions.com/courses/level-5-diploma',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      siteName: SITE_NAME,
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: 'ProQual Level 5 Diploma in Utility Mapping and Surveying',
    sub: 'The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying instruments, geometric principles, and ICT.',
    images: [
      'GPR_06_ymxpsk',
      'RD_8100_1_aeiaur',
      'GPR_17_jq0zfl',
    ],
    alts: [
      'Advanced GPR survey training for Level 5 diploma',
      'Radiodetection RD8100 equipment used in Level 5 utility mapping',
      'Professional GPR data collection techniques for Level 5 qualification',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 5 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 5 Diploma in Utility Mapping and Surveying',
      description: 'Ofqual-regulated Level 5 Diploma in Utility Mapping and Surveying. Highest operational qualification with portfolio-based assessment.',
      url: '/courses/level-5-diploma',
      credential: 'Level 5 Diploma in Utility Surveying',
      duration: '5 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 5 Diploma' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: 'Level 5',
      label: 'Ofqual Regulated',
      detail: 'Highest operational qualification. Formal recognition on the Regulated Qualifications Framework.',
    },
    {
      value: 'Level 3 + Level 4 Required',
      label: 'Prerequisites',
      detail: 'Must complete Level 3 Certificate and Level 4 Diploma before enrolling in Level 5.',
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
        title: 'Senior Utility Surveyors',
        desc: 'Experienced practitioners seeking formal recognition of expert-level competency in utility mapping, surveying instruments and geometric principles.',
      },
      {
        title: 'Survey Team Leaders and Technical Managers',
        desc: 'Leaders and managers in utility surveying organisations who need advanced technical qualifications to demonstrate management-level capability.',
      },
      {
        title: 'TSA/ICES Programme Candidates',
        desc: 'Those progressing through the TSA and ICES Utility Mapping Programme seeking to structure learning into formal qualifications.',
      },
      {
        title: 'Professional Membership Applicants',
        desc: 'Professionals seeking formal qualifications as part of professional membership applications or technical registration.',
      },
      {
        title: 'PAS128 Quality Level A Organisations',
        desc: 'Staff from organisations pursuing PAS128 Quality Level A accreditation requiring highest-level utility mapping qualification.',
      },
      {
        title: '5-Day PAS128 Course Alumni',
        desc: 'Candidates who have completed the 5-day PAS128 intensive course and wish to structure learning into formal qualification.',
      },
    ],
  },

  infoBar: [
    {
      label: 'Level',
      value: '5 (Ofqual-regulated)',
    },
    {
      label: 'Prerequisites',
      value: 'Level 3 + Level 4',
    },
    {
      label: 'Assessment',
      value: 'Evidence portfolio + workbook',
    },
    {
      label: 'Equipment',
      value: 'Total station, GNSS, MALA GPR, RD8200',
    },
    {
      label: 'Delivery',
      value: 'Wigan, 5-day fast-track, in-house',
    },
  ],

  about: {
    eyebrow: 'Qualification Overview',
    title: 'What Is the ProQual Level 5 Diploma?',
    paragraphs: [
      'The ProQual Level 5 Diploma in Utility Mapping and Surveying is the highest operational qualification in utility mapping and surveying. It is Ofqual-regulated and must be completed after the Level 3 Certificate and Level 4 Diploma. The Level 5 qualification extends professional competency beyond detection methodologies into the surveying instruments, geometric principles and information communication technology (ICT) required for advanced utility mapping operations.',
      'Where Level 4 focused on electromagnetic detection and GPR (PAS128 Quality Level B), Level 5 advances into the specialist surveying and quality assurance phases. You will develop expert competency in total station operations, GNSS surveying, three-dimensional coordinate geometry, least squares adjustment, ICT systems for utility mapping, and alignment with the full ICES GEUS framework. This is the qualification for specialists, team leaders and organisations pursuing PAS128 Quality Level A.',
      'The Level 5 qualification is assessed through structured evidence portfolios and workbooks. This portfolio-based approach means assessment draws on your actual professional practice at a senior level. You apply real evidence from your utility surveying work and team management, supplemented by knowledge workbooks covering any areas not fully demonstrated in the field. There is no written exam.',
      'Your assessor works alongside you throughout the qualification, helping you identify evidence gaps, plan how to gather evidence, and build confidence in applying expert-level techniques. Assessment is continuous and supportive, not a single high-stakes examination at the end. This is the qualification for senior practitioners, managers and organisations committed to the highest standards in utility mapping.',
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
          value: 'Typically 6-12 months depending on evidence availability',
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
          value: 'Level 3 Certificate + Level 4 Diploma',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Detection and GPR Evidence',
      subheading: 'ICES GEUS01 E, G, F',
      items: [
        'Advanced electromagnetic detection principles and applications',
        'Ground-penetrating radar operating principles, signal interpretation and data validation',
        'Integration of EM and GPR methodologies in professional practice',
        'Advanced depth estimation and confidence assessment techniques',
        'Systematic survey planning and quality assurance',
      ],
    },
    practical: {
      heading: 'Surveying Instruments, Geometry and ICT',
      subheading: 'ICES GEUS02-04: Instruments, Geometry, ICT',
      intro: 'Expert-level competency in total station operations, GNSS surveying, geometric principles and utility mapping ICT systems.',
      items: [
        'Total station operation, calibration and advanced survey techniques',
        'GNSS surveying principles, positioning accuracy and quality control',
        'Three-dimensional coordinate geometry and coordinate transformation',
        'Least squares adjustment and network analysis',
        'ICT systems for utility mapping, data management and quality assurance',
        'Integration of surveying data with detection evidence and utility records',
        'PAS128 Quality Assurance Framework and compliance',
        'Team leadership and quality management in utility surveying operations',
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
        title: 'Portfolio of Evidence Record',
        desc: 'A comprehensive record of all evidence submitted, assessor feedback and competency sign-off across surveying instruments, geometry and ICT modules.',
      },
      {
        title: 'External Assessment Report',
        desc: 'A detailed report from the external assessor confirming your expert competency in utility mapping and surveying at Level 5.',
      },
      {
        title: 'RQF Registration',
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
        desc: 'Your assessor is a utility surveying professional with real-world field experience and senior-level expertise in surveying instruments and management.',
      },
      {
        eyebrow: 'Support',
        title: 'Portfolio Support',
        desc: 'Ongoing mentoring and guidance throughout your qualification journey. Regular review sessions with your specialist assessor.',
      },
      {
        eyebrow: 'Management-Level',
        title: 'Management-Level Qualification',
        desc: 'Level 5 is designed for senior practitioners and team leaders. Recognised as a management-level qualification in utility mapping.',
      },
      {
        eyebrow: 'Independence',
        title: 'Independent',
        desc: 'No equipment relationships or survey interests. Unbiased, specialist teaching and assessment.',
      },
      {
        eyebrow: 'Evidence From Your Work',
        title: 'Evidence From Your Work',
        desc: 'Assessment draws on your actual professional practice and real projects, not artificial exercises. Reflects your genuine expertise.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Qualifications',
    title: 'ProQual Utility Mapping Pathway',
    items: [
      {
        eyebrow: 'Level 4',
        title: 'Level 4 Diploma',
        desc: 'Advanced qualification in EM detection and GPR. Required prerequisite for Level 5.',
        href: '/courses/level-4-diploma',
      },
      {
        eyebrow: 'Level 6',
        title: 'Level 6 Diploma',
        desc: 'Specialist qualification for consultants and quality assurance specialists. Advanced progression after Level 5.',
        href: '/courses/level-6-diploma',
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
      'Contact your CITB adviser or Sygma directly to discuss current funding eligibility, available support, and how to access employer network funding for Level 5 qualification.',
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'GPR_06_ymxpsk', alt: 'Advanced GPR training and expert competency development' },
        { src: 'RD_8100_1_aeiaur', alt: 'Radiodetection equipment used in senior utility mapping' },
        { src: 'GPR_17_jq0zfl', alt: 'Professional surveying techniques for Level 5 diploma' },
      ],
    },
  ],

  faqs: [
    {
      q: 'What is the difference between Level 4 and Level 5?',
      a: 'Level 4 focuses on electromagnetic detection and GPR (PAS128 Quality Level B). Level 5 extends this to include total station operations, GNSS surveying, geometric principles, ICT systems and quality assurance (PAS128 Quality Level A). Level 5 is the qualification for senior practitioners, managers and organisations pursuing the highest standards.',
    },
    {
      q: 'Do I need to complete Level 3 and Level 4 first?',
      a: 'Yes. You must complete the Level 3 Certificate and Level 4 Diploma before enrolling in Level 5. This ensures a structured progression through the qualification pathway and builds the knowledge base required for expert-level assessment.',
    },
    {
      q: 'How long does Level 5 take to complete?',
      a: 'Most candidates complete within 6-12 months, depending on experience and evidence availability. The timeline depends on how quickly you can gather senior-level work evidence and progress through assessor-led review sessions. Your assessor will advise on realistic timescales at enrolment.',
    },
    {
      q: 'What is the fastest route to complete Level 5?',
      a: 'Complete Level 3 (typically 3-5 days) first. Then complete Level 4 (typically 6-9 months) whilst building a portfolio of evidence. With your Level 4 complete and evidence already gathered, you can progress to Level 5, which typically takes 6-12 months with ongoing assessor support. Total timeline: 12-24 months from start to Level 5 completion.',
    },
    {
      q: 'Is Level 5 the same as professional membership or PAS128 Quality Level A?',
      a: 'No. The ProQual Level 5 Diploma is a formal qualification assessed against ICES GEUS standards. Professional membership and PAS128 Quality Level A are separate credentials. However, Level 5 qualification is often a requirement or strong evidence for professional membership applications and PAS128 Level A assessment.',
    },
    {
      q: 'Can I study part-time whilst working?',
      a: 'Yes. The Level 5 is portfolio-based and designed for experienced working professionals. You progress at your own pace, applying your professional experience and team management evidence as part of the assessment. Assessor support is provided via regular review sessions to guide your portfolio development.',
    },
    {
      q: 'What kind of evidence do I need to submit for Level 5?',
      a: 'You submit evidence from your professional practice at a senior level: survey reports, site records, team records, equipment calibration records, quality assurance documents and assessor observations from real projects. Evidence should demonstrate competency in total station operations, GNSS surveying, geometric principles, ICT systems management and team leadership.',
    },
    {
      q: 'Can I appeal my assessment or request a re-assessment?',
      a: 'Yes. All ProQual qualifications include formal appeals processes and opportunities to resubmit evidence against assessment criteria. Your assessor will explain the process and support you through any appeals or reassessment.',
    },
    {
      q: 'What equipment do I need access to for Level 5?',
      a: 'You should have access to professional surveying equipment used in your practice: total station, GNSS receiver, ground-penetrating radar (MALA or equivalent), and detection equipment (Radiodetection RD8200 or equivalent). Your assessor will work with you to plan how to gather evidence using your available equipment and workplace context.',
    },
    {
      q: 'What happens after I complete Level 5?',
      a: 'You can progress to the Level 6 Diploma if you wish to develop further expertise in consultancy, quality assurance or technical leadership. Many candidates also undertake CPD (continuing professional development) through specialist training courses to maintain and develop their skills. Level 5 is also often a stepping stone to professional membership or PAS128 Quality Level A assessment.',
    },
    {
      q: 'Is there a written exam for Level 5?',
      a: 'No. The Level 5 assessment is portfolio-based. You submit evidence from your professional practice, supplemented by knowledge workbooks covering any areas not fully demonstrated by workplace evidence. No written exam is required.',
    },
    {
      q: 'Can I use evidence from the 5-day PAS128 intensive course to support Level 5?',
      a: 'Yes. Evidence from structured training programmes like the 5-day PAS128 course, the TSA and ICES programme, or other professional development can be used to support your Level 5 portfolio. However, this must be combined with evidence from your ongoing professional practice to demonstrate sustained competency.',
    },
  ],

  cta: {
    title: 'Enquire About the Level 5 Diploma',
    description: 'The highest operational qualification in utility mapping and surveying. Portfolio-based assessment with specialist assessor support.',
    primaryLabel: 'Enquire',
    primaryHref: '/contact',
    secondaryLabel: 'View Level 6',
    secondaryHref: '/courses/level-6-diploma',
  },
};
