import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'proqualcat1plus',

  metadata: {
    title: 'ProQual CAT1 Plus Training | Accredited | Sygma',
    description: 'ProQual CAT1 Plus: the most advanced utility avoidance qualification. 2-day course covering all CAT1 plus 7 advanced theory and 34 practical criteria.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat1plus' },
    openGraph: {
      title: 'ProQual CAT1 Plus Training | Accredited | Sygma',
      description: 'ProQual CAT1 Plus: the most advanced utility avoidance qualification. 2-day course covering all CAT1 plus 7 advanced theory and 34 practical criteria.',
      url: 'https://sygma-solutions.com/courses/proqualcat1plus',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'ProQual CAT1 Plus: The Most Advanced Utility Locating Qualification Available',
    sub: 'Two days. Forty-two individually assessed practical criteria. Seven advanced theory papers. Two qualifications. Built for operatives who need to locate in the conditions that basic training does not prepare them for.',
    image: 'CAT4-and-Genny-40',
    alt: 'ProQual CAT1 Plus advanced cable avoidance training course',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Plus' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT1 Plus Advanced Utility Locating Course',
      description: '2-day advanced utility avoidance qualification. Day 1 covers all ProQual CAT1 criteria. Day 2 adds 7 theory and 34 hands-on practical criteria covering capacitance, signal clamp, dual frequency, depth verification and advanced survey methodology.',
      url: '/courses/proqualcat1plus',
      credential: 'ProQual CAT1 + ProQual CAT1 Plus',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Plus' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: '42',
      label: 'Individual Practical Criteria',
      detail: 'Each individually assessed and documented on site.',
    },
    {
      value: '2 Days',
      label: 'Plus Training',
      detail: 'Day 1: ProQual CAT1. Day 2: ProQual CAT1 Plus advanced criteria.',
    },
    {
      value: '70-80%',
      label: 'Increase in Genny Usage',
      detail: 'Measured through locator data downloads after Sygma training.',
    },
  ],

  infoBar: [
    {
      label: 'Duration',
      value: '2 days (classroom and site)',
    },
    {
      label: 'Format',
      value: 'In-house at your site or Sygma Wigan',
    },
    {
      label: 'Max Delegates',
      value: '8 per course',
    },
    {
      label: 'Qualifications',
      value: 'ProQual CAT1 + ProQual CAT1 Plus',
    },
    {
      label: 'Delivery',
      value: 'Nationwide UK',
    },
  ],

  cta: {
    title: 'Book Your ProQual CAT1 Plus Training',
    description: '2-day advanced utility avoidance qualification. The most advanced cable avoidance training available in the UK. Contact us to discuss your team\'s needs and receive a tailored quotation.',
    primaryLabel: 'Enquire About ProQual CAT1 Plus',
    primaryHref: '/contact',
    secondaryLabel: 'View Course Comparison',
    secondaryHref: '/courses/cable-avoidance-course-comparison',
  },

  faqs: [
    {
      q: 'What qualifications do delegates receive at the end of the 2-day course?',
      a: 'Both. Delegates who complete the full 2-day programme receive ProQual CAT1 and ProQual CAT1 Plus as separate qualifications. The CAT1 criteria are assessed on the first day and the advanced Plus criteria on the second. Both certificates are issued through ProQual Accreditations.',
    },
    {
      q: 'Can I attend the Plus day only if I already hold ProQual CAT1?',
      a: 'Yes. If your team already holds current ProQual CAT1, you can book the 1-day Plus add-on instead of the full 2-day programme. The add-on covers the seven additional theory criteria and thirty-two additional practical criteria that the standard CAT1 does not include. Contact us and we will confirm whether your existing CAT1 is current and whether the 1-day option is suitable.',
    },
    {
      q: 'What is the difference between ProQual CAT1 Plus and EUS CAT1?',
      a: 'They are fundamentally different qualifications. ProQual CAT1 Plus builds on an already more rigorous CAT1 base and adds seven theory criteria and over thirty practical criteria that EUS does not cover at all. Topics like PAS128 vs Utility STATS plans, capacitance technique, signal clamp, depth quality verification, HV cable limitations, blind induction sweeps, and signal loss identification are all assessed in ProQual CAT1 Plus but absent from EUS entirely. Where EUS relies on multiple choice questions, ProQual uses written theory papers and individually assessed hands-on practical criteria. In 21 years, Sygma has had to add content to every qualification on the market to make it fit for industry. The ProQual CAT1 and CAT1 Plus are the only qualifications we do not have to add anything to, because they cover everything needed.',
    },
    {
      q: 'How many individual practical criteria are assessed across the 2 days?',
      a: 'The full 2-day programme assesses 8 practical criteria under the CAT1 standard and a further 34 individual practical criteria under the Plus standard, giving a total of 42 hands-on practical demonstrations. Each one is observed and assessed individually by a Sygma assessor. This is not a paper-based assessment.',
    },
    {
      q: 'What is the difference between capacitance and induction?',
      a: 'Both methods use the signal transmitter to apply a signal without direct connection to the service. Induction broadcasts a signal across a wide area and is non-selective. Capacitance uses a high-frequency signal applied directly above the service to specifically target it, making it more effective for non-earthed conductors. ProQual CAT1 Plus covers both and requires delegates to demonstrate when and why to use each.',
    },
    {
      q: 'Do I need to bring my own CAT and Genny?',
      a: 'No. Sygma provides Radiodetection CAT4 and Genny4 units as standard. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. If you want training delivered on your own equipment, we can accommodate that. We require a minimum of one locator per three delegates for client-supplied equipment.',
    },
    {
      q: 'Is CITB funding available for this course?',
      a: 'Sygma is a CITB Approved Training Organisation. Speak to your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical content, meeting CITB standards for hands-on training delivery.',
    },
  ],
};
