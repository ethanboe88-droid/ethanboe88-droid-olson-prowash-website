// Per-service × per-city content for /services/<service>/<city>/ pages.
//
// Every entry is hand-written from that city's real local profile
// (src/data/cities.ts) and that service's real scope and pricing
// (src/data/services.ts). Nothing here is a swapped-name template — the whole
// point is that each page carries its own genuine local information, so the
// ~200 service × city pages are real landing pages, not doorway pages.
//
// Gutter cleaning keeps its own file (../gutterCleaningCities.ts) and page.

import { ROOF_CLEANING } from './roof-cleaning';
import { HOUSE_WASHING } from './house-washing';
import { PRESSURE_WASHING } from './pressure-washing';
import { SOFT_WASHING } from './soft-washing';
import { GUTTER_BRIGHTENING } from './gutter-brightening';
import { GUTTER_GUARD_INSTALLATION } from './gutter-guard-installation';
import { DECK_PATIO_CLEANING } from './deck-patio-cleaning';
import { DRIVEWAY_CONCRETE_CLEANING } from './driveway-concrete-cleaning';
import { COMMERCIAL_SERVICES } from './commercial-services';
import { LANDSCAPING } from './landscaping';
import { CHRISTMAS_LIGHT_INSTALLATION } from './christmas-light-installation';

export type ServiceCityEntry = {
  /** 1–2 sentence local hook — hero intro and meta context */
  lead: string;
  /** one unique paragraph — what this service is up against in this city, and why */
  angle: string;
  /** one unique paragraph — realistic timing / frequency, and what to pair it with, here */
  timing: string;
  /** one unique, city-specific FAQ (answers may contain internal <a> links with trailing slashes) */
  faq: { q: string; a: string };
};

export type ServiceCityMap = Record<string, ServiceCityEntry>;

export const SERVICE_CITY_CONTENT: Record<string, ServiceCityMap> = {
  'roof-cleaning': ROOF_CLEANING,
  'house-washing': HOUSE_WASHING,
  'pressure-washing': PRESSURE_WASHING,
  'soft-washing': SOFT_WASHING,
  'gutter-brightening': GUTTER_BRIGHTENING,
  'gutter-guard-installation': GUTTER_GUARD_INSTALLATION,
  'deck-patio-cleaning': DECK_PATIO_CLEANING,
  'driveway-concrete-cleaning': DRIVEWAY_CONCRETE_CLEANING,
  'commercial-services': COMMERCIAL_SERVICES,
  'landscaping': LANDSCAPING,
  'christmas-light-installation': CHRISTMAS_LIGHT_INSTALLATION,
};

export const getServiceCityContent = (serviceSlug: string, citySlug: string): ServiceCityEntry | undefined =>
  SERVICE_CITY_CONTENT[serviceSlug]?.[citySlug];
