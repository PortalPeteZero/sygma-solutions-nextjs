import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'level-3-certificate',

  metadata: {
    title: 'ProQual Level 3 Utility Mapping Course | Sygma Solutions',
    description: 'ProQual Level 3 Certificate in Utility Mapping and Surveying. Ofqual-regulated qualification to locate underground utilities and buried services.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-3-certificate' },
    openGraph: {
      title: 'ProQual Level 3 Utility Mapping Course | Sygma Solutions',
      description: 'ProQual Level 3 Certificate in Utility Mapping and Surveying. Ofqual-regulated qualification to locate underground utilities and buried services.',
      url: 'https://sygma-solutions.com/courses/level-3-certificate',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual Level 3 Certificate in Utility Mapping and Surveying',
    sub: 'The nationally recognised, Ofqual-regulated entry qualification for utility surveyors. Full assessor support throughout. Contact us to discuss enrolment and pricing.',
    images: ['MALA-GPR-01', 'MALA-GPR-03', 'Advanced-EM-01'],
    alts: [
      'Advanced electromagnetic locating techniques during ProQual Level 3 training',
      'MALA ground penetrating radar unit used in Level 3 utility mapping coursework',
      'Advanced electromagnetic locating techniques during ProQual Level 3 training',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 3 Certificate' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 3 Certificate in Utility Mapping and Surveying',
      description: 'The nationally recognised, Ofqual-regulated entry qualification for utility surveyors. Full assessor support throughout. Contact us to discuss enrolment and pricing.',
      url: '/courses/level-3-certificate',
      credential: 'Level 3 Certificate in Utility Mapping',
      duration: 'Part-time',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 3 Certificate' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Qualification Type', value: 'ProQual Certificate' },
    { label: 'Level', value: 'Level 3 (Ofqual-regulated)' },
    { label: 'Duration', value: '2 days training + assessment' },
    { label: 'Pricing', value: 'Contact us for pricing' },
    { label: 'Delivery', value: 'Wigan centre, online and in-house' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-16', alt: 'Level 3 Certificate utility mapping - practical session' },
        { src: 'MALA-GPR-01', alt: 'Level 3 Certificate utility mapping - hands-on assessment' },
        { src: 'Advanced-EM-07', alt: 'Level 3 Certificate utility mapping - on-site delivery' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'MALA-GPR-18', alt: 'Level 3 Certificate utility mapping - electromagnetic locator training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-02', alt: 'Level 3 Certificate practical training assessment' },
        { src: 'MALA-GPR-06', alt: 'Utility survey equipment training session' },
        { src: 'Utility-Mapping-01', alt: 'Level 3 qualification hands-on demonstration' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-04', alt: 'Level 3 Certificate training with equipment' },
        { src: 'MALA-GPR-14', alt: 'Utility detection practical assessment' },
        { src: 'Utility-Mapping-01', alt: 'On-site Level 3 qualification training' },
      ],
    },
  ],

  about: {
    eyebrow: 'The Qualification',
    title: 'What Is the ProQual Level 3 Certificate?',
    paragraphs: [
      'The ProQual Level 3 Certificate in Utility Mapping and Surveying is an Ofqual-regulated qualification awarded by ProQual Awarding Body. It is the mandatory entry-level qualification on the ProQual utility mapping pathway and must be completed before progressing to the Level 4 or Level 5 Diploma.',
      'The qualification is built around two mandatory units covering the core skills of utility surveying at PAS128 Quality Levels D (desktop survey) and C (site reconnaissance).',
      'Sygma Solutions is the UK\'s leading training and assessment provider for this qualification. We offer fixed and transparent pricing with no additional or hidden fees for extra assessments. The ProQual Level 3 Certificate in Utility Mapping and Surveying validates practical skills and core knowledge in how to locate underground utilities, identify buried services, and interpret utility survey information. It enhances employment opportunities in utility companies and civil engineering firms for engineers, surveyors, and operatives working across the UK including Northern Ireland.',
    ],
    sidebar: {
      eyebrow: 'Qualification at a Glance',
      items: [
        { label: 'Awarding Body', value: 'ProQual Awarding Body' },
        { label: 'Regulation', value: 'Ofqual-regulated (RQF)' },
        { label: 'Level', value: 'Level 3' },
        { label: 'Units', value: '2 mandatory units' },
        { label: 'Assessment', value: 'Work-based evidence + knowledge questions book' },
        { label: 'Pricing', value: 'Contact us to discuss enrolment and pricing' },
        { label: 'Delivery', value: 'Wigan centre, online or in-house at your premises' },
        { label: 'Equipment', value: 'MALA GPR (HDR/HDR Pro), Leica DSX, Radiodetection RD8200 series, and CAT4+ available at Sygma\'s training centres' },
        { label: 'Prerequisite for', value: 'ProQual Level 4 and Level 5 Diploma' },
      ],
    },
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Is This Qualification For?',
    items: [
      {
        title: 'Trainee Utility Surveyors',
        desc: 'Individuals starting their career in underground utility location and mapping who need a nationally recognised entry qualification.',
      },
      {
        title: 'Site Operatives and Supervisors',
        desc: 'Experienced operatives, supervisors and engineers who regularly work with utility information and survey drawings and want formal accreditation.',
      },
      {
        title: 'Utility Locators Cross-Training',
        desc: 'Existing utility locators looking to cross-train into the utility mapping and surveying discipline.',
      },
      {
        title: 'Apprentices and New Starters',
        desc: 'Those on a ProQual qualification pathway working towards Level 4 or Level 5 who need to complete the mandatory Level 3 first.',
      },
      {
        title: 'Survey and Project Professionals',
        desc: 'Any individual whose role involves requesting, interpreting or managing PAS128 surveys at Quality Levels D and C.',
      },
    ],
  },

  courseContent: {
    theory: {
      heading: 'Assessment Process: No Exams, No Surprises',
      subheading: 'The Level 3 Certificate is assessed through work-based evidence and a structured knowledge questions book. There is no formal written exam. The assessment process is designed to be achievable alongside normal working activity.',
      items: [
        'Questions Book: Each candidate completes a knowledge questions book covering the assessment criteria for both units. This is populated through classroom training, group discussion, and self-study.',
        'Desktop Survey Submission: A desktop survey submission demonstrating the ability to compile utility records, contact network operators, and produce a survey drawing that meets PAS128 Quality Level D requirements.',
        'Site Reconnaissance Submission: A site reconnaissance submission demonstrating the ability to visit a site, identify visible utility indicators, produce marked-up drawings, and report on observations to PAS128 Quality Level C.',
      ],
    },
    practical: {
      heading: 'Unit Y/507/1367: Utility Identification and Site Reconnaissance',
      subheading: 'Unit H/507/1369: Carry Out Desktop Surveys and Communicate Findings',
      items: [
        'Colour coding of buried utilities, regulations for locating services, reading maps and drawings, identifying detection methods, and producing marked-up drawings.',
        'Establishing survey purpose, identifying data sources, compiling desktop survey data, preparing drawings using appropriate software, and applying quality assurance procedures.',
        'Where submitted workplace evidence does not cover the full range of assessment criteria, additional knowledge evidence can be provided to cover any gaps. Sygma\'s assessors will work with each candidate to identify the most efficient route through.',
      ],
    },
  },

  certRoutes: {
    title: 'What You Get',
    items: [
      { title: 'ProQual Level 3 Certificate in Locating Underground Utilities', desc: '' },
      { title: 'Portfolio of Evidence Record', desc: '' },
      { title: 'External Assessment Report', desc: '' },
      { title: 'Qualification Registered on the RQF', desc: '' },
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'What Is Included',
        title: 'Full Assessment Support, No Hidden Fees',
        desc: 'Sygma charges a fixed assessment fee per candidate (plus ProQual registration fees). This is an all-in fee with no additional charges for extra assessments, re-submissions, or extended support. Contact us for a quote.',
      },
      {
        eyebrow: 'Included',
        title: 'Online induction to the qualification and the assessment process',
        desc: 'A tailored assessment plan built around your individual needs, experience, and working schedule.',
      },
      {
        eyebrow: 'Included',
        title: 'Full access to the online e-portfolio system and digital workbooks (hard-copy workbooks also available)',
        desc: 'Full assessor support and mentoring throughout the workbook process, from initial submission to certification.',
      },
      {
        eyebrow: 'Included',
        title: 'Free access to Sygma\'s open assessment days at the Utility Mapping Training and Assessment Centre in Wigan',
        desc: 'Online support sessions available for candidates who cannot attend in person.',
      },
      {
        eyebrow: 'ProQual Registration',
        title: 'ProQual registration fees',
        desc: 'ProQual registration fees are a separate charge paid directly to ProQual. These are fixed and transparent and will be confirmed at the time of booking. Fast-track and private assessment sessions at a customer\'s premises are also available for groups. Contact us for pricing.',
      },
      {
        eyebrow: 'Accreditation',
        title: 'ProQual Awarding Body and Ofqual Regulation',
        desc: 'The ProQual Level 3 Certificate in Utility Mapping and Surveying is awarded by ProQual Awarding Body. The qualification is regulated by Ofqual, meaning it is recognised on the national Regulated Qualifications Framework (RQF) and carries genuine professional weight across the utilities, construction, and civil engineering sectors.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Approved',
        title: 'ProQual Approved Centre',
        desc: 'Sygma is an approved ProQual centre with a dedicated IQA team overseeing every assessment.',
      },
      {
        eyebrow: 'Flexible',
        title: 'Flexible Study',
        desc: 'Complete your Level 3 through a combination of workplace evidence and guided assessment. No fixed classroom timetable.',
      },
      {
        eyebrow: 'Specialist',
        title: 'Specialist Assessors',
        desc: 'All assessors directly employed by Sygma. Ex-utility surveyors who understand the practical realities of underground mapping.',
      },
      {
        eyebrow: 'Support',
        title: 'Full Portfolio Support',
        desc: 'From registration to certificate, our IQA team guides you through every unit.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent',
        desc: 'No surveys to sell, no equipment to push. Training and assessment without commercial bias.',
      },
      {
        eyebrow: 'Evidence',
        title: 'Evidence From Real Work',
        desc: 'Your existing survey work generates much of the evidence needed. We help you structure it.',
      },
    ],
  },

  relatedReading: [
    {
      title: '5 Day PAS128 Surveyor Course',
      desc: 'Includes an optional ProQual Level 3 Certificate add-on. Delegates who complete the 5-day course can sit the Level 3 assessment as part of the same booking. The course provides the classroom training and practical evidence needed to complete the workbook and submit the required evidence.',
      href: '/courses/5-day-pas128-surveyor',
    },
    {
      title: 'TSA and ICES Utility Mapping Programme',
      desc: 'Module 1 (Desktop Survey and Site Reconnaissance, ICES GEUS01 A-D) provides evidence that directly maps to the Level 3 Certificate criteria. For those building towards the full ICES pathway, this is the natural route.',
      href: '/courses/tsa-ices-utility-mapping',
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation. If your business is registered with CITB, speak to your CITB Employer Network adviser about funding support for this qualification. Funding is not guaranteed and varies by employer, but we can help you navigate the process.',
      'Contact us for guidance on how to access available support.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Advance Your Skills',
    items: [
      {
        eyebrow: 'Qualifications',
        title: 'Level 4 Diploma',
        desc: 'Advanced EM detection and GPR specialist qualification. The next step in the ProQual pathway.',
        href: '/courses/level-4-diploma',
      },
      {
        eyebrow: 'Utility Mapping',
        title: '5-Day PAS128 Surveyor',
        desc: 'Intensive training covering detection, surveying instruments and quality level A verification surveys.',
        href: '/courses/5-day-pas128-surveyor',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'TSA and ICES Utility Mapping',
        desc: 'Module 1 covers desktop survey and site reconnaissance, aligning directly with Level 3 evidence.',
        href: '/courses/tsa-ices-utility-mapping',
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

  faqs: [
    {
      q: 'Is the Level 3 Certificate mandatory before I can do Level 4 or Level 5?',
      a: 'Yes. The ProQual Level 3 Certificate in Utility Mapping and Surveying is a mandatory prerequisite for entry into the Level 4 or Level 5 Diploma. You cannot enrol on the higher levels without first holding the Level 3.',
    },
    {
      q: 'Can I use evidence from my current job rather than attending a training course?',
      a: 'Yes. The Level 3 Certificate is assessed through work-based evidence, so if you are already working in utility surveying, much of the evidence you need can come from your current role. Our assessors will help you identify what evidence to collect and how to present it. A 2-day structured training session is also available for candidates who want a classroom-based route to the evidence they need.',
    },
    {
      q: 'How long does it take to complete the Level 3 Certificate?',
      a: 'The timescale varies depending on how much workplace evidence you already have available. Some candidates who are already working in utility surveying can complete within a few weeks of induction. Others take a few months to build up the required evidence portfolio. Your tailored assessment plan will give you a realistic timeline based on your individual situation.',
    },
    {
      q: 'What does the assessment fee include?',
      a: 'The fixed fee covers your full assessment support including induction, tailored assessment plan, e-portfolio access, workbooks, assessor support, mentoring, and open day attendance. It does not include the ProQual registration fee, which is a separate charge paid directly to ProQual. There are no additional fees for extra assessments or re-submissions. Contact us for a quote.',
    },
    {
      q: 'Can my employer put multiple staff through the Level 3 together?',
      a: 'Yes. We offer fast-track and private assessment sessions for organisations who want to put groups through together. This can be delivered at your premises or at our Wigan centre. Contact us for group pricing.',
    },
    {
      q: 'Does completing the Level 3 Certificate mean I can carry out PAS128 surveys?',
      a: 'The Level 3 Certificate demonstrates assessed competence in carrying out PAS128 Quality Level D desktop surveys and Quality Level C site reconnaissance. Whether a certificate-holder can carry out surveys independently is a matter for their employer and the relevant survey specification. The qualification is the recognised professional standard for these survey types.',
    },
  ],

  cta: {
    title: 'Enquire About the ProQual Level 3 Certificate in Utility Mapping and Surveying',
    description: 'Full assessor support, no hidden fees. The ProQual Level 3 Certificate is your entry to the utility mapping and surveying qualification pathway. Contact us to discuss your training programme, assessment route and pricing.',
    primaryLabel: 'Enquire About Level 3',
    primaryHref: '/contact',
    secondaryLabel: 'View Level 4 Diploma',
    secondaryHref: '/courses/level-4-diploma',
  },
};
