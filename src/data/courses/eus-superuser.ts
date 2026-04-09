import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'eus-superuser',

  metadata: {
    title: 'EUS Super User Cat and Genny | EUSR Accredited | Sygma',
    description: 'EUS super user cat and genny training. Advanced cable avoidance, strike investigation, calibration and on-site coaching. EUSR certified.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-superuser' },
    openGraph: {
      title: 'EUS Super User Cat and Genny | EUSR Accredited | Sygma',
      description: 'EUS super user cat and genny training. Advanced cable avoidance, strike investigation, calibration and on-site coaching. EUSR certified.',
      url: 'https://sygma-solutions.com/courses/eus-superuser',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'EUS Super User Cat and Genny Training',
    headline: 'EUS Superuser: Advanced Location, Calibration, Strike Investigation, and Coaching Assessment',
    sub: 'The highest level of EUS super user cat and genny training. Two days covering advanced cable avoidance tools and signal generator techniques, calibration, CAT Manager data analysis, USAG strike investigation, and the skills to assess and coach your team on locating underground services safely on site. Prerequisite: EUS CAT1 and Safe Dig CAT2.',
    image: 'CAT4-and-Genny-66',
    alt: 'EUS Superuser advanced cable avoidance training for experienced locator operators',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'EUS Superuser' },
    ],
  },

  schemas: {
    course: {
      name: 'EUS Super User Cat and Genny Training',
      description: 'EUS super user cat and genny training course covering advanced cable avoidance tools, signal generator operation, calibration, strike investigation, and on-site coaching assessment. EUSR category certification for experienced operatives who locate utility services and lead safe excavation practice.',
      url: '/courses/eus-superuser',
      credential: 'EUS Superuser Certificate',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'EUS Super User Cat and Genny' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: '21 Years',
      label: 'Cat and Genny Training',
      detail: 'Cable avoidance tools and signal generator training is all we do.',
    },
    {
      value: '70-80%',
      label: 'Increase in Genny Usage',
      detail: 'CAT Manager data downloads show genny usage increase after Sygma cat and genny training courses.',
    },
    {
      value: 'Proven',
      label: 'Utility Strike Reduction',
      detail: 'Clients report measurable reductions in utility strikes after completing cat and genny training.',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Competency Managers and Supervisors',
        desc: 'Managers responsible for overseeing cat and genny operations, managing cable avoidance competency across their team, and monitoring equipment calibration and fleet data for locating utility services.',
      },
      {
        title: 'Safety Managers',
        desc: 'Professionals tasked with reducing utility strikes and service strikes, auditing cat and genny field practices, and driving safe digging compliance across multiple sites.',
      },
      {
        title: 'Senior Operatives Moving Into Supervisory Roles',
        desc: 'Experienced cat and genny operators who are taking on responsibility for training coordination, competency assessment, and team oversight in locating underground services and buried utilities.',
      },
      {
        title: 'Organisations Using CAT Manager Systems',
        desc: 'Companies in construction and civil engineering using fleet management software who need qualified personnel to interpret cat and genny data, verify calibration records, and act on the equipment usage information it generates.',
      },
    ],
  },

  infoBar: [
    {
      label: 'Duration',
      value: '2 days cat and genny training (classroom and site)',
    },
    {
      label: 'Max Delegates',
      value: '6 per training course',
    },
    {
      label: 'EUSR Category',
      value: 'EUS Superuser certification',
    },
    {
      label: 'Assessments',
      value: '3 formal cat and genny assessments',
    },
    {
      label: 'Prerequisite',
      value: 'EUSR category EUS CAT1 and EUS CAT2',
    },
  ],

  about: {
    eyebrow: 'EUS Super User Cat and Genny Training Course',
    title: 'Teaching Others to Locate Underground Services Safely',
    paragraphs: [
      'This cat and genny training course is the next stage in the EUS pathway. EUS CAT1 and CAT2 train operatives to use cable avoidance tools and signal generators to locate buried services and perform safe excavations. The super user course asks a fundamentally different question: not whether you can do the job, but whether you can teach someone else to operate cat and genny equipment safely, locate underground utilities correctly, and assess whether they have reached the required standard of competency.',
      'The training course builds on the full CAT1 and CAT2 theoretical foundation with advanced cat and genny techniques including calibration, equipment operation across power mode, radio mode, and genny mode, and detailed analysis of the data being generated by your team\'s cat units. Delegates develop the practical coaching and assessment skills needed to formally check their team\'s competence in locating utility services on site. The course also covers utility strike investigation: how to complete a USAG cable strike form, how to analyse what went wrong with service strikes, and how to use that information to support safe excavation and prevent missed services happening again.',
      'With a maximum of six delegates per cohort and no fixed daily schedule, Sygma\'s trainers use a flexible approach across the two days of cat and genny training, moving between classroom and site to find the right balance of theory, knowledge, and hands-on equipment work for the group. Calibration of location equipment is covered before any site assessment begins, and every delegate is assessed three times before the training course ends.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        {
          label: 'Duration',
          value: '2 days (classroom and site, flexible approach)',
        },
        {
          label: 'Format',
          value: 'In-house cat and genny training at your site or Sygma\'s Wigan training centre',
        },
        {
          label: 'Max Delegates',
          value: '6 per training course',
        },
        {
          label: 'EUSR Category',
          value: 'EUS Superuser certification',
        },
        {
          label: 'Assessments',
          value: '3: POW Risk Assessment, Practical Assessment 1, Practical Assessment 2 (coaching and assessment competency)',
        },
        {
          label: 'Prerequisite',
          value: 'EUSR category: EUS CAT1 and EUS Safe Dig CAT2',
        },
        {
          label: 'Equipment',
          value: 'Cat and genny equipment provided including cable avoidance tools and signal generators. Sygma provides Radiodetection CAT4 and Genny4 as standard with calibration verified. This training course can be delivered on Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX',
        },
        {
          label: 'Delivery',
          value: 'Nationwide UK training course delivery',
        },
        {
          label: 'Pricing',
          value: 'Contact Sygma for a tailored quotation',
        },
      ],
    },
  },

  courseContent: {
    eyebrow: 'Classroom Content',
    title: 'Advanced Cat and Genny Theory, Calibration, and Strike Investigation',
    theory: {
      heading: 'Classroom Theory Content',
      subheading: 'The classroom element of this cat and genny training course revisits the theoretical foundations from CAT1 and CAT2 at an advanced level, with additional content around equipment calibration, data analysis, utility strike investigation, and the principles of coaching for safe digging practice.',
      items: [
        'Underground service strikes and cable strikes: risks, hazards, and requirements of HSG47 guidance for avoiding danger from underground cables and buried services',
        'STATS plans and utility drawings: interpretation, inaccuracies, and limitations at advanced level for locating underground utilities',
        'Advanced electromagnetic theory: full understanding of cat and genny operation, signal distortion, false readings, and myth-busting',
        'Signal generator (genny) operation: dual frequency, capacitance mode, earth positioning, blind induction, and depth estimation techniques',
        'Cat and genny calibration: how to verify equipment calibration, check calibration status, and understand calibration requirements before locating utility services on site',
        'How to promote and embed the genny-first approach with site teams to locate buried services safely',
        'Permit to break ground: how to complete and sign off correctly for safe digging and safe excavation compliance',
        'Cat Manager data analysis: downloading from the cat unit, exporting CSV and KML, importing into the analysis tool and online portal',
        'Analysing raw data: identifying usage patterns, spotting good and poor practice with cat and genny equipment across power mode, radio mode, and genny mode',
        'Utility strike investigation: how to conduct an investigation, assess service strikes, and complete a USAG cable strike form',
        'Coaching principles: effective on-site coaching, knowledge-based assessment, and building competency in cat and genny operation',
      ],
    },
    practical: {
      heading: 'Site Work Element',
      subheading: 'The site element of this training course covers advanced cat and genny location practice, calibration checks, and the coaching assessment. Delegates use cable avoidance tools and signal generators to locate underground services and buried utilities in real conditions. Sygma\'s trainers use a flexible approach across the two days, spending more time outdoors when site conditions are good.',
      items: [
        'Using STATS plans, utility drawings, and existing site information to plan the survey before any cat and genny location work begins',
        'Conducting a full utility survey starting with the genny to locate underground services and buried utilities',
        'Street light locating, LV service and main tracing including locating joints using cable avoidance tools',
        'HV detection and underground cable location using the right mode on cat and genny equipment',
        'Induction techniques: blind sweeps, effective nulling, and locating multiple utilities',
        'Capacitance techniques: locating non-earthed underground cables and metallic pipes',
        'Repositioning the genny earth: understanding the effect on signal quality and calibration',
        'Problem scenarios: identifying false readings, missed services, and working through solutions on site',
        'Delegates coach and assess each other on cat and genny operation using the Assessment 1 document and the Sygma coaching sheet',
        'Coaching tips, assessment planning, and session structure for cat and genny training delivery',
        'Coaching competency checks: communication, feedback, cat data download, calibration review, and using data to guide coaching on locating utility services',
        'Where possible, delegates coach working teams from the site on safe use of cable avoidance tools and signal generators',
        'Individual support, skills development, and additional hands-on cat and genny equipment time throughout',
      ],
    },
  },

  formats: {
    eyebrow: 'Assessment Structure',
    title: 'Three Formal Assessments for Cat and Genny Competency',
    rows: [
      {
        format: 'POW Risk Assessment',
        duration: 'Completed before practical begins',
        maxDelegates: 'Individual',
        assessment: 'Hazard identification and underground service assessment',
      },
      {
        format: 'Practical Assessment 1',
        duration: 'On-site with cable avoidance tools and signal generators',
        maxDelegates: 'Individual',
        assessment: 'Utility location competency using cat and genny',
      },
      {
        format: 'Practical Assessment 2',
        duration: 'Coaching and assessment of a delegate',
        maxDelegates: 'Paired',
        assessment: 'Coaching competency and data understanding',
      },
    ],
    notes: [
      'POW Risk Assessment: Completed by each delegate independently before the practical cat and genny training begins. Demonstrates the ability to assess hazards, conduct a proper Place of Work risk assessment, and identify underground services and buried utilities before any location activity starts on site.',
      'Practical Assessment 1: The Sygma Standard practical assessment for cat and genny competency. Records and validates each delegate\'s ability to locate utility services independently using correct use of cable avoidance tools and signal generators, equipment calibration checks, and survey methodology across all detection modes.',
      'Practical Assessment 2 (Coaching and Assessment Competency): Delegates use the Assessment 1 document and the Sygma coaching sheet to coach and formally assess another delegate on cat and genny operation. Assessment criteria cover communication, feedback quality, cat data download, calibration verification, data understanding, and the ability to use data to guide coaching on locating underground services safely.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'What Delegates Receive',
    items: [
      {
        title: 'EUS Super User Certification',
        desc: 'EUSR category certification for super user cat and genny training. Confirms competency to supervise, coach, and quality-check cat and genny operations for locating utility services and underground utilities safely.',
      },
      {
        title: 'Written Assessment Record',
        desc: 'Documented theory assessment covering supervisory responsibilities, HSG47 compliance, calibration knowledge, and permit-to-dig processes for safe excavation.',
      },
      {
        title: 'Practical Assessment Record',
        desc: 'On-site assessment evidence demonstrating competency in supervising cat and genny operations, correct use of cable avoidance tools and signal generators, and locating underground services.',
      },
      {
        title: 'Progression Guidance',
        desc: 'Clear next steps for further development of cat and genny skills, including CAT Manager training and management qualifications from the awarding body.',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-40', alt: 'EUS super user cat and genny training - practical session locating underground services' },
        { src: 'CAT4-and-Genny-54', alt: 'Cat and genny training course - hands-on assessment with cable avoidance tools' },
        { src: 'CAT4-and-Genny-71', alt: 'Signal generator (genny) application technique - direct connection for locating buried utilities' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'CAT4-and-Genny-04', alt: 'EUS Superuser advanced training delivery on site' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-48', alt: 'Cable avoidance superuser training' },
        { src: 'Advanced-EM-08', alt: 'Advanced locator techniques training' },
        { src: 'CAT4-and-Genny-56', alt: 'EUS Superuser practical skills assessment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-48', alt: 'EUS Superuser advanced cable avoidance training' },
        { src: 'CAT4-and-Genny-01', alt: 'Advanced electromagnetic locator operation' },
        { src: 'CAT4-and-Genny-56', alt: 'Superuser practical assessment on site' },
      ],
    },
  ],

  siteRequirements: {
    items: [
      {
        label: 'Meeting or conference room with projector or screen and welfare facilities',
        detail: 'Suitable meeting space for classroom sessions',
      },
      {
        label: 'Site with multiple detectable underground utilities including at least one LV service and one street light circuit where possible',
        detail: 'For practical location work',
      },
      {
        label: 'STATS plans for the site, provided by the client before the course',
        detail: 'For survey planning',
      },
      {
        label: 'A live dig area or permit to access a representative site area for practical work',
        detail: 'For hands-on assessment',
      },
      {
        label: 'Delegates should wear appropriate PPE throughout the site element',
        detail: 'Safety requirements',
      },
    ],
    note: 'Sygma\'s dedicated training centre in Wigan is available at no extra venue cost and includes live utility demonstration rigs suitable for all elements of the Superuser programme.',
  },

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered employers in construction and civil engineering may be able to access training funding support for cat and genny training course costs through the CITB Employer Network. Contact your CITB adviser directly for current eligibility and funding options.',
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Super User Cat and Genny Programme',
        title: 'Builds internal competency champions for cat and genny operations within your organisation.',
        desc: 'Not just advanced operators, but people who can assess and coach others on cable avoidance tools and signal generators to the same standard for locating utility services.',
      },
      {
        eyebrow: 'Specialist Cat and Genny Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Our trainers come from the field. They have years of experience locating underground services with cat and genny equipment and coaching teams on best practice.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Structured on-site practical using cat and genny in real conditions.',
        desc: 'Assessment happens on real underground utilities and buried services in real field conditions, not simulations. Calibration of location equipment is verified before every assessment.',
      },
      {
        eyebrow: 'Independent Training',
        title: 'No surveys, no equipment sales, no manufacturer relationships.',
        desc: 'Complete independence means objective assessment of cat and genny skills and no pressure to inflate results.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'Cat and genny training delivered at your site, travel included.',
        desc: 'In-house training course delivery at your premises eliminates disruption and uses your own underground utilities for practical instruction.',
      },
      {
        eyebrow: 'Small Groups',
        title: 'Maximum 6 delegates per cat and genny training course.',
        desc: 'Small groups mean individual attention for the coaching assessment and real cat and genny coaching practice on locating underground services.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Related Training Courses',
    intro: 'Build your team\'s cat and genny training capability across the full EUS pathway and beyond.',
    items: [
      {
        eyebrow: 'Cable Location',
        title: 'EUS CAT1 Cat and Genny Training',
        desc: 'The foundation cat and genny training course and EUSR category qualification. Essential prerequisite knowledge for cable avoidance tools and signal generators before moving toward a super user role.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Cable Location',
        title: 'EUS CAT2 Safe Dig',
        desc: 'Safe excavation training course and permit to dig for avoiding danger from underground services. Super user prerequisite required for all delegates.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Cable Location',
        title: 'Plans and Process Training',
        desc: 'Master utility drawings and plan interpretation. Essential for coordinators and team leaders managing surveys and locating utility services.',
        href: '/courses/plans-and-process',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world cat and genny skills on locating utility services.',
      href: '/osca',
    },
    {
      title: 'Bespoke Cat and Genny Training',
      desc: 'Design a tailored cat and genny training programme around your site risks, equipment calibration needs, and team size.',
      href: '/contact',
    },
  ],

  faqs: [
    {
      q: 'Who is the EUS super user cat and genny training course designed for?',
      a: 'The EUS super user cat and genny training course is designed for experienced CAT1 and CAT2 operators who are moving into supervisory or lead operative roles, and who need to assess and coach other members of their team on locating utility services and underground utilities on site. It is also appropriate for managers responsible for monitoring cat and genny equipment usage, calibration compliance, and CAT Manager data to improve their team\'s practice in locating buried services safely.',
    },
    {
      q: 'Is EUS CAT2 mandatory as a prerequisite for this cat and genny training?',
      a: 'Yes. Both the EUSR category EUS CAT1 and EUS Safe Dig CAT2 certification are required before attending the super user training course. The programme is built on the assumption that delegates can already use cable avoidance tools and signal generators to locate underground services competently in their own right. The super user course does not repeat entry-level cat and genny training.',
    },
    {
      q: 'What is the difference between this cat and genny course and the EUS CAT1 Plus?',
      a: 'EUS CAT1 Plus is an advanced single-day extension to the standard CAT1 training course, covering advanced genny application techniques and more complex location scenarios. The super user cat and genny training covers all of that technical content and adds the coaching and assessment element, calibration knowledge, utility strike investigation, and CAT Manager data analysis. The super user course is the complete upper level of the EUS pathway for locating utility services.',
    },
    {
      q: 'Does the coaching assessment replace a formal assessor qualification?',
      a: 'No. The coaching and assessment element of this cat and genny training course prepares delegates to assess their own team members against the Sygma standard for utility location and safe excavation. It does not constitute a nationally recognised assessor qualification from an awarding body. If your organisation requires formally qualified assessors for a wider internal training system, Sygma can discuss appropriate options for developing competency in cat and genny assessment.',
    },
    {
      q: 'Can we provide our own permit to break ground form for safe digging?',
      a: 'Yes, and this is preferred for safe digging compliance. Using your company\'s specific permit means delegates are assessed on the exact documentation they will use on site after the cat and genny training course. If you do not have a permit form or have not previously supplied it to Sygma, the Sygma permit document will be used to support safe excavation practice.',
    },
    {
      q: 'Is there a written assessment for the super user cat and genny course?',
      a: 'There is a knowledge-based assessment element included in the classroom content covering cat and genny theory, calibration, and underground utility detection, as well as the three practical assessments. The super user training course does not conclude with a standalone written exam paper in the same format as CAT1, but delegates are assessed continuously on their skills and competency throughout both days.',
    },
    {
      q: 'What cat and genny equipment is used on the EUS super user training course?',
      a: 'Sygma provides Radiodetection CAT4 and Genny4 as standard location equipment with calibration verified before each training course. The course can also be delivered on CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX cable avoidance tools and signal generators. Delegates learn correct use of cat and genny equipment across power mode, radio mode, and genny mode, and are trained to check calibration status and identify equipment requiring calibration before locating underground services on site.',
    },
    {
      q: 'How does cat and genny calibration feature in the EUS super user course?',
      a: 'Calibration is a significant element of the EUS super user cat and genny training. Delegates learn how to verify that cable avoidance tools and signal generators are within calibration, how to check calibration records and expiry dates through CAT Manager data, and how to identify location equipment that requires calibration before use on site. Understanding calibration requirements is essential for managers responsible for ensuring their team\'s cat and genny equipment detects signals accurately and supports safe excavation of underground utilities and buried cables.',
    },
    {
      q: 'How does the EUS super user training support safe excavation and avoiding danger?',
      a: 'The super user cat and genny training course covers safe digging and safe excavation practice in detail, including guidance from HSG47 on avoiding danger from underground services. Delegates learn how to assess risk before excavation work begins, how to use utility drawings and STATS plans to identify buried services and underground cables, and how to coach their team on best practice for locating utility services. The course also covers service strikes and utility strike investigation to prevent missed services during construction and civil engineering excavation work.',
    },
    {
      q: 'What EUSR category does the EUS super user certification cover?',
      a: 'Successful completion of the EUS super user cat and genny training course leads to the EUSR category EUS Superuser certification, registered through the awarding body. This qualification confirms competency to supervise, coach, and assess cat and genny operators who locate utility services and underground utilities. The EUSR category certification has an expiry date and requires periodic re-assessment to maintain the qualification. Contact Sygma for guidance on certification renewal and maintaining your cat and genny training accreditation.',
    },
  ],

  cta: {
    title: 'Enquire About EUS Super User Cat and Genny Training',
    description: 'Cat and genny training course delivered in-house at your site anywhere in the UK, or at Sygma\'s dedicated training centre in Wigan. Maximum 6 delegates per cohort. Contact us to discuss your team\'s needs for locating utility services and underground utilities safely and receive a tailored quotation.',
    primaryLabel: 'Enquire About Super User Cat and Genny Training',
    primaryHref: '/contact',
    secondaryLabel: 'View EUS CAT2 Safe Dig (Prerequisite)',
    secondaryHref: '/courses/eus-cat2-safe-dig',
  },
};
