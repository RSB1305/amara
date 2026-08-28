import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaBeachSourceId } from '../../../sources/locations/nerjaBeachSources';
import type { NerjaNatureCoastSourceId } from '../../../sources/locations/nerjaNatureCoastSources';

type SourceId = NerjaBeachSourceId | NerjaNatureCoastSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'nerja.beaches.burriana.profile-and-listed-services',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'Turismo de Nerja describes Burriana as an 800-by-40-metre urban beach with high occupancy, a promenade, bus access, parking and a broad set of listed beach and food services.',
    status: 'verified',
    sourceIds: ['nerja-tourism-burriana-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-04-01',
    volatility: 'medium',
    claimBoundary:
      'Dimensions and municipal classifications are not crowd promises; individual services, parking availability and opening require a live check.',
  },
  {
    id: 'nerja.beaches.playazo.profile-and-listed-services',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'Turismo de Nerja describes El Playazo as a 1,700-by-30-metre semi-urban beach with medium occupancy, bus access, parking, showers and beach-food services.',
    status: 'verified',
    sourceIds: ['nerja-tourism-playazo-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-04-01',
    volatility: 'medium',
    claimBoundary:
      'The profile does not guarantee space, parking, transport frequency or that every listed service operates on a particular date.',
  },
  {
    id: 'nerja.beaches.maro.profile-and-seasonal-access',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'Turismo de Nerja describes Playa de Maro as a 500-by-20-metre isolated beach that becomes busy in summer and uses seasonal shuttle access because private cars cannot descend during that regime.',
    status: 'verified',
    sourceIds: ['nerja-tourism-maro-beach-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-04-01',
    volatility: 'medium',
    claimBoundary:
      'The generic beach page does not establish future shuttle dates, price, hours or a guaranteed place on the service.',
  },
  {
    id: 'nerja.beaches.maro.shuttle-2026',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'For 2026 the municipality announced the Maro beach shuttle from 12 June through 15 September, operating daily from 10:00 to 20:30 at a €3 return fare.',
    status: 'verified',
    sourceIds: ['nerja-municipality-maro-shuttle-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-09-16',
    volatility: 'high',
    claimBoundary:
      'This is a dated 2026 operating notice, not a reusable schedule or price for another season.',
  },
  {
    id: 'nerja.beaches.calahonda.stair-access',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'The official Calahonda profile identifies access from the Boquete de Calahonda beside the Balcón de Europa by stone stairs.',
    status: 'verified',
    sourceIds: ['nerja-tourism-calahonda-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-08-28',
    volatility: 'medium',
    claimBoundary:
      'The described stair access does not establish the condition of every approach, a barrier-free alternative or the current coastal-path continuation.',
  },
  {
    id: 'nerja.beaches.accessibility-points-2026',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'In 2026 Nerja reported renewed reduced-mobility beach equipment at Burriana and Torrecilla and a new designated point at El Playazo.',
    status: 'verified',
    sourceIds: ['nerja-municipality-beach-accessibility-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-04-01',
    volatility: 'high',
    claimBoundary:
      'A municipal accessibility point does not guarantee an independently accessible journey, suitable sea conditions or availability of assistance at every time.',
  },
  {
    id: 'nerja.beaches.blue-flags-2026',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'For 2026 the municipality reported Blue Flags for Burriana, Torrecilla, Maro and the combined Playazo-Chucho award scope.',
    status: 'verified',
    sourceIds: ['nerja-municipality-blue-flags-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-04-01',
    volatility: 'high',
    claimBoundary:
      'This is an annual certification record; Playazo-Chucho is the award scope and does not make El Playazo and El Chucho one geographic beach entity for every purpose.',
  },
  {
    id: 'nerja.beaches.cantarrijan.location-and-seasonal-access',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'Cantarriján lies in Almuñécar municipality in Granada province; the protected-area visitor authority describes a normal 15 June–10 September motor-access restriction with an information and parking point at kilometre 304 of the N-340 and onward shuttle transport.',
    status: 'verified',
    sourceIds: ['junta-cantarrijan-visitor-page-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-04-01',
    volatility: 'medium',
    claimBoundary:
      'The normal regime must still be checked against current-year notices; parking capacity, queueing and exact journey time are not established.',
  },
  {
    id: 'nerja.beaches.cantarrijan.controlled-access-2026',
    subject: 'nerja',
    topic: 'beaches-day-connections',
    statement:
      'The Junta’s 2026 notice started Cantarriján shuttle access on 15 June, and its 2026 timetable gives a 10:00–21:00 controlled-access window during the published seasonal calendar.',
    status: 'verified',
    sourceIds: ['junta-cantarrijan-shuttle-notice-2026', 'junta-cantarrijan-timetable-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-09-11',
    volatility: 'high',
    claimBoundary:
      'This is a dated 2026 operating window; later notices can override it and it does not establish fare, capacity or future-year operation.',
  },
] as const satisfies readonly FactInput[];

export const nerjaBeachFacts = defineKnowledgeFacts(facts);
export type NerjaBeachFactId = (typeof nerjaBeachFacts)[number]['id'];
