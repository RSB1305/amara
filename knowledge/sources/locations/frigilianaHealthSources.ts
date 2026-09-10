import { defineKnowledgeSources } from '../../schema';

export const frigilianaHealthSources = defineKnowledgeSources([
  {
    id: 'sas-consultorio-frigiliana',
    title: 'Consultorio Frigiliana — centre information',
    publisher: 'Servicio Andaluz de Salud (Junta de Andalucía)',
    sourceType: 'official',
    url: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/servicios-y-centros/informacion-por-centros/23954',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official health-authority record for the Frigiliana primary-care consultorio (address, phone, published hours).',
    limitations: 'Hours are operational and can change; the consultorio is primary care, not an emergency hospital.',
    reuse: 'link-and-cite'
  },
  {
    id: 'farmaprox-ramirez-llamas',
    title: 'Farmacia Ignacio Ramírez Llamas (Frigiliana)',
    publisher: 'Farmaprox',
    sourceType: 'secondary',
    url: 'https://www.farmaprox.es/farmacias-en-malaga/frigiliana/farmacia-ignacio-ramirez-llamas',
    accessedAt: '2026-09-10',
    scope: 'Private pharmacy directory listing address and phone for the Plaza del Ingenio pharmacy.',
    limitations: 'Non-official directory; data may be outdated. Contacts require an on-site/live check.',
    reuse: 'link-and-cite'
  },
  {
    id: 'nomas900-farmacia-frigiliana',
    title: 'Farmacia Frigiliana (business listing)',
    publisher: 'Nomas900',
    sourceType: 'secondary',
    url: 'https://www.nomas900.org/farmacia-frigiliana-952811',
    accessedAt: '2026-09-10',
    scope: 'Private business-information page with pharmacy phone numbers.',
    limitations: 'User-maintained; possible inaccuracies.',
    reuse: 'link-and-cite'
  },
  {
    id: 'farmacias365-german-sanchez',
    title: 'Farmacia Germán Sánchez Maldonado (Frigiliana)',
    publisher: 'Farmacias365',
    sourceType: 'secondary',
    url: 'https://farmacias365.com/farmacias-de-guardia/malaga/frigiliana/farmacia-german-sanchez-maldonado',
    accessedAt: '2026-09-10',
    scope: 'Private pharmacy/duty-list directory giving the second Frigiliana pharmacy address and phone.',
    limitations: 'Carries a "permanently closed" flag dated December 2022 — a source conflict that must be resolved by an on-site check before relying on this pharmacy.',
    reuse: 'link-and-cite'
  },
  {
    id: '20minutos-frigiliana-rescue',
    title: 'Evacuado a un hospital un anciano accidentado mientras hacía senderismo en Frigiliana',
    publisher: '20minutos',
    sourceType: 'secondary',
    url: 'https://www.20minutos.es/noticia/5053780/0/sucesos-evacuado-a-un-hospital-un-anciano-accidentado-mientras-hacia-senderismo-en-frigiliana/',
    accessedAt: '2026-09-10',
    scope: 'Press report of a real mountain-rescue (Guardia Civil SEREIM) evacuation to a pickup point at Presa de Lízar with a Nerja ambulance.',
    limitations: 'A single documented incident, not a guaranteed procedure or response time.',
    reuse: 'link-and-cite'
  },
  {
    id: 'kyero-nerja-hospital',
    title: 'Living in Nerja (nearest hospital context)',
    publisher: 'Kyero',
    sourceType: 'secondary',
    url: 'https://www.kyero.com/es/living-in-nerja-377173',
    accessedAt: '2026-09-10',
    scope: 'Expat/blog context naming the nearest hospital (Hospital de la Axarquía, Torre del Mar).',
    limitations: 'Lay information; corroboration only, not an authority for distances or emergency routing.',
    reuse: 'link-and-cite'
  }
] as const);

export type FrigilianaHealthSourceId = (typeof frigilianaHealthSources)[number]['id'];
