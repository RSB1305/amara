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
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const tarifaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-21-tarifa-geography-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Tarifa? Strait, Atlantic, Mediterranean and Africa',
      description: 'Why Tarifa is Europe’s southernmost mainland city: Punta de Tarifa, the 1808 causeway, Strait, Atlantic coast and Africa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Tarifa? Atlantik, Mittelmeer, Meerenge und Afrika',
      description: 'Warum Tarifa Europas südlichste Festlandstadt ist: Punta de Tarifa, Damm von 1808, Meerenge, Atlantikküste und Afrika.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Tarifa: Atlántico, Mediterráneo y África',
      description: 'Por qué Tarifa es la ciudad más meridional de la Europa continental: Punta de Tarifa, dique de 1808, Estrecho y África.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Tarifa? Oceaan, Middellandse Zee en Afrika',
      description: 'Waarom Tarifa de zuidelijkste stad op het Europese vasteland is: Punta de Tarifa, dam van 1808, Straat en Afrika.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Tarifa? Atlanten, Medelhavet, sundet och Afrika',
      description: 'Varför Tarifa är Europas sydligaste stad på fastlandet: Punta de Tarifa, vallen från 1808, sundet och Afrika.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=11035',
  ign: 'https://www.ign.es/web/preguntas-frecuentes',
  island: 'https://turismodetarifa.com/que-visitar/isla-tarifa/',
  history: 'https://turismodetarifa.com/que-visitar/historia/',
  marineFramework: 'https://www.miteco.gob.es/content/dam/miteco/es/costas/temas/proteccion-medio-marino/I_Marco%20General_Estrecho%20y%20Alboran_tcm30-130896.pdf',
  continentalDistance: 'https://www.miteco.gob.es/content/dam/miteco/es/costas/temas/proteccion-medio-marino/parteiiianalisiseconomicoysocialdmesal_tcm30-498343.pdf',
  emergencyPlan: 'https://www.aytotarifa.com/wp-content/uploads/2024/11/Plan-de-Emergencia-municipal-Ayuntamiento-de-Tarifa.pdf',
  losLances: 'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/playa-de-los-lances/255035',
  laMarina: 'https://www.aytotarifa.com/wp-content/uploads/2024/08/Anuncio-Encargo-gestion-servicios-de-aparcamientos-municipales-temporada-2024.pdf',
  officialTarifa: 'https://www.andalucia.org/listing/tarifa/19308102/',
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
      title: 'Where is Tarifa? Europe’s southernmost mainland city',
      standfirst: 'Tarifa is **Europe’s southernmost mainland city**. Punta de Tarifa lies on the island joined to town by the 1808 causeway; westward opens the Atlantic coast, while the Strait and Mediterranean-facing coast continue east.',
      note: 'Orientation and official figures. Wind, water and visibility change from day to day — check the forecast for your own dates.',
      updated: 'Geography checked in August 2026'
    },
    facts: [
      { label: 'Municipality', value: '419.93 km² · eight population centres' },
      { label: 'Southern landmark', value: 'Punta de Tarifa · about 36° N' },
      { label: 'Strait scale', value: 'About 14 km at central/eastern narrow sections' },
      { label: 'Europe–Africa minimum', value: 'About 14.4 km in the Strait zone' }
    ],
    orientation: {
      eyebrow: 'Orientation at a glance',
      title: 'Read Tarifa from town to island, west coast and Strait',
      intro: 'Four fixed points that make the rest of the map easy to read.',
      items: [
        { label: 'Principal settlement', value: 'Tarifa · official reference 8 m' },
        { label: 'Southern axis', value: 'Town · port · 1808 causeway · Isla de Tarifa' },
        { label: 'West / Atlantic', value: 'Los Lances · 226 ha protected natural area' },
        { label: 'East / Strait', value: 'Playa Chica · exchange toward the Mediterranean' }
      ]
    },
    sections: [
      {
        id: 'strait-of-gibraltar',
        eyebrow: '01 · The narrow passage',
        title: 'The Strait of Gibraltar sets the scale',
        paragraphs: [
          'The Strait links the Atlantic Ocean with the Mediterranean and separates southern Europe from northern Africa. MITECO describes it as roughly 50 kilometres long, about 40 kilometres wide in the west and approximately 14 kilometres at its central and eastern narrow sections.',
          'At its narrowest, about 14.4 kilometres separate Europe from Africa. On clear days the Moroccan coast and the mountains behind it are visible from the town and from the beaches.'
        ]
      },
      {
        id: 'atlantic-mediterranean',
        eyebrow: '02 · Two coastal settings',
        title: 'Atlantic west, Mediterranean east',
        paragraphs: [
          'Local official orientation treats the island causeway as the meeting point: Playa Chica lies on the Strait/Mediterranean side, while Los Lances and Valdevaqueros extend west along the Atlantic coast.',
          'MITECO describes the Strait and Alborán as a transition and exchange zone between Atlantic and Mediterranean water masses. The causeway is the line locals use to tell the two sides apart; in the water itself the two seas simply mix.',
          'The municipality classifies about 33.5 kilometres of its coast as Atlantic and 10.5 kilometres as Mediterranean. That is why an exposed Atlantic afternoon at Los Lances and a calm hour at Playa Chica can belong to the same day.'
        ]
      },
      {
        id: 'europe-africa',
        eyebrow: '03 · Two continents',
        title: 'Europe and Africa share the horizon',
        paragraphs: [
          'IGN places Punta de Tarifa almost exactly on 36 degrees north. It sits on Isla de Tarifa, which was separate from the town before the causeway connected it in 1808.',
          'Tarifa is therefore the southernmost city on the European mainland. Several European islands lie further south, but no mainland town does.'
        ]
      },
      {
        id: 'town-coast-hinterland',
        eyebrow: '04 · Three landscapes',
        title: 'Town, coast and hinterland sit close together',
        paragraphs: [
          'Tarifa town occupies a compact coastal position, while beaches, low ground, hills and the protected landscapes of El Estrecho and Los Alcornocales spread around it.',
          'A short map distance can therefore lead to a very different day: urban streets, exposed coast and rising inland terrain are separate settings. Multi-day plans work better when they alternate rather than treating Tarifa as one continuous beach strip.'
        ]
      },
      {
        id: 'topography',
        eyebrow: '05 · Relief and exposure',
        title: 'Elevation changes routes, views and effort',
        paragraphs: [
          'The protected coast includes plains, cliffs, hills and mountain massifs. Official local route mapping shows how terrain can rise from near sea level into the Cerros del Estrecho over a relatively short distance.',
          'That matters more than a distance figure alone: elevation changes walking effort, exposure and the kind of viewpoint you reach. A route should not be assumed flat simply because its start and finish both carry a Tarifa address.'
        ]
      },
      {
        id: 'east-west',
        eyebrow: '06 · Direction and daylight',
        title: 'West is the open Atlantic coast',
        paragraphs: [
          'The westbound line from Tarifa runs past Los Lances toward Valdevaqueros and the broader Atlantic coast. Eastbound movement stays with the Strait and the Mediterranean-facing side of the region.',
          'Tarifa’s far-western position in mainland Spain, combined with Spanish summer time, produces very late summer sunsets by the clock. In practice that gives you a long, usable afternoon and evening.'
        ]
      },
      {
        id: 'wind-geography',
        eyebrow: '07 · The wind corridor',
        title: 'Why geography is part of Tarifa’s wind story',
        paragraphs: [
          'The Strait works as a funnel. The same weather system produces very different days depending on whether the wind arrives from the east as Levante or from the west as Poniente.',
          'Which beach works on a given day is therefore a wind question rather than a map question — the wind guide and a current forecast answer it.'
        ]
      },
      {
        id: 'amara-la-marina',
        eyebrow: '08 · Your base in La Marina',
        title: 'What Tarifa’s geography means at AMARA',
        paragraphs: [
          'AMARA Family & Surf sits in La Marina, on the western edge of town. Playa Los Lances is about five minutes on foot, the Old Town ten to fifteen minutes along the sea, and Valdevaqueros roughly ten minutes by car on the N-340.',
          'That is the map above in everyday form: the open Atlantic to the west, and past the causeway to the east, the Strait and the calmer side.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue with the practical detail',
      title: 'Where to go from here',
      links: [
        { token: 'getting_to_tarifa', label: 'Arrival & Mobility', text: 'Road, bus, airports, port and the final journey to AMARA.' },
        { token: 'tarifa_where_to_stay', label: 'Where to Stay / Areas', text: 'Compare the daily trade-offs between Tarifa’s accommodation settings.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & Watersports', text: 'Move from geographic context to technical wind depth and current-condition planning.' },
        { token: 'tarifa_experience_hub', label: 'Tarifa Experience', text: 'Turn the orientation into beaches, nature, history and days out.' }
      ]
    },
    sources: {
      eyebrow: 'Evidence behind the guide',
      title: 'The official sources behind this guide',
      intro: 'The figures on this page come from IGN, SIMA, MITECO, the municipality of Tarifa and the Junta de Andalucía.',
      checked: 'Sources checked in August 2026.',
      links: [
        { label: 'SIMA · Tarifa', text: 'Official municipal area, principal-settlement reference and population-centre count.', href: sharedSources.sima },
        { label: 'Instituto Geográfico Nacional · Punta de Tarifa', text: 'Official coordinates for Spain’s southern geographic reference point.', href: sharedSources.ign },
        { label: 'Tarifa Tourism · Isla de Tarifa', text: 'Official local causeway history and two-seas orientation.', href: sharedSources.island },
        { label: 'MITECO · Strait and Alborán', text: 'Official dimensions, water exchange and transition-zone context.', href: sharedSources.marineFramework },
        { label: 'MITECO · Europe–Africa distance', text: 'Official regional minimum separation of approximately 14.4 kilometres.', href: sharedSources.continentalDistance },
        { label: 'Ayuntamiento de Tarifa · Coast', text: 'Municipal Atlantic and Mediterranean coastline classification.', href: sharedSources.emergencyPlan },
        { label: 'Junta de Andalucía · Los Lances', text: 'Official protected-area size and location.', href: sharedSources.losLances }
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
      title: 'Wo liegt Tarifa? Die südlichste Stadt des europäischen Festlands',
      standfirst: 'Tarifa ist die **südlichste Stadt auf dem europäischen Festland**. Die Punta de Tarifa liegt auf der Insel, die seit 1808 über einen Damm mit der Stadt verbunden ist; westlich öffnet sich die Atlantikküste, östlich folgen Meerenge und mediterrane Küste.',
      note: 'Orientierung und amtliche Zahlen. Wind, Wasser und Sicht ändern sich täglich – prüft die Vorhersage für eure Reisedaten.',
      updated: 'Geografie geprüft im August 2026'
    },
    facts: [
      { label: 'Gemeindegebiet', value: '419,93 km² · acht Siedlungskerne' },
      { label: 'Südlicher Bezugspunkt', value: 'Punta de Tarifa · etwa 36° N' },
      { label: 'Breite der Meerenge', value: 'Zentral/östlich etwa 14 km' },
      { label: 'Europa–Afrika minimal', value: 'Im Gebiet der Meerenge etwa 14,4 km' }
    ],
    orientation: {
      eyebrow: 'Orientierung auf einen Blick',
      title: 'Tarifa von der Stadt zur Insel, Westküste und Meerenge lesen',
      intro: 'Vier feste Punkte, mit denen sich der Rest der Karte von selbst erklärt.',
      items: [
        { label: 'Hauptort', value: 'Tarifa · amtlicher Bezug 8 m' },
        { label: 'Südachse', value: 'Stadt · Hafen · Damm von 1808 · Isla de Tarifa' },
        { label: 'Westen / Atlantik', value: 'Los Lances · 226 ha geschütztes Naturgebiet' },
        { label: 'Osten / Meerenge', value: 'Playa Chica · Austausch Richtung Mittelmeer' }
      ]
    },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · Die schmale Passage', title: 'Die Straße von Gibraltar setzt den Maßstab', paragraphs: [
        'Die Meerenge verbindet Atlantik und Mittelmeer und trennt Südeuropa von Nordafrika. MITECO beschreibt sie mit rund 50 Kilometern Länge, etwa 40 Kilometern Breite im Westen und ungefähr 14 Kilometern in den zentralen und östlichen Engstellen.',
        'An der engsten Stelle trennen Europa und Afrika ungefähr 14,4 Kilometer. An klaren Tagen sind die marokkanische Küste und die Berge dahinter vom Ort und von den Stränden aus zu sehen.'
      ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Zwei Küstenwelten', title: 'Atlantik im Westen, Mittelmeer im Osten', paragraphs: [
        'Die lokale amtliche Orientierung behandelt den Inseldamm als Treffpunkt: Playa Chica liegt auf der Seite von Meerenge und Mittelmeer, Los Lances und Valdevaqueros ziehen sich westwärts an der Atlantikküste entlang.',
        'MITECO beschreibt Meerenge und Alborán als Übergangs- und Austauschzone atlantischer und mediterraner Wassermassen. Der Damm ist die Linie, an der man vor Ort die beiden Seiten unterscheidet; im Wasser selbst vermischen sich die zwei Meere.',
        'Die Gemeinde ordnet etwa 33,5 Kilometer ihrer Küste dem Atlantik und 10,5 Kilometer dem Mittelmeer zu. Deshalb können ein windiger Atlantiknachmittag an Los Lances und eine ruhige Stunde an der Playa Chica zum selben Tag gehören.'
      ] },
      { id: 'europe-africa', eyebrow: '03 · Zwei Kontinente', title: 'Europa und Afrika teilen sich den Horizont', paragraphs: [
        'Das IGN verortet die Punta de Tarifa nahezu genau auf 36 Grad Nord. Sie liegt auf der Isla de Tarifa, die bis zum Bau des Damms im Jahr 1808 von der Stadt getrennt war.',
        'Tarifa ist damit die südlichste Stadt des europäischen Festlands. Mehrere europäische Inseln liegen weiter südlich, aber kein Ort auf dem Festland.'
      ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Drei Landschaften', title: 'Stadt, Küste und Hinterland liegen nah beieinander', paragraphs: [
        'Tarifas kompakter Stadtraum liegt direkt an der Küste; rundherum breiten sich Strände, tiefere Ebenen, Hügel und die geschützten Landschaften von El Estrecho und Los Alcornocales aus.',
        'Eine kurze Distanz auf der Karte kann deshalb zu einem ganz anderen Tag führen: Stadtgassen, offene Küste und ansteigendes Hinterland sind eigene Umgebungen. Über mehrere Tage lohnt sich der Wechsel.'
      ] },
      { id: 'topography', eyebrow: '05 · Relief und Exposition', title: 'Höhe verändert Weg, Aussicht und Aufwand', paragraphs: [
        'Die geschützte Küste umfasst Ebenen, Klippen, Hügel und Bergmassive. Offizielle lokale Routenkarten zeigen, wie das Gelände auf kurzer Strecke vom Meer in die Cerros del Estrecho ansteigen kann.',
        'Das sagt oft mehr als eine reine Entfernung: Höhenmeter verändern Gehaufwand, Exposition und Aussichtspunkt. Ein Weg ist nicht automatisch flach, nur weil Start und Ziel beide eine Adresse in Tarifa tragen.'
      ] },
      { id: 'east-west', eyebrow: '06 · Richtung und Tageslicht', title: 'Im Westen beginnt die offene Atlantikküste', paragraphs: [
        'Westwärts führt Tarifas Linie über Los Lances nach Valdevaqueros und an die weitere Atlantikküste. Ostwärts bleibt ihr an der Meerenge und auf der mediterranen Seite der Region.',
        'Tarifas weit westliche Lage auf dem spanischen Festland sorgt zusammen mit der spanischen Sommerzeit für sehr späte Sonnenuntergänge nach der Uhr. In der Praxis bleiben Nachmittag und Abend dadurch lange nutzbar.'
      ] },
      { id: 'wind-geography', eyebrow: '07 · Der Windkorridor', title: 'Warum Geografie zu Tarifas Windgeschichte gehört', paragraphs: [
        'Die Meerenge wirkt wie ein Trichter. Dieselbe Wetterlage ergibt sehr unterschiedliche Tage, je nachdem ob der Wind als Levante von Osten oder als Poniente von Westen kommt.',
        'Welcher Strand an einem Tag funktioniert, ist deshalb eine Windfrage und keine Kartenfrage – das beantworten der Wind-Guide und die aktuelle Vorhersage.'
      ] },
      { id: 'amara-la-marina', eyebrow: '08 · Euer Ausgangspunkt in La Marina', title: 'Was Tarifas Geografie beim AMARA bedeutet', paragraphs: [
        'AMARA Family & Surf liegt in La Marina, am westlichen Rand des Ortes. Zur Playa Los Lances sind es etwa fünf Minuten zu Fuß, in die Altstadt zehn bis fünfzehn Minuten am Meer entlang und nach Valdevaqueros rund zehn Minuten mit dem Auto über die N-340.',
        'Das ist die Karte von oben im Alltag: im Westen der offene Atlantik, im Osten hinter dem Damm die Meerenge und die ruhigere Seite.'
      ] }
    ],
    related: {
      eyebrow: 'Weiter mit dem praktischen Detail',
      title: 'Weiter mit dem praktischen Teil',
      links: [
        { token: 'getting_to_tarifa', label: 'Anreise & Mobilität', text: 'Straße, Bus, Flughäfen, Hafen und der letzte Abschnitt zum AMARA.' },
        { token: 'tarifa_where_to_stay', label: 'Wo übernachten / Lagen', text: 'Die täglichen Unterschiede zwischen Tarifas Wohnlagen vergleichen.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & Wassersport', text: 'Vom geografischen Kontext zur technischen Windtiefe und aktuellen Planung.' },
        { token: 'tarifa_experience_hub', label: 'Tarifa erleben', text: 'Aus Orientierung werden Strände, Natur, Geschichte und Ausflugstage.' }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide', title: 'Die amtlichen Quellen hinter diesem Guide', intro: 'Die Zahlen auf dieser Seite stammen von IGN, SIMA, MITECO, der Gemeinde Tarifa und der Junta de Andalucía.', checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'SIMA · Tarifa', text: 'Amtliche Gemeindefläche, Hauptortreferenz und Zahl der Siedlungskerne.', href: sharedSources.sima },
        { label: 'Instituto Geográfico Nacional · Punta de Tarifa', text: 'Offizielle Koordinaten des südlichen geografischen Bezugspunkts Spaniens.', href: sharedSources.ign },
        { label: 'Tarifa Tourismus · Isla de Tarifa', text: 'Amtliche Ortsinformation zu Dammgeschichte und Zwei-Meere-Orientierung.', href: sharedSources.island },
        { label: 'MITECO · Meerenge und Alborán', text: 'Amtliche Maße, Wasseraustausch und Übergangszone.', href: sharedSources.marineFramework },
        { label: 'MITECO · Europa–Afrika-Abstand', text: 'Amtlicher regionaler Minimalabstand von rund 14,4 Kilometern.', href: sharedSources.continentalDistance },
        { label: 'Ayuntamiento de Tarifa · Küste', text: 'Kommunale Zuordnung zu Atlantik und Mittelmeer.', href: sharedSources.emergencyPlan },
        { label: 'Junta de Andalucía · Los Lances', text: 'Amtliche Fläche und Lage des Schutzgebiets.', href: sharedSources.losLances }
      ]
    },
    closing: { eyebrow: 'Behaltet die Richtung', title: 'Lasst die Richtung den Tag formen, nicht bestimmen', body: 'Tarifas Karte hilft am meisten, wenn sie flexibel bleibt: Stadt zu Fuß, Westküste bei passenden Bedingungen und die Meerenge als fester Bezugspunkt. Kehrt zum Lage-Guide zurück oder entdeckt, welche Erlebnisse diese Geografie ermöglicht.', locationLabel: 'Zurück zum Tarifa Lage-Guide', experienceLabel: 'Tarifa-Erlebnisse entdecken' }
  },
  es: {
    navLabel: 'Geografía y orientación',
    hero: { eyebrow: 'Guía geográfica de Tarifa', title: '¿Dónde está Tarifa? La ciudad más meridional de la Europa continental', standfirst: 'Tarifa es la **ciudad más meridional de la Europa continental**. Punta de Tarifa está en la isla unida a la ciudad por el dique de 1808; al oeste se abre el litoral atlántico y al este continúan el Estrecho y la costa mediterránea.', note: 'Orientación y datos oficiales. El viento, el agua y la visibilidad cambian a diario: consultad la previsión para vuestras fechas.', updated: 'Geografía comprobada en agosto de 2026' },
    facts: [ { label: 'Municipio', value: '419,93 km² · ocho núcleos' }, { label: 'Referencia sur', value: 'Punta de Tarifa · unos 36° N' }, { label: 'Anchura del Estrecho', value: 'Tramos centrales/orientales · unos 14 km' }, { label: 'Europa–África mínimo', value: 'Zona del Estrecho · unos 14,4 km' } ],
    orientation: { eyebrow: 'Orientación de un vistazo', title: 'Leed Tarifa desde la ciudad hacia la isla, el oeste y el Estrecho', intro: 'Cuatro puntos fijos con los que el resto del mapa se explica solo.', items: [
      { label: 'Núcleo principal', value: 'Tarifa · referencia oficial 8 m' }, { label: 'Eje sur', value: 'Ciudad · puerto · dique de 1808 · Isla de Tarifa' }, { label: 'Oeste / Atlántico', value: 'Los Lances · espacio natural protegido de 226 ha' }, { label: 'Este / Estrecho', value: 'Playa Chica · intercambio hacia el Mediterráneo' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · El paso estrecho', title: 'El Estrecho de Gibraltar marca la escala', paragraphs: [ 'MITECO describe el Estrecho con unos 50 kilómetros de longitud, cerca de 40 kilómetros de anchura al oeste y unos 14 en sus pasos centrales y orientales.', 'En su punto más estrecho, unos 14,4 kilómetros separan Europa de África. En días claros se ven la costa marroquí y las montañas que la respaldan desde la ciudad y desde las playas.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Dos entornos costeros', title: 'Atlántico al oeste, Mediterráneo al este', paragraphs: [ 'La orientación local sitúa en el dique el encuentro: Playa Chica queda del lado del Estrecho y Los Lances–Valdevaqueros se extienden al oeste por el Atlántico.', 'MITECO describe una zona de transición e intercambio entre masas de agua atlánticas y mediterráneas. El dique es la línea con la que aquí se distinguen los dos lados; en el agua, los dos mares simplemente se mezclan.', 'El municipio clasifica unos 33,5 km de su costa como atlántica y 10,5 km como mediterránea. Por eso una tarde de Atlántico abierto en Los Lances y una hora tranquila en Playa Chica pueden pertenecer al mismo día.' ] },
      { id: 'europe-africa', eyebrow: '03 · Dos continentes', title: 'Europa y África comparten el horizonte', paragraphs: [ 'IGN sitúa Punta de Tarifa casi exactamente en 36° N, sobre la isla conectada a la ciudad por el dique de 1808.', 'Tarifa es, por tanto, la ciudad más meridional de la Europa continental. Varias islas europeas quedan más al sur, pero ninguna población peninsular.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Tres paisajes', title: 'Ciudad, costa e interior están muy cerca', paragraphs: [ 'El núcleo compacto ocupa la costa junto a playas, terrenos bajos y colinas.', 'Los Lances es un espacio protegido de 226 hectáreas al noroeste de la ciudad.' ] },
      { id: 'topography', eyebrow: '05 · Relieve y exposición', title: 'La altura cambia el camino, las vistas y el esfuerzo', paragraphs: [ 'La costa incluye llanuras, acantilados, colinas y macizos.', 'El desnivel cambia el esfuerzo a pie, la exposición al viento y el tipo de mirador al que llegáis.' ] },
      { id: 'east-west', eyebrow: '06 · Dirección y luz', title: 'Al oeste se abre la costa atlántica', paragraphs: [ 'Los Lances y Valdevaqueros orientan al oeste; Playa Chica y el Estrecho, al este.', 'La posición occidental y la hora oficial producen atardeceres muy tardíos según el reloj, así que la tarde y la noche se aprovechan durante mucho rato.' ] },
      { id: 'wind-geography', eyebrow: '07 · El corredor del viento', title: 'Por qué la geografía forma parte del viento de Tarifa', paragraphs: [ 'El Estrecho funciona como un embudo. La misma situación meteorológica da días muy distintos según llegue el viento de levante, desde el este, o de poniente, desde el oeste.', 'Qué playa funciona cada día es, por tanto, una cuestión de viento y no de mapa: eso lo responden la guía de viento y la previsión actual.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Vuestra base en La Marina', title: 'Qué significa la geografía de Tarifa en AMARA', paragraphs: [ 'AMARA Family & Surf está en La Marina, en el borde occidental de la ciudad. La Playa de Los Lances queda a unos cinco minutos a pie, el casco antiguo a diez o quince minutos junto al mar y Valdevaqueros a unos diez minutos en coche por la N-340.', 'Es el mapa anterior en su versión cotidiana: al oeste el Atlántico abierto y, al este pasado el dique, el Estrecho y el lado más tranquilo.' ] }
    ],
    related: { eyebrow: 'Seguid con el detalle práctico', title: 'Por dónde seguir', links: [
      { token: 'getting_to_tarifa', label: 'Llegada y movilidad', text: 'Carretera, autobús, aeropuertos, puerto y el último tramo hasta AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Dónde alojarse / zonas', text: 'Comparad las diferencias diarias entre los entornos de alojamiento.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Viento y deportes acuáticos', text: 'Pasad del contexto geográfico al detalle técnico y a las condiciones actuales.' }, { token: 'tarifa_experience_hub', label: 'Experiencias en Tarifa', text: 'Convertid la orientación en playas, naturaleza, historia y excursiones.' }
    ] },
    sources: { eyebrow: 'Base documental de la guía', title: 'Las fuentes oficiales de esta guía', intro: 'Las cifras de esta página proceden del IGN, SIMA, MITECO, el Ayuntamiento de Tarifa y la Junta de Andalucía.', checked: 'Fuentes comprobadas en agosto de 2026.', links: [
      { label: 'SIMA · Tarifa', text: 'Superficie municipal, referencia del núcleo y número de núcleos.', href: sharedSources.sima }, { label: 'IGN · Punta de Tarifa', text: 'Coordenadas oficiales de la referencia meridional.', href: sharedSources.ign }, { label: 'Turismo de Tarifa · Isla de Tarifa', text: 'Historia del dique y orientación local de los dos mares.', href: sharedSources.island }, { label: 'MITECO · Estrecho y Alborán', text: 'Dimensiones, intercambio de aguas y zona de transición.', href: sharedSources.marineFramework }, { label: 'MITECO · Europa–África', text: 'Distancia mínima regional aproximada de 14,4 km.', href: sharedSources.continentalDistance }, { label: 'Ayuntamiento de Tarifa · Costa', text: 'Clasificación atlántica y mediterránea del litoral.', href: sharedSources.emergencyPlan }, { label: 'Junta de Andalucía · Los Lances', text: 'Superficie protegida y ubicación.', href: sharedSources.losLances }
    ] },
    closing: { eyebrow: 'Mantened la orientación', title: 'Que la dirección dé forma al día, sin imponerlo', body: 'El mapa de Tarifa resulta útil cuando conserva flexibilidad: ciudad a pie, costa occidental cuando acompañan las condiciones y el Estrecho como referencia constante. Volved a la guía de ubicación o continuad con las experiencias que permite esta geografía.', locationLabel: 'Volver a Ubicación Tarifa', experienceLabel: 'Explorar experiencias en Tarifa' }
  },
  nl: {
    navLabel: 'Geografie & oriëntatie',
    hero: { eyebrow: 'Geografiegids Tarifa', title: 'Waar ligt Tarifa? De zuidelijkste stad op het Europese vasteland', standfirst: 'Tarifa is de **zuidelijkste stad op het Europese vasteland**. Punta de Tarifa ligt op het eiland dat sinds de dam van 1808 met de stad is verbonden; westwaarts opent de Atlantische kust en oostwaarts volgen Straat en mediterrane kust.', note: 'Oriëntatie en officiële cijfers. Wind, water en zicht wisselen per dag — check de verwachting voor jullie eigen data.', updated: 'Geografie gecontroleerd in augustus 2026' },
    facts: [ { label: 'Gemeente', value: '419,93 km² · acht woonkernen' }, { label: 'Zuidelijk punt', value: 'Punta de Tarifa · circa 36° N' }, { label: 'Straatbreedte', value: 'Centraal/oostelijk · circa 14 km' }, { label: 'Europa–Afrika minimum', value: 'Straatgebied · circa 14,4 km' } ],
    orientation: { eyebrow: 'Oriëntatie in één oogopslag', title: 'Lees Tarifa van stad naar eiland, westkust en Straat', intro: 'Vier vaste punten waarmee de rest van de kaart zichzelf verklaart.', items: [
      { label: 'Hoofdplaats', value: 'Tarifa · officiële referentie 8 m' }, { label: 'Zuidas', value: 'Stad · haven · dam van 1808 · Isla de Tarifa' }, { label: 'West / Atlantisch', value: 'Los Lances · beschermd natuurgebied 226 ha' }, { label: 'Oost / Straat', value: 'Playa Chica · uitwisseling naar de Middellandse Zee' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · De smalle doorgang', title: 'De Straat van Gibraltar bepaalt de schaal', paragraphs: [ 'MITECO beschrijft de Straat als circa 50 km lang, ongeveer 40 km breed in het westen en circa 14 km op centrale en oostelijke smalle delen.', 'Op het smalste punt scheiden ongeveer 14,4 km Europa van Afrika. Op heldere dagen zijn de Marokkaanse kust en de bergen erachter zichtbaar vanuit de stad en vanaf de stranden.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Twee kustlandschappen', title: 'Atlantische Oceaan west, Middellandse Zee oost', paragraphs: [ 'Lokale oriëntatie gebruikt de dam als ontmoetingspunt: Playa Chica ligt aan de Straatkant en Los Lances–Valdevaqueros loopt westwaarts langs de Atlantische kust.', 'MITECO beschrijft een overgang en uitwisseling tussen Atlantische en mediterrane watermassa’s. De dam is de lijn waarmee men hier de twee kanten uit elkaar houdt; in het water zelf mengen de twee zeeën zich gewoon.', 'De gemeente rekent circa 33,5 km van haar kust tot de Atlantische Oceaan en 10,5 km tot de Middellandse Zee. Daardoor kunnen een winderige Atlantische middag bij Los Lances en een rustig uur op Playa Chica bij dezelfde dag horen.' ] },
      { id: 'europe-africa', eyebrow: '03 · Twee continenten', title: 'Europa en Afrika delen de horizon', paragraphs: [ 'IGN plaatst Punta de Tarifa vrijwel exact op 36° N, op het eiland dat in 1808 met de stad werd verbonden.', 'Tarifa is daarmee de zuidelijkste stad op het Europese vasteland. Verschillende Europese eilanden liggen zuidelijker, maar geen enkele plaats op het vasteland.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Drie landschappen', title: 'Stad, kust en achterland liggen dicht bij elkaar', paragraphs: [ 'De compacte stad ligt naast stranden, laag land en heuvels.', 'Los Lances is een beschermd gebied van 226 hectare ten noordwesten van de stad.' ] },
      { id: 'topography', eyebrow: '05 · Reliëf en blootstelling', title: 'Hoogte verandert route, uitzicht en inspanning', paragraphs: [ 'De kust bevat vlaktes, kliffen, heuvels en massieven.', 'Hoogteverschil verandert de inspanning te voet, de blootstelling aan wind en het soort uitzichtpunt dat je bereikt.' ] },
      { id: 'east-west', eyebrow: '06 · Richting en daglicht', title: 'In het westen opent de Atlantische kust', paragraphs: [ 'Los Lances en Valdevaqueros wijzen west; Playa Chica en de Straat oost.', 'De westelijke ligging en de officiële tijd geven zeer late zonsondergangen op de klok, waardoor middag en avond lang bruikbaar blijven.' ] },
      { id: 'wind-geography', eyebrow: '07 · De windcorridor', title: 'Waarom geografie bij Tarifas wind hoort', paragraphs: [ 'De Straat werkt als een trechter. Dezelfde weersituatie levert heel verschillende dagen op, afhankelijk van of de wind als Levante uit het oosten of als Poniente uit het westen komt.', 'Welk strand op een dag werkt is daarom een windvraag en geen kaartvraag — dat beantwoorden de windgids en de actuele verwachting.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Jullie basis in La Marina', title: 'Wat Tarifas geografie betekent bij AMARA', paragraphs: [ 'AMARA Family & Surf ligt in La Marina, aan de westrand van de stad. Playa Los Lances is ongeveer vijf minuten lopen, de oude stad tien tot vijftien minuten langs zee en Valdevaqueros circa tien minuten met de auto over de N-340.', 'Dat is de kaart hierboven in dagelijkse vorm: in het westen de open Atlantische Oceaan, in het oosten voorbij de dam de Straat en de rustigere kant.' ] }
    ],
    related: { eyebrow: 'Verder met het praktische detail', title: 'Waar jullie verder kunnen', links: [
      { token: 'getting_to_tarifa', label: 'Aankomst & mobiliteit', text: 'Weg, bus, luchthavens, haven en het laatste deel naar AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Waar overnachten / gebieden', text: 'Vergelijk de dagelijkse verschillen tussen Tarifas verblijfssettings.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & watersport', text: 'Ga van geografische context naar technische windinformatie en actuele planning.' }, { token: 'tarifa_experience_hub', label: 'Tarifa beleven', text: 'Vertaal de oriëntatie naar stranden, natuur, geschiedenis en uitstappen.' }
    ] },
    sources: { eyebrow: 'Onderbouwing van de gids', title: 'De officiële bronnen achter deze gids', intro: 'De cijfers op deze pagina komen van IGN, SIMA, MITECO, de gemeente Tarifa en de Junta de Andalucía.', checked: 'Bronnen gecontroleerd in augustus 2026.', links: [
      { label: 'SIMA · Tarifa', text: 'Gemeenteoppervlakte, hoofdplaatsreferentie en woonkernen.', href: sharedSources.sima }, { label: 'IGN · Punta de Tarifa', text: 'Officiële coördinaten van het zuidelijke referentiepunt.', href: sharedSources.ign }, { label: 'Toerisme Tarifa · Isla de Tarifa', text: 'Damgeschiedenis en lokale tweezeeënoriëntatie.', href: sharedSources.island }, { label: 'MITECO · Straat en Alborán', text: 'Afmetingen, wateruitwisseling en overgangszone.', href: sharedSources.marineFramework }, { label: 'MITECO · Europa–Afrika', text: 'Regionale minimumafstand van circa 14,4 km.', href: sharedSources.continentalDistance }, { label: 'Ayuntamiento de Tarifa · Kust', text: 'Atlantische en mediterrane kustclassificatie.', href: sharedSources.emergencyPlan }, { label: 'Junta de Andalucía · Los Lances', text: 'Beschermde oppervlakte en ligging.', href: sharedSources.losLances }
    ] },
    closing: { eyebrow: 'Houd jullie oriëntatie', title: 'Laat richting de dag vormen, niet dicteren', body: 'Tarifas kaart werkt het best wanneer ze flexibel blijft: stad te voet, westkust als de condities passen en de Straat als vast referentiepunt. Ga terug naar de locatiegids of verder naar de ervaringen die deze geografie mogelijk maakt.', locationLabel: 'Terug naar Tarifa Locatie', experienceLabel: 'Ontdek ervaringen in Tarifa' }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: { eyebrow: 'Geografiguide Tarifa', title: 'Var ligger Tarifa? Europas sydligaste stad på fastlandet', standfirst: 'Tarifa är **Europas sydligaste stad på fastlandet**. Punta de Tarifa ligger på ön som sedan 1808 är förbunden med staden genom vallen; västerut öppnar Atlantkusten och österut fortsätter sundet och den mediterrana kusten.', note: 'Orientering och officiella siffror. Vind, vatten och sikt växlar från dag till dag – kolla prognosen för era egna datum.', updated: 'Geografin granskad i augusti 2026' },
    facts: [ { label: 'Kommun', value: '419,93 km² · åtta ortskärnor' }, { label: 'Sydligt riktmärke', value: 'Punta de Tarifa · cirka 36° N' }, { label: 'Sundets bredd', value: 'Centralt/österut · cirka 14 km' }, { label: 'Europa–Afrika minimum', value: 'Sundsområdet · cirka 14,4 km' } ],
    orientation: { eyebrow: 'Orientering i korthet', title: 'Läs Tarifa från staden till ön, västkusten och sundet', intro: 'Fyra fasta punkter som gör resten av kartan lätt att läsa.', items: [
      { label: 'Huvudort', value: 'Tarifa · officiell referens 8 m' }, { label: 'Sydaxel', value: 'Stad · hamn · vallen från 1808 · Isla de Tarifa' }, { label: 'Väst / Atlanten', value: 'Los Lances · skyddat naturområde 226 ha' }, { label: 'Öst / Sundet', value: 'Playa Chica · utbyte mot Medelhavet' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · Den smala passagen', title: 'Gibraltarsund sätter skalan', paragraphs: [ 'MITECO beskriver sundet som cirka 50 km långt, omkring 40 km brett i väster och cirka 14 km i centrala och östra smala delar.', 'På det smalaste stället skiljer ungefär 14,4 km Europa från Afrika. Klara dagar syns den marockanska kusten och bergen bakom den från staden och från stränderna.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Två kustmiljöer', title: 'Atlanten i väster, Medelhavet i öster', paragraphs: [ 'Lokal orientering använder vallen som mötespunkt: Playa Chica ligger på sundsidan och Los Lances–Valdevaqueros går västerut längs Atlantkusten.', 'MITECO beskriver övergång och utbyte mellan atlantiska och mediterrana vattenmassor. Vallen är linjen man använder här för att skilja de två sidorna åt; i vattnet blandas de två haven helt enkelt.', 'Kommunen räknar cirka 33,5 km av sin kust som Atlantkust och 10,5 km som mediterran kust. Därför kan en blåsig atlantisk eftermiddag vid Los Lances och en lugn timme på Playa Chica höra till samma dag.' ] },
      { id: 'europe-africa', eyebrow: '03 · Två kontinenter', title: 'Europa och Afrika delar horisonten', paragraphs: [ 'IGN placerar Punta de Tarifa nästan exakt på 36° N, på ön som anslöts till staden 1808.', 'Tarifa är därmed den sydligaste staden på det europeiska fastlandet. Flera europeiska öar ligger längre söderut, men ingen ort på fastlandet.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Tre landskap', title: 'Stad, kust och inland ligger nära varandra', paragraphs: [ 'Den kompakta staden ligger vid stränder, lågland och kullar.', 'Los Lances är ett skyddat område på 226 hektar nordväst om staden.' ] },
      { id: 'topography', eyebrow: '05 · Relief och exponering', title: 'Höjd förändrar väg, utsikt och ansträngning', paragraphs: [ 'Kusten rymmer slätter, klippor, kullar och massiv.', 'Höjdskillnad förändrar ansträngningen till fots, exponeringen för vind och vilken sorts utsiktsplats ni når.' ] },
      { id: 'east-west', eyebrow: '06 · Riktning och dagsljus', title: 'I väster öppnar Atlantkusten', paragraphs: [ 'Los Lances och Valdevaqueros orienterar västerut; Playa Chica och sundet österut.', 'Det västliga läget och den officiella tiden ger mycket sena solnedgångar på klockan, så eftermiddag och kväll går att använda länge.' ] },
      { id: 'wind-geography', eyebrow: '07 · Vindkorridoren', title: 'Varför geografin hör till Tarifas vind', paragraphs: [ 'Sundet fungerar som en tratt. Samma väderläge ger mycket olika dagar beroende på om vinden kommer som Levante från öster eller som Poniente från väster.', 'Vilken strand som fungerar en viss dag är därför en vindfråga och inte en kartfråga – det svarar vindguiden och den aktuella prognosen på.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Er bas i La Marina', title: 'Vad Tarifas geografi betyder vid AMARA', paragraphs: [ 'AMARA Family & Surf ligger i La Marina, i stadens västra kant. Playa Los Lances ligger ungefär fem minuter bort till fots, gamla stan tio till femton minuter längs havet och Valdevaqueros cirka tio minuter med bil på N-340.', 'Det är kartan ovan i vardagsform: i väster den öppna Atlanten, i öster bortom vallen sundet och den lugnare sidan.' ] }
    ],
    related: { eyebrow: 'Fortsätt med det praktiska', title: 'Vidare härifrån', links: [
      { token: 'getting_to_tarifa', label: 'Ankomst & mobilitet', text: 'Väg, buss, flygplatser, hamn och sista sträckan till AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Var ska man bo / områden', text: 'Jämför vardagsskillnaderna mellan Tarifas boendemiljöer.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Vind & vattensport', text: 'Gå från geografiskt sammanhang till teknisk vindinformation och aktuell planering.' }, { token: 'tarifa_experience_hub', label: 'Upplev Tarifa', text: 'Gör orienteringen till stränder, natur, historia och utflykter.' }
    ] },
    sources: { eyebrow: 'Underlag för guiden', title: 'De officiella källorna bakom guiden', intro: 'Siffrorna på den här sidan kommer från IGN, SIMA, MITECO, Tarifas kommun och Junta de Andalucía.', checked: 'Källor granskade i augusti 2026.', links: [
      { label: 'SIMA · Tarifa', text: 'Kommunyta, huvudortsreferens och ortskärnor.', href: sharedSources.sima }, { label: 'IGN · Punta de Tarifa', text: 'Officiella koordinater för sydpunkten.', href: sharedSources.ign }, { label: 'Tarifas turistbyrå · Isla de Tarifa', text: 'Vallens historia och lokal tvåhavskarta.', href: sharedSources.island }, { label: 'MITECO · Sundet och Alborán', text: 'Dimensioner, vattenutbyte och övergångszon.', href: sharedSources.marineFramework }, { label: 'MITECO · Europa–Afrika', text: 'Regionalt minimiavstånd cirka 14,4 km.', href: sharedSources.continentalDistance }, { label: 'Ayuntamiento de Tarifa · Kust', text: 'Atlantisk och mediterran kustklassning.', href: sharedSources.emergencyPlan }, { label: 'Junta de Andalucía · Los Lances', text: 'Skyddad yta och läge.', href: sharedSources.losLances }
    ] },
    closing: { eyebrow: 'Behåll riktningen', title: 'Låt riktningen forma dagen, inte styra den', body: 'Tarifas karta är mest användbar när den förblir flexibel: staden till fots, västkusten när förhållandena passar och sundet som fast referens. Gå tillbaka till lägesguiden eller vidare till upplevelserna som geografin möjliggör.', locationLabel: 'Tillbaka till Tarifa lägesguide', experienceLabel: 'Upptäck upplevelser i Tarifa' }
  }
};
