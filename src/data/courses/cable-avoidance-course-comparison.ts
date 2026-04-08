import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'cable-avoidance-course-comparison',

  metadata: {
    title: 'Cable Avoidance Course Comparison | EUS vs ProQual | Sygma',
    description: 'Cable avoidance course comparison: EUS CAT1 vs ProQual CAT1 vs ProQual CAT1 Plus. Choose the right accreditation for your team.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/cable-avoidance-course-comparison' },
    openGraph: {
      title: 'Cable Avoidance Course Comparison | EUS vs ProQual | Sygma',
      description: 'Cable avoidance course comparison: EUS CAT1 vs ProQual CAT1 vs ProQual CAT1 Plus. Choose the right accreditation for your team.',
      url: 'https://sygma-solutions.com/courses/cable-avoidance-course-comparison',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'Cable Avoidance Course Comparison: EUS CAT1 vs ProQual CAT1 vs ProQual CAT1 Plus',
    sub: 'Compare three EUSR and ProQual cable avoidance training routes. Understand the differences between qualification schemes and choose the right accreditation for your operatives.',
    image: 'CAT4-and-Genny-68',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Course Comparison' },
    ],
  },

  schemas: {
    course: {
      name: 'Cable Avoidance Course Comparison',
      description: 'Comparison of EUS CAT1, ProQual CAT1 and ProQual CAT1 Plus cable avoidance training routes and accreditation schemes.',
      url: '/courses/cable-avoidance-course-comparison',
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Course Comparison' },
    ],
  },

  faqs: [],

  cta: {
    title: 'Get Help Choosing Your Course',
    description: 'Not sure which cable avoidance qualification is right for your team? Contact us to discuss your needs and requirements.',
    primaryLabel: 'Contact Us',
    primaryHref: '/contact',
    secondaryLabel: 'View All Cable Avoidance Training',
    secondaryHref: '/training/cable-location-avoidance',
  },
};
