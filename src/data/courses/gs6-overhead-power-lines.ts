import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'gs6-overhead-power-lines',

  metadata: {
    title: 'GS6 Overhead Power Lines Training | Sygma Solutions',
    description: 'GS6 overhead power lines awareness and safe working training. Covers approach distances, risk assessment and safe systems of work near overhead lines.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/gs6-overhead-power-lines' },
    openGraph: {
      title: 'GS6 Overhead Power Lines Training | Sygma Solutions',
      description: 'GS6 overhead power lines awareness and safe working training. Covers approach distances, risk assessment and safe systems of work near overhead lines.',
      url: 'https://sygma-solutions.com/courses/gs6-overhead-power-lines',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'GS6 Overhead Power Lines: Awareness and Safe Working Training',
    sub: 'Half-day classroom awareness or full-day with practical site element. Written assessment with 70% pass mark. GS6 fourth edition and ENATS 43-8. Delivered in-house at your site, nationwide UK.',
    image: 'CAT4-and-Genny-45',
    alt: 'GS6 overhead power lines awareness training for safe working near electrical hazards',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'GS6 Overhead Power Lines' },
    ],
  },

  schemas: {
    course: {
      name: 'GS6 Overhead Power Lines Training',
      description: 'GS6 overhead power lines awareness and safe working training. Covers approach distances, risk assessment and safe systems of work near overhead lines.',
      url: '/courses/gs6-overhead-power-lines',
      credential: 'GS6 Overhead Power Lines Certificate',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'GS6 Overhead Power Lines' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Formats Available', value: 'Half-day or Full-day' },
    { label: 'Assessment', value: 'Written, 70% pass mark' },
    { label: 'Standards Covered', value: 'GS6 4th Edition, ENATS 43-8' },
    { label: 'Certificate', value: 'Certificate of attendance' },
    { label: 'Delivery', value: 'In-house, nationwide UK' },
  ],

  about: {
    eyebrow: 'Overhead Line Hazard Training',
    title: 'Understanding the Risk Above the Ground',
    paragraphs: [
      'Overhead power lines kill and injure workers every year. Unlike buried services, overhead conductors are visible, but that visibility creates complacency. The consequences of contact are immediate and almost always fatal. GS6 exists to give workers and managers the knowledge to recognise the hazard, plan their work correctly, and apply the control measures that prevent contact from occurring.',
      'Sygma\'s GS6 Overhead Power Lines course is delivered against the GS6 fourth edition and ENATS 43-8. It is available in two formats: a half-day classroom and assessment session for teams that need the theoretical grounding, and a full-day programme that adds a practical site element covering the use of the supa rule and the application of control measures in a real working environment.',
      'Both formats include a written assessment with a 70% pass mark. A verbal assessment is available as an alternative for delegates with dyslexia or other reading difficulties (contact Sygma at the time of booking to arrange this).',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Formats', value: 'Half-day (classroom + assessment) or Full-day (classroom + site practical + assessment)' },
        { label: 'Standards', value: 'GS6 fourth edition and ENATS 43-8' },
        { label: 'Assessment', value: 'Written assessment, 70% pass mark (verbal alternative available)' },
        { label: 'Certificate', value: 'Certificate of attendance on successful completion' },
        { label: 'Format', value: 'In-house at your site' },
        { label: 'Delivery', value: 'Nationwide UK' },
        { label: 'Pricing', value: 'Contact Sygma for a tailored quotation' },
      ],
    },
  },

  courseContent: {
    eyebrow: 'Classroom Content',
    title: 'What the Classroom Element Covers',
    theory: {
      heading: 'Classroom Programme',
      subheading: 'Common to both half-day and full-day formats',
      items: [
        'Legislation and guidance: Health and Safety at Work Act, CDM, Electricity at Work Regulations, and the role of GS6',
        'Consequences of overhead line contact: live incidents, statistics, and what happens in a contact event',
        'GS6 fourth edition: requirements, application, and what it means for your work activities',
        'ENATS 43-8: network specifications and what they tell you about the lines on your site',
        'Tower and structure types: wood poles, lattice towers, H-frames, and how to identify them',
        'Voltage classifications: extra-high, high, and low voltage overhead systems and what they look like',
        'Conductor sag: why conductors droop, what affects sag, and why this matters for approach distances',
        'Safe approach distances and the exclusion zone: the three-zone model and how to calculate required clearances',
        'Risk assessments for work near overhead lines: what they must contain and who carries them out',
        'Control measures: goal posts, crossbars, suspended loads restrictions, spotter roles, and danger notices',
        'Emergency procedures: what to do in a contact or near-miss incident, who to call, and how to manage casualties safely',
      ],
    },
    practical: {
      heading: 'Site Practical (Full-Day Format)',
      subheading: 'Applying the Theory on Site',
      intro: 'The full-day programme adds a practical element where delegates apply what they have learned in a real or representative outdoor environment. Sygma trainers use a flexible approach, adapting site activities to the location available.',
      items: [
        'Reading and interpreting overhead line route drawings and DNO records',
        'Identifying tower and structure types in the field',
        'Estimating voltage from visual inspection of infrastructure',
        'Using the supa rule to take conductor height measurements',
        'Applying the three-zone model to a specific site scenario',
        'Setting out goal posts and crossbars at the correct clearance heights',
        'Completing a risk assessment for a representative work activity near overhead lines',
        'Discussion of spotter responsibilities and communication requirements on site',
      ],
    },
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-46', alt: 'GS6 overhead power lines training - practical session' },
        { src: 'CAT4-and-Genny-58', alt: 'GS6 overhead power lines training - hands-on assessment' },
        { src: 'Safe-Dig-15', alt: 'GS6 overhead power lines safety training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-41', alt: 'GS6 overhead power lines awareness training' },
        { src: 'CAT4-and-Genny-55', alt: 'Overhead power line safety practical session' },
        { src: 'Safe-Dig-15', alt: 'GS6 compliance training demonstration' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'CAT4-and-Genny-53', alt: 'GS6 overhead power lines training - live training environment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-43', alt: 'GS6 training with site safety equipment' },
        { src: 'CAT4-and-Genny-55', alt: 'Overhead power lines safety assessment' },
        { src: 'Safe-Dig-10', alt: 'On-site GS6 compliance practical training' },
      ],
    },
  ],

  formats: {
    eyebrow: 'Course Formats',
    title: 'Choose the Format That Fits Your Needs',
    rows: [
      {
        format: 'Half-Day Awareness',
        duration: 'Half-day',
        maxDelegates: 'Classroom and written assessment only',
        assessment: 'The half-day format covers the full classroom programme: legislation, GS6 fourth edition, voltage classifications, conductor behaviour, safe approach distances, and control measures. Delegates complete a written assessment before the session ends.',
      },
      {
        format: 'Full-Day with Practical',
        duration: 'Full-day',
        maxDelegates: 'Classroom, site practical, and written assessment',
        assessment: 'The full-day format adds a practical site element to the classroom programme. Delegates use the supa rule to measure conductor heights in the field, identify tower and structure types, apply safe approach distances on site, and set up the control measures required before work can begin.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Related Training Courses',
    intro: 'Build a comprehensive safety programme across all utility avoidance hazards.',
    items: [
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT1',
        desc: 'Underground services avoidance. The complement to overhead line safety in a complete hazard awareness programme.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT2 Safe Dig',
        desc: 'Safe excavation techniques for buried services. Essential knowledge for teams working in multi-hazard environments.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'Service Coordinator (USC)',
        desc: 'Coordination and oversight of underground service avoidance. Essential for site supervisors and managers.',
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

  whySygma: {
    items: [
      {
        eyebrow: 'GS6 Compliance',
        title: 'Meets HSE GS6 guidance requirements for working near overhead power lines.',
        desc: 'Delivered against the GS6 fourth edition and ENATS 43-8. Your team leaves with documented competency.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Trainers who understand the hazard and how to communicate it effectively to site teams.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Structured on-site practical in real conditions.',
        desc: 'Full-day format includes practical measurement and control measure application on site.',
      },
      {
        eyebrow: 'Independent',
        title: 'No surveys, no equipment, no manufacturer relationships.',
        desc: 'Impartial delivery focused entirely on safety, not commercial interests.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'Delivered at your site, travel included.',
        desc: 'In-house training at your location, with access to your local overhead infrastructure if available.',
      },
      {
        eyebrow: 'Two Formats',
        title: 'Half-day awareness or full-day with practical site element.',
        desc: 'Choose the format that matches your team\'s needs and responsibilities.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical.',
      'CITB-registered employers may be able to access Employer Network funding towards training costs. GS6 training is recognised as essential health and safety competency development.',
    ],
  },

  faqs: [
    {
      q: 'Which format is right for my team?',
      a: 'The half-day awareness format is suitable for teams that need the theoretical knowledge: understanding the hazard, the legislation, the control measures, and what the standards require. The full-day format is appropriate where delegates will have a direct role in applying control measures on site, operating plant near overhead lines, or conducting risk assessments. If you are unsure, contact Sygma and we will advise based on your team\'s roles and responsibilities.',
    },
    {
      q: 'What is the supa rule and why is it relevant?',
      a: 'The supa rule is a telescopic measuring pole used to determine the height of overhead conductors at a safe distance from the line. It allows the measured clearance height to be compared against the known sag curve data for that type of line, which in turn determines the maximum safe height for plant and equipment working in the vicinity. The supa rule is used as part of the risk assessment process under GS6 and is covered in the practical element of the full-day format.',
    },
    {
      q: 'What does ENATS 43-8 cover?',
      a: 'ENATS 43-8 is the Energy Networks Association technical specification that sets out the minimum clearance distances for overhead line construction in the UK. It provides the technical basis for the approach distances used in GS6. Understanding ENATS 43-8 allows delegates to understand why specific clearance distances are set as they are, rather than simply memorising numbers.',
    },
    {
      q: 'Does passing this course give EUS recognition?',
      a: 'No. The GS6 Overhead Power Lines course is an awareness and training programme delivered against the GS6 fourth edition. It does not form part of the EUSR (Energy & Utility Skills Register) qualification framework. Delegates who successfully complete the written assessment receive a certificate of attendance from Sygma.',
    },
    {
      q: 'Can a verbal assessment be arranged?',
      a: 'Yes. Sygma offers verbal assessment as an alternative to the written paper for delegates with dyslexia or other reading difficulties. This must be requested at the time of booking so that the trainer can prepare accordingly. The verbal assessment covers the same content and is conducted at the same pass mark threshold.',
    },
    {
      q: 'Can you deliver this alongside other Sygma training on the same day?',
      a: 'Yes, depending on the format. The half-day awareness programme can be combined with other half-day modules where your team has multiple training needs in the same visit. Contact Sygma to discuss combining GS6 awareness with other elements of your utility safety training programme.',
    },
  ],

  cta: {
    title: 'Enquire About GS6 Overhead Power Lines Training',
    description: 'Half-day awareness or full-day with site practical. Delivered in-house at your site anywhere in the UK. Contact us to discuss your team\'s requirements and receive a tailored quotation.',
    primaryLabel: 'Enquire About This Course',
    primaryHref: '/contact',
    secondaryLabel: 'View All Utility Avoidance Training',
    secondaryHref: '/training/cable-location-avoidance',
  },
};
