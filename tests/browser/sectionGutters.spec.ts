import { expect, test, type Page } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

/**
 * Characterization tests for the shared responsive page gutter.
 *
 * The horizontal gutter is owned in three different places at once: the global
 * `.am-section` shell, page-owned Tailwind utilities, and a compatibility rule
 * that narrows nested `.px-12` on a small set of pages. Those layers are easy to
 * change independently and hard to reason about from markup alone, because the
 * same shared component renders a different gutter depending on which page
 * mounts it.
 *
 * These assert the delivered contract — the computed padding at each breakpoint —
 * rather than the class names that currently produce it, so they stay valid
 * across a refactor of where the gutter is declared and fail if the rendered
 * result actually moves.
 */

const PORT = 4326;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const MOBILE = { width: 375, height: 800 };
const TABLET = { width: 768, height: 900 };
const DESKTOP = { width: 1440, height: 900 };

/** Standard gutter: 24px below the `md` breakpoint, 48px from `md` upwards. */
const NARROW = 24;
const WIDE = 48;

let astroServer: Awaited<ReturnType<typeof dev>> | undefined;

test.beforeAll(async () => {
  astroServer = await dev({
    root: fileURLToPath(new URL('../../', import.meta.url)),
    server: {
      host: '127.0.0.1',
      port: PORT
    },
    logLevel: 'silent'
  });
});

test.afterAll(async () => {
  await astroServer?.stop();
});

/** Computed left padding of every match, in document order. */
const guttersOf = (page: Page, selector: string) =>
  page
    .locator(selector)
    .evaluateAll((elements) =>
      elements.map((element) => Math.round(parseFloat(getComputedStyle(element).paddingLeft)))
    );

const open = (page: Page, path: string) =>
  page.goto(`${ORIGIN}${path}`, { waitUntil: 'domcontentloaded' });

test.describe('shared .am-section gutter', () => {
  test('standard sections narrow to 24px below md and widen to 48px above', async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await open(page, '/nerja-nightlife');
    const mobile = await guttersOf(page, 'section.am-section');
    expect(mobile.length).toBeGreaterThan(0);
    expect(mobile.every((padding) => padding === NARROW)).toBe(true);

    await page.setViewportSize(TABLET);
    expect((await guttersOf(page, 'section.am-section')).every((p) => p === WIDE)).toBe(true);

    await page.setViewportSize(DESKTOP);
    expect((await guttersOf(page, 'section.am-section')).every((p) => p === WIDE)).toBe(true);
  });

  /**
   * `/frigiliana-or-nerja` is the one route whose section shells keep the wide
   * gutter on mobile. It is pinned deliberately: narrowing it is a visible
   * layout change, not a refactor, and must stay a separate decision.
   */
  test('frigiliana-or-nerja keeps the wide gutter at every breakpoint', async ({ page }) => {
    for (const viewport of [MOBILE, TABLET, DESKTOP]) {
      await page.setViewportSize(viewport);
      await open(page, '/frigiliana-or-nerja');
      const gutters = await guttersOf(page, 'section.am-section');
      expect(gutters.length).toBe(6);
      expect(gutters.every((padding) => padding === WIDE)).toBe(true);
    }
  });
});

test.describe('shared components inherit the mounting page gutter', () => {
  /**
   * On the bridged pages the nested `.px-12` of shared components is narrowed to
   * 24px on mobile; on every other route the same components render 48px. This
   * asymmetry is the current contract, and both halves are pinned so that
   * unifying them stays a deliberate design decision.
   */
  test('bridged page narrows nested shared components on mobile', async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await open(page, '/frigiliana-parking');

    expect(await guttersOf(page, '[data-am-component="editorial-guide-link-section"] > div')).toEqual([
      NARROW
    ]);
    // Hero and FaqAccordion own their gutter through a bare `.px-12`.
    const nested = await guttersOf(page, 'main .px-12');
    expect(nested.length).toBeGreaterThan(0);
    expect(nested.every((padding) => padding === NARROW)).toBe(true);
  });

  test('unbridged page keeps shared components at the wide gutter on mobile', async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await open(page, '/frigiliana-weather');

    expect(await guttersOf(page, '[data-am-component="editorial-guide-link-section"] > div')).toEqual([
      WIDE
    ]);
  });
});

test.describe('footer gutter', () => {
  /**
   * The footer sits outside every page wrapper and therefore keeps the wide
   * gutter on mobile across the whole site. Pinned so that changing it is a
   * recorded design decision rather than a side effect of a gutter refactor.
   */
  test('footer keeps 48px on mobile on both bridged and unbridged routes', async ({ page }) => {
    await page.setViewportSize(MOBILE);

    for (const route of ['/frigiliana-parking', '/nerja-nightlife', '/frigiliana-or-nerja']) {
      await open(page, route);
      expect(await guttersOf(page, '.footer-core')).toEqual([WIDE]);
      expect(await guttersOf(page, '.footer-minimal')).toEqual([WIDE]);
    }
  });
});
