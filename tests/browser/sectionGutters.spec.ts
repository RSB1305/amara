import { expect, test, type Page } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

/**
 * Contract tests for the shared responsive page gutter.
 *
 * One horizontal gutter rule applies to every normal page shell and every
 * public shared component: 24px below the `md` breakpoint, 48px from `md`
 * upwards. A component renders the same gutter regardless of which page mounts
 * it, so the gutter can be reasoned about from the component alone.
 *
 * These assert the delivered contract — computed padding and the resulting
 * content inset — rather than the class names that currently produce it, so
 * they stay valid across a refactor of where the gutter is declared and fail if
 * the rendered result actually moves.
 */

const PORT = 4326;
const ORIGIN = `http://127.0.0.1:${PORT}`;

const MOBILE = { width: 375, height: 800 };
const TABLET = { width: 768, height: 900 };
const DESKTOP = { width: 1440, height: 900 };

/** Standard gutter: 24px below the `md` breakpoint, 48px from `md` upwards. */
const NARROW = 24;
const WIDE = 48;

/** Pages that used to depend on a page-scoped rule for the narrow gutter. */
const FORMERLY_BRIDGED = [
  '/frigiliana-faq',
  '/frigiliana-market',
  '/frigiliana-parking',
  '/frigiliana-streets-stairs',
  '/getting-to-frigiliana'
];

/** Pages that mount the same shared components without that rule. */
const NEVER_BRIDGED = [
  '/frigiliana-weather',
  '/nerja-weather',
  '/nerja-where-to-stay',
  '/frigiliana-location',
  '/directions-arrival-guide',
  '/nerja-nightlife'
];

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

/**
 * Distinct left padding of every page-gutter owner inside `main`.
 *
 * A gutter owner is identified structurally rather than by class: it spans the
 * full viewport width and contributes horizontal padding. Cards, inset copy and
 * controls sit inside a grid or a narrower max-width and are therefore excluded,
 * which keeps internal component padding out of the page-gutter contract.
 */
const pageGutters = (page: Page) =>
  page.evaluate(() => {
    const widths = new Set<number>();
    for (const element of document.querySelectorAll('main *')) {
      const rect = element.getBoundingClientRect();
      if (rect.left !== 0 || Math.round(rect.width) !== window.innerWidth) continue;
      const padding = Math.round(parseFloat(getComputedStyle(element).paddingLeft));
      if (padding > 0) widths.add(padding);
    }
    return [...widths].sort((a, b) => a - b);
  });

/** Left edge of the first authored block inside a container, from the viewport. */
const contentInsetOf = (page: Page, selector: string) =>
  page.locator(selector).evaluateAll((elements) =>
    elements.map((element) => {
      const rect = element.getBoundingClientRect();
      return Math.round(rect.left + parseFloat(getComputedStyle(element).paddingLeft));
    })
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
   * `/frigiliana-or-nerja` still opts its section shells out of the responsive
   * default and nests a second gutter inside each one. Pinned until that page is
   * normalized so the change stays a recorded decision.
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

test.describe('the page gutter does not depend on the mounting page', () => {
  /**
   * The five pages that previously needed a page-scoped rule and the pages that
   * never had one now resolve to the same value, which is what makes that rule
   * removable rather than merely relocated.
   */
  for (const route of [...FORMERLY_BRIDGED, ...NEVER_BRIDGED]) {
    test(`${route} renders one gutter per breakpoint`, async ({ page }) => {
      await page.setViewportSize(MOBILE);
      await open(page, route);
      expect(await pageGutters(page)).toEqual([NARROW]);

      await page.setViewportSize(TABLET);
      expect(await pageGutters(page)).toEqual([WIDE]);

      await page.setViewportSize(DESKTOP);
      expect(await pageGutters(page)).toEqual([WIDE]);
    });
  }

  test('EditorialGuideLinkSection renders the same gutter on every route', async ({ page }) => {
    for (const route of ['/frigiliana-parking', '/frigiliana-weather', '/nerja-weather']) {
      await page.setViewportSize(MOBILE);
      await open(page, route);
      expect(
        await guttersOf(page, '[data-am-component="editorial-guide-link-section"] > div')
      ).toEqual([NARROW]);

      await page.setViewportSize(TABLET);
      expect(
        await guttersOf(page, '[data-am-component="editorial-guide-link-section"] > div')
      ).toEqual([WIDE]);
    }
  });
});

test.describe('footer gutter', () => {
  /**
   * The footer sits outside every page wrapper and still keeps the wide gutter on
   * mobile across the whole site. Pinned until it is normalized so the change
   * stays a recorded decision.
   */
  test('footer keeps 48px on mobile on every route', async ({ page }) => {
    await page.setViewportSize(MOBILE);

    for (const route of ['/frigiliana-parking', '/nerja-nightlife', '/frigiliana-or-nerja']) {
      await open(page, route);
      expect(await guttersOf(page, '.footer-core')).toEqual([WIDE]);
      expect(await guttersOf(page, '.footer-minimal')).toEqual([WIDE]);
    }
  });
});

test.describe('effective content inset', () => {
  /**
   * `/frigiliana-or-nerja` is the one route where an outer and an inner gutter
   * still add up. Pinned as an explicit number so normalizing it is visible in
   * the diff rather than implied.
   */
  test('frigiliana-or-nerja still adds an outer and an inner gutter', async ({ page }) => {
    await page.setViewportSize(MOBILE);
    await open(page, '/frigiliana-or-nerja');
    const mobile = await contentInsetOf(page, 'section.am-section > div');
    expect(mobile.length).toBe(6);
    expect(mobile.every((inset) => inset === WIDE + NARROW)).toBe(true);

    await page.setViewportSize(TABLET);
    const tablet = await contentInsetOf(page, 'section.am-section > div');
    expect(tablet.every((inset) => inset === WIDE + WIDE)).toBe(true);
  });
});
