import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaShoppingSourceId } from '../../../sources/locations/frigilianaShoppingSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaShoppingSourceId[];
};

const facts = [
  {
    id: 'frigiliana.shopping.eroski-city.address',
    subject: 'frigiliana',
    topic: 'supermarkets-everyday-shopping',
    statement: 'EROSKI lists an EROSKI/city supermarket at Plaza Doña Amparo Guerrero 10 in Frigiliana.',
    status: 'verified',
    sourceIds: ['eroski-city-frigiliana-store-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-11-28',
    volatility: 'medium',
    claimBoundary:
      'The store identity and address do not establish holiday hours, current stock, payment, delivery, parking or an AMARA walking route.',
  },
  {
    id: 'frigiliana.shopping.silvia.address-and-range',
    subject: 'frigiliana',
    topic: 'supermarkets-everyday-shopping',
    statement:
      'The municipal business directory places Supermarket Silvia at Calle Real 131 and describes it as carrying everyday grocery categories.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-municipality-silvia-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-11-28',
    volatility: 'medium',
    claimBoundary:
      'A municipal directory entry does not prove current opening or availability of every listed category; direct or field confirmation remains necessary.',
  },
  {
    id: 'frigiliana.shopping.garcia-berroa.address-and-range',
    subject: 'frigiliana',
    topic: 'supermarkets-everyday-shopping',
    statement:
      'The municipal business directory places Supermercado García Berroa at Calle Rosarico la Joaquín 8 and describes groceries and local products.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-municipality-garcia-berroa-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-11-28',
    volatility: 'medium',
    claimBoundary:
      'The directory entry does not prove current operation or stock, and “local products” does not verify the provenance of a particular item.',
  },
  {
    id: 'frigiliana.shopping.el-lagar.address-and-products',
    subject: 'frigiliana',
    topic: 'supermarkets-everyday-shopping',
    statement:
      'The municipal directory places Tienda Bodega El Lagar at Calle Real 1-A and lists regional products including miel de caña and Moscatel-based vino del terreno among its offer.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-municipality-el-lagar-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-11-28',
    volatility: 'medium',
    claimBoundary:
      'The entry does not guarantee current stock or opening, and a shop’s location does not prove Frigiliana provenance for every product.',
  },
  {
    id: 'frigiliana.shopping.mercadillo.thursday-reference',
    subject: 'frigiliana',
    topic: 'supermarkets-everyday-shopping',
    statement: 'A current municipal business entry identifies Thursday as Frigiliana’s market day.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-municipality-mercadillo-thursday-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-10-28',
    volatility: 'high',
    claimBoundary:
      'The incidental reference does not verify current hours, exact location, cancellations, authority or vendor mix and does not support calling it a farmers’ market.',
  },
  {
    id: 'frigiliana.shopping.mercadillo.municipal-stall-forms',
    subject: 'frigiliana',
    topic: 'supermarkets-everyday-shopping',
    statement:
      'The current Ayuntamiento download page provides an application form and a responsible-declaration form for a market stall under ambulant commerce.',
    status: 'verified',
    sourceIds: ['frigiliana-municipality-market-stall-forms-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-11-28',
    volatility: 'high',
    claimBoundary:
      'The forms identify a municipal administrative route only. They do not prove that a particular Thursday market will take place or establish its current location, hours, cancellations or vendor mix.',
  },
  {
    id: 'frigiliana.shopping.mercadillo.current-listing-conflict',
    subject: 'frigiliana',
    topic: 'supermarkets-everyday-shopping',
    statement:
      'Two current non-official market listings agree on Thursday and 09:00–14:00 but disagree on the location: one names Avenida Carlos Cano and the other Plaza de las Tres Culturas; the latter labels its record unverified.',
    status: 'disputed',
    sourceIds: ['mercadillos-net-frigiliana-listing-2026', 'appmercat-frigiliana-listing-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2026-09-28',
    volatility: 'high',
    claimBoundary:
      'This conflict is internal evidence against publishing either listing as fact. Exact current location, hours, frequency and operation require dated confirmation from the Ayuntamiento or the responsible market authority.',
  },
] as const satisfies readonly FactInput[];

export const frigilianaSupermarketFacts = defineKnowledgeFacts(facts);
export type FrigilianaSupermarketFactId = (typeof frigilianaSupermarketFacts)[number]['id'];
