import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'level-3-certificate',

  metadata: {
    title: 'ProQual Level 3 Utility Mapping Course | Sygma Solutions',
    description: 'ProQual Level 3 Certificate in Utility Mapping and Surveying. Ofqual-regulated qualification to locate underground utilities and buried services.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-3-certificate' },
    openGraph: {
      title: 'ProQual Level 3 Utility Mapping Course | Sygma Solutions',
      description: 'ProQual Level 3 Certificate in Utility Mapping and Surveying. Ofqual-regulated qualification to locate underground utilities and buried services.',
      url: 'https://sygma-solutions.com/courses/level-3-certificate',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual Level 3 Certificate in Utility Mapping and Surveying',
    sub: 'The nationally recognised, Ofqual-regulated entry qualification for utility surveyors. Full assessor support throughout. Contact us to discuss enrolment and pricing.',
    images: ['GPR_01_wnqqdp', 'GPR_02_opno5e', 'RD_8100_1_aeiaur'],
    alts: [
      'Advanced electromagnetic locating techniques during ProQual Level 3 training',
      'MALA ground penetrating radar unit used in Level 3 utility mapping coursework',
      'Advanced electromagnetic locating techniques during ProQual Level 3 training',
    ],
    breadcrumbs: [
      { label: 'Training', href: '/training/utility-mapping-surveying' },
      { label: 'Level 3 Certificate' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 3 Certificate in Utility Mapping and Surveying',
      description: 'The nationally recognised, Ofqual-regulated entry qualification for utility surveyors. Full assessor support throughout. Contact us to discuss enrolment and pricing.',
      url: '/courses/level-3-certificate',
      credential: 'Level 3 Certificate in Utility Mapping',
      duration: 'Part-time',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 3 Certificate' },
    ],
    includeFaqSchema: true,
  },

  stats: [
    {
      value: 'Ofqual Regulated',
      label: 'National Qualification',
      detail: 'Recognised across the UK construction, utilities and surveying sectors.',
    },
    {
      value: 'Full Support',
      label: 'Assessor Guidance',
      detail: 'Complete assessment and mentoring throughout your qualification journey.',
    },
    {
      value: 'Entry Level',
      label: 'Qualification Pathway',
      detail: 'Gateway to Level 4 Specialist and Level 5 Diploma qualifications.',
    },
  ],

  infoBar: [
    {
      label: 'Duration',
      value: 'Part-time (varies by learner)',
    },
    {
      label: 'Format',
      value: 'Work-based evidence + classroom support',
    },
    {
      label: 'Assessment',
      value: 'Portfolio of evidence',
    },
    {
      label: 'Level',
      value: 'Entry to utility surveying',
    },
    {
      label: 'Recognition',
      value: 'Ofqual regulated',
    },
  ],

  cta: {
    title: 'Enquire About Level 3 Certificate',
    description: 'The entry qualification for utility surveyors. Work-based assessment with full assessor support. Contact Sygma to discuss enrolment and pricing.',
    primaryLabel: 'Enquire About Level 3',
    primaryHref: '/contact',
    secondaryLabel: 'Explore Level 4 Specialist',
    secondaryHref: '/courses/level-4-specialist',
  },

  faqs: [
    {
      q: 'Is the Level 3 Certificate mandatory before I can do Level 4 or Level 5?',
      a: 'Yes. The ProQual Level 3 Certificate in Utility Mapping and Surveying is a mandatory prerequisite for entry into the Level 4 or Level 5 Diploma. You cannot enrol on the higher levels without first holding the Level 3.',
    },
    {
      q: 'Can I use evidence from my current job rather than attending a training course?',
      a: 'Yes. The Level 3 Certificate is assessed through work-based evidence, so if you are already working in utility surveying, much of the evidence you need can come from your current role. Our assessors will help you identify what evidence to collect and how to present it. A 2-day structured training session is also available for candidates who want a classroom-based route to the evidence they need.',
    },
    {
      q: 'How long does it take to complete the Level 3 Certificate?',
      a: 'The timescale varies depending on how much workplace evidence you already have available. Some candidates who are already working in utility surveying can complete within a few weeks of induction. Others take a few months to build up the required evidence portfolio. Your tailored assessment plan will give you a realistic timeline based on your individual situation.',
    },
    {
      q: 'What does the assessment fee include?',
      a: 'The fixed fee covers your full assessment support including induction, tailored assessment plan, e-portfolio access, workbooks, assessor support, mentoring, and open day attendance. It does not include the ProQual registration fee, which is a separate charge paid directly to ProQual. There are no additional fees for extra assessments or re-submissions. Contact us for a quote.',
    },
    {
      q: 'Can my employer put multiple staff through the Level 3 together?',
      a: 'Yes. We offer fast-track and private assessment sessions for organisations who want to put groups through together. This can be delivered at your premises or at our Wigan centre. Contact us for group pricing.',
    },
    {
      q: 'Does completing the Level 3 Certificate mean I can carry out PAS128 surveys?',
      a: 'The Level 3 Certificate demonstrates assessed competence in carrying out PAS128 Quality Level D desktop surveys and Quality Level C site reconnaissance. Whether a certificate-holder can carry out surveys independently is a matter for their employer and the relevant survey specification. The qualification is the recognised professional standard for these survey types.',
    },
  ],
};
