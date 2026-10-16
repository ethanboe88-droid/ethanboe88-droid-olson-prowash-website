import type { ServiceCityMap } from './index';

// Commercial services × city. Hand-written per city — see index.ts.
export const COMMERCIAL_SERVICES: ServiceCityMap = {
  'lake-stevens-wa': {
    lead: "Lake Stevens businesses around Frontier Village and the lakeside commercial strip get steady foot traffic, and a clean exterior is the cheapest marketing a storefront has.",
    angle:
      "Retail, restaurants and offices in Lake Stevens deal with the same damp that greens up homes: algae on sidewalks, mossy planter edges, grime around entries and dumpster pads that tracks inside. We scope the whole property on a walk, then clean storefronts, walks, entrances and pads on early-morning or after-hours schedules so customers never see the hoses. Lake Stevens is our home base, so recurring visits don't cost extra in travel.",
    timing:
      "Most Lake Stevens businesses do well with a monthly or quarterly program, with a deeper seasonal clean in spring after the wet season. Pricing is quoted per site after a walk-through, based on scope, surfaces and frequency, and recurring programs are billed at a set per-visit rate. We send before-and-after photos and a completion note after every service, with a certificate of insurance on file.",
    faq: {
      q: 'Can you service my Lake Stevens storefront before we open each morning?',
      a: "Yes. Early-morning and after-hours work is the norm for us. We agree on a defined arrival window and a single point of contact, finish before customers arrive, and send photos afterward for your records.",
    },
  },
  'everett-wa': {
    lead: "Everett's downtown storefronts, port-side industrial properties and busy corridors need exterior cleaning that works around business hours and stands up to bay air.",
    angle:
      "Salt film, gum, grease and foot-traffic grime build fast on downtown Everett sidewalks, entries and awnings, and dumpster pads near restaurants need regular attention. Properties near Port Gardner and along the major corridors collect road film too. We map the property, agree on scope and frequency, then clean flatwork with surface cleaners, soft wash building faces, and detail entrances, scheduling the work for early mornings or after close.",
    timing:
      "Downtown Everett businesses commonly choose weekly or monthly sidewalk and entry service with a seasonal deeper clean. Property managers often prefer quarterly programs across several addresses. Pricing is per site after a walk-through, with recurring programs billed at a lower per-visit rate. A certificate of insurance can be added to your file before the first visit.",
    faq: {
      q: 'Do you offer recurring sidewalk and entry cleaning for downtown Everett businesses?',
      a: "Yes. We do early-morning and after-hours sidewalk, entry, awning and dumpster-pad cleaning on one-time or recurring schedules, with a certificate of insurance and before-and-after photos after each visit.",
    },
  },
  'marysville-wa': {
    lead: "Marysville's retail along State Avenue and the growing commercial pads in Smokey Point need clean frontage and lots without disrupting customers.",
    angle:
      "Strip centers, restaurants, drive-thrus and fleet yards in Marysville collect oil, gum and tire marks on concrete, and shaded entries green up like home driveways do. We scope each site on a walk, then clean parking areas and walks with surface cleaners, treat oil and gum spots, soft wash building faces and detail dumpster pads. Drive-thru lanes can be done overnight so service never stops.",
    timing:
      "Marysville retail often runs a monthly or quarterly program, with property managers adding seasonal deep cleans before the wet season. Pricing is quoted per site after a walk-through, based on scope, surfaces and frequency. Recurring programs get a set per-visit rate, and we send before-and-after photos plus a completion note after every service.",
    faq: {
      q: 'Can you clean a Marysville drive-thru lane without closing the business?',
      a: "Yes. Drive-thru lanes and parking areas are typically done overnight or in the earliest hours, with defined arrival windows so operations are never interrupted.",
    },
  },
  'arlington-wa': {
    lead: "Arlington's Old Town storefronts, airport-area businesses and rural commercial properties all need exterior upkeep that fits small-business hours.",
    angle:
      "In Old Town and along the main corridors, storefront sidewalks collect road film, gum and algae, and entrances see constant foot traffic. Properties near the airport and out toward Island Crossing have larger lots and equipment yards where oil and tire marks accumulate. We walk the site, agree on scope, then clean flatwork with surface cleaners, soft wash building faces, and detail entrances and dumpster pads.",
    timing:
      "Small Arlington storefronts often do well with a quarterly program, with a seasonal deeper clean in spring. Larger lots can be scheduled in sections across a few visits. Pricing is per site after a walk-through. A certificate of insurance is available, and every visit ends with before-and-after photos and a completion note.",
    faq: {
      q: 'Do you service smaller businesses in Arlington, or only large properties?',
      a: "Both. A single Old Town storefront and a multi-acre lot are scoped and priced the same way: a walk-through, an agreed scope and frequency, and a per-visit rate that drops on a recurring program.",
    },
  },
  'bothell-wa': {
    lead: "Bothell's Canyon Park business district, North Creek offices and downtown shops all need clean exteriors for employees, customers and visitors.",
    angle:
      "Office parks and business centers around Canyon Park and North Creek have large concrete areas, entries and dumpster enclosures, with landscaping often right against walkways. Downtown Bothell's retail faces the sidewalks and pedestrian traffic. We scope each property, protect landscaping, surface clean flatwork, soft wash building faces and detail entrances, scheduled for early mornings or after hours.",
    timing:
      "Bothell office and retail properties usually choose a quarterly or monthly program with a seasonal deep clean. HOAs and property managers often prefer a recurring contract across common areas. Pricing is quoted per site; recurring programs are billed at a set per-visit rate, with documentation after every visit.",
    faq: {
      q: 'Can you clean around landscaping at a Bothell business park?',
      a: "Yes. We pre-wet and protect plantings, use biodegradable products at safe dilution, and rinse everything afterward. Landscape protection is part of every commercial job, not an extra.",
    },
  },
  'kirkland-wa': {
    lead: "Kirkland's downtown retail, marina-front restaurants and Totem Lake businesses want spotless sidewalks and entries before the doors open.",
    angle:
      "Downtown Kirkland and the marina area draw heavy pedestrian traffic, so sidewalks, patios, planters and entries need regular attention, and lake air leaves a film on awnings and storefronts. Totem Lake and Juanita centers have larger lots with dumpster pads and drive lanes. We scope the property, then clean flatwork, soft wash building faces and treat gum and spills, on early-morning or after-hours schedules.",
    timing:
      "Kirkland businesses often choose weekly or monthly sidewalk and entry programs in the busy season, with quarterly deep cleans. Pricing is quoted per site after a walk-through, based on scope, surfaces and frequency. A certificate of insurance and photo documentation are part of every program.",
    faq: {
      q: 'Can you work around restaurant patios near the Kirkland waterfront?',
      a: "Yes. We schedule patio and sidewalk cleaning around service hours, manage runoff near the shoreline, and use biodegradable products where detergent is needed.",
    },
  },
  'sammamish-wa': {
    lead: "Sammamish's HOAs, community entrances, clubhouses and small retail centers need steady exterior upkeep in a heavily wooded setting.",
    angle:
      "Common areas, entry monuments, sidewalks, clubhouse patios and small commercial centers on the plateau sit under dense fir, so algae, moss and needle litter build up quickly on concrete and signage bases. We walk each property, agree on scope, then surface clean flatwork, soft wash building faces and detail entrances and pads, scheduled around resident use.",
    timing:
      "HOA and property-management accounts here often choose a quarterly or seasonal program, with a spring and fall deep clean. Pricing is per site after a walk-through. Recurring programs get a lower per-visit rate, with before-and-after photos and a completion note every time.",
    faq: {
      q: 'Do you handle HOA common areas on the Sammamish Plateau?',
      a: "Yes. We clean walks, entries, clubhouse patios and shared hardscapes on a recurring schedule, with a certificate of insurance and documentation suitable for HOA boards and property managers.",
    },
  },
  'issaquah-wa': {
    lead: "Issaquah's Gilman Village shops, Front Street storefronts and Highlands retail face a damp, shaded climate that keeps exteriors green.",
    angle:
      "Walks, patios, planters and entries in Issaquah's retail areas stay damp in the forest shade, so algae and moss build quickly on concrete and brick. Restaurants and shops need clean entrances and dumpster pads. We scope the property, then surface clean flatwork, soft wash building faces and detail entries, working early in the day or after close.",
    timing:
      "Issaquah businesses commonly choose monthly or quarterly programs, with a seasonal deep clean in spring. Pricing is quoted per site after a walk-through, based on scope, surfaces and frequency, and recurring programs are billed at a set per-visit rate with documentation after each visit.",
    faq: {
      q: 'Can you keep shaded entries and walks at my Issaquah shop from getting slick?',
      a: "Yes. A recurring program with a post-treatment slows regrowth, and regular visits keep entrances safe for customers. We document each visit with photos.",
    },
  },
  'bellevue-wa': {
    lead: "Bellevue's downtown towers, retail centers and high-end restaurants hold their exteriors to a premium standard, with schedules that never disturb customers.",
    angle:
      "Plazas, sidewalks, garage entrances, dumpster enclosures and storefronts in downtown Bellevue, Factoria and Crossroads see constant traffic and need documented, consistent results. We scope each site on a walk, agree on frequency, then surface clean flatwork, soft wash building faces and detail entrances, scheduling early mornings or after hours.",
    timing:
      "Property managers in Bellevue commonly choose a scheduled program with before-and-after photos and a completion note after every service, which our programs include. Pricing is per site after a walk-through. A certificate of insurance is added to your file before the first visit.",
    faq: {
      q: 'Can you provide documentation for a Bellevue property manager or HOA?',
      a: "Yes. Every service ends with before-and-after photos and a completion note, and a certificate of insurance is on file before the first visit.",
    },
  },
  'seattle-wa': {
    lead: "For Seattle storefronts, we focus on the north end — Ballard, Fremont, Wallingford and Green Lake — where a clean sidewalk and entry carry a small business.",
    angle:
      "Neighborhood retail and restaurants in the north end have narrow sidewalks, shared walls and constant foot traffic, so gum, grease, moss and algae build up fast on entries and planters. We walk the property, agree on scope and frequency, then clean sidewalks and entries with surface cleaners where space allows and hand tools where it doesn't, soft wash storefront faces and detail dumpster areas, scheduled before opening or after close.",
    timing:
      "Because Seattle is at the edge of our range, we prioritize north-end addresses and multi-property or larger programs, and we say plainly if a single small storefront doesn't pencil out. Pricing is quoted per site after a walk-through, with recurring programs at a set per-visit rate, a certificate of insurance on file and photos after each service.",
    faq: {
      q: 'Do you take commercial jobs in Seattle, and which neighborhoods?',
      a: "Yes, mainly in the north end and for larger or recurring jobs. Send the address and scope and we'll tell you plainly whether it fits our schedule, then set up a site walk if it does.",
    },
  },
  'granite-falls-wa': {
    lead: "Granite Falls' downtown shops, gateway-to-the-Mountain-Loop businesses and small commercial lots deal with deep shade and constant damp on their exteriors.",
    angle:
      "Storefronts, walks, small lots and equipment yards in Granite Falls collect moss, needle litter and, for properties on well water, iron staining on concrete and siding. We walk the site, agree on scope and frequency, then clean flatwork with surface cleaners, treat rust and gum, soft wash building faces and detail entrances and dumpster pads, scheduled to suit your hours.",
    timing:
      "Granite Falls businesses often choose a quarterly program with a seasonal deep clean before the wet season. We're about 15 minutes from our shop, so recurring visits are efficient. Pricing is per site after a walk-through, with a certificate of insurance and photo documentation provided.",
    faq: {
      q: 'Can you remove iron staining from a commercial property on well water in Granite Falls?',
      a: "Usually, yes — we carry dedicated rust and iron-stain treatments for concrete and siding. Deep-set staining may lighten rather than vanish, and we tell you what to expect before starting.",
    },
  },
  'snohomish-wa': {
    lead: "Snohomish's First Street shops, antique stores and restaurants sit in a historic district where customers notice every detail of the exterior.",
    angle:
      "Historic brick, painted wood storefronts, sidewalks and patios along First Street take foot traffic from visitors and river-valley dampness all year. We scope each property, then clean sidewalks and entries at controlled pressure, soft wash painted and historic building faces, and detail awnings, planters and dumpster areas, scheduled early or after close around events and weekends.",
    timing:
      "Snohomish businesses commonly choose a monthly or seasonal program, with extra attention before busy weekends and festivals. We're about 10 minutes from our shop, so scheduling is flexible. Pricing is per site, with documentation after every visit and a certificate of insurance on file.",
    faq: {
      q: 'Is commercial cleaning safe for historic buildings on First Street in Snohomish?',
      a: "Yes, when the method is matched to the material. Old brick and painted wood get controlled pressure or soft washing, and we never use high pressure on fragile historic surfaces.",
    },
  },
  'monroe-wa': {
    lead: "Monroe's downtown businesses and the commercial strip along the US-2 corridor take the valley's constant moisture on every exterior surface.",
    angle:
      "Retail, restaurants, offices and service businesses in Monroe collect algae on shaded sidewalks, moss on planter edges and oil and gum on parking areas. We walk the site, agree on scope and frequency, then clean flatwork with surface cleaners, soft wash building faces and detail entrances and dumpster pads, scheduled around your hours.",
    timing:
      "Monroe businesses commonly choose a quarterly program with a seasonal deep clean ahead of the wet season. See our <a href='/services/maintenance-plans/'>maintenance plans</a> for residential properties alongside commercial. Pricing is per site after a walk-through, with a certificate of insurance on file and photos after each visit.",
    faq: {
      q: 'How often should a Monroe business have its sidewalks and entries cleaned?',
      a: "Quarterly works for most, monthly for busy restaurants and shaded entries. Valley moisture brings algae back, so a regular schedule is easier and cheaper than occasional heavy cleaning.",
    },
  },
  'mill-creek-wa': {
    lead: "Mill Creek's Town Center retailers, restaurants and HOA common areas hold a tidy, covenant-driven standard that a regular exterior program maintains.",
    angle:
      "Walks, plazas, entries, dumpster enclosures and shared hardscape in Mill Creek see constant use, and shade from neighborhood trees keeps algae and moss active. We walk the property, agree on scope, then surface clean flatwork, soft wash building faces and detail entries, with before-and-after photos and a completion note for property managers and HOA boards.",
    timing:
      "Mill Creek properties commonly choose a quarterly or seasonal program with a deep clean in spring and fall. Pricing is per site after a walk-through, based on scope, surfaces and frequency. A certificate of insurance is added to your file before the first visit.",
    faq: {
      q: 'Can you work on a recurring schedule for a Mill Creek HOA or property manager?',
      a: "Yes. We set a scope and frequency, bill a set per-visit rate, and send photos and a completion note after each service for your records.",
    },
  },
  'mukilteo-wa': {
    lead: "Mukilteo's Old Town restaurants, waterfront shops and Harbour Pointe commercial properties face salt air and ferry-adjacent foot traffic.",
    angle:
      "Storefronts, patios, walks and dumpster areas in Old Town and near the waterfront take salt film and grime, and visitors notice. We walk the site, agree on scope and frequency, then clean flatwork, soft wash building faces and treat gum and spills, on early-morning or after-hours schedules, with runoff managed near the water.",
    timing:
      "Waterfront businesses commonly choose a monthly program in the busy season and quarterly the rest of the year. Pricing is per site after a walk-through. We provide a certificate of insurance and photo documentation after every visit.",
    faq: {
      q: 'Can you clean a restaurant patio near the Mukilteo waterfront between lunch and dinner?',
      a: "Yes. We schedule around service windows, manage runoff near the shoreline, and use biodegradable products where detergent is needed.",
    },
  },
  'woodinville-wa': {
    lead: "Woodinville's warehouse-district tasting rooms, event venues and wine-country businesses need clean entries, patios and sidewalks for every guest.",
    angle:
      "Patios, walks, entries, wall faces and awnings around tasting rooms and venues see heavy weekend traffic, spilled wine, gum and shade-borne algae. We scope each property, then surface clean flatwork, soft wash walls and awnings, treat spills and stains, and detail dumpster areas, scheduled around events and open hours so guests never see the hoses.",
    timing:
      "Venues commonly choose a weekly or biweekly program in the busy season and monthly otherwise, with a deep clean before major events. Pricing is quoted per site after a walk-through, with recurring programs billed at a set per-visit rate and a certificate of insurance on file.",
    faq: {
      q: 'Do you clean tasting rooms and event venues in the Woodinville wine district?',
      a: "Yes — patios, entries, sidewalks, wall washing and awning cleaning, scheduled around your events and open hours. Certificate of insurance provided.",
    },
  },
  'redmond-wa': {
    lead: "Redmond's Overlake offices, Town Center retail and multifamily properties need consistent exterior upkeep and fast turnover cleans.",
    angle:
      "Plazas, walks, garages, dumpster pads and building faces in Redmond see heavy daily traffic from tech-corridor employees and residents, and apartment communities need quick turnover exteriors between tenants. We scope each property, then surface clean flatwork, soft wash building faces and detail entrances, on schedules that don't disturb occupants.",
    timing:
      "Redmond property managers commonly choose a quarterly program with turnover cleans as needed. Pricing is quoted per site after a walk-through, with recurring programs billed at a set per-visit rate. Every visit ends with before-and-after photos and a completion note, with a certificate of insurance on file.",
    faq: {
      q: 'Can you handle fast exterior turnover cleans for Redmond multifamily properties?',
      a: "Yes. Turnover jobs can usually be scheduled quickly. A scoped exterior clean with photo documentation fits easily into a property manager's workflow.",
    },
  },
  'lynnwood-wa': {
    lead: "Lynnwood's Highway 99 corridor, Alderwood-area retail and redeveloping City Center add up to steady commercial and multifamily exterior work.",
    angle:
      "Storefronts, drive-thrus, parking lots, garages and dumpster pads along 196th and Highway 99 collect oil, gum, grease and road film, and multifamily properties need clean walks and entries. We walk each site, agree on scope and frequency, then clean flatwork with surface cleaners, treat oil and gum, soft wash building faces and detail entrances, scheduled off-hours.",
    timing:
      "Lynnwood businesses commonly choose a monthly or quarterly program, with a seasonal deep clean. Pricing is per site after a walk-through. Drive-thru lanes and lots are often done overnight. A certificate of insurance and photo documentation come with every program.",
    faq: {
      q: 'Do you clean parking lots and drive-thru lanes in Lynnwood overnight?',
      a: "Yes. Overnight and early-morning work is the norm for lots and drive-thrus, so customers never see the equipment and service never stops.",
    },
  },
};
