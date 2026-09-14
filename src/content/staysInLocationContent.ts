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
      en: { title: 'AMARA stays in Frigiliana | For two', description: "Four AMARA stays for two in Frigiliana’s old town: the Farah suite and Lounis, Zaid and Maha apartments, each with its own space, beds and access.", robots: 'index, follow', canonical: 'auto' },
      de: { title: 'AMARA-Unterkünfte in Frigiliana | Für zwei', description: "Vier AMARA-Unterkünfte für zwei in Frigilianas altem Dorfkern: die Suite Farah und die Apartments Lounis, Zaid und Maha mit unterschiedlichen Größen, Betten und Zugängen.", robots: 'index, follow', canonical: 'auto' },
      es: { title: 'Alojamientos AMARA en Frigiliana | Para dos', description: "Cuatro alojamientos AMARA para dos en el casco antiguo de Frigiliana: la suite Farah y los apartamentos Lounis, Zaid y Maha, con distintos espacios, camas y accesos.", robots: 'index, follow', canonical: 'auto' },
      nl: { title: 'AMARA-verblijven in Frigiliana | Voor twee', description: "Vier AMARA-verblijven voor twee in de oude stad van Frigiliana: de suite Farah en de appartementen Lounis, Zaid en Maha, met verschillende ruimtes, bedden en toegang.", robots: 'index, follow', canonical: 'auto' },
      sv: { title: 'AMARA-boenden i Frigiliana | För två', description: "Fyra AMARA-boenden för två i Frigilianas gamla stan: sviten Farah och lägenheterna Lounis, Zaid och Maha, med olika boytor, sängar och tillträde.", robots: 'index, follow', canonical: 'auto' }
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
      en: { title: 'AMARA stays in Tarifa | Family & Surf apartment', description: 'AMARA Family & Surf in Tarifa: 75 m² over two floors with two bathrooms, a private Atlantic-facing balcony, a shared pool and reserved parking.', robots: 'index, follow', canonical: 'auto' },
      de: { title: 'AMARA-Unterkünfte in Tarifa | Family & Surf', description: 'AMARA Family & Surf in Tarifa: 75 m² auf zwei Etagen mit zwei Bädern, privatem Balkon zum Atlantik, Gemeinschaftspool und reserviertem Parkplatz.', robots: 'index, follow', canonical: 'auto' },
      es: { title: 'Alojamientos AMARA en Tarifa | Family & Surf', description: 'AMARA Family & Surf en Tarifa: 75 m² en dos plantas con dos baños, balcón privado hacia el Atlántico, piscina comunitaria y plaza reservada.', robots: 'index, follow', canonical: 'auto' },
      nl: { title: 'AMARA-verblijven in Tarifa | Family & Surf', description: 'AMARA Family & Surf in Tarifa: 75 m² over twee verdiepingen met twee badkamers, een privébalkon aan de Atlantische Oceaan, een gedeeld zwembad en gereserveerd parkeren.', robots: 'index, follow', canonical: 'auto' },
      sv: { title: 'AMARA-boenden i Tarifa | Family & Surf', description: 'AMARA Family & Surf i Tarifa: 75 m² i två plan med två badrum, privat balkong mot Atlanten, gemensam pool och reserverad parkering.', robots: 'index, follow', canonical: 'auto' }
    }
  }
};

