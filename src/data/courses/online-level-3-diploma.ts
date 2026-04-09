import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'online-level-3-diploma',

  metadata: {
    title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
    description: 'Online Level 3 Diploma in Utility Mapping and Surveying. Flexible online delivery with live tutor support via MS Teams. Entry-level qualification.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/online-level-3-diploma' },
    openGraph: {
      title: 'Online Level 3 Diploma in Utility Mapping | Sygma Solutions',
      description: 'Online Level 3 Diploma in Utility Mapping and Surveying. Flexible online delivery.',
      url: 'https://sygma-solutions.com/courses/online-level-3-diploma',
      type: 'website'
    }
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'Online Level 3 Diploma in Utility Mapping and Surveying',
    sub: 'Entry-level RQF qualification delivered entirely online via Microsoft Teams. For operatives who want formal recognition of their utility mapping competency. Self-paced learning with live tutor support sessions throughout. No classroom attendance required.',
    images: [
      'GPR_06_ymxpsk',
      'MALA-GPR-11',
      'Advanced-EM-04',
    ],
    alts: [
      'Online Level 3 utility mapping training',
      'MS Teams-based online qualification',
      'Online learning support for Level 3 qualification',
    ],
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Online Level 3 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'Online Level 3 Diploma in Utility Mapping and Surveying',
      description: 'Online Level 3 Diploma delivered via Microsoft Teams. Entry-level Ofqual-regulated qualification.',
      url: '/courses/online-level-3-diploma',
      credential: 'Level 3 Diploma in Utility Surveying',
      duration: 'Part-time',
      mode: ['online']
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Online Level 3 Diploma' }
    ],
    includeFaqSchema: true,
  },

  faqs: [
    {
      q: 'How is the online Level 3 delivered?',
      a: 'Live sessions via Microsoft Teams plus self-paced learning modules. You progress through the qualification content with structured assessor support throughout.'
    },
    {
      q: 'How long does it take?',
      a: 'Most delegates complete within 6-12 months. Your progress depends on how quickly you can gather evidence from your work and complete assessor-led review sessions.'
    },
    {
      q: 'Can I take this if I am working full-time?',
      a: 'Yes. The online Level 3 is designed for working professionals. You progress at your own pace with MS Teams sessions scheduled to fit around your work commitments.'
    },
    {
      q: 'What do I need to provide as evidence?',
      a: 'Portfolio evidence from your professional practice in utility mapping or surveying roles. Your existing work and experience generate much of what is needed for the qualification.'
    },
  ],

  cta: {
    title: 'Enrol in Online Level 3 Diploma',
    description: 'Flexible online delivery with live tutor support via Microsoft Teams. Contact us for enrolment information and programme dates.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
  },
};
