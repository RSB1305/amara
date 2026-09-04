import { expect, test } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

let astroServer: Awaited<ReturnType<typeof dev>> | undefined;

test.beforeAll(async () => {
  // Keep the server in the test worker instead of a shell child process. This
  // gives Playwright one deterministic lifecycle on Windows and Linux alike.
  astroServer = await dev({
    root: fileURLToPath(new URL('../../', import.meta.url)),
    server: {
      host: '127.0.0.1',
      port: 4322
    },
    logLevel: 'silent'
  });
});

test.afterAll(async () => {
  await astroServer?.stop();
});

test('the route map dialog supports close button, Escape and a real backdrop click', async ({
  page
}) => {
  // The image pipeline has its own build gate; this interaction test only needs
  // the DOM and must not wait for every large responsive image on a cold CI run.
  await page.goto('/frigiliana/llegada-al-apartamento', { waitUntil: 'domcontentloaded' });

  const opener = page.locator('[data-am-map-open]');
  const dialog = page.locator('[data-am-map-overlay]');
  const panel = page.locator('[data-am-map-panel]');
  const closer = page.locator('[data-am-map-close]');

  await opener.scrollIntoViewIfNeeded();
  await opener.click();
  await expect(dialog).toHaveAttribute('open', '');
  await expect(closer).toBeFocused();

  await panel.click({ position: { x: 20, y: 80 } });
  await expect(dialog).toHaveAttribute('open', '');

  await closer.click();
  await expect(dialog).not.toHaveAttribute('open', '');
  await expect(opener).toBeFocused();

  await opener.click();
  await page.keyboard.press('Escape');
  await expect(dialog).not.toHaveAttribute('open', '');
  await expect(opener).toBeFocused();

  await opener.click();
  await expect(dialog).toHaveAttribute('open', '');
  await page.mouse.click(5, 5);
  await expect(dialog).not.toHaveAttribute('open', '');
  await expect(opener).toBeFocused();
});
