import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE } from '@/lib/metadata';

const faqs = [
  {
    q: "How is the online Level 3 delivered?",
    a: "Live sessions via Microsoft Teams with experienced assessors. Not pre-recorded.",
  },
  {
    q: "What equipment do I need?",
    a: "A computer (not a phone) and a stable internet connection. Screen size matters for the course material.",
  },
  {
    q: "How long does it take to complete?",
    a: "Timescales vary by candidate. Most complete within 6-12 months alongside normal work duties.",
  },
  {
    q: "Do I need any prior qualifications?",
    a: "No formal prerequisites, but you should have practical experience in utility surveying or location work.",
  },
  {
    q: "Is the qualification the same as the classroom version?",
    a: "Yes. Same ProQual Level 3 Certificate. Same units, same assessment criteria, same certificate.",
  },
  {
    q: "Can my employer claim CITB funding?",
    a: "Sygma is a CITB ATO. Speak to your CITB Employer Network adviser about available support.",
  },
  {
    q: "What practical skills will I develop during this training course?",
    a: "You will develop skills in locating buried services using active and passive modes on electromagnetic locators, interpreting stats plans and utility plans, surveying small site areas as part of a two man team, and producing utility mapping drawings that record the depth and position of underground utility networks.",
  },
  {
    q: "How is the Level 3 Certificate in Utility Mapping assessed?",
    a: "Assessment is through a combination of a written exam under exam conditions, observed practical assessment, and a portfolio of workplace evidence. Candidates must achieve the overall pass mark in each component and demonstrate their ability to undertake utility mapping and surveying tasks to the required standard.",
  },
  {
    q: "Do I need to undertake site visits during the online route?",
    a: "Yes. You will need to undertake practical site visits to gather workplace evidence. The online element covers theory, mentoring and portfolio support, but proof of competence must be demonstrated through real utility surveying work on site.",
  },
  {
    q: "What equipment and methods are covered in this training course?",
    a: "The training course covers electromagnetic locators including active, passive and genny modes, as well as a ground penetrating radar overview. You will learn methods for locating underground utilities in different situations across construction and infrastructure sites.",
  },
];

