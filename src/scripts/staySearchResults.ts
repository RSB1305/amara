
type ResultsCopy = Record<string, string>;
type SearchInput = {
  destination: 'all' | 'frigiliana' | 'nerja' | 'tarifa';
  arrival: string;
  departure: string;
  guests: number;
};
type SearchDestination = SearchInput['destination'];
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
const parseDestination = (value: string | null): SearchDestination | undefined =>
  ['all', 'frigiliana', 'nerja', 'tarifa'].includes(value || '')
    ? value as SearchDestination
    : undefined;

function parseSearch(): SearchInput | undefined {
  const params = new URLSearchParams(window.location.search);
  const destination = parseDestination(params.get('destination'));
  const arrival = validIsoDay(params.get('arrival'));
  const departure = validIsoDay(params.get('departure'));
  const guests = Number(params.get('guests'));
  const nights = nightsBetween(arrival, departure);
  if (!destination ||
    !arrival || !departure || departure <= arrival || nights < 1 || nights > MAX_NIGHTS ||
    !Number.isInteger(guests) || guests < 1 || guests > 4) return undefined;
  return { destination, arrival, departure, guests };
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
    const copy = JSON.parse(root.dataset.amStaySearchCopy || '{}') as ResultsCopy;    const language = root.dataset.amStaySearchLanguage || 'en-GB';
    const summary = root.querySelector<HTMLElement>('[data-am-stay-search-summary]');
    const state = root.querySelector<HTMLElement>('[data-am-stay-search-state]');
    const warning = root.querySelector<HTMLElement>('[data-am-stay-search-warning]');
    const available = root.querySelector<HTMLElement>('[data-am-stay-search-available]');
    const resultsHeading = root.querySelector<HTMLElement>('[data-am-stay-search-results-heading]');
    const empty = root.querySelector<HTMLElement>('[data-am-stay-search-empty]');
    const emptyCopy = root.querySelector<HTMLElement>('[data-am-stay-search-empty-copy]');
    const allLink = root.querySelector<HTMLAnchorElement>('[data-am-stay-search-all-link]');
    const cards = [...root.querySelectorAll<HTMLElement>('[data-am-stay-result]')];
    if (!summary || !state || !warning || !available || !resultsHeading || !empty || !emptyCopy || !allLink) return;
    const destinationLabel = (destination: SearchDestination) =>
      document.querySelector<HTMLOptionElement>(
        `[data-am-stay-search-destination] option[value="${destination}"]`
      )?.textContent || destination.charAt(0).toUpperCase() + destination.slice(1);
    const input = parseSearch();
    if (!input) {
      const previewDestination = parseDestination(new URLSearchParams(window.location.search).get('destination'));
      // Before a search the page still shows what there is to search. An empty
      // results area reads as "nothing available" rather than "nothing asked
      // yet", which is the opposite of what an unfiltered list should say.
      if (previewDestination && previewDestination !== 'all') {
        // The field has to agree with the list below it, or the page offers
        // all destinations above the stays of one.
        const select = document.querySelector<HTMLSelectElement>('[data-am-stay-search-destination]');
        if (select) select.value = previewDestination;
        resultsHeading.textContent = copy.destinationStaysTitle.replace(
          '{destination}',
          destinationLabel(previewDestination)
        );
        cards.forEach((card) => {
          card.hidden = card.dataset.amStayDestination !== previewDestination;
        });
      } else {
        resultsHeading.textContent = copy.allStaysTitle;
        cards.forEach((card) => {
          card.hidden = false;
        });
      }
      summary.textContent = '';
      state.textContent = copy.destinationStaysPrompt;
      available.hidden = false;
      return;
    }

    const formatDate = (value: string) => new Intl.DateTimeFormat(language, {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    }).format(new Date(value + 'T00:00:00.000Z'));
    const countLabel = (key: 'night' | 'nights' | 'guest' | 'guestsPlural', count: number) =>
      copy[key].replace('{count}', String(count));
    const nights = nightsBetween(input.arrival, input.departure);
    const selectedDestinationLabel = destinationLabel(input.destination);
    summary.textContent = [
      selectedDestinationLabel,
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
        // Lodgify returns the inclusive departure date, but guests do not occupy
        // the stay on checkout day. Only the selected nights must be available.
        if (!days.slice(0, nights).every((day) => day.available === true)) return;

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
        // A result card carries these dates to the stay page rather than into
        // checkout. The stay's booking module reads them from the query, so the
        // guest arrives on a filled calendar they can still change, instead of
        // being committed to one set of dates by pressing a card.
        const bookingLink = card.querySelector<HTMLAnchorElement>('[data-am-stay-booking-link]');
        if (!bookingLink) throw new Error('Stay link is missing.');
        bookingLink.href = cardHref(
          bookingLink.dataset.amStayResultBaseHref || bookingLink.getAttribute('href') || ''
        );
        card.hidden = false;
        cardSummary.hidden = false;
        priceWrap.hidden = false;
        success.push(card);
      } catch (error) {
        const requestError = error as RequestFailure;
        // A provider-declined quote is a valid "not bookable" result, for
        // example when the selected stay is shorter than the minimum stay.
        // Only transport or contract failures should raise a technical warning.
        if (requestError.code === 'quote_unavailable') return;
        technical.push(card);
      }
    };

    void runWithConcurrency(candidates, checkCandidate).then(() => {
      state.textContent = '';
      // The warning is useful only beside valid results. When every request
      // fails, the single error below is clearer than two technical messages.
      warning.hidden = technical.length === 0 || success.length === 0;
      available.hidden = success.length === 0;
      if (success.length > 0) return;
      empty.hidden = false;
      if (technical.length > 0) {
        emptyCopy.textContent = copy.searchError;
      } else {
        emptyCopy.textContent = copy.empty.replace('{destination}', selectedDestinationLabel);
      }
      // Another destination is useful only when the search completed and no
      // stay was free. It cannot solve a technical request failure.
      if (technical.length === 0 && input.destination !== 'all') {
        const allParams = new URLSearchParams(searchParams);
        allParams.set('destination', 'all');
        allLink.href = window.location.pathname + '?' + allParams.toString();
        allLink.hidden = false;
      }
    });
  });
}
