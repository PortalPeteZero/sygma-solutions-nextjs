/* ------------------------------------------------------------------ */
/*  Single source of truth for all navigation links                    */
/*  Imported by: Navbar, Footer, category pages                        */
/* ------------------------------------------------------------------ */

export interface NavItem { label: string; to: string }
export interface NavGroup { group: string; items: NavItem[] }
export interface NavMenu { label: string; href: string; children?: NavGroup[] }
export interface FooterLink { label: string; href: string }

/* ------------------------------------------------------------------ */
/*  Main navigation tree (Navbar mega menus)                           */
/* ------------------------------------------------------------------ */

export const mainNav: NavMenu[] = [
  {
    label: 'Utility Avoidance',
    href: '/training/cable-location-avoidance',
    children: [
      {
        group: 'Operator Courses',
        items: [
          { label: 'Cable Avoidance Training', to: '/courses/cable-avoidance-training' },
          { label: 'EUSR CAT1', to: '/courses/eus-cat1' },
          { label: 'ProQual CAT1', to: '/courses/proqualcat1-training' },
          { label: 'ProQual CAT1 Plus', to: '/courses/proqualcat1plus' },
          { label: 'RQF Level 2 Award', to: '/courses/rqf-level-2-award' },
          { label: 'CAT & Genny Training', to: '/courses/cat-and-genny-training' },
          { label: 'vScan & Tx Training', to: '/courses/vscan-and-transmitter-training' },
        ],
      },
      {
        group: 'Safe Dig & Combined',
        items: [
          { label: 'EUSR CAT2 Safe Dig', to: '/courses/eus-cat2-safe-dig' },
          { label: 'ProQual CAT2 Safe Dig', to: '/courses/proqualcat2' },
          { label: 'EUSR CAT1 & CAT2 Combined', to: '/courses/eus-cat1-cat2-combined' },
          { label: 'ProQual CAT1 & CAT2 Combined', to: '/courses/proqual-cat1-cat2-combined' },
          { label: 'EUSR CAT1, CAT2 & USC', to: '/courses/eus-cat1-cat2-usc-combined' },
        ],
      },
      {
        group: 'Supervisor Courses',
        items: [
          { label: 'CAT Manager', to: '/courses/cat-manager' },
          { label: 'EUSR Superuser Locator', to: '/courses/eus-superuser' },
          { label: 'ZS Superuser Scottish Water', to: '/courses/zs-superuser-scottish-water' },
          { label: 'Service Coordinator USC', to: '/courses/service-coordinator-usc' },
        ],
      },
      {
        group: 'Specialist & Online',
        items: [
          { label: 'CAT4 HSG47 Awareness (Online)', to: '/courses/cat4-hsg47-awareness-online' },
          { label: 'GS6 Overhead Power Lines', to: '/courses/gs6-overhead-power-lines' },
          { label: 'Manufacturer-Specific Locator', to: '/courses/manufacturer-locator-training' },
          { label: 'Plans & Process Training', to: '/courses/plans-and-process' },
        ],
      },
    ],
  },
  {
    label: 'Utility Mapping',
    href: '/training/utility-mapping-surveying',
    children: [
      {
        group: 'Surveying Courses',
        items: [
          { label: '5-Day PAS128 Surveyor Course', to: '/courses/5-day-pas128-surveyor' },
          { label: 'GPR Training', to: '/courses/gpr-training' },
          { label: 'PAS128 Awareness', to: '/courses/pas128-awareness' },
          { label: 'TSA & ICES Utility Mapping', to: '/courses/tsa-ices-utility-mapping' },
          { label: 'Advanced EM Locator', to: '/courses/advanced-em-locator' },
        ],
      },
      {
        group: 'Qualifications',
        items: [
          { label: 'Level 3 Certificate', to: '/courses/level-3-certificate' },
          { label: 'Level 4 Diploma', to: '/courses/level-4-diploma' },
          { label: 'Level 5 Diploma', to: '/courses/level-5-diploma' },
          { label: 'Level 6 Diploma', to: '/courses/level-6-diploma' },
        ],
      },
      {
        group: 'Online',
        items: [
          { label: 'Online Level 3 Diploma', to: '/courses/online-level-3-diploma' },
          { label: 'Online Level 5 Diploma', to: '/courses/online-level-5-diploma' },
        ],
      },
    ],
  },
  {
    label: 'On Site Assessments',
    href: '/osca',
    children: [
      {
        group: 'OSCA',
        items: [
          { label: 'OSCA Overview', to: '/osca' },
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Top bar links (Navbar secondary row)                               */
/* ------------------------------------------------------------------ */

export const topBarLinks: FooterLink[] = [
  { label: 'All Courses', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Accreditations & Partners', href: '/accreditations' },
  { label: 'Locations', href: '/locations' },
  { label: 'Bespoke', href: '/bespoke-training' },
]

/* ------------------------------------------------------------------ */
/*  Footer link columns (curated subsets)                              */
/* ------------------------------------------------------------------ */

export const footerUtilityAvoidanceLinks: FooterLink[] = [
  { label: 'Cable Avoidance Training', href: '/courses/cable-avoidance-training' },
  { label: 'EUSR CAT1', href: '/courses/eus-cat1' },
  { label: 'EUSR CAT2 Safe Dig', href: '/courses/eus-cat2-safe-dig' },
  { label: 'EUSR CAT1 & CAT2 Combined', href: '/courses/eus-cat1-cat2-combined' },
  { label: 'ProQual CAT1 & CAT2 Combined', href: '/courses/proqual-cat1-cat2-combined' },
  { label: 'CAT & Genny Training', href: '/courses/cat-and-genny-training' },
  { label: 'vScan & Tx Training', href: '/courses/vscan-and-transmitter-training' },
  { label: 'Advanced EM Locator', href: '/courses/advanced-em-locator' },
  { label: 'CAT Manager', href: '/courses/cat-manager' },
]

export const footerUtilityMappingLinks: FooterLink[] = [
  { label: '5-Day PAS128 Surveyor', href: '/courses/5-day-pas128-surveyor' },
  { label: 'GPR Training', href: '/courses/gpr-training' },
  { label: 'RQF Level 2 Award', href: '/courses/rqf-level-2-award' },
  { label: 'Level 3 Certificate', href: '/courses/level-3-certificate' },
  { label: 'Level 4 Diploma', href: '/courses/level-4-diploma' },
  { label: 'Level 6 Diploma', href: '/courses/level-6-diploma' },
]

export const footerCompanyLinks: FooterLink[] = [
  { label: 'About Sygma', href: '/about' },
  { label: 'OSCA', href: '/osca' },
  { label: 'Bespoke Training', href: '/bespoke-training' },
  { label: 'Accreditations & Partners', href: '/accreditations' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Locations', href: '/locations' },
  { label: 'Pricing & Availability', href: '/pricing' },
  { label: 'Contact Us', href: '/contact' },
]
