import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'cable-avoidance-training',

  metadata: {
    title: 'Cable Avoidance Training | EUSR & ProQual | Sygma',
    description: 'Cable avoidance training and EUSR / ProQual accredited CAT1 training for underground utility detection. EUSR-registered qualification and ProQual accreditation available.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/cable-avoidance-training' },
    openGraph: {
      title: 'Cable Avoidance Training | EUSR & ProQual | Sygma',
      description: 'Cable avoidance training and EUSR / ProQual accredited CAT1 training for underground utility detection. EUSR-registered qualification and ProQual accreditation available.',
      url: 'https://sygma-solutions.com/courses/cable-avoidance-training',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'Cable Avoidance Training: The Course That Changes How Your Team Works on Site',
    sub: 'Cable avoidance training that teaches your operatives to find what is in the ground before they break it. EUSR-registered CAT1 or ProQual accredited certification available. In-house delivery nationwide.',
    image: 'CAT4-and-Genny-68',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Cable Avoidance Training' },
    ],
  },

  schemas: {
    course: {
      name: 'Cable Avoidance Training',
      description: 'Cable avoidance training for underground utility detection with EUSR and ProQual accreditation options.',
      url: '/courses/cable-avoidance-training',
      duration: '1-2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Cable Avoidance Training' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Format', value: 'Choice of accredited or certified' },
    { label: 'Duration', value: '1-day or 2-day options' },
    { label: 'Max Delegates', value: '8' },
    { label: 'Assessment', value: 'Written 70% + practical' },
    { label: 'Delivery', value: 'At your site, nationwide' },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Complete Beginners',
        desc: 'No prior experience with CAT equipment needed. This safety training takes someone from zero to competent.',
      },
      {
        title: 'Site Operatives and Groundworkers',
        desc: 'Anyone who needs to locate underground services and utilities before excavation.',
      },
      {
        title: 'Supervisors Wanting Awareness',
        desc: 'Those who need to understand the equipment their teams are using.',
      },
      {
        title: 'Organisations Building Competency',
        desc: 'Companies transitioning to structured cable avoidance training across their workforce.',
      },
    ],
  },

  faqs: [
    {
      q: 'What equipment do our operatives need to bring?',
      a: 'Each operative should bring the locator and signal generator they use on site. Sygma provide Radiodetection CAT4 and Genny4 as backup equipment to run a standard course if delegates do not have their own. Any manufacturer\'s locator is suitable, including Vivax-Metrotech vLoc, Leica DSX, and Radiodetection RD8200/RD8100. If sharing equipment, a minimum ratio of one locator per three delegates is recommended.',
    },
    {
      q: 'Can the cable avoidance course be tailored to our specific sites and risk profile?',
      a: 'Yes. Bespoke elements can include your company\'s specific permit to dig, your strike history and lessons learned, your site-specific hazards and your documentation. The QTS surface laid cables programme is an example of how the course can be customised around a client\'s exact needs.',
    },
    {
      q: 'What is the difference between cable avoidance training and EUS CAT1?',
      a: 'The EUS CAT1 is an EUSR-registered qualification with fixed assessment criteria. The cable avoidance course is a bespoke in-house training programme with no fixed awarding body, giving Sygma greater flexibility to cover advanced topics and tailor content to your organisation. Many clients use the cable avoidance course for bulk refresher training and the EUS CAT1 for formal qualification.',
    },
    {
      q: 'Is the course suitable for delegates with no previous locating experience?',
      a: 'Yes. The course is designed to be accessible to delegates at any level. For delegates who are completely new to utility locating, the two-day format is recommended to allow sufficient time on the practical site.',
    },
    {
      q: 'Can we combine this course with EUS CAT1 or CAT2?',
      a: 'Yes. Sygma offers combined course formats that incorporate EUS CAT1, CAT2 Safe Dig and cable avoidance training content in a single programme. Contact us to discuss combined booking options.',
    },
    {
      q: 'What qualifications do the Sygma trainers hold?',
      a: 'All Sygma trainers are specialist utility location professionals with real-world field experience. They are not generalist H&S trainers. Many hold CICES membership, PAS128 field experience and backgrounds in managing large-scale infrastructure projects. You are learning from people who have done the job.',
    },
  ],

  cta: {
    title: 'Book Your Cable Avoidance Training',
    description: 'Site-based delivery available nationwide, bespoke to your equipment, your plans and your risk profile. Contact us for a tailored quote.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
    secondaryLabel: 'Request Site-Based Delivery',
    secondaryHref: '/contact',
  },
};
