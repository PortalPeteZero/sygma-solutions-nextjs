import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

const faqs = [
  {
    q: 'Do I need Level 3 and Level 4 before starting the Level 5?',
    a: 'Yes. Both the ProQual Level 3 Certificate in Utility Mapping and Surveying and the Level 4 Diploma in Utility Mapping and Surveying are mandatory prerequisites for enrolment on the Level 5 Diploma. You cannot start the Level 5 without holding both preceding qualifications.',
  },
  {
    q: 'What is the fastest way to complete the Level 5?',
    a: "The fastest route for experienced utility surveyors is through Sygma's 5 Day PAS128 Surveyor Course combined with workplace evidence for the higher-level competency areas. The 5-day course generates evidence across ICES GEUS01 A through F Part 1. If you already have workplace evidence for GEUS02 through GEUS04 (surveying instruments, geometric principles, and ICT), you can move very quickly through the evidence portfolio.",
  },
  {
    q: 'How does the Level 5 differ from the Level 4?',
    a: 'The Level 4 Diploma focuses on advanced EM detection and GPR (ICES GEUS01 E, G, F). The Level 5 extends this to include surveying instruments (total stations, GNSS), geometric principles (3D coordinate geometry, least squares, error propagation), and ICT for 3D utility data. The Level 5 is the qualification that reflects full professional competence across the entire utility mapping and surveying discipline.',
  },
  {
    q: 'Does the Level 5 Diploma support professional membership of TSA or CICES?',
    a: 'The Level 5 Diploma, combined with the TSA and ICES Utility Mapping Training Programme, provides evidence that aligns with ICES GEUS competency units and supports applications for professional membership of CICES and TSA. The qualification is widely recognised by both organisations as evidence of professional competence in utility surveying.',
  },
  {
    q: 'Can I use my existing survey work as evidence for the Level 5?',
    a: 'Yes. Evidence from your current role, including survey reports, Quality Level A deliverables, GPS records, CAD outputs, and instrument operation logs, can all form part of your Level 5 evidence portfolio. Our tailored assessment plan will identify which workplace evidence is relevant and what additional evidence may be needed to fill any gaps.',
  },
  {
    q: 'Is the assessment fee all-inclusive?',
    a: "The Sygma assessment fee covers the complete assessment service: induction, tailored assessment plan, e-portfolio access, workbooks, assessor support, mentoring, and open day sessions. ProQual registration fees are separate and paid directly to ProQual. There are no additional Sygma charges. Contact us for a quote.",
  },
];

