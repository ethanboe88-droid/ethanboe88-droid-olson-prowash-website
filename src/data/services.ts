// Service catalog — powers /services, the homepage bento grid, footer, schema.

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  price: string;
  icon:
    | 'roof' | 'jet' | 'foam' | 'house' | 'gutter' | 'gutterGuard'
    | 'deck' | 'driveway' | 'commercial' | 'leaf';
  /** bento footprint on the homepage grid */
  span: 'xl' | 'wide' | 'unit';
  /** when set, links point to a dedicated page instead of /services#slug */
  detailPage?: string;
  /** real job photo for the /services section (falls back to a before/after slider) */
  photo?: string;
  photoAlt?: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'roof-cleaning',
    title: 'Roof Cleaning',
    short: 'Moss, lichen and black streaks removed at the root — no pressure on the shingles.',
    description:
      'A low-pressure roof soft wash tuned for the Pacific Northwest. We dissolve moss, lichen and Gloeocapsa (the black streaking) at the root with professional biocides, then a zinc / copper treatment to slow regrowth. Zero high pressure means zero granule loss and no voided shingle warranty.',
    benefits: [
      'Kills moss & lichen at the root, not just the surface',
      'Manufacturer-safe: no pressure, no granule loss',
      'Zinc/copper post-treatment slows regrowth for years',
      'Gutter guards, skylights and landscaping protected',
    ],
    price: 'from $499',
    icon: 'roof',
    span: 'xl',
  },
  {
    slug: 'house-washing',
    title: 'House Washing',
    short: 'Whole-home soft wash — siding, soffits, trim and gutter faces.',
    description:
      'A full exterior soft wash for siding, soffits, fascia, gutter exteriors, trim and entryways. We lift the green algae film, pollen, spider webs and wasp nests that dull curb appeal — gentle on paint, caulk lines and window seals.',
    benefits: [
      'Vinyl, LP SmartSide, fiber cement, brick, cedar',
      'Gutter-face brightening included',
      'Window rinse on completion',
      'Results that last 4–6× longer than pressure alone',
    ],
    price: 'from $299',
    icon: 'house',
    span: 'wide',
    photo: '/images/p-house.jpg',
    photoAlt: 'Olson Pro Wash technician soft-washing a two-story home, suds running down the siding',
  },
  {
    slug: 'pressure-washing',
    title: 'Pressure Washing',
    short: 'High-pressure hot-water cleaning for concrete, brick, pavers and stone.',
    description:
      'Commercial-grade hot-water pressure washing for surfaces that can take the force. Rotary surface cleaners deliver an even, line-free finish; hot water cuts oil, gum and grease that cold water leaves behind.',
    benefits: [
      'Hot-water units for grease, gum and oil',
      'Surface cleaners for streak-free concrete',
      'Pressure dialed to the material every time',
      'Full clean-up and rinse-down included',
    ],
    price: 'from $199',
    icon: 'jet',
    span: 'unit',
    photo: '/images/p-driveway.jpg',
    photoAlt: 'Olson Pro Wash running a rotary surface cleaner on a residential driveway',
  },
  {
    slug: 'soft-washing',
    title: 'Soft Washing',
    short: 'Low-pressure, detergent-based cleaning for delicate surfaces.',
    description:
      'A low-pressure system using professional biodegradable detergents to dissolve organic growth at the root. Ideal for stucco, cedar, painted surfaces and anything high pressure would damage — and it keeps surfaces cleaner, longer.',
    benefits: [
      'Kills algae, mold and lichen at the root',
      'Safe for stucco, cedar, painted wood, screens',
      'Biodegradable products at safe dilution',
      'Plant and landscape protection protocol',
    ],
    price: 'from $249',
    icon: 'foam',
    span: 'unit',
    photo: '/images/p-fence.jpg',
    photoAlt: 'Olson Pro Wash soft-washing a wood privacy fence',
  },
  {
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    short: 'Interior scoop-out plus exterior face brightening, downspouts flushed.',
    description:
      'We clear needles, leaves and grit from the gutter troughs, bag the debris, flush every downspout, and soft wash the exterior faces so the whole line looks new. Photos of the cleared gutters sent on completion.',
    benefits: [
      'Debris hand-cleared and hauled away',
      'All downspouts flushed and flow-tested',
      'Exterior faces soft washed, not just emptied',
      'Before/after photos from the ladder',
    ],
    price: 'from $149',
    icon: 'gutter',
    span: 'unit',
    photo: '/images/p-gutter.jpg',
    photoAlt: 'Olson Pro Wash clearing debris from a home gutter by hand',
  },
  {
    slug: 'gutter-guard-installation',
    title: 'Gutter Guard Installation',
    short: 'Stop cleaning your gutters. Pro-grade micro-mesh guards, installed to last.',
    description:
      'In fir and cedar country, open gutters clog every season. We install professional stainless micro-mesh gutter guards that keep needles, leaves, seeds and roof grit out while letting every inch of rain through — so water goes where it should and you never climb a ladder in November again. Existing gutters cleaned and re-pitched first; guards fitted to your roofline, not stapled on.',
    benefits: [
      'Surgical-grade stainless micro-mesh — blocks fir needles and grit',
      'Full flow rate: handles Pacific Northwest downpours',
      'Gutters cleaned, sealed and re-pitched before install',
      'Trims into the shingles correctly — no lifted roofing',
      'Manufacturer warranty + our workmanship guarantee',
    ],
    price: 'from $8 / linear ft',
    icon: 'gutterGuard',
    span: 'wide',
    detailPage: '/services/gutter-guard-installation',
    photo: '/images/p-gutterguard.jpg',
    photoAlt: 'Ethan Olson fitting a stainless micro-mesh gutter guard on a shingle roof',
  },
  {
    slug: 'deck-patio-cleaning',
    title: 'Deck & Patio Cleaning',
    short: 'Careful restoration for wood, composite and stone living spaces.',
    description:
      'Decks, patios, pergolas and porches cleaned at the right pressure for the material. We lift the slick green film, graying and mustiness from wood and composite, and prep surfaces properly if you plan to stain or seal.',
    benefits: [
      'Wood, composite, Trex, concrete, flagstone',
      'Railings, spindles and lattice detailed',
      'Pre-stain / pre-seal prep available',
      'Furniture moved and replaced',
    ],
    price: 'from $229',
    icon: 'deck',
    span: 'unit',
    photo: '/images/p-deck.jpg',
    photoAlt: 'Olson Pro Wash soft-washing a composite deck, foam on the boards',
  },
  {
    slug: 'driveway-concrete-cleaning',
    title: 'Driveway & Concrete',
    short: 'Streak-free flatwork — driveways, walks, patios and curbs.',
    description:
      'Rotary surface cleaners deliver an even, line-free finish across large concrete and paver areas. We treat rust, moss, leaf tannin, oil spots and tire marks, then post-treat to slow regrowth.',
    benefits: [
      'Even finish, no zebra striping',
      'Oil, rust, moss and tannin treatment',
      'Paver sand replacement available',
      'Optional sealing add-on',
    ],
    price: 'from $189',
    icon: 'driveway',
    span: 'unit',
    photo: '/images/p-driveway.jpg',
    photoAlt: 'Freshly surface-cleaned concrete driveway with the Olson Pro Wash truck alongside',
  },
  {
    slug: 'commercial-services',
    title: 'Commercial Services',
    short: 'Storefronts, lots, dumpster pads and fleet — on your schedule.',
    description:
      'Recurring or one-time exterior maintenance for retail, restaurants, property managers, HOAs and municipalities across Snohomish and King County. Early-morning and after-hours crews, COI on file, consistent documented results.',
    benefits: [
      'Storefronts, sidewalks, entrances, drive-thrus',
      'Parking lots, garages and dumpster pads',
      'Scheduled maintenance programs',
      'Certificate of Insurance provided',
    ],
    price: 'quoted per site',
    icon: 'commercial',
    span: 'unit',
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    short: 'Beds, mulch, trimming and clean-ups to finish the picture.',
    description:
      'The other half of curb appeal, from the LLC that does both. Bed reshaping and edging, fresh mulch or rock, shrub and hedge trimming, seasonal clean-ups and lawn detailing — so the whole property looks cared for, not just the siding.',
    benefits: [
      'Bed design, edging and mulch / rock install',
      'Shrub and hedge trimming',
      'Spring and fall clean-ups',
      'Lawn detailing and debris haul-away',
    ],
    price: 'from $179',
    icon: 'leaf',
    span: 'wide',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
