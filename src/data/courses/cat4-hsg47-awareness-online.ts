import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'cat4-hsg47-awareness-online',

  metadata: {
    title: 'CAT4 HSG47 Awareness Online Training | Sygma Solutions',
    description: 'Online CAT4 HSG47 awareness training covering theory refresher and data download. Delivered via MS Teams by specialist utility avoidance trainers.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/cat4-hsg47-awareness-online' },
    openGraph: {
      title: 'CAT4 HSG47 Awareness Online Training | Sygma Solutions',
      description: 'Online CAT4 HSG47 awareness training covering theory refresher and data download. Delivered via MS Teams by specialist utility avoidance trainers.',
      url: 'https://sygma-solutions.com/courses/cat4-hsg47-awareness-online',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
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
      name: 'CAT4 HSG47 Awareness Online Training',
      description: 'Online CAT4 HSG47 awareness training covering theory refresher and data download. Delivered via MS Teams by specialist utility avoidance trainers.',
      url: '/courses/cat4-hsg47-awareness-online',
      credential: 'CAT4 HSG47 Awareness Certificate',
      duration: 'Half day',
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

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Benefits From This Course?',
    items: [
      {
        title: 'CAT Operators Wanting to Reinforce Theory',
        desc: 'Operatives who have received hands-on training but want to strengthen the underlying electromagnetic science and HSG47 knowledge.',
      },
      {
        title: 'Operatives Refreshing After a Gap',
        desc: 'Those who attended training some time ago and want to update their knowledge of HSG47 and electromagnetic principles.',
      },
      {
        title: 'Supervisors and Managers',
        desc: 'Those who want to understand what the CAT Manager data from their team is telling them, and how to act on it.',
      },
      {
        title: 'New Starters Awaiting In-Person Training',
        desc: 'Team members who need a theoretical foundation while waiting for a full in-house programme to be arranged.',
      },
      {
        title: 'Teams Needing Plan Awareness',
        desc: 'Any team where understanding of PAS128 and utility plan interpretation needs to be raised quickly and efficiently.',
      },
    ],
  },

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
        { label: 'Duration', value: 'Half a day (approximately 9:00am to 12:30pm)' },
        { label: 'Format', value: 'Online via Microsoft Teams' },
        { label: 'Max Delegates', value: '12 per session' },
        { label: 'Qualification', value: 'Certificate of attendance' },
        { label: 'Assessment', value: 'No formal assessment' },
        { label: 'Prerequisites', value: 'None' },
        { label: 'Equipment', value: 'Microsoft Teams, webcam, microphone, speakers. Optional: CAT Manager installed with data, or a CAT4 with cable and batteries.' },
        { label: 'Pricing', value: 'Contact Sygma for a quote based on delegate numbers' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'HSG47 and the Legislative Framework',
      items: [
        'Why buried service damage happens and what it costs: health, safety, and financial consequences',
        'HSG47: what it requires operatives and organisations to do',
        'National legislation and company policy relevant to working near buried utilities',
        'Examples of what happens when the requirements are not followed',
      ],
    },
    practical: {
      heading: 'Course Content: What the Course Covers',
      intro: 'Course content is fluid and can be shaped around the specific areas your team most needs to cover. Core topics include:',
      items: [
        'Utility Plans and PAS128: How to interpret STATS plans, PAS128 drawings, survey types, quality levels, and the difference between estimated, measured, and surveyed service routes',
        'Electromagnetic Theory: How a pipe and cable locator works, signal behaviour, equipment limitations, myth-busting about what the equipment tells you',
        'CAT Manager Data Download (Optional): How to use CAT Manager software, export file types, filter and refine data, analyse recorded data and identify patterns',
      ],
    },
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Online With Expert Delivery',
        title: 'Live sessions hosted by experienced trainers. Not pre-recorded content.',
        desc: 'Real-time interaction, questions answered as they arise, tailored to your team\'s needs.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Our trainers come from the field. They have years of experience locating services in real conditions.',
      },
      {
        eyebrow: 'Independent',
        title: 'No surveys, no equipment, no manufacturer relationships.',
        desc: 'Complete independence means objective assessment and honest advice about equipment limitations.',
      },
      {
        eyebrow: 'Half-Day Format',
        title: 'Theory refresher without requiring a full day off site.',
        desc: 'Approximately 90 minutes online. Your team stays productive while their knowledge is updated.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical.',
      'CITB-registered employers may be able to access Employer Network funding towards training costs. For the online format, discuss with your adviser how this awareness session fits into your learning and development plan.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Related Training Courses',
    intro: 'Continue your journey with these complementary courses in utility avoidance training.',
    items: [
      {
        eyebrow: 'Cable Location Avoidance',
        title: 'EUS CAT1',
        desc: 'The foundation qualification for anyone who locates buried services. Two days of theory and practical assessment.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Cable Location Avoidance',
        title: 'EUS CAT2 Safe Dig',
        desc: 'The second stage of EUS. Safe excavation techniques, HSG47 in practice, and permit to dig requirements.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Cable Location Avoidance',
        title: 'CAT Manager Training',
        desc: 'Master the data recorded by your CAT4. Download, export, and analyse CAT Manager data to monitor team performance.',
        href: '/courses/cat-manager',
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

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-06', alt: 'HSG47 awareness - practical session' },
        { src: 'CAT4-and-Genny-48', alt: 'HSG47 awareness - hands-on assessment' },
        { src: 'CAT4-and-Genny-62', alt: 'HSG47 awareness - on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-65', alt: 'CAT4 and Genny training assessment' },
        { src: 'CAT4-and-Genny-52', alt: 'Utility avoidance awareness training' },
        { src: 'Safe-Dig-07', alt: 'On-site CAT4 HSG awareness session' },
      ],
    },
  ],

  faqs: [
    {
      q: 'Is this a qualification?',
      a: 'No. This is an awareness course. Delegates receive a certificate of attendance but no formal qualification or EUS recognition. For EUS-recognised qualifications, see the EUS CAT1 and EUS CAT2 programmes.',
    },
    {
      q: 'Can this be run as a public scheduled session rather than a private team booking?',
      a: 'Contact Sygma to discuss availability. Most online sessions are run as private bookings for individual organisations, but Sygma can advise on whether scheduled open sessions are available.',
    },
    {
      q: 'We do not have CAT Manager installed. Can we still attend the data session?',
      a: 'Yes. Delegates without CAT Manager can still observe the data download and analysis demonstration. However, to follow along hands-on during the session, delegates should have CAT Manager installed with downloaded data or a CAT4 available with the data cable.',
    },
    {
      q: 'Can the content be tailored to our specific equipment?',
      a: 'Yes. The session is flexible and Sygma can adjust the controls overview and data section to focus on the specific version of the CAT4 your team uses. Raise this at the time of booking.',
    },
    {
      q: 'Is this suitable as a refresher for operatives with existing EUS CAT1?',
      a: 'Yes. This course works well as a standalone theory refresher for operatives who hold EUS CAT1 but have not attended any training for some time. It covers the core theoretical content without requiring a full in-person programme.',
    },
    {
      q: 'How is this different from the full CAT Manager Training course?',
      a: 'The CAT Manager Training course is a dedicated half-day session focused entirely on the CAT Manager software, including installation, data download, CSV and KML export, charts, and the online portal. The HSG47 Awareness course covers CAT Manager as one optional element alongside HSG47, electromagnetic theory, and plan interpretation. If your primary need is the software, the CAT Manager Training course is the right choice.',
    },
  ],

  cta: {
    title: 'Book for Your Team',
    description: 'Online via Microsoft Teams. Up to 12 delegates per session. Contact us with delegate numbers and your preferred dates to receive a quote.',
    primaryLabel: 'Book for Your Team',
    primaryHref: '/contact',
    secondaryLabel: 'View CAT Manager Training',
    secondaryHref: '/courses/cat-manager',
  },
};
