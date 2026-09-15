import { getRecommendation } from '../../knowledge/recommendations';
import type { KnowledgeRecommendation, KnowledgeStayKey } from '../../knowledge/schema';
import type { AmaraLanguage } from '../types/seo';

/**
 * Projection of one approved recommendation record into the Guest Guide card:
 * the map pin, a short language-neutral fact strip (address, distance from the
 * stay, check date) and direct actions (call, WhatsApp, website, reservation).
 * Prose stays in the guide content; the record is maintained once in knowledge/.
 */
export interface GuestGuideFactRow {
  label: string;
  value: string;
  href?: string;
}

export interface GuestGuideRecommendationAction {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface GuestGuideRecommendationView {
  mapsUrl?: string;
  rows: GuestGuideFactRow[];
  actions: GuestGuideRecommendationAction[];
}

interface Labels {
  address: string;
  call: string;
  whatsapp: string;
  website: string;
  route: string;
  reserve: string;
  distance: string;
  checked: string;
  walk: string;
  drive: string;
  parkingYes: string;
  parkingNo: string;
  from: Record<KnowledgeStayKey, string>;
}

const STAYS: Record<KnowledgeStayKey, string> = {
  'casa-amara': 'Casa AMARA (Frigiliana)',
  'amara-playa': 'AMARA Playa (Nerja)',
  'amara-family-surf': 'AMARA Family & Surf (Tarifa)'
};

const LABELS: Record<AmaraLanguage, Labels> = {
  en: { address: 'Address', call: 'Call', whatsapp: 'WhatsApp', website: 'Website', route: 'Official route', reserve: 'Reserve', distance: 'Distance', checked: 'Checked', walk: 'on foot', drive: 'by car', parkingYes: 'Parking', parkingNo: 'Street only', from: STAYS },
  de: { address: 'Adresse', call: 'Anrufen', whatsapp: 'WhatsApp', website: 'Website', route: 'Offizielle Route', reserve: 'Reservieren', distance: 'Entfernung', checked: 'Stand', walk: 'zu Fuß', drive: 'mit dem Auto', parkingYes: 'Parkplatz', parkingNo: 'nur Straße', from: STAYS },
  es: { address: 'Dirección', call: 'Llamar', whatsapp: 'WhatsApp', website: 'Sitio web', route: 'Ruta oficial', reserve: 'Reservar', distance: 'Distancia', checked: 'Comprobado', walk: 'a pie', drive: 'en coche', parkingYes: 'Aparcamiento', parkingNo: 'Solo calle', from: STAYS },
  nl: { address: 'Adres', call: 'Bellen', whatsapp: 'WhatsApp', website: 'Website', route: 'Officiële route', reserve: 'Reserveren', distance: 'Afstand', checked: 'Gecontroleerd', walk: 'te voet', drive: 'met de auto', parkingYes: 'Parkeren', parkingNo: 'Alleen straat', from: STAYS },
  sv: { address: 'Adress', call: 'Ring', whatsapp: 'WhatsApp', website: 'Webbplats', route: 'Officiell led', reserve: 'Boka', distance: 'Avstånd', checked: 'Kontrollerad', walk: 'till fots', drive: 'med bil', parkingYes: 'Parkering', parkingNo: 'Endast gata', from: STAYS }
};

function formatDistance(metres: number, lang: AmaraLanguage): string {
  if (metres >= 1000) {
    const km = (metres / 1000).toFixed(1).replace(/\.0$/, '');
    return `${lang === 'en' ? km : km.replace('.', ',')} km`;
  }
  return `${metres} m`;
}

export function mapsUrlFor(record: KnowledgeRecommendation): string | undefined {
  const { place } = record;
  if (place.placeId) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}&query_place_id=${encodeURIComponent(place.placeId)}`;
  }
  return place.mapsUrl;
}

export interface GuestGuidePlaceRow {
  name: string;
  mapsUrl?: string;
  address?: string;
  /** Formatted, approximate distance/time from the stay, when the record carries one. */
  distance?: string;
  /** True/false when the record states whether the place has parking; undefined otherwise. */
  parking?: boolean;
  /** Localized chip label for the parking state. */
  parkingLabel?: string;
  actions: GuestGuideRecommendationAction[];
}

/** Place list for a card that references several records; unknown ids are skipped. */
export function buildRecommendationPlaces(
  ids: readonly string[],
  lang: AmaraLanguage,
  stayKey?: KnowledgeStayKey
): GuestGuidePlaceRow[] {
  const t = LABELS[lang];
  const rows: GuestGuidePlaceRow[] = [];
  const hasDistance = (entry: { distanceMetres?: number; walkMinutes?: number; driveMinutes?: number }) =>
    entry.distanceMetres !== undefined || entry.walkMinutes !== undefined || entry.driveMinutes !== undefined;
  for (const id of ids) {
    const record = getRecommendation(id);
    if (!record) continue;
    const { place } = record;
    const actions: GuestGuideRecommendationAction[] = [];
    if (place.phone) actions.push({ label: t.call, href: `tel:${place.phone}` });
    if (place.whatsapp) actions.push({ label: t.whatsapp, href: `https://wa.me/${place.whatsapp.replace(/[^0-9]/g, '')}` });
    if (place.website) actions.push({ label: place.kind === 'hike' ? t.route : t.website, href: place.website });
    if (place.reservationUrl) actions.push({ label: t.reserve, href: place.reservationUrl });

