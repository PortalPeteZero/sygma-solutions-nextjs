import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'cat-manager',

  metadata: {
    title: 'CAT Manager Online Training | Cat and Genny Data | Sygma',
    description: 'CAT Manager online training course. Learn to use c.a.t manager online for cat and genny data, check work quality and reduce utility strikes.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/cat-manager' },
  },

  hero: {
    eyebrow: 'CAT Manager Online Training',
    headline: 'CAT Manager Online Training Course: Make Your Cat and Genny Data Work for You',
    sub: 'A practical half-day course for managers and supervisors. Learn to transfer usage data from cat and genny equipment, create real-time reports, and use structured data analysis to monitor work quality across your entire operative team.',
    image: 'CAT4-and-Genny-49',
    alt: 'CAT Manager online training for managers and supervisors checking work quality',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'CAT Manager Online Training' },
    ],
  },

  schemas: {
    course: {
      name: 'CAT Manager Online Training Course',
      description: 'CAT Manager online training course for managers and supervisors. Learn to use c.a.t manager online as a remote management tool, transfer usage data from cat and genny equipment, check work quality across your entire team, and reduce utility strikes through structured analysis.',
      url: '/courses/cat-manager',
      credential: 'CAT Manager Certificate',
      duration: 'half day',
      mode: ['onsite', 'online'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'CAT Manager Online Training' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Duration', value: 'Half day training course (approximately 4 hours)' },
    { label: 'Delivery', value: 'In person (Wigan HQ) or online via Microsoft Teams' },
    { label: 'Max Delegates', value: '8 in person | 12 online training' },
    { label: 'Assessment', value: 'No formal assessment (hands on practical session)' },
    { label: 'Certificate', value: 'Certificate of attendance' },
  ],

  about: {
    eyebrow: 'Why Cat Manager Online Training Matters',
    title: 'Your Cat and Genny Usage Data Is Currently Invisible to You',
    paragraphs: [
      'C.A.T Manager Online is the Radiodetection remote management tool that unlocks the usage data stored inside every eCAT4 and gCAT4 device. Without cat manager online training, that data sits on the unit, invisible and unused, entirely without value. With this training course, managers and supervisors learn to transfer usage data, create real time reports and charts, export to CSV and KML, upload to the c.a.t manager online system via a standard web browser, and identify at a glance who is using the genny correctly and who is cutting corners. The cat manager online web interface enables automatic usage monitoring, allowing supervisors and office staff to check work quality across field operators without complex manual data retrieval.',
      'Every cat and genny device logs data every time it is used on site. That usage data tells managers when the equipment was used, in which modes, for how long, at what sensitivity levels, and whether the operator used the signal generator (genny) as they should have. Without cat manager online training to download and review that data, supervisors have no visibility of whether field operators are applying the genny-first methodology that prevents utility strikes and cable strikes. Poor work practices with cat and genny equipment on underground services and buried services are invisible until a strike occurs.',
      'This half day training course teaches your delegates how to install and use the cat manager software, download data from the cat and genny device, interpret what they are looking at, identify training needs for new starters and experienced field operators, and build reports that serve as an audit trail for health and safety compliance. The hands on session is deliberately interactive, saving time for your company by working through real scenarios. Delegates are encouraged to bring their own cat and genny equipment and have c.a.t manager online pre-installed so they can work through the process using real location information from their own fleet.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: 'Half day training course (approximately 4 hours)' },
        { label: 'Delivery', value: 'In person (Wigan HQ) or online cat manager training via Microsoft Teams' },
        { label: 'Max Delegates', value: '8 in person | 12 online training' },
        { label: 'Assessment', value: 'No formal assessment (hands on practical session)' },
        { label: 'Certificate', value: 'Certificate of attendance' },
        { label: 'Equipment', value: 'Optional: laptop with c.a.t manager online installed, eCAT4 or gCAT4 cat and genny equipment with data transfer lead' },
        { label: 'Availability', value: 'Contact us to arrange a cat manager online training session' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Cat Manager Online Training Course Content',
      subheading: 'What the Cat Manager Training Course Covers',
      items: [
        'Installing c.a.t manager online software via a standard web browser and registering as a user or guest user on the system',
        'Downloading and transferring usage data from eCAT4 and gCAT4 cat and genny devices without complex manual data retrieval',
        'Examining and understanding raw data in CSV format for structured analysis of cat genny usage',
        'Exporting usage data to CSV and KML file formats from the cat manager system',
        'Importing data into the cat analysis tool and accessing all the scans from your entire team of field operators',
        'Uploading data to c.a.t manager online and using the remote server for automatic usage monitoring',
        'Creating real time reports and charts that summarise usage patterns, check work quality, and easily assess work quality across managers and supervisors',
        'Using the built in GPS and location tools including the google maps interface to map where locates were performed and view location information',
        'Analysing data to identify correct use of cat and genny equipment, flag poor work practices, and support operator intervention where training needs are identified',
        'Understanding what the usage data reveals about genny usage frequency and whether field operators are avoiding danger from underground services',
        'Identifying training needs and trends across your operative workforce to reduce utility strikes and cable strikes on buried services and underground utilities',
      ],
    },
    practical: {
      heading: 'Training Delivery',
      subheading: 'In Person or Online',
      items: [],
    },
  },

  formats: {
    eyebrow: 'Cat Manager Online Training Delivery Options',
    title: 'In Person or Online Training Course',
    rows: [
      {
        format: 'In Person (Sygma HQ, Wigan or on-site)',
        duration: '4 hours (half day)',
        maxDelegates: '8',
        assessment: 'Hands-on practical session',
      },
      {
        format: 'Online via Microsoft Teams',
        duration: 'Approx 3.5 hours (half day)',
        maxDelegates: '12',
        assessment: 'Hands-on practical session via Teams',
      },
    ],
  },

  photoStrips: [
    {
      images: [
        { src: 'CAT4-and-Genny-49', alt: 'CAT Manager training session in classroom' },
        { src: 'CAT4-and-Genny-58', alt: 'Managing CAT and Genny operations training' },
        { src: 'CAT4-and-Genny-49', alt: 'CAT Manager competency assessment demonstration' },
      ],
      variant: 'grid',
    },
  ],

  cta: {
    title: 'Book Your CAT Manager Training Session',
    description: 'Choose in-person at our Wigan training centre or online via Microsoft Teams. Contact us with your preferred format, delegate numbers, and target dates.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
  },

  faqs: [
    {
      q: 'Do delegates need to bring their own cat and genny equipment to the training course?',
      a: 'Equipment is optional for this cat manager online training course. The training can be completed without hardware, using example usage data provided by Sygma. However, delegates who bring their own eCAT4 or gCAT4 cat and genny equipment (with a data transfer lead) and a laptop with c.a.t manager online pre-installed will get more from the hands on session because they will be working with real data from their own fleet of field operators.',
    },
    {
      q: 'What version of c.a.t manager online is used in the training course?',
      a: 'The training course uses the current Radiodetection c.a.t manager online version, accessed through a standard web browser. We recommend delegates pre-install the latest cat manager software before attending. The download link and installation guide will be provided on booking. Managers can also access the radiodetection online support portal for additional resources.',
    },
    {
      q: 'Can this cat manager training course be delivered on site at our premises?',
      a: 'Yes. The in-person cat manager online training course can be delivered at your site provided a suitable meeting room and IT setup are available. This allows managers and supervisors to work with their own cat and genny equipment and real usage data from their company fleet during the session. Contact us to discuss logistics and costs.',
    },
    {
      q: 'Is the cat manager online training course accredited?',
      a: 'No formal accreditation is attached to cat manager online training. Delegates receive a certificate of attendance. The training course is designed as a technical skills development session for supervisors and managers rather than a qualification programme. It provides essential knowledge for using cat manager as a remote management tool to check work quality and identify training needs across your entire team of cat and genny operators.',
    },
    {
      q: 'Can we combine this training course with other Sygma cat and genny training?',
      a: 'Yes. Cat manager online training pairs particularly well with the EUS Superuser genny training course, which includes cat manager data analysis as one of its core modules. Many organisations book the two sessions together as a supervisory development package for managers responsible for cat and genny competency.',
    },
    {
      q: 'Is cat manager training relevant to the EUS CAT1 or CAT2 cat and genny accreditation?',
      a: 'Cat manager data download is an optional module within the EUS CAT1 cat and genny training course. This standalone cat manager online training session provides much greater depth on the c.a.t manager online system and is aimed at managers, supervisors, and coordinators rather than operative-level delegates.',
    },
    {
      q: 'What is c.a.t manager online and how does it work as a remote management tool?',
      a: 'C.A.T Manager Online is a Radiodetection remote management tool that enables automatic usage monitoring of your entire team of cat and genny field operators. Usage data is transferred from cat and genny equipment to a remote server, where managers and office staff can access it through a standard web browser or web interface. The system includes a google maps interface with built in GPS to show location information, real time reports on work quality, and the ability to easily assess work quality across all field operators without needing physical access to the cat and genny devices.',
    },
    {
      q: 'How does cat manager online training help reduce utility strikes?',
      a: 'Cat manager online training teaches managers and supervisors to use usage data to identify poor work practices with cat and genny equipment before utility strikes and cable strikes occur on underground services. By monitoring genny usage frequency, checking whether field operators are using the signal generator correctly, and flagging where cat genny equipment sits unused, managers can intervene with targeted genny training before dangerous habits lead to strikes on buried services, buried cables, or underground utilities during excavation work.',
    },
    {
      q: 'Can cat manager online be accessed on mobile devices?',
      a: 'Yes. C.A.T Manager Online can be accessed through a standard web browser on any device, and Radiodetection also provides a free android and apple mobile app for managers and supervisors who need to check work quality and review usage data from cat and genny equipment while on site. The mobile access means managers can monitor field operators and review location information from anywhere, saving time on manual data collection.',
    },
  ],
};
