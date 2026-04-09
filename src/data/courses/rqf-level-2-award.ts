import type { CoursePageData } from './types';

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
    },
  },

  hero: {
    eyebrow: 'Utility Avoidance',
    headline: 'RQF Level 2 Award in Utility Location and Avoidance: A Nationally Recognised Qualification',
    sub: 'The RQF Level 2 Award in Utility Location and Avoidance is the nationally recognised qualification for operatives working near buried services. Three delivery formats. Advanced content that goes beyond the qualification requirements. Knowledge and practical assessment included.',
    image: 'RD8100_vLoc_Pro3_2_cbaora',
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
      credential: 'RQF Level 2 Award',
      duration: '1-2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Training', to: '/training/cable-location-avoidance' },
      { label: 'RQF Level 2 Award' },
    ],
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

  photoStrips: [
    {
      variant: 'grid',
      images: [
        { src: 'CAT4-and-Genny-15', alt: 'RQF Level 2 Award training - practical session with CAT and Genny' },
        { src: 'CAT4-and-Genny-35', alt: 'RQF Level 2 Award training - hands-on assessment on site' },
        { src: 'CAT4-and-Genny-55', alt: 'RQF Level 2 Award - Genny signal application training' },
      ],
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
    description: 'In-house at your site. Three formats available: 1-day (max 6), 2-day (max 8), or 2-day split over 3 months (max 6).',
    primaryLabel: 'Request a Quote',
    primaryHref: '/contact',
    secondaryLabel: 'Compare With EUS CAT1',
    secondaryHref: '/courses/eus-cat1',
  },
};
