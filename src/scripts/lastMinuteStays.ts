type RateOption = {
  nightlyRate: number;
  minStay: number | null;
  maxStay: number | null;
};

type CalendarDay = {
  date: string;
  available: boolean;
};

type RateDay = {
  date: string;
  currency: string;
  options: RateOption[];
};

type Candidate = {
  arrival: string;
  departure: string;
  nights: number;
  arrivalIndex: number;
  score: [number, number, number, number];
};

type RequestFailure = Error & { status?: number; code?: string };

const WINDOW_DAYS = 21;
const CONCURRENCY = 2;

const isoDay = (date: Date) => date.toISOString().slice(0, 10);
const addDays = (value: string, amount: number) => {
  const date = new Date(value + 'T00:00:00.000Z');
  date.setUTCDate(date.getUTCDate() + amount);
  return isoDay(date);
};

async function fetchJson(pathname: string, params: URLSearchParams) {
  const response = await fetch(pathname + '?' + params.toString(), {
    method: 'GET',
    headers: { Accept: 'application/json' }
  });
  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    payload = undefined;
  }
  if (!response.ok) {
    const source = payload as { error?: { code?: unknown } } | undefined;
    const error = new Error('Last-minute stay request failed.') as RequestFailure;
    error.status = response.status;
    if (typeof source?.error?.code === 'string') error.code = source.error.code;
    throw error;
  }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('Last-minute stay response contract failed.');
  }
  return payload as Record<string, unknown>;
}

async function runWithConcurrency<T>(items: T[], worker: (item: T) => Promise<void>) {
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
      while (next < items.length) {
        const item = items[next++];
        await worker(item);
      }
    })
  );
}

const validRateOption = (value: unknown): value is RateOption => {
  const option = value as Partial<RateOption> | null;
  return (
    Number.isFinite(option?.nightlyRate) &&
    Number(option?.nightlyRate) >= 0 &&
    (option?.minStay === null ||
      (Number.isInteger(option?.minStay) && Number(option?.minStay) >= 0)) &&
    (option?.maxStay === null ||
      (Number.isInteger(option?.maxStay) && Number(option?.maxStay) >= 0))
  );
};

function parseAvailability(
  payload: Record<string, unknown>,
  stay: string,
  start: string,
  end: string
): CalendarDay[] {
  const days = payload.days as Array<{ date?: unknown; available?: unknown }> | undefined;
  const expected = Array.from({ length: WINDOW_DAYS + 1 }, (_, index) => addDays(start, index));
  if (
    payload.stay !== stay ||
    payload.start !== start ||
    payload.end !== end ||
    !Array.isArray(days) ||
    days.length !== expected.length ||
    !days.every(
      (day, index) => day.date === expected[index] && typeof day.available === 'boolean'
    )
  ) {
    throw new Error('Availability contract failed.');
  }
  return days as CalendarDay[];
}

function parseRates(
  payload: Record<string, unknown>,
  stay: string,
  start: string,
  end: string
): RateDay[] {
  const days = payload.days as
    | Array<{ date?: unknown; currency?: unknown; options?: unknown }>
    | undefined;
  const expected = Array.from({ length: WINDOW_DAYS + 1 }, (_, index) => addDays(start, index));
  if (
    payload.stay !== stay ||
    payload.start !== start ||
    payload.end !== end ||
    !Array.isArray(days) ||
    days.length !== expected.length ||
    !days.every(
      (day, index) =>
        day.date === expected[index] &&
        typeof day.currency === 'string' &&
        Array.isArray(day.options) &&
        day.options.every(validRateOption)
    )
  ) {
    throw new Error('Rates contract failed.');
  }
  return days as RateDay[];
}

function hasPotentialStay(days: CalendarDay[]) {
  let continuous = 0;
  for (const day of days) {
    continuous = day.available ? continuous + 1 : 0;
    if (continuous >= 2) return true;
  }
  return false;
}

