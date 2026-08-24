type ResultsCopy = Record<string, string>;
type SearchInput = {
  destination: 'all' | 'frigiliana' | 'nerja' | 'tarifa';
  arrival: string;
  departure: string;
  guests: number;
};
type RequestFailure = Error & { status?: number; code?: string };

const DAY_MS = 86_400_000;
const MAX_NIGHTS = 45;
const CONCURRENCY = 2;
const validIsoDay = (value: string | null) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return '';
  const parsed = new Date(value + 'T00:00:00.000Z');
  return Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== value ? '' : value;
};
const nightsBetween = (arrival: string, departure: string) =>
  Math.round((Date.parse(departure + 'T00:00:00.000Z') - Date.parse(arrival + 'T00:00:00.000Z')) / DAY_MS);
const addDays = (value: string, amount: number) => {
  const date = new Date(value + 'T00:00:00.000Z');
  date.setUTCDate(date.getUTCDate() + amount);
  return date.toISOString().slice(0, 10);
};

function parseSearch(): SearchInput | undefined {
  const params = new URLSearchParams(window.location.search);
  const destination = params.get('destination');
  const arrival = validIsoDay(params.get('arrival'));
  const departure = validIsoDay(params.get('departure'));
  const guests = Number(params.get('guests'));
  const nights = nightsBetween(arrival, departure);
  if (!['all', 'frigiliana', 'nerja', 'tarifa'].includes(destination || '') ||
    !arrival || !departure || departure <= arrival || nights < 1 || nights > MAX_NIGHTS ||
    !Number.isInteger(guests) || guests < 1 || guests > 4) return undefined;
  return { destination: destination as SearchInput['destination'], arrival, departure, guests };
}

async function fetchJson(pathname: string, params: URLSearchParams) {
  const response = await fetch(pathname + '?' + params.toString(), {
    method: 'GET', headers: { Accept: 'application/json' }
  });
  let payload: unknown;
  try { payload = await response.json(); } catch { payload = undefined; }
  if (!response.ok) {
    const source = payload as { error?: { code?: unknown } } | undefined;
    const error = new Error('Stay search request failed.') as RequestFailure;
    error.status = response.status;
    if (typeof source?.error?.code === 'string') error.code = source.error.code;
    throw error;
  }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('Stay search response contract failed.');
  }
  return payload as Record<string, unknown>;
}

async function runWithConcurrency<T>(items: T[], worker: (item: T) => Promise<void>) {
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (next < items.length) {
      const item = items[next++];
      await worker(item);
    }
  }));
}

