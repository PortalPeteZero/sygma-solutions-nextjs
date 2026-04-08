import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'cat4-hsg47-awareness-online',

  metadata: {
    title: 'CAT4 and HSG47 Awareness | Online Cable Avoidance | Sygma',
    description: 'Online CAT4 and HSG47 awareness training from Sygma Solutions. Foundation cable avoidance knowledge for operatives working near underground services.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/cat4-hsg47-awareness-online' },
    openGraph: {
      title: 'CAT4 and HSG47 Awareness | Online Cable Avoidance | Sygma',
      description: 'Online CAT4 and HSG47 awareness training from Sygma Solutions. Foundation cable avoidance knowledge for operatives working near underground services.',
      url: 'https://sygma-solutions.com/courses/cat4-hsg47-awareness-online',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'CAT4 HSG47 Awareness Online: Theory Refresher and Data Download Training',
    sub: 'Half a day via Microsoft Teams. Up to 12 delegates. Full HSG47 theory, electromagnetic science, PAS128 drawing interpretation, and optional CAT Manager data download, without your team leaving the site.',
    image: 'New-Landscape-06',
    alt: 'Online CAT4 and HSG47 awareness training course overview',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'CAT4 HSG47 Awareness Online' },
    ],
  },

  schemas: {
    course: {
      name: 'CAT4 and HSG47 Awareness Online Training',
      description: 'Online CAT4 and HSG47 awareness training from Sygma Solutions. Foundation cable avoidance knowledge for operatives working near underground services.',
      url: '/courses/cat4-hsg47-awareness-online',
      duration: 'half day',
      mode: ['online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'CAT4 HSG47 Awareness Online' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Duration', value: 'Half day (approx 9:00am to 12:30pm)' },
    { label: 'Format', value: 'Online via Microsoft Teams' },
    { label: 'Max Delegates', value: '12 per session' },
    { label: 'Assessment', value: 'No formal assessment' },
    { label: 'Certificate', value: 'Certificate of attendance' },
  ],

  about: {
    eyebrow: 'HSG47 Theory Without Stopping Production',
    title: 'Targeted Awareness Without a Full Day Off Site',
    paragraphs: [
      'Not every training need requires a full two-day in-house programme. Some teams need a targeted awareness session to refresh the theory behind what the CAT and Genny actually do, to understand how to read the plans they receive before every excavation, and to get to grips with what the data sitting in their CAT4 can tell them about how their team is working.',
      'The CAT4 HSG47 Awareness Online course is a half-day programme delivered via Microsoft Teams. It is designed for organisations that want to improve the theoretical understanding of their existing CAT operators without taking them off site for a full day, and for teams preparing to attend a more advanced course who need a solid foundation first.',
      'The optional CAT Manager data download element makes this course particularly valuable for supervisors and managers who want to understand what is being recorded in the field, how to export it, and how to spot patterns in the data that indicate either good practice or areas of concern.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: 'Half day (9am - 12:30pm approximately)' },
        { label: 'Delivery', value: 'Online via Microsoft Teams' },
        { label: 'Max Delegates', value: '12 per session' },
        { label: 'Assessment', value: 'None (awareness course)' },
        { label: 'Certificate', value: 'Certificate of attendance' },
        { label: 'Equipment', value: 'Microsoft Teams, webcam, microphone. Optional: CAT4 equipment or laptop with CAT Manager installed' },
        { label: 'Suitable For', value: 'Operatives refreshing theory, managers understanding data, teams preparing for advanced courses' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Course Content',
      subheading: 'What\'s Covered in the Half-Day Online Session',
      items: [
        'HSG47 guidance and principles of safe working near buried services',
        'PAS 128 standard and utility plan interpretation',
        'Electromagnetic theory: how CAT and Genny equipment works',
        'CAT4 controls, modes and practical operation',
        'Signal generator application and site practice',
        'Depth estimation and signal interpretation',
        'Cable strike avoidance and safe working practices',
        'CAT Manager data download and interpretation (optional additional module)',
        'Identifying training needs and work quality from usage data (optional)',
        'Real-world case studies and common mistakes',
      ],
    },
    practical: {
      heading: 'Delivery Format',
      items: [],
    },
  },

  photoStrips: [
    {
      images: [
        { src: 'CAT4-and-Genny-06', alt: 'HSG47 awareness - practical session' },
        { src: 'CAT4-and-Genny-48', alt: 'HSG47 awareness - hands-on assessment' },
        { src: 'CAT4-and-Genny-62', alt: 'HSG47 awareness - on-site delivery' },
      ],
      variant: 'grid',
    },
  ],

  cta: {
    title: 'Book Your HSG47 Awareness Session',
    description: 'Online via Microsoft Teams. Flexible scheduling, no travel required, your team stays on site. Contact us with delegate numbers and preferred dates.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
  },

  faqs: [
    {
      q: 'Is the CAT4 and HSG47 Awareness online course accredited?',
      a: 'No. This is an awareness and refresher course, not an accredited qualification programme. Delegates receive a certificate of attendance. For formal EUSR or ProQual qualifications, the two-day in-house CAT1 or CAT2 courses are required.',
    },
    {
      q: 'Can we run this course in person instead of online?',
      a: 'The CAT4 HSG47 Awareness course is designed as an online delivery via Microsoft Teams to minimise disruption to your operations. Full in-house two-day programmes are available for organisations wanting more comprehensive, accredited training. Contact us to discuss which option best suits your needs.',
    },
    {
      q: 'Do we need any special equipment to join?',
      a: 'All you need is access to Microsoft Teams, a webcam, and microphone. An internet connection and a suitable meeting space for your delegates are essential. Optional equipment (CAT4 or laptop with CAT Manager) is beneficial but not required.',
    },
    {
      q: 'Can we include CAT Manager data download training in this course?',
      a: 'Yes. CAT Manager data download is an optional additional module that can be added to this half-day course. This extends the session slightly but gives managers and supervisors practical experience with usage data analysis and reporting.',
    },
    {
      q: 'Is this course suitable for complete beginners?',
      a: 'This is best suited for operatives with some existing experience of CAT and Genny equipment who want a theory refresh, or for teams preparing to attend more advanced accredited courses. Complete beginners should consider the full two-day EUSR CAT1 or CAT2 programmes.',
    },
    {
      q: 'How many times per month can this course be delivered?',
      a: 'The CAT4 HSG47 Awareness online course can be scheduled flexibly around trainer availability. Contact us with your preferred dates and we will arrange a session. Multiple sessions can be arranged on different dates to accommodate your team.',
    },
  ],
};
