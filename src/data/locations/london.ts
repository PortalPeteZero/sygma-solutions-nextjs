import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { LocationPageData } from './types';

export const locationData: LocationPageData = {
  slug: 'london',
  metadata: {
    title: 'CAT and Genny Training London | Sygma Solutions',
    description: 'CAT and Genny training in London and the South East. On-site delivery across the region. Independent specialist provider. Travel included.',
    alternates: { canonical: 'https://sygma-solutions.com/locations/london' },
    openGraph: {
      title: 'CAT and Genny Training London | Sygma Solutions',
      description: 'CAT and Genny training in London and the South East. On-site delivery. Travel included.',
      images: [DEFAULT_OG_IMAGE],
    },
  },
  hero: {
    eyebrow: 'Training Locations',
    headline: 'Underground Utility Training in London and the South East',
    subtitle: 'Sygma delivers cable avoidance, utility mapping, and bespoke training on client sites across London and the South East. Travel is always included in the course fee. No surcharges.',
  },
  overview: {
    eyebrow: 'South East Coverage',
    title: 'Training in London, the Home Counties, and Across the South East',
    paragraphs: [
      'London and the South East is the most concentrated region for utility infrastructure work in the UK. Crossrail, Thames Tideway, HS2, fibre rollout, and constant development activity mean operatives are working near buried services every day, often in congested urban environments where service density is at its highest.',
      'Sygma delivers training on client sites across London and the South East. Our trainers travel to you. Training is delivered using your operatives\' own equipment, on your own site, in the conditions they actually work in. There are no travel surcharges for delivery anywhere on the UK mainland.',
      'For London-based teams, on-site delivery eliminates the need for operatives to travel to a training centre. Your team trains at the depot, the yard, or the project site, and is back on the tools the next day with no lost travel time.',
    ],
  },
  imageStrips: [
    [
      { src: 'CAT4-and-Genny-08', alt: 'Cable avoidance training on London construction site' },
      { src: 'CAT4-and-Genny-53', alt: 'Utility detection equipment in use South East' },
      { src: 'Safe-Dig-07', alt: 'Safe excavation near buried services London' },
    ],
    [
      { src: 'CAT4-and-Genny-56', alt: 'On-site utility avoidance assessment London' },
      { src: 'CAT4-and-Genny-05', alt: 'Advanced electromagnetic location training practical' },
      { src: 'CAT4-and-Genny-64', alt: 'Team completing cable detection certification' },
    ],
  ],
  courses: [
    { course: 'Cable Avoidance Training (CAT and Genny)', desc: 'One-day HSG47-compliant course. Classroom theory and practical site assessment. Sygma in-house certificate issued same day.' },
    { course: 'EUSR CAT1 Accreditation', desc: 'EUSR-registered company scheme accreditation. One-day delivery with practical and written assessment.' },
    { course: 'ProQual CAT1 and CAT1 Plus', desc: 'ProQual-accredited qualification with individual assessment in all four EML modes.' },
    { course: 'RQF Level 2 Award', desc: 'Nationally recognised formal qualification for operatives locating and avoiding buried services.' },
    { course: 'OSCA On-Site Competency Assessment', desc: 'GPS-stamped, photo-verified competency assessment on your live site. Not a training course.' },
    { course: 'Bespoke Corporate Programmes', desc: 'Multi-day programmes designed around your specific site risks, equipment fleet, and workforce.' },
  ],
  onSite: {
    eyebrow: 'On-Site Delivery',
    title: 'Training at Your London or South East Site',
    intro: 'Most Sygma courses can be delivered at your premises, depot, or project compound anywhere in London and the South East. On-site delivery requires a suitable indoor space for classroom theory and access to an outdoor area with buried metallic utilities for practical assessment.',
    areas: [
      { area: 'Central and Greater London', detail: 'All London boroughs, Canary Wharf, City of London, Westminster, and the wider Greater London area' },
      { area: 'Home Counties', detail: 'Surrey, Kent, Essex, Hertfordshire, Buckinghamshire, Berkshire, Hampshire, Sussex' },
      { area: 'Thames Valley and M25 Corridor', detail: 'Reading, Slough, Watford, Dartford, Croydon, Bromley, and the M25 corridor' },
    ],
  },
  sectors: {
    eyebrow: 'London and South East Sectors',
    title: 'Who We Train in London',
    items: [
      { sector: 'Major Infrastructure Projects', desc: 'Operatives and supervisors on Crossrail, Thames Tideway, HS2, and major London development schemes.' },
      { sector: 'Utilities and Network Operators', desc: 'Thames Water, UKPN, SGN, Cadent, Openreach, and their supply chain contractors managing buried assets across the capital.' },
      { sector: 'Construction and Development', desc: 'Groundworkers, piling contractors, and site teams on commercial and residential development projects.' },
      { sector: 'Highways and TfL', desc: 'Contractors working on TfL roads, borough highways, and the strategic road network across London and the South East.' },
    ],
  },
  cta: {
    title: 'Book Training in London and the South East',
    description: 'On-site at your premises anywhere in London or the South East. Travel included. Contact us to discuss dates, group size, and course requirements.',
    primaryLabel: 'Book a Course',
    primaryHref: '/contact',
    secondaryLabel: 'Courses in London',
    secondaryHref: '/cable-avoidance-training-london',
    phone: '0203 971 8252',
  },
};
