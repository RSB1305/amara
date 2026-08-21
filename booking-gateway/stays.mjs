export const AMARA_STAY_KEYS = Object.freeze([
  'maha',
  'lounis',
  'zaid',
  'farah',
  'playa',
  'tarifa',
]);

const AMARA_STAY_KEY_SET = new Set(AMARA_STAY_KEYS);

// Maha is the only stay whose Lodgify property and single-room resolution has
// been verified by the sandbox MVP. Provider IDs remain internal to the adapter.
const LODGIFY_STAY_MAPPINGS = Object.freeze({
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
