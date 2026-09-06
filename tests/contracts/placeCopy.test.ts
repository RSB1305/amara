import { expect, test } from '@playwright/test';
import { allRecommendations, getRecommendation } from '../../knowledge/recommendations';
import { placeCopyById } from '../../src/content/places';
import { frigilianaBeachesContent } from '../../src/content/frigilianaBeachesContent';
import { frigilianaRestaurantsContent } from '../../src/content/frigilianaRestaurantsContent';
import { guestGuideEntries } from '../../src/content/guestGuideEntries';
import { hasGuideOnlyCopy } from '../../src/lib/placeCopy';
import { SUPPORTED_LANGUAGES } from '../../src/lib/routeOwnership';

// DR-GUEST-006: public and private content are never identical; the boundary lives in the record.

const publicRestaurantIds = new Set(
  SUPPORTED_LANGUAGES.flatMap((lang) =>
    frigilianaRestaurantsContent[lang].restaurantSections.flatMap((section) => section.restaurantIds)
  )
);
const publicBeachIds = new Set(
  SUPPORTED_LANGUAGES.flatMap((lang) =>
    frigilianaBeachesContent[lang].beachSections.flatMap((section) => section.beachIds)
  )
);
/** Public surface per topic: which records the public pages reference. */
const publicIdsByTopic: Record<string, Set<string>> = { restaurants: publicRestaurantIds, beaches: publicBeachIds };

function guideIds(): Set<string> {
  const ids = new Set<string>();
  for (const entry of guestGuideEntries) {
    if (entry.type !== 'detail') continue;
    for (const category of entry.categories) {
      for (const item of category.items) {
        if (item.kind !== undefined && item.kind !== 'accordion') continue;
        if (item.recommendationId) ids.add(item.recommendationId);
        for (const id of item.recommendationIds ?? []) ids.add(id);
      }
    }
  }
  return ids;
}

test('every place copy entry belongs to a record and carries the projections its scope allows', () => {
  for (const [id, copy] of Object.entries(placeCopyById)) {
    const record = getRecommendation(id);
    expect(record, `${id} has no record`).toBeTruthy();
    if (!record) continue;
    if (record.scope === 'amara-experience') expect(copy.public, `${id} is guide-only but has public copy`).toBeUndefined();
    if (record.scope === 'public') expect(copy.guide, `${id} is public-only but has guide copy`).toBeUndefined();
    if (record.scope === 'split') {
      expect(copy.public, `${id} is split but has no public copy`).toBeTruthy();
      expect(copy.guide, `${id} is split but has no guide copy`).toBeTruthy();
      const guideOnlyData = Boolean(record.place.phone || record.place.whatsapp || record.place.reservationUrl || record.access?.length);
      expect(
        guideOnlyData || hasGuideOnlyCopy(copy.guide),
        `${id} is split but the guide adds nothing the public page does not have`
      ).toBe(true);
    }
  }
});

test('public and guide copy of the same place are never identical', () => {
  for (const [id, copy] of Object.entries(placeCopyById)) {
    if (!copy.public || !copy.guide) continue;
    for (const lang of SUPPORTED_LANGUAGES) {
      const publicText = `${copy.public.description[lang]} ${copy.public.goodToKnow[lang]} ${copy.public.beforeYouGo[lang]}`;
      for (const paragraph of copy.guide.why) {
        const guideText = paragraph[lang].replace(/<[^>]+>/g, '').trim();
        expect(guideText.length, `${id} ${lang}: empty guide paragraph`).toBeGreaterThan(0);
        expect(publicText, `${id} ${lang}: guide paragraph repeats the public page`).not.toContain(guideText);
      }
    }
  }
});

test('the public restaurants page only shows shared or public records, and only through the place copy', () => {
  expect(publicRestaurantIds.size).toBe(10);
  for (const id of publicRestaurantIds) {
    const record = getRecommendation(id);
    expect(record?.scope, `${id} on the public page`).toMatch(/^(public|split)$/);
    expect(placeCopyById[id]?.public, `${id} needs public copy`).toBeTruthy();
  }
});

test('the public beaches page only shows shared or public records, and only through the place copy', () => {
  expect(publicBeachIds.size).toBe(6);
  for (const id of publicBeachIds) {
    const record = getRecommendation(id);
    expect(record?.scope, `${id} on the public page`).toMatch(/^(public|split)$/);
    expect(placeCopyById[id]?.public, `${id} needs public copy`).toBeTruthy();
  }
});

test('guide-only records never appear on the public page and public-only records never in the guide', () => {
  const inGuide = guideIds();
  for (const record of allRecommendations) {
    const publicIds = publicIdsByTopic[record.topic];
    if (!publicIds) continue;
    if (record.scope === 'amara-experience') expect(publicIds.has(record.id), `${record.id} leaked to the public page`).toBe(false);
    if (record.scope === 'public') expect(inGuide.has(record.id), `${record.id} leaked into the guide`).toBe(false);
    if (record.scope === 'split') expect(inGuide.has(record.id) && publicIds.has(record.id), `${record.id} is split but not on both surfaces`).toBe(true);
  }
});
