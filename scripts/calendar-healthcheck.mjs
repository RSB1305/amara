#!/usr/bin/env node
// AMARA Home-calendar healthcheck.
//
// Exercises the live search-calendar gateway across ~100 realistic scenarios and
// validates every 200 response against the exact contract the browser finder
// applies (src/scripts/staySearchFinder.ts). The finder disables a whole month
// the instant a response is a 502 or fails that contract, so this check treats
// either as a failure and exits non-zero — which fails the scheduled workflow and
// notifies the repository owner before a guest ever meets a dead calendar.
//
// A 502 is excused only when it is genuinely "every candidate stay is unpriced
// for that window" (the rate-publication horizon), verified per stay. It hits the
// public JSON API only; no credential, no build, no provider write.
//
// Target origin: CALENDAR_HEALTHCHECK_ORIGIN (defaults to the staging site, which
// is where the calendar currently lives; point it at the production apex after
// the Lodgify->Cloudflare cutover).

const ORIGIN = (process.env.CALENDAR_HEALTHCHECK_ORIGIN || 'https://amara-staging.pages.dev').replace(/\/$/, '');
const MODE = (process.env.CALENDAR_HEALTHCHECK_MODE || 'full').toLowerCase(); // 'full' | 'heartbeat'
const REQUEST_TIMEOUT_MS = 15_000;
const CONCURRENCY = 4;
const DAY_MS = 86_400_000;

// Lodgify allows ~100 requests/minute, shared account-wide across every guest
// calendar open, results search and quote. This check must never eat that budget,
// so it paces itself to a reserved slice (default 40/min) and leaves the rest for
// real guests. Each search-calendar request fans out on the server to availability
// + rates per candidate stay, so cost is counted in those Lodgify units.
const MAX_LODGIFY_RPM = Number(process.env.CALENDAR_HEALTHCHECK_MAX_LODGIFY_RPM || 40);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Token bucket: MAX_LODGIFY_RPM tokens refill per minute; each Lodgify-costing
// action waits for enough tokens before it is dispatched.
let rateTokens = MAX_LODGIFY_RPM;
let rateLast = Date.now();
async function reserveLodgify(cost) {
  for (;;) {
    const now = Date.now();
    rateTokens = Math.min(MAX_LODGIFY_RPM, rateTokens + ((now - rateLast) / 60_000) * MAX_LODGIFY_RPM);
    rateLast = now;
    if (rateTokens >= cost) { rateTokens -= cost; return; }
    await sleep(Math.ceil(((cost - rateTokens) / MAX_LODGIFY_RPM) * 60_000));
  }
}

const isoDay = (date) => date.toISOString().slice(0, 10);
const fromToday = (days) => {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCDate(date.getUTCDate() + days);
  return isoDay(date);
};
const addDays = (value, amount) => {
  const date = new Date(`${value}T00:00:00.000Z`);
  date.setUTCDate(date.getUTCDate() + amount);
  return isoDay(date);
};
const nightsBetween = (start, end) =>
  Math.round((Date.parse(`${end}T00:00:00.000Z`) - Date.parse(`${start}T00:00:00.000Z`)) / DAY_MS);

// The exact validity rule the finder applies to a single rate option.
const validRateOption = (option) =>
  Number.isFinite(option?.nightlyRate) && Number(option?.nightlyRate) >= 0 &&
  (option?.minStay === null || (Number.isInteger(option?.minStay) && option.minStay >= 0)) &&
  (option?.maxStay === null || (Number.isInteger(option?.maxStay) && option.maxStay >= 0));

// The exact per-month contract the finder requires before it will render days.
function contractProblems(payload, { destination, guests, start, end }) {
  const expected = Array.from({ length: nightsBetween(start, end) + 1 }, (_, i) => addDays(start, i));
  const stays = payload?.stays;
  const keys = Array.isArray(stays) ? stays.map((stay) => stay.stay) : [];
  const problems = [];
  if (payload?.destination !== destination) problems.push(`destination echo=${JSON.stringify(payload?.destination)}`);
  if (payload?.guests !== guests) problems.push(`guests echo=${JSON.stringify(payload?.guests)}`);
  if (payload?.start !== start) problems.push(`start echo=${JSON.stringify(payload?.start)}`);
  if (payload?.end !== end) problems.push(`end echo=${JSON.stringify(payload?.end)}`);
  if (!Array.isArray(stays)) { problems.push('stays is not an array'); return problems; }
  if (!keys.every((key) => typeof key === 'string')) problems.push('a stay key is not a string');
  if (new Set(keys).size !== keys.length) problems.push('duplicate stay keys');
  for (const stay of stays) {
    if (!Array.isArray(stay.days)) { problems.push(`${stay.stay}: days is not an array`); continue; }
    if (stay.days.length !== expected.length) problems.push(`${stay.stay}: ${stay.days.length} days, expected ${expected.length}`);
    stay.days.forEach((day, index) => {
      if (day.date !== expected[index]) problems.push(`${stay.stay}[${index}]: date ${day.date} != ${expected[index]}`);
      if (typeof day.available !== 'boolean') problems.push(`${stay.stay} ${day.date}: available is not boolean`);
      if (!(day.currency === null || (typeof day.currency === 'string' && day.currency.trim()))) {
        problems.push(`${stay.stay} ${day.date}: invalid currency`);
      }
      if (!Array.isArray(day.options)) problems.push(`${stay.stay} ${day.date}: options is not an array`);
      else if (!day.options.every(validRateOption)) problems.push(`${stay.stay} ${day.date}: malformed rate option`);
    });
  }
  return problems;
}

