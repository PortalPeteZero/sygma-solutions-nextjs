import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'gpr-training',

  metadata: {
    title: 'GPR Training for Utility Surveyors | Sygma Solutions',
    description: 'Ground penetrating radar training covering GPR technology, practical use and post-processing. Delivered by GPR experts with equipment selection guidance.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/gpr-training' },
    openGraph: {
      title: 'GPR Training for Utility Surveyors | Sygma Solutions',
      description: 'Ground penetrating radar training covering GPR technology, practical use and post-processing. Delivered by GPR experts with equipment selection guidance.',
      url: 'https://sygma-solutions.com/courses/gpr-training',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: 'GPR Training: Theory, Practical Use and Post Processing for Utility Surveyors',
    sub: 'Ground Penetrating Radar is the detection method that reveals what an electromagnetic locator cannot. This two-module GPR training programme covers GPR technology from the science behind a radargram to GPS-integrated data collection and full post processing in Object Mapper software. Elevate your surveying skills with expert-led ground penetrating radar training. Book individually or take both modules together.',
    image: 'Utility-Mapping-03',
    alt: 'Ground penetrating radar training using professional GPR survey equipment',
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'GPR Training' },
    ],
  },

  schemas: {
    course: {
      name: 'GPR Training for Utility Surveyors',
      description: 'GPR training covering theory, practical use and post-processing for utility surveyors. Delivered by experienced specialists at The Survey School.',
      url: '/courses/gpr-training',
      credential: 'GPR Training Certificate',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'GPR Training' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: '2 Modules', value: 'Take together or separately' },
    { label: 'CITB Approved', value: 'CITB-approved training' },
    { label: 'TSA Approved', value: 'Survey Association approved' },
    { label: 'EUSR Accredited', value: 'ProQual Approved Centre' },
  ],

  whoFor: {
    eyebrow: 'Audience',
    title: 'Designed For',
    items: [
      {
        title: 'Utility surveyors new to GPR',
        desc: 'Module 1 (start here)',
      },
      {
        title: 'Surveyors who can operate GPR on site but want to extend to post processing',
        desc: 'Module 2 (if you already understand GPR fundamentals)',
      },
      {
        title: 'Surveyors who need both (complete beginners or those refreshing both skills)',
        desc: 'Both modules as a two-day course',
      },
      {
        title: 'Delegates on the 5 Day PAS128 Surveyor Course who want standalone GPR training',
        desc: 'Both modules complement the 5 Day course content',
      },
      {
        title: 'TSA and ICES programme delegates covering ICES GEUS01 F',
        desc: 'Module 1 covers Part 1; Module 2 covers Parts 2 and beyond',
      },
    ],
  },

  about: {
    eyebrow: 'What This Course Covers',
    title: 'The Complete GPR Training Programme',
    paragraphs: [
      'Electromagnetic locating is the foundation of most utility surveys, but it cannot detect all services. Non-conductive pipes, poorly connected systems, congested utility corridors and services with no viable connection point all present challenges that ground penetrating radar is uniquely placed to address. But GPR technology is only useful when the operative knows how to set it up correctly, read the data in the field, and extract meaningful GPR insights from the results. Equipment selection, correct configuration, and accurate post processing all determine whether a ground penetrating radar survey adds genuine value or generates misleading data.',
      'Sygma\'s GPR training programme is structured in two modules that work together as a complete system. Module 1 builds the theoretical knowledge and practical skills needed to operate GPR equipment on a live survey site. Module 2 takes that capability further, covering GPS-integrated data collection, grid surveys, multi-array antennas and the full post processing workflow in Object Mapper software.',
      'The two modules are run as a two-day course or can be taken individually depending on existing knowledge and training needs. Module 2 requires either completion of Module 1 or a solid working knowledge of GPR operation.',
    ],
    sidebar: {
      eyebrow: 'Module Options',
      items: [
        { label: 'Module 1', value: 'GPR theory and practical use (1 day)' },
        { label: 'Module 2', value: 'Data collection and post processing (1 day)' },
        { label: 'Combined', value: 'Both modules as a consecutive two-day course' },
        { label: 'Equipment', value: 'MALA Easy Locator HDR and HDR Pro as standard' },
        { label: 'Software', value: 'Object Mapper for post processing' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Module 1: GPR Theory and Practical Use',
      subheading: 'Duration: 1 day. No prior GPR experience required.',
      items: [
        'Introduction to GPR and its role in utility surveying',
        'Theory of GPR: what a GPR signal is and how it travels through the ground',
        'What is a radargram: how to read and interpret the display',
        'Hyperbola and layer reflectors: identifying utilities in GPR data',
        'GPR frequency and its effect on depth penetration and resolution',
        'Signal velocity: how soil conditions affect GPR performance',
        'HDR (High Dynamic Range) technology on compatible equipment',
        'Depth measurement and how to improve accuracy',
        'GPR limitations: what the technology cannot reliably detect and why',
        'Radar data examples: real-world GPR outputs discussed and analysed',
        'Setting up the equipment: controls, features and wheel calibration',
        'Setting up a grid and establishing a baseline',
        'GPS integration: linking GPR data to a georeferenced grid',
        'Practical survey session on site',
      ],
    },
    practical: {
      heading: 'Module 2: Data Collection and Post Processing',
      subheading: 'Duration: 1 day (approximately 08:30 to 15:00). Prerequisite: Module 1 attendance or good working knowledge of GPR operation.',
      intro: 'Morning: on-site data collection. Afternoon: post processing in Object Mapper software.',
      items: [
        'Setting up a baseline for data collection',
        'Setting up the GPR with GPS for georeferenced collection',
        'Establishing and running a grid system',
        'Planning the data collection approach',
        'Data collection using a baseline and GPS',
        'Use of GPS and TPS for accurate positioning',
        'Data collection using a multi-array antenna',
        'Data management: transferring data from the GPR',
        'Introduction to Object Mapper software',
        'Processing the data: what processing does and why it matters',
        'Using filters: when and why to apply each filter type',
        'Hyperbola fitting: identifying and confirming utility positions in processed data',
        'Setting markers and polylines on interpreted features',
        'Interpolation of 2D data into 3D cubes and time-slice data',
        'Google Maps and Google Earth integration',
        'Exporting interpretation to CAD',
      ],
    },
  },

  formats: {
    eyebrow: 'Booking Options',
    title: 'Individual Modules or Full Two-Day Course',
    rows: [
      { format: 'Module 1 Only', duration: '1 day', maxDelegates: '6', assessment: 'Practical assessment' },
      { format: 'Module 2 Only', duration: '1 day', maxDelegates: '6', assessment: 'Practical assessment' },
      { format: 'Module 1 + Module 2', duration: '2 days', maxDelegates: '6', assessment: 'Practical assessment' },
    ],
    notes: [
      'Both modules available as in-house private courses or open courses at Sygma\'s Wigan training centre.',
      'MALA Easy Locator specific training variants available. Leica DS2000 and Leica DSX available for in-house delivery.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Receive',
    title: 'At the End of This Course',
    items: [
      { title: 'Certificate of Attendance', desc: 'Completion certificate issued by Sygma confirming successful completion of Module 1 and/or Module 2.' },
      { title: 'Practical Assessment Record', desc: 'Detailed record of practical assessments completed on site, documenting competency demonstrated during the course.' },
      { title: 'Equipment Confidence', desc: 'Hands-on experience with MALA Easy Locator GPR equipment. Delegates leave able to operate the equipment independently in the field.' },
      { title: 'Ongoing Support', desc: 'Post-course access to Sygma for technical questions and guidance on GPR application in your specific working environment.' },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Utility-Mapping-01', alt: 'GPR training - practical session with survey equipment' },
        { src: 'Utility-Mapping-02', alt: 'GPR training - hands-on field assessment' },
        { src: 'MALA-GPR-12', alt: 'GPR training - on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'GPR_05_Mala_Compact_mvupzg', alt: 'Ground penetrating radar practical training session' },
        { src: 'MALA-GPR-12', alt: 'GPR data collection on training site' },
        { src: 'MALA-GPR-01', alt: 'Delegates learning GPR survey techniques' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-25', alt: 'GPR training equipment demonstration' },
        { src: 'MALA-GPR-30', alt: 'Ground penetrating radar survey practical' },
        { src: 'MALA-GPR-33', alt: 'On-site GPR training with Mala equipment' },
      ],
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation (ATO) and a member of the CITB Employer Network. Employers registered with CITB may be able to access Employer Network funding towards training costs. Contact your CITB adviser or Sygma for guidance on eligibility.',
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Practical',
        title: 'Hands-On Practical From Day One',
        desc: 'All GPR training includes hands-on practical assessment in real site conditions. Delegates operate GPR equipment on real ground with real targets, not classroom simulations.',
      },
      {
        eyebrow: 'Experts',
        title: 'GPR Experts Who Survey Professionally',
        desc: 'Sygma\'s ground penetrating radar trainers are experienced utility surveying experts who use GPR technology operationally. They teach from direct field experience, delivering real GPR insights rather than reading from a script.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent of All Manufacturers',
        desc: 'Sygma does not sell ground penetrating radar equipment. Training is delivered without bias toward any specific manufacturer, so delegates learn equipment selection principles and how to get the best out of whatever GPR technology they use. This independence means you receive unbiased GPR insights that elevate your surveying capability.',
      },
      {
        eyebrow: 'PAS128',
        title: 'PAS128 Aligned',
        desc: 'GPR Module 1 and Module 2 together provide the GPR component of PAS128 Level B survey competency. For surveyors working toward PAS128, this is the practical GPR foundation.',
      },
      {
        eyebrow: 'Flexible',
        title: 'Flexible Delivery',
        desc: 'Available as open courses at Sygma\'s Wigan centre or as private in-house courses at your premises. Modules can be taken individually or together depending on your team\'s needs.',
      },
      {
        eyebrow: 'Post Processing',
        title: 'Post Processing Included',
        desc: 'Module 2 covers post processing with Object Mapper software, including CAD export and Google Maps integration. Delegates leave able to process and interpret their own survey data.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Training',
    title: 'Related Courses and Next Steps',
    items: [
      {
        eyebrow: 'Utility Mapping',
        title: '5 Day PAS128 Surveyor Course',
        desc: 'Includes GPR training within the full surveyor programme',
        href: '/courses/5-day-pas128-surveyor',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'TSA and ICES Utility Mapping Programme',
        desc: 'Full ICES competency programme including GPR modules',
        href: '/courses/tsa-ices-utility-mapping',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'PAS128 Awareness',
        desc: 'Entry-level PAS128 understanding for those who procure or interpret surveys',
        href: '/courses/pas128-awareness',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'ProQual Level 3 Certificate',
        desc: 'Nationally recognised qualification for utility surveyors',
        href: '/courses/level-3-certificate',
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
      q: 'Do I need prior GPR experience for Module 1?',
      a: 'No. Module 1 starts from first principles and is suitable for surveyors who have never operated GPR before. The classroom session builds the theoretical foundation before any practical work.',
    },
    {
      q: 'Can I attend Module 2 without doing Module 1?',
      a: 'Yes, provided you have a good working knowledge of GPR functions and operation. Ideally you will have completed Module 1 or equivalent training. If you are unsure whether your existing knowledge is sufficient, contact the bookings team before enrolling.',
    },
    {
      q: 'What GPR equipment is used on the course?',
      a: 'The course uses MALA Easy Locator GPR equipment including the HDR and HDR Pro models as standard. For in-house delivery, the course can be adapted for Leica DS2000, Leica DSX, and other client-supplied GPR systems. MALA-specific variants of both modules are available for open courses. Delegates who wish to use alternative GPR equipment should discuss this with the bookings team in advance.',
    },
    {
      q: 'What post processing software is covered in Module 2?',
      a: 'Module 2 covers Object Mapper software, including importing, processing, filtering, hyperbola fitting and exporting to CAD. Google Maps and Google Earth integration is also covered.',
    },
    {
      q: 'Is GPR training available in-house?',
      a: 'Yes. Both modules are available as private in-house courses delivered at your premises or a site of your choice. Contact the bookings team to discuss dates and logistics.',
    },
    {
      q: 'How does this training relate to PAS128?',
      a: 'GPR is a specified detection method within PAS128 Level B. Completing both GPR training modules equips surveyors to conduct PAS128 Level B GPR surveys. For the full PAS128 training programme covering Levels D, C and B, see the 5 Day PAS128 Surveyor Course.',
    },
  ],

  cta: {
    title: 'Enquire About Ground Penetrating Radar Training',
    description: 'Open course dates available at Sygma\'s Wigan training centre. Private in-house bookings arranged to suit your team and location. Our GPR experts will help you choose the right module or combination to elevate your ground penetrating radar surveying skills.',
    primaryLabel: 'Enquire About GPR Training',
    primaryHref: '/contact',
    secondaryLabel: 'View All Utility Mapping Training',
    secondaryHref: '/training/utility-mapping-surveying',
  },
};
