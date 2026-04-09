import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: '5-day-pas128-surveyor',

  metadata: {
    title: '5-Day PAS128 Surveyor Course | Sygma Solutions',
    description: 'Intensive PAS128 surveyor training: PAS128 D, C, B, EM locating, GPR, written exam and practical assessments. The UK\'s most comprehensive utility surveyor course.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/5-day-pas128-surveyor' },
    openGraph: {
      title: '5-Day PAS128 Surveyor Course | Sygma Solutions',
      description: 'Intensive PAS128 surveyor training: PAS128 D, C, B, EM locating, GPR, written exam and practical assessments.',
      url: 'https://sygma-solutions.com/courses/5-day-pas128-surveyor',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Utility Mapping',
    headline: '5-Day PAS128 Surveyor Course: Intensive Practical and Theoretical Training',
    sub: 'The UK\'s most comprehensive PAS128 surveyor training course. Five days covering PAS128 types D, C and B, advanced EM locating, GPR theory and practical, written exam and individual practical assessments on real buried services. Delivered by working surveyors, not generalists.',
    images: ['GPR_05_Mala_Compact_mvupzg', 'GPR_17_jq0zfl', 'Advanced-EM-04'],
    alts: [
      '5 Day PAS128 surveyor course - practical session',
      'PAS128 surveyor training with GPR equipment',
      'Advanced EM locating methods taught in the 5 day course',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: '5 Day PAS128 Surveyor' },
    ],
  },

  schemas: {
    course: {
      name: '5-Day PAS128 Surveyor Course',
      description: 'Intensive five-day PAS128 surveyor training covering PAS128 D, C and B survey types with EM locating and GPR. Written exam and practical assessments included.',
      url: '/courses/5-day-pas128-surveyor',
      credential: '5-Day PAS128 Surveyor Certificate',
      duration: '5 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: '5 Day PAS128 Surveyor' },
    ],
  },

  infoBar: [
    { label: 'Duration', value: '5 consecutive days, 09:00 to ~16:30' },
    { label: 'Max Delegates', value: '8 per course' },
    { label: 'Assessment', value: 'Written exam and practical test' },
    { label: 'Qualification', value: 'Sygma certification on completion' },
    { label: 'Delivery', value: 'In-house or open courses' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'GPR_06_ymxpsk', alt: '5 Day PAS128 surveyor course - practical session' },
        { src: 'RD_8100_1_aeiaur', alt: 'PAS128 surveyor training - hands-on assessment' },
        { src: 'GPR_20_mj6no5', alt: '5 Day PAS128 surveyor course - electromagnetic survey practical' },
      ],
    },
  ],

  faqs: [
    {
      q: 'What is the maximum number of delegates per 5 Day course?',
      a: 'Maximum 8 delegates per course. The small group size allows every delegate to complete a practical assessment during the course and benefit from one-to-one coaching throughout.',
    },
    {
      q: 'Does Sygma supply the locating equipment?',
      a: 'Sygma carries a stock of EM locators and GPR equipment. We strongly recommend you bring your own equipment for the course wherever possible, so delegates practise with the tools they will use on site. Equipment hire rates are available on request.',
    },
    {
      q: 'Is there a resit option if a delegate does not pass the written exam?',
      a: 'Yes. If a delegate does not achieve the pass mark in their initial attempt, they are entitled to one resit. The resit is normally arranged within 4-6 weeks and is conducted as an open-book assessment. Contact Sygma after the course to discuss resit arrangements.',
    },
    {
      q: 'Can the course be delivered in-house at our premises?',
      a: 'Yes. The 5 Day PAS128 Surveyor Course is regularly delivered at company premises nationwide. You need a meeting space suitable for up to 8 delegates, outdoor practical area with buried services, and STATS utility plans. Contact the bookings team to arrange in-house delivery.',
    },
    {
      q: 'What does the practical assessment cover?',
      a: 'The practical assessment is conducted on a real utility area and assesses each delegate\'s ability to locate buried services using EM locating equipment and GPR in a range of scenarios. The assessor rates competency against PAS128 B methodology (EM and GPR), and marks are recorded as part of the official course result.',
    },
    {
      q: 'Is PAS128 knowledge tested?',
      a: 'Yes. The written knowledge paper includes questions on PAS128 survey types D, C, B and A, detection methods, deliverables, and other aspects of the PAS128 standard. The exam takes approximately 2.5 hours and must be completed under formal exam conditions.',
    },
  ],

  cta: {
    title: 'Book Your 5-Day PAS128 Surveyor Course',
    description: 'Intensive training from PAS128 theory through to practical surveying. Maximum 8 delegates. Delivered in-house or at our training centre.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
  },
};
