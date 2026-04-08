import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'vscan-and-transmitter-training',

  metadata: {
    title: 'vScan & Transmitter Training | Sygma Solutions',
    description: 'vScan and transmitter training with HSG47 built in. Transmitter-First methodology covering all four locating modes. UK-wide delivery.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/vscan-and-transmitter-training' },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'vScan and Transmitter Training: The Course That Changes How Your Team Works on Site',
    sub: 'Not just vScan & Tx equipment operation. The scientific understanding and field-verified habits that eliminate service strikes.',
    image: 'CAT4-and-Genny-68',
    alt: 'Vscan and transmitter training for underground utility signal tracing',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'vScan and Transmitter Training' },
    ],
  },

  schemas: {
    course: {
      name: 'vScan and Transmitter Training Course',
      description: 'vScan and transmitter training that changes how your team works on site. Delivered by the UK\'s only independent specialist in underground utility location and avoidance.',
      url: '/courses/vscan-and-transmitter-training',
      credential: 'vScan and Transmitter Training Certificate',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'vScan and Transmitter Training' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: '21 Years',
      label: 'One Specialism',
      detail: 'Underground utility location training is all we do.',
    },
    {
      value: '70-80%',
      label: 'Increase in Transmitter Usage',
      detail: 'Measured through locator data downloads after Sygma training.',
    },
    {
      value: 'Proven',
      label: 'Strike Reduction Record',
      detail: 'Clients report measurable reductions in service strikes.',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Complete Beginners',
        desc: 'No prior experience with vScan or transmitter equipment needed. This safety training is designed to take someone from zero to competent.',
      },
      {
        title: 'Site Operatives and Groundworkers',
        desc: 'Anyone who needs to locate underground services and utilities before excavation. If your team breaks ground near buried infrastructure, they need this safety training.',
      },
      {
        title: 'Supervisors Wanting Awareness',
        desc: 'Those who need to understand the equipment their teams are using.',
      },
      {
        title: 'Organisations Using vScan Equipment',
        desc: 'Companies across the construction industry using Vivax-Metrotech vScan and transmitters for utility location.',
      },
    ],
  },

  infoBar: [
    {
      label: 'Format',
      value: 'Choice of in-house certified or accredited',
    },
    {
      label: 'Duration',
      value: '1-day or 2-day options',
    },
    {
      label: 'Max Delegates',
      value: '8',
    },
    {
      label: 'Assessment',
      value: 'Written 70% + practical',
    },
    {
      label: 'Delivery',
      value: 'At your site, nationwide',
    },
  ],

  cta: {
    title: 'Book Your vScan and Transmitter Training',
    description: 'Site-based delivery available nationwide, bespoke to your equipment, your plans and your risk profile. Contact us for a tailored quote.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
    secondaryLabel: 'Request Site-Based Delivery',
    secondaryHref: '/contact',
  },

  faqs: [
    {
      q: 'What equipment do our operatives need to bring?',
      a: 'Each operative should bring the locator and signal generator they use on site. Sygma provide Vivax-Metrotech vScan and transmitter as backup equipment to run a standard course if delegates do not have their own. Any manufacturer\'s locator is suitable, including Vivax-Metrotech vLoc, Leica DSX, and Radiodetection RD8200/RD8100. If sharing equipment, a minimum ratio of one locator per three delegates is recommended.',
    },
    {
      q: 'Can the course be tailored to our specific sites and risk profile?',
      a: 'Yes. Bespoke elements can include your company\'s specific permit to dig, your strike history and lessons learned, your site-specific hazards and your documentation. The QTS surface laid cables programme is an example of how the course can be customised around a client\'s exact needs.',
    },
    {
      q: 'What is the difference between vScan and transmitter training and EUS CAT1?',
      a: 'The EUS CAT1 is an EUSR-registered qualification with fixed assessment criteria. The vScan & Tx course is a bespoke in-house training programme with no fixed awarding body, giving Sygma greater flexibility to cover advanced topics and tailor content to your organisation. Many clients use the vScan & Tx course for bulk refresher training and the EUS CAT1 for formal qualification.',
    },
    {
      q: 'Is the course suitable for delegates with no previous locating experience?',
      a: 'Yes. The course is designed to be accessible to delegates at any level. For delegates who are completely new to utility locating, the two-day format is recommended to allow sufficient time on the practical site.',
    },
    {
      q: 'Can we combine this course with EUS CAT1 or CAT2?',
      a: 'Yes. Sygma offers combined course formats that incorporate EUS CAT1, CAT2 Safe Dig and vScan & Tx training content in a single programme. Contact us to discuss combined booking options.',
    },
    {
      q: 'What qualifications do the Sygma trainers hold?',
      a: 'All Sygma trainers are specialist utility location professionals with real-world field experience. They are not generalist H&S trainers. Many hold CICES membership, PAS128 field experience and backgrounds in managing large-scale infrastructure projects. You are learning from people who have done the job.',
    },
  ],
};
