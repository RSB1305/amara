export const AMARA_STAY_KEYS = Object.freeze([
  'maha',
  'lounis',
  'zaid',
  'farah',
  'playa',
  'tarifa',
]);

const AMARA_STAY_KEY_SET = new Set(AMARA_STAY_KEYS);

// Production uses only provider IDs verified by the sandbox MVP. This module is
// server-only and must never be imported by browser code or serialized publicly.
const LODGIFY_STAY_MAPPINGS = Object.freeze({
  maha: Object.freeze({
    propertyId: '408325',
    roomTypeId: '474288',
  }),
});

// Discovery remains an explicit sandbox concern for controlled verification of
// future stays. Production requests never consume these dynamic selectors.
const LODGIFY_DISCOVERY_MAPPINGS = Object.freeze({
  maha: Object.freeze({
    propertyNamePattern: /\bmaha\b/i,
    roomStrategy: 'single',
  }),
});

export function isAmaraStayKey(stay) {
  return AMARA_STAY_KEY_SET.has(stay);
}

export function getLodgifyStayMapping(stay) {
  return LODGIFY_STAY_MAPPINGS[stay];
}

export function getLodgifyDiscoveryMapping(stay) {
  return LODGIFY_DISCOVERY_MAPPINGS[stay];
}
