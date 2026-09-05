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

interface StaysLocationCopy {
  hero: { kicker: LocalizedText; title: LocalizedText; lead: LocalizedText; answer: LocalizedTextList };
  collection: { title: LocalizedText; count: LocalizedText };
  /** Short note per stay, keyed by the stay slug (city-specific set). */
  stayNotes: Record<string, LocalizedText>;
  handoff: {
    advisory: { eyebrow: LocalizedText; text: LocalizedText; label: LocalizedText };
    place: { eyebrow: LocalizedText; text: LocalizedText; label: LocalizedText };
  };
  closing: { title: LocalizedText; lead: LocalizedText; cta: LocalizedText; collectionCta: LocalizedText };
  footerHighlights: { here: LocalizedText; stays: LocalizedText; place: LocalizedText; whereToStay: LocalizedText };
}

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

export const staysInLocationContent: Partial<Record<StayLocation, StaysLocationCopy>> = {
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
  },
  nerja: {
    hero: {
      kicker: l('ONE STAY · BY THE SEA', 'EINE UNTERKUNFT · AM MEER', 'UN ALOJAMIENTO · JUNTO AL MAR', 'ÉÉN VERBLIJF · AAN ZEE', 'ETT BOENDE · VID HAVET'),
      title: l('AMARA stays in Nerja', 'AMARA-Unterkünfte in Nerja', 'Alojamientos AMARA en Nerja', 'AMARA-verblijven in Nerja', 'AMARA-boenden i Nerja'),
      lead: l('One apartment for two, minutes from the beach', 'Ein Apartment für Zwei, wenige Minuten vom Strand', 'Un apartamento para dos, a minutos de la playa', 'Eén appartement voor twee, minuten van het strand', 'En lägenhet för två, minuter från stranden'),
      answer: lp(
        ['In Nerja we have one AMARA stay: AMARA Playa, an apartment for two with one bedroom and a 200 cm-wide bed. From the balcony with its side sea view it is about 200 metres to Torrecilla beach and around 500 metres to the Balcón de Europa, while the apartment itself stays pleasantly quiet. Check availability below, or first read which corner of Nerja suits you.'],
        ['In Nerja haben wir eine AMARA-Unterkunft: AMARA Playa, ein Apartment für zwei mit einem Schlafzimmer und einem 200 cm breiten Bett. Vom Balkon mit seitlichem Meerblick sind es rund 200 Meter zum Strand Torrecilla und etwa 500 Meter zum Balcón de Europa; die Wohnung selbst bleibt angenehm ruhig. Prüft unten die Verfügbarkeit, oder lest zuerst, welche Ecke von Nerja zu euch passt.'],
        ['En Nerja tenemos un alojamiento AMARA: AMARA Playa, un apartamento para dos con un dormitorio y una cama de 200 cm de ancho. Desde el balcón con vistas laterales al mar hay unos 200 metros a la playa de Torrecilla y unos 500 al Balcón de Europa, y el apartamento se mantiene agradablemente tranquilo. Consultad la disponibilidad abajo, o leed primero qué zona de Nerja os conviene.'],
        ['In Nerja hebben we één AMARA-verblijf: AMARA Playa, een appartement voor twee met één slaapkamer en een bed van 200 cm breed. Vanaf het balkon met zijdelings zeezicht is het ongeveer 200 meter naar het Torrecilla-strand en zo’n 500 meter naar het Balcón de Europa, terwijl het appartement zelf aangenaam rustig blijft. Bekijk hieronder de beschikbaarheid, of lees eerst welke hoek van Nerja bij jullie past.'],
        ['I Nerja har vi ett AMARA-boende: AMARA Playa, en lägenhet för två med ett sovrum och en 200 cm bred säng. Från balkongen med havsutsikt åt sidan är det cirka 200 meter till Torrecillastranden och omkring 500 meter till Balcón de Europa, samtidigt som lägenheten är behagligt lugn. Se tillgängligheten nedan, eller läs först vilken del av Nerja som passar er.']
      )
    },
    collection: {
      title: l('The apartment', 'Die Unterkunft', 'El apartamento', 'Het appartement', 'Lägenheten'),
      count: l('1 stay · 2 guests', '1 Unterkunft · 2 Gäste', '1 alojamiento · 2 huéspedes', '1 verblijf · 2 gasten', '1 boende · 2 gäster')
    },
    stayNotes: {
      'la-amara-playa': l('A quiet apartment with a 200 cm bed and a balcony, a short walk from Torrecilla beach.', 'Ruhiges Apartment mit 200-cm-Bett und Balkon, kurzer Weg zum Strand Torrecilla.', 'Un apartamento tranquilo con cama de 200 cm y balcón, a un paso de la playa de Torrecilla.', 'Een rustig appartement met een bed van 200 cm en een balkon, op loopafstand van het Torrecilla-strand.', 'En lugn lägenhet med 200 cm säng och balkong, en kort promenad från Torrecillastranden.')
    },
    handoff: {
      advisory: {
        eyebrow: l('Still deciding', 'Noch am Überlegen', 'Aún decidiendo', 'Nog aan het kiezen', 'Fortfarande osäkra'),
        text: l(
          'Nerja runs from the Balcón de Europa to the quieter coves, so it is worth a moment to decide how close to the bustle or the water you want to be.',
          'Nerja reicht vom Balcón de Europa bis zu den ruhigeren Buchten — wie nah ihr am Trubel oder am Wasser wohnen wollt, lohnt kurz zu überlegen.',
          'Nerja va del Balcón de Europa a las calas más tranquilas, así que conviene decidir qué tan cerca del bullicio o del agua queréis estar.',
          'Nerja loopt van het Balcón de Europa tot de rustigere baaien, dus het loont even te bepalen hoe dicht bij de drukte of het water je wilt zitten.',
          'Nerja sträcker sig från Balcón de Europa till de lugnare vikarna, så det är värt att fundera på hur nära vimlet eller vattnet ni vill bo.'
        ),
        label: l('Where to stay in Nerja', 'Wo übernachten in Nerja', 'Dónde alojarse en Nerja', 'Waar overnachten in Nerja', 'Var du bör bo i Nerja')
      },
      place: {
        eyebrow: l('The town', 'Der Ort', 'El pueblo', 'De stad', 'Staden'),
        text: l(
          'Beaches in small coves, the Balcón de Europa above the sea and the Cuevas de Nerja a few minutes away.',
          'Strände in kleinen Buchten, der Balcón de Europa über dem Meer und die Cuevas de Nerja wenige Minuten entfernt.',
          'Playas en pequeñas calas, el Balcón de Europa sobre el mar y las Cuevas de Nerja a pocos minutos.',
          'Stranden in kleine baaien, het Balcón de Europa boven zee en de Cuevas de Nerja op een paar minuten.',
          'Stränder i små vikar, Balcón de Europa över havet och Cuevas de Nerja några minuter bort.'
        ),
        label: l('Discover Nerja', 'Nerja entdecken', 'Descubrir Nerja', 'Nerja ontdekken', 'Upptäck Nerja')
      }
    },
    closing: {
      title: l('Tell us what the two of you need', 'Sagt uns, was ihr zwei braucht', 'Contadnos qué necesitáis vosotros dos', 'Vertel ons wat jullie samen nodig hebben', 'Berätta vad ni två behöver'),
      lead: l('Send us your dates and we will tell you whether AMARA Playa fits your stay.', 'Schickt uns eure Reisedaten — wir sagen euch, ob AMARA Playa zu eurem Aufenthalt passt.', 'Enviadnos las fechas y os diremos si AMARA Playa encaja con vuestra estancia.', 'Stuur ons jullie data en we vertellen of AMARA Playa bij jullie verblijf past.', 'Skicka era datum så säger vi om AMARA Playa passar er vistelse.'),
      cta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet'),
      collectionCta: l('All AMARA stays', 'Alle AMARA-Unterkünfte', 'Todos los alojamientos AMARA', 'Alle AMARA-verblijven', 'Alla AMARA-boenden')
    },
    footerHighlights: {
      here: l('Stays in Nerja', 'Unterkünfte in Nerja', 'Alojamientos en Nerja', 'Verblijven in Nerja', 'Boenden i Nerja'),
      stays: l('All stays', 'Alle Unterkünfte', 'Todos los alojamientos', 'Alle verblijven', 'Alla boenden'),
      place: l('Nerja', 'Nerja', 'Nerja', 'Nerja', 'Nerja'),
      whereToStay: l('Where to stay', 'Wo übernachten', 'Dónde alojarse', 'Waar overnachten', 'Var du bör bo')
    }
  },
  tarifa: {
    hero: {
      kicker: l('ONE STAY · ATLANTIC COAST', 'EINE UNTERKUNFT · ATLANTIKKÜSTE', 'UN ALOJAMIENTO · COSTA ATLÁNTICA', 'ÉÉN VERBLIJF · ATLANTISCHE KUST', 'ETT BOENDE · ATLANTKUSTEN'),
      title: l('AMARA stays in Tarifa', 'AMARA-Unterkünfte in Tarifa', 'Alojamientos AMARA en Tarifa', 'AMARA-verblijven in Tarifa', 'AMARA-boenden i Tarifa'),
      lead: l('Room for up to four, with an Atlantic view', 'Platz für bis zu vier, mit Atlantikblick', 'Espacio para hasta cuatro, con vistas al Atlántico', 'Ruimte voor maximaal vier, met uitzicht op de oceaan', 'Plats för upp till fyra, med utsikt över Atlanten'),
      answer: lp(
        ['In Tarifa we have one AMARA stay: AMARA Family & Surf, 75 m² over two floors with two bedrooms and two bathrooms, room for up to four. A private terrace faces the Atlantic, and there is a shared pool and a reserved underground parking space. It is generous for two and comfortable for a family or surf crew. Check availability below, or first read which corner of Tarifa suits you.'],
        ['In Tarifa haben wir eine AMARA-Unterkunft: AMARA Family & Surf, 75 m² auf zwei Etagen mit zwei Schlafzimmern und zwei Bädern, Platz für bis zu vier. Eine private Terrasse zeigt zum Atlantik; dazu kommen ein Gemeinschaftspool und ein reservierter Tiefgaragenplatz. Zu zweit wohnt ihr großzügig, als Familie oder Surf-Crew passt ihr bequem hinein. Prüft unten die Verfügbarkeit, oder lest zuerst, welche Ecke von Tarifa zu euch passt.'],
        ['En Tarifa tenemos un alojamiento AMARA: AMARA Family & Surf, 75 m² en dos plantas con dos dormitorios y dos baños, espacio para hasta cuatro. Una terraza privada mira al Atlántico, y hay piscina comunitaria y plaza reservada en el garaje. Para dos resulta amplio y para una familia o un grupo de surf, cómodo. Consultad la disponibilidad abajo, o leed primero qué zona de Tarifa os conviene.'],
        ['In Tarifa hebben we één AMARA-verblijf: AMARA Family & Surf, 75 m² over twee verdiepingen met twee slaapkamers en twee badkamers, plaats voor maximaal vier. Een privéterras kijkt uit op de Atlantische Oceaan, en er zijn een gedeeld zwembad en een gereserveerde parkeerplaats. Voor twee is het ruim en voor een gezin of surfploeg comfortabel. Bekijk hieronder de beschikbaarheid, of lees eerst welke hoek van Tarifa bij jullie past.'],
        ['I Tarifa har vi ett AMARA-boende: AMARA Family & Surf, 75 m² i två plan med två sovrum och två badrum, plats för upp till fyra. En privat terrass vetter mot Atlanten, och det finns gemensam pool och reserverad garageplats. För två är det rymligt och för en familj eller ett surfgäng bekvämt. Se tillgängligheten nedan, eller läs först vilken del av Tarifa som passar er.']
      )
    },
    collection: {
      title: l('The apartment', 'Die Unterkunft', 'El apartamento', 'Het appartement', 'Lägenheten'),
      count: l('1 stay · up to 4 guests', '1 Unterkunft · bis zu 4 Gäste', '1 alojamiento · hasta 4 huéspedes', '1 verblijf · tot 4 gasten', '1 boende · upp till 4 gäster')
    },
    stayNotes: {
      'la-amara-family-and-surf': l('Two floors and two bathrooms with a private Atlantic-facing terrace, a shared pool and reserved parking.', 'Zwei Etagen und zwei Bäder mit privater Terrasse zum Atlantik, Gemeinschaftspool und reserviertem Parkplatz.', 'Dos plantas y dos baños con terraza privada hacia el Atlántico, piscina comunitaria y plaza reservada.', 'Twee verdiepingen en twee badkamers met een privéterras aan de Atlantische Oceaan, een gedeeld zwembad en gereserveerd parkeren.', 'Två plan och två badrum med privat terrass mot Atlanten, gemensam pool och reserverad parkering.')
    },
    handoff: {
      advisory: {
        eyebrow: l('Still deciding', 'Noch am Überlegen', 'Aún decidiendo', 'Nog aan het kiezen', 'Fortfarande osäkra'),
        text: l(
          'Tarifa runs from the old town to the kite beaches along the coast, so it is worth a moment to decide how close to the town or the wind you want to be.',
          'Tarifa reicht von der Altstadt bis zu den Kite-Stränden der Küste — wie nah ihr am Ort oder am Wind wohnen wollt, lohnt kurz zu überlegen.',
          'Tarifa va del casco antiguo a las playas de kite de la costa, así que conviene decidir qué tan cerca del pueblo o del viento queréis estar.',
          'Tarifa loopt van de oude stad tot de kitestranden langs de kust, dus het loont even te bepalen hoe dicht bij de stad of de wind je wilt zitten.',
          'Tarifa sträcker sig från gamla stan till kitestränderna längs kusten, så det är värt att fundera på hur nära staden eller vinden ni vill bo.'
        ),
        label: l('Where to stay in Tarifa', 'Wo übernachten in Tarifa', 'Dónde alojarse en Tarifa', 'Waar overnachten in Tarifa', 'Var du bör bo i Tarifa')
      },
      place: {
        eyebrow: l('The town', 'Der Ort', 'El pueblo', 'De stad', 'Staden'),
        text: l(
          'Kilometres of Atlantic beach, the old town and one of Europe’s best kite spots a few minutes away.',
          'Kilometerlange Atlantikstrände, die Altstadt und einer der besten Kitespots Europas wenige Minuten entfernt.',
          'Kilómetros de playa atlántica, el casco antiguo y uno de los mejores spots de kite de Europa a pocos minutos.',
          'Kilometers Atlantisch strand, de oude stad en een van de beste kitespots van Europa op een paar minuten.',
          'Kilometervis av atlantstrand, gamla stan och en av Europas bästa kitespots några minuter bort.'
        ),
        label: l('Discover Tarifa', 'Tarifa entdecken', 'Descubrir Tarifa', 'Tarifa ontdekken', 'Upptäck Tarifa')
      }
    },
    closing: {
      title: l('Tell us what you need', 'Sagt uns, was ihr braucht', 'Contadnos qué necesitáis', 'Vertel ons wat jullie nodig hebben', 'Berätta vad ni behöver'),
      lead: l('Send us your dates and we will tell you whether Family & Surf fits your stay.', 'Schickt uns eure Reisedaten — wir sagen euch, ob Family & Surf zu eurem Aufenthalt passt.', 'Enviadnos las fechas y os diremos si Family & Surf encaja con vuestra estancia.', 'Stuur ons jullie data en we vertellen of Family & Surf bij jullie verblijf past.', 'Skicka era datum så säger vi om Family & Surf passar er vistelse.'),
      cta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet'),
      collectionCta: l('All AMARA stays', 'Alle AMARA-Unterkünfte', 'Todos los alojamientos AMARA', 'Alle AMARA-verblijven', 'Alla AMARA-boenden')
    },
    footerHighlights: {
      here: l('Stays in Tarifa', 'Unterkünfte in Tarifa', 'Alojamientos en Tarifa', 'Verblijven in Tarifa', 'Boenden i Tarifa'),
      stays: l('All stays', 'Alle Unterkünfte', 'Todos los alojamientos', 'Alle verblijven', 'Alla boenden'),
      place: l('Tarifa', 'Tarifa', 'Tarifa', 'Tarifa', 'Tarifa'),
      whereToStay: l('Where to stay', 'Wo übernachten', 'Dónde alojarse', 'Waar overnachten', 'Var du bör bo')
    }
  }
};

/** Localized unit words for the derived card spec line (city · N guests · size). */
export const staysInLocationUnits = {
  guests: l('guests', 'Gäste', 'huéspedes', 'gasten', 'gäster'),
  terrace: l('terrace', 'Terrasse', 'terraza', 'terras', 'terrass'),
  view: l('View', 'Ansehen', 'Ver', 'Bekijk', 'Visa')
};

export type { StayLocation };
