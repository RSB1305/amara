import { defineKnowledgePageManifest } from '../../schema';

export const tarifaArrivalKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-arrival', destination: 'tarifa', topic: 'arrival',
  createdAt: '2026-09-10T11:30:00+02:00', updatedAt: '2026-09-10T11:30:00+02:00', status: 'needs-review',
  driveFolder: { id: '1H_E2FwF1sN8tgPXI7V6ItWzBQoPmUVTP', url: 'https://drive.google.com/drive/folders/1H_E2FwF1sN8tgPXI7V6ItWzBQoPmUVTP', path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/arrival' },
  publicContentPath: 'src/content/gettingToTarifaContent.ts',
  researchRunIds: ['2026-09-10__110515__tarifa-arrival-getting-there__research-001'],
  coverage: [
    { authoringArea: 'airport-and-road', purpose: 'Model the airport choice (Málaga/Jerez/Gibraltar/Seville) and the road corridors to Tarifa.', factIds: ['tarifa.arrival.airport-options', 'tarifa.arrival.road-route'], status: 'covered', notes: 'Distances/times are approximate orientation, not guaranteed.' },
    { authoringArea: 'coach-and-station', purpose: 'Explain the coach option as a frequency band and where the bus station sits.', factIds: ['tarifa.arrival.bus-station', 'tarifa.arrival.bus-operators'], status: 'covered', notes: 'Timetables high-volatility; live operator search per date.' },
    { authoringArea: 'old-town-access', purpose: 'Explain the car-free old town and the guest access permit without promising entry.', factIds: ['tarifa.arrival.old-town-access-control', 'tarifa.arrival.hotel-guest-permit'], status: 'covered', notes: '2021 rule; verify current signage/ordinance (see open question).' },
    { authoringArea: 'parking-and-beach-mobility', purpose: 'Where to leave the car outside the centre and how the spread-out beaches connect.', factIds: ['tarifa.arrival.parking-outside-centre', 'tarifa.arrival.beach-mobility'], status: 'partial', notes: 'Parking/beach-bus specifics rest on a non-official local source; verify on site; seasonal.' },
    { authoringArea: 'tanger-ferry', purpose: 'Cover the Tanger ferry as a weather-dependent option.', factIds: ['tarifa.arrival.tanger-ferry'], status: 'covered', notes: 'Seasonal frequency; cancelled in strong Levante; live check.' },
    { authoringArea: 'accessibility-last-mile', purpose: 'Honest accessibility of the cobbled old town and the reduced-mobility exemption.', factIds: ['tarifa.arrival.accessibility'], status: 'partial', notes: 'Exemption is the rule; terrain difficulty is per-route.' },
    { authoringArea: 'property-last-mile', purpose: 'Guest Utility: resolved per-stay arrival/permit/parking card from first-party detail.', factIds: [], status: 'gap', notes: 'Needs AMARA first-party detail of the exact old-town entry window, permit handling and door route.' },
  ],
});
