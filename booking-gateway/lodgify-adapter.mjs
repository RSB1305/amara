const API_ORIGIN = 'https://api.lodgify.com';
const REQUEST_TIMEOUT_MS = 20_000;

export class LodgifyProviderError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = 'LodgifyProviderError';
    this.httpStatus = options.httpStatus;
    this.providerCode = options.providerCode;
    this.providerMessage = options.providerMessage;
  }
}

export function createLodgifyClient({ apiKey, fetchImpl = fetch }) {
  if (typeof apiKey !== 'string' || !apiKey.trim()) {
    throw new LodgifyProviderError('The Lodgify credential is not configured.');
  }

  async function requestJson(pathname, searchParams = {}, options = {}) {
    const url = new URL(pathname, API_ORIGIN);
    for (const [key, value] of Object.entries(searchParams)) {
      url.searchParams.append(key, String(value));
    }

    let response;
    try {
      response = await fetchImpl(url, {
        method: 'GET',
        headers: { 'X-ApiKey': apiKey, Accept: 'application/json' },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
    } catch (error) {
      throw new LodgifyProviderError(
        `Network failure while contacting Lodgify: ${safeErrorText(error?.message, 200) ?? 'unknown error'}`,
      );
    }

    const safeProviderError = !response.ok && options.captureSafeError
      ? await readSafeLodgifyError(response)
      : undefined;
    if (!response.ok) {
      throw new LodgifyProviderError(
        `Lodgify GET ${pathname} failed (HTTP ${response.status}).`,
        {
          httpStatus: response.status,
          providerCode: safeProviderError?.code,
          providerMessage: safeProviderError?.message,
        },
      );
    }

    try {
      return await response.json();
    } catch {
      throw new LodgifyProviderError(`Lodgify GET ${pathname} returned malformed JSON.`);
    }
  }

  function listProperties() {
    return requestJson('/v2/properties', { page: 1, size: 100, includeCount: false });
  }

  function listPropertyRooms(propertyId) {
    return requestJson(`/v2/properties/${encodeURIComponent(propertyId)}/rooms`);
  }

  async function resolveStay(mapping) {
    const properties = arrayFrom(
      await listProperties(),
      ['items', 'properties', 'data'],
    );
    const matches = properties.filter((property) => mapping.propertyNamePattern.test(nameOf(property)));
    if (matches.length !== 1) {
      throw new LodgifyProviderError('The configured stay did not resolve to exactly one Lodgify property.');
    }

    const propertyId = idOf(matches[0]);
    if (propertyId === undefined) {
      throw new LodgifyProviderError('The configured Lodgify property has no ID.');
    }

    const rooms = arrayFrom(
      await listPropertyRooms(propertyId),
      ['items', 'rooms', 'roomTypes', 'data'],
    );
    if (mapping.roomStrategy !== 'single' || rooms.length !== 1) {
      throw new LodgifyProviderError('The configured stay did not resolve to exactly one Lodgify room type.');
    }

    const roomTypeId = idOf(rooms[0]);
    if (roomTypeId === undefined) {
      throw new LodgifyProviderError('The configured Lodgify room type has no ID.');
    }

    return {
      propertyId,
      propertyName: nameOf(matches[0]),
      roomTypeId,
      roomTypeName: nameOf(rooms[0]),
    };
  }

  function getAvailability(propertyId, roomTypeId, start, end) {
    return requestJson(
      `/v2/availability/${encodeURIComponent(propertyId)}/${encodeURIComponent(roomTypeId)}`,
      {
        start: `${start}T00:00:00.000Z`,
        end: `${end}T23:59:59.999Z`,
        includeDetails: false,
      },
    );
  }

  function getRates(propertyId, roomTypeId, start, end) {
    return requestJson('/v2/rates/calendar', {
      houseId: propertyId,
      roomTypeId,
      startDate: start,
      endDate: end,
    });
  }

  function getQuote(propertyId, roomTypeId, arrival, departure, guests = {}) {
    const adults = guests.adults ?? 2;
    const children = guests.children ?? 0;
    const pets = guests.pets ?? 0;
    const query = {
      arrival: `${arrival}T00:00:00.000Z`,
      departure: `${departure}T00:00:00.000Z`,
      'roomTypes[0].Id': roomTypeId,
      'roomTypes[0].People': adults + children,
      'roomTypes[0].guest_breakdown.adults': adults,
      'roomTypes[0].guest_breakdown.pets': pets,
    };
    if (children > 0) {
      query['roomTypes[0].guest_breakdown.children'] = children;
    }

    // This is the exact nested serialization verified by the MVP for adults and pets.
    return requestJson(
      `/v2/quote/${encodeURIComponent(propertyId)}`,
      query,
      { captureSafeError: true },
    );
  }

  return Object.freeze({
    resolveStay,
    getAvailability,
    getRates,
    getQuote,
  });
}

function safeErrorText(value, maximumLength) {
  if (typeof value !== 'string' && typeof value !== 'number') return undefined;
  const sanitized = String(value)
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/[A-Za-z0-9_-]{32,}/g, '[redacted]')
    .trim();
  return sanitized ? sanitized.slice(0, maximumLength) : undefined;
}

async function readSafeLodgifyError(response) {
  let payload;
  try {
    payload = await response.json();
  } catch {
    return undefined;
  }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return undefined;
  const source = payload.error && typeof payload.error === 'object' && !Array.isArray(payload.error)
    ? payload.error
    : payload;
  const code = safeErrorText(source.error_code ?? source.errorCode ?? source.code, 80);
  const message = safeErrorText(
    source.error_message ?? source.errorMessage ?? source.message
      ?? (typeof payload.error === 'string' ? payload.error : undefined),
    300,
  );
  return code || message ? { code, message } : undefined;
}

export function arrayFrom(payload, labels) {
  if (Array.isArray(payload)) return payload;
  if (payload && typeof payload === 'object') {
    for (const label of labels) {
      if (Array.isArray(payload[label])) return payload[label];
    }
  }
  throw new LodgifyProviderError(`Unexpected Lodgify response: expected an array (${labels.join(', ')}).`);
}

export function idOf(item) {
  return item?.id ?? item?.propertyId ?? item?.roomTypeId ?? item?.houseId;
}

export function nameOf(item) {
  return item?.name ?? item?.title ?? item?.internalName ?? '(unnamed)';
}

export function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

export function validIsoDay(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return undefined;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.valueOf()) && isoDate(parsed) === value ? value : undefined;
}

