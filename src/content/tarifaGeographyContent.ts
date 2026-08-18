import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface TarifaGeographySection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface TarifaGeographyLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  orientation: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{ label: string; value: string }>;
  };
  sections: TarifaGeographySection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    experienceLabel: string;
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const tarifaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-13-tarifa-geography-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Tarifa? Strait, Atlantic, Mediterranean and Africa',
      description: 'See where Tarifa sits between the Atlantic, Mediterranean, Europe and Africa, with practical orientation from AMARA in La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Tarifa? Atlantik, Mittelmeer, Meerenge und Afrika',
      description: 'Tarifas Lage zwischen Atlantik, Mittelmeer, Europa und Afrika – ab AMARA in La Marina sind es 400–500 m zum Strandzugang Los Lances.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Tarifa: Atlántico, Mediterráneo y África',
      description: 'Descubrid la posición de Tarifa entre Atlántico, Mediterráneo, Europa y África, con orientación práctica desde AMARA en La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Tarifa? Oceaan, Middellandse Zee en Afrika',
      description: 'Bekijk Tarifas ligging tussen Atlantische Oceaan, Middellandse Zee, Europa en Afrika, met praktische oriëntatie vanaf AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Tarifa? Atlanten, Medelhavet, sundet och Afrika',
      description: 'Se hur Tarifa ligger mellan Atlanten, Medelhavet, Europa och Afrika – från AMARA i La Marina är det 400–500 m ner till Los Lances.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sharedSources = {
  ign: 'https://www.ign.es/web/preguntas-frecuentes',
  naturalPark: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/legislacion-autonomica-nacional/parques-naturales/parque-natural-del-estrecho',
  tarifaNature: 'https://turismodetarifa.com/que-hacer/parques-naturales-senderismo/',
  coastalPlan: 'https://www.juntadeandalucia.es/boja/2003/18/1',
  aemetWind: 'https://repositorio.aemet.es/bitstream/20.500.11765/16813/1/TyC_2024_84%20%289%29.pdf',
  summerTime: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-4026',
  solarTime: 'https://www.timeanddate.com/sun/%409796343?month=6'
} as const;