function optionAllows(option: RateOption, nights: number) {
  const minimum = option.minStay && option.minStay > 0 ? option.minStay : 1;
  const maximum = option.maxStay && option.maxStay > 0 ? option.maxStay : WINDOW_DAYS;
  return minimum <= maximum && nights >= minimum && nights <= maximum;
}

function chooseCandidate(availability: CalendarDay[], rates: RateDay[]): Candidate | undefined {
  const candidates: Candidate[] = [];
  for (let arrivalIndex = 0; arrivalIndex < availability.length - 1; arrivalIndex += 1) {
    if (!availability[arrivalIndex]?.available) continue;
    const rateDay = rates[arrivalIndex];
    if (!rateDay || rateDay.date !== availability[arrivalIndex].date || !rateDay.options.length) {
      continue;
    }

    let maximumNights = 0;
    for (let departureIndex = arrivalIndex + 1; departureIndex < availability.length; departureIndex += 1) {
      if (!availability[departureIndex]?.available) break;
      maximumNights = departureIndex - arrivalIndex;
    }

    for (let nights = 1; nights <= maximumNights; nights += 1) {
      if (!rateDay.options.some((option) => optionAllows(option, nights))) continue;
      const practicalLength = nights >= 3 && nights <= 5 ? 0 : Math.min(Math.abs(nights - 4), 10);
      candidates.push({
        arrival: availability[arrivalIndex].date,
        departure: availability[arrivalIndex + nights].date,
        nights,
        arrivalIndex,
        score: [arrivalIndex < 14 ? 0 : 1, practicalLength, arrivalIndex, nights]
      });
    }
  }

  return candidates.sort((left, right) => {
    for (let index = 0; index < left.score.length; index += 1) {
      const difference = left.score[index] - right.score[index];
      if (difference !== 0) return difference;
    }
    return 0;
  })[0];
}

