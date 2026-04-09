import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'vscan-and-transmitter-training',

  metadata: {
    title: 'vScan & Transmitter Training | Sygma Solutions',
    description: 'vScan and transmitter training with HSG47 built in. Transmitter-First methodology covering all four locating modes. UK-wide delivery.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/vscan-and-transmitter-training' },
    openGraph: {
      title: 'vScan & Transmitter Training | Sygma Solutions',
      description: 'vScan and transmitter training with HSG47 built in. Transmitter-First methodology covering all four locating modes. UK-wide delivery.',
      url: 'https://sygma-solutions.com/courses/vscan-and-transmitter-training',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
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
        desc: 'No prior experience with vScan or transmitter equipment needed.',
      },
      {
        title: 'Site Operatives and Groundworkers',
        desc: 'Anyone who needs to locate buried services before excavation.',
      },
      {
        title: 'Supervisors Wanting Awareness',
        desc: 'Those who need to understand the equipment their teams are using.',
      },
      {
        title: 'Organisations Introducing Transmitter-First',
        desc: 'Companies transitioning to full vScan & Tx use across their workforce.',
      },
    ],
  },

  infoBar: [
    { label: 'Format', value: 'Choice of in-house certified or accredited' },
    { label: 'Duration', value: '1-day or 2-day options' },
    { label: 'Max Delegates', value: '8' },
    { label: 'Assessment', value: 'Written 70% + practical' },
    { label: 'Delivery', value: 'At your site, nationwide' },
  ],

  about: {
    eyebrow: 'Why This Course Exists',
    title: 'The Problem with Standard vScan and Transmitter Training',
    paragraphs: [
      'Most vScan & Tx training courses teach operatives to press the on button and walk over the area. They know what the beep means. They do not know why the signal behaves the way it does in different soil conditions, what happens to accuracy near a joint, or why their passive Power mode reading is not telling them what they think it is.',
      'The Sygma vScan & Tx course was built to fix that. You will notice that Sygma says "Tx & vScan" rather than "vScan and transmitter". That is deliberate. The rest of the industry puts the locator first. We put the signal generator first, because that is the methodology change that reduces service strikes. Start with the transmitter, exhaust every connection opportunity, verify what is in the ground before you rely on passive modes. That single change in workflow order is the difference between an operative who finds what is there and one who only confirms what they expected.',
      'This course was designed after years of post-strike investigations, in which Sygma trainers repeatedly found the same pattern: operatives who were technically trained, certificated and equipped but who had never been taught to start a survey with the transmitter, to null out nearby services, or to distrust a signal that seems clear. We address the confirmation biases and pressure shortcuts that cause strikes. We build a Transmitter-First mindset that becomes automatic. And we prove everything on site, in your operatives\' own working environment.',
      'The result is a course with a proven track record of reducing service strikes for organisations across the UK construction, utilities and infrastructure sectors.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Format', value: 'Choice of: 1-day in-house certified, 2-day in-house certified, 2-day split certified (3 months apart)' },
        { label: 'Location', value: 'Delivered at your site nationwide | Wigan HQ available as alternative' },
        { label: 'Max Delegates', value: '8 (all formats)' },
        { label: 'Assessment', value: 'Written MCQ (70% pass) + practical assessment on site' },
        { label: 'Certificate', value: 'Certificate of completion with written and practical results' },
        { label: 'Equipment', value: 'Each operative should use their own site equipment. Sygma provide Vivax-Metrotech vScan and transmitter as backup. Any manufacturer\'s locator and signal generator is suitable.' },
        { label: 'CITB', value: 'CITB Approved Training Organisation' },
        { label: 'Pricing', value: 'Contact us for a tailored quote' },
      ],
    },
  },

  courseContent: {
    eyebrow: 'Course Content',
    title: 'Two Days. On Your Ground.',
    theory: {
      heading: 'Classroom: Theory',
      subheading: 'The full technical and regulatory context',
      items: [
        'Reasons for using vScan & Tx: HSG47 and the legal, financial and human consequences of service strikes',
        'Legislation and guidance: HSG47, relevant national legislation, client and designer responsibilities',
        'Overview of utility networks: cable and pipe types, materials and connectivity',
        'Buried service plans (STATS): how to interpret plans including inaccuracies and limitations',
        'Calibration requirements: correct storage, functional checks and pre-use inspection',
        'Electromagnetic theory: how a cable locator works, limitations, and myth-busting',
        'Controls and operation: correct use of locator and signal generator in all four modes (Power, Radio, Tx and Avoidance)',
        'Signal interpretation: locating joints, changes of direction and depth',
        'Signal distortion and its effects on location accuracy',
        'Transmitter applications: dual frequency, capacitance technique, earth positioning, blind induction sweeps and nulling out',
        'Depth estimation: when and how to take depth readings, testing the results',
        'Data logging (optional): how to use vScan Manager software to collect and analyse data',
        'PAS128 survey levels: understanding different survey types',
        'Permits and paperwork: permits to dig, safe systems of work',
      ],
    },
    practical: {
      heading: 'Site-Based: Practical',
      subheading: 'Every principle proved on real buried utilities',
      intro: 'The practical session takes delegates outside onto a real site to prove every principle taught in the classroom. Sygma uses your own site wherever possible, which means operatives are training on the same ground and the same utility types they will encounter daily.',
      items: [
        'Reading and using service plans to plan the survey before any equipment is switched on',
        'Site visual checks: identifying above-ground indicators of buried services',
        'Using the transmitter to apply a signal via direct connection, capacitance and induction',
        'Training in all four modes with strong emphasis on leading with the transmitter at every stage',
        'Locating problem services: street lighting, LV services, small comms cables',
        'Locating joints, T-connections and changes of direction',
        'Effect of transmitter earth positioning: operatives learn why moving the earth changes the locate',
        'Blind induction sweeps and nulling out nearby services',
        'Full utility survey methodology: starting from plans and working systematically across the site',
        'Individual practical assessment: each operative assessed against a documented standard',
      ],
    },
  },

  formats: {
    eyebrow: 'Formats Available',
    title: 'Course Formats',
    rows: [
      { format: 'One-day in-house (certified)', duration: '1 day', maxDelegates: '8', assessment: 'Written + practical' },
      { format: 'Two-day in-house (certified)', duration: '2 days', maxDelegates: '8', assessment: 'Written + practical' },
      { format: 'Two-day split -- 3 months apart (certified)', duration: 'Day 1 + Day 2', maxDelegates: '8', assessment: 'Day 1 training, Day 2 assessment' },
    ],
    notes: [
      'The two-day split format is particularly valuable where operatives benefit from applying classroom learning in real working conditions before returning for their assessed practical day. The gap of approximately three months allows behaviours to bed in and any gaps to be identified and corrected.',
      'All courses delivered by a CITB Approved Training Organisation.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'At the End of This Course',
    items: [
      { title: 'Certificate of Attendance', desc: 'Confirmation of completion of Sygma vScan & Tx training' },
      { title: 'Practical Skills Record', desc: 'Detailed record of all hands-on exercises completed during the course' },
      { title: 'Equipment Confidence', desc: 'Practical experience with transmitter and vScan locator in real conditions' },
      { title: 'Pathway Guidance', desc: 'Personalised advice on which qualification pathway to progress to next' },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-50', alt: 'vScan & Tx training outdoors with Sygma' },
        { src: 'CAT4-and-Genny-56', alt: 'Delegates using locating equipment on site' },
        { src: 'Safe-Dig-09', alt: 'Practical utility location and excavation training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-41', alt: 'Transmitter practical training' },
        { src: 'CAT4-and-Genny-51', alt: 'vScan & Tx training assessment on buried services' },
        { src: 'CAT4-and-Genny-63', alt: 'Hands-on transmitter signal application demonstration' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-43', alt: 'vScan locator training practical session' },
        { src: 'CAT4-and-Genny-52', alt: 'Delegates practising utility location techniques' },
        { src: 'CAT4-and-Genny-58', alt: 'On-site vScan & Tx training assessment' },
      ],
    },
  ],

  siteRequirements: {
    items: [
      { label: 'STATS Plans', detail: 'Buried service drawings appropriate to the practical site. If plans are not available, Sygma can supply plans at an additional cost agreed prior to booking.' },
      { label: 'Equipment', detail: 'Each operative should use the equipment they work with on site. Sygma provide Vivax-Metrotech vScan and transmitter as backup. Any manufacturer\'s equipment is suitable.' },
      { label: 'Meeting Room', detail: 'Suitable for up to 8 people with projector or screen and sufficient space for written assessment.' },
      { label: 'Practical Site', detail: 'A suitable site with buried metallic utilities close to the meeting room. A single power cable to a cabin is not sufficient.' },
      { label: 'PPE', detail: 'Delegates must have appropriate PPE in compliance with national and company health and safety requirements.' },
      { label: 'Parking', detail: 'Sygma trainers arrive in transit-sized vehicles. Advise of any height barriers or access restrictions in advance.' },
    ],
    note: 'Sygma\'s dedicated training centre at Wigan is available as an alternative venue at no extra cost, with full welfare and catering facilities.',
  },

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may still be able to access training funding support through the CITB Employer Network.',
      'Contact your CITB adviser for current eligibility and funding options. Sygma is a CITB Approved Training Organisation and provides all required documentation to support funding applications.',
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Competence',
        title: 'Trained and Competent Operatives',
        desc: 'Formal assessment ensures operatives meet competence standards for cable avoidance work.',
      },
      {
        eyebrow: 'Process',
        title: 'Safe System of Work',
        desc: 'Classroom and practical training covers systematic approach to service location.',
      },
      {
        eyebrow: 'Planning',
        title: 'Service Plan Checks',
        desc: 'Reading, interpreting and cross-checking buried service drawings before work begins.',
      },
      {
        eyebrow: 'Equipment',
        title: 'Correct Use of Equipment',
        desc: 'Training in all four locating modes (Power, Radio, Tx and Avoidance) with emphasis on correct operation and limitations.',
      },
      {
        eyebrow: 'Verification',
        title: 'Visual Inspection',
        desc: 'Site visual checks for above-ground indicators of buried services before and during work.',
      },
      {
        eyebrow: 'Records',
        title: 'Evidenced Training Records',
        desc: 'Written and practical assessment results provided for compliance documentation and audit.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Content',
        title: 'Content That Exceeds Industry Standards',
        desc: 'Whether you choose in-house, EUS or ProQual, Sygma content goes above and beyond qualification specifications. This comprehensive approach is something you will only find in a Sygma course.',
      },
      {
        eyebrow: 'Methodology',
        title: 'Transmitter-First Methodology',
        desc: '70-80% increase in transmitter usage among Sygma-trained operatives. Measured through locator data downloads.',
      },
      {
        eyebrow: 'People',
        title: 'Specialist Trainers',
        desc: 'Directly employed. Ex-utility surveyors or ex-equipment manufacturer specialists. TAQA qualified.',
      },
      {
        eyebrow: 'Assessment',
        title: 'Real Practical Assessment',
        desc: 'Structured on-site practical in real conditions. The goal is competent operatives, not just certificates.',
      },
      {
        eyebrow: 'Approach',
        title: 'Independent',
        desc: 'No surveys, no equipment, no manufacturer relationships. Unbiased training.',
      },
      {
        eyebrow: 'Delivery',
        title: 'We Come to You',
        desc: 'Delivered at your site. Travel included. No hidden extras.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Further Training',
    title: 'Related Courses',
    intro: 'Sygma offers a range of utility avoidance and cable location training programmes to suit different needs and regulatory requirements.',
    items: [
      {
        eyebrow: 'Qualification',
        title: 'EUS CAT1',
        desc: 'EUSR-registered qualification for operatives who need a formal card.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Assessment',
        title: 'ProQual CAT1',
        desc: 'Accredited qualification with all four EML modes in the practical assessment.',
        href: '/courses/proqualcat1-training',
      },
      {
        eyebrow: 'Foundation',
        title: 'CAT and Genny Training',
        desc: 'The Radiodetection CAT4 and Genny4 equivalent of this course, using the same Sygma methodology.',
        href: '/courses/genny-cat-training',
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

  cta: {
    title: 'Arrange Your vScan & Tx Course',
    description: 'Delivered at your site, nationwide. Bespoke to your equipment, your plans and your risk profile. Contact us for a tailored quote.',
    primaryLabel: 'Contact Us to Arrange Your Course',
    primaryHref: '/contact',
    secondaryLabel: 'View EUS CAT1 (Formal Qualification)',
    secondaryHref: '/courses/eus-cat1',
  },
};
