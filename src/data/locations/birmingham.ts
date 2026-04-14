import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { LocationPageData } from './types';

export const locationData: LocationPageData = {
  slug: 'birmingham',
  metadata: {
    title: 'CAT and Genny Training Birmingham | Sygma Solutions',
    description: 'CAT and Genny training in Birmingham and the West Midlands. On-site delivery across the region. Independent specialist provider. Travel included.',
    alternates: { canonical: 'https://sygma-solutions.com/locations/birmingham' },
    openGraph: {
      title: 'CAT and Genny Training Birmingham | Sygma Solutions',
      description: 'CAT and Genny training in Birmingham and the West Midlands. On-site delivery across the region. Independent specialist provider. Travel included.',
      images: [DEFAULT_OG_IMAGE],
    },
  },
  hero: {
    eyebrow: 'Training Locations',
    headline: 'Underground Utility Training in Birmingham and the Midlands',
    subtitle: 'Sygma delivers cable avoidance, utility mapping, and bespoke training across the Midlands. On-site at your premises or at our Worcester partner facility. Travel is always included in the course fee.',
  },
  overview: {
    eyebrow: 'Midlands Coverage',
    title: 'Training in Birmingham, Worcester, Coventry, and Across the Midlands',
    paragraphs: [
      'Sygma works with contractors, utilities, and infrastructure companies across the West Midlands, East Midlands, and surrounding counties. We deliver on-site training at client premises throughout the region, with no travel surcharges.',
      'For courses that require specialist facilities, including GPR training, PAS128 surveyor programmes, and advanced utility mapping qualifications, Sygma delivers from The Survey School in Worcester. This purpose-built facility provides the equipment and controlled survey conditions that higher-level practical assessments demand.',
      'The Midlands is one of the busiest regions for utility infrastructure work in the UK. Major road, rail, HS2, water, and energy programmes across the region create a continuous demand for operatives who are trained to locate and avoid buried services to the highest standard.',
    ],
  },
  imageStrips: [
    [
      { src: 'cat-26', alt: 'Cable avoidance training in the Midlands' },
      { src: 'GPR_14_ox4l10', alt: 'GPR survey training at Worcester facility' },
      { src: 'cat-42', alt: 'Utility detection practical exercise Birmingham' },
    ],
    [
      { src: 'dig-15', alt: 'Safe excavation training West Midlands site' },
      { src: 'cat-30', alt: 'On-site cable avoidance assessment Midlands' },
      { src: 'cat-11', alt: 'Advanced electromagnetic location equipment training' },
    ],
  ],
  facility: {
    eyebrow: 'Midlands Training Facility',
    title: 'The Survey School, Worcester',
    address: 'The Survey School, Waterworks Road, Worcester, WR1 3EZ',
    access: 'Accessible from the M5. Location details confirmed on booking. 40 minutes from Birmingham city centre.',
    facilities: 'Specialist survey training facility with GPR equipment, controlled survey sites, classroom space, and practical assessment areas.',
    courses: [
      'GPR Training (Module 1 and Module 2)',
      '5-Day PAS128 Surveyor Programme',
      'ProQual Level 3 Certificate (fast-track option)',
      'ProQual Level 4 Diploma',
      'ProQual Level 5 Diploma',
      'PAS128 Service Coordinator Awareness',
    ],
  },
  onSite: {
    eyebrow: 'On-Site Delivery',
    title: 'Training at Your Midlands Site',
    intro: 'Most Sygma utility avoidance courses can be delivered at your premises anywhere in the Midlands. Your operatives train on the ground they work on, using their own equipment and site procedures. Travel is included in the course fee.',
    areas: [
      { area: 'West Midlands', detail: 'Birmingham, Wolverhampton, Coventry, Dudley, Walsall, Solihull, Sandwell' },
      { area: 'East Midlands', detail: 'Nottingham, Leicester, Derby, Northampton, Lincoln, Loughborough' },
      { area: 'Surrounding Counties', detail: 'Worcestershire, Warwickshire, Staffordshire, Shropshire, Herefordshire, Gloucestershire' },
    ],
  },
  sectors: {
    eyebrow: 'Midlands Sectors',
    title: 'Who We Train in the Midlands',
    items: [
      { sector: 'HS2 and Rail Infrastructure', desc: 'Operatives and supervisors working on HS2, Network Rail, and light rail projects across the Midlands corridor.' },
      { sector: 'Water and Sewerage', desc: 'Severn Trent, Anglian Water, and their supply chain contractors operating across the Midlands water network.' },
      { sector: 'Highways and Streetworks', desc: 'Local authority and Highways England contractors working on the M6, M42, M1, and A-road networks.' },
      { sector: 'Energy and Telecommunications', desc: 'Gas, electricity, and fibre network contractors managing buried assets across the region.' },
    ],
  },
  cta: {
    title: 'Book Training in the Midlands',
    description: 'At The Survey School in Worcester, or at your site anywhere in the Midlands. Contact us to discuss dates, group size, and course requirements.',
    primaryLabel: 'Book a Course',
    primaryHref: '/contact',
    secondaryLabel: 'Courses in the Midlands',
    secondaryHref: '/cable-avoidance-training-birmingham',
    phone: '0203 971 8252',
  },
};
