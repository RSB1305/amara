import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceNightlifeImages = defineRouteImages({
  routeKey: 'nerja.experience.nightlife',
  images: [
    {
      role: 'og',
      src: '/images/amara-playa/apartment/chaparril-13.webp'
    },
    // The hero keeps its evidence panel; the photographs sit in the gallery band after the areas section.
    {
      role: 'gallery',
      id: 'terraces',
      src: '/images/nerja/nerja-balcon-square-terraces.jpg',
      focalPoint: '55% 60%',
      alt: {
        en: "Terraces on the square by the Balcón de Europa filling up under the ornate balconies",
        de: "Terrassen am Platz vor dem Balcón de Europa, die sich unter den verzierten Balkonen füllen",
        es: "Terrazas en la plaza junto al Balcón de Europa llenándose bajo los balcones decorados",
        nl: "Terrassen op het plein bij de Balcón de Europa die vollopen onder de sierlijke balkons",
        sv: "Uteserveringar på torget vid Balcón de Europa som fylls under de utsmyckade balkongerna"
      }
    },
    {
      role: 'gallery',
      id: 'plaza',
      src: '/images/nerja/nerja-plaza-balcon-palms.jpg',
      focalPoint: '50% 50%',
      alt: {
        en: "Palms and the arched white building on the square by the Balcón de Europa",
        de: "Palmen und das weiße Bogengebäude am Platz vor dem Balcón de Europa",
        es: "Palmeras y el edificio blanco de arcos en la plaza junto al Balcón de Europa",
        nl: "Palmen en het witte gebouw met bogen op het plein bij de Balcón de Europa",
        sv: "Palmer och den vita byggnaden med valv på torget vid Balcón de Europa"
      }
    }
  ],
  // `routeHero` needs a hero image or brief; the page renders its evidence panel in that slot.
  briefs: [
    { role: 'hero', id: 'hero', motif: "Balcón de Europa bei Nacht, Lichter, Menschen", format: "hochkant 3:4", light: "blaue Stunde bis Nacht" }
  ]
});
