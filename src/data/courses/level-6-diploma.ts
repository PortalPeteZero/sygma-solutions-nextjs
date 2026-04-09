import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'level-6-diploma',

  metadata: {
    title: 'ProQual Level 6 Utility Mapping Course | Sygma Solutions',
    description: 'The highest qualification in utility surveying. For experienced surveyors ready to lead teams, manage projects and drive operational excellence.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-6-diploma' },
    openGraph: {
      title: 'ProQual Level 6 Utility Mapping Course | Sygma Solutions',
      description: 'The highest qualification in utility surveying. For experienced surveyors ready to lead teams, manage projects and drive operational excellence.',
      url: 'https://sygma-solutions.com/courses/level-6-diploma',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management',
    sub: 'The ProQual Level 6 utility mapping qualification is the highest in the utility surveying pathway. Designed for experienced professionals in geomatics and site surveying who are ready to lead teams, manage projects and drive operational excellence across infrastructure development and civil engineering programmes.',
    images: [
      'MALA-GPR-10',
      'MALA-GPR-15',
      'Advanced-EM-07',
    ],
    alts: [
      'Advanced electromagnetic locating for ProQual Level 6 utility mapping diploma',
      'Professional MALA GPR survey techniques at Level 6 diploma standard',
      'Complex ground penetrating radar data analysis during Level 6 training',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 6 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management',
      description: 'The highest qualification in the utility surveying pathway. Designed for experienced professionals in geomatics and site surveying who are ready to lead teams, manage projects and drive operational excellence.',
      url: '/courses/level-6-diploma',
      credential: 'Level 6 Diploma in Utility Surveying',
      duration: 'Part-time',
      mode: ['blended'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 6 Diploma' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Level', value: 'Level 6 (QCF/RQF)' },
    { label: 'Awarding Body', value: 'ProQual Awarding Body' },
    { label: 'Pricing', value: 'Price on application' },
    { label: 'Equipment', value: 'MALA GPR, Leica DSX, Radiodetection RD8200' },
    { label: 'Prerequisites', value: 'Level 3 + Level 4 + Level 5 required' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Utility-Mapping-01', alt: 'Level 6 Diploma utility mapping - practical session' },
        { src: 'MALA-GPR-24', alt: 'Level 6 Diploma utility mapping - hands-on assessment' },
        { src: 'MALA-GPR-02', alt: 'Level 6 Diploma utility mapping - on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-03', alt: 'Level 6 Diploma advanced training session' },
        { src: 'MALA-GPR-13', alt: 'Advanced utility survey training for Level 6' },
        { src: 'Utility-Mapping-04', alt: 'Advanced electromagnetic detection training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-26', alt: 'Level 6 Diploma utility management training' },
        { src: 'MALA-GPR-27', alt: 'GPR data interpretation for Level 6' },
        { src: 'Advanced-EM-09', alt: 'Advanced qualification practical assessment' },
      ],
    },
  ],

  about: {
    eyebrow: 'The Qualification',
    title: 'What Is the ProQual Level 6 Diploma in Utility Mapping and Surveying Management?',
    paragraphs: [
      'The ProQual Level 6 Diploma in Utility Mapping and Surveying Management is the highest qualification available in the ProQual utility surveying pathway. It is designed for experienced professionals who are ready to step into a site surveying management, supervisory or technical leadership role within utility mapping and surveying operations. The diploma covers the management of site surveying across civil engineering, infrastructure development and construction projects, including the oversight of spatial data, mapping data and underground utility asset management.',
      'Where Level 3 builds the foundation, Level 4 advances technical EM and GPR skills, and Level 5 demonstrates full PAS128 surveying competency, Level 6 is about managing the people, processes and performance that make site surveying operations work. Qualification candidates learn to plan site surveying processes, identify mapping and data requirements, present spatial data to project stakeholders and produce mapping data that meets industry standards for geomatics and site surveying.',
      'The qualification is delivered on a portfolio basis covering mandatory units aligned to the learning outcomes for site surveying management. There are no exams. Candidates compile evidence of competency from their own workplace practice, supported by their Sygma assessor throughout the process. Portfolio evidence is drawn from real site surveying operations and demonstrates your ability to manage utility mapping projects, control risks and identify hazards in a working environment.',
    ],
    sidebar: {
      eyebrow: 'This qualification is for you if...',
      items: [
        { label: '', value: 'You lead or manage a utility survey team or site surveying operation' },
        { label: '', value: 'You are responsible for PAS128 quality management, regulatory compliance and deliverable sign-off' },
        { label: '', value: 'You manage client relationships and site surveying project delivery end-to-end across infrastructure projects' },
        { label: '', value: 'You already hold Level 5 and are ready to formalise your management expertise in geomatics and site surveying' },
        { label: '', value: 'You work on major civil engineering or construction projects where a management-level qualification is expected' },
      ],
    },
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Is This Qualification For?',
    items: [
      {
        title: 'Survey Team Leaders',
        desc: 'Experienced professionals now responsible for managing a team of utility mapping operatives on site surveying projects or across multiple contracts. The diploma validates your ability to plan site surveying and manage site surveying operations.',
      },
      {
        title: 'Project Managers',
        desc: 'Project managers overseeing utility mapping or PAS128 survey projects end-to-end, including client relationships, project requirements, mapping data deliverables and programme management across civil engineering and infrastructure projects.',
      },
      {
        title: 'Operations Managers',
        desc: 'Overseeing utility mapping business operations, including quality assurance, regulatory compliance, asset management, resource planning and site surveying service delivery. Operations manage the full cycle from underground utility detection through to presenting spatial data to clients.',
      },
      {
        title: 'Senior Surveyors Moving Into Management',
        desc: 'Level 5 qualified utility surveyors ready to formalise their site surveying management expertise, develop advanced knowledge of geomatics and site surveying, and move into a recognised senior or leadership grade.',
      },
      {
        title: 'Training and Assessment Roles',
        desc: 'Practitioners moving into internal training, mentoring or workplace assessment functions within a utility mapping operation, including those responsible for identifying hazards, implementing risk reduction methods and managing health and safety aspects of site surveying.',
      },
      {
        title: 'Contractors and Framework Operators',
        desc: 'Contractors on major infrastructure development frameworks and construction projects where a Level 6 management qualification in geomatics and site surveying supports contract compliance and quality audit requirements.',
      },
    ],
  },

  courseContent: {
    eyebrow: 'Competency Areas',
    title: 'What the Level 6 Diploma Covers',
    theory: {
      heading: 'Management Area',
      items: [
        'Managing Survey Operations -- Planning and overseeing utility mapping programmes, allocating resources for site surveying, monitoring progress and ensuring PAS128 deliverable quality across all Quality Levels (A through D). Demonstrates the ability to plan site surveying processes and manage site surveying operations understand project requirements.',
        'Project and Programme Management -- Managing utility mapping projects from inception to closeout across civil engineering and construction projects, including programme planning, stakeholder liaison, risk management, project requirements and handover of survey reports, mapping data and spatial data.',
        'Health, Safety and Legal Compliance -- Ensuring site surveying operations comply with current legislation, CDM 2015, PAS128, HSG47 and applicable network operator requirements. Managing health and safety aspects including the ability to identify hazards, control risks and implement risk reduction methods within a site surveying context. Covers risk assessment and regulatory compliance for underground utility detection operations.',
        'Quality Management and Assurance -- Establishing and maintaining quality assurance processes for geospatial data collection, accurate utility mapping, report production and deliverable accuracy. Managing quality audit findings and implementing corrective actions. Produce mapping data to industry standards and present mapping data understand project requirements.',
        'Team Leadership and Development -- Leading, supervising and developing a team of utility surveyors. Managing performance, supporting CPD, conducting reviews and developing training plans within a site surveying operation. Communicate effectively with team members and stakeholders to ensure site surveying information flows across the operation.',
        'Commercial and Client Management -- Managing client relationships, contracts and commercial performance within utility mapping operations. Producing and reviewing tender submissions, scope documents and variation management.',
        'Technical Oversight -- Maintaining strategic technical oversight of electromagnetic location (EM), ground penetrating radar (GPR) and other advanced surveying techniques in use across the operation. Utilize advanced tools for underground utility detection and demonstrate technical expertise in site surveying management.',
        'Data, Reporting and ICT -- Overseeing the management of utility survey data, including geographic information systems, geospatial data analysis, complex data sets, spatial data outputs, CAD deliverables and e-portfolio or digital records management. Produce mapping data and detailed reports for asset management and infrastructure management purposes.',
      ],
    },
    practical: {
      heading: 'Assessment Process',
      intro: 'Portfolio-based assessment with dedicated assessor support.',
      items: [
        'Registration -- You register with Sygma as your approved centre. Sygma registers you with ProQual and provides access to the e-portfolio platform and your dedicated assessor.',
        'Assessor Briefing -- Your Sygma assessor reviews the diploma criteria with you and agrees a personal evidence plan aligned to your current role and day-to-day responsibilities.',
        'Evidence Collection -- You build your portfolio over time, drawing on workplace evidence such as project records, quality audits, H&S documentation demonstrating how you identify hazards and control risks, training plans, client correspondence and technical reports from site surveying projects.',
        'Assessor Reviews -- Your assessor reviews your evidence at agreed intervals, providing professional discussion and feedback. Reviews can be conducted as workplace visits or remotely.',
        'Internal Verification -- Sygma\'s internal verifier conducts a quality check on your completed portfolio to ensure it meets ProQual standards before external verification.',
        'ProQual Certification -- ProQual\'s external verifier reviews the portfolio. On successful verification, your Level 6 Diploma certificate is issued by ProQual Awarding Body.',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Get',
    items: [
      { title: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management registered on the RQF', desc: '' },
      { title: 'Portfolio of Evidence Record covering all mandatory units and learning outcomes', desc: '' },
      { title: 'External Assessment Report with detailed reports on each competency area', desc: '' },
      { title: 'Career prospects enhanced through formal recognition in geomatics and site surveying management', desc: '' },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Provider',
        title: 'One Provider, Every Level',
        desc: 'Sygma delivers every level of the ProQual utility mapping and surveying pathway from Level 3 through to the 6 Diploma in utility mapping management. There is no switching between providers, no duplication of evidence and no inconsistency in how your site surveying portfolio is assessed.',
      },
      {
        eyebrow: 'Experts',
        title: 'Assessors Who Know the Industry',
        desc: 'Your assessor is a qualified utility surveying professional with technical expertise in site surveying management. They understand PAS128, ICES competency standards, industry standards and what a real management role looks like in practice across civil engineering and infrastructure development.',
      },
      {
        eyebrow: 'Practical',
        title: 'Workplace-Based Assessment',
        desc: 'The ProQual Level 6 Diploma is built around what you already do in site surveying management. You do not need to attend a block of classroom training. Your portfolio evidence comes from your actual job managing site surveying operations.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent and Objective',
        desc: 'Sygma is an independent training and assessment provider with no ties to any equipment manufacturer or survey company. Your site surveying portfolio is assessed on what works in practice for accurate utility mapping, not on any commercial interest.',
      },
      {
        eyebrow: 'Accredited',
        title: 'Accredited Assessment Centre',
        desc: 'Sygma is a ProQual Approved Assessment Centre. All portfolios are internally verified and submitted to ProQual through the official approval process.',
      },
      {
        eyebrow: 'Career',
        title: 'Career Pathway Continuity',
        desc: 'If you completed your Level 3, 4 or 5 with Sygma, your assessor already knows your background. The Level 6 Diploma in utility mapping portfolio builds on a coherent body of evidence from your full career in site surveying to date, supporting your career prospects in utility management.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Expand Your Expertise',
    items: [
      {
        eyebrow: '',
        title: 'Level 5 Diploma',
        desc: 'The highest operational qualification covering full PAS128 site surveying competency and practical skills in underground utility detection.',
        href: '/courses/level-5-diploma',
      },
      {
        eyebrow: '',
        title: '5-Day PAS128 Surveyor',
        desc: 'Intensive training for the technical refresh of operational site surveying skills using advanced tools and utility mapping techniques.',
        href: '/courses/5-day-pas128-surveyor',
      },
      {
        eyebrow: '',
        title: 'TSA and ICES Utility Mapping',
        desc: 'Full TSA and ICES training programme with ICES GEUS competency coverage.',
        href: '/courses/tsa-ices-utility-mapping',
      },
    ],
  },

  relatedReading: [
    {
      title: 'TSA and ICES Utility Mapping Training Programme',
      desc: 'Module completions can contribute evidence towards GEUS01-GEUS04 technical oversight units within the Level 6 portfolio.',
      href: '/courses/tsa-ices-utility-mapping',
    },
    {
      title: 'PAS128 Awareness',
      desc: 'Management-level understanding of PAS128 risk, legal liability, safety aspects and quality system requirements. A useful evidence source for quality assurance, regulatory compliance and managing health and safety units within the site surveying management portfolio.',
      href: '/courses/pas128-awareness',
    },
    {
      title: '5 Day PAS128 Surveyor Course',
      desc: 'For Level 6 candidates who have not yet completed Level 5 formally, this intensive course fulfils the Level 5 prerequisite efficiently.',
      href: '/courses/5-day-pas128-surveyor',
    },
    {
      title: 'Bespoke and Corporate Training',
      desc: 'Sygma designs bespoke management and technical briefing programmes for organisations seeking to develop multiple team members simultaneously, covering utility mapping techniques, asset management and infrastructure management.',
      href: '/bespoke-training',
    },
  ],

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world site surveying skills and practical skills in utility mapping.',
      href: '/osca',
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation. If your business is registered with CITB, speak to your CITB Employer Network adviser about funding support for this qualification. Graduates of the ProQual Level 6 Diploma can apply for the Manager CSCS Card after passing the relevant CITB Health, Safety and Environment test, providing formal career recognition within the construction projects and civil engineering sector.',
      'Contact us for guidance on how to access available support. Funding is not guaranteed and varies by employer.',
    ],
  },

  faqs: [
    {
      q: 'Do I need to complete Level 5 before enrolling on the ProQual Level 6 Diploma?',
      a: 'Yes. The ProQual Level 6 Diploma in utility mapping and surveying management requires the Level 5 Diploma as a prerequisite. To reach Level 5, you must also hold Level 3 and Level 4 in the utility mapping and surveying pathway. Sygma can assess your current qualifications and advise on the fastest route to Level 6 if you are at an intermediate stage of the geomatics and site surveying pathway.',
    },
    {
      q: 'How long does the ProQual Level 6 Diploma take to complete?',
      a: 'The time required varies depending on your current site surveying management role, the availability of evidence from your workplace and how quickly you work through the mandatory units and portfolio stages. Your Sygma assessor will agree a realistic timeline with you at the initial evidence planning session. Most qualification candidates complete the 6 Diploma in utility mapping over a period of several months of active evidence compilation from their site surveying operations.',
    },
    {
      q: 'How much does the Level 6 Diploma cost?',
      a: 'The Level 6 is priced on application. Contact Sygma directly for a fee proposal. The fee is fixed from the point of registration with no additional charges as you progress through the portfolio. ProQual registration fees are payable separately to ProQual Awarding Body.',
    },
    {
      q: 'Is the ProQual Level 6 Diploma assessed by exam?',
      a: 'No. The ProQual Level 6 Diploma in utility mapping and surveying management is assessed entirely through a portfolio of workplace evidence. There are no examinations, written tests or classroom assessments. Your site surveying evidence is reviewed by a Sygma assessor and then submitted to ProQual for external verification.',
    },
    {
      q: 'Can I do the Level 6 alongside my normal job?',
      a: 'Yes. The portfolio-based assessment model is specifically designed to fit around your working life. Your evidence comes from your actual management practice, so you are not required to attend extended training programmes. Assessor reviews can be conducted remotely, reducing time away from your role.',
    },
    {
      q: 'Does the ProQual Level 6 Diploma help with ICES and CSTMB accreditation?',
      a: 'The ProQual Level 6 Diploma demonstrates site surveying management competency at the highest level within utility mapping and surveying. While the diploma itself is a ProQual qualification, the evidence you compile may also support ICES or CSTMB membership applications at senior grades, enhancing your career prospects as an experienced professional. Speak to your Sygma assessor about how to structure your portfolio to maximise its value across multiple industry standards frameworks.',
    },
    {
      q: 'What career progression does the Level 6 Diploma support?',
      a: 'Career progression from the ProQual Level 6 Diploma can include roles such as Senior Utility Surveyor, Project Manager, Operations Director or Technical Director within the geomatics and site surveying sector. The diploma in utility mapping and surveying management emphasises both internal organisational processes and standard industry practices, making it recognised across civil engineering, infrastructure development and construction projects. Graduates can also apply for the Manager CSCS Card after passing the relevant CITB Health, Safety and Environment test.',
    },
    {
      q: 'What are the mandatory units in the Level 6 Diploma?',
      a: 'The ProQual Level 6 Diploma covers mandatory units across site surveying management including managing survey operations, project and programme management, health safety and legal compliance, quality management and assurance, team leadership and development, commercial and client management, technical oversight, and data reporting and ICT. Learning outcomes span the ability to plan site surveying processes, identify mapping and data requirements, present spatial data, produce mapping data, manage site surveying information and site surveying management identify and manage operational risks.',
    },
    {
      q: 'What practical skills and advanced surveying techniques does the Level 6 cover?',
      a: 'While the Level 6 is a management qualification, it requires you to demonstrate technical expertise and advanced knowledge of practical skills used in site surveying. This includes strategic oversight of ground penetrating radar, electromagnetic location and other advanced surveying techniques. You must show you can manage geospatial data collection, geospatial data analysis and the use of geographic information systems across different site surveying operations. The diploma also covers interpreting complex data from underground utility detection and ensuring accurate utility mapping through quality assurance frameworks to meet regulatory compliance requirements.',
    },
    {
      q: 'How does the Level 6 Diploma relate to civil engineering and infrastructure projects?',
      a: 'The ProQual Level 6 Diploma is directly relevant to project managers and operations managers working on civil engineering, construction projects and infrastructure development programmes. The site surveying management competencies cover asset management, utility infrastructure oversight, risk assessment, identifying hazards and implementing risk reduction methods to control risks across large-scale infrastructure management projects. Utility mapping and surveying plays a critical safety role in infrastructure projects, and the Level 6 qualification provides the advanced knowledge to manage these operations effectively while meeting project requirements.',
    },
  ],

  cta: {
    title: 'Enquire About the ProQual Level 6 Utility Mapping Diploma',
    description: 'Price on application. Portfolio-based site surveying management assessment with dedicated assessor support from registration to certificate. Contact us to discuss your current qualifications and get a fee proposal for the ProQual Level 6 Diploma in utility mapping and surveying management.',
    primaryLabel: 'Enquire About Level 6',
    primaryHref: '/contact',
    secondaryLabel: 'View Level 5 Diploma',
    secondaryHref: '/courses/level-5-diploma',
  },
};
