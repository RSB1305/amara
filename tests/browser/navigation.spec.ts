import { expect, test, type Page } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';
import { trustLabels } from '../../src/content/trustLabels';
import { resolveLink, resolveOptionalLink } from '../../src/lib/linkResolver';
import type { AmaraLanguage } from '../../src/types/seo';

/**
 * Characterization tests for the shared global navigation.
 *
 * These assert the delivered contract — DOM shape, ARIA state, focus movement,
 * inert containment and scroll lock — rather than visual appearance, so they
 * stay valid across an internal decomposition of the component.
 */

const PORT = 4323;
const ORIGIN = `http://127.0.0.1:${PORT}`;

/** The browser project pins a baseURL for the map dialog server; address this one explicitly. */
const url = (path: string) => `${ORIGIN}${path}`;

const LANGUAGES: AmaraLanguage[] = ['en', 'de', 'es', 'nl', 'sv'];

/** Compact rail labels, mirrored from the component's own short-label table. */
const SHORT_BOOKING_LABELS: Record<AmaraLanguage, string> = {
  en: 'Book',
  de: 'Buchen',
  es: 'Reservar',
  nl: 'Boeken',
  sv: 'Boka'
};

const MOBILE_VIEWPORT = { width: 390, height: 844 };
const DESKTOP_VIEWPORT = { width: 1280, height: 900 };

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

/** Navigation markup is in the initial response; no image or font work needs to settle first. */
const openPage = (page: Page, path: string) =>
  page.goto(url(path), { waitUntil: 'domcontentloaded' });

const isInert = (page: Page, selector: string) =>
  page.locator(selector).evaluate((element) => (element as HTMLElement).inert);

/**
 * Everything the header sits next to inside the interaction root. The component walks
 * this branch itself, so the test asserts the resulting containment rather than a
 * hardcoded list of page sections.
 */
const backgroundSiblingInertStates = (page: Page) =>
  page.evaluate(() => {
    const header = document.querySelector('[data-am-navigation]');
    const root = header?.closest('[data-am-interaction-root]');
    if (!header || !root) return null;

    return Array.from(root.children)
      .filter((child) => child !== header && child.tagName !== 'SCRIPT')
      .map((child) => (child as HTMLElement).inert);
  });

test('the header exposes exactly one banner with three desktop groups', async ({ page }) => {
  await openPage(page, resolveLink('home', 'en'));

  await expect(page.locator('header[data-am-navigation]')).toHaveCount(1);
  await expect(page.getByRole('banner')).toHaveCount(1);

  const triggers = page.locator('[data-am-navigation] .am-nav__group-trigger');
  await expect(triggers).toHaveCount(3);

  for (let index = 0; index < 3; index += 1) {
    await expect(triggers.nth(index)).toHaveAttribute('aria-expanded', 'false');
  }
});

test('opening a desktop group closes the previous one and Escape restores focus', async ({
  page
}) => {
  await openPage(page, resolveLink('home', 'en'));

  const triggers = page.locator('[data-am-navigation] .am-nav__group-trigger');
  const dropdowns = page.locator('[data-am-navigation] .am-nav__dropdown');
  const first = triggers.nth(0);
  const second = triggers.nth(1);
  const firstDropdown = dropdowns.nth(0);
  const secondDropdown = dropdowns.nth(1);

  // A closed group is not just visually hidden: its panel is removed from the
  // a11y tree and from tab order.
  await expect(dropdowns).toHaveCount(3);
  for (let index = 0; index < 3; index += 1) {
    await expect(dropdowns.nth(index)).toHaveJSProperty('inert', true);
  }

  await first.click();
  await expect(first).toHaveAttribute('aria-expanded', 'true');
  await expect(second).toHaveAttribute('aria-expanded', 'false');
  await expect(firstDropdown).toHaveJSProperty('inert', false);
  await expect(secondDropdown).toHaveJSProperty('inert', true);

  await second.click();
  await expect(second).toHaveAttribute('aria-expanded', 'true');
  await expect(first).toHaveAttribute('aria-expanded', 'false');
  await expect(firstDropdown).toHaveJSProperty('inert', true);
  await expect(secondDropdown).toHaveJSProperty('inert', false);

  await page.keyboard.press('Escape');
  await expect(second).toHaveAttribute('aria-expanded', 'false');
  await expect(secondDropdown).toHaveJSProperty('inert', true);
  await expect(second).toBeFocused();
});

test('the language menu opens, closes on Escape and returns focus to its trigger', async ({
  page
}) => {
  await openPage(page, resolveLink('home', 'en'));

  const languageRoot = page.locator('[data-am-language]');
  const languageTrigger = page.locator('[data-am-language-trigger]');

  await expect(languageTrigger).toHaveAttribute('aria-expanded', 'false');

  await languageTrigger.click();
  await expect(languageTrigger).toHaveAttribute('aria-expanded', 'true');
  await expect(languageRoot).toHaveAttribute('data-open', 'true');

  await page.keyboard.press('Escape');
  await expect(languageTrigger).toHaveAttribute('aria-expanded', 'false');
  await expect(languageRoot).toHaveAttribute('data-open', 'false');
  await expect(languageTrigger).toBeFocused();
});