export const courseData: CoursePageData = {
  slug: 'online-level-3-diploma',

  metadata: {
    title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
    description: 'Ofqual-regulated Level 3 Diploma in Utility Mapping delivered online. Work at your own pace with full assessor support and mentoring via MS Teams.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-3-diploma' },
    openGraph: {
      title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
      description: 'Ofqual-regulated Level 3 Diploma in Utility Mapping delivered online. Work at your own pace with full assessor support and mentoring via MS Teams.',
      url: 'https://sygma-solutions.com/courses/online-level-3-diploma',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual RQF Level 3 Diploma in Utility Mapping and Surveying (Online)',
    sub: 'Work towards your ProQual Level 3 Certificate in Utility Mapping at your own pace, from wherever you work. This training course provides full assessor support and mentoring via MS Teams throughout. No hidden fees. No extra charges for additional assessments. Contact us to discuss enrolment and pricing.',
    images: [
      '/images/courses/MALA-GPR-05.webp',
      '/images/courses/MALA-GPR-08.webp',
      '/images/courses/Advanced-EM-02.webp',
    ],
    alts: [
      'Electromagnetic utility detection techniques covered in the online Level 3 course',
      'GPR survey equipment featured in the online ProQual Level 3 diploma',
      'Electromagnetic utility detection techniques covered in the online Level 3 course',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Online Level 3 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 3 Diploma in Utility Mapping and Surveying (Online)',
      description: 'Ofqual-regulated Level 3 Diploma in Utility Mapping delivered online. Work at your own pace with full assessor support and mentoring via MS Teams.',
      url: '/courses/online-level-3-diploma',
      credential: 'Level 3 Diploma in Utility Mapping',
      duration: 'Part-time',
      mode: ['online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Online Level 3 Diploma' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    {
      label: 'Qualification',
      value: 'ProQual RQF Level 3 Diploma',
    },
    {
      label: 'Delivery',
      value: 'Online via MS Teams',
    },
    {
      label: 'Duration',
      value: 'Self-paced (weeks to months)',
    },
    {
      label: 'Pricing',
      value: 'Fixed (contact us for details)',
    },
  ],

  whoFor: {
    eyebrow: 'Is This Right for You?',
    title: 'This Course Is for You If...',
    items: [
      {
        title: 'You are working in or moving into utility mapping, utility surveying or desktop survey work and need a formal RQF certificate in utility mapping to reflect your role.',
        desc: 'You are working in or moving into utility mapping, utility surveying or desktop survey work and need a formal RQF certificate in utility mapping to reflect your role.',
      },
      {
        title: 'You are unable to attend a week-long in-person fast-track course and want to work through the qualification at your own pace while continuing in your current role.',
        desc: 'You are unable to attend a week-long in-person fast-track course and want to work through the qualification at your own pace while continuing in your current role.',
      },
      {
        title: 'Your employer or client framework requires a ProQual Level 3 Certificate for engineers performing or aiming for utility mapping roles in construction.',
        desc: 'Your employer or client framework requires a ProQual Level 3 Certificate for engineers performing or aiming for utility mapping roles in construction.',
      },
      {
        title: 'You want full assessor support and mentoring throughout, rather than a purely self-directed distance learning experience.',
        desc: 'You want full assessor support and mentoring throughout, rather than a purely self-directed distance learning experience.',
      },
    ],
  },

  about: {
    eyebrow: 'Qualification Content',
    title: 'What the Level 3 Covers',
    paragraphs: [
      'The ProQual Level 3 Certificate in Utility Mapping and Surveying is the formal entry-level training course for engineers and professionals working in utility mapping, utility surveying and desktop survey roles. This certificate in utility mapping sits above the CAT operator level and below the specialist Level 4 and Level 5 qualifications. Candidates who undertake this qualification will develop the skills and ability to locate underground utilities across construction and infrastructure settings. The Level 3 covers two mandatory units.',
      'Assessment for the ProQual Level 3 Certificate in Utility Mapping is through a combination of documentary evidence against each unit\'s criteria and a written exam completed under exam conditions. Candidates must achieve the overall pass mark and provide proof that they have demonstrated the methods learned throughout the training course. Where workplace evidence does not cover the full range, knowledge evidence must be provided. Observed assessment may also be used to verify that candidates can successfully complete practical tasks. A knowledge workbook completed by the candidate is used alongside workplace submissions.',
    ],
    sidebar: {
      eyebrow: 'Typical Candidates',
      items: [
        {
          label: 'Utility surveyors in their first few years of professional practice',
          value: 'Utility surveyors in their first few years of professional practice',
        },
        {
          label: 'Desktop survey technicians building towards formal qualification status',
          value: 'Desktop survey technicians building towards formal qualification status',
        },
        {
          label: 'Operatives progressing beyond CAT operator level into surveying roles',
          value: 'Operatives progressing beyond CAT operator level into surveying roles',
        },
        {
          label: 'Site engineers and technicians whose role includes locating underground utilities, service location and utility mapping',
          value: 'Site engineers and technicians whose role includes locating underground utilities, service location and utility mapping',
        },
        {
          label: 'Candidates who have completed CAT1 or CAT1 Plus accreditation and are ready for the next level',
          value: 'Candidates who have completed CAT1 or CAT1 Plus accreditation and are ready for the next level',
        },
      ],
    },
  },

  courseContent: {
    eyebrow: 'Qualification Content',
    title: 'What the Level 3 Covers',
    theory: {
      heading: 'Unit 1',
      subheading: 'Utility Identification and Site Reconnaissance',
      items: [
        'This unit covers identifying underground utilities and utility networks, colour coding of buried services, regulations and guidelines relating to the location of buried utilities, reading maps and drawings, and site reconnaissance. Candidates learn to locate buried services across different situations, survey small site areas as part of a two man team, and record the depth of underground utility services. It meets the requirements for PAS128 Survey Quality Levels D and C.',
      ],
    },
    practical: {
      heading: 'Unit 2',
      subheading: 'Carry Out Desktop Surveys and Communicate Findings',
      items: [
        'This unit covers the compilation of desktop utility surveys, identifying what data is required from stats plans and other utility plans, survey methods, communicating information, and preparing survey drawings. Candidates undertake comparison of desktop findings against the same survey site data, produce an overview of utility networks present, and demonstrate their ability to compile plans for construction and engineering teams. It also meets the requirements for PAS128 Survey Quality Levels D and C.',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'Process',
    title: 'How the Online Route Works',
    intro: 'The online route allows you to work through the qualification at your own pace, from your normal place of work. You are not left to work through materials alone. A Sygma assessor provides full support and mentoring throughout, available via MS Teams.',
    items: [
      {
        title: 'Enrolment',
        desc: 'You enrol with Sygma. Sygma registers you with ProQual as a candidate.',
      },
      {
        title: 'Materials Issued',
        desc: 'You receive your e-portfolio framework and workbooks. These are your evidence guides for each unit.',
      },
      {
        title: 'Evidence Gathering',
        desc: 'You undertake workplace evidence gathering against the assessment criteria for each unit. Sygma\'s assessor supports you throughout this training course.',
      },
      {
        title: 'Assessor Support Sessions',
        desc: 'Regular MS Teams sessions with your Sygma assessor. Sessions are not recorded. A computer (not a phone) is required due to screen size.',
      },
      {
        title: 'Workbook Completion',
        desc: 'You complete knowledge workbooks to cover any areas not fully evidenced by workplace submissions.',
      },
      {
        title: 'Assessment and Submission',
        desc: 'Your completed evidence portfolio is assessed by Sygma and submitted to ProQual for quality assurance.',
      },
      {
        title: 'Certification',
        desc: 'On successful completion, ProQual issues your RQF Level 3 Certificate. This certificate in utility mapping is registered on the national qualifications framework.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Flexible Online Format',
        title: 'Flexible Online Format',
        desc: 'Complete your Level 3 Certificate in Utility Mapping remotely with live training and tutor support. Not pre-recorded content.',
      },
      {
        eyebrow: 'ProQual Approved Centre',
        title: 'ProQual Approved Centre',
        desc: 'Your qualification is assessed and certified by a recognised awarding organisation. No shortcuts.',
      },
      {
        eyebrow: 'Specialist Assessors',
        title: 'Specialist Assessors',
        desc: 'Sygma\'s assessors are experienced utility mapping engineers who work at the intersection of training and professional practice.',
      },
      {
        eyebrow: 'Full Portfolio Support',
        title: 'Full Portfolio Support',
        desc: 'You are not alone. A Sygma assessor is available to support you throughout the qualification.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent',
        desc: 'Sygma is independent and owns the training process from start to finish.',
      },
      {
        eyebrow: 'Same Qualification, Flexible Delivery',
        title: 'Same Qualification, Flexible Delivery',
        desc: 'Same ProQual Level 3 Diploma, same assessment criteria, same certificate. Online just works better for you.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Choosing Your Route',
    title: 'Online Route or Fast-Track In-Person?',
    intro: 'The Level 3 Diploma is available via two routes. The right choice depends on your circumstances.',
    items: [
      {
        eyebrow: 'Online Route (this page)',
        title: 'Online Route (this page)',
        desc: 'Self-paced, online training course. Evidence gathered from your own workplace.',
        href: '/courses/online-level-3-diploma',
      },
      {
        eyebrow: '5-Day Surveyor Programme (in-person)',
        title: '5-Day Surveyor Programme (in-person)',
        desc: 'Intensive in-person training course, typically one week.',
        href: '/courses/5-day-pas128-surveyor',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support for your enrolment. Availability varies by employer and is not guaranteed.',
    ],
  },

  faqs,

  cta: {
    title: 'Enrol or Enquire',
    description: 'To discuss enrolment on this utility mapping training course, pricing, or whether the online route is right for your circumstances, get in touch with the Sygma team. No hidden fees, no extra charges for additional assessments.',
    primaryLabel: 'Enquire About the Level 3',
    primaryHref: '/contact',
    secondaryLabel: 'Call Us',
    secondaryHref: 'tel:+442039718252',
  },
};
