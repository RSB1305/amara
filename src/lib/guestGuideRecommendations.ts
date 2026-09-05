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
  from: Record<KnowledgeStayKey, string>;
}

const STAYS: Record<KnowledgeStayKey, string> = {
  'casa-amara': 'Casa AMARA (Frigiliana)',
  'amara-playa': 'AMARA Playa (Nerja)',
  'amara-family-surf': 'AMARA Family & Surf (Tarifa)'
};

const LABELS: Record<AmaraLanguage, Labels> = {
  en: { address: 'Address', call: 'Call', whatsapp: 'WhatsApp', website: 'Website', route: 'Official route', reserve: 'Reserve', distance: 'Distance', checked: 'Checked', walk: 'on foot', drive: 'by car', from: STAYS },
  de: { address: 'Adresse', call: 'Anrufen', whatsapp: 'WhatsApp', website: 'Website', route: 'Offizielle Route', reserve: 'Reservieren', distance: 'Entfernung', checked: 'Stand', walk: 'zu Fuß', drive: 'mit dem Auto', from: STAYS },
  es: { address: 'Dirección', call: 'Llamar', whatsapp: 'WhatsApp', website: 'Sitio web', route: 'Ruta oficial', reserve: 'Reservar', distance: 'Distancia', checked: 'Comprobado', walk: 'a pie', drive: 'en coche', from: STAYS },
  nl: { address: 'Adres', call: 'Bellen', whatsapp: 'WhatsApp', website: 'Website', route: 'Officiële route', reserve: 'Reserveren', distance: 'Afstand', checked: 'Gecontroleerd', walk: 'te voet', drive: 'met de auto', from: STAYS },
  sv: { address: 'Adress', call: 'Ring', whatsapp: 'WhatsApp', website: 'Webbplats', route: 'Officiell led', reserve: 'Boka', distance: 'Avstånd', checked: 'Kontrollerad', walk: 'till fots', drive: 'med bil', from: STAYS }
};

const LOCALES: Record<AmaraLanguage, string> = { en: 'en-GB', de: 'de-DE', es: 'es-ES', nl: 'nl-NL', sv: 'sv-SE' };

function formatDate(iso: string, lang: AmaraLanguage): string {
  const date = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(LOCALES[lang], { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' }).format(date);
}

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
  actions: GuestGuideRecommendationAction[];
}

/** Place list for a card that references several records; unknown ids are skipped. */
export function buildRecommendationPlaces(ids: readonly string[], lang: AmaraLanguage): GuestGuidePlaceRow[] {
  const t = LABELS[lang];
  const rows: GuestGuidePlaceRow[] = [];
  for (const id of ids) {
    const record = getRecommendation(id);
    if (!record) continue;
    const { place } = record;
    const actions: GuestGuideRecommendationAction[] = [];
    if (place.phone) actions.push({ label: t.call, href: `tel:${place.phone}` });
    if (place.whatsapp) actions.push({ label: t.whatsapp, href: `https://wa.me/${place.whatsapp.replace(/[^0-9]/g, '')}` });
    if (place.website) actions.push({ label: place.kind === 'hike' ? t.route : t.website, href: place.website });
    if (place.reservationUrl) actions.push({ label: t.reserve, href: place.reservationUrl });
    rows.push({ name: place.name, mapsUrl: mapsUrlFor(record), address: place.address, actions });
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

  rows.push({ label: t.checked, value: formatDate(record.checkedAt, lang) });

  if (place.phone) actions.push({ label: t.call, href: `tel:${place.phone}`, variant: 'secondary' });
  if (place.whatsapp) actions.push({ label: t.whatsapp, href: `https://wa.me/${place.whatsapp.replace(/[^0-9]/g, '')}`, variant: 'secondary' });
  if (place.website) actions.push({ label: place.kind === 'hike' ? t.route : t.website, href: place.website, variant: 'secondary' });
  if (place.reservationUrl) actions.push({ label: t.reserve, href: place.reservationUrl, variant: 'primary' });

  return { mapsUrl: mapsUrlFor(record), rows, actions };
}
