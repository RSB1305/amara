import { getRecommendation } from '../../knowledge/recommendations';
import type { GuestGuideCategoryItem, GuestGuideDetailEntry } from '../types/guestGuide';
import type { AmaraLanguage } from '../types/seo';

/**
 * What the guest gets for booking, made visible inside the guide (DR-GUEST-006):
 * a place whose record is `amara-experience` exists only here, never on the
 * public site. Those places carry a label and come first within their category.
 */
export const GUIDE_ONLY_LABEL: Record<AmaraLanguage, string> = {
  en: 'Guest Guide only',
  de: 'Nur im Gästeguide',
  es: 'Solo en la guía',
  nl: 'Alleen in de gastengids',
  sv: 'Bara i gästguiden'
};

const ADDRESS_LINE: Record<AmaraLanguage, string> = {
  en: '{n} addresses on this page, {x} of them only here in the Guest Guide.',
  de: '{n} Adressen auf dieser Seite, {x} davon nur hier im Gästeguide.',
  es: '{n} direcciones en esta página, {x} de ellas solo aquí, en la guía.',
  nl: '{n} adressen op deze pagina, {x} daarvan alleen hier in de gastengids.',
  sv: '{n} adresser på den här sidan, {x} av dem bara här i gästguiden.'
};

export function isGuideOnly(recordId: string | undefined): boolean {
  if (!recordId) return false;
  return getRecommendation(recordId)?.scope === 'amara-experience';
}

const isLinkedPlace = (item: GuestGuideCategoryItem): item is GuestGuideCategoryItem & { recommendationId: string } =>
  (item.kind === undefined || item.kind === 'accordion') && typeof item.recommendationId === 'string';

/**
 * Guide-only places first among the linked places of a category; every other
 * item (intro text, links, widgets, lists) keeps its position, so an authored
 * opening stays on top and only the place cards regroup.
 */
export function orderCategoryItems(items: readonly GuestGuideCategoryItem[]): GuestGuideCategoryItem[] {
  const positions: number[] = [];
  const linked: Array<GuestGuideCategoryItem & { recommendationId: string }> = [];
  items.forEach((item, index) => {
    if (isLinkedPlace(item)) {
      positions.push(index);
      linked.push(item);
    }
  });
  const ordered = [
    ...linked.filter((item) => isGuideOnly(item.recommendationId)),
    ...linked.filter((item) => !isGuideOnly(item.recommendationId))
  ];
  const out = [...items];
  positions.forEach((index, k) => {
    out[index] = ordered[k];
  });
  return out;
}

/** Records a guide page references, each counted once, including place lists. */
export function recordIdsOnPage(entry: GuestGuideDetailEntry): string[] {
  const ids = new Set<string>();
  for (const category of entry.categories) {
    for (const item of category.items) {
      if (item.kind !== undefined && item.kind !== 'accordion') continue;
      if (item.recommendationId) ids.add(item.recommendationId);
      for (const id of item.recommendationIds ?? []) ids.add(id);
    }
  }
  return [...ids].filter((id) => getRecommendation(id));
}

/** One sentence under the intro: how many addresses the page holds and how many exist only here. Absent when nothing is exclusive. */
export function guidePageAddressLine(entry: GuestGuideDetailEntry, lang: AmaraLanguage): string | undefined {
  const ids = recordIdsOnPage(entry);
  const exclusive = ids.filter((id) => isGuideOnly(id)).length;
  if (ids.length < 2 || exclusive === 0) return undefined;
  return ADDRESS_LINE[lang].replace('{n}', String(ids.length)).replace('{x}', String(exclusive));
}
