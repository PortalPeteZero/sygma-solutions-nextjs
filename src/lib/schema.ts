const SITE_URL = \"https://sygma-solutions.com\";

const ORG = {
  \"@type\": \"Organization\",
  \"@id\": `${SITE_URL}/#organization`,
  \"name\": \"Sygma Solutions\",
  \"url\": SITE_URL,
};

export function faqPageSchema(faqs: Array<{ q: string; a: string }>): string {
  return JSON.stringify({
    \"@context\": \"https://schema.org\",
    \"@type\": \"FAQPage\",
    \"mainEntity\": faqs.map(({ q, a }) => ({
      \"@type\": \"Question\",
      \"name\": q,
      \"acceptedAnswer\": {
        \"@type\": \"Answer\",
        \"text\": a,
      },
    })),
  });
}

export function breadcrumbSchema(
  items: Array<{ label: string; to?: string }>
): string {
  const allItems = [{ label: \"Home\", to: \"/\" }, ...items];
  return JSON.stringify({
    \"@context\": \"https://schema.org\",
    \"@type\": \"BreadcrumbList\",
    \"itemListElement\": allItems.map((item, index) => ({
      \"@type\": \"ListItem\",
      \"position\": index + 1,
      \"name\": item.label,
      ...(item.to ? { \"item\": `${SITE_URL}${item.to}` } : {}),
    })),
  });
}

export function courseSchema(params: {
  name: string;
  description: string;
  url: string;
  credential?: string;
  duration?: string;
  mode?: string[];
}): string {
  return JSON.stringify({
    \"@context\": \"https://schema.org\",
    \"@type\": \"Course\",
    \"name\": params.name,
    \"description\": params.description,
    \"url\": `${SITE_URL}${params.url}`,
    \"provider\": ORG,
    ...(params.credential
      ? { \"educationalCredentialAwarded\": params.credential }
      : {}),
    \"hasCourseInstance\": {
      \"@type\": \"CourseInstance\",
      \"courseMode\": params.mode ?? [\"onsite\"],
      \"instructor\": ORG,
    },
  });
}

export function localBusinessSchema(): Record<string, unknown> {
  return {
    \"@context\": \"https://schema.org\",
    \"@type\": \"LocalBusiness\",
    \"@id\": `${SITE_URL}/#localbusiness`,
    \"name\": \"Sygma Solutions\",
    \"description\": \"UK specialist in underground utility location and avoidance training. EUS, ProQual, and CITB accredited. Delivering CAT and Genny, PAS 128, GPR, and professional utility mapping courses nationwide since 2004.\",
    \"url\": SITE_URL,
    \"telephone\": \"+442039718252\",
    \"email\": \"info@sygma-solutions.com\",
    \"address\": {
      \"@type\": \"PostalAddress\",
      \"addressLocality\": \"Wigan\",
      \"addressRegion\": \"Greater Manchester\",
      \"addressCountry\": \"GB\",
    },
    \"geo\": {
      \"@type\": \"GeoCoordinates\",
      \"latitude\": 53.5448,
      \"longitude\": -2.6318,
    },
    \"openingHoursSpecification\": {
      \"@type\": \"OpeningHoursSpecification\",
      \"dayOfWeek\": [\"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\"],
      \"opens\": \"08:30\",
      \"closes\": \"17:00\",
    },
    \"areaServed\": {
      \"@type\": \"Country\",
      \"name\": \"United Kingdom\",
    },
    \"priceRange\": \"$$\",
    \"image\": `${SITE_URL}/images/homepage/CAT4-and-Genny-54.webp`,
    \"sameAs\": [
      \"https://www.linkedin.com/company/sygma-solutions\",
    ],
  };
}

export function organizationSchema(): Record<string, unknown> {
  return {
    \"@context\": \"https://schema.org\",
    \"@type\": \"Organization\",
    \"@id\": `${SITE_URL}/#organization`,
    \"name\": \"Sygma Solutions\",
    \"url\": SITE_URL,
    \"logo\": `${SITE_URL}/images/sygma-logo.png`,
    \"description\": \"The UK's only independent specialist in underground utility location and avoidance training. Delivering accredited courses nationwide since 2004.\",
    \"telephone\": \"+442039718252\",
    \"email\": \"info@sygma-solutions.com\",
    \"address\": {
      \"@type\": \"PostalAddress\",
      \"addressLocality\": \"Wigan\",
      \"addressRegion\": \"Greater Manchester\",
      \"addressCountry\": \"GB\",
    },
    \"areaServed\": {
      \"@type\": \"Country\",
      \"name\": \"United Kingdom\",
    },
    \"foundingDate\": \"2004\",
    \"numberOfEmployees\": {
      \"@type\": \"QuantitativeValue\",
      \"minValue\": 5,
      \"maxValue\": 20,
    },
    \"sameAs\": [
      \"https://www.linkedin.com/company/sygma-solutions\",
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
    \"@context\": \"https://schema.org\",
    \"@type\": \"Article\",
    \"headline\": params.headline,
    \"description\": params.description,
    \"url\": `${SITE_URL}${params.url}`,
    \"author\": ORG,
    \"publisher\": ORG,
    ...(params.datePublished ? { \"datePublished\": params.datePublished } : {}),
    ...(params.dateModified ? { \"dateModified\": params.dateModified } : {}),
    ...(params.image ? { \"image\": `${SITE_URL}${params.image}` } : {}),
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
    \"@context\": \"https://schema.org\",
    \"@type\": \"VideoObject\",
    \"name\": params.name,
    \"description\": params.description,
    \"url\": `${SITE_URL}${params.url}`,
    \"embedUrl\": `https://www.youtube.com/embed/${params.youtubeId}`,
    \"contentUrl\": `https://www.youtube.com/watch?v=${params.youtubeId}`,
    \"thumbnailUrl\": params.thumbnailUrl,
    \"uploadDate\": params.uploadDate,
    \"duration\": params.duration,
    \"publisher\": ORG,
  });
}
