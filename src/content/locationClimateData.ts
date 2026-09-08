export interface LocationClimateMonth {
  /** Average daily high (mean of daily maxima). */
  high: number;
  /** Average daily low. */
  low: number;
  /** Record daily high — what a hot day can actually reach. */
  record: number;
  rain: number;
  sunHours: number;
}

const nerjaFrigilianaClimateValues: LocationClimateMonth[] = [
  { high: 12.4, low: 6.6, record: 23, rain: 60, sunHours: 6.8 },
  { high: 12.7, low: 6.9, record: 25, rain: 51, sunHours: 7.6 },
  { high: 14.5, low: 8.5, record: 30, rain: 51, sunHours: 8.8 },
  { high: 16.3, low: 10.3, record: 31, rain: 42, sunHours: 10.1 },
  { high: 19.5, low: 13.1, record: 34, rain: 26, sunHours: 11.6 },
  { high: 23.8, low: 17.1, record: 37, rain: 9, sunHours: 12.5 },
  { high: 27, low: 19.9, record: 40, rain: 2, sunHours: 12.2 },
  { high: 27.1, low: 20.4, record: 41, rain: 4, sunHours: 11.2 },
  { high: 23.5, low: 17.4, record: 37, rain: 21, sunHours: 10.1 },
  { high: 20, low: 14.3, record: 32, rain: 58, sunHours: 8.7 },
  { high: 15.2, low: 9.8, record: 28, rain: 70, sunHours: 7.4 },
  { high: 13.2, low: 7.8, record: 23, rain: 77, sunHours: 6.6 }
];

export const locationClimateProfiles = {
  frigiliana: nerjaFrigilianaClimateValues,
  nerja: nerjaFrigilianaClimateValues,
  tarifa: [
    { high: 14.4, low: 9.8, record: 22, rain: 90, sunHours: 6.3 },
    { high: 14.6, low: 9.9, record: 23, rain: 79, sunHours: 6.7 },
    { high: 16.2, low: 11.1, record: 28, rain: 75, sunHours: 7.9 },
    { high: 17.9, low: 12.5, record: 29, rain: 57, sunHours: 9.2 },
    { high: 20.9, low: 14.9, record: 31, rain: 28, sunHours: 10.7 },
    { high: 24.7, low: 17.9, record: 34, rain: 5, sunHours: 11.8 },
    { high: 27.5, low: 19.9, record: 36, rain: 1, sunHours: 11.7 },
    { high: 27.7, low: 20.7, record: 37, rain: 5, sunHours: 10.5 },
    { high: 24.8, low: 19.3, record: 34, rain: 35, sunHours: 9 },
    { high: 21.5, low: 16.8, record: 30, rain: 81, sunHours: 7.7 },
    { high: 17.2, low: 13, record: 26, rain: 96, sunHours: 6.8 },
    { high: 15.2, low: 11.2, record: 22, rain: 114, sunHours: 6 }
  ]
} satisfies Record<'frigiliana' | 'nerja' | 'tarifa', LocationClimateMonth[]>;

/**
 * Average daily high per month (°C, Jan–Dec) for the city each market reads its
 * own weather against — so a German reader sees Frigiliana next to Berlin, a
 * Spanish reader next to Madrid. Climate normals from climate-data.org, rounded
 * to whole degrees: the comparison lives in the contrast, not in decimals.
 */
export const comparisonCityHighs = {
  madrid: [9, 12, 16, 18, 22, 28, 32, 31, 26, 19, 13, 9],
  berlin: [3, 4, 9, 14, 19, 22, 24, 24, 19, 13, 7, 4],
  amsterdam: [6, 7, 10, 13, 17, 20, 22, 22, 19, 15, 10, 7],
  stockholm: [-1, 0, 3, 9, 16, 20, 22, 20, 15, 9, 4, 1],
  london: [8, 9, 11, 14, 18, 21, 23, 23, 20, 15, 11, 8]
} as const;

/**
 * Record daily high per month (°C, Jan–Dec) for each comparison city — so the
 * toggle compares both the average and the record against the reader's own city.
 * Approximate all-time monthly records; northern cities spike high in heatwaves
 * even though their averages stay far lower.
 */
export const comparisonCityRecords = {
  madrid: [18, 21, 26, 30, 34, 40, 41, 40, 36, 30, 23, 18],
  berlin: [15, 18, 24, 30, 33, 36, 38, 38, 33, 28, 21, 16],
  amsterdam: [17, 19, 24, 28, 33, 36, 37, 37, 33, 28, 20, 17],
  stockholm: [12, 14, 18, 26, 30, 33, 36, 35, 28, 21, 14, 12],
  london: [17, 20, 24, 29, 33, 36, 40, 38, 33, 29, 20, 17]
} as const satisfies Record<keyof typeof comparisonCityHighs, number[]>;

/**
 * Average hours of sunshine per day per month for each comparison city — for the
 * winter light contrast on the winter page. Northern winters are famously dark.
 */
export const comparisonCitySunHours = {
  madrid: [5, 6, 7, 8, 9.5, 11, 12, 11, 9, 7, 5.5, 4.8],
  berlin: [1.6, 2.5, 4, 5.5, 7.5, 8, 8, 7, 5, 3.5, 1.8, 1.3],
  amsterdam: [2, 2.8, 3.8, 5.5, 6.8, 6.8, 6.5, 6.2, 4.5, 3.4, 2, 1.6],
  stockholm: [1.2, 2.5, 4, 6, 8.5, 9.5, 9, 7.5, 5, 3, 1.3, 0.8],
  london: [1.7, 2.4, 3.8, 5.2, 6.2, 6.5, 6.4, 6, 4.7, 3.4, 2.1, 1.5]
} as const satisfies Record<keyof typeof comparisonCityHighs, number[]>;

export type ComparisonCityKey = keyof typeof comparisonCityHighs;

/** Which home city each locale is compared against, with its display name. */
export const comparisonCityByLang = {
  de: { key: 'berlin', name: 'Berlin' },
  es: { key: 'madrid', name: 'Madrid' },
  en: { key: 'london', name: 'London' },
  nl: { key: 'amsterdam', name: 'Amsterdam' },
  sv: { key: 'stockholm', name: 'Stockholm' }
} as const satisfies Record<string, { key: ComparisonCityKey; name: string }>;

/**
 * What a hot summer day actually reaches (°C). The monthly `high` is the average
 * daily maximum; on Terral (offshore-wind) days the coast climbs well past it.
 * Held as an honest round ceiling, not an all-time record.
 */
export const summerPeakHigh = {
  frigiliana: 36,
  nerja: 36,
  tarifa: 33
} as const satisfies Record<'frigiliana' | 'nerja' | 'tarifa', number>;

export const climateDataPeriods = {
  temperatureRainfall: '1991–2021',
  sunshine: '1999–2019'
} as const;

export const climateDataSourceUrls = {
  frigiliana: 'https://en.climate-data.org/europe/spain/andalusia/frigiliana-220227/',
  nerja: 'https://en.climate-data.org/europe/spain/andalusia/nerja-57107/',
  tarifa: 'https://en.climate-data.org/europe/spain/andalusia/tarifa-768212/'
} as const;
