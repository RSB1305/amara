import { resolveLocale } from '../../types/content';
import { experienceCatalog, experienceHubContent, experienceNavigationContent } from '../../content/experienceHubContent';
import { nerjaExperienceHubContent } from '../../content/nerjaExperienceHubContent';
import { resolveOptionalLink, type LinkToken } from '../linkResolver';
import { getFrigilianaAuthoritySubnavGroups } from '../frigiliana/frigilianaAuthoritySubnav';
import { getNerjaAuthoritySubnavGroups } from '../nerja/nerjaAuthoritySubnav';
import { getTarifaAuthoritySubnav } from '../tarifa/tarifaAuthoritySubnav';
import {
  getLocationGuideClusterLabels,
  LOCATION_GUIDE_CLUSTER_IDS,
  LOCATION_GUIDE_CLUSTER_TOPICS
} from './locationGuideTopics';
import type { ContextNavigationGroup, ContextNavigationItem } from '../../components/navigation/ContextNavigation.astro';
import type { AmaraLanguage } from '../../types/seo';
import type { DestinationId } from './destinationBranchNavigation';

const experienceClusterLabels: Record<DestinationId, Record<AmaraLanguage, string[]>> = {
  frigiliana: {
    en: ['Food & Local Flavours', 'Mountains & Coast', 'Culture & Village Life', 'Slow Time & Day Trips'],
    de: ['Kulinarik & Genuss', 'Berge & Küste', 'Kultur & Dorfleben', 'Auszeit & Ausflüge'],
    es: ['Gastronomía & sabores locales', 'Montaña & costa', 'Cultura & vida de pueblo', 'Pausa & excursiones'],
    nl: ['Culinair & genieten', 'Bergen & kust', 'Cultuur & dorpsleven', 'Ontspanning & uitstapjes'],
    sv: ['Mat & njutning', 'Berg & kust', 'Kultur & byliv', 'Avkoppling & utflykter']
  },
  nerja: {
    en: ['Sea & Coast', 'Food & Evening Life', 'Culture & Landmarks', 'Day Trips & Surroundings'],
    de: ['Meer & Küste', 'Genuss & Abendleben', 'Kultur & Wahrzeichen', 'Ausflüge & Umgebung'],
    es: ['Mar & costa', 'Gastronomía & vida nocturna', 'Cultura & lugares emblemáticos', 'Excursiones & alrededores'],
    nl: ['Zee & kust', 'Eten & avondleven', 'Cultuur & bezienswaardigheden', 'Dagtochten & omgeving'],
    sv: ['Hav & kust', 'Mat & kvällliv', 'Kultur & sevärdheter', 'Utflykter & omgivningar']
  },
  tarifa: {
    en: ['Sea & Wind', 'Landscape & Heritage', 'Old Town & History', 'Food & Evenings'],
    de: ['Meer & Wind', 'Landschaft & Erbe', 'Altstadt & Geschichte', 'Genuss & Abende'],
    es: ['Mar & viento', 'Paisaje & patrimonio', 'Casco antiguo & historia', 'Gastronomía & ambiente nocturno'],
    nl: ['Zee & wind', 'Landschap & erfgoed', 'Oude stad & geschiedenis', 'Eten & avonden'],
    sv: ['Hav & vind', 'Landskap & kulturarv', 'Gamla stan & historia', 'Mat & kvällar']
  }
};

const groupItems = (
  destination: DestinationId,
  lang: AmaraLanguage,
  items: ContextNavigationItem[],
  ids: readonly (readonly string[])[]
): ContextNavigationGroup[] => ids.map((itemIds, index) => ({
  id: `${destination}-experience-${index + 1}`,
  label: experienceClusterLabels[destination][lang][index],
  items: itemIds.map((id) => items.find((item) => item.id === id)).filter((item): item is ContextNavigationItem => Boolean(item))
})).filter((group) => group.items.length > 0);

export function getDestinationExperienceGroups(destination: DestinationId, lang: AmaraLanguage): ContextNavigationGroup[] {
  if (destination === 'frigiliana') {
    const labels = experienceNavigationContent[lang].labels;
    const items: ContextNavigationItem[] = experienceHubContent[lang].catalog.order
      .filter((id) => id !== 'nightlife')
      .map((id) => {
        const href = resolveOptionalLink(experienceCatalog[id].token, lang, { suppressMissing: true });
        return { id, label: labels[id], href: href ?? undefined, status: href ? 'live' : 'future' };
      });
    const extras = [
      ['oldTown', 'frigiliana_old_town', { en: 'History & Architecture', de: 'Geschichte & Sehenswürdigkeiten', es: 'Historia y arquitectura', nl: 'Geschiedenis & architectuur', sv: 'Historia & arkitektur' }],
      ['dosTumbas', 'frigiliana_netflix_dos_tumbas', { en: 'Netflix filming locations', de: 'Netflix-Drehorte', es: 'Localizaciones Netflix', nl: 'Netflix-locaties', sv: 'Netflix-platser' }]
    ] as const;
    for (const [id, token, copy] of extras) {
      const href = resolveOptionalLink(token as LinkToken, lang, { suppressMissing: true });
      items.push({ id, label: copy[lang], href: href ?? undefined, status: href ? 'live' : 'future' });
    }
    return groupItems(destination, lang, items, [
      ['restaurants', 'market'], ['hiking', 'beaches'], ['oldTown', 'festivals', 'dosTumbas'], ['wellness', 'dayTrips']
    ]);
  }

  if (destination === 'nerja') {
    const items: ContextNavigationItem[] = resolveLocale(nerjaExperienceHubContent, lang).themes.map((theme) => {
      const href = resolveOptionalLink(theme.token, lang, { suppressMissing: true });
      return { id: theme.id, label: theme.title, href: href ?? undefined, status: href ? 'live' : 'future' };
    });
    return groupItems(destination, lang, items, [
      ['beaches'], ['food', 'nightlife'], ['balcon', 'caves', 'veranoAzul'], ['dayTrips']
    ]);
  }

  const items = getTarifaAuthoritySubnav(lang).find((branch) => branch.id === 'experience')?.children ?? [];
  return groupItems(destination, lang, items, [
    ['kitesurfing', 'beaches'], ['nature-wildlife', 'bolonia-baelo-claudia'], ['old-town-history'], ['food-evening-life']
  ]);
}

export function getDestinationLocationGroups(destination: DestinationId, lang: AmaraLanguage): ContextNavigationGroup[] {
  if (destination === 'frigiliana') return getFrigilianaAuthoritySubnavGroups(lang);
  if (destination === 'nerja') return getNerjaAuthoritySubnavGroups(lang);

  const items = getTarifaAuthoritySubnav(lang).find((branch) => branch.id === 'location')?.children ?? [];
  const labels = getLocationGuideClusterLabels(lang);
  return LOCATION_GUIDE_CLUSTER_IDS.map((id) => ({
    id,
    label: labels[id],
    items: LOCATION_GUIDE_CLUSTER_TOPICS[id].flatMap((topicId) => {
      const item = items.find((candidate) => candidate.id === topicId);
      return item ? [item] : [];
    })
  }));
}

export function getDestinationContextGroups(destination: DestinationId, lang: AmaraLanguage) {
  return {
    location: getDestinationLocationGroups(destination, lang),
    experience: getDestinationExperienceGroups(destination, lang)
  };
}
