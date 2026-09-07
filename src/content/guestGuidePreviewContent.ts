import type { LocalizedText } from '../types/content';
import type { StaySearchDestination } from '../lib/staySearchHref';

/**
 * The Guest Guide "peek" shown as a small phone beside the public-to-guest
 * bridge (DR-GUEST-005). It is a localized HTML rendition of the Guest Guide
 * home screen — never a screenshot — so it follows the page language and never
 * dates. The three cards are the guide's real home menu (apartment, essentials,
 * AMARA Experience) and hold for every destination; only the cover photo and
 * the destination in the title change per page. To swap a cover, change the
 * `cover` path for that destination here — it is the single source.
 */
export interface GuestGuidePreviewCard {
  /** Decorative glyph in the round card badge. */
  icon: string;
  title: LocalizedText;
  meta: LocalizedText;
}

export interface GuestGuidePreviewDestination {
  /** Destination name as printed (proper noun, not translated). */
  name: string;
  /** Cover photo for the phone hero. Swap this path to change the image. */
  cover: string;
  coverAlt: LocalizedText;
  /** Optional CSS object-position for the cover crop. */
  focalPoint?: string;
}

export const guestGuidePreviewContent = {
  logout: {
    en: 'Log out',
    de: 'Abmelden',
    es: 'Salir',
    nl: 'Uitloggen',
    sv: 'Logga ut'
  } satisfies LocalizedText,
  /** `{destination}` is filled with the destination name. */
  title: {
    en: 'Your AMARA stay in {destination}',
    de: 'Euer AMARA Aufenthalt in {destination}',
    es: 'Vuestra estancia AMARA en {destination}',
    nl: 'Jullie AMARA-verblijf in {destination}',
    sv: 'Er AMARA-vistelse i {destination}'
  } satisfies LocalizedText,
  subtitle: {
    en: 'A thoughtful guide to settle in, find your way and enjoy {destination} with ease.',
    de: 'Ein Guide zum Ankommen, Zurechtfinden und Genießen von {destination} — ganz entspannt.',
    es: 'Una guía para instalaros, orientaros y disfrutar de {destination} con calma.',
    nl: 'Een gids om aan te komen, je weg te vinden en {destination} ontspannen te genieten.',
    sv: 'En guide för att landa, hitta rätt och njuta av {destination} i lugn och ro.'
  } satisfies LocalizedText,
  cards: [
    {
      icon: '⌂',
      title: {
        en: 'Your apartment',
        de: 'Eure Wohnung',
        es: 'Vuestro apartamento',
        nl: 'Jullie appartement',
        sv: 'Er lägenhet'
      },
      meta: {
        en: 'Arrival · House information',
        de: 'Ankunft · Hausinfo',
        es: 'Llegada · Información de la casa',
        nl: 'Aankomst · Huisinformatie',
        sv: 'Ankomst · Husinformation'
      }
    },
    {
      icon: '◎',
      title: {
        en: 'Essentials',
        de: 'Vor Ort',
        es: 'Lo esencial',
        nl: 'Praktisch',
        sv: 'Det viktiga'
      },
      meta: {
        en: 'Mobility · Supermarket · Pharmacy',
        de: 'Mobilität · Supermarkt · Apotheke',
        es: 'Transporte · Supermercado · Farmacia',
        nl: 'Vervoer · Supermarkt · Apotheek',
        sv: 'Transport · Snabbköp · Apotek'
      }
    },
    {
      icon: '✦',
      title: {
        en: 'AMARA Experience',
        de: 'AMARA Experience',
        es: 'AMARA Experience',
        nl: 'AMARA Experience',
        sv: 'AMARA Experience'
      },
      meta: {
        en: 'Restaurants · Beaches · Day trips',
        de: 'Restaurants · Strände · Ausflüge',
        es: 'Restaurantes · Playas · Excursiones',
        nl: 'Restaurants · Stranden · Uitstapjes',
        sv: 'Restauranger · Stränder · Utflykter'
      }
    }
  ] satisfies GuestGuidePreviewCard[],
  destinations: {
    frigiliana: {
      name: 'Frigiliana',
      cover: '/images/amara-maha/29-amara-frigiliana.jpg',
      coverAlt: {
        en: 'The shaded roof terrace of an AMARA apartment in Frigiliana',
        de: 'Die schattige Dachterrasse einer AMARA-Wohnung in Frigiliana',
        es: 'La terraza en la azotea de un apartamento AMARA en Frigiliana',
        nl: 'Het beschaduwde dakterras van een AMARA-appartement in Frigiliana',
        sv: 'Den skuggade takterrassen i en AMARA-lägenhet i Frigiliana'
      },
      focalPoint: 'center'
    },
    nerja: {
      name: 'Nerja',
      cover: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
      coverAlt: {
        en: 'The coast at Nerja on the Costa del Sol',
        de: 'Die Küste von Nerja an der Costa del Sol',
        es: 'La costa de Nerja en la Costa del Sol',
        nl: 'De kust bij Nerja aan de Costa del Sol',
        sv: 'Kusten vid Nerja på Costa del Sol'
      },
      focalPoint: 'center'
    },
    tarifa: {
      name: 'Tarifa',
      cover: '/images/tarifa/location/valdevaqueros-beach-tarifa-1.jpeg',
      coverAlt: {
        en: 'The beach at Valdevaqueros near Tarifa',
        de: 'Der Strand von Valdevaqueros bei Tarifa',
        es: 'La playa de Valdevaqueros cerca de Tarifa',
        nl: 'Het strand van Valdevaqueros bij Tarifa',
        sv: 'Stranden vid Valdevaqueros nära Tarifa'
      },
      focalPoint: '50% 72%'
    }
  } satisfies Record<StaySearchDestination, GuestGuidePreviewDestination>
};
