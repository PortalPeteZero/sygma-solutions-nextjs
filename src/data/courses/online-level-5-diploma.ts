import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'online-level-5-diploma',

  metadata: {
    title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
    description: 'Online ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Nationally recognised qualification delivered online with flexible study.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-5-diploma' },
    openGraph: {
      title: 'Online Level 5 Diploma in Utility Mapping | Sygma Solutions',
      description: 'Online ProQual RQF Level 5 Diploma in Utility Mapping and Surveying. Nationally recognised qualification delivered online with flexible study.',
      url: 'https://sygma-solutions.com/courses/online-level-5-diploma',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual RQF Level 5 Diploma in Utility Mapping and Surveying (Online)',
    sub: 'Nationally recognised Level 5 qualification in utility surveying delivered online. Flexible study with practical assessments conducted in-person at your location or ours.',
    image: 'Utility-Mapping-02',
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Online Level 5 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'Online Level 5 Diploma in Utility Mapping',
      description: 'ProQual RQF Level 5 nationally recognised qualification in utility mapping and surveying delivered online.',
      url: '/courses/online-level-5-diploma',
      credential: 'Level 5 Diploma',
      duration: 'Flexible',
      mode: ['online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Online Level 5 Diploma' },
    ],
    includeFaqSchema: true,
  },

  faqs: [
    { q: 'Is the Level 5 Diploma nationally recognised?', a: 'Yes. The ProQual RQF Level 5 Diploma is a nationally recognised qualification on the Regulated Qualifications Framework.' },
    { q: 'How is the online delivery structured?', a: 'The course combines online learning modules with practical assessments conducted in-person either at your location or at Sygma\'s training centre.' },
    { q: 'How long does the course take?', a: 'Study duration is flexible, typically ranging from 6-12 months depending on your pace and availability.' },
    { q: 'What practical assessments are required?', a: 'Practical assessments cover utility surveying skills including PAS128 procedures and detection methods.' },
    { q: 'Can assessments be conducted at my location?', a: 'Yes. Practical assessments can be arranged at your premises or at Sygma\'s Wigan training centre.' },
    { q: 'Is prior experience required?', a: 'Foundational knowledge of utility services is beneficial, though the course is designed to be accessible to motivated learners.' },
  ],

  cta: {
    title: 'Enrol in the Online Level 5 Diploma',
    description: 'Nationally recognised Level 5 qualification in utility mapping. Study online with flexible scheduling and practical assessments.',
    primaryLabel: 'Enrol Now',
    primaryHref: '/contact',
    secondaryLabel: 'Request Course Information',
    secondaryHref: '/contact',
  },
};
