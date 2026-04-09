import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'advanced-em-locator',

  metadata: {
    title: 'RD8200 Training | Advanced EM Locator | Sygma Solutions',
    description: 'Specialist EM locator training for experienced utility surveyors. Covers advanced signal interpretation, multi-frequency techniques, and complex sites.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/advanced-em-locator' },
    openGraph: {
      title: 'RD8200 Training | Advanced EM Locator | Sygma Solutions',
      description: 'Specialist EM locator training for experienced utility surveyors. Covers advanced signal interpretation, multi-frequency techniques, and complex sites.',
      url: 'https://sygma-solutions.com/courses/advanced-em-locator',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'Advanced EM Locator Training: High-End Electromagnetic Location for Specialists',
    sub: 'Advanced training courses for precision locators. One day theory. One day on a real site near a substation. HV location, distorted field analysis, capacitance, signal clamp, depth verification, sonde, and induction sweeps. For operators who need to locate what a standard course cannot.',
    image: 'Advanced-EM-07',
    alt: 'Advanced EM locator training',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Advanced EM Locator' },
    ],
  },

  schemas: {
    course: {
      name: 'Advanced EM Locator Training',
      description: 'Specialist electromagnetic locator training for experienced utility surveyors. Covers advanced signal interpretation, multi-frequency techniques and complex site conditions.',
      url: '/courses/advanced-em-locator',
      credential: 'Advanced EM Locator Certificate',
      duration: '1 day',
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

  about: {
    eyebrow: 'What Is Advanced EM Locator Training?',
    title: 'Beyond Standard CAT1 Competency',
    paragraphs: [
      'Standard CAT1 training teaches operatives how to find a service. Advanced EM training courses use precision locators to teach them how to find the services that standard cable avoidance tools miss. This is the course for operators who encounter high voltage cables, distorted electromagnetic fields, problem services including pipes and cables that do not respond as expected, and situations where depth estimation and signal quality judgement are critical to a safe outcome.',
      'Sygma\'s 2-day advanced course is built around high-end precision locators: the Radiodetection RD8100, Vivax VLOC, and Leica Ultra. These instruments and their signal transmitters and accessories offer capabilities that a standard locator does not. Getting the most from them requires a deeper understanding of electromagnetic principles, signal behaviour in complex environments, and the judgements that experienced operators make under pressure. Delegates learn to use these precision locators safely and with accuracy across all types of buried utilities including cables, pipes and other services.',
      'The practical instruction takes place on a live site near Sygma\'s Wigan training centre, in a built-up area with direct proximity to a substation. The site contains a genuine mixture of HV and LV cables and pipes plus a range of additional buried utilities. This is not a manufactured training environment. It is real infrastructure, which requires real technique and a safe system of work.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Format', value: '2 days: 1 day theory + 1 day practical on a live site' },
        { label: 'Equipment', value: 'Radiodetection RD8100, Vivax VLOC, Leica Ultra' },
        { label: 'Max Delegates', value: '6 per course' },
        { label: 'Assessment', value: 'Ongoing practical and documented assessment throughout' },
        { label: 'CICES Mapping', value: 'GEUS01 Item E' },
        { label: 'Level 4/5 Learners', value: 'Free of charge (included in programme)' },
        { label: 'Pricing', value: 'Contact us for current pricing and availability' },
        { label: 'Venues', value: 'Sygma HQ Wigan | The Survey School Worcester | Private courses' },
      ],
    },
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-08', alt: 'Advanced EM locator training' },
        { src: 'CAT4-and-Genny-02', alt: 'RD8100 locating equipment in field' },
        { src: 'CAT4-and-Genny-04', alt: 'On-site practical near substation' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-08', alt: 'Advanced locator training with depth verification' },
        { src: 'CAT4-and-Genny-66', alt: 'Electromagnetic locator practical session' },
        { src: 'CAT4-and-Genny-05', alt: 'Advanced EM training equipment and techniques' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'Advanced-EM-07', alt: 'Advanced electromagnetic locator practical training' },
        { src: 'CAT4-and-Genny-02', alt: 'Advanced EM locator techniques demonstration' },
        { src: 'CAT4-and-Genny-53', alt: 'Hands-on advanced utility locating assessment' },
      ],
    },
  ],

  courseContent: {
    eyebrow: 'Course Content',
    title: 'Two Days. One Subject. No Shortcuts.',
    theory: {
      heading: 'Day One: Theory',
      subheading: 'Electromagnetic principles and advanced equipment operation',
      items: [
        'Electromagnetic location theory and principles: how EM signals propagate, interact with buried conductors, and decay with depth',
        'Receiver and transmitter set up, menu controls and operating parameters on high-end equipment',
        'Choosing the right frequency: why frequency selection matters and when it introduces errors',
        'Earth positioning and its relevance to a locate: how transmitter earth stake position affects signal quality',
        'Signal Clamp: how to apply a clamp, what it does, when it is more effective than direct connection',
        'Locating HV: specific challenges of locating high voltage cables and signal behaviour near substations',
        'Distorted magnetic fields: what causes distortion and how to judge the reliability of a locate',
        'Antenna settings: Peak, Null, Peak+ and when each is appropriate in different field conditions',
        'Depth estimation: the physics behind depth readings and how to verify depth reliability',
        'High frequency capacitance techniques: when capacitance locating is the correct approach',
        'Current measurement and current direction: how to use current flow data to trace services',
        'Induction, induction sweeps and nulling out: advanced induction techniques for complex environments',
        'Sonde location: principles and practical application',
        'How to structure a complete survey from first contact to final marking',
      ],
    },
    practical: {
      heading: 'Day Two: Practical on a Live Site',
      subheading: 'Real site, real HV, real challenges',
      intro: 'The practical day moves to the Sygma site in a built-up area near the substation. The site has a genuine mixture of HV and LV electrical cables, gas pipes, water pipes, communications cables, and other buried infrastructure. Every delegate applies every technique from Day One in real field conditions, building confidence and accuracy in the use of precision locators to safely locate all types of buried services.',
      items: [
        'Practise transmitter connection, clamp application and induction sweeps on real buried services',
        'Locate HV cables in the presence of the substation electromagnetic environment',
        'Identify and work through distorted field situations on real infrastructure',
        'Apply depth estimation and use current direction and current measurement to confirm locates',
        'Apply high frequency capacitance to problem services',
        'Conduct a full site survey from start to finish using structured methodology',
        'Receive documented assessment and trainer feedback throughout',
      ],
    },
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Should Attend Advanced EM Training?',
    items: [
      {
        title: 'Experienced Utility Operatives',
        desc: 'Those who hold EUS CAT1 or ProQual CAT1 and regularly encounter difficult locating scenarios in the field. These training courses give them the diagnostic understanding and best practice to handle edge cases correctly rather than guessing.',
      },
      {
        title: 'Professional Utility Surveyors',
        desc: 'Those pursuing or holding ProQual Levels 3-6 or CICES membership who need to demonstrate GEUS01 Item E competency. Delegates learn advanced techniques and the course provides the evidence base for CICES membership applications.',
      },
      {
        title: 'ProQual Level 4/5 Learners',
        desc: 'Delegates enrolled in the Sygma ProQual Level 4 Specialist Technical or Level 5 Diploma programmes. Advanced EM training is included free of charge as part of the Level 4/5 curriculum.',
      },
      {
        title: 'Site Supervisors and CAT Managers',
        desc: 'Those responsible for signing off locating operations on high-risk sites who need a deeper technical understanding of how to use precision locators safely, what their operatives are actually doing, and what the equipment\'s limitations are.',
      },
      {
        title: 'Operators New to High-End Equipment',
        desc: 'Those moving from a standard locator to an RD8100, Vivax VLOC or Leica Ultra who need more than the manufacturer\'s manual to learn how to use their precision locator and accessories correctly in field conditions.',
      },
    ],
  },

  formats: {
    eyebrow: 'Training Formats',
    title: 'Available Course Formats',
    notes: [
      'The right format depends on your team\'s existing knowledge level and time availability. Not sure which is right? Contact Sygma and we will advise honestly.',
    ],
    rows: [
      {
        format: '2-Day Advanced (Flagship)',
        duration: '2 days',
        maxDelegates: '6',
        assessment: 'Specialists, CICES candidates, ProQual Level 4/5 learners',
      },
      {
        format: '2-Day Advanced (Extended)',
        duration: '2 days',
        maxDelegates: '6',
        assessment: 'Teams upgrading from CAT4 to RD8000 range',
      },
      {
        format: '3-Day Advanced (Assessed)',
        duration: '3 days',
        maxDelegates: '4',
        assessment: 'Teams requiring formal survey assessment with 70% written exam pass mark. Maximum 4 delegates.',
      },
      {
        format: '1-Day Awareness (RD8000 Range)',
        duration: '1 day',
        maxDelegates: '8',
        assessment: 'Teams deploying RD8000 range who need equipment-specific awareness training on-site. Up to 8 delegates.',
      },
      {
        format: '1-Day Refresher',
        duration: '1 day',
        maxDelegates: '8',
        assessment: 'Experienced operators with specific operational questions or issues to address. Up to 8 delegates.',
      },
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'What You Get',
    items: [
      { title: 'Advanced EM Location Certificate', desc: '' },
      { title: 'Written Assessment Record', desc: '' },
      { title: 'Practical Assessment Record', desc: '' },
      { title: 'Progression Guidance (toward PAS128 and Level 4/5 qualifications)', desc: '' },
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Professional Recognition',
        title: 'CICES Competency Mapping: GEUS01 Item E',
        desc: 'The 2-day advanced EM course is formally mapped to the Chartered Institution of Civil Engineering Surveyors (CICES) Competencies for membership, specifically GEUS01 Item E: the ability to demonstrate advanced electromagnetic location technique. For professionals pursuing CICES membership or seeking to demonstrate structured competency development against the GEUS01 framework, completion of the advanced EM course with documented assessment provides direct evidence toward this competency item. Sygma Solutions is the only specialist independent utility training provider in the UK. Our independence from survey work means the documented assessment delegates receive is objective and credible. We have no commercial reason to inflate results.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Advanced Locator Expertise',
        title: 'Training courses cover RD8100, RD8200 and Vivax VLOC PRO in depth. Not generic manufacturer demos.',
        desc: 'Advanced EM training that goes beyond basic equipment operation to develop diagnostic competency with precision locators, signal transmitters and accessories.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Our trainers come from the field. They have years of experience locating services in real conditions.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Structured on-site practical in real conditions.',
        desc: 'Not a simulation. Not a manufactured site. A real location with a genuine mix of HV and LV cables, pipes and other types of buried services.',
      },
      {
        eyebrow: 'Independent',
        title: 'No surveys, no equipment, no manufacturer relationships.',
        desc: 'Complete independence means objective assessment and no commercial pressure to inflate results.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'Delivered at your site, travel included.',
        desc: 'Private training courses at your location eliminate disruption and allow delegates to learn and practice on your own utilities, cables and pipes.',
      },
      {
        eyebrow: 'Small Groups',
        title: 'Maximum 6 delegates, intentionally small.',
        desc: 'In a group of six, every delegate gets the time they need. Quality over volume.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical.',
      'CITB-registered employers may be able to access Employer Network funding towards training costs. Speak with your CITB adviser to explore funding options for advanced EM training.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Related Training Courses',
    intro: 'Continue your journey with these complementary training courses in utility avoidance and advanced location. Each course covers different types of practice and skills development.',
    items: [
      {
        eyebrow: 'Cable Location Avoidance',
        title: 'EUS CAT1',
        desc: 'The foundation qualification for anyone who uses cable avoidance tools to locate buried services. Prerequisite for advanced EM training courses.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Cable Location Avoidance',
        title: 'EUS Superuser',
        desc: 'Advanced coaching and assessment competency. The next level for experienced operatives moving into supervisory roles.',
        href: '/courses/eus-superuser',
      },
      {
        eyebrow: 'Cable Location Avoidance',
        title: 'Plans and Process Training',
        desc: 'Master utility plan interpretation. Understand how plans integrate with the locating survey from start to finish.',
        href: '/courses/plans-and-process',
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

  cta: {
    title: 'Book Advanced EM Locator Training',
    description: 'Open training courses at Sygma HQ in Wigan and The Survey School in Worcester. Private group bookings available nationwide. Maximum 6 delegates per course. Learn to use precision locators safely and with confidence.',
    primaryLabel: 'Check Availability and Book',
    primaryHref: '/contact',
    secondaryLabel: 'Free for Level 4/5 Learners: Find Out More',
    secondaryHref: '/contact',
  },
};