export const staysInLocationContent: Partial<Record<StayLocation, StaysLocationCopy>> = {
  frigiliana: {
    hero: {
      kicker: l('FOUR STAYS · ONE VILLAGE', 'VIER UNTERKÜNFTE · EIN BERGDORF', 'CUATRO ALOJAMIENTOS · UN PUEBLO', 'VIER VERBLIJVEN · ÉÉN DORP', 'FYRA BOENDEN · EN BY'),
      title: l('AMARA stays in Frigiliana', 'AMARA-Unterkünfte in Frigiliana', 'Alojamientos AMARA en Frigiliana', 'AMARA-verblijven in Frigiliana', 'AMARA-boenden i Frigiliana'),
      lead: l("Three apartments and one suite in the old town", "Drei Apartments und eine Suite im alten Dorfkern", "Tres apartamentos y una suite en el casco antiguo", "Drie appartementen en één suite in de oude stad", "Tre lägenheter och en svit i gamla stan"),
      answer: lp(
        ["Our four stays in Casa AMARA are right in Frigiliana’s old town, each for two guests with a separate bedroom. Lounis, Zaid and Maha have private terraces with a hammock, sun loungers and an outdoor shower. Farah is our compact suite. From our shared front door, Calle Chorruelo and Calle Real lead to cafés and restaurants without further steps. The individual stays differ in their interior space, beds and access."],
        ["Unsere vier Unterkünfte in Casa AMARA liegen mitten in Frigilianas altem Dorfkern, jede für zwei Gäste mit einem separaten Schlafzimmer. Lounis, Zaid und Maha haben private Terrassen mit Hängematte, Liegen und Außendusche. Farah ist unsere kompakte Suite. Von unserer gemeinsamen Haustür gelangt ihr über Calle Chorruelo und Calle Real ohne weitere Stufen zu Cafés und Restaurants. Innenfläche, Betten und Zugang unterscheiden sich je nach Unterkunft."],
        ["Nuestros cuatro alojamientos en Casa AMARA están en pleno casco antiguo de Frigiliana, cada uno para dos huéspedes y con dormitorio independiente. Lounis, Zaid y Maha tienen terrazas privadas con hamaca, tumbonas y ducha exterior. Farah es nuestra suite compacta. Desde la puerta común, Calle Chorruelo y Calle Real os llevan a cafés y restaurantes sin más escalones. El espacio interior, las camas y el acceso varían según el alojamiento."],
        ["Onze vier verblijven in Casa AMARA liggen midden in de oude stad van Frigiliana, elk voor twee gasten met een aparte slaapkamer. Lounis, Zaid en Maha hebben privéterrassen met een hangmat, ligbedden en buitendouche. Farah is onze compacte suite. Vanaf onze gezamenlijke voordeur lopen jullie via Calle Chorruelo en Calle Real zonder verdere treden naar cafés en restaurants. De binnenruimte, bedden en toegang verschillen per verblijf."],
        ["Våra fyra boenden i Casa AMARA ligger mitt i Frigilianas gamla stan, vart och ett för två gäster med separat sovrum. Lounis, Zaid och Maha har privata terrasser med hängmatta, solsängar och utedusch. Farah är vår kompakta svit. Från vår gemensamma ytterdörr går ni via Calle Chorruelo och Calle Real till kaféer och restauranger utan fler trappsteg. Boyta, sängar och tillträde skiljer sig åt mellan boendena."]
      )
    },
    collection: {
      title: l("The four stays", "Die vier Unterkünfte", "Los cuatro alojamientos", "De vier verblijven", "De fyra boendena"),
      count: l('4 stays · 2 guests each', '4 Unterkünfte · je 2 Gäste', '4 alojamientos · 2 huéspedes cada uno', '4 verblijven · elk 2 gasten', '4 boenden · 2 gäster vardera')
    },
    stayNotes: {
      'la-amara-farah': l("A separate bedroom and a tea kitchen for coffee and breakfast. One step at the shared entrance, then the suite is on one level.", "Separates Schlafzimmer und eine Teeküche für Kaffee und Frühstück. Eine Stufe am gemeinsamen Hauseingang, danach liegt die Suite auf einer Ebene.", "Dormitorio independiente y una pequeña cocina para café y desayunos. Un escalón en la entrada común; después, toda la suite está al mismo nivel.", "Een aparte slaapkamer en een kitchenette voor koffie en ontbijt. Eén trede bij de gezamenlijke ingang; daarna ligt de suite op één niveau.", "Separat sovrum och pentry för kaffe och frukost. Ett trappsteg vid den gemensamma entrén, därefter ligger hela sviten på ett plan."),
      'la-amara-lounis': l("Historic masonry and original floor tiles, with a full kitchen, washing machine and double rain shower.", "Historisches Mauerwerk und originale Bodenfliesen, dazu eine voll ausgestattete Küche, Waschmaschine und Doppel-Regendusche.", "Muros históricos y suelos originales, con cocina completa, lavadora y ducha doble de lluvia.", "Historisch metselwerk en originele vloertegels, met een volledige keuken, wasmachine en dubbele regendouche.", "Historiska murar och ursprungliga golvplattor, med fullt utrustat kök, tvättmaskin och dubbel regndusch."),
      'la-amara-zaid': l("A 180 × 200 cm bed, double rain shower and full kitchen. The washing machine is useful for longer stays.", "180 × 200 cm großes Bett, Doppel-Regendusche und voll ausgestattete Küche. Für längere Aufenthalte gibt es eine Waschmaschine.", "Cama de 180 × 200 cm, ducha doble de lluvia y cocina completa. La lavadora viene bien para estancias más largas.", "Een bed van 180 × 200 cm, dubbele regendouche en volledige keuken. De wasmachine komt van pas bij een langer verblijf.", "Säng på 180 × 200 cm, dubbel regndusch och fullt utrustat kök. Tvättmaskinen är praktisk vid längre vistelser."),
      'la-amara-maha': l("An outdoor kitchen and dining area on the private roof terrace, at the top of Casa AMARA.", "Außenküche und Essplatz auf der privaten Dachterrasse, ganz oben in Casa AMARA.", "Cocina exterior y comedor en la azotea privada, en la parte más alta de Casa AMARA.", "Een buitenkeuken en eethoek op het privédakterras, boven in Casa AMARA.", "Utekök och matplats på den privata takterrassen, högst upp i Casa AMARA.")
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
      title: l('Your stay with us', 'Euer Aufenthalt bei uns', 'Vuestra estancia con nosotros', 'Jullie verblijf bij ons', 'Er vistelse hos oss'),
      lead: l("Choose your dates to see availability for our stays.", "Wählt eure Reisedaten und seht, welche unserer Unterkünfte verfügbar sind.", "Elegid vuestras fechas para ver la disponibilidad de nuestros alojamientos.", "Kies jullie reisdata en bekijk welke van onze verblijven beschikbaar zijn.", "Välj era resedatum och se vilka av våra boenden som är lediga."),
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
        ["Our AMARA Playa apartment puts you in central Nerja, with a quiet courtyard-facing position. Torrecilla beach is about 200 metres away and the Balcón de Europa about 500 metres, both along level walking routes. You have a side sea view from the balcony and a 200 × 200 cm bed in the separate bedroom. A full kitchen and washing machine also make a longer stay easy."],
        ["Unser Apartment AMARA Playa liegt zentral in Nerja und zugleich ruhig zum Innenhof. Zum Strand Torrecilla geht ihr rund 200 Meter, zum Balcón de Europa etwa 500 Meter, jeweils auf ebenen Wegen. Vom Balkon habt ihr seitlichen Meerblick; im separaten Schlafzimmer steht ein 200 × 200 cm großes Bett. Mit einer voll ausgestatteten Küche und einer Waschmaschine seid ihr auch bei einem längeren Aufenthalt unabhängig."],
        ["Nuestro apartamento AMARA Playa está en el centro de Nerja, en una posición tranquila orientada al patio interior. Tenéis la playa de Torrecilla a unos 200 metros y el Balcón de Europa a unos 500, por caminos llanos. Desde el balcón disfrutáis de vistas laterales al mar; en el dormitorio independiente os espera una cama de 200 × 200 cm. La cocina completa y la lavadora facilitan también las estancias largas."],
        ["Ons appartement AMARA Playa ligt centraal in Nerja en rustig aan de binnenplaats. Jullie lopen ongeveer 200 meter naar het Torrecilla-strand en 500 meter naar het Balcón de Europa, over vlakke routes. Vanaf het balkon kijken jullie zijdelings naar zee; in de aparte slaapkamer staat een bed van 200 × 200 cm. Met een volledig uitgeruste keuken en een wasmachine hebben jullie ook tijdens een langer verblijf alle vrijheid."],
        ["Vår lägenhet AMARA Playa ligger centralt i Nerja, med ett lugnt läge mot innergården. Ni går cirka 200 meter till Torrecillastranden och 500 meter till Balcón de Europa, längs plana gångvägar. Balkongen har havsutsikt åt sidan och i det separata sovrummet står en säng på 200 × 200 cm. Ett fullt utrustat kök och en tvättmaskin gör även längre vistelser bekväma."]
      )
    },
    collection: {
      title: l('The apartment', 'Die Unterkunft', 'El apartamento', 'Het appartement', 'Lägenheten'),
      count: l('1 stay · 2 guests', '1 Unterkunft · 2 Gäste', '1 alojamiento · 2 huéspedes', '1 verblijf · 2 gasten', '1 boende · 2 gäster')
    },
    stayNotes: {
      'la-amara-playa': l("The apartment is on the fifth floor with a lift. There are ten steps before the lift: five outside the building and five inside.", "Die Wohnung liegt im fünften Stock mit Aufzug. Vor dem Aufzug liegen zehn Stufen: fünf vor dem Gebäude und fünf im Haus.", "El apartamento está en la quinta planta con ascensor. Antes del ascensor hay diez escalones: cinco fuera del edificio y cinco dentro.", "Het appartement ligt op de vijfde verdieping met lift. Vóór de lift zijn er tien treden: vijf buiten het gebouw en vijf binnen.", "Lägenheten ligger på femte våningen med hiss. Före hissen finns tio trappsteg: fem utanför huset och fem inne.")
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
      title: l('Your stay with us', 'Euer Aufenthalt bei uns', 'Vuestra estancia con nosotros', 'Jullie verblijf bij ons', 'Er vistelse hos oss'),
      lead: l("Choose your dates to see availability for our stays.", "Wählt eure Reisedaten und seht, welche unserer Unterkünfte verfügbar sind.", "Elegid vuestras fechas para ver la disponibilidad de nuestros alojamientos.", "Kies jullie reisdata en bekijk welke van onze verblijven beschikbaar zijn.", "Välj era resedatum och se vilka av våra boenden som är lediga."),
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
        ["At our AMARA Family & Surf apartment, you can have breakfast on your private Atlantic-facing balcony before walking about 500 metres to Los Lances beach or 10–15 minutes to Tarifa’s old town. There is room for up to four guests, with two bedrooms and two bathrooms. A shared pool, full kitchen and reserved underground parking space give you a comfortable base for time together by the coast."],
        ["In unserem Apartment AMARA Family & Surf frühstückt ihr auf dem privaten Balkon mit Atlantikblick. Zum Strand Los Lances sind es rund 500 Meter, in Tarifas Altstadt etwa 10–15 Minuten zu Fuß. Zwei Schlafzimmer und zwei Bäder bieten Platz für bis zu vier Gäste. Mit Gemeinschaftspool, voll ausgestatteter Küche und reserviertem Tiefgaragenplatz habt ihr eine bequeme Basis für gemeinsame Tage an der Küste."],
        ["En nuestro apartamento AMARA Family & Surf podéis desayunar en el balcón privado con vistas al Atlántico. La playa de Los Lances está a unos 500 metros y el casco antiguo de Tarifa a unos 10–15 minutos andando. Hay espacio para hasta cuatro huéspedes, con dos dormitorios y dos baños. La piscina comunitaria, la cocina completa y la plaza reservada en el garaje os permiten disfrutar de unos días juntos en la costa con comodidad."],
        ["In ons appartement AMARA Family & Surf ontbijten jullie op het privébalkon met uitzicht op de Atlantische Oceaan. Het is ongeveer 500 meter naar Los Lances en 10–15 minuten lopen naar de oude stad van Tarifa. Met twee slaapkamers en twee badkamers is er ruimte voor maximaal vier gasten. Een gedeeld zwembad, volledig uitgeruste keuken en eigen plek in de parkeergarage maken het een comfortabele uitvalsbasis voor jullie dagen aan de kust."],
        ["I vår lägenhet AMARA Family & Surf äter ni frukost på den privata balkongen med utsikt över Atlanten. Det är cirka 500 meter till Los Lances och 10–15 minuters promenad till Tarifas gamla stad. Två sovrum och två badrum ger plats för upp till fyra gäster. Med gemensam pool, fullt utrustat kök och reserverad plats i garaget har ni en bekväm bas för dagar tillsammans vid kusten."]
      )
    },
    collection: {
      title: l('The apartment', 'Die Unterkunft', 'El apartamento', 'Het appartement', 'Lägenheten'),
      count: l('1 stay · up to 4 guests', '1 Unterkunft · bis zu 4 Gäste', '1 alojamiento · hasta 4 huéspedes', '1 verblijf · tot 4 gasten', '1 boende · upp till 4 gäster')
    },
    stayNotes: {
      'la-amara-family-and-surf': l("The lift reaches the front door without steps. Inside, stairs lead to both bedrooms: one with a double bed and one with a bunk bed for two.", "Der Aufzug führt stufenlos bis zur Wohnungstür. In der Wohnung führt eine Treppe zu beiden Schlafzimmern: eines mit Doppelbett, eines mit Hochbett für zwei.", "El ascensor llega a la puerta sin escalones. Dentro, una escalera lleva a los dos dormitorios: uno con cama doble y otro con litera para dos.", "De lift brengt jullie zonder treden tot aan de voordeur. Binnen leidt een trap naar beide slaapkamers: één met een tweepersoonsbed en één met een stapelbed voor twee.", "Hissen går utan trappsteg till lägenhetsdörren. Inne leder en trappa till båda sovrummen: ett med dubbelsäng och ett med våningssäng för två.")
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
      title: l('Your stay with us', 'Euer Aufenthalt bei uns', 'Vuestra estancia con nosotros', 'Jullie verblijf bij ons', 'Er vistelse hos oss'),
      lead: l("Choose your dates to see availability for our stays.", "Wählt eure Reisedaten und seht, welche unserer Unterkünfte verfügbar sind.", "Elegid vuestras fechas para ver la disponibilidad de nuestros alojamientos.", "Kies jullie reisdata en bekijk welke van onze verblijven beschikbaar zijn.", "Välj era resedatum och se vilka av våra boenden som är lediga."),
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
  balcony: l('balcony', 'Balkon', 'balcón', 'balkon', 'balkong'),
  view: l('View', 'Ansehen', 'Ver', 'Bekijk', 'Visa')
};

export type { StayLocation };
