import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { LocationPageData } from './types';

export const locationData: LocationPageData = {
  slug: 'manchester',
  metadata: {
    title: 'CAT and Genny Training Manchester | Sygma Solutions',
    description: 'Specialist CAT and Genny training in Manchester and the North West. On-site and classroom delivery from our Wigan training centre. Travel included.',
    alternates: { canonical: 'https://sygma-solutions.com/locations/manchester' },
    openGraph: {
      title: 'CAT and Genny Training Manchester | Sygma Solutions',
      description: 'Specialist CAT and Genny training in Manchester and the North West. Travel included.',
      images: [DEFAULT_OG_IMAGE],
    },
  },
  hero: {
    eyebrow: 'Training Locations',
    headline: 'Underground Utility Training in Manchester and the North West',
    subtitle: 'Sygma\'s Wigan training centre is in the heart of the North West, 20 minutes from Manchester city centre. We also deliver on-site training at client premises across the region. Travel is always included.',
  },
  overview: {
    eyebrow: 'North West Coverage',
    title: 'Training in Manchester, Wigan, Liverpool, and Across the North West',
    paragraphs: [
      'Sygma Solutions is based in Wigan, making the North West our home region. Our primary training centre at Hindley Business Centre is equipped with live utility demonstration rigs, indoor classroom space, and outdoor practical assessment areas with real buried services.',
      'For clients who need training delivered on their own site, we travel across the North West regularly, covering Manchester, Liverpool, Preston, Bolton, Warrington, Chester, Lancaster, and everywhere in between. Travel is included in the course fee with no surcharges.',
      'We work with major contractors, utilities, and infrastructure companies across the region, including clients operating on motorway, rail, water, gas, and telecommunications networks throughout Greater Manchester, Merseyside, Lancashire, and Cheshire.',
    ],
  },
  imageStrips: [
    [
      { src: 'cat-92', alt: 'Cable avoidance training Wigan North West' },
      { src: 'cat-93', alt: 'CAT and Genny techniques training Manchester' },
      { src: 'cat-16', alt: 'Utility detection practical exercise Greater Manchester' },
    ],
    [
      { src: 'cat-94', alt: 'On-site assessment North West cable avoidance' },
      { src: 'cat-48', alt: 'Team at Wigan training centre completing course' },
      { src: 'cat-95', alt: 'Locator training in the North West' },
    ],
  ],
  facility: {
    eyebrow: 'Sygma HQ',
    title: 'Wigan Training Centre',
    address: 'Hindley Business Centre, Platt Lane, Hindley, Wigan, WN2 3PA',
    access: 'Accessible from the M6, M58, and M61. Free parking on site. 20 minutes from Manchester city centre, 30 minutes from Liverpool.',
    facilities: 'Classroom space, live utility demonstration area, outdoor practical assessment site with real buried metallic services, welfare facilities, and free parking.',
    courses: [
      'Cable Avoidance Training (CAT and Genny)',
      'EUSR CAT1 and ProQual CAT1 Accreditation',
      'ProQual CAT1 Plus and CAT2',
      'Advanced EM Location',
      'RQF Level 2 Award',
      'ProQual Level 3 Certificate',
      'ProQual Level 4, 5, and 6 Diplomas',
      'CAT Manager Training',
      'Bespoke and Corporate Programmes',
    ],
  },
  onSite: {
    eyebrow: 'On-Site Delivery',
    title: 'Training at Your North West Site',
    intro: 'Most Sygma courses can be delivered at your premises anywhere in the North West. Your team learns on the ground they work on, using their own equipment and procedures. On-site delivery requires a suitable indoor space for theory sessions and access to an outdoor area with buried metallic utilities for practical assessment.',
    areas: [
      { area: 'Greater Manchester', detail: 'Manchester, Salford, Stockport, Oldham, Rochdale, Bolton, Bury, Tameside, Trafford, Wigan' },
      { area: 'Merseyside and Lancashire', detail: 'Liverpool, Wirral, St Helens, Knowsley, Sefton, Preston, Blackburn, Burnley, Lancaster' },
      { area: 'Cheshire and Warrington', detail: 'Chester, Crewe, Warrington, Macclesfield, Northwich, Ellesmere Port' },
    ],
  },
  sectors: {
    eyebrow: 'North West Sectors',
    title: 'Who We Train in the North West',
    items: [
      { sector: 'Motorway and Rail Infrastructure', desc: 'Operatives and supervisors on HS2, Network Rail, and motorway network projects across the region.' },
      { sector: 'Utilities and Network Operators', desc: 'United Utilities, Cadent, Openreach, and contractors managing water, gas, and telecommunications networks.' },
      { sector: 'Construction and Development', desc: 'Groundworkers, piling contractors, and teams on commercial and residential development projects.' },
      { sector: 'Highways and Local Authority', desc: 'Contractors working on motorways, A-roads, and local authority highways across Greater Manchester and beyond.' },
    ],
  },
  cta: {
    title: 'Book Training in the North West',
    description: 'At Sygma HQ in Wigan or at your site anywhere in the North West. Contact us to discuss dates, group size, and course requirements.',
    primaryLabel: 'Book a Course',
    primaryHref: '/contact',
    secondaryLabel: 'Courses in the North West',
    secondaryHref: '/cable-avoidance-training-manchester',
    phone: '0203 971 8252',
  },
};
