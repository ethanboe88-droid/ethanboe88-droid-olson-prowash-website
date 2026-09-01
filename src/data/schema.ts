import { SITE } from './site';
import { SERVICES } from './services';

const base = SITE.domain;
const REGION = SITE.address.region;

// Topics the business is an authority on — used for entity/AI grounding.
export const KNOWS_ABOUT = [
  'Pressure washing',
  'Roof cleaning',
  'Roof soft washing',
  'Moss removal',
  'House washing',
  'Soft washing',
  'Gutter cleaning',
  'Gutter brightening',
  'Gutter guard installation',
  'Driveway and concrete cleaning',
  'Deck and patio cleaning',
  'Commercial exterior cleaning',
  'Landscaping',
  'Christmas light installation',
  'Exterior home maintenance',
  'Algae and mildew removal',
];

// ---------------------------------------------------------------------------
// Core LocalBusiness entity (homepage)
// ---------------------------------------------------------------------------
export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${base}/#business`,
  name: SITE.name,
  legalName: SITE.legalName,
  alternateName: ['Olson Landscaping Pro Wash', 'Olson Landscaping', 'Olson Pro Wash LLC'],
  description: SITE.description,
  slogan: SITE.tagline,
  url: base,
  telephone: SITE.phone,
  email: SITE.email,
  image: [`${base}${SITE.ogImage}`, `${base}/images/hero.jpg`, `${base}/images/p-roof.jpg`],
  logo: `${base}/images/logo.png`,
  priceRange: SITE.priceRange,
  foundingDate: SITE.founded,
  founder: { '@type': 'Person', '@id': `${base}/#founder`, name: SITE.founder },
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 5 },
  knowsAbout: KNOWS_ABOUT,
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Credit Card',
  identifier: {
    '@type': 'PropertyValue',
    name: 'Washington State Contractor Registration',
    value: SITE.license,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.locality,
    addressRegion: REGION,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
  hasMap: SITE.googleBusinessUrl,
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
      geoRadius: 40000,
    },
    { '@type': 'AdministrativeArea', name: 'Snohomish County, Washington' },
    { '@type': 'AdministrativeArea', name: 'King County, Washington' },
    ...SITE.serviceCities.map((c) => ({ '@type': 'City', name: `${c}, ${REGION}` })),
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    email: SITE.email,
    contactType: 'customer service',
    areaServed: 'US-WA',
    availableLanguage: ['English'],
  },
  openingHoursSpecification: SITE.openingHoursSpec.map((o) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: o.days,
    opens: o.opens,
    closes: o.closes,
  })),
  sameAs: [
    SITE.social.facebook,
    SITE.social.instagram,
    SITE.social.yelp,
    SITE.social.nextdoor,
    SITE.social.yahoo,
  ].filter(Boolean),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '54', bestRating: '5' },
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    name: s.title,
    description: s.short,
    priceCurrency: 'USD',
    url: `${base}${s.detailPage ?? `/services#${s.slug}`}`,
    itemOffered: { '@type': 'Service', name: s.title },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exterior Cleaning & Landscaping Services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.short,
        url: `${base}${s.detailPage ?? `/services#${s.slug}`}`,
      },
    })),
  },
};

// ---------------------------------------------------------------------------
export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${base}/#website`,
  url: base,
  name: SITE.name,
  description: SITE.description,
  inLanguage: 'en-US',
  publisher: { '@id': `${base}/#business` },
};

export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${base}/#founder`,
  name: SITE.founder,
  jobTitle: 'Founder & Owner',
  worksFor: { '@id': `${base}/#business` },
  homeLocation: { '@type': 'Place', name: `${SITE.address.locality}, ${REGION}` },
  knowsAbout: KNOWS_ABOUT.slice(0, 8),
  description:
    'Ethan Olson founded Olson Pro Wash as a teenager in Lake Stevens, Washington, starting with a lawn-care route and converting it to a licensed exterior-cleaning company at 16.',
};

