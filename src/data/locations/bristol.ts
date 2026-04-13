import { DEFAULT_OG_IMAGE } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { LocationPageData } from './types';

export const locationData: LocationPageData = {
  slug: 'bristol',
  metadata: {
    title: 'Utility Training Bristol & South West | Sygma Solutions',
    description: 'Utility mapping and PAS 128 training in Bristol and the South West. On-site delivery across the region. Independent specialist. Travel included.',
    alternates: { canonical: 'https://sygma-solutions.com/locations/bristol' },
    openGraph: {
      title: 'Utility Training Bristol & South West | Sygma Solutions',
      description: 'Utility mapping and PAS 128 training in Bristol and the South West. Travel included.',
      images: [DEFAULT_OG_IMAGE],
    },
  },
  hero: {
    eyebrow: 'Training Locations',
    headline: 'Underground Utility Training in Bristol and the South West',
    subtitle: 'Sygma delivers cable avoidance, utility mapping, and bespoke training on client sites across the South West. Travel is always included in the course fee. Worcester-based courses also serve the region.',
  },
  overview: {
    eyebrow: 'South West Coverage',
    title: 'Training in Bristol, Bath, Exeter, and Across the South West',
    paragraphs: [
      'Sygma delivers training across the South West, from Bristol and Bath through Somerset, Devon, Cornwall, Dorset, and Wiltshire. Our trainers travel to your site with all equipment and assessment materials. Travel is included in the course fee with no additional charges.',
      'For courses that require specialist facilities, including GPR training, PAS128 surveyor programmes, and advanced utility mapping qualifications, The Survey School in Worcester is the nearest Sygma training facility, approximately 90 minutes from Bristol via the M5.',
      'The South West has significant water, energy, and highway infrastructure programmes. Wessex Water, South West Water, Western Power Distribution, Wales and West Utilities, and Highways England all operate major networks across the region, creating demand for operatives trained to the highest standard in buried service detection.',
    ],
  },
  imageStrips: [
    [
      { src: 'GPR_15_cyzrhd', alt: 'GPR utility survey training South West' },
      { src: 'Utility-Mapping-02', alt: 'Utility mapping field work Bristol region' },
      { src: 'MALA-GPR-25', alt: 'Ground penetrating radar practical exercise' },
    ],
    [
      { src: 'CAT4-and-Genny-50', alt: 'Cable avoidance training on South West site' },
      { src: 'MALA-GPR-19', alt: 'PAS128 survey assessment South West' },
      { src: 'Safe-Dig-02', alt: 'Safe excavation practices training Bristol' },
    ],
  ],
  facility: {
    eyebrow: 'Nearest Training Facility',
    title: 'The Survey School, Worcester',
    address: 'The Survey School, Waterworks Road, Worcester, WR1 3EZ',
    distance: 'Approximately 90 minutes via the M5. Accessible from all major South West routes.',
    access: '',
    facilities: 'Specialist survey equipment for GPR and electromagnetic training, controlled outdoor survey area, classroom space, and welfare facilities. Used primarily for PAS128 surveyor programmes, GPR training, and advanced mapping qualifications.',
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
    title: 'Training at Your South West Site',
    intro: 'Most Sygma utility avoidance courses can be delivered at your premises anywhere in the South West. Your operatives train on the ground they work on, using their own equipment and site procedures. On-site delivery requires a suitable indoor space for theory sessions and access to an outdoor area with buried metallic utilities for practical assessment.',
    areas: [
      { area: 'Bristol and Bath', detail: 'Bristol, Bath, South Gloucestershire, North Somerset, and the wider Bristol city region' },
      { area: 'Devon, Cornwall, and Somerset', detail: 'Exeter, Plymouth, Taunton, Truro, Torbay, Barnstaple, and surrounding areas' },
      { area: 'Dorset and Wiltshire', detail: 'Bournemouth, Poole, Salisbury, Swindon, Chippenham, and surrounding areas' },
    ],
  },
  sectors: {
    eyebrow: 'South West Sectors',
    title: 'Who We Train in the South West',
    items: [
      { sector: 'Water and Sewerage', desc: 'Wessex Water, South West Water, Bristol Water, and their supply chain contractors operating across the region\'s water and sewerage networks.' },
      { sector: 'Energy Distribution', desc: 'Western Power Distribution, Wales and West Utilities, and contractors managing gas and electricity assets across the South West.' },
      { sector: 'Highways and Infrastructure', desc: 'Highways England, local authority, and PFI contractors working on the M4, M5, M32, and A-road networks.' },
      { sector: 'Construction and Development', desc: 'Groundworkers, piling contractors, and site teams on commercial, residential, and mixed-use development projects across the region.' },
    ],
  },
  cta: {
    title: 'Book Training in the South West',
    description: 'On-site at your premises anywhere in the South West, or at The Survey School in Worcester. Contact us to discuss dates, group size, and course requirements.',
    primaryLabel: 'Book a Course',
    primaryHref: '/contact',
    secondaryLabel: 'Courses in the South West',
    secondaryHref: '/utility-mapping-training-bristol',
    phone: '0203 971 8252',
  },
};
