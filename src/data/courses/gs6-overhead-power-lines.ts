import type { CoursePageData } from './types';

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
    },
  },

  hero: {
    eyebrow: 'Safety Training',
    headline: 'GS6 Overhead Power Lines: Awareness and Safe Working Training',
    sub: 'Half-day or full-day training covering overhead power lines, approach distances, risk assessment, and safe working practices. GS6 compliant.',
    image: 'New-Landscape-04',
    alt: 'GS6 overhead power lines safety training',
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
      duration: '½ or 1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'GS6 Overhead Power Lines' },
    ],
    includeFaqSchema: true,
  },

  infoBar: [
    { label: 'Duration', value: 'Half day (awareness) or full day (comprehensive)' },
    { label: 'Format', value: 'On-site at your location' },
    { label: 'Max Delegates', value: '12 per session' },
    { label: 'Assessment', value: 'Theory assessment' },
    { label: 'Certificate', value: 'Certificate of attendance or competency' },
  ],

  about: {
    eyebrow: 'Safe Working Near Overhead Power Lines',
    title: 'Preventing Contact with Overhead Power Lines',
    paragraphs: [
      'Overhead power lines pose a serious hazard on many construction and utility sites. Electrocution, arc flash, and serious injury are real risks when working or moving equipment near overhead lines. GS6 training covers the science of electrical hazards, the identification of different line types, approach distances, and the safe systems of work that prevent contact.',
      'The GS6 standard defines the competency requirements for safe working near overhead power lines. This training covers the identification of different voltage lines, safe approach distances, the role of the appointed person, exclusion zones, permits to work, and emergency procedures if contact occurs.',
      'Choose the half-day awareness option for general site awareness, or the full-day comprehensive programme for teams that regularly work near overhead lines or require formal competency assessment.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: 'Half day (4 hours) or full day (8 hours)' },
        { label: 'Format', value: 'On-site at your location' },
        { label: 'Max Delegates', value: '12 per session' },
        { label: 'Assessment', value: 'Theory test (full day)' },
        { label: 'Certificate', value: 'Certificate of attendance (half day) or competency (full day)' },
        { label: 'Framework', value: 'GS6 compliant' },
        { label: 'Prerequisites', value: 'None' },
      ],
    },
  },

  courseContent: {
    theory: {
      heading: 'Course Content',
      subheading: 'Overhead Power Lines Awareness and Safety',
      items: [
        'Identifying different types of overhead power lines (distribution, transmission, rural, urban)',
        'Understanding voltage and electrical hazard: the dangers of AC and DC lines',
        'GS6 standard and competency requirements for safe working near overhead lines',
        'Approach distances: understanding safe working distances for different line types and voltages',
        'The appointed person role and responsibilities',
        'Risk assessment near overhead lines',
        'Safe systems of work: work permits, exclusion zones, and barriers',
        'Emergency procedures if contact with overhead lines occurs',
        'First aid for electrical contact and electrocution',
        'Equipment and machinery: understanding clearance requirements for cranes, platforms, and vehicles',
        'Site-specific hazards and hazard identification',
      ],
    },
    practical: {
      heading: 'Training Delivery Options',
      items: [],
    },
  },

  formats: {
    eyebrow: 'Training Formats',
    title: 'Half-Day Awareness or Full-Day Competency',
    rows: [
      {
        format: 'Half-Day Awareness',
        duration: '4 hours',
        maxDelegates: '12',
        assessment: 'None (awareness only)',
      },
      {
        format: 'Full-Day Comprehensive',
        duration: '8 hours',
        maxDelegates: '12',
        assessment: 'Theory test and practical scenarios',
      },
    ],
  },

  photoStrips: [
    {
      images: [
        { src: 'New-Landscape-04', alt: 'GS6 overhead power lines safety training' },
        { src: 'New-Landscape-07', alt: 'Overhead lines risk assessment training' },
        { src: 'New-Landscape-07', alt: 'Safe working near overhead power lines' },
      ],
      variant: 'grid',
    },
  ],

  cta: {
    title: 'Book Your GS6 Overhead Power Lines Training',
    description: 'On-site at your location. Half-day awareness or full-day competency programme. Contact us with your team size and preferred dates.',
    primaryLabel: 'Get in Touch',
    primaryHref: '/contact',
  },

  faqs: [
    {
      q: 'What is the difference between half-day awareness and full-day competency training?',
      a: 'The half-day awareness session provides general understanding of overhead line hazards and safe working principles. The full-day competency programme includes the awareness content plus more detailed theory, case studies, risk assessment practice, and a formal assessment to confirm competency in the GS6 role.',
    },
    {
      q: 'Is GS6 training mandatory for all site workers?',
      a: 'GS6 training is mandatory for anyone whose work could bring them within the defined approach distance of overhead power lines. This includes site managers, supervisors, crane operators, and any team member working on sites with overhead lines. Check with your organisation\'s health and safety requirements.',
    },
    {
      q: 'Do we need to provide any site equipment for the training?',
      a: 'No specialist equipment is required. The training takes place in a suitable meeting room on your site. We will conduct a site survey to identify any overhead lines near your working areas during the training.',
    },
    {
      q: 'Can this training be delivered online?',
      a: 'The GS6 training can include an online theory component, but the full-day competency programme includes site assessment and practical scenarios which require on-site delivery. Contact us to discuss blended learning options.',
    },
    {
      q: 'What if we have existing competency but need refresher training?',
      a: 'Refresher and recertification training is available. If your team are already GS6-trained, we can deliver focused refresher sessions covering changes in standards, site-specific hazards, or competency confirmation. Contact us to discuss your specific needs.',
    },
    {
      q: 'How often should GS6 training be refreshed?',
      a: 'Most organisations refresher train every 2-3 years. Some regulatory bodies and client specifications require annual refresher. Check your own organisational requirements and your client specifications. Sygma can schedule refresher training at your preferred interval.',
    },
  ],
};
