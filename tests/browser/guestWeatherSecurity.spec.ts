import { expect, test } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

const validDay = '2026-08-28';
const validTime = `${validDay}T12:00`;
const PORT = 4327;
const ORIGIN = `http://127.0.0.1:${PORT}`;
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

test('Guest weather rejects a provider time field containing HTML', async ({ page }) => {
  await page.route('https://api.open-meteo.com/**', async (route) => {
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        current: {
          time: '<img data-provider-injection src=x>',
          temperature_2m: 24,
          weather_code: 1,
          uv_index: 4,
          wind_speed_10m: 10
        },
        hourly: {
          time: [validTime],
          temperature_2m: [24],
          weather_code: [1],
          wind_speed_10m: [10]
        },
        daily: {
          time: [validDay],
          temperature_2m_min: [18],
          temperature_2m_max: [27],
          weather_code: [1],
          wind_speed_10m_max: [16]
        }
      })
    });
  });

  await page.goto(`${ORIGIN}/guia-huesped/frigiliana/experience`);

  await expect(page.locator('[data-provider-injection]')).toHaveCount(0);
  await expect(page.locator('[data-weather-temp]')).toHaveText('--°');
});
