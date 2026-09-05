import { defineKnowledgeRecommendations } from '../../schema';

export const tarifaKitesurfingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'tarifa.kitesurfing.tarifa-surf-club',
    destination: 'tarifa',
    topic: 'kitesurfing',
    place: { name: 'Tarifa Surf Club', kind: 'provider', whatsapp: '+34619548276' },
    summary: 'AMARA Lodging and Tarifa Surf Club have a close connection , which is why this is often the option we recommend to our guests. If you would like to rent kitesurf equipment, book kitesurf lessons, or purchase a rescue card for the private rescue boats, this is the easiest place to start. Rental options include equipment from Airush and North , and the team can also help you find the right setup for your level and the day’s wind. For anything related to rental, lessons, or rescue cards, please send a WhatsApp message here: +34 619 548 276 A short message with your level, the dates, and whether you need rental, lessons, or rescue is usually the simplest way to get started.',
    provenance: 'amara-first-hand',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'AMARA and the Tarifa Surf Club are closely connected, which the guide states openly; rental stock, courses and rescue cards change and need a live check.'
  }
]);
