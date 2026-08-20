export interface LocationClimateMonth {
  high: number;
  low: number;
  rain: number;
  sunHours: number;
}

const nerjaFrigilianaClimateValues: LocationClimateMonth[] = [
  { high: 12.4, low: 6.6, rain: 60, sunHours: 6.8 },
  { high: 12.7, low: 6.9, rain: 51, sunHours: 7.6 },
  { high: 14.5, low: 8.5, rain: 51, sunHours: 8.8 },
  { high: 16.3, low: 10.3, rain: 42, sunHours: 10.1 },
  { high: 19.5, low: 13.1, rain: 26, sunHours: 11.6 },
  { high: 23.8, low: 17.1, rain: 9, sunHours: 12.5 },
  { high: 27, low: 19.9, rain: 2, sunHours: 12.2 },
  { high: 27.1, low: 20.4, rain: 4, sunHours: 11.2 },
  { high: 23.5, low: 17.4, rain: 21, sunHours: 10.1 },
  { high: 20, low: 14.3, rain: 58, sunHours: 8.7 },
  { high: 15.2, low: 9.8, rain: 70, sunHours: 7.4 },
  { high: 13.2, low: 7.8, rain: 77, sunHours: 6.6 }
];

export const locationClimateProfiles = {
  frigiliana: nerjaFrigilianaClimateValues,
  nerja: nerjaFrigilianaClimateValues,
  tarifa: [
    { high: 14.4, low: 9.8, rain: 90, sunHours: 6.3 },
    { high: 14.6, low: 9.9, rain: 79, sunHours: 6.7 },
    { high: 16.2, low: 11.1, rain: 75, sunHours: 7.9 },
    { high: 17.9, low: 12.5, rain: 57, sunHours: 9.2 },
    { high: 20.9, low: 14.9, rain: 28, sunHours: 10.7 },
    { high: 24.7, low: 17.9, rain: 5, sunHours: 11.8 },
    { high: 27.5, low: 19.9, rain: 1, sunHours: 11.7 },
    { high: 27.7, low: 20.7, rain: 5, sunHours: 10.5 },
    { high: 24.8, low: 19.3, rain: 35, sunHours: 9 },
    { high: 21.5, low: 16.8, rain: 81, sunHours: 7.7 },
    { high: 17.2, low: 13, rain: 96, sunHours: 6.8 },
    { high: 15.2, low: 11.2, rain: 114, sunHours: 6 }
  ]
} satisfies Record<'frigiliana' | 'nerja' | 'tarifa', LocationClimateMonth[]>;

export const climateDataPeriods = {
  temperatureRainfall: '1991–2021',
  sunshine: '1999–2019'
} as const;

export const climateDataSourceUrls = {
  frigiliana: 'https://en.climate-data.org/europe/spain/andalusia/frigiliana-220227/',
  nerja: 'https://en.climate-data.org/europe/spain/andalusia/nerja-57107/',
  tarifa: 'https://en.climate-data.org/europe/spain/andalusia/tarifa-768212/'
} as const;
