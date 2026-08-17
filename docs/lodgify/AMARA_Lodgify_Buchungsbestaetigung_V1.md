# AMARA Lodgify – Buchungsbestätigung und variable Bedingungen

Arbeitsvorlage, Version 1.0 · 17. August 2026 · nicht öffentlich

## Zweck und Abgrenzung

Die Website enthält ausschließlich die allgemeinen, unterkunftsübergreifenden [Buchungsbedingungen](https://amara-lodging.es/de/booking-stay-terms). Diese Lodgify-Vorlage ergänzt sie um die Angaben, die sich je Unterkunft oder je Buchung unterscheiden.

Die Platzhalter in eckigen Klammern sind noch keine Lodgify-Feldnamen. Vor der Aktivierung müssen sie den tatsächlich verfügbaren dynamischen Feldern zugeordnet oder als feste Unterkunftstexte angelegt werden. Kein Platzhalter darf in einer Nachricht an Gäste stehen bleiben.

## 1. Einmal je Unterkunft in Lodgify pflegen

- `[UNTERKUNFT_NAME]`
- `[VOLLSTAENDIGE_ADRESSE]`
- `[REGISTRIERUNGSNUMMER]`
- `[MAXIMALE_BELEGUNG]`
- `[REGULAERER_CHECK_IN]` und `[REGULAERER_CHECK_OUT]`
- `[ZUGANG_UND_STUFEN]`: nur sachliche, unterkunftsspezifische Zugangsinformationen
- `[HAUSTIERREGEL]`: Erlaubnis, Größenbeschränkung, vorherige Bestätigung und Gebühr
- `[UNTERKUNFTSREGELN]`: nur wesentliche Regeln, die von den allgemeinen Buchungsbedingungen abweichen oder sie konkretisieren
- `[KAUTION_ODER_AUTORISIERUNG]`: nur wenn für diese Unterkunft vorgesehen

### Aktueller Datenstand aus der Website

| Unterkunft | Adresse | Registrierung | Max. Gäste | Reguläre Zeiten | Haustiere |
|---|---|---:|---:|---|---|
| AMARA Farah | Calle Chorruelo 5, 29788 Frigiliana, Andalusien, Spanien | A/MA/01767 | 2 | 15:00 / 11:00 | nicht erlaubt |
| AMARA Lounis | Calle Chorruelo 5, 29788 Frigiliana, Andalusien, Spanien | A/MA/01767 | 2 | 15:00 / 11:00 | kleine Hunde auf Anfrage, 15 €/Tag |
| AMARA Zaid | Calle Chorruelo 5, 29788 Frigiliana, Andalusien, Spanien | A/MA/01767 | 2 | 15:00 / 11:00 | nicht erlaubt |
| AMARA Maha | Calle Chorruelo 5, 29788 Frigiliana, Andalusien, Spanien | A/MA/01767 | 2 | 15:00 / 11:00 | kleine Hunde auf Anfrage, 15 €/Tag |
| AMARA Playa | Calle Castilla Perez 60, 29780 Nerja, Andalusien, Spanien | VFT/MA/19212 | 2 | 15:00 / 11:00 | nicht erlaubt |
| AMARA Family & Surf | Calle Mar Adriatico 29, 11380 Tarifa, Andalusien, Spanien | VFT/CA/17038 | 4 | 15:00 / 11:00 | nicht erlaubt |

Vor der Übernahme in Lodgify sind Anschriften, Registrierungsnummern, Belegung und Haustierregeln noch einmal gegen den aktuellen operativen Stand zu prüfen.

## 2. Für jede Buchung automatisch einsetzen

- `[BUCHUNGSNUMMER]`
- `[HAUPTGAST]`
- `[ANREISEDATUM]`, `[VEREINBARTE_CHECK_IN_ZEIT]`
- `[ABREISEDATUM]`, `[VEREINBARTE_CHECK_OUT_ZEIT]`
- `[GAESTEZAHL]`
- `[GESAMTPREIS]`, einschließlich der ausgewiesenen Steuern und obligatorischen Gebühren
- `[BEREITS_BEZAHLT]`
- `[RESTBETRAG]` und `[FAELLIG_AM]`
- `[ZAHLUNGSBEDINGUNGEN]`
- `[STORNIERUNGSBEDINGUNGEN]`, einschließlich Erstattung, Nichterscheinen und vorzeitiger Abreise
- `[GEBUCHTE_EXTRAS]`
- `[BESTAETIGTE_SONDERVEREINBARUNGEN]`, zum Beispiel Haustier, früher Check-in oder später Check-out

## 3. Textvorlagen für die Buchungsbestätigung

### Deutsch

**Ihre Buchungsdetails**

Vielen Dank für Ihre Direktbuchung bei AMARA Lodging. Bitte bewahren Sie diese Buchungsbestätigung auf.

**Reservierung**

- Buchungsnummer: `[BUCHUNGSNUMMER]`
- Hauptgast: `[HAUPTGAST]`
- Unterkunft: `[UNTERKUNFT_NAME]`
- Anschrift: `[VOLLSTAENDIGE_ADRESSE]`
- Touristische Registrierung: `[REGISTRIERUNGSNUMMER]`
- Aufenthalt: `[ANREISEDATUM]`, ab `[VEREINBARTE_CHECK_IN_ZEIT]` Uhr, bis `[ABREISEDATUM]`, `[VEREINBARTE_CHECK_OUT_ZEIT]` Uhr
- Gäste: `[GAESTEZAHL]` von maximal `[MAXIMALE_BELEGUNG]`

**Preis und Zahlung**

- Gesamtpreis: `[GESAMTPREIS]`
- Bereits bezahlt: `[BEREITS_BEZAHLT]`
- Restbetrag: `[RESTBETRAG]`, fällig am `[FAELLIG_AM]`
- Zahlungsbedingungen: `[ZAHLUNGSBEDINGUNGEN]`

**Stornierung und Änderungen**

Für diese Buchung gelten folgende Stornierungs-, Erstattungs-, No-show- und Abreisebedingungen: `[STORNIERUNGSBEDINGUNGEN]`

**Angaben zu Ihrer Unterkunft**

- Zugang: `[ZUGANG_UND_STUFEN]`
- Haustiere: `[HAUSTIERREGEL]`
- Kaution oder Zahlungsautorisierung: `[KAUTION_ODER_AUTORISIERUNG]`
- Gebuchte Extras: `[GEBUCHTE_EXTRAS]`
- Wesentliche Unterkunftsregeln: `[UNTERKUNFTSREGELN]`
- Bestätigte Sondervereinbarungen: `[BESTAETIGTE_SONDERVEREINBARUNGEN]`

Ergänzend gelten die allgemeinen Buchungsbedingungen von AMARA Lodging: https://amara-lodging.es/de/booking-stay-terms

### English

**Your booking details**

Thank you for booking directly with AMARA Lodging. Please keep this booking confirmation for your records.

**Reservation**

- Booking number: `[BOOKING_NUMBER]`
- Lead guest: `[LEAD_GUEST]`
- Accommodation: `[PROPERTY_NAME]`
- Address: `[FULL_ADDRESS]`
- Tourist registration: `[REGISTRATION_NUMBER]`
- Stay: `[ARRIVAL_DATE]` from `[AGREED_CHECK_IN_TIME]` to `[DEPARTURE_DATE]` at `[AGREED_CHECK_OUT_TIME]`
- Guests: `[GUEST_COUNT]` of a maximum of `[MAXIMUM_OCCUPANCY]`

**Price and payment**

- Total price: `[TOTAL_PRICE]`
- Paid: `[AMOUNT_PAID]`
- Balance: `[BALANCE_DUE]`, due on `[DUE_DATE]`
- Payment terms: `[PAYMENT_TERMS]`

**Cancellation and changes**

The following cancellation, refund, no-show and early-departure terms apply to this booking: `[CANCELLATION_TERMS]`

**Your accommodation**

- Access: `[ACCESS_AND_STEPS]`
- Pets: `[PET_POLICY]`
- Deposit or payment authorisation: `[DEPOSIT_OR_AUTHORISATION]`
- Booked extras: `[BOOKED_EXTRAS]`
- Essential property rules: `[PROPERTY_RULES]`
- Confirmed special arrangements: `[CONFIRMED_SPECIAL_ARRANGEMENTS]`

The general AMARA Lodging Booking Terms also apply: https://amara-lodging.es/en/booking-stay-terms

### Español

**Datos de vuestra reserva**

Gracias por reservar directamente con AMARA Lodging. Conservad esta confirmación de reserva.

**Reserva**

- Número de reserva: `[NUMERO_DE_RESERVA]`
- Huésped principal: `[HUESPED_PRINCIPAL]`
- Alojamiento: `[NOMBRE_DEL_ALOJAMIENTO]`
- Dirección: `[DIRECCION_COMPLETA]`
- Registro turístico: `[NUMERO_DE_REGISTRO]`
- Estancia: del `[FECHA_DE_LLEGADA]`, a partir de las `[HORA_DE_ENTRADA_ACORDADA]`, al `[FECHA_DE_SALIDA]`, hasta las `[HORA_DE_SALIDA_ACORDADA]`
- Huéspedes: `[NUMERO_DE_HUESPEDES]` de un máximo de `[OCUPACION_MAXIMA]`

**Precio y pago**

- Precio total: `[PRECIO_TOTAL]`
- Importe pagado: `[IMPORTE_PAGADO]`
- Saldo pendiente: `[SALDO_PENDIENTE]`, con vencimiento el `[FECHA_DE_VENCIMIENTO]`
- Condiciones de pago: `[CONDICIONES_DE_PAGO]`

**Cancelación y cambios**

Se aplican a esta reserva las siguientes condiciones de cancelación, reembolso, no presentación y salida anticipada: `[CONDICIONES_DE_CANCELACION]`

**Datos del alojamiento**

- Acceso: `[ACCESO_Y_ESCALONES]`
- Mascotas: `[POLITICA_DE_MASCOTAS]`
- Depósito o autorización de pago: `[DEPOSITO_O_AUTORIZACION]`
- Extras reservados: `[EXTRAS_RESERVADOS]`
- Normas esenciales del alojamiento: `[NORMAS_DEL_ALOJAMIENTO]`
- Acuerdos especiales confirmados: `[ACUERDOS_ESPECIALES_CONFIRMADOS]`

También se aplican las Condiciones generales de reserva de AMARA Lodging: https://amara-lodging.es/booking-stay-terms

### Nederlands

**Jullie boekingsgegevens**

Bedankt dat jullie rechtstreeks bij AMARA Lodging hebben geboekt. Bewaar deze boekingsbevestiging goed.

**Reservering**

- Boekingsnummer: `[BOEKINGSNUMMER]`
- Hoofdgast: `[HOOFDGAST]`
- Accommodatie: `[NAAM_ACCOMMODATIE]`
- Adres: `[VOLLEDIG_ADRES]`
- Toeristische registratie: `[REGISTRATIENUMMER]`
- Verblijf: van `[AANKOMSTDATUM]` vanaf `[AFGESPROKEN_INCHECKTIJD]` tot `[VERTREKDATUM]` om `[AFGESPROKEN_UITCHECKTIJD]`
- Gasten: `[AANTAL_GASTEN]` van maximaal `[MAXIMALE_BEZETTING]`

**Prijs en betaling**

- Totaalprijs: `[TOTAALPRIJS]`
- Betaald: `[BETAALD_BEDRAG]`
- Resterend bedrag: `[RESTEREND_BEDRAG]`, te betalen op `[VERVALDATUM]`
- Betalingsvoorwaarden: `[BETALINGSVOORWAARDEN]`

**Annulering en wijzigingen**

Voor deze boeking gelden de volgende voorwaarden voor annulering, terugbetaling, niet verschijnen en vroegtijdig vertrek: `[ANNULERINGSVOORWAARDEN]`

**Gegevens over de accommodatie**

- Toegang: `[TOEGANG_EN_TREDEN]`
- Huisdieren: `[HUISDIERENBELEID]`
- Borg of betaalautorisatie: `[BORG_OF_AUTORISATIE]`
- Geboekte extra’s: `[GEBOEKTE_EXTRAS]`
- Essentiële accommodatieregels: `[ACCOMMODATIEREGELS]`
- Bevestigde bijzondere afspraken: `[BEVESTIGDE_BIJZONDERE_AFSPRAKEN]`

Daarnaast gelden de algemene Boekingsvoorwaarden van AMARA Lodging: https://amara-lodging.es/nl/booking-stay-terms

### Svenska

**Era bokningsuppgifter**

Tack för att ni bokar direkt hos AMARA Lodging. Spara denna bokningsbekräftelse.

**Bokning**

- Bokningsnummer: `[BOKNINGSNUMMER]`
- Huvudgäst: `[HUVUDGAST]`
- Boende: `[BOENDETS_NAMN]`
- Adress: `[FULLSTANDIG_ADRESS]`
- Turistregistrering: `[REGISTRERINGSNUMMER]`
- Vistelse: från `[ANKOMSTDATUM]` kl. `[OVERENSKOMMEN_INCHECKNINGSTID]` till `[AVRESEDATUM]` kl. `[OVERENSKOMMEN_UTCHECKNINGSTID]`
- Gäster: `[ANTAL_GASTER]` av maximalt `[MAXIMAL_BELAGGNING]`

**Pris och betalning**

- Totalpris: `[TOTALPRIS]`
- Betalat: `[BETALAT_BELOPP]`
- Återstående belopp: `[ATERSTAENDE_BELOPP]`, förfaller den `[FORFALLODATUM]`
- Betalningsvillkor: `[BETALNINGSVILLKOR]`

**Avbokning och ändringar**

Följande villkor för avbokning, återbetalning, utebliven ankomst och förtida avresa gäller för bokningen: `[AVBOKNINGSVILLKOR]`

**Uppgifter om boendet**

- Tillträde: `[TILLTRADE_OCH_TRAPPSTEG]`
- Husdjur: `[HUSDJURSREGLER]`
- Deposition eller betalningsauktorisation: `[DEPOSITION_ELLER_AUKTORISATION]`
- Bokade tillval: `[BOKADE_TILLVAL]`
- Viktiga boenderegler: `[BOENDEREGLER]`
- Bekräftade särskilda överenskommelser: `[BEKRAFTADE_SARSKILDA_OVERENSKOMMELSER]`

AMARA Lodgings allmänna Bokningsvillkor gäller också: https://amara-lodging.es/sv/booking-stay-terms

## 4. Vor Aktivierung in Lodgify prüfen

1. Jeden Platzhalter einem Lodgify-Feld oder einem festen Unterkunftsblock zuordnen.
2. Für alle sechs Unterkünfte den Zugang, wesentliche Hausregeln, Haustiere und eine mögliche Kaution freigeben.
3. Sicherstellen, dass der jeweils gebuchte Tarif seine tatsächlichen Zahlungs- und Stornierungsbedingungen einsetzt.
4. Mit einer Testbuchung in jeder Sprache prüfen, dass keine leeren Felder oder Platzhalter ausgegeben werden.
5. Den Link zu den allgemeinen Buchungsbedingungen in Checkout und Buchungsbestätigung anklickbar ausgeben.
