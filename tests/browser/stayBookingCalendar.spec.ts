import { expect, test, type Page, type Route } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';

const PORT = 4324;
const ORIGIN = 'http://127.0.0.1:' + PORT;
const DESKTOP = { width: 1280, height: 900 };
const MOBILE = { width: 390, height: 844 };

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

type MockOptions = {
  blocked?: Set<string>;
  minStay?: number;
  maxStay?: number;
  calendarError?: boolean;
  quoteError?: boolean;
};

const mockGateway = async (page: Page, options: MockOptions = {}) => {
  const requests: URL[] = [];
  await page.route('**/api/booking/**', async (route: Route) => {
    const requestUrl = new URL(route.request().url());
    requests.push(requestUrl);
    const operation = requestUrl.pathname.split('/').pop();
    const stay = requestUrl.searchParams.get('stay') || '';

    if (operation === 'quote') {
      if (options.quoteError) {
        await route.fulfill({
          status: 502,
          contentType: 'application/json',
          body: JSON.stringify({
            error: {
              code: 'booking_data_unavailable',
              message: 'Live booking data is temporarily unavailable.'
            }
          })
        });
        return;
      }
      const adults = Number(requestUrl.searchParams.get('adults'));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          stay,
          arrival: requestUrl.searchParams.get('arrival'),
          departure: requestUrl.searchParams.get('departure'),
          guests: { adults, children: 0, pets: 0 },
          currency: 'EUR',
          grossTotal: 866
        })
      });
      return;
    }

    if (options.calendarError && operation === 'rates') {
      await route.fulfill({
        status: 502,
        contentType: 'application/json',
        body: JSON.stringify({
          error: {
            code: 'booking_data_unavailable',
            message: 'Live booking data is temporarily unavailable.'
          }
        })
      });
      return;
    }

    const start = requestUrl.searchParams.get('start') || '';
    const end = requestUrl.searchParams.get('end') || '';
    const days = enumerateDays(start, end);
    const payload =
      operation === 'availability'
        ? {
            stay,
            start,
            end,
            days: days.map((date) => ({
              date,
              available: !options.blocked?.has(date)
            }))
          }
        : {
            stay,
            start,
            end,
            days: days.map((date, index) => ({
              date,
              currency: 'EUR',
              options: [
                {
                  nightlyRate: index % 2 === 0 ? 117 : 129,
                  minStay: options.minStay ?? 3,
                  maxStay: options.maxStay ?? 14,
                  additionalGuestsFrom: null,
                  additionalGuestRate: 0
                }
              ]
            }))
          };
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(payload)
    });
  });
  return requests;
};

const dayButton = (page: Page, value: string) =>
  page.locator('[data-am-booking-day="' + value + '"]');

const stayCases = [
  { key: 'farah', path: '/en/la-amara-farah', name: 'Farah', occupancy: 2 },
  { key: 'lounis', path: '/en/la-amara-lounis', name: 'Lounis', occupancy: 2 },
  { key: 'zaid', path: '/en/la-amara-zaid', name: 'Zaid', occupancy: 2 },
  { key: 'maha', path: '/en/la-amara-maha', name: 'Maha', occupancy: 2 },
  { key: 'playa', path: '/en/la-amara-playa', name: 'Playa', occupancy: 2 },
  {
    key: 'tarifa',
    path: '/en/la-amara-family-and-surf',
    name: 'Family & Surf',
    occupancy: 4
  }
] as const;

test('all six property calendars stay idle on page load and request their stable stay key on open', async ({
  page
}) => {
  test.setTimeout(60_000);
  await page.setViewportSize(MOBILE);
  const requests = await mockGateway(page);

  for (const stay of stayCases) {
    const requestCountBeforePageLoad = requests.length;
    await page.goto(ORIGIN + stay.path, { waitUntil: 'domcontentloaded' });
    expect(requests).toHaveLength(requestCountBeforePageLoad);

    const calendar = page.locator('[data-am-stay-booking-calendar]');
    await expect(calendar).toHaveAttribute('data-am-booking-stay', stay.key);
    await expect(calendar.getByRole('heading', { level: 2 })).toContainText(stay.name);
    await expect(calendar.locator('[data-am-booking-guests] option')).toHaveCount(stay.occupancy);

    await page.getByRole('button', { name: 'Choose arrival' }).click();
    await expect.poll(() => requests.length).toBe(requestCountBeforePageLoad + 2);
    for (const request of requests.slice(requestCountBeforePageLoad)) {
      expect(request.searchParams.get('stay')).toBe(stay.key);
    }
  }
});

