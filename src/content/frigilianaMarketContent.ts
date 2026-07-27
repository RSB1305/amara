import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type LocalizedText = Record<AmaraLanguage, string>;

const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaMarketExternalLinks = {
  officialTourism: 'https://www.turismofrigiliana.es/es/',
  officialStreetMap: 'https://www.turismofrigiliana.es/es/callejero.html',
  officialIngenio:
    'https://www.turismofrigiliana.es/es/monumentos.html'
} as const;

export const frigilianaMarketSeo: AmaraAuthoringSeo = {
  version: '2026-07-27-frigiliana-market-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Frigiliana Market: Day, Time & What to Expect',
      description:
        'Plan a visit to Frigiliana’s Thursday market with practical guidance on typical hours, location, stalls, parking, and the old-town walk.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wochenmarkt in Frigiliana: Tag, Uhrzeit & Tipps',
      description:
        'Plant euren Besuch auf Frigilianas Donnerstagsmarkt mit Informationen zu typischer Uhrzeit, Standort, Angebot, Parken und Altstadtrundgang.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Mercado de Frigiliana: día, horario y consejos',
      description:
        'Planificad vuestra visita al mercado de los jueves de Frigiliana: horario habitual, ubicación, puestos, aparcamiento y paseo por el casco antiguo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Markt van Frigiliana: dag, tijd en tips',
      description:
        'Plan uw bezoek aan de donderdagmarkt van Frigiliana met informatie over gebruikelijke tijden, locatie, aanbod, parkeren en de oude kern.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Marknaden i Frigiliana: dag, tid och tips',
      description:
        'Planera ett besök på Frigilianas torsdagsmarknad med praktisk information om vanlig tid, plats, utbud, parkering och gamla stan.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaMarketCopy = {
  nav: {
    brand: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana'),
    links: [
      {
        token: 'location_frigiliana',
        label: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana')
      },
      {
        token: 'frigiliana_market',
        label: l('Market', 'Wochenmarkt', 'Mercado', 'Markt', 'Marknad')
      },
      {
        token: 'frigiliana_parking',
        label: l('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering')
      }
    ]
  },
  hero: {
    eyebrow: l(
      'Thursday morning · Frigiliana',
      'Donnerstagvormittag · Frigiliana',
      'Jueves por la mañana · Frigiliana',
      'Donderdagochtend · Frigiliana',
      'Torsdag förmiddag · Frigiliana'
    ),
    title: l(
      'The Frigiliana Market',
      'Der Wochenmarkt in Frigiliana',
      'El mercado de Frigiliana',
      'De markt van Frigiliana',
      'Marknaden i Frigiliana'
    ),
    lead: l(
      'Frigiliana’s weekly market brings food, clothing, household goods, and visitor finds together in the lower village. It is compact enough to combine with breakfast, a walk through the historic quarter, and an unhurried lunch.',
      'Frigilianas Wochenmarkt bringt Lebensmittel, Kleidung, Haushaltswaren und Fundstücke für Besucher im unteren Ort zusammen. Er lässt sich gut mit einem Frühstück, einem Spaziergang durch die Altstadt und einem entspannten Mittagessen verbinden.',
      'El mercado semanal de Frigiliana reúne alimentación, ropa, artículos cotidianos y compras para visitantes en la zona baja del pueblo. Se puede combinar fácilmente con un desayuno, un paseo por el casco histórico y un almuerzo sin prisas.',
      'De wekelijkse markt van Frigiliana brengt eten, kleding, huishoudelijke artikelen en leuke vondsten voor bezoekers samen in het lagere dorp. De markt is goed te combineren met ontbijt, een wandeling door de oude kern en een ontspannen lunch.',
      'Frigilianas veckomarknad samlar mat, kläder, vardagsvaror och fynd för besökare i den nedre delen av byn. Den går lätt att kombinera med frukost, en promenad i gamla stan och en lugn lunch.'
    ),
    body: l(
      'The regular market is normally held on Thursday mornings around Plaza de las Tres Culturas. Times, stall numbers, and arrangements can change on holidays or event dates, so treat the details below as planning guidance and check current local information before a special journey.',
      'Der reguläre Markt findet normalerweise am Donnerstagvormittag rund um die Plaza de las Tres Culturas statt. Uhrzeit, Anzahl der Stände und Ablauf können sich an Feiertagen oder bei Veranstaltungen ändern. Nutzt die folgenden Angaben deshalb zur Planung und prüft vor einer eigens dafür unternommenen Fahrt die aktuellen lokalen Informationen.',
      'El mercado habitual suele celebrarse los jueves por la mañana en torno a la Plaza de las Tres Culturas. El horario, el número de puestos y la organización pueden cambiar en festivos o durante eventos. Utilizad estos datos para planificar y comprobad la información local actual antes de desplazaros expresamente.',
      'De reguliere markt vindt normaal gesproken op donderdagochtend rond Plaza de las Tres Culturas plaats. Tijden, aantal kramen en indeling kunnen wijzigen op feestdagen of tijdens evenementen. Gebruik onderstaande informatie daarom als planning en controleer de actuele lokale situatie vóór een speciale reis.',
      'Den ordinarie marknaden hålls normalt på torsdagsförmiddagar kring Plaza de las Tres Culturas. Tider, antal stånd och upplägg kan ändras vid helgdagar eller evenemang. Använd därför informationen som planeringshjälp och kontrollera aktuella lokala uppgifter före en särskild resa.'
    ),
    primaryCta: l(
      'See the market facts',
      'Marktinformationen ansehen',
      'Ver datos del mercado',
      'Bekijk de marktinformatie',
      'Se marknadsfakta'
    ),
    secondaryCta: l(
      'Plan parking',
      'Parken planen',
      'Planificar aparcamiento',
      'Plan parkeren',
      'Planera parkering'
    ),
    imageAlt: l(
      'Whitewashed lanes in Frigiliana near the historic quarter',
      'Weiße Gassen in Frigiliana nahe der Altstadt',
      'Calles blancas de Frigiliana cerca del casco histórico',
      'Witte straatjes in Frigiliana bij de oude kern',
      'Vitkalkade gränder i Frigiliana nära gamla stan'
    )
  },
  facts: {
    title: l(
      'The essentials at a glance',
      'Das Wichtigste auf einen Blick',
      'Lo esencial de un vistazo',
      'De belangrijkste informatie',
      'Det viktigaste i korthet'
    ),
    items: [
      {
        label: l('Regular day', 'Regulärer Tag', 'Día habitual', 'Vaste dag', 'Ordinarie dag'),
        value: l('Thursday', 'Donnerstag', 'Jueves', 'Donderdag', 'Torsdag'),
        note: l(
          'Holiday and event weeks can lead to changes.',
          'Feiertage und Veranstaltungswochen können zu Änderungen führen.',
          'Los festivos y las semanas con eventos pueden traer cambios.',
          'Feestdagen en evenementen kunnen wijzigingen veroorzaken.',
          'Helgdagar och evenemangsveckor kan innebära ändringar.'
        )
      },
      {
        label: l('Typical time', 'Typische Uhrzeit', 'Horario habitual', 'Gebruikelijke tijd', 'Vanlig tid'),
        value: l('08:00–14:00', '08:00–14:00 Uhr', '08:00–14:00', '08:00–14:00', '08:00–14:00'),
        note: l(
          'Arrive during the morning and confirm the current schedule locally.',
          'Kommt am Vormittag und bestätigt den aktuellen Zeitplan vor Ort.',
          'Id por la mañana y confirmad el horario actual a nivel local.',
          'Ga in de ochtend en controleer het actuele tijdschema lokaal.',
          'Kom under förmiddagen och bekräfta aktuell tid lokalt.'
        )
      },
      {
        label: l('Location', 'Standort', 'Ubicación', 'Locatie', 'Plats'),
        value: l(
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas'
        ),
        note: l(
          'In the lower village, before the steepest historic lanes.',
          'Im unteren Ort, noch vor den steilsten Altstadtgassen.',
          'En la zona baja, antes de las calles más empinadas del casco histórico.',
          'In het lagere dorp, vóór de steilste straten van de oude kern.',
          'I den nedre byn, före de brantaste gränderna i gamla stan.'
        )
      },
      {
        label: l('Format', 'Format', 'Formato', 'Opzet', 'Format'),
        value: l('Compact & varied', 'Kompakt & gemischt', 'Compacto y variado', 'Compact & gevarieerd', 'Kompakt & varierat'),
        note: l(
          'The mix and number of stalls vary from one market day to another.',
          'Mischung und Anzahl der Stände variieren von Markttag zu Markttag.',
          'La mezcla y el número de puestos varían de un jueves a otro.',
          'Het aanbod en aantal kramen verschillen per marktdag.',
          'Utbud och antal stånd varierar mellan olika marknadsdagar.'
        )
      }
    ]
  },
  stalls: {
    eyebrow: l(
      'What to expect',
      'Was euch erwartet',
      'Qué podéis encontrar',
      'Wat u kunt verwachten',
      'Vad ni kan förvänta er'
    ),
    title: l(
      'A working weekly market, not a curated craft fair',
      'Ein echter Wochenmarkt, keine kuratierte Kunsthandwerksmesse',
      'Un mercadillo semanal, no una feria artesanal seleccionada',
      'Een gewone weekmarkt, geen samengestelde ambachtsbeurs',
      'En vanlig veckomarknad, inte en utvald hantverksmässa'
    ),
    intro: l(
      'The attraction is the mixture. Some stalls serve everyday village needs, while others appeal more directly to visitors. Product origins and makers differ, so ask when local production matters to you.',
      'Der Reiz liegt in der Mischung. Einige Stände decken alltägliche Bedürfnisse im Ort, andere richten sich stärker an Besucher. Herkunft und Hersteller unterscheiden sich – fragt nach, wenn euch lokale Produktion wichtig ist.',
      'El interés está en la mezcla. Algunos puestos cubren necesidades cotidianas del pueblo y otros se orientan más al visitante. El origen y los productores varían; preguntad si para vosotros es importante que algo sea local.',
      'De charme zit in de mix. Sommige kramen voorzien in dagelijkse behoeften van het dorp, andere richten zich meer op bezoekers. Herkomst en makers verschillen, dus vraag ernaar als lokale productie voor u belangrijk is.',
      'Det intressanta är blandningen. Vissa stånd fyller byns vardagsbehov medan andra riktar sig mer till besökare. Ursprung och tillverkare varierar, så fråga om lokal produktion är viktig för er.'
    ),
    labels: {
      expect: l('You may find', 'Mögliche Angebote', 'Podéis encontrar', 'U kunt vinden', 'Ni kan hitta'),
      remember: l('Keep in mind', 'Gut zu wissen', 'Tened en cuenta', 'Houd rekening met', 'Tänk på')
    },
    items: [
      {
        number: '01',
        title: l(
          'Food & produce',
          'Lebensmittel & Frisches',
          'Alimentación y productos frescos',
          'Eten & verse producten',
          'Mat & färska råvaror'
        ),
        summary: l(
          'Fruit, vegetables, olives, cheese, herbs, preserves, and other foods may form part of the weekly mix.',
          'Obst, Gemüse, Oliven, Käse, Kräuter, Eingemachtes und weitere Lebensmittel können Teil des wöchentlichen Angebots sein.',
          'Fruta, verdura, aceitunas, queso, hierbas, conservas y otros alimentos pueden formar parte de la oferta semanal.',
          'Fruit, groenten, olijven, kaas, kruiden, conserven en andere voedingsmiddelen kunnen deel uitmaken van het wekelijkse aanbod.',
          'Frukt, grönsaker, oliver, ost, örter, konserver och andra livsmedel kan ingå i veckans utbud.'
        ),
        expect: l(
          'Seasonal variation and a changing selection between sellers.',
          'Saisonale Unterschiede und ein wechselndes Angebot der Händler.',
          'Variación estacional y una selección que cambia según los vendedores.',
          'Seizoensverschillen en een wisselend aanbod per verkoper.',
          'Säsongsvariation och ett utbud som skiftar mellan säljarna.'
        ),
        remember: l(
          'Do not assume every product is grown or made in Frigiliana; ask the seller about its origin.',
          'Geht nicht davon aus, dass jedes Produkt in Frigiliana erzeugt wurde; fragt den Händler nach der Herkunft.',
          'No deis por hecho que todo se cultiva o elabora en Frigiliana; preguntad al vendedor por el origen.',
          'Ga er niet van uit dat ieder product in Frigiliana is geteeld of gemaakt; vraag de verkoper naar de herkomst.',
          'Utgå inte från att varje produkt odlats eller tillverkats i Frigiliana; fråga säljaren om ursprunget.'
        )
      },
      {
        number: '02',
        title: l(
          'Clothing & everyday goods',
          'Kleidung & Alltagswaren',
          'Ropa y artículos cotidianos',
          'Kleding & dagelijkse artikelen',
          'Kläder & vardagsvaror'
        ),
        summary: l(
          'Clothing, footwear, textiles, accessories, and household items are a normal part of the market.',
          'Kleidung, Schuhe, Textilien, Accessoires und Haushaltsartikel gehören ganz selbstverständlich zum Markt.',
          'La ropa, el calzado, los textiles, los accesorios y los artículos domésticos forman parte habitual del mercado.',
          'Kleding, schoenen, textiel, accessoires en huishoudelijke artikelen zijn een normaal onderdeel van de markt.',
          'Kläder, skor, textilier, accessoarer och hushållsvaror är en vanlig del av marknaden.'
        ),
        expect: l(
          'Practical products alongside more visitor-oriented stalls.',
          'Praktische Produkte neben stärker auf Besucher ausgerichteten Ständen.',
          'Productos prácticos junto a puestos más orientados al visitante.',
          'Praktische producten naast kramen die meer op bezoekers zijn gericht.',
          'Praktiska varor bredvid stånd som riktar sig mer till besökare.'
        ),
        remember: l(
          'This everyday layer is part of what makes it a local weekly market.',
          'Gerade diese Alltagsebene macht ihn zu einem lokalen Wochenmarkt.',
          'Esta vertiente cotidiana es parte de lo que lo convierte en un mercadillo local.',
          'Juist dit dagelijkse karakter maakt het tot een lokale weekmarkt.',
          'Den vardagliga delen är en del av det som gör det till en lokal veckomarknad.'
        )
      },
      {
        number: '03',
        title: l(
          'Gifts & regional products',
          'Geschenke & regionale Produkte',
          'Regalos y productos regionales',
          'Cadeaus & regionale producten',
          'Presenter & regionala produkter'
        ),
        summary: l(
          'Depending on the day, you may see ceramics, leather goods, jewellery, decorative pieces, or packaged foods.',
          'Je nach Markttag findet ihr möglicherweise Keramik, Lederwaren, Schmuck, Dekoration oder verpackte Lebensmittel.',
          'Según el día, podéis encontrar cerámica, artículos de cuero, bisutería, decoración o alimentos envasados.',
          'Afhankelijk van de dag kunt u keramiek, lederwaren, sieraden, decoratie of verpakte voedingsmiddelen vinden.',
          'Beroende på dagen kan ni hitta keramik, lädervaror, smycken, dekoration eller förpackade livsmedel.'
        ),
        expect: l(
          'A mixture of handmade, commercially produced, local, and non-local goods.',
          'Eine Mischung aus handgefertigten, industriellen, lokalen und nicht lokalen Waren.',
          'Una mezcla de productos artesanales, comerciales, locales y de otros lugares.',
          'Een mix van handgemaakte, commerciële, lokale en niet-lokale goederen.',
          'En blandning av handgjorda, kommersiella, lokala och icke-lokala varor.'
        ),
        remember: l(
          'For a specifically handmade piece, ask who made it and where.',
          'Wenn ihr gezielt Handarbeit sucht, fragt nach Hersteller und Herstellungsort.',
          'Si buscáis una pieza artesanal, preguntad quién la hizo y dónde.',
          'Zoekt u specifiek handwerk, vraag dan wie het heeft gemaakt en waar.',
          'Om ni söker något särskilt handgjort, fråga vem som gjort det och var.'
        )
      }
    ]
  },
  morning: {
    title: l(
      'A simple Thursday-morning plan',
      'Ein einfacher Plan für Donnerstagvormittag',
      'Un plan sencillo para el jueves por la mañana',
      'Een eenvoudig plan voor donderdagochtend',
      'En enkel plan för torsdagsförmiddagen'
    ),
    steps: [
      {
        num: '01',
        title: l(
          'Confirm the market',
          'Markttermin bestätigen',
          'Confirmad el mercado',
          'Bevestig de markt',
          'Bekräfta marknaden'
        ),
        text: l(
          'If the market is the main reason for your trip, check current local information, especially around holidays and large events.',
          'Wenn der Markt der Hauptgrund für eure Fahrt ist, prüft die aktuellen lokalen Informationen – besonders rund um Feiertage und große Veranstaltungen.',
          'Si el mercado es el motivo principal de vuestra visita, comprobad la información local actual, sobre todo en festivos y durante grandes eventos.',
          'Is de markt de belangrijkste reden voor uw bezoek, controleer dan actuele lokale informatie, vooral rond feestdagen en grote evenementen.',
          'Om marknaden är huvudskälet till resan, kontrollera aktuella lokala uppgifter, särskilt kring helgdagar och större evenemang.'
        )
      },
      {
        num: '02',
        title: l(
          'Arrive in the morning',
          'Am Vormittag ankommen',
          'Llegad por la mañana',
          'Kom in de ochtend',
          'Kom på förmiddagen'
        ),
        text: l(
          'Allow time for parking and do not schedule a tightly timed reservation immediately after arrival.',
          'Plant Zeit für die Parkplatzsuche ein und legt direkt nach der Ankunft keinen Termin mit engem Zeitfenster.',
          'Dejad tiempo para aparcar y no programéis una reserva con horario ajustado justo después de llegar.',
          'Houd tijd vrij voor parkeren en plan niet direct na aankomst een reservering met een strak tijdstip.',
          'Lägg in tid för parkering och boka inget med snäv starttid direkt efter ankomsten.'
        )
      },
      {
        num: '03',
        title: l(
          'Browse without a checklist',
          'Ohne Einkaufsliste stöbern',
          'Recorredlo sin lista cerrada',
          'Kijk rond zonder vaste lijst',
          'Strosa utan fast lista'
        ),
        text: l(
          'The selection changes. Let the day’s stalls determine what is worth a closer look.',
          'Das Angebot wechselt. Lasst die Stände des Tages bestimmen, was einen genaueren Blick verdient.',
          'La oferta cambia. Dejad que los puestos de ese día os indiquen qué merece una mirada más detenida.',
          'Het aanbod verandert. Laat de kramen van die dag bepalen wat een nadere blik waard is.',
          'Utbudet skiftar. Låt dagens stånd avgöra vad som är värt att titta närmare på.'
        )
      },
      {
        num: '04',
        title: l(
          'Continue into the village',
          'Weiter in den Ort gehen',
          'Seguid hacia el pueblo',
          'Loop verder het dorp in',
          'Fortsätt in i byn'
        ),
        text: l(
          'From the plaza, continue through the historic quarter and leave enough time for coffee or lunch.',
          'Geht von der Plaza weiter durch die Altstadt und lasst ausreichend Zeit für Kaffee oder Mittagessen.',
          'Desde la plaza, continuad por el casco histórico y dejad tiempo suficiente para un café o almorzar.',
          'Loop vanaf het plein verder door de oude kern en houd voldoende tijd over voor koffie of lunch.',
          'Fortsätt från torget genom gamla stan och lämna gott om tid för kaffe eller lunch.'
        )
      }
    ],
    faqTitle: l(
      'Questions about the market',
      'Fragen zum Wochenmarkt',
      'Preguntas sobre el mercado',
      'Vragen over de markt',
      'Frågor om marknaden'
    ),
    faq: [
      {
        question: l(
          'Does the market take place every Thursday?',
          'Findet der Markt jeden Donnerstag statt?',
          '¿Se celebra todos los jueves?',
          'Is de markt iedere donderdag?',
          'Hålls marknaden varje torsdag?'
        ),
        answer: l(
          'Thursday morning is the regular schedule, but holidays, weather, municipal arrangements, and major events can cause changes. Check locally if your visit depends on it.',
          'Donnerstagvormittag ist der reguläre Termin. Feiertage, Wetter, kommunale Regelungen und große Veranstaltungen können jedoch zu Änderungen führen. Prüft den Termin lokal, wenn euer Besuch davon abhängt.',
          'El jueves por la mañana es el horario habitual, pero los festivos, el tiempo, las decisiones municipales y los grandes eventos pueden provocar cambios. Comprobadlo localmente si vuestra visita depende de ello.',
          'Donderdagochtend is het gebruikelijke moment, maar feestdagen, weer, gemeentelijke regelingen en grote evenementen kunnen wijzigingen veroorzaken. Controleer dit lokaal als uw bezoek ervan afhangt.',
          'Torsdag förmiddag är den ordinarie tiden, men helgdagar, väder, kommunala beslut och större evenemang kan innebära ändringar. Kontrollera lokalt om besöket beror på marknaden.'
        )
      },
      {
        question: l(
          'Can I pay by card?',
          'Kann ich mit Karte bezahlen?',
          '¿Se puede pagar con tarjeta?',
          'Kan ik met kaart betalen?',
          'Kan jag betala med kort?'
        ),
        answer: l(
          'Payment options differ by seller. Carry some small-denomination cash and ask before buying rather than assuming card payment is available.',
          'Die Zahlungsmöglichkeiten unterscheiden sich je nach Händler. Nehmt etwas Bargeld in kleinen Scheinen mit und fragt vor dem Kauf, statt Kartenzahlung vorauszusetzen.',
          'Las formas de pago dependen de cada vendedor. Llevad algo de efectivo en billetes pequeños y preguntad antes de comprar en lugar de dar por hecho que aceptan tarjeta.',
          'Betaalmogelijkheden verschillen per verkoper. Neem wat contant geld in kleine bedragen mee en vraag vóór aankoop of kaartbetaling mogelijk is.',
          'Betalsätt varierar mellan säljarna. Ta med lite kontanter i mindre valörer och fråga före köpet i stället för att utgå från kortbetalning.'
        )
      },
      {
        question: l(
          'Is there also a Sunday market?',
          'Gibt es auch einen Sonntagsmarkt?',
          '¿También hay mercado los domingos?',
          'Is er ook een zondagsmarkt?',
          'Finns det också en söndagsmarknad?'
        ),
        answer: l(
          'Do not confuse the regular Thursday market with artisan, cultural, or seasonal markets that may be announced for particular Sundays or event dates. Those separate events do not follow the same dependable weekly schedule.',
          'Verwechselt den regulären Donnerstagsmarkt nicht mit Kunsthandwerks-, Kultur- oder Saisonmärkten, die für einzelne Sonntage oder Veranstaltungstermine angekündigt werden können. Diese separaten Veranstaltungen folgen keinem ebenso verlässlichen Wochenrhythmus.',
          'No confundáis el mercado habitual de los jueves con mercados artesanales, culturales o estacionales que pueden anunciarse para domingos concretos o fechas de eventos. Esas actividades no siguen el mismo calendario semanal.',
          'Verwar de vaste donderdagmarkt niet met ambachts-, cultuur- of seizoensmarkten die op bepaalde zondagen of evenementendata kunnen worden aangekondigd. Die afzonderlijke evenementen volgen niet hetzelfde vaste weekschema.',
          'Blanda inte ihop den ordinarie torsdagsmarknaden med hantverks-, kultur- eller säsongsmarknader som kan annonseras för vissa söndagar eller evenemangsdatum. De följer inte samma fasta veckoschema.'
        )
      },
      {
        question: l(
          'Is the market accessible?',
          'Ist der Markt barrierefrei erreichbar?',
          '¿El mercado es accesible?',
          'Is de markt toegankelijk?',
          'Är marknaden tillgänglig?'
        ),
        answer: l(
          'The plaza is in the lower village and easier to reach than many old-town lanes, but crowding, stall layout, kerbs, and the route from parking can still matter. The historic walk afterwards includes slopes, uneven surfaces, and steps.',
          'Die Plaza liegt im unteren Ort und ist leichter erreichbar als viele Altstadtgassen. Gedränge, Standaufbau, Bordsteine und der Weg vom Parkplatz können dennoch relevant sein. Der anschließende Altstadtweg enthält Steigungen, unebenen Untergrund und Stufen.',
          'La plaza está en la zona baja y es más fácil de alcanzar que muchas calles del casco histórico, pero la afluencia, la disposición de los puestos, los bordillos y el recorrido desde el aparcamiento pueden influir. El paseo posterior incluye cuestas, suelo irregular y escalones.',
          'Het plein ligt in het lagere dorp en is eenvoudiger bereikbaar dan veel straatjes in de oude kern. Drukte, kraamindeling, stoepranden en de route vanaf de parkeerplek kunnen toch belangrijk zijn. De wandeling daarna bevat hellingen, ongelijke ondergrond en trappen.',
          'Torget ligger i den nedre byn och är lättare att nå än många gränder i gamla stan. Trängsel, ståndens placering, trottoarkanter och vägen från parkeringen kan ändå spela roll. Promenaden därefter innehåller lutningar, ojämnt underlag och trappor.'
        )
      }
    ]
  },
  ingenio: {
    eyebrow: l(
      'A Frigiliana product',
      'Ein Produkt aus Frigiliana',
      'Un producto de Frigiliana',
      'Een product uit Frigiliana',
      'En produkt från Frigiliana'
    ),
    title: l(
      'Miel de caña belongs to the village story',
      'Miel de Caña gehört zur Geschichte des Ortes',
      'La miel de caña forma parte de la historia del pueblo',
      'Miel de caña hoort bij het verhaal van het dorp',
      'Miel de caña hör till byns historia'
    ),
    body: l(
      'El Ingenio houses the Nuestra Señora del Carmen cane-syrup factory, described by Frigiliana’s official tourism office as the only working factory of its kind in Europe. Its historic machinery and production make miel de caña part of Frigiliana’s living identity. The building is a working production site, so do not assume public access; special openings may be announced separately.',
      'Im El Ingenio arbeitet die Zuckerrohrsirupfabrik Nuestra Señora del Carmen, die das offizielle Tourismusbüro Frigilianas als einzige noch aktive Fabrik ihrer Art in Europa beschreibt. Historische Maschinen und laufende Produktion machen Miel de Caña zu einem lebendigen Teil der Ortsidentität. Das Gebäude ist eine Produktionsstätte; geht deshalb nicht von regulärem Publikumszugang aus. Besondere Öffnungen können separat angekündigt werden.',
      'El Ingenio alberga la fábrica de miel de caña Nuestra Señora del Carmen, descrita por la oficina oficial de turismo de Frigiliana como la única fábrica activa de este tipo en Europa. Su maquinaria histórica y la producción actual convierten la miel de caña en parte viva de la identidad local. El edificio es un espacio de producción; no deis por hecho que se puede visitar, aunque pueden anunciarse aperturas especiales.',
      'El Ingenio huisvest de rietstroopfabriek Nuestra Señora del Carmen, door het officiële toeristenbureau van Frigiliana omschreven als de enige nog werkende fabriek van dit type in Europa. Historische machines en huidige productie maken miel de caña tot een levend onderdeel van de dorpsidentiteit. Het gebouw is een productielocatie; ga daarom niet uit van reguliere toegang. Bijzondere openstellingen kunnen apart worden aangekondigd.',
      'El Ingenio rymmer fabriken Nuestra Señora del Carmen som tillverkar sockerrörssirap och av Frigilianas officiella turistbyrå beskrivs som Europas enda verksamma fabrik av sitt slag. Historiska maskiner och pågående produktion gör miel de caña till en levande del av byns identitet. Byggnaden är en produktionsplats, så utgå inte från allmän tillgång; särskilda öppningar kan meddelas separat.'
    ),
    cta: l(
      'Read the official monument information',
      'Offizielle Informationen zum Bauwerk',
      'Consultar información oficial del monumento',
      'Lees de officiële informatie',
      'Läs den officiella informationen'
    ),
    imageAlt: l(
      'Historic brick arch and whitewashed houses in Frigiliana',
      'Historischer Ziegelbogen und weiße Häuser in Frigiliana',
      'Arco histórico de ladrillo y casas blancas de Frigiliana',
      'Historische bakstenen boog en witte huizen in Frigiliana',
      'Historisk tegelbåge och vitkalkade hus i Frigiliana'
    )
  },
  marketTypes: {
    eyebrow: l(
      'Avoid the mix-up',
      'Nicht verwechseln',
      'No los confundáis',
      'Haal ze niet door elkaar',
      'Blanda inte ihop dem'
    ),
    title: l(
      'One weekly market, other occasional events',
      'Ein Wochenmarkt, weitere einzelne Veranstaltungen',
      'Un mercado semanal y otros eventos puntuales',
      'Eén weekmarkt en andere losse evenementen',
      'En veckomarknad och andra enstaka evenemang'
    ),
    body: l(
      'The Thursday market is the regular reference point. Artisan markets, festival markets, and special food or cultural events are different formats with their own dates, locations, and opening hours. Never use an old event announcement as proof that a separate market still runs today.',
      'Der Donnerstagsmarkt ist der reguläre Orientierungspunkt. Kunsthandwerksmärkte, Festivalmärkte sowie besondere Kulinarik- oder Kulturveranstaltungen sind eigene Formate mit eigenen Terminen, Orten und Öffnungszeiten. Eine alte Veranstaltungsankündigung ist kein Beleg dafür, dass ein separater Markt heute noch stattfindet.',
      'El mercado de los jueves es la referencia habitual. Los mercados artesanales, los de festivales y los eventos gastronómicos o culturales son formatos distintos, con fechas, lugares y horarios propios. Un anuncio antiguo no demuestra que un mercado separado siga celebrándose actualmente.',
      'De donderdagmarkt is het vaste uitgangspunt. Ambachtsmarkten, festivalmarkten en bijzondere culinaire of culturele evenementen zijn andere formats met eigen data, locaties en openingstijden. Een oude aankondiging bewijst niet dat een afzonderlijke markt vandaag nog bestaat.',
      'Torsdagsmarknaden är den ordinarie utgångspunkten. Hantverksmarknader, festivalmarknader och särskilda mat- eller kulturevenemang är andra format med egna datum, platser och öppettider. En gammal evenemangsannons bevisar inte att en separat marknad fortfarande hålls idag.'
    )
  },
  liveInfo: {
    eyebrow: l(
      'Check before travelling',
      'Vor der Fahrt prüfen',
      'Comprobad antes de viajar',
      'Controleer vóór vertrek',
      'Kontrollera före resan'
    ),
    title: l(
      'Use current local information',
      'Aktuelle lokale Informationen nutzen',
      'Utilizad información local actual',
      'Gebruik actuele lokale informatie',
      'Använd aktuell lokal information'
    ),
    intro: l(
      'For holiday changes, special events, or access questions, use Frigiliana’s official tourism channels. The map is useful for orientation, but current signs and municipal notices take priority on the day.',
      'Nutzt für Feiertagsänderungen, Sonderveranstaltungen oder Fragen zur Erreichbarkeit die offiziellen Tourismuskanäle Frigilianas. Der Ortsplan hilft bei der Orientierung; am Markttag haben aktuelle Schilder und kommunale Hinweise Vorrang.',
      'Para cambios por festivos, eventos especiales o dudas de acceso, consultad los canales oficiales de turismo de Frigiliana. El plano sirve para orientarse, pero ese día tienen prioridad las señales y los avisos municipales actuales.',
      'Gebruik voor wijzigingen rond feestdagen, bijzondere evenementen of bereikbaarheidsvragen de officiële toeristische kanalen van Frigiliana. De kaart helpt bij oriëntatie, maar actuele borden en gemeentelijke berichten hebben op de dag zelf voorrang.',
      'För ändringar vid helgdagar, särskilda evenemang eller tillgänglighetsfrågor bör ni använda Frigilianas officiella turistkanaler. Kartan hjälper med orientering, men aktuella skyltar och kommunala meddelanden gäller på dagen.'
    ),
    checked: l(
      'Editorial check · July 2026',
      'Redaktionell geprüft · Juli 2026',
      'Revisión editorial · julio de 2026',
      'Redactioneel gecontroleerd · juli 2026',
      'Redaktionellt kontrollerad · juli 2026'
    ),
    links: [
      {
        key: 'officialTourism',
        label: l(
          'Official Frigiliana tourism office',
          'Offizielles Tourismusbüro Frigiliana',
          'Oficina oficial de turismo de Frigiliana',
          'Officieel toeristenbureau van Frigiliana',
          'Frigilianas officiella turistbyrå'
        ),
        text: l(
          'Current destination information and contact details.',
          'Aktuelle Ortsinformationen und Kontaktdaten.',
          'Información actual del destino y datos de contacto.',
          'Actuele bestemmingsinformatie en contactgegevens.',
          'Aktuell destinationsinformation och kontaktuppgifter.'
        )
      },
      {
        key: 'officialStreetMap',
        label: l(
          'Official street map',
          'Offizieller Ortsplan',
          'Callejero oficial',
          'Officiële stratenkaart',
          'Officiell gatukarta'
        ),
        text: l(
          'Orientate between the lower village and historic quarter.',
          'Orientierung zwischen unterem Ort und historischer Altstadt.',
          'Orientación entre la zona baja y el casco histórico.',
          'Oriëntatie tussen het lagere dorp en de oude kern.',
          'Orientering mellan den nedre byn och gamla stan.'
        )
      }
    ]
  },
  related: {
    title: l(
      'Plan the rest of the visit',
      'Den restlichen Besuch planen',
      'Planificad el resto de la visita',
      'Plan de rest van het bezoek',
      'Planera resten av besöket'
    ),
    links: [
      {
        token: 'frigiliana_parking',
        label: l(
          'Parking in Frigiliana',
          'Parken in Frigiliana',
          'Aparcamiento en Frigiliana',
          'Parkeren in Frigiliana',
          'Parkering i Frigiliana'
        )
      },
      {
        token: 'frigiliana_stairs',
        label: l(
          'Streets, slopes & stairs',
          'Gassen, Steigungen & Treppen',
          'Calles, cuestas y escaleras',
          'Straten, hellingen & trappen',
          'Gränder, lutningar & trappor'
        )
      },
      {
        token: 'getting_to_frigiliana',
        label: l(
          'Getting to Frigiliana',
          'Anreise nach Frigiliana',
          'Cómo llegar a Frigiliana',
          'Naar Frigiliana reizen',
          'Resa till Frigiliana'
        )
      },
      {
        token: 'location_frigiliana',
        label: l(
          'Frigiliana guide',
          'Frigiliana-Guide',
          'Guía de Frigiliana',
          'Frigiliana-gids',
          'Frigiliana-guide'
        )
      }
    ]
  },
  closing: {
    title: l(
      'Let the market begin the day, not fill it.',
      'Lasst den Markt den Tag eröffnen, nicht ausfüllen.',
      'Dejad que el mercado empiece el día, no que lo ocupe entero.',
      'Laat de markt de dag beginnen, niet vullen.',
      'Låt marknaden inleda dagen, inte fylla hela dagen.'
    ),
    lead: l(
      'The best market morning continues naturally into Frigiliana’s lanes, viewpoints, cafés, and lunch tables.',
      'Der schönste Marktvormittag geht ganz selbstverständlich in Frigilianas Gassen, Aussichtspunkte, Cafés und Mittagstische über.',
      'La mejor mañana de mercado continúa de forma natural por las calles, miradores, cafeterías y mesas de Frigiliana.',
      'De beste marktochtend loopt vanzelf door in de straatjes, uitzichtpunten, cafés en lunchplekken van Frigiliana.',
      'Den bästa marknadsförmiddagen fortsätter naturligt genom Frigilianas gränder, utsiktsplatser, kaféer och lunchbord.'
    ),
    staysCta: l(
      'View AMARA stays',
      'AMARA-Unterkünfte ansehen',
      'Ver alojamientos AMARA',
      'Bekijk AMARA-verblijven',
      'Se AMARA-boenden'
    ),
    guideCta: l(
      'Explore Frigiliana',
      'Frigiliana entdecken',
      'Descubrir Frigiliana',
      'Ontdek Frigiliana',
      'Upptäck Frigiliana'
    )
  }
} as const;
