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
  /**
   * The collapsed status line of the warning block. The block stays folded by
   * default; this line carries the count, the highest level and the first
   * headline so the official status is visible without opening it.
   */
  summary: {
    loading: LocalizedText;
    none: LocalizedText;
    unavailable: LocalizedText;
    one: LocalizedText;
    many: LocalizedText;
    chipNone: LocalizedText;
    chipUnknown: LocalizedText;
    levelsShort: { amarillo: LocalizedText; naranja: LocalizedText; rojo: LocalizedText };
  };
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
  unavailableText: l('If the value is missing, the field stays empty; the warnings are directly at AEMET.', 'Fehlt der Wert, bleibt das Feld leer; die Warnungen stehen direkt bei AEMET.', 'Si falta el valor, el campo queda vacío; los avisos están directamente en AEMET.', 'Ontbreekt de waarde, dan blijft het veld leeg; de waarschuwingen staan direct bij AEMET.', 'Saknas värdet lämnas fältet tomt; varningarna finns direkt hos AEMET.'),
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
  summary: {
    loading: l('Official warnings for the Estrecho zone: loading …', 'Amtliche Warnungen für die Zone Estrecho: wird geladen …', 'Avisos oficiales para la zona Estrecho: cargando …', 'Officiële waarschuwingen voor de zone Estrecho: laden …', 'Officiella varningar för zonen Estrecho: laddas …'),
    none: l('Official warnings for the Estrecho zone: none in AEMET’s latest issue', 'Amtliche Warnungen für die Zone Estrecho: keine in der letzten AEMET-Ausgabe', 'Avisos oficiales para la zona Estrecho: ninguno en la última emisión de AEMET', 'Officiële waarschuwingen voor de zone Estrecho: geen in de laatste AEMET-uitgave', 'Officiella varningar för zonen Estrecho: inga i AEMET:s senaste utgåva'),
    unavailable: l('Official warnings for the Estrecho zone: status could not be fetched', 'Amtliche Warnungen für die Zone Estrecho: Status gerade nicht abrufbar', 'Avisos oficiales para la zona Estrecho: estado no disponible ahora mismo', 'Officiële waarschuwingen voor de zone Estrecho: status nu niet op te halen', 'Officiella varningar för zonen Estrecho: status kunde inte hämtas'),
    one: l('Official warnings for the Estrecho zone: 1 warning, level {level}', 'Amtliche Warnungen für die Zone Estrecho: 1 Warnung, Stufe {level}', 'Avisos oficiales para la zona Estrecho: 1 aviso, nivel {level}', 'Officiële waarschuwingen voor de zone Estrecho: 1 waarschuwing, niveau {level}', 'Officiella varningar för zonen Estrecho: 1 varning, nivå {level}'),
    many: l('Official warnings for the Estrecho zone: {count} warnings, highest level {level}', 'Amtliche Warnungen für die Zone Estrecho: {count} Warnungen, höchste Stufe {level}', 'Avisos oficiales para la zona Estrecho: {count} avisos, nivel máximo {level}', 'Officiële waarschuwingen voor de zone Estrecho: {count} waarschuwingen, hoogste niveau {level}', 'Officiella varningar för zonen Estrecho: {count} varningar, högsta nivå {level}'),
    chipNone: l('No warning', 'Keine Warnung', 'Sin aviso', 'Geen waarschuwing', 'Ingen varning'),
    chipUnknown: l('Status open', 'Status offen', 'Estado pendiente', 'Status open', 'Status öppen'),
    levelsShort: {
      amarillo: l('Yellow', 'Gelb', 'Amarillo', 'Geel', 'Gul'),
      naranja: l('Orange', 'Orange', 'Naranja', 'Oranje', 'Orange'),
      rojo: l('Red', 'Rot', 'Rojo', 'Rood', 'Röd')
    }
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
