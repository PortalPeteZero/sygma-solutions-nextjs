import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'level-4-diploma',

  metadata: {
    title: 'ProQual Level 4 Diploma in Utility Mapping | Sygma Solutions',
    description: 'ProQual Level 4 Diploma in Utility Mapping and Surveying. Portfolio-based advanced qualification. Ofqual-regulated. For specialist technical practitioners.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/level-4-diploma' },
    openGraph: {
      title: 'ProQual Level 4 Diploma in Utility Mapping | Sygma Solutions',
      description: 'ProQual RQF Level 4 Diploma in Utility Mapping and Surveying. Advanced technical qualification.',
      url: 'https://sygma-solutions.com/courses/level-4-diploma',
      type: 'website'
    }
  },

  hero: {
    eyebrow: 'Qualifications',
    headline: 'ProQual RQF Level 4 Diploma in Utility Mapping and Surveying',
    sub: 'Formal recognition of specialist technical competency in utility mapping and surveying. Work at your own pace with full assessor support and mentoring throughout. Portfolio-based assessment drawing on your existing professional experience. No written exam. No fixed time limits. Contact us to discuss enrolment and pricing.',
    images: [
      'MALA-GPR-06',
      'MALA-GPR-11',
      'Advanced-EM-04',
    ],
    alts: [
      'Advanced utility mapping training for Level 4 qualification',
      'Professional GPR survey techniques covered in the Level 4 course',
      'Advanced EM locating methods taught in the Level 4 diploma programme',
    ],
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 4 Diploma' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual Level 4 Diploma in Utility Mapping and Surveying',
      description: 'Ofqual-regulated Level 4 Diploma in Utility Mapping and Surveying. Portfolio-based assessment with ongoing tutor support.',
      url: '/courses/level-4-diploma',
      credential: 'Level 4 Diploma in Utility Surveying',
      duration: 'Part-time',
      mode: ['online']
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/utility-mapping-surveying' },
      { label: 'Level 4 Diploma' }
    ],
    includeFaqSchema: true,
  },

  faqs: [
    {
      q: 'How long does Level 4 take to complete?',
      a: 'Most candidates complete within 6-9 months, depending on experience and evidence availability. The timeline depends on how quickly you can gather work-based evidence and progress through assessor-led review sessions. Your assessor will advise on realistic timescales at enrolment.'
    },
    {
      q: 'Is the Level 4 the same as the TSA and ICES programme?',
      a: 'No. The ProQual Level 4 Diploma in Utility Mapping and Surveying is a distinct qualification. The TSA and ICES Utility Mapping Programme (7 modules, 17+ days) provides structured training evidence that supports the Level 4 qualification. Many delegates complete the TSA and ICES programme first, then use that evidence as part of their Level 4 portfolio submission.'
    },
    {
      q: 'Can I study part-time while working?',
      a: 'Yes. The Level 4 is portfolio-based and designed for working professionals. You progress at your own pace, applying your professional experience as evidence. Assessor support is provided via regular review sessions (usually monthly) to guide your portfolio development.'
    },
    {
      q: 'What if I don\'t have all the evidence needed when I enrol?',
      a: 'This is normal. Your assessor will help you identify gaps and plan how to gather evidence from your existing work or through additional training. Your assessor is there to support you throughout, not just to assess at the end.'
    },
    {
      q: 'Is there a written exam?',
      a: 'No. The Level 4 assessment is portfolio-based. You submit evidence from your professional practice (reports, site records, assessor observations), supplemented by knowledge workbooks covering any areas not fully demonstrated by workplace evidence. No written exam is required.'
    },
  ],

  cta: {
    title: 'Enrol in Level 4 Diploma',
    description: 'Portfolio-based assessment with full assessor support. Contact us to discuss enrolment, evidence requirements, and pricing.',
    primaryLabel: 'Get Started',
    primaryHref: '/contact',
  },
};
