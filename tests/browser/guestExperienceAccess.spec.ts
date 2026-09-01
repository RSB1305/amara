import { expect, test } from '@playwright/test';

test('the public AMARA Experience landing links to a separate guest access page', async ({ page }) => {
  await page.goto('/de/amara-experience');
  const access = page.locator('[data-am-component="amara-experience-access"]');
  await expect(access.locator('form')).toHaveCount(0);
  await expect(access.locator('a[href="/de/amara-experience/access"]')).toBeVisible();
});

test('the guest access page stays focused on booking verification', async ({ page }) => {
  await page.goto('/de/amara-experience/access');

  await expect(page.locator('main h1')).toHaveText('AMARA Experience');
  await expect(page.locator('main')).toContainText(
    'Gebt den Vornamen der Buchung sowie An- und Abreisedatum ein.'
  );
  await expect(page.locator('main .am-text-eyebrow')).toHaveCount(0);
  await expect(page.locator('[data-am-experience-form]')).toBeVisible();
  await expect(page.getByLabel('Vorname der Buchung')).toBeVisible();
  await expect(page.locator('input[name="arrival"]')).toHaveCount(1);
  await expect(page.locator('input[name="departure"]')).toHaveCount(1);
  await expect(page.locator('header nav')).toHaveCount(0);
  await expect(page.locator('footer')).toHaveCount(0);
});

test('the protected Guest Welcome hub contains only the stay and AMARA Experience worlds', async ({ page }) => {
  await page.goto('/de/amara-experience/guide/guestwelcome-frigiliana-farah');

  const menuItems = page.locator('main nav .am-ios-item');
  await expect(menuItems).toHaveCount(2);
  await expect(menuItems.nth(0)).toContainText('Eure Unterkunft Farah');
  await expect(menuItems.nth(1)).toContainText('AMARA Experience');
  await expect(menuItems.nth(1)).toContainText('Versteckte Schätze');
  await expect(menuItems.nth(0)).toHaveAttribute(
    'href',
    '/de/amara-experience/guide/guesthome-frigiliana-farah'
  );
  await expect(page.locator('[data-am-guide-logout]')).toHaveText('Abmelden');
});

test('a legacy anonymous Guest Welcome URL redirects to the localized access page', async ({ page }) => {
  await page.goto('/de/guestwelcome-frigiliana-farah');
  await expect(page).toHaveURL(/\/de\/amara-experience\/access$/);
});