// Candidate stays per destination and guest count (mirrors booking-gateway/stays.mjs;
// kept inline so the healthcheck stays a single dependency-free file).
const SEARCH_STAYS = [
  { stay: 'farah', destination: 'frigiliana', capacity: 2 },
  { stay: 'lounis', destination: 'frigiliana', capacity: 2 },
  { stay: 'zaid', destination: 'frigiliana', capacity: 2 },
  { stay: 'maha', destination: 'frigiliana', capacity: 2 },
  { stay: 'playa', destination: 'nerja', capacity: 2 },
  { stay: 'tarifa', destination: 'tarifa', capacity: 4 }
];
const candidatesFor = (destination, guests) => SEARCH_STAYS
  .filter((candidate) => (destination === 'all' || candidate.destination === destination) && candidate.capacity >= guests)
  .map((candidate) => candidate.stay);

// Server-side Lodgify calls a search-calendar request triggers: availability +
// rates per candidate stay. Zero candidates still hits the gateway once.
const lodgifyCost = (destination, guests) => candidatesFor(destination, guests).length * 2 || 1;

async function getJson(path) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const response = await fetch(`${ORIGIN}${path}`, {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
      });
      const payload = await response.json().catch(() => null);
      return { status: response.status, payload };
    } catch (error) {
      if (attempt === 0) { await new Promise((resolve) => setTimeout(resolve, 750)); continue; }
      return { status: 0, payload: null, error: error?.message || 'network error' };
    }
  }
  return { status: 0, payload: null };
}

async function stayHasPrices(stay, start, end) {
  await reserveLodgify(1);
  const { status, payload } = await getJson(`/api/booking/rates?stay=${stay}&start=${start}&end=${end}`);
  return status === 200 && Array.isArray(payload?.days)
    && payload.days.some((day) => Array.isArray(day.options) && day.options.length > 0);
}

async function runScenario(scenario) {
  const { destination, guests, start, end } = scenario;
  await reserveLodgify(lodgifyCost(destination, guests));
  const { status, payload, error } = await getJson(
    `/api/booking/search-calendar?destination=${destination}&guests=${guests}&start=${start}&end=${end}`
  );
  if (status === 200) {
    const problems = contractProblems(payload, scenario);
    return problems.length
      ? { verdict: 'FAIL', note: `contract broken: ${problems.slice(0, 3).join('; ')}` }
      : { verdict: 'PASS', stays: (payload?.stays || []).length };
  }
  if (status === 502) {
    const candidates = candidatesFor(destination, guests);
    if (candidates.length === 0) return { verdict: 'FAIL', note: '502 with no candidate stays (should be 200 with an empty list)' };
    const priced = [];
    for (const stay of candidates) if (await stayHasPrices(stay, start, end)) priced.push(stay);
    return priced.length === 0
      ? { verdict: 'HORIZON', note: `502: every candidate is unpriced for this window (${candidates.join(', ')})` }
      : { verdict: 'FAIL', note: `502 but these stays are priced: ${priced.join(', ')} — the finder blanks the month for a recoverable failure` };
  }
  return { verdict: 'FAIL', note: error ? `request failed: ${error}` : `HTTP ${status}` };
}

