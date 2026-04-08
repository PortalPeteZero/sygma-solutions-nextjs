import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'proqual-cat1-cat2-combined',

  metadata: {
    title: 'ProQual CAT1 and CAT2 Combined Course | Sygma Solutions',
    description: 'Two-day combined ProQual CAT1 and CAT2 course. Utility avoidance and safe excavation with ProQual-accredited assessment. UK-wide delivery.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqual-cat1-cat2-combined' },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'ProQual CAT1 and CAT2 Combined: Two-Day Utility Avoidance and Safe Dig Training',
    sub: 'One programme. Two ProQual-recognised qualifications. Both CAT1 and CAT2 completed in two days at your site, with full theory, Genny-First practical, and a live safe dig assessment.',
    image: 'CAT4-and-Genny-64',
    alt: 'Combined ProQual CAT1 and CAT2 cable avoidance and safe digging training',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 and CAT2 Combined' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT1 and CAT2 Combined Course',
      description: 'Two-day combined ProQual CAT1 and CAT2 course covering utility avoidance and safe excavation. ProQual-accredited outcomes with CAT and Genny practical assessment.',
      url: '/courses/proqual-cat1-cat2-combined',
      credential: 'ProQual CAT1 and CAT2',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 and CAT2 Combined' },
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

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Anyone Needing Complete Utility Avoidance Competency',
        desc: 'Covers both locating with a CAT and Genny and safe excavation in a single course',
      },
      {
        title: 'Site Operatives and Groundworkers',
        desc: 'Those who both locate and excavate around buried services',
      },
      {
        title: 'New Entrants to Utilities',
        desc: 'The most efficient route to full ProQual CAT1 and CAT2 competency',
      },
      {
        title: 'Organisations Wanting Comprehensive Training',
        desc: 'Companies that want their workforce trained in both locating and safe digging in one visit',
      },
    ],
  },

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
      value: 'ProQual CAT1 and ProQual CAT2',
    },
    {
      label: 'Delivery',
      value: 'Nationwide UK',
    },
  ],

  cta: {
    title: 'Get in Touch for Your Team',
    description: 'In-house at your site anywhere in the UK, or at Sygma\'s dedicated training centre in Wigan. Contact us with delegate numbers, your preferred location, and target dates.',
    primaryLabel: 'Get in Touch for Your Team',
    primaryHref: '/contact',
    secondaryLabel: 'View EUS CAT1 and CAT2 Combined',
    secondaryHref: '/courses/eus-cat1-cat2-combined',
  },

  faqs: [
    {
      q: 'Can we run CAT1 and CAT2 as separate courses instead?',
      a: 'Yes. Sygma offers standalone ProQual CAT1 and ProQual CAT2 programmes for organisations that need to train different groups or stagger their training. The combined programme is designed for teams that need both qualifications at the same time.',
    },
    {
      q: 'What happens if our site fails the minimum requirements on the day?',
      a: 'The training will not proceed unless the minimum CAT2 site requirements are met. Sygma will assess site suitability before booking is confirmed. If your site is not suitable, we can advise on alternatives or arrange access to a different location.',
    },
    {
      q: 'Do delegates need any prior experience?',
      a: 'No. The combined programme is designed to take delegates from no prior training through to ProQual CAT1 and CAT2 qualification in two days. The classroom content on day one provides all the foundation knowledge required for the practical work on day two.',
    },
    {
      q: 'Is this the same as EUS CAT1 and CAT2?',
      a: 'No. ProQual CAT1 and CAT2 are regulated qualifications through ProQual Accreditations. EUS CAT1 and CAT2 are industry-recognised qualifications administered through EUSR. Both cover utility avoidance, but through different frameworks. Many organisations accept either; some require the RQF-regulated ProQual qualification specifically. Sygma can advise on which is appropriate for your team.',
    },
    {
      q: 'What if some delegates use equipment other than a Radiodetection locator?',
      a: 'Delegates should bring their own equipment if they use a different manufacturer\'s locator, at a minimum ratio of one locator per three delegates. Sygma cannot carry a full stock of every manufacturer\'s equipment. The training covers universal locating and signal generation principles, This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.',
    },
    {
      q: 'Can we run this at your Wigan training centre?',
      a: 'Yes. Sygma\'s dedicated training centre in Wigan includes live utility demonstration rigs and a safe dig area. It can be used at no additional venue cost for organisations that cannot host the training at their own site.',
    },
  ],
};
