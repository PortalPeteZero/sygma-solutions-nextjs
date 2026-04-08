import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'manufacturer-locator-training',

  metadata: {
    title: 'Manufacturer Locator Training Course | Sygma Solutions',
    description: 'One day, up to eight delegates. Theory and practical training tailored to your pipe and cable locating equipment, using your own kit on a representative site.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/manufacturer-locator-training' },
    openGraph: {
      title: 'Manufacturer Locator Training Course | Sygma Solutions',
      description: 'One day, up to eight delegates. Theory and practical training tailored to your pipe and cable locating equipment, using your own kit on a representative site.',
      url: 'https://sygma-solutions.com/courses/manufacturer-locator-training',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Specialist Training',
    headline: 'Manufacturer Locator Training: Master Any Brand of Cable and Pipe Location Equipment',
    sub: 'One day on-site. Theory plus practical training tailored to your manufacturer\'s equipment. Work with your own kit, on a representative site. Full competency in your specific locator.',
    image: 'CAT4-and-Genny-02',
    alt: 'Manufacturer locator training showing hands-on equipment operation',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Manufacturer Locator Training' },
    ],
  },

  schemas: {
    course: {
      name: 'Manufacturer Locator Training',
      description: 'One day training tailored to your specific cable and pipe locating equipment. Theory, practical operation, and site application.',
      url: '/courses/manufacturer-locator-training',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Manufacturer Locator Training' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Duration', value: '1 day (on-site)' },
    { label: 'Format', value: 'Tailored to your equipment brand' },
    { label: 'Max Delegates', value: '8 per course' },
    { label: 'Assessment', value: 'Practical operation and application' },
    { label: 'Certificate', value: 'Certificate of competency' },
  ],

  about: {
    eyebrow: 'Equipment-Specific Training',
    title: 'Not All Locators Are Operated the Same Way',
    paragraphs: [
      'Organisations use a wide variety of cable and pipe location equipment. While the electromagnetic principles are universal, the controls, modes, and operational workflows differ between manufacturers and models. A trainingprogramme built around Radiodetection equipment may not serve teams using Vivax-Metrotech, Leica, or specialist drill-detection systems equally well.',
      'Sygma delivers manufacturer-specific training tailored to the exact equipment your team uses. Our trainers work with your kit, on a location that represents your typical working conditions. The practical exercises cover the specific controls, functions, and workflows of your equipment brand. By the end of the day, your team is fully competent on the machines they actually use.',
      'This course is ideal for organisations introducing a new locator brand, for teams switching from one manufacturer to another, or for structured operator development where equipment-specific competency is a requirement.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '1 day (approximately 6-8 hours)' },
        { label: 'Format', value: 'On-site at your location' },
        { label: 'Max Delegates', value: '8 per course' },
        { label: 'Assessment', value: 'Practical demonstration of competency' },
        { label: 'Certificate', value: 'Certificate of competency' },
        { label: 'Equipment', value: 'Your own equipment (mandatory)' },
        { label: 'Prerequisites', value: 'Some existing experience with cable and pipe location' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Training Content',
      subheading: 'Manufacturer-Specific Theory and Practice',
      items: [
        'Electromagnetic principles and theory specific to your locator brand',
        'Equipment architecture: antennas, control panel, signal generation, power systems',
        'All available modes: passive, active, genny, avoidance, manufacturer-specific modes',
        'Control operation: sensitivity adjustment, frequency selection, signal interpretation',
        'Signal generator application and safe handling',
        'Depth estimation and limitations of your specific model',
        'Practical fault-finding and equipment diagnostics',
        'Battery management and field maintenance',
        'Integration with your existing site procedures and working methods',
        'Data logging and export features (where available)',
        'Site-specific application and real-world scenarios',
      ],
    },
    practical: {
      heading: 'Practical Application',
      subheading: 'Real-World Field Training',
      intro: 'All practical training takes place on-site with your equipment and real underground utilities.',
      items: [
        'Equipment setup and function checks',
        'Locating using your equipment in all available modes',
        'Signal interpretation specific to your locator',
        'Depth estimation and testing',
        'Working with problem services and signal distortion',
        'Safe procedure when locating near existing utilities',
        'Practical assessment of competency on your site',
      ],
    },
  },

  photoStrips: [
    {
      images: [
        { src: 'CAT4-and-Genny-02', alt: 'Manufacturer locator training - equipment operation' },
        { src: 'CAT4-and-Genny-19', alt: 'Cable and pipe location practical training' },
        { src: 'Safe-Dig-03', alt: 'Manufacturer-specific locator competency assessment' },
      ],
      variant: 'grid',
    },
  ],

  cta: {
    title: 'Arrange Your Manufacturer-Specific Training',
    description: 'Contact us with details of your equipment brand, model, and delegate numbers. We\'ll tailor a programme to your exact kit and site requirements.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
  },

  faqs: [
    {
      q: 'Do you provide training on every manufacturer of cable and pipe locators?',
      a: 'Yes. We work with Radiodetection, Vivax-Metrotech, Leica, Schonstedt, and most other manufacturers of cable and pipe location equipment. If your equipment is specialist or unusual, please contact us to discuss your specific requirements.',
    },
    {
      q: 'Can we train on multiple brands if we have mixed equipment in our fleet?',
      a: 'Yes. Sygma can deliver training covering multiple locator brands if your team uses different manufacturers. We can run separate sessions for each brand, or a mixed session if your team works with multiple types. The practical exercises can be tailored to include your full range of equipment.',
    },
    {
      q: 'Is this course suitable for complete beginners to cable location?',
      a: 'This course assumes operators have some existing familiarity with cable and pipe location principles. If your team are complete beginners, we recommend starting with the EUSR CAT1 or ProQual equivalent courses, which cover the fundamentals alongside equipment operation.',
    },
    {
      q: 'What if we\'re planning to switch to a different manufacturer?',
      a: 'Manufacturer locator training is ideal for teams introducing new equipment. We can train your team on the new brand before transition, allowing them to become competent on the new kit before it enters your main operations. This approach avoids competency gaps during equipment changeover.',
    },
    {
      q: 'Can training cover specialist functions like data logging or GPS integration?',
      a: 'Yes. If your equipment includes specialist functions such as data logging, GPS recording, or integration with mapping software, these can be covered as part of the practical training. Let us know your equipment\'s features so we can include them in the tailored programme.',
    },
    {
      q: 'Do we provide the equipment or does Sygma?',
      a: 'You must provide your own equipment for this course. The training is specifically tailored to your locator and site conditions. Bring your own cable and pipe location equipment in good working order, with spare batteries.',
    },
  ],
};
