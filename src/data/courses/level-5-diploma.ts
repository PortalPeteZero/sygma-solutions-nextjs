import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'level-5-diploma',

  metadata: {
    title: 'ProQual Level 5 Diploma in Utility Mapping | Sygma Solutions',
    description: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Senior-level professional qualification. In-person or online delivery available.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-5-diploma' },
    openGraph: {
      title: 'ProQual Level 5 Diploma in Utility Mapping | Sygma Solutions',
      description: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Senior-level qualification.',
      url: 'https://sygma-solutions.com/courses/level-5-diploma',
      type: 'website'
    }
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying',
    sub: 'Formal recognition of senior-level competency in utility mapping and surveying. Two routes available: an intensive 5-day in-person fast-track programme with written exam and practical assessments, or a flexible online route with full assessor support via MS Teams. No hidden fees. Contact us to discuss which route suits you best.',
    images: [
      'GPR_06_ymxpsk',
      'MALA-GPR-11',
      'Advanced-EM-04',
    ],
    alts: [
      'Advanced utility mapping training for Level 5 qualification',
      'Professional GPR survey techniques covered in the Level 5 course',
      'Advanced EM locating methods taught in the Level 5 diploma programme',
    ],
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 5 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 5 Diploma in Utility Mapping and Surveying',
      description: 'Ofqual-regulated Level 5 Diploma in Utility Mapping and Surveying. Senior-level professional qualification.',
      url: '/courses/level-5-diploma',
      credential: 'Level 5 Diploma in Utility Surveying',
      duration: '5 days',
      mode: ['onsite']
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 5 Diploma' }
    ],
    includeFaqSchema: true,
  },

  faqs: [
    {
      q: 'What is the difference between the in-person fast-track route and the online route?',
      a: 'Both routes lead to the same ProQual Level 5 Diploma. The in-person fast-track is intensive classroom training over 5 days with written exam and practical assessments. The online route is self-paced portfolio building with MS Teams assessor support throughout. Choose based on your learning preference and schedule.'
    },
    {
      q: 'How long does the in-person route take?',
      a: 'The fast-track intensive programme is 5 consecutive days of classroom-based training, followed by assessment. Most candidates complete the full programme (training, exam, assessments) within one calendar month.'
    },
    {
      q: 'What prior qualifications do I need?',
      a: 'For the in-person route: preferably Level 3 or Level 4 as a foundation, though not mandatory. For the online route: Level 4 Diploma or equivalent experience in utility mapping at a senior level. Contact Sygma to discuss your background if you\'re unsure.'
    },
  ],

  cta: {
    title: 'Enrol in Level 5 Diploma',
    description: 'Choose between fast-track in-person (5 days) or flexible online delivery. Contact us for dates and pricing.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
  },
};
