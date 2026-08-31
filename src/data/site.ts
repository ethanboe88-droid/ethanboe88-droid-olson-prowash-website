// ---------------------------------------------------------------------------
// Central business info (NAP). Edit these values before launch.
// Used for SEO, schema.org markup, header/footer, and contact details.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Olson Pro Wash',
  legalName: 'Olson Landscaping & Pro Wash LLC',
  tagline: 'Exterior cleaning & landscaping, done to a higher standard.',
  description:
    'Olson Pro Wash delivers premium pressure washing, soft washing, house washing and landscaping across Northwest Wisconsin. Licensed, insured, and obsessive about results.',

  // Update to the live domain (also update astro.config.mjs `site`).
  domain: 'https://olsonprowash.com',

  phone: '(715) 555-0100',
  phoneHref: 'tel:+17155550100',
  email: 'hello@olsonprowash.com',
  emailHref: 'mailto:hello@olsonprowash.com',

  // Placeholder service-area business address (no storefront visits required).
  address: {
    street: '',
    locality: 'Rice Lake',
    region: 'WI',
    regionName: 'Wisconsin',
    postalCode: '54868',
    country: 'US',
  },

  geo: {
    // Approx. center of the service area (Rice Lake, WI). Update if needed.
    latitude: 45.5061,
    longitude: -91.7382,
  },

  areaServed: 'Northwest Wisconsin',
  areaServedLong: 'Serving Northwest Wisconsin and surrounding areas',
  serviceCities: [
    'Rice Lake',
    'Cumberland',
    'Barron',
    'Chetek',
    'Spooner',
    'Hayward',
    'Cameron',
    'Turtle Lake',
    'Shell Lake',
    'Birchwood',
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
  googleBusinessUrl: 'https://www.google.com/maps/search/?api=1&query=Olson+Pro+Wash+Rice+Lake+WI',
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
  { value: '9 yrs', label: 'Serving the Northwoods' },
  { value: '4.9★', label: 'Average customer rating' },
  { value: '100%', label: 'Satisfaction guarantee' },
] as const;
