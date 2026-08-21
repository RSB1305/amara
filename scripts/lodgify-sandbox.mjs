#!/usr/bin/env node

import {
  availabilityOf,
  createLodgifyClient,
  dateOf,
  isoDate,
  LodgifyProviderError,
  normalizeAvailability,
  normalizeRates,
  quoteSummary,
  rateOptionMatches,
} from '../booking-gateway/lodgify-adapter.mjs';
import { getLodgifyStayMapping } from '../booking-gateway/stays.mjs';

const WINDOW_DAYS = 45;
const GUESTS = Object.freeze({ adults: 2, children: 0, pets: 0 });

const status = {
  AUTH: 'FAIL',
  PROPERTY: 'FAIL',
  'ROOM TYPE': 'FAIL',
  AVAILABILITY: 'FAIL',
  RATES: 'FAIL',
  QUOTE: 'FAIL',
  OVERALL: 'FAIL',
};

function printStatus() {
  console.log('\nSTATUS');
  for (const [label, value] of Object.entries(status)) console.log(`${label}: ${value}`);
}

function fail(message, exitCode = 1) {
  console.error(`\nFAIL: ${message}`);
  printStatus();
  process.exitCode = exitCode;
}

function findCandidate(availability, rates) {
  const availableByDate = new Map(availability.map((day) => [dateOf(day), day]));
  const rateByDate = new Map(rates.map((day) => [dateOf(day), day]));
  const dates = [...availableByDate.keys()].sort();
  const diagnostics = {
    availableArrivalDays: 0,
    missingArrivalRates: 0,
    nonUniqueArrivalRateRules: 0,
    unavailableStaySpans: 0,
    unpricedStaySpans: 0,
  };
  const finalCalendarDate = dates.at(-1);

  for (const arrival of dates) {
    if (!availabilityOf(availableByDate.get(arrival))) continue;
    diagnostics.availableArrivalDays += 1;
    const arrivalRate = rateByDate.get(arrival);
    if (!arrivalRate?.priceOptions?.length) {
      diagnostics.missingArrivalRates += 1;
      continue;
    }
    const arrivalDate = new Date(`${arrival}T00:00:00Z`);
    const finalDate = new Date(`${finalCalendarDate}T00:00:00Z`);
    const nightsInWindow = Math.floor((finalDate - arrivalDate) / 86_400_000) + 1;
    for (let nights = 1; nights <= nightsInWindow; nights += 1) {
      const matchingRateOptions = arrivalRate.priceOptions
        .filter((option) => rateOptionMatches(option, nights));
      if (matchingRateOptions.length !== 1) {
        diagnostics.nonUniqueArrivalRateRules += 1;
        continue;
      }
      const stayDates = Array.from({ length: nights }, (_, index) => {
        const date = new Date(arrivalDate);
        date.setUTCDate(date.getUTCDate() + index);
        return isoDate(date);
      });
      if (!stayDates.every((date) => availabilityOf(availableByDate.get(date)))) {
        diagnostics.unavailableStaySpans += 1;
        continue;
      }
      if (!stayDates.every((date) => rateByDate.has(date))) {
        diagnostics.unpricedStaySpans += 1;
        continue;
      }
      const departureDate = new Date(arrivalDate);
      departureDate.setUTCDate(departureDate.getUTCDate() + nights);
      return {
        candidate: {
          arrival,
          departure: isoDate(departureDate),
          nights,
          selectedRateOption: matchingRateOptions[0],
        },
        diagnostics,
      };
    }
  }
  return { candidate: undefined, diagnostics };
}

