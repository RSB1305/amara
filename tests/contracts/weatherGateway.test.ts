import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import {
  createAemetForecastRoute,
  fetchAemetDailyForecast,
  normalizeAemetDailyForecast
} from '../../weather-gateway/aemet-forecast.mjs';
import {
  AemetKiteError,
  buildKiteBriefing,
  createKiteBriefingRoute,
  fetchKiteBriefing,
  localHourIso,
  normalizeBeachForecast,
  normalizeHourlyForecast,
  skyCategory
} from '../../weather-gateway/aemet-kite.mjs';
import {
  createZoneWarningsRoute,
  extractCapDocuments,
  fetchZoneWarnings,
  parseCapDocument,
  selectZoneWarnings
} from '../../weather-gateway/aemet-warnings.mjs';
import { gzipSync } from 'node:zlib';

const SECRET = 'unit-test-aemet-key-must-not-leak';
const destinations = [
  { destination: 'frigiliana', locationName: 'Frigiliana', municipalityId: '29053' },
  { destination: 'nerja', locationName: 'Nerja', municipalityId: '29075' },
  { destination: 'tarifa', locationName: 'Tarifa', municipalityId: '11035' }
] as const;

test('Cloudflare Pages dispatches server-owned function and private guide routes', () => {
  const routes = JSON.parse(readFileSync(new URL('../../public/_routes.json', import.meta.url), 'utf8'));
  expect(routes.include).toEqual([
    '/api/booking/*',
    '/api/weather/*',
    '/api/guest/*',
    '/amara-experience/guide*',
    '/en/amara-experience/guide*',
    '/de/amara-experience/guide*',
    '/nl/amara-experience/guide*',
    '/sv/amara-experience/guide*'
  ]);
});

