import { locationClimateProfiles } from '../../content/locationClimateData';
import type { AmaraLanguage } from '../../types/seo';

// Shared source for the graphical climate-season strip used on the location
// hubs (Frigiliana, Nerja, Tarifa). Season names and the strip's UI labels live
// here once, so the three pages stay consistent and the five-language copy is
// authored a single time. The numbers come from the same long-term monthly
// normals the weather pages chart — this is a typical-climate summary, not a
// live forecast.

type ClimatePlace = keyof typeof locationClimateProfiles;
type Localized = Record<AmaraLanguage, string>;

const text = (en: string, de: string, es: string, nl: string, sv: string): Localized => ({
  en,
  de,
  es,
  nl,
  sv
});

type SeasonKey = 'spring' | 'summer' | 'autumn' | 'winter';

// Meteorological seasons by month index (0 = January).
const seasonMonths: Record<SeasonKey, number[]> = {
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  autumn: [8, 9, 10],
  winter: [11, 0, 1]
};

const seasonNames: Record<SeasonKey, Localized> = {
  spring: text('Spring', 'Frühling', 'Primavera', 'Lente', 'Vår'),
  summer: text('Summer', 'Sommer', 'Verano', 'Zomer', 'Sommar'),
  autumn: text('Autumn', 'Herbst', 'Otoño', 'Herfst', 'Höst'),
  winter: text('Winter', 'Winter', 'Invierno', 'Winter', 'Vinter')
};

const stripCopy = {
  label: text(
    'Typical weather by season',
    'Typisches Wetter je Jahreszeit',
    'Tiempo típico por estación',
    'Typisch weer per seizoen',
    'Typiskt väder per årstid'
  ),
  daytimeLabel: text('Daytime', 'Tagsüber', 'De día', 'Overdag', 'Dagtid'),
  sunLabel: text('Sun', 'Sonne', 'Sol', 'Zon', 'Sol'),
  sunUnit: text('h/day', 'Std./Tag', 'h/día', 'u/dag', 'h/dag'),
  caption: text(
    'Long-term averages, not a forecast — the weather page has the month-by-month detail.',
    'Langjährige Mittel, keine Vorhersage — Monat für Monat auf der Wetterseite.',
    'Medias a largo plazo, no una previsión — el detalle mes a mes está en la página del tiempo.',
    'Langjarige gemiddelden, geen voorspelling — maand voor maand op de weerpagina.',
    'Långsiktiga medelvärden, ingen prognos — månad för månad på vädersidan.'
  )
} satisfies Record<string, Localized>;

export interface ClimateSeason {
  title: string;
  minHigh: number;
  maxHigh: number;
  sun: number;
}

export interface ClimateStripCopy {
  label: string;
  daytimeLabel: string;
  sunLabel: string;
  sunUnit: string;
  caption: string;
}

/** Localized UI labels for the climate strip. */
export function getClimateStripCopy(lang: AmaraLanguage): ClimateStripCopy {
  return {
    label: stripCopy.label[lang],
    daytimeLabel: stripCopy.daytimeLabel[lang],
    sunLabel: stripCopy.sunLabel[lang],
    sunUnit: stripCopy.sunUnit[lang],
    caption: stripCopy.caption[lang]
  };
}

/**
 * The four seasons as daytime-high ranges and average daily sunshine for a
 * place, derived from its long-term monthly normals. Highs are whole degrees
 * (a range needs no false precision); sunshine keeps one decimal.
 */
export function getClimateSeasons(place: ClimatePlace, lang: AmaraLanguage): ClimateSeason[] {
  const normals = locationClimateProfiles[place];
  return (Object.keys(seasonMonths) as SeasonKey[]).map((key) => {
    const months = seasonMonths[key];
    const highs = months.map((month) => normals[month].high);
    const sunAverage =
      months.reduce((total, month) => total + normals[month].sunHours, 0) / months.length;
    return {
      title: seasonNames[key][lang],
      minHigh: Math.round(Math.min(...highs)),
      maxHigh: Math.round(Math.max(...highs)),
      sun: Math.round(sunAverage * 10) / 10
    };
  });
}
