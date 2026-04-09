import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'zs-superuser-scottish-water',

  metadata: {
    title: 'ZS Superuser Cat and Genny | Scottish Water | Sygma',
    description: 'Super user cat and genny training for the Scottish Water supply chain. Advanced location, strike investigation and coaching assessment.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/zs-superuser-scottish-water' },
    openGraph: {
      title: 'ZS Superuser Cat and Genny | Scottish Water | Sygma',
      description: 'Super user cat and genny training for the Scottish Water supply chain. Advanced location, strike investigation and coaching assessment.',
      url: 'https://sygma-solutions.com/courses/zs-superuser-scottish-water',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'ZS Superuser: Advanced Location, Strike Investigation, and Coaching for Scottish Water Supply Chain',
    sub: 'Sygma\'s ZS Superuser course is the ZSI-specific super user cat and genny training programme, built for teams working within the Scottish Water supply chain. This advanced training course follows the same structure and standard as the EUS Superuser, mapped to the Zero Strike Initiative framework for locating underground services and buried utilities.',
    image: 'New-Landscape-03',
    alt: 'Scottish Water ZS Superuser cable avoidance training course',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'ZS Superuser: Scottish Water' },
    ],
  },

  schemas: {
    course: {
      name: 'ZS Superuser Cat and Genny Training',
      description: 'Super user cat and genny training course for Scottish Water supply chain. Advanced location, strike investigation and coaching assessment for locating utility services and underground utilities.',
      url: '/courses/zs-superuser-scottish-water',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'ZS Superuser: Scottish Water' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: '21 Years',
      label: 'One Specialism',
      detail: 'Cat and genny training for underground utility location is all we do.',
    },
    {
      value: '70-80%',
      label: 'Increase in Genny Usage',
      detail: 'Measured through CAT Manager data downloads after Sygma genny training.',
    },
    {
      value: 'Proven',
      label: 'Strike Reduction Record',
      detail: 'Clients report measurable reductions in utility strikes after completing cat and genny training courses.',
    },
  ],

  infoBar: [
    { label: 'Duration', value: '2 days (flexible approach)' },
    { label: 'Max Delegates', value: '6 per course' },
    { label: 'Framework', value: 'ZSI Zero Strike Initiative' },
    { label: 'Assessments', value: '3 formal assessments' },
    { label: 'Prerequisite', value: 'EUS CAT1 and EUS CAT2' },
  ],

  about: {
    eyebrow: 'ZSI-Specific Super User Cat and Genny Training',
    title: 'The EUS Superuser Standard, Built for the Scottish Water Supply Chain',
    paragraphs: [
      'The ZS Superuser training course follows the same two-day structure and assessment framework as Sygma\'s EUS Superuser course, with one important difference: the delivery is mapped to the Scottish Water Zero Strike Initiative (ZSI) framework. This cat and genny training teaches delegates how to locate utility services, operate cat and genny equipment to the required standard, and coach others in safe excavation practices.',
      'Scottish Water\'s Zero Strike Initiative sets specific standards for how utility location and avoidance work is planned, documented, and carried out across its supply chain. Delegates learn to use cable avoidance tools (CAT) and signal generators (genny) to locate buried services and underground utilities safely, avoiding danger from underground services during excavation work. The ZSI Operators\' Guide, the minimum locator standard, and Scottish Water\'s company-specific policies are all embedded into the delivery.',
      'Delegates leave with the same advanced capabilities as EUS Superuser completers (advanced location, utility strike investigation, coaching, and assessment competency) but with content, documentation, and case studies specific to Scottish Water operations. The course develops practical skills in operating cat and genny equipment across all modes, interpreting utility drawings, and conducting best practice surveys to locate utility services in complex underground utility networks.',
    ],
    sidebar: {
      eyebrow: 'Course at a Glance',
      items: [
        { label: 'Duration', value: '2 days (no fixed daily timings, flexible approach across both days)' },
        { label: 'Max Delegates', value: '6 per course' },
        { label: 'Prerequisite', value: 'EUSR Category: EUS CAT1 and EUS Safe Dig CAT2 certification' },
        { label: 'Equipment Standard', value: 'Advanced cat and genny equipment minimum (Scottish Water ZSI requirement)' },
        { label: 'Framework', value: 'Scottish Water Zero Strike Initiative (ZSI)' },
        { label: 'Assessments', value: 'Three formal assessments: POW Risk Assessment, Practical Assessment 1, Practical Assessment 2 (coaching)' },
        { label: 'Delivery', value: 'In-house training course at your premises, nationwide UK' },
        { label: 'Pricing', value: 'By quotation. Contact Sygma' },
      ],
    },
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Framework',
        title: 'The ZSI Framework',
        desc: 'Scottish Water\'s Zero Strike Initiative is the framework that governs utility location and avoidance across its supply chain, ensuring compliance with current legislation and guidance for avoiding danger from underground services. It sets minimum standards for cat and genny training, documentation, PPE, survey methodology, and permit management.',
      },
    ],
  },

  courseContent: {
    eyebrow: 'Classroom Content',
    title: 'Knowledge Required to Operate as a ZSI Superuser',
    theory: {
      heading: 'Classroom Content',
      subheading: 'The theory and knowledge required to fulfil the ZS Superuser role: advanced cat and genny training covering location theory, utility strike investigation, CAT Manager data analysis, and the coaching skills and competency needed to assess other operatives against the ZSI standard.',
      items: [
        'Underground service strikes: the risks of hitting buried services, HSG47 guidance, and ZSI requirements for avoiding danger from underground utilities',
        'Permit to break ground: Scottish Water specific requirements, completion and sign-off',
        'Company-specific policies and ZSI safe dig procedures for safe excavation near underground services',
        'ZSI company-specific examples of utility strikes and lessons learned',
        'Buried service plans (STATS): interpretation, inaccuracies, and limitations when locating utility services in the Scottish Water context',
        'How to use utility drawings and plans to plan the correct utility detection technique',
        'Electromagnetic theory: how a cable avoidance tool (CAT) and signal generator (genny) works, limitations, tips and techniques',
        'Myth busting: understanding what cat and genny equipment can and cannot locate',
        'Genny-First methodology: promoting the genny training message and leading by example',
        'Cat and genny controls and operation: correct use of cable avoidance tools and signal generator in all modes to locate utility services',
        'Signal interpretation: locating service joints, changes of direction, and depth estimation',
        'Signal distortion and its effects on location accuracy when locating underground services',
        'Transmitter techniques: dual frequency, capacitance, earth positioning, induction, nulling out, and blind sweeps',
        'Depth estimation and practical instruction on interpreting readings',
        'Complex utility networks: how to plan and execute a complete utility survey to locate buried services',
        'Knowledge-based assessment of cat and genny training competency',
        'CAT Manager: downloading and exporting raw data (CSV and KML files) to identify usage patterns',
        'Importing data into CAT Manager Online and creating line search documents and reports',
        'Analysing raw data: spotting usage patterns and identifying good and poor practice across your team',
        'Utility strike investigation: completing the USAG utility strike form',
        'Coaching others: principles, structure, and ZSI coaching requirements for developing practical skills in cat and genny operation',
      ],
    },
    practical: {
      heading: 'Site Practical',
      subheading: 'ZSI Methodology Applied on a Live Utility Area',
      intro: 'The site practical training is flexible across both days and is conducted on a live utility area with real underground services. All practical work follows ZSI survey methodology (genny first, then passive and all other modes) to locate utility services in line with Scottish Water requirements.',
      items: [
        'Utility drawings, plans and site information used to ascertain indicated underground utility routes before going onto site',
        'Importance of site visual checks including street furniture, HV assets, kiosks, and lamp posts',
        'Correct use of cable avoidance tools (CAT) and signal generator (genny) in all modes to locate buried services',
        'Genny-First methodology: understanding the ZSI requirement and applying cat and genny in the field',
        'Street lighting location using cat and genny equipment',
        'LV service and main tracing, including joint location of underground services',
        'HV cable detection and underground utility location',
        'Communications cable location',
        'Induction sweeps, blind sweeps, and nulling out',
        'Capacitance techniques and earth repositioning',
        'Individual practical assessment (Assessment 1: standard locate to assess competency in locating utility services)',
        'Coaching assessment: delegates coach and assess each other using the Assessment 1 document and the Sygma coaching sheet (Assessment 2)',
        'Coaching competency checks in accordance with ZSI coaching criteria',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'Assessments',
    title: 'Three Formal Assessments Over Two Days',
    items: [
      {
        title: 'POW Risk Assessment',
        desc: 'Each delegate completes their own Point of Work Risk Assessment before the practical cat and genny training begins, identifying risks on site and planning assessment of the work area.',
      },
      {
        title: 'Practical Assessment 1: Standard Locate',
        desc: 'Sygma standard practical assessment that records and documents the delegate\'s skills and competency to operate cat and genny equipment and locate utility services independently in line with ZSI requirements.',
      },
      {
        title: 'Practical Assessment 2: Coaching Assessment',
        desc: 'Delegates use the Assessment 1 document to coach and assess each other on cat and genny operation, supported by the Sygma coaching sheet. The coaching competency criteria include: communicating effectively with the team, considering learning needs, downloading and understanding CAT Manager data, and giving structured guidance and feedback.',
      },
      {
        title: 'Permit to Break Ground',
        desc: 'Each delegate completes a permit to break ground, ideally using the Scottish Water or customer-specific permit form.',
      },
    ],
  },

  whoFor: {
    eyebrow: 'Audience',
    title: 'Who Should Attend',
    items: [
      {
        title: 'Experienced Operatives in the Scottish Water Supply Chain',
        desc: 'Operatives who hold EUS CAT1 and EUS Safe Dig CAT2 certification and are ready to step up to a superuser role. This cat and genny training course is suitable for those who will be coaching, supporting, and assessing their teams on ZSI-compliant surveys to locate utility services and underground utilities.',
      },
      {
        title: 'Supervisors and Team Leaders',
        desc: 'Supervisors and team leaders responsible for coaching their teams in ZSI methodology, conducting documented assessments, investigating utility strikes, and leading by example in the field. The ZS Superuser genny training gives them the advanced knowledge and assessed competency to operate cat and genny equipment and conduct safe excavation guidance effectively.',
      },
      {
        title: 'Companies with Scottish Water Contracts',
        desc: 'Any company in the Scottish Water supply chain that needs to develop internal superuser capability in line with ZSI requirements. This cat and genny training course ensures your superusers are trained, assessed, and documented to the standard Scottish Water expects for locating buried services and underground utilities during construction and excavation work.',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-49', alt: 'ZS Superuser Scottish Water training -- practical session' },
        { src: 'CAT4-and-Genny-61', alt: 'ZS Superuser Scottish Water training -- hands-on assessment' },
        { src: 'Safe-Dig-11', alt: 'Scottish Water utility avoidance site practical' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'CAT4-and-Genny-56', alt: 'ZS Superuser Scottish Water training -- live training environment' },
      ],
    },
  ],

  whySygma: {
    items: [
      {
        eyebrow: 'Scottish Water Approved',
        title: 'Meets Scottish Water ZS standard requirements for utility location competence.',
        desc: 'Cat and genny training mapped specifically to the Zero Strike Initiative framework and ZSI Operators\' Guide for locating utility services.',
      },
      {
        eyebrow: 'Specialist Trainers',
        title: 'Directly employed, ex-surveyors and ex-manufacturers, TAQA qualified.',
        desc: 'Trainers with practical skills and experience in Scottish Water supply chain operations, cat and genny equipment, and ZSI requirements.',
      },
      {
        eyebrow: 'Real Practical Assessment',
        title: 'Structured on-site practical in real conditions.',
        desc: 'Assessment follows ZSI methodology and requirements throughout both days, with delegates assessed on their ability to locate underground services using cat and genny.',
      },
      {
        eyebrow: 'Independent',
        title: 'No surveys, no equipment, no manufacturer relationships.',
        desc: 'Objective cat and genny training course focused on ZSI compliance and best practice, not commercial interests.',
      },
      {
        eyebrow: 'We Come to You',
        title: 'Delivered at your site, travel included.',
        desc: 'In-house cat and genny training at your location anywhere in the UK, using your site utilities and underground services.',
      },
      {
        eyebrow: 'Small Groups',
        title: 'Maximum 6 delegates per course.',
        desc: 'Small groups allow individual attention during coaching assessment, practical instruction, and genny training to develop practical skills.',
      },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB ATO. Contact your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical.',
      'CITB-registered employers may be able to access Employer Network funding towards cat and genny training course costs. ZS Superuser training is recognised as professional development supporting your Scottish Water supply chain capability in construction and utility location.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Next Steps',
    title: 'Related Training Courses',
    intro: 'Build your team\'s cat and genny training capability across the EUS pathway and Scottish Water supply chain requirements.',
    items: [
      {
        eyebrow: 'Cable Location',
        title: 'EUS CAT1',
        desc: 'The foundation cat and genny training course and EUSR category qualification. Superuser prerequisite required for all delegates.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Cable Location',
        title: 'EUS CAT2 Safe Dig',
        desc: 'Safe excavation training course and permit requirements for avoiding danger from underground services. Superuser prerequisite required for all delegates.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Cable Location',
        title: 'EUS Superuser',
        desc: 'The standard super user cat and genny training course for non-Scottish Water teams. Same structure, EUS framework.',
        href: '/courses/eus-superuser',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world cat and genny skills on locating utility services.',
      href: '/osca',
    },
    {
      title: 'Bespoke Training',
      desc: 'Design a tailored cat and genny training programme around your site risks, equipment, and team size.',
      href: '/contact',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between the ZS Superuser and the EUS Superuser?',
      a: 'The structure, duration, assessments, and standard of both cat and genny training courses are identical. The ZS Superuser is mapped specifically to the Scottish Water Zero Strike Initiative (ZSI) framework. It uses ZSI documentation, Scottish Water-specific examples and case studies, and the ZSI Operators\' Guide. The EUS Superuser is built around the EUS (EUSR) framework and is relevant across all clients and sectors. If your team works in the Scottish Water supply chain, the ZS Superuser training course is the right course.',
    },
    {
      q: 'Do delegates need to hold EUS CAT1 and CAT2 before attending?',
      a: 'Yes. Delegates must hold both EUSR category EUS CAT1 and EUS Safe Dig CAT2 certification before attending the ZS Superuser cat and genny training course. These are the minimum training requirements and prerequisite qualifications set by the Scottish Water Zero Strike Initiative for anyone working on a ZSI site.',
    },
    {
      q: 'Does the course cover the ZSI Operators\' Guide?',
      a: 'Yes. The ZSI Operators\' Guide is embedded into the delivery, covering planning, preparation, documentation, survey and marking, breaking ground, and reinstatement to the ZSI standard. Delegates leave understanding their responsibilities under the guide and how to apply them when coaching their teams.',
    },
    {
      q: 'What is the advanced locator equipment standard?',
      a: 'The advanced locator is the minimum cat and genny equipment standard required by Scottish Water\'s Zero Strike Initiative. It means all cable avoidance tools and signal generators used on ZSI sites must meet advanced locator specifications or higher. This requirement is covered in the training course and built into the practical training on locating underground services.',
    },
    {
      q: 'How many delegates can attend?',
      a: 'A maximum of 6 delegates per cat and genny training course. The small group size allows for individual practical assessments and meaningful coaching sessions where each delegate can develop practical skills and complete their assessments. Contact Sygma if you have a larger team. Additional course dates can be arranged.',
    },
    {
      q: 'Can Sygma deliver this course at our premises?',
      a: 'Yes. All ZS Superuser cat and genny training courses are delivered in-house at your premises. You need a room for up to 6 delegates and a suitable outdoor site area with buried services and underground utilities for the practical sessions. Sygma can advise on site suitability and equipment requirements.',
    },
    {
      q: 'What cat and genny equipment do delegates need for the course?',
      a: 'Delegates should bring their own cat and genny equipment that meets the advanced locator standard required by Scottish Water\'s Zero Strike Initiative. This means cable avoidance tools (CAT) and signal generators (genny) at advanced specification or higher. If your genny equipment does not meet the ZSI standard, contact Sygma before the training course to discuss options. The course covers how to operate cat and genny in all modes including passive modes, different frequencies, and genny-first methodology.',
    },
    {
      q: 'How does the ZS Superuser support safe excavation and compliance?',
      a: 'The ZS Superuser cat and genny training directly supports safe excavation by ensuring delegates can locate utility services and underground services before any excavation work begins. The course covers current legislation including HSG47 guidance for avoiding danger from underground services, risk assessment planning, and best practice for reducing utility strikes. Certification confirms the delegate is competent to locate buried services and coach others in safe excavation compliance within the Scottish Water supply chain.',
    },
    {
      q: 'What is the EUSR category requirement for the ZS Superuser?',
      a: 'The EUSR category prerequisite for the ZS Superuser is EUS CAT1 (cable avoidance training) and EUS CAT2 Safe Dig (safe excavation). These qualifications from the awarding body confirm the delegate has the foundation knowledge and skills to operate cat and genny equipment safely. The ZS Superuser builds on this with advanced genny training, utility strike investigation, coaching competency, and assessment skills specific to Scottish Water\'s Zero Strike Initiative.',
    },
    {
      q: 'Does the certification have an expiry date?',
      a: 'The ZS Superuser certification issued by Sygma is a recognised record of completing the training course and all associated assessments. While Sygma certification does not carry a fixed expiry date, best practice and Scottish Water\'s own requirements mean that refresher cat and genny training should be conducted regularly to maintain competency. EUSR category registrations carry their own expiry date and require re-assessment to maintain your qualification as a leading provider of safe utility location services.',
    },
  ],

  cta: {
    title: 'Enquire About the ZS Superuser Cat and Genny Training Course',
    description: '2 days, maximum 6 delegates. In-house cat and genny training at your site anywhere in the UK. Built specifically for Scottish Water supply chain teams operating under the Zero Strike Initiative to locate utility services and underground utilities safely.',
    primaryLabel: 'Request a Quote',
    primaryHref: '/contact',
    secondaryLabel: 'View EUS Superuser (Non-Scottish Water)',
    secondaryHref: '/courses/eus-superuser',
  },
};
