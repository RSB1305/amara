import { expect, test } from '@playwright/test';
import { guestGuideEntries } from '../../src/content/guestGuideEntries';
import { guidePageAddressLine, isGuideOnly, orderCategoryItems } from '../../src/lib/guestGuideExclusive';
import { SUPPORTED_LANGUAGES } from '../../src/lib/routeOwnership';

// DR-GUEST-006: what exists only in the guide is visible inside the guide.

test('within every category, guide-only places come before shared places and non-place items keep their positions', () => {
  for (const entry of guestGuideEntries) {
    if (entry.type !== 'detail') continue;
    for (const category of entry.categories) {
      const ordered = orderCategoryItems(category.items);
      expect(ordered.length).toBe(category.items.length);
      category.items.forEach((item, index) => {
        const linked = (item.kind === undefined || item.kind === 'accordion') && item.recommendationId;
        if (!linked) expect(ordered[index], `${entry.slug}: non-place item ${index} keeps its position`).toBe(item);
      });
      let sharedSeen = false;
      for (const item of ordered) {
        if (item.kind !== undefined && item.kind !== 'accordion') continue;
        if (!item.recommendationId) continue;
        if (isGuideOnly(item.recommendationId)) {
          expect(sharedSeen, `${entry.slug} / ${category.heading.en}: a guide-only place follows a shared one`).toBe(false);
        } else {
          sharedSeen = true;
        }
      }
    }
  }
});

test('the address line names counts the records can back, in every language, or stays away', () => {
  for (const entry of guestGuideEntries) {
    if (entry.type !== 'detail') continue;
    for (const lang of SUPPORTED_LANGUAGES) {
      const line = guidePageAddressLine(entry, lang);
      if (line === undefined) continue;
      expect(line, `${entry.slug} ${lang}`).toMatch(/^\d+ .+ \d+ .+\.$/);
      expect(line).not.toContain('{');
    }
  }
});
