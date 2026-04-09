import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'proqualcat1plus',

  metadata: {
    title: 'ProQual CAT1 Plus Training | Accredited | Sygma',
    description: 'ProQual CAT1 Plus: the most advanced utility avoidance qualification. 2-day course covering all CAT1 plus 7 advanced theory and 34 practical criteria.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat1plus' },
    openGraph: {
      title: 'ProQual CAT1 Plus Training | Accredited | Sygma',
      description: 'ProQual CAT1 Plus: the most advanced utility avoidance qualification. 2-day course covering all CAT1 plus 7 advanced theory and 34 practical criteria.',
      url: 'https://sygma-solutions.com/courses/proqualcat1plus',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'ProQual CAT1 Plus: The Most Advanced Utility Locating Qualification Available',
    sub: 'Two days. Forty-two individually assessed practical criteria. Seven advanced theory papers. Two qualifications. Built for operatives who need to locate in the conditions that basic training does not prepare them for.',
    image: 'CAT4-and-Genny-40',
    alt: 'ProQual CAT1 Plus advanced cable avoidance training course',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Plus' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT1 Plus Advanced Utility Locating Course',
      description: '2-day advanced utility avoidance qualification. Day 1 covers all ProQual CAT1 criteria. Day 2 adds 7 theory and 34 hands-on practical criteria covering capacitance, signal clamp, dual frequency, depth verification and advanced survey methodology.',
      url: '/courses/proqualcat1plus',
      credential: 'ProQual CAT1 + ProQual CAT1 Plus',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'ProQual CAT1 Plus' },
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
    { label: 'Duration', value: '2 Days' },
    { label: 'Qualifications', value: 'CAT1 + CAT1 Plus' },
    { label: 'Theory', value: 'Written papers (not MCQ)' },
    { label: 'Practical', value: '42 assessed criteria' },
    { label: 'Assessment', value: 'Every criterion individually assessed' },
  ],

  whoFor: {
    eyebrow: 'Who Is This Course For',
    title: 'Designed For',
    items: [
      {
        title: 'Operatives Locating on Live Sites',
        desc: 'Anyone who uses a Genny & CAT to locate underground services before or during excavation. This course takes them from foundation to advanced in one programme.',
      },
      {
        title: 'Lead Locators and Surveyors',
        desc: 'Professionals who need to demonstrate mastery of capacitance, signal clamp, dual frequency and advanced transmitter techniques on congested or deep-service sites.',
      },
      {
        title: 'Organisations Requiring ProQual Accreditation',
        desc: 'Companies whose procurement framework or competency standards mandate ProQual-accredited qualifications for utility avoidance.',
      },
      {
        title: 'Teams New to ProQual',
        desc: 'The 2-day programme is the most efficient route. Delegates complete both ProQual CAT1 and ProQual CAT1 Plus in a single booking, leaving with two qualifications.',
      },
    ],
  },

  about: {
    eyebrow: 'About This Course',
    title: 'Beyond the Basics',
    paragraphs: [
      'Most cable avoidance courses teach operatives how to use a Genny & CAT in standard conditions. That is not enough. Signal loss. Problem cables. Street light services. Capacitance on non-earthed conductors. HV cable limitations. Depth readings that cannot be trusted. These are the situations that cause strikes, and they are the situations that standard training does not cover.',
      'ProQual CAT1 Plus is a 2-day programme that covers everything. The first day delivers the full ProQual CAT1 specification, including written theory papers and eight individually assessed practical criteria covering all four locating modes: Power, Radio, Genny and Avoidance. The second day adds seven advanced theory criteria and over thirty additional practical criteria that go far beyond what any other qualification on the market assesses.',
      'Delegates leave with two qualifications: ProQual CAT1 and ProQual CAT1 Plus. Both are assessed by Sygma trainers and certificated through ProQual Accreditations. Every criterion must be met individually. There is no percentage pass mark and no multiple choice questions.',
      'Sygma delivers this course with the methodology that defines all its training: Genny-First. Every practical session requires delegates to exhaust all transmitter connection opportunities before moving to induction, and to exhaust all active modes before passive. This is the correct approach for reducing strikes, and the Plus criteria (PP3.3) specifically test whether operatives have internalised it.',
    ],
  },

  courseContent: {
    theory: {
      heading: 'CAT1 Theory (T1-T7)',
      subheading: 'The foundation theory paper covers locator and signal generator operation, pre-use checks, the four locating modes (Power, Radio, Genny, Avoidance), service identification, safe systems of work, CDM Regulations, risk assessment, and HSG47/GS6 guidance. These criteria establish the knowledge base that the Plus criteria build on.',
      items: [
        'T1: Locator and signal generator functions',
        'T2: Pre-use equipment checks',
        'T3: The four locating modes',
        'T4: Service identification and marking',
        'T5: Safe systems of work',
        'T6: CDM Regulations and risk assessment',
        'T7: HSG47 and GS6 guidance',
      ],
    },
    practical: {
      heading: 'Theory Plus (TP1-TP7)',
      subheading: 'The advanced knowledge required for demanding site conditions.',
      items: [
        'TP1: Pre-survey: understand the differences between PAS128 surveys and Utility STATS plans',
        'TP2: Pre-use equipment checks: understand limitations of electromagnetic locators (what they can and cannot detect), plan the survey using signal generator and locator based on the site, function check, in-service date check (calibration), understand a permit to dig',
        'TP3: Transmitter applications: use correct search technique at correct distance from induced signal, dual and multi-frequency transmitter operation and benefits, frequency options when using induction, limitations of induction as a non-selective method, exhausting all transmitter applications before passive modes',
        'TP4: Locating, pinpointing and tracing: causes of sudden signal loss, obtain depth estimates at correct distances from transmitter in connection, clamp and induction, recognise when depth is unreliable, check depth reading quality by two methods',
        'TP5: General: HV cable location limitations, dual and multi-frequency transmitter benefits, induction frequency options, induction limitations (non-selective), blind induction sweep, continuous scanning as excavation progresses, services that a locator with signal generator will not detect',
        'TP6: Health, safety and environment: responsibilities under HASAWA, HSG47 and GS6 guidance, PPE requirements, site-specific risk assessments and control measures for utility locating activities',
        'TP7: Locating and detecting services: interpreting utility drawings and line search documents, typical depths of underground services, marking methods, hazards associated with different services and damage response, roles and responsibilities, visual locating methods, principles of electronic locating equipment (direct connection, induction, nulling out, Power and Radio modes), signal generator attachments, interpreting results, external influences on readings, reporting deviations',
      ],
    },
  },

  formats: {
    eyebrow: 'Quick Reference',
    title: 'Course at a Glance',
    rows: [
      { format: 'Qualifications Awarded', duration: 'ProQual CAT1 Locate Utility Services + ProQual CAT1 Plus (both certificated by ProQual Accreditations)', maxDelegates: '', assessment: '' },
      { format: 'Duration', duration: '2 days (full programme) or 1 day (Plus add-on for existing CAT1 holders)', maxDelegates: '', assessment: '' },
      { format: 'Prerequisites', duration: 'None for the 2-day programme. The 1-day add-on requires current ProQual CAT1.', maxDelegates: '', assessment: '' },
      { format: 'Theory Assessment', duration: 'Written theory papers (CAT1: T1-T7) plus Theory Plus papers (TP1-TP7). Not multiple choice.', maxDelegates: '', assessment: '' },
      { format: 'Practical Assessment', duration: '42 individually assessed hands-on criteria: 8 under CAT1, 34 under CAT1 Plus (PP1-PP4)', maxDelegates: '', assessment: '' },
      { format: 'Advanced Techniques', duration: 'Capacitance (high-frequency signal), signal clamp, dual-frequency transmitter, blind induction sweep, nulling, airborne signal checks, depth quality verification using two independent methods', maxDelegates: '', assessment: '' },
      { format: 'Delivery', duration: 'Sygma HQ (Wigan), The Survey School (Worcester), or on-site at your premises anywhere in the UK', maxDelegates: '', assessment: '' },
      { format: 'Equipment', duration: 'Sygma provides Radiodetection CAT4 and Genny4 as standard. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. For client-supplied equipment: minimum one locator per three delegates.', maxDelegates: '', assessment: '' },
      { format: 'Upgrade Path', duration: 'ProQual Level 3 Certificate in Site Surveys, Advanced EM Locator (Level 4), or Level 5 Diploma in Utility Surveying', maxDelegates: '', assessment: '' },
      { format: 'Pricing', duration: 'Contact us for a tailored quote. Site-based delivery available nationwide.', maxDelegates: '', assessment: '' },
      { format: 'CITB Funding', duration: 'Sygma is a CITB ATO. Speak to your Employer Network adviser about funding.', maxDelegates: '', assessment: '' },
    ],
  },

  certRoutes: {
    eyebrow: 'What You Get',
    title: 'At the End of This Course',
    items: [
      { title: 'Two ProQual Qualifications', desc: 'ProQual CAT1 Locate Utility Services and ProQual CAT1 Plus, both certificated through ProQual Accreditations' },
      { title: 'Written Theory Evidence', desc: 'Assessed theory papers covering 14 criteria areas, demonstrating knowledge in the candidate\'s own words rather than through multiple choice' },
      { title: '42 Practical Criteria Assessed', desc: 'Documented evidence of competence across every individually assessed hands-on criterion, from direct connection through to advanced survey methodology' },
      { title: 'Personalised Training Record', desc: 'Detailed breakdown of all theory and practical criteria with assessor commentary and ongoing access to Sygma trainers for post-course questions' },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-10', alt: 'ProQual CAT1 Plus advanced training practical' },
        { src: 'Advanced-EM-08', alt: 'Advanced electromagnetic locator techniques' },
        { src: 'CAT4-and-Genny-62', alt: 'Hands-on practical assessment on training rig' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-47', alt: 'Advanced CAT4 locator techniques during ProQual Plus training' },
        { src: 'CAT4-and-Genny-03', alt: 'Advanced electromagnetic locator practical assessment' },
        { src: 'CAT4-and-Genny-61', alt: 'Delegates practising signal clamp and capacitance techniques' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-47', alt: 'ProQual CAT1 Plus practical training assessment' },
        { src: 'Advanced-EM-07', alt: 'Advanced locator training with depth verification' },
        { src: 'CAT4-and-Genny-53', alt: 'Hands-on Genny & CAT training session' },
      ],
    },
  ],

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation. Speak to your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical content, meeting CITB standards for hands-on training delivery.',
    ],
  },

  hsg47: { items: [
    {
      eyebrow: 'Regulatory Framework',
      title: 'HSG47 Compliance',
      desc: 'HSG47 requires that anyone using a cable locator must be trained and competent. ProQual CAT1 Plus exceeds this requirement with the most comprehensive practical assessment available. The course covers safe systems of work, service plan interpretation, correct use of equipment in all modes, and continuous scanning during excavation. The ProQual certification provides auditable proof of competency that satisfies HSG47, GS6 and CDM requirements.',
    },
    {
      eyebrow: 'Funding',
      title: 'CITB Employer Network',
      desc: 'Sygma is a CITB Approved Training Organisation. All Sygma courses exceed 51% practical content, meeting CITB standards for hands-on training delivery. Speak to your CITB Employer Network adviser about funding for the ProQual CAT1 Plus programme.',
    },
  ] },

  whySygma: { items: [
    {
      eyebrow: 'Specification-Aligned',
      title: 'Genny-First in the Assessment Criteria',
      desc: 'ProQual CAT1 Plus specification (PP3.3) requires candidates to conduct a survey using the transmitter first and exhaust all transmitter connection opportunities before moving to induction. This is the Genny-First methodology formalised into externally audited qualification criteria. No other awarding body has embedded this principle.',
    },
    {
      eyebrow: 'Industry Leadership',
      title: 'We Helped Write This Standard',
      desc: 'Sygma was directly involved in developing the ProQual CAT1 and CAT1 Plus specifications. These are the only utility avoidance qualifications we do not have to supplement, because the syllabus was built to the standard the industry actually needs.',
    },
    {
      eyebrow: 'Two Qualifications',
      title: 'Complete Programme in 2 Days',
      desc: 'Delegates leave with both ProQual CAT1 and ProQual CAT1 Plus. No need for separate bookings, separate travel, or separate assessment days. One programme, two qualifications, forty-two practical criteria assessed.',
    },
    {
      eyebrow: 'Expert Delivery',
      title: 'Specialist Trainers',
      desc: 'Every trainer directly employed. All ex-utility surveyors or ex-equipment manufacturer specialists. All TAQA qualified. Nobody teaches this subject who has not done the job.',
    },
    {
      eyebrow: 'Objectivity',
      title: 'Fully Independent',
      desc: 'No surveys, no equipment sales, no manufacturer relationships. We teach one subject and we teach it without bias. Every piece of advice is based on what works, not what we sell.',
    },
    {
      eyebrow: 'Convenience',
      title: 'We Come to You',
      desc: 'Delivered at your site anywhere in the UK. All equipment, training rigs and materials included. No hidden extras.',
    },
    {
      eyebrow: 'Proven Results',
      title: '70-80% Increase in Genny Usage',
      desc: 'Clients who implement our Genny-First methodology report a 70 to 80% measurable increase in signal generator usage. Measured through locator data downloads, not surveys.',
    },
  ] },

  relatedCourses: {
    eyebrow: 'Training Path',
    title: 'Related Courses',
    intro: 'Build your team\'s cable avoidance skills across our suite of ProQual-accredited qualifications.',
    items: [
      {
        eyebrow: 'Cable Avoidance',
        title: 'ProQual CAT1',
        desc: 'One-day qualification for operatives who need accredited cable avoidance competence. The standard CAT1 is included in the 2-day Plus programme.',
        href: '/courses/proqualcat1-training',
      },
      {
        eyebrow: 'Cable Avoidance',
        title: 'ProQual CAT2',
        desc: 'Safe excavation qualification. If your team locates and digs, they need both. Can be combined with CAT1 Plus for a comprehensive programme.',
        href: '/courses/proqualcat2',
      },
      {
        eyebrow: 'Cable Avoidance',
        title: 'Level 3 Certificate',
        desc: 'ProQual Level 3 Certificate in Site Surveys. The next step for lead locators who want to progress beyond CAT1 Plus.',
        href: '/courses/level-3-certificate',
      },
    ],
  },

  alsoConsider: [
    {
      title: 'OSCA Assessment',
      desc: 'GPS-stamped on-site competency assessment to verify real-world skills after training.',
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
      q: 'What qualifications do delegates receive at the end of the 2-day course?',
      a: 'Both. Delegates who complete the full 2-day programme receive ProQual CAT1 and ProQual CAT1 Plus as separate qualifications. The CAT1 criteria are assessed on the first day and the advanced Plus criteria on the second. Both certificates are issued through ProQual Accreditations.',
    },
    {
      q: 'Can I attend the Plus day only if I already hold ProQual CAT1?',
      a: 'Yes. If your team already holds current ProQual CAT1, you can book the 1-day Plus add-on instead of the full 2-day programme. The add-on covers the seven additional theory criteria and thirty-two additional practical criteria that the standard CAT1 does not include. Contact us and we will confirm whether your existing CAT1 is current and whether the 1-day option is suitable.',
    },
    {
      q: 'What is the difference between ProQual CAT1 Plus and EUS CAT1?',
      a: 'They are fundamentally different qualifications. ProQual CAT1 Plus builds on an already more rigorous CAT1 base and adds seven theory criteria and over thirty practical criteria that EUS does not cover at all. Topics like PAS128 vs Utility STATS plans, capacitance technique, signal clamp, depth quality verification, HV cable limitations, blind induction sweeps, and signal loss identification are all assessed in ProQual CAT1 Plus but absent from EUS entirely. Where EUS relies on multiple choice questions, ProQual uses written theory papers and individually assessed hands-on practical criteria. In 21 years, Sygma has had to add content to every qualification on the market to make it fit for industry. The ProQual CAT1 and CAT1 Plus are the only qualifications we do not have to add anything to, because they cover everything needed.',
    },
    {
      q: 'How many individual practical criteria are assessed across the 2 days?',
      a: 'The full 2-day programme assesses 8 practical criteria under the CAT1 standard and a further 34 individual practical criteria under the Plus standard, giving a total of 42 hands-on practical demonstrations. Each one is observed and assessed individually by a Sygma assessor. This is not a paper-based assessment.',
    },
    {
      q: 'What is the difference between capacitance and induction?',
      a: 'Both methods use the signal transmitter to apply a signal without direct connection to the service. Induction broadcasts a signal across a wide area and is non-selective. Capacitance uses a high-frequency signal applied directly above the service to specifically target it, making it more effective for non-earthed conductors. ProQual CAT1 Plus covers both and requires delegates to demonstrate when and why to use each.',
    },
    {
      q: 'Do I need to bring my own CAT and Genny?',
      a: 'No. Sygma provides Radiodetection CAT4 and Genny4 units as standard. This course can be delivered on any of the following equipment: Radiodetection CAT4, CAT4+, RD8200, RD8100, Vivax-Metrotech vLoc, or Leica DSX. If you want training delivered on your own equipment, we can accommodate that. We require a minimum of one locator per three delegates for client-supplied equipment.',
    },
    {
      q: 'Is CITB funding available for this course?',
      a: 'Sygma is a CITB Approved Training Organisation. Speak to your CITB Employer Network adviser about funding. All Sygma courses exceed 51% practical content, meeting CITB standards for hands-on training delivery.',
    },
  ],

  cta: {
    title: 'Book ProQual CAT1 Plus Training',
    description: 'Available at Wigan, Worcester, or on your site anywhere in the UK. Two days, two qualifications, forty-two practical criteria assessed.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
    secondaryLabel: 'View ProQual CAT1 (Standard)',
    secondaryHref: '/courses/proqualcat1-training',
  },
};
