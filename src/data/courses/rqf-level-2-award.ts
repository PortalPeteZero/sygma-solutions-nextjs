import type { CoursePageData } from './types';
import { DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/metadata';

export const courseData: CoursePageData = {
  slug: 'rqf-level-2-award',

  metadata: {
    title: 'RQF Level 2 Utility Location Award | Sygma Solutions',
    description: 'RQF Level 2 Award in Utility Location and Avoidance. Nationally recognised, Ofqual-regulated qualification for formal recognition of competency.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/rqf-level-2-award' },
    openGraph: {
      title: 'RQF Level 2 Utility Location Award | Sygma Solutions',
      description: 'RQF Level 2 Award in Utility Location and Avoidance. Nationally recognised, Ofqual-regulated qualification for formal recognition of competency.',
      url: 'https://sygma-solutions.com/courses/rqf-level-2-award',
      type: 'website',
      siteName: SITE_NAME,
      images: [DEFAULT_OG_IMAGE],
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'RQF Level 2 Award in Utility Location and Avoidance: A Nationally Recognised Qualification',
    sub: 'The RQF Level 2 Award in Utility Location and Avoidance is the nationally recognised qualification for operatives working near buried services. Three delivery formats. Advanced content that goes beyond the qualification requirements. Knowledge and practical assessment included.',
    image: 'Advanced-EM-07',
    alt: 'RQF Level 2 utility location award training with electromagnetic detection equipment',
    breadcrumbs: [
      { label: 'Training', href: '/training/cable-location-avoidance' },
      { label: 'RQF Level 2 Award' },
    ],
  },

  schemas: {
    course: {
      name: 'RQF Level 2 Award in Utility Location and Avoidance',
      description: 'RQF Level 2 Award in Utility Location and Avoidance, a nationally recognised Ofqual-regulated qualification. For operatives who need formal recognition of competency.',
      url: '/courses/rqf-level-2-award',
      credential: 'RQF Level 2 Award in Utility Location and Avoidance',
      duration: '1 day',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'RQF Level 2 Award' },
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
    { label: 'Qualification', value: 'RQF Level 2 Award' },
    { label: 'Formats Available', value: '1-day, 2-day, or 2-day split' },
    { label: 'Assessment', value: 'Knowledge and practical' },
    { label: 'Delivery', value: 'In-house, nationwide UK' },
  ],

  about: {
    eyebrow: 'Nationally Recognised Qualification',
    title: 'The RQF Level 2 Award in Utility Location and Avoidance',
    paragraphs: [
      'The RQF Level 2 Award in Utility Location and Avoidance (also referred to as the ProQual Level 2 Award) is the nationally recognised qualification for operatives who work near buried utilities. It replaces the older QCF Level 2 qualification of the same name and is accepted by major contractors, utilities, and employers across the industry.',
      'Sygma\'s delivery goes beyond what the qualification requires. The course includes advanced content in both classroom theory and site practical that equips delegates to work with real confidence (not just to pass the paper). Every delegate who completes the Level 2 with Sygma has been through content that exceeds the qualification standard.',
      'Three formats are available to fit different team sizes, site rosters, and operational requirements. All formats include both a knowledge-based assessment and a practical assessment.',
    ],
    sidebar: {
      eyebrow: 'Qualification Details',
      items: [
        { label: 'Qualification', value: 'RQF Level 2 Award in Utility Location and Avoidance' },
        { label: 'Framework', value: 'RQF (Regulated Qualifications Framework, replaces the QCF Level 2)' },
        { label: 'Assessment', value: 'Knowledge-based assessment paper and individual practical assessment' },
        { label: 'Formats', value: '1-day (max 6), 2-day consecutive (max 8), 2-day split 3 months apart (max 6)' },
        { label: 'Delivery', value: 'In-house bespoke at your premises' },
        { label: 'Pricing', value: 'By quotation (contact Sygma with format and group size)' },
      ],
    },
  },

  formats: {
    eyebrow: 'Course Formats',
    title: 'Three Formats to Suit Your Team',
    rows: [
      {
        format: '1-Day Format',
        duration: '1 day, 09:00 to approx 15:00',
        maxDelegates: 'Max 6',
        assessment: 'Classroom theory, site practical, and knowledge assessment all in one day',
      },
      {
        format: '2-Day Format',
        duration: '2 consecutive days, 09:00 to approx 15:00 each day',
        maxDelegates: 'Max 8',
        assessment: 'Day 1: full classroom theory and site practical; Day 2: knowledge assessment, further practical work, and individual assessments',
      },
      {
        format: '2-Day Split Format',
        duration: '2 days with a minimum 3-month gap between Day 1 and Day 2',
        maxDelegates: 'Max 6',
        assessment: 'Day 1: classroom theory and site practical training; Day 2 (3+ months later): assessment day (knowledge paper and individual practical assessments)',
      },
    ],
  },

  courseContent: {
    theory: {
      heading: 'Classroom Content',
      subheading: 'Theory That Exceeds the Qualification Standard',
      items: [
        'Health, safety, and financial consequences of underground utility strikes',
        'HSG47 compliance: safe system of work and legal obligations for operatives and employers',
        'Legislation and guidance, including differences between legislative instruments',
        'Client and designer responsibilities under HSG47',
        'Overview of utility networks: electricity, gas, water, communications, and asset types',
        'Buried service plans (STATS and PAS128): interpretation, inaccuracies, and limitations',
        'Equipment calibration, storage, and functional checks before any survey begins',
        'Electromagnetic theory: how a pipe and cable locator works, its limitations, tips and techniques',
        'Myth busting: what the equipment can and cannot detect in the field',
        'Controls and operation: correct use of the signal generator and cable locator in Power, Radio, Genny, and Avoidance modes',
        'Interpretation of signal: locating service joints, changes of direction, and depth',
        'Signal distortion and its effects on location accuracy',
        'Signal transmitter techniques: dual frequency, capacitance, earth positioning, blind induction, nulling out',
        'Data logging: locator data download and data analysis (optional element)',
        'Knowledge-based assessment paper',
      ],
    },
    practical: {
      heading: 'Site Practical and Assessment',
      subheading: 'Full Locate Process on a Real Utility Area',
      intro: 'The site practical takes delegates through the complete end-to-end locate process using their own equipment on a live utility area. Individual practical assessments are completed in line with the RQF Level 2 requirements and Sygma\'s additional criteria.',
      items: [
        'Reading service plans to identify indicated utility routes before going onto site',
        'Visual site checks before any work is undertaken',
        'Correct use of the signal generator and cable locator in Power, Radio, Genny, and Avoidance modes',
        'Benefits of always starting with the transmitter: the Genny-First methodology',
        'Capacitance techniques and earth repositioning in the field',
        'Locating problem services: street lighting, LV services, and communications cables',
        'Induction sweeps and nulling out on a live utility area',
        'Conducting a full electromagnetic utility survey from scratch',
        'Individual practical assessments to RQF Level 2 requirements and Sygma\'s additional criteria',
      ],
    },
  },

  certRoutes: {
    eyebrow: 'What You Get at the End',
    title: 'Course Completion and Certification',
    items: [
      { title: 'RQF Level 2 Award Certificate', desc: 'Ofqual-regulated formal qualification certificate. Nationally recognised and portable across employers and contracts.' },
      { title: 'Personalised Training Record', desc: 'Detailed digital record of your training, assessment results, and progress. Documented evidence of competency.' },
      { title: 'Practical Assessment Evidence', desc: 'Record of your practical assessment on site with real buried services, demonstrating competency in equipment operation and locate procedures.' },
      { title: 'Ongoing Support', desc: 'Access to Sygma for post-course technical guidance and support as you apply your training in the workplace.' },
    ],
  },

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-15', alt: 'RQF Level 2 Award training - practical session with CAT and Genny' },
        { src: 'CAT4-and-Genny-35', alt: 'RQF Level 2 Award training - hands-on assessment on site' },
        { src: 'CAT4-and-Genny-55', alt: 'RQF Level 2 Award -- Genny signal application training' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-09', alt: 'RQF Level 2 Award practical training session' },
        { src: 'CAT4-and-Genny-48', alt: 'Utility avoidance hands-on assessment' },
        { src: 'Safe-Dig-05', alt: 'Level 2 qualification practical demonstration' },
      ],
    },
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-62', alt: 'RQF Level 2 training with CAT and Genny' },
        { src: 'CAT4-and-Genny-30', alt: 'Utility locating qualification assessment' },
        { src: 'CAT4-and-Genny-20', alt: 'On-site RQF Level 2 practical training' },
      ],
    },
    {
      variant: 'full',
      images: [
        { src: 'Advanced-EM-08', alt: 'RQF Level 2 Award training -- live training environment' },
      ],
    },
  ],

  whoFor: {
    eyebrow: 'Who Should Attend',
    title: 'Audience',
    items: [
      {
        title: 'Operatives Working Near Buried Services',
        desc: 'Any operative required to locate or avoid buried utilities as part of their day-to-day work, particularly on contracts where a nationally recognised qualification is a site requirement.',
      },
      {
        title: 'Teams Upgrading from QCF Level 2',
        desc: 'The QCF Level 2 Award has been superseded by the RQF Level 2. Teams holding the older qualification who need to renew, or whose client now specifies the RQF version, can complete this course to update their credentials.',
      },
      {
        title: 'Supervisors and Team Leaders',
        desc: 'Supervisors who want to hold the qualification themselves or who need to understand the standard their team is trained to.',
      },
      {
        title: 'Contract Compliance',
        desc: 'Organisations whose procurement frameworks, tier 1 clients, or health and safety policies specifically require an RQF Level 2 qualification rather than a company scheme accreditation.',
      },
      {
        title: 'Rail, Water, and Energy Sector Workers',
        desc: 'Operatives in sectors where network owners require formal qualification evidence for anyone working near their infrastructure assets.',
      },
    ],
  },

  siteRequirements: {
    items: [
      { label: 'STATS plans', detail: 'Buried service drawings appropriate to the practical site. Sygma can source at additional cost if unavailable.' },
      { label: 'Equipment', detail: 'Each operative\'s own cable locating equipment. Sygma carries a stock but cannot guarantee an exact model match (equipment can be supplied at additional cost).' },
      { label: 'Room', detail: 'Meeting or conference room for up to 8 delegates with welfare facilities.' },
      { label: 'Site', detail: 'Suitable site with buried metallic utilities near the training room for the practical element.' },
      { label: 'PPE', detail: 'Appropriate PPE for all delegates in line with national and company requirements.' },
    ],
  },

  hsg47: {
    items: [
      { eyebrow: 'Trained and Competent Operatives', title: 'Training and Competence', desc: 'Every operative must be trained in locator use and understand equipment limitations. The RQF Level 2 provides formal, documented evidence of competence.' },
      { eyebrow: 'Safe System of Work', title: 'Safe System', desc: 'HSG47 mandates a structured approach from plan reading through visual inspection to safe excavation. This course covers the complete system.' },
      { eyebrow: 'Service Plan Checks', title: 'Plan Reading', desc: 'Operatives must obtain and verify service plans before excavation. The course includes dedicated plan reading and reconciliation training.' },
      { eyebrow: 'Correct Use of Equipment', title: 'Equipment Operation', desc: 'HSG47 requires proper operation of locating tools. All four modes, signal interpretation, and limitations are covered in depth.' },
      { eyebrow: 'Visual Inspection', title: 'Visual Inspection', desc: 'A structured visual site inspection is a legal requirement before and during excavation. The course teaches the process systematically.' },
      { eyebrow: 'Evidenced Training Records', title: 'Training Records', desc: 'Training must be documented and verifiable. Delegates receive a certificate and QR-code feedback reports for your records.' },
    ],
  },

  whySygma: {
    items: [
      { eyebrow: 'Content That Exceeds the Standard', title: 'Content That Exceeds the Standard', desc: 'Sygma does not teach to the minimum. Every delegate receives advanced content covering electromagnetic theory, signal interpretation, and the Genny-First methodology that produces a 70 to 80% measurable increase in Genny usage.' },
      { eyebrow: 'Specialist Trainers Only', title: 'Specialist Trainers Only', desc: 'Every Sygma trainer is a directly employed, TAQA-qualified utility mapping professional with surveying or equipment manufacturer experience. Your operatives are trained by people who have done the job, not generalists reading from a course pack.' },
      { eyebrow: 'Independent of All Manufacturers', title: 'Independent of All Manufacturers', desc: 'Sygma does not sell locating equipment. Training is delivered without commercial bias. Your operatives learn how to get the best out of the equipment they already use.' },
      { eyebrow: 'Real Practical Assessment', title: 'Real Practical Assessment', desc: 'Every delegate is assessed on a site with real buried services. This is not a classroom exercise. Operatives demonstrate competency under conditions that reflect their actual working environment.' },
      { eyebrow: 'Three Formats, Your Site', title: 'Three Formats, Your Site', desc: 'Choose 1-day, 2-day, or 2-day split to fit your team\'s roster and operational requirements. All formats are delivered at your premises anywhere in the UK. Travel is included in the course rate.' },
      { eyebrow: 'Same-Day Feedback Reporting', title: 'Same-Day Feedback Reporting', desc: 'Every course produces a QR-code delegate feedback report delivered on the same day. You receive documented evidence of what was delivered, how it was received, and assessment outcomes for every delegate.' },
    ],
  },

  citbFunding: {
    paragraphs: [
      'Sygma is a CITB Approved Training Organisation. Contact your adviser about funding. Courses exceed 51% practical.',
    ],
  },

  relatedCourses: {
    eyebrow: 'Related Courses',
    title: 'Other Qualifications You May Need',
    items: [
      {
        eyebrow: 'Utility Avoidance',
        title: 'EUS CAT1',
        desc: 'EUSR-registered qualification. Common requirement in utility sector frameworks.',
        href: '/courses/eus-cat1',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'ProQual CAT1',
        desc: 'Accredited qualification covering all four EML connection modes.',
        href: '/courses/proqualcat1-training',
      },
      {
        eyebrow: 'Utility Avoidance',
        title: 'Cable Avoidance Training',
        desc: 'Foundation cable avoidance course for operatives who need core locate skills.',
        href: '/courses/cable-avoidance-training',
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
      q: 'What is the difference between the RQF Level 2 and the QCF Level 2?',
      a: 'The QCF (Qualifications and Credit Framework) Level 2 Award has been superseded by the RQF (Regulated Qualifications Framework) Level 2 Award. The qualification name (Level 2 Award in Utility Location and Avoidance) is the same, and the subject matter is equivalent. If your operatives hold an older QCF qualification, they will need to complete the RQF version to hold a current, recognised qualification.',
    },
    {
      q: 'What is the difference between the RQF Level 2 and the EUS CAT1 qualification?',
      a: 'These are two different qualification schemes. The RQF Level 2 Award in Utility Location and Avoidance is a nationally recognised qualification delivered through the RQF framework. EUS CAT1 is an EUSR-registered qualification. Both cover utility location and avoidance. The right qualification depends on your client or contract requirements (some specify EUS, others accept the Level 2). Contact Sygma if you are unsure which to choose.',
    },
    {
      q: 'Which format is right for my team?',
      a: 'If your team needs to be qualified quickly and your group is small (up to 6), the 1-day format is the most efficient. For groups up to 8, the 2-day consecutive format gives more practical time. The 2-day split format is ideal if you want delegates to apply their learning on site between sessions before returning for their assessment day (this can produce stronger results in the practical assessment).',
    },
    {
      q: 'Do delegates need any prior training or experience before attending?',
      a: 'No. The course is designed to be accessible to delegates with no prior formal training in utility avoidance. Sygma\'s delivery starts from first principles and includes advanced content that benefits experienced operatives as well as those new to the role.',
    },
    {
      q: 'Does Sygma supply the locating equipment?',
      a: 'Sygma carries a stock of equipment but cannot guarantee it will be the same model as your delegates use in their day-to-day role. We strongly recommend delegates bring their own locators where possible. Equipment can be supplied at additional cost (confirm requirements when booking).',
    },
    {
      q: 'Is data logging covered?',
      a: 'Data logging is included as an optional element in the classroom session. If your company uses locator data management systems or requires data download capability, Ask Sygma about the locator data management training for operatives who need full data competence.',
    },
  ],

  cta: {
    title: 'Enquire About the RQF Level 2 Award',
    description: 'In-house at your site. Three formats available: 1-day (max 6), 2-day (max 8), or 2-day split over 3 months (max 6). Contact us with your group size and preferred format for a tailored quotation.',
    primaryLabel: 'Request a Quote',
    primaryHref: '/contact',
    secondaryLabel: 'Compare With EUS CAT1',
    secondaryHref: '/courses/eus-cat1',
  },
};
