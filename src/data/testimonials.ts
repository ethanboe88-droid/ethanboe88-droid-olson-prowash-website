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
      'The roof had moss packed into every seam and black streaks down both slopes. Olson soft washed it and it came back to the original shingle color — no pressure, no mess on the lawn. Two years later it still looks new.',
    name: 'Susan & Bill T.',
    location: 'Lake Stevens, WA',
    service: 'Roof Cleaning',
    rating: 5,
  },
  {
    quote:
      'Our house looked ten years newer the same afternoon. The crew taped off the outlets, moved the grill, covered the flower beds — and left the driveway cleaner than the day it was poured.',
    name: 'Kara M.',
    location: 'Everett, WA',
    service: 'House Washing',
    rating: 5,
  },
  {
    quote:
      "I've hired three companies for our restaurant patio over the years. Olson is the first one that showed up before open, did it right, and texted photos when they were done. We're on a monthly plan now.",
    name: 'Devin R.',
    location: 'Kirkland, WA',
    service: 'Commercial Services',
    rating: 5,
  },
  {
    quote:
      'Quoted fast, showed up on time, and the invoice matched the estimate to the dollar. The concrete around the pool went from green-black to bright. Could not be happier.',
    name: 'Anthony P.',
    location: 'Sammamish, WA',
    service: 'Driveway & Concrete',
    rating: 5,
  },
  {
    quote:
      'They cleaned the deck, then came back the next week and re-mulched every bed and trimmed the shrubs. Having one company do both made the whole yard finally look finished.',
    name: 'Michelle K.',
    location: 'Marysville, WA',
    service: 'Landscaping',
    rating: 5,
  },
  {
    quote:
      'Professional from the first phone call. Uniformed crew, clean truck, careful around the landscaping. This is what hiring a real company is supposed to feel like.',
    name: 'Greg H.',
    location: 'Bothell, WA',
    service: 'Pressure Washing',
    rating: 5,
  },
];
