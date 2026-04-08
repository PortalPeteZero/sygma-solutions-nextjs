import type { Metadata } from 'next';

/* ------------------------------------------------------------------ */
/*  Shared types for course page data                                  */
/* ------------------------------------------------------------------ */

export interface FAQ {
  q: string;
  a: string;
}

export interface Breadcrumb {
  label: string;
  href?: string;
  to?: string;
}

export interface HeroConfig {
  eyebrow: string;
  headline: string;
  sub: string;
  image?: string;
  images?: string[];
  alt?: string;
  alts?: string[];
  breadcrumbs: Breadcrumb[];
}

export interface SchemaConfig {
  course: {
    name: string;
    description: string;
    url: string;
    credential?: string;
    duration?: string;
    mode?: string[];
  };
  breadcrumbs: Array<{ label: string; to?: string }>;
  /** Set to true to also emit an FAQPage schema from the faqs array */
  includeFaqSchema?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  detail?: string;
}

export interface WhoForItem {
  title: string;
  desc: string;
}

export interface InfoBarItem {
  label: string;
  value: string;
}

export interface AboutSidebarItem {
  label: string;
  value: string;
}

export interface AboutSection {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  sidebar?: {
    eyebrow: string;
    items: AboutSidebarItem[];
  };
}

export interface CourseContentSection {
  eyebrow?: string;
  title?: string;
  theory: {
    heading: string;
    subheading?: string;
    items: string[];
  };
  practical: {
    heading: string;
    subheading?: string;
    intro?: string;
    items: string[];
  };
}

export interface FormatRow {
  format: string;
  duration: string;
  maxDelegates: string;
  assessment: string;
}

export interface CertRoute {
  title: string;
  desc: string;
}

export interface RelatedCourse {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
}

export interface RelatedReadingLink {
  title: string;
  desc: string;
  href: string;
}

export interface AlsoConsiderLink {
  title: string;
  desc: string;
  href: string;
}

export interface SiteRequirementItem {
  label: string;
  detail: string;
}

export interface HSG47Item {
  eyebrow: string;
  title: string;
  desc: string;
}

export interface WhySygmaItem {
  eyebrow: string;
  title: string;
  desc: string;
}

export interface VideoConfig {
  eyebrow: string;
  title: string;
  description: string;
  youtubeId: string;
  linkText?: string;
  linkHref?: string;
}

export interface PhotoStripConfig {
  images: Array<{ src: string; alt: string }>;
  /** 'full' = single full-width image, 'grid' = 3-col grid with hover */
  variant: 'full' | 'grid';
}

export interface CTAConfig {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

/* ------------------------------------------------------------------ */
/*  Main data shape                                                    */
/* ------------------------------------------------------------------ */

export interface CoursePageData {
  slug: string;
  metadata: Metadata;
  hero: HeroConfig;
  schemas: SchemaConfig;
  faqs: FAQ[];

  /* Optional common sections -- omit to skip rendering */
  stats?: StatItem[];
  infoBar?: InfoBarItem[];
  whoFor?: { eyebrow?: string; title?: string; items: WhoForItem[] };
  about?: AboutSection;
  courseContent?: CourseContentSection;
  formats?: { eyebrow?: string; title?: string; rows: FormatRow[]; notes?: string[] };
  certRoutes?: { eyebrow?: string; title?: string; intro?: string; items: CertRoute[] };
  relatedCourses?: { eyebrow?: string; title?: string; intro?: string; items: RelatedCourse[] };
  relatedReading?: RelatedReadingLink[];
  alsoConsider?: AlsoConsiderLink[];
  siteRequirements?: { items: SiteRequirementItem[]; note?: string };
  citbFunding?: { paragraphs: string[] };
  hsg47?: { items: HSG47Item[] };
  whySygma?: { items: WhySygmaItem[] };
  video?: VideoConfig;
  photoStrips?: PhotoStripConfig[];
  cta: CTAConfig;
}
