// Service-area cities with short, differentiated notes (local SEO / AI grounding).
export type Area = {
  city: string;
  county: 'Snohomish County' | 'King County';
  note: string;
};

export const AREAS: Area[] = [
  {
    city: 'Lake Stevens',
    county: 'Snohomish County',
    note: 'Home base. Lakefront homes and heavy tree cover mean roofs here grow moss fast — roof soft washing and gutter work are our most-booked jobs in town.',
  },
  {
    city: 'Everett',
    county: 'Snohomish County',
    note: 'From Silver Lake to the waterfront, older siding and marine-air algae are the norm. House washing and commercial storefront cleaning are steady work here.',
  },
  {
    city: 'Marysville',
    county: 'Snohomish County',
    note: 'Newer developments off State Ave and established neighborhoods alike. Driveway and concrete cleaning plus annual house washes keep these homes sharp.',
  },
  {
    city: 'Arlington',
    county: 'Snohomish County',
    note: 'Rural lots and big rooflines under conifers. Roof moss treatment and gutter guard installation save Arlington homeowners the twice-a-year ladder trip.',
  },
  {
    city: 'Snohomish',
    county: 'Snohomish County',
    note: 'Historic homes near downtown and acreage on the outskirts. We soft wash delicate old siding and restore graying cedar decks without damage.',
  },
  {
    city: 'Monroe',
    county: 'Snohomish County',
    note: 'Valley humidity keeps north-facing walls green. Whole-home soft washing and paver/driveway cleaning are the go-to services in Monroe.',
  },
  {
    city: 'Mill Creek',
    county: 'Snohomish County',
    note: 'HOA-heavy, appearance-conscious neighborhoods. We run scheduled house-wash and gutter-cleaning programs for Mill Creek homeowners and property managers.',
  },
  {
    city: 'Mukilteo',
    county: 'Snohomish County',
    note: 'Bluff-top and waterfront exposure means salt film and algae. Regular house washing and window-adjacent soft washing keep Mukilteo homes bright.',
  },
  {
    city: 'Bothell',
    county: 'King County',
    note: 'Straddling both counties, with mature landscaping right up to the foundation. Our landscape-protection protocol matters most on jobs like these.',
  },
  {
    city: 'Kirkland',
    county: 'King County',
    note: 'Lakeside luxury homes and busy retail cores. We handle premium residential soft washing and early-morning commercial sidewalk cleaning here.',
  },
  {
    city: 'Sammamish',
    county: 'King County',
    note: 'Large homes on the plateau under heavy fir canopy — prime moss territory. Roof soft washing and gutter guard installation are in constant demand.',
  },
  {
    city: 'Issaquah',
    county: 'King County',
    note: 'Foothill homes with steep roofs and shaded, damp hardscapes. Roof cleaning, deck restoration and driveway de-mossing are the usual Issaquah scope.',
  },
];