export function dateOf(item) {
  const value = item?.date ?? item?.day ?? item?.startDate ?? item?.arrival;
  return typeof value === 'string' ? value.slice(0, 10) : undefined;
}

export function availabilityOf(item) {
  const value = item?.available ?? item?.isAvailable ?? item?.availability ?? item?.unitsAvailable;
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value > 0;
  return undefined;
}

function amountOf(item) {
  const value = item?.amount
    ?? item?.price_per_day
    ?? item?.pricePerDay
    ?? item?.rate
    ?? item?.price
    ?? item?.nightlyRate;
  return Number.isFinite(Number(value)) ? Number(value) : undefined;
}

function findRatesContainers(payload) {
  const queue = [payload];
  const seen = new Set();
  const containers = [];
  for (let depth = 0; depth < 3 && queue.length; depth += 1) {
    const level = queue.splice(0);
    for (const candidate of level) {
      if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate) || seen.has(candidate)) continue;
      seen.add(candidate);
      if (Array.isArray(candidate.calendar_items) || Array.isArray(candidate.calendarItems)) {
        containers.push(candidate);
      }
      for (const key of ['data', 'rates', 'rate', 'calendar']) {
        const nested = candidate[key];
        if (nested && typeof nested === 'object' && !Array.isArray(nested)) queue.push(nested);
      }
    }
  }
  return containers;
}

