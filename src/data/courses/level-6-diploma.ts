import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'level-6-diploma',

  metadata: {
    title: 'ProQual Level 6 Diploma in Utility Mapping Management | Sygma Solutions',
    description: 'ProQual RQF Level 6 Diploma in Utility Mapping and Surveying Management. Management-level qualification for senior leaders.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-6-diploma' },
    openGraph: {
      title: 'ProQual Level 6 Diploma in Utility Mapping Management | Sygma Solutions',
      description: 'ProQual RQF Level 6 Diploma. Management-level utility mapping qualification.',
      url: 'https://sygma-solutions.com/courses/level-6-diploma',
      type: 'website'
    }
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual RQF Level 6 Diploma in Utility Mapping and Surveying Management',
    sub: 'Formal recognition of management-level competency in utility mapping operations. For senior managers and programme leads responsible for planning, resourcing, and managing utility surveying at a strategic level. Portfolio-based assessment with full assessor support throughout.',
    images: [
      'MALA-GPR-06',
      'MALA-GPR-11',
      'Advanced-EM-04',
    ],
    alts: [
      'Management-level utility mapping training',
      'Professional survey team leadership training',
      'Strategic utility mapping operations management training',
    ],
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 6 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 6 Diploma in Utility Mapping and Surveying Management',
      description: 'Ofqual-regulated Level 6 Diploma for management-level competency in utility surveying operations.',
      url: '/courses/level-6-diploma',
      credential: 'Level 6 Diploma in Utility Surveying Management',
      duration: 'Part-time',
      mode: ['online']
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 6 Diploma' }
    ],
    includeFaqSchema: true,
  },

  faqs: [
    {
      q: 'What does Level 6 cover that is different from Level 5?',
      a: 'Level 6 is a management-level qualification. While Level 5 focuses on doing the work (senior practitioner), Level 6 focuses on planning and managing utility mapping programmes at a strategic level. The qualification covers project management, resource planning, risk management, team development, and professional responsibility in utility surveying operations.'
    },
    {
      q: 'Who should do Level 6?',
      a: 'Level 6 is suitable for senior managers, programme leads, and those responsible for managing utility surveying contracts or teams at a strategic level. You need Level 5 or equivalent senior-level experience to enrol.'
    },
  ],

  cta: {
    title: 'Enrol in Level 6 Diploma',
    description: 'Portfolio-based management qualification with full assessor support. Contact us to discuss enrolment and strategic pathway.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
  },
};
