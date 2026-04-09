import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'proqualcat1-training',

  metadata: {
    title: 'ProQual CAT1 Training | Accredited Course | Sygma',
    description: 'ProQual-accredited CAT1 utility location training. 14 theory criteria, 8 practical criteria, all four EML modes assessed. The most rigorous one-day cable avoidance qualification.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat1-training' },
    openGraph: {
      title: 'ProQual CAT1 Training | Accredited Course | Sygma',
      description: 'ProQual-accredited CAT1 utility location training. The most rigorous one-day cable avoidance qualification available in the UK.',
      url: 'https://sygma-solutions.com/courses/proqualcat1-training',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'ProQual CAT1 Training: The Most Rigorous Utility Locating Qualification',
    sub: '14 theory criteria. 8 practical criteria. Every one must be met. A full written theory assessment and a full hands-on practical assessment covering all four locating modes and every Genny signal application method, mapped to HSG47, GS6, and CDM Regulations. Accredited by ProQual Accreditations.',
    image: 'Cat_Genny_01_hifnli',
    alt: 'ProQual CAT1 cable avoidance training with practical locator exercises',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Training' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT1 Training',
      description: 'ProQual-accredited CAT1 utility location training with all four EML modes in practical assessment.',
      url: '/courses/proqualcat1-training',
      credential: 'ProQual CAT1',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Training' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: '21 Years',
      label: 'One Specialism',
      detail: 'Underground utility location training is all we do.',
    },
    {
      value: '70-80%',
      label: 'Increase in Genny Usage',
      detail: 'Measured through locator data downloads after Sygma training.',
    },
    {
      value: 'Proven',
      label: 'Strike Reduction Record',
      detail: 'Clients report measurable reductions in service strikes.',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Site Operatives',
        desc: 'Anyone who breaks ground or works near underground services.',
      },
      {
        title: 'Groundworkers and Labourers',
        desc: 'Digging, excavating or working in the vicinity of buried utilities.',
      },
      {
        title: 'Supervisors and Managers',
        desc: 'Responsible for teams who carry out excavation or survey work.',
      },
      {
        title: 'New Entrants to Utilities',
        desc: 'Starting a career in utility avoidance, streetworks or civil engineering.',
      },
      {
        title: 'Organisations Requiring ProQual Accreditation',
        desc: 'Companies whose competency frameworks mandate ProQual-accredited qualifications rather than EUS.',
      },
    ],
  },

  infoBar: [
    { label: 'Duration', value: '1 day (typically 8:30am to 4:00pm)' },
    { label: 'Format', value: 'Wigan HQ / Survey School, Worcester / on-site UK-wide' },
    { label: 'Max Delegates', value: '8 per session' },
    { label: 'Qualification', value: 'ProQual CAT1' },
    { label: 'Pass Standard', value: 'All 14 theory + all 8 practical criteria must be met' },
  ],

  about: {
    eyebrow: 'About This Course',
    title: 'What Is the ProQual CAT1?',
    paragraphs: [
      'The ProQual CAT1 is a ProQual-accredited cable avoidance qualification and the most rigorous one-day Genny and CAT course available in the UK. Delegates must demonstrate competence against 14 theory criteria and 8 practical criteria using a criteria-based competency assessment rather than pass-or-fail percentages.',
      'Accredited by ProQual Accreditations with external audits, the ProQual CAT1 sits alongside EUS CAT1 as an alternative accreditation route. Delivered at Wigan HQ, Worcester (The Survey School), or on-site UK-wide. The practical assessment covers all four locating modes: Power, Radio, Genny, and Avoidance, plus every Genny signal application method: direct connection, clamp, capacitance, induction, and nulling out.',
      'Clients who implement Sygma\'s ProQual CAT1 training as part of a wider competency programme report measurable reductions in cable strikes and service damage. The Genny-First methodology drives a 70 to 80 per cent increase in Genny usage across trained teams.',
      'In 21 years of delivering utility avoidance training, Sygma has had to add content to every qualification on the market to make it fit for the real demands of the industry. Every single one. The ProQual CAT1 is the first qualification developed in partnership with an awarding body that covers everything needed from a course in this subject.',
    ],
    sidebar: {
      eyebrow: 'Quick Reference',
      items: [
        { label: 'Qualification', value: 'ProQual CAT1' },
        { label: 'Awarding Body', value: 'ProQual Accreditations' },
        { label: 'Duration', value: '1 day' },
        { label: 'Max Delegates', value: '8' },
        { label: 'Equipment', value: 'Radiodetection CAT4 and Genny4 as standard' },
        { label: 'Modes Assessed', value: 'Power, Radio, Genny, Avoidance' },
        { label: 'Regulation', value: 'HSG47, GS6, CDM Regulations, BS EN 50110' },
        { label: 'Certificate', value: 'Valid 3 years' },
      ],
    },
  },

  courseContent: {
    eyebrow: 'Assessment Framework',
    title: 'Theory and Practical Criteria',
    theory: {
      heading: 'Theory Criteria (T1-T14)',
      subheading: 'Every criterion must be met individually. No percentage pass mark.',
      items: [
        'T1: Health, safety and environmental responsibilities while locating underground services, including HASAWA, Street Works Act, Permit to Works, contingency planning, CDM Regulations',
        'T2: Health and safety guidance governing location work including HSG47 and GS6',
        'T3: Range and use of personal protective equipment for the work',
        'T4: Requirements of a site-specific risk assessment and control measures in relation to utility locating activities',
        'T5: Safe system of work in accordance with HSG47, including identifying dangers, planning, obtaining plans, detecting and marking services, PAS128 awareness',
        'T6: Interpreting utility drawings to identify services and apparatus including colour coding, symbols, regional differences, PAS128 quality levels',
        'T7: Depths of apparatus and underground services, limitations of depth measurements, risks of depth uncertainty',
        'T8: Methods of marking out services and excavations for different site and weather conditions',
        'T9: Consequences of incorrect marking out, including impact on power cables, gas pipes, water, sewers, heated networks and telecommunications',
        'T10: Roles and responsibilities of individuals within site and highway operations teams including NRSWA requirements',
        'T11: Methods of visually locating and identifying overhead and underground services including markers, signs, features, and existing records',
        'T12: Principles of electronic locating equipment: Signal Generator in direct connection, clamp, capacitance, induction and nulling out modes, Power and Radio modes, specific locator features, data-enabled locators, and sources of interference',
        'T13: Procedure for recording and communicating the position and types of services and sub-structures located',
        'T14: Importance of reporting deviations in equipment position and identification of other structures',
      ],
    },
    practical: {
      heading: 'Practical Criteria (P1-P8)',
      subheading: 'All four locating modes and every Genny signal application method assessed.',
      intro: 'The practical assessment is conducted on a live training rig. Delegates must demonstrate competent performance on all eight criteria.',
      items: [
        'P1: Determine work location using company documentation and work instructions, ensure site plans obtained, recognise plan references and symbols',
        'P2: Plan work in line with health, safety and environmental legislation including Permit to Work process, risk assessment, site guarding, Safe System of Work',
        'P3: Inspect and prepare locating equipment required to complete work activity with pre-use checks per manufacturer instructions',
        'P4: Wear required PPE to complete work activities in accordance with Safe System of Work, minimum statutory requirements, damage checks',
        'P5: Use utility plans to determine extent of work site area where services are to be located, initial survey, visual assessment of surface features',
        'P6: Carry out Point of Work Risk Assessment (POWRA), recording findings and adding control measures aligned with HASAWA, HSG47 and GS6',
        'P7: Use utility plans with locating equipment: direct connection, induction, nulling out, Power and Radio modes, signal application, pinpoint, depth estimation, passive sweep',
        'P8: Mark and record position of services and sub-structures on work site in accordance with company procedures, report deviations from plans',
      ],
    },
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Cat_Genny_07_j5ml0w', alt: 'ProQual CAT1 practical training with locating equipment' },
        { src: 'Cat_Genny_10_bbjorl', alt: 'Hands-on cable avoidance assessment during ProQual training' },
        { src: 'Cat_Genny_17_kqd2z9', alt: 'Practical site assessment during utility avoidance training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Cat_Genny_19_c9e3jz', alt: 'CAT4 locator practical assessment during ProQual training' },
        { src: 'Cat_Genny_25_if7oy2', alt: 'Delegates learning signal application techniques' },
        { src: 'Cat_Genny_01_hifnli', alt: 'Hands-on utility avoidance practical session' },
      ],
    },
  ],

  certRoutes: {
    eyebrow: 'What You Receive',
    title: 'At the End of This Course',
    items: [
      { title: 'ProQual CAT1 Certificate', desc: 'Accredited by ProQual Accreditations, demonstrating competency across all four EML connection modes. Valid for 3 years.' },
      { title: 'Personalised Training Record', desc: 'Detailed breakdown of all theory and practical criteria assessed, including additional ProQual criteria.' },
      { title: 'Practical Assessment Evidence', desc: 'Documented evidence of competency with Genny and CAT equipment across all locating modes.' },
      { title: 'Ongoing Support', desc: 'Access to Sygma trainers for post-course questions and refresher guidance.' },
    ],
  },

  formats: {
    eyebrow: 'Pricing',
    title: 'Simple, Transparent Pricing',
    rows: [
      { format: 'ProQual CAT1 (on-site)', duration: '1 day', maxDelegates: 'Up to 8', assessment: 'Theory paper + practical' },
      { format: 'ProQual CAT1 (Wigan HQ)', duration: '1 day', maxDelegates: 'Up to 8', assessment: 'Theory paper + practical' },
      { format: 'ProQual CAT1 (Survey School, Worcester)', duration: '1 day', maxDelegates: 'Up to 8', assessment: 'Theory paper + practical' },
    ],
    notes: [
      'Sygma charges per course, not per person. Whether you send 4 delegates or 8, the course fee stays the same.',
      'Travel within the UK mainland is included. ProQual registration fee is included in the course price. No hidden extras.',
    ],
  },

  siteRequirements: {
    items: [
      { label: 'Training Area', detail: 'Outdoor practical area with access to buried services or marked simulation area.' },
      { label: 'Classroom', detail: 'Meeting room with projector or large screen for theory sessions.' },
      { label: 'Equipment', detail: 'Sygma provides all equipment for HQ and Survey School sessions. For on-site delivery, client supplies a locator and signal generator.' },
      { label: 'PPE', detail: 'Delegates must have appropriate PPE for practical elements. Minimum: safety boots, hi-vis vest.' },
    ],
    note: 'For on-site delivery, the equipment must be calibrated and in working order.',
  },

  citbFunding: {
    paragraphs: [
      'CITB-registered employers can access funding through the CITB Employer Network. Contact your Employer Network lead to confirm availability before booking.',
      'Sygma is a CITB Approved Training Organisation. We help clients navigate CITB funding enquiries as part of every booking.',
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Legal Framework',
        title: 'HSG47, GS6, CDM Regulations',
        desc: 'Comprehensive coverage of legal and regulatory requirements governing work near buried services, including specific CDM duty-holder obligations.',
      },
      {
        eyebrow: 'Risk Assessment',
        title: 'Identifying Buried Services Before Work Begins',
        desc: 'Systematic approach to service plan interpretation, visual inspection, and locating equipment use to identify all buried utilities before excavation.',
      },
      {
        eyebrow: 'Safe Practices',
        title: 'Safe Digging Practices in Proximity Zones',
        desc: 'Hand digging techniques, appropriate tool selection, and procedures for working within proximity zones once services have been identified.',
      },
      {
        eyebrow: 'Systems of Work',
        title: 'Permit to Dig Systems',
        desc: 'Integration of locating results into safe systems of work, permit to dig procedures, and coordination between survey teams and excavation teams.',
      },
      {
        eyebrow: 'Emergency Response',
        title: 'Procedures for Utility Strikes',
        desc: 'Immediate response procedures in the event of inadvertent utility strike, including notification, isolation, and safety protocols.',
      },
      {
        eyebrow: 'Documentation',
        title: 'Record Keeping and Audit Trail',
        desc: 'Maintaining comprehensive records of service locations, survey results, and locating activities for compliance documentation and future reference.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Accreditation',
        title: 'Accredited to a Higher Standard',
        desc: 'ProQual CAT1 is accredited by ProQual Accreditations and externally audited to exceed the EUS minimum specification.',
      },
      {
        eyebrow: 'Assessment',
        title: 'Every Mode Assessed',
        desc: 'ProQual CAT1 practical assessment covers all four locating modes and every Genny signal application method using Genny and CAT equipment.',
      },
      {
        eyebrow: 'Trainers',
        title: 'Specialist Trainers',
        desc: 'Every trainer is directly employed by Sygma. All are ex-utility surveyors or ex-equipment manufacturer specialists. All TAQA qualified.',
      },
      {
        eyebrow: 'Methodology',
        title: 'Genny-First Methodology',
        desc: '70 to 80 per cent of Sygma-trained operatives default to Genny-First after training. Measured through locator data downloads.',
      },
      {
        eyebrow: 'Independence',
        title: 'Independent Provider',
        desc: 'No surveys to sell, no equipment to push. When we identify a gap in competence, that verdict is unbiased.',
      },
      {
        eyebrow: 'Delivery',
        title: 'We Come to You',
        desc: 'Delivered at your site using your equipment and procedures. Travel included in course rate.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Where to Go After ProQual CAT1',
    items: [
      {
        eyebrow: 'Advanced',
        title: 'ProQual CAT1 Plus',
        desc: 'Extend your qualification with 7 additional theory criteria and 32+ practical criteria covering advanced locating scenarios.',
        href: '/courses/proqualcat1plus',
      },
      {
        eyebrow: 'Assessment',
        title: 'OSCA',
        desc: 'The On-Site Competency Assessment. A digital, GPS-stamped assessment proving your team can locate and avoid buried services in the field.',
        href: '/osca',
      },
      {
        eyebrow: 'Tailored',
        title: 'Bespoke Training',
        desc: 'If your organisation has a specific incident history or permit system, we design the programme from the ground up.',
        href: '/contact',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'EUS CAT1',
      desc: 'EUSR-registered cable avoidance qualification. Required by many utility sector frameworks and network operators.',
      href: '/courses/eus-cat1',
    },
    {
      title: 'ProQual CAT2',
      desc: 'Safe excavation qualification. If your team locates and digs, they need both.',
      href: '/courses/proqualcat2',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between ProQual CAT1 and EUS CAT1?',
      a: 'They are not equivalent qualifications. ProQual CAT1 is significantly more thorough. It covers topics that EUS does not assess at all, including CDM Regulations, risk assessment monitoring and reporting, and Safe Systems of Work aligned with HASAWA, HSG47, and GS6. Where EUS relies on multiple choice questions, ProQual uses written theory papers that require candidates to demonstrate understanding in their own words. In 21 years, Sygma has had to add content to every qualification on the market to make it fit for industry. The ProQual CAT1 is the only one we do not have to add anything to.',
    },
    {
      q: 'Why does the ProQual have no percentage pass mark?',
      a: 'The ProQual framework uses a competency-based assessment model. Rather than scoring a percentage on a multiple-choice paper, the assessor observes the delegate and judges whether each individual criterion has been met. Every criterion must be met before a certificate is issued. This is considered a more robust demonstration of real-world competence.',
    },
    {
      q: 'Do I need to bring my own CAT and Genny?',
      a: 'For classroom-based sessions at Wigan or Worcester, Sygma provides all equipment (Radiodetection CAT4 and Genny4 as standard). The course can be delivered on Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. For on-site delivery, the client must supply a locator and signal generator.',
    },
    {
      q: 'What happens if a delegate fails one of the practical criteria?',
      a: 'If a delegate does not meet a criterion during the assessment, the trainer will note the gap and, where time allows, provide additional coaching before a reassessment. If competence cannot be demonstrated on the day, the delegate will not receive a certificate and will need to attend a further session.',
    },
    {
      q: 'Is ProQual CAT1 training recognised on utility and construction sites?',
      a: 'Yes. The ProQual CAT1 is widely accepted across utility, water, gas, electricity, and construction sectors. Some organisations specify ProQual; others specify EUSR. If you are unsure what your framework requires, contact us and we will check for you.',
    },
    {
      q: 'What are the progression routes from ProQual CAT1?',
      a: 'Delegates who hold the ProQual CAT1 can progress to the ProQual CAT1 Plus (additional theory and extended practical criteria), the ProQual CAT2 Safe Dig qualification, or the OSCA scheme. Sygma can advise on the right progression route for your team.',
    },
  ],

  cta: {
    title: 'Book ProQual CAT1 Training',
    description: 'Available at Wigan, Worcester, or on your site anywhere in the UK. Covers up to 8 delegates per session. ProQual registration included.',
    primaryLabel: 'Book This Course',
    primaryHref: '/contact',
    secondaryLabel: 'Get in Touch',
    secondaryHref: '/contact',
  },
};
