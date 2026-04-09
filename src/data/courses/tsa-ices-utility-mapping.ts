import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'tsa-ices-utility-mapping',

  metadata: {
    title: 'TSA and ICES Utility Mapping Programme | Sygma Solutions',
    description: 'The most comprehensive utility mapping programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS 128 to GPR and CAD.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/tsa-ices-utility-mapping' },
    openGraph: {
      title: 'TSA and ICES Utility Mapping Programme | Sygma Solutions',
      description: 'The most comprehensive utility mapping programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS 128 to GPR and CAD.',
      url: 'https://sygma-solutions.com/courses/tsa-ices-utility-mapping',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: 'TSA and ICES Utility Mapping Training Programme: Seven Modules to Full Professional Competency',
    sub: 'The UK\'s most comprehensive utility surveyor training programme. Seven modules. Seventeen-plus days. Every ICES competency from desktop survey and PAS128 reconnaissance through to advanced GPR post processing, total stations, GNSS, geometric principles and CAD. Approved by TSA and mapped to ICES competencies across GEUS01, GEUS02, GEUS03 and GEUS04. The pathway to ProQual Level 4 and Level 5 for professional utility surveyors.',
    image: 'Utility-Mapping-01',
    alt: 'TSA ICES utility mapping training with professional survey equipment',
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'TSA and ICES Utility Mapping Programme' },
    ],
  },

  schemas: {
    course: {
      name: 'TSA and ICES Utility Mapping Programme',
      description: 'The most comprehensive utility mapping training programme in the UK. Seven modules, 17 plus days, covering every ICES competency from PAS128 to advanced GPR and CAD.',
      url: '/courses/tsa-ices-utility-mapping',
      credential: 'TSA and ICES Utility Mapping Certificate',
      duration: '7 modules',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'TSA and ICES Utility Mapping Programme' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: '7 Modules', value: '17+ training days across the full programme' },
    { label: 'TSA Approved', value: 'Survey Association approved delivery' },
    { label: 'ICES Mapped', value: 'Full ICES competency coverage for utility mapping' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-07', alt: 'TSA and ICES utility mapping - practical session' },
        { src: 'Advanced-EM-07', alt: 'TSA and ICES utility mapping - EM locator training' },
        { src: 'MALA-GPR-15', alt: 'TSA and ICES utility mapping - on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-08', alt: 'TSA utility mapping training with GPR' },
        { src: 'MALA-GPR-16', alt: 'ICES utility mapping practical assessment' },
        { src: 'Utility-Mapping-02', alt: 'Utility mapping survey fieldwork training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-26', alt: 'Ground penetrating radar training equipment' },
        { src: 'MALA-GPR-32', alt: 'TSA ICES utility survey practical session' },
        { src: 'Utility-Mapping-04', alt: 'Utility mapping and detection training' },
      ],
    },
  ],

  about: {
    eyebrow: 'What This Programme Is',
    title: 'A Structured Pathway to Full Professional Competency',
    paragraphs: [
      'Most utility surveyor training providers offer individual courses. Sygma Solutions\' TSA and ICES Utility Mapping Programme is different. It is a structured, seven-module training course designed to develop the full range of competencies required for professional utility mapping across the utility sector, as defined by the Institution of Civil Engineers Surveyors (ICES) competency framework. This utility surveyor training programme covers the complete surveying methodology from desktop research through to geospatial data collection on infrastructure projects.',
      'The programme covers everything from PAS128 desktop surveys using stats plans and site reconnaissance in Module 1 through to the application of ICT in utility surveying in Module 7. In between, delegates progress through advanced electromagnetic locating using an EM locator in passive modes and at different frequencies, ground penetrating radar GPR theory and post processing, surveying instruments including total stations and GNSS, and the geometric principles that underpin high-accuracy subsurface mapping. Each utility survey module builds practical skills in locating buried services across utility networks and different situations.',
      'The full programme is 17 or more days of structured training spread across all seven modules. Individual modules can be completed as standalone courses or combined. Modules 3 and 4 (GPR theory and advanced post processing) are frequently taken together as a standalone three-day course.',
      'For those working towards ProQual Level 4 or Level 5 qualifications in Utility Mapping and Surveying, this programme provides the training evidence and competency foundation those qualifications require.',
    ],
    sidebar: {
      eyebrow: 'Programme at a Glance',
      items: [
        { label: 'Total Duration', value: '17+ days across all seven modules' },
        { label: 'Module Format', value: 'Each module available standalone or combined' },
        { label: 'Approvals', value: 'TSA approved, ICES competency mapped' },
        { label: 'ICES Coverage', value: 'GEUS01, GEUS02, GEUS03 and GEUS04' },
        { label: 'Qualification Pathway', value: 'ProQual Level 3, Level 4 and Level 5' },
        { label: 'Delivery', value: 'Open course or in-house, nationwide UK' },
        { label: 'Pricing', value: 'Contact Sygma for module or programme quotation' },
      ],
    },
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Designed For',
    items: [
      {
        title: 'Utility surveyors developing towards ProQual Level 4 or Level 5',
        desc: 'The programme provides the structured training and competency evidence those qualifications require.',
      },
      {
        title: 'Senior utility surveyors and mapping professionals',
        desc: 'Formalises advanced skills and maps them to ICES competency standards.',
      },
      {
        title: 'Utility mapping companies developing their survey teams',
        desc: 'A defined, end-to-end training programme for career progression.',
      },
      {
        title: 'Individuals seeking ICES corporate membership requirements',
        desc: 'Modules map directly to ICES GEUS01-GEUS04 competencies.',
      },
      {
        title: 'Those who have completed the 5 Day PAS128 course and want to continue',
        desc: 'The programme extends and deepens the skills developed in the 5 Day course.',
      },
    ],
  },

  courseContent: {
    theory: {
      heading: 'Programme Structure: A Complete Professional Training Programme',
      subheading: 'Seven modules covering every ICES competency required for professional utility mapping. The full programme runs to 17 or more days, with individual modules available standalone.',
      items: [
        'Module 1 -- Desktop Survey and Site Reconnaissance (1 Day): ICES GEUS01 A-D. Understanding relevant specifications and standards: PAS128 and PAS256. Obtaining, interpreting and understanding limitations of stats plans, statutory undertakers\' records, and different plans. Assessment of formal and informal sources of information. Site reconnaissance methods. Applicable licensing requirements and legislation: CDM, HSG47, NRSWA, Management Act.',
        'Module 2 -- Advanced EM Locators (3 Days): ICES GEUS01 E and G. Effective use of electromagnetic methods for locating buried services. Direct connection, induction clamp, sonde, induction and passive modes at different frequencies. Basic electrical theory, electrical circuits, and distorted magnetic fields. Locating without a locator. Practical test: a two man team to survey a small site area. Geophysical methods overview. Acoustic pipe detection methods and gyroscopic techniques.',
        'Module 3 -- GPR Theory and Practical Use (1 Day): ICES GEUS01 F Part 1. Licensing requirements for ground penetrating radar operation. Different GPR technologies and their applications. Methods of GPR survey on a typical utility survey site. GPR theory: signals, radargrams, hyperbola interpretation. Set up, controls, and practical approach. PAS128 Level B GPR detection methods.',
        'Module 4 -- Advanced GPR Data Collection and Post Processing (2 Days): ICES GEUS01 F Part 2. Data collection: GPS and TPS integration, grid projects, multi-array antenna use. Data interpretation in the field. Data processing: filters, hyperbola fitting, interpolation of 2D data into 3D cubes and time slices. Post processing software: Object Mapper.',
        'Module 5 -- Use and Understanding of Surveying Instruments (5 Days): ICES GEUS02 A-G. Total stations: operation, checking and adjustment. GNSS: static and kinematic methods. Levels: optical, electronic and digital. Instrument checking and adjustment. Accessories: checking and adjustment. Other distance measurement methods.',
        'Module 6 -- Application of Geometric Principles (4 Days): ICES GEUS03 A-E. Calculating 3D coordinate geometry. 2D and 3D survey control. Adjustment of survey measurements. Measurement of heights. Error propagation.',
        'Module 7 -- ICT in Surveying (1 Day): ICES GEUS04 A-D. Transfer of utility survey and subsurface mapping data. Electronic processing of utility survey data. Use and manipulation of 3D utility data with digital ground models. CAD: general principles, structure, layering and UCS.',
      ],
    },
    practical: {
      heading: 'How Utility Surveyor Training Is Assessed',
      subheading: 'Modules that include a practical operational test require delegates to demonstrate the methods learned under exam conditions.',
      items: [
        'A written exam covers graphical and written questions on surveying methodology, basic electrical theory, and the knowledge required to successfully complete the course. Delegates must achieve the overall pass mark, and the exam score and overall exam score are recorded as part of your portfolio evidence.',
        'The practical test typically involves a two man team to survey a small site area on the same survey site, locating buried utilities in different situations using own equipment. Delegates must demonstrate competence in locating without a locator using stats plans and visual inspection, as well as with an EM locator at different frequencies.',
        'Safety is integrated throughout the utility surveyor training programme. Each module includes a risk assessment component, and delegates learn to work safely with appropriate PPE on live sites including power station compounds, quiet roads, and areas with buried services.',
        'Sygma Solutions provides all assessment materials and support. Delegates are required to successfully complete each module\'s assessments before progressing.',
      ],
    },
  },

  formats: {
    eyebrow: 'Flexible Module Booking',
    title: 'How to Take the Programme',
    rows: [
      { format: 'Complete programme', duration: '17+ days', maxDelegates: 'Contact us', assessment: 'All seven modules (full ICES competency coverage and ProQual Level 4 or 5 pathway evidence)' },
      { format: 'Modules 1-4 only', duration: '7 days', maxDelegates: 'Contact us', assessment: 'Full PAS128 B competency: desktop, site recon, advanced EM, GPR theory, GPR post processing' },
      { format: 'Modules 3 and 4 together', duration: '3 days', maxDelegates: 'Contact us', assessment: 'Three-day standalone GPR course: theory, practical use and post processing' },
      { format: 'Modules 5-7', duration: '10 days', maxDelegates: 'Contact us', assessment: 'Surveying instruments, geometric principles and ICT (for those already competent in PAS128 detection methods)' },
      { format: 'Individual modules', duration: 'Varies', maxDelegates: 'Contact us', assessment: 'Any module can be taken standalone based on specific development needs' },
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'At the End of This Course',
    items: [
      {
        title: 'TSA Certificate in Utility Mapping',
        desc: 'TSA and ICES recognised certificate in utility mapping on completion of all seven modules. Delegates who successfully complete the course receive full professional recognition as a utility surveyor.',
      },
      {
        title: 'Portfolio Evidence',
        desc: 'Documented portfolio evidence across all seven modules for professional records, including practical skills demonstrated to the examiner and methods learned throughout the programme.',
      },
      {
        title: 'CICES Membership Pathway',
        desc: 'Eligibility to apply for Chartered Institution of Civil Engineering Surveyors membership, supporting your career in the utility sector.',
      },
      {
        title: 'Professional Recognition',
        desc: 'Industry-recognised qualification for utility mapping and surveying career progression on infrastructure projects.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'TSA',
        title: 'TSA Approved',
        desc: 'Sygma is an approved TSA training provider for utility mapping and surveying.',
      },
      {
        eyebrow: 'Experts',
        title: 'Led by Working Utility Surveyors',
        desc: 'Trainers who actively work in utility surveying on infrastructure projects and bring real knowledge of surveying methodology and ground conditions to every module.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent',
        desc: 'Sygma is independent and owns the training process from start to finish.',
      },
      {
        eyebrow: 'Practical',
        title: 'Practical Assessment',
        desc: 'Every module includes a practical operational test and assessment, not just theory. Delegates locate buried services on a real survey site and demonstrate practical skills to the examiner.',
      },
      {
        eyebrow: 'Flexible',
        title: 'Flexible Delivery',
        desc: 'Open courses throughout the year or private in-house delivery for teams.',
      },
      {
        eyebrow: 'Pathway',
        title: 'Career Pathway',
        desc: 'The programme directly supports ProQual Level 4 and Level 5 qualifications.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support for the TSA and ICES programme. Availability varies by employer and is not guaranteed.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Training',
    title: 'Related Courses and Qualifications',
    items: [
      {
        eyebrow: 'Utility Mapping',
        title: '5 Day PAS128 Surveyor Course',
        desc: 'Covers Modules 1 to 3 content in one intensive week, with written exam and practical assessment. A natural first step before the wider programme.',
        href: '/courses/5-day-pas128-surveyor',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'GPR Training',
        desc: 'Equivalent to Modules 3 and 4 as standalone GPR training. Module 1 (theory and practical use) and Module 2 (advanced post processing) available individually or combined.',
        href: '/courses/gpr-training',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'PAS128 Awareness',
        desc: 'Entry-level awareness of the PAS128 standard for those who commission, receive or act on utility surveys.',
        href: '/courses/pas128-awareness',
      },
      {
        eyebrow: 'Qualifications',
        title: 'ProQual Level 3 Certificate',
        desc: 'The first nationally recognised qualification on the utility mapping pathway. Evidence from Modules 1-3 supports this qualification.',
        href: '/courses/level-3-certificate',
      },
      {
        eyebrow: 'Qualifications',
        title: 'ProQual Level 4 Diploma',
        desc: 'Higher-level qualification requiring evidence from Modules 1-5. The programme provides the training foundation.',
        href: '/courses/level-4-diploma',
      },
      {
        eyebrow: 'Qualifications',
        title: 'ProQual Level 5 Diploma',
        desc: 'The full professional qualification requiring evidence from all seven modules across GEUS01-GEUS04.',
        href: '/courses/level-5-diploma',
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
      q: 'Do I need to complete all seven modules?',
      a: 'No. Individual modules can be taken as standalone courses. Many delegates focus on Modules 1 to 4 for PAS128 competency, or on Modules 3 and 4 together as a three-day GPR course. The full seven-module programme is the route to complete ICES competency coverage and to the ProQual Level 4 and Level 5 qualifications.',
    },
    {
      q: 'What is the prerequisite for Module 4?',
      a: 'Module 3 (or equivalent GPR knowledge) is a prerequisite for Module 4. Delegates attending Module 4 should already understand GPR fundamentals, either from Module 3 or from equivalent prior training. Modules 3 and 4 are frequently taken back to back as a three-day course.',
    },
    {
      q: 'How does this programme relate to ProQual Level 4 and Level 5?',
      a: 'The programme provides structured training evidence that forms the foundation of ProQual Level 4 and Level 5 submissions. The seven modules map directly to the ICES competency domains required for those qualifications. Speak to the bookings team about how to plan your training and qualification pathway together.',
    },
    {
      q: 'Can modules be taken in any order?',
      a: 'Generally yes, with the exception of Module 4 which requires Module 3 as a prerequisite. For delegates working towards ProQual Level 4 or Level 5, completing modules in order provides the most logical progression and makes portfolio building easier.',
    },
    {
      q: 'Is this programme available in-house?',
      a: 'Yes. All modules are available as private in-house courses. This is the preferred option for teams, as it allows scheduling to fit around operational demands. Contact the bookings team to plan a delivery schedule.',
    },
    {
      q: 'How is this different from the 5 Day PAS128 Surveyor Course?',
      a: 'The 5 Day PAS128 Surveyor Course covers the content of Modules 1 to 3 in an intensive week, with a written exam and practical assessment included. The TSA and ICES programme is broader and longer, adding advanced GPR post processing, surveying instruments, geometric principles and ICT (Modules 4 to 7). For those entering utility mapping, the 5 Day course is often the natural first step before progressing into the wider programme.',
    },
    {
      q: 'What does the written exam cover?',
      a: 'The written exam includes graphical and written questions covering basic electrical theory, electromagnetic theory, surveying methodology, stats plans interpretation, and knowledge of how an EM locator works including signal direction and current direction. Delegates must achieve the overall pass mark under formal exam conditions. The exam score and overall exam score contribute to your portfolio evidence alongside the practical operational test results.',
    },
    {
      q: 'What safety training is included?',
      a: 'Safety is woven throughout the utility surveyor training programme. Modules cover risk assessment procedures, use of appropriate PPE, working safely on live sites including power station compounds and quiet roads, understanding ground conditions that affect locating accuracy, and recognising distorted magnetic fields near electrical circuits. Delegates learn to locate buried services and buried utilities safely in different situations, reducing the risk of utility strikes on infrastructure projects.',
    },
    {
      q: 'What practical field work is involved?',
      a: 'The practical elements include a test where a two man team to survey a small site area must locate buried services on the same survey site using own equipment. Delegates practise locating without a locator using stats plans and visual clues, as well as with an EM locator in passive modes and at different frequencies. They record actual findings on a blank base plan, mark assumed routes, and provide a rough sketch of the utility survey. The practical approach covers a typical utility survey from start to finish across different situations and ground conditions.',
    },
  ],

  cta: {
    title: 'Enquire About the TSA and ICES Utility Mapping Programme',
    description: 'Open course dates available for individual utility surveyor training modules throughout the year. Private in-house delivery of the full training course or selected modules can be arranged for teams. Contact Sygma Solutions to plan your training pathway.',
    primaryLabel: 'Enquire About the Full Programme',
    primaryHref: '/contact',
    secondaryLabel: 'Book an Individual Module',
    secondaryHref: '/contact',
  },
};
