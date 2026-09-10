import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaArrivalKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-arrival', destination: 'frigiliana', topic: 'arrival',
  createdAt: '2026-09-10T09:30:00+02:00', updatedAt: '2026-09-10T09:30:00+02:00', status: 'needs-review',
  driveFolder: { id: '1M8SPNUv336F3HDTEtdoSXR3BHqno8pPV', url: 'https://drive.google.com/drive/folders/1M8SPNUv336F3HDTEtdoSXR3BHqno8pPV', path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/arrival' },
  publicContentPath: 'src/content/gettingToFrigilianaContent.ts',
  researchRunIds: ['2026-09-10__085527__frigiliana-arrival-getting-there__research-001'],
  coverage: [
    { authoringArea: 'regional-arrival', purpose: 'Model the airport→coast options (car, pre-booked transfer, coach) with a robust train-based Plan B.', factIds: ['frigiliana.arrival.road-route-a7', 'frigiliana.arrival.airport-road-distance', 'frigiliana.arrival.airport-nerja-coach', 'frigiliana.arrival.plan-b-train'], status: 'covered' },
    { authoringArea: 'nerja-frigiliana-interface', purpose: 'Explain the local bus line as a frequency band and its stop points, not a frozen timetable.', factIds: ['frigiliana.arrival.bus-operator-2026', 'frigiliana.arrival.bus-service-character', 'frigiliana.arrival.bus-timetable-conflict', 'frigiliana.arrival.bus-taxi-stop-plaza-ingenio', 'frigiliana.arrival.nerja-boarding-point'], status: 'covered', notes: 'Timetable kept live-only by design (caching/version conflict); operator change is the durable fact.' },
    { authoringArea: 'taxis-and-transfers', purpose: 'Give the realistic way to get a taxi/transfer without promising availability or price.', factIds: ['frigiliana.arrival.taxi-contacts', 'frigiliana.arrival.taxi-airport-transfer-vtc', 'frigiliana.arrival.taxi-accessible', 'frigiliana.arrival.rideshare-app-unconfirmed-in-town'], status: 'covered' },
    { authoringArea: 'last-mile-and-legal-stop', purpose: 'Explain the legal short-stop rule, the loading-zone guardrail and the honest topography without overclaiming accessibility.', factIds: ['frigiliana.arrival.legal-short-stop', 'frigiliana.arrival.loading-zone-restriction', 'frigiliana.arrival.signage-priority', 'frigiliana.arrival.historic-core-topography'], status: 'partial', notes: 'General legal/topography context is covered; the concrete per-stay unload point remains an open question.' },
    { authoringArea: 'onward-mobility', purpose: 'Cover walk-from-village trailheads, seasonal beach mobility and the Nerja regional hub.', factIds: ['frigiliana.arrival.trailheads-from-plaza', 'frigiliana.arrival.maro-shuttle-2026', 'frigiliana.arrival.nerja-regional-hub'], status: 'covered', notes: 'Maro shuttle is seasonal 2026 only; store as example, verify each year.' },
    { authoringArea: 'property-last-mile', purpose: 'Guest Utility: resolved per-stay arrival/parking card from first-party measurement.', factIds: [], status: 'gap', notes: 'Needs AMARA first-party measurement of vehicle endpoint and walk profile; not derivable from general information.' },
  ],
});
