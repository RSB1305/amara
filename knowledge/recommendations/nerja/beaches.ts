import { defineKnowledgeRecommendations } from '../../schema';

export const nerjaBeachRecommendations = defineKnowledgeRecommendations([
  {
    id: 'nerja.beaches.burriana-beach',
    destination: 'nerja',
    topic: 'beaches',
    place: { name: 'Burriana Beach', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Burriana+Beach+Nerja' },
    summary: 'The classic full beach-day choice in Nerja: wide sand, sunbeds, showers, and plenty of places for lunch. Parking can be busy in high season — going before 10:30 or later in the afternoon usually feels calmer. Nerja lists it as its urban beach with promenade, bus stop and parking; in 2026 the town renewed the reduced-mobility beach equipment here.',
    access: [{ from: 'casa-amara', driveMinutes: 20 }],
    operating: { note: 'Urban beach with promenade, bus stop and parking; reduced-mobility equipment renewed in 2026; Blue Flag 2026', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.beaches.burriana.profile-and-listed-services',
      'nerja.beaches.accessibility-points-2026',
      'nerja.beaches.blue-flags-2026'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'nerja.beaches.carabeillo',
    destination: 'nerja',
    topic: 'beaches',
    place: { name: 'Carabeíllo', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+Carabeillo+Nerja' },
    summary: 'A small cove between Burriana and the town area — great if you want something a bit more tucked away. Access involves steps and space is limited, so it\'s best earlier in the day.',
    access: [{ from: 'casa-amara', driveMinutes: 20 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and map link only, no operating details are verified.'
  },
  {
    id: 'nerja.beaches.calahonda',
    destination: 'nerja',
    topic: 'beaches',
    place: { name: 'Calahonda', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+Calahonda+Nerja' },
    summary: 'The postcard cove right under the Balcón de Europa — beautiful, central, and easy to combine with a stroll in Nerja. Best in the morning. For parking, use public garages or town parking areas rather than searching street spots. Access is by stone stairs from the Boquete de Calahonda beside the Balcón de Europa, so it is not the beach for a buggy or limited mobility.',
    access: [{ from: 'casa-amara', driveMinutes: 20 }],
    operating: { note: 'Access by stone stairs from the Boquete de Calahonda beside the Balcón de Europa', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.beaches.calahonda.stair-access'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'nerja.beaches.el-playazo',
    destination: 'nerja',
    topic: 'beaches',
    place: { name: 'El Playazo', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=El+Playazo+Nerja' },
    summary: 'One of the widest stretches near Nerja — ideal if you want room, long walks, and a more relaxed feel. Great for late afternoons. Bring water and a small snack if you plan to stay longer. Nerja describes it as a 1.7-kilometre semi-urban beach with medium occupancy, bus access, parking, showers and beach food; a designated reduced-mobility point was added in 2026.',
    access: [{ from: 'casa-amara', driveMinutes: 20 }],
    operating: { note: '1.7 km semi-urban beach, medium occupancy, bus, parking, showers, beach food; reduced-mobility point added 2026', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.beaches.playazo.profile-and-listed-services',
      'nerja.beaches.accessibility-points-2026'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'nerja.beaches.maro-beach',
    destination: 'nerja',
    topic: 'beaches',
    place: { name: 'Maro Beach', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maro+Beach+Nerja' },
    summary: 'A nature-focused beach near the protected Maro area — often clearer water than in town, great for snorkeling. If you want an "activity beach day", this is the one: kayaking here can be fantastic. In summer private cars may not drive down: in 2026 the municipal shuttle ran from 12 June to 15 September, daily 10:00–20:30, €3 return. Check the current notice before you go.',
    access: [{ from: 'casa-amara', driveMinutes: 25 }],
    operating: { note: 'Summer regime: private cars cannot descend; 2026 municipal shuttle 12 June–15 September, daily 10:00–20:30, €3 return', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.beaches.maro.profile-and-seasonal-access',
      'nerja.beaches.maro.shuttle-2026',
      'nerja.beaches.blue-flags-2026'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-05-01',
    volatility: 'high',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'nerja.beaches.cantarrijan',
    destination: 'nerja',
    topic: 'beaches',
    place: { name: 'Cantarriján', kind: 'beach', address: 'Almuñécar (Granada); information and parking point at N-340 km 304', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+Cantarrijan' },
    summary: 'A beautiful beach in a protected reserve — relaxed atmosphere and a great option if you want a change from Nerja. There is a clothing-optional area, and it is also known for simple, good seafood right by the beach. The cove already lies in Granada province (Almuñécar). Normally from 15 June to 10 September cars are not allowed down: you park at the information point at kilometre 304 of the N-340 and continue by shuttle; in 2026 it ran from 15 June, 10:00–21:00. Check the current notice before you go.',
    access: [{ from: 'casa-amara', driveMinutes: 35, note: '35–40 min by car' }],
    operating: { note: 'Normally 15 June–10 September no car access: park at the N-340 km 304 information point and continue by shuttle; 2026 window 10:00–21:00 from 15 June', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.beaches.cantarrijan.location-and-seasonal-access',
      'nerja.beaches.cantarrijan.controlled-access-2026'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-05-01',
    volatility: 'high',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  }
]);