function buildScenarios() {
  const scenarios = [];
  const add = (destination, guests, startOffset, length) => scenarios.push({
    destination, guests, start: fromToday(startOffset), end: fromToday(startOffset + length),
    label: `${destination} g${guests} +${startOffset}..+${startOffset + length}`
  });

  // Heartbeat: a broad probe (every stay via "all") plus the two single-stay
  // destinations, enough to catch any live outage within one run at minimal
  // Lodgify cost (~16 calls). Meant to run frequently between the daily deep runs.
  if (MODE === 'heartbeat') {
    add('all', 2, 1, 30);
    add('nerja', 2, 1, 30);
    add('tarifa', 2, 1, 30);
    return scenarios;
  }

  // Sweep the default "all" view across the whole booking horizon so a
  // date-specific defect (like the historical 20/21 Sep rate) cannot hide.
  [0, 1, 7, 14, 21, 30, 45, 60, 75, 90, 110, 130, 150, 175, 200, 230, 260, 290, 320, 350]
    .forEach((offset) => add('all', 2, offset, 30));
  // Every destination across every supported guest count, near term.
  for (const destination of ['all', 'frigiliana', 'nerja', 'tarifa']) {
    for (const guests of [1, 2, 3, 4]) add(destination, guests, 5, 30);
  }
  // Mid and far-mid windows per destination for guests 1 and 2.
  for (const destination of ['all', 'frigiliana', 'nerja', 'tarifa']) {
    for (const guests of [1, 2]) { add(destination, guests, 90, 30); add(destination, guests, 200, 30); }
  }
  // Boundaries: single day and the maximum 44-night span at several offsets.
  [3, 10, 20, 45, 90, 150, 250].forEach((offset) => add('all', 2, offset, 0));
  [1, 30, 90, 180, 280].forEach((offset) => add('all', 2, offset, 44));
  // Windows that contain the historically broken dates, plus per-destination sweeps.
  [1, 3, 6].forEach((offset) => add('frigiliana', 2, offset, 30));
  [1, 5, 10, 20, 44].forEach((length) => add('all', 2, 30, length));
  [30, 60, 120, 240, 300].forEach((offset) => { add('nerja', 2, offset, 30); add('tarifa', 2, offset, 30); });
  [30, 60, 120, 180, 240].forEach((offset) => add('frigiliana', 2, offset, 30));
  for (const destination of ['all', 'frigiliana', 'nerja', 'tarifa']) add(destination, 2, 5, 0);

  return scenarios;
}

// Malformed requests must be rejected as 4xx, never crash the gateway (5xx).
function negativeChecks() {
  return [
    ['past start date', `destination=all&guests=2&start=${fromToday(-3)}&end=${fromToday(10)}`],
    ['span longer than 45 days', `destination=all&guests=2&start=${fromToday(1)}&end=${fromToday(60)}`],
    ['beyond the future horizon', `destination=all&guests=2&start=${fromToday(740)}&end=${fromToday(760)}`],
    ['guests above range', `destination=all&guests=5&start=${fromToday(1)}&end=${fromToday(10)}`],
    ['guests below range', `destination=all&guests=0&start=${fromToday(1)}&end=${fromToday(10)}`],
    ['unknown destination', `destination=malaga&guests=2&start=${fromToday(1)}&end=${fromToday(10)}`],
    ['end before start', `destination=all&guests=2&start=${fromToday(10)}&end=${fromToday(5)}`],
    ['non-ISO date', `destination=all&guests=2&start=2026-9-1&end=${fromToday(10)}`],
    ['duplicate parameter', `destination=all&guests=2&guests=3&start=${fromToday(1)}&end=${fromToday(10)}`],
    ['unsupported parameter', `destination=all&guests=2&start=${fromToday(1)}&end=${fromToday(10)}&foo=bar`]
  ];
}

async function mapWithConcurrency(items, worker) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index], index);
    }
  }));
  return results;
}

async function main() {
  const scenarios = buildScenarios();
  console.log(`AMARA calendar healthcheck (${MODE}) against ${ORIGIN}`);
  console.log(`${scenarios.length} positive scenarios + ${negativeChecks().length} negative checks, paced to <=${MAX_LODGIFY_RPM} Lodgify req/min — ${new Date().toISOString()}\n`);

  const results = await mapWithConcurrency(scenarios, runScenario);
  let pass = 0; let horizon = 0; const failures = [];
  results.forEach((result, index) => {
    const scenario = scenarios[index];
    if (result.verdict === 'PASS') pass += 1;
    else if (result.verdict === 'HORIZON') { horizon += 1; console.log(`HORIZON  ${scenario.label}  ${result.note}`); }
    else { failures.push(`${scenario.label} — ${result.note}`); console.log(`FAIL     ${scenario.label}  ${result.note}`); }
  });

  const negatives = negativeChecks();
  const negativeResults = await mapWithConcurrency(negatives, async ([, query]) => {
    const { status } = await getJson(`/api/booking/search-calendar?${query}`);
    return status;
  });
  let negativePass = 0; const negativeFailures = [];
  negativeResults.forEach((status, index) => {
    if (status >= 400 && status < 500) negativePass += 1;
    else { negativeFailures.push(`${negatives[index][0]} -> HTTP ${status}`); console.log(`FAIL     negative: ${negatives[index][0]} -> HTTP ${status}`); }
  });

  console.log(`\nPositive: ${pass} pass, ${horizon} at rate horizon (excused), ${failures.length} fail`);
  console.log(`Negative: ${negativePass} pass, ${negativeFailures.length} fail`);

  if (failures.length || negativeFailures.length) {
    console.log(`\nCALENDAR HEALTHCHECK FAILED — ${failures.length + negativeFailures.length} problem(s). The Home finder is degraded.`);
    process.exit(1);
  }
  console.log('\nCalendar healthcheck passed: every scenario returns bookable, contract-valid data.');
}

main().catch((error) => {
  console.error(`Calendar healthcheck crashed: ${error?.stack || error}`);
  process.exit(1);
});
