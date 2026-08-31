// ---------------------------------------------------------------------------
// Central business info (NAP). Edit these values before launch.
// Used for SEO, schema.org markup, header/footer, and contact details.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Olson Pro Wash',
  legalName: 'Olson Landscaping Pro Wash LLC',
  tagline: 'Exterior cleaning & landscaping, done to a higher standard.',
  description:
    'Olson Pro Wash delivers premium pressure washing, soft washing, house washing and landscaping across Lake Stevens and Snohomish County, WA. Licensed, insured, and obsessive about results.',

  // Update to the live domain (also update astro.config.mjs `site`).
  domain: 'https://olsonprowash.com',

  phone: '(425) 555-0100',
  phoneHref: 'tel:+14255550100',
  email: 'hello@olsonprowash.com',
  emailHref: 'mailto:hello@olsonprowash.com',

  // Placeholder service-area business address (no storefront visits required).
  address: {
    street: '',
    locality: 'Lake Stevens',
    region: 'WA',
    regionName: 'Washington',
    postalCode: '98258',
    country: 'US',
  },

  geo: {
    // Approx. center of the service area (Lake Stevens, WA). Update if needed.
    latitude: 48.0151,
    longitude: -122.0637,
  },

  areaServed: 'the Lake Stevens area',
  areaServedLong: 'Serving Lake Stevens and surrounding Snohomish County',
  serviceCities: [
    'Lake Stevens',
    'Everett',
    'Marysville',
    'Snohomish',
    'Granite Falls',
    'Mill Creek',
    'Arlington',
    'Monroe',
    'Mukilteo',
    'Lynnwood',
  ],

  hours: [
    { days: 'Monday – Friday', open: '7:00 AM', close: '6:00 PM' },
    { days: 'Saturday', open: '8:00 AM', close: '2:00 PM' },
    { days: 'Sunday', open: 'Closed', close: '' },
  ],
  // schema.org openingHours format
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
    { days: ['Saturday'], opens: '08:00', closes: '14:00' },
  ],

  founded: '2016',
  priceRange: '$$',

  // External links
  googleBusinessUrl:
    'https://www.google.com/maps/search/?api=1&query=Olson+Landscaping+Pro+Wash+Lake+Stevens+WA',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=REPLACE_WITH_PLACE_ID',
  social: {
    facebook: 'https://www.facebook.com/olsonprowash',
    instagram: 'https://www.instagram.com/olsonprowash',
    youtube: '',
  },

  // Open Graph fallback image (replace with a real 1200x630 asset).
  ogImage: '/images/og-default.svg',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const TRUST_BADGES = [
  { label: 'Licensed & Insured', icon: 'shield' },
  { label: '5-Star Rated Locally', icon: 'star' },
  { label: 'Free, No-Pressure Quotes', icon: 'tag' },
  { label: 'Satisfaction Guaranteed', icon: 'check' },
] as const;

export const STATS = [
  { value: '1,800+', label: 'Exteriors restored' },
  { value: '9 yrs', label: 'Serving Snohomish County' },
  { value: '4.9★', label: 'Average customer rating' },
  { value: '100%', label: 'Satisfaction guarantee' },
] as const;
