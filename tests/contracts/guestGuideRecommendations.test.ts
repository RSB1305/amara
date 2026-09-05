import { expect, test } from '@playwright/test';
import { guestGuideEntries } from '../../src/content/guestGuideEntries';
import { allRecommendations, getRecommendation } from '../../knowledge/recommendations';

// Recommendation records (DR-EXPERIENCE-003…007) are the single owner of a card's place data.
// Only APPROVED records may enter guest authoring; the map link belongs to the record.

const MAP_LINK_LABEL =
  /(Open in Google Maps|In Google Maps öffnen|Abrir en Google Maps|Openen in Google Maps|Öppna i Google Maps)<\/a>\s*$/;

function accordionItems() {
  return guestGuideEntries.flatMap((entry) =>
    entry.type === 'detail'
      ? entry.categories.flatMap((category) =>
          category.items.flatMap((item) => (item.kind === undefined || item.kind === 'accordion' ? [{ entry, item }] : []))
        )
      : []
  );
}

test('every recommendation record has a unique route-key id, a map link and a dated check', () => {
  const ids = new Set<string>();
  for (const record of allRecommendations) {
    expect(record.id, record.id).toMatch(/^[a-z]+\.[a-z-]+\.[a-z0-9-]+$/);
    expect(ids.has(record.id), `duplicate ${record.id}`).toBe(false);
    ids.add(record.id);
    const [destination, topic] = record.id.split('.');
    expect(record.destination).toBe(destination);
    expect(record.topic).toBe(topic);
    // A village walk may be described without a link; every other place must be findable.
    if (record.place.kind !== 'hike') {
      expect(record.place.placeId || record.place.mapsUrl || record.place.website, `${record.id} has no link`).toBeTruthy();
    }
    expect(record.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    if (record.planB) expect(getRecommendation(record.planB), `${record.id} planB ${record.planB}`).toBeTruthy();
  }
  expect(allRecommendations.length).toBeGreaterThan(50);
});

test('every guide card with a recommendationId resolves to an APPROVED record and leaves the map link to it', () => {
  let linked = 0;
  for (const { entry, item } of accordionItems()) {
    if (!item.recommendationId) continue;
    linked++;
    const record = getRecommendation(item.recommendationId);
    expect(record, `${entry.slug}: ${item.recommendationId}`).toBeTruthy();
    expect(record?.status, `${item.recommendationId} is not approved`).toBe('APPROVED');
    expect(record?.scope, `${item.recommendationId} scope`).not.toBe('internal');
    for (const paragraph of item.body) {
      for (const text of Object.values(paragraph)) {
        expect(text, `${entry.slug}: ${item.recommendationId} still carries its own map link`).not.toMatch(MAP_LINK_LABEL);
      }
    }
  }
  expect(linked).toBeGreaterThan(50);
});

test('the first migrated topics are fully linked to records', () => {
  const migrated = [
    'frigiliana-guest-restaurants',
    'frigiliana-guest-breakfast',
    'nerja-guest-breakfast',
    'frigiliana-guest-beaches',
    'frigiliana-guest-hiking'
  ];
  for (const slug of migrated) {
    const entry = guestGuideEntries.find((candidate) => candidate.slug === slug);
    expect(entry?.type).toBe('detail');
    if (entry?.type !== 'detail') continue;
    for (const category of entry.categories) {
      for (const item of category.items) {
        if (item.kind === undefined || item.kind === 'accordion') {
          expect(item.recommendationId, `${slug}: ${item.title.en} has no recommendationId`).toBeTruthy();
        }
      }
    }
  }
});