export function enhanceStaySearchResults() {
  document.querySelectorAll<HTMLElement>('[data-am-stay-search-results]').forEach((root) => {
    if (root.dataset.amStaySearchEnhanced === 'true') return;
    root.dataset.amStaySearchEnhanced = 'true';
    const copy = JSON.parse(root.dataset.amStaySearchCopy || '{}') as ResultsCopy;
    const language = root.dataset.amStaySearchLanguage || 'en-GB';
    const summary = root.querySelector<HTMLElement>('[data-am-stay-search-summary]');
    const state = root.querySelector<HTMLElement>('[data-am-stay-search-state]');
    const warning = root.querySelector<HTMLElement>('[data-am-stay-search-warning]');
    const available = root.querySelector<HTMLElement>('[data-am-stay-search-available]');
    const empty = root.querySelector<HTMLElement>('[data-am-stay-search-empty]');
    const emptyCopy = root.querySelector<HTMLElement>('[data-am-stay-search-empty-copy]');
    const allLink = root.querySelector<HTMLAnchorElement>('[data-am-stay-search-all-link]');
    const cards = [...root.querySelectorAll<HTMLElement>('[data-am-stay-result]')];
    if (!summary || !state || !warning || !available || !empty || !emptyCopy || !allLink) return;
    const input = parseSearch();
    if (!input) return;

    const formatDate = (value: string) => new Intl.DateTimeFormat(language, {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    }).format(new Date(value + 'T00:00:00.000Z'));
    const countLabel = (key: 'night' | 'nights' | 'guest' | 'guestsPlural', count: number) =>
      copy[key].replace('{count}', String(count));
    const nights = nightsBetween(input.arrival, input.departure);
    const destinationLabel = input.destination === 'all'
      ? document.querySelector<HTMLOptionElement>('[data-am-stay-search-destination] option[value="all"]')?.textContent || ''
      : input.destination.charAt(0).toUpperCase() + input.destination.slice(1);
    summary.textContent = [
      destinationLabel,
      formatDate(input.arrival) + ' – ' + formatDate(input.departure),
      countLabel(input.guests === 1 ? 'guest' : 'guestsPlural', input.guests)
    ].join(' · ');
    state.textContent = copy.loading;
    const candidates = cards.filter((card) => {
      const destinationMatches = input.destination === 'all' || card.dataset.amStayDestination === input.destination;
      return destinationMatches && Number(card.dataset.amStayOccupancy) >= input.guests;
    });
    const success: HTMLElement[] = [];
    const technical: HTMLElement[] = [];

    const searchParams = new URLSearchParams({
      destination: input.destination,
      arrival: input.arrival,
      departure: input.departure,
      guests: String(input.guests)
    });
    const cardHref = (base: string) => base + (base.includes('?') ? '&' : '?') + new URLSearchParams({
      arrival: input.arrival, departure: input.departure, guests: String(input.guests)
    }).toString();
    const checkCandidate = async (card: HTMLElement) => {
      const stay = card.dataset.amStayResult || '';
      try {
        const availabilityPayload = await fetchJson('/api/booking/availability', new URLSearchParams({
          stay, start: input.arrival, end: input.departure
        }));
        const days = availabilityPayload.days as Array<{ date?: unknown; available?: unknown }> | undefined;
        const expected = Array.from({ length: nights + 1 }, (_, index) => addDays(input.arrival, index));
        const availabilityValid = availabilityPayload.stay === stay &&
          availabilityPayload.start === input.arrival && availabilityPayload.end === input.departure &&
          Array.isArray(days) && days.length === expected.length && days.every((day, index) =>
            day.date === expected[index] && typeof day.available === 'boolean');
        if (!availabilityValid) throw new Error('Availability contract failed.');
        if (!days.every((day) => day.available === true)) return;

        const quote = await fetchJson('/api/booking/quote', new URLSearchParams({
          stay, arrival: input.arrival, departure: input.departure,
          adults: String(input.guests), children: '0', pets: '0'
        }));
        const quoteGuests = quote.guests as { adults?: unknown; children?: unknown; pets?: unknown } | undefined;
        if (quote.stay !== stay || quote.arrival !== input.arrival || quote.departure !== input.departure ||
          quoteGuests?.adults !== input.guests || quoteGuests.children !== 0 || quoteGuests.pets !== 0 ||
          typeof quote.currency !== 'string' || !Number.isFinite(quote.grossTotal)) {
          throw new Error('Quote contract failed.');
        }
        const cardSummary = card.querySelector<HTMLElement>('[data-am-stay-result-summary]');
        const priceWrap = card.querySelector<HTMLElement>('[data-am-stay-result-price-wrap]');
        const price = card.querySelector<HTMLElement>('[data-am-stay-result-price]');
        if (!cardSummary || !priceWrap || !price) throw new Error('Result card contract failed.');
        cardSummary.textContent = [
          formatDate(input.arrival) + ' – ' + formatDate(input.departure),
          countLabel(nights === 1 ? 'night' : 'nights', nights),
          countLabel(input.guests === 1 ? 'guest' : 'guestsPlural', input.guests)
        ].join(' · ');
        price.textContent = new Intl.NumberFormat(language, {
          style: 'currency', currency: String(quote.currency)
        }).format(Number(quote.grossTotal));
        card.querySelectorAll<HTMLAnchorElement>('[data-am-stay-result-link]').forEach((link) => {
          const base = link.dataset.amStayResultBaseHref || link.getAttribute('href') || '';
          link.href = cardHref(base);
        });
        card.hidden = false;
        cardSummary.hidden = false;
        priceWrap.hidden = false;
        success.push(card);
      } catch {
        technical.push(card);
      }
    };

    void runWithConcurrency(candidates, checkCandidate).then(() => {
      state.textContent = '';
      warning.hidden = technical.length === 0;
      available.hidden = success.length === 0;
      if (success.length > 0) return;
      empty.hidden = false;
      if (technical.length > 0) {
        emptyCopy.textContent = copy.searchError;
      } else {
        emptyCopy.textContent = copy.empty.replace('{destination}', destinationLabel);
      }
      if (input.destination !== 'all') {
        const allParams = new URLSearchParams(searchParams);
        allParams.set('destination', 'all');
        allLink.href = window.location.pathname + '?' + allParams.toString();
        allLink.hidden = false;
      }
    });
  });
}
