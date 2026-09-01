import { expect, test, type Page, type Route } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

const PORT = 4326;
const ORIGIN = 'http://127.0.0.1:' + PORT;
const DESKTOP = { width: 1280, height: 900 };
const MOBILE = { width: 390, height: 844 };
const STAYS = ['farah', 'lounis', 'zaid', 'maha', 'playa', 'tarifa'];
const SEARCH_STAYS = [
  { stay: 'farah', destination: 'frigiliana', capacity: 2, nightlyRate: 121 },
  { stay: 'lounis', destination: 'frigiliana', capacity: 2, nightlyRate: 109 },
  { stay: 'zaid', destination: 'frigiliana', capacity: 2, nightlyRate: 135 },
  { stay: 'maha', destination: 'frigiliana', capacity: 2, nightlyRate: 146 },
  { stay: 'playa', destination: 'nerja', capacity: 2, nightlyRate: 173 },
  { stay: 'tarifa', destination: 'tarifa', capacity: 4, nightlyRate: 188 }
] as const;

let astroServer: Awaited<ReturnType<typeof dev>> | undefined;

test.beforeAll(async () => {
  astroServer = await dev({
    root: fileURLToPath(new URL('../../', import.meta.url)),
    server: { host: '127.0.0.1', port: PORT },
    logLevel: 'silent'
  });
});

test.afterAll(async () => {
  await astroServer?.stop();
});

const futureIso = (days: number) => {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

const enumerateDays = (start: string, end: string) => {
  const result: string[] = [];
  const current = new Date(start + 'T00:00:00.000Z');
  const last = new Date(end + 'T00:00:00.000Z');
  while (current <= last) {
    result.push(current.toISOString().slice(0, 10));
    current.setUTCDate(current.getUTCDate() + 1);
  }
  return result;
};

type GatewayOptions = {
  unavailable?: Set<string>;
  unavailableDates?: Set<string>;
  technicalError?: Set<string>;
  quoteError?: Set<string>;
};

async function mockGateway(page: Page, options: GatewayOptions = {}) {
  const requests: URL[] = [];
  await page.route('**/api/booking/**', async (route: Route) => {
    const url = new URL(route.request().url());
    requests.push(url);
    const stay = url.searchParams.get('stay') || '';
    const operation = url.pathname.split('/').pop();
    if (operation === 'search-calendar') {
      const destination = url.searchParams.get('destination') || '';
      const guests = Number(url.searchParams.get('guests'));
      const start = url.searchParams.get('start') || '';
      const end = url.searchParams.get('end') || '';
      const candidates = SEARCH_STAYS.filter((candidate) =>
        (destination === 'all' || candidate.destination === destination) &&
        candidate.capacity >= guests
      );
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          destination,
          guests,
          start,
          end,
          stays: candidates.map((candidate) => ({
            stay: candidate.stay,
            days: enumerateDays(start, end).map((date) => ({
              date,
              available:
                !options.unavailable?.has(candidate.stay) &&
                !options.unavailableDates?.has(date),
              currency: 'EUR',
              options: [{ nightlyRate: candidate.nightlyRate, minStay: 3, maxStay: 45 }]
            }))
          }))
        })
      });
      return;
    }
    if (options.technicalError?.has(stay) || (operation === 'quote' && options.quoteError?.has(stay))) {
      await route.fulfill({
        status: 502,
        contentType: 'application/json',
        body: JSON.stringify({ error: { code: 'booking_data_unavailable', message: 'Live booking data is temporarily unavailable.' } })
      });
      return;
    }
    if (operation === 'availability') {
      const start = url.searchParams.get('start') || '';
      const end = url.searchParams.get('end') || '';
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          stay,
          start,
          end,
          days: enumerateDays(start, end).map((date) => ({
            date,
            available: !options.unavailable?.has(stay)
          }))
        })
      });
      return;
    }
    if (operation === 'quote') {
      const adults = Number(url.searchParams.get('adults'));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          stay,
          arrival: url.searchParams.get('arrival'),
          departure: url.searchParams.get('departure'),
          guests: { adults, children: 0, pets: 0 },
          currency: 'EUR',
          grossTotal: 700 + STAYS.indexOf(stay) * 33
        })
      });
      return;
    }
    const start = url.searchParams.get('start') || '';
    const end = url.searchParams.get('end') || '';
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        stay,
        start,
        end,
        days: enumerateDays(start, end).map((date) => ({
          date,
          currency: 'EUR',
          options: [{ nightlyRate: 117, minStay: 1, maxStay: 45, additionalGuestsFrom: null, additionalGuestRate: 0 }]
        }))
      })
    });
  });
  return requests;
}

