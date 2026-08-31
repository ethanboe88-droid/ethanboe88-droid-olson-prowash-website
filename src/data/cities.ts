// Per-city landing page data. Each entry drives /service-area/<slug>.
// Written to be specific and non-duplicative — local SEO + AI grounding.

export type City = {
  name: string;
  slug: string; // e.g. 'everett-wa'
  county: 'Snohomish County' | 'King County';
  geo: { lat: number; lng: number };
  driveTime: string; // from the Lake Stevens base
  /** hero intro — 2 short sentences, unique per city */
  intro: string;
  /** local exterior-cleaning conditions — one paragraph */
  conditions: string;
  neighborhoods: string[];
  landmarks: string[];
  housing: string;
  /** service slugs most requested here */
  topServices: string[];
  photo: string;
  photoAlt: string;
  faqs: { q: string; a: string }[];
};

export const CITIES: City[] = [
  {
    name: 'Lake Stevens',
    slug: 'lake-stevens-wa',
    county: 'Snohomish County',
    geo: { lat: 48.0151, lng: -122.0637 },
    driveTime: 'our home base',
    intro:
      "Olson Pro Wash is based in Lake Stevens — this is home. We know which streets sit under the heaviest tree cover and which lakefront roofs turn green first.",
    conditions:
      "Lake Stevens homes take a beating from shade and moisture. Properties around the lake, in Soper Hill and out toward Machias sit under dense fir canopy, so north-facing roofs grow moss within a season or two and concrete near the water goes green fast. Roof soft washing, gutter clean-outs and annual house washes are our most-booked jobs in town.",
    neighborhoods: ['Downtown / North Cove', 'Frontier Village', 'Soper Hill', 'Lake Stevens Center', 'Hartford', 'Machias', 'Lundeen Park area'],
    landmarks: ['Lake Stevens', 'Frontier Village', 'North Cove Park', 'Lundeen Park'],
    housing: 'Lakefront homes, established mid-century neighborhoods and newer Soper Hill developments',
    topServices: ['roof-cleaning', 'gutter-cleaning', 'house-washing'],
    photo: '/images/hero.jpg',
    photoAlt: 'Olson Pro Wash working on a Lake Stevens, WA roof',
    faqs: [
      {
        q: 'How fast can you get to a job in Lake Stevens?',
        a: 'Usually within a few days — Lake Stevens is our home base, so it gets priority scheduling. Same-day quotes almost always.',
      },
      {
        q: 'Do you clean lakefront and dock-adjacent surfaces?',
        a: 'Yes. We use biodegradable detergents at safe dilution and control runoff carefully near the water — decks, railings, retaining walls and boathouse exteriors included.',
      },
    ],
  },
  {
    name: 'Everett',
    slug: 'everett-wa',
    county: 'Snohomish County',
    geo: { lat: 47.979, lng: -122.2021 },
    driveTime: 'about 15 minutes from our Lake Stevens shop',
    intro:
      "From the historic homes of Rucker Hill to the newer builds around Silver Lake, Everett's marine air and older siding keep us busy year-round.",
    conditions:
      "Everett sits right on Port Gardner Bay, so salt film and algae build on siding faster than inland. Northwest Everett's historic Craftsman and Victorian homes need a careful low-pressure soft wash — never a high-pressure blast — while the Silver Lake and Eastmont subdivisions are standard annual house-wash and driveway work. Downtown storefronts get early-morning sidewalk and entry cleaning.",
    neighborhoods: ['Northwest Everett / Rucker Hill', 'Grand Avenue Historic District', 'Silver Lake', 'View Ridge / Madison', 'Eastmont', 'Lowell', 'Port Gardner', 'Delta'],
    landmarks: ['Naval Station Everett', 'Silver Lake', 'Boeing Everett', 'Downtown Everett', 'Providence Regional'],
    housing: 'Historic homes in NW Everett, mid-century View Ridge, and newer subdivisions near Silver Lake',
    topServices: ['house-washing', 'commercial-services', 'roof-cleaning'],
    photo: '/images/p-house-truck.jpg',
    photoAlt: 'Olson Pro Wash house washing in Everett, WA',
    faqs: [
      {
        q: 'Can you soft wash an older historic home in northwest Everett?',
        a: 'Yes — that is exactly what soft washing is for. Low pressure and the right detergent lift decades of grime and algae from old wood siding, painted trim and delicate details without forcing water behind the boards.',
      },
      {
        q: 'Do you do commercial storefront cleaning in downtown Everett?',
        a: 'We do. Early-morning and after-hours sidewalk, entry, awning and dumpster-pad cleaning on a one-time or recurring schedule, COI on file.',
      },
    ],
  },
  {
    name: 'Marysville',
    slug: 'marysville-wa',
    county: 'Snohomish County',
    geo: { lat: 48.0518, lng: -122.1771 },
    driveTime: 'about 15 minutes from our Lake Stevens shop',
    intro:
      "Marysville runs from the older neighborhoods off State Avenue up to the fast-growing subdivisions in Smokey Point and Getchell — and all of it grows moss.",
    conditions:
      "North Marysville and Smokey Point are full of newer homes with big rooflines and large concrete driveways that streak and green up quickly. Closer to downtown and Kellogg Marsh, the housing is older and the trees are bigger, so roofs and gutters need more frequent attention. Driveway and flatwork cleaning plus annual house washes are the bread and butter here.",
    neighborhoods: ['Downtown Marysville', 'Smokey Point', 'Lakewood', 'Sunnyside', 'Kellogg Marsh', 'Getchell', 'Quilceda / Marysville'],
    landmarks: ['State Avenue', 'Smokey Point', 'Ebey Waterfront Trail', 'Jennings Memorial Park', 'Tulalip / Quil Ceda Village'],
    housing: 'Newer Smokey Point and Getchell subdivisions, plus established homes near downtown and Kellogg Marsh',
    topServices: ['driveway-concrete-cleaning', 'house-washing', 'roof-cleaning'],
    photo: '/images/p-driveway.jpg',
    photoAlt: 'Olson Pro Wash cleaning a driveway in Marysville, WA',
    faqs: [
      {
        q: 'My Smokey Point driveway is streaked and green — can you fix it?',
        a: 'Yes. A rotary surface cleaner gives an even, line-free finish and we post-treat for moss and tannin so it stays cleaner longer. Most single-bay-plus driveways run $189–$400.',
      },
    ],
  },
  {
    name: 'Arlington',
    slug: 'arlington-wa',
    county: 'Snohomish County',
    geo: { lat: 48.1987, lng: -122.1251 },
    driveTime: 'about 20 minutes from our Lake Stevens shop',
    intro:
      "Arlington's mix of Old Town homes and rural acreage means big rooflines, long gutter runs and a lot of trees dropping debris.",
    conditions:
      "Out past Old Town toward the Stillaguamish and up around Gleneagle, homes sit on wooded acreage with steep roofs and hundreds of feet of gutter. Conifer needles pack those gutters solid twice a year. Roof moss treatment, gutter clean-outs and gutter guard installation are what save Arlington homeowners the repeat ladder trips.",
    neighborhoods: ['Old Town Arlington', 'Smokey Point', 'Gleneagle', 'Kackman Creek', 'Stillaguamish Valley', 'Island Crossing'],
    landmarks: ['Old Town Arlington', 'Arlington Municipal Airport', 'Stillaguamish River', 'Gleneagle Golf Course', 'Centennial Trail'],
    housing: 'Rural acreage homes with large rooflines, plus Old Town and Smokey Point neighborhoods',
    topServices: ['roof-cleaning', 'gutter-guard-installation', 'gutter-cleaning'],
    photo: '/images/p-roof2.jpg',
    photoAlt: 'Olson Pro Wash soft washing a mossy roof in Arlington, WA',
    faqs: [
      {
        q: 'Can you handle a long two-story gutter run on acreage?',
        a: 'Yes — we carry the ladders and fall protection for tall, complex rooflines. We clear, flush and re-pitch the gutters, and for repeat cloggers we install stainless micro-mesh guards so you are done climbing.',
      },
    ],
  },
  {
    name: 'Bothell',
    slug: 'bothell-wa',
    county: 'King County',
    geo: { lat: 47.7623, lng: -122.2054 },
    driveTime: 'about 25 minutes from our Lake Stevens shop',
    intro:
      "Bothell straddles two counties, with mature landscaping planted right up against the foundation on most streets — so landscape protection matters more here than almost anywhere.",
    conditions:
      "The 1980s–90s subdivisions around Canyon Park, North Creek and Maywood Hills have established rhododendrons, ferns and cedar hedges pressed against the siding. Every house wash here runs our full plant-protection protocol: pre-wet, cover, rinse. Roofs along the Sammamish River corridor shade heavily and grow moss quickly.",
    neighborhoods: ['Canyon Park', 'North Creek', 'Maywood Hills', 'Westhill', 'Fitzgerald', 'Bothell Landing', 'Queensgate'],
    landmarks: ['UW Bothell / Cascadia College', 'Bothell Landing', 'Sammamish River Trail', 'Canyon Park', 'North Creek'],
    housing: '1980s–90s subdivisions with heavy mature landscaping, plus newer North Creek builds',
    topServices: ['house-washing', 'roof-cleaning', 'landscaping'],
    photo: '/images/p-house.jpg',
    photoAlt: 'Olson Pro Wash soft washing a home in Bothell, WA',
    faqs: [
      {
        q: 'I have big rhododendrons right against the house — will a wash hurt them?',
        a: 'No. We pre-wet and rinse all landscaping, tarp anything sensitive, and use biodegradable products at safe dilution. Our crews are trained to treat your beds like part of the job, not an obstacle.',
      },
    ],
  },
  {
    name: 'Kirkland',
    slug: 'kirkland-wa',
    county: 'King County',
    geo: { lat: 47.6769, lng: -122.206 },
    driveTime: 'about 35 minutes from our Lake Stevens shop',
    intro:
      "Kirkland runs from Lake Washington waterfront estates to walkable retail cores in Juanita and Totem Lake — premium residential soft washing and tidy commercial frontage are the ask here.",
    conditions:
      "Waterfront and view homes in Houghton and Market get salt haze and algae off the lake and need frequent, careful soft washing to stay bright. The Rose Hill and Bridle Trails neighborhoods have big trees and shaded roofs. Downtown Kirkland and Totem Lake businesses want spotless sidewalks and entries before opening.",
    neighborhoods: ['Downtown Kirkland / Marina', 'Juanita', 'Totem Lake', 'Rose Hill', 'Bridle Trails', 'Houghton', 'Finn Hill', 'Market'],
    landmarks: ['Kirkland Marina', 'Juanita Beach Park', 'Totem Lake', 'Cross Kirkland Corridor', 'Lake Washington'],
    housing: 'Lake Washington waterfront and view homes, plus established Rose Hill and Juanita neighborhoods',
    topServices: ['house-washing', 'roof-cleaning', 'commercial-services'],
    photo: '/images/p-house-truck.jpg',
    photoAlt: 'Olson Pro Wash exterior cleaning in Kirkland, WA',
    faqs: [
      {
        q: 'Do you work on Lake Washington waterfront homes in Kirkland?',
        a: 'Yes — waterfront siding, decks, railings, patios and dock-side hardscapes. We manage detergent and runoff carefully near the shoreline and match the method to each surface.',
      },
    ],
  },
  {
    name: 'Sammamish',
    slug: 'sammamish-wa',
    county: 'King County',
    geo: { lat: 47.6163, lng: -122.0356 },
    driveTime: 'about 40 minutes from our Lake Stevens shop',
    intro:
      "The Sammamish Plateau is prime moss country — large newer homes under dense Douglas fir, with steep roofs and long driveways that green up in the shade.",
    conditions:
      "Neighborhoods like Klahanie, Trossachs, Pine Lake and Sahalee sit in heavy evergreen canopy at elevation, so roofs collect needle debris and grow moss and lichen aggressively. The homes are big, the roofs are steep, and the driveways are long and often shaded. Roof soft washing with a zinc treatment, gutter guard installation and driveway de-mossing are the core Sammamish scope.",
    neighborhoods: ['Sammamish Plateau', 'Klahanie', 'Pine Lake', 'Beaver Lake', 'Trossachs', 'Inglewood', 'Sahalee'],
    landmarks: ['Pine Lake', 'Beaver Lake Park', 'Sahalee Country Club', 'Soaring Eagle Regional Park', 'Lake Sammamish'],
    housing: 'Large newer plateau homes under heavy fir canopy with steep roofs',
    topServices: ['roof-cleaning', 'gutter-guard-installation', 'driveway-concrete-cleaning'],
    photo: '/images/p-roof.jpg',
    photoAlt: 'Olson Pro Wash soft washing a roof on the Sammamish Plateau, WA',
    faqs: [
      {
        q: 'My roof grows moss back every year — can you slow it down?',
        a: 'Yes. After the soft wash we apply a zinc or copper treatment, and for the worst exposures we can install zinc strips at the ridge. Pairing it with gutter guards keeps needle debris (which feeds the moss) out of the system.',
      },
    ],
  },
  {
    name: 'Issaquah',
    slug: 'issaquah-wa',
    county: 'King County',
    geo: { lat: 47.5301, lng: -122.0326 },
    driveTime: 'about 40 minutes from our Lake Stevens shop',
    intro:
      "Tucked against the Issaquah Alps, Issaquah homes have steep roofs and shaded, damp hardscapes that stay green most of the year.",
    conditions:
      "From Issaquah Highlands down to Gilman Village and out toward Cougar and Tiger Mountain, homes sit in cool, wet, forested terrain. Roofs, north-side walkways and patios rarely get enough sun to dry out, so moss and black algae take hold and stay. Roof cleaning, deck restoration and driveway de-mossing are the usual Issaquah jobs.",
    neighborhoods: ['Issaquah Highlands', 'Gilman Village / Olde Town', 'Talus', 'Squak Mountain', 'Cougar Mountain', 'Sammamish Plateau edge', 'Newport'],
    landmarks: ['Gilman Village', 'Lake Sammamish State Park', 'Cougar Mountain', 'Tiger Mountain', 'Front Street'],
    housing: 'Foothill homes with steep roofs and shaded hardscapes, plus newer Highlands and Talus builds',
    topServices: ['roof-cleaning', 'deck-patio-cleaning', 'driveway-concrete-cleaning'],
    photo: '/images/p-deck.jpg',
    photoAlt: 'Olson Pro Wash cleaning a deck in Issaquah, WA',
    faqs: [
      {
        q: 'My north-facing patio is always slick and green. Can you keep it clean?',
        a: 'Yes — a proper cleaning plus a post-treatment slows regrowth, and many Issaquah customers put shaded hardscapes on a twice-a-year or annual plan so they never get dangerously slick again.',
      },
    ],
  },
  {
    name: 'Bellevue',
    slug: 'bellevue-wa',
    county: 'King County',
    geo: { lat: 47.6101, lng: -122.2015 },
    driveTime: 'about 35 minutes from our Lake Stevens shop',
    intro:
      "Bellevue homes are held to a high standard — HOA covenants, view-lot expectations and premium finishes mean the exterior has to be spotless and the work has to be careful.",
    conditions:
      "From West Bellevue and Enatai near Lake Washington to Somerset and Newport Hills up the hill, and the newer luxury builds in Bridle Trails, homeowners expect a flawless, damage-free result. Cedar shake, stucco, painted brick and delicate architectural detail all need the right low-pressure method. Roof soft washing, whole-home washes and immaculate hardscapes are the standard order.",
    neighborhoods: ['Downtown Bellevue', 'West Bellevue / Enatai / Beaux Arts', 'Somerset', 'Newport Hills', 'Bridle Trails', 'Lake Hills', 'Crossroads', 'Factoria'],
    landmarks: ['Downtown Bellevue', 'Bellevue Botanical Garden', 'Mercer Slough', 'Lake Washington', 'Bellevue Square'],
    housing: 'Premium view and waterfront homes, HOA neighborhoods, and high-end Bridle Trails builds',
    topServices: ['house-washing', 'roof-cleaning', 'soft-washing'],
    photo: '/images/p-house.jpg',
    photoAlt: 'Olson Pro Wash soft washing a home in Bellevue, WA',
    faqs: [
      {
        q: 'Our HOA requires the house be washed — do you provide documentation?',
        a: 'Yes. We provide before/after photos and a dated invoice describing the work, which is what most Bellevue HOAs and property managers ask for.',
      },
      {
        q: 'Can you soft wash cedar shake and stucco safely?',
        a: 'Yes. Both are low-pressure, detergent-first surfaces. High pressure splinters shake and pits stucco — we never use it on either.',
      },
    ],
  },
  {
    name: 'Seattle',
    slug: 'seattle-wa',
    county: 'King County',
    geo: { lat: 47.6062, lng: -122.3321 },
    driveTime: 'about 40 minutes from our Lake Stevens shop',
    intro:
      "Seattle's Craftsman and Tudor housing stock plus near-constant damp means moss on the north roof slope is close to universal. We take Seattle jobs, with a focus on north-end neighborhoods and larger or commercial work.",
    conditions:
      "In Ballard, Wallingford, Green Lake, Wedgwood, Ravenna and up through Phinney Ridge, the classic 1920s–40s homes have steep roofs that grow moss on every shaded face, mossy brick and concrete walkways, and tight lots with street parking. We handle roof soft washing, house washing, walkway and step de-mossing, and storefront cleaning. Because Seattle is at the edge of our range, we prioritize north-end addresses and jobs of a decent size.",
    neighborhoods: ['Ballard', 'Fremont', 'Wallingford', 'Green Lake', 'Phinney Ridge', 'Wedgwood', 'Ravenna', 'Maple Leaf', 'Queen Anne', 'Magnolia'],
    landmarks: ['Green Lake', 'Ballard Locks', 'Woodland Park', 'Gas Works Park', 'University of Washington'],
    housing: 'Craftsman, Tudor and box-style homes from the 1920s–40s on tight city lots',
    topServices: ['roof-cleaning', 'house-washing', 'pressure-washing'],
    photo: '/images/p-roof2.jpg',
    photoAlt: 'Olson Pro Wash soft washing a mossy roof in Seattle, WA',
    faqs: [
      {
        q: 'Do you actually come into Seattle?',
        a: "Yes — mainly the north-end neighborhoods (Ballard, Wallingford, Green Lake, Wedgwood, Ravenna and nearby) and larger residential or commercial jobs. Send your address and the scope and we will tell you plainly whether it pencils out.",
      },
      {
        q: 'My 1930s house has moss on the roof and green all over the front steps. Can you do both?',
        a: 'Yes, in one visit — a low-pressure roof soft wash to kill the moss at the root, and controlled pressure washing to bring the concrete steps and walkway back.',
      },
    ],
  },
  {
    name: 'Granite Falls',
    slug: 'granite-falls-wa',
    county: 'Snohomish County',
    geo: { lat: 48.0837, lng: -121.9682 },
    driveTime: 'about 15 minutes from our Lake Stevens shop',
    intro:
      "Granite Falls is the gateway to the Mountain Loop — deep forest, a long wet season and serious moss pressure on every roof in town. We're just up the road.",
    conditions:
      "Homes here sit in dense timber along the South Fork Stillaguamish and out toward Menzel Lake and Lake Gardner. Metal and composition roofs alike carry heavy moss, gutters fill with needles constantly, and well-water iron staining shows up on siding and concrete. Roof soft washing, gutter clean-outs, gutter guards and rust/iron stain treatment are the common Granite Falls scope — and being 15 minutes away, we can get there fast.",
    neighborhoods: ['Downtown Granite Falls', 'Menzel Lake', 'Lake Gardner', 'Robe', 'Mountain Loop corridor', 'Jordan Road'],
    landmarks: ['Mountain Loop Highway', 'South Fork Stillaguamish River', 'Granite Falls Fishway', 'Menzel Lake', 'Lake Gardner'],
    housing: 'Rural, heavily forested lots with metal and composition roofs, often on well water',
    topServices: ['roof-cleaning', 'gutter-cleaning', 'gutter-guard-installation'],
    photo: '/images/p-roof.jpg',
    photoAlt: 'Olson Pro Wash soft washing a forested roof near Granite Falls, WA',
    faqs: [
      {
        q: 'We have orange iron staining from the well water on our siding and walkway — can you remove it?',
        a: 'Usually, yes. We carry dedicated rust and iron-stain treatments for siding and concrete. Deep-set staining may lighten rather than vanish entirely — we will tell you honestly what to expect before we start.',
      },
      {
        q: 'Can you soft wash a metal roof?',
        a: 'Yes. Metal and standing-seam roofs get a low-pressure detergent wash — no walking the panels where avoidable, no high pressure, no scratches.',
      },
    ],
  },
  {
    name: 'Snohomish',
    slug: 'snohomish-wa',
    county: 'Snohomish County',
    geo: { lat: 47.9129, lng: -122.0982 },
    driveTime: 'about 10 minutes from our Lake Stevens shop',
    intro:
      "Historic downtown Snohomish is full of century-old homes that can't take high pressure — and the surrounding valley is damp, shaded and moss-prone. We're just up the road.",
    conditions:
      "Along First Street and the historic district, Victorian and Craftsman homes have original wood siding, painted trim and delicate detail that a high-pressure wand would destroy — every one of these is a careful low-pressure soft wash. Out in the Pilchuck and Snohomish river valley and up around Three Lakes and Cathcart, river fog and heavy tree cover keep roofs, decks and north walls green most of the year.",
    neighborhoods: ['Historic Downtown / First Street', 'Blackmans Lake', 'Pilchuck', 'Cathcart', 'Three Lakes', 'Clearview', 'Machias'],
    landmarks: ['First Street Historic District', 'Snohomish River', 'Blackmans Lake', 'Harvey Field', 'Centennial Trail'],
    housing: 'Century-old downtown homes plus river-valley acreage and hilltop neighborhoods',
    topServices: ['roof-cleaning', 'soft-washing', 'deck-patio-cleaning'],
    photo: '/images/p-fence.jpg',
    photoAlt: 'Olson Pro Wash soft washing near historic downtown Snohomish, WA',
    faqs: [
      {
        q: 'My house is over 100 years old — is a pressure wash safe?',
        a: 'Not a pressure wash — a soft wash. Low pressure plus the right detergent cleans old wood siding, lead-era paint and fragile trim without forcing water behind the boards or stripping the finish. It is the only method we use on historic Snohomish homes.',
      },
    ],
  },
  {
    name: 'Monroe',
    slug: 'monroe-wa',
    county: 'Snohomish County',
    geo: { lat: 47.8557, lng: -121.9715 },
    driveTime: 'about 20 minutes from our Lake Stevens shop',
    intro:
      "Sitting in the Skykomish valley at the foot of the Cascades, Monroe gets the humidity, the fog and the tree debris — north-facing walls and roofs go green fast here.",
    conditions:
      "The newer subdivisions in the Fryelands and around Chain Lake are prime annual house-wash and driveway-cleaning territory, while the rural properties out toward Ben Howard, Woods Creek and High Rock have big rooflines under heavy timber. Valley moisture means moss and algae come back quickly, so a lot of Monroe homeowners move to a scheduled plan.",
    neighborhoods: ['Downtown Monroe', 'Fryelands', 'Chain Lake', 'Wagner', 'Woods Creek', 'Tjerne Place', 'Ben Howard'],
    landmarks: ['Evergreen State Fairgrounds', 'Lake Tye', 'Skykomish River', 'Al Borlin Park', 'US-2 / Stevens Pass gateway'],
    housing: 'Fryelands and Chain Lake subdivisions plus rural acreage toward Woods Creek',
    topServices: ['house-washing', 'roof-cleaning', 'driveway-concrete-cleaning'],
    photo: '/images/p-driveway.jpg',
    photoAlt: 'Olson Pro Wash cleaning a driveway in Monroe, WA',
    faqs: [
      {
        q: 'The moss keeps coming back on my Monroe roof — is that normal?',
        a: "In this valley, yes — the humidity feeds it. After the soft wash we apply a zinc or copper treatment to slow regrowth, and many customers here schedule a light touch-up every year or two so it never gets bad again.",
      },
    ],
  },
  {
    name: 'Mill Creek',
    slug: 'mill-creek-wa',
    county: 'Snohomish County',
    geo: { lat: 47.8601, lng: -122.2043 },
    driveTime: 'about 20 minutes from our Lake Stevens shop',
    intro:
      "Mill Creek is master-planned and appearance-conscious — most neighborhoods have covenants that require a maintained exterior, and homeowners here expect the work to look it.",
    conditions:
      "From the original Mill Creek golf community to Silver Firs, Mill Creek East and the Highlands, these are HOA neighborhoods where a green-streaked roof or dingy siding gets a letter. We run scheduled house-wash, roof soft-wash and gutter-cleaning programs for Mill Creek homeowners and the property managers who cover the area, with before/after photos and dated invoices for HOA files.",
    neighborhoods: ['Mill Creek Town Center', 'The Highlands', 'Silver Firs', 'Mill Creek East', 'North Creek', 'Amber Hill', 'McCollum Park area'],
    landmarks: ['Mill Creek Town Center', 'McCollum Park', 'North Creek', 'Mill Creek Country Club', 'Penny Creek'],
    housing: 'Master-planned HOA neighborhoods with covenant-maintained exteriors',
    topServices: ['house-washing', 'gutter-cleaning', 'roof-cleaning'],
    photo: '/images/p-house-truck.jpg',
    photoAlt: 'Olson Pro Wash house washing in Mill Creek, WA',
    faqs: [
      {
        q: 'Our HOA sent a notice about the roof and siding — can you handle both and give us documentation?',
        a: 'Yes. Roof soft wash and house wash in one visit, plus before/after photos and an itemized invoice describing the work — exactly what Mill Creek HOAs and property managers ask for.',
      },
    ],
  },
  {
    name: 'Mukilteo',
    slug: 'mukilteo-wa',
    county: 'Snohomish County',
    geo: { lat: 47.9445, lng: -122.3046 },
    driveTime: 'about 20 minutes from our Lake Stevens shop',
    intro:
      "Bluff-top and waterfront exposure means Mukilteo homes get salt haze, wind-driven grime and algae — and the views mean owners want them spotless.",
    conditions:
      "Old Town and the waterfront take the full brunt of salt air off Possession Sound, so siding films over and windows and trim need frequent attention. Up in Harbour Pointe, the master-planned golf community holds a tidy standard across hundreds of homes. Regular house washing, roof soft washing and careful soft washing around big view windows keep Mukilteo homes bright.",
    neighborhoods: ['Old Town / Waterfront', 'Harbour Pointe', 'Picnic Point', 'Chennault Beach', 'Goat Trail Ridge', 'Japanese Gulch area'],
    landmarks: ['Mukilteo Lighthouse', 'Mukilteo Ferry Terminal', 'Harbour Pointe Golf Club', 'Paine Field', 'Possession Sound'],
    housing: 'Waterfront and bluff-view homes plus the Harbour Pointe master-planned community',
    topServices: ['house-washing', 'roof-cleaning', 'soft-washing'],
    photo: '/images/p-roof.jpg',
    photoAlt: 'Olson Pro Wash soft washing a bluff-top home in Mukilteo, WA',
    faqs: [
      {
        q: 'Does salt air near the water make the siding harder to clean?',
        a: 'It builds a film faster, so waterfront and bluff homes benefit from a wash every 8–12 months rather than annually. The method is the same gentle soft wash — the salt just means it needs doing more often.',
      },
    ],
  },
  {
    name: 'Woodinville',
    slug: 'woodinville-wa',
    county: 'King County',
    geo: { lat: 47.7543, lng: -122.1635 },
    driveTime: 'about 30 minutes from our Lake Stevens shop',
    intro:
      "Woodinville pairs large wooded estates on Hollywood Hill and English Hill with a busy warehouse-district wine and event scene — we do both.",
    conditions:
      "The hillside homes above town sit on acreage under dense Douglas fir, so roofs, gutters and long driveways collect needle debris and grow moss year-round. Down in the valley, the tasting rooms, event venues and warehouse-district businesses need clean entries, patios and sidewalks for guests. Roof soft washing and whole-home washes on the hills; recurring commercial cleaning in the district.",
    neighborhoods: ['Downtown / Warehouse District', 'Hollywood Hill', 'English Hill', 'Cottage Lake', 'Bear Creek', 'Wellington', 'Leota'],
    landmarks: ['Chateau Ste. Michelle', 'Woodinville wine district', 'Sammamish River Trail', 'Cottage Lake', 'Hollywood Hill'],
    housing: 'Wooded acreage estates on Hollywood Hill and English Hill, plus valley commercial and event venues',
    topServices: ['roof-cleaning', 'house-washing', 'commercial-services'],
    photo: '/images/p-roof2.jpg',
    photoAlt: 'Olson Pro Wash soft washing a wooded home in Woodinville, WA',
    faqs: [
      {
        q: 'Do you clean tasting rooms and event venues in the Woodinville wine district?',
        a: 'Yes — patios, entries, sidewalks, wall washing and awning cleaning, scheduled around your events and open hours. Certificate of insurance provided.',
      },
    ],
  },
  {
    name: 'Redmond',
    slug: 'redmond-wa',
    county: 'King County',
    geo: { lat: 47.674, lng: -122.1215 },
    driveTime: 'about 35 minutes from our Lake Stevens shop',
    intro:
      "From Education Hill and Grass Lawn to the larger homes out toward Union Hill and Novelty Hill, Redmond's mix of tree cover and tech-corridor turnover keeps exteriors in constant need of a refresh.",
    conditions:
      "The established neighborhoods on Education Hill and Grass Lawn have mature trees shading north-facing roofs, while the newer, bigger homes toward Union Hill, Novelty Hill and Bear Creek sit in heavier timber with more moss and needle load. Around Overlake and Redmond Town Center there's steady commercial and multifamily work. House washing, roof soft washing and turnover cleans are the usual Redmond scope.",
    neighborhoods: ['Downtown Redmond', 'Education Hill', 'Grass Lawn', 'Overlake', 'Idylwood', 'Union Hill', 'Novelty Hill', 'Bear Creek'],
    landmarks: ['Marymoor Park', 'Redmond Town Center', 'Microsoft campus', 'Sammamish River', 'Lake Sammamish'],
    housing: 'Established Education Hill and Grass Lawn homes plus larger newer builds toward Union Hill and Novelty Hill',
    topServices: ['house-washing', 'roof-cleaning', 'commercial-services'],
    photo: '/images/p-house.jpg',
    photoAlt: 'Olson Pro Wash house washing in Redmond, WA',
    faqs: [
      {
        q: 'Can you do a fast exterior turnover clean before a Redmond home goes on the market or gets a new tenant?',
        a: 'Yes. A house wash, driveway clean and gutter clear-out together make the biggest visible difference before listing or move-in, and we can usually schedule turnover jobs quickly.',
      },
    ],
  },
  {
    name: 'Lynnwood',
    slug: 'lynnwood-wa',
    county: 'Snohomish County',
    geo: { lat: 47.8279, lng: -122.3051 },
    driveTime: 'about 20 minutes from our Lake Stevens shop',
    intro:
      "Lynnwood's dense mix of 1960s–80s ramblers and split-levels means a lot of aging composition roofs — and almost all of them are carrying moss.",
    conditions:
      "The neighborhoods around Alderwood, Meadowdale, Scriber Lake and Lake Serene are full of older homes with north-slope roof moss, mossy walkways and tired siding. The Highway 99 and 196th commercial corridor and the redeveloping City Center add storefront and multifamily work. Roof soft washing, gutter cleaning and annual house washes are the core Lynnwood jobs.",
    neighborhoods: ['Alderwood', 'City Center', 'Meadowdale', 'Scriber Lake', 'Lake Serene', '36th Ave corridor', 'Highway 99 corridor'],
    landmarks: ['Alderwood Mall', 'Lynnwood City Center / Link light rail', 'Scriber Lake Park', "Lund's Gulch / Meadowdale Beach", 'Edmonds College'],
    housing: '1960s–80s ramblers and split-levels with aging composition roofs, plus a growing commercial core',
    topServices: ['roof-cleaning', 'gutter-cleaning', 'house-washing'],
    photo: '/images/p-gutter.jpg',
    photoAlt: 'Olson Pro Wash clearing gutters on a Lynnwood, WA home',
    faqs: [
      {
        q: 'My 1970s Lynnwood roof is covered in moss — does it need replacing or can it be cleaned?',
        a: 'Usually it can be cleaned. If the shingles are intact under the moss, a low-pressure soft wash kills it at the root and buys years of life. We will tell you honestly if a section is too far gone to save.',
      },
    ],
  },
];

export const getCity = (slug: string) => CITIES.find((c) => c.slug === slug);