test('desktop calendar loads only on open, enforces stay rules and quotes a valid range', async ({
  page
}) => {
  await page.setViewportSize(DESKTOP);
  const arrival = futureIso(3);
  const blocked = futureIso(10);
  const requests = await mockGateway(page, { blocked: new Set([blocked]), minStay: 3 });

  await page.goto(ORIGIN + '/en/la-amara-maha', { waitUntil: 'domcontentloaded' });
  expect(requests).toHaveLength(0);

  await page.getByRole('button', { name: 'Choose arrival' }).click();
  await expect(page.locator('[data-am-booking-calendar]')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close calendar' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Start over' })).toBeDisabled();
  await expect(page.locator('[data-am-booking-month]')).toHaveCount(2);
  await expect.poll(() => requests.length).toBe(4);
  expect(requests.filter((request) => request.pathname.endsWith('/availability'))).toHaveLength(2);
  expect(requests.filter((request) => request.pathname.endsWith('/rates'))).toHaveLength(2);
  await page.getByRole('button', { name: 'Close calendar' }).click();
  await expect(page.locator('[data-am-booking-calendar]')).toBeHidden();
  await page.getByRole('button', { name: 'Choose arrival' }).click();
  expect(requests).toHaveLength(4);

  const blockedButton = dayButton(page, blocked);
  await expect(blockedButton).toBeDisabled();
  await expect(blockedButton.locator('.am-booking-calendar__day-price')).toHaveCount(0);

  const arrivalButton = dayButton(page, arrival);
  await expect(arrivalButton).toBeEnabled();
  const pricePrefix = arrivalButton.locator('.am-booking-calendar__day-price-prefix');
  const priceAmount = arrivalButton.locator('.am-booking-calendar__day-price-amount');
  await expect(pricePrefix).toHaveText('from');
  await expect(priceAmount).toContainText('€');
  const [prefixBox, amountBox] = await Promise.all([
    pricePrefix.boundingBox(),
    priceAmount.boundingBox()
  ]);
  expect(prefixBox?.y).toBeLessThan(amountBox?.y ?? 0);
  await arrivalButton.click();

  await expect(arrivalButton).toHaveAttribute('data-range', 'start');
  await expect(arrivalButton).toHaveAttribute('data-am-booking-day-state', 'selected');
  await expect(arrivalButton).toHaveAttribute('aria-label', /selected arrival/);
  const earlierArrivalButton = dayButton(page, futureIso(2));
  await expect(earlierArrivalButton).toBeEnabled();
  await expect(earlierArrivalButton).toHaveAttribute('data-am-booking-selection', 'arrival');
  await earlierArrivalButton.click();
  await expect(page.locator('[data-am-booking-arrival]')).toHaveValue(futureIso(2));
  await expect(page.locator('[data-am-booking-departure]')).toHaveValue('');
  await page.getByRole('button', { name: 'Start over' }).click();
  await expect(page.locator('[data-am-booking-arrival]')).toHaveValue('');
  await expect(page.getByRole('button', { name: 'Start over' })).toBeDisabled();
  await arrivalButton.click();
  await expect(page.locator('[data-am-booking-calendar-status]')).toContainText(
    'Minimum stay from this arrival: 3 nights'
  );
  await expect(dayButton(page, futureIso(4))).toBeEnabled();
  await expect(dayButton(page, futureIso(5))).toBeEnabled();
  await expect(dayButton(page, futureIso(4))).toHaveAttribute(
    'data-am-booking-day-state',
    'restricted'
  );
  await expect(dayButton(page, futureIso(4))).toHaveAttribute(
    'data-am-booking-restriction',
    'minimum-stay'
  );
  await expect(dayButton(page, futureIso(4))).toHaveAttribute('aria-label', /available/);
  await expect(
    dayButton(page, futureIso(4)).locator('.am-booking-calendar__day-number')
  ).toHaveCSS('text-decoration-line', 'none');
  await expect(dayButton(page, futureIso(6))).toBeEnabled();
  await expect(dayButton(page, futureIso(11))).toBeDisabled();
  await expect(dayButton(page, blocked)).toBeEnabled();
  await expect(dayButton(page, blocked)).toHaveAttribute('aria-label', /available/);
  await expect(
    dayButton(page, blocked).locator('.am-booking-calendar__day-number')
  ).toHaveCSS('text-decoration-line', 'none');

  await dayButton(page, futureIso(4)).click();
  await expect(page.locator('[data-am-booking-calendar-status]')).toContainText(
    'A minimum stay of 3 nights applies'
  );
  await expect(page.locator('[data-am-booking-calendar-status]')).toContainText(
    'Please choose a departure on or after'
  );
  await expect(page.locator('[data-am-booking-departure]')).toHaveValue('');
  expect(requests.filter((request) => request.pathname.endsWith('/quote'))).toHaveLength(0);

  await dayButton(page, futureIso(6)).focus();
  await page.keyboard.press('ArrowRight');
  await expect(dayButton(page, futureIso(7))).toBeFocused();

  await dayButton(page, futureIso(6)).click();
  await expect.poll(() => requests.filter((request) => request.pathname.endsWith('/quote')).length).toBe(1);
  await expect(page.locator('[data-am-booking-result]')).toHaveAttribute(
    'data-state',
    'available'
  );
  await expect(page.locator('[data-am-booking-price]')).toContainText('866');
  await expect(page.locator('[data-am-booking-checkout]')).toHaveAttribute(
    'href',
    new RegExp('/api/booking/checkout\\?stay=maha&lang=en&arrival=' + arrival + '&departure=' + futureIso(6) + '&adults=2&currency=EUR')
  );
  await expect(dayButton(page, arrival)).toHaveAttribute('data-range', 'start');
  await expect(dayButton(page, futureIso(6))).toHaveAttribute('data-range', 'end');
  await dayButton(page, futureIso(7)).click();
  await expect(page.locator('[data-am-booking-arrival]')).toHaveValue(futureIso(7));
  await expect(page.locator('[data-am-booking-departure]')).toHaveValue('');
  await expect(page.locator('[data-am-booking-result]')).toBeHidden();

  const publicMarkup = await page.content();
  expect(publicMarkup).not.toContain('408325');
  expect(publicMarkup).not.toContain('474288');
  expect(publicMarkup).not.toContain('LODGIFY_API_KEY');
  expect(publicMarkup).not.toContain('X-ApiKey');
});

