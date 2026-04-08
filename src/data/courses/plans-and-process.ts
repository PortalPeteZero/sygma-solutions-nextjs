import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'plans-and-process',

  metadata: {
    title: 'Plans and Process Training Course | Sygma Solutions',
    description: 'Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/plans-and-process' },
  },

  hero: {
    eyebrow: 'Professional Development',
    headline: 'Plans and Process Training: Read Utility Plans Like an Expert and Work Safely',
    sub: 'One day on-site. Learn to interpret utility plans accurately, understand PAS 128 and HSG47 requirements, and apply this knowledge to real site conditions. For site supervisors, managers, and experienced operatives.',
    image: 'New-Landscape-09',
    alt: 'Plans and process training for utility plan interpretation',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Plans and Process Training' },
    ],
  },

  schemas: {
    course: {
      name: 'Plans and Process Training',
      description: 'Learn to read utility plans properly and survey more safely. Covers plan interpretation, HSG47 requirements and practical application for site teams.',
      url: '/courses/plans-and-process',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Plans and Process Training' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Duration', value: '1 day (on-site)' },
    { label: 'Format', value: 'In-house at your site' },
    { label: 'Max Delegates', value: '8-12 per course' },
    { label: 'Assessment', value: 'Practical plan interpretation' },
    { label: 'Certificate', value: 'Certificate of competency' },
  ],

  about: {
    eyebrow: 'Understanding the Plans You Receive',
    title: 'Many Site Delays Start With Misunderstood Plans',
    paragraphs: [
      'Utility plans are the starting point for every safe site survey. But plans have limitations. They contain indication lines, not exact routes. They are drawn to variable scales and accuracy standards. They don\'t always show every service. Some utilities aren\'t shown on any plan at all. Misinterpreting a plan leads to incomplete or inaccurate locate work, and can waste time, delay projects, and compromise safety.',
      'This one-day course teaches teams to read plans critically and accurately. Delegates learn the limitations of different plan types (STATS, utilities commission records, historical surveys), understand the standards they should comply with (PAS 128, HSG47, BS 1192), and practice interpreting real site plans alongside physical site conditions. By the end of the day, your team understands what plans can and cannot tell them, and how to bridge the gap with professional survey techniques.',
      'The course is ideal for site supervisors, survey managers, utility coordinators, and experienced operatives who want to improve their professional competency in plan reading and site interpretation.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '1 day (6-8 hours)' },
        { label: 'Format', value: 'On-site at your location' },
        { label: 'Max Delegates', value: '8-12 per course' },
        { label: 'Assessment', value: 'Practical plan interpretation and site application' },
        { label: 'Certificate', value: 'Certificate of competency' },
        { label: 'Suitable For', value: 'Site supervisors, survey managers, coordinators, experienced operatives' },
        { label: 'Prerequisites', value: 'Some site experience beneficial but not essential' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Training Content',
      subheading: 'Plan Interpretation and Safe Site Practice',
      items: [
        'Introduction to utility plans: types, sources, and standards',
        'STATS plans: how they are created, accuracy limitations, and interpretation',
        'Utility company records and service drawings: understanding their scope and accuracy',
        'Historical survey records and their reliability',
        'Plan symbols, notations, and conventions: reading utility information accurately',
        'Scale and measurement: understanding plan accuracy at different scales',
        'PAS 128 standard requirements for plan interpretation and survey',
        'HSG47 guidance on reading plans and identifying hazards',
        'Identifying plan limitations and gaps in utility information',
        'Visual site inspection: correlating plan information with physical ground conditions',
        'Undertaking a desktop survey: using multiple sources to build an accurate picture',
        'Recognising services that may not be shown on plans (private installations, old services)',
        'Creating an accurate locate brief for the surveying team',
        'Documentation and records: maintaining plan sets and updating information',
      ],
    },
    practical: {
      heading: 'Practical Application',
      subheading: 'Real Plans and Real Site Conditions',
      intro: 'The practical element of the course involves interpreting actual plans relevant to your site and reconciling them with physical ground conditions.',
      items: [
        'Plan interpretation exercises using real site plans',
        'Visual site inspection and plan verification',
        'Identifying utilities on site that do not appear on plans',
        'Recognising service changes and disconnections not recorded on plans',
        'Practical assessment of plan reading competency',
        'Feedback and discussion of real site examples',
      ],
    },
  },

  photoStrips: [
    {
      images: [
        { src: 'New-Landscape-09', alt: 'Plans and process training - plan interpretation' },
        { src: 'New-Landscape-10', alt: 'Site survey and plan verification training' },
        { src: 'New-Landscape-12', alt: 'Utility plan assessment competency training' },
      ],
      variant: 'grid',
    },
  ],

  cta: {
    title: 'Book Your Plans and Process Training',
    description: 'One day on-site. Learn to read plans accurately and survey more safely. Contact us with your delegate numbers and preferred dates.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
  },

  faqs: [
    {
      q: 'Is this course suitable for site operatives or only supervisors?',
      a: 'This course is designed for site supervisors, managers, and experienced operatives. It assumes basic site knowledge and focuses on professional competency in plan interpretation. Complete beginners should start with awareness-level training covering HSG47 and PAS 128 principles before taking this course.',
    },
    {
      q: 'Do we need to provide plans for the training?',
      a: 'Yes. The most valuable training uses actual plans from your site. Please provide utility plans, STATS records, or other survey data available for your location. If you don\'t have plans in advance, we can work with generic examples, but using your real site plans will give better practical learning.',
    },
    {
      q: 'Can this course be delivered online?',
      a: 'No. The Plans and Process course requires on-site delivery so that the practical element can compare plans with actual ground conditions. This physical comparison is essential to understanding plan accuracy and limitations.',
    },
    {
      q: 'How often is this training delivered?',
      a: 'The course can be arranged on flexible dates to suit your team. Contact us with your preferred timeframe and delegate numbers. Multiple sessions can be arranged if you have large teams to train.',
    },
    {
      q: 'Can this course be combined with other training?',
      a: 'Yes. Many organisations combine Plans and Process training with CAT and Genny courses or HSG47 awareness training to provide comprehensive competency. Contact us to discuss combining courses.',
    },
    {
      q: 'What if some of our team are complete beginners to site work?',
      a: 'Beginners should start with HSG47 awareness training to build foundational knowledge before taking the Plans and Process course. For established teams wanting to improve plan-reading competency, the Plans and Process course delivers focused professional development.',
    },
  ],
};
