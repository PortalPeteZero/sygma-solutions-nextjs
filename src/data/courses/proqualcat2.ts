import type { CoursePageData } from './types';

export const courseData: CoursePageData = {
  slug: 'proqualcat2',

  metadata: {
    title: 'ProQual CAT2 | Safe Excavation Qualification',
    description: 'ProQual CAT2 safe excavation qualification. BS 8475:2015 certified. Two-day course covering 24 theory and 15 practical criteria. Book your training.',
    alternates: { canonical: 'https://sygma-solutions.com/courses/proqualcat2' },
    openGraph: {
      title: 'ProQual CAT2 | Safe Excavation Qualification',
      description: 'ProQual CAT2 safe excavation qualification. BS 8475:2015 certified. Two-day course covering 24 theory and 15 practical criteria. Book your training.',
      url: 'https://sygma-solutions.com/courses/proqualcat2',
      siteName: 'Sygma Solutions',
      type: 'website',
    },
  },

  hero: {
    eyebrow: 'Safe Excavation',
    headline: 'ProQual CAT2 (Safe Excavation & Hazard Management)',
    sub: 'The independent certification for safe excavation in the UK. Covers 24 theory criteria and 15 practical assessment points across four stages.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/courses' },
      { label: 'ProQual CAT2' },
    ],
  },

  schemas: {
    course: {
      name: 'ProQual CAT2 (Safe Excavation & Hazard Management)',
      description: 'ProQual CAT2 is a comprehensive two-day qualification covering safe excavation practice, utility avoidance, and hazard management. It meets the BS 8475:2015 standard for independent certification. The course includes both theory and on-site practical assessment, ensuring delegates are truly competent to plan and manage safe dig operations.',
      url: '/courses/proqualcat2',
      credential: 'ProQual CAT2 Certificate',
      duration: '2 days',
      mode: ['onsite'],
    },
    breadcrumbs: [
      { label: 'Home', to: '/' },
      { label: 'Courses', to: '/courses' },
      { label: 'ProQual CAT2' },
    ],
  },

  stats: [
    {
      value: '24',
      label: 'Theory Criteria',
      detail: 'Individual T1-T24 assessment points',
    },
    {
      value: '15',
      label: 'Practical Criteria',
      detail: 'Four assessment stages P1-P4',
    },
    {
      value: '2',
      label: 'Days',
      detail: '16 hours of comprehensive training',
    },
  ],

  faqs: [
    {
      q: 'How many criteria does ProQual CAT2 cover?',
      a: 'ProQual CAT2 covers 24 individual theory criteria (T1-T24) and 15 individual practical criteria across four assessment stages (P1.1, P1.2, P2.1-P2.5, P3.1-P3.5, P4.1-P4.3). Every criterion is assessed independently. There is no aggregated pass mark that allows a weak area to be masked by strong performance elsewhere. Completing all criteria demonstrates competence across the full scope of safe excavation practice.',
    },
    {
      q: 'Do we need to hold ProQual CAT1 before attending ProQual CAT2?',
      a: 'ProQual CAT1 or EUS CAT1 (or an equivalent utility locating qualification) is strongly recommended as a pre-requisite. There is no formal entry requirement, but ProQual CAT2 includes on-site locating work as part of the safe dig assessment. Delegates who are not comfortable operating a CAT and Genny locator will find the practical element difficult. The entry level for this training course assumes basic understanding of utility avoidance principles.',
    },
    {
      q: 'Can ProQual CAT2 be delivered on the same day as ProQual CAT1?',
      a: 'For most groups, combining CAT1 and CAT2 in a single day is not recommended due to the breadth of content and the on-site practical requirements of both qualifications. However, Sygma Solutions can design a two-day combined programme for groups who need both qualifications. Contact us to discuss your specific requirements.',
    },
    {
      q: 'Is ProQual CAT2 better than EUS CAT2?',
      a: 'Neither is universally better. The right qualification depends on the competence framework your organisation uses. ProQual tends to be preferred in regulated sectors where independent certification matters. EUS is widely recognised across utility companies and private contractors. Both meet BS 8475:2015 standard. Discuss with your training provider which suits your team\'s needs.',
    },
    {
      q: 'What practical assessment is involved?',
      a: 'ProQual CAT2 includes an on-site practical assessment that covers safe digging technique, hazard identification, and CAT/Genny operation. Delegates must demonstrate competence across multiple real-world scenarios. The practical element runs concurrently with the theory delivery. You\'ll be assessed using the CAT and Genny in a controlled field setting.',
    },
    {
      q: 'How long does ProQual CAT2 take?',
      a: 'ProQual CAT2 is typically delivered as a two-day course (16 hours). This allows sufficient time for both theory and practical elements to be covered thoroughly without rushing. Some organisations may deliver it across three days with shorter daily sessions. Sygma Solutions can discuss flexible scheduling options.',
    },
    {
      q: 'Is ProQual CAT2 suitable for supervisors and managers?',
      a: 'Yes. ProQual CAT2 is designed for anyone involved in safe excavation work, including site supervisors, managers, and ground workers. The breadth of criteria (24 theory, 15 practical) ensures comprehensive coverage of safe practice across all roles. Supervisors particularly benefit from the assessment planning and hazard management criteria.',
    },
    {
      q: 'Can we run ProQual CAT2 in-house at our organisation?',
      a: 'Only approved training providers can deliver ProQual qualifications. Sygma Solutions is an approved provider and can deliver ProQual CAT2 at your site if you have suitable facilities (classroom space and an area safe for practical work with locating equipment). Contact us to discuss your requirements.',
    },
  ],

  cta: {
    title: 'Ready to Enhance Your Team?',
    description: 'ProQual CAT2 certification demonstrates genuine competence in safe excavation. Sygma Solutions delivers this advanced qualification with experienced instructors and flexible scheduling.',
    primaryLabel: 'Book Now',
    primaryHref: '/contact',
  },
};
