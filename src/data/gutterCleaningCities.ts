// Per-city content for /services/gutter-cleaning/<city-slug>/ — written to be
// genuinely unique per city (not a reworded copy of cities.ts `conditions`,
// which covers the whole property, not gutters specifically) so these pages
// carry their own real local-SEO value instead of thin, swapped-name copies.

export type GutterCityContent = {
  /** one unique paragraph — what actually clogs gutters in this city, and why */
  angle: string;
  /** one unique paragraph — realistic frequency + what to pair it with, here */
  frequency: string;
  /** one unique, city-specific gutter FAQ (distinct from cities.ts city.faqs) */
  faq: { q: string; a: string };
};

export const GUTTER_CITY_CONTENT: Record<string, GutterCityContent> = {
  'lake-stevens-wa': {
    angle:
      "Lake Stevens gutters fight fir and cedar needles from the canopy around Soper Hill and Machias, plus heavy runoff off big lakefront rooflines. A packed trough here doesn't just overflow — it dumps straight onto the siding and landscaping below the eaves.",
    frequency:
      "Most Lake Stevens gutters do fine on two cleanings a year — spring and fall. Homes directly under the fir canopy around Soper Hill or right on the water often add a light mid-summer check.",
    faq: {
      q: 'Do lakefront homes need gutter cleaning more often?',
      a: 'Often yes — heavy tree cover near the water keeps runs damp and packs them faster than homes further from the lake. Most lakefront properties do better on two clean-outs a year instead of one.',
    },
  },
  'everett-wa': {
    angle:
      "Marine air off Port Gardner Bay leaves a fine salt film on everything, and the historic homes around Rucker Hill have original gutter hardware that needs a careful hand-clear rather than anything aggressive. Out in Silver Lake and Eastmont, ordinary tree debris is the bigger driver.",
    frequency:
      "Standard Everett homes do well on an annual clean-out; the historic homes around Rucker Hill and anything near the water benefit from a spring check too, since salt air adds a second source of buildup beyond leaf debris.",
    faq: {
      q: 'Will salt air corrode my gutters faster?',
      a: "It can accelerate wear on older metal hardware near the water. We check for corrosion and loose fasteners on every Everett clean-out and flag anything that's failing before it becomes a bigger repair.",
    },
  },
  'marysville-wa': {
    angle:
      'Newer Smokey Point and Getchell homes have big rooflines and long gutter runs that move a lot of water fast; closer to downtown and Kellogg Marsh, mature trees mean heavier leaf and needle load and more frequent clogging.',
    frequency:
      "Newer Smokey Point homes with fewer mature trees often get by on one clean-out a year; older, tree-covered lots near downtown and Kellogg Marsh do better on two.",
    faq: {
      q: 'My Smokey Point gutters overflow every storm — is that a size problem or a clog?',
      a: "Usually a clog, not undersized gutters. A full scoop-out and downspout flush restores flow on most homes; if it overflows again right away, the pitch may need adjusting, which we check as part of every visit.",
    },
  },
  'arlington-wa': {
    angle:
      "Arlington's rural acreage homes carry hundreds of feet of gutter under heavy conifer cover — Old Town and Gleneagle properties pack solid with needles roughly twice a year, which is exactly why gutter guards come up in almost every conversation out here.",
    frequency:
      "Rural acreage under heavy conifer cover needs two cleanings a year at minimum — spring and fall — and if you're tired of the climb, this is one of the strongest gutter-guard cases in our whole service area.",
    faq: {
      q: 'Is it worth putting guards on a long acreage gutter run?',
      a: 'For most Arlington properties, yes — the labor of climbing hundreds of feet of ladder twice a year adds up fast. See our Raptor stainless guard breakdown for the real cost comparison.',
    },
  },
  'bothell-wa': {
    angle:
      "Bothell's established Canyon Park and North Creek yards have mature cedar hedges and landscaping planted right against the house, so gutter debris often includes leaf litter from trees close enough to touch the roofline. We protect the beds below while we clear the run.",
    frequency:
      "Canyon Park and North Creek yards with mature trees close to the house need two cleanings a year; newer, more open Bothell lots can often stretch to one.",
    faq: {
      q: 'Will clearing the gutters disturb my landscaping right against the house?',
      a: "No — we work from the ladder, not the beds, and any debris that falls gets bagged, not left in your planting. Precious shrubs right at the foundation get extra care.",
    },
  },
  'kirkland-wa': {
    angle:
      'Downtown and waterfront Kirkland homes deal with wind-blown debris off Lake Washington, while the mature trees in Rose Hill and Bridle Trails drop enough leaf and needle litter to clog a run in a single fall season.',
    frequency:
      "Waterfront and Rose Hill properties under big trees do best on two cleanings a year; more open downtown Kirkland and Totem Lake lots can usually get by on one.",
    faq: {
      q: 'Do waterfront Kirkland homes need anything different?',
      a: 'The method is the same hand scoop-out and flow test — we just pay extra attention to downspout discharge points near the shoreline and control runoff carefully, same as on any wash near the water.',
    },
  },
  'sammamish-wa': {
    angle:
      'Plateau neighborhoods like Klahanie, Trossachs and Sahalee sit in heavy Douglas fir at elevation, so gutters here fill with needle debris fast — it is the single biggest driver of the moss and lichen that show up on Sammamish roofs.',
    frequency:
      "Under this much Douglas fir at elevation, two cleanings a year is the realistic minimum for most Sammamish Plateau homes — and pairing it with gutter guards is one of the most common upgrades we quote here.",
    faq: {
      q: 'Does clearing the gutters help with the moss on my roof?',
      a: 'It helps a lot. Packed gutters keep the roof edge wet longer after every rain, which feeds moss right where it meets the trough. Clear gutters plus a periodic roof soft wash is the combination that actually keeps it down.',
    },
  },
  'issaquah-wa': {
    angle:
      "Issaquah's foothill lots near Cougar and Tiger Mountain sit in cool, wet forest, so gutters stay damp and clogged longer between rains than almost anywhere else we work — a real contributor to the moss on north-facing roofs and walkways below.",
    frequency:
      "Foothill Issaquah lots near Cougar and Tiger Mountain usually need two cleanings a year; homes tucked right against the tree line sometimes add a winter check after storms.",
    faq: {
      q: 'How often should a foothill Issaquah home get gutters cleared?',
      a: 'Twice a year is the realistic minimum under this much tree cover — spring and fall. Homes tucked directly against the forest edge sometimes need a third pass in winter.',
    },
  },
  'bellevue-wa': {
    angle:
      "Bellevue HOA covenants expect a clean gutter line as much as a clean roof, and the cedar shake and painted trim common in Bridle Trails and West Bellevue call for a careful hand-clear rather than anything that could mark the finish.",
    frequency:
      "Most Bellevue HOA schedules call for an annual clean-out timed with the roof and house wash; heavily wooded Bridle Trails and West Bellevue lots often move to twice a year.",
    faq: {
      q: 'Can you provide documentation for our HOA after a gutter cleaning?',
      a: 'Yes — the same before/after photos and dated, itemized invoice we provide for house washes and roof cleanings, which is what most Bellevue HOAs and property managers ask for.',
    },
  },
  'seattle-wa': {
    angle:
      "Seattle's Craftsman and Tudor homes in Ballard, Wallingford and Green Lake are 80 to 100 years old with original gutter hardware — we hand-clear and flow-test rather than risk fasteners age has made brittle.",
    frequency:
      "These older Seattle north-end lots typically need one thorough clean-out a year, timed for fall after the leaves drop — worth pairing with a roof check on a house this age.",
    faq: {
      q: 'My gutters are original to a 1930s house — are they safe to clean?',
      a: "Almost always, if they are structurally sound. We hand-clear rather than pressure-rinse the inside, and if a hanger or seam is failing we will tell you before it becomes a bigger repair.",
    },
  },
  'granite-falls-wa': {
    angle:
      "Granite Falls gutters fill with needle debris fast under the timber along the Stillaguamish, and well-water iron staining often shows up right where the downspouts discharge — we flush both the debris and the rust-stained runoff path.",
    frequency:
      "Under this much timber, two cleanings a year is the norm for most Granite Falls properties, and gutter guards are a common add-on given how fast needle debris returns out here.",
    faq: {
      q: 'Can you clear the iron staining out of the gutters themselves, not just the siding?',
      a: 'We flush the troughs and downspouts as part of every clean-out, which clears loose sediment and staining inside the system. Set-in staining on the exterior faces is handled separately with a rust treatment.',
    },
  },
  'snohomish-wa': {
    angle:
      "First Street's century-old homes have original gutter runs we clear by hand rather than risk with anything aggressive, and the river-valley properties toward Pilchuck and Cathcart stay damp enough that needle debris packs in fast.",
    frequency:
      "First Street's historic Snohomish homes typically need one careful clean-out a year; the river-valley properties toward Pilchuck and Cathcart do better on two given the fog and tree cover.",
    faq: {
      q: 'Are the gutters on a historic Snohomish home strong enough for a normal cleaning?',
      a: 'Usually, yes — we hand-scoop and flush rather than pressure-blast, which is gentle enough for old hardware. We flag any hanger or seam that looks original and failing before we touch it.',
    },
  },
  'monroe-wa': {
    angle:
      'Skykomish valley humidity keeps Monroe gutters damp longer between rains, and the rural acreage toward Woods Creek and Ben Howard sits under enough timber that a lot of homeowners here move to a twice-a-year schedule.',
    frequency:
      "Valley humidity pushes most Monroe properties toward two cleanings a year rather than one — a lot of our Monroe customers land on a standing spring-and-fall schedule.",
    faq: {
      q: 'Why do my Monroe gutters clog faster than they did at my last house?',
      a: 'Valley humidity is the usual reason — fog and moisture sit longer here than in more open parts of the county, so needle and leaf debris breaks down into a denser sludge instead of drying and blowing out.',
    },
  },
  'mill-creek-wa': {
    angle:
      'Mill Creek HOA neighborhoods expect gutters kept ahead of any visible overflow — we run scheduled clean-outs with dated photos for Silver Firs, the Highlands and Mill Creek East so nobody gets a covenant letter over it.',
    frequency:
      "Most Mill Creek HOA neighborhoods run an annual schedule tied to the roof and house wash, with before/after photos kept on file for the covenant committee.",
    faq: {
      q: 'Can you put our Mill Creek gutters on a recurring schedule?',
      a: 'Yes — spring and fall clean-outs booked in advance is the most common Mill Creek arrangement, and we can loop in a roof soft wash or house wash on the same visit.',
    },
  },
  'mukilteo-wa': {
    angle:
      "Salt air off Possession Sound builds a film on everything in Old Town and the waterfront, including the gutters, while Harbour Pointe's mature street trees add the more typical needle and leaf load.",
    frequency:
      "Salt air pushes Mukilteo's bluff and waterfront homes toward a check every 8 to 12 months rather than a strict annual; Harbour Pointe's tree-lined streets are usually fine on one cleaning a year.",
    faq: {
      q: 'Does living on the bluff change how often gutters need clearing?',
      a: 'Not the frequency so much as the inspection — we check fasteners and seams for salt-related wear on every Mukilteo visit in addition to the normal scoop-out and flow test.',
    },
  },
  'woodinville-wa': {
    angle:
      'Hollywood Hill and English Hill estates sit under dense Douglas fir, so long gutter runs on these big rooflines fill with needle debris fast — exactly the kind of property where a gutter guard conversation makes sense.',
    frequency:
      "Hollywood Hill and English Hill estates under heavy fir cover typically need two cleanings a year, and on the biggest Woodinville rooflines, gutter guards pay for themselves fast.",
    faq: {
      q: 'Our Woodinville property has a huge roofline — is gutter cleaning priced differently?',
      a: 'Pricing scales with linear footage and access, so a large hillside home costs more than a typical lot. We give a firm number after a look, and guards are worth pricing alongside it if you are tired of the climb.',
    },
  },
  'redmond-wa': {
    angle:
      'Mature street trees on Education Hill and Grass Lawn drop a steady leaf load, while the newer, bigger homes toward Union Hill and Novelty Hill sit in heavier timber with a lot more needle debris to manage.',
    frequency:
      "Education Hill and Grass Lawn do fine on one annual clean-out; the bigger, more heavily wooded Redmond homes toward Union Hill and Novelty Hill often move to twice a year.",
    faq: {
      q: 'Can gutter cleaning be part of a Redmond turnover clean before a listing or move-in?',
      a: 'Yes — it is one of the three things (with a house wash and driveway clean) that makes the biggest visible difference before photos or a new tenant, and we can usually turn it around quickly.',
    },
  },
  'lynnwood-wa': {
    angle:
      "Lynnwood's older ramblers around Alderwood and Meadowdale often have decades-old gutter hardware — we flow-test every run and flag anything pulling away from the fascia before it turns into a bigger repair.",
    frequency:
      "Most of Lynnwood's older ramblers do well on one thorough clean-out a year, ideally paired with a look at the roof — moss and gutter debris tend to show up together on homes this age.",
    faq: {
      q: 'My Lynnwood gutters are pulling away from the house — is that normal wear?',
      a: 'On an older rambler, often yes — hangers loosen over decades. We re-secure what we can during a standard clean-out and tell you honestly if a section needs more than that.',
    },
  },
};

export const getGutterCityContent = (slug: string) => GUTTER_CITY_CONTENT[slug];