function ratesCurrency(payload, container) {
  const settings = container.rate_settings
    ?? container.rateSettings
    ?? payload?.rate_settings
    ?? payload?.rateSettings
    ?? payload?.data?.rate_settings
    ?? payload?.data?.rateSettings;
  const value = settings?.currency_code ?? settings?.currencyCode ?? settings?.currency;
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function ratePrices(item) {
  if (Array.isArray(item?.prices)) return item.prices;
  if (Array.isArray(item?.rates)) return item.rates;
  if (item?.price && typeof item.price === 'object') return [item.price];
  if (item?.rate && typeof item.rate === 'object') return [item.rate];
  if (item?.price_per_day !== undefined || item?.pricePerDay !== undefined) return [item];
  return undefined;
}

function rateNumber(item, keys) {
  for (const key of keys) {
    if (item?.[key] === undefined || item[key] === null) continue;
    const value = Number(item[key]);
    return Number.isFinite(value) ? value : undefined;
  }
  return null;
}

function normalizeRateOption(price) {
  const pricePerDay = amountOf(price);
  const minStay = rateNumber(price, ['min_stay', 'minStay', 'minimumStay']);
  const maxStay = rateNumber(price, ['max_stay', 'maxStay', 'maximumStay']);
  const pricePerAdditionalGuest = rateNumber(
    price,
    ['price_per_additional_guest', 'pricePerAdditionalGuest'],
  );
  const additionalGuestsStartsFrom = rateNumber(
    price,
    ['additional_guests_starts_from', 'additionalGuestsStartsFrom'],
  );
  const stayLimitsValid = [minStay, maxStay, additionalGuestsStartsFrom]
    .every((value) => value === null || (Number.isInteger(value) && value >= 0));
  if (
    pricePerDay === undefined
    || pricePerDay < 0
    || pricePerAdditionalGuest === undefined
    || !stayLimitsValid
  ) {
    throw new LodgifyProviderError('Unexpected Lodgify rates response: malformed price option.');
  }
  return {
    pricePerDay,
    minStay,
    maxStay,
    pricePerAdditionalGuest,
    additionalGuestsStartsFrom,
  };
}

export function effectiveMinimumStay(option) {
  return option.minStay && option.minStay > 0 ? option.minStay : 1;
}

export function rateOptionMatches(option, nights) {
  return Number.isInteger(option.minStay)
    && Number.isInteger(option.maxStay)
    && option.minStay >= 0
    && option.maxStay >= 0
    && option.minStay <= option.maxStay
    && option.minStay <= nights
    && nights <= option.maxStay;
}

export function normalizeRates(payload, requestedStart, requestedEnd) {
  const containers = findRatesContainers(payload);
  if (containers.length !== 1) {
    throw new LodgifyProviderError(
      'Unexpected Lodgify rates response: exactly one calendar-items container was required.',
    );
  }

  const container = containers[0];
  const calendarItems = container.calendar_items ?? container.calendarItems;
  const defaultCurrency = ratesCurrency(payload, container);
  if (!defaultCurrency) {
    throw new LodgifyProviderError('Unexpected Lodgify rates response: currency was not found.');
  }

  const start = validIsoDay(requestedStart);
  const end = validIsoDay(requestedEnd);
  if (!start || !end || start > end) {
    throw new LodgifyProviderError('Internal rates window is invalid.');
  }

  const normalizedByDate = new Map();
  for (const item of calendarItems) {
    const date = validIsoDay(item?.date);
    if (!date) {
      throw new LodgifyProviderError('Unexpected Lodgify rates response: calendar item has no valid date.');
    }
    if (date < start || date > end) continue;

    const prices = ratePrices(item);
    if (!prices) {
      throw new LodgifyProviderError(
        'Unexpected Lodgify rates response: calendar item has no recognized price container.',
      );
    }
    if (prices.length === 0) continue;
    const priceOptions = prices.map((price) => normalizeRateOption(price));
    const rate = { date, currency: defaultCurrency, priceOptions };
    if (priceOptions.length === 1) {
      const option = priceOptions[0];
      rate.amount = option.pricePerDay;
      rate.minimumStay = effectiveMinimumStay(option);
      if (option.maxStay && option.maxStay > 0) rate.maximumStay = option.maxStay;
    }
    if (normalizedByDate.has(date)) {
      throw new LodgifyProviderError('Unexpected Lodgify rates response: duplicate calendar date.');
    }
    normalizedByDate.set(date, rate);
  }

  const normalized = [...normalizedByDate.values()]
    .sort((left, right) => left.date.localeCompare(right.date));
  if (!normalized.length || new Set(normalized.map((rate) => rate.currency)).size !== 1) {
    throw new LodgifyProviderError(
      'Unexpected Lodgify rates response: no single-currency nightly rates were found.',
    );
  }
  return normalized;
}

function idsMatch(actual, expected) {
  return actual !== undefined && actual !== null && String(actual) === String(expected);
}

function availabilityPeriodValue(period) {
  const raw = period?.available;
  const available = typeof raw === 'boolean' ? raw : typeof raw === 'number' ? raw > 0 : undefined;
  if (available === undefined) return undefined;
  const closed = period.closed_period !== null
    && period.closed_period !== undefined
    && period.closed_period !== false;
  return available && !closed;
}

export function normalizeAvailability(payload, propertyId, roomTypeId, requestedStart, requestedEnd) {
  const calendars = Array.isArray(payload)
    ? payload
    : ['items', 'availability', 'data'].map((key) => payload?.[key]).find(Array.isArray);
  if (!calendars) {
    throw new LodgifyProviderError(
      'Unexpected Lodgify availability response: expected a calendar array.',
    );
  }

  const matching = calendars.filter((calendar) => {
    const responsePropertyId = calendar?.property_id ?? calendar?.propertyId;
    const responseRoomTypeId = calendar?.room_type_id ?? calendar?.roomTypeId;
    return idsMatch(responsePropertyId, propertyId) && idsMatch(responseRoomTypeId, roomTypeId);
  });
  if (matching.length !== 1 || !Array.isArray(matching[0]?.periods)) {
    throw new LodgifyProviderError(
      'Unexpected Lodgify availability response: exactly one matching room-type calendar with periods was required.',
    );
  }

  const windowStart = validIsoDay(requestedStart);
  const windowEnd = validIsoDay(requestedEnd);
  if (!windowStart || !windowEnd || windowStart > windowEnd) {
    throw new LodgifyProviderError('Internal availability window is invalid.');
  }

  const days = new Map();
  for (const period of matching[0].periods) {
    const periodStart = validIsoDay(period?.start);
    const periodEnd = validIsoDay(period?.end);
    const available = availabilityPeriodValue(period);
    if (!periodStart || !periodEnd || periodStart > periodEnd || available === undefined) {
      throw new LodgifyProviderError('Unexpected Lodgify availability response: malformed period.');
    }

    const clippedStart = periodStart < windowStart ? windowStart : periodStart;
    const clippedEnd = periodEnd > windowEnd ? windowEnd : periodEnd;
    if (clippedStart > clippedEnd) continue;

    const cursor = new Date(`${clippedStart}T00:00:00.000Z`);
    const last = new Date(`${clippedEnd}T00:00:00.000Z`);
    while (cursor <= last) {
      const date = isoDate(cursor);
      if (days.has(date) && days.get(date).available !== available) {
        throw new LodgifyProviderError(
          'Unexpected Lodgify availability response: overlapping periods disagree.',
        );
      }
      days.set(date, { date, available });
      cursor.setUTCDate(cursor.getUTCDate() + 1);
    }
  }

  const normalized = [];
  const cursor = new Date(`${windowStart}T00:00:00.000Z`);
  const last = new Date(`${windowEnd}T00:00:00.000Z`);
  while (cursor <= last) {
    const date = isoDate(cursor);
    const day = days.get(date);
    if (!day) {
      throw new LodgifyProviderError(
        'Unexpected Lodgify availability response: periods do not cover the requested window.',
      );
    }
    normalized.push(day);
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return normalized;
}

function quoteSource(quote) {
  if (Array.isArray(quote)) {
    return quote.length === 1 && quote[0] && typeof quote[0] === 'object' ? quote[0] : undefined;
  }
  if (!quote || typeof quote !== 'object') return undefined;
  const nested = quote.quote ?? quote.data ?? quote.result;
  if (Array.isArray(nested)) {
    return nested.length === 1 && nested[0] && typeof nested[0] === 'object' ? nested[0] : undefined;
  }
  return nested && typeof nested === 'object' ? nested : quote;
}

function quoteAmount(value) {
  const amount = Number(value);
  return value !== null && value !== undefined && Number.isFinite(amount) ? amount : undefined;
}

function quoteAmountsApproximatelyEqual(left, right) {
  const tolerance = 0.01 + Number.EPSILON * Math.max(Math.abs(left), Math.abs(right));
  return Math.abs(left - right) <= tolerance;
}

function addQuoteAmount(summary, key, value) {
  const amount = quoteAmount(value);
  if (amount !== undefined) summary[key] = amount;
}

export function quoteSummary(quote) {
  const source = quoteSource(quote);
  if (!source) {
    throw new LodgifyProviderError('Unexpected Lodgify quote response: quote result is ambiguous.');
  }

  const currency = source.currency_code ?? source.currencyCode;
  const totalIncludingVat = quoteAmount(source.total_including_vat ?? source.totalIncludingVat);
  const amountGross = quoteAmount(source.amount_gross ?? source.amountGross);
  const totalExcludingVat = quoteAmount(source.total_excluding_vat ?? source.totalExcludingVat);
  const vat = quoteAmount(source.total_vat ?? source.totalVat);
  const verifiedAmountGross = amountGross !== undefined
    && totalExcludingVat !== undefined
    && vat !== undefined
    && quoteAmountsApproximatelyEqual(amountGross, totalExcludingVat + vat)
    ? amountGross
    : undefined;
  const grossCandidates = [totalIncludingVat, verifiedAmountGross]
    .filter((amount) => amount !== undefined);
  if (
    typeof currency !== 'string'
    || !currency.trim()
    || !grossCandidates.length
    || grossCandidates.some((amount) => !quoteAmountsApproximatelyEqual(amount, grossCandidates[0]))
  ) {
    throw new LodgifyProviderError(
      'Unexpected Lodgify quote response: gross total or currency is ambiguous.',
    );
  }

  const summary = { currency: currency.trim(), grossTotal: grossCandidates[0] };
  if (totalExcludingVat !== undefined) summary.totalExcludingVat = totalExcludingVat;
  if (vat !== undefined) summary.vat = vat;

  const roomTypes = source.room_types ?? source.roomTypes;
  const directRoomSubtotal = quoteAmount(source.room_subtotal ?? source.roomSubtotal);
  if (directRoomSubtotal !== undefined) {
    summary.roomSubtotal = directRoomSubtotal;
  } else if (Array.isArray(roomTypes) && roomTypes.length) {
    const roomSubtotals = roomTypes.map((roomType) => quoteAmount(roomType?.subtotal));
    if (roomSubtotals.every((amount) => amount !== undefined)) {
      summary.roomSubtotal = roomSubtotals.reduce((total, amount) => total + amount, 0);
    }
  }

  addQuoteAmount(summary, 'addOnsSubtotal', source.add_ons_subtotal ?? source.addOnsSubtotal);
  addQuoteAmount(
    summary,
    'totalScheduledPayments',
    source.total_scheduled_payments ?? source.totalScheduledPayments,
  );
  addQuoteAmount(
    summary,
    'totalToCollectManually',
    source.total_to_collect_manually ?? source.totalToCollectManually,
  );

  return summary;
}
