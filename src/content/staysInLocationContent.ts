import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/**
 * Stays-in-location collection pages: the property catalogue for one destination,
 * living inside the localized stays silo (e.g. /de/unterkuenfte/frigiliana). The
 * cards themselves are derived from the vacation rental entities filtered by city,
 * so this module carries only the editorial frame — hero, direct answer, the short
 * per-stay notes and the handoffs to the location's advisory and hub pages.
 *
 * Keyed by location so Nerja and Tarifa slot in with the same shape. Every field
 * carries its five locales at the leaf (DR-CONTENT-STRUCT-001).
 */

type StayLocation = 'frigiliana' | 'nerja' | 'tarifa';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

const lp = (
  en: string[],
  de: string[],
  es: string[],
  nl: string[],
  sv: string[]
): LocalizedTextList => ({ en, de, es, nl, sv });

export const staysInLocationSeo: Record<StayLocation, AmaraAuthoringSeo> = {
  frigiliana: {
    version: '2026-09-05-stays-frigiliana-v1',
    pageType: 'D',
    entityKey: 'amara-brand',
    languages: {
      en: { title: 'AMARA stays in Frigiliana | Apartments for two', description: 'Four AMARA apartments in the old town of Frigiliana, each for two guests, differing in size and terrace — from compact Farah to Lounis with a 39 m² terrace.', robots: 'index, follow', canonical: 'auto' },
      de: { title: 'AMARA-Unterkünfte in Frigiliana | Apartments für Zwei', description: 'Vier AMARA-Apartments im alten Dorfkern von Frigiliana, jedes für zwei Gäste, unterschiedlich in Größe und Terrasse – von der kompakten Farah bis zur Lounis mit 39-m²-Terrasse.', robots: 'index, follow', canonical: 'auto' },
      es: { title: 'Alojamientos AMARA en Frigiliana | Apartamentos para dos', description: 'Cuatro apartamentos AMARA en el casco antiguo de Frigiliana, cada uno para dos huéspedes, distintos en tamaño y terraza: de la compacta Farah a Lounis con terraza de 39 m².', robots: 'index, follow', canonical: 'auto' },
      nl: { title: 'AMARA-verblijven in Frigiliana | Appartementen voor twee', description: 'Vier AMARA-appartementen in de oude stad van Frigiliana, elk voor twee gasten, verschillend in grootte en terras – van de compacte Farah tot Lounis met een terras van 39 m².', robots: 'index, follow', canonical: 'auto' },
      sv: { title: 'AMARA-boenden i Frigiliana | Lägenheter för två', description: 'Fyra AMARA-lägenheter i Frigilianas gamla stad, var och en för två gäster, olika i storlek och terrass – från kompakta Farah till Lounis med en terrass på 39 m².', robots: 'index, follow', canonical: 'auto' }
    }
  },
  nerja: {
    version: '2026-09-05-stays-nerja-v1',
    pageType: 'D',
    entityKey: 'amara-brand',
    languages: {
      en: { title: 'AMARA stays in Nerja | Apartment near the sea', description: 'AMARA Playa in Nerja: a stay for two with a 200 cm bed and a balcony, minutes from Torrecilla beach and the Balcón de Europa.', robots: 'index, follow', canonical: 'auto' },
      de: { title: 'AMARA-Unterkünfte in Nerja | Apartment am Meer', description: 'AMARA Playa in Nerja: Unterkunft für zwei mit 200-cm-Bett und Balkon, wenige Minuten vom Strand Torrecilla und dem Balcón de Europa.', robots: 'index, follow', canonical: 'auto' },
      es: { title: 'Alojamientos AMARA en Nerja | Apartamento junto al mar', description: 'AMARA Playa en Nerja: alojamiento para dos con cama de 200 cm y balcón, a pocos minutos de la playa de Torrecilla y el Balcón de Europa.', robots: 'index, follow', canonical: 'auto' },
      nl: { title: 'AMARA-verblijven in Nerja | Appartement bij zee', description: 'AMARA Playa in Nerja: verblijf voor twee met een bed van 200 cm en een balkon, op enkele minuten van het Torrecilla-strand en het Balcón de Europa.', robots: 'index, follow', canonical: 'auto' },
      sv: { title: 'AMARA-boenden i Nerja | Lägenhet nära havet', description: 'AMARA Playa i Nerja: boende för två med 200 cm säng och balkong, några minuter från Torrecillastranden och Balcón de Europa.', robots: 'index, follow', canonical: 'auto' }
    }
  },
  tarifa: {
    version: '2026-09-05-stays-tarifa-v1',
    pageType: 'D',
    entityKey: 'amara-brand',
    languages: {
      en: { title: 'AMARA stays in Tarifa | Family & Surf apartment', description: 'AMARA Family & Surf in Tarifa: 75 m² over two floors with two bathrooms, a private Atlantic-facing terrace, a shared pool and reserved parking.', robots: 'index, follow', canonical: 'auto' },
      de: { title: 'AMARA-Unterkünfte in Tarifa | Family & Surf', description: 'AMARA Family & Surf in Tarifa: 75 m² auf zwei Etagen mit zwei Bädern, privater Terrasse zum Atlantik, Gemeinschaftspool und reserviertem Parkplatz.', robots: 'index, follow', canonical: 'auto' },
      es: { title: 'Alojamientos AMARA en Tarifa | Family & Surf', description: 'AMARA Family & Surf en Tarifa: 75 m² en dos plantas con dos baños, terraza privada hacia el Atlántico, piscina comunitaria y plaza reservada.', robots: 'index, follow', canonical: 'auto' },
      nl: { title: 'AMARA-verblijven in Tarifa | Family & Surf', description: 'AMARA Family & Surf in Tarifa: 75 m² over twee verdiepingen met twee badkamers, een privéterras aan de Atlantische Oceaan, een gedeeld zwembad en gereserveerd parkeren.', robots: 'index, follow', canonical: 'auto' },
      sv: { title: 'AMARA-boenden i Tarifa | Family & Surf', description: 'AMARA Family & Surf i Tarifa: 75 m² i två plan med två badrum, privat terrass mot Atlanten, gemensam pool och reserverad parkering.', robots: 'index, follow', canonical: 'auto' }
    }
  }
};

