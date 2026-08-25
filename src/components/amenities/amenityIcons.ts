import {
  AlarmSmoke,
  Armchair,
  ArrowUpDown,
  BadgeEuro,
  Baby,
  Bath,
  BedDouble,
  BedSingle,
  Blinds,
  Bubbles,
  Building2,
  Cable,
  CarFront,
  CircleAlert,
  Coffee,
  CookingPot,
  createLucideIcon,
  Droplets,
  Eye,
  FileBadge2,
  FireExtinguisher,
  Flame,
  Footprints,
  GlassWater,
  LampDesk,
  Microwave,
  PackageOpen,
  PawPrint,
  Refrigerator,
  ShowerHead,
  ShieldCheck,
  Shirt,
  Snowflake,
  Sofa,
  Sparkles,
  Sun,
  TableProperties,
  Thermometer,
  Trees,
  Tv,
  Users,
  UtensilsCrossed,
  WashingMachine,
  Wifi,
  Wind
} from '@lucide/astro';
import type { AstroComponent } from '@lucide/astro';

/**
 * Lucide redrew and renamed `waves` to `waves-horizontal` in its 1.x line, so importing
 * the icon by name would silently restyle the pool row. This pins the live glyph while
 * retaining Lucide's rendering contract.
 */
const Waves = createLucideIcon('waves', [
  ['path', { d: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' }],
  ['path', { d: 'M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' }],
  ['path', { d: 'M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' }]
]) as AstroComponent;

export type AmenitySpecIcon =
  | 'occupancy'
  | 'area'
  | 'terrace'
  | 'elevator'
  | 'outdoor-grill'
  | 'bed'
  | 'price'
  | 'access'
  | 'parking'
  | 'pets'
  | 'pool'
  | 'view'
  | 'outdoor'
  | 'sun-loungers'
  | 'hammock'
  | 'outdoor-shower'
  | 'kitchen'
  | 'washing-machine'
  | 'pellet-stove'
  | 'fireplace'
  | 'shower'
  | 'air-conditioning'
  | 'license'
  | 'clothing-storage'
  | 'crib'
  | 'bed-linens'
  | 'bathroom'
  | 'iron'
  | 'toiletries'
  | 'first-aid'
  | 'outdoor-dining'
  | 'dining-table'
  | 'ethernet'
  | 'room-darkening'
  | 'television'
  | 'fire-extinguisher'
  | 'hair-dryer'
  | 'outdoor-furniture'
  | 'refrigerator'
  | 'dishes'
  | 'essentials'
  | 'cooking-basics'
  | 'heating'
  | 'stove'
  | 'coffee'
  | 'coffee-maker'
  | 'safety-alarm'
  | 'microwave'
  | 'living-room'
  | 'smoke-alarm'
  | 'cleaning-products'
  | 'workspace'
  | 'toaster'
  | 'hot-water'
  | 'kettle'
  | 'wine-glasses'
  | 'wifi'
  | 'drying-rack'
  | 'extra-bedding';

/** One stable icon vocabulary keeps every apartment inventory visually consistent. */
export const amenityIcons = {
  occupancy: Users,
  bed: BedDouble,
  price: BadgeEuro,
  access: Footprints,
  parking: CarFront,
  pets: PawPrint,
  pool: Waves,
  view: Eye,
  outdoor: Trees,
  /** Floor area. A terrace is `terrace`, a balcony or patio is `outdoor`. */
  area: Building2,
  terrace: Sun,
  /** Lucide has no lift glyph; the vertical arrows are the closest reading. */
  elevator: ArrowUpDown,
  'outdoor-grill': Flame,
  'sun-loungers': Sun,
  hammock: BedSingle,
  'outdoor-shower': ShowerHead,
  kitchen: CookingPot,
  'washing-machine': WashingMachine,
  'pellet-stove': Flame,
  fireplace: Flame,
  shower: ShowerHead,
  'air-conditioning': Snowflake,
  license: FileBadge2,
  'clothing-storage': Shirt,
  crib: Baby,
  'bed-linens': BedSingle,
  bathroom: Bath,
  iron: Shirt,
  toiletries: Bubbles,
  'first-aid': ShieldCheck,
  'outdoor-dining': UtensilsCrossed,
  'dining-table': TableProperties,
  ethernet: Cable,
  'room-darkening': Blinds,
  television: Tv,
  'fire-extinguisher': FireExtinguisher,
  'hair-dryer': Wind,
  'outdoor-furniture': Armchair,
  refrigerator: Refrigerator,
  dishes: UtensilsCrossed,
  essentials: PackageOpen,
  'cooking-basics': CookingPot,
  heating: Thermometer,
  stove: CookingPot,
  coffee: Coffee,
  'coffee-maker': Coffee,
  'safety-alarm': CircleAlert,
  microwave: Microwave,
  'living-room': Sofa,
  'smoke-alarm': AlarmSmoke,
  'cleaning-products': Sparkles,
  workspace: LampDesk,
  toaster: CookingPot,
  'hot-water': Droplets,
  kettle: CookingPot,
  'wine-glasses': GlassWater,
  wifi: Wifi,
  'drying-rack': Shirt,
  'extra-bedding': BedSingle
} satisfies Record<AmenitySpecIcon, typeof Armchair>;

/**
 * The rental SSOT names its amenity features in camelCase (`privateTerrace`,
 * `doubleRainShower`), while this vocabulary is keyed by the amenity catalog's
 * kebab-case concepts. The rental page used to bridge that gap with a second
 * icon map of its own, which drifted: a pool was `Waves` here and `Droplets`
 * there, and `Building2` meant "floor area" in its key-facts table and "lift"
 * in its amenity list on the same page.
 *
 * This table is the bridge. Several SSOT names deliberately share one concept —
 * a rain shower and a double rain shower are both showers — because the
 * vocabulary names what a reader sees, not what the data model distinguishes.
 */
export const rentalAmenityIcons: Record<string, AmenitySpecIcon> = {
  ac: 'air-conditioning',
  balcony: 'outdoor',
  beachAccess: 'access',
  childFriendly: 'crib',
  doubleRainShower: 'shower',
  elevator: 'elevator',
  fireplace: 'fireplace',
  hammock: 'hammock',
  kitchen: 'kitchen',
  outdoorGrill: 'outdoor-grill',
  outdoorShower: 'outdoor-shower',
  patio: 'outdoor',
  pelletStove: 'pellet-stove',
  pool: 'pool',
  poolType: 'pool',
  privatePatio: 'outdoor',
  privateTerrace: 'terrace',
  rainShower: 'shower',
  sunLoungers: 'sun-loungers',
  tv: 'television',
  washingMachine: 'washing-machine',
  wifi: 'wifi'
};
