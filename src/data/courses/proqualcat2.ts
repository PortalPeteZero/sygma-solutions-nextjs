import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'proqualcat2',

  metadata: {
    title: 'ProQual CAT2 | Safe Excavation Qualification',
    description: 'ProQual CAT2 safe excavation qualification. BS 8475:2015 certified. Two-day course covering 24 theory and 15 practical criteria. Book your training.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat2' },
    openGraph: {
      title: 'ProQual CAT2 | Safe Excavation Qualification',
      description: 'ProQual CAT2 safe excavation qualification. BS 8475:2015 certified. Two-day course covering 24 theory and 15 practical criteria. Book your training.',
      url: 'https://sygma-solutions.com/courses/proqualcat2',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Safe Excavation',
    headline: 'ProQual CAT2 (Safe Excavation & Hazard Management)',
    sub: 'The independent certification for safe excavation in the UK. Covers 24 theory criteria and 15 practical assessment points across four stages.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/courses' },
      { label: 'ProQual CAT2' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT2 (Safe Excavation & Hazard Management)',
      description: 'ProQual CAT2 is a comprehensive two-day qualification covering safe excavation practice, utility avoidance, and hazard management. It meets the BS 8475:2015 standard for independent certification. The course includes both theory and on-site practical assessment, ensuring delegates are truly competent to plan and manage safe dig operations.',
      url: '/courses/proqualcat2',
      credential: 'ProQual CAT2 Certificate',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Courses', to: '/courses' },
      { label: 'ProQual CAT2' },
    ],
  },

  stats: [
    {
      value: '24',
      label: 'Theory Criteria',
      detail: 'Individual T1-T24 assessment points',
    },
    {
      value: '15',
      label: 'Practical Criteria',
      detail: 'Four assessment stages P1-P4',
    },
    {
      value: '2',
      label: 'Days',
      detail: '16 hours of comprehensive training',
    },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Site Operatives and Groundworkers',
        desc: 'Anyone who is responsible for planning or managing safe excavation work around buried utilities.',
      },
      {
        title: 'Supervisors and Project Managers',
        desc: 'Those who need to understand safe dig procedures, hazard identification and safe systems of work for excavation.',
      },
      {
        title: 'CAT and Genny Users',
        desc: 'Operatives who already hold or are pursuing a CAT1 qualification and need to progress to safe excavation competency.',
      },
      {
        title: 'Any Role Involved in Excavation Safety',
        desc: 'From ground workers through to site managers -- anyone involved in planning, managing or executing excavation near buried services.',
      },
    ],
  },

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
      value: 'ProQual CAT2 Certificate',
    },
    {
      label: 'Assessment',
      value: '24 theory + 15 practical criteria',
    },
  ],

  about: {
    eyebrow: 'Why This Course Exists',
    title: 'Beyond Utility Location: Safe Excavation Competency',
    paragraphs: [
      'ProQual CAT2 covers what happens after the utility has been found. Locating a cable is only the first step. The second step is managing the excavation safely around it. CAT2 covers hazard identification, safe digging technique, support and protection measures, and the decision-making required when working near underground services.',
      'Many operatives are trained in utility location but lack formal competency in safe excavation practice. This creates a gap: they know where the utilities are, but they do not know how to excavate safely once they are exposed. ProQual CAT2 closes that gap.',
      'The qualification meets BS 8475:2015 standard for independent certification of safe dig competency. Each of the 24 theory criteria and 15 practical criteria is assessed individually. There is no aggregated pass mark that masks weakness in critical areas. Completing all criteria demonstrates genuine competence across the full scope of safe excavation.',
      'The course is designed for anyone involved in excavation around buried services -- from site operatives and groundworkers through to supervisors and managers. Prior completion of ProQual CAT1 or equivalent utility locating qualification is recommended but not formally mandated.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        {
          label: 'Format',
          value: 'Two-day on-site practical and theory assessment',
        },
        {
          label: 'Assessment',
          value: '24 theory criteria (T1-T24) and 15 practical criteria across four stages (P1-P4)',
        },
        {
          label: 'Pass Mark',
          value: 'All criteria must be met. No aggregated pass mark -- each criterion assessed individually.',
        },
        {
          label: 'Duration',
          value: '16 hours total instruction',
        },
        {
          label: 'Location',
          value: 'At your site nationwide or Sygma Wigan training centre',
        },
        {
          label: 'Max Delegates',
          value: '8 per session',
        },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Classroom: Theory',
      subheading: 'Safe excavation practice and hazard management',
      items: [
        'Safe dig planning and permit-to-dig procedures',
        'Hazard identification around buried services',
        'Excavation hazards including leptospirosis and asbestos',
        'STATS plan interpretation and visual survey techniques',
        'Electromagnetic theory and locator operation (all four modes)',
        'Signal generator application including dual frequency and capacitance',
        'Depth estimation methodology',
        'CAT Manager data logging (optional)',
        'Safe excavation techniques and trench support measures',
        'Utility company liaison and compliance',
        'Emergency procedures and incident reporting',
      ],
    },
    practical: {
      heading: 'Site-Based: Practical Assessment',
      subheading: 'Four stages covering safe dig process from planning to completion',
      intro: 'The practical assessment covers the complete safe excavation process from site inspection through to service exposure. Each stage is assessed individually by a Sygma assessor.',
      items: [
        'P1: Site preparation -- STATS plan review, utility route identification, visual inspection protocols, equipment function verification',
        'P2: Location phase -- locating across all modes with depth testing, signal generator application for difficult services, risk assessment and permit completion',
        'P3: Excavation -- surface removal, horizontal excavation techniques, service exposure and support procedures',
        'P4: Completion -- hazard management, compliance verification, documentation and incident reporting',
      ],
    },
  },

  formats: {
    eyebrow: 'Formats Available',
    title: 'Course Formats',
    rows: [
      {
        format: 'Two-day in-house (accredited)',
        duration: '2 days',
        maxDelegates: '8',
        assessment: '24 theory + 15 practical',
      },
      {
        format: 'Three-day format (shorter daily sessions)',
        duration: '3 days',
        maxDelegates: '8',
        assessment: '24 theory + 15 practical',
      },
    ],
    notes: [
      'ProQual CAT2 must be delivered by an approved training provider. Sygma Solutions is a ProQual-approved provider.',
      'All courses delivered by a CITB Approved Training Organisation.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'ProQual CAT2 Certification Routes',
    intro: 'On successful completion of ProQual CAT2 training, delegates receive a ProQual-accredited certificate valid for 3 years. The certificate confirms competency across all 24 theory and 15 practical criteria.',
    items: [
      {
        title: 'ProQual CAT2 Certificate',
        desc: 'Issued by ProQual Accreditations. The certificate is recorded on the ProQual register and valid for 3 years. Demonstrates independent certification of safe dig competency meeting BS 8475:2015 standard.',
      },
      {
        title: 'Individual Criterion Assessment',
        desc: 'Each of the 24 theory and 15 practical criteria is assessed separately. There is no aggregated pass mark -- all criteria must be demonstrated to receive the certificate.',
      },
      {
        title: 'Assessment Documentation',
        desc: 'Full details of results provided for compliance documentation and audit. Suitable for framework registration and client requirements.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Experience',
        title: '21 Years in Utility Location',
        desc: 'Sygma\'s specialist experience in underground utility training brings depth to safe excavation training that generalist providers cannot match.',
      },
      {
        eyebrow: 'Methodology',
        title: 'Proven Strike Reduction Record',
        desc: 'Clients report measurable reductions in service strikes after Sygma training. 70-80% increase in Genny usage measured through locator data.',
      },
      {
        eyebrow: 'People',
        title: 'Specialist Trainers',
        desc: 'All trainers are ex-utility surveyors or equipment specialists with field experience. Not generalist H&S instructors.',
      },
      {
        eyebrow: 'Assessment',
        title: 'Real Practical Assessment',
        desc: 'Structured on-site practical in real conditions with individual assessment of all 15 practical criteria. The goal is competent operatives, not just certificates.',
      },
      {
        eyebrow: 'Scope',
        title: 'Comprehensive Coverage',
        desc: 'Covers the complete safe excavation process from planning through to completion, not just hazard identification.',
      },
      {
        eyebrow: 'Delivery',
        title: 'We Come to You',
        desc: 'Delivered at your site. Travel included. No hidden extras. Alternative venue at Wigan with full facilities available.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Further Training',
    title: 'Related Courses',
    intro: 'Sygma offers a range of utility avoidance and cable location training programmes to complement your safe excavation training.',
    items: [
      {
        eyebrow: 'Utility Location',
        title: 'ProQual CAT1',
        desc: 'Utility avoidance and cable location training. Recommended as a prerequisite for CAT2, though not formally mandated.',
        href: '/courses/proqualcat1-training',
      },
      {
        eyebrow: 'Combined Qualification',
        title: 'ProQual CAT1 & CAT2 Combined',
        desc: 'Two-day programme delivering both qualifications in a single course for teams needing comprehensive training.',
        href: '/courses/proqual-cat1-cat2-combined',
      },
      {
        eyebrow: 'Advanced Assessment',
        title: 'OSCA On-Site Assessment',
        desc: 'GPS-stamped on-site competency assessment to verify real-world skills in your team\'s working environment.',
        href: '/osca',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'ProQual CAT1 & CAT2 Combined',
      desc: 'Train your team in both utility location and safe excavation in a single two-day programme.',
      href: '/courses/proqual-cat1-cat2-combined',
    },
    {
      title: 'Bespoke Training',
      desc: 'Design a tailored programme around your site risks, equipment, and team size.',
      href: '/contact',
    },
  ],

  siteRequirements: {
    items: [
      {
        label: 'Classroom Space',
        detail: 'Suitable for up to 8 people with projector or screen and sufficient space for written assessment.',
      },
      {
        label: 'CAT1 Location Area',
        detail: 'Multiple underground utility types must be detectable nearby. STATS plans provided in advance.',
      },
      {
        label: 'CAT2 Safe Dig Area',
        detail: 'Live dig area with buried metallic utilities. Minimum 10m² open, hand-dig suitable ground. Must be suitable for controlled practical excavation assessment.',
      },
      {
        label: 'Equipment',
        detail: 'CAT and Genny locating equipment for each operative (or minimum one per three delegates). Sygma provide Radiodetection CAT4 and Genny4 as standard. Any manufacturer\'s equipment is suitable.',
      },
      {
        label: 'PPE and Tools',
        detail: 'FR PPE and insulated digging tools required for safe dig assessment. Delegates must have appropriate PPE in compliance with national and company health and safety requirements.',
      },
      {
        label: 'Parking',
        detail: 'Sygma trainers arrive in transit-sized vehicles. Advise of any height barriers or access restrictions in advance.',
      },
    ],
    note: 'The training will not proceed unless the minimum CAT2 site requirements are met. Sygma will assess site suitability before booking is confirmed. Sygma\'s dedicated training centre at Wigan is available as an alternative venue at no extra cost, with full welfare, catering and safe dig facilities.',
  },

  citbFunding: {
    paragraphs: [
      'Sygma Solutions is a CITB Approved Training Organisation. Employers who pay the CITB levy may be able to access training funding support through the CITB Employer Network.',
      'All Sygma courses exceed 51% practical content, meeting CITB standards for hands-on training delivery. Contact your CITB Employer Network adviser for current eligibility and funding options. Sygma provides all required documentation to support funding applications.',
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Competence',
        title: 'Trained and Competent Operatives',
        desc: 'Formal safe dig assessment ensures operatives meet competence standards for safe excavation around buried utilities.',
      },
      {
        eyebrow: 'Process',
        title: 'Safe System of Work',
        desc: 'Classroom and practical training covers complete safe dig process from planning through site inspection, locating, excavation and completion.',
      },
      {
        eyebrow: 'Planning',
        title: 'Service Plan Checks',
        desc: 'Reading, interpreting and cross-checking buried service drawings, understanding plan limitations and practical site verification.',
      },
      {
        eyebrow: 'Equipment',
        title: 'Correct Use of Locating Equipment',
        desc: 'Training in CAT and Genny operation as part of the complete safe dig methodology.',
      },
      {
        eyebrow: 'Excavation',
        title: 'Safe Excavation Practice',
        desc: 'Trench support, ground conditions, hazard identification, and safe techniques around exposed utilities.',
      },
      {
        eyebrow: 'Records',
        title: 'Evidenced Training Records',
        desc: 'Assessment documentation of all 24 theory and 15 practical criteria for compliance and audit.',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'Safe-Dig-03', alt: 'ProQual CAT2 safe excavation and hazard management training' },
        { src: 'Safe-Dig-09', alt: 'Delegates learning safe digging techniques around buried utilities' },
        { src: 'Safe-Dig-01', alt: 'ProQual CAT2 practical safe dig assessment on site' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'Safe-Dig-05', alt: 'ProQual CAT2 safe excavation training with buried utility exposure' },
      ],
    },
  ],

  faqs: [
    {
      q: 'How many criteria does ProQual CAT2 cover?',
      a: 'ProQual CAT2 covers 24 individual theory criteria (T1-T24) and 15 individual practical criteria across four assessment stages (P1.1, P1.2, P2.1-P2.5, P3.1-P3.5, P4.1-P4.3). Every criterion is assessed independently. There is no aggregated pass mark that allows a weak area to be masked by strong performance elsewhere. Completing all criteria demonstrates competence across the full scope of safe excavation practice.',
    },
    {
      q: 'Do we need to hold ProQual CAT1 before attending ProQual CAT2?',
      a: 'ProQual CAT1 or EUS CAT1 (or an equivalent utility locating qualification) is strongly recommended as a pre-requisite. There is no formal entry requirement, but ProQual CAT2 includes on-site locating work as part of the safe dig assessment. Delegates who are not comfortable operating a CAT and Genny locator will find the practical element difficult. The entry level for this training course assumes basic understanding of utility avoidance principles.',
    },
    {
      q: 'Can ProQual CAT2 be delivered on the same day as ProQual CAT1?',
      a: 'For most groups, combining CAT1 and CAT2 in a single day is not recommended due to the breadth of content and the on-site practical requirements of both qualifications. However, Sygma Solutions can design a two-day combined programme for groups who need both qualifications. Contact us to discuss your specific requirements.',
    },
    {
      q: 'Is ProQual CAT2 better than EUS CAT2?',
      a: 'Neither is universally better. The right qualification depends on the competence framework your organisation uses. ProQual tends to be preferred in regulated sectors where independent certification matters. EUS is widely recognised across utility companies and private contractors. Both meet BS 8475:2015 standard. Discuss with your training provider which suits your team\'s needs.',
    },
    {
      q: 'What practical assessment is involved?',
      a: 'ProQual CAT2 includes an on-site practical assessment that covers safe digging technique, hazard identification, and CAT/Genny operation. Delegates must demonstrate competence across multiple real-world scenarios. The practical element runs concurrently with the theory delivery. You\'ll be assessed using the CAT and Genny in a controlled field setting.',
    },
    {
      q: 'How long does ProQual CAT2 take?',
      a: 'ProQual CAT2 is typically delivered as a two-day course (16 hours). This allows sufficient time for both theory and practical elements to be covered thoroughly without rushing. Some organisations may deliver it across three days with shorter daily sessions. Sygma Solutions can discuss flexible scheduling options.',
    },
    {
      q: 'Is ProQual CAT2 suitable for supervisors and managers?',
      a: 'Yes. ProQual CAT2 is designed for anyone involved in safe excavation work, including site supervisors, managers, and ground workers. The breadth of criteria (24 theory, 15 practical) ensures comprehensive coverage of safe practice across all roles. Supervisors particularly benefit from the assessment planning and hazard management criteria.',
    },
    {
      q: 'Can we run ProQual CAT2 in-house at our organisation?',
      a: 'Only approved training providers can deliver ProQual qualifications. Sygma Solutions is an approved provider and can deliver ProQual CAT2 at your site if you have suitable facilities (classroom space and an area safe for practical work with locating equipment). Contact us to discuss your requirements.',
    },
  ],

  cta: {
    title: 'Ready to Enhance Your Team?',
    description: 'ProQual CAT2 certification demonstrates genuine competence in safe excavation. Sygma Solutions delivers this advanced qualification with experienced instructors and flexible scheduling.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
  },
};
