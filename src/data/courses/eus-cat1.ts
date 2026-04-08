import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'eus-cat1',

  metadata: {
    title: 'EUSR CAT 1 Training | Cat and Genny Course | Sygma',
    description: 'EUSR CAT1 training producing EUSR-registered operatives. HSG47 built in. CAT and Genny practical assessment. UK-wide delivery.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1' },
    openGraph: {
      title: 'EUSR CAT 1 Training | Cat and Genny Course | Sygma',
      description: 'EUSR CAT1 training producing EUSR-registered operatives. HSG47 built in. CAT and Genny practical assessment. UK-wide delivery.',
      url: 'https://sygma-solutions.com/courses/eus-cat1',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'EUSR CAT1: EUSR-Registered Utility Avoidance Training',
    sub: 'EUSR CAT1 and EUSR Category 1 training from the UK\'s only independent specialist. Full electromagnetic theory, practical Genny & CAT assessment, and written paper. HSG47 compliant. Recognised across the water, gas, electricity, and telecoms sectors.',
    images: [
      'landscape-01',
      'landscape-02',
      'landscape-03',
      'landscape-04',
      'landscape-05',
      'landscape-06',
      'landscape-07',
      'landscape-08',
    ],
    alts: [
      'Trainee scanning for underground utilities with a CAT4 locator',
      'Genny signal generator being connected to a utility service point',
      'Practical cable avoidance exercise on a live training site',
      'Instructor guiding a trainee through CAT4 signal interpretation',
      'Close-up of CAT4 display showing utility signal detection',
      'Overhead view of a marked utility survey area during training',
      'Group of trainees practising cable avoidance techniques outdoors',
      'CAT4 and Genny equipment used during EUSR CAT1 accredited training',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Cable Avoidance Training', href: '/courses/cable-avoidance-training' },
      { label: 'EUSR CAT1' },
    ],
  },

  schemas: {
    course: {
      name: 'EUSR CAT1 Training',
      description: 'EUSR CAT1 utility avoidance training from Sygma Solutions. A one-day course producing EUSR-registered operatives. Covers electromagnetic theory, CAT and Genny operation in all four modes, utility plan reading, and practical on-site assessment.',
      url: '/courses/eus-cat1',
      credential: 'EUSR CAT1 / EUSR Category 1',
      duration: '1 day',
      mode: ['onsite', 'blended'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Cable Avoidance Training', to: '/courses/cable-avoidance-training' },
      { label: 'EUSR CAT1' },
    ],
  },

  stats: [
    {
      value: '21 Years',
      label: 'One Specialism',
      detail: 'Underground utility location training is all we do.',
    },
    {
      value: '70-80%',
      label: 'Increase in Genny Usage',
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
        title: 'Site Operatives',
        desc: 'Anyone who breaks ground or works near underground services.',
      },
      {
        title: 'Groundworkers and Labourers',
        desc: 'Digging, excavating or working in the vicinity of buried utilities.',
      },
      {
        title: 'Supervisors and Managers',
        desc: 'Responsible for teams who carry out excavation or survey work.',
      },
      {
        title: 'New Entrants to Utilities',
        desc: 'Starting a career in utility avoidance, streetworks or civil engineering.',
      },
    ],
  },

  infoBar: [
    { label: 'Duration', value: '1 Day' },
    { label: 'Max Delegates', value: '8' },
    { label: 'Certificate', value: 'EUSR CAT1 (EUSR-Registered)' },
    { label: 'Pass Mark', value: '80%' },
    { label: 'Assessment', value: 'Practical + Written' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'on-site-training-03', alt: 'EUSR CAT1 training delegates using Genny & CAT on site' },
        { src: 'on-site-training-05', alt: 'EUSR CAT1 practical cable avoidance assessment in countryside setting' },
        { src: 'on-site-training-01', alt: 'On-site practical cable avoidance training with signal generator' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'on-site-training-panoramic-02', alt: 'EUSR CAT1 on-site training group, Sygma Solutions nationwide delivery' },
      ],
    },
  ],

  faqs: [
    {
      q: 'What is EUSR CAT1 training?',
      a: 'EUSR CAT1 is a one-day utility avoidance training course that leads to an EUSR-registered Category 1 qualification. It covers electromagnetic theory, correct use of Genny & CAT equipment in all four modes, utility service plan reading, and a practical on-site assessment. It is one of the most widely recognised utility avoidance qualifications in the UK utility sector.',
    },
    {
      q: 'What is the difference between EUSR CAT1 and EUSR CAT1?',
      a: 'They are the same qualification. EUS and EUSR both refer to the Energy and Utility Skills Register. The qualification is sometimes written as EUSR CAT1 and sometimes as EUSR CAT1 or EUSR Category 1. All Sygma EUSR CAT1 certificates are issued against EUSR-registered standards.',
    },
    {
      q: 'What pass mark is required for EUSR CAT1?',
      a: 'The written multiple choice assessment requires a minimum pass mark of 80%. An oral assessment is available for delegates with dyslexia or reading difficulties. The practical on-site assessment is conducted on the day and assessed individually by the Sygma trainer.',
    },
    {
      q: 'Is EUSR CAT1 the same as ProQual CAT1?',
      a: 'No. Both cover similar core skills but they are issued by different bodies against different criteria. EUSR CAT1 is EUSR-registered. ProQual CAT1 is issued by ProQual Accreditations and includes additional individually assessed criteria, including clamp, capacitance, and blind induction assessed separately. See the comparison table on this page or the full ProQual CAT1 course page for details.',
    },
    {
      q: 'Can Sygma deliver EUSR CAT1 on our site?',
      a: 'Yes. Sygma delivers EUSR CAT1 at client sites across the UK. Travel is included in the day rate. Sygma provides Radiodetection CAT4 and CAT4+ as standard, but the course works with any manufacturer\'s locator and signal generator. For alternative equipment, a minimum ratio of one locator per three delegates applies. Maximum 8 delegates per session.',
    },
    {
      q: 'How long is an EUSR card valid for?',
      a: 'An EUSR CAT1 card is valid for 3 years from the date of issue. The expiry date is printed on the card. Most utility frameworks and principal contractors require a valid, in-date card as a condition of site access. Sygma recommends booking renewal training in the 3 months before expiry to avoid any lapse in certification.',
    },
    {
      q: 'How do I renew my EUSR card?',
      a: 'To renew your EUSR CAT1 card you need to retake the full EUSR CAT1 course and pass both the written and practical assessments. There is no shortened renewal route. The complete one-day EUSR Category 1 training programme must be completed again, including the multiple choice paper and the on-site practical. A new 3-year card is issued on successful completion.',
    },
    {
      q: 'What happens if my EUSR CAT1 card has expired?',
      a: 'If your EUSR CAT1 card has expired you cannot use it to demonstrate current competency and most utility operators will not allow you to locate on site. There is no grace period under EUSR rules. You will need to complete the full EUSR CAT1 course again. If your card has recently lapsed, contact Sygma and we can usually get you onto the next available date.',
    },
    {
      q: 'Is EUSR CAT1 training a legal requirement under HSG47?',
      a: 'HSG47, the Health and Safety Executive\'s guidance on avoiding danger from underground services, requires operatives who use cable locating equipment to be trained and competent. EUSR CAT1 is one of the most widely accepted ways of demonstrating that competency. While HSG47 does not mandate a specific qualification by name, holding an EUSR-registered qualification such as EUSR CAT1 is the utility industry\'s standard way of meeting that legal duty.',
    },
    {
      q: 'Can we do EUSR CAT1 and CAT2 training on the same day?',
      a: 'Yes, in most cases. Sygma regularly delivers combined EUSR CAT1 and CAT2 days for clients who want to complete both levels in a single site visit. The combined day runs longer, typically from 8:00am to 5:30pm. The maximum of 8 delegates applies to the combined format as well. Both certificates are issued on the day. Contact Sygma to confirm availability for your team size and location.',
    },
  ],

  cta: {
    title: 'Book Your EUSR CAT1 Training',
    description: 'Book at our Wigan HQ, The Survey School in Worcester, or on your site anywhere in the UK. Travel included. Maximum 8 delegates.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact#enquiry-form',
    secondaryLabel: 'Request On-Site Delivery',
    secondaryHref: '/contact#enquiry-form',
  },
};
