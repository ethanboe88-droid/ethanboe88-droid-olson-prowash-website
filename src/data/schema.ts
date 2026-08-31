import { SITE } from './site';
import { SERVICES } from './services';

const base = SITE.domain;

export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${base}/#business`,
  name: SITE.name,
  legalName: SITE.legalName,
  description: SITE.description,
  url: base,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${base}${SITE.ogImage}`,
  logo: `${base}/images/logo.png`,
  priceRange: SITE.priceRange,
  foundingDate: SITE.founded,
  founder: { '@type': 'Person', name: SITE.founder },
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Credit Card',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
  areaServed: SITE.serviceCities.map((c) => ({ '@type': 'City', name: `${c}, ${SITE.address.region}` })),
  openingHoursSpecification: SITE.openingHoursSpec.map((o) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: o.days,
    opens: o.opens,
    closes: o.closes,
  })),
  sameAs: [SITE.social.facebook, SITE.social.instagram].filter(Boolean),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '240' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exterior Cleaning & Landscaping Services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.short, url: `${base}/services#${s.slug}` },
    })),
  },
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${base}/#website`,
  url: base,
  name: SITE.name,
  publisher: { '@id': `${base}/#business` },
};

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${base}${it.path}`,
  })),
});

export const serviceLd = (s: (typeof SERVICES)[number]) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.title,
  description: s.description,
  serviceType: s.title,
  provider: { '@id': `${base}/#business` },
  areaServed: { '@type': 'AdministrativeArea', name: 'Snohomish & King County, WA' },
  url: `${base}/services#${s.slug}`,
});

export const faqLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a.replace(/<[^>]+>/g, '') },
  })),
});

export const blogPostingLd = (post: {
  title: string;
  description: string;
  slug: string;
  pubDate: Date;
  updatedDate?: Date;
  image: string;
  author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: `${base}${post.image}`,
  datePublished: post.pubDate.toISOString(),
  dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
  author: { '@type': 'Organization', name: post.author, url: base },
  publisher: { '@id': `${base}/#business` },
  mainEntityOfPage: `${base}/blog/${post.slug}`,
});
