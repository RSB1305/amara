import { createLodgifyClient, arrayFrom, validIsoDay } from '../booking-gateway/lodgify-adapter.mjs';
import { getAmaraStayByPropertyId } from '../booking-gateway/stays.mjs';
import { madridDateString } from './session.mjs';

const PAGE_SIZE = 50;
const MAX_PAGES_PER_FILTER = 10;
const ALLOWED_LANGUAGES = new Set(['en', 'de', 'es', 'nl', 'sv']);

export class ExperienceAccessDenied extends Error {
  constructor(code = 'access_denied') {
    super(code);
    this.name = 'ExperienceAccessDenied';
    this.code = code;
  }
}

export function normalizeGuestName(value) {
  return typeof value === 'string'
    ? value.normalize('NFKD').replace(/\p{M}/gu, '').trim().replace(/\s+/g, ' ').toLocaleLowerCase('en')
    : '';
}

export function validateAccessInput(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new ExperienceAccessDenied();
  const firstName = typeof value.firstName === 'string' ? value.firstName.trim() : '';
  const arrival = validIsoDay(value.arrival);
  const departure = validIsoDay(value.departure);
  const lang = ALLOWED_LANGUAGES.has(value.lang) ? value.lang : 'es';
  if (firstName.length < 2 || firstName.length > 80 || !arrival || !departure || arrival >= departure) {
    throw new ExperienceAccessDenied();
  }
  return { firstName, arrival, departure, lang };
}

function bookingSource(value) {
  const nested = value?.booking ?? value?.data ?? value?.item;
  return nested && typeof nested === 'object' && !Array.isArray(nested) ? nested : value;
}

function firstString(...values) {
  return values.find((value) => typeof value === 'string' && value.trim())?.trim();
}

export function normalizeBooking(value) {
  const source = bookingSource(value);
  if (!source || typeof source !== 'object' || Array.isArray(source)) return undefined;
  const id = source.id ?? source.booking_id ?? source.bookingId;
  const propertyId = source.property_id ?? source.propertyId ?? source.property?.id ?? source.house_id;
  if (propertyId === undefined || propertyId === null) {
    throw new Error('Unexpected Lodgify booking response: property ID is missing.');
  }
  const stay = getAmaraStayByPropertyId(propertyId);
  if (!stay) return undefined;
  const arrival = validIsoDay(firstString(source.arrival, source.arrival_date, source.arrivalDate)?.slice(0, 10));
  const departure = validIsoDay(firstString(source.departure, source.departure_date, source.departureDate)?.slice(0, 10));
  const status = firstString(source.status, source.booking_status, source.bookingStatus);
  const guest = source.guest ?? source.booker ?? source.customer ?? {};
  const explicitFirstName = firstString(guest.first_name, guest.firstName, source.guest_first_name, source.guestFirstName);
  const fullName = firstString(guest.name, guest.full_name, guest.fullName, source.guest_name, source.guestName);
  if (id === undefined || !arrival || !departure || !status || (!explicitFirstName && !fullName)) {
    throw new Error('Unexpected Lodgify booking response for an AMARA stay.');
  }
  return {
    id: String(id), propertyId: String(propertyId), ...stay,
    arrival, departure, status, explicitFirstName, fullName
  };
}

function isConfirmed(booking) {
  return booking.status.toLocaleLowerCase('en') === 'booked';
}

function firstNameMatches(booking, suppliedFirstName) {
  const supplied = normalizeGuestName(suppliedFirstName);
  const explicit = normalizeGuestName(booking.explicitFirstName);
  if (explicit) return explicit === supplied;
  const full = normalizeGuestName(booking.fullName);
  return full === supplied || full.startsWith(`${supplied} `);
}

function extractCount(payload) {
  const value = payload?.count ?? payload?.total ?? payload?.totalCount ?? payload?.total_count;
  return Number.isInteger(Number(value)) && Number(value) >= 0 ? Number(value) : undefined;
}

async function listFilter(client, stayFilter) {
  const collected = [];
  for (let page = 1; page <= MAX_PAGES_PER_FILTER; page += 1) {
    const payload = await client.listBookings(stayFilter, page, PAGE_SIZE);
    const items = arrayFrom(payload, ['items', 'bookings', 'data']);
    collected.push(...items);
    const count = extractCount(payload);
    if (items.length < PAGE_SIZE || (count !== undefined && collected.length >= count)) return collected;
  }
  throw new Error('Lodgify booking result exceeded the bounded access window.');
}

export async function findUniqueEligibleBooking(apiKey, input, fetchImpl = fetch) {
  const client = createLodgifyClient({ apiKey, fetchImpl });
  const results = await Promise.all([
    listFilter(client, 'Upcoming'),
    listFilter(client, 'Current')
  ]);
  const normalized = new Map();
  for (const raw of results.flat()) {
    const booking = normalizeBooking(raw);
    if (booking) normalized.set(booking.id, booking);
  }
  const today = madridDateString();
  const matches = [...normalized.values()].filter((booking) => (
    isConfirmed(booking)
    && booking.arrival === input.arrival
    && booking.departure === input.departure
    && booking.departure >= today
    && firstNameMatches(booking, input.firstName)
  ));
  if (matches.length !== 1) throw new ExperienceAccessDenied();
  return matches[0];
}

export async function revalidateEligibleBooking(apiKey, bookingId, fetchImpl = fetch) {
  const client = createLodgifyClient({ apiKey, fetchImpl });
  const booking = normalizeBooking(await client.getBooking(bookingId));
  if (!booking || !isConfirmed(booking) || booking.departure < madridDateString()) {
    throw new ExperienceAccessDenied('session_ended');
  }
  return booking;
}
