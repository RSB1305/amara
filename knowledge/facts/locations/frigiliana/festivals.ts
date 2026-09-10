import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaFestivalsSourceId } from '../../../sources/locations/frigilianaFestivalsSources';

type SourceId = FrigilianaFestivalsSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'frigiliana.festivals.core-calendar-list', subject: 'frigiliana', topic: 'festivals',
    statement: 'The official tourism office lists San Sebastián, Carnaval, Semana Santa, Día de la Miel de Caña, Cruces de Mayo, Feria de San Antonio and Festival Frigiliana 3 Culturas as the representative festivals/traditions of the village.',
    status: 'verified', sourceIds: ['frigiliana-turismo-fiestas'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: 'Evidences a recurring core calendar, not the execution of each individual edition.',
  },
  {
    id: 'frigiliana.festivals.seasonal-pattern', subject: 'frigiliana', topic: 'festivals',
    statement: 'The robust seasonal core is: January San Sebastián; Carnaval around February/Lent; Semana Santa in the movable Easter period; Miel/Cruces in late April–May; Feria in June; 3 Culturas in late August.',
    status: 'partially-verified', sourceIds: ['frigiliana-turismo-fiestas'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'Use as a seasonal pattern, not as a year programme or a date promise.',
  },
  {
    id: 'frigiliana.festivals.quiet-months-not-guaranteed', subject: 'frigiliana', topic: 'festivals',
    statement: 'The highest verified festival density is late April/May, June and late August; October and November are the festival-sparsest in the verified core calendar, but "no major recurring festival verified" is not "quiet" — the tourism office names additional recurring summer concerts/dance/choir events, and September is ambiguous because of Candelarias.',
    status: 'partially-verified', sourceIds: ['frigiliana-turismo-fiestas', 'frigiliana-ayuntamiento-site'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'high',
    claimBoundary: 'Only relative festival-sparseness, never guaranteed nightly quiet; always check the current municipal agenda for a given stay.',
  },
  {
    id: 'frigiliana.festivals.3culturas-established-2006', subject: 'frigiliana', topic: 'festivals',
    statement: 'Festival Frigiliana 3 Culturas was founded in 2006 and is established as a recurring annual festival.',
    status: 'verified', sourceIds: ['frigiliana-turismo-3culturas', 'festival-3culturas-site', 'festival-3culturas-ediciones'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'low',
    claimBoundary: '"Established annual" is safe; NOT "every year without interruption" — the edition archive shows the 2020/21 pandemic gap.',
  },
  {
    id: 'frigiliana.festivals.3culturas-late-august', subject: 'frigiliana', topic: 'festivals',
    statement: 'The typical window of 3 Culturas is late August, traditionally around the last August weekend.',
    status: 'partially-verified', sourceIds: ['frigiliana-turismo-3culturas', 'festival-3culturas-announce-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'high',
    claimBoundary: '"Late August" is evergreen-usable; never derive a concrete upcoming date from it.',
  },
  {
    id: 'frigiliana.festivals.3culturas-past-dates', subject: 'frigiliana', topic: 'festivals',
    statement: 'In 2025 3 Culturas ran 28–31 August and the 2026 edition was announced for 27–30 August, which supports "late August" rather than a fixed calendar day.',
    status: 'verified', sourceIds: ['festival-3culturas-press-2025', 'festival-3culturas-announce-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'high',
    claimBoundary: 'Past-year dates only as pattern evidence, never for prediction.',
  },
  {
    id: 'frigiliana.festivals.3culturas-organiser', subject: 'frigiliana', topic: 'festivals',
    statement: 'The festival is run by or under the Ayuntamiento de Frigiliana; official festival communication goes through the town hall and its communication department.',
    status: 'verified', sourceIds: ['festival-3culturas-site', 'festival-3culturas-press-2025', 'frigiliana-ayuntamiento-site'], checkedAt: '2026-09-10', reviewAfter: '2028-09-10', volatility: 'low',
    claimBoundary: 'Do not present single-year sponsors/partners as permanent organisers.',
  },
  {
    id: 'frigiliana.festivals.3culturas-format', subject: 'frigiliana', topic: 'festivals',
    statement: 'The typical 3 Culturas mix includes music/concerts, gastronomy and a ruta de la tapa, cultural programme/talks, a market, street animation and theatre, workshops/crafts and family programme.',
    status: 'verified', sourceIds: ['festival-3culturas-conoce', 'frigiliana-turismo-3culturas'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'Formats as typical components; do not promise a specific edition, artists, number of stalls or tapa prices.',
  },
  {
    id: 'frigiliana.festivals.3culturas-large-market', subject: 'frigiliana', topic: 'festivals',
    statement: 'A large market is laid out across the town centre; the festival source describes over 100, and elsewhere more than 150, stalls.',
    status: 'verified', sourceIds: ['festival-3culturas-conoce'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'high',
    claimBoundary: 'Use only "large market" as evergreen; no fixed stall number, the figures are not stable.',
  },
  {
    id: 'frigiliana.festivals.3culturas-uses-whole-core', subject: 'frigiliana', topic: 'festivals',
    statement: 'The festival uses large parts of the town rather than one venue: among others Plaza de las 3 Culturas, Patio del Ayuntamiento, Iglesia de San Antonio, Calle Real, Calle San Sebastián, Zacatín and further streets/squares.',
    status: 'verified', sourceIds: ['festival-3culturas-espacios'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'Venues can change per edition; "large parts of the centre" is more robust than naming individual stages.',
  },
  {
    id: 'frigiliana.festivals.3culturas-night-and-noise', subject: 'frigiliana', topic: 'festivals',
    statement: 'During 3 Culturas the historic core becomes a venue: the festival source describes street programme from about late morning until well past midnight and explicitly very large crowds, with PA and pyrotechnics part of the format; the 2025 press release documents programme from midday into the early morning.',
    status: 'verified', sourceIds: ['festival-3culturas-conoce', 'festival-3culturas-press-2025'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'high',
    claimBoundary: '"Elevated night/noise risk" is safe; exact volume, end time or the exposure of a specific house needs location + the year programme.',
  },
  {
    id: 'frigiliana.festivals.3culturas-park-shuttle-2026', subject: 'frigiliana', topic: 'festivals',
    statement: 'For 2026 the festival set up a park-and-ride / shuttle service that ran in the evenings until 03:00.',
    status: 'verified', sourceIds: ['festival-3culturas-parking-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'high',
    claimBoundary: 'Do not store as a permanent schedule. Usable as a strong indicator of significant access/parking demand during the festival.',
  },
  {
    id: 'frigiliana.festivals.3culturas-edition-number-disputed', subject: 'frigiliana', topic: 'festivals',
    statement: 'The 2026 edition number is inconsistent across sources: the municipal announcement gives "XIV" while other current sources use XIX or XX.',
    status: 'disputed', sourceIds: ['festival-3culturas-announce-2026', 'festival-3culturas-site'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'medium',
    claimBoundary: 'Remove any edition number from evergreen/public facts until a consistent primary archive exists.',
  },
  {
    id: 'frigiliana.festivals.3culturas-piromusical-position-disputed', subject: 'frigiliana', topic: 'festivals',
    statement: 'A generic festival description presents the piromusical/fireworks as the opening, while 2025 reporting listed it as the Sunday closing act.',
    status: 'disputed', sourceIds: ['festival-3culturas-conoce', 'cadena-ser-3culturas-2025'], checkedAt: '2026-09-10', reviewAfter: '2027-06-10', volatility: 'high',
    claimBoundary: 'Do not claim the festival generally begins or ends with the piromusical; name it only in the live programme.',
  },
  {
    id: 'frigiliana.festivals.san-sebastian', subject: 'frigiliana', topic: 'festivals',
    statement: 'San Sebastián: the traditional saint\'s day is 20 January; since the big feria moved to June, the tourism source describes the January event primarily as a mass and procession and as a local celebration without large crowds, with fireworks/bangers along the route.',
    status: 'verified', sourceIds: ['frigiliana-turismo-san-sebastian', 'turismo-frigiliana-social'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: '20 January as the feast day is safe; the public programme can be placed on or around a nearby day (in 2026 also a 24 January Saturday). Public: "around 20 January / check the current programme".',
  },
  {
    id: 'frigiliana.festivals.carnaval', subject: 'frigiliana', topic: 'festivals',
    statement: 'Carnaval\'s date follows the start of Lent (in some years even the first Lent days); a pasacalles with music and batucadas passes through much of the village and the celebration continues at/near Plaza de las 3 Culturas into the night; a large 2026 parade is locally documented for 21 February.',
    status: 'verified', sourceIds: ['frigiliana-turismo-carnaval', 'axarquiaplus-regional-press'], checkedAt: '2026-09-10', reviewAfter: '2027-01-10', volatility: 'high',
    claimBoundary: 'Do not code as a fixed February date; the legacy "first Saturday of Lent" rule is not universal, and the 2026 date is not evergreen.',
  },
  {
    id: 'frigiliana.festivals.semana-santa', subject: 'frigiliana', topic: 'festivals',
    statement: 'Semana Santa is movable (Easter calendar); in Frigiliana the local sequence begins at Viernes de Dolores before Holy Week and ends on Easter Sunday, with Palm Sunday, Maundy Thursday rites/procession, Good Friday Via Crucis and Santo Sepulcro, the nocturnal Soledad and the Resucitado on Easter Sunday.',
    status: 'verified', sourceIds: ['frigiliana-turismo-semana-santa'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'Only relative feast names are evergreen; compute/confirm year dates live. Sequence is robust; exact times, images and routes are not evergreen.',
  },
  {
    id: 'frigiliana.festivals.semana-santa-soledad-and-crowds', subject: 'frigiliana', topic: 'festivals',
    statement: 'The Soledad is a particularly defining nocturnal procession — the historic core largely dark, lit by candles, explicitly silent/solemn; the tourism page claims thousands gather especially on Good Friday.',
    status: 'verified', sourceIds: ['frigiliana-turismo-semana-santa'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'Crowd size is an official claim, not an audited count; public better "strong crowds possible". For overnight guests: crowds and nocturnal procession movement rather than feria-style amplified noise — "solemn" is safer than "quiet".',
  },
  {
    id: 'frigiliana.festivals.cruces-de-mayo', subject: 'frigiliana', topic: 'festivals',
    statement: 'Cruces de Mayo: the tradition was revived in 1981 and is run as an annual celebration; the traditional day is 3 May (2026 municipal communication also set it on 3 May), with flower-decorated crosses in streets/squares, local food and music (banda, verdiales, coros), followed by a verbena at Plaza de la Iglesia that can run late into the night.',
    status: 'verified', sourceIds: ['frigiliana-turismo-cruces'], checkedAt: '2026-09-10', reviewAfter: '2027-04-01', volatility: 'medium',
    claimBoundary: 'The feast day can be named; still link/verify the current programme. The late verbena is a relevant noise note for guests near the church square.',
  },
  {
    id: 'frigiliana.festivals.dia-miel', subject: 'frigiliana', topic: 'festivals',
    statement: 'Día de la Miel de Caña: first held in 2014 as an Ayuntamiento initiative and run as a recurring gastronomic event; it explicitly has no fixed calendar day ("usually late April", with recent editions extending into early May), is mainly a daytime-to-early-evening event around Plaza del Ingenio/central squares with tastings, music/dance, crafts and, depending on the edition, an Ingenio opening.',
    status: 'verified', sourceIds: ['frigiliana-turismo-miel'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'Do not claim every edition took place; public "late April/early May; no fixed day; verify live". Never promise factory opening or free tastings for an upcoming edition. Its overnight impact is lower than Feria/Carnaval/Cruces-verbena/3 Culturas, but "lower" is not "quiet".',
  },
  {
    id: 'frigiliana.festivals.dia-miel-2026-disputed', subject: 'frigiliana', topic: 'festivals',
    statement: 'For 2026 the XI Día de la Miel was announced for 2 May, but an indexed social-media post carries a "CANCELADO" mark, so the actual execution of the 2026 edition is unresolved.',
    status: 'disputed', sourceIds: ['turismo-frigiliana-social'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'Do not use 2026 as proof that an edition actually ran until an official post-report exists.',
  },
  {
    id: 'frigiliana.festivals.feria-san-antonio', subject: 'frigiliana', topic: 'festivals',
    statement: 'The Feria de San Antonio is the big patronal feria around San Antonio de Padua, whose feast day is 13 June; it is annual and multi-day with day and night activities/concerts, and a 2026 local announcement gave it as 11–14 June (four days), showing the evergreen "five days" is not stable. Typical elements: funfair, games, dance/flamenco, concerts, fireworks and the 13 June romería.',
    status: 'verified', sourceIds: ['frigiliana-turismo-feria', 'axarquiaplus-regional-press'], checkedAt: '2026-09-10', reviewAfter: '2027-04-01', volatility: 'high',
    claimBoundary: 'Only "multi-day around 13 June"; future duration solely from the live programme. "Ends 13 June with fireworks" is too strong — the source itself says "usually".',
  },
  {
    id: 'frigiliana.festivals.feria-noise', subject: 'frigiliana', topic: 'festivals',
    statement: 'The Feria is not a quiet village weekend: the official page itself describes sirens, horns, loud funfair PA, crowd noise and dance/performances around or after midnight, spread across Barrio de San Antonio, the procession space and the feria/caseta area.',
    status: 'verified', sourceIds: ['frigiliana-turismo-feria'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'medium',
    claimBoundary: 'A good evergreen warning for noise-sensitive guests; exact house exposure depends on the year\'s layout — do not derive a static noise map.',
  },
  {
    id: 'frigiliana.festivals.candelarias', subject: 'frigiliana', topic: 'festivals',
    statement: 'Candelarias: the traditional date is 7 September (post-harvest bonfires/hogueras), but an official municipal page calls the original celebration "ya extinta" because of the summer fire ban; later communal revival/commemoration events exist (e.g. 2019, and a documented 2022 event), and Candelarias is absent from the current official list of seven representative festivals.',
    status: 'disputed', sourceIds: ['frigiliana-ayuntamiento-candelarias-hoguera', 'frigiliana-ayuntamiento-candelarias-2019', 'axarquiaplus-regional-press', 'frigiliana-turismo-fiestas'], checkedAt: '2026-09-10', reviewAfter: '2027-09-10', volatility: 'high',
    claimBoundary: 'Do NOT list as a reliably annual active festival or a travel anchor; recommend only after current municipal confirmation of the given edition.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaFestivalsFacts = defineKnowledgeFacts(facts);
export type FrigilianaFestivalsFactId = (typeof frigilianaFestivalsFacts)[number]['id'];
