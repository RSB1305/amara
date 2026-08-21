import {
  annotateLodgifyProviderError,
  createLodgifyClient,
  LodgifyProviderError,
  normalizeAvailability,
  normalizeRates,
  quoteSummary,
} from './lodgify-adapter.mjs';
import {
  BookingGatewayError,
  parseCalendarRequest,
  parseQuoteRequest,
} from './request-contract.mjs';

const PROVIDER_STEPS = new Set(['properties', 'rooms', 'availability', 'rates', 'quote']);
const PROVIDER_ERROR_CATEGORIES = new Set([
  'network',
  'http',
  'malformed_response',
  'normalization',
]);

async function withProviderStep(providerStep, operation) {
  try {
    return await operation();
  } catch (error) {
    throw annotateLodgifyProviderError(error, providerStep);
  }
}

function logProviderError(operationName, error) {
  const diagnostic = {
    operation: operationName,
    providerStep: PROVIDER_STEPS.has(error.providerStep) ? error.providerStep : operationName,
  };
  if (Number.isInteger(error.httpStatus) && error.httpStatus >= 100 && error.httpStatus <= 599) {
    diagnostic.providerHttpStatus = error.httpStatus;
  }
  diagnostic.category = PROVIDER_ERROR_CATEGORIES.has(error.category)
    ? error.category
    : 'normalization';
  console.error(JSON.stringify(diagnostic));
}

async function withMappedStay(apiKey, providerMapping, operation) {
  if (typeof apiKey !== 'string' || !apiKey.trim()) {
    throw new BookingGatewayError(503, 'service_unavailable', 'Live booking data is unavailable.');
  }
  const client = createLodgifyClient({ apiKey });
  return operation(client, providerMapping);
}

async function availability(request, apiKey) {
  const input = parseCalendarRequest(request);
  const days = await withMappedStay(apiKey, input.providerMapping, async (client, mapping) => {
    return withProviderStep('availability', async () => {
      const payload = await client.getAvailability(
        mapping.propertyId,
        mapping.roomTypeId,
        input.start,
        input.end,
      );
      return normalizeAvailability(
        payload,
        mapping.propertyId,
        mapping.roomTypeId,
        input.start,
        input.end,
      );
    });
  });
  return { stay: input.stay, start: input.start, end: input.end, days };
}

async function rates(request, apiKey) {
  const input = parseCalendarRequest(request);
  const days = await withMappedStay(apiKey, input.providerMapping, async (client, mapping) => {
    return withProviderStep('rates', async () => {
      const payload = await client.getRates(
        mapping.propertyId,
        mapping.roomTypeId,
        input.start,
        input.end,
      );
      return normalizeRates(payload, input.start, input.end).map((day) => ({
        date: day.date,
        currency: day.currency,
        options: day.priceOptions.map((option) => ({
          nightlyRate: option.pricePerDay,
          minStay: option.minStay,
          maxStay: option.maxStay,
          additionalGuestsFrom: option.additionalGuestsStartsFrom,
          additionalGuestRate: option.pricePerAdditionalGuest,
        })),
      }));
    });
  });
  return { stay: input.stay, start: input.start, end: input.end, days };
}

async function quote(request, apiKey) {
  const input = parseQuoteRequest(request);
  const summary = await withMappedStay(apiKey, input.providerMapping, async (client, mapping) => {
    return withProviderStep('quote', async () => {
      const payload = await client.getQuote(
        mapping.propertyId,
        mapping.roomTypeId,
        input.arrival,
        input.departure,
        input.guests,
      );
      return quoteSummary(payload);
    });
  });
  return {
    stay: input.stay,
    arrival: input.arrival,
    departure: input.departure,
    guests: input.guests,
    ...summary,
  };
}

const OPERATIONS = Object.freeze({ availability, rates, quote });

function jsonResponse(body, status, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer',
      ...extraHeaders,
    },
  });
}

export function createBookingRoute(operationName) {
  const operation = OPERATIONS[operationName];
  if (!operation) throw new Error('Unknown booking gateway operation.');

  return async function onRequest(context) {
    if (context.request.method !== 'GET') {
      return jsonResponse(
        { error: { code: 'method_not_allowed', message: 'Only GET is supported.' } },
        405,
        { Allow: 'GET' },
      );
    }

    try {
      const result = await operation(context.request, context.env?.LODGIFY_API_KEY);
      return jsonResponse(result, 200);
    } catch (error) {
      if (error instanceof BookingGatewayError) {
        return jsonResponse(
          { error: { code: error.code, message: error.message } },
          error.status,
        );
      }
      if (error instanceof LodgifyProviderError) {
        logProviderError(operationName, error);
      }
      if (
        operationName === 'quote'
        && error instanceof LodgifyProviderError
        && [400, 409, 422].includes(error.httpStatus)
      ) {
        return jsonResponse(
          { error: { code: 'quote_unavailable', message: 'A current quote is unavailable for this stay.' } },
          409,
        );
      }
      return jsonResponse(
        { error: { code: 'booking_data_unavailable', message: 'Live booking data is temporarily unavailable.' } },
        502,
      );
    }
  };
}
