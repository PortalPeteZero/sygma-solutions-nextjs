import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'online-level-5-diploma',

  metadata: {
    title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
    description: 'Ofqual-regulated Level 5 Diploma in Utility Mapping delivered online. Senior-level qualification with full assessor support and mentoring via MS Teams.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-5-diploma' },
    openGraph: {
      title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
      description: 'Ofqual-regulated Level 5 Diploma in Utility Mapping delivered online. Senior-level qualification with full assessor support and mentoring via MS Teams.',
      url: 'https://sygma-solutions.com/courses/online-level-5-diploma',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying (Online)',
    sub: 'Formal recognition of senior-level competency in utility mapping and surveying. Work at your own pace with full assessor support and mentoring throughout, delivered via MS Teams. No hidden fees. No extra charges for additional assessments. Contact us to discuss enrolment and pricing.',
    images: [
      'MALA-GPR-06',
      'MALA-GPR-11',
      'Advanced-EM-04',
    ],
    alts: [
      'Advanced EM locating methods taught in the online Level 5 diploma programme',
      'Professional GPR survey techniques covered in the online Level 5 course',
      'Advanced EM locating methods taught in the online Level 5 diploma programme',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Online Level 5 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 5 Diploma in Utility Mapping and Surveying (Online)',
      description: 'Ofqual-regulated Level 5 Diploma in Utility Mapping delivered online. Senior-level qualification with full assessor support and mentoring via MS Teams.',
      url: '/courses/online-level-5-diploma',
      credential: 'Level 5 Diploma in Utility Surveying',
      duration: 'Part-time',
      mode: ['online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Online Level 5 Diploma' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    {
      label: 'Qualification',
      value: 'ProQual RQF Level 5',
    },
    {
      label: 'Delivery',
      value: 'MS Teams (self-paced)',
    },
    {
      label: 'Duration',
      value: 'Flexible (your schedule)',
    },
    {
      label: 'Pricing',
      value: 'Fixed (contact us)',
    },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-06', alt: 'Online Level 5 Diploma - practical session' },
        { src: 'Advanced-EM-08', alt: 'Online Level 5 Diploma - hands-on assessment' },
        { src: 'MALA-GPR-32', alt: 'Online Level 5 Diploma - electromagnetic survey practical' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-01', alt: 'Online Level 5 Diploma training support' },
        { src: 'MALA-GPR-17', alt: 'Utility survey training for Level 5 qualification' },
        { src: 'Utility-Mapping-02', alt: 'Level 5 qualification practical demonstration' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-33', alt: 'Level 5 Diploma training with equipment' },
        { src: 'MALA-GPR-29', alt: 'GPR survey training for online Level 5' },
        { src: 'Utility-Mapping-02', alt: 'Online Level 5 qualification assessment' },
      ],
    },
  ],

  whoFor: {
    eyebrow: 'Who This Is For',
    title: 'This Course Is for You If...',
    items: [
      {
        title: 'Experienced utility surveyors',
        desc: 'You are an experienced utility mapping or surveying professional seeking formal RQF Level 5 qualification to reflect your level of competency and responsibility.',
      },
      {
        title: 'Progression to Level 5',
        desc: 'You hold or are working towards Level 3 or Level 4 and are ready to progress to the next stage of the ProQual qualification pathway.',
      },
      {
        title: 'Employer or framework requirements',
        desc: 'Your employer, framework, or career progression requires evidence of senior-level competency in utility mapping and surveying as a formal, regulated qualification.',
      },
      {
        title: 'Flexible study with support',
        desc: 'You want to work through the qualification at your own pace, drawing on your existing professional experience as evidence, with a Sygma assessor supporting you throughout.',
      },
    ],
  },

  about: {
    eyebrow: 'Qualification Content',
    title: 'What the Level 5 Covers',
    paragraphs: [
      'The ProQual RQF Level 5 Diploma in Utility Mapping and Surveying is the advanced practitioner-level qualification in the Sygma qualification pathway. It recognises a high level of competency in utility surveying, mapping methodology, PAS128 practice, and the professional responsibilities that come with senior roles in this field.',
      'The Level 5 goes beyond the technical foundations covered at Level 3 and the specialist technical depth of Level 4. At Level 5, the qualification recognises the ability to plan, manage, and take professional responsibility for utility mapping programmes at a senior level.',
      'Assessment is evidence-based. Candidates build a portfolio of workplace evidence demonstrating competency across the qualification units, supported by knowledge workbooks and assessor-led review sessions via MS Teams.',
    ],
    sidebar: {
      eyebrow: 'Assessment Overview',
      items: [
        {
          label: 'Approach',
          value: 'Portfolio-based evidence with assessor support',
        },
        {
          label: 'Duration',
          value: 'Flexible timescale',
        },
        {
          label: 'Support',
          value: 'MS Teams assessor support sessions',
        },
        {
          label: 'Materials',
          value: 'E-portfolio framework and knowledge workbooks',
        },
        {
          label: 'Prerequisites',
          value: 'Level 4 Diploma or equivalent experience',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Qualification Units',
      subheading: 'Mandatory Units and Assessment',
      items: [
        'Y/507/1370 -- Agree project requirements and plan site surveying in geomatics and site surveying management (Level 6)',
        'D/507/1371 -- Plan methods, resources and systems to meet project requirements in geomatics and site surveying management (Level 5)',
        'H/507/1372 -- Site surveying procedures for construction and the built environment (Level 4)',
        'K/507/1373 -- Establish and maintain the dimensional control and setting out of construction projects in geomatics and site surveying (Level 4)',
        'M/507/1374 -- Establish and operate technical information systems in geomatics and site surveying management (Level 5)',
        'T/507/1375 -- Identify, assess and present spatial data in geomatics and site surveying management (Level 6)',
      ],
    },
    practical: {
      heading: 'How the Online Route Works',
      subheading: 'Seven Steps to Qualification',
      items: [
        'Enrolment -- You enrol with Sygma. Sygma registers you with ProQual as a Level 5 candidate.',
        'Materials Issued -- You receive your e-portfolio framework and workbooks covering the Level 5 qualification units.',
        'Evidence Gathering -- You build your evidence portfolio from your existing professional practice. Sygma\'s assessor supports you throughout.',
        'Assessor Support Sessions -- Regular MS Teams sessions with your Sygma assessor to review progress, discuss evidence, and prepare for submission. Sessions are not recorded. A computer (not a phone) is required.',
        'Knowledge Workbooks -- You complete knowledge workbooks to cover any areas not fully demonstrated by workplace evidence.',
        'Assessment and Submission -- Your completed evidence portfolio is assessed by Sygma and submitted to ProQual for external quality assurance.',
        'Certification -- On successful completion, ProQual issues your RQF Level 5 Diploma certificate.',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'Certification and Recognition',
    items: [
      {
        title: 'ProQual Level 5 Diploma in Underground Utility Mapping',
        desc: 'The formal certificate awarded on successful completion, registered on the Regulated Qualifications Framework.',
      },
      {
        title: 'Online Portfolio Submission Record',
        desc: 'A comprehensive record of your evidence portfolio and assessor feedback.',
      },
      {
        title: 'External Assessment Report',
        desc: 'Detailed report from ProQual confirming your competency assessment.',
      },
      {
        title: 'Qualification Registered on the RQF',
        desc: 'Your qualification is registered on the Regulated Qualifications Framework, making it formally recognised across the UK.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'ProQual Approved',
        title: 'ProQual Approved Centre status',
        desc: 'Your Level 5 Diploma is issued by a regulated awarding organisation and recognised across the industry.',
      },
      {
        eyebrow: 'Transparent Pricing',
        title: 'Fixed, transparent pricing',
        desc: 'No hidden fees. No extra charges for additional assessments. The price you agree at enrolment is the price you pay.',
      },
      {
        eyebrow: 'Senior Assessors',
        title: 'Experienced assessors who work at senior level',
        desc: 'At Level 5, your evidence is assessed by practitioners who understand what senior-level competency looks like in practice, not just in a workbook.',
      },
      {
        eyebrow: 'Full Support',
        title: 'Full assessor support throughout',
        desc: 'You are supported from enrolment to certification. This is not a self-study package with occasional check-ins.',
      },
      {
        eyebrow: 'Pathway',
        title: 'The complete pathway in one place',
        desc: 'If you hold Level 3 or Level 4, Level 5 is the natural next step. Level 6 is available after that. You do not need to switch providers or re-register with a different organisation.',
      },
      {
        eyebrow: 'Management Qualification',
        title: 'Flexible Online Format',
        desc: 'Complete your Level 5 remotely with live tutor support and full portfolio guidance.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Other Qualifications in the Pathway',
    items: [
      {
        eyebrow: 'Level 3',
        title: 'Online Level 3 Diploma',
        desc: 'Complete your Level 3 remotely with live tutor support if you haven\'t already qualified.',
        href: '/courses/online-level-3-diploma',
      },
      {
        eyebrow: 'Level 5 (In-Person)',
        title: 'Level 5 Diploma',
        desc: 'The fast-track in-person route to the same ProQual Level 5 Diploma if you prefer classroom-based learning.',
        href: '/courses/level-5-diploma',
      },
      {
        eyebrow: 'Level 6',
        title: 'Level 6 Diploma',
        desc: 'Diploma in Utility Mapping and Surveying Management. The advanced route after Level 5.',
        href: '/courses/level-6-diploma',
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

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support for your Level 5 enrolment. Availability varies by employer and is not guaranteed.',
    ],
  },

  faqs: [
    {
      q: 'How is the online Level 5 delivered?',
      a: 'Live sessions via Microsoft Teams. Portfolio-based assessment with ongoing tutor support.',
    },
    {
      q: 'What prior qualifications do I need?',
      a: 'Level 4 Diploma or equivalent experience in utility mapping at management level.',
    },
    {
      q: 'How long does it take to complete?',
      a: 'Most candidates complete within 12--18 months alongside normal duties.',
    },
    {
      q: 'Is this the same qualification as the in-person route?',
      a: 'Yes. Same ProQual Level 5 Diploma, same assessment criteria, same certificate.',
    },
    {
      q: 'What evidence do I need to provide?',
      a: 'Portfolio evidence from your real work. Your existing management responsibilities generate much of what is needed.',
    },
    {
      q: 'Can my employer claim CITB funding?',
      a: 'Sygma is a CITB ATO. Speak to your CITB Employer Network adviser about available support.',
    },
  ],

  cta: {
    title: 'Enrol or Enquire',
    description: 'To discuss enrolment at Level 5, your existing qualifications and experience, or to find out whether the online route is right for your situation, get in touch with the Sygma team.',
    primaryLabel: 'Enquire About the Level 5',
    primaryHref: '/contact',
    secondaryLabel: 'Call Us',
    secondaryHref: 'tel:+442039718252',
  },
};
