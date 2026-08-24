import { defineKnowledgeSources } from '../../schema';

export const frigilianaHeritageHistoryCultureSources = defineKnowledgeSources([
  {
    id: 'beautiful-villages-association-frigiliana-2026',
    title: 'Frigiliana',
    publisher: 'Los Pueblos Más Bonitos de España',
    sourceType: 'secondary',
    url: 'https://lospueblosmasbonitosdeespana.org/pueblos/frigiliana',
    accessedAt: '2026-08-24',
    language: 'es',
    scope:
      'Association recognition, Frigiliana membership page and the page’s record of the 1982 national beautification award.',
    limitations:
      'This is a place-promotion association, not a neutral or objective ranking of every Spanish village. Superlative beauty claims must remain attributed.',
    reuse: 'link-and-cite',
  },
  {
    id: 'rah-maymon-levi-biography-2026',
    title: 'Maymón Leví',
    publisher: 'Real Academia de la Historia — Historia Hispánica',
    sourceType: 'secondary',
    url: 'https://historia-hispanica.rah.es/biografias/25336-maymon-levi',
    accessedAt: '2026-08-24',
    language: 'es',
    scope: 'Scholarly edited biographical context for the Jewish Andalusian figure Maymón Leví.',
    limitations:
      'The biography does not by itself establish permanent residence, a synagogue or a resident Jewish community in Frigiliana.',
    reuse: 'link-and-cite',
  },
  {
    id: 'moreno-nunez-maymon-levi-1998',
    title: 'Las relaciones judíos-monarquía en la época de los Reyes Católicos. El caso de Maymón Leví',
    publisher: 'En la España Medieval — Universidad Complutense de Madrid',
    sourceType: 'secondary',
    url: 'https://revistas.ucm.es/index.php/ELEM/article/view/ELEM9898110143A/22967',
    accessedAt: '2026-08-24',
    language: 'es',
    scope: 'Academic analysis of Maymón Leví’s relations and property interests, including the Taha of Frigiliana.',
    limitations:
      'A property relationship within the historic Taha is not evidence of permanent residence or an institutional Jewish community in the present village.',
    reuse: 'link-and-cite',
  },
  {
    id: 'lopez-de-coca-jews-malaga-bishopric-2013',
    title: 'Sobre los judíos del obispado de Málaga (1485–1492)',
    publisher: 'Historia. Instituciones. Documentos — Universidad de Sevilla',
    sourceType: 'secondary',
    url: 'https://revistascientificas.us.es/index.php/HID/article/view/4092',
    accessedAt: '2026-08-24',
    language: 'es',
    scope: 'Academic regional context and documentary references for Jewish property in the Málaga bishopric.',
    limitations:
      'Regional and property evidence must not be generalized into a documented resident community in Frigiliana.',
    reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-festival-three-cultures-official-2026',
    title: 'Festival Frigiliana 3 Culturas',
    publisher: 'Festival Frigiliana 3 Culturas',
    sourceType: 'official',
    url: 'https://frigiliana3culturas.com/',
    accessedAt: '2026-08-24',
    language: 'es',
    scope: 'Current official description of the festival’s purpose and programme categories.',
    limitations:
      'The festival’s modern identity framing cannot verify medieval local demography or harmonious three-faith coexistence. Dates and logistics are volatile.',
    reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-municipality-festival-first-edition-2006',
    title: 'Novedades en el XI Festival Frigiliana 3 Culturas',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/novedades-en-el-xi-festival-frigiliana-3-culturas-que-comienza-el-jueves/',
    accessedAt: '2026-08-24',
    language: 'es',
    scope: 'Municipal retrospective identifying 2006 as the festival’s first edition.',
    limitations:
      'A municipal festival retrospective documents the event, not the historic existence of three permanent faith communities in the village.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaHeritageHistoryCultureSourceId =
  (typeof frigilianaHeritageHistoryCultureSources)[number]['id'];
