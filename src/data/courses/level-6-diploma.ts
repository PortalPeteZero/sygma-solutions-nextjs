import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'level-6-diploma',

  metadata: {
    title: 'ProQual Level 6 Diploma in Utility Mapping | Sygma Solutions',
    description: 'ProQual RQF Level 6 Diploma in Utility Mapping and Surveying Management. The highest qualification in the pathway. For experienced surveyors, team leaders and project managers.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-6-diploma' },
    openGraph: {
      title: 'ProQual Level 6 Diploma in Utility Mapping | Sygma Solutions',
      description: 'ProQual RQF Level 6 Diploma in Utility Mapping and Surveying Management. Leadership and management qualification for utility survey professionals.',
      url: 'https://sygma-solutions.com/courses/level-6-diploma',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      siteName: SITE_NAME,
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management',
    sub: 'The highest qualification in the utility surveying pathway. Designed for experienced surveyors ready to lead teams, manage projects and drive operational excellence.',
    images: [
      'GPR_06_ymxpsk',
      'RD_8100_1_aeiaur',
      'GPR_17_jq0zfl',
    ],
    alts: [
      'Advanced surveying management for Level 6 diploma',
      'Professional utility mapping leadership and team management',
      'Senior surveying operations and quality management techniques',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 6 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management',
      description: 'Ofqual-regulated Level 6 Diploma in Utility Mapping and Surveying Management. Workplace-based portfolio assessment for senior practitioners and managers.',
      url: '/courses/level-6-diploma',
      credential: 'Level 6 Diploma in Utility Mapping and Surveying Management',
      duration: 'Flexible',
      mode: ['workplace'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 6 Diploma' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: 'Level 6',
      label: 'Management Qualification',
      detail: 'The highest qualification in the ProQual utility surveying pathway.',
    },
    {
      value: 'Level 3 + 4 + 5',
      label: 'Prerequisites',
      detail: 'Must complete all three lower levels before enrolling in Level 6.',
    },
    {
      value: 'Workplace Portfolio',
      label: 'Assessment',
      detail: 'Evidence-based assessment from your professional practice and team management.',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Qualification For',
    title: 'Designed For',
    items: [
      {
        title: 'Survey Team Leaders',
        desc: 'Experienced practitioners managing utility survey teams and responsible for operational decisions, quality standards and team performance.',
      },
      {
        title: 'Project Managers',
        desc: 'Professionals managing utility mapping and surveying projects across civil engineering, infrastructure development and construction projects.',
      },
      {
        title: 'Operations Managers',
        desc: 'Senior operations managers responsible for surveying operations, process management, resource allocation and performance metrics.',
      },
      {
        title: 'Senior Surveyors Moving Into Management',
        desc: 'Experienced senior surveyors transitioning into management roles who need formal qualification in operational and team leadership competency.',
      },
      {
        title: 'Training and Assessment Roles',
        desc: 'Senior practitioners developing training programmes, mentoring junior staff and conducting competency assessments within utility surveying organisations.',
      },
      {
        title: 'Contractors and Framework Operators',
        desc: 'Senior leaders and operators of utility mapping contractors and framework organisations managing multiple teams and projects.',
      },
    ],
  },

  infoBar: [
    {
      label: 'Level',
      value: '6 (RQF)',
    },
    {
      label: 'Prerequisites',
      value: 'Level 3 + 4 + 5',
    },
    {
      label: 'Assessment',
      value: 'Workplace evidence portfolio',
    },
    {
      label: 'Pricing',
      value: 'Price on application',
    },
    {
      label: 'Delivery',
      value: 'Workplace-based with assessor support',
    },
  ],

  about: {
    eyebrow: 'Qualification Overview',
    title: 'What Is the ProQual Level 6 Diploma?',
    paragraphs: [
      'The ProQual Level 6 Diploma in Utility Mapping and Surveying Management is the highest qualification in the ProQual pathway. This is a management-level qualification designed for experienced surveyors, team leaders, project managers and operations managers ready to demonstrate expert leadership and operational competency. It focuses on managing site surveying across civil engineering, infrastructure development and construction projects at the highest level.',
      'Where Levels 3, 4 and 5 focus on technical competency in detection, surveying and quality assurance, Level 6 extends this into strategic and operational management. You will develop expert competency in managing survey operations, managing teams and people, project management and delivery, health and safety compliance, quality management systems, team leadership and development, commercial and financial management, technical oversight and quality assurance, and data management and ICT systems.',
      'The Level 6 qualification is assessed through structured workplace evidence portfolios. This portfolio-based approach means assessment draws on your actual professional practice as a senior manager or team leader. You apply real evidence from your operational management, team leadership and project delivery, supplemented by knowledge workbooks covering any areas not fully demonstrated in the field. There is no written exam.',
      'Your assessor works alongside you throughout the qualification, helping you identify evidence gaps, plan how to gather evidence and demonstrate management-level competency. Assessment is continuous and supportive, reflecting the reality of senior-level management practice. This is the qualification for senior practitioners stepping into formal leadership roles and organisations committed to the highest standards in utility survey management.',
    ],
    sidebar: {
      eyebrow: 'Assessment Details',
      items: [
        {
          label: 'Approach',
          value: 'Portfolio-based evidence from your professional management practice',
        },
        {
          label: 'Duration',
          value: 'Flexible timeline depending on role and evidence availability',
        },
        {
          label: 'Support',
          value: 'Ongoing assessor mentoring and guidance throughout',
        },
        {
          label: 'Exam',
          value: 'None. Assessment is entirely portfolio and workbook-based',
        },
        {
          label: 'Prerequisites',
          value: 'Level 3 Certificate + Level 4 Diploma + Level 5 Diploma',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Management Competency Areas',
      items: [
        'Managing utility survey operations across projects and teams',
        'Project management and successful project delivery',
        'Health and safety management and compliance',
        'Quality management systems and quality assurance',
        'Team leadership, development and performance management',
        'Commercial management and financial control',
        'Technical oversight and quality standards',
        'Data management and ICT systems for utility mapping operations',
      ],
    },
    practical: {
      heading: 'Assessment Approach',
      intro: 'Evidence-based assessment from your professional management and operational practice.',
      items: [
        'Portfolio of evidence from operational management and team leadership',
        'Project delivery records and team performance documentation',
        'Health and safety management records and compliance evidence',
        'Quality management and audit records',
        'Team development and performance management records',
        'Commercial and financial records demonstrating management competency',
        'Assessor observations from operational environment',
        'Knowledge workbooks covering management competency areas',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Receive',
    title: 'Level 6 Diploma Certification Routes',
    items: [
      {
        title: 'Level 6 Diploma on RQF',
        desc: 'The formal Level 6 Diploma certificate awarded on successful completion, registered on the Regulated Qualifications Framework (RQF).',
      },
      {
        title: 'Portfolio of Evidence Record',
        desc: 'A comprehensive record of all evidence submitted, assessor feedback and management competency sign-off across all operational and leadership areas.',
      },
      {
        title: 'External Assessment Report',
        desc: 'A detailed report from the external assessor confirming your expert management competency in utility survey operations and team leadership.',
      },
      {
        title: 'Enhanced Career Prospects',
        desc: 'Formal recognition of your senior management capability, opening doors to senior operational roles, consultancy and strategic leadership positions.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Partnership',
        title: 'One Provider Every Level',
        desc: 'Sygma is your single provider across all levels. Continuity from Level 3 through to Level 6 ensures consistent, aligned support throughout your qualification journey.',
      },
      {
        eyebrow: 'Expertise',
        title: 'Assessors Who Know the Industry',
        desc: 'Your assessor is an experienced utility surveying manager with real operational and team leadership experience. They understand the realities of managing teams and projects.',
      },
      {
        eyebrow: 'Practical',
        title: 'Workplace-Based Assessment',
        desc: 'Assessment draws directly from your operational management practice. No artificial exercises. Your real work is the evidence.',
      },
      {
        eyebrow: 'Impartial',
        title: 'Independent and Objective',
        desc: 'Assessment is conducted independently with external moderation. No equipment relationships or survey interests. Purely objective competency assessment.',
      },
      {
        eyebrow: 'Accreditation',
        title: 'Accredited Assessment Centre',
        desc: 'Sygma is an approved ProQual centre for Level 6 assessment. All assessors are qualified and externally moderated.',
      },
      {
        eyebrow: 'Pathway',
        title: 'Career Pathway Continuity',
        desc: 'Your progression from Level 3 through Level 6 with a single provider ensures coherent support and recognition throughout your career development.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Qualifications',
    title: 'ProQual Utility Mapping Pathway',
    items: [
      {
        eyebrow: 'Level 5',
        title: 'Level 5 Diploma',
        desc: 'Specialist qualification for senior practitioners in surveying instruments, geometry and quality assurance. Required prerequisite for Level 6.',
        href: '/courses/level-5-diploma',
      },
      {
        eyebrow: '5-Day Training',
        title: '5-Day PAS128',
        desc: 'Intensive practical training in advanced detection and GPR techniques. Popular skills update for Level 6 candidates.',
        href: '/courses/5-day-pas128-surveyor',
      },
      {
        eyebrow: 'Industry Standards',
        title: 'TSA and ICES Utility Mapping',
        desc: 'Advanced standards and framework knowledge for utility mapping professionals and managers.',
        href: '/courses/tsa-ices-utility-mapping',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify your practical and operational management skills in real conditions.',
      href: '/osca',
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may be eligible to access training funding support through the CITB Employer Network.',
      'Level 6 management qualifications are eligible for CITB funding. Contact your CITB adviser or Sygma directly to discuss current funding eligibility, available support, and how to access employer network funding for your Level 6 qualification.',
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'GPR_06_ymxpsk', alt: 'Professional surveying management and team leadership' },
        { src: 'RD_8100_1_aeiaur', alt: 'Utility mapping operations and quality management' },
        { src: 'GPR_17_jq0zfl', alt: 'Senior surveying leadership and operational excellence' },
      ],
    },
  ],

  faqs: [
    {
      q: 'Do I need Level 5 first?',
      a: 'Yes. You must complete Level 3, Level 4 and Level 5 before enrolling in Level 6. This ensures the structured progression through the qualification pathway and builds the knowledge and experience required for management-level assessment.',
    },
    {
      q: 'How long does Level 6 take to complete?',
      a: 'Level 6 timeline is flexible and depends on your role, organisational context and evidence availability. Most candidates progress through the qualification whilst continuing in their senior management role. Your assessor will agree realistic timescales at enrolment based on your circumstances.',
    },
    {
      q: 'What is the cost?',
      a: 'Level 6 is priced on application due to the bespoke nature of the qualification and individual circumstances. Pricing depends on assessment support requirements, duration and organisational context. Contact Sygma Solutions directly to discuss your specific needs and obtain a quotation.',
    },
    {
      q: 'Is Level 6 assessed by exam?',
      a: 'No. Level 6 is entirely portfolio-based assessment. You submit evidence from your professional management practice, supplemented by knowledge workbooks covering any areas not fully demonstrated by workplace evidence. There is no written exam.',
    },
    {
      q: 'Can I do Level 6 alongside my job?',
      a: 'Yes. Level 6 is designed for working managers and team leaders. The portfolio-based approach is flexible, allowing you to progress at your own pace while continuing in your role. Assessment is built around your actual professional practice, so your work becomes part of the evidence.',
    },
    {
      q: 'Are Level 6 qualifications recognised by ICES and CSTMB?',
      a: 'Level 6 is a formal Ofqual-regulated qualification demonstrating expert management competency in utility surveying. Whilst not equivalent to ICES Professional or CSTMB certification, it is widely recognised by employers and provides strong evidence for professional membership applications and advancement into consultancy roles.',
    },
    {
      q: 'What kind of career progression does Level 6 support?',
      a: 'Level 6 opens doors to senior operational roles, consultancy, technical leadership, and strategic management positions. It demonstrates expert competency in managing utility surveying operations, teams and projects. Many Level 6 candidates progress into senior manager, operations director or specialist consultancy roles.',
    },
    {
      q: 'Are there mandatory units?',
      a: 'Level 6 is a holistic qualification in utility survey management. All competency areas (operations, people, projects, quality, health and safety, commercial) must be demonstrated. There are no "optional" units. Assessment covers your full management capability across all operational and leadership areas.',
    },
    {
      q: 'What evidence do I need to submit?',
      a: 'You submit evidence from your professional management practice: operational records, project delivery documentation, team performance and development records, quality assurance records, health and safety management evidence, commercial and financial records, and assessor observations from your operational environment. All evidence must demonstrate management-level competency.',
    },
    {
      q: 'Can I appeal my assessment?',
      a: 'Yes. All ProQual qualifications include formal appeals processes and opportunities to resubmit evidence. Your assessor will explain the process fully and support you through any appeals or reassessment.',
    },
  ],

  cta: {
    title: 'Enquire About the ProQual Level 6 Utility Mapping Diploma',
    description: 'The highest qualification in the utility surveying pathway. For experienced team leaders, project managers and operations managers ready to demonstrate expert management competency.',
    primaryLabel: 'Enquire',
    primaryHref: '/contact',
    secondaryLabel: 'View Level 5',
    secondaryHref: '/courses/level-5-diploma',
  },
};
