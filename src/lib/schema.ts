const SITE_URL = "https://sygma-solutions.com";

const ORG = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Sygma Solutions",
  "url": SITE_URL,
};

export function faqPageSchema(faqs: Array<{ q: string; a: string }>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ q, a }) => ({
      "@type": "Question",
      "name": q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": a,
      },
    })),
  });
}

export function breadcrumbSchema(
  items: Array<{ label: string; to?: string }>
): string {
  const allItems = [{ label: "Home", to: "/" }, ...items];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.to ? { "item": `${SITE_URL}${item.to}` } : {}),
    })),
  });
}

// Rough mapping from human duration strings to ISO 8601 durations for
// Schema.org courseWorkload. We only need ballpark values; Google accepts
// any valid ISO 8601 duration. Missing/unknown -> PT1D (1 day).
function toISO8601Duration(input?: string): string {
  if (!input) return "PT1D";
  const s = input.toLowerCase().trim();
  const m = s.match(/(\d+)\s*(?:hour|hr|h)/);
  if (m) return `PT${m[1]}H`;
  const d = s.match(/(\d+)\s*day/);
  if (d) return `P${d[1]}D`;
  if (/half\s*day/.test(s)) return "PT4H";
  if (/part[-\s]?time/.test(s)) return "P1Y";
  if (/variable|tailored/.test(s)) return "PT1D";
  return "PT1D";
}

export function courseSchema(params: {
  name: string;
  description: string;
  url: string;
  credential?: string;
  duration?: string;
  mode?: string[];
  image?: string;
  teaches?: string;
  coursePrerequisites?: string;
  educationalLevel?: string;
  offers?: boolean;
}): string {
  const mode = params.mode ?? ["onsite"];
  const isOnsite = mode.includes("onsite");
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": params.name,
    "description": params.description,
    "url": `${SITE_URL}${params.url}`,
    "provider": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "Sygma Solutions",
      "url": SITE_URL,
    },
    ...(params.credential
      ? { "educationalCredentialAwarded": params.credential }
      : {}),
    ...(params.image ? { "image": params.image } : {}),
    ...(params.teaches ? { "teaches": params.teaches } : {}),
    ...(params.coursePrerequisites ? { "coursePrerequisites": params.coursePrerequisites } : {}),
    ...(params.educationalLevel ? { "educationalLevel": params.educationalLevel } : {}),
    "offers": {
      "@type": "Offer",
      "url": `${SITE_URL}${params.url}`,
      "availability": "https://schema.org/InStock",
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": mode,
      "courseWorkload": toISO8601Duration(params.duration),
      ...(isOnsite
        ? {
            "location": {
              "@type": "Place",
              "name": "Client site (UK-wide delivery)",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
              },
            },
          }
        : {}),
      "instructor": {
        "@type": "Person",
        "name": "Sygma Solutions Trainer",
      },
    },
  });
}
export function localBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    "name": "Sygma Solutions",
    "description": "UK specialist in underground utility location and avoidance training. EUSR, ProQual, and CITB accredited. Delivering CAT and Genny, PAS 128, GPR, and professional utility mapping courses nationwide since 2005.",
    "url": SITE_URL,
    "telephone": "+442039718252",
    "email": "info@sygma-solutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wigan",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5448,
      "longitude": -2.6318,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "17:00",
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom",
    },
    "priceRange": "$$",
    "image": "https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto/cat-34",
    "sameAs": [
      "https://www.linkedin.com/company/sygma-solutions",
      "https://x.com/sygmasolutions",
    ],
  };
}

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": "Sygma Solutions",
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo.webp`,
      "width": 200,
      "height": 50,
    },
    "description": "The UK's only independent specialist in underground utility location and avoidance training. Delivering accredited courses nationwide since 2005.",
    "telephone": "+442039718252",
    "email": "info@sygma-solutions.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wigan",
      "addressRegion": "Greater Manchester",
      "addressCountry": "GB",
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom",
    },
    "foundingDate": "2005",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 5,
      "maxValue": 20,
    },
    "sameAs": [
      "https://www.linkedin.com/company/sygma-solutions",
      "https://x.com/sygmasolutions",
    ],
  };
}

export function articleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": params.headline,
    "description": params.description,
    "url": `${SITE_URL}${params.url}`,
    "author": ORG,
    "publisher": ORG,
    ...(params.datePublished ? { "datePublished": params.datePublished } : {}),
    ...(params.dateModified ? { "dateModified": params.dateModified } : {}),
    ...(params.image ? { "image": `https://res.cloudinary.com/dqf1mp7en/image/upload/f_auto,q_auto,w_1200/${params.image}` } : {}),
  });
}

export function videoObjectSchema(params: {
  name: string;
  description: string;
  url: string;
  youtubeId: string;
  uploadDate: string;
  duration: string;
  thumbnailUrl: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": params.name,
    "description": params.description,
    "url": `${SITE_URL}${params.url}`,
    "embedUrl": `https://www.youtube.com/embed/${params.youtubeId}`,
    "contentUrl": `https://www.youtube.com/watch?v=${params.youtubeId}`,
    "thumbnailUrl": params.thumbnailUrl,
    "uploadDate": params.uploadDate,
    "duration": params.duration,
    "publisher": ORG,
  });
}
