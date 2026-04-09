import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

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
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'Manufacturer-Specific Locator Training: vScan, CScope, and Other Pipe Locators',
    sub: 'One day. Up to eight delegates. Theory and practical training tailored to your specific pipe and cable locating equipment, using your own kit on a representative site. Multiple certification options available.',
    image: 'CAT4-and-Genny-50',
    alt: 'Manufacturer-specific cable locator training with CAT4 and Genny equipment',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Manufacturer-Specific Locator Training' },
    ],
  },

  schemas: {
    course: {
      name: 'Manufacturer-Specific Locator Training: vScan, CScope, and Other Pipe Locators',
      description: 'One day. Up to eight delegates. Theory and practical training tailored to your specific pipe and cable locating equipment, using your own kit on a representative site. Multiple certification options available.',
      url: '/courses/manufacturer-locator-training',
      credential: 'Manufacturer Locator Training Certificate',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Manufacturer-Specific Locator Training' },
    ],
    includeFaqSchema: true,
  },

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Experienced Locator Operators',
        desc: 'Those who already hold EUS CAT1 or equivalent and want manufacturer-specific advanced training on their particular equipment model.',
      },
      {
        title: 'Equipment Fleet Managers',
        desc: 'Professionals responsible for specifying, maintaining and getting the most from their organisation\'s locator fleet.',
      },
      {
        title: 'Organisations With Specialist Equipment',
        desc: 'Companies that have invested in specific manufacturer equipment and want their teams trained on its full capability.',
      },
      {
        title: 'Anyone Transitioning to New Equipment',
        desc: 'Operators moving from one manufacturer\'s locator to another who need structured training on the new platform.',
      },
    ],
  },

  infoBar: [
    { label: 'Duration', value: '1 day (09:00 to approx 15:30)' },
    { label: 'Max Delegates', value: '8 per course' },
    { label: 'Certificate', value: 'In-house, EUS, ProQual, or Level 2' },
    { label: 'Assessment', value: 'Written, 70% pass mark' },
    { label: 'Delivery', value: 'In-house, nationwide UK' },
  ],

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-41', alt: 'Manufacturer-specific locator training - practical session' },
        { src: 'CAT4-and-Genny-55', alt: 'Manufacturer-specific locator training - hands-on assessment' },
        { src: 'CAT4-and-Genny-65', alt: 'Manufacturer-specific locator training - on-site delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-10', alt: 'Manufacturer locator training practical demonstration' },
        { src: 'CAT4-and-Genny-45', alt: 'Locator equipment training session' },
        { src: 'CAT4-and-Genny-60', alt: 'Hands-on manufacturer locator assessment' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-46', alt: 'Utility locator training with electromagnetic equipment' },
        { src: 'CAT4-and-Genny-55', alt: 'On-site locator training practical assessment' },
        { src: 'CAT4-and-Genny-61', alt: 'Manufacturer-specific locator training session' },
      ],
    },
  ],

  about: {
    eyebrow: 'Training for Your Specific Equipment',
    title: 'When Generic CAT Training Is Not Enough',
    paragraphs: [
      'Not every organisation uses a Radiodetection CAT4 and Genny4. Teams working with vScan sonde locators, CScope systems, or other makes need training that is built around the specific equipment they actually use on site.',
      'This one-day course is bespoke by design. Sygma\'s trainers work from the electromagnetic principles upward, building a programme around your specific locator\'s controls, modes, signal generator, and data output. The Genny-First methodology that sits at the core of all Sygma training is adapted to your equipment. The theory session covers how your locator works and why it behaves the way it does in different conditions. The practical element puts delegates on site with their own kit, working through real location tasks and problem scenarios.',
      'Certification is flexible. You can choose from an in-house Sygma certificate, an EUS certificate, a ProQual certificate, or a Level 2 qualification. The course content is the same regardless of the certification route. What differs is the certificate your delegates receive at the end.',
      'The course concludes with a written assessment at a 70% pass mark. A verbal assessment alternative is available for delegates with dyslexia or other reading difficulties. This must be requested at booking.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '1 day (09:00 to approximately 15:30, including breaks)' },
        { label: 'Format', value: 'In-house at your site' },
        { label: 'Max Delegates', value: '8 per course' },
        { label: 'Certificate', value: 'In-house, EUS, ProQual, or Level 2 (your choice)' },
        { label: 'Assessment', value: 'Written assessment, 70% pass mark (verbal alternative available)' },
        { label: 'Equipment', value: 'Delegates must bring their own locator; 1 signal generator with accessories provided per course' },
        { label: 'Delivery', value: 'Nationwide UK' },
        { label: 'Pricing', value: 'Contact Sygma for a tailored quotation' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Theory Built Around Your Equipment',
      subheading: 'The classroom programme covers the electromagnetic theory that underpins how your locator works, the specific controls and modes on your make and model, and the practical knowledge delegates need to use it correctly in the field.',
      items: [
        'Legislation and guidance: HSG47, company-specific requirements, and the legal duty to locate before excavating',
        'Electromagnetic induction: the principles behind how your locator detects buried metallic utilities',
        'Signal types and frequencies used by your specific equipment and when to use each',
        'Equipment controls and operating modes: understanding what every control does and why',
        'Signal generator application: correct connection techniques, frequency selection, and ground coupling',
        'Signal distortion and interference: why signals behave unexpectedly and how to recognise and manage this',
        'Equipment limitations: what your locator cannot detect, and the situations where it will give misleading readings',
        'Depth estimation: how your equipment calculates depth and how to verify and test readings',
        'Common errors and bad habits: what incorrect technique looks like and why it creates risk',
        'Permit to dig and risk assessment: requirements before excavation, and what a compliant pre-dig check looks like',
      ],
    },
    practical: {
      heading: 'Hands-On With Your Own Equipment',
      subheading: 'The practical element takes place at or near the training room on a representative site with buried metallic utilities present. Delegates work with their own locator throughout, building competence with the kit they will use on site after the course.',
      items: [
        'Equipment function checks before any location work begins',
        'Signal generator connection and setup: correct technique for your specific transmitter',
        'Locating in all available modes, confirming service routes and cross-checking results',
        'Depth estimation: taking readings, testing them, and understanding the margin for error',
        'Induction techniques: blind sweeps, effective nulling, and identifying signal quality',
        'Problem locates: working through challenging scenarios where signal quality is compromised',
        'Permit to dig completion before practical assessment commences',
        'Multiple choice questions (MCQs) at the end of the programme',
      ],
    },
  },

  siteRequirements: {
    items: [
      { label: 'Equipment', detail: 'Each delegate must bring their own pipe or cable locator (this is the equipment the course is built around)' },
      { label: 'Signal Generator', detail: 'Sygma provides one signal generator with a full set of connection accessories per course' },
      { label: 'Batteries', detail: 'Delegates should bring spare batteries for their locator and any associated transmitter where applicable' },
      { label: 'Multiple Models', detail: 'If delegates use multiple different makes or models, contact Sygma at booking to confirm this can be accommodated in a single session' },
      { label: 'Training Room', detail: 'Meeting or conference room with seating, projector or screen, and welfare facilities' },
      { label: 'Site Access', detail: 'An area near the training room with at least two or three detectable buried metallic utilities' },
      { label: 'Utility Records', detail: 'STATS plans or site utility records for the practical area, provided by the client in advance' },
      { label: 'PPE', detail: 'Delegates must wear appropriate PPE throughout the site element' },
      { label: 'Dig Area', detail: 'Live dig area or access to a representative working area for problem locate scenarios' },
    ],
    note: 'Because this course is built around your specific equipment, Sygma needs the make and model of every locator delegates will bring before the training date is confirmed. This allows the trainer to prepare the correct session content and confirm that the signal generator being provided is compatible. Please supply this information at the time of enquiry.',
  },

  certRoutes: {
    title: 'What You Get',
    items: [
      { title: 'Manufacturer Training Certificate (specific to your equipment model)', desc: '' },
      { title: 'Written Assessment Record', desc: '' },
      { title: 'Practical Assessment Record', desc: '' },
      { title: 'Equipment-Specific Reference Guide', desc: '' },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Equipment-Specific Expertise',
        title: 'In-depth training on specific locator models your team uses.',
        desc: 'Not generic CAT training. Built around your vScan, CScope, or other equipment\'s specific controls and modes.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Our trainers understand diverse equipment and can adapt training to your kit.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Structured on-site practical in real conditions.',
        desc: 'Delegates work with their own equipment on site, building confidence with the kit they use daily.',
      },
      {
        eyebrow: 'Independent',
        title: 'No surveys, no equipment, no manufacturer relationships.',
        desc: 'Objective assessment without pressure from equipment manufacturers.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'Delivered at your site, travel included.',
        desc: 'In-house training using your own equipment and your own utilities for practical work.',
      },
      {
        eyebrow: 'Flexible Certification',
        title: 'Choose in-house, EUS, ProQual, or Level 2 certification.',
        desc: 'Same high-quality training, your choice of certificate at the end.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical. CITB-registered employers may be able to access Employer Network funding towards training costs. Equipment-specific training is recognised as professional development supporting your team\'s competency.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Related Training Courses',
    items: [
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT1',
        desc: 'The foundation qualification for utility location. Complementary to manufacturer-specific training.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT2 Safe Dig',
        desc: 'Safe excavation and permit requirements. Essential for teams using locators in the field.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'Plans and Process Training',
        desc: 'Master utility plan interpretation. The first step before any locating work begins.',
        href: '/courses/plans-and-process',
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
      q: 'How is this different from EUS CAT1 training?',
      a: 'The EUS qualification is designed for any kind of locator but is not locator-specific. The certificate you receive does not qualify you on a specific model. This manufacturer-specific course is for organisations that want training built around the specific controls, modes, and signal generator of the equipment their team actually uses. The Genny-First methodology is the same across both. The difference is that this course is tailored to your kit.',
    },
    {
      q: 'What certification options are available?',
      a: 'You can choose from four certification routes: an in-house Sygma certificate, an EUS certificate, a ProQual certificate, or a Level 2 qualification. The course content is the same regardless of which route you choose. The certification decision is yours and can be discussed at booking.',
    },
    {
      q: 'Can the course cover multiple different makes of locator?',
      a: 'It depends on the makes involved. Where delegates bring different models within the same product family, this is usually straightforward. Where delegates bring fundamentally different systems from different manufacturers, the trainer needs to know in advance so the session can be structured to cover both effectively. Contact Sygma at enquiry with the full list of equipment that will be in the room.',
    },
    {
      q: 'What if we do not have a suitable site?',
      a: 'The practical element requires buried metallic utilities near the training room. If your site does not have this, contact Sygma to discuss whether an alternative location can be used. Sygma\'s Wigan training centre has live utility demonstration rigs and may be suitable depending on your equipment and travel arrangements.',
    },
    {
      q: 'Is a verbal assessment available?',
      a: 'Yes. A verbal assessment alternative is available for delegates with dyslexia or other reading difficulties. This must be requested at the time of booking so that the trainer can prepare appropriately. The verbal assessment covers the same content at the same 70% pass mark threshold as the written paper.',
    },
    {
      q: 'Can we combine this with other Sygma training on the same day?',
      a: 'Not typically. The manufacturer-specific course runs a full day and uses the available time for both theory and practical work. If your team has additional training needs, Sygma can discuss scheduling a combined visit where different training elements are delivered across multiple days. Contact us to discuss your full training requirements.',
    },
  ],

  cta: {
    title: 'Enquire About Manufacturer-Specific Locator Training',
    description: 'In-house at your site anywhere in the UK. Up to eight delegates. Tell us the make and model of your equipment and we will confirm compatibility and provide a tailored quotation.',
    primaryLabel: 'Enquire About This Course',
    primaryHref: '/contact',
    secondaryLabel: 'View EUS CAT1 Training',
    secondaryHref: '/courses/eus-cat1',
  },
};
