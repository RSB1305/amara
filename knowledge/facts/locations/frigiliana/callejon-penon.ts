import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaOldTownMonumentsSourceId } from '../../../sources/locations/frigilianaOldTownMonumentsSources';

type CallejonPenonFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaOldTownMonumentsSourceId[];
};

/**
 * Old-town spoke (B). Graduated out of old-town-monuments.ts by the 2026-09-12 web synthesis,
 * which removed an overclaim: no source supports "the clearest view of El Fuerte" or that this
 * lane "frames" the 1569 battle mount, and the lane’s "Peñón" is a local rock in the Barribarto,
 * distinct from the Peñón de Frigiliana / El Fuerte. The old id ...mirador.el-fuerte-view is
 * superseded by ...lane.barribarto-photographed below.
 */
const facts = [
  {
    id: 'frigiliana.callejon-penon.lane.barribarto-photographed',
    subject: 'frigiliana',
    topic: 'callejon-penon',
    statement:
      'The Callejón del Peñón is a steep, much-photographed stepped lane in the upper Barribarto quarter — whitewashed walls, worn steps and flower pots — one of the village’s best-known corners.',
    status: 'partially-verified',
    sourceIds: ['andalucia-org-frigiliana-miradores', 'turismo-frigiliana-barribarto'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    supersedes: ['frigiliana.callejon-penon.mirador.el-fuerte-view'],
    claimBoundary:
      'A common tourist lane name, not an officially listed monument; the heritage decree lists the Torreón and the Barribarto/adarves generally, not this lane by name.',
  },
  {
    id: 'frigiliana.callejon-penon.mirador.panorama',
    subject: 'frigiliana',
    topic: 'callejon-penon',
    statement:
      'A mirador at the upper end of the lane, by the local "tajo del peñón" rock, opens a wide panorama over the village, the surrounding mountains and the sea, at its best early and late in the day.',
    status: 'verified',
    sourceIds: ['andalucia-org-frigiliana-miradores', 'turismo-frigiliana-barribarto'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      'The documented panorama is over village, mountains and sea. No source supports "the clearest view of El Fuerte" or that the lane "frames" the 1569 battle mount; the sierra rises above the village generally.',
  },
  {
    id: 'frigiliana.callejon-penon.name.local-penon-not-battle-mount',
    subject: 'frigiliana',
    topic: 'callejon-penon',
    statement:
      'The "Peñón" of the lane refers to a local rock/tajo in the Barribarto, distinct from the Peñón de Frigiliana / El Fuerte (~963 m), the 1569 battle mount; the shared word is not an established etymological link.',
    status: 'partially-verified',
    sourceIds: ['turismo-frigiliana-barribarto', 'turismo-frigiliana-el-fuerte'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Do not build a meaning bridge from the coincidence of the two "Peñón" names.',
  },
  {
    id: 'frigiliana.callejon-penon.named-miradores',
    subject: 'frigiliana',
    topic: 'callejon-penon',
    statement:
      'Named viewpoints in the upper village include the Mirador de Santo Cristo (Calle Santo Cristo, the highest quarter) and the Plaza/Mirador de las Tres Culturas, which is distinct from the separate Fuente de las Tres Culturas.',
    status: 'verified',
    sourceIds: ['andalucia-org-frigiliana-miradores'],
    checkedAt: '2026-09-12',
    reviewAfter: '2029-09-12',
    volatility: 'medium',
    claimBoundary: 'Names are attested by the regional portal; do not confuse the Mirador/Plaza de las Tres Culturas with the Fuente de las Tres Culturas.',
  },
  {
    id: 'frigiliana.callejon-penon.adarves',
    subject: 'frigiliana',
    topic: 'callejon-penon',
    statement:
      'Some upper lanes around the Peñón are adarves — semi-private passages that serve only their own houses — a form the heritage decree names explicitly as mixed public-private space.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-frigiliana-conjunto-historico', 'turismo-frigiliana-barribarto'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Walk adarves with that in mind; keep to the open viewpoints.',
  },
] as const satisfies readonly CallejonPenonFactInput[];

export const frigilianaCallejonPenonFacts = defineKnowledgeFacts(facts);

export type FrigilianaCallejonPenonFactId = (typeof frigilianaCallejonPenonFacts)[number]['id'];