test('the five language options keep their registry-resolved URLs', async ({ page }) => {
  await openPage(page, resolveLink('home', 'en'));

  const options = page.locator('[data-am-language-panel] a');
  await expect(options).toHaveCount(LANGUAGES.length);

  for (const [index, language] of LANGUAGES.entries()) {
    const expected = resolveOptionalLink('home', language, { suppressMissing: true });
    expect(expected, `home:${language}`).toBeTruthy();
    await expect(options.nth(index)).toHaveAttribute('href', expected as string);
  }
});

test('the mobile menu locks scrolling, inerts the background and restores it on Escape', async ({
  page
}) => {
  await page.setViewportSize(MOBILE_VIEWPORT);
  await openPage(page, resolveLink('home', 'en'));

  const trigger = page.locator('[data-am-menu-trigger]');
  const menu = page.locator('[data-am-mobile-menu]');
  const root = page.locator('html');

  await expect(trigger).toBeVisible();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toHaveAttribute('hidden', '');

  await trigger.click();

  await expect(menu).not.toHaveAttribute('hidden', '');
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');
  await expect(root).toHaveClass(/am-nav-lock/);

  const focusedInsideMenu = await menu.evaluate(
    (element) => document.activeElement !== null && element.contains(document.activeElement)
  );
  expect(focusedInsideMenu).toBe(true);

  // Header utilities and the page body behind the panel are removed from the a11y tree.
  expect(await isInert(page, '.am-nav__brand')).toBe(true);
  expect(await isInert(page, '.am-nav__center')).toBe(true);
  expect(await isInert(page, '.am-nav__slot--language')).toBe(true);
  expect(await isInert(page, '.am-nav__slot--cta')).toBe(true);
  expect(await isInert(page, '[data-am-page="home"]')).toBe(true);

  const inertWhileOpen = await backgroundSiblingInertStates(page);
  expect(inertWhileOpen).not.toBeNull();
  expect(inertWhileOpen?.length).toBeGreaterThan(0);
  expect(inertWhileOpen?.every(Boolean)).toBe(true);

  await page.keyboard.press('Escape');

  await expect(menu).toHaveAttribute('hidden', '');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(root).not.toHaveClass(/am-nav-lock/);
  await expect(trigger).toBeFocused();

  expect(await isInert(page, '.am-nav__brand')).toBe(false);
  expect(await isInert(page, '.am-nav__center')).toBe(false);
  expect(await isInert(page, '.am-nav__slot--language')).toBe(false);
  expect(await isInert(page, '.am-nav__slot--cta')).toBe(false);
  expect(await isInert(page, '[data-am-page="home"]')).toBe(false);

  const inertAfterClose = await backgroundSiblingInertStates(page);
  expect(inertAfterClose?.some(Boolean)).toBe(false);
});

test('moving to a desktop width closes an open mobile menu cleanly', async ({ page }) => {
  await page.setViewportSize(MOBILE_VIEWPORT);
  await openPage(page, resolveLink('home', 'en'));

  const trigger = page.locator('[data-am-menu-trigger]');
  const menu = page.locator('[data-am-mobile-menu]');
  const root = page.locator('html');

  await trigger.click();
  await expect(trigger).toHaveAttribute('aria-expanded', 'true');

  await page.setViewportSize(DESKTOP_VIEWPORT);

  await expect(menu).toHaveAttribute('hidden', '');
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await expect(root).not.toHaveClass(/am-nav-lock/);
  expect(await isInert(page, '.am-nav__center')).toBe(false);
});

test('the booking CTA is present by default and suppressed on the property sale page', async ({
  page
}) => {
  await openPage(page, resolveLink('home', 'en'));
  await expect(page.locator('[data-am-navigation] .am-nav__slot--cta')).toHaveCount(1);
  await expect(page.locator('[data-am-navigation] .am-nav-mobile__cta')).toHaveCount(1);

  await openPage(page, '/en/frigiliana-hospitality-property-for-sale');
  await expect(page.locator('header[data-am-navigation]')).toHaveCount(1);
  await expect(page.locator('[data-am-navigation] .am-nav__slot--cta')).toHaveCount(0);
  await expect(page.locator('[data-am-navigation] .am-nav-mobile__cta')).toHaveCount(0);
});

test('the slotted navigation on a location authority page keeps its full contract', async ({
  page
}) => {
  await openPage(page, '/en/directions-arrival-guide');

  await expect(page.locator('header[data-am-navigation]')).toHaveCount(1);
  await expect(page.getByRole('banner')).toHaveCount(1);

  const triggers = page.locator('[data-am-navigation] .am-nav__group-trigger');
  await expect(triggers).toHaveCount(3);
  await expect(page.locator('[data-am-navigation] .am-nav__slot--cta')).toHaveCount(1);

  await triggers.first().click();
  await expect(triggers.first()).toHaveAttribute('aria-expanded', 'true');

  await page.keyboard.press('Escape');
  await expect(triggers.first()).toHaveAttribute('aria-expanded', 'false');
  await expect(triggers.first()).toBeFocused();
});

for (const language of LANGUAGES) {
  test(`the booking labels stay localized in ${language}`, async ({ page }) => {
    await openPage(page, resolveLink('home', language));

    await expect(page.locator('[data-am-navigation] .am-nav__cta-label-full')).toHaveText(
      trustLabels.book[language]
    );
    await expect(page.locator('[data-am-navigation] .am-nav__cta-label-short')).toHaveText(
      SHORT_BOOKING_LABELS[language]
    );
    await expect(page.locator('[data-am-navigation] .am-nav-mobile__cta')).toHaveText(
      trustLabels.book[language]
    );
  });
}