function jsonResponse(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function fetchSequence(...steps: Array<Response | Error>) {
  let index = 0;
  const urls: string[] = [];
  const fetchImpl = (async (input: RequestInfo | URL) => {
    urls.push(String(input));
    const step = steps[index++];
    if (step instanceof Error) throw step;
    if (!step) throw new Error('Unexpected AEMET request.');
    return step;
  }) as typeof fetch;
  return { fetchImpl, urls };
}

const forecastPayload = [{
  nombre: 'Frigiliana',
  elaborado: '2026-08-27T11:20:00',
  prediccion: {
    dia: [
      {
        fecha: '2026-08-27T00:00:00',
        temperatura: { maxima: 31, minima: 21 },
        probPrecipitacion: [{ value: 5 }, { value: 15 }]
      },
      {
        fecha: '2026-08-28T00:00:00',
        temperatura: { maxima: '29', minima: '20' },
        probPrecipitacion: [{ value: 20 }]
      },
      {
        fecha: '2026-08-29T00:00:00',
        temperatura: { maxima: 28, minima: 19 },
        probPrecipitacion: []
      }
    ]
  }
}];

for (const config of destinations) {
  test(`normalizes the two-step AEMET municipality forecast for ${config.locationName}`, async () => {
    const sequence = fetchSequence(
      jsonResponse({
        descripcion: 'exito',
        estado: 200,
        datos: 'https://opendata.aemet.es/opendata/sh/temporary-data'
      }),
      jsonResponse(forecastPayload)
    );

    await expect(fetchAemetDailyForecast({
      apiKey: SECRET,
      destination: config.destination,
      fetchImpl: sequence.fetchImpl
    })).resolves.toEqual({
      destination: config.destination,
      locationName: config.locationName,
      source: { provider: 'AEMET', issuedAt: '2026-08-27T11:20:00' },
      days: [
        { date: '2026-08-27', temperatureMax: 31, temperatureMin: 21, precipitationProbability: 15 },
        { date: '2026-08-28', temperatureMax: 29, temperatureMin: 20, precipitationProbability: 20 },
        { date: '2026-08-29', temperatureMax: 28, temperatureMin: 19, precipitationProbability: null }
      ]
    });

    expect(sequence.urls).toHaveLength(2);
    expect(new URL(sequence.urls[0]).pathname).toBe(
      `/opendata/api/prediccion/especifica/municipio/diaria/${config.municipalityId}`
    );
    expect(new URL(sequence.urls[0]).searchParams.get('api_key')).toBe(SECRET);
    expect(sequence.urls[1]).toBe('https://opendata.aemet.es/opendata/sh/temporary-data');
  });
}

test('keeps the AEMET key and provider details out of public failures', async () => {
  const sequence = fetchSequence(jsonResponse({ descripcion: 'Unauthorized', estado: 401 }, 401));
  const logs: string[] = [];
  const originalConsoleError = console.error;
  console.error = (message) => logs.push(String(message));

  try {
    const response = await createAemetForecastRoute({ fetchImpl: sequence.fetchImpl })({
      request: new Request('https://amara.test/api/weather/frigiliana'),
      env: { AEMET_API_KEY: SECRET }
    });
    expect(response.status).toBe(503);
    expect(response.headers.get('cache-control')).toBe('no-store');
    expect(await response.json()).toEqual({
      error: {
        code: 'weather_data_unavailable',
        message: 'The official forecast is temporarily unavailable.'
      }
    });
  } finally {
    console.error = originalConsoleError;
  }

  expect(logs).toHaveLength(1);
  expect(logs[0]).not.toContain(SECRET);
  expect(JSON.parse(logs[0])).toEqual({
    operation: 'daily-forecast',
    providerStep: 'request_url',
    providerHttpStatus: 401,
    category: 'http'
  });
});

test('fails closed when the server-side AEMET key is absent', async () => {
  let calls = 0;
  const response = await createAemetForecastRoute({
    fetchImpl: (async () => {
      calls += 1;
      return jsonResponse({});
    }) as typeof fetch
  })({
    request: new Request('https://amara.test/api/weather/frigiliana'),
    env: {}
  });

  expect(response.status).toBe(503);
  expect(calls).toBe(0);
});

const dayEntry = (fecha: string, maxima: number | null, minima: number | null) => ({
  fecha,
  temperatura: { maxima, minima },
  probPrecipitacion: [{ value: 0 }]
});

const municipality = (dia: unknown[]) => [{ elaborado: '2026-08-30T10:09:10', prediccion: { dia } }];

test('the normalizer skips days AEMET delivered incomplete and keeps the rest', () => {
  // A gap in the middle of the window used to discard the whole forecast,
  // which is what left Tarifa showing "currently unavailable" all afternoon.
  const forecast = normalizeAemetDailyForecast(municipality([
    dayEntry('2026-08-30', 28, 20),
    { fecha: '2026-08-31', temperatura: {}, probPrecipitacion: [] },
    dayEntry('2026-09-01', 29, 21),
    dayEntry('2026-09-02', 29, 21)
  ]), 'tarifa');

  expect(forecast.days.map((day) => day.date)).toEqual(['2026-08-30', '2026-09-01', '2026-09-02']);
});

test('the normalizer drops today once AEMET stops publishing its temperatures', () => {
  const forecast = normalizeAemetDailyForecast(municipality([
    dayEntry('2026-08-30', null, null),
    dayEntry('2026-08-31', 29, 21),
    dayEntry('2026-09-01', 29, 21)
  ]), 'tarifa');

  expect(forecast.days.map((day) => day.date)).toEqual(['2026-08-31', '2026-09-01']);
});

test('the normalizer still fails when no day is usable', () => {
  expect(() => normalizeAemetDailyForecast(municipality([
    dayEntry('2026-08-30', null, null)
  ]), 'tarifa')).toThrow();
});

/* ---------------------------------------------------------------------------
 * AEMET kite briefing gateway
 * ------------------------------------------------------------------------- */

const KITE_SECRET = 'unit-test-aemet-kite-key-must-not-leak';

type HourSpec = { h: string; t: string; sky: string; wind: [string, string]; gust?: string; rain?: string };

const hourlyDay = (fecha: string, hours: HourSpec[]) => ({
  fecha,
  orto: '07:56',
  ocaso: '20:46',
  estadoCielo: hours.map((hour) => ({ value: hour.sky, periodo: hour.h, descripcion: 'x' })),
  precipitacion: hours.map((hour) => ({ value: hour.rain ?? '0', periodo: hour.h })),
  probPrecipitacion: [
    { value: '', periodo: '0107' },
    { value: '5', periodo: '0713' },
    { value: '40', periodo: '1319' },
    { value: '10', periodo: '1901' }
  ],
  temperatura: hours.map((hour) => ({ value: hour.t, periodo: hour.h })),
  vientoAndRachaMax: hours.flatMap((hour) =>
    hour.gust
      ? [{ direccion: [hour.wind[0]], velocidad: [hour.wind[1]], periodo: hour.h }, { value: hour.gust, periodo: hour.h }]
      : [{ direccion: [hour.wind[0]], velocidad: [hour.wind[1]], periodo: hour.h }]
  )
});

const hourlyPayload = [{
  elaborado: '2026-09-04T09:12:00',
  nombre: 'Tarifa',
  prediccion: {
    dia: [
      hourlyDay('2026-09-04T00:00:00', [
        { h: '13', t: '26', sky: '12', wind: ['E', '35'], gust: '50' },
        { h: '14', t: '27', sky: '12', wind: ['E', '37'], gust: '54' },
        { h: '15', t: '27', sky: '13', wind: ['E', '40'], gust: '56', rain: '0.2' },
        { h: '16', t: '26', sky: '13', wind: ['C', '2'] }
      ]),
      hourlyDay('2026-09-05T00:00:00', [
        { h: '12', t: '25', sky: '11', wind: ['O', '22'], gust: '35' },
        { h: '15', t: '26', sky: '11', wind: ['O', '30'], gust: '44' },
        { h: '18', t: '25', sky: '12', wind: ['SO', '26'], gust: '40' }
      ])
    ]
  }
}];

const beachPayload = [{
  elaborado: '2026-09-04T08:00:00',
  nombre: 'Los Lances',
  prediccion: {
    dia: [
      {
        fecha: 20260904,
        estadoCielo: { f1: 110, descripcion1: 'Despejado', f2: 120, descripcion2: 'Poco nuboso' },
        viento: { f1: 2, descripcion1: 'Moderado', f2: 3, descripcion2: 'Fuerte' },
        oleaje: { f1: 1, descripcion1: 'Débil', f2: 2, descripcion2: 'Moderado' },
        tMaxima: { valor1: 27 },
        sTermica: { valor1: 2, descripcion1: 'Calor moderado' },
        tAgua: { valor1: 21 },
        uvMax: { valor1: 7 }
      }
    ]
  }
}];

const aemetEnvelope = (datos: string) =>
  jsonResponse({ descripcion: 'exito', estado: 200, datos, metadata: 'https://opendata.aemet.es/opendata/sh/meta' });

const HOURLY_DATA_URL = 'https://opendata.aemet.es/opendata/sh/hourly-tarifa';
const BEACH_DATA_URL = 'https://opendata.aemet.es/opendata/sh/beach-los-lances';

test('the hourly normalizer converts AEMET km/h to knots, aligns gusts by hour and keeps missing gusts missing', () => {
  const hourly = normalizeHourlyForecast(hourlyPayload, 'tarifa');

  expect(hourly.issuedAt).toBe('2026-09-04T09:12:00');
  expect(hourly.days.map((day) => day.date)).toEqual(['2026-09-04', '2026-09-05']);
  expect(hourly.days[0]).toMatchObject({ sunrise: '07:56', sunset: '20:46' });
  expect(hourly.hours).toHaveLength(7);

  const first = hourly.hours[0];
  expect(first.time).toBe('2026-09-04T13:00:00+02:00');
  expect(first.wind).toEqual({ speed: 18.9, directionCode: 'E', direction: 90, gusts: 27 });
  expect(first.temperature).toBe(26);
  expect(first.sky).toEqual({ code: '12', category: 'fewClouds', night: false });
  expect(first.precipitation).toBe(0);
  expect(first.precipitationProbability).toBe(40);

  expect(hourly.hours[2].sky.category).toBe('intervals');
  expect(hourly.hours[2].precipitation).toBe(0.2);

  const calm = hourly.hours[3];
  expect(calm.wind.directionCode).toBe('C');
  expect(calm.wind.direction).toBeNull();
  expect(calm.wind.gusts).toBeNull();

  expect(hourly.hours[4].time).toBe('2026-09-05T12:00:00+02:00');
  expect(hourly.hours[6].wind).toMatchObject({ directionCode: 'SO', direction: 225 });
});

test('the sky codes map to the authored categories, night suffix included', () => {
  expect(skyCategory('11')).toBe('clear');
  expect(skyCategory('16n')).toBe('overcast');
  expect(skyCategory('26')).toBe('rain');
  expect(skyCategory('46n')).toBe('lightRain');
  expect(skyCategory('54')).toBe('thunder');
  expect(skyCategory('72')).toBe('snow');
  expect(skyCategory('81')).toBe('fog');
  expect(skyCategory('')).toBe('unknown');
  expect(localHourIso('2026-01-15', 9, 'Europe/Madrid')).toBe('2026-01-15T09:00:00+01:00');
});

test('the beach normalizer reads sea state and water temperature and tolerates gaps', () => {
  const beach = normalizeBeachForecast(beachPayload);
  expect(beach.beachName).toBe('Los Lances');
  expect(beach.days[0]).toEqual({
    date: '2026-09-04',
    wave: { morning: 'weak', afternoon: 'moderate' },
    waterTemperature: 21,
    temperatureMax: 27,
    uvMax: 7
  });

  const sparse = normalizeBeachForecast([{
    prediccion: { dia: [{ fecha: '20260905', oleaje: { descripcion1: 'Fuerte', descripcion2: 'Moderado' } }] }
  }]);
  expect(sparse.days[0]).toEqual({
    date: '2026-09-05',
    wave: { morning: 'strong', afternoon: 'moderate' },
    waterTemperature: null,
    temperatureMax: null,
    uvMax: null
  });
});

test('the kite briefing downloads both AEMET products in two steps and combines them', async () => {
  const sequence = fetchSequence(
    aemetEnvelope(HOURLY_DATA_URL),
    jsonResponse(hourlyPayload),
    aemetEnvelope(BEACH_DATA_URL),
    jsonResponse(beachPayload)
  );
  const { briefing, beachError } = await fetchKiteBriefing({
    apiKey: KITE_SECRET,
    fetchImpl: sequence.fetchImpl,
    now: () => new Date('2026-09-04T11:30:00Z')
  });

  expect(sequence.urls).toHaveLength(4);
  const hourlyRequest = new URL(sequence.urls[0]);
  expect(hourlyRequest.host).toBe('opendata.aemet.es');
  expect(hourlyRequest.pathname).toContain('/prediccion/especifica/municipio/horaria/11035');
  expect(hourlyRequest.searchParams.get('api_key')).toBe(KITE_SECRET);
  expect(sequence.urls[1]).toBe(HOURLY_DATA_URL);
  expect(new URL(sequence.urls[2]).pathname).toContain('/prediccion/especifica/playa/1103506');
  expect(sequence.urls[3]).toBe(BEACH_DATA_URL);

  expect(beachError).toBeNull();
  expect(briefing.site).toBe('tarifa');
  expect(briefing.source.provider).toBe('AEMET');
  expect(briefing.source.requestedAt).toBe('2026-09-04T11:30:00.000Z');
  expect(briefing.source.hourly).toMatchObject({ status: 'ok', issuedAt: '2026-09-04T09:12:00', validFrom: '2026-09-04T13:00:00+02:00' });
  expect(briefing.source.beach.status).toBe('ok');
  expect(briefing.beach?.[0].waterTemperature).toBe(21);
  expect(briefing.days[0].sunset).toBe('20:46');
  expect(briefing.hours[0].wind.speed).toBe(18.9);
});

test('a failing beach product leaves the wind briefing intact and says the sea state is unavailable', async () => {
  const sequence = fetchSequence(aemetEnvelope(HOURLY_DATA_URL), jsonResponse(hourlyPayload), new Error('beach down'));
  const { briefing, beachError } = await fetchKiteBriefing({ apiKey: KITE_SECRET, fetchImpl: sequence.fetchImpl });

  expect(beachError).toBeInstanceOf(Error);
  expect(briefing.beach).toBeNull();
  expect(briefing.source.beach.status).toBe('unavailable');
  expect(briefing.hours).toHaveLength(7);
});

test('the kite briefing rejects a data URL outside AEMET and a payload without hours', async () => {
  const sequence = fetchSequence(aemetEnvelope('https://evil.example/hourly'));
  await expect(fetchKiteBriefing({ apiKey: KITE_SECRET, fetchImpl: sequence.fetchImpl })).rejects.toBeInstanceOf(AemetKiteError);
  expect(() => buildKiteBriefing({ hourlyPayload: [{ prediccion: { dia: [] } }], beachPayload: null, site: 'tarifa', requestedAt: 'x' })).toThrow(AemetKiteError);
});

test('the kite briefing route keeps the AEMET key and provider details out of public failures', async () => {
  const sequence = fetchSequence(new Response('upstream broke', { status: 500 }));
  const errors: string[] = [];
  const originalError = console.error;
  console.error = (message: unknown) => { errors.push(String(message)); };
  try {
    const response = await createKiteBriefingRoute({ fetchImpl: sequence.fetchImpl })({
      request: new Request('https://amara-lodging.es/api/weather/tarifa-kite'),
      env: { AEMET_API_KEY: KITE_SECRET }
    });
    expect(response.status).toBe(503);
    expect(response.headers.get('Cache-Control')).toBe('no-store');
    const body = await response.text();
    expect(body).toContain('kite_briefing_unavailable');
    expect(body).not.toContain(KITE_SECRET);
    expect(body).not.toContain('upstream broke');
    expect(errors.join('\n')).not.toContain(KITE_SECRET);
  } finally {
    console.error = originalError;
  }
});

test('the kite briefing route fails closed when the server-side AEMET key is absent', async () => {
  const sequence = fetchSequence();
  const response = await createKiteBriefingRoute({ fetchImpl: sequence.fetchImpl })({
    request: new Request('https://amara-lodging.es/api/weather/tarifa-kite'),
    env: {}
  });
  expect(response.status).toBe(503);
  expect(sequence.urls).toHaveLength(0);
});

test('the kite briefing route serves a successful payload with public caching', async () => {
  const sequence = fetchSequence(
    aemetEnvelope(HOURLY_DATA_URL),
    jsonResponse(hourlyPayload),
    aemetEnvelope(BEACH_DATA_URL),
    jsonResponse(beachPayload)
  );
  const response = await createKiteBriefingRoute({ fetchImpl: sequence.fetchImpl })({
    request: new Request('https://amara-lodging.es/api/weather/tarifa-kite'),
    env: { AEMET_API_KEY: KITE_SECRET }
  });
  expect(response.status).toBe(200);
  expect(response.headers.get('Cache-Control')).toContain('public');
  const payload = await response.json();
  expect(payload.hours).toHaveLength(7);
  expect(payload.beach).toHaveLength(1);
  expect(JSON.stringify(payload)).not.toContain(KITE_SECRET);
});

/* ---------------------------------------------------------------------------
 * AEMET Meteoalerta warnings gateway
 * ------------------------------------------------------------------------- */

function capDocument({
  identifier,
  status = 'Actual',
  msgType = 'Alert',
  severity,
  level,
  phenomenon,
  parameter,
  onset,
  expires,
  areas,
  english = true
}: {
  identifier: string;
  status?: string;
  msgType?: string;
  severity: string;
  level: string;
  phenomenon: string;
  parameter?: string;
  onset: string;
  expires: string;
  areas: Array<{ areaDesc: string; zones: string[] }>;
  english?: boolean;
}): string {
  const areaXml = areas.map((area) => `
      <area>
        <areaDesc>${area.areaDesc}</areaDesc>
        <polygon>36.0,-5.6 36.1,-5.6 36.1,-5.5 36.0,-5.6</polygon>
        ${area.zones.map((zone) => `<geocode><valueName>AEMET-Meteoalerta zona</valueName><value>${zone}</value></geocode>`).join('')}
      </area>`).join('');
  const info = (language: string, event: string, headline: string, description: string) => `
    <info>
      <language>${language}</language>
      <category>Met</category>
      <event>${event}</event>
      <responseType>Monitor</responseType>
      <urgency>Immediate</urgency>
      <severity>${severity}</severity>
      <certainty>Likely</certainty>
      <eventCode><valueName>AEMET-Meteoalerta fenomeno</valueName><value>${phenomenon}</value></eventCode>
      <effective>${onset}</effective>
      <onset>${onset}</onset>
      <expires>${expires}</expires>
      <senderName>AEMET. Agencia Estatal de Meteorolog&#237;a</senderName>
      <headline>${headline}</headline>
      <description>${description}</description>
      <instruction>Est&#233; preparado.</instruction>
      <web>http://www.aemet.es/es/eltiempo/prediccion/avisos</web>
      <parameter><valueName>AEMET-Meteoalerta nivel</valueName><value>${level}</value></parameter>
      ${parameter ? `<parameter><valueName>AEMET-Meteoalerta parametro</valueName><value>${parameter}</value></parameter>` : ''}
      <parameter><valueName>AEMET-Meteoalerta probabilidad</valueName><value>40%-70%</value></parameter>
      ${areaXml}
    </info>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<alert xmlns="urn:oasis:names:tc:emergency:cap:1.2">
  <identifier>${identifier}</identifier>
  <sender>http://www.aemet.es</sender>
  <sent>2026-09-03T08:00:00-00:00</sent>
  <status>${status}</status>
  <msgType>${msgType}</msgType>
  <scope>Public</scope>
  ${info('es-ES', 'Aviso de fen&#243;menos costeros de nivel amarillo', 'Aviso de fen&#243;menos costeros de nivel amarillo. Estrecho', 'Viento de levante fuerza 7.')}
  ${english ? info('en-GB', 'Moderate coastal event warning', 'Moderate coastal event warning. Estrecho', 'Easterly wind force 7.') : ''}
</alert>`;
}

function tarEntry(name: string, content: string): Uint8Array {
  const data = new TextEncoder().encode(content);
  const header = new Uint8Array(512);
  const write = (offset: number, text: string) => {
    for (let index = 0; index < text.length; index += 1) header[offset + index] = text.charCodeAt(index);
  };
  write(0, name);
  write(100, '0000644\0');
  write(108, '0000000\0');
  write(116, '0000000\0');
  write(124, `${data.length.toString(8).padStart(11, '0')}\0`);
  write(136, '00000000000\0');
  write(148, '        ');
  write(156, '0');
  write(257, 'ustar\0');
  write(263, '00');
  let checksum = 0;
  for (const byte of header) checksum += byte;
  write(148, `${checksum.toString(8).padStart(6, '0')}\0 `);
  const padded = new Uint8Array(Math.ceil(data.length / 512) * 512);
  padded.set(data);
  const entry = new Uint8Array(header.length + padded.length);
  entry.set(header);
  entry.set(padded, header.length);
  return entry;
}

function tarArchive(entries: Uint8Array[]): Uint8Array {
  const trailer = new Uint8Array(1024);
  const size = entries.reduce((sum, entry) => sum + entry.length, 0) + trailer.length;
  const archive = new Uint8Array(size);
  let offset = 0;
  for (const entry of entries) {
    archive.set(entry, offset);
    offset += entry.length;
  }
  return archive;
}

const WARNINGS_NOW = new Date('2026-09-03T10:00:00Z');
const AEMET_WARNINGS_SECRET = 'unit-test-aemet-warnings-key-must-not-leak';

const estrechoCoastal = capDocument({
  identifier: 'estrecho-coastal-amarillo',
  severity: 'Moderate',
  level: 'amarillo',
  phenomenon: 'CO;Fen&#243;menos costeros',
  parameter: 'FV;Viento fuerza;7 (50-61 km/h)',
  onset: '2026-09-03T06:00:00+02:00',
  expires: '2026-09-03T23:59:59+02:00',
  areas: [{ areaDesc: 'Estrecho', zones: ['611104C'] }]
});
const estrechoExpired = capDocument({
  identifier: 'estrecho-expired',
  severity: 'Severe',
  level: 'naranja',
  phenomenon: 'VI;Vientos',
  onset: '2026-09-02T06:00:00+02:00',
  expires: '2026-09-02T23:59:59+02:00',
  areas: [{ areaDesc: 'Estrecho', zones: ['611104'] }]
});
const litoralWarning = capDocument({
  identifier: 'litoral-naranja',
  severity: 'Severe',
  level: 'naranja',
  phenomenon: 'VI;Vientos',
  onset: '2026-09-03T06:00:00+02:00',
  expires: '2026-09-03T23:59:59+02:00',
  areas: [{ areaDesc: 'Litoral gaditano', zones: ['611103'] }]
});
const noWarning = capDocument({
  identifier: 'andalucia-sin-aviso-vientos',
  severity: 'Minor',
  level: 'verde',
  phenomenon: 'VI;Vientos',
  onset: '2026-09-03T00:00:00+02:00',
  expires: '2026-09-03T23:59:59+02:00',
  areas: [
    { areaDesc: 'Grazalema', zones: ['611101'] },
    { areaDesc: 'Estrecho', zones: ['611104'] }
  ],
  english: false
});
const testMessage = capDocument({
  identifier: 'estrecho-test',
  status: 'Test',
  severity: 'Extreme',
  level: 'rojo',
  phenomenon: 'VI;Vientos',
  onset: '2026-09-03T06:00:00+02:00',
  expires: '2026-09-03T23:59:59+02:00',
  areas: [{ areaDesc: 'Estrecho', zones: ['611104'] }]
});

const warningsTar = tarArchive([
  tarEntry('Z_CAP_C_LEMM_20260903080000_AFAE_611104C.xml', estrechoCoastal),
  tarEntry('Z_CAP_C_LEMM_20260902080000_AFAE_611104.xml', estrechoExpired),
  tarEntry('Z_CAP_C_LEMM_20260903080000_AFAE_611103.xml', litoralWarning),
  tarEntry('Z_CAP_C_LEMM_20260903080000_AFAE_61_VI.xml', noWarning),
  tarEntry('Z_CAP_C_LEMM_20260903080000_AFAE_TEST.xml', testMessage),
  tarEntry('README.txt', 'not a cap file')
]);

test('the CAP parser reads the Meteoalerta profile fields and zone codes', () => {
  const parsed = parseCapDocument(estrechoCoastal);
  expect(parsed.alert).toEqual({ identifier: 'estrecho-coastal-amarillo', sent: '2026-09-03T08:00:00-00:00', status: 'Actual', msgType: 'Alert' });
  expect(parsed.infos).toHaveLength(2);
  expect(parsed.infos[0]).toMatchObject({
    language: 'es-ES',
    severity: 'Moderate',
    level: 'amarillo',
    phenomenon: { code: 'CO', name: 'Fenómenos costeros' },
    parameter: { code: 'FV', name: 'Viento fuerza', value: '7 (50-61 km/h)' },
    probability: '40%-70%',
    headline: 'Aviso de fenómenos costeros de nivel amarillo. Estrecho',
    areas: [{ areaDesc: 'Estrecho', zones: ['611104C'] }]
  });
});

test('the archive reader accepts a plain tar, a gzip tar and a single XML', async () => {
  expect(await extractCapDocuments(warningsTar)).toHaveLength(5);
  expect(await extractCapDocuments(new Uint8Array(gzipSync(warningsTar)))).toHaveLength(5);
  expect(await extractCapDocuments(new TextEncoder().encode(estrechoCoastal))).toHaveLength(1);
  await expect(extractCapDocuments(new TextEncoder().encode('garbage'))).rejects.toThrow();
});

test('zone selection keeps only live, actual warnings of the configured zone and passes AEMET wording through', async () => {
  const { warnings, zoneListed } = selectZoneWarnings(await extractCapDocuments(warningsTar), { zoneId: '611104', now: WARNINGS_NOW });
  expect(zoneListed).toBe(true);
  expect(warnings).toHaveLength(1);
  expect(warnings[0]).toMatchObject({
    id: 'estrecho-coastal-amarillo',
    level: 'amarillo',
    severity: 'Moderate',
    phenomenon: { code: 'CO', name: 'Fenómenos costeros' },
    areaDesc: 'Estrecho',
    zoneCodes: ['611104C'],
    onset: '2026-09-03T06:00:00+02:00',
    expires: '2026-09-03T23:59:59+02:00',
    spanish: { headline: 'Aviso de fenómenos costeros de nivel amarillo. Estrecho', description: 'Viento de levante fuerza 7.' },
    english: { headline: 'Moderate coastal event warning. Estrecho', description: 'Easterly wind force 7.' }
  });
});

test('a zone that only appears in "no warning" messages is reported as listed without warnings', async () => {
  const { warnings, zoneListed } = selectZoneWarnings([noWarning, litoralWarning], { zoneId: '611104', now: WARNINGS_NOW });
  expect(zoneListed).toBe(true);
  expect(warnings).toEqual([]);
  const missing = selectZoneWarnings([litoralWarning], { zoneId: '611104', now: WARNINGS_NOW });
  expect(missing.zoneListed).toBe(false);
});

test('the warnings gateway follows the two-step OpenData download for the configured area', async () => {
  const sequence = fetchSequence(
    jsonResponse({ descripcion: 'exito', estado: 200, datos: 'https://opendata.aemet.es/opendata/sh/warnings-tar' }),
    new Response(warningsTar.buffer as ArrayBuffer, { status: 200, headers: { 'Content-Type': 'application/x-tar' } })
  );
  const payload = await fetchZoneWarnings({ apiKey: AEMET_WARNINGS_SECRET, fetchImpl: sequence.fetchImpl, now: () => WARNINGS_NOW });
  expect(new URL(sequence.urls[0]).pathname).toBe('/opendata/api/avisos_cap/ultimoelaborado/area/61');
  expect(new URL(sequence.urls[0]).searchParams.get('api_key')).toBe(AEMET_WARNINGS_SECRET);
  expect(payload.zone).toEqual({ id: '611104', name: 'Estrecho', area: '61' });
  expect(payload.source).toMatchObject({ provider: 'AEMET', fetchedAt: '2026-09-03T10:00:00.000Z' });
  expect(payload.coverage).toBe('zone-listed');
  expect(payload.warnings.map((warning) => warning.id)).toEqual(['estrecho-coastal-amarillo']);
});

test('the warnings route fails closed without a key and hides provider details on failure', async () => {
  let calls = 0;
  const absent = await createZoneWarningsRoute({
    fetchImpl: (async () => {
      calls += 1;
      return jsonResponse({});
    }) as typeof fetch
  })({ request: new Request('https://amara.test/api/weather/tarifa-warnings'), env: {} });
  expect(absent.status).toBe(503);
  expect(calls).toBe(0);

  const sequence = fetchSequence(jsonResponse({ descripcion: 'Unauthorized', estado: 401 }, 401));
  const logs: string[] = [];
  const originalConsoleError = console.error;
  console.error = (message) => logs.push(String(message));
  try {
    const response = await createZoneWarningsRoute({ fetchImpl: sequence.fetchImpl })({
      request: new Request('https://amara.test/api/weather/tarifa-warnings'),
      env: { AEMET_API_KEY: AEMET_WARNINGS_SECRET }
    });
    expect(response.status).toBe(503);
    expect(await response.json()).toEqual({
      error: { code: 'weather_warnings_unavailable', message: 'The official warning status is temporarily unavailable.' }
    });
  } finally {
    console.error = originalConsoleError;
  }
  expect(logs).toHaveLength(1);
  expect(logs[0]).not.toContain(AEMET_WARNINGS_SECRET);
  expect(JSON.parse(logs[0])).toEqual({ operation: 'zone-warnings', providerStep: 'request_url', providerHttpStatus: 401, category: 'http' });
});
