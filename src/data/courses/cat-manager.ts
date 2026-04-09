import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'cat-manager',

  metadata: {
    title: 'CAT Manager Online Training | Cat and Genny Data | Sygma',
    description: 'CAT Manager online training course. Learn to use c.a.t manager online for cat and genny data, check work quality and reduce utility strikes.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/cat-manager' },
    openGraph: {
      title: 'CAT Manager Online Training | Cat and Genny Data | Sygma',
      description: 'CAT Manager online training course. Learn to use c.a.t manager online for cat and genny data, check work quality and reduce utility strikes.',
      url: 'https://sygma-solutions.com/courses/cat-manager',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'CAT Manager Online Training',
    headline: 'CAT Manager Online Training Course: Make Your Cat and Genny Data Work for You',
    sub: 'Cat manager online training for managers and supervisors. Your cat and genny equipment records every locate. This half day course teaches you to use c.a.t manager online as a remote management tool to transfer usage data, check work quality across your entire team, identify training needs, and build the audit trail that protects your organisation from utility strikes.',
    image: 'CAT4-and-Genny-46',
    alt: 'CAT Manager online training showing data management from CAT and Genny surveys',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'CAT Manager Training' },
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
    { label: 'Duration', value: 'Half day training course (approx 4 hours)' },
    { label: 'Format', value: 'In-person or online training (Teams)' },
    { label: 'Max Delegates', value: '8 in-person | 12 online' },
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
        format: 'In Person',
        duration: 'Half day (4 hours)',
        maxDelegates: '8',
        assessment: 'Hands-on practical session',
      },
      {
        format: 'Online via Microsoft Teams',
        duration: 'Half day (approx 3.5 hours)',
        maxDelegates: '12',
        assessment: 'Hands-on practical session',
      },
    ],
  },

  photoStrips: [
    {
      images: [
        { src: 'CAT4-and-Genny-07', alt: 'CAT Manager training -- practical session' },
        { src: 'CAT4-and-Genny-50', alt: 'CAT Manager training -- hands-on assessment' },
        { src: 'CAT4-and-Genny-63', alt: 'CAT Manager training -- on-site delivery' },
      ],
      variant: 'grid',
    },
    {
      images: [
        { src: 'CAT4-and-Genny-49', alt: 'CAT Manager training session in classroom' },
        { src: 'CAT4-and-Genny-58', alt: 'Managing CAT and Genny operations training' },
        { src: 'CAT4-and-Genny-49', alt: 'CAT Manager competency assessment demonstration' },
      ],
      variant: 'grid',
    },
    {
      images: [
        { src: 'CAT4-and-Genny-54', alt: 'Utility management training practical' },
        { src: 'CAT4-and-Genny-69', alt: 'CAT Manager delegates reviewing procedures' },
        { src: 'CAT4-and-Genny-60', alt: 'On-site CAT Manager assessment training' },
      ],
      variant: 'grid',
    },
  ],

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Should Attend?',
    items: [
      {
        title: 'Underground Service Coordinators (USC)',
        desc: 'Managers responsible for monitoring cat and genny operative compliance on underground services. Cat manager online training turns an obligation into a practical remote management tool for your entire team.',
      },
      {
        title: 'Health and Safety Managers',
        desc: 'Health and safety managers who want to use cat manager data as a compliance audit tool to check work quality, identify training needs, and build a documented evidence trail for avoiding danger from utility strikes.',
      },
      {
        title: 'Site Managers',
        desc: 'Site managers wanting to verify that field operators are using the genny correctly and following best practice before problems occur on site with underground services and buried cables.',
      },
      {
        title: 'Supervisors',
        desc: 'Supervisors building regular data-download habits into their site processes as part of ongoing HSG47 compliance, allowing supervisors to monitor cat and genny usage across their company.',
      },
      {
        title: 'Data-Responsible Operatives',
        desc: 'Any operative who is responsible for downloading and reporting cat and genny data to managers. Cat manager online training provides essential knowledge for structured analysis of usage data.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Manager-Focused Training Course',
        title: 'Manager-Focused Training Course',
        desc: 'Designed specifically for managers and supervisors who manage teams using cat and genny equipment. Not generic IT training, but focused on practical management of usage data and location information through the c.a.t manager online system.',
      },
      {
        eyebrow: 'Specialist Cat and Genny Trainers',
        title: 'Specialist Cat and Genny Trainers',
        desc: 'Directly employed, ex-utility surveyors and ex-manufacturer specialists. TAQA qualified and with years of real-world cat and genny experience in locating underground services.',
      },
      {
        eyebrow: 'Genny-First Methodology',
        title: 'Genny-First Methodology',
        desc: 'Sygma\'s genny-first approach built into the cat manager online training programme. The training course teaches data analysis that supports best practice and the genny-first safety methodology for avoiding danger from utility strikes.',
      },
      {
        eyebrow: 'Independent and Unbiased',
        title: 'Independent and Unbiased',
        desc: 'Not tied to any manufacturer. We do not sell cat and genny equipment. Advice is focused purely on the management and structured analysis of cat genny data to check work quality across your company.',
      },
      {
        eyebrow: 'Small Class Sizes',
        title: 'Small Class Sizes',
        desc: 'Maximum 8 delegates ensuring personalised attention, hands on support, and the chance to work with real cat and genny equipment and real usage data from your site.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'We Come to You',
        desc: 'Cat manager online training delivered on-site anywhere in the UK. Travel included in the training course rate. Minimal disruption to your operations.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation and member of the CITB Employer Network. Employers registered with CITB may be able to access Employer Network funding towards cat manager online training course costs for their managers and supervisors.',
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world cat and genny skills for your field operators.',
      href: '/osca',
    },
    {
      title: 'Bespoke Cat and Genny Training',
      desc: 'Design a tailored cat and genny training programme around your site risks, equipment limitations, and team size.',
      href: '/contact',
    },
  ],

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Related Courses',
    items: [
      {
        eyebrow: 'Cable Avoidance Training',
        title: 'EUS CAT1 Cat and Genny Training',
        desc: 'EUSR-registered cat and genny training course for field operators. Includes an optional cat manager data download module.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Cable Avoidance Training',
        title: 'EUS Superuser Cat and Genny Training',
        desc: 'Advanced genny training course for supervisors and competency managers overseeing cat and genny operatives. Includes cat manager data analysis.',
        href: '/courses/eus-superuser',
      },
      {
        eyebrow: 'Cable Avoidance Training',
        title: 'Cable Avoidance Training Course',
        desc: 'Practical cat and genny training course for field operators who need competency on cable avoidance tools and signal generators.',
        href: '/courses/cable-avoidance-training',
      },
    ],
  },

  cta: {
    title: 'Book Cat Manager Online Training',
    description: 'Cat manager online training course delivered in person at Sygma HQ in Wigan, on-site at your premises, or online via Microsoft Teams. This half day training course teaches managers and supervisors to use c.a.t manager online to check work quality and reduce utility strikes. Contact us to arrange a session and receive a quote.',
    primaryLabel: 'Contact Us for Pricing',
    primaryHref: '/contact',
    secondaryLabel: 'View EUS CAT1 Training',
    secondaryHref: '/courses/eus-cat1',
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
