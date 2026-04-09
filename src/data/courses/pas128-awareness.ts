import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'pas128-awareness',

  metadata: {
    title: 'PAS 128 Awareness Training Course | Sygma Solutions',
    description: 'PAS 128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, drawings, and specifications.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/pas128-awareness' },
    openGraph: {
      title: 'PAS 128 Awareness Training Course | Sygma Solutions',
      description: 'PAS 128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, drawings, and specifications.',
      url: 'https://sygma-solutions.com/courses/pas128-awareness',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: 'PAS128 Awareness Training: Understand Utility Survey Drawings and the Survey Process',
    sub: 'PAS128 is the British Standard for utility surveys and mapping. If your team works near buried services, manages utility survey contracts or needs to read and act on PAS128 survey drawings, this awareness course gives them the knowledge to do that confidently. Classroom delivery with an optional practical element.',
    image: 'Utility-Mapping-02',
    alt: 'PAS128 utility survey training',
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'PAS128 Awareness' },
    ],
  },

  infoBar: [
    { label: 'Classroom-Based', value: 'Structured learning in a professional training environment' },
    { label: 'Optional Practical Session', value: 'Mini survey using utility plans and CAT and Genny' },
    { label: 'In-House Delivery Available', value: 'Delivered at your premises or Sygma\'s Wigan training centre' },
  ],

  schemas: {
    course: {
      name: 'PAS128 Awareness Training',
      description: 'PAS128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, PAS128 drawings and the survey specification process.',
      url: '/courses/pas128-awareness',
      credential: 'PAS128 Awareness Certificate',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'PAS128 Awareness' },
    ],
    includeFaqSchema: true,
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Designed For',
    items: [
      {
        title: 'Project managers and site supervisors',
        desc: 'Need to understand what a PAS128 survey provides and its limitations',
      },
      {
        title: 'Utility survey procurement teams',
        desc: 'Need to specify the right survey type for a given project',
      },
      {
        title: 'Locating operatives',
        desc: 'Need to understand how PAS128 survey types relate to the work they do',
      },
      {
        title: 'Designers and engineers',
        desc: 'Need to understand the confidence levels attached to different PAS128 quality levels',
      },
      {
        title: 'Contractors working to PAS128 survey drawings',
        desc: 'Need to read and interpret deliverables on site',
      },
    ],
  },

  about: {
    eyebrow: 'Why PAS128 Awareness Matters',
    title: 'The Standard That Governs Utility Surveys',
    paragraphs: [
      'PAS128 specifies how utility surveys should be conducted, recorded and delivered. It sets out survey types, quality levels, detection methods and deliverable requirements. But many of the people who commission, receive or act on PAS128 surveys have never had formal training in what the standard actually means or what a PAS128 drawing is telling them.',
      'This awareness course closes that gap. It covers the four PAS128 survey types (D, C, B and A), the detection methods M1 to M4, how to use plans to support a survey, and what the finished PAS128 deliverables should show. It is delivered as a structured classroom session, with the option to add a practical site element where delegates conduct a mini survey using utility plans and CAT and Genny.',
      'The course is relevant to anyone who commissions utility surveys, interprets PAS128 drawings on site or needs to understand what level of confidence a given survey type actually provides.',
    ],
  },

  courseContent: {
    eyebrow: 'Course Content',
    title: 'What the Session Covers',
    theory: {
      heading: 'Classroom Content Structured in Four Blocks',
      subheading: 'The classroom content is structured across four areas, taking delegates from legal context through to understanding what a completed PAS128 survey deliverable should contain.',
      items: [
        'Plans, Legislation and Network Knowledge',
        'Reasons for using utility plans: legal responsibilities under HSG47 and when plans must be obtained',
        'Network areas: different network operators, the areas they cover and regional differences',
        'Introduction to PAS128',
        'Overview of the PAS128 standard and what it sets out to achieve',
        'PAS128 survey types: D (desktop), C (site reconnaissance), B (detection survey) and A (verification)',
        'Detection methods M1 to M4 and how they differ in terms of technology and confidence level',
        'Using Plans in the Survey Process',
        'Visual survey (Type C): how to get the best out of a site reconnaissance using your eyes, environmental clues and STATS plans',
        'Using plans to assist a detection survey (Type B): understanding what plans tell you and what they do not',
        'Process of a survey in conjunction with plans: the routine from reading plans through to completing the detection survey (Types D and B)',
        'PAS128 Drawings and Deliverables',
        'Analysing PAS128 survey drawings: understanding what is shown, the quality levels and confidence ratings',
        'PAS128 deliverables: what a completed survey must include',
        'Verification survey (Type A): what it is, when it is used and what it confirms',
      ],
    },
    practical: {
      heading: 'Optional Practical Element',
      subheading: 'Hands-On Learning in the Field',
      intro: 'The classroom session can be supplemented with an optional practical site element. Sygma will identify a suitable practical area close to the training venue.',
      items: [
        'Delegates conduct a mini survey using utility plans alongside CAT and Genny',
        'A practical competence assessment is completed during the site session',
        'The practical element reinforces the classroom learning and gives delegates direct experience of applying PAS128 Type C and B survey processes in a real environment',
      ],
    },
  },

  formats: {
    eyebrow: 'Delivery Format',
    title: 'Classroom-Based with Optional Site',
    rows: [
      {
        format: 'Classroom Only',
        duration: '1 day',
        maxDelegates: 'No limit',
        assessment: 'Certificate of attendance issued',
      },
      {
        format: 'Classroom with Practical',
        duration: '1 day + practical session',
        maxDelegates: 'No limit',
        assessment: 'Certificate plus practical competence check record',
      },
    ],
    notes: [
      'The course is available as an in-house delivery at your premises or at Sygma\'s Wigan training centre.',
      'No formal qualification is attached to this course. Delegates who attend receive a certificate of attendance. Delegates who complete the optional practical element receive a documented record of practical capability with PAS128-aligned tasks.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'At the End of This Course',
    items: [
      {
        title: 'Certificate of Attendance',
        desc: 'Sygma certificate confirming PAS128 awareness training completion',
      },
      {
        title: 'Competence Check Record',
        desc: 'If optional practical session completed, documented competence check',
      },
      {
        title: 'Reference Materials',
        desc: 'Understanding of PAS128 survey types D, C, B and A',
      },
      {
        title: 'Progression Guidance',
        desc: 'Advice on next steps toward full PAS128 surveyor qualification',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-05', alt: 'PAS128 awareness training - practical session' },
        { src: 'CAT4-and-Genny-03', alt: 'PAS128 awareness training - electromagnetic locator practical' },
        { src: 'MALA-GPR-13', alt: 'PAS128 awareness training - on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-07', alt: 'PAS128 awareness training with GPR equipment' },
        { src: 'MALA-GPR-15', alt: 'Utility survey awareness classroom session' },
        { src: 'Utility-Mapping-03', alt: 'PAS128 utility mapping demonstration' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'MALA-GPR-22', alt: 'Ground penetrating radar survey demonstration' },
        { src: 'MALA-GPR-28', alt: 'PAS128 utility detection practical training' },
        { src: 'Utility-Mapping-05', alt: 'Utility mapping equipment training session' },
      ],
    },
  ],

  relatedCourses: {
    eyebrow: 'Related Training',
    title: 'Courses That Complement This One',
    items: [
      {
        eyebrow: 'Utility Mapping',
        title: 'Plans and Process Training',
        desc: 'Covers STATS, LSBUD and Digdat plans interpretation. Complements PAS128 Awareness by focusing on the plans side of the survey process.',
        href: '/courses/plans-and-process',
      },
      {
        eyebrow: 'Utility Mapping',
        title: '5 Day PAS128 Surveyor Course',
        desc: 'The full surveyor programme for those who want to go beyond awareness into practical EM locating and GPR survey skills.',
        href: '/courses/5-day-pas128-surveyor',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'GPR Training',
        desc: 'GPR theory and practical operation for PAS128 Level B surveys. Module 1 and Module 2 available individually or combined.',
        href: '/courses/gpr-training',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'TSA and ICES Utility Mapping Programme',
        desc: 'Full ICES competency programme for utility mapping professionals seeking TSA and ICES recognition.',
        href: '/courses/tsa-ices-utility-mapping',
      },
      {
        eyebrow: 'Utility Mapping',
        title: 'EUS CAT and Genny Training',
        desc: 'For operatives who need locating skills before progressing to surveying. The foundation for PAS128 B survey work.',
        href: '/courses/eus-cat1',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Real Survey Expertise',
        title: 'Real Survey Expertise',
        desc: 'Led by trainers who actively survey to PAS128. Not theoretical delivery.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent',
        desc: 'Sygma is independent and owns the training process from start to finish.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Specialist Trainers',
        desc: 'Delivered by practitioners who understand real-world utility surveying challenges.',
      },
      {
        eyebrow: 'Practical Understanding',
        title: 'Practical Understanding',
        desc: 'The classroom content is grounded in how surveys actually happen on the ground.',
      },
      {
        eyebrow: 'Flexible Delivery',
        title: 'Flexible Delivery',
        desc: 'In-house at your premises or at Sygma\'s Wigan training centre. Mix and match with practical sessions.',
      },
      {
        eyebrow: 'Foundation for Further Training',
        title: 'Foundation for Further Training',
        desc: 'PAS128 Awareness sits at the entry point to the wider utility mapping training pathway.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding support. Availability varies by employer and is not guaranteed.',
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
      q: 'Is this course only for utility surveyors?',
      a: 'No. PAS128 Awareness is designed for anyone who needs to understand utility surveys: project managers, engineers, procurement teams, site supervisors and locating operatives. If you work with PAS128 survey drawings or commission utility surveys, this course is relevant.',
    },
    {
      q: 'What is the difference between this and the Plans and Process Training?',
      a: 'Plans and Process Training focuses on how to source, read and use utility plans (STATS, LSBUD, Digdat) before and during a survey. PAS128 Awareness focuses on the PAS128 standard itself: survey types, detection methods, deliverables and confidence levels. Both courses complement each other well.',
    },
    {
      q: 'Is the practical element included as standard?',
      a: 'No. The practical site session is optional. It is an addition to the classroom content. Let the bookings team know at the time of booking whether you want to include it, as this affects session duration and logistics.',
    },
    {
      q: 'What certification do delegates receive?',
      a: 'Delegates receive a certificate of attendance confirming they have completed the PAS128 Awareness course. Delegates who complete the optional practical element receive a documented record of their practical competence check.',
    },
    {
      q: 'Can this be delivered to a mixed group (some from site, some from the office)?',
      a: 'Yes. The course is suitable for mixed groups. The classroom content is relevant at all levels, and the discussion-based format allows both site operatives and office-based staff to engage with the content from their own perspective.',
    },
    {
      q: 'We need training for a large team. Can you deliver multiple sessions?',
      a: 'Yes. In-house delivery is the most practical option for large teams. Sygma can work with you to plan a delivery schedule that suits your workforce. Contact the bookings team to discuss.',
    },
  ],

  cta: {
    title: 'Enquire About PAS128 Awareness Training',
    description: 'Classroom-based with optional practical site session. Delivered in-house at your premises or at Sygma\'s Wigan training centre. Contact us to discuss your requirements and receive a tailored quotation.',
    primaryLabel: 'Enquire About This Course',
    primaryHref: '/contact',
    secondaryLabel: 'View All Utility Mapping Training',
    secondaryHref: '/training/utility-mapping-surveying',
  },
};
