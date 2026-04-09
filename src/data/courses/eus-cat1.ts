import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'eus-cat1',

  metadata: {
    title: 'EUSR CAT 1 Training | Cat and Genny Course | Sygma',
    description: 'EUSR CAT1 training producing EUSR-registered operatives. HSG47 built in. CAT and Genny practical assessment. UK-wide delivery.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/eus-cat1' },
    openGraph: {
      title: 'EUSR CAT 1 Training | Cat and Genny Course | Sygma',
      description: 'EUSR CAT1 training producing EUSR-registered operatives. HSG47 built in. CAT and Genny practical assessment. UK-wide delivery.',
      url: 'https://sygma-solutions.com/courses/eus-cat1',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'EUSR CAT1: EUSR-Registered Utility Avoidance Training',
    sub: 'EUSR CAT1 and EUSR Category 1 training from the UK\'s only independent specialist. Full electromagnetic theory, practical Genny & CAT assessment, and written paper. HSG47 compliant. Recognised across the water, gas, electricity, and telecoms sectors.',
    images: [
      'landscape-01',
      'landscape-02',
      'landscape-03',
      'landscape-04',
      'landscape-05',
      'landscape-06',
      'landscape-07',
      'landscape-08',
    ],
    alts: [
      'Trainee scanning for underground utilities with a CAT4 locator',
      'Genny signal generator being connected to a utility service point',
      'Practical cable avoidance exercise on a live training site',
      'Instructor guiding a trainee through CAT4 signal interpretation',
      'Close-up of CAT4 display showing utility signal detection',
      'Overhead view of a marked utility survey area during training',
      'Group of trainees practising cable avoidance techniques outdoors',
      'CAT4 and Genny equipment used during EUSR CAT1 accredited training',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'Cable Avoidance Training', href: '/courses/cable-avoidance-training' },
      { label: 'EUSR CAT1' },
    ],
  },

  schemas: {
    course: {
      name: 'EUSR CAT1 Training',
      description: 'EUSR CAT1 utility avoidance training from Sygma Solutions. A one-day course producing EUSR-registered operatives. Covers electromagnetic theory, CAT and Genny operation in all four modes, utility plan reading, and practical on-site assessment.',
      url: '/courses/eus-cat1',
      credential: 'EUSR CAT1 / EUSR Category 1',
      duration: '1 day',
      mode: ['onsite', 'blended'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'Cable Avoidance Training', to: '/courses/cable-avoidance-training' },
      { label: 'EUSR CAT1' },
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

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Site Operatives',
        desc: 'Anyone who breaks ground or works near underground services.',
      },
      {
        title: 'Groundworkers and Labourers',
        desc: 'Digging, excavating or working in the vicinity of buried utilities.',
      },
      {
        title: 'Supervisors and Managers',
        desc: 'Responsible for teams who carry out excavation or survey work.',
      },
      {
        title: 'New Entrants to Utilities',
        desc: 'Starting a career in utility avoidance, streetworks or civil engineering.',
      },
    ],
  },

  infoBar: [
    { label: 'Duration', value: '1 Day' },
    { label: 'Max Delegates', value: '8' },
    { label: 'Certificate', value: 'EUSR CAT1 (EUSR-Registered)' },
    { label: 'Pass Mark', value: '80%' },
    { label: 'Assessment', value: 'Practical + Written' },
  ],

  about: {
    eyebrow: 'What is EUSR CAT1',
    title: 'EUSR CAT1 Training: The EUSR-Registered Standard for Utility Avoidance',
    paragraphs: [
      'EUSR CAT1 training (also known as EUSR CAT1 or EUSR Category 1 training) is issued against EUSR-registered standards and is the utility sector\'s most widely recognised certificate of competence for operatives using Genny & CAT equipment. The qualification is required or preferred on the frameworks of many of the UK\'s largest utility contractors and network operators. All EUSR CAT1 courses from Sygma meet the requirements of HSG47, the Health and Safety Executive\'s guidance on avoiding danger from underground services.',
      'Sygma\'s EUSR CAT1 course delivers the same depth of electromagnetic theory and Genny-First methodology that runs through every Sygma programme. The EUSR registration adds the sector recognition that many procurement and H&S frameworks require. The difference between this and the Sygma in-house certificate is not the training content. It is the awarding body.',
      'Not all EUSR CAT1 providers deliver the same standard of training. The EUSR specification sets a minimum, and some providers deliver to that minimum. Sygma includes clamp, capacitance, and blind induction in assessed practicals even where EUSR does not require it. The result is an operative who can locate in real conditions, not just pass a multiple choice paper. Sygma-trained operatives consistently show a 70-80% increase in Genny usage post-course, measured through locator data downloads.',
    ],
  },

  courseContent: {
    eyebrow: 'Course Overview',
    title: 'EUSR CAT1 Full Day Agenda',
    theory: {
      heading: 'Session',
      subheading: 'Content',
      items: [
        'Why We Use Locators: HSG47 guidance and legal obligations. National legislation and company policy. The financial and safety consequences of utility strikes. Real-world examples.',
        'Buried Service Plans: Reading and interpreting STATS plans. Reconciling plan information with site conditions. Limitations of service plans.',
        'Electromagnetic Theory: How a locator detects signals. Theory and limitations of Power, Radio, Genny, and Avoidance modes. Myth-busting: what the equipment cannot find. Signal distortion and depth accuracy.',
        'Equipment Controls and Operation: Locator controls and signal interpretation. Locating joints and changes of direction. Strike Alert. Signal generator dual frequency, earthing, capacitance, blind induction, and nulling. Depth estimation techniques.',
        'Data Logging (Optional): Data logging software overview. Download and analysis of locator site data. Relevant for clients requiring an audit trail.',
        'Site Practical: Plan Reconciliation: Delegates use STATS plans to identify service routes. Site visual inspection. Equipment pre-use checks.',
        'Site Practical: Genny & CAT Survey: All modes assessed individually. Genny connected first. Depth readings taken and tested. Problem services located. Individual assessment.',
        'Written Assessment: Multiple choice paper. 80% minimum pass mark. Oral assessment available on request.',
        'Certificate: EUSR CAT1 EUSR-registered certificate issued on successful completion.',
      ],
    },
    practical: {
      heading: 'Practical Session',
      items: [],
    },
  },

  formats: {
    eyebrow: 'Booking Options',
    title: 'Course at a Glance',
    rows: [
      {
        format: 'EUSR CAT1: Utility Avoidance Training',
        duration: 'One day (typically 8:30am to 4:00pm)',
        maxDelegates: '8 per session',
        assessment: 'Multiple choice written paper: 80% minimum pass mark. Oral assessment available for delegates with dyslexia or reading difficulties. On-site practical assessment in all Genny & CAT modes.',
      },
    ],
    notes: [
      'Course Name: EUSR CAT1: Utility Avoidance Training',
      'Awarding Body: EUSR (Energy and Utility Skills Register)',
      'Also Known As: EUSR CAT1, EUSR Category 1, EUS Cat 1 utility training',
      'Format: Classroom theory (morning) followed by on-site practical assessment (afternoon)',
      'Certificate: EUSR CAT1 certificate (EUSR-registered). Issued on successful completion.',
      'Suitable For: Groundworkers, plant operators, and operatives in the utility sector requiring EUSR-registered certification',
      'Equipment: Sygma provides Radiodetection CAT4 and CAT4+ as standard. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. For on-site delivery, delegates should bring the equipment they use on site. Minimum ratio of one locator per 3 delegates.',
      'CITB: CITB Approved Training Organisation. Employers may be eligible for CITB Employer Network funding support. Contact your CITB adviser.',
      'Delivery: Wigan HQ | The Survey School, Worcester | On-site nationwide (travel included)',
      'Pricing: Contact us for a tailored quote. Site-based delivery available nationwide.',
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'At the End of This Course',
    items: [
      {
        title: 'EUSR CAT1 Competency Card',
        desc: 'Valid for 3 years, nationally recognised by utility companies and principal contractors',
      },
      {
        title: 'Personalised Training Record',
        desc: 'Detailed breakdown of all theory and practical criteria assessed',
      },
      {
        title: 'Practical Assessment Evidence',
        desc: 'Documented evidence of hands-on competency with Genny & CAT equipment',
      },
      {
        title: 'Ongoing Support',
        desc: 'Access to Sygma trainers for post-course questions and refresher guidance',
      },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'on-site-training-03', alt: 'EUSR CAT1 training delegates using Genny & CAT on site' },
        { src: 'on-site-training-05', alt: 'EUSR CAT1 practical cable avoidance assessment in countryside setting' },
        { src: 'on-site-training-01', alt: 'On-site practical cable avoidance training with signal generator' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'on-site-training-panoramic-02', alt: 'EUSR CAT1 on-site training group, Sygma Solutions nationwide delivery' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-07', alt: 'EUSR CAT1 practical training with cable locator' },
        { src: 'CAT4-and-Genny-43', alt: 'Genny signal generator connection during EUSR CAT1 assessment' },
        { src: 'CAT4-and-Genny-50', alt: 'On-site utility detection training for EUSR registration' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-59', alt: 'Cable avoidance practical assessment on site' },
        { src: 'CAT4-and-Genny-64', alt: 'EUSR CAT1 delegates using locator equipment' },
        { src: 'CAT4-and-Genny-68', alt: 'Sygma EUSR CAT1 hands-on training session' },
      ],
    },
  ],

  citbFunding: {
    paragraphs: [
      'CITB Approved Training Organisation. Employers may be eligible for CITB Employer Network funding support. Contact your CITB adviser.',
    ],
  },

  hsg47: {
    items: [
      {
        eyebrow: 'Trained Personnel',
        title: 'Trained and Competent Operatives',
        desc: 'HSG47 requires all personnel involved in excavation near underground services to be trained. EUSR CAT1 directly meets this requirement.',
      },
      {
        eyebrow: 'Safe System',
        title: 'Safe System of Work',
        desc: 'The course covers establishing and following safe digging procedures aligned with HSG47 guidance.',
      },
      {
        eyebrow: 'Planning',
        title: 'Service Plan Checks',
        desc: 'Delegates learn to interpret utility records and service plans before breaking ground, as HSG47 requires.',
      },
      {
        eyebrow: 'Equipment',
        title: 'Correct Use of Equipment',
        desc: 'Full practical training on Genny & CAT equipment covering Power, Radio, Genny and all signal application modes.',
      },
      {
        eyebrow: 'Visual Detection',
        title: 'Visual Inspection',
        desc: 'Techniques for visual identification of surface markers, valve covers, and other indicators of buried services.',
      },
      {
        eyebrow: 'Documentation',
        title: 'Evidenced Training Records',
        desc: 'EUSR CAT1 certification provides auditable proof of competency for HSG47 compliance documentation.',
      },
    ],
  },

  whySygma: {
    items: [
      {
        eyebrow: 'Minimum Spec Plus',
        title: 'Not All CAT1 Courses Are Created Equal',
        desc: 'EUSR sets a minimum spec. Some providers deliver to minimum. Sygma includes clamp, capacitance and blind induction in assessed practicals even though EUSR does not require it.',
      },
      {
        eyebrow: 'Proven Methodology',
        title: 'Genny-First Methodology',
        desc: 'Sygma-trained operatives show a 70-80% increase in Genny usage. This is not theory. It is measured through locator data downloads.',
      },
      {
        eyebrow: 'Expertise',
        title: 'Specialist Trainers',
        desc: 'Every trainer is directly employed by Sygma. All are ex-utility surveyors or ex-equipment manufacturer specialists. All TAQA qualified.',
      },
      {
        eyebrow: 'Real-World Assessment',
        title: 'Real Practical Assessment',
        desc: 'Structured on-site practical using real equipment in real conditions. Not a tick-box exercise. The goal is a competent operative, not just a certificate.',
      },
      {
        eyebrow: 'No Bias',
        title: 'Independent',
        desc: 'Sygma has no surveys to sell, no equipment to push, no commercial relationship with any manufacturer. When we tell you something is wrong, we have no financial reason to soften that verdict.',
      },
      {
        eyebrow: 'Convenience',
        title: 'We Come to You',
        desc: 'Delivered at your site using your own plant, procedures and environment. Travel included in course rate. No hidden extras.',
      },
    ],
  },

  relatedCourses: {
    eyebrow: 'Further Training',
    title: 'Related Courses',
    intro: 'Sygma offers a range of utility avoidance and cable location training programmes to suit different needs and regulatory requirements.',
    items: [
      {
        eyebrow: 'Advanced Alternative',
        title: 'ProQual CAT1',
        desc: 'More comprehensive two-day alternative covering all four EML modes in the practical assessment. Includes clamp and capacitance assessed separately.',
        href: '/courses/proqualcat1-training',
      },
      {
        eyebrow: 'Safe Excavation',
        title: 'EUSR CAT2',
        desc: 'Safe excavation qualification. Can be delivered standalone or combined with EUSR CAT1 in a single day.',
        href: '/courses/eus-cat2-safe-dig',
      },
      {
        eyebrow: 'Specialist Equipment',
        title: 'GS6 Overhead Power Lines',
        desc: 'Half-day awareness course covering safe working near overhead power lines. Often booked alongside EUSR CAT1.',
        href: '/courses/gs6-overhead-power-lines',
      },
      {
        eyebrow: 'Equipment Training',
        title: 'Manufacturer-Specific Locator Training',
        desc: 'One-day training on your specific locating equipment. Covers vScan, CScope, and other pipe and cable locators.',
        href: '/courses/manufacturer-locator-training',
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
      href: '/bespoke-training',
    },
  ],

  faqs: [
    {
      q: 'What is EUSR CAT1 training?',
      a: 'EUSR CAT1 is a one-day utility avoidance training course that leads to an EUSR-registered Category 1 qualification. It covers electromagnetic theory, correct use of Genny & CAT equipment in all four modes, utility service plan reading, and a practical on-site assessment. It is one of the most widely recognised utility avoidance qualifications in the UK utility sector.',
    },
    {
      q: 'What is the difference between EUSR CAT1 and EUSR CAT1?',
      a: 'They are the same qualification. EUS and EUSR both refer to the Energy and Utility Skills Register. The qualification is sometimes written as EUSR CAT1 and sometimes as EUSR CAT1 or EUSR Category 1. All Sygma EUSR CAT1 certificates are issued against EUSR-registered standards.',
    },
    {
      q: 'What pass mark is required for EUSR CAT1?',
      a: 'The written multiple choice assessment requires a minimum pass mark of 80%. An oral assessment is available for delegates with dyslexia or reading difficulties. The practical on-site assessment is conducted on the day and assessed individually by the Sygma trainer.',
    },
    {
      q: 'Is EUSR CAT1 the same as ProQual CAT1?',
      a: 'No. Both cover similar core skills but they are issued by different bodies against different criteria. EUSR CAT1 is EUSR-registered. ProQual CAT1 is issued by ProQual Accreditations and includes additional individually assessed criteria, including clamp, capacitance, and blind induction assessed separately. See the comparison table on this page or the full ProQual CAT1 course page for details.',
    },
    {
      q: 'Can Sygma deliver EUSR CAT1 on our site?',
      a: 'Yes. Sygma delivers EUSR CAT1 at client sites across the UK. Travel is included in the day rate. Sygma provides Radiodetection CAT4 and CAT4+ as standard, but the course works with any manufacturer\'s locator and signal generator. For alternative equipment, a minimum ratio of one locator per three delegates applies. Maximum 8 delegates per session.',
    },
    {
      q: 'How long is an EUSR card valid for?',
      a: 'An EUSR CAT1 card is valid for 3 years from the date of issue. The expiry date is printed on the card. Most utility frameworks and principal contractors require a valid, in-date card as a condition of site access. Sygma recommends booking renewal training in the 3 months before expiry to avoid any lapse in certification.',
    },
    {
      q: 'How do I renew my EUSR card?',
      a: 'To renew your EUSR CAT1 card you need to retake the full EUSR CAT1 course and pass both the written and practical assessments. There is no shortened renewal route. The complete one-day EUSR Category 1 training programme must be completed again, including the multiple choice paper and the on-site practical. A new 3-year card is issued on successful completion.',
    },
    {
      q: 'What happens if my EUSR CAT1 card has expired?',
      a: 'If your EUSR CAT1 card has expired you cannot use it to demonstrate current competency and most utility operators will not allow you to locate on site. There is no grace period under EUSR rules. You will need to complete the full EUSR CAT1 course again. If your card has recently lapsed, contact Sygma and we can usually get you onto the next available date.',
    },
    {
      q: 'Is EUSR CAT1 training a legal requirement under HSG47?',
      a: 'HSG47, the Health and Safety Executive\'s guidance on avoiding danger from underground services, requires operatives who use cable locating equipment to be trained and competent. EUSR CAT1 is one of the most widely accepted ways of demonstrating that competency. While HSG47 does not mandate a specific qualification by name, holding an EUSR-registered qualification such as EUSR CAT1 is the utility industry\'s standard way of meeting that legal duty.',
    },
    {
      q: 'Can we do EUSR CAT1 and CAT2 training on the same day?',
      a: 'Yes, in most cases. Sygma regularly delivers combined EUSR CAT1 and CAT2 days for clients who want to complete both levels in a single site visit. The combined day runs longer, typically from 8:00am to 5:30pm. The maximum of 8 delegates applies to the combined format as well. Both certificates are issued on the day. Contact Sygma to confirm availability for your team size and location.',
    },
  ],

  cta: {
    title: 'Book Your EUSR CAT1 Training',
    description: 'Book at our Wigan HQ, The Survey School in Worcester, or on your site anywhere in the UK. Travel included. Maximum 8 delegates. Contact us for a tailored quote.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact#enquiry-form',
    secondaryLabel: 'Request On-Site Delivery',
    secondaryHref: '/contact#enquiry-form',
  },
};
