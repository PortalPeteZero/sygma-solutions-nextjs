import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'eus-cat1-cat2-combined',

  metadata: {
    title: 'EUSR CAT 1 and 2 Training | Combined Course | Sygma',
    description: 'Two-day combined EUSR CAT1 and CAT2 course covering utility avoidance and safe excavation. EUSR-registered outcomes with CAT and Genny practical assessment.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1-cat2-combined' },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'EUSR CAT1 and CAT2 Combined: Two-Day Utility Avoidance and Safe Dig Training',
    sub: 'One programme. Two EUSR-recognised qualifications. Both CAT1 and CAT2 completed in two days at your site, with full theory, Genny-First practical, and a live safe dig assessment.',
    image: 'CAT4-and-Genny-64',
    alt: 'Combined EUSR CAT1 and CAT2 cable avoidance training with practical field exercises',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'EUSR CAT1 and CAT2 Combined' },
    ],
  },

  schemas: {
    course: {
      name: 'EUSR CAT1 and CAT2 Combined Course',
      description: 'Two-day combined EUSR CAT1 and CAT2 course covering utility avoidance and safe excavation. EUSR-registered outcomes with CAT and Genny practical assessment.',
      url: '/courses/eus-cat1-cat2-combined',
      credential: 'EUSR CAT1 and CAT2',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'EUSR CAT1 and CAT2 Combined' },
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
    { label: 'Duration', value: '2 days (classroom and site)' },
    { label: 'Format', value: 'In-house at your site or Sygma Wigan' },
    { label: 'Max Delegates', value: '8 per course' },
    { label: 'Qualifications', value: 'EUSR CAT1 and EUSR CAT2' },
    { label: 'Delivery', value: 'Nationwide UK' },
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
        desc: 'The most efficient route to full EUSR CAT1 and CAT2 competency',
      },
      {
        title: 'Organisations Wanting Comprehensive Training',
        desc: 'Companies that want their workforce trained in both locating and safe digging in one visit',
      },
    ],
  },

  about: {
    eyebrow: 'Why Combine CAT1 and CAT2?',
    title: 'The Efficient Route to Full EUS Recognition',
    paragraphs: [
      'Most organisations that send operatives for CAT1 training will eventually need CAT2 as well. CAT1 covers the detection side: electromagnetic theory, equipment operation, Genny application, and plan interpretation. CAT2 adds the excavation element: the safe dig, the permit to dig, the correct handling of exposed services, and the documented assessment that proves your operatives can work safely in proximity to live utilities.',
      'Running them separately means two days of mobilisation, two sets of site preparation, and two invoices. The combined programme delivers both EUSR-recognised qualifications in a single two-day block, reducing disruption to your operations and keeping your team off the road for the minimum time necessary.',
      'Sygma trainers are specialists in the science of electromagnetic location. Day one builds the understanding. Day two tests whether operatives can apply it under real site conditions. By the end of the programme, your team holds both qualifications and has experienced a full locate-to-safe-dig sequence.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '2 days (classroom and on-site)' },
        { label: 'Format', value: 'In-house at your site or Sygma\'s Wigan training centre' },
        { label: 'Max Delegates', value: '8 per course' },
        { label: 'Qualifications', value: 'EUSR CAT1 and EUSR CAT2 (Safe Dig)' },
        { label: 'Assessment', value: 'Multiple choice questions (MCQs) + practical safe dig assessment' },
        { label: 'Prerequisites', value: 'None' },
        { label: 'Equipment', value: 'Sygma provides Radiodetection CAT4 and Genny4 as standard; this course can be delivered on Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.' },
        { label: 'Delivery', value: 'Nationwide UK' },
        { label: 'Pricing', value: 'Contact Sygma for a tailored quote' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Day One',
      subheading: 'Theory Foundation: Legislation, Equipment Science, and Genny-First Practice',
      items: [
        'Legislation and guidance relating to buried services, including HSG47 and company-specific policy',
        'Site-specific risk assessments, company procedures, and permits to dig',
        'Excavation hazards: Leptospirosis, asbestos, silica dust, noise, vibration, loose ground, groundwater',
        'Utility plan interpretation: STATS plans, limitations of drawings, visual survey process',
        'Electromagnetic theory: how a CAT and Genny work, signal distortion, equipment limitations',
        'Locator controls and operation: all four modes (Power, Radio, Genny, Avoidance), Strike Alert, signal interpretation',
        'Signal generator application: dual frequency, capacitance mode for non-earthed cables, earth positioning, blind induction search, effective nulling',
        'Depth estimation: how to take locator depth readings and how to test them',
        'CAT Manager data logging (optional): recording, exporting CSV and KML, analysing data patterns',
        'Excavation techniques: exposing services, hand tools, handheld power tools, horizontal excavation',
        'Trench support, maintaining excavation safety, and dangers of using services as a handhold',
      ],
    },
    practical: {
      heading: 'Day Two',
      subheading: 'Practical Application and Safe Dig Assessment',
      intro: 'The site element moves delegates from knowledge into application. All site work takes place at the client\'s premises or a pre-agreed location with suitable underground utilities.',
      items: [
        'Using STATS plans and existing site information to identify indicated utility routes before work begins',
        'Visual site inspection prior to any location activity',
        'Equipment function checks: confirming the locator and signal generator are in satisfactory operating condition',
        'Locating in all modes, confirming service routes, taking and testing depth readings',
        'Signal generator application for problem services including street lighting and small comms cables',
        'Completing a risk assessment and permit to dig before excavation commences',
        'Surface removal with correct positioning relative to identified services',
        'Horizontal excavation to expose the indicated service below the remaining surface',
        'Supporting exposed services where required',
        'Reinstatement completion',
        'Multiple choice questions (MCQs) at the end of the programme',
      ],
    },
  },

  photoStrips: [
    {
      images: [
        { src: 'CAT4-and-Genny-09', alt: 'EUSR CAT1 and CAT2 combined training - practical session' },
        { src: 'CAT4-and-Genny-51', alt: 'EUSR CAT1 and CAT2 combined training - hands-on assessment' },
        { src: 'Safe-Dig-05', alt: 'EUSR CAT1 and CAT2 combined training - on-site delivery' },
      ],
      variant: 'grid',
    },
  ],

  siteRequirements: {
    items: [
      {
        label: 'Classroom',
        detail: 'Meeting or conference room with seating for all delegates and the trainer, space for a projector and a clear wall or projection screen, welfare facilities and adequate desk space for written assessment',
      },
      {
        label: 'CAT1 Location Area',
        detail: 'Area with detectable underground utilities near the training room, multiple utility types present (not just a single power cable), STATS plans for the site provided by the client in advance',
      },
      {
        label: 'CAT2 Safe Dig Area (Minimum)',
        detail: 'A live dig area with buried metallic utilities. One power cable to a site cabin is not sufficient. Open area of at least 10m squared, ground suitable for a hand dig, full buried service plans available, delegates must have FR PPE and insulated digging tools',
      },
    ],
    note: 'The training will not take place unless the minimum CAT2 site requirements are met. Each delegate must bring government-issued photographic ID.',
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Quality',
        title: 'Exceeds Minimum Specification',
        desc: 'Many CAT1 courses meet the minimum specification. Ours exceed it. We invest in the science and in your operatives\' depth of understanding.',
      },
      {
        eyebrow: 'Methodology',
        title: 'Genny & CAT Methodology',
        desc: 'Our integrated approach delivers 70-80% increase in operative confidence when working with difficult services and non-standard site conditions.',
      },
      {
        eyebrow: 'Expertise',
        title: 'Specialist Trainers',
        desc: 'Directly employed by Sygma. Ex-surveyors with real-world field experience. All TAQA qualified and current with industry standards.',
      },
      {
        eyebrow: 'Assessment',
        title: 'Real Practical Assessment',
        desc: 'On-site assessment under real conditions. Not artificial scenarios in a training centre. Your operatives are assessed where they will actually work.',
      },
      {
        eyebrow: 'Independence',
        title: 'Independent',
        desc: 'No survey partnerships, no equipment sales, no commercial influence. We train your team to work safely and competently.',
      },
      {
        eyebrow: 'Delivery',
        title: 'We Come to You',
        desc: 'In-house delivery anywhere in the UK with travel fully included. Minimal disruption to your operations and your team stays home.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Expand Your Team\'s Utility Avoidance Capability',
    items: [
      {
        eyebrow: 'Alternative',
        title: 'ProQual CAT1 Plus',
        desc: 'RQF-regulated alternative to EUSR CAT1. Covers electromagnetic location with additional depth on geology and cable theory.',
        href: '/courses/proqualcat1plus',
      },
      {
        eyebrow: 'Standalone',
        title: 'EUSR CAT1',
        desc: 'Two-day location theory and practical. Detection only, without the safe dig element of this combined programme.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Alternative',
        title: 'ProQual CAT1 & CAT2 Combined',
        desc: 'The ProQual-accredited equivalent of this programme. Same content delivered through the ProQual framework.',
        href: '/courses/proqual-cat1-cat2-combined',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world skills.',
      href: '/osca',
    },
    {
      title: 'Bespoke Training',
      desc: 'Design a tailored programme around your site risks, equipment, and team size.',
      href: '/contact',
    },
  ],

  cta: {
    title: 'Get in Touch for Your Team',
    description: 'In-house at your site anywhere in the UK, or at Sygma\'s dedicated training centre in Wigan. Contact us with delegate numbers, your preferred location, and target dates.',
    primaryLabel: 'Get in Touch for Your Team',
    primaryHref: '/contact',
    secondaryLabel: 'View CAT1, CAT2 and USC Combined',
    secondaryHref: '/courses/eus-cat1-cat2-usc-combined',
  },

  faqs: [
    {
      q: 'Can we run CAT1 and CAT2 as separate courses instead?',
      a: 'Yes. Sygma offers standalone EUSR CAT1 and EUSR CAT2 programmes for organisations that need to train different groups or stagger their training. The combined programme is designed for teams that need both qualifications at the same time.',
    },
    {
      q: 'What happens if our site fails the minimum requirements on the day?',
      a: 'The training will not proceed unless the minimum CAT2 site requirements are met. Sygma will assess site suitability before booking is confirmed. If your site is not suitable, we can advise on alternatives or arrange access to a different location.',
    },
    {
      q: 'Do delegates need any prior experience?',
      a: 'No. The combined programme is designed to take delegates from no prior training through to EUSR CAT1 and CAT2 qualification in two days. The classroom content on day one provides all the foundation knowledge required for the practical work on day two.',
    },
    {
      q: 'Is this the same as ProQual Level 2 utility avoidance?',
      a: 'No. EUSR CAT1 and CAT2 are industry-recognised qualifications administered through EUSR. ProQual Level 2 is a regulated qualification on the RQF. Both cover utility avoidance, but through different frameworks. Many organisations accept EUSR recognition; some require the RQF qualification. Sygma can advise on which is appropriate for your team.',
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
