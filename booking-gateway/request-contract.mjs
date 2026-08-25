import { validIsoDay } from './lodgify-adapter.mjs';
import {
  getLodgifyStayMapping,
  getSearchStayCandidates,
  isAmaraSearchDestination,
  isAmaraStayKey,
} from './stays.mjs';

const DAY_MS = 86_400_000;
const MAX_CALENDAR_DAYS = 45;
const MAX_STAY_NIGHTS = 45;
const MAX_ADVANCE_DAYS = 730;

export class BookingGatewayError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = 'BookingGatewayError';
    this.status = status;
    this.code = code;
  }
}

function fail(code, message, status = 400) {
  throw new BookingGatewayError(status, code, message);
}

function rejectUnknownParameters(searchParams, allowed) {
  for (const key of searchParams.keys()) {
    if (!allowed.has(key)) fail('invalid_request', 'The request contains an unsupported parameter.');
  }
}

function requiredSingleValue(searchParams, key) {
  const values = searchParams.getAll(key);
  if (values.length !== 1 || !values[0]) {
    fail('invalid_request', `The ${key} parameter is required exactly once.`);
  }
  return values[0];
}

function optionalInteger(searchParams, key, fallback, minimum, maximum) {
  const values = searchParams.getAll(key);
  if (!values.length) return fallback;
  if (values.length !== 1 || !/^(?:0|[1-9]\d*)$/.test(values[0])) {
    fail('invalid_request', `The ${key} parameter must be an integer.`);
  }
  const value = Number(values[0]);
  if (value < minimum || value > maximum) {
    fail('invalid_request', `The ${key} parameter is outside the supported range.`);
  }
  return value;
}

function parseStay(searchParams) {
  const stay = requiredSingleValue(searchParams, 'stay').toLowerCase();
  if (!isAmaraStayKey(stay)) {
    fail('unsupported_stay', 'The requested stay is not supported.');
  }
  const providerMapping = getLodgifyStayMapping(stay);
  if (!providerMapping) {
    fail('stay_unconfigured', 'Live booking data is not configured for this stay.', 422);
  }
  return { stay, providerMapping };
}

function dateValue(searchParams, key) {
  const value = requiredSingleValue(searchParams, key);
  if (!validIsoDay(value)) fail('invalid_request', `The ${key} parameter must be an ISO date.`);
  return value;
}

function utcDayNumber(value) {
  return Date.parse(`${value}T00:00:00.000Z`) / DAY_MS;
}

function validateFutureRange(start, end, maximumSpan, allowSameDay) {
  const startDay = utcDayNumber(start);
  const endDay = utcDayNumber(end);
  const today = utcDayNumber(new Date().toISOString().slice(0, 10));
  const span = endDay - startDay;
  if (startDay < today || endDay < today) {
    fail('invalid_request', 'Past dates are not supported.');
  }
  if (startDay - today > MAX_ADVANCE_DAYS || endDay - today > MAX_ADVANCE_DAYS) {
    fail('invalid_request', 'The requested dates are too far in the future.');
  }
  if (span < (allowSameDay ? 0 : 1) || span > maximumSpan) {
    fail('invalid_request', 'The requested date range is outside the supported length.');
  }
  return span;
}

export function parseCalendarRequest(request) {
  const searchParams = new URL(request.url).searchParams;
  rejectUnknownParameters(searchParams, new Set(['stay', 'start', 'end']));
  const { stay, providerMapping } = parseStay(searchParams);
  const start = dateValue(searchParams, 'start');
  const end = dateValue(searchParams, 'end');
  const span = validateFutureRange(start, end, MAX_CALENDAR_DAYS - 1, true);
  if (span + 1 > MAX_CALENDAR_DAYS) {
    fail('invalid_request', 'The calendar window is too long.');
  }
  return { stay, providerMapping, start, end };
}

export function parseSearchCalendarRequest(request) {
  const searchParams = new URL(request.url).searchParams;
  rejectUnknownParameters(searchParams, new Set(['destination', 'guests', 'start', 'end']));
  const destination = requiredSingleValue(searchParams, 'destination').toLowerCase();
  if (!isAmaraSearchDestination(destination)) {
    fail('unsupported_destination', 'The requested destination is not supported.');
  }
  const guests = optionalInteger(searchParams, 'guests', 2, 1, 4);
  const start = dateValue(searchParams, 'start');
  const end = dateValue(searchParams, 'end');
  const span = validateFutureRange(start, end, MAX_CALENDAR_DAYS - 1, true);
  if (span + 1 > MAX_CALENDAR_DAYS) {
    fail('invalid_request', 'The calendar window is too long.');
  }
  return {
    destination,
    guests,
    start,
    end,
    candidates: getSearchStayCandidates(destination, guests),
  };
}

export function parseQuoteRequest(request) {
  const searchParams = new URL(request.url).searchParams;
  rejectUnknownParameters(
    searchParams,
    new Set(['stay', 'arrival', 'departure', 'adults', 'children', 'pets']),
  );
  const { stay, providerMapping } = parseStay(searchParams);
  const arrival = dateValue(searchParams, 'arrival');
  const departure = dateValue(searchParams, 'departure');
  validateFutureRange(arrival, departure, MAX_STAY_NIGHTS, false);
  const adults = optionalInteger(searchParams, 'adults', 2, 1, 12);
  const children = optionalInteger(searchParams, 'children', 0, 0, 8);
  const pets = optionalInteger(searchParams, 'pets', 0, 0, 4);
  if (adults + children > 12) {
    fail('invalid_request', 'The total guest count is outside the supported range.');
  }
  return {
    stay,
    providerMapping,
    arrival,
    departure,
    guests: { adults, children, pets },
  };
}
