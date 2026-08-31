export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  service: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our house looked ten years newer the same afternoon. The crew taped off outlets, moved the grill, covered the flowerbeds — and left the driveway cleaner than the day it was poured.",
    name: 'Kara M.',
    location: 'Lake Stevens, WA',
    service: 'House Washing',
    rating: 5,
  },
  {
    quote:
      "I've hired three companies for our restaurant patio over the years. Olson is the first one that showed up before open, did it right, and sent photos when they were done. We're on a monthly plan now.",
    name: 'Devin R.',
    location: 'Everett, WA',
    service: 'Commercial Services',
    rating: 5,
  },
  {
    quote:
      'The roof had moss and black streaks running down both slopes. They soft washed it and it came back to the original shingle color with zero pressure damage. Two years later it still looks great.',
    name: 'Susan &amp; Bill T.',
    location: 'Snohomish, WA',
    service: 'Soft Washing',
    rating: 5,
  },
  {
    quote:
      'Quoted fast, showed up on time, and the price on the invoice matched the estimate exactly. The concrete around the pool went from green to bright white. Could not be happier.',
    name: 'Anthony P.',
    location: 'Marysville, WA',
    service: 'Driveway & Concrete Cleaning',
    rating: 5,
  },
  {
    quote:
      'They cleaned the deck, then came back the next week and re-mulched all the beds and trimmed the shrubs. Having one company do both made the whole yard finally look finished.',
    name: 'Michelle K.',
    location: 'Granite Falls, WA',
    service: 'Landscaping',
    rating: 5,
  },
  {
    quote:
      'Professional from the first phone call. Uniformed crew, clean truck, careful around the landscaping. This is what hiring a real company is supposed to feel like.',
    name: 'Greg H.',
    location: 'Monroe, WA',
    service: 'Pressure Washing',
    rating: 5,
  },
];
