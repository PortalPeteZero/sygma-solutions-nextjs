import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'advanced-em-locator',

  metadata: {
    title: 'Advanced EM Locator Training | CICES Accredited | Sygma',
    description: 'Advanced electromagnetic locator training from Sygma Solutions. CICES-accredited. Signal clamp, capacitance, sonde, and HV cable location for experienced operators.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/advanced-em-locator' },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'Advanced EM Locator Training: High-End Electromagnetic Location for Specialists',
    sub: 'Advanced training courses for precision locators. One day theory. One day on a real site near a substation. HV location, distorted field analysis, capacitance, signal clamp, depth verification, sonde, and induction sweeps. For operators who need to locate what a standard course cannot.',
    image: 'Advanced-EM-07',
    alt: 'Advanced EM locator training with precision equipment',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Advanced EM Locator' },
    ],
  },

  schemas: {
    course: {
      name: 'Advanced EM Locator Training',
      description: 'Advanced electromagnetic locator training from Sygma Solutions. CICES-accredited. Signal clamp, capacitance, sonde, and HV cable location for experienced operators.',
      url: '/courses/advanced-em-locator',
      credential: 'CICES GEUS01 Item E',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Advanced EM Locator' },
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
      label: 'Increase in Genny Usage',
      detail: 'Measured through locator data downloads after Sygma training.',
    },
    {
      value: 'Proven',
      label: 'Strike Reduction Record',
      detail: 'Clients report measurable reductions in service strikes.',
    },
  ],

  infoBar: [
    {
      label: 'Duration',
      value: '2 Days',
    },
    {
      label: 'Max Delegates',
      value: '6 (intentionally small)',
    },
    {
      label: 'Equipment',
      value: 'RD8100 / Vivax VLOC / Leica Ultra',
    },
    {
      label: 'CICES Mapping',
      value: 'GEUS01 Item E',
    },
    {
      label: 'Level 4/5 Learners',
      value: 'Free of charge',
    },
  ],

  cta: {
    title: 'Advanced EM Locator Training',
    description: 'Precision electromagnetic locator training for experienced operators. Small groups, high-end equipment, real-world site conditions near a substation.',
    primaryLabel: 'Enquire About Advanced EM Training',
    primaryHref: '/contact',
    secondaryLabel: 'Learn More',
    secondaryHref: '/contact',
  },

  faqs: [
    {
      q: 'Do delegates need to hold EUS CAT1 or ProQual CAT1 before attending?',
      a: 'A working knowledge of CAT and Genny locating equipment is required. Delegates who have completed EUS CAT1 or ProQual CAT1 will be well prepared. Those with significant field experience using locating equipment but without a formal qualification may also be suitable. If you are unsure, contact Sygma to discuss your team\'s background before booking.',
    },
    {
      q: 'Why is the course limited to six delegates?',
      a: 'The advanced EM course is technically intensive. Limiting the group to six delegates gives the trainer direct access to each delegate during both the theory and practical days. Group size is a quality decision, not a commercial one. In a group of ten, some delegates will not get enough time on the equipment to properly develop. In a group of six, every delegate does.',
    },
    {
      q: 'What equipment is used on the course?',
      a: 'The flagship 2-day course uses the Radiodetection RD8100, Vivax VLOC, and Leica Ultra. These are among the most capable electromagnetic locators in the market and represent a significant technical step up from a standard locator. Sygma provides equipment for the course. Delegates are encouraged to bring their own high-end equipment if they have it, as hands-on time with your own tool is more valuable than hands-on time with someone else\'s.',
    },
    {
      q: 'How does the 3-day assessed course differ from the 2-day course?',
      a: 'The 3-day course includes a formal survey assessment on Day 3 and a written exam requiring a 70% pass mark. It is capped at four delegates to allow thorough individual assessment. The 3-day format is best suited to organisations requiring formal documented assessment against survey methodology. The 2-day course includes ongoing practical and documented assessment throughout, but does not include a formal exam. Both result in a certificate of competence for delegates meeting the standard.',
    },
    {
      q: 'Is this course relevant to the ProQual Level 3 to Level 6 pathway?',
      a: 'Yes. For ProQual Level 4 Specialist Technical and Level 5 Diploma learners, the 2-day advanced EM course is included free of charge as part of the programme. It fulfils part of the evidence requirements for these qualifications. For Level 3 and Level 6 learners, the course is relevant as supporting evidence but is not included as standard. Contact Sygma to discuss how it fits into your specific qualification programme.',
    },
    {
      q: 'Can this course be delivered on our own site?',
      a: 'Yes. Private courses can be arranged at a client\'s site or premises. The site will need to contain a sufficient range and depth of buried metallic utilities to support the practical element. Sygma will assess suitability before confirming. Where the site is not suitable, Sygma can advise on alternatives. The site assessment is chargeable at a daily rate.',
    },
    {
      q: 'How does this training cover safe working practices?',
      a: 'The course covers a safe system of work for advanced electromagnetic location, including how to safely locate near high voltage cables and substations. Delegates learn risk assessment for different types of buried services including pipes and cables, and how to use precision locators safely in high-risk environments. Reduced risk of utility strikes is a core outcome of all Sygma training courses.',
    },
    {
      q: 'What will delegates learn and be able to do after the course?',
      a: 'Delegates will learn to use precision locators with accuracy and confidence across all types of buried utilities. They will be able to safely identify and trace cables, pipes and other services in complex environments, use signal transmitters and accessories effectively, and apply best practice techniques for depth verification and distorted field analysis.',
    },
    {
      q: 'What types of buried services does the practical element cover?',
      a: 'The practical site contains a genuine mixture of buried utilities including HV and LV electrical cables, gas pipes, water pipes, communications cables and other infrastructure. Delegates practise locating all types of services using different modes and frequencies on the precision locators, building the confidence and accuracy needed for real survey work.',
    },
  ],
};
