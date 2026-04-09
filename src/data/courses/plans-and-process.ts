import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'plans-and-process',

  metadata: {
    title: 'Plans and Process Training Course | Sygma Solutions',
    description: 'Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/plans-and-process' },
    openGraph: {
      title: 'Plans and Process Training Course | Sygma Solutions',
      description: 'Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.',
      url: 'https://sygma-solutions.com/courses/plans-and-process',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'Plans and Process Training: Read Utility Plans Properly and Survey More Safely',
    sub: 'Most operatives can get hold of a utility plan. Far fewer can read one properly. From STATS and LSBUD to keys, scales, and regional network differences, delegates leave able to extract the right information from any plan and use it correctly on site.',
    image: 'CAT4-and-Genny-55',
    alt: 'Plans and process training covering utility survey planning and documentation',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Plans and Process Training' },
    ],
  },

  schemas: {
    course: {
      name: 'Plans and Process Training',
      description: 'Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.',
      url: '/courses/plans-and-process',
      credential: 'Plans and Process Certificate',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Plans and Process Training' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Online Format', value: 'Live Teams, approx 90 mins' },
    { label: 'In-Person Format', value: 'Classroom and site practical' },
    { label: 'Assessment', value: 'Practical competence check (in-person)' },
    { label: 'Certificate', value: 'Certificate of attendance' },
    { label: 'Delivery', value: 'Online or in-house, nationwide UK' },
  ],

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Should Attend',
    items: [
      {
        title: 'Operatives and Supervisors',
        desc: 'Anyone who uses utility plans as part of a survey or excavation process and wants to read them more accurately. This course is often taken alongside the EUS CAT1 or RQF Level 2 Award to complete the end-to-end skills picture.',
      },
      {
        title: 'Service Coordinators and USC Appointees',
        desc: 'Coordinators responsible for sourcing, reviewing, and signing off utility plans as part of the permit and excavation process. Covers PAS128 survey types and plan interpretation in the context of the USC role.',
      },
      {
        title: 'New Starters and Inductions',
        desc: 'The online format is well suited to remote inductions. The 90-minute session covers everything a new starter needs to know about utility plans before picking up a locator for the first time.',
      },
    ],
  },

  about: {
    eyebrow: 'The Problem With Plans',
    title: 'Having the Plan Is Not the Same as Understanding It',
    paragraphs: [
      'HSG47 is clear: you must obtain utility records before you excavate. But having the plan is only the first step. Understanding what it tells you, what it does not tell you, and how to use it alongside your locator is a different skill entirely.',
      'Misreading a plan, using the wrong scale, not spotting a network operator boundary, or failing to check the date can all lead to a locate that looks complete but leaves services undetected. This course closes that gap.',
      'The course is built for operatives, supervisors, and coordinators who use utility plans as part of their work. It covers the legal framework, the sourcing process, how to interpret different plan types, and how plans integrate with the locating survey from start to finish.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Online Format', value: 'Live session via Microsoft Teams, approximately 90 minutes. Webcam and microphone required.' },
        { label: 'In-Person Format', value: 'Classroom session plus practical site competence check' },
        { label: 'Assessment', value: 'Online: no formal assessment. In-person: optional short practical competence check' },
        { label: 'Certificate', value: 'Certificate of attendance' },
        { label: 'Max Delegates', value: 'By arrangement (contact Sygma for group size guidance)' },
        { label: 'Delivery', value: 'Online (Teams) or in-house at your site, nationwide UK' },
        { label: 'Pricing', value: 'By quotation (contact Sygma for a tailored quote)' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Legal and Responsibility Framework',
      items: [
        'HSG47 responsibilities for obtaining and using utility plans before any excavation',
        'CDM obligations (client, designer, and contractor responsibilities)',
        'When and why you need to source utility plans before breaking ground',
      ],
    },
    practical: {
      heading: 'What the Course Covers',
      intro: 'The course covers utility plan reading from first principles through to practical site application. The same content applies to both formats.',
      items: [
        'Network Areas and Regional Differences',
        'Different network operators and the areas they cover across the UK',
        'Regional differences in plan formats, keys, and notation by area',
        'Understanding which operator owns which asset in a given location',
        'Sourcing Utility Plans',
        'How to use LSBUD (Line Search Before U Dig) to request statutory utility records',
        'How to use Digdat and other plan sources for a complete picture',
        'Understanding the difference between a statutory response and a survey-grade drawing',
        'Reading and Interpreting Plans',
        'Keys and legends: material types, pipe sizes, cable types, and what they mean',
        'Scale: confirming you have the correct area and scale for the job in hand',
        'Dates: checking plan currency and understanding the limitations of older records',
        'Cross-sections and supplementary information contained in the plan',
        'Voltage and pressure notation: does it change the locate technique?',
        'Colour coding conventions and what they indicate for different services',
        'Using Plans With a Locator Survey',
        'How to use plans to select the correct utility detection technique for the job',
        'The process from reading plans to conducting the survey, step by step',
        'Accuracy and limitations: what the plan will not show you',
        'Using your eyes: visual survey as a complement to the utility plan',
      ],
    },
  },

  formats: {
    eyebrow: 'Delivery Formats',
    title: 'Practical Element and Competence Check',
    rows: [
      {
        format: 'Online (Teams)',
        duration: 'Live session, approx 90 minutes',
        maxDelegates: 'Unlimited (contact for guidance)',
        assessment: 'No formal assessment',
      },
      {
        format: 'In-House Classroom with Practical',
        duration: 'Full session including site competence check',
        maxDelegates: 'By arrangement',
        assessment: 'Optional practical competence check',
      },
    ],
    notes: [
      'When delivered in person, the course adds a practical element where delegates apply what they have learned in a real or representative site environment. This includes working with real plans, identifying utility routes, checking scales, and then using a locator in conjunction with the plan.',
      'A short competence check is completed to document understanding and practical ability. This does not qualify as an EUS assessment, but it gives a documented record of delegate competence that your company can retain.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'At the End of This Course',
    items: [
      { title: 'Certificate of Attendance', desc: 'Certificate of Attendance' },
      { title: 'HSG47 and PAS128 Reference Pack', desc: 'HSG47 and PAS128 Reference Pack' },
      { title: 'Plan Interpretation Guidance Notes', desc: 'Plan Interpretation Guidance Notes' },
      { title: 'CPD Record for Your Portfolio', desc: 'CPD Record for Your Portfolio' },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-45', alt: 'Plans and process training - practical session' },
        { src: 'CAT4-and-Genny-56', alt: 'Plans and process training - hands-on assessment' },
        { src: 'Safe-Dig-13', alt: 'Plans and process training with practical site element' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-47', alt: 'Plans and process training practical session' },
        { src: 'MALA-GPR-04', alt: 'Utility plans interpretation training' },
        { src: 'CAT4-and-Genny-66', alt: 'Understanding utility drawings and records' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'CAT4-and-Genny-52', alt: 'Plans and process training - live training environment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-50', alt: 'Plans and process qualification assessment' },
        { src: 'MALA-GPR-02', alt: 'Utility mapping and plans training' },
        { src: 'CAT4-and-Genny-61', alt: 'On-site plans and process practical' },
      ],
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical. CITB-registered employers may be able to access Employer Network funding towards training costs. Plans and process training is recognised as essential foundation knowledge for utility avoidance work.',
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Records and Planning',
        title: 'Understanding utility records is the first step before any equipment reaches the ground.',
        desc: 'Proper plan reading prevents incomplete surveys and dangerous misinterpretations.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Trainers who have worked with utility plans in the field every day.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Structured on-site practical in real conditions.',
        desc: 'In-person format includes site practical with real utility plans and buried services.',
      },
      {
        eyebrow: 'Independent',
        title: 'No surveys, no equipment, no manufacturer relationships.',
        desc: 'Training focused entirely on plan reading skills, not commercial interests.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'Delivered at your site, travel included.',
        desc: 'In-house training at your location for online and in-person formats.',
      },
      {
        eyebrow: 'Two Formats',
        title: 'Online Teams session or full in-person with site practical element.',
        desc: 'Choose the delivery method that suits your team\'s needs.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Related Training Courses',
    intro: 'Combine plans and process training with locating and safe dig qualifications.',
    items: [
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT1',
        desc: 'The foundation qualification for utility location. Plans and locating work together from start to finish.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT2 Safe Dig',
        desc: 'Safe excavation and permit requirements. Essential for teams executing digs after planning.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'Service Coordinator (USC)',
        desc: 'For those responsible for sourcing and reviewing utility plans as part of the USC role.',
        href: '/courses/service-coordinator-usc',
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
      q: 'Does the course cover LSBUD and Digdat?',
      a: 'Yes. The course covers how to use LSBUD (Line Search Before U Dig) to request statutory records from utility owners, and how to use Digdat as an additional source. Delegates will understand how to obtain the right plans for the job before any excavation takes place.',
    },
    {
      q: 'Is this course just for operatives?',
      a: 'No. While operatives benefit significantly, the course is equally relevant for supervisors, coordinators, and anyone who sources, reviews, or signs off utility plans as part of the excavation process. The Service Coordinator (USC) course also covers utility plans in more depth in the context of the USC appointment.',
    },
    {
      q: 'What is the difference between the online and in-person format?',
      a: 'The online format is a 90-minute live session via Teams covering the full classroom content. The in-person format includes the same classroom content plus a site practical element and a documented competence check. For teams where site competence needs to be recorded, the in-person format is recommended.',
    },
    {
      q: 'Does this course lead to a qualification?',
      a: 'No. Both formats issue a certificate of attendance. The in-person format includes a competence check. If you need a nationally recognised qualification, look at the RQF Level 2 Award or the EUS CAT1 course, both of which include utility plans as part of a broader assessment.',
    },
    {
      q: 'Can this course be delivered as part of a site induction?',
      a: 'Yes. The online format is well suited to remote inductions and can be used as a standalone session for new starters before they arrive on site. Contact Sygma to discuss how it can be incorporated into your onboarding process.',
    },
    {
      q: 'What plans experience do delegates need before attending?',
      a: 'None. The course starts from first principles and is suitable for delegates at all levels. Experienced operatives will find it confirms and formalises existing knowledge; newer starters get the full framework from the ground up.',
    },
  ],

  cta: {
    title: 'Enquire About Plans and Process Training',
    description: 'Online via Teams or in-house at your site. Contact us to discuss the format that works best for your team and receive a tailored quotation.',
    primaryLabel: 'Request a Quote',
    primaryHref: '/contact',
    secondaryLabel: 'View All Utility Avoidance Training',
    secondaryHref: '/training/cable-location-avoidance',
  },
};
