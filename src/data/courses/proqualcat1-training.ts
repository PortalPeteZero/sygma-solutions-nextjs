import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'proqualcat1-training',

  metadata: {
    title: 'ProQual CAT1 Training | Accredited Course | Sygma',
    description: 'ProQual-accredited CAT1 utility location training. Accredited cable avoidance course with all four EML modes assessed. Nationwide delivery.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat1-training' },
    openGraph: {
      title: 'ProQual CAT1 Training | Accredited Course | Sygma',
      description: 'ProQual-accredited CAT1 utility location training. Accredited cable avoidance course with all four EML modes assessed. Nationwide delivery.',
      url: 'https://sygma-solutions.com/courses/proqualcat1-training',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'ProQual CAT1 Training: The Most Rigorous Utility Location Qualification',
    sub: 'ProQual-accredited CAT1 training with all four EML modes assessed in the practical exam. Built on Sygma\'s Genny-First methodology. In-house delivery nationwide.',
    image: 'CAT4-and-Genny-68',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Training' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT1 Training',
      description: 'ProQual-accredited CAT1 utility location training with all four EML modes in practical assessment.',
      url: '/courses/proqualcat1-training',
      credential: 'ProQual CAT1',
      duration: '1-2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Training' },
    ],
    includeFaqSchema: true,
  },

  faqs: [
    { q: 'What is ProQual CAT1?', a: 'ProQual CAT1 is an externally accredited cable location qualification with all four EML modes (Power, Radio, Genny, and Avoidance) assessed in the practical examination.' },
    { q: 'How long is the course?', a: 'ProQual CAT1 training is available as 1-day or 2-day formats. The 2-day format allows more depth on practical skills.' },
    { q: 'Is ProQual CAT1 widely recognised?', a: 'Yes. ProQual CAT1 is recognised across the UK construction and utility sectors as an accredited qualification.' },
    { q: 'What makes ProQual CAT1 different from other qualifications?', a: 'ProQual CAT1 requires assessment of all four EML modes in the practical element, making it more comprehensive than some alternatives.' },
    { q: 'Can I take the course in-house?', a: 'Yes. Sygma delivers ProQual CAT1 training at your premises nationwide, tailored to your site conditions and equipment.' },
    { q: 'How long is the certificate valid?', a: 'ProQual CAT1 certificates are typically valid for 3 years, with refresher training recommended before expiry.' },
  ],

  cta: {
    title: 'Book Your ProQual CAT1 Training',
    description: 'Accredited utility location training with all four EML modes assessed. In-house delivery available nationwide.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
    secondaryLabel: 'Request Information',
    secondaryHref: '/contact',
  },
};
