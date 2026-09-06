import { defineKnowledgeRecommendations } from '../../schema';

export const frigilianaWellnessRecommendations = defineKnowledgeRecommendations([
  {
    id: 'frigiliana.wellness.frigiliana-wellness',
    destination: 'frigiliana',
    topic: 'wellness',
    place: { name: 'Frigiliana Wellness', kind: 'provider', address: 'Cam. C. San Sebastián 6, 29788 Frigiliana', whatsapp: '+34711074662', website: 'https://www.frigilianawellness.com/' },
    summary: 'You can visit them at Cam. C. San Sebastián, 6, 29788 Frigiliana — just 600 m away, around a 10-minute walk from AMARA. If you prefer, they can also come to your AMARA apartment for a massage, perfect if you would rather stay in and enjoy a quiet treatment at home. What we especially like here is that the treatment is tailored to how you feel on the day. They first talk with you about what your body needs in that moment and then decide together which treatment, or combination of treatments, would be best — aromatherapy massage, deep tissue massage, Indian head massage, sports massage, reflexology or a facial treatment. In practice, you simply book the time and decide together on the day what feels right for you.',
    access: [{ from: 'casa-amara', distanceMetres: 600, walkMinutes: 10 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and link only, no operating details are verified.'
  },
  {
    id: 'frigiliana.wellness.lidia-california-massage',
    destination: 'frigiliana',
    topic: 'wellness',
    place: { name: 'Lidia, California massage', kind: 'provider', whatsapp: '+34696555875', website: 'https://www.masajecalifornianoconlidia.com/' },
    summary: 'A quieter, more retreat-like experience. You visit her countryside location for a slower, deeper kind of relaxation — ideal if you want silence, calm, and a more personal session.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and link only, no operating details are verified.'
  }
]);