    // Only show a distance measured from this page's stay. A record reused from another
    // location (its access from a different stay) then shows no distance instead of a wrong one.
    const accessList = record.access ?? [];
    const access = stayKey
      ? accessList.find((entry) => entry.from === stayKey && hasDistance(entry))
      : accessList.find(hasDistance);
    let distance: string | undefined;
    if (access) {
      const parts: string[] = [];
      if (access.distanceMetres !== undefined) parts.push(`ca. ${formatDistance(access.distanceMetres, lang)}`);
      if (access.walkMinutes !== undefined) parts.push(`~${access.walkMinutes} min ${t.walk}`);
      if (access.driveMinutes !== undefined) parts.push(`~${access.driveMinutes} min ${t.drive}`);
      if (parts.length) distance = parts.join(' · ');
    }

    rows.push({
      name: place.name,
      mapsUrl: mapsUrlFor(record),
      address: place.address,
      distance,
      parking: place.parking,
      parkingLabel: place.parking === undefined ? undefined : place.parking ? t.parkingYes : t.parkingNo,
      actions
    });
  }
  return rows;
}

export function buildRecommendationView(id: string, lang: AmaraLanguage): GuestGuideRecommendationView | undefined {
  const record = getRecommendation(id);
  if (!record) return undefined;
  const t = LABELS[lang];
  const { place } = record;
  const rows: GuestGuideFactRow[] = [];
  const actions: GuestGuideRecommendationAction[] = [];

  if (place.address) rows.push({ label: t.address, value: place.address });

  for (const access of record.access ?? []) {
    const parts: string[] = [];
    if (access.distanceMetres !== undefined) parts.push(`ca. ${formatDistance(access.distanceMetres, lang)}`);
    if (access.walkMinutes !== undefined) parts.push(`~${access.walkMinutes} min ${t.walk}`);
    if (access.driveMinutes !== undefined) parts.push(`~${access.driveMinutes} min ${t.drive}`);
    if (!parts.length) continue;
    rows.push({ label: t.distance, value: `${parts.join(' · ')} · ${t.from[access.from]}` });
  }

  if (place.phone) actions.push({ label: t.call, href: `tel:${place.phone}`, variant: 'secondary' });
  if (place.whatsapp) actions.push({ label: t.whatsapp, href: `https://wa.me/${place.whatsapp.replace(/[^0-9]/g, '')}`, variant: 'secondary' });
  if (place.website) actions.push({ label: place.kind === 'hike' ? t.route : t.website, href: place.website, variant: 'secondary' });
  if (place.reservationUrl) actions.push({ label: t.reserve, href: place.reservationUrl, variant: 'primary' });

  return { mapsUrl: mapsUrlFor(record), rows, actions };
}
