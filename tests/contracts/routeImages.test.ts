import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { expect, test } from '@playwright/test';
import { getRecommendation } from '../../knowledge/recommendations';
import { routeImageSets } from '../../src/content/images';
import { PUBLIC_ROUTE_KEYS, VACATION_RENTAL_ROUTE_KEYS } from '../../src/lib/publicRouteManifest.mjs';
import { STABLE_PUBLIC_IMAGE_PATHS } from '../../src/lib/images/stablePublicImages';
import { SUPPORTED_LANGUAGES } from '../../src/lib/routeOwnership';

// DR-DESIGN-021: one image source per route key; pages import no photograph of their own.

const contentRoot = join(process.cwd(), 'src', 'assets', 'images', 'content');
const stablePaths = new Set<string>(STABLE_PUBLIC_IMAGE_PATHS);
const routeKeys = new Set<string>(PUBLIC_ROUTE_KEYS as readonly string[]);

test('every image set belongs to a public route and every image file exists in the content root', () => {
  for (const [key, set] of Object.entries(routeImageSets)) {
    expect(set.routeKey, `${key} keyed by its own route key`).toBe(key);
    expect(routeKeys.has(key), `${key} is a public route key`).toBe(true);
    for (const image of set.images) {
      expect(image.src.startsWith('/images/'), `${key}: ${image.src} is a stable /images/ path`).toBe(true);
      expect(existsSync(join(contentRoot, image.src.slice('/images/'.length))), `${key}: ${image.src} exists under src/assets/images/content`).toBe(true);
    }
  }
});

test('inline images carry alt text in every language; Open Graph images are stable public paths', () => {
  for (const [key, set] of Object.entries(routeImageSets)) {
    for (const image of set.images) {
      if (image.role === 'og') {
        expect(image.alt, `${key}: an og image is never rendered inline and carries no alt`).toBeUndefined();
        expect(stablePaths.has(image.src), `${key}: og image ${image.src} must be listed in stablePublicImages.ts`).toBe(true);
        continue;
      }
      expect(image.alt, `${key}: ${image.src} needs alt text`).toBeTruthy();
      for (const lang of SUPPORTED_LANGUAGES) {
        expect(image.alt?.[lang]?.trim().length ?? 0, `${key}: ${image.src} alt ${lang}`).toBeGreaterThan(0);
      }
    }
    const og = set.images.find((image) => image.role === 'og') ?? set.images.find((image) => image.role === 'hero');
    if (og) expect(stablePaths.has(og.src) || og.role === 'hero', `${key}: og fallback`).toBe(true);
  }
});

test('slots are unique per route, briefs never duplicate an existing image, place images reference approved records', () => {
  for (const [key, set] of Object.entries(routeImageSets)) {
    const slots = set.images.map((image) => image.id ?? image.role);
    const heroCount = slots.filter((slot) => slot === 'hero').length;
    expect(heroCount, `${key}: at most one hero image`).toBeLessThanOrEqual(1);
    for (const brief of set.briefs ?? []) {
      expect(slots.includes(brief.id), `${key}: brief "${brief.id}" but the photograph already exists`).toBe(false);
      expect(brief.motif.trim().length, `${key}: brief "${brief.id}" names its motif`).toBeGreaterThan(0);
      expect(brief.format.trim().length, `${key}: brief "${brief.id}" names its format`).toBeGreaterThan(0);
    }
    const briefIds = (set.briefs ?? []).map((brief) => brief.id);
    expect(new Set(briefIds).size, `${key}: brief ids unique`).toBe(briefIds.length);
    const namedSlots = slots.filter((slot) => slot !== 'og' && slot !== 'place' && slot !== 'gallery' && slot !== 'editorial');
    expect(new Set(namedSlots).size, `${key}: image slots unique (${namedSlots.join(', ')})`).toBe(namedSlots.length);
    for (const image of set.images) {
      if (image.role === 'place') {
        expect(image.recommendationId, `${key}: a place image names its record`).toBeTruthy();
        const record = getRecommendation(image.recommendationId ?? '');
        expect(record?.status, `${key}: ${image.recommendationId} is an approved record`).toBe('APPROVED');
      } else {
        expect(image.recommendationId, `${key}: only place images reference a record`).toBeUndefined();
      }
    }
  }
});

test('every stay carries its card photograph and a gallery whose first eight entries are stable public paths', () => {
  for (const key of VACATION_RENTAL_ROUTE_KEYS as readonly string[]) {
    const set = routeImageSets[key];
    expect(set, `${key} has an image source`).toBeTruthy();
    if (!set) continue;
    expect(set.images.some((image) => image.role === 'card'), `${key} has a card photograph`).toBe(true);
    const gallery = set.images.filter((image) => image.role === 'gallery');
    expect(gallery.length, `${key} gallery size`).toBeGreaterThanOrEqual(8);
    for (const image of gallery.slice(0, 8)) {
      expect(stablePaths.has(image.src), `${key}: JSON-LD image ${image.src} must be a stable public path`).toBe(true);
    }
  }
});
