import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'pas128-awareness',

  metadata: {
    title: 'PAS 128 Awareness Training Course | Sygma Solutions',
    description: 'PAS 128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, drawings, and specifications.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/pas128-awareness' },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: 'PAS128 Awareness Training: Understand Utility Survey Drawings and the Survey Process',
    sub: 'PAS128 is the British Standard for utility surveys and mapping. If your team works near buried services, manages utility survey contracts or needs to read and act on PAS128 survey drawings, this awareness course gives them the knowledge to do that confidently. Classroom delivery with an optional practical element.',
    image: 'Utility-Mapping-02',
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'PAS128 Awareness' },
    ],
  },

  schemas: {
    course: {
      name: 'PAS128 Awareness Training',
      description: 'PAS128 awareness training for teams who commission or manage utility surveys. Understand survey quality levels, PAS128 drawings and the survey specification process.',
      url: '/courses/pas128-awareness',
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
    theory: {
      heading: 'Classroom Content',
      items: [
        'Plans, Legislation and Network Knowledge: Reasons for using utility plans and legal responsibilities under HSG47',
        'Network areas: different network operators, the areas they cover and regional differences',
        'Introduction to PAS128: Overview of the standard and what it sets out to achieve',
        'PAS128 survey types: D (desktop), C (site reconnaissance), B (detection survey) and A (verification)',
        'Detection methods M1 to M4 and how they differ in terms of technology and confidence level',
        'Using Plans in the Survey Process: Visual survey and detection surveys with plans',
        'Process of a survey in conjunction with plans: the routine from reading plans through to completing the detection survey',
        'PAS128 Drawings and Deliverables: Analysing survey drawings and understanding quality levels',
        'PAS128 deliverables and what a completed survey must include',
        'Verification survey (Type A): what it is, when it is used and what it confirms',
      ],
    },
    practical: {
      heading: 'Optional Practical Element',
      items: [
        'Delegates conduct a mini survey using utility plans alongside CAT and Genny',
        'A practical competence assessment is completed during the site session',
        'The practical element reinforces classroom learning and gives direct experience of applying PAS128 processes in a real environment',
      ],
    },
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
