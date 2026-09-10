import { defineKnowledgeSources } from '../../schema';

export const nerjaNightlifeSources = defineKnowledgeSources([
  {
    id: 'nerja-ayuntamiento-burriana-music-2026',
    title: 'Música y diversión para celebrar el verano en la Playa de Burriana',
    publisher: 'Ayuntamiento de Nerja',
    sourceType: 'official',
    url: 'https://www.nerja.es/musica-y-diversion-para-celebrar-el-verano-este-sabado-en-la-playa-de-burriana/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Municipal press release for a summer seafront live-music event (Playa de Burriana) running late into the night (~03:00).',
    limitations: 'An event announcement, not a general nightlife overview; evidences that high-season late events exist, not regular venue hours.',
    reuse: 'link-and-cite'
  },
  {
    id: 'vacaciones-espana-nerja-nightlife-2018',
    title: 'Guía sobre la vida nocturna de Nerja',
    publisher: 'Vacaciones-España',
    sourceType: 'secondary',
    url: 'https://www.vacaciones-espana.es/Nerja/articulos/guia-nerja-vida-nocturna',
    accessedAt: '2026-09-10',
    scope: 'Travel-guide article describing the character and areas of Nerja nightlife.',
    limitations: 'Older (2018) promotional/SEO content with little local updating; corroboration of character only, not current venue operation.',
    reuse: 'link-and-cite'
  },
  {
    id: 'esnerja-nightlife-directory',
    title: 'EsNerja nightlife listings (e.g. Malagrana, Terraza Buddha Lounge Bar)',
    publisher: 'EsNerja.com',
    sourceType: 'secondary',
    url: 'https://esnerja.com/en/nightlife/',
    accessedAt: '2026-09-10',
    scope: 'Local guide/advertising platform listing individual Nerja venues.',
    limitations: 'Commercial/operator-supplied listings, not official; a listing does not confirm current operation, hours or atmosphere.',
    reuse: 'link-and-cite'
  }
] as const);

export type NerjaNightlifeSourceId = (typeof nerjaNightlifeSources)[number]['id'];
