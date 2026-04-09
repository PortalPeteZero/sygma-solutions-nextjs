import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'proqual-cat1-cat2-combined',

  metadata: {
    title: 'ProQual CAT1 and CAT2 Combined Course | Sygma Solutions',
    description: 'Two-day combined ProQual CAT1 and CAT2 course. Utility avoidance and safe excavation with ProQual-accredited assessment. UK-wide delivery.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqual-cat1-cat2-combined' },
    openGraph: {
      title: 'ProQual CAT1 and CAT2 Combined Course | Sygma Solutions',
      description: 'Two-day combined ProQual CAT1 and CAT2 course. Utility avoidance and safe excavation with ProQual-accredited assessment. UK-wide delivery.',
      url: 'https://sygma-solutions.com/courses/proqual-cat1-cat2-combined',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
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

  about: {
    eyebrow: 'Why Combine CAT1 and CAT2?',
    title: 'The Efficient Route to Full ProQual Recognition',
    paragraphs: [
      'Most organisations that send operatives for CAT1 training will eventually need CAT2 as well. CAT1 covers the detection side: electromagnetic theory, equipment operation, Genny application, and plan interpretation. CAT2 adds the excavation element: the safe dig, the permit to dig, the correct handling of exposed services, and the documented assessment that proves your operatives can work safely in proximity to live utilities.',
      'Running them separately means two days of mobilisation, two sets of site preparation, and two invoices. The combined programme delivers both ProQual-recognised qualifications in a single two-day block, reducing disruption to your operations and keeping your team off the road for the minimum time necessary.',
      'Sygma trainers are specialists in the science of electromagnetic location. Day one builds the understanding. Day two tests whether operatives can apply it under real site conditions. By the end of the programme, your team holds both qualifications and has experienced a full locate-to-safe-dig sequence.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        {
          label: 'Duration',
          value: '2 days (classroom and on-site)',
        },
        {
          label: 'Format',
          value: 'In-house at your site or Sygma\'s Wigan training centre',
        },
        {
          label: 'Max Delegates',
          value: '8 per course',
        },
        {
          label: 'Qualifications',
          value: 'ProQual CAT1 and ProQual CAT2 (Safe Dig)',
        },
        {
          label: 'Assessment',
          value: 'Multiple choice questions (MCQs) + practical safe dig assessment',
        },
        {
          label: 'Prerequisites',
          value: 'None',
        },
        {
          label: 'Equipment',
          value: 'Sygma provides Radiodetection CAT4 and Genny4 as standard; delegates may bring their own locator and signal generator. This course can be delivered on any of the following: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX.',
        },
        {
          label: 'Delivery',
          value: 'Nationwide UK',
        },
        {
          label: 'Pricing',
          value: 'Contact Sygma for a tailored quote',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Day One: Theory Foundation: Legislation, Equipment Science, and Genny-First Practice',
      subheading: 'The classroom element covers the complete theoretical foundation required for both qualifications. Delegates work through the underpinning knowledge before the practical site element on day two.',
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
      heading: 'Day Two: Practical Application and Safe Dig Assessment',
      subheading: 'The site element moves delegates from knowledge into application. All site work takes place at the client\'s premises or a pre-agreed location with suitable underground utilities.',
      intro: undefined,
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

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'What Delegates Receive',
    items: [
      {
        title: 'ProQual CAT1 Certificate',
        desc: 'ProQual-accredited CAT1 qualification. Recorded on the ProQual register and verifiable by employers and clients.',
      },
      {
        title: 'ProQual CAT2 Certificate',
        desc: 'ProQual-accredited CAT2 Safe Dig qualification. Confirms competency in safe excavation practices around buried services.',
      },
      {
        title: 'Written Assessment Record',
        desc: 'Documented evidence of theory knowledge across both CAT1 and CAT2 criteria.',
      },
      {
        title: 'Practical Assessment Record',
        desc: 'On-site assessment evidence covering cable and pipe location (CAT1) and safe excavation (CAT2).',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-09', alt: 'ProQual CAT1 and CAT2 combined training - practical session' },
        { src: 'CAT4-and-Genny-51', alt: 'ProQual CAT1 and CAT2 combined training - hands-on assessment' },
        { src: 'Safe-Dig-05', alt: 'ProQual CAT1 and CAT2 combined training - on-site delivery' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'Safe-Dig-15', alt: 'ProQual CAT1 and CAT2 on-site combined training, Sygma Solutions UK-wide delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-10', alt: 'Utility avoidance practical training on site' },
        { src: 'Safe-Dig-08', alt: 'Safe excavation assessment during ProQual CAT2' },
        { src: 'CAT4-and-Genny-54', alt: 'Combined CAT1 and CAT2 certificate training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-67', alt: 'Utility avoidance practical training on site' },
        { src: 'Safe-Dig-22', alt: 'Safe excavation assessment during ProQual CAT2' },
        { src: 'CAT4-and-Genny-50', alt: 'Combined CAT1 and CAT2 certificate training' },
      ],
    },
  ],

  siteRequirements: {
    items: [
      {
        label: 'Classroom Space',
        detail: 'Meeting or conference room with seating for all delegates and the trainer. Space for a projector and a clear wall or projection screen. Welfare facilities and adequate desk space for written assessment.',
      },
      {
        label: 'CAT1 Location Area',
        detail: 'Area with detectable underground utilities near the training room. Multiple utility types present (not just a single power cable). STATS plans for the site provided by the client in advance.',
      },
      {
        label: 'CAT2 Safe Dig Area (Minimum)',
        detail: 'A live dig area with buried metallic utilities. One power cable to a site cabin is not sufficient. Open area of at least 10m squared, ground suitable for a hand dig. Full buried service plans available. Delegates must have FR PPE and insulated digging tools.',
      },
    ],
    note: 'The training will not take place unless the minimum CAT2 site requirements are met. Each delegate must bring government-issued photographic ID. Sygma trainers typically arrive in a transit-van-sized vehicle (please advise at booking if there are height barriers or access restrictions).',
  },

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. CITB-registered employers may be able to access training funding support through the CITB Employer Network. Contact your CITB adviser directly for current eligibility and funding options.',
    ],
  },

  hsg47: { items: [
    {
      eyebrow: 'HSG47 Compliance',
      title: 'Trained and Competent',
      desc: 'Full theoretical foundation and practical assessment to confirmed ProQual CAT1 and CAT2 standards.',
    },
    {
      eyebrow: 'HSG47 Compliance',
      title: 'Safe System of Work',
      desc: 'Permits to dig, risk assessments, site inspection protocols, and documented procedures.',
    },
    {
      eyebrow: 'HSG47 Compliance',
      title: 'Service Plan Checks',
      desc: 'STATS plan interpretation, limitations, quality levels, visual verification, and drawing interrogation.',
    },
    {
      eyebrow: 'HSG47 Compliance',
      title: 'Correct Use of Equipment',
      desc: 'Locator and signal generator operation, signal interpretation, depth estimation, and troubleshooting.',
    },
    {
      eyebrow: 'HSG47 Compliance',
      title: 'Safe Excavation',
      desc: 'Practical safe dig assessment with exposure of live services, correct tool use, and reinstatement.',
    },
    {
      eyebrow: 'HSG47 Compliance',
      title: 'Evidenced Records',
      desc: 'Written assessment, practical observation, and CAT Manager data logging for your records.',
    },
  ] },

  whySygma: {
    items: [
      {
        eyebrow: 'Beyond Minimum Specification',
        title: 'Beyond Minimum Specification',
        desc: 'Many CAT1 courses meet the minimum specification. Ours exceed it. We invest in the science and in your operatives\' depth of understanding.',
      },
      {
        eyebrow: 'Genny & CAT Methodology',
        title: 'Genny & CAT Methodology',
        desc: 'Our integrated approach delivers 70-80% increase in operative confidence when working with difficult services and non-standard site conditions.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Specialist Trainers',
        desc: 'Directly employed by Sygma. Ex-surveyors with real-world field experience. All TAQA qualified and current with industry standards.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Real Practical Assessment',
        desc: 'On-site assessment under real conditions. Not artificial scenarios in a training centre. Your operatives are assessed where they will actually work.',
      },
      {
        eyebrow: 'Independent',
        title: 'Independent',
        desc: 'No survey partnerships, no equipment sales, no commercial influence. We train your team to work safely and competently.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'We Come to You',
        desc: 'In-house delivery anywhere in the UK with travel fully included. Minimal disruption to your operations and your team stays home.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Expand Your Team\'s Utility Avoidance Capability',
    intro: 'Consider these additional programmes to build deeper expertise across your team.',
    items: [
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT1 and CAT2 Combined',
        desc: 'The EUS equivalent of this ProQual programme. Two-day combined EUS CAT1 and CAT2 covering the same content through the EUSR framework.',
        href: '/courses/eus-cat1-cat2-combined',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'ProQual CAT1',
        desc: 'Standalone ProQual CAT1 qualification for operatives who need locating competency without the safe dig element.',
        href: '/courses/proqualcat1-training',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'ProQual CAT2',
        desc: 'Standalone ProQual CAT2 qualification for teams already holding CAT1 who need the safe excavation competency separately.',
        href: '/courses/proqualcat2',
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
