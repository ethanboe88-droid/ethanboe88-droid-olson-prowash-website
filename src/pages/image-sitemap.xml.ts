import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { CITIES } from '../data/cities';

// Dedicated image sitemap — before/after and job photos are a real Google
// Images channel for a pressure-washing business. Referenced from robots.txt.

const base = SITE.domain;

type Entry = { loc: string; images: { url: string; caption: string; title?: string }[] };

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const home: Entry = {
  loc: `${base}/`,
  images: [
    { url: `${base}/images/hero.jpg`, caption: 'Olson Pro Wash — pressure washing, roof cleaning and landscaping in Lake Stevens, WA', title: 'Olson Pro Wash' },
    { url: `${base}/images/roof-before.jpg`, caption: 'Moss- and algae-covered asphalt roof before an Olson Pro Wash soft wash' },
    { url: `${base}/images/roof-after.jpg`, caption: 'The same roof after a low-pressure soft wash — moss and black streaking gone' },
    { url: `${base}/images/p-house.jpg`, caption: 'Two-story home being soft washed by Olson Pro Wash, Snohomish County' },
    { url: `${base}/images/p-driveway.jpg`, caption: 'Concrete driveway being surface-cleaned to an even, streak-free finish' },
    { url: `${base}/images/p-deck.jpg`, caption: 'Composite deck being cleaned at low pressure' },
  ],
};

const gallery: Entry = {
  loc: `${base}/gallery/`,
  images: [
    { url: `${base}/images/roof-before.jpg`, caption: 'Roof before soft washing — heavy moss and lichen' },
    { url: `${base}/images/roof-after.jpg`, caption: 'Roof after soft washing — clean shingles, no pressure damage' },
    { url: `${base}/images/p-roof.jpg`, caption: 'Roof soft wash in progress on a Snohomish County home' },
    { url: `${base}/images/p-roof2.jpg`, caption: 'Technician soft-washing a mossy roof from a ladder' },
    { url: `${base}/images/p-house.jpg`, caption: 'Whole-home soft wash, suds running down the siding' },
    { url: `${base}/images/p-house-truck.jpg`, caption: 'Olson Pro Wash service truck at a house washing job' },
    { url: `${base}/images/p-window.jpg`, caption: 'Exterior window cleaning after a house wash' },
    { url: `${base}/images/p-driveway.jpg`, caption: 'Driveway surface cleaning, before and after line visible' },
    { url: `${base}/images/p-fence.jpg`, caption: 'Wood privacy fence being soft washed' },
    { url: `${base}/images/p-gutter.jpg`, caption: 'Hand-clearing debris from a home gutter' },
    { url: `${base}/images/p-gutterguard.jpg`, caption: 'Stainless micro-mesh gutter guard being fitted to a shingle roof' },
    { url: `${base}/images/p-deck.jpg`, caption: 'Composite deck cleaning with foam on the boards' },
  ],
};

const services: Entry[] = SERVICES.filter((s) => s.photo).map((s) => ({
  loc: `${base}${s.detailPage}/`,
  images: [
    { url: `${base}${s.photo}`, caption: s.photoAlt ?? `${s.title} by Olson Pro Wash`, title: `${s.title} — Olson Pro Wash` },
  ],
}));

const roofService: Entry = {
  loc: `${base}/services/roof-cleaning/`,
  images: [
    { url: `${base}/images/roof-before.jpg`, caption: 'Roof before soft washing in Snohomish County' },
    { url: `${base}/images/roof-after.jpg`, caption: 'Roof after an Olson Pro Wash soft wash' },
  ],
};

const cities: Entry[] = CITIES.map((c) => ({
  loc: `${base}/service-area/${c.slug}/`,
  images: [{ url: `${base}${c.photo}`, caption: c.photoAlt, title: `Exterior cleaning in ${c.name}, ${SITE.address.region}` }],
}));

const about: Entry = {
  loc: `${base}/about/`,
  images: [{ url: `${base}/images/founder.jpg`, caption: `${SITE.founder}, founder of ${SITE.legalName}`, title: SITE.founder }],
};

const entries: Entry[] = [home, gallery, roofService, ...services, ...cities, about];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (e) => `  <url>
    <loc>${esc(e.loc)}</loc>
${e.images
  .map(
    (im) => `    <image:image>
      <image:loc>${esc(im.url)}</image:loc>
      <image:caption>${esc(im.caption)}</image:caption>${im.title ? `\n      <image:title>${esc(im.title)}</image:title>` : ''}
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>
`;

export const GET: APIRoute = () =>
  new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
