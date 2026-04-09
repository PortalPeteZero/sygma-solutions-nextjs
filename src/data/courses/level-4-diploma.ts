import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'level-4-diploma',

  metadata: {
    title: 'ProQual Level 4 Utility Mapping Course | Sygma Solutions',
    description: 'The advanced specialist qualification for utility surveyors: demonstrating competency in EM location and GPR. Contact us for enrolment and pricing.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-4-diploma' },
    openGraph: {
      title: 'ProQual Level 4 Utility Mapping Course | Sygma Solutions',
      description: 'The advanced specialist qualification for utility surveyors: demonstrating competency in EM location and GPR. Contact us for enrolment and pricing.',
      url: 'https://sygma-solutions.com/courses/level-4-diploma',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      siteName: SITE_NAME,
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual Level 4 Diploma in Utility Mapping and Surveying',
    sub: 'The advanced specialist qualification for utility surveyors: demonstrating competency in electromagnetic location and ground penetrating radar. Contact us to discuss enrolment and pricing.',
    images: [
      'MALA-GPR-02',
      'MALA-GPR-04',
      'Advanced-EM-03',
    ],
    alts: [
      'Advanced EM locating equipment demonstration during Level 4 diploma training',
      'MALA GPR survey being conducted as part of ProQual Level 4 utility mapping',
      'Ground penetrating radar data collection during Level 4 diploma practical assessment',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 4 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 4 Diploma in Utility Mapping and Surveying',
      description: 'The advanced specialist qualification for utility surveyors: demonstrating competency in electromagnetic location and ground penetrating radar. Contact us to discuss enrolment and pricing.',
      url: '/courses/level-4-diploma',
      credential: 'Level 4 Diploma in Utility Surveying',
      duration: 'Part-time',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 4 Diploma' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Qualification', value: 'ProQual Diploma' },
    { label: 'Level', value: 'Level 4 (Ofqual-regulated)' },
    { label: 'Prerequisite', value: 'Level 3 Certificate required' },
    { label: 'Pricing', value: 'Contact us for pricing' },
    { label: 'Equipment', value: 'MALA GPR, Leica DSX, Radiodetection RD8200' },
    { label: 'Delivery', value: 'Wigan centre, online & in-house' },
  ],

  about: {
    eyebrow: 'The Qualification',
    title: 'What Is the ProQual Level 4 Diploma in Utility Mapping and Surveying?',
    paragraphs: [
      'The ProQual Level 4 Diploma in Utility Mapping and Surveying is an Ofqual-regulated qualification that develops and assesses advanced competency in electromagnetic (EM) detection methods and ground penetrating radar (GPR) for underground utility location. It is the second level in the ProQual utility mapping pathway and must be completed before progressing to the Level 5 Diploma.',
      'Where the Level 3 Certificate focused on desktop surveys and site reconnaissance (PAS128 Quality Levels D and C), the Level 4 Diploma progresses into the practical detection phase of utility surveying. This is the qualification that demonstrates a candidate can carry out a PAS128 Quality Level B detection survey using the correct equipment, methods, and survey protocols.',
      'Assessment is through a structured evidence portfolio and workbook, completed against the ProQual assessment criteria. Sygma\'s assessors guide each candidate through the process and help identify the most efficient route through the evidence requirements.',
    ],
    sidebar: {
      eyebrow: 'EM Detection Evidence',
      items: [
        { label: 'ICES GEUS01 E and G', value: 'Advanced electromagnetic detection: use of EM equipment in active, passive, and induction modes; signal interpretation; depth estimation and verification; frequency selection; avoidance of signal interference.' },
        { label: 'ICES GEUS01 F (Part 1)', value: 'Ground penetrating radar: GPR operating principles; radargram interpretation; hyperbola identification; depth and velocity calibration; field data collection including GPS integration.' },
      ],
    },
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Is This Qualification For?',
    items: [
      {
        title: 'Practising Utility Surveyors',
        desc: 'Surveyors who carry out PAS128 Quality Level B detection surveys and want a nationally recognised qualification to evidence their skills.',
      },
      {
        title: 'Candidates Who Have Completed Sygma Training',
        desc: 'Those who have attended the 5 Day PAS128 Surveyor Course or the Advanced EM Locator Training and want to formalise that training through a qualification.',
      },
      {
        title: 'Survey Company Owners and Managers',
        desc: 'Owners or managers who want to demonstrate team capability to clients and tendering bodies through recognised, Ofqual-regulated qualifications.',
      },
      {
        title: 'TSA/ICES Programme Candidates',
        desc: 'Candidates working through the TSA and ICES Utility Mapping Training Programme who have completed Modules 2 and 3 (GEUS01 E&G and F Part 1) and want to convert that training evidence into a formal qualification.',
      },
      {
        title: 'Career Progression and CPD',
        desc: 'Individuals building a qualification portfolio to support career progression, CPD requirements, or professional membership of TSA, CICES, or similar bodies.',
      },
    ],
  },

  courseContent: {
    eyebrow: 'Evidence Areas',
    title: 'What Does the Level 4 Diploma Assess?',
    theory: {
      heading: 'Competency Areas',
      subheading: 'The Level 4 Diploma is assessed through a structured evidence portfolio demonstrating operational competence across the following areas. These align with the ICES GEUS01 competency framework used in the TSA and ICES Utility Mapping Training Programme.',
      items: [
        'Advanced electromagnetic location (passive and active modes) -- Evidence of operating EM equipment in passive, active, induction, and clamp modes; frequency selection; signal identification; depth reading and estimation (GEUS01 E and G)',
        'EM signal interpretation and interference management -- Evidence of understanding signal characteristics; avoidance of interference; use of current clamp and inductive methods (GEUS01 E and G)',
        'Transmitter connection and coupling methods -- Evidence of safe and effective connection; clamp/capacitance/induction/nulling techniques on live and de-energised services (GEUS01 E and G)',
        'Depth estimation and verification checks -- Evidence of using depth estimation mode; understanding of error factors; physical verification methods (GEUS01 E and G)',
        'GPR: equipment setup and operation -- Evidence of GPR equipment setup; antenna selection; operating parameters; baseline scans and survey line configuration (GEUS01 F Part 1)',
        'Radargram interpretation and hyperbola identification -- Evidence of identifying hyperbolic reflections; understanding of velocity and depth calculations; distinguishing utility signals from noise (GEUS01 F Part 1)',
        'PAS128 Quality Level B survey deliverables -- Evidence of producing survey outputs that meet PAS128 Quality Level B requirements including plan accuracy and reporting (GEUS01 E, F, G)',
      ],
    },
    practical: {
      heading: 'Assessment Process',
      subheading: 'Evidence Portfolio and Workbook: No Exams',
      intro: 'The Level 4 Diploma is assessed through a combination of workplace evidence and a structured knowledge workbook. There is no formal written exam. Assessment is competence-based and designed to reflect real working activity.',
      items: [
        'Online Induction -- Candidates are inducted into the qualification requirements and the evidence types needed for each competency area.',
        'Tailored Assessment Plan -- Your Sygma assessor builds an assessment plan based on your current role, the training you have completed, and the evidence you already have available.',
        'Evidence Collection -- Candidates gather workplace evidence and submit it through Sygma\'s online e-portfolio system. Hard-copy workbooks are available for those who prefer them.',
        'Assessor Review and Mentoring -- Your Sygma assessor reviews your evidence submissions and provides feedback and guidance. Open day sessions at the Wigan centre can be used for face-to-face assessments.',
        'Gap-Filling and Top-Up -- Where workplace evidence does not cover the full range of criteria, candidates can attend open days or in-house sessions to address specific gaps through supervised practical work.',
        'Certification -- On successful completion of all units, the ProQual Level 4 Diploma certificate is awarded.',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'What You Get',
    items: [
      { title: 'ProQual Level 4 Diploma in Underground Utility Mapping', desc: 'The formal certificate awarded on successful completion, registered on the Regulated Qualifications Framework (RQF).' },
      { title: 'Portfolio of Evidence Record', desc: 'A comprehensive record of all evidence submitted, assessor feedback and competency sign-off.' },
      { title: 'External Assessment Report', desc: 'A detailed report from the external assessor confirming your advanced competency in utility mapping and surveying at Level 4.' },
      { title: 'Qualification Registered on the RQF', desc: 'Your qualification is registered on the Regulated Qualifications Framework, making it formally recognised across the UK.' },
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Pricing',
        title: 'Full Assessment Support, No Hidden Fees',
        desc: 'Sygma charges a fixed assessment fee per candidate (plus ProQual registration fees paid directly to ProQual). This covers the full assessment support package with no additional charges for re-submissions, extra sessions, or extended mentoring. Contact us for a quote.',
      },
      {
        eyebrow: 'Your fee includes',
        title: 'Online induction to the qualification structure and assessment process',
        desc: 'Tailored assessment plan developed around your current role and training history.',
      },
      {
        eyebrow: 'Your fee includes',
        title: 'Full access to Sygma\'s online e-portfolio system and digital workbooks',
        desc: 'Full assessor support and mentoring throughout the workbook and evidence submission process.',
      },
      {
        eyebrow: 'Your fee includes',
        title: 'Free access to Sygma\'s open assessment days at the Utility Mapping Training and Assessment Centre in Wigan',
        desc: 'Hard-copy workbooks available on request. No additional charges for re-submissions, extra sessions, or extended mentoring.',
      },
      {
        eyebrow: 'Accreditation',
        title: 'Ofqual-Regulated, Nationally Recognised',
        desc: 'The ProQual Level 4 Diploma in Utility Mapping and Surveying is awarded by ProQual Awarding Body and regulated by Ofqual. It is listed on the Regulated Qualifications Framework (RQF) and is widely recognised by employers, principal contractors, and client organisations in the utilities, construction, and civil engineering sectors.',
      },
      {
        eyebrow: 'Assessment Centre',
        title: 'UK\'s Leading Provider',
        desc: 'Sygma Solutions is an approved ProQual assessment centre and the UK\'s leading provider of ProQual utility mapping qualification assessment, with more candidates working through the Level 4 pathway than any other centre in the country.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Status',
        title: 'ProQual Approved Centre',
        desc: 'Sygma is a ProQual approved assessment centre delivering more Level 4 assessments than any other provider in the UK.',
      },
      {
        eyebrow: 'Expertise',
        title: 'Specialist Assessors',
        desc: 'All assessors are qualified utility surveyors. They understand EM detection, GPR and what specialist practice looks like.',
      },
      {
        eyebrow: 'Support',
        title: 'Portfolio Support',
        desc: 'Your evidence comes from real work. We help you identify, structure and submit it efficiently.',
      },
      {
        eyebrow: 'Practice-Led',
        title: 'Evidence From Your Work',
        desc: 'Training from the 5 Day PAS128 course or Advanced EM training maps directly to Level 4 criteria.',
      },
      {
        eyebrow: 'Independence',
        title: 'Independent',
        desc: 'No equipment to sell, no commercial bias. Assessment of your competence, nothing more.',
      },
      {
        eyebrow: 'Progression',
        title: 'Career Progression',
        desc: 'Level 4 sits between operative and management qualification. The natural step after Level 3.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation. If your business is registered with CITB, speak to your CITB Employer Network adviser about funding support for this qualification. Funding is not guaranteed and varies by employer, but we can help you navigate the process.',
      'Contact us for guidance on how to access available support.',
    ],
  },

  relatedReading: [
    {
      title: '5 Day PAS128 Utility Mapping and Surveying Course',
      desc: 'Days 2, 3, and 4 cover advanced EM detection and GPR in depth. The course generates evidence for the ICES GEUS01 E, G, and F Part 1 competencies that underpin the Level 4 Diploma.',
      href: '/courses/5-day-pas128-surveyor',
    },
    {
      title: 'Advanced EM Locator Training',
      desc: 'Covers RD8000 and Vivax vLoc Pro technology, signal theory, depth estimation, and advanced connection methods. Completion provides strong evidence toward the EM components of the Level 4.',
      href: '/courses/advanced-em-locator',
    },
    {
      title: 'GPR Training',
      desc: 'Module 1 (GPR theory and practical) and Module 2 (GPS data collection and post processing in Object Mapper) together cover the GPR component of the Level 4: ICES GEUS01 F Part 1 and F Part 2.',
      href: '/courses/gpr-training',
    },
    {
      title: 'TSA and ICES Utility Mapping Training Programme',
      desc: 'Modules 2 and 3 of this programme (ICES GEUS01 E&G and GEUS01 F Part 1) generate the classroom and practical evidence that maps directly to the Level 4 criteria.',
      href: '/courses/tsa-ices-utility-mapping',
    },
  ],

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Expand Your Qualifications',
    items: [
      {
        eyebrow: 'Level 3',
        title: 'Level 3 Certificate',
        desc: 'The mandatory foundation qualification covering desktop surveys and site reconnaissance.',
        href: '/courses/level-3-certificate',
      },
      {
        eyebrow: 'Level 5',
        title: 'Level 5 Diploma',
        desc: 'The highest operational qualification, covering total stations, GNSS, geometric principles and ICT.',
        href: '/courses/level-5-diploma',
      },
      {
        eyebrow: 'Skills',
        title: 'GPR Training',
        desc: 'Specialist ground penetrating radar training with Object Mapper data processing and post-processing.',
        href: '/courses/gpr-training',
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

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Utility-Mapping-03', alt: 'Level 4 Diploma utility mapping -- practical session' },
        { src: 'Advanced-EM-08', alt: 'Level 4 Diploma utility mapping -- hands-on assessment' },
        { src: 'MALA-GPR-20', alt: 'Level 4 Diploma utility mapping -- on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-06', alt: 'Level 4 Diploma practical training session' },
        { src: 'MALA-GPR-09', alt: 'Utility survey assessment for Level 4' },
        { src: 'Advanced-EM-08', alt: 'Advanced electromagnetic locator training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Utility-Mapping-02', alt: 'Level 4 Diploma utility location training' },
        { src: 'MALA-GPR-19', alt: 'GPR survey practical for Level 4 qualification' },
        { src: 'Advanced-EM-09', alt: 'On-site Level 4 Diploma assessment' },
      ],
    },
  ],

  faqs: [
    {
      q: 'Do I need the Level 3 Certificate before I can start the Level 4 Diploma?',
      a: 'Yes. The ProQual Level 3 Certificate in Utility Mapping and Surveying is a mandatory prerequisite for enrolment on the Level 4 Diploma. If you do not yet hold the Level 3, we can support you through both qualifications on a structured timeline.',
    },
    {
      q: 'I have already done the 5 Day PAS128 course. Can that count towards the Level 4?',
      a: 'Yes. The 5 Day PAS128 Surveyor Course generates evidence that maps directly to the Level 4 assessment criteria. Your course completion certificate, practical assessment records, and any assessor notes can all be included in your Level 4 evidence portfolio. We will help you match your existing training records to the ProQual criteria.',
    },
    {
      q: 'How long does the Level 4 Diploma take to complete?',
      a: 'This depends on how much evidence you can draw from your current work. Candidates who are actively working in utility surveying and who have completed relevant Sygma training can often complete the Level 4 within two to four months of induction. Our tailored assessment plan will set a realistic timeline for your situation.',
    },
    {
      q: 'What is the difference between the Level 4 and the Level 5?',
      a: 'The Level 4 Diploma focuses on operational competence in advanced EM detection and GPR. The Level 5 Diploma is a broader and more advanced qualification covering the full range of utility surveying competencies including surveying instruments such as total stations and GNSS, geometric principles, and ICT for 3D utility data. The Level 5 requires both Level 3 and Level 4 as prerequisites.',
    },
    {
      q: 'Can my company put a team through the Level 4 together?',
      a: 'Yes. We offer fast-track and private assessment programmes for organisations who want to progress teams through the Level 4 together, either at your premises or at our Wigan centre. Contact us to discuss group pricing and scheduling.',
    },
    {
      q: 'Is the assessment fee all-inclusive?',
      a: 'The Sygma assessment fee covers the full assessment service including induction, tailored assessment plan, e-portfolio access, workbooks, assessor support, mentoring, and open day sessions. ProQual registration fees are separate and paid directly to the awarding body. There are no additional Sygma charges regardless of how many submissions or mentoring sessions you need. Contact us for a quote.',
    },
  ],

  cta: {
    title: 'Enquire About the Level 4 Diploma',
    description: 'Full assessor support, no hidden fees. Wigan centre, online, or in-house. Contact us to discuss your current qualifications, pricing, and get started.',
    primaryLabel: 'Enquire About Level 4',
    primaryHref: '/contact',
    secondaryLabel: 'View Level 5 Diploma',
    secondaryHref: '/courses/level-5-diploma',
  },
};