test('month navigation requests only the newly visible month and reuses session state', async ({
  page
}) => {
  await page.setViewportSize(DESKTOP);
  const requests = await mockGateway(page);
  await page.goto(ORIGIN + '/de/la-amara-maha', { waitUntil: 'domcontentloaded' });

  await page.getByRole('button', { name: 'Anreise wählen' }).click();
  await expect.poll(() => requests.length).toBe(4);

  await page.getByRole('button', { name: 'Nächster Monat' }).click();
  await expect.poll(() => requests.length).toBe(6);

  await page.getByRole('button', { name: 'Vorheriger Monat' }).click();
  await page.getByRole('button', { name: 'Nächster Monat' }).click();
  expect(requests).toHaveLength(6);
});

test('mobile calendar shows one full-width month without horizontal overflow', async ({
  page
}) => {
  await page.setViewportSize(MOBILE);
  const requests = await mockGateway(page);
  await page.goto(ORIGIN + '/nl/la-amara-maha', { waitUntil: 'domcontentloaded' });
  await page.locator('[data-am-consent-choice="necessary"]').click();

  await page.getByRole('button', { name: 'Aankomst kiezen' }).click();
  await expect.poll(() => requests.length).toBe(2);
  await expect(page.locator('[data-am-booking-month]')).toHaveCount(1);

  const firstAvailableDay = page.locator('button[data-am-booking-day]:enabled').first();
  const pricePrefix = firstAvailableDay.locator('.am-booking-calendar__day-price-prefix');
  const priceAmount = firstAvailableDay.locator('.am-booking-calendar__day-price-amount');
  await expect(pricePrefix).toHaveText('vanaf');
  const [prefixBox, amountBox] = await Promise.all([
    pricePrefix.boundingBox(),
    priceAmount.boundingBox()
  ]);
  expect(prefixBox?.y).toBeLessThan(amountBox?.y ?? 0);

  const measurements = await page.locator('[data-am-booking-calendar]').evaluate((calendar) => {
    const firstDay = calendar.querySelector<HTMLElement>('[data-am-booking-day]');
    return {
      calendarWidth: calendar.scrollWidth,
      calendarClientWidth: calendar.clientWidth,
      dayHeight: firstDay?.getBoundingClientRect().height ?? 0,
      pageWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth
    };
  });
  expect(measurements.calendarWidth).toBeLessThanOrEqual(measurements.calendarClientWidth);
  expect(measurements.pageWidth).toBeLessThanOrEqual(measurements.viewportWidth);
  expect(measurements.dayHeight).toBeGreaterThanOrEqual(44);
});

