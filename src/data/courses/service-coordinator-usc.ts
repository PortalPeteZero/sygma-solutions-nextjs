import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'service-coordinator-usc',

  metadata: {
    title: 'Service Coordinator USC Training | PAS128 | Sygma',
    description: 'Service Coordinator USC training covering utility service coordination roles and responsibilities. For teams managing works near buried services.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/service-coordinator-usc' },
  },

  hero: {
    eyebrow: 'Utility Service Coordination',
    headline: 'Service Coordinator USC Training: Manage Works Near Buried Services Safely',
    sub: 'Two-day training covering utility service coordination roles, permit systems, risk assessment, and safe systems of work near buried services. PAS 128 compliant.',
    image: 'Safe-Dig-01',
    alt: 'Service Coordinator USC training for utility service coordination',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Service Coordinator USC Training' },
    ],
  },

  schemas: {
    course: {
      name: 'Service Coordinator USC Training',
      description: 'Two-day training covering utility service coordination roles and responsibilities. For teams managing works near buried services.',
      url: '/courses/service-coordinator-usc',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Service Coordinator USC Training' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Duration', value: '2 days (on-site)' },
    { label: 'Format', value: 'In-house at your site' },
    { label: 'Max Delegates', value: '8 per course' },
    { label: 'Assessment', value: 'Practical and theory assessment' },
    { label: 'Certificate', value: 'Service Coordinator Certificate' },
  ],

  about: {
    eyebrow: 'Coordinating Works Near Buried Services',
    title: 'The Role of the Utility Service Coordinator',
    paragraphs: [
      'When excavation or construction works take place near underground utilities, someone must be accountable for managing those risks. The utility service coordinator role is that accountability. From initial risk assessment through to site supervision and permit control, the coordinator ensures that all works near buried services follow safe systems of work.',
      'This two-day course covers the full USC role: understanding utility records, interpreting service plans, managing the location process, implementing traffic management and exclusion zones, and supervising the excavation and service management phases. By the end of the programme, delegates are competent to take on USC responsibilities on site, with full understanding of both their authority and their legal obligations.',
      'The course is aligned with PAS 128 principles and is suitable for site supervisors, project managers, and anyone taking on the USC role for the first time, or refreshing their competency in an established role.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '2 days (classroom and on-site)' },
        { label: 'Format', value: 'In-house at your site' },
        { label: 'Max Delegates', value: '8 per course' },
        { label: 'Assessment', value: 'Theory and practical assessment' },
        { label: 'Certificate', value: 'Service Coordinator Certificate' },
        { label: 'Framework', value: 'PAS 128 aligned' },
        { label: 'Prerequisites', value: 'None, but some site experience beneficial' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Day One',
      subheading: 'Utility Service Coordination Theory',
      items: [
        'The utility service coordinator role, responsibilities, and legal obligations',
        'PAS 128 standard and principles of safe working near buried services',
        'Understanding utility records and service drawings',
        'Risk assessment: identifying hazards and evaluating risk of utility strikes',
        'Locating methods and equipment: selecting and requesting the right location process',
        'The locate request and commissioning the cable and pipe location survey',
        'Interpreting locate results and understanding the locate drawing',
        'Permit systems and formal approval for works near services',
        'Safe systems of work: exclusion zones, barriers, and traffic management',
        'Emergency procedures and incident reporting',
        'Site-specific hazards: overhead lines, low-pressure pipes, telecommunications',
      ],
    },
    practical: {
      heading: 'Day Two',
      subheading: 'Practical Application and On-Site Assessment',
      intro: 'The second day moves into site-based activity and practical assessment.',
      items: [
        'Conducting a pre-work site survey and utility plan review',
        'Commissioning location work and communicating with the locating team',
        'Implementing traffic management and exclusion zones',
        'Supervising exposure and safe digging techniques',
        'Managing the permit to dig process',
        'Overseeing contact with exposed services',
        'Documenting the work and maintaining records',
        'Post-completion sign-off and reinstatement',
        'Practical assessment of USC competency in real site conditions',
      ],
    },
  },

  photoStrips: [
    {
      images: [
        { src: 'Safe-Dig-01', alt: 'Service Coordinator USC training - site assessment' },
        { src: 'Safe-Dig-09', alt: 'Utility service coordination - permit management' },
        { src: 'Safe-Dig-14', alt: 'Service Coordinator on-site competency assessment' },
      ],
      variant: 'grid',
    },
  ],

  cta: {
    title: 'Book Your Service Coordinator Training',
    description: 'Two days on-site at your location. In-house training for site supervisors and project managers stepping into the USC role. Contact us for availability.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
  },

  faqs: [
    {
      q: 'What qualifications do I need before taking the Service Coordinator USC course?',
      a: 'No formal qualifications are required, but the course assumes basic understanding of site operations and work near utilities. Delegates with some site experience (groundwork, utilities, construction) will get more from the course, but the programme is designed to take someone with no prior USC experience to full competency.',
    },
    {
      q: 'Is the Service Coordinator training PAS 128 accredited?',
      a: 'The training is PAS 128 aligned and covers all elements of the utility service coordinator role as defined in the PAS 128 standard. Delegates receive a Sygma Service Coordinator Certificate. For formal PAS 128 accreditation, additional third-party assessment may be required depending on your organisation\'s requirements.',
    },
    {
      q: 'Can this course be delivered online?',
      a: 'No. The Service Coordinator USC course requires on-site practical assessment and real site conditions. The two days must be delivered at your premises or a suitable location with underground utilities. This ensures practical competency is assessed in realistic conditions.',
    },
    {
      q: 'How often is the Service Coordinator training delivered?',
      a: 'The course can be arranged on flexible dates to suit your team. Contact us with your preferred timeframe and delegate numbers, and we will schedule a session. Multiple sessions can be arranged if you have large teams to train.',
    },
    {
      q: 'Do we need any specific site setup for the practical element?',
      a: 'Yes. The practical element requires access to underground utilities suitable for location work and a safe digging area. Sygma will assess site suitability before booking. If your site is not suitable, we can advise on alternative locations or arrange training at a pre-agreed venue.',
    },
    {
      q: 'Can Service Coordinator training be combined with other Sygma courses?',
      a: 'Yes. Many organisations book Service Coordinator training together with CAT and Genny courses or HSG47 awareness training to provide comprehensive competency across their teams. Contact us to discuss combining courses.',
    },
  ],
};
