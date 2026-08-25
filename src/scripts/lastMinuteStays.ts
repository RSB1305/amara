
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
  window: AvailabilityWindow;
  score: [number, number, number, number];
};

type AvailabilityWindow = {
  arrival: string;
  departure: string;
  nights: number;
  startIndex: number;
  endIndex: number;
};

type CandidateWindow = {
  window: AvailabilityWindow;
  candidates: Candidate[];
  score: Candidate['score'];
};

type RequestFailure = Error & { status?: number; code?: string };

const WINDOW_DAYS = 21;
const CONCURRENCY = 2;
const MAX_PUBLIC_OFFERS = 4;
const MAX_QUOTE_ATTEMPTS_PER_STAY = 8;

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

function availabilityWindows(days: CalendarDay[]): AvailabilityWindow[] {
  const windows: AvailabilityWindow[] = [];
  let index = 0;
  while (index < days.length) {
    if (!days[index]?.available) {
      index += 1;
      continue;
    }
    const startIndex = index;
    while (index + 1 < days.length && days[index + 1]?.available) index += 1;
    const endIndex = index;
    windows.push({
      arrival: days[startIndex].date,
      departure: addDays(days[endIndex].date, 1),
      nights: endIndex - startIndex + 1,
      startIndex,
      endIndex
    });
    index += 1;
  }
  return windows;
}

function optionAllows(option: RateOption, nights: number) {
  const minimum = option.minStay && option.minStay > 0 ? option.minStay : 1;
  const maximum = option.maxStay && option.maxStay > 0 ? option.maxStay : WINDOW_DAYS;
  return minimum <= maximum && nights >= minimum && nights <= maximum;
}

function compareScore(left: Candidate['score'], right: Candidate['score']) {
  for (let index = 0; index < left.length; index += 1) {
    const difference = left[index] - right[index];
    if (difference !== 0) return difference;
  }
  return 0;
}

function candidateWindows(availability: CalendarDay[], rates: RateDay[]): CandidateWindow[] {
  return availabilityWindows(availability)
    .flatMap((window) => {
      const candidates: Candidate[] = [];
      for (let arrivalIndex = window.startIndex; arrivalIndex <= window.endIndex; arrivalIndex += 1) {
        const rateDay = rates[arrivalIndex];
        if (!rateDay || rateDay.date !== availability[arrivalIndex].date || !rateDay.options.length) {
          continue;
        }
        const maximumNights = window.endIndex - arrivalIndex + 1;
        for (let nights = 1; nights <= maximumNights; nights += 1) {
          if (!rateDay.options.some((option) => optionAllows(option, nights))) continue;
          const practicalLength = nights >= 3 && nights <= 5
            ? 0
            : Math.min(Math.abs(nights - 4), 10);
          candidates.push({
            arrival: availability[arrivalIndex].date,
            departure: addDays(availability[arrivalIndex].date, nights),
            nights,
            arrivalIndex,
            window,
            score: [practicalLength, arrivalIndex < 14 ? 0 : 1, arrivalIndex, nights]
          });
        }
      }
      if (!candidates.length) return [];
      candidates.sort((left, right) => left.nights - right.nights || left.arrivalIndex - right.arrivalIndex);
      const score = candidates.reduce(
        (best, candidate) => compareScore(candidate.score, best) < 0 ? candidate.score : best,
        candidates[0].score
      );
      return [{ window, candidates, score }];
    }
    )
    .sort((left, right) => compareScore(left.score, right.score));
}

