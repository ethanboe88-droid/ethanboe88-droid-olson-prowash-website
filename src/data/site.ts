// ---------------------------------------------------------------------------
// Central business info (NAP). Edit before launch.
// Powers SEO, schema.org, header/footer, contact details.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Olson Pro Wash',
  legalName: 'Olson Landscaping Pro Wash LLC',
  tagline: 'Exterior cleaning & landscaping, engineered to a higher standard.',
  description:
    'Olson Pro Wash delivers premium pressure washing, roof & soft washing, house washing and landscaping across Lake Stevens, Snohomish County and North King County, WA. Locally owned, licensed and insured.',

  // Update to the live domain (also update astro.config.mjs `site`).
  domain: 'https://olsonprowash.com',

  // Bump when site content is meaningfully revised. Feeds sitemap <lastmod>
  // and schema dateModified so crawlers get an honest signal (not "now" every build).
  lastContentUpdate: '2026-08-31T23:00:00.000Z',

  phone: '(425) 446-0547',
  phoneHref: 'tel:+14254460547',
  email: 'olsonlandscapingcustomercare@gmail.com',
  emailHref: 'mailto:olsonlandscapingcustomercare@gmail.com',

  address: {
    street: '',
    locality: 'Lake Stevens',
    region: 'WA',
    regionName: 'Washington',
    postalCode: '98258',
    country: 'US',
  },

  geo: { latitude: 48.0151, longitude: -122.0637 },

  areaServed: 'the Lake Stevens area',
  areaServedLong: 'Serving Lake Stevens, Snohomish County & North King County',
  serviceCities: [
    'Lake Stevens',
    'Everett',
    'Marysville',
    'Arlington',
    'Granite Falls',
    'Snohomish',
    'Monroe',
    'Mill Creek',
    'Mukilteo',
    'Bothell',
    'Kirkland',
    'Sammamish',
    'Issaquah',
    'Bellevue',
    'Seattle',
    'Woodinville',
    'Redmond',
    'Lynnwood',
  ],

  hours: [
    { days: 'Monday – Thursday', open: '9:00 AM', close: '12:00 AM' },
    { days: 'Friday – Sunday', open: '10:00 AM', close: '12:00 AM' },
  ],
  // Open until midnight — represented as 23:59 so schema parsers read it as
  // same-day close rather than a zero-length window.
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '23:59' },
    { days: ['Friday', 'Saturday', 'Sunday'], opens: '10:00', closes: '23:59' },
  ],

  founded: '2016',
  founder: 'Ethan Olson',
  priceRange: '$$',
  // Washington State contractor registration number.
  license: 'OLSONLP747MF',

  googlePlaceId: 'ChIJSb7HmsxamiDjdWoiyM5Htw',
  googleBusinessUrl:
    'https://www.google.com/maps/place/Olson+Landscaping+%26+Pro+Wash+LLC/@47.8453325,-122.1268744,15z',
  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJSb7HmsxamiDjdWoiyM5Htw',
  social: {
    facebook: 'https://www.facebook.com/p/Olson-Landscaping-Pro-Wash-LLC-61569118052923/',
    instagram: 'https://www.instagram.com/olson_landscaping_pro_wash_llc/',
    yelp: 'https://www.yelp.com/biz/olson-landscaping-marysville-2',
    nextdoor: 'https://nextdoor.com/pages/olson-landscaping-llc-marysville-wa/',
    yahoo: 'https://local.yahoo.com/info-234261407-olson-landscaping-marysville/',
    youtube: '',
  },

  ogImage: '/images/og-photo.jpg',
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
  { label: '5-Star Rated', icon: 'star' },
  { label: 'Locally Owned', icon: 'pin' },
  { label: 'Satisfaction Guaranteed', icon: 'check' },
] as const;

// value drives the count-up; suffix/prefix render as-is; max = gauge arc ceiling
export const STATS = [
  { label: 'Exteriors restored', value: 1800, suffix: '+', max: 2400 },
  { label: 'Years in business', value: 9, suffix: ' yrs', max: 12 },
  { label: 'Google rating', value: 4.9, suffix: '★', max: 5 },
  { label: 'Satisfaction rate', value: 100, suffix: '%', max: 100 },
] as const;