const searchUrl = (destination: string, arrival: string, departure: string, guests = 2) =>
  ORIGIN + '/en/find-a-stay?destination=' + destination + '&arrival=' + arrival +
  '&departure=' + departure + '&guests=' + guests;

test('homepage finder refreshes live dates for destination changes and returns quoted stays', async ({ page }) => {
  test.setTimeout(45_000);
  await page.setViewportSize(DESKTOP);
  const arrival = futureIso(3);
  const departure = futureIso(10);
  const requests = await mockGateway(page, { unavailableDates: new Set([departure]) });
  await page.goto(ORIGIN + '/en', { waitUntil: 'domcontentloaded' });
  const homeFinder = page.locator('[data-am-stay-search-variant="home"]');
  const overlayRadius = await page.locator('body').evaluate((body) => {
    const probe = document.createElement('div');
    probe.style.borderRadius = 'var(--radius-overlay)';
    body.append(probe);
    const resolvedRadius = getComputedStyle(probe).borderRadius;
    probe.remove();
    return resolvedRadius;
  });
  await expect(homeFinder).toHaveCSS('border-radius', overlayRadius);
  expect(requests).toHaveLength(0);
  await expect(page.getByRole('button', { name: 'Check availability' })).toHaveCount(0);
  await page.locator('[data-am-stay-search-destination]').selectOption('nerja');
  const submit = page.getByRole('button', { name: 'Check availability' });
  await expect(submit).toBeVisible();
  await expect(submit).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Close calendar' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Clear dates' })).toHaveCount(0);
  await expect.poll(() => requests.filter((url) => url.pathname.endsWith('/search-calendar')).length).toBe(2);
  await expect(page.locator('.am-booking-calendar__month')).toHaveCount(2);
  await expect(page.locator('[data-am-booking-day="' + arrival + '"] .am-booking-calendar__day-price')).toContainText('from');
  await expect(page.locator('[data-am-booking-day="' + arrival + '"] .am-booking-calendar__day-price')).toContainText('€173');
  await page.locator('[data-am-stay-search-destination]').selectOption('frigiliana');
  await expect.poll(() => requests.filter((url) => url.pathname.endsWith('/search-calendar')).length).toBe(4);
  await expect(page.locator('[data-am-booking-day="' + arrival + '"] .am-booking-calendar__day-price')).toContainText('€109');
  expect(requests.filter((url) => url.pathname.endsWith('/search-calendar')).map((url) =>
    url.searchParams.get('destination'))).toEqual(['nerja', 'nerja', 'frigiliana', 'frigiliana']);
  await page.locator('[data-am-booking-day="' + arrival + '"]').click();
  await expect(page.locator('.am-booking-calendar__day-price')).toHaveCount(0);
  await expect(page.locator('[data-am-booking-calendar-status]')).toContainText('Minimum stay');
  await expect(page.locator('[data-am-booking-calendar-status]')).toHaveAttribute(
    'data-am-booking-calendar-status-state',
    'minimum-stay'
  );
  const departureButton = page.locator('[data-am-booking-day="' + departure + '"]');
  await expect(departureButton).toBeEnabled();
  await departureButton.click();
  await expect(submit).toBeEnabled();
  await expect(page.locator('[data-am-booking-calendar-status]')).toContainText(
    'Your dates are set'
  );
  await page.locator('[data-am-booking-day="' + arrival + '"]').click();
  await expect(page.locator('[data-am-stay-search-departure]')).toHaveValue('');
  await expect(submit).toBeDisabled();
  await expect(departureButton).toBeEnabled();
  await departureButton.click();
  await submit.click();
  await expect(page).toHaveURL(searchUrl('frigiliana', arrival, departure));
  await expect(page.locator('[data-am-stay-result]:visible')).toHaveCount(4);
  expect(requests).toHaveLength(12);
  expect(requests.filter((url) => url.pathname.endsWith('/rates'))).toHaveLength(0);
  await expect(page.locator('[data-am-stay-result-price]:visible').first()).toContainText('€');
  const publicHtml = await page.locator('html').textContent();
  expect(publicHtml).not.toContain('Lodgify');
  expect(publicHtml).not.toContain('Provider');
});

test('candidate sets issue only availability plus quotes with controlled destination counts', async ({ page }) => {
  await page.setViewportSize(DESKTOP);
  const arrival = futureIso(20);
  const departure = futureIso(27);
  for (const [destination, expected] of [['nerja', 2], ['tarifa', 2], ['all', 12]] as const) {
    const requests = await mockGateway(page);
    await page.goto(searchUrl(destination, arrival, departure));
    const cards = destination === 'all' ? 6 : 1;
    await expect(page.locator('[data-am-stay-result]:visible')).toHaveCount(cards);
    expect(requests).toHaveLength(expected);
    expect(Math.max(...STAYS.map((stay) => requests.filter((url) => url.searchParams.get('stay') === stay).length))).toBeLessThanOrEqual(2);
    await page.unroute('**/api/booking/**');
  }
});

