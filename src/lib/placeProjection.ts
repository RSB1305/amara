import { getRecommendation } from '../../knowledge/recommendations';
import type { KnowledgeRecommendation } from '../../knowledge/schema';
import { placeCopyById } from '../content/places';
import type { GuestGuideAccordionItem, GuestGuideIconName } from '../types/guestGuide';
import type { LocalizedText } from '../types/content';
import type { AmaraLanguage } from '../types/seo';
import { mapsUrlFor } from './guestGuideRecommendations';
import type { PlaceCopy } from './placeCopy';

/**
 * The two projections of one place (DR-GUEST-006): the public card explains and
 * differentiates, the guide card directs and helps execute. Both are built from
 * the same record and the same place-copy entry, so a place is written once.
 */
export interface PublicRestaurantCard {
  title: string;
  bestFor: string;
  description: string;
  /** Rendered under the "Good to know" label. */
  tip: string;
  /** Rendered under the "Before you go" label. */
  goodToKnow: string;
  mapHref: string;
  websiteHref: string;
}

function resolve(id: string): { record: KnowledgeRecommendation; copy: PlaceCopy } {
  const record = getRecommendation(id);
  if (!record) throw new Error(`[AMARA places] Unknown recommendation record: ${id}`);
  const copy = placeCopyById[id];
  if (!copy) throw new Error(`[AMARA places] No place copy for ${id}`);
  return { record, copy };
}

export function publicRestaurantCard(id: string, lang: AmaraLanguage): PublicRestaurantCard {
  const { record, copy } = resolve(id);
  if (record.scope === 'amara-experience' || record.scope === 'internal') {
    throw new Error(`[AMARA places] ${id} is ${record.scope} and may not appear on a public page (DR-GUEST-006)`);
  }
  if (!copy.public) throw new Error(`[AMARA places] ${id} has no public copy`);
  const mapHref = mapsUrlFor(record);
  if (!mapHref) throw new Error(`[AMARA places] ${id} has no map link`);
  return {
    title: copy.public.title[lang],
    bestFor: copy.public.bestFor[lang],
    description: copy.public.description[lang],
    tip: copy.public.goodToKnow[lang],
    goodToKnow: copy.public.beforeYouGo[lang],
    mapHref,
    websiteHref: record.place.website ?? mapHref
  };
}

const PLAN_B_LABEL: LocalizedText = { en: 'Plan B', de: 'Plan B', es: 'Plan B', nl: 'Plan B', sv: 'Plan B' };
const RESERVATION_LABEL: LocalizedText = {
  en: 'When reserving',
  de: 'Beim Reservieren',
  es: 'Al reservar',
  nl: 'Bij het reserveren',
  sv: 'Vid bokning'
};

const localizedName = (name: string): LocalizedText => ({ en: name, de: name, es: name, nl: name, sv: name });

const withLabel = (label: LocalizedText, text: LocalizedText): LocalizedText => ({
  en: `<strong>${label.en}:</strong> ${text.en}`,
  de: `<strong>${label.de}:</strong> ${text.de}`,
  es: `<strong>${label.es}:</strong> ${text.es}`,
  nl: `<strong>${label.nl}:</strong> ${text.nl}`,
  sv: `<strong>${label.sv}:</strong> ${text.sv}`
});

/** A Guest Guide card for one place; pin, facts and actions come from the record at render time. */
export function guidePlaceItem(id: string, icon: GuestGuideIconName): GuestGuideAccordionItem {
  const { record, copy } = resolve(id);
  if (record.scope === 'public' || record.scope === 'internal') {
    throw new Error(`[AMARA places] ${id} is ${record.scope} and may not appear in the Guest Guide (DR-GUEST-006)`);
  }
  if (!copy.guide) throw new Error(`[AMARA places] ${id} has no guide copy`);
  const body: LocalizedText[] = [...copy.guide.why];
  if (copy.guide.reservationLine) body.push(withLabel(RESERVATION_LABEL, copy.guide.reservationLine));
  if (copy.guide.planB) body.push(withLabel(PLAN_B_LABEL, copy.guide.planB));
  if (copy.guide.hostNote) {
    const { text, date } = copy.guide.hostNote;
    body.push({
      en: `<em>${text.en}</em> (${date})`,
      de: `<em>${text.de}</em> (${date})`,
      es: `<em>${text.es}</em> (${date})`,
      nl: `<em>${text.nl}</em> (${date})`,
      sv: `<em>${text.sv}</em> (${date})`
    });
  }
  return {
    icon,
    recommendationId: id,
    title: localizedName(record.place.name),
    ...(copy.guide.subtitle ? { subtitle: copy.guide.subtitle } : {}),
    body
  };
}
