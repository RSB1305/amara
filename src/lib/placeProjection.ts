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
  if (copy.public?.kind !== 'restaurant') throw new Error(`[AMARA places] ${id} has no public restaurant copy`);
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

export interface PublicBeachCard {
  title: string;
  bestFor: string;
  description: string;
  /** Rendered under the "Our take" label of the beach card. */
  tip: string;
  mapHref: string;
}

export function publicBeachCard(id: string, lang: AmaraLanguage): PublicBeachCard {
  const { record, copy } = resolve(id);
  if (record.scope === 'amara-experience' || record.scope === 'internal') {
    throw new Error(`[AMARA places] ${id} is ${record.scope} and may not appear on a public page (DR-GUEST-006)`);
  }
  if (copy.public?.kind !== 'beach') throw new Error(`[AMARA places] ${id} has no public beach copy`);
  const mapHref = mapsUrlFor(record);
  if (!mapHref) throw new Error(`[AMARA places] ${id} has no map link`);
  return {
    title: copy.public.title[lang],
    bestFor: copy.public.bestFor[lang],
    description: copy.public.description[lang],
    tip: copy.public.goodToKnow[lang],
    mapHref
  };
}

function requirePublic(id: string) {
  const { record, copy } = resolve(id);
  if (record.scope === 'amara-experience' || record.scope === 'internal') {
    throw new Error(`[AMARA places] ${id} is ${record.scope} and may not appear on a public page (DR-GUEST-006)`);
  }
  if (!copy.public) throw new Error(`[AMARA places] ${id} has no public copy`);
  return { record, copy: copy.public };
}

export interface PublicHikeRoute {
  id: string;
  title: string;
  duration?: string;
  elevationGain?: string;
  distance?: string;
  difficulty: string;
  experience: string;
  paragraphs: string[];
  links: { id: string; label: string; context: string; href: string }[];
}

export function publicHikeRoute(id: string, lang: AmaraLanguage): PublicHikeRoute {
  const { copy } = requirePublic(id);
  if (copy.kind !== 'hike') throw new Error(`[AMARA places] ${id} has no public hike copy`);
  return {
    id,
    title: copy.title[lang],
    duration: copy.duration?.[lang],
    elevationGain: copy.elevationGain?.[lang],
    distance: copy.distance?.[lang],
    difficulty: copy.difficulty[lang],
    experience: copy.experience[lang],
    paragraphs: copy.paragraphs.map((paragraph) => paragraph[lang]),
    links: copy.sourceLinks.map((link, index) => ({ id: `${id}-${index}`, label: link.label[lang], context: link.context[lang], href: link.href }))
  };
}

export interface PublicDayTrip {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  facts: { label: string; value: string }[];
  planningTitle: string;
  callout: string;
  details: string;
  officialHref: string;
  officialLabel: string;
}

export function publicDayTrip(id: string, lang: AmaraLanguage): PublicDayTrip {
  const { copy } = requirePublic(id);
  if (copy.kind !== 'day-trip') throw new Error(`[AMARA places] ${id} has no public day-trip copy`);
  return {
    id: copy.sectionId,
    kicker: copy.kicker[lang],
    title: copy.title[lang],
    summary: copy.summary[lang],
    facts: copy.facts.map((fact) => ({ label: fact.label[lang], value: fact.value[lang] })),
    planningTitle: copy.planningTitle[lang],
    callout: copy.callout[lang],
    details: copy.details[lang],
    officialHref: copy.officialHref[lang],
    officialLabel: copy.officialLabel[lang]
  };
}

export interface PublicWellnessProvider {
  id: string;
  name: string;
  imageAlt?: string;
  title: string;
  summary: string;
  highlights: { title: string; text: string }[];
  bestFor: string;
  websiteHref: string;
  whatsappHref: string;
}

export function publicWellnessProvider(id: string, lang: AmaraLanguage): PublicWellnessProvider {
  const { record, copy } = requirePublic(id);
  if (copy.kind !== 'wellness') throw new Error(`[AMARA places] ${id} has no public wellness copy`);
  if (!record.place.website || !record.place.whatsapp) throw new Error(`[AMARA places] ${id} needs website and WhatsApp on the record`);
  return {
    id,
    name: copy.name[lang],
    imageAlt: copy.imageAlt?.[lang],
    title: copy.title[lang],
    summary: copy.summary[lang],
    highlights: copy.highlights.map((highlight) => ({ title: highlight.title[lang], text: highlight.text[lang] })),
    bestFor: copy.bestFor[lang],
    websiteHref: record.place.website,
    whatsappHref: `https://wa.me/${record.place.whatsapp.replace(/[^0-9]/g, '')}`
  };
}

const PLAN_B_LABEL: LocalizedText = { en: 'Plan B', de: 'Plan B', es: 'Plan B', nl: 'Plan B', sv: 'Plan B' };
const ON_THE_DAY_LABEL: LocalizedText = { en: 'On the day', de: 'Vor Ort', es: 'Ese día', nl: 'Ter plekke', sv: 'På plats' };
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
  if (copy.guide.onTheDay) body.push(withLabel(ON_THE_DAY_LABEL, copy.guide.onTheDay));
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
    title: copy.guide.title ?? localizedName(record.place.name),
    ...(copy.guide.subtitle ? { subtitle: copy.guide.subtitle } : {}),
    body
  };
}
