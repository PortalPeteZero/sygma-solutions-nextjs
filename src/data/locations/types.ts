import type { Metadata } from 'next';

export interface ImageItem {
  src: string;
  alt: string;
}

export interface AreaItem {
  area: string;
  detail: string;
}

export interface SectorItem {
  sector: string;
  desc: string;
}

export interface CourseItem {
  course: string;
  desc: string;
}

export interface LocationPageData {
  slug: string;
  metadata: Metadata;
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  imageStrips: Array<ImageItem[]>;
  facility?: {
    eyebrow: string;
    title: string;
    address: string;
    distance?: string;
    access: string;
    facilities: string;
    courses: string[];
  };
  courses?: CourseItem[];
  onSite: {
    eyebrow: string;
    title: string;
    intro: string;
    areas: AreaItem[];
  };
  sectors: {
    eyebrow: string;
    title: string;
    items: SectorItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    phone: string;
  };
}
