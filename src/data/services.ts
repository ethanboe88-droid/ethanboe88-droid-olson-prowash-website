// Service catalog — powers /services, each /services/<slug> page, the homepage
// bento grid, the footer and schema.

type PointIcon =
  | 'roof' | 'jet' | 'foam' | 'house' | 'gutter' | 'gutterGuard' | 'deck'
  | 'driveway' | 'commercial' | 'leaf' | 'shield' | 'star' | 'pin' | 'clock' | 'drop' | 'tag' | 'check';

export type ServicePoint = { icon: PointIcon; t: string; d: string };
export type ServiceStep = { t: string; d: string };
export type ServiceQA = { q: string; a: string };

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
  /** every service has its own page */
  detailPage: string;
  /** short phrase folded into the detail-page hero headline */
  edge: string;
  /** "why this matters in the Pacific Northwest" — 3 cards on the detail page */
  whyLocal: ServicePoint[];
  /** the 4-step method, used for display + HowTo schema */
  process: ServiceStep[];
  /** service-specific FAQ (answers may contain inline HTML links) */
  faqs: ServiceQA[];
  /** one plain sentence about how the service is priced */
  priceNote: string;
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
    detailPage: '/services/roof-cleaning',
    edge: 'at the root',
    whyLocal: [
      { icon: 'drop', t: 'Marine humidity', d: 'Persistent damp off Puget Sound keeps north-facing slopes wet for weeks at a time, so moss spores never really stop working.' },
      { icon: 'leaf', t: 'Evergreen canopy', d: 'Fir, cedar and big-leaf maple drop needles and shade onto the roof — the exact conditions moss and lichen need to take hold.' },
      { icon: 'shield', t: 'Warranty-safe method', d: 'Asphalt-shingle makers void warranties over pressure washing. A low-pressure soft wash keeps the coverage — and the granules — intact.' },
    ],
    process: [
      { t: 'Inspect & protect', d: 'We look over the roof, note the problem slopes and flashing, then pre-wet and tarp landscaping, gutter guards and downspout outlets.' },
      { t: 'Apply the treatment', d: 'A professional biocide is fan-sprayed at low pressure across the whole roof, killing moss, lichen and black algae at the root.' },
      { t: 'Dwell & gentle rinse', d: 'The solution dwells, then a soft rinse clears the loosened growth without ever disturbing the granules.' },
      { t: 'Zinc/copper post-treat', d: 'A metal-salt treatment is applied along the ridge and slopes to slow regrowth for years, and we flush any debris out of the gutters.' },
    ],
    faqs: [
      { q: 'Will you pressure wash my roof?', a: 'Never on asphalt shingles. High pressure strips the protective granules and voids the manufacturer warranty. We use a low-pressure soft wash with professional biocides that kills the growth at the root.' },
      { q: 'How long until the moss actually disappears?', a: 'Loose moss rinses off during the visit; the rest browns and drops over the following weeks as rain and wind clear it. Heavy lichen can take a full season to fully release.' },
      { q: 'How often does a Snohomish County roof need this?', a: 'Most homes here go 2–4 years between soft washes. Roofs under heavy fir shade or on the north side of a hill are closer to every 2 years — a zinc treatment stretches that out.' },
    ],
    priceNote:
      'Priced by roof size, pitch, access and how much growth is present. Most single-family roofs land between $499 and $1,200, quoted firm after we see photos or the roof itself.',
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
    detailPage: '/services/house-washing',
    edge: 'gentle on the finish',
    whyLocal: [
      { icon: 'foam', t: 'Green algae film', d: 'That dull green cast on north and east walls is airborne algae feeding on moisture. Pressure drives it into the substrate — soft washing dissolves it.' },
      { icon: 'house', t: 'Every siding type', d: 'Vinyl, LP SmartSide, fiber cement, cedar and brick each want a different dilution and dwell time. We match the mix to your wall.' },
      { icon: 'drop', t: 'Lasts through the wet season', d: 'A soft wash kills the growth instead of blasting the surface, so siding stays clean four to six times longer than a pressure-only wash.' },
    ],
    process: [
      { t: 'Pre-wet & protect', d: 'Plants, light fixtures and outlets are covered and soaked; we close windows and note any open weep holes.' },
      { t: 'Low-pressure apply', d: 'A soft-wash detergent is applied bottom to top, lifting algae, pollen, cobwebs and wasp nests off siding, soffits and gutter faces.' },
      { t: 'Agitate & dwell', d: 'Trim, corners and stubborn staining are hand-detailed while the solution does the work.' },
      { t: 'Rinse & window pass', d: 'Everything is rinsed top-down and the windows get a final rinse so you are not left with spots.' },
    ],
    faqs: [
      { q: 'Is soft washing safe for my plants?', a: 'Yes. We pre-wet and rinse all landscaping around the work area and use detergents at a controlled dilution. Plant protection is a standard part of every wash.' },
      { q: 'Will it get the green off the north side?', a: 'That is exactly what it is for. The green is algae, and the detergent kills it at the root rather than smearing it around the way pressure does.' },
      { q: 'Can you do just the gutter faces?', a: 'Gutter-face brightening is included in a full house wash, or we can do it as an add-on to a <a href="/services/roof-cleaning">roof</a> or <a href="/services/gutter-cleaning">gutter cleaning</a>.' },
    ],
    priceNote:
      'Most single-story homes run $299–$450 and two-story homes $450–$700, based on square footage, stories and siding condition. Bundled with a roof wash for a lower combined rate.',
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
    detailPage: '/services/pressure-washing',
    edge: 'hot water, dialed in',
    whyLocal: [
      { icon: 'driveway', t: 'Moss in the seams', d: 'Shaded Northwest concrete grows moss and black algae in every control joint. Hot water and a surface cleaner pull it out and leave an even finish.' },
      { icon: 'jet', t: 'Hot water cuts grease', d: 'Oil drips, chewing gum and grill grease do not move with cold water. Our hot-water units melt them off the surface.' },
      { icon: 'shield', t: 'Pressure matched to material', d: 'Brick, pavers and stamped concrete each have a ceiling. We stay under it — no etching, no pitting, no lost jointing sand.' },
    ],
    process: [
      { t: 'Clear & pre-treat', d: 'We move what is movable, then pre-treat moss, algae and organic staining so it releases instead of streaking.' },
      { t: 'Surface-clean the field', d: 'A rotary surface cleaner runs the open concrete at a controlled pressure for a line-free, even result.' },
      { t: 'Detail the edges', d: 'Borders, steps, curbs and tight spots are hand-wanded to match the field.' },
      { t: 'Post-treat & rinse', d: 'A final treatment slows regrowth in the joints, and the whole area plus adjacent siding is rinsed down.' },
    ],
    faqs: [
      { q: 'What is the difference between this and soft washing?', a: 'Pressure washing uses mechanical force for hard surfaces that can take it — concrete, brick, pavers, stone. <a href="/services/soft-washing">Soft washing</a> uses low pressure and detergent for anything force would damage: siding, roofs, wood.' },
      { q: 'Will it damage my pavers or take out the sand?', a: 'Not the way we do it. We keep the pressure and angle controlled, and we can replace polymeric jointing sand as an add-on if a surface needs it.' },
      { q: 'Can you get oil stains out of the driveway?', a: 'Usually a good deal lighter. Fresh oil lifts well with hot water and a degreaser; deep, old staining fades but may not disappear completely.' },
    ],
    priceNote:
      'Driveways and walkways typically run $150–$350 depending on square footage and staining. Larger flatwork and multi-surface jobs are quoted after a look.',
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
    detailPage: '/services/soft-washing',
    edge: 'detergent, not force',
    whyLocal: [
      { icon: 'foam', t: 'Kills growth at the root', d: 'Algae, mildew and lichen come back fast when you only blast the surface. Soft-wash chemistry kills the organism so it stays gone longer.' },
      { icon: 'house', t: 'Made for delicate surfaces', d: 'Stucco, cedar, painted wood, screens, old brick and composite all fail under pressure. Low pressure and the right mix clean them safely.' },
      { icon: 'leaf', t: 'Landscape-first protocol', d: 'Pre-wet, tarp, rinse. Biodegradable products at a safe dilution mean your beds and lawn come through fine.' },
    ],
    process: [
      { t: 'Assess the surface', d: 'We identify the material and the growth, then mix the mildest solution that will actually do the job.' },
      { t: 'Protect the surroundings', d: 'Plants and hardscape are pre-wet and covered; downspouts near beds are diverted.' },
      { t: 'Apply low and slow', d: 'Solution is applied at garden-hose pressure, bottom to top, and allowed to dwell.' },
      { t: 'Rinse & verify', d: 'A gentle top-down rinse, then we walk the work with you to confirm the finish.' },
    ],
    faqs: [
      { q: 'What surfaces should be soft washed instead of pressure washed?', a: 'Anything organic or coated: roof shingles, painted or stained wood, cedar siding, stucco, EIFS, vinyl, screens and window frames, and older mortar. If pressure could gouge it or drive water behind it, it gets soft washed.' },
      { q: 'Is the detergent harmful to pets or kids?', a: 'Once it has been rinsed and the surface has dried, it is safe. We keep people and pets off the work area during application and until the rinse is done.' },
      { q: 'How long do results last?', a: 'Because the growth is killed rather than knocked back, a soft wash typically holds two to three times longer than a pressure-only clean on the same surface.' },
    ],
    priceNote:
      'Priced by surface area and access, most soft-wash jobs fall between $249 and $600. Fences, single walls and outbuildings are on the lower end.',
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
    detailPage: '/services/gutter-cleaning',
    edge: 'cleared and flow-tested',
    whyLocal: [
      { icon: 'leaf', t: 'Needles pack solid', d: 'Fir and pine needles knit into a mat that holds water and rots the fascia. They have to come out by hand, not by blower alone.' },
      { icon: 'drop', t: 'Overflow finds the foundation', d: 'A blocked run sends water down the wall and against the footing. Clearing gutters each season is cheap insurance against rot and settling.' },
      { icon: 'roof', t: 'Roof grit builds sludge', d: 'Shingle grit and moss debris wash in and set into a heavy paste that screens will not stop. We scoop it and flush it.' },
    ],
    process: [
      { t: 'Hand-clear the troughs', d: 'Every run is cleared by hand and the debris is bagged and taken with us — nothing blown onto the roof or the beds.' },
      { t: 'Flush the downspouts', d: 'Each downspout is run with water and flow-tested; minor clogs are cleared on the spot.' },
      { t: 'Wash the faces', d: 'The exterior gutter faces are soft washed so the whole line looks new, not just empty.' },
      { t: 'Photo report', d: 'We send photos from the ladder showing the cleared troughs and the confirmed flow.' },
    ],
    faqs: [
      { q: 'Do you clean the outside of the gutters too?', a: 'Yes. Exterior face soft washing is included, so you get the "tiger stripe" staining removed, not just the debris scooped out.' },
      { q: 'How often should gutters be cleaned around here?', a: 'Twice a year for most homes with any conifers nearby — late spring after the seed drop and late fall after the leaves. Open lots with no trees can often go once a year.' },
      { q: 'Can you install guards so I stop doing this?', a: 'Yes — see our <a href="/services/gutter-guard-installation">gutter guard installation</a> page. We clean and re-pitch the gutters first, then fit micro-mesh guards.' },
    ],
    priceNote:
      'Single-story homes generally run $149–$225 and two-story homes $225–$350, based on linear footage and how packed the gutters are. Bundled rates when added to a roof or house wash.',
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
    edge: 'stop cleaning gutters',
    whyLocal: [
      { icon: 'leaf', t: 'Conifer country', d: 'Fir and cedar needles slip through screens and pack a trough solid — twice a year, every year.' },
      { icon: 'drop', t: 'Overflow damage', d: 'A clogged gutter dumps water down the fascia and against the foundation. Rot, mold and settling follow.' },
      { icon: 'shield', t: 'Rigid micro-mesh', d: '50-micron stainless mesh on a powder-coated frame — carries snow load, passes every Northwest downpour, blocks the grit.' },
    ],
    process: [
      { t: 'Assess & measure', d: 'Gutter condition, pitch, fascia and downspouts checked; every run measured; rotten sections flagged before we quote.' },
      { t: 'Clean & re-pitch', d: 'Existing gutters hand-cleared, flushed, re-sealed at the seams and re-pitched to the downspouts so they actually drain.' },
      { t: 'Install the guard', d: 'Panels cut to length, tucked under the shingles and screwed to the gutter — no staples, no adhesive-only installs.' },
      { t: 'Flow test & clean-up', d: 'Water run across every section, full downspout flow confirmed, and every scrap hauled away.' },
    ],
    faqs: [
      { q: 'Do I still need my gutters cleaned after guards are installed?', a: 'Almost never. Fine dust and pollen can build a thin film on top of the mesh over several years — a quick rinse clears it. You will not be scooping needles again.' },
      { q: 'Will micro-mesh keep up with a Pacific Northwest downpour?', a: 'Yes. The mesh has far more open area than the gutter can carry, and it is pitched so water sheets in rather than skating over the front. Reverse-curve and foam systems are the ones that struggle with our rain.' },
      { q: 'Can you use my existing gutters?', a: 'If they are structurally sound we clean, re-seal and re-pitch them and fit guards to what you have. If sections are rusted through we will show you photos and quote replacement separately.' },
    ],
    priceNote:
      'Priced by the linear foot (from $8/ft), quoted firm after a measure. Single-story homes typically $960–$1,650; two-story $1,650–$2,400; discounted when bundled with a wash.',
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
    detailPage: '/services/deck-patio-cleaning',
    edge: 'pressure matched to the board',
    whyLocal: [
      { icon: 'deck', t: 'Wood vs. composite', d: 'Cedar and pressure-treated lumber want low pressure and a brightener; Trex and composite want detergent and almost no pressure. The wrong call furs the wood or voids the warranty.' },
      { icon: 'foam', t: 'That slick green film', d: 'Shaded Northwest decks grow an algae film that gets genuinely dangerous when wet. Clearing it is a safety job as much as a looks job.' },
      { icon: 'tag', t: 'Prep that respects the next coat', d: 'If you are staining or sealing after, the surface has to be cleaned and neutralized correctly or the finish will not take.' },
    ],
    process: [
      { t: 'Identify & test', d: 'We confirm the decking material and test an inconspicuous spot to set the pressure and solution.' },
      { t: 'Apply & dwell', d: 'A wood-safe cleaner is applied to the deck, rails, spindles and lattice and left to break down the growth.' },
      { t: 'Clean at the right pressure', d: 'Low pressure for wood, gentle detergent rinse for composite — worked with the grain, board by board.' },
      { t: 'Brighten & rinse', d: 'Wood gets a pH-balancing brightener to restore tone and open the grain for stain; everything is rinsed and the furniture replaced.' },
    ],
    faqs: [
      { q: 'Can you clean my composite / Trex deck?', a: 'Yes, and it needs the gentle approach. Composite is cleaned with detergent and very low pressure — high pressure can permanently mar the surface and void the warranty.' },
      { q: 'Do you stain or seal too?', a: 'We do the cleaning and brightening prep to a stain-ready standard. We can coordinate the sealing or hand it back to you once the wood has dried out — usually 24 to 48 hours.' },
      { q: 'Will it get the graying out of my cedar?', a: 'Cleaning plus a brightener removes surface graying and mill glaze and brings back a lot of the natural tone. Deep weathering that has gone into the fiber needs sanding, which is outside this service.' },
    ],
    priceNote:
      'Most residential decks run $229–$500 depending on size, height, railing detail and whether a brightener is needed. Add brightening for stain prep at a set per-square-foot rate.',
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
    detailPage: '/services/driveway-concrete-cleaning',
    edge: 'no zebra stripes',
    whyLocal: [
      { icon: 'driveway', t: 'Even finish, every pass', d: 'Wand-only cleaning leaves arcs and stripes. A rotary surface cleaner holds a consistent distance so the whole slab comes out one shade.' },
      { icon: 'drop', t: 'Tannin, rust and moss', d: 'Leaf tannin, irrigation rust and joint moss are the three Northwest concrete stains. Each one gets its own pre-treatment.' },
      { icon: 'shield', t: 'Post-treat the joints', d: 'Moss lives in the control joints and along the edges. A post-treatment slows it from coming straight back.' },
    ],
    process: [
      { t: 'Pre-treat staining', d: 'Rust, tannin, oil and moss are spot-treated with the right product and given time to work.' },
      { t: 'Surface-clean', d: 'The open field is run with a rotary surface cleaner at controlled pressure for an even, line-free finish.' },
      { t: 'Detail edges & joints', d: 'Borders, expansion joints, steps and the apron are hand-wanded to blend.' },
      { t: 'Post-treat & rinse', d: 'A joint treatment goes down to slow regrowth, and the slab plus adjacent siding and beds are rinsed clean.' },
    ],
    faqs: [
      { q: 'Why does my driveway look striped after other companies clean it?', a: 'That is wand cleaning without a surface cleaner — the distance from the tip changes constantly, so the clean is uneven. We run a surface cleaner across the field so it comes out uniform.' },
      { q: 'Can you remove rust and oil stains?', a: 'Rust from sprinklers and fertilizer usually comes out well with a dedicated rust remover. Oil lightens significantly; deep, old oil may leave a shadow.' },
      { q: 'Do you seal concrete?', a: 'Sealing is available as an add-on once the concrete is clean and fully dry. It is not part of the base clean.' },
    ],
    priceNote:
      'Standard two-car driveways run $189–$300; add walkways, patios and curbing by the square foot. Sealing and paver-sand replacement are optional add-ons.',
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
    detailPage: '/services/commercial-services',
    edge: 'on your schedule',
    whyLocal: [
      { icon: 'commercial', t: 'The storefront is the first impression', d: 'Gum, spills, cobwebs and a grimy entrance read as "closed" even when you are open. A clean exterior is the cheapest marketing you have.' },
      { icon: 'clock', t: 'Before-open and after-close crews', d: 'We work around your hours — early mornings, evenings, or overnight for drive-thrus and lots — so customers never see the hoses.' },
      { icon: 'shield', t: 'COI and documentation', d: 'Certificate of insurance on file, a consistent scope, and photo documentation every visit for your records and your property manager.' },
    ],
    process: [
      { t: 'Site walk & scope', d: 'We map the property — storefront, walkways, entrances, dumpster pad, lot, drive-thru — and agree on scope and frequency.' },
      { t: 'Schedule around operations', d: 'Work is set for off-hours with a defined arrival window and a single point of contact.' },
      { t: 'Execute to spec', d: 'Flat surfaces surface-cleaned, building faces soft washed, gum and spills spot-treated, entrances detailed.' },
      { t: 'Document & report', d: 'Before/after photos and a completion note sent after every service.' },
    ],
    faqs: [
      { q: 'Do you offer recurring maintenance contracts?', a: 'Yes — weekly, monthly, quarterly and seasonal programs for storefronts, restaurants, HOAs, offices and property managers, at a lower per-visit rate than one-off work.' },
      { q: 'Can you provide a certificate of insurance?', a: 'Yes. We carry general liability coverage and will add your entity as certificate holder before the first visit.' },
      { q: 'Do you work outside business hours?', a: 'That is the norm for commercial work — early morning, after close, or overnight for drive-thru lanes and parking structures.' },
    ],
    priceNote:
      'Quoted per site after a walk-through, based on scope, surfaces and frequency. Recurring programs are billed at a set per-visit rate with no surprises.',
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
    detailPage: '/services/landscaping',
    edge: 'the other half of curb appeal',
    whyLocal: [
      { icon: 'leaf', t: 'One LLC, both halves', d: 'Clean siding next to overgrown beds still looks neglected. We do the wash and the grounds so the whole property reads "cared for".' },
      { icon: 'drop', t: 'Growth season is relentless', d: 'A long, wet spring means beds, hedges and lawns get away from you fast. Scheduled visits keep it in hand.' },
      { icon: 'tag', t: 'Finish detail for a sale or event', d: 'Reshaped beds, fresh mulch and crisp edges are the highest-return prep before listing a home or hosting.' },
    ],
    process: [
      { t: 'Walk & plan', d: 'We go over the property with you and agree on scope — beds, mulch, trimming, clean-up, lawn detail.' },
      { t: 'Cut back & clear', d: 'Shrubs and hedges trimmed, beds weeded and edged, debris and old bark hauled away.' },
      { t: 'Refresh', d: 'Fresh mulch or decorative rock installed to a clean line; bed shapes tightened.' },
      { t: 'Detail & haul', d: 'Lawn edges and hard surfaces blown clean, and every bit of green waste leaves with us.' },
    ],
    faqs: [
      { q: 'Do you do weekly lawn maintenance?', a: 'Our focus is clean-ups, bed work, mulch, trimming and property detailing rather than weekly mow routes. We will tell you honestly if a dedicated mowing service is the better fit.' },
      { q: 'Can you do the landscaping and the pressure washing in one trip?', a: 'Yes — that is the point of having both under one LLC. We sequence it so the wash happens first and the grounds are finished last.' },
      { q: 'Do you haul away the debris?', a: 'Always. Green waste, old mulch and trimmings are removed and disposed of — nothing left bagged at the curb.' },
    ],
    priceNote:
      'Clean-ups and bed refreshes typically start around $179 and scale with property size and how much cutting back and mulch is involved. Quoted firm after a walk-through.',
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