test('empty availability and technical failures remain distinct', async ({ page }) => {
  const arrival = futureIso(30);
  const departure = futureIso(37);
  const unavailableRequests = await mockGateway(page, { unavailable: new Set(['farah', 'lounis', 'zaid', 'maha']) });
  await page.goto(searchUrl('frigiliana', arrival, departure));
  await expect(page.locator('[data-am-stay-search-empty]')).toBeVisible();
  await expect(page.locator('[data-am-stay-search-empty-copy]')).toContainText('none of our stays');
  await expect(page.locator('[data-am-stay-search-warning]')).toBeHidden();
  expect(unavailableRequests).toHaveLength(4);

  await page.unroute('**/api/booking/**');
  const errorRequests = await mockGateway(page, { technicalError: new Set(['playa']) });
  await page.goto(searchUrl('nerja', arrival, departure));
  await expect(page.locator('[data-am-stay-search-warning]')).toBeHidden();
  await expect(page.locator('[data-am-stay-search-empty]')).toBeVisible();
  await expect(page.locator('[data-am-stay-search-empty-copy]')).toContainText('cannot load availability and prices');
  expect(errorRequests).toHaveLength(1);
});

test('result handoff preserves provider-neutral search state and primes the stay quote', async ({ page }) => {
  const arrival = futureIso(40);
  const departure = futureIso(47);
  const requests = await mockGateway(page);
  await page.goto(searchUrl('frigiliana', arrival, departure));
  const maha = page.locator('[data-am-stay-result="maha"]');
  await expect(maha).toBeVisible();
  await expect(maha.locator('[data-am-stay-booking-link]')).toHaveAttribute(
    'href',
    new RegExp('/en/la-amara-maha\\?arrival=' + arrival + '&departure=' + departure + '&guests=2')
  );
  const beforeHandoff = requests.length;
  await maha.locator('[data-am-stay-booking-link]').click();
  await expect(page).toHaveURL(new RegExp('/en/la-amara-maha\\?arrival=' + arrival + '&departure=' + departure + '&guests=2'));
  await expect.poll(() => requests.length).toBe(beforeHandoff + 1);
  expect(requests[beforeHandoff]?.pathname).toMatch(/\/quote$/);
  await expect(page.locator('[data-am-booking-arrival-value]')).not.toHaveText('Choose arrival');
  await expect(page.locator('[data-am-booking-guests]')).toHaveValue('2');
  await page.locator('[data-am-booking-arrival-trigger]').click();
  await expect.poll(() => requests.length).toBe(beforeHandoff + 5);
  expect(requests.slice(beforeHandoff + 1).every((url) =>
    url.pathname.endsWith('/availability') || url.pathname.endsWith('/rates'))).toBe(true);
});

test('mobile finder uses one month and results stay in a single column without overflow', async ({ page }) => {
  await page.setViewportSize(MOBILE);
  const requests = await mockGateway(page);
  await page.goto(ORIGIN + '/en');
  await page.getByRole('button', { name: 'Choose arrival' }).click();
  await expect(page.locator('.am-booking-calendar__month')).toHaveCount(1);
  await expect.poll(() => requests.length).toBe(1);
  expect(requests[0].pathname).toContain('/search-calendar');
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(MOBILE.width);

  await page.goto(searchUrl('nerja', futureIso(50), futureIso(57)));
  await expect(page.locator('[data-am-stay-result]:visible')).toHaveCount(1);
  const boxes = await page.locator('[data-am-stay-result]:visible').evaluateAll((items) => items.map((item) => item.getBoundingClientRect().width));
  expect(boxes[0]).toBeGreaterThan(300);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(MOBILE.width);
});

test('all five utility routes are noindex and localized without starting a search', async ({ page }) => {
  const routes = [
    ['/en/find-a-stay', 'Destination'], ['/de/find-a-stay', 'Reiseziel'],
    ['/find-a-stay', 'Destino'], ['/nl/find-a-stay', 'Bestemming'], ['/sv/find-a-stay', 'Resmål']
  ] as const;
  for (const [path, label] of routes) {
    const requests = await mockGateway(page);
    await page.goto(ORIGIN + path);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
    await expect(page.getByText(label, { exact: true }).first()).toBeVisible();
    expect(requests).toHaveLength(0);
    await page.unroute('**/api/booking/**');
  }
});
