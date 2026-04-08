import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'eus-cat2-safe-dig',

  metadata: {
    title: 'EUSR CAT 2 Training | Safe Dig Course | Sygma',
    description: 'EUSR CAT2 safe excavation training course. Safe Dig certification and advanced utility avoidance for excavation supervisors and site managers.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig' },
    openGraph: {
      title: 'EUSR CAT 2 Training | Safe Dig Course | Sygma',
      description: 'EUSR CAT2 safe excavation training course. Safe Dig certification and advanced utility avoidance for excavation supervisors and site managers.',
      url: 'https://sygma-solutions.com/courses/eus-cat2-safe-dig',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Safe Dig and Advanced',
    headline: 'EUSR CAT2 Safe Dig Training: Safe Excavation Near Underground Services',
    sub: 'EUSR-registered CAT2 safe excavation training for supervisors and operatives managing the digging process near buried utilities. Single and multi-day formats available.',
    image: 'Safe-Dig-14',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'EUSR CAT2 Safe Dig' },
    ],
  },

  schemas: {
    course: {
      name: 'EUSR CAT2 Safe Dig Training',
      description: 'EUSR-registered CAT2 safe excavation training for teams managing the digging process near buried utilities.',
      url: '/courses/eus-cat2-safe-dig',
      duration: '1-2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'EUSR CAT2 Safe Dig' },
    ],
    includeFaqSchema: true,
  },

  faqs: [
    { q: 'What is CAT2 Safe Dig training?', a: 'CAT2 Safe Dig is EUSR-registered training for the safe excavation process near buried utilities. It focuses on the digging team and safe working practices.' },
    { q: 'Who should attend CAT2 training?', a: 'Excavation supervisors, site managers, and operatives responsible for managing the digging process near buried services.' },
    { q: 'Is CAT2 EUSR-registered?', a: 'Yes. The CAT2 Safe Dig qualification is EUSR-registered and valid for 3 years.' },
    { q: 'How long is the course?', a: 'CAT2 training is available as 1-day or 2-day formats depending on your requirements.' },
    { q: 'Can it be delivered in-house?', a: 'Yes. Sygma delivers CAT2 training at your premises nationwide.' },
    { q: 'What is the difference between CAT1 and CAT2?', a: 'CAT1 covers cable location and detection. CAT2 covers safe excavation and protecting yourself during the digging process.' },
  ],

  cta: {
    title: 'Book Your CAT2 Safe Dig Training',
    description: 'EUSR-registered safe excavation training for supervisors and site teams. Delivered nationwide at your premises.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
    secondaryLabel: 'Request Information',
    secondaryHref: '/contact',
  },
};
