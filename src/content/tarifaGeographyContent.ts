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
      standfirst: 'Tarifa is **Europe’s southernmost mainland city**. Punta de Tarifa lies on the island joined to town by the 1808 causeway; westward opens the Atlantic coast, while the Strait and Mediterranean-facing coast continue east. That precise wording protects the place from a misleading “southernmost point of Europe” shortcut.',
      note: 'The island and causeway nuance matters. Visibility, wind, currents and water conditions remain dynamic.',
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
      intro: 'These stable anchors build the mental map. They distinguish the local two-seas convention from the physical water-exchange zone and from any property-level promise.',
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
          'The minimum Europe–Africa separation in the Strait zone is about 14.4 kilometres. That is a continental minimum, not the distance from Tarifa town, an apartment or Tangier city centre.',
          'Africa may be visible under suitable conditions, but regional distance never becomes a guaranteed view from every street or AMARA space.'
        ]
      },
      {
        id: 'atlantic-mediterranean',
        eyebrow: '02 · Two coastal settings',
        title: 'Atlantic west, Mediterranean east',
        paragraphs: [
          'Local official orientation treats the island causeway as the meeting point: Playa Chica lies on the Strait/Mediterranean side, while Los Lances and Valdevaqueros extend west along the Atlantic coast.',
          'MITECO describes the Strait and Alborán as a transition and exchange zone between Atlantic and Mediterranean water masses. The causeway is therefore a strong mental-map device, not a promise of a permanently visible seam in the water.',
          'The municipal emergency plan classifies about 33.5 kilometres of Tarifa coast as Atlantic and 10.5 kilometres as Mediterranean. Current water use still requires a conditions check.'
        ]
      },
      {
        id: 'europe-africa',
        eyebrow: '03 · Two continents',
        title: 'Europe and Africa share the horizon',
        paragraphs: [
          'IGN places Punta de Tarifa almost exactly on 36 degrees north. It sits on Isla de Tarifa, which was separate from the town before the causeway connected it in 1808.',
          'That supports “Europe’s southernmost mainland city” when the causeway-linked island is explained. It does not support the shorter claim “southernmost point of Europe”, because European islands extend farther south.',
          'Africa changes Tarifa’s geographic scale, but visibility depends on the day. The safe distinction is between verified regional orientation and an unverified view from one address.'
        ]
      },
      {
        id: 'town-coast-hinterland',
        eyebrow: '04 · Three landscapes',
        title: 'Town, coast and hinterland sit close together',
        paragraphs: [
          'Tarifa town occupies a compact coastal position, while beaches, low ground, hills and the protected landscapes of El Estrecho and Los Alcornocales spread around it.',
          'A short map distance can therefore lead to a very different day: urban streets, exposed coast and rising inland terrain are separate settings. Multi-day plans work better when they alternate rather than treating Tarifa as one continuous beach strip.',
          'A municipal record locates the named La Marina site at Avenida de Los Lances by Calle Mar Menor, supporting a west/north-west town-edge orientation. It does not define the neighbourhood boundary or AMARA’s exact route relationships.'
        ]
      },
      {
        id: 'topography',
        eyebrow: '05 · Relief and exposure',
        title: 'Elevation changes routes, views and effort',
        paragraphs: [
          'The protected coast includes plains, cliffs, hills and mountain massifs. Official local route mapping shows how terrain can rise from near sea level into the Cerros del Estrecho over a relatively short distance.',
          'That matters more than a distance figure alone: elevation changes walking effort, exposure and the kind of viewpoint you reach. A route should not be assumed flat simply because its start and finish both carry a Tarifa address.',
          'For AMARA, no town reference or regional terrain description replaces the exact entrance, gradient, surface and steps of a route. Property-level mobility statements need their own inspection.'
        ]
      },
      {
        id: 'east-west',
        eyebrow: '06 · Direction and daylight',
        title: 'West is the open Atlantic coast',
        paragraphs: [
          'The westbound line from Tarifa runs past Los Lances toward Valdevaqueros and the broader Atlantic coast. Eastbound movement stays with the Strait and the Mediterranean-facing side of the region.',
          'Tarifa’s far-western position in mainland Spain, combined with Spanish summer time, produces very late summer sunsets by the clock. The practical result is a longer usable afternoon and evening; it is a geography-and-clock effect, not an explanation for Spanish dining culture.',
          'Direction is stable geography; travel time, access and parking remain route-specific and current. The page can explain west and east without promising a particular journey from AMARA.'
        ]
      },
      {
        id: 'wind-geography',
        eyebrow: '07 · The wind corridor',
        title: 'Why geography is part of Tarifa’s wind story',
        paragraphs: [
          'The Strait’s narrow corridor makes direction central to Tarifa’s geography, but the current evidence does not support a universal shelter or exposure rule for one neighbourhood.',
          'Geography cannot predict the conditions for a particular beach, hour or activity. Technical wind choices belong in the dedicated wind guide and a current forecast.',
          'AMARA’s location must not be advertised as always sheltered or always exposed. Address-level effects require measured or first-party evidence.'
        ]
      },
      {
        id: 'amara-la-marina',
        eyebrow: '08 · Your base in La Marina',
        title: 'What Tarifa’s geography means at AMARA',
        paragraphs: [
          'AMARA Family & Surf is the accommodation base in La Marina. The verified municipal place-name reference supports its broad west/north-west town orientation, not an exact neighbourhood polygon.',
          'Exact entrance coordinates, walking times, gradients, views and wind exposure are separate property evidence. They remain outside the geography page until documented.',
          'This keeps the page useful without turning regional facts into promises: use the town, island, Atlantic coast and Strait as the stable map, then check the actual route and conditions.'
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
      title: 'Official geography and claim boundaries',
      intro: 'IGN, SIMA, MITECO, the municipality and Junta sources establish the stable map. Property routes, visibility, wind and water conditions remain separate evidence questions.',
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
      standfirst: 'Tarifa ist die **südlichste Stadt auf dem europäischen Festland**. Die Punta de Tarifa liegt auf der Insel, die seit 1808 über einen Damm mit der Stadt verbunden ist; westlich öffnet sich die Atlantikküste, östlich folgen Meerenge und mediterrane Küste. Diese Präzision vermeidet den falschen Kurzsatz vom „südlichsten Punkt Europas“.',
      note: 'Insel und Damm gehören zur Aussage. Sicht, Wind, Strömung und Wasserbedingungen bleiben dynamisch.',
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
      intro: 'Diese stabilen Anker bilden die mentale Karte. Sie trennen die lokale Zwei-Meere-Orientierung von der physikalischen Austauschzone und von jeder Aussage über eine einzelne Unterkunft.',
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
        'Der kleinste Abstand zwischen Europa und Afrika beträgt im Gebiet der Meerenge ungefähr 14,4 Kilometer. Das ist ein kontinentaler Minimalabstand, keine Entfernung von Tarifa, einem Apartment oder zur Innenstadt von Tanger.',
        'Afrika kann bei geeigneter Sicht erkennbar sein; aus der regionalen Distanz folgt aber kein garantierter Ausblick von jeder Straße oder AMARA-Fläche.'
      ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Zwei Küstenwelten', title: 'Atlantik im Westen, Mittelmeer im Osten', paragraphs: [
        'Die lokale amtliche Orientierung behandelt den Inseldamm als Treffpunkt: Playa Chica liegt auf der Seite von Meerenge und Mittelmeer, Los Lances und Valdevaqueros ziehen sich westwärts an der Atlantikküste entlang.',
        'MITECO beschreibt Meerenge und Alborán als Übergangs- und Austauschzone atlantischer und mediterraner Wassermassen. Der Damm ist deshalb ein starkes Orientierungsbild, keine dauerhaft sichtbare Trennlinie im Wasser.',
        'Der kommunale Notfallplan ordnet etwa 33,5 Kilometer Küste dem Atlantik und 10,5 Kilometer dem Mittelmeer zu. Für die Wassernutzung braucht es weiterhin aktuelle Bedingungen.'
      ] },
      { id: 'europe-africa', eyebrow: '03 · Zwei Kontinente', title: 'Europa und Afrika teilen sich den Horizont', paragraphs: [
        'Das IGN verortet die Punta de Tarifa nahezu genau auf 36 Grad Nord. Sie liegt auf der Isla de Tarifa, die bis zum Bau des Damms im Jahr 1808 von der Stadt getrennt war.',
        'Das stützt die Formulierung „südlichste Stadt des europäischen Festlands“, wenn die verbundene Insel erklärt wird. Es stützt nicht „südlichster Punkt Europas“, denn europäische Inseln liegen weiter südlich.',
        'Afrika verändert den Maßstab, aber Sicht hängt vom Tag ab. Belastbar ist die regionale Orientierung, nicht ein unbestätigter Ausblick von einer bestimmten Adresse.'
      ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Drei Landschaften', title: 'Stadt, Küste und Hinterland liegen nah beieinander', paragraphs: [
        'Tarifas kompakter Stadtraum liegt direkt an der Küste; rundherum breiten sich Strände, tiefere Ebenen, Hügel und die geschützten Landschaften von El Estrecho und Los Alcornocales aus.',
        'Eine kurze Distanz auf der Karte kann deshalb zu einem ganz anderen Tag führen: Stadtgassen, offene Küste und ansteigendes Hinterland sind eigene Umgebungen. Über mehrere Tage lohnt sich der Wechsel.',
        'Eine Gemeindequelle verortet den benannten Ort La Marina an der Avenida de Los Lances bei der Calle Mar Menor. Das stützt eine westliche bis nordwestliche Orientierung am Stadtrand, aber weder eine Viertelgrenze noch die exakten Wege des AMARA.'
      ] },
      { id: 'topography', eyebrow: '05 · Relief und Exposition', title: 'Höhe verändert Weg, Aussicht und Aufwand', paragraphs: [
        'Die geschützte Küste umfasst Ebenen, Klippen, Hügel und Bergmassive. Offizielle lokale Routenkarten zeigen, wie das Gelände auf kurzer Strecke vom Meer in die Cerros del Estrecho ansteigen kann.',
        'Das sagt oft mehr als eine reine Entfernung: Höhenmeter verändern Gehaufwand, Exposition und Aussichtspunkt. Ein Weg ist nicht automatisch flach, nur weil Start und Ziel beide eine Adresse in Tarifa tragen.',
        'Beim AMARA ersetzen weder Stadtreferenz noch regionales Relief den genauen Eingang, das Gefälle, den Belag und die Stufen einer Route. Aussagen zur Mobilität brauchen eine eigene Objektprüfung.'
      ] },
      { id: 'east-west', eyebrow: '06 · Richtung und Tageslicht', title: 'Im Westen beginnt die offene Atlantikküste', paragraphs: [
        'Westwärts führt Tarifas Linie über Los Lances nach Valdevaqueros und an die weitere Atlantikküste. Ostwärts bleibt ihr an der Meerenge und auf der mediterranen Seite der Region.',
        'Tarifas weit westliche Lage auf dem spanischen Festland sorgt zusammen mit der spanischen Sommerzeit für sehr späte Sonnenuntergänge nach der Uhr. So bleiben Nachmittage und Abende länger nutzbar; das ist ein Effekt von Lage und Uhrzeit, keine Erklärung für spanische Esskultur.',
        'Richtung ist stabile Geografie; Fahrzeit, Zufahrt und Parklage bleiben routenbezogen und aktuell. Die Seite kann Westen und Osten erklären, ohne eine bestimmte Fahrt vom AMARA zu versprechen.'
      ] },
      { id: 'wind-geography', eyebrow: '07 · Der Windkorridor', title: 'Warum Geografie zu Tarifas Windgeschichte gehört', paragraphs: [
        'Der schmale Korridor der Meerenge macht Richtung für Tarifas Geografie zentral. Die aktuelle Beleglage erlaubt aber keine universelle Regel, welches Viertel immer geschützt oder exponiert ist.',
        'Geografie sagt die Bedingungen für einen bestimmten Strand, eine Stunde oder Aktivität nicht voraus. Dafür gibt es den Wind-Guide und aktuelle Vorhersagen.',
        'Das AMARA darf weder als grundsätzlich windgeschützt noch als grundsätzlich exponiert beschrieben werden. Lokale Effekte brauchen Messdaten oder dokumentierte Beobachtung.'
      ] },
      { id: 'amara-la-marina', eyebrow: '08 · Euer Ausgangspunkt in La Marina', title: 'Was Tarifas Geografie beim AMARA bedeutet', paragraphs: [
        'AMARA Family & Surf ist der Unterkunftsbezug in La Marina. Die kommunale Ortsreferenz stützt die grobe westliche bis nordwestliche Lage im Stadtgebiet, nicht eine exakte Viertelgrenze.',
        'Eingangskoordinaten, Gehzeiten, Gefälle, Aussichten und Windexposition sind eigene Objektbelege. Bis zur Dokumentation bleiben sie außerhalb der Geografieseite.',
        'So bleibt die Seite nützlich, ohne regionale Fakten zu Versprechen zu machen: Stadt, Insel, Atlantikküste und Meerenge bilden die stabile Karte; Route und Bedingungen werden konkret geprüft.'
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
      eyebrow: 'Belege hinter dem Guide', title: 'Amtliche Geografie und Aussagegrenzen', intro: 'IGN, SIMA, MITECO, Gemeinde und Junta belegen die stabile Karte. Objektwege, Sicht, Wind und Wasserbedingungen bleiben eigene Belegfragen.', checked: 'Quellen geprüft im August 2026.',
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
    hero: { eyebrow: 'Guía geográfica de Tarifa', title: '¿Dónde está Tarifa? La ciudad más meridional de la Europa continental', standfirst: 'Tarifa es la **ciudad más meridional de la Europa continental**. Punta de Tarifa está en la isla unida a la ciudad por el dique de 1808; al oeste se abre el litoral atlántico y al este continúan el Estrecho y la costa mediterránea. Esta precisión evita el atajo erróneo de llamarla «punto más meridional de Europa».', note: 'La isla y el dique forman parte de la afirmación. Visibilidad, viento, corrientes y estado del agua siguen siendo dinámicos.', updated: 'Geografía comprobada en agosto de 2026' },
    facts: [ { label: 'Municipio', value: '419,93 km² · ocho núcleos' }, { label: 'Referencia sur', value: 'Punta de Tarifa · unos 36° N' }, { label: 'Anchura del Estrecho', value: 'Tramos centrales/orientales · unos 14 km' }, { label: 'Europa–África mínimo', value: 'Zona del Estrecho · unos 14,4 km' } ],
    orientation: { eyebrow: 'Orientación de un vistazo', title: 'Leed Tarifa desde la ciudad hacia la isla, el oeste y el Estrecho', intro: 'Estos anclajes estables distinguen la convención local de los dos mares, el intercambio físico de aguas y cualquier promesa sobre una propiedad.', items: [
      { label: 'Núcleo principal', value: 'Tarifa · referencia oficial 8 m' }, { label: 'Eje sur', value: 'Ciudad · puerto · dique de 1808 · Isla de Tarifa' }, { label: 'Oeste / Atlántico', value: 'Los Lances · espacio natural protegido de 226 ha' }, { label: 'Este / Estrecho', value: 'Playa Chica · intercambio hacia el Mediterráneo' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · El paso estrecho', title: 'El Estrecho de Gibraltar marca la escala', paragraphs: [ 'MITECO describe el Estrecho con unos 50 kilómetros de longitud, cerca de 40 kilómetros de anchura al oeste y unos 14 en sus pasos centrales y orientales.', 'La distancia mínima Europa–África en la zona es de unos 14,4 kilómetros. Es un mínimo continental, no la distancia desde Tarifa, un apartamento o el centro de Tánger.', 'África puede verse con condiciones adecuadas, pero la distancia regional no garantiza vistas desde cada calle o espacio de AMARA.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Dos entornos costeros', title: 'Atlántico al oeste, Mediterráneo al este', paragraphs: [ 'La orientación local sitúa en el dique el encuentro: Playa Chica queda del lado del Estrecho y Los Lances–Valdevaqueros se extienden al oeste por el Atlántico.', 'MITECO describe una zona de transición e intercambio entre masas de agua atlánticas y mediterráneas. El dique es un mapa mental, no una línea visible permanente.', 'El plan municipal clasifica unos 33,5 km como costa atlántica y 10,5 km como mediterránea. El uso del agua requiere condiciones actuales.' ] },
      { id: 'europe-africa', eyebrow: '03 · Dos continentes', title: 'Europa y África comparten el horizonte', paragraphs: [ 'IGN sitúa Punta de Tarifa casi exactamente en 36° N, sobre la isla conectada a la ciudad por el dique de 1808.', 'Esto respalda «ciudad más meridional de la Europa continental» con la explicación de la isla; no «punto más meridional de Europa», porque hay islas europeas más al sur.', 'África cambia la escala, pero la visibilidad depende del día. La orientación regional está verificada; la vista desde una dirección concreta no.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Tres paisajes', title: 'Ciudad, costa e interior están muy cerca', paragraphs: [ 'El núcleo compacto ocupa la costa junto a playas, terrenos bajos y colinas.', 'Los Lances es un espacio protegido de 226 hectáreas al noroeste de la ciudad.', 'Una fuente municipal sitúa La Marina en Avenida de Los Lances con calle Mar Menor; no define el barrio ni las rutas exactas de AMARA.' ] },
      { id: 'topography', eyebrow: '05 · Relieve y exposición', title: 'La altura cambia el camino, las vistas y el esfuerzo', paragraphs: [ 'La costa incluye llanuras, acantilados, colinas y macizos.', 'La distancia no prueba esfuerzo, exposición o accesibilidad.', 'En AMARA, entrada, pendiente, firme y escalones requieren una inspección propia.' ] },
      { id: 'east-west', eyebrow: '06 · Dirección y luz', title: 'Al oeste se abre la costa atlántica', paragraphs: [ 'Los Lances y Valdevaqueros orientan al oeste; Playa Chica y el Estrecho, al este.', 'La posición occidental y la hora oficial producen atardeceres tardíos según el reloj.', 'Dirección es geografía estable; tiempo de viaje, acceso y aparcamiento siguen siendo actuales.' ] },
      { id: 'wind-geography', eyebrow: '07 · El corredor del viento', title: 'Por qué la geografía forma parte del viento de Tarifa', paragraphs: [ 'El corredor estrecho hace importante la dirección, pero no demuestra que un barrio esté siempre protegido o expuesto.', 'La geografía no predice playa, hora o actividad; corresponden a la guía de viento y a una previsión actual.', 'AMARA no debe anunciarse como siempre resguardado ni siempre expuesto sin datos locales.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Vuestra base en La Marina', title: 'Qué significa la geografía de Tarifa en AMARA', paragraphs: [ 'AMARA Family & Surf es la base de alojamiento en La Marina; la referencia municipal solo apoya una orientación urbana amplia.', 'Entrada, tiempos a pie, pendientes, vistas y exposición son pruebas propias de la propiedad.', 'Usad ciudad, isla, costa atlántica y Estrecho como mapa estable; comprobad después ruta y condiciones.' ] }
    ],
    related: { eyebrow: 'Seguid con el detalle práctico', title: 'Cada siguiente pregunta tiene su guía', links: [
      { token: 'getting_to_tarifa', label: 'Llegada y movilidad', text: 'Carretera, autobús, aeropuertos, puerto y el último tramo hasta AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Dónde alojarse / zonas', text: 'Comparad las diferencias diarias entre los entornos de alojamiento.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Viento y deportes acuáticos', text: 'Pasad del contexto geográfico al detalle técnico y a las condiciones actuales.' }, { token: 'tarifa_experience_hub', label: 'Experiencias en Tarifa', text: 'Convertid la orientación en playas, naturaleza, historia y excursiones.' }
    ] },
    sources: { eyebrow: 'Base documental de la guía', title: 'Geografía oficial y límites de afirmación', intro: 'IGN, SIMA, MITECO, el Ayuntamiento y la Junta sostienen el mapa estable. Rutas, visibilidad, viento y agua requieren pruebas separadas.', checked: 'Fuentes comprobadas en agosto de 2026.', links: [
      { label: 'SIMA · Tarifa', text: 'Superficie municipal, referencia del núcleo y número de núcleos.', href: sharedSources.sima }, { label: 'IGN · Punta de Tarifa', text: 'Coordenadas oficiales de la referencia meridional.', href: sharedSources.ign }, { label: 'Turismo de Tarifa · Isla de Tarifa', text: 'Historia del dique y orientación local de los dos mares.', href: sharedSources.island }, { label: 'MITECO · Estrecho y Alborán', text: 'Dimensiones, intercambio de aguas y zona de transición.', href: sharedSources.marineFramework }, { label: 'MITECO · Europa–África', text: 'Distancia mínima regional aproximada de 14,4 km.', href: sharedSources.continentalDistance }, { label: 'Ayuntamiento de Tarifa · Costa', text: 'Clasificación atlántica y mediterránea del litoral.', href: sharedSources.emergencyPlan }, { label: 'Junta de Andalucía · Los Lances', text: 'Superficie protegida y ubicación.', href: sharedSources.losLances }
    ] },
    closing: { eyebrow: 'Mantened la orientación', title: 'Que la dirección dé forma al día, sin imponerlo', body: 'El mapa de Tarifa resulta útil cuando conserva flexibilidad: ciudad a pie, costa occidental cuando acompañan las condiciones y el Estrecho como referencia constante. Volved a la guía de ubicación o continuad con las experiencias que permite esta geografía.', locationLabel: 'Volver a Ubicación Tarifa', experienceLabel: 'Explorar experiencias en Tarifa' }
  },
  nl: {
    navLabel: 'Geografie & oriëntatie',
    hero: { eyebrow: 'Geografiegids Tarifa', title: 'Waar ligt Tarifa? De zuidelijkste stad op het Europese vasteland', standfirst: 'Tarifa is de **zuidelijkste stad op het Europese vasteland**. Punta de Tarifa ligt op het eiland dat sinds de dam van 1808 met de stad is verbonden; westwaarts opent de Atlantische kust en oostwaarts volgen Straat en mediterrane kust. Zo vermijden we de onjuiste verkorting “zuidelijkste punt van Europa”.', note: 'Eiland en dam horen bij de formulering. Zicht, wind, stromingen en watercondities blijven veranderlijk.', updated: 'Geografie gecontroleerd in augustus 2026' },
    facts: [ { label: 'Gemeente', value: '419,93 km² · acht woonkernen' }, { label: 'Zuidelijk punt', value: 'Punta de Tarifa · circa 36° N' }, { label: 'Straatbreedte', value: 'Centraal/oostelijk · circa 14 km' }, { label: 'Europa–Afrika minimum', value: 'Straatgebied · circa 14,4 km' } ],
    orientation: { eyebrow: 'Oriëntatie in één oogopslag', title: 'Lees Tarifa van stad naar eiland, westkust en Straat', intro: 'Deze vaste ankers onderscheiden de lokale tweezeeënconventie, de fysieke wateruitwisseling en beloften over één accommodatie.', items: [
      { label: 'Hoofdplaats', value: 'Tarifa · officiële referentie 8 m' }, { label: 'Zuidas', value: 'Stad · haven · dam van 1808 · Isla de Tarifa' }, { label: 'West / Atlantisch', value: 'Los Lances · beschermd natuurgebied 226 ha' }, { label: 'Oost / Straat', value: 'Playa Chica · uitwisseling naar de Middellandse Zee' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · De smalle doorgang', title: 'De Straat van Gibraltar bepaalt de schaal', paragraphs: [ 'MITECO beschrijft de Straat als circa 50 km lang, ongeveer 40 km breed in het westen en circa 14 km op centrale en oostelijke smalle delen.', 'De minimale afstand Europa–Afrika is circa 14,4 km; dat is geen afstand vanaf Tarifa, een appartement of Tanger-centrum.', 'Afrika kan zichtbaar zijn, maar regionale afstand garandeert geen uitzicht vanaf elke straat of AMARA-ruimte.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Twee kustlandschappen', title: 'Atlantische Oceaan west, Middellandse Zee oost', paragraphs: [ 'Lokale oriëntatie gebruikt de dam als ontmoetingspunt: Playa Chica ligt aan de Straatkant en Los Lances–Valdevaqueros loopt westwaarts langs de Atlantische kust.', 'MITECO beschrijft een overgang en uitwisseling tussen Atlantische en mediterrane watermassa’s. De dam is een mentale kaart, geen permanent zichtbare lijn.', 'Het gemeentelijke plan classificeert circa 33,5 km als Atlantische en 10,5 km als mediterrane kust; watergebruik vraagt actuele condities.' ] },
      { id: 'europe-africa', eyebrow: '03 · Twee continenten', title: 'Europa en Afrika delen de horizon', paragraphs: [ 'IGN plaatst Punta de Tarifa vrijwel exact op 36° N, op het eiland dat in 1808 met de stad werd verbonden.', 'Dat ondersteunt “zuidelijkste stad op het Europese vasteland” met eilandnuance, niet “zuidelijkste punt van Europa”.', 'Afrika bepaalt de schaal; zicht vanaf een specifiek adres blijft afhankelijk van de dag en onbewezen.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Drie landschappen', title: 'Stad, kust en achterland liggen dicht bij elkaar', paragraphs: [ 'De compacte stad ligt naast stranden, laag land en heuvels.', 'Los Lances is een beschermd gebied van 226 hectare ten noordwesten van de stad.', 'Een gemeentelijke bron situeert La Marina bij Avenida de Los Lances en Calle Mar Menor, maar definieert geen wijkgrens of AMARA-route.' ] },
      { id: 'topography', eyebrow: '05 · Reliëf en blootstelling', title: 'Hoogte verandert route, uitzicht en inspanning', paragraphs: [ 'De kust bevat vlaktes, kliffen, heuvels en massieven.', 'Afstand bewijst geen inspanning, blootstelling of toegankelijkheid.', 'Bij AMARA vragen ingang, helling, ondergrond en treden om eigen inspectie.' ] },
      { id: 'east-west', eyebrow: '06 · Richting en daglicht', title: 'In het westen opent de Atlantische kust', paragraphs: [ 'Los Lances en Valdevaqueros wijzen west; Playa Chica en de Straat oost.', 'Westelijke ligging en officiële tijd geven late zonsondergangen op de klok.', 'Richting is stabiele geografie; reistijd, toegang en parkeren blijven actueel.' ] },
      { id: 'wind-geography', eyebrow: '07 · De windcorridor', title: 'Waarom geografie bij Tarifas wind hoort', paragraphs: [ 'De smalle corridor maakt richting belangrijk maar bewijst geen vaste luwte of blootstelling per wijk.', 'Geografie voorspelt geen strand, uur of activiteit; gebruik windgids en actuele verwachting.', 'AMARA mag zonder lokale data niet als altijd beschut of altijd blootgesteld worden beschreven.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Jullie basis in La Marina', title: 'Wat Tarifas geografie betekent bij AMARA', paragraphs: [ 'AMARA Family & Surf is de accommodatiebasis in La Marina; de gemeentelijke verwijzing ondersteunt alleen een brede stadsoriëntatie.', 'Ingang, looptijden, hellingen, uitzichten en wind vragen eigendomsbewijs.', 'Gebruik stad, eiland, Atlantische kust en Straat als vaste kaart en controleer daarna route en condities.' ] }
    ],
    related: { eyebrow: 'Verder met het praktische detail', title: 'Gebruik de gids voor jullie volgende vraag', links: [
      { token: 'getting_to_tarifa', label: 'Aankomst & mobiliteit', text: 'Weg, bus, luchthavens, haven en het laatste deel naar AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Waar overnachten / gebieden', text: 'Vergelijk de dagelijkse verschillen tussen Tarifas verblijfssettings.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & watersport', text: 'Ga van geografische context naar technische windinformatie en actuele planning.' }, { token: 'tarifa_experience_hub', label: 'Tarifa beleven', text: 'Vertaal de oriëntatie naar stranden, natuur, geschiedenis en uitstappen.' }
    ] },
    sources: { eyebrow: 'Onderbouwing van de gids', title: 'Officiële geografie en claimgrenzen', intro: 'IGN, SIMA, MITECO, gemeente en Junta onderbouwen de vaste kaart. Routes, zicht, wind en watercondities blijven aparte bewijsvragen.', checked: 'Bronnen gecontroleerd in augustus 2026.', links: [
      { label: 'SIMA · Tarifa', text: 'Gemeenteoppervlakte, hoofdplaatsreferentie en woonkernen.', href: sharedSources.sima }, { label: 'IGN · Punta de Tarifa', text: 'Officiële coördinaten van het zuidelijke referentiepunt.', href: sharedSources.ign }, { label: 'Toerisme Tarifa · Isla de Tarifa', text: 'Damgeschiedenis en lokale tweezeeënoriëntatie.', href: sharedSources.island }, { label: 'MITECO · Straat en Alborán', text: 'Afmetingen, wateruitwisseling en overgangszone.', href: sharedSources.marineFramework }, { label: 'MITECO · Europa–Afrika', text: 'Regionale minimumafstand van circa 14,4 km.', href: sharedSources.continentalDistance }, { label: 'Ayuntamiento de Tarifa · Kust', text: 'Atlantische en mediterrane kustclassificatie.', href: sharedSources.emergencyPlan }, { label: 'Junta de Andalucía · Los Lances', text: 'Beschermde oppervlakte en ligging.', href: sharedSources.losLances }
    ] },
    closing: { eyebrow: 'Houd jullie oriëntatie', title: 'Laat richting de dag vormen, niet dicteren', body: 'Tarifas kaart werkt het best wanneer ze flexibel blijft: stad te voet, westkust als de condities passen en de Straat als vast referentiepunt. Ga terug naar de locatiegids of verder naar de ervaringen die deze geografie mogelijk maakt.', locationLabel: 'Terug naar Tarifa Locatie', experienceLabel: 'Ontdek ervaringen in Tarifa' }
  },
  sv: {
    navLabel: 'Geografi & orientering',
    hero: { eyebrow: 'Geografiguide Tarifa', title: 'Var ligger Tarifa? Europas sydligaste stad på fastlandet', standfirst: 'Tarifa är **Europas sydligaste stad på fastlandet**. Punta de Tarifa ligger på ön som sedan 1808 är förbunden med staden genom vallen; västerut öppnar Atlantkusten och österut fortsätter sundet och den mediterrana kusten. Det undviker den felaktiga förkortningen “Europas sydligaste punkt”.', note: 'Ön och vallen hör till formuleringen. Sikt, vind, strömmar och vattenförhållanden förändras.', updated: 'Geografin granskad i augusti 2026' },
    facts: [ { label: 'Kommun', value: '419,93 km² · åtta ortskärnor' }, { label: 'Sydligt riktmärke', value: 'Punta de Tarifa · cirka 36° N' }, { label: 'Sundets bredd', value: 'Centralt/österut · cirka 14 km' }, { label: 'Europa–Afrika minimum', value: 'Sundsområdet · cirka 14,4 km' } ],
    orientation: { eyebrow: 'Orientering i korthet', title: 'Läs Tarifa från staden till ön, västkusten och sundet', intro: 'Dessa stabila ankare skiljer den lokala tvåhavskonventionen, den fysiska vattenväxlingen och löften om en viss bostad.', items: [
      { label: 'Huvudort', value: 'Tarifa · officiell referens 8 m' }, { label: 'Sydaxel', value: 'Stad · hamn · vallen från 1808 · Isla de Tarifa' }, { label: 'Väst / Atlanten', value: 'Los Lances · skyddat naturområde 226 ha' }, { label: 'Öst / Sundet', value: 'Playa Chica · utbyte mot Medelhavet' }
    ] },
    sections: [
      { id: 'strait-of-gibraltar', eyebrow: '01 · Den smala passagen', title: 'Gibraltarsund sätter skalan', paragraphs: [ 'MITECO beskriver sundet som cirka 50 km långt, omkring 40 km brett i väster och cirka 14 km i centrala och östra smala delar.', 'Minimiavståndet Europa–Afrika är cirka 14,4 km; det är inte avståndet från Tarifa, en lägenhet eller Tanger centrum.', 'Afrika kan synas, men regionalt avstånd garanterar inte utsikt från varje gata eller AMARA-yta.' ] },
      { id: 'atlantic-mediterranean', eyebrow: '02 · Två kustmiljöer', title: 'Atlanten i väster, Medelhavet i öster', paragraphs: [ 'Lokal orientering använder vallen som mötespunkt: Playa Chica ligger på sundsidan och Los Lances–Valdevaqueros går västerut längs Atlantkusten.', 'MITECO beskriver övergång och utbyte mellan atlantiska och mediterrana vattenmassor. Vallen är en mental karta, inte en permanent synlig linje.', 'Kommunplanen klassificerar cirka 33,5 km som Atlantkust och 10,5 km som mediterran kust; vattenbruk kräver aktuella förhållanden.' ] },
      { id: 'europe-africa', eyebrow: '03 · Två kontinenter', title: 'Europa och Afrika delar horisonten', paragraphs: [ 'IGN placerar Punta de Tarifa nästan exakt på 36° N, på ön som anslöts till staden 1808.', 'Det stöder “Europas sydligaste stad på fastlandet” med ön förklarad, inte “Europas sydligaste punkt”.', 'Afrika ger skala; sikt från en bestämd adress beror på dagen och är inte bevisad.' ] },
      { id: 'town-coast-hinterland', eyebrow: '04 · Tre landskap', title: 'Stad, kust och inland ligger nära varandra', paragraphs: [ 'Den kompakta staden ligger vid stränder, lågland och kullar.', 'Los Lances är ett skyddat område på 226 hektar nordväst om staden.', 'En kommunal källa placerar La Marina vid Avenida de Los Lances och Calle Mar Menor men definierar ingen stadsdelsgräns eller AMARA-rutt.' ] },
      { id: 'topography', eyebrow: '05 · Relief och exponering', title: 'Höjd förändrar väg, utsikt och ansträngning', paragraphs: [ 'Kusten rymmer slätter, klippor, kullar och massiv.', 'Avstånd bevisar inte ansträngning, exponering eller tillgänglighet.', 'Vid AMARA kräver entré, lutning, underlag och trappsteg en egen kontroll.' ] },
      { id: 'east-west', eyebrow: '06 · Riktning och dagsljus', title: 'I väster öppnar Atlantkusten', paragraphs: [ 'Los Lances och Valdevaqueros orienterar västerut; Playa Chica och sundet österut.', 'Västligt läge och officiell tid ger sena solnedgångar på klockan.', 'Riktning är stabil geografi; restid, tillträde och parkering är aktuella frågor.' ] },
      { id: 'wind-geography', eyebrow: '07 · Vindkorridoren', title: 'Varför geografin hör till Tarifas vind', paragraphs: [ 'Den smala korridoren gör riktning viktig men bevisar inte fast lä eller exponering per stadsdel.', 'Geografi förutser inte strand, timme eller aktivitet; använd vindguiden och aktuell prognos.', 'AMARA får utan lokala data inte beskrivas som alltid skyddat eller alltid exponerat.' ] },
      { id: 'amara-la-marina', eyebrow: '08 · Er bas i La Marina', title: 'Vad Tarifas geografi betyder vid AMARA', paragraphs: [ 'AMARA Family & Surf är boendebasen i La Marina; den kommunala referensen stöder bara bred stadsorientering.', 'Entré, gångtider, lutningar, utsikter och vind kräver fastighetsspecifika belägg.', 'Använd stad, ö, Atlantkust och sund som fast karta och kontrollera sedan rutt och förhållanden.' ] }
    ],
    related: { eyebrow: 'Fortsätt med det praktiska', title: 'Använd guiden som svarar på nästa fråga', links: [
      { token: 'getting_to_tarifa', label: 'Ankomst & mobilitet', text: 'Väg, buss, flygplatser, hamn och sista sträckan till AMARA.' }, { token: 'tarifa_where_to_stay', label: 'Var ska man bo / områden', text: 'Jämför vardagsskillnaderna mellan Tarifas boendemiljöer.' }, { token: 'tarifa_wind_kitesurfing_authority', label: 'Vind & vattensport', text: 'Gå från geografiskt sammanhang till teknisk vindinformation och aktuell planering.' }, { token: 'tarifa_experience_hub', label: 'Upplev Tarifa', text: 'Gör orienteringen till stränder, natur, historia och utflykter.' }
    ] },
    sources: { eyebrow: 'Underlag för guiden', title: 'Officiell geografi och claimgränser', intro: 'IGN, SIMA, MITECO, kommunen och Junta underbygger den fasta kartan. Rutter, sikt, vind och vatten är separata bevisfrågor.', checked: 'Källor granskade i augusti 2026.', links: [
      { label: 'SIMA · Tarifa', text: 'Kommunyta, huvudortsreferens och ortskärnor.', href: sharedSources.sima }, { label: 'IGN · Punta de Tarifa', text: 'Officiella koordinater för sydpunkten.', href: sharedSources.ign }, { label: 'Tarifas turistbyrå · Isla de Tarifa', text: 'Vallens historia och lokal tvåhavskarta.', href: sharedSources.island }, { label: 'MITECO · Sundet och Alborán', text: 'Dimensioner, vattenutbyte och övergångszon.', href: sharedSources.marineFramework }, { label: 'MITECO · Europa–Afrika', text: 'Regionalt minimiavstånd cirka 14,4 km.', href: sharedSources.continentalDistance }, { label: 'Ayuntamiento de Tarifa · Kust', text: 'Atlantisk och mediterran kustklassning.', href: sharedSources.emergencyPlan }, { label: 'Junta de Andalucía · Los Lances', text: 'Skyddad yta och läge.', href: sharedSources.losLances }
    ] },
    closing: { eyebrow: 'Behåll riktningen', title: 'Låt riktningen forma dagen, inte styra den', body: 'Tarifas karta är mest användbar när den förblir flexibel: staden till fots, västkusten när förhållandena passar och sundet som fast referens. Gå tillbaka till lägesguiden eller vidare till upplevelserna som geografin möjliggör.', locationLabel: 'Tillbaka till Tarifa lägesguide', experienceLabel: 'Upptäck upplevelser i Tarifa' }
  }
};
