import type { CoursePageData } from './types';

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
    description: '2 days, maximum 6 delegates. In-house cat and genny training at your site anywhere in the UK. Built specifically for Scottish Water supply chain teams operating under the Zero Strike Initiative.',
    primaryLabel: 'Request a Quote',
    primaryHref: '/contact',
    secondaryLabel: 'View EUS Superuser (Non-Scottish Water)',
    secondaryHref: '/courses/eus-superuser',
  },
};
