// Service catalog — powers /services, the homepage overview, and internal links.

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: 'jet' | 'foam' | 'house' | 'deck' | 'driveway' | 'commercial' | 'leaf';
  featured?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: 'pressure-washing',
    title: 'Pressure Washing',
    short: 'High-pressure cleaning for hard surfaces that can take the force.',
    description:
      'Commercial-grade hot-water pressure washing that strips years of dirt, algae, oil and grime from concrete, brick, pavers and stone — calibrated to the surface so it cleans deep without etching or damage.',
    bullets: [
      'Hot-water units for grease and gum',
      'Surface cleaners for streak-free concrete',
      'Adjustable pressure per material',
      'Full clean-up and rinse-down included',
    ],
    icon: 'jet',
    featured: true,
  },
  {
    slug: 'soft-washing',
    title: 'Soft Washing',
    short: 'Low-pressure, detergent-based cleaning for delicate surfaces.',
    description:
      'A low-pressure system that uses professional biodegradable detergents to dissolve organic growth at the root. Ideal for roofs, siding, stucco and anything that would be damaged by high pressure — and it keeps surfaces cleaner, longer.',
    bullets: [
      'Kills algae, mold and lichen at the root',
      'Safe for shingles, vinyl, stucco, cedar',
      'Results that last 4–6× longer than pressure alone',
      'Plant and landscape protection protocol',
    ],
    icon: 'foam',
    featured: true,
  },
  {
    slug: 'house-washing',
    title: 'House Washing',
    short: 'Whole-home exterior wash that makes siding look new again.',
    description:
      'A complete exterior soft wash for your home — siding, soffits, fascia, gutters exterior, trim and entryways. We remove spider webs, wasp nests, pollen, and the green film that dulls your curb appeal.',
    bullets: [
      'Vinyl, LP SmartSide, fiber cement, brick, cedar',
      'Gutter face brightening included',
      'Window rinse on completion',
      'Gentle on paint and caulk lines',
    ],
    icon: 'house',
    featured: true,
  },
  {
    slug: 'deck-patio-cleaning',
    title: 'Deck & Patio Cleaning',
    short: 'Careful restoration for wood, composite and stone living spaces.',
    description:
      'Decks, patios, pergolas and porches cleaned at the right pressure for the material. We lift graying, mildew and mustiness from wood and composite, and prep surfaces properly if you plan to stain or seal.',
    bullets: [
      'Wood, composite, Trex, concrete, flagstone',
      'Railings, spindles and lattice detailed',
      'Pre-stain / pre-seal prep available',
      'Furniture moved and replaced',
    ],
    icon: 'deck',
  },
  {
    slug: 'driveway-cleaning',
    title: 'Driveway & Concrete Cleaning',
    short: 'Streak-free flatwork — driveways, walks, patios and curbs.',
    description:
      'Rotary surface cleaners deliver an even, line-free finish across large concrete and paver areas. We treat rust, leaf tannin, oil spots and tire marks, then post-treat to slow regrowth.',
    bullets: [
      'Even finish, no zebra striping',
      'Oil, rust and tannin stain treatment',
      'Paver sand replacement available',
      'Optional sealing add-on',
    ],
    icon: 'driveway',
  },
  {
    slug: 'commercial-services',
    title: 'Commercial Services',
    short: 'Storefronts, lots, dumpster pads and fleet — on your schedule.',
    description:
      'Recurring or one-time exterior maintenance for retail, restaurants, property managers, HOAs and municipalities. Early-morning and after-hours crews, COI on file, and consistent documented results.',
    bullets: [
      'Storefronts, sidewalks, entrances, drive-thrus',
      'Parking lots, garages and dumpster pads',
      'Scheduled maintenance programs',
      'Certificate of Insurance provided',
    ],
    icon: 'commercial',
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    short: 'Beds, mulch, trimming and clean-ups to finish the picture.',
    description:
      'The other half of curb appeal. Bed reshaping and edging, fresh mulch or rock, shrub trimming, seasonal clean-ups and lawn detailing — so the whole property looks cared for, not just the siding.',
    bullets: [
      'Bed design, edging and mulch / rock install',
      'Shrub and hedge trimming',
      'Spring and fall clean-ups',
      'Lawn detailing and debris haul-away',
    ],
    icon: 'leaf',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
