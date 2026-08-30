import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaClimateSourceId } from '../../../sources/locations/frigilianaClimateSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly FrigilianaClimateSourceId[] };

const facts = [
  {
    id: 'frigiliana.climate.regional-proxy.malaga-airport-method', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'AEMET publishes 1981–2010 climate normals for Málaga Airport station 6155A at 7 metres elevation; this is an official regional coastal reference, not a Frigiliana observation series.',
    status: 'verified', sourceIds: ['aemet-malaga-airport-normals-1981-2010'], checkedAt: '2026-08-28', reviewAfter: '2028-08-28', volatility: 'low',
    claimBoundary: 'The station location, elevation and reference period must accompany reuse; values must never be relabelled as measured in Frigiliana.',
  },
  {
    id: 'frigiliana.climate.regional-proxy.malaga-airport-annual-normal', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'For 1981–2010 Málaga Airport records an annual mean temperature of 18.5 °C, annual precipitation of 534 mm and 2,905 annual sunshine hours.',
    status: 'verified', sourceIds: ['aemet-malaga-airport-normals-1981-2010'], checkedAt: '2026-08-28', reviewAfter: '2028-08-28', volatility: 'low',
    claimBoundary: 'These are station normals for Málaga Airport and may be used only as a transparent regional proxy, not as local Frigiliana values or a forecast.',
  },
  {
    id: 'frigiliana.climate.regional-proxy.seasonal-contrast', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'The Málaga Airport normals show the regional seasonal contrast: July and August have the highest monthly mean temperatures, June through September have very low mean precipitation, and November and December have the highest monthly mean precipitation.',
    status: 'verified', sourceIds: ['aemet-malaga-airport-normals-1981-2010'], checkedAt: '2026-08-28', reviewAfter: '2028-08-28', volatility: 'low',
    claimBoundary: 'This supports a broad regional season structure only; it does not establish Frigiliana monthly values, daily conditions or a universal best travel month.',
  },
  {
    id: 'frigiliana.climate.local-method.era5-land-candidate', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'Copernicus ERA5-Land provides monthly land reanalysis from 1950 onward on a CDS 0.1° latitude–longitude grid, regridded from a native resolution of about 9 km, and can support a common extraction method for declared Frigiliana and Nerja cells.',
    status: 'verified', sourceIds: ['copernicus-era5-land-monthly-means-2026'], checkedAt: '2026-08-28', reviewAfter: '2028-08-28', volatility: 'low',
    claimBoundary: 'This verifies the dataset as a comparison candidate only. No local monthly values or Frigiliana–Nerja difference may be published until coordinates or cells, variables, units, reference period, aggregation and uncertainty are fixed and the extraction is reproduced.',
  },
  {
    id: 'frigiliana.climate.terral.definition', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'AEMET identifies the terral on the Malaga coast as a land wind that blows from the land out to sea, arriving from the north and north-west, and it is the wind responsible for the sharpest short-term heat on this coast.',
    status: 'verified', sourceIds: ['aemet-terral-definition-2026'], checkedAt: '2026-08-30', reviewAfter: '2028-08-30', volatility: 'low',
    claimBoundary: 'This establishes what the terral is and where it comes from. It does not license a temperature figure, a duration, a frequency or a forecast for Frigiliana, which has no observing station of its own.',
  },
  {
    id: 'frigiliana.climate.terral.upwelling-mechanism', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'A sustained terral pushes the sun-warmed surface layer out to sea and colder deep water rises to replace it, an upwelling driven by Ekman transport in the Alboran Sea, so the sea along the Malaga coast can turn cold while the air is at its hottest.',
    status: 'verified', sourceIds: ['tiempo-com-afloramiento-malaga-2026-08'], checkedAt: '2026-08-30', reviewAfter: '2027-08-30', volatility: 'medium',
    claimBoundary: 'The mechanism is established for the Malaga coast as a whole. No sea temperature may be stated for a named beach near Nerja on this basis, and the effect requires a strong terral over several consecutive days rather than following automatically from any hot day.',
  },
  {
    id: 'frigiliana.climate.terral.august-2026-event', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'In August 2026 the sea surface off Malaga fell by almost 13 C within a week, from a marine heatwave to 15.9 C, while air temperatures inland approached 40 C.',
    status: 'verified', sourceIds: ['tiempo-com-afloramiento-malaga-2026-08'], checkedAt: '2026-08-30', reviewAfter: '2027-08-30', volatility: 'low',
    claimBoundary: 'A single documented event off Malaga, reported as a record. It illustrates the size the effect can reach; it is not a typical August, not a Nerja measurement and not a basis for predicting any future summer.',
  },
  {
    id: 'frigiliana.climate.external-reference.method-1981-2010', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'Sevilla Aeropuerto, Cordoba Aeropuerto, Malaga Aeropuerto and Schiphol all publish official station normals for the same 1981-2010 reference period, reporting mean daily maximum temperature and monthly precipitation as comparable monthly statistics.',
    status: 'verified', sourceIds: ['aemet-sevilla-airport-normals-1981-2010', 'aemet-cordoba-airport-normals-1981-2010', 'aemet-malaga-airport-normals-1981-2010', 'knmi-schiphol-climate-table-1981-2010'], checkedAt: '2026-08-30', reviewAfter: '2028-08-30', volatility: 'low',
    claimBoundary: 'This establishes a shared reference period and comparable monthly statistics only. It is not a claim that the services used identical sensors or processing, and sunshine hours in particular are not established as instrumentally identical. It says nothing about Frigiliana and supports no climate superlative.',
  },
  {
    id: 'frigiliana.climate.external-reference.july-daily-maximum', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'For 1981-2010 the mean daily maximum in July is 30.5 C at Malaga Airport, 36.0 C at Sevilla Airport, 36.9 C at Cordoba Airport and 22.0 C at Schiphol.',
    status: 'verified', sourceIds: ['aemet-sevilla-airport-normals-1981-2010', 'aemet-cordoba-airport-normals-1981-2010', 'aemet-malaga-airport-normals-1981-2010', 'knmi-schiphol-climate-table-1981-2010'], checkedAt: '2026-08-30', reviewAfter: '2028-08-30', volatility: 'low',
    claimBoundary: 'These are station values for the four named airports. None of them is a Frigiliana value, none may be corrected for elevation or interpolated onto Frigiliana, and none predicts the weather on a particular day.',
  },
  {
    id: 'frigiliana.climate.external-reference.inland-summer-contrast', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'The official normals show inland Andalusia running markedly hotter than the coast in high summer: in July the Sevilla and Cordoba airport stations are about five to six degrees above the Malaga airport station in mean daily maximum.',
    status: 'verified', sourceIds: ['aemet-sevilla-airport-normals-1981-2010', 'aemet-cordoba-airport-normals-1981-2010', 'aemet-malaga-airport-normals-1981-2010'], checkedAt: '2026-08-30', reviewAfter: '2028-08-30', volatility: 'low',
    claimBoundary: 'A contrast between three named airport stations in one reference period. It is a useful scale for a guest planning an inland round trip, not a statement about Frigiliana, any particular town, or any given day.',
  },
  {
    id: 'frigiliana.climate.normal-period.current-standard-1991-2020', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'The current standard climate normal period is 1991-2020 across AEMET, DWD, the Met Office, SMHI and KNMI; AEMET states that 1981-2010 applied only until December 2022. No service publishes a more recent standard normal period, and current observations are reported against 1991-2020 rather than replacing it.',
    status: 'verified', sourceIds: ['metoffice-heathrow-averages-1991-2020', 'smhi-stockholm-summer-normals-1991-2020'], checkedAt: '2026-08-30', reviewAfter: '2030-08-30', volatility: 'low',
    claimBoundary: 'This fixes which reference period is current. It does not supply values, and it does not make an older published normal wrong for what it is - only wrong to place beside a 1991-2020 figure. AEMET station pages still display 1981-2010 tables, so an official source can carry the superseded period.',
  },
  {
    id: 'frigiliana.climate.home-reference.london-july', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'For 1991-2020 the Met Office gives Heathrow a July mean daily maximum of 23.89 C, with 45.8 mm of rainfall and 217.81 sunshine hours.',
    status: 'verified', sourceIds: ['metoffice-heathrow-averages-1991-2020'], checkedAt: '2026-08-30', reviewAfter: '2030-08-30', volatility: 'low',
    claimBoundary: 'A Met Office climate normal for Heathrow, not for London as a whole and not for Frigiliana. It is not a forecast, supports no ranking, and its sunshine hours may not be described as measured by the same method as another service.',
  },
  {
    id: 'frigiliana.climate.home-reference.stockholm-july', subject: 'frigiliana', topic: 'climate-seasons',
    statement: 'For 1991-2020 SMHI publishes a July mean daily maximum of 23.5 C for Stockholm, with 62 mm of precipitation and 280 sunshine hours.',
    status: 'verified', sourceIds: ['smhi-stockholm-summer-normals-1991-2020'], checkedAt: '2026-08-30', reviewAfter: '2030-08-30', volatility: 'low',
    claimBoundary: 'Published by SMHI for Stockholm at city level without a station identifier, and covering the summer months only. It says nothing about Frigiliana, is not a forecast, and SMHI flags the underlying 1991-2020 files as preliminary.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaClimateSeasonFacts = defineKnowledgeFacts(facts);
export type FrigilianaClimateSeasonFactId = (typeof frigilianaClimateSeasonFacts)[number]['id'];
