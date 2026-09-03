/**
 * Names of the shared Location guide icon vocabulary.
 *
 * Lives in a TypeScript module so that content files and tests can import the
 * type without resolving an Astro component; `LocationGuideIcon.astro` re-exports
 * it for template consumers.
 */
export type LocationGuideIconName =
  | 'airport'
  | 'rental-car'
  | 'private-transfer'
  | 'taxi'
  | 'bus'
  | 'journey-time'
  | 'distance'
  | 'elevation'
  | 'walking-surface'
  | 'frequency'
  | 'municipality'
  | 'village-square'
  | 'protected-landscape'
  | 'local-shops'
  | 'bakery'
  | 'supermarket'
  | 'walkable'
  | 'pharmacy'
  | 'opening-hours'
  | 'longer-stay'
  | 'comparison'
  | 'temperature'
  | 'evening'
  | 'rainfall'
  | 'sunshine'
  | 'coast'
  | 'village';