export function enhanceLastMinuteStays() {
  document.querySelectorAll<HTMLElement>('[data-am-last-minute-stays]').forEach((root) => {
    if (root.dataset.amLastMinuteEnhanced === 'true') return;
    root.dataset.amLastMinuteEnhanced = 'true';

    const copy = JSON.parse(root.dataset.amLastMinuteCopy || '{}') as Record<string, string>;
    const language = root.dataset.amLastMinuteLanguage || 'en-GB';
    const guestsInput = root.querySelector<HTMLSelectElement>('[data-am-last-minute-guests]');
    const status = root.querySelector<HTMLElement>('[data-am-last-minute-status]');
    const warning = root.querySelector<HTMLElement>('[data-am-last-minute-warning]');
    const results = root.querySelector<HTMLElement>('[data-am-last-minute-results]');
    const empty = root.querySelector<HTMLElement>('[data-am-last-minute-empty]');
    const error = root.querySelector<HTMLElement>('[data-am-last-minute-error]');
    const cards = [...root.querySelectorAll<HTMLElement>('[data-am-stay-result]')];
    if (!guestsInput || !status || !warning || !results || !empty || !error) return;

    let runId = 0;
    const formatDate = (value: string) =>
      new Intl.DateTimeFormat(language, {
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC'
      }).format(new Date(value + 'T00:00:00.000Z'));
    const countLabel = (key: 'night' | 'nights' | 'guest' | 'guestsPlural', count: number) =>
      copy[key].replace('{count}', String(count));
    const reset = () => {
      warning.hidden = true;
      results.hidden = true;
      empty.hidden = true;
      error.hidden = true;
      for (const card of cards) {
        card.hidden = true;
        card.querySelector<HTMLElement>('[data-am-stay-result-summary]')?.setAttribute('hidden', '');
        card.querySelector<HTMLElement>('[data-am-stay-result-price-wrap]')?.setAttribute('hidden', '');
      }
    };

    const loadOffers = async () => {
      const activeRun = ++runId;
      const guests = Number(guestsInput.value);
      const start = isoDay(new Date());
      const end = addDays(start, WINDOW_DAYS);
      reset();
      root.setAttribute('aria-busy', 'true');
      status.textContent = copy.loading;
      const availableCards: HTMLElement[] = [];
      let technicalFailures = 0;
      const eligibleCards = cards.filter(
        (card) => Number(card.dataset.amStayOccupancy) >= guests
      );

      await runWithConcurrency(eligibleCards, async (card) => {
        const stay = card.dataset.amStayResult || '';
        try {
          const calendarParams = new URLSearchParams({ stay, start, end });
          const availabilityPayload = await fetchJson(
            '/api/booking/availability',
            calendarParams
          );
          const availability = parseAvailability(availabilityPayload, stay, start, end);
          if (!hasPotentialStay(availability)) return;

          const ratesPayload = await fetchJson('/api/booking/rates', calendarParams);
          const rates = parseRates(ratesPayload, stay, start, end);
          const candidate = chooseCandidate(availability, rates);
          if (!candidate) return;

          const quote = await fetchJson(
            '/api/booking/quote',
            new URLSearchParams({
              stay,
              arrival: candidate.arrival,
              departure: candidate.departure,
              adults: String(guests),
              children: '0',
              pets: '0'
            })
          );
          const quoteGuests = quote.guests as
            | { adults?: unknown; children?: unknown; pets?: unknown }
            | undefined;
          if (
            quote.stay !== stay ||
            quote.arrival !== candidate.arrival ||
            quote.departure !== candidate.departure ||
            quoteGuests?.adults !== guests ||
            quoteGuests.children !== 0 ||
            quoteGuests.pets !== 0 ||
            typeof quote.currency !== 'string' ||
            !Number.isFinite(quote.grossTotal)
          ) {
            throw new Error('Quote contract failed.');
          }
          if (activeRun !== runId) return;

          const summary = card.querySelector<HTMLElement>('[data-am-stay-result-summary]');
          const priceWrap = card.querySelector<HTMLElement>('[data-am-stay-result-price-wrap]');
          const price = card.querySelector<HTMLElement>('[data-am-stay-result-price]');
          if (!summary || !priceWrap || !price) throw new Error('Offer card contract failed.');
          summary.textContent = [
            formatDate(candidate.arrival) + ' – ' + formatDate(candidate.departure),
            countLabel(candidate.nights === 1 ? 'night' : 'nights', candidate.nights),
            countLabel(guests === 1 ? 'guest' : 'guestsPlural', guests)
          ].join(' · ');
          price.textContent = new Intl.NumberFormat(language, {
            style: 'currency',
            currency: String(quote.currency)
          }).format(Number(quote.grossTotal));
          card.querySelectorAll<HTMLAnchorElement>('[data-am-stay-result-link]').forEach((link) => {
            const base = link.dataset.amStayResultBaseHref || link.getAttribute('href') || '';
            link.href =
              base +
              (base.includes('?') ? '&' : '?') +
              new URLSearchParams({
                arrival: candidate.arrival,
                departure: candidate.departure,
                guests: String(guests)
              }).toString();
          });
          card.hidden = false;
          summary.hidden = false;
          priceWrap.hidden = false;
          availableCards.push(card);
        } catch {
          technicalFailures += 1;
        }
      });

      if (activeRun !== runId) return;
      root.setAttribute('aria-busy', 'false');
      const guestText = countLabel(guests === 1 ? 'guest' : 'guestsPlural', guests);
      if (availableCards.length > 0) {
        results.hidden = false;
        warning.hidden = technicalFailures === 0;
        status.textContent = copy.ready.replace('{guests}', guestText);
      } else if (technicalFailures > 0) {
        error.hidden = false;
        status.textContent = '';
      } else {
        empty.hidden = false;
        status.textContent = '';
      }
    };

    guestsInput.addEventListener('change', () => void loadOffers());
    void loadOffers();
  });
}
