import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'eus-cat1-cat2-usc-combined',

  metadata: {
    title: 'EUS CAT1 CAT & Genny Training with CAT2 and USC | Sygma',
    description: 'EUS CAT1 CAT and Genny training combined with CAT2 safe dig and USC content. Two-day classroom and on-site course delivered nationwide by Sygma Solutions.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1-cat2-usc-combined' },
    openGraph: {
      title: 'EUS CAT1 CAT & Genny Training with CAT2 and USC | Sygma',
      description: 'EUS CAT1 CAT and Genny training combined with CAT2 safe dig and USC content. Two-day classroom and on-site course delivered nationwide by Sygma Solutions.',
      url: 'https://sygma-solutions.com/courses/eus-cat1-cat2-usc-combined',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'EUS CAT1 CAT and Genny Training with CAT2 Safe Dig and USC Combined',
    sub: 'Three qualifications and responsibilities in a single two-day CAT and Genny training programme. EUS CAT1 location training, EUS CAT2 Safe Dig assessment, and Underground Service Coordinator content delivered in-house by Sygma Solutions, tailored to your organisation\'s permit systems and documentation.',
    image: 'CAT4-and-Genny-63',
    alt: 'Combined EUS CAT1, CAT2 and USC utility service coordinator training session',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'EUS CAT1, CAT2 and USC Combined' },
    ],
  },

  schemas: {
    course: {
      name: 'EUS CAT1 CAT & Genny Training with CAT2 and USC | Sygma',
      description: 'EUS CAT1 CAT and Genny training combined with CAT2 safe dig and USC content. Two-day classroom and on-site course delivered nationwide by Sygma Solutions.',
      url: '/courses/eus-cat1-cat2-usc-combined',
      credential: 'EUS CAT1, EUS CAT2, and USC',
      duration: '3 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'EUS CAT1, CAT2 and USC Combined' },
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
    { label: 'Qualifications', value: 'EUS CAT1, EUS CAT2, USC content' },
    { label: 'Delivery', value: 'Nationwide UK' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-10', alt: 'EUS CAT1 CAT2 and USC combined training - practical session' },
        { src: 'CAT4-and-Genny-52', alt: 'EUS CAT1 CAT2 and USC combined training - hands-on assessment' },
        { src: 'Safe-Dig-06', alt: 'EUS CAT1 CAT2 and USC combined training - on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-45', alt: 'Combined EUS CAT1, CAT2 and USC training practical session' },
        { src: 'Safe-Dig-10', alt: 'Safe excavation demonstration during combined utility training' },
        { src: 'CAT4-and-Genny-60', alt: 'On-site utility avoidance and safe dig combined assessment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-46', alt: 'Utility location practical training' },
        { src: 'Safe-Dig-09', alt: 'Safe dig practical assessment' },
        { src: 'CAT4-and-Genny-55', alt: 'Combined utility avoidance course completion' },
      ],
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Who Should Attend This CAT and Genny Training Course',
    items: [
      {
        title: 'Service Coordinators and Planners',
        desc: 'Those responsible for planning work around underground services and managing permits to dig. This training gives you the knowledge base and practical skills to understand utility drawings, identify cable locations, and manage excavation permits on your sites. You will receive comprehensive training in service coordinator responsibilities and PAS128 interpretation.',
      },
      {
        title: 'Site Operatives Requiring Full Competency',
        desc: 'Anyone who locates, excavates and coordinates utility avoidance on site. This CAT and Genny training course equips you with practical skills in cable avoidance, hands-on experience with locator and signal generator equipment, and competency in safe excavation around live underground services. You will receive EUS CAT1 and CAT2 accreditation.',
      },
      {
        title: 'Organisations Seeking Maximum Competency',
        desc: 'Companies wanting CAT1, CAT2 and USC service coordinator competency from a single classroom-based and practical training event. This combined course delivers comprehensive training in cable avoidance, safe dig, and service coordination in one unified two-day programme. Ideal for teams needing multi-level utility detection and safety skills.',
      },
      {
        title: 'Supervisors and Managers',
        desc: 'Those overseeing teams who need to understand the full utility avoidance process and safe excavation procedures. This training gives you the knowledge to manage on-site permits, understand cable location methods, supervise safe dig activities, and ensure your team follows underground service detection best practices.',
      },
    ],
  },

  about: {
    eyebrow: 'The Most Complete Single Programme',
    title: 'CAT and Genny Training Course: CAT1, CAT2 and Service Coordination in One Programme',
    paragraphs: [
      'Most utility strikes are not caused by individual operative failure. They happen when the systems around the operative also fail: when plans are not interrogated properly, when permits to dig are treated as paperwork formalities, when no one in the team actually understands what a PAS128 drawing is telling them, and when the underground service coordinator role is occupied by someone who was appointed without any structured genny training, cable avoidance training, or preparation for the role. Proper cat and genny training and genny training courses exist to prevent these failures by teaching operatives how to locate utility services before excavation work begins.',
      'This combined CAT and Genny training course addresses all three layers. Day one covers the complete theoretical foundation for EUS CAT1: electromagnetic location science, Genny-First methodology, plan interpretation, and the legislative framework including HSG47. The site training element of day two delivers EUS CAT2 through a live safe dig assessment with a permit to dig. Incorporated throughout the course is the USC element, which is tailored specifically to your organisation\'s documentation, permit systems, and service coordinator responsibilities.',
      'The USC is not a qualification. It is an appointment made by the organisation when a delegate has the experience and knowledge to take on the role. This genny training course builds the knowledge base and contextualises it within your specific company systems, so that when the appointment is made, it is meaningful. Every delegate leaves this training course with EUS CAT1 and CAT2 accreditation in the appropriate EUSR category, registered on the EUSR database. On successful completion of both the cable avoidance and safe dig elements, delegates can locate utility services with confidence and competence.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '2 days (classroom and on-site)' },
        { label: 'Format', value: 'In-house at your site or Sygma\'s Wigan training centre' },
        { label: 'Max Delegates', value: '8 per course' },
        { label: 'Qualifications', value: 'EUS CAT1, EUS CAT2 (Safe Dig), USC content (appointment by employer)' },
        { label: 'Assessment', value: 'Multiple choice questions (MCQs) + practical safe dig assessment' },
        { label: 'Prerequisites', value: 'None for operatives. Company must provide USC documentation in advance.' },
        { label: 'Equipment', value: 'Sygma provides Radiodetection CAT4 and Genny4 as standard; this course can be delivered on any of the following: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. Delegates may bring their own equipment.' },
        { label: 'Delivery', value: 'Nationwide UK' },
        { label: 'Pricing', value: 'Contact Sygma for a tailored quotation' },
      ],
    },
  },

  courseContent: {
    eyebrow: 'EUS CAT1 and CAT2 Elements',
    title: 'CAT and Genny Training Content: Full EUS CAT1 and CAT2 Course Programme',
    theory: {
      heading: 'CAT and Genny Classroom Training (EUS CAT1 and CAT2 Theory)',
      items: [
        'Legislation and guidance including HSG47 and company-specific policy',
        'Site-specific risk assessments, company procedures, and permits to dig',
        'Excavation hazards: Leptospirosis, asbestos, silica dust, noise, vibration, groundwater',
        'Utility plan interpretation: STATS plans, limitations, visual checks',
        'Electromagnetic theory: how a CAT and Genny work, signal behaviour, limitations',
        'Locator operation: Power, Radio, Genny, and Avoidance modes, Strike Alert, signal interpretation, depth estimation',
        'Signal generator application: dual frequency, capacitance mode, earth positioning, blind induction, nulling services',
        'CAT Manager data logging: recording, exporting CSV and KML files, data pattern analysis',
        'Excavation techniques: exposing services, hand tools, power tools, horizontal excavation, trench support',
      ],
    },
    practical: {
      heading: 'CAT and Genny On-Site Training (Practical Application and CAT2 Assessment)',
      items: [
        'Using STATS plans and existing site information to identify indicated utility routes',
        'Visual site inspection and equipment function checks before any location work begins',
        'Locating in all modes, confirming service routes, taking and testing depth readings',
        'Signal generator application for problem services: street lighting, small comms cables',
        'Completing a risk assessment and permit to dig before excavation commences',
        'Surface removal, horizontal excavation to expose the indicated service, supporting services, reinstatement',
        'Candidate assessment throughout the excavation process',
        'Multiple choice questions (MCQs) at the end of the programme',
      ],
    },
  },

  formats: {
    eyebrow: 'How We Deliver',
    title: 'How Sygma Delivers This CAT and Genny Training Course',
    rows: [
      { format: 'In-house at your site', duration: '2 days', maxDelegates: '8', assessment: 'Written + practical' },
    ],
    notes: [
      'This combined course is delivered in-house at your premises or a site of your choice. Sygma provides all training materials and assessment documentation. Contact the bookings team to arrange delivery.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'What Delegates Receive from This CAT and Genny Training Course',
    items: [
      { title: 'EUS CAT1 Certificate', desc: 'EUSR-registered CAT1 accreditation for cable and underground service location competency. Covers electromagnetic detection, Genny-First methodology, and practical cable avoidance skills.' },
      { title: 'EUS CAT2 Certificate', desc: 'EUSR-registered CAT2 Safe Dig accreditation for safe excavation competency around live utilities. Covers safe dig assessment, practical skills, and underground service exposure techniques.' },
      { title: 'USC Certificate', desc: 'Service Coordinator accreditation registered on the EUSR database. Confirms your appointment and recognition as competent in permit systems, utility drawings, and service detection responsibilities.' },
      { title: 'Written and Practical Assessment Records', desc: 'Full documentation of theory assessments, practical observations, cable avoidance demonstrations, safe dig assessment records, and CAT Manager data analysis across all three disciplines.' },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Instructor. CITB-registered employers may be able to access training funding support for this CAT and Genny training course through the CITB Employer Network. This applies to all Sygma courses including EUS CAT1, CAT2, and the combined programme with USC content. Contact your CITB adviser directly for current eligibility and funding options.',
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'More Than a Standard CAT and Genny Course',
        title: 'More Than a Standard CAT and Genny Course',
        desc: 'Many CAT1 courses meet the minimum specification. Ours exceed it. We invest in the science and in your operatives\' depth of understanding.',
      },
      {
        eyebrow: 'Genny & CAT Methodology',
        title: 'Genny & CAT Methodology',
        desc: 'Our Genny-First CAT and Genny training methodology delivers a measured 70-80% increase in signal generator usage. When your operatives use the Genny properly on every locate, they find more underground services before excavation begins.',
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
        desc: 'In-house CAT and Genny training delivery anywhere in the UK with travel fully included. Minimal disruption to your operations and your team trains on their own site with their own underground services.',
      },
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Trained and Competent',
        title: 'Trained and Competent',
        desc: 'Full theoretical foundation in cable avoidance, locator operation, and signal generator use. Practical CAT and Genny assessment to confirmed EUS CAT1 and CAT2 standards. Competency registered on the EUSR database.',
      },
      {
        eyebrow: 'Safe System of Work',
        title: 'Safe System of Work',
        desc: 'Permits to dig, risk assessments, site inspection protocols, documented procedures, and management oversight. Training covers HSG47 guidance on safe dig procedures and utility detection responsibilities.',
      },
      {
        eyebrow: 'Service Plan Checks',
        title: 'Service Plan Checks',
        desc: 'STATS plan interpretation, limitations, quality levels, visual verification, PAS128 drawing interrogation, and cable location techniques before excavation starts. Training in reading utility drawings and identifying all indicated services.',
      },
      {
        eyebrow: 'Correct Use of Equipment',
        title: 'Correct Use of Equipment',
        desc: 'Locator and signal generator operation, signal interpretation, cable detection depth estimation, and troubleshooting. Training in all four modes: Power, Radio, Genny, and Avoidance. Data logging via CAT Manager.',
      },
      {
        eyebrow: 'Safe Excavation',
        title: 'Safe Excavation',
        desc: 'Practical safe dig assessment with exposure of live buried utilities, correct hand tool and power tool use, support of services, and reinstatement. Real-world CAT2 training under site conditions.',
      },
      {
        eyebrow: 'Evidenced Records',
        title: 'Evidenced Records',
        desc: 'Written assessment, practical observation records, cable avoidance demonstration records, CAT Manager data logging, and safe dig assessment documentation for compliance and future reference.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Related CAT and Genny Training Courses',
    intro: 'Consider these additional CAT and Genny training programmes to build deeper expertise across your team in cable avoidance, signal generator use, and utility detection.',
    items: [
      {
        eyebrow: 'EUS CAT1',
        title: 'EUS CAT1',
        desc: 'Two-day location theory and practical. Detection only, without the safe dig element of this combined programme.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'ProQual CAT1 Plus',
        title: 'ProQual CAT1 Plus',
        desc: 'RQF-regulated alternative to EUS CAT1. Covers electromagnetic location with additional depth on geology and cable theory.',
        href: '/courses/proqualcat1plus',
      },
      {
        eyebrow: 'Service Coordinator',
        title: 'Service Coordinator',
        desc: 'Dedicated USC role preparation for experienced operatives. Comprehensive PAS128 awareness and company documentation tailoring.',
        href: '/courses/service-coordinator-usc',
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
      q: 'Is the USC a qualification?',
      a: 'No. The Underground Service Coordinator role is an appointment made by the employer, not a qualification awarded on completion of the course. The course builds the knowledge base and contextualises it within your company systems. The appointment itself is the employer\'s decision, made when the delegate has the requisite experience and knowledge.',
    },
    {
      q: 'Can we run the CAT1 and CAT2 elements without the USC content?',
      a: 'Yes. The standalone EUS CAT1 and CAT2 Combined programme covers the location and safe dig elements without the USC content. If your team needs the USC component as well, this combined programme is the most efficient option.',
    },
    {
      q: 'We do not have all our USC documentation ready. Can we still book?',
      a: 'You can provisionally book, but the USC element cannot be delivered without the required documentation. Please aim to have all documentation with Sygma at least one week before the course date to allow the trainer adequate preparation time.',
    },
    {
      q: 'What if different delegates are attending for different reasons, some for CAT1 and CAT2, some for USC?',
      a: 'The combined programme is designed for delegates who need all three elements. If only some delegates require the USC content, Sygma can discuss splitting the programme or running the USC session for a smaller group within the two days. Contact Sygma to discuss the best structure for your team.',
    },
    {
      q: 'Does this course include PAS128 training?',
      a: 'The USC element includes PAS128 awareness: an explanation of survey types, quality levels, and how to read a PAS128 drawing. This is designed to give USCs the ability to interpret and interrogate PAS128 outputs. It is not the same as the dedicated PAS128 Awareness course, which covers the standard in greater depth for surveyors and technical staff.',
    },
    {
      q: 'Can this be run at your Wigan training centre?',
      a: 'Yes. Sygma\'s dedicated training centre in Wigan includes live utility demonstration rigs and a safe dig area. USC content will still need to be tailored to your organisation\'s documentation regardless of venue.',
    },
  ],

  cta: {
    title: 'Book This CAT and Genny Training Course',
    description: 'Book this cat and genny training course at your site anywhere in the UK, or at Sygma\'s dedicated training centre in Wigan. Contact us with your delegate numbers, preferred location (classroom-based at Wigan or on-site delivery across the UK), any cat genny equipment preferences, and your Underground Service Coordinator documentation. We will prepare a tailored quotation for your genny training programme. This training course covers cable avoidance, safe dig, and service coordination to help your team locate utility services safely and competently.',
    primaryLabel: 'Enquire About This Course',
    primaryHref: '/contact',
    secondaryLabel: 'View CAT1 and CAT2 Combined (Without USC)',
    secondaryHref: '/courses/eus-cat1-cat2-combined',
  },
};
