import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'eus-cat1-cat2-usc-combined',

  metadata: {
    title: 'EUS CAT1 CAT & Genny Training with CAT2 and USC | Sygma',
    description: 'EUS CAT1 and CAT2 combined utility avoidance training with USC Safe Dig. EUSR-registered accreditation. Cable location and safe excavation in one programme.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1-cat2-usc-combined' },
    openGraph: {
      title: 'EUS CAT1 CAT & Genny Training with CAT2 and USC | Sygma',
      description: 'EUS CAT1 and CAT2 combined utility avoidance training with USC Safe Dig. EUSR-registered accreditation. Cable location and safe excavation in one programme.',
      url: 'https://sygma-solutions.com/courses/eus-cat1-cat2-usc-combined',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'EUS CAT1 CAT & Genny Training with CAT2 Safe Dig and USC: Combined Utility Competency',
    sub: 'Combined EUS CAT1 cable location and CAT2 safe excavation training in a single programme. EUSR-registered for both CAT1 and CAT2. Nationwide delivery available.',
    image: 'CAT4-and-Genny-68',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'EUS CAT1 & CAT2 Combined' },
    ],
  },

  schemas: {
    course: {
      name: 'EUS CAT1 CAT2 Combined Training',
      description: 'Combined EUS CAT1 and CAT2 safe excavation training with USC module for full utility competency.',
      url: '/courses/eus-cat1-cat2-usc-combined',
      duration: '3 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'EUS CAT1 & CAT2 Combined' },
    ],
    includeFaqSchema: true,
  },

  faqs: [
    { q: 'What is covered in the combined course?', a: 'The combined programme covers EUS CAT1 cable location training plus EUS CAT2 safe excavation training in a single integrated delivery. Both elements are EUSR-registered.' },
    { q: 'How long does the combined training take?', a: 'The combined course typically runs over 3 days, though timing can be adjusted based on your requirements.' },
    { q: 'Is the combined course EUSR-registered?', a: 'Yes. Both the CAT1 and CAT2 elements are EUSR-registered qualifications.' },
    { q: 'Can the course be delivered in-house?', a: 'Yes. The combined course is available as in-house delivery at your premises nationwide.' },
    { q: 'What is the assessment process?', a: 'Both CAT1 and CAT2 elements include written and practical assessments.' },
    { q: 'Who should attend this course?', a: 'The combined course is suitable for teams who need both cable location (CAT1) and safe excavation (CAT2) competency.' },
  ],

  cta: {
    title: 'Book Your Combined CAT1 & CAT2 Training',
    description: 'Full utility avoidance and safe excavation competency in one integrated programme. Delivered in-house at your premises nationwide.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
    secondaryLabel: 'Request Information',
    secondaryHref: '/contact',
  },
};