export function enhanceLastMinuteStays() {
  document.querySelectorAll<HTMLElement>('[data-am-last-minute-stays]').forEach((root) => {
    if (root.dataset.amLastMinuteEnhanced === 'true') return;
    root.dataset.amLastMinuteEnhanced = 'true';

    const copy = JSON.parse(root.dataset.amLastMinuteCopy || '{}') as Record<string, string>;
    const language = root.dataset.amLastMinuteLanguage || 'en-GB';
    const guestsInput = root.querySelector<HTMLSelectElement>('[data-am-last-minute-guests]');
    const status = root.querySelector<HTMLElement>('[data-am-last-minute-status]');
    const results = root.querySelector<HTMLElement>('[data-am-last-minute-results]');
    const empty = root.querySelector<HTMLElement>('[data-am-last-minute-empty]');
    const error = root.querySelector<HTMLElement>('[data-am-last-minute-error]');
    const cards = [...root.querySelectorAll<HTMLElement>('[data-am-stay-result]')];
    if (!guestsInput || !status || !results || !empty || !error) return;

    let runId = 0;
    const formatDate = (value: string) =>
      new Intl.DateTimeFormat(language, {
        day: 'numeric',
        month: 'long',
        timeZone: 'UTC'
      }).format(new Date(value + 'T00:00:00.000Z'));
    const countLabel = (
      key: 'night' | 'nights' | 'guest' | 'guestsPlural' | 'fromNight' | 'fromNights',
      count: number
    ) =>
      copy[key].replace('{count}', String(count));
    const reset = () => {
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
      const offers: Array<{
        card: HTMLElement;
        candidate: Candidate;
        currency: string;
        grossTotal: number;
      }> = [];
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
          const ratesPayload = await fetchJson('/api/booking/rates', calendarParams);
          const rates = parseRates(ratesPayload, stay, start, end);
          const windows = candidateWindows(availability, rates);
          let quoteAttempts = 0;
          for (const window of windows) {
            for (const candidate of window.candidates) {
              if (quoteAttempts >= MAX_QUOTE_ATTEMPTS_PER_STAY) break;
              quoteAttempts += 1;
              try {
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
                offers.push({
                  card,
                  candidate,
                  currency: String(quote.currency),
                  grossTotal: Number(quote.grossTotal)
                });
                return;
              } catch {
                // A rate-permitted combination can still be rejected by the live quote.
                // Continue within the selected availability window before hiding the stay.
              }
            }
            if (quoteAttempts >= MAX_QUOTE_ATTEMPTS_PER_STAY) break;
          }
          if (quoteAttempts > 0) technicalFailures += 1;
        } catch {
          technicalFailures += 1;
        }
      });

      if (activeRun !== runId) return;
      root.setAttribute('aria-busy', 'false');
      const guestText = countLabel(guests === 1 ? 'guest' : 'guestsPlural', guests);
      const selectedOffers = offers
        .sort((left, right) => compareScore(left.candidate.score, right.candidate.score))
        .slice(0, MAX_PUBLIC_OFFERS);
      for (const offer of selectedOffers) {
        const { card, candidate } = offer;
        const summary = card.querySelector<HTMLElement>('[data-am-stay-result-summary]');
        const priceWrap = card.querySelector<HTMLElement>('[data-am-stay-result-price-wrap]');
        const price = card.querySelector<HTMLElement>('[data-am-stay-result-price]');
        if (!summary || !priceWrap || !price) continue;
        const windowDates = formatDate(candidate.window.arrival) + ' – ' + formatDate(candidate.window.departure);
        const candidateDates = formatDate(candidate.arrival) + ' – ' + formatDate(candidate.departure);
        const summaryParts = [
          `${copy.availableWindow} ${windowDates}`,
          countLabel(candidate.nights === 1 ? 'fromNight' : 'fromNights', candidate.nights)
        ];
        if (candidate.window.arrival !== candidate.arrival || candidate.window.departure !== candidate.departure) {
          summaryParts.push(`${copy.exampleStay} ${candidateDates}`);
        }
        summaryParts.push(guestText);
        summary.textContent = summaryParts.join(' · ');
        price.textContent = new Intl.NumberFormat(language, {
          style: 'currency',
          currency: offer.currency
        }).format(offer.grossTotal);
        // The card names an availability window and one example stay inside it.
        // Sending that example straight into checkout would fix dates the guest
        // never chose, so every link carries them to the stay page instead,
        // where the booking module opens on them and they stay changeable.
        const withDates = (base: string) =>
          base +
          (base.includes('?') ? '&' : '?') +
          new URLSearchParams({
            arrival: candidate.arrival,
            departure: candidate.departure,
            guests: String(guests)
          }).toString();
        card.querySelectorAll<HTMLAnchorElement>('[data-am-stay-result-link]').forEach((link) => {
          link.href = withDates(link.dataset.amStayResultBaseHref || link.getAttribute('href') || '');
        });
        const bookingLink = card.querySelector<HTMLAnchorElement>('[data-am-stay-booking-link]');
        if (!bookingLink) continue;
        bookingLink.href = withDates(
          bookingLink.dataset.amStayResultBaseHref || bookingLink.getAttribute('href') || ''
        );
        card.hidden = false;
        summary.hidden = false;
        priceWrap.hidden = false;
      }
      if (selectedOffers.length > 0) {
        results.hidden = false;
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
