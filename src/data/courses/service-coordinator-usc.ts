import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'service-coordinator-usc',

  metadata: {
    title: 'Service Coordinator USC Training | PAS128 | Sygma',
    description: 'Service Coordinator USC training covering utility service coordination roles and responsibilities. For teams managing works near buried services.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/service-coordinator-usc' },
    openGraph: {
      title: 'Service Coordinator USC Training | PAS128 | Sygma',
      description: 'Service Coordinator USC training covering utility service coordination roles and responsibilities. For teams managing works near buried services.',
      url: 'https://sygma-solutions.com/courses/service-coordinator-usc',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'Service Coordinator (USC) Training: Understanding the Role and Responsibilities',
    sub: 'The Underground Service Coordinator (USC) is an appointment made by the employer, not a qualification. This course prepares your appointed USC to source and review utility plans, interpret survey data, and complete the documentation the role demands.',
    image: 'CAT4-and-Genny-55',
    alt: 'Utility service coordinator training covering safe excavation planning and supervision',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Service Coordinator USC' },
    ],
  },

  schemas: {
    course: {
      name: 'Service Coordinator (USC) Training',
      description: 'Service Coordinator USC training covering utility service coordination roles and responsibilities. For teams managing works near buried services.',
      url: '/courses/service-coordinator-usc',
      credential: 'USC Appointment Training Certificate',
      duration: '1-3 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Service Coordinator USC' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Formats', value: '1-day standalone or 3-day with Level 3' },
    { label: 'USC Status', value: 'Appointment, not a qualification' },
    { label: 'Prerequisite (1-day)', value: 'EUS CAT1 within 12 months' },
    { label: 'Delivery', value: 'In-house, nationwide UK' },
  ],

  about: {
    eyebrow: 'What Is the USC Role?',
    title: 'An Appointment, Not a Qualification',
    paragraphs: [
      'The Underground Service Coordinator is an individual appointed by the employer to coordinate underground utility avoidance activities on a project. The appointment is a requirement under the Overhead and Underground Excavation Services Standards (it is not a qualification that a delegate earns, but a responsibility that a company assigns).',
      'The USC is responsible for ensuring the right utility plans are in place before excavation starts, that the locate has been conducted correctly, that permits are completed, and that the site team has the information they need to work safely. It is a coordination and oversight role, not an operational locating role.',
      'Because the USC role is an appointment rather than a qualification, companies often underestimate the knowledge it requires. This course makes sure the person you appoint actually understands what they are responsible for.',
    ],
    sidebar: {
      eyebrow: 'Important',
      items: [
        { label: 'Key Point', value: 'The USC is an appointment, not a qualification.' },
        { label: 'Registration', value: 'Your company appoints the USC. Sygma trains them to carry out that role correctly. Completing the USC course does not register your delegate on the EUSR or any other qualification register (it trains the person your organisation has chosen to fill the role). If your team needs the EUS CAT1, CAT2, and USC content together as part of a combined programme, see the EUS CAT1, CAT2 and USC Combined page.' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Classroom',
      items: [
        'Understanding the Overhead and Underground Excavation Services Standards',
        'Overview of utility networks and asset types',
        'Utility plans in depth: reading and interpreting plans in the context of the USC role',
        'PAS128 survey levels: understanding different survey types and specifying the right survey for the job',
        'CAT Manager data download: how to collect and analyse CAT data as a coordinator',
        'Electromagnetic location theory: understanding how the locate works, its limitations, and what it cannot find',
        'GPR survey awareness: what GPR does and when it should be specified',
        'Safe digging techniques: vacuum excavation, air pick, and hydro excavation',
        'Site documentation: services location board, permit to break ground, and sign-off requirements',
        'Insulated tools and flame-retardant clothing requirements',
      ],
    },
    practical: {
      heading: 'Site Practical',
      items: [
        'Practical demonstration of passive and active locating of buried services',
        'Site surveying techniques and process: from plan to locate',
      ],
    },
  },

  formats: {
    eyebrow: 'Course Formats',
    title: 'Two Ways to Deliver the USC Training',
    rows: [
      {
        format: '1-Day Standalone',
        duration: '1 day',
        maxDelegates: 'Delegates must hold EUS CAT1 from within the last 12 months',
        assessment: 'USC course completion certificate issued',
      },
      {
        format: '3-Day with Level 3 Certificate',
        duration: '3 days',
        maxDelegates: 'No prior qualification required',
        assessment: 'Level 3 Certificate in Utility Mapping and Surveying issued on completion',
      },
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'Course Deliverables',
    items: [
      { title: 'USC Certificate of Competence', desc: 'Completion certificate for the USC training.' },
      { title: 'Written Assessment Record', desc: 'Documentation of written assessment outcomes.' },
      { title: 'Practical Assessment Record', desc: 'Record of practical assessment completion.' },
      { title: 'EUSR Registration Guidance', desc: 'Guidance on EUSR registration where applicable.' },
    ],
  },

  photoStrips: [
    {
      images: [
        { src: 'CAT4-and-Genny-47', alt: 'Service Coordinator USC training - practical session' },
        { src: 'CAT4-and-Genny-59', alt: 'Service Coordinator USC training - hands-on assessment' },
        { src: 'Safe-Dig-07', alt: 'Service Coordinator USC training - on-site delivery' },
      ],
      variant: 'grid',
    },
    {
      images: [
        { src: 'CAT4-and-Genny-09', alt: 'Service coordinator utility awareness training' },
        { src: 'Safe-Dig-07', alt: 'USC qualification practical demonstration' },
        { src: 'CAT4-and-Genny-59', alt: 'Service coordination training assessment' },
      ],
      variant: 'grid',
    },
    {
      images: [
        { src: 'CAT4-and-Genny-45', alt: 'USC training with utility location equipment' },
        { src: 'Safe-Dig-18', alt: 'Service coordinator on-site assessment' },
        { src: 'CAT4-and-Genny-56', alt: 'Utility service coordination practical session' },
      ],
      variant: 'grid',
    },
  ],

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Should Attend',
    items: [
      {
        title: 'The Appointed or Designated USC',
        desc: 'The individual your company has appointed (or is planning to appoint) as Underground Service Coordinator. This course gives them the knowledge to fulfil the role correctly: sourcing plans, reviewing surveys, completing permits, and coordinating the excavation safely.',
      },
      {
        title: 'Supervisors and Site Managers',
        desc: 'Supervisors and site managers responsible for utility avoidance oversight who want to formalise their understanding of the USC role and the documentation it requires.',
      },
      {
        title: 'Companies Setting Up a USC Process',
        desc: 'Companies that need to appoint a USC but are unsure how the process should work in practice. This course gives your designated person the knowledge to set up and manage the process from day one.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Coordinating Safe Work',
        title: 'For those managing teams who dig near services. Understanding of both location and excavation requirements.',
        desc: 'USC training that covers the full range of coordination responsibilities and documentation.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Trainers with real-world experience in coordination roles and site management.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Structured on-site practical in real conditions.',
        desc: 'For the 1-day format, practical site element with real utilities and documentation.',
      },
      {
        eyebrow: 'Independent',
        title: 'No surveys, no equipment, no manufacturer relationships.',
        desc: 'Training focused on what the USC role actually demands, not commercial interests.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'Delivered at your site, travel included.',
        desc: 'In-house training at your location, using your site and documentation.',
      },
      {
        eyebrow: 'Two Format Options',
        title: '1-day standalone or 3-day with Level 3 Certificate in Utility Mapping.',
        desc: 'Choose the format that matches your team\'s qualification needs.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical.',
      'CITB-registered employers may be able to access Employer Network funding towards training costs. USC training and the Level 3 Certificate are recognised as professional development supporting your management capability.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Training',
    title: 'Related Training Courses',
    intro: 'Build your team\'s capability across utility avoidance and coordination roles.',
    items: [
      {
        eyebrow: 'Foundation',
        title: 'EUS CAT1',
        desc: 'The foundation. USCs need to understand locating as well as coordinate it.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Safe Digging',
        title: 'EUS CAT2 Safe Dig',
        desc: 'Safe excavation and permit requirements. Essential knowledge for USCs managing dig teams.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Plans Management',
        title: 'Plans and Process Training',
        desc: 'Master utility plan interpretation. USCs source and review plans every day.',
        href: '/courses/plans-and-process',
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
      q: 'Is the USC a qualification?',
      a: 'No. The Underground Service Coordinator is an appointment made by the employer. It is not a qualification that delegates earn through an awarding body. The course trains the person being appointed to understand and fulfil the role correctly. The USC appointment itself is the employer\'s responsibility.',
    },
    {
      q: 'Do delegates need to have done the EUS CAT1 course first?',
      a: 'For the 1-day standalone format, yes. Delegates must have completed the EUS CAT1 course within the last 12 months. If they have not, the USC course should be delivered over 2 days to incorporate the CAT1 content. For the 3-day format with Level 3 Certificate, no prior qualification is required.',
    },
    {
      q: 'What is the difference between this course and the EUS CAT1 and CAT2 Combined with USC course?',
      a: 'The EUS CAT1 and CAT2 Combined with USC course includes the EUS CAT1 and CAT2 qualifications alongside the USC content (it is a qualification route through EUSR). The standalone USC course is for delegates who already hold CAT1 and need USC-specific training, or for teams who want to pair the USC content with the Level 3 Certificate rather than the EUS qualification.',
    },
    {
      q: 'What is the Level 3 Certificate in Utility Mapping and Surveying?',
      a: 'The Level 3 Certificate is a qualification covering site reconnaissance, desktop survey, and utility survey processes mapped to PAS128. The 3-day USC format includes this qualification alongside the USC training content. The qualification is issued on completion of the three days.',
    },
    {
      q: 'What site or venue is required?',
      a: 'Both formats require a meeting room with welfare facilities. The 1-day standalone format includes a site practical element, so a suitable outdoor area with buried utilities near the training room is also required. For the 3-day format, an outdoor practical area is required for Day 3.',
    },
    {
      q: 'Does this course cover GPR?',
      a: 'The USC course includes GPR awareness (an overview of what GPR does and when it should be specified). It does not include GPR operation training. For GPR operation training, see the GPR Training course in the Utility Mapping section.',
    },
  ],

  cta: {
    title: 'Enquire About Service Coordinator (USC) Training',
    description: '1-day standalone (EUS CAT1 prerequisite) or 3-day with Level 3 Certificate. In-house at your site anywhere in the UK. Contact us to discuss the right format and receive a tailored quotation.',
    primaryLabel: 'Request a Quote',
    primaryHref: '/contact',
    secondaryLabel: 'View CAT1, CAT2 and USC Combined',
    secondaryHref: '/courses/eus-cat1-cat2-usc-combined',
  },
};
