import type { LocalizedText } from '../types/content';

/**
 * Labels of the official AEMET warning block. The block shows AEMET's own
 * wording unchanged; these strings only name the frame around it — level,
 * phenomenon, validity, source — and the honest empty and error states.
 */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface TarifaWeatherWarningsCopy {
  title: LocalizedText;
  loading: LocalizedText;
  noneTitle: LocalizedText;
  noneText: LocalizedText;
  notListedTitle: LocalizedText;
  notListedText: LocalizedText;
  unavailableTitle: LocalizedText;
  unavailableText: LocalizedText;
  levelLabel: LocalizedText;
  phenomenonLabel: LocalizedText;
  zoneLabel: LocalizedText;
  validLabel: LocalizedText;
  until: LocalizedText;
  sourceLabel: LocalizedText;
  fetchedLabel: LocalizedText;
  verbatimNote: LocalizedText;
  englishLabel: LocalizedText;
  linkLabel: LocalizedText;
  levels: { amarillo: LocalizedText; naranja: LocalizedText; rojo: LocalizedText };
  phenomena: Record<'PR' | 'NE' | 'VI' | 'TO' | 'AT' | 'BT' | 'CO' | 'VS', LocalizedText>;
}

export const tarifaWeatherWarningsCopy: TarifaWeatherWarningsCopy = {
  title: l('Official warnings for the Estrecho zone', 'Amtliche Warnungen für die Zone Estrecho', 'Avisos oficiales para la zona Estrecho', 'Officiële waarschuwingen voor de zone Estrecho', 'Officiella varningar för zonen Estrecho'),
  loading: l('Loading the official warning status …', 'Amtlicher Warnstatus wird geladen …', 'Cargando el estado oficial de avisos …', 'Officiële waarschuwingsstatus wordt geladen …', 'Officiell varningsstatus laddas …'),
  noneTitle: l('No warning for the Estrecho zone in AEMET’s latest issue', 'Keine Warnung für die Zone Estrecho in der letzten AEMET-Ausgabe', 'Sin aviso para la zona Estrecho en la última emisión de AEMET', 'Geen waarschuwing voor de zone Estrecho in de laatste AEMET-uitgave', 'Ingen varning för zonen Estrecho i AEMET:s senaste utgåva'),
  noneText: l('AEMET lists the zone in its current warning set without an active warning. That is a statement about the official warning status, not about the conditions on the beach.', 'AEMET führt die Zone in der aktuellen Warnausgabe ohne aktive Warnung. Das ist eine Aussage über den amtlichen Warnstatus, nicht über die Bedingungen am Strand.', 'AEMET incluye la zona en su emisión de avisos actual sin ningún aviso activo. Eso describe el estado oficial de avisos, no las condiciones en la playa.', 'AEMET vermeldt de zone in de huidige waarschuwingsuitgave zonder actieve waarschuwing. Dat zegt iets over de officiële waarschuwingsstatus, niet over de omstandigheden op het strand.', 'AEMET listar zonen i den aktuella varningsutgåvan utan aktiv varning. Det är ett uttalande om den officiella varningsstatusen, inte om förhållandena på stranden.'),
  notListedTitle: l('The Estrecho zone is not contained in AEMET’s latest issue', 'Die Zone Estrecho ist in der letzten AEMET-Ausgabe nicht enthalten', 'La zona Estrecho no figura en la última emisión de AEMET', 'De zone Estrecho komt niet voor in de laatste AEMET-uitgave', 'Zonen Estrecho finns inte med i AEMET:s senaste utgåva'),
  notListedText: l('We cannot derive a warning status from that. Check the warnings directly with AEMET.', 'Daraus lässt sich kein Warnstatus ableiten. Prüft die Warnungen direkt bei AEMET.', 'De eso no se puede deducir un estado de aviso. Comprobad los avisos directamente en AEMET.', 'Daaruit valt geen waarschuwingsstatus af te leiden. Controleer de waarschuwingen rechtstreeks bij AEMET.', 'Av det går ingen varningsstatus att härleda. Kontrollera varningarna direkt hos AEMET.'),
  unavailableTitle: l('The official warning status could not be fetched right now', 'Der amtliche Warnstatus konnte gerade nicht abgerufen werden', 'No se ha podido obtener el estado oficial de avisos ahora mismo', 'De officiële waarschuwingsstatus kon op dit moment niet worden opgehaald', 'Den officiella varningsstatusen kunde inte hämtas just nu'),
  unavailableText: l('We do not replace it with an assumption. Check the warnings directly with AEMET before you go out.', 'Wir ersetzen ihn nicht durch eine Annahme. Prüft die Warnungen direkt bei AEMET, bevor ihr rausgeht.', 'No lo sustituimos por una suposición. Comprobad los avisos directamente en AEMET antes de salir.', 'We vervangen hem niet door een aanname. Controleer de waarschuwingen rechtstreeks bij AEMET voordat jullie het water op gaan.', 'Vi ersätter den inte med ett antagande. Kontrollera varningarna direkt hos AEMET innan ni går ut.'),
  levelLabel: l('Warning level', 'Warnstufe', 'Nivel de aviso', 'Waarschuwingsniveau', 'Varningsnivå'),
  phenomenonLabel: l('Phenomenon', 'Phänomen', 'Fenómeno', 'Verschijnsel', 'Fenomen'),
  zoneLabel: l('Zone', 'Zone', 'Zona', 'Zone', 'Zon'),
  validLabel: l('Valid', 'Gültig', 'Validez', 'Geldig', 'Giltig'),
  until: l('until', 'bis', 'hasta', 'tot', 'till'),
  sourceLabel: l('Source: AEMET', 'Quelle: AEMET', 'Fuente: AEMET', 'Bron: AEMET', 'Källa: AEMET'),
  fetchedLabel: l('fetched', 'abgerufen', 'obtenido', 'opgehaald', 'hämtat'),
  verbatimNote: l('AEMET wording, reproduced unchanged.', 'Wortlaut von AEMET, unverändert wiedergegeben.', 'Texto de AEMET, reproducido sin cambios.', 'Tekst van AEMET, onveranderd weergegeven.', 'AEMET:s ordalydelse, återgiven oförändrad.'),
  englishLabel: l('English version by AEMET', 'Englische Fassung von AEMET', 'Versión en inglés de AEMET', 'Engelse versie van AEMET', 'Engelsk version från AEMET'),
  linkLabel: l('Open the warnings at AEMET', 'Warnungen bei AEMET öffnen', 'Abrir los avisos en AEMET', 'Open de waarschuwingen bij AEMET', 'Öppna varningarna hos AEMET'),
  levels: {
    amarillo: l('yellow (amarillo)', 'Gelb (amarillo)', 'amarillo', 'geel (amarillo)', 'gul (amarillo)'),
    naranja: l('orange (naranja)', 'Orange (naranja)', 'naranja', 'oranje (naranja)', 'orange (naranja)'),
    rojo: l('red (rojo)', 'Rot (rojo)', 'rojo', 'rood (rojo)', 'röd (rojo)')
  },
  phenomena: {
    PR: l('Rain', 'Regen', 'Lluvias', 'Regen', 'Regn'),
    NE: l('Snow', 'Schnee', 'Nevadas', 'Sneeuw', 'Snö'),
    VI: l('Wind', 'Wind', 'Vientos', 'Wind', 'Vind'),
    TO: l('Thunderstorms', 'Gewitter', 'Tormentas', 'Onweer', 'Åska'),
    AT: l('Maximum temperatures', 'Höchsttemperaturen', 'Temperaturas máximas', 'Maximumtemperaturen', 'Maxtemperaturer'),
    BT: l('Minimum temperatures', 'Tiefsttemperaturen', 'Temperaturas mínimas', 'Minimumtemperaturen', 'Minimitemperaturer'),
    CO: l('Coastal phenomena', 'Küstenphänomene', 'Fenómenos costeros', 'Kustverschijnselen', 'Kustfenomen'),
    VS: l('Suspended dust', 'Staub in der Luft', 'Polvo en suspensión', 'Stof in de lucht', 'Damm i luften')
  }
};