// Generic page wrapper — improves entity/AI grounding per URL.
export const webPageLd = (opts: {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  name: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  speakableSelectors?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': opts.type ?? 'WebPage',
  '@id': `${base}${opts.path === '/' ? '/' : opts.path}#webpage`,
  url: `${base}${opts.path === '/' ? '' : opts.path}`,
  name: opts.name,
  description: opts.description,
  isPartOf: { '@id': `${base}/#website` },
  about: { '@id': `${base}/#business` },
  inLanguage: 'en-US',
  ...(opts.image
    ? {
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${base}${opts.image}`,
          contentUrl: `${base}${opts.image}`,
          caption: opts.name,
        },
      }
    : {}),
  datePublished: opts.datePublished ?? SITE.lastContentUpdate,
  dateModified: opts.dateModified ?? SITE.lastContentUpdate,
  ...(opts.speakableSelectors
    ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: opts.speakableSelectors } }
    : {}),
});

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

export const serviceLd = (s: (typeof SERVICES)[number]) => {
  const priceMatch = s.price.match(/\$([\d,]+(?:\.\d+)?)/);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${base}${s.detailPage ?? `/services#${s.slug}`}`,
    name: s.title,
    description: s.description,
    serviceType: s.title,
    category: 'Exterior cleaning',
    image: [`${base}${'photo' in s && s.photo ? s.photo : SITE.ogImage}`, `${base}/images/roof-after.jpg`],
    provider: { '@id': `${base}/#business` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' },
      { '@type': 'AdministrativeArea', name: 'King County, WA' },
      ...SITE.serviceCities.map((c) => ({ '@type': 'City', name: `${c}, ${REGION}` })),
    ],
    url: `${base}${s.detailPage ?? `/services#${s.slug}`}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      ...(priceMatch ? { price: priceMatch[1].replace(/,/g, '') } : {}),
      description: s.price,
      availability: 'https://schema.org/InStock',
      areaServed: 'US-WA',
    },
    hoursAvailable: SITE.openingHoursSpec.map((o) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
  };
};

export const faqLd = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a.replace(/<[^>]+>/g, '') },
  })),
});

// A single Service node scoped to one city, with the full offer catalog.
export const cityServiceLd = (city: {
  name: string;
  slug: string;
  geo: { lat: number; lng: number };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${base}/service-area/${city.slug}#service`,
  name: `Pressure Washing, Roof Cleaning & Exterior Services in ${city.name}, ${REGION}`,
  serviceType: 'Exterior cleaning and pressure washing',
  description: `Olson Pro Wash provides roof cleaning, house washing, pressure & soft washing, gutter cleaning, gutter guards, deck, driveway, commercial exterior maintenance and landscaping in ${city.name}, Washington.`,
  provider: { '@id': `${base}/#business` },
  url: `${base}/service-area/${city.slug}`,
  areaServed: {
    '@type': 'City',
    name: `${city.name}, ${REGION}`,
    geo: { '@type': 'GeoCoordinates', latitude: city.geo.lat, longitude: city.geo.lng },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `Exterior cleaning services in ${city.name}`,
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      priceCurrency: 'USD',
      description: s.price,
      itemOffered: {
        '@type': 'Service',
        name: `${s.title} in ${city.name}, ${REGION}`,
        url: `${base}${s.detailPage ?? `/services#${s.slug}`}`,
      },
    })),
  },
});

export const howToLd = (opts: {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: opts.name,
  description: opts.description,
  totalTime: 'PT4H',
  step: opts.steps.map((st, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: st.name,
    text: st.text,
    url: `${base}${opts.path}#step-${i + 1}`,
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
  wordCount?: number;
  section?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${base}/blog/${post.slug}#article`,
  headline: post.title,
  description: post.description,
  image: `${base}${post.image}`,
  datePublished: post.pubDate.toISOString(),
  dateModified: (post.updatedDate ?? post.pubDate).toISOString(),
  author: { '@type': 'Organization', name: post.author, url: base, '@id': `${base}/#business` },
  publisher: { '@id': `${base}/#business` },
  mainEntityOfPage: `${base}/blog/${post.slug}`,
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  ...(post.wordCount ? { wordCount: post.wordCount } : {}),
  ...(post.section ? { articleSection: post.section } : {}),
  about: { '@id': `${base}/#business` },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.prose > p:first-of-type'] },
});
