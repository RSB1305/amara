import { guestGuideEntries } from '../content/guestGuideEntries';
import { guestGuideBridgeContent } from '../content/guestGuideBridgeContent';
import { getRecommendation } from '../../knowledge/recommendations';
import type { KnowledgeRecommendation } from '../../knowledge/schema';
import type { AmaraLanguage } from '../types/seo';
import type { StaySearchDestination } from './staySearchHref';

const DESTINATION_NAMES: Record<StaySearchDestination, string> = {
  frigiliana: 'Frigiliana',
  nerja: 'Nerja',
  tarifa: 'Tarifa'
};

export interface GuestGuideBridgeCopy {
  eyebrow: string;
  title: string;
  lead: string;
  /** Only lines the records can back; an empty list means the block shows the lead alone. */
  lines: string[];
  landingLabel: string;
}

/** Records referenced by the given Guest Guide entries, each counted once. */
export function recordsForGuideEntries(slugs: readonly string[]): KnowledgeRecommendation[] {
  const seen = new Map<string, KnowledgeRecommendation>();
  for (const entry of guestGuideEntries) {
    if (entry.type !== 'detail' || !slugs.includes(entry.slug)) continue;
    for (const category of entry.categories) {
      for (const item of category.items) {
        if (item.kind !== undefined && item.kind !== 'accordion') continue;
        const ids = [...(item.recommendationId ? [item.recommendationId] : []), ...(item.recommendationIds ?? [])];
        for (const id of ids) {
          const record = getRecommendation(id);
          if (record && !seen.has(id)) seen.set(id, record);
        }
      }
    }
  }
  return [...seen.values()];
}

const fill = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));

export function buildGuestGuideBridgeCopy(
  destination: StaySearchDestination,
  guideSlugs: readonly string[],
  lang: AmaraLanguage
): GuestGuideBridgeCopy {
  const copy = guestGuideBridgeContent;
  const records = recordsForGuideEntries(guideSlugs);
  const exclusive = records.filter((record) => record.scope === 'amara-experience').length;
  const contacts = records.filter((record) => record.place.phone || record.place.whatsapp || record.place.reservationUrl).length;
  const access = records.some((record) => record.access?.some((entry) => entry.distanceMetres !== undefined || entry.walkMinutes !== undefined || entry.driveMinutes !== undefined));
  const planB = records.some((record) => record.planB);
  const firstHand = records.filter((record) => record.provenance === 'amara-first-hand').length;

  const lines: string[] = [];
  if (records.length > 0) {
    const exclusiveText = exclusive > 0 ? fill(copy.lines.exclusive[lang], { x: exclusive }) : '';
    lines.push(fill(copy.lines.places[lang], { n: records.length, x: exclusiveText }));
  }
  if (contacts > 0) lines.push(fill(copy.lines.contacts[lang], { c: contacts }));
  if (access) lines.push(copy.lines.access[lang]);
  if (planB) lines.push(copy.lines.planB[lang]);
  if (firstHand > 0) lines.push(fill(copy.lines.firstHand[lang], { h: firstHand }));

  return {
    eyebrow: copy.eyebrow[lang],
    title: copy.title[lang],
    lead: fill(copy.lead[lang], { destination: DESTINATION_NAMES[destination] }),
    lines,
    landingLabel: copy.landingLabel[lang]
  };
}