export const staysInLocationContent = {
  frigiliana: {
    hero: {
      kicker: l('FOUR STAYS · ONE VILLAGE', 'VIER UNTERKÜNFTE · EIN BERGDORF', 'CUATRO ALOJAMIENTOS · UN PUEBLO', 'VIER VERBLIJVEN · ÉÉN DORP', 'FYRA BOENDEN · EN BY'),
      title: l('AMARA stays in Frigiliana', 'AMARA-Unterkünfte in Frigiliana', 'Alojamientos AMARA en Frigiliana', 'AMARA-verblijven in Frigiliana', 'AMARA-boenden i Frigiliana'),
      lead: l('Four apartments for two in the white old town', 'Vier Apartments für Zwei im weißen alten Dorfkern', 'Cuatro apartamentos para dos en el casco antiguo blanco', 'Vier appartementen voor twee in de witte oude stad', 'Fyra lägenheter för två i den vita gamla stan'),
      answer: lp(
        ['In Frigiliana we keep four AMARA apartments, each for two guests, right inside the white-washed old town. All have one bedroom, fast Wi-Fi and the quiet retreat a stay for two needs — they differ mainly in size and outdoor space: from the compact Farah at 19 m² to Lounis at 70 m² with a 39 m² terrace. Zaid and Maha add their own terraces, Maha the widest of the house. Choose your apartment below and check availability, or first read which part of the village suits you.'],
        ['In Frigiliana führen wir vier AMARA-Apartments, jedes für zwei Gäste, mitten im weiß getünchten Casco Antiguo. Alle haben ein Schlafzimmer, schnelles WLAN und den ruhigen Rückzug, den ein Aufenthalt zu zweit braucht — sie unterscheiden sich vor allem in Größe und Freifläche: von der kompakten Farah mit 19 m² bis zur Lounis mit 70 m² und einer 39-m²-Terrasse. Zaid und Maha bringen eigene Terrassen mit, Maha die weiteste im Haus. Wählt unten euer Apartment und prüft die Verfügbarkeit, oder lest zuerst, welcher Teil des Dorfes zu euch passt.'],
        ['En Frigiliana tenemos cuatro apartamentos AMARA, cada uno para dos huéspedes, en pleno casco antiguo encalado. Todos cuentan con un dormitorio, wifi rápido y el refugio tranquilo que pide una estancia para dos; se diferencian sobre todo en tamaño y espacio exterior: desde la compacta Farah, de 19 m², hasta Lounis, de 70 m² con una terraza de 39 m². Zaid y Maha suman sus propias terrazas, Maha la más amplia de la casa. Elegid vuestro apartamento abajo y consultad la disponibilidad, o leed primero qué parte del pueblo os conviene.'],
        ['In Frigiliana hebben we vier AMARA-appartementen, elk voor twee gasten, midden in de witgekalkte oude stad. Alle hebben één slaapkamer, snelle wifi en de rustige plek die een verblijf met z’n tweeën vraagt — ze verschillen vooral in grootte en buitenruimte: van de compacte Farah van 19 m² tot Lounis van 70 m² met een terras van 39 m². Zaid en Maha hebben hun eigen terras, Maha het ruimste van het huis. Kies hieronder jullie appartement en bekijk de beschikbaarheid, of lees eerst welk deel van het dorp bij jullie past.'],
        ['I Frigiliana har vi fyra AMARA-lägenheter, var och en för två gäster, mitt i den vitkalkade gamla stan. Alla har ett sovrum, snabbt wifi och den lugna tillflykt som en vistelse för två behöver — de skiljer sig främst i storlek och uteyta: från kompakta Farah på 19 m² till Lounis på 70 m² med en terrass på 39 m². Zaid och Maha har egna terrasser, Maha den vidaste i huset. Välj er lägenhet nedan och se tillgängligheten, eller läs först vilken del av byn som passar er.']
      )
    },
    collection: {
      title: l('The four apartments', 'Die vier Apartments', 'Los cuatro apartamentos', 'De vier appartementen', 'De fyra lägenheterna'),
      count: l('4 stays · 2 guests each', '4 Unterkünfte · je 2 Gäste', '4 alojamientos · 2 huéspedes cada uno', '4 verblijven · elk 2 gasten', '4 boenden · 2 gäster vardera')
    },
    stayNotes: {
      'la-amara-farah': l('A compact retreat in the heart of the old town — pared back, bright and quiet.', 'Kompaktes Refugium mitten im alten Dorfkern — reduziert, hell und ruhig.', 'Un refugio compacto en pleno casco antiguo: sobrio, luminoso y tranquilo.', 'Een compact toevluchtsoord in het hart van de oude stad — sober, licht en rustig.', 'En kompakt tillflykt mitt i gamla stan — avskalad, ljus och lugn.'),
      'la-amara-lounis': l('A historic apartment with a large private terrace and generous room.', 'Historisches Apartment mit großer privater Terrasse und viel Platz.', 'Un apartamento histórico con gran terraza privada y mucho espacio.', 'Een historisch appartement met een groot privéterras en veel ruimte.', 'En historisk lägenhet med stor privat terrass och gott om plats.'),
      'la-amara-zaid': l('A romantic retreat with its own terrace and a double rain shower.', 'Romantisches Refugium mit eigener Terrasse und Doppel-Regendusche.', 'Un refugio romántico con terraza propia y ducha doble de lluvia.', 'Een romantisch toevluchtsoord met eigen terras en dubbele regendouche.', 'En romantisk tillflykt med egen terrass och dubbel regndusch.'),
      'la-amara-maha': l('An apartment with an unusually spacious 64 m² terrace for outdoor living.', 'Apartment mit außergewöhnlich weitläufiger 64-m²-Terrasse zum Draußenleben.', 'Un apartamento con una terraza excepcionalmente amplia de 64 m² para la vida al aire libre.', 'Een appartement met een uitzonderlijk ruim terras van 64 m² voor buitenleven.', 'En lägenhet med en ovanligt rymlig terrass på 64 m² för uteliv.')
    },
    handoff: {
      advisory: {
        eyebrow: l('Still deciding', 'Noch am Überlegen', 'Aún decidiendo', 'Nog aan het kiezen', 'Fortfarande osäkra'),
        text: l(
          'The old town is steep and stepped, so how close you are to the plaza and how many stairs you climb differ from one apartment to the next.',
          'Der alte Kern ist steil und verwinkelt — wie nah ihr am Platz seid und wie viele Stufen ihr nehmt, hängt vom Apartment ab.',
          'El casco antiguo es empinado y escalonado: la cercanía a la plaza y las escaleras que subiréis varían de un apartamento a otro.',
          'De oude stad is steil en heeft veel trappen — hoe dicht je bij het plein zit en hoeveel treden je neemt, verschilt per appartement.',
          'Gamla stan är brant och trappig, så hur nära torget ni bor och hur många trappsteg ni tar skiljer sig mellan lägenheterna.'
        ),
        label: l('Where to stay in Frigiliana', 'Wo übernachten in Frigiliana', 'Dónde alojarse en Frigiliana', 'Waar overnachten in Frigiliana', 'Var du bör bo i Frigiliana')
      },
      place: {
        eyebrow: l('The village', 'Der Ort', 'El pueblo', 'Het dorp', 'Byn'),
        text: l(
          'White lanes, viewpoints over the coast and Andalusian cooking a few minutes on foot from every apartment.',
          'Weiße Gassen, Aussichtspunkte über die Küste und andalusische Küche wenige Minuten zu Fuß von jedem Apartment.',
          'Callejones blancos, miradores sobre la costa y cocina andaluza a pocos minutos a pie de cada apartamento.',
          'Witte steegjes, uitzichtpunten over de kust en Andalusische keuken op een paar minuten lopen van elk appartement.',
          'Vita gränder, utsiktsplatser över kusten och andalusiskt kök några minuters promenad från varje lägenhet.'
        ),
        label: l('Discover Frigiliana', 'Frigiliana entdecken', 'Descubrir Frigiliana', 'Frigiliana ontdekken', 'Upptäck Frigiliana')
      }
    },
    closing: {
      title: l('Tell us what the two of you need', 'Sagt uns, was ihr zwei braucht', 'Contadnos qué necesitáis vosotros dos', 'Vertel ons wat jullie samen nodig hebben', 'Berätta vad ni två behöver'),
      lead: l('Send us your dates and two or three must-haves — a terrace, few stairs, a large bed — and we will tell you which of the four fits.', 'Schickt uns eure Reisedaten und zwei, drei Dinge, die euch wichtig sind — Terrasse, wenige Stufen, großes Bett — und wir sagen euch, welches der vier passt.', 'Enviadnos las fechas y dos o tres cosas imprescindibles — terraza, pocas escaleras, cama grande — y os diremos cuál de los cuatro encaja.', 'Stuur ons jullie data en twee of drie must-haves — een terras, weinig trappen, een groot bed — en we vertellen welke van de vier past.', 'Skicka era datum och två eller tre måsten — terrass, få trappsteg, stor säng — så säger vi vilken av de fyra som passar.'),
      cta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet'),
      collectionCta: l('All AMARA stays', 'Alle AMARA-Unterkünfte', 'Todos los alojamientos AMARA', 'Alle AMARA-verblijven', 'Alla AMARA-boenden')
    },
    footerHighlights: {
      here: l('Stays in Frigiliana', 'Unterkünfte in Frigiliana', 'Alojamientos en Frigiliana', 'Verblijven in Frigiliana', 'Boenden i Frigiliana'),
      stays: l('All stays', 'Alle Unterkünfte', 'Todos los alojamientos', 'Alle verblijven', 'Alla boenden'),
      place: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana'),
      whereToStay: l('Where to stay', 'Wo übernachten', 'Dónde alojarse', 'Waar overnachten', 'Var du bör bo')
    }
  }
} as const;

/** Localized unit words for the derived card spec line (city · N guests · size). */
export const staysInLocationUnits = {
  guests: l('guests', 'Gäste', 'huéspedes', 'gasten', 'gäster'),
  terrace: l('terrace', 'Terrasse', 'terraza', 'terras', 'terrass'),
  view: l('View', 'Ansehen', 'Ver', 'Bekijk', 'Visa')
};

export type { StayLocation };