async function main(apiKey) {
  try {
    const client = createLodgifyClient({ apiKey });
    const mahaMapping = getLodgifyStayMapping('maha');
    const resolved = await client.resolveStay(mahaMapping);
    status.AUTH = 'PASS';
    status.PROPERTY = 'PASS';
    status['ROOM TYPE'] = 'PASS';
    console.log(`Property: ${resolved.propertyName}`);
    console.log(`Room type: ${resolved.roomTypeName}`);

    const startDate = new Date();
    startDate.setUTCDate(startDate.getUTCDate() + 1);
    const endDate = new Date(startDate);
    endDate.setUTCDate(endDate.getUTCDate() + WINDOW_DAYS - 1);
    const start = isoDate(startDate);
    const end = isoDate(endDate);

    const availability = normalizeAvailability(
      await client.getAvailability(
        resolved.propertyId,
        resolved.roomTypeId,
        start,
        end,
      ),
      resolved.propertyId,
      resolved.roomTypeId,
      start,
      end,
    );
    status.AVAILABILITY = 'PASS';

    // Rates Calendar's end date is inclusive. The following day is used only as departure.
    const rates = normalizeRates(
      await client.getRates(resolved.propertyId, resolved.roomTypeId, start, end),
      start,
      end,
    );
    status.RATES = 'PASS';
    const availableDays = availability.filter((day) => availabilityOf(day)).length;
    const pricedRates = rates.flatMap((rate) => rate.priceOptions.map((option) => option.pricePerDay));
    const multipleOptionRates = rates.filter((rate) => rate.priceOptions.length > 1);
    console.log('Calendar summary:', {
      window: `${start}..${end} (inclusive)`,
      availableDays,
      unavailableDays: availability.length - availableDays,
      pricedNights: rates.length,
      rateOptions: pricedRates.length,
      multipleOptionDays: multipleOptionRates.length,
      rateCurrency: rates[0].currency,
      rateOptionRange: pricedRates.length
        ? `${Math.min(...pricedRates)}..${Math.max(...pricedRates)}`
        : 'unavailable',
    });
    for (const rate of multipleOptionRates.slice(0, 7)) {
      console.log('Rate options:', JSON.stringify({
        date: rate.date,
        optionCount: rate.priceOptions.length,
        currency: rate.currency,
        options: rate.priceOptions.map((option) => ({
          min_stay: option.minStay,
          max_stay: option.maxStay,
          price_per_day: option.pricePerDay,
        })),
      }));
    }
    if (multipleOptionRates.length > 7) {
      console.log(`Rate options: ${multipleOptionRates.length - 7} additional multi-option days omitted.`);
    }

    const candidateSelection = findCandidate(availability, rates);
    const { candidate } = candidateSelection;
    if (!candidate) {
      status.QUOTE = 'WARN';
      status.OVERALL = 'WARN';
      console.warn(
        'No unambiguous stay satisfied contiguous availability and the arrival-date rate rules.',
        candidateSelection.diagnostics,
      );
      return printStatus();
    }
    console.log('Candidate:', {
      arrival: candidate.arrival,
      departure: candidate.departure,
      nights: candidate.nights,
      adults: GUESTS.adults,
      min_stay: candidate.selectedRateOption.minStay,
      max_stay: candidate.selectedRateOption.maxStay,
      price_per_day: candidate.selectedRateOption.pricePerDay,
    });

    try {
      const summary = quoteSummary(
        await client.getQuote(
          resolved.propertyId,
          resolved.roomTypeId,
          candidate.arrival,
          candidate.departure,
          GUESTS,
        ),
      );
      status.QUOTE = 'PASS';
      status.OVERALL = 'PASS';
      console.log('Quote:', summary);
    } catch (error) {
      const message = error.providerMessage ?? error.message;
      const stayRejected = [400, 409, 422].includes(error.httpStatus)
        || /minimum|stay|unavailable/i.test(message);
      status.QUOTE = stayRejected ? 'WARN' : 'FAIL';
      status.OVERALL = status.QUOTE;
      const diagnostic = error instanceof LodgifyProviderError
        ? {
            httpStatus: error.httpStatus,
            lodgifyCode: error.providerCode,
            lodgifyMessage: error.providerMessage,
          }
        : undefined;
      console.error(
        stayRejected
          ? 'The candidate was unavailable or rejected by stay rules; no booking was attempted.'
          : 'Quote failed; no booking was attempted.',
        diagnostic ?? message,
      );
    }
    printStatus();
  } catch (error) {
    fail(error.message);
  }
}

const apiKey = process.env.LODGIFY_API_KEY;
if (!apiKey) {
  fail('LODGIFY_API_KEY is missing. Add it locally to .env; never commit it.');
} else {
  await main(apiKey);
}
