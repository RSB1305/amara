import { expect, test } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

const PORT = 4322;
const repositoryRoot = fileURLToPath(new URL('../../', import.meta.url));

let astroServer: Awaited<ReturnType<typeof dev>> | undefined;

test.beforeAll(async () => {
  astroServer = await dev({
    root: repositoryRoot,
    server: { host: '127.0.0.1', port: PORT },
    logLevel: 'silent'
  });
});

test.afterAll(async () => {
  await astroServer?.stop();
});

test('the public AMARA Experience landing links to a separate guest access page', async ({ page }) => {
  await page.goto('/de/amara-experience');
  const access = page.locator('[data-am-component="amara-experience-access"]');
  await expect(access.locator('form')).toHaveCount(0);
  await expect(access.locator('a[href="/de/amara-experience/access"]')).toBeVisible();
  await expect(page.locator('header [data-am-experience-access]')).toHaveAttribute(
    'href',
    '/de/amara-experience/access'
  );
  await expect(page.locator('header [data-am-experience-access]')).toHaveAccessibleName(
    'AMARA Experience öffnen'
  );
});

test('the guest access page stays focused on booking verification', async ({ page }) => {
  await page.goto('/de/amara-experience/access');

  await expect(page.locator('main h1')).toHaveText('AMARA Experience');
  await expect(page.locator('.am-experience-app__intro strong')).toHaveText('AMARA Guest Guide');
  await expect(page.locator('main')).toContainText(
    'Hier findet ihr Informationen zu eurer Unterkunft, Wichtigem vor Ort und unseren persönlichen Insider-Tipps. Alle gebuchten Gäste haben vor und während ihres Aufenthalts Zugang.'
  );
  await expect(page.locator('[data-am-experience-landing-link]'))
    .toHaveAttribute('href', '/de/amara-experience');
  await expect(page.locator('[data-am-experience-landing-link]'))
    .toHaveText('← Mehr über AMARA Experience');
  await expect(page.locator('main .am-text-eyebrow')).toHaveCount(0);
  await expect(page.locator('[data-am-experience-form]')).toBeVisible();
  await expect(page.getByLabel('Vorname der Buchung')).toBeVisible();
  await expect(page.locator('input[name="arrival"]')).toHaveCount(1);
  await expect(page.locator('input[name="departure"]')).toHaveCount(1);
  const fieldBackgrounds = await page.locator(
    'input[name="firstName"], [data-am-experience-arrival-trigger], [data-am-experience-departure-trigger]'
  ).evaluateAll((fields) => fields.map((field) => getComputedStyle(field).backgroundColor));
  expect(new Set(fieldBackgrounds).size).toBe(1);
  expect(fieldBackgrounds[0]).toBe('rgb(255, 255, 255)');
  const languageMenu = page.locator('header .am-lang-menu');
  await expect(languageMenu.locator('.am-lang-menu__trigger')).toBeVisible();
  await languageMenu.locator('.am-lang-menu__trigger').click();
  await expect(languageMenu.locator('.am-lang-menu__option')).toHaveCount(5);
  await expect(languageMenu.locator('a[href="/en/amara-experience/access"]')).toHaveText('English');
  await expect(languageMenu.locator('a[href="/amara-experience/access"]')).toHaveText('Español');
  await languageMenu.locator('a[href="/en/amara-experience/access"]').click();
  await expect(page).toHaveURL(/\/en\/amara-experience\/access$/);
  await expect(page.locator('.am-experience-app__intro strong')).toHaveText('AMARA Guest Guide');
  await expect(page.locator('main')).toContainText(
    'Here you’ll find information about your accommodation, local essentials and our personal insider tips. All booked guests have access before and during their stay.'
  );
  await expect(page.locator('[data-am-experience-landing-link]'))
    .toHaveAttribute('href', '/en/amara-experience');
  await expect(page.locator('[data-am-experience-landing-link]'))
    .toHaveText('← Learn more about AMARA Experience');
  await expect(page.locator('header > nav')).toHaveCount(0);
  await expect(page.locator('footer')).toHaveCount(0);
});

test('the protected AMARA stay hub contains the accommodation, local essentials and personal recommendations', async ({ page }) => {
  await page.goto('/de/amara-experience/guide/guestwelcome-frigiliana-farah');

  await expect(page.locator('main h1')).toHaveText('Euer Aufenthalt bei AMARA in Frigiliana');
  const menuItems = page.locator('main nav .am-ios-item');
  await expect(menuItems).toHaveCount(3);
  await expect(menuItems.nth(0)).toContainText('Eure Unterkunft Farah');
  await expect(menuItems.nth(1)).toContainText('Wichtiges vor Ort in Frigiliana');
  await expect(menuItems.nth(2)).toContainText('Unsere persönlichen Empfehlungen');
  await expect(menuItems.nth(2)).toContainText('Versteckte Schätze');
  await expect(menuItems.nth(0)).toHaveAttribute(
    'href',
    '/de/amara-experience/guide/guesthome-frigiliana-farah'
  );
  await expect(menuItems.nth(1)).toHaveAttribute(
    'href',
    '/de/amara-experience/guide/frigiliana-guest-essentials'
  );
  await expect(page.locator('[data-am-guide-logout]')).toHaveText('Abmelden');
});

test('a legacy anonymous Guest Welcome URL redirects to the localized access page', async ({ page }) => {
  await page.goto('/de/guestwelcome-frigiliana-farah');
  await expect(page).toHaveURL(/\/de\/amara-experience\/access$/);
});