export const tarifaGeographyContent: Record<AmaraLanguage, TarifaGeographyLocale> = {
  en: {
    navLabel: 'Geography & Orientation',
    hero: {
      eyebrow: 'Tarifa geography guide',
      title: 'Where Tarifa is',
      standfirst: 'Tarifa is not simply a town at the bottom of Spain. It sits **at Europe’s southern edge, beside the Strait of Gibraltar**, with the Atlantic opening west and the Mediterranean setting continuing east. From AMARA in La Marina, that geography becomes a practical way to plan each day.',
      note: 'A host-written guide to reading Tarifa’s landscape. Wind, visibility, currents and water conditions remain dynamic.',
      updated: 'Geography checked in August 2026'
    },
    facts: [
      { label: 'Southern landmark', value: 'Punta de Tarifa · almost exactly 36° N' },
      { label: 'Water setting', value: 'Atlantic · Strait · Mediterranean' },
      { label: 'Across the Strait', value: 'Africa to the south' },
      { label: 'AMARA base', value: 'La Marina · Mar Adriático 29' }
    ],
    orientation: {
      eyebrow: 'Orientation at a glance',
      title: 'Read the town from AMARA to the water',
      intro: 'These are the fixed reference points behind the guide. They form a simple spatial sequence without pretending that a diagram can replace a current route or conditions check.',
      items: [
        { label: 'Your base', value: 'AMARA Family & Surf · La Marina' },
        { label: 'Town core', value: 'Old Town' },
        { label: 'Passenger edge', value: 'Port of Tarifa · 2.1 km, about 8 min by car' },
        { label: 'Southern landmark', value: 'Isla de las Palomas' },
        { label: 'West', value: 'Atlantic · Los Lances beach access 400–500 m · Valdevaqueros' },
        { label: 'East', value: 'Strait-facing Mediterranean setting' },
        { label: 'South', value: 'Africa across the Strait' }
      ]
    },
    sections: [
      {
        id: 'strait-of-gibraltar',
        eyebrow: '01 · The narrow passage',
        title: 'The Strait of Gibraltar sets the scale',
        paragraphs: [
          'The Strait links the Atlantic Ocean with the Mediterranean Sea and separates southern Europe from northern Africa. Tarifa occupies its northern shore near the western entrance.',
          'That makes the horizon part of a corridor rather than a single open-water view. On clear days Africa is visible; cloud, haze and wind can make the same view feel entirely different on another day.',
          'From AMARA in La Marina, the Old Town, port and Isla de las Palomas give you a practical line toward the Strait. The apartment is your town base, not a waterfront or port address.'
        ]
      },
      {
        id: 'atlantic-mediterranean',
        eyebrow: '02 · Two coastal settings',
        title: 'Atlantic west, Mediterranean east',
        paragraphs: [
          'West of town, Tarifa’s coast opens to the Atlantic through Los Lances and onward toward Valdevaqueros. East of the headland, the shore continues through the Strait toward the Mediterranean side of the Campo de Gibraltar.',
          'These are distinct coastal settings, useful for choosing direction, landscape and activity. They are not a permanent warm-water versus cold-water rule: temperature, currents, sea state and local conditions change.',
          'At AMARA, decide whether your day points west along the Atlantic coast or east into the Strait before setting out. For a water day, add a current conditions check rather than relying on the sea name alone.'
        ]
      },
      {
        id: 'europe-africa',
        eyebrow: '03 · Two continents',
        title: 'Europe and Africa share the horizon',
        paragraphs: [
          'Tarifa lies on Europe’s southern edge. Punta de Tarifa, on Isla de las Palomas beyond the port, is the landmark southern tip at almost exactly 36 degrees north.',
          'Africa across the Strait is not a decorative footnote; it changes the sense of scale. Visibility is never guaranteed, so a clear outline of the Rif is a condition of the day rather than a promised view.',
          'The Old Town is about 10–15 minutes on foot from AMARA. Continuing toward the port and island axis makes Tarifa’s south-facing position easier to read without turning the outing into a long drive.'
        ]
      },
      {
        id: 'town-coast-hinterland',
        eyebrow: '04 · Three landscapes',
        title: 'Town, coast and hinterland sit close together',
        paragraphs: [
          'Tarifa town occupies a compact coastal position, while beaches, low ground, hills and the protected landscapes of El Estrecho and Los Alcornocales spread around it.',
          'A short map distance can therefore lead to a very different day: urban streets, exposed coast and rising inland terrain are separate settings. Multi-day plans work better when they alternate rather than treating Tarifa as one continuous beach strip.',
          'AMARA keeps everyday life anchored in La Marina, with a supermarket directly opposite. The Old Town is a walk; the western coast and hinterland are the moments when the reserved car space becomes practically useful.'
        ]
      },
      {
        id: 'topography',
        eyebrow: '05 · Relief and exposure',
        title: 'Elevation changes routes, views and effort',
        paragraphs: [
          'The protected coast includes plains, cliffs, hills and mountain massifs. Official local route mapping shows how terrain can rise from near sea level into the Cerros del Estrecho over a relatively short distance.',
          'That matters more than a distance figure alone: elevation changes walking effort, exposure and the kind of viewpoint you reach. A route should not be assumed flat simply because its start and finish both carry a Tarifa address.',
          'For AMARA, the known 10–15-minute Old Town walk describes proximity, not gradient. Choose the actual walking route and footwear for the day; use the car selectively when the destination moves onto the wider coast or higher ground.'
        ]
      },
      {
        id: 'east-west',
        eyebrow: '06 · Direction and daylight',
        title: 'West is the open Atlantic coast',
        paragraphs: [
          'The westbound line from Tarifa runs past Los Lances toward Valdevaqueros and the broader Atlantic coast. Eastbound movement stays with the Strait and the Mediterranean-facing side of the region.',
          'Tarifa’s far-western position in mainland Spain, combined with Spanish summer time, produces very late summer sunsets by the clock. The practical result is a longer usable afternoon and evening; it is a geography-and-clock effect, not an explanation for Spanish dining culture.',
          'From AMARA in La Marina, practical westbound car access makes late-afternoon or evening Atlantic outings easy to consider. Sunset does not remove the need to check wind, access and parking conditions before leaving.'
        ]
      },
      {
        id: 'wind-geography',
        eyebrow: '07 · The wind corridor',
        title: 'Why geography is part of Tarifa’s wind story',
        paragraphs: [
          'The Strait narrows between the relief of southern Iberia and northern Morocco. Regional pressure patterns interact with that corridor and its topography, helping make easterly Levante and westerly Poniente recurring parts of Tarifa’s weather.',
          'Geography explains why direction and exposure matter; it does not predict the conditions for a particular beach, hour or activity. Technical wind choices belong in the dedicated wind guide and a current forecast.',
          'At AMARA, use the geography as a prompt to check direction before choosing a westbound outing. The apartment’s location does not create a universal shelter, noise or wind advantage.'
        ]
      },
      {
        id: 'amara-la-marina',
        eyebrow: '08 · Your base in La Marina',
        title: 'What Tarifa’s geography means at AMARA',
        paragraphs: [
          'AMARA Family & Surf sits at Mar Adriático 29 in La Marina: within the town’s everyday fabric, separate from the Old Town, port and open western coast.',
          'That position supports two rhythms. Walk for the supermarket opposite and the Old Town around 10–15 minutes away; use the car when a day points west toward Valdevaqueros, the wider coast or inland landscapes.',
          'The reserved underground space makes that selective car use possible at the apartment. It does not guarantee parking elsewhere, and the geography still asks for a fresh decision each day.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue with the practical detail',
      title: 'Use the guide that owns the next question',
      links: [
        { token: 'getting_to_tarifa', label: 'Arrival & Mobility', text: 'Road, bus, airports, port and the final journey to AMARA.' },
        { token: 'tarifa_where_to_stay', label: 'Where to Stay / Areas', text: 'Compare the daily trade-offs between Tarifa’s accommodation settings.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & Watersports', text: 'Move from geographic context to technical wind depth and current-condition planning.' },
        { token: 'tarifa_experience_hub', label: 'Tarifa Experience', text: 'Turn the orientation into beaches, nature, history and days out.' }
      ]
    },
    sources: {
      eyebrow: 'Evidence behind the guide',
      title: 'Geography and time sources',
      intro: 'The fixed geographic claims come from Spanish public mapping and environmental sources. Wind, visibility, water and solar times still vary by date and conditions.',
      checked: 'Sources checked in August 2026.',
      links: [
        { label: 'Instituto Geográfico Nacional · Punta de Tarifa', text: 'Official coordinates for Spain’s southern geographic reference point.', href: sharedSources.ign },
        { label: 'Junta de Andalucía · El Estrecho Natural Park', text: 'Official context for the Atlantic–Mediterranean and Europe–Africa setting.', href: sharedSources.naturalPark },
        { label: 'Tarifa Tourism · Natural parks and landscape', text: 'Local public information on coast, relief and Isla de las Palomas.', href: sharedSources.tarifaNature },
        { label: 'Junta de Andalucía · Coastal management plan', text: 'Detailed official geography, geology and topography of the Algeciras–Tarifa coast.', href: sharedSources.coastalPlan },
        { label: 'AEMET · Winds in the Strait of Gibraltar', text: 'Meteorological context for topography and recurring easterly and westerly winds.', href: sharedSources.aemetWind },
        { label: 'BOE · Spanish summer time', text: 'Official dates and one-hour summer clock change.', href: sharedSources.summerTime },
        { label: 'Tarifa Port · June solar times', text: 'Date-specific sunrise, sunset and solar-noon calculations.', href: sharedSources.solarTime }
      ]
    },
    closing: {
      eyebrow: 'Keep your bearings',
      title: 'Let direction shape the day, not dictate it',
      body: 'Tarifa’s map becomes useful when it stays flexible: town on foot, western coast when conditions suit, and the Strait as the constant reference. Return to the Location guide or continue into the experiences that geography makes possible.',
      locationLabel: 'Back to Tarifa Location',
      experienceLabel: 'Explore Tarifa experiences'
    }
  },
  de: {
    navLabel: 'Geografie & Orientierung',
    hero: {
      eyebrow: 'Geografie-Guide Tarifa',
      title: 'Wo Tarifa liegt',
      standfirst: 'Tarifa ist nicht einfach ein Ort am unteren Rand Spaniens. Die Stadt liegt **am Südrand Europas, an der Straße von Gibraltar**: westlich öffnet sich der Atlantik, östlich setzt sich die mediterrane Küstenwelt fort. Von AMARA in La Marina wird diese Lage zur praktischen Orientierung für jeden Tag.',
      note: 'Ein Gastgeber-Guide zum Lesen der Landschaft. Wind, Sicht, Strömung und Wasserbedingungen bleiben dynamisch.',
      updated: 'Geografie geprüft im August 2026'
    },
    facts: [
      { label: 'Südlicher Bezugspunkt', value: 'Punta de Tarifa · fast genau 36° N' },
      { label: 'Wasserlage', value: 'Atlantik · Meerenge · Mittelmeer' },
      { label: 'Jenseits der Meerenge', value: 'Afrika im Süden' },
      { label: 'Euer AMARA-Ausgangspunkt', value: 'La Marina · Mar Adriático 29' }
    ],
    orientation: {
      eyebrow: 'Orientierung auf einen Blick',
      title: 'Vom AMARA bis ans Wasser',
      intro: 'Diese festen Bezugspunkte tragen den Guide. Sie ergeben eine einfache räumliche Folge, ohne eine aktuelle Routen- oder Bedingungsprüfung zu ersetzen.',
      items: [
        { label: 'Euer Ausgangspunkt', value: 'AMARA Family & Surf · La Marina' },
        { label: 'Historischer Kern', value: 'Altstadt' },
        { label: 'Am Wasser', value: 'Hafen von Tarifa · 2,1 km, etwa 8 Autominuten' },
        { label: 'Südlicher Bezugspunkt', value: 'Isla de las Palomas' },
        { label: 'Westen', value: 'Atlantik · Strandzugang Los Lances 400–500 m · Valdevaqueros' },
        { label: 'Osten', value: 'Mediterrane Seite der Meerenge' },
        { label: 'Süden', value: 'Afrika jenseits der Meerenge' }
      ]
    },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · Die schmale Passage', title: 'Die Straße von Gibraltar setzt den Maßstab', paragraphs: [
        'Die Meerenge verbindet den Atlantik mit dem Mittelmeer und trennt Südeuropa von Nordafrika. Tarifa liegt an ihrem Nordufer nahe der westlichen Einfahrt.',
        'Der Horizont gehört damit zu einem Korridor und nicht nur zu einer offenen Meeresfläche. Bei klarer Sicht zeigt sich Afrika; Dunst, Wolken und Wind können denselben Blick am nächsten Tag völlig verändern.',
        'Ab AMARA in La Marina bilden Altstadt, Hafen und Isla de las Palomas eine praktische Linie zur Meerenge. Das Apartment ist euer Ausgangspunkt in der Stadt, keine Unterkunft direkt am Hafen oder Wasser.'
      ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Zwei Küstenwelten', title: 'Atlantik im Westen, Mittelmeer im Osten', paragraphs: [
        'Westlich der Stadt öffnet sich Tarifas Küste über Los Lances in Richtung Valdevaqueros zum Atlantik. Östlich der Landspitze führt die Küste durch die Meerenge zur mediterranen Seite des Campo de Gibraltar.',
        'Das sind zwei unterschiedliche Küstenwelten, hilfreich für Richtung, Landschaft und Aktivität. Eine allgemeine Regel „warmes gegen kaltes Wasser“ ergibt sich daraus nicht: Temperatur, Strömung, Seegang und lokale Bedingungen verändern sich.',
        'Entscheidet am AMARA zuerst, ob euer Tag westwärts an den Atlantik oder ostwärts in die Meerenge führt. Für einen Tag am Wasser kommt immer eine aktuelle Bedingungsprüfung hinzu.'
      ] },
      { id: 'europe-africa', eyebrow: '03 · Zwei Kontinente', title: 'Europa und Afrika teilen sich den Horizont', paragraphs: [
        'Tarifa liegt am Südrand Europas. Die Punta de Tarifa auf der Isla de las Palomas hinter dem Hafen markiert die südliche Landmarke bei fast genau 36 Grad Nord.',
        'Afrika jenseits der Meerenge verändert den Maßstab des Ortes. Sicht ist nie garantiert; die klare Silhouette des Rif ist eine Tagesbedingung und kein versprochener Ausblick.',
        'Vom AMARA erreicht ihr die Altstadt in etwa 10–15 Minuten zu Fuß. Weiter in Richtung Hafen und Inselachse wird Tarifas Südlage anschaulich, ohne dass daraus eine lange Autofahrt wird.'
      ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Drei Landschaften', title: 'Stadt, Küste und Hinterland liegen nah beieinander', paragraphs: [
        'Tarifas kompakter Stadtraum liegt direkt an der Küste; rundherum breiten sich Strände, tiefere Ebenen, Hügel und die geschützten Landschaften von El Estrecho und Los Alcornocales aus.',
        'Eine kurze Distanz auf der Karte kann deshalb zu einem ganz anderen Tag führen: Stadtgassen, offene Küste und ansteigendes Hinterland sind eigene Umgebungen. Über mehrere Tage lohnt sich der Wechsel.',
        'AMARA verankert euren Alltag in La Marina, mit dem Supermarkt direkt gegenüber. Die Altstadt ist ein Fußweg; für Westküste und Hinterland wird der reservierte Stellplatz praktisch relevant.'
      ] },
      { id: 'topography', eyebrow: '05 · Relief und Exposition', title: 'Höhe verändert Weg, Aussicht und Aufwand', paragraphs: [
        'Die geschützte Küste umfasst Ebenen, Klippen, Hügel und Bergmassive. Offizielle lokale Routenkarten zeigen, wie das Gelände auf kurzer Strecke vom Meer in die Cerros del Estrecho ansteigen kann.',
        'Das sagt oft mehr als eine reine Entfernung: Höhenmeter verändern Gehaufwand, Exposition und Aussichtspunkt. Ein Weg ist nicht automatisch flach, nur weil Start und Ziel beide eine Adresse in Tarifa tragen.',
        'Beim AMARA beschreibt der bekannte Altstadtweg von etwa 10–15 Minuten die Nähe, nicht das Gefälle. Wählt die konkrete Route und Schuhe passend zum Tag; für weitere Küsten- oder Höhenziele nutzt ihr das Auto gezielt.'
      ] },
      { id: 'east-west', eyebrow: '06 · Richtung und Tageslicht', title: 'Im Westen beginnt die offene Atlantikküste', paragraphs: [
        'Westwärts führt Tarifas Linie über Los Lances nach Valdevaqueros und an die weitere Atlantikküste. Ostwärts bleibt ihr an der Meerenge und auf der mediterranen Seite der Region.',
        'Tarifas weit westliche Lage auf dem spanischen Festland sorgt zusammen mit der spanischen Sommerzeit für sehr späte Sonnenuntergänge nach der Uhr. So bleiben Nachmittage und Abende länger nutzbar; das ist ein Effekt von Lage und Uhrzeit, keine Erklärung für spanische Esskultur.',
        'Vom AMARA in La Marina lässt sich die praktische Ausfahrt nach Westen gut für späte Nachmittage oder Abende am Atlantik nutzen. Wind, Zufahrt und Parklage prüft ihr trotzdem vor der Abfahrt aktuell.'
      ] },
      { id: 'wind-geography', eyebrow: '07 · Der Windkorridor', title: 'Warum Geografie zu Tarifas Windgeschichte gehört', paragraphs: [
        'Die Meerenge verengt sich zwischen dem Relief Südiberiens und Nordmarokkos. Regionale Druckverteilungen wirken mit diesem Korridor und seiner Topografie zusammen; östlicher Levante und westlicher Poniente kehren deshalb regelmäßig wieder.',
        'Die Geografie erklärt, warum Richtung und Exposition wichtig sind. Sie sagt nicht die Bedingungen für einen bestimmten Strand, eine Stunde oder Aktivität voraus – dafür gibt es den Wind-Guide und aktuelle Vorhersagen.',
        'Beim AMARA ist die Windrichtung ein sinnvoller Check vor einer Ausfahrt nach Westen. Die Lage des Apartments schafft keinen allgemeinen Schutz-, Ruhe- oder Windvorteil.'
      ] },
      { id: 'amara-la-marina', eyebrow: '08 · Euer Ausgangspunkt in La Marina', title: 'Was Tarifas Geografie beim AMARA bedeutet', paragraphs: [
        'AMARA Family & Surf liegt an der Mar Adriático 29 in La Marina: mitten im städtischen Alltag, aber getrennt von Altstadt, Hafen und offener Westküste.',
        'Daraus entstehen zwei Rhythmen. Zu Fuß geht es zum Supermarkt gegenüber und in etwa 10–15 Minuten zur Altstadt; das Auto nutzt ihr, wenn der Tag nach Westen Richtung Valdevaqueros, an die weitere Küste oder ins Hinterland führt.',
        'Der reservierte unterirdische Stellplatz ermöglicht diese gezielte Autonutzung am Apartment. Er garantiert keinen Parkplatz an anderen Zielen, und die Geografie verlangt weiterhin jeden Tag eine neue Entscheidung.'
      ] }
    ],
    related: {
      eyebrow: 'Weiter mit dem praktischen Detail',
      title: 'Für die nächste Frage gibt es den passenden Guide',
      links: [
        { token: 'getting_to_tarifa', label: 'Anreise & Mobilität', text: 'Straße, Bus, Flughäfen, Hafen und der letzte Abschnitt zum AMARA.' },
        { token: 'tarifa_where_to_stay', label: 'Wo übernachten / Lagen', text: 'Die täglichen Unterschiede zwischen Tarifas Wohnlagen vergleichen.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & Wassersport', text: 'Vom geografischen Kontext zur technischen Windtiefe und aktuellen Planung.' },
        { token: 'tarifa_experience_hub', label: 'Tarifa erleben', text: 'Aus Orientierung werden Strände, Natur, Geschichte und Ausflugstage.' }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide', title: 'Quellen zu Geografie und Zeit', intro: 'Die festen geografischen Aussagen stammen aus spanischen Karten- und Umweltquellen. Wind, Sicht, Wasser und Sonnenzeiten verändern sich weiterhin nach Datum und Bedingungen.', checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'Instituto Geográfico Nacional · Punta de Tarifa', text: 'Offizielle Koordinaten des südlichen geografischen Bezugspunkts Spaniens.', href: sharedSources.ign },
        { label: 'Junta de Andalucía · Naturpark El Estrecho', text: 'Offizieller Kontext zu Atlantik, Mittelmeer, Europa und Afrika.', href: sharedSources.naturalPark },
        { label: 'Tarifa Tourismus · Naturparks und Landschaft', text: 'Öffentliche Ortsinformation zu Küste, Relief und Isla de las Palomas.', href: sharedSources.tarifaNature },
        { label: 'Junta de Andalucía · Küstenplan', text: 'Offizielle Geografie, Geologie und Topografie der Küste Algeciras–Tarifa.', href: sharedSources.coastalPlan },
        { label: 'AEMET · Winde in der Straße von Gibraltar', text: 'Meteorologischer Kontext zu Topografie, Levante und Poniente.', href: sharedSources.aemetWind },
        { label: 'BOE · Spanische Sommerzeit', text: 'Offizielle Termine und die einstündige Zeitumstellung im Sommer.', href: sharedSources.summerTime },
        { label: 'Hafen Tarifa · Sonnenzeiten im Juni', text: 'Datumsbezogene Berechnungen für Sonnenaufgang, -untergang und Sonnenhöchststand.', href: sharedSources.solarTime }
      ]
    },
    closing: { eyebrow: 'Behaltet die Richtung', title: 'Lasst die Richtung den Tag formen, nicht bestimmen', body: 'Tarifas Karte hilft am meisten, wenn sie flexibel bleibt: Stadt zu Fuß, Westküste bei passenden Bedingungen und die Meerenge als fester Bezugspunkt. Kehrt zum Lage-Guide zurück oder entdeckt, welche Erlebnisse diese Geografie ermöglicht.', locationLabel: 'Zurück zum Tarifa Lage-Guide', experienceLabel: 'Tarifa-Erlebnisse entdecken' }
  },
  es: {
    navLabel: 'Geografía y orientación',
    hero: { eyebrow: 'Guía geográfica de Tarifa', title: 'Dónde está Tarifa', standfirst: 'Tarifa no es solo una localidad en el extremo sur de España. Está **en el borde meridional de Europa, junto al Estrecho de Gibraltar**: el Atlántico se abre hacia el oeste y el entorno mediterráneo continúa al este. Desde AMARA, en La Marina, esa geografía se convierte en una orientación práctica para cada día.', note: 'Una guía escrita por vuestros anfitriones para leer el paisaje. El viento, la visibilidad, las corrientes y el estado del agua siguen siendo dinámicos.', updated: 'Geografía comprobada en agosto de 2026' },
    facts: [ { label: 'Referencia meridional', value: 'Punta de Tarifa · casi 36° N exactos' }, { label: 'Entorno marítimo', value: 'Atlántico · Estrecho · Mediterráneo' }, { label: 'Al otro lado', value: 'África al sur' }, { label: 'Base AMARA', value: 'La Marina · Mar Adriático 29' } ],
    orientation: { eyebrow: 'Orientación de un vistazo', title: 'Leed la ciudad desde AMARA hasta el agua', intro: 'Estos puntos fijos sostienen la guía. Forman una secuencia espacial sencilla sin sustituir una ruta actual ni la consulta de las condiciones.', items: [
      { label: 'Vuestra base', value: 'AMARA Family & Surf · La Marina' }, { label: 'Núcleo histórico', value: 'Casco antiguo' }, { label: 'Borde de pasajeros', value: 'Puerto de Tarifa · 2,1 km, unos 8 min en coche' }, { label: 'Referencia meridional', value: 'Isla de las Palomas' }, { label: 'Oeste', value: 'Atlántico · acceso a Los Lances 400–500 m · Valdevaqueros' }, { label: 'Este', value: 'Lado mediterráneo del Estrecho' }, { label: 'Sur', value: 'África al otro lado del Estrecho' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · El paso estrecho', title: 'El Estrecho de Gibraltar marca la escala', paragraphs: [ 'El Estrecho conecta el océano Atlántico con el mar Mediterráneo y separa el sur de Europa del norte de África. Tarifa ocupa su orilla norte, cerca de la entrada occidental.', 'El horizonte pertenece así a un corredor, no solo a una extensión de mar abierto. En días despejados se ve África; la bruma, las nubes y el viento pueden transformar la misma vista al día siguiente.', 'Desde AMARA en La Marina, el casco antiguo, el puerto y la Isla de las Palomas forman una línea práctica hacia el Estrecho. El apartamento es vuestra base urbana, no una dirección portuaria ni frente al mar.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Dos entornos costeros', title: 'Atlántico al oeste, Mediterráneo al este', paragraphs: [ 'Al oeste de la ciudad, la costa de Tarifa se abre al Atlántico por Los Lances y continúa hacia Valdevaqueros. Al este del saliente, el litoral sigue por el Estrecho hacia el lado mediterráneo del Campo de Gibraltar.', 'Son dos entornos costeros distintos, útiles para elegir dirección, paisaje y actividad. No forman una regla permanente de agua cálida frente a fría: la temperatura, las corrientes, el oleaje y las condiciones locales cambian.', 'En AMARA, decidid primero si el día apunta al oeste atlántico o al este del Estrecho. Para entrar en el agua, añadid siempre una consulta de las condiciones actuales.' ] },
      { id: 'europe-africa', eyebrow: '03 · Dos continentes', title: 'Europa y África comparten el horizonte', paragraphs: [ 'Tarifa se encuentra en el borde meridional de Europa. La Punta de Tarifa, en la Isla de las Palomas más allá del puerto, marca la referencia sur casi exactamente en el paralelo 36.', 'África al otro lado del Estrecho cambia la escala del lugar. La visibilidad nunca está garantizada: el perfil nítido del Rif depende de las condiciones del día, no es una vista prometida.', 'Desde AMARA, el casco antiguo queda a unos 10–15 minutos a pie. Continuar hacia el eje del puerto y la isla ayuda a leer la orientación sur de Tarifa sin convertir el paseo en un trayecto largo en coche.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Tres paisajes', title: 'Ciudad, costa e interior están muy cerca', paragraphs: [ 'El núcleo compacto de Tarifa ocupa una posición costera, rodeado por playas, terrenos bajos, colinas y los paisajes protegidos de El Estrecho y Los Alcornocales.', 'Una distancia corta en el mapa puede llevar a un día muy diferente: calles urbanas, costa expuesta y terreno interior ascendente son entornos propios. En una estancia de varios días conviene alternarlos.', 'AMARA mantiene la vida cotidiana en La Marina, con el supermercado justo enfrente. El casco antiguo se hace a pie; la costa occidental y el interior son los momentos en que la plaza reservada resulta útil.' ] },
      { id: 'topography', eyebrow: '05 · Relieve y exposición', title: 'La altura cambia el camino, las vistas y el esfuerzo', paragraphs: [ 'La costa protegida reúne llanuras, acantilados, colinas y macizos. La cartografía oficial de rutas locales muestra cómo el terreno puede ascender desde casi el nivel del mar hacia los Cerros del Estrecho en poca distancia.', 'Eso importa más que una cifra de distancia: el desnivel modifica el esfuerzo, la exposición y el tipo de mirador. Una ruta no es llana solo porque inicio y final tengan dirección en Tarifa.', 'En AMARA, los 10–15 minutos conocidos hasta el casco antiguo describen cercanía, no pendiente. Elegid la ruta y el calzado para ese día; usad el coche de forma selectiva cuando el destino se abra a la costa o gane altura.' ] },
      { id: 'east-west', eyebrow: '06 · Dirección y luz', title: 'Al oeste se abre la costa atlántica', paragraphs: [ 'La línea occidental de Tarifa pasa por Los Lances hacia Valdevaqueros y el resto de la costa atlántica. Hacia el este, el movimiento sigue el Estrecho y el lado mediterráneo de la comarca.', 'La posición tan occidental de Tarifa en la España peninsular, unida a la hora oficial de verano, produce atardeceres muy tardíos según el reloj. La consecuencia es una tarde y noche con más horas aprovechables; es un efecto de geografía y horario, no una explicación de la cultura española de cenar tarde.', 'Desde AMARA en La Marina, el acceso práctico en coche hacia el oeste permite plantear salidas atlánticas a última hora de la tarde. Aun así, comprobad viento, acceso y aparcamiento antes de salir.' ] },
      { id: 'wind-geography', eyebrow: '07 · El corredor del viento', title: 'Por qué la geografía forma parte del viento de Tarifa', paragraphs: [ 'El Estrecho se estrecha entre el relieve del sur ibérico y el norte de Marruecos. Los patrones regionales de presión interactúan con ese corredor y su topografía, por lo que Levante y Poniente reaparecen como vientos dominantes.', 'La geografía explica por qué importan la dirección y la exposición; no predice una playa, hora o actividad concretas. La profundidad técnica corresponde a la guía de viento y a una previsión actual.', 'En AMARA, tomad la dirección del viento como señal para revisar el plan antes de una salida hacia el oeste. La ubicación del apartamento no crea una ventaja universal de abrigo, ruido o viento.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Vuestra base en La Marina', title: 'Qué significa la geografía de Tarifa en AMARA', paragraphs: [ 'AMARA Family & Surf está en Mar Adriático 29, La Marina: dentro del tejido cotidiano de la ciudad y separado del casco antiguo, el puerto y la costa occidental abierta.', 'La ubicación permite dos ritmos. Caminad al supermercado de enfrente y al casco antiguo, a unos 10–15 minutos; usad el coche cuando el día mire al oeste hacia Valdevaqueros, la costa amplia o el interior.', 'La plaza subterránea reservada permite ese uso selectivo del coche en el apartamento. No garantiza aparcamiento en otros destinos, y la geografía sigue pidiendo una decisión nueva cada día.' ] }
    ],
    related: { eyebrow: 'Seguid con el detalle práctico', title: 'Cada siguiente pregunta tiene su guía', links: [
      { token: 'getting_to_tarifa', label: 'Llegada y movilidad', text: 'Carretera, autobús, aeropuertos, puerto y el último tramo hasta AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Dónde alojarse / zonas', text: 'Comparad las diferencias diarias entre los entornos de alojamiento.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Viento y deportes acuáticos', text: 'Pasad del contexto geográfico al detalle técnico y a las condiciones actuales.' }, { token: 'tarifa_experience_hub', label: 'Experiencias en Tarifa', text: 'Convertid la orientación en playas, naturaleza, historia y excursiones.' }
    ] },
    sources: { eyebrow: 'Base documental de la guía', title: 'Fuentes de geografía y horario', intro: 'Las afirmaciones geográficas fijas proceden de cartografía y fuentes ambientales españolas. El viento, la visibilidad, el agua y las horas solares varían según fecha y condiciones.', checked: 'Fuentes comprobadas en agosto de 2026.', links: [
      { label: 'Instituto Geográfico Nacional · Punta de Tarifa', text: 'Coordenadas oficiales de la referencia geográfica meridional de España.', href: sharedSources.ign }, { label: 'Junta de Andalucía · Parque Natural del Estrecho', text: 'Contexto oficial de Atlántico, Mediterráneo, Europa y África.', href: sharedSources.naturalPark }, { label: 'Turismo de Tarifa · Parques y paisaje', text: 'Información pública local sobre costa, relieve e Isla de las Palomas.', href: sharedSources.tarifaNature }, { label: 'Junta de Andalucía · Plan del frente litoral', text: 'Geografía, geología y topografía oficiales de la costa Algeciras–Tarifa.', href: sharedSources.coastalPlan }, { label: 'AEMET · Vientos en el Estrecho', text: 'Contexto meteorológico sobre topografía, Levante y Poniente.', href: sharedSources.aemetWind }, { label: 'BOE · Hora de verano española', text: 'Fechas oficiales y adelanto de una hora en verano.', href: sharedSources.summerTime }, { label: 'Puerto de Tarifa · Horas solares de junio', text: 'Cálculos por fecha de amanecer, atardecer y mediodía solar.', href: sharedSources.solarTime }
    ] },
    closing: { eyebrow: 'Mantened la orientación', title: 'Que la dirección dé forma al día, sin imponerlo', body: 'El mapa de Tarifa resulta útil cuando conserva flexibilidad: ciudad a pie, costa occidental cuando acompañan las condiciones y el Estrecho como referencia constante. Volved a la guía de ubicación o continuad con las experiencias que permite esta geografía.', locationLabel: 'Volver a Ubicación Tarifa', experienceLabel: 'Explorar experiencias en Tarifa' }
  },
  nl: {
    navLabel: 'Geografie & oriëntatie',
    hero: { eyebrow: 'Geografiegids Tarifa', title: 'Waar Tarifa ligt', standfirst: 'Tarifa is niet zomaar een stad onderaan Spanje. Ze ligt **aan de zuidrand van Europa, bij de Straat van Gibraltar**: de Atlantische Oceaan opent zich naar het westen en het mediterrane kustlandschap loopt oostwaarts door. Vanaf AMARA in La Marina wordt die geografie een praktische manier om elke dag te plannen.', note: 'Een gids van jullie hosts om het landschap te lezen. Wind, zicht, stromingen en watercondities blijven veranderlijk.', updated: 'Geografie gecontroleerd in augustus 2026' },
    facts: [ { label: 'Zuidelijk oriëntatiepunt', value: 'Punta de Tarifa · bijna exact 36° N' }, { label: 'Waterlandschap', value: 'Atlantische Oceaan · Straat · Middellandse Zee' }, { label: 'Aan de overkant', value: 'Afrika in het zuiden' }, { label: 'AMARA-basis', value: 'La Marina · Mar Adriático 29' } ],
    orientation: { eyebrow: 'Oriëntatie in één oogopslag', title: 'Lees de stad vanaf AMARA tot aan het water', intro: 'Deze vaste punten dragen de gids. Samen vormen ze een eenvoudige ruimtelijke reeks, zonder een actuele route- of conditiecheck te vervangen.', items: [
      { label: 'Jullie basis', value: 'AMARA Family & Surf · La Marina' }, { label: 'Historische kern', value: 'Oude stad' }, { label: 'Passagiersrand', value: 'Haven van Tarifa · 2,1 km, ongeveer 8 min met de auto' }, { label: 'Zuidelijk oriëntatiepunt', value: 'Isla de las Palomas' }, { label: 'West', value: 'Atlantische Oceaan · strandtoegang Los Lances 400–500 m · Valdevaqueros' }, { label: 'Oost', value: 'Mediterrane zijde van de Straat' }, { label: 'Zuid', value: 'Afrika aan de overkant' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · De smalle doorgang', title: 'De Straat van Gibraltar bepaalt de schaal', paragraphs: [ 'De Straat verbindt de Atlantische Oceaan met de Middellandse Zee en scheidt Zuid-Europa van Noord-Afrika. Tarifa ligt aan de noordelijke oever, dicht bij de westelijke ingang.', 'De horizon hoort daardoor bij een corridor, niet bij één open zeezicht. Op heldere dagen is Afrika zichtbaar; nevel, bewolking en wind kunnen hetzelfde uitzicht een dag later volledig veranderen.', 'Vanaf AMARA in La Marina vormen de oude stad, haven en Isla de las Palomas een praktische lijn naar de Straat. Het appartement is jullie stadsbasis, geen adres aan de haven of direct aan het water.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Twee kustlandschappen', title: 'Atlantische Oceaan west, Middellandse Zee oost', paragraphs: [ 'Ten westen van de stad opent de kust zich via Los Lances naar de Atlantische Oceaan en verder richting Valdevaqueros. Ten oosten van de landpunt loopt de kust door de Straat naar de mediterrane zijde van Campo de Gibraltar.', 'Het zijn twee verschillende kustlandschappen voor richting, uitzicht en activiteit. Daaruit volgt geen vaste regel van warm tegenover koud water: temperatuur, stromingen, zeegang en lokale condities veranderen.', 'Bepaal bij AMARA eerst of jullie dag westwaarts naar de Atlantische kust of oostwaarts de Straat in gaat. Voeg voor een waterdag altijd een actuele conditiecheck toe.' ] },
      { id: 'europe-africa', eyebrow: '03 · Twee continenten', title: 'Europa en Afrika delen de horizon', paragraphs: [ 'Tarifa ligt aan de zuidrand van Europa. Punta de Tarifa, op Isla de las Palomas voorbij de haven, markeert het zuidelijke oriëntatiepunt bijna exact op 36 graden noorderbreedte.', 'Afrika aan de overkant verandert het schaalgevoel. Zicht is nooit gegarandeerd: een scherpe Rif-silhouet is een conditie van de dag, geen beloofd uitzicht.', 'Vanaf AMARA lopen jullie in ongeveer 10–15 minuten naar de oude stad. Verder richting haven en eilandas wordt Tarifas zuidelijke oriëntatie helder zonder een lange autorit.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Drie landschappen', title: 'Stad, kust en achterland liggen dicht bij elkaar', paragraphs: [ 'Tarifa-stad ligt compact aan de kust, met stranden, laag land, heuvels en de beschermde landschappen van El Estrecho en Los Alcornocales eromheen.', 'Een korte afstand op de kaart kan dus een heel andere dag opleveren: stadsstraten, open kust en oplopend binnenland zijn afzonderlijke omgevingen. Wissel ze tijdens een meerdaags verblijf af.', 'AMARA houdt het dagelijkse leven in La Marina, met een supermarkt direct aan de overkant. De oude stad is een wandeling; voor westkust en achterland wordt de gereserveerde parkeerplek praktisch.' ] },
      { id: 'topography', eyebrow: '05 · Reliëf en blootstelling', title: 'Hoogte verandert route, uitzicht en inspanning', paragraphs: [ 'De beschermde kust bevat vlaktes, kliffen, heuvels en bergmassieven. Officiële lokale routekaarten laten zien hoe terrein in korte afstand van bijna zeeniveau naar de Cerros del Estrecho kan stijgen.', 'Dat zegt vaak meer dan alleen afstand: hoogteverschil verandert wandelinspanning, blootstelling en het soort uitzichtpunt. Een route is niet automatisch vlak omdat begin en eind allebei in Tarifa liggen.', 'Bij AMARA beschrijft de bekende wandeling van ongeveer 10–15 minuten naar de oude stad de nabijheid, niet de helling. Kies route en schoenen voor die dag; gebruik de auto selectief voor de ruimere kust of hoger terrein.' ] },
      { id: 'east-west', eyebrow: '06 · Richting en daglicht', title: 'In het westen opent de Atlantische kust', paragraphs: [ 'Westwaarts loopt de lijn van Tarifa via Los Lances naar Valdevaqueros en de bredere Atlantische kust. Oostwaarts blijven jullie bij de Straat en de mediterrane zijde van de regio.', 'Tarifa ligt ver westelijk op het Spaanse vasteland en de Spaanse zomertijd zet de klok vooruit. Daardoor valt de zomerse zonsondergang volgens de klok zeer laat: middag en avond blijven langer bruikbaar. Dat is een effect van ligging en klok, geen verklaring voor de Spaanse eetcultuur.', 'Vanaf AMARA in La Marina maakt de praktische westwaartse autoroute een late middag of avond aan de Atlantische kust goed denkbaar. Controleer wind, toegang en parkeren nog steeds voor vertrek.' ] },
      { id: 'wind-geography', eyebrow: '07 · De windcorridor', title: 'Waarom geografie bij Tarifas wind hoort', paragraphs: [ 'De Straat vernauwt tussen het reliëf van Zuid-Iberië en Noord-Marokko. Regionale drukpatronen werken samen met die corridor en topografie, waardoor oostelijke Levante en westelijke Poniente regelmatig terugkeren.', 'Geografie verklaart waarom richting en blootstelling tellen; ze voorspelt geen specifieke plek, uur of activiteit. Technische windinformatie hoort bij de windgids en een actuele verwachting.', 'Gebruik bij AMARA de windrichting als aanleiding om een westwaarts plan nog eens te bekijken. De ligging van het appartement levert geen algemeen voordeel voor luwte, geluid of wind.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Jullie basis in La Marina', title: 'Wat Tarifas geografie betekent bij AMARA', paragraphs: [ 'AMARA Family & Surf ligt aan Mar Adriático 29 in La Marina: in het dagelijkse stadsweefsel en los van de oude stad, haven en open westkust.', 'Die ligging ondersteunt twee ritmes. Loop naar de supermarkt tegenover en in ongeveer 10–15 minuten naar de oude stad; neem de auto wanneer de dag westwaarts naar Valdevaqueros, de bredere kust of het achterland wijst.', 'De gereserveerde ondergrondse plek maakt dat selectieve autogebruik bij het appartement mogelijk. Ze garandeert nergens anders parkeren, en de geografie vraagt nog altijd elke dag een nieuwe keuze.' ] }
    ],
    related: { eyebrow: 'Verder met het praktische detail', title: 'Gebruik de gids voor jullie volgende vraag', links: [
      { token: 'getting_to_tarifa', label: 'Aankomst & mobiliteit', text: 'Weg, bus, luchthavens, haven en het laatste deel naar AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Waar overnachten / gebieden', text: 'Vergelijk de dagelijkse verschillen tussen Tarifas verblijfssettings.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & watersport', text: 'Ga van geografische context naar technische windinformatie en actuele planning.' }, { token: 'tarifa_experience_hub', label: 'Tarifa beleven', text: 'Vertaal de oriëntatie naar stranden, natuur, geschiedenis en uitstappen.' }
    ] },
    sources: { eyebrow: 'Onderbouwing van de gids', title: 'Bronnen voor geografie en tijd', intro: 'De vaste geografische uitspraken komen uit Spaanse kaarten en milieubronnen. Wind, zicht, water en zonnetijden blijven per datum en conditie veranderen.', checked: 'Bronnen gecontroleerd in augustus 2026.', links: [
      { label: 'Instituto Geográfico Nacional · Punta de Tarifa', text: 'Officiële coördinaten van Spanjes zuidelijke geografische referentiepunt.', href: sharedSources.ign }, { label: 'Junta de Andalucía · Natuurpark El Estrecho', text: 'Officiële context voor Atlantische Oceaan, Middellandse Zee, Europa en Afrika.', href: sharedSources.naturalPark }, { label: 'Toerisme Tarifa · Natuurparken en landschap', text: 'Lokale openbare informatie over kust, reliëf en Isla de las Palomas.', href: sharedSources.tarifaNature }, { label: 'Junta de Andalucía · Kustbeheerplan', text: 'Officiële geografie, geologie en topografie van de kust Algeciras–Tarifa.', href: sharedSources.coastalPlan }, { label: 'AEMET · Wind in de Straat van Gibraltar', text: 'Meteorologische context voor topografie, Levante en Poniente.', href: sharedSources.aemetWind }, { label: 'BOE · Spaanse zomertijd', text: 'Officiële data en de zomerse klokverschuiving van één uur.', href: sharedSources.summerTime }, { label: 'Haven Tarifa · Zonnetijden in juni', text: 'Datumgebonden berekeningen voor zonsopkomst, zonsondergang en zonnemiddag.', href: sharedSources.solarTime }
    ] },
    closing: { eyebrow: 'Houd jullie oriëntatie', title: 'Laat richting de dag vormen, niet dicteren', body: 'Tarifas kaart werkt het best wanneer ze flexibel blijft: stad te voet, westkust als de condities passen en de Straat als vast referentiepunt. Ga terug naar de locatiegids of verder naar de ervaringen die deze geografie mogelijk maakt.', locationLabel: 'Terug naar Tarifa Locatie', experienceLabel: 'Ontdek ervaringen in Tarifa' }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: { eyebrow: 'Geografiguide Tarifa', title: 'Var Tarifa ligger', standfirst: 'Tarifa är inte bara en stad längst ned i Spanien. Den ligger **vid Europas sydkant, intill Gibraltarsund**: Atlanten öppnar sig västerut och den mediterrana kustmiljön fortsätter österut. Från AMARA i La Marina blir geografin ett praktiskt sätt att planera varje dag.', note: 'En värdskriven guide till landskapet. Vind, sikt, strömmar och vattenförhållanden förändras fortfarande.', updated: 'Geografin granskad i augusti 2026' },
    facts: [ { label: 'Sydligt riktmärke', value: 'Punta de Tarifa · nästan exakt 36° N' }, { label: 'Vattenläge', value: 'Atlanten · sundet · Medelhavet' }, { label: 'På andra sidan', value: 'Afrika i söder' }, { label: 'AMARA-bas', value: 'La Marina · Mar Adriático 29' } ],
    orientation: { eyebrow: 'Orientering i korthet', title: 'Läs staden från AMARA till vattnet', intro: 'De här fasta punkterna bär guiden. De bildar en enkel rumslig följd utan att ersätta en aktuell rutt- eller förhållandekontroll.', items: [
      { label: 'Er bas', value: 'AMARA Family & Surf · La Marina' }, { label: 'Historisk kärna', value: 'Gamla stan' }, { label: 'Passagerarkant', value: 'Tarifas hamn · 2,1 km, cirka 8 min med bil' }, { label: 'Sydligt riktmärke', value: 'Isla de las Palomas' }, { label: 'Väst', value: 'Atlanten · Los Lances 400–500 m bort · Valdevaqueros' }, { label: 'Öst', value: 'Sundets mediterrana sida' }, { label: 'Söder', value: 'Afrika på andra sidan sundet' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · Den smala passagen', title: 'Gibraltarsund sätter skalan', paragraphs: [ 'Sundet förbinder Atlanten med Medelhavet och skiljer södra Europa från norra Afrika. Tarifa ligger på dess norra sida nära den västra infarten.', 'Horisonten är därför del av en korridor, inte bara en öppen havsvy. Klara dagar syns Afrika; dis, moln och vind kan förändra samma utsikt helt nästa dag.', 'Från AMARA i La Marina bildar Gamla stan, hamnen och Isla de las Palomas en praktisk linje mot sundet. Lägenheten är er bas i staden, inte en adress vid hamnen eller direkt vid vattnet.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Två kustmiljöer', title: 'Atlanten i väster, Medelhavet i öster', paragraphs: [ 'Väster om staden öppnar kusten sig via Los Lances mot Atlanten och vidare till Valdevaqueros. Öster om udden fortsätter stranden genom sundet mot den mediterrana sidan av Campo de Gibraltar.', 'Det är två skilda kustmiljöer för riktning, landskap och aktivitet. De skapar ingen fast regel om varmt mot kallt vatten: temperatur, strömmar, sjögång och lokala förhållanden varierar.', 'Bestäm vid AMARA om dagen går västerut mot Atlanten eller österut in i sundet. För en dag i vattnet lägger ni alltid till en aktuell kontroll av förhållandena.' ] },
      { id: 'europe-africa', eyebrow: '03 · Två kontinenter', title: 'Europa och Afrika delar horisonten', paragraphs: [ 'Tarifa ligger vid Europas sydkant. Punta de Tarifa på Isla de las Palomas, bortom hamnen, markerar det sydliga riktmärket nästan exakt på 36 grader nord.', 'Afrika på andra sidan sundet förändrar platsens skala. Sikten är aldrig garanterad; en tydlig Rif-siluett är dagens förhållande, inte en utlovad vy.', 'Från AMARA tar promenaden till Gamla stan ungefär 10–15 minuter. Fortsättningen mot hamnen och öaxeln gör Tarifas sydliga orientering tydlig utan en lång bilresa.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Tre landskap', title: 'Stad, kust och inland ligger nära varandra', paragraphs: [ 'Tarifas kompakta stad ligger vid kusten, omgiven av stränder, lågland, kullar och de skyddade landskapen El Estrecho och Los Alcornocales.', 'En kort sträcka på kartan kan därför ge en helt annan dag: stadsgator, öppen kust och stigande inland är egna miljöer. Under flera dagar blir växlingen mellan dem värdefull.', 'AMARA förankrar vardagen i La Marina med stormarknaden mittemot. Gamla stan är en promenad; för västkust och inland blir den reserverade parkeringsplatsen praktisk.' ] },
      { id: 'topography', eyebrow: '05 · Relief och exponering', title: 'Höjd förändrar väg, utsikt och ansträngning', paragraphs: [ 'Den skyddade kusten rymmer slätter, klippor, kullar och bergsmassiv. Officiella lokala ledkartor visar hur terrängen på kort sträcka kan stiga från nära havsnivå upp i Cerros del Estrecho.', 'Det betyder mer än bara avstånd: höjdskillnad förändrar gånginsats, exponering och typ av utsiktspunkt. En väg är inte automatiskt platt för att både start och mål ligger i Tarifa.', 'Vid AMARA beskriver den kända promenaden på cirka 10–15 minuter till Gamla stan närhet, inte lutning. Välj rutt och skor för dagen; använd bilen selektivt för den vidare kusten eller högre terräng.' ] },
      { id: 'east-west', eyebrow: '06 · Riktning och dagsljus', title: 'I väster öppnar Atlantkusten', paragraphs: [ 'Västerut går Tarifas linje via Los Lances mot Valdevaqueros och den bredare Atlantkusten. Österut följer ni sundet och regionens mediterrana sida.', 'Tarifas långt västliga läge på det spanska fastlandet, tillsammans med spansk sommartid, ger mycket sena sommarsolnedgångar enligt klockan. Eftermiddag och kväll blir längre att använda; det är en effekt av läge och klocktid, inte en förklaring till spansk middagskultur.', 'Från AMARA i La Marina gör den praktiska bilvägen västerut sena eftermiddagar eller kvällar vid Atlanten lätta att överväga. Kontrollera ändå vind, tillträde och parkering innan ni åker.' ] },
      { id: 'wind-geography', eyebrow: '07 · Vindkorridoren', title: 'Varför geografin hör till Tarifas vind', paragraphs: [ 'Sundet smalnar mellan södra Iberiens och norra Marockos relief. Regionala tryckmönster samverkar med korridoren och topografin, vilket gör östlig Levante och västlig Poniente återkommande.', 'Geografin förklarar varför riktning och exponering spelar roll; den förutser inte en viss plats, timme eller aktivitet. Teknisk vindinformation hör hemma i vindguiden och en aktuell prognos.', 'Vid AMARA är vindriktningen en signal att kontrollera planen före en tur västerut. Lägenheten har ingen allmän fördel för lä, ljud eller vind.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Er bas i La Marina', title: 'Vad Tarifas geografi betyder vid AMARA', paragraphs: [ 'AMARA Family & Surf ligger på Mar Adriático 29 i La Marina: i stadens vardag, men skilt från Gamla stan, hamnen och den öppna västkusten.', 'Läget ger två rytmer. Gå till stormarknaden mittemot och cirka 10–15 minuter till Gamla stan; ta bilen när dagen pekar västerut mot Valdevaqueros, den vidare kusten eller inlandet.', 'Den reserverade underjordiska platsen gör den selektiva bilanvändningen möjlig vid lägenheten. Den garanterar inte parkering någon annanstans, och geografin kräver fortfarande ett nytt beslut varje dag.' ] }
    ],
    related: { eyebrow: 'Fortsätt med det praktiska', title: 'Använd guiden som svarar på nästa fråga', links: [
      { token: 'getting_to_tarifa', label: 'Ankomst & mobilitet', text: 'Väg, buss, flygplatser, hamn och sista sträckan till AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Var ska man bo / områden', text: 'Jämför vardagsskillnaderna mellan Tarifas boendemiljöer.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Vind & vattensport', text: 'Gå från geografiskt sammanhang till teknisk vindinformation och aktuell planering.' }, { token: 'tarifa_experience_hub', label: 'Upplev Tarifa', text: 'Gör orienteringen till stränder, natur, historia och utflykter.' }
    ] },
    sources: { eyebrow: 'Underlag för guiden', title: 'Källor om geografi och tid', intro: 'De fasta geografiska uppgifterna kommer från spanska kart- och miljökällor. Vind, sikt, vatten och soltider varierar fortfarande efter datum och förhållanden.', checked: 'Källor granskade i augusti 2026.', links: [
      { label: 'Instituto Geográfico Nacional · Punta de Tarifa', text: 'Officiella koordinater för Spaniens sydliga geografiska referenspunkt.', href: sharedSources.ign }, { label: 'Junta de Andalucía · Naturparken El Estrecho', text: 'Officiellt sammanhang för Atlanten, Medelhavet, Europa och Afrika.', href: sharedSources.naturalPark }, { label: 'Tarifas turistbyrå · Naturparker och landskap', text: 'Lokal offentlig information om kust, relief och Isla de las Palomas.', href: sharedSources.tarifaNature }, { label: 'Junta de Andalucía · Kustplan', text: 'Officiell geografi, geologi och topografi för kusten Algeciras–Tarifa.', href: sharedSources.coastalPlan }, { label: 'AEMET · Vindar i Gibraltarsund', text: 'Meteorologiskt sammanhang för topografi, Levante och Poniente.', href: sharedSources.aemetWind }, { label: 'BOE · Spansk sommartid', text: 'Officiella datum och den en timme långa sommaromställningen.', href: sharedSources.summerTime }, { label: 'Tarifas hamn · Soltider i juni', text: 'Datumberoende beräkningar för soluppgång, solnedgång och solmiddag.', href: sharedSources.solarTime }
    ] },
    closing: { eyebrow: 'Behåll riktningen', title: 'Låt riktningen forma dagen, inte styra den', body: 'Tarifas karta är mest användbar när den förblir flexibel: staden till fots, västkusten när förhållandena passar och sundet som fast referens. Gå tillbaka till lägesguiden eller vidare till upplevelserna som geografin möjliggör.', locationLabel: 'Tillbaka till Tarifa lägesguide', experienceLabel: 'Upptäck upplevelser i Tarifa' }
  }
};
