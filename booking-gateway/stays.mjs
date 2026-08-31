export const AMARA_STAY_KEYS = Object.freeze([
  'maha',
  'lounis',
  'zaid',
  'farah',
  'playa',
  'tarifa',
]);

export const AMARA_SEARCH_DESTINATIONS = Object.freeze([
  'all',
  'frigiliana',
  'nerja',
  'tarifa',
]);

const AMARA_STAY_KEY_SET = new Set(AMARA_STAY_KEYS);

// Production uses only provider IDs verified by the sandbox MVP. This module is
// server-only and must never be imported by browser code or serialized publicly.
const LODGIFY_STAY_MAPPINGS = Object.freeze({
  zaid: Object.freeze({
    propertyId: '408323',
    roomTypeId: '474286',
  }),
  lounis: Object.freeze({
    propertyId: '408324',
    roomTypeId: '474287',
  }),
  maha: Object.freeze({
    propertyId: '408325',
    roomTypeId: '474288',
  }),
  farah: Object.freeze({
    propertyId: '408326',
    roomTypeId: '474289',
  }),
  playa: Object.freeze({
    propertyId: '408327',
    roomTypeId: '474290',
  }),
  tarifa: Object.freeze({
    propertyId: '544478',
    roomTypeId: '611138',
  }),
});

// Discovery remains an explicit sandbox concern for controlled verification of
// future stays. Production requests never consume these dynamic selectors.
const LODGIFY_DISCOVERY_MAPPINGS = Object.freeze({
  farah: Object.freeze({
    propertyNamePattern: /\bfarah\b/i,
    roomStrategy: 'single',
  }),
  lounis: Object.freeze({
    propertyNamePattern: /\blounis\b/i,
    roomStrategy: 'single',
  }),
  zaid: Object.freeze({
    propertyNamePattern: /\bzaid\b/i,
    roomStrategy: 'single',
  }),
  maha: Object.freeze({
    propertyNamePattern: /\bmaha\b/i,
    roomStrategy: 'single',
  }),
  playa: Object.freeze({
    propertyNamePattern: /\bplaya\b/i,
    roomStrategy: 'single',
  }),
  tarifa: Object.freeze({
    propertyNamePattern: /\b(?:AMARA\s+)?Family\s*(?:&|and)\s*Surf\b/i,
    roomStrategy: 'single',
  }),
});

const SEARCH_STAYS = Object.freeze([
  Object.freeze({ stay: 'farah', destination: 'frigiliana', capacity: 2 }),
  Object.freeze({ stay: 'lounis', destination: 'frigiliana', capacity: 2 }),
  Object.freeze({ stay: 'zaid', destination: 'frigiliana', capacity: 2 }),
  Object.freeze({ stay: 'maha', destination: 'frigiliana', capacity: 2 }),
  Object.freeze({ stay: 'playa', destination: 'nerja', capacity: 2 }),
  Object.freeze({ stay: 'tarifa', destination: 'tarifa', capacity: 4 }),
]);

export function isAmaraStayKey(stay) {
  return AMARA_STAY_KEY_SET.has(stay);
}

export function getLodgifyStayMapping(stay) {
  return LODGIFY_STAY_MAPPINGS[stay];
}

export function getAmaraStayByPropertyId(propertyId) {
  const match = SEARCH_STAYS.find((candidate) => (
    String(getLodgifyStayMapping(candidate.stay)?.propertyId) === String(propertyId)
  ));
  return match ? { stay: match.stay, destination: match.destination } : undefined;
}

export function getLodgifyDiscoveryMapping(stay) {
  return LODGIFY_DISCOVERY_MAPPINGS[stay];
}

export function isAmaraSearchDestination(destination) {
  return AMARA_SEARCH_DESTINATIONS.includes(destination);
}

export function getSearchStayCandidates(destination, guests) {
  return SEARCH_STAYS
    .filter((candidate) => (
      (destination === 'all' || candidate.destination === destination)
      && candidate.capacity >= guests
    ))
    .map((candidate) => ({
      ...candidate,
      providerMapping: getLodgifyStayMapping(candidate.stay),
    }));
}