test('calendar and quote failures stay generic and never retry automatically', async ({ page }) => {
  await page.setViewportSize(MOBILE);
  const calendarRequests = await mockGateway(page, { calendarError: true });
  await page.goto(ORIGIN + '/sv/la-amara-maha', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Välj ankomst' }).click();
  await expect(page.locator('[data-am-booking-calendar-status]')).toContainText(
    'Vi kan inte läsa in kalendern just nu'
  );
  expect(calendarRequests).toHaveLength(2);
  await page.mouse.click(5, 5);
  await expect(page.locator('[data-am-booking-calendar]')).toBeHidden();
  await page.getByRole('button', { name: 'Välj ankomst' }).click();
  expect(calendarRequests).toHaveLength(2);
});

test('a failed quote exposes only the localized generic error and is not retried', async ({
  page
}) => {
  await page.setViewportSize(DESKTOP);
  const requests = await mockGateway(page, { quoteError: true });
  await page.goto(ORIGIN + '/en/la-amara-maha', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Choose arrival' }).click();
  await dayButton(page, futureIso(3)).click();
  await dayButton(page, futureIso(6)).click();

  await expect(page.locator('[data-am-booking-result]')).toHaveAttribute('data-state', 'error');
  await expect(page.locator('[data-am-booking-result]')).toContainText(
    'We cannot load availability and the total price right now'
  );
  await expect(page.getByRole('link', { name: 'Open the booking page' })).toHaveCount(0);
  expect(requests.filter((request) => request.pathname.endsWith('/quote'))).toHaveLength(1);
});

test('all five locales expose native calendar labels and localized total-price language', async ({
  page
}) => {
  const cases = [
    ['/en/la-amara-maha', 'Choose arrival', 'Current total price'],
    ['/de/la-amara-maha', 'Anreise wählen', 'Aktueller Gesamtpreis'],
    ['/la-amara-maha', 'Elegir llegada', 'Precio total actual'],
    ['/nl/la-amara-maha', 'Aankomst kiezen', 'Actuele totaalprijs'],
    ['/sv/la-amara-maha', 'Välj ankomst', 'Aktuellt totalpris']
  ];
  const requests = await mockGateway(page);

  for (const [path, arrivalLabel, noteFragment] of cases) {
    await page.goto(ORIGIN + path, { waitUntil: 'domcontentloaded' });
    await expect(page.getByRole('button', { name: arrivalLabel })).toBeVisible();
    const copy = await page
      .locator('[data-am-stay-booking-calendar]')
      .getAttribute('data-am-booking-copy');
    expect(copy).toContain(noteFragment);
  }
  expect(requests).toHaveLength(0);
});