export const courseData: CoursePageData = {
  slug: 'level-5-diploma',

  metadata: {
    title: 'ProQual Level 5 Utility Mapping Course | Sygma Solutions',
    description: 'The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying, and ICT.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-5-diploma' },
    openGraph: {
      title: 'ProQual Level 5 Utility Mapping Course | Sygma Solutions',
      description: 'The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying, and ICT.',
      url: 'https://sygma-solutions.com/courses/level-5-diploma',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      siteName: SITE_NAME,
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual Level 5 Diploma in Utility Mapping and Surveying',
    sub: 'The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying instruments, geometric principles, and ICT. Contact us to discuss enrolment and pricing.',
    images: [
      'MALA-GPR-09',
      'MALA-GPR-12',
      'Advanced-EM-05',
    ],
    alts: [
      'Electromagnetic survey techniques practised during Level 5 diploma training',
      'Professional GPR survey methodology taught on the ProQual Level 5 course',
      'Advanced ground penetrating radar interpretation during Level 5 utility mapping',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 5 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 5 Diploma in Utility Mapping and Surveying',
      description: 'The highest operational qualification in utility mapping and surveying. Prove full professional competency across detection, surveying instruments, geometric principles, and ICT. Contact us to discuss enrolment and pricing.',
      url: '/courses/level-5-diploma',
      credential: 'Level 5 Diploma in Utility Surveying',
      duration: 'Part-time',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 5 Diploma' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Qualification', value: 'ProQual Diploma' },
    { label: 'Level', value: 'Level 5 (Ofqual-regulated)' },
    { label: 'Prerequisites', value: 'Level 3 + Level 4 required' },
    { label: 'Pricing', value: 'Contact us for pricing' },
    { label: 'Equipment', value: 'MALA GPR, Leica DSX, Radiodetection RD8200' },
    { label: 'Delivery', value: 'Wigan, 5-day fast-track, in-house' },
  ],

  about: {
    eyebrow: 'The Qualification',
    title: 'What Is the ProQual Level 5 Diploma in Utility Mapping and Surveying?',
    paragraphs: [
      'The ProQual Level 5 Diploma in Utility Mapping and Surveying is an Ofqual-regulated qualification that demonstrates the highest level of operational competence in utility mapping and surveying. It is the third and highest diploma in the ProQual utility mapping pathway, sitting above the Level 3 Certificate and the Level 4 Diploma.',
      'The Level 5 Diploma covers a broader range of technical disciplines than the Level 4. In addition to the advanced EM detection and GPR competencies evidenced at Level 4, it extends into surveying instruments and positioning (total stations, GNSS in static and kinematic modes), geometric principles (3D coordinate geometry, scale factors, least squares adjustment), and ICT for utility mapping (digital data transfer, CAD outputs, and production of 3D utility data sets).',
      'Together with the Level 4 evidence base, the Level 5 Diploma covers the full set of ICES competency units required for professional membership pathways with TSA and CICES.',
    ],
    sidebar: {
      eyebrow: 'Fast-Track Option',
      items: [
        {
          label: '5 Day PAS128 Surveyor Course Route',
          value: "Experienced utility surveyors can use Sygma's 5 Day PAS128 Surveyor Course as the core of their Level 5 evidence portfolio. The course covers ICES GEUS01 A through F Part 1 (combined with workplace evidence for GEUS02 through GEUS04, the Level 5 Diploma becomes achievable within a realistic timeline).",
        },
        {
          label: 'ICES Coverage',
          value: 'GEUS01 E, G, F: Advanced EM and GPR (from Level 4). GEUS02 A-G: Surveying instruments (total station, GNSS). GEUS03 A-E: Geometric principles. GEUS04 A-D: ICT for utility mapping.',
        },
      ],
    },
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Is This Qualification For?',
    items: [
      {
        title: 'Senior Utility Surveyors',
        desc: 'Surveyors who carry out PAS128 Quality Level A verification surveys using total stations, GNSS, or other precise positioning equipment and want the qualification to match their operational level.',
      },
      {
        title: 'Survey Team Leaders and Technical Managers',
        desc: 'Team leaders or technical managers who need a qualification that reflects their full operational competence and the scope of technical work they oversee.',
      },
      {
        title: 'TSA/ICES Programme Candidates',
        desc: 'Candidates working through the full TSA and ICES Utility Mapping Training Programme (Modules 1 to 7) who want to convert that training into the highest ProQual operational qualification.',
      },
      {
        title: 'Professional Membership Applicants',
        desc: 'Professionals seeking qualification evidence to support applications for CICES membership, TSA membership, or CPD records.',
      },
      {
        title: 'PAS128 Quality Level A Organisations',
        desc: 'Organisations that tender for PAS128 Quality Level A contracts where demonstrating qualified personnel is a requirement.',
      },
      {
        title: '5 Day PAS128 Course Alumni',
        desc: 'Candidates who have attended the 5 Day PAS128 Surveyor Course and want to formalise that training through an Ofqual-regulated diploma using the fast-track route.',
      },
    ],
  },

  formats: {
    eyebrow: 'Competency Framework',
    title: 'The Complete Utility Surveyor Competency Framework',
    rows: [
      {
        format: 'Advanced EM detection (from Level 4)',
        duration: 'EM equipment operation; signal interpretation; depth estimation; connection methods; clamp, capacitance, induction, nulling',
        maxDelegates: 'GEUS01 E and G',
        assessment: '',
      },
      {
        format: 'Ground penetrating radar Unit A (from Level 4)',
        duration: 'GPR setup and operation; radargram interpretation; hyperbola identification; depth and velocity',
        maxDelegates: 'GEUS01 F Part 1',
        assessment: '',
      },
      {
        format: 'GPR post processing and data management',
        duration: 'GPS data collection in field; grid surveys; Object Mapper or equivalent post processing; CAD export of 3D utility data',
        maxDelegates: 'GEUS01 F Part 2',
        assessment: '',
      },
      {
        format: 'Surveying instruments: total station',
        duration: 'Setup and operation; traverses; observations; data recording; coordinate computation',
        maxDelegates: 'GEUS02 A-G',
        assessment: '',
      },
      {
        format: 'Surveying instruments: GNSS',
        duration: 'Static and kinematic GNSS surveys; network and PPK processing; accuracy assessment; datum transformations',
        maxDelegates: 'GEUS02 A-G',
        assessment: '',
      },
      {
        format: 'Geometric principles',
        duration: '3D coordinate geometry; scale factors; least squares adjustment; error propagation; transformations',
        maxDelegates: 'GEUS03 A-E',
        assessment: '',
      },
      {
        format: 'ICT for utility mapping',
        duration: 'Data transfer protocols; CAD software for utility survey outputs; 3D utility data sets with digital ground models',
        maxDelegates: 'GEUS04 A-D',
        assessment: '',
      },
      {
        format: 'PAS128 Quality Level A survey deliverables',
        duration: 'Full Quality Level A verification survey outputs including confirmation of detected service positions using precise positioning',
        maxDelegates: 'All GEUS units',
        assessment: '',
      },
    ],
  },

  certRoutes: {
    eyebrow: 'Fast-Track Route',
    title: 'Accelerate Your Level 5 with the 5 Day PAS128 Surveyor Course',
    intro: 'For experienced utility surveyors who want to progress through the Level 5 Diploma efficiently, Sygma offers a fast-track route built around the 5 Day PAS128 Utility Mapping and Surveying Course.',
    items: [
      {
        title: 'The 5-day course is a TSA, CICES, and EUSR approved intensive programme that covers the full range of utility surveying skills in five days of structured training and assessment.',
        desc: 'The course provides evidence toward ICES GEUS01 A-D, E&G, and F Part 1 and can include the Level 3 add-on. Combined with workplace evidence for GEUS01 F Part 2 and GEUS02 through GEUS04, the Level 5 Diploma becomes achievable within a realistic timeline for experienced practitioners.',
      },
      {
        title: 'This fast-track route is most suitable for:',
        desc: 'Surveyors who already have significant practical experience in EM detection, GPR, and survey instrument use. Those who have access to workplace evidence from Quality Level A surveys or similar positioning work. Professionals who want to formalise their skills without going through a full classroom programme from scratch.',
      },
    ],
  },

  courseContent: {
    theory: {
      heading: 'Evidence Portfolio and Workbook: No Exams',
      subheading: 'The Level 5 Diploma is assessed through a structured evidence portfolio covering all competency areas. There is no formal written exam. Assessment is competence-based and can be completed at a pace that fits around work commitments.',
      items: [
        'Online Induction: Introduction to the Level 5 qualification structure and what evidence is needed for each unit.',
        'Tailored Assessment Plan: Your Sygma assessor builds a personalised plan that maps your existing training, certifications, and workplace activity against the Level 5 criteria and identifies any gaps.',
        "Evidence Submission: Candidates submit through Sygma's online e-portfolio system. Evidence can include survey reports, field records, post processing outputs, CAD files, and training certificates.",
        "Assessor Review and Open Days: Sygma's qualified assessors review submissions and provide feedback. Open day sessions at the Wigan centre are available for face-to-face assessments, practical verification, and mentoring.",
        'Gap-Filling: Where workplace evidence does not cover the full criteria, candidates can attend open days or in-house sessions to address specific gaps through supervised practical work.',
        'Certification: On successful completion of all units, the ProQual Level 5 Diploma certificate is awarded by ProQual Awarding Body.',
      ],
    },
    practical: {
      heading: 'The Complete Utility Surveyor Competency Framework',
      subheading: 'The Level 5 Diploma covers all competency areas in the ProQual utility mapping pathway. The evidence base aligns with the full ICES GEUS framework used in Sygma\'s TSA and ICES Utility Mapping Training Programme.',
      items: [
        'Advanced EM detection (from Level 4): EM equipment operation; signal interpretation; depth estimation; connection methods; clamp, capacitance, induction, nulling (ICES GEUS01 E and G)',
        'Ground penetrating radar Unit A (from Level 4): GPR setup and operation; radargram interpretation; hyperbola identification; depth and velocity (ICES GEUS01 F Part 1)',
        'GPR post processing and data management: GPS data collection in field; grid surveys; Object Mapper or equivalent post processing; CAD export of 3D utility data (ICES GEUS01 F Part 2)',
        'Surveying instruments -- total station: Setup and operation; traverses; observations; data recording; coordinate computation (ICES GEUS02 A-G)',
        'Surveying instruments -- GNSS: Static and kinematic GNSS surveys; network and PPK processing; accuracy assessment; datum transformations (ICES GEUS02 A-G)',
        'Geometric principles: 3D coordinate geometry; scale factors; least squares adjustment; error propagation; transformations (ICES GEUS03 A-E)',
        'ICT for utility mapping: Data transfer protocols; CAD software for utility survey outputs; 3D utility data sets with digital ground models (ICES GEUS04 A-D)',
        'PAS128 Quality Level A survey deliverables: Full Quality Level A verification survey outputs including confirmation of detected service positions using precise positioning (All GEUS units)',
      ],
    },
  },

  relatedReading: [
    {
      title: '5 Day PAS128 Utility Mapping and Surveying Course',
      desc: 'The most efficient single training event for generating Level 5 evidence. Days 1 through 5 cover PAS128 D-C, EM, advanced EM, GPR, and assessment. Provides evidence for ICES GEUS01 A through F Part 1 and can include the Level 3 add-on.',
      href: '/courses/5-day-pas128-surveyor',
    },
    {
      title: 'TSA and ICES Utility Mapping Training Programme',
      desc: 'Modules 5, 6, and 7 cover surveying instruments (GEUS02), geometric principles (GEUS03), and ICT (GEUS04) (the components unique to Level 5 beyond the Level 4 requirements). Completing all seven modules provides evidence for the full ProQual Level 5 Diploma.',
      href: '/courses/tsa-ices-utility-mapping',
    },
    {
      title: 'GPR Training (Module 2 Post Processing)',
      desc: 'Object Mapper training, GPS integration, and CAD export provide evidence for ICES GEUS01 F Part 2, which is required at Level 5 but not Level 4.',
      href: '/courses/gpr-training',
    },
  ],

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Expand Your Skills and Qualifications',
    items: [
      {
        eyebrow: 'Qualifications',
        title: 'Level 4 Diploma',
        desc: 'Advanced EM detection and GPR specialist qualification. The prerequisite for Level 5.',
        href: '/courses/level-4-diploma',
      },
      {
        eyebrow: 'Qualifications',
        title: 'Level 6 Diploma',
        desc: 'Management and leadership qualification for survey operations, projects and teams.',
        href: '/courses/level-6-diploma',
      },
      {
        eyebrow: 'Qualifications',
        title: 'Online Level 5 Diploma',
        desc: 'Flexible online route through the Level 5, suitable for remote candidates and workplace learners.',
        href: '/courses/online-level-5-diploma',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation. If your business is registered with CITB, speak to your CITB Employer Network adviser about funding support for this qualification. Funding is not guaranteed and varies by employer, but we can help you navigate the process.',
      'Contact us for guidance on how to access available support.',
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'ProQual Approved Centre',
        title: 'ProQual Approved Centre',
        desc: 'Sygma is a ProQual approved assessment centre with proven expertise in delivering Level 5 assessments.',
      },
      {
        eyebrow: 'Specialist Assessors',
        title: 'Specialist Assessors',
        desc: 'All assessors are qualified utility surveyors with real-world experience in total station, GNSS and survey instrument use.',
      },
      {
        eyebrow: 'Portfolio Support',
        title: 'Portfolio Support.',
        desc: 'Your evidence comes from your workplace. We help you structure survey reports, GPS records, and CAD outputs efficiently.',
      },
      {
        eyebrow: 'Management-Level Qualification',
        title: 'Management-Level Qualification',
        desc: 'Level 5 covers utility survey project management and team leadership. Position yourself for progression.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent.',
        desc: 'No equipment to sell, no commercial bias. Pure assessment of your professional competence.',
      },
      {
        eyebrow: 'Evidence From Your Work',
        title: 'Evidence From Your Work',
        desc: 'Real survey work, instrument operation records and project deliverables form your portfolio.',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Utility-Mapping-02', alt: 'Level 5 Diploma utility mapping -- practical session' },
        { src: 'MALA-GPR-22', alt: 'Level 5 Diploma utility mapping -- hands-on assessment' },
        { src: 'Advanced-EM-07', alt: 'Level 5 Diploma utility mapping -- on-site delivery' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'Advanced-EM-08', alt: 'Level 5 Diploma utility mapping -- live training environment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-01', alt: 'Level 5 Diploma practical training with equipment' },
        { src: 'MALA-GPR-11', alt: 'GPR survey training for Level 5 qualification' },
        { src: 'Utility-Mapping-03', alt: 'Advanced utility detection assessment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-06', alt: 'Level 5 Diploma utility mapping training' },
        { src: 'MALA-GPR-23', alt: 'Ground penetrating radar practical session' },
        { src: 'MALA-GPR-25', alt: 'On-site Level 5 qualification assessment' },
      ],
    },
  ],

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

  faqs,

  cta: {
    title: 'Enquire About the Level 5 Diploma',
    description: 'Full assessor support, no hidden fees. Wigan centre, 5-day fast-track option, or in-house. Contact us to discuss your pathway, pricing, and get started.',
    primaryLabel: 'Enquire About Level 5',
    primaryHref: '/contact',
    secondaryLabel: 'View Level 6 Diploma',
    secondaryHref: '/courses/level-6-diploma',
  },
};
