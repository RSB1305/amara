/**
 * AEMET Meteoalerta warnings gateway.
 *
 * Reads the latest CAP warning set for one Meteoalerta zone from AEMET
 * OpenData (`avisos_cap/ultimoelaborado/area/{area}`), never from the public
 * website. The zone is configured explicitly; nothing here guesses a zone from
 * a coordinate. Warnings are passed through in AEMET's own wording — the
 * gateway filters by zone, drops expired messages and reads the structured
 * fields. It does not summarise, translate or grade anything.
 *
 * The OpenData product is a two-step download like the municipality forecast:
 * an envelope with a `datos` URL, then the data itself — a tar archive of CAP
 * 1.2 XML files (optionally gzip-compressed) or, defensively, a single XML.
 *
 * CAP profile: METEOALERTA_ANX3 (31 May 2022). Zone codes: METEOALERTA_ANX2.
 * A coastal phenomenon uses the land zone code with a trailing "C".
 */

const AEMET_API_ROOT = 'https://opendata.aemet.es/opendata/api';
const AEMET_DATA_HOST = 'opendata.aemet.es';
const PUBLIC_CACHE_CONTROL = 'public, max-age=300, s-maxage=600, stale-while-revalidate=900';

/**
 * Zones the gateway may serve. `area` is the OpenData area selector for the
 * warning set (the autonomous community that owns the zone). The zone id and
 * name come from METEOALERTA_ANX2 and were checked against the zone AEMET
 * itself names on the Tarifa municipality page ("Zona de avisos: Estrecho",
 * warnings link l=611104).
 */
export const WARNING_ZONES = Object.freeze({
  tarifa: Object.freeze({
    area: '61',
    zoneId: '611104',
    zoneName: 'Estrecho',
    officialUrl: 'https://www.aemet.es/es/eltiempo/prediccion/avisos?w=hoy&l=611104'
  })
});

const LEVELS = Object.freeze({ verde: 0, amarillo: 1, naranja: 2, rojo: 3 });

function zoneConfig(zone) {
  const config = WARNING_ZONES[zone];
  if (!config) throw new TypeError(`Unsupported warning zone: ${zone}`);
  return config;
}

export class AemetWarningsError extends Error {
  constructor(providerStep, category, providerHttpStatus) {
    super('AEMET warnings request failed.');
    this.name = 'AemetWarningsError';
    this.providerStep = providerStep;
    this.category = category;
    this.providerHttpStatus = providerHttpStatus;
  }
}

/* ------------------------------------------------------------------------
 * Archive handling
 * ---------------------------------------------------------------------- */

const GZIP_MAGIC = [0x1f, 0x8b];
const TAR_BLOCK = 512;

function isGzip(bytes) {
  return bytes.length > 2 && bytes[0] === GZIP_MAGIC[0] && bytes[1] === GZIP_MAGIC[1];
}

function looksLikeTar(bytes) {
  if (bytes.length < TAR_BLOCK) return false;
  const magic = new TextDecoder().decode(bytes.subarray(257, 262));
  return magic === 'ustar';
}

async function gunzip(bytes) {
  if (typeof DecompressionStream !== 'function') {
    throw new AemetWarningsError('archive', 'unsupported_compression');
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function readOctal(bytes, offset, length) {
  const text = new TextDecoder().decode(bytes.subarray(offset, offset + length)).replace(/\0.*$/s, '').trim();
  return text ? Number.parseInt(text, 8) : 0;
}

function readString(bytes, offset, length) {
  return new TextDecoder().decode(bytes.subarray(offset, offset + length)).replace(/\0.*$/s, '');
}

/** Minimal ustar reader: returns the XML members of the archive as strings. */
export function readTarXmlMembers(bytes) {
  const members = [];
  let offset = 0;
  while (offset + TAR_BLOCK <= bytes.length) {
    const header = bytes.subarray(offset, offset + TAR_BLOCK);
    if (header.every((byte) => byte === 0)) break;
    const name = readString(header, 0, 100);
    const size = readOctal(header, 124, 12);
    const typeFlag = readString(header, 156, 1);
    const dataStart = offset + TAR_BLOCK;
    if ((typeFlag === '' || typeFlag === '0') && /\.xml$/i.test(name)) {
      members.push({ name, xml: new TextDecoder().decode(bytes.subarray(dataStart, dataStart + size)) });
    }
    offset = dataStart + Math.ceil(size / TAR_BLOCK) * TAR_BLOCK;
  }
  return members;
}

export async function extractCapDocuments(bytes) {
  let payload = bytes;
  if (isGzip(payload)) payload = await gunzip(payload);
  if (looksLikeTar(payload)) return readTarXmlMembers(payload).map((member) => member.xml);
  const text = new TextDecoder().decode(payload).trim();
  if (text.startsWith('<')) return [text];
  throw new AemetWarningsError('archive', 'malformed_response');
}

/* ------------------------------------------------------------------------
 * CAP parsing (regex-based; Workers have no DOMParser)
 * ---------------------------------------------------------------------- */

function decodeEntities(text) {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&')
    .trim();
}

function tagValue(block, tag) {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`));
  return match ? decodeEntities(match[1]) : null;
}

function blocks(text, tag) {
  return [...text.matchAll(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'g'))].map((match) => match[1]);
}

function namedValues(block, tag) {
  const values = {};
  for (const pair of blocks(block, tag)) {
    const name = tagValue(pair, 'valueName');
    const value = tagValue(pair, 'value');
    if (name && value !== null) values[name] = value;
  }
  return values;
}

function splitCode(value) {
  if (!value) return null;
  const [code, ...rest] = value.split(';');
  return { code: code.trim(), name: rest.join(';').trim() || null };
}

function splitParameter(value) {
  if (!value) return null;
  const [code, name, amount] = value.split(';');
  return { code: (code ?? '').trim(), name: (name ?? '').trim() || null, value: (amount ?? '').trim() || null };
}

function stripOuterBlocks(info) {
  return info.replace(/<area(?:\s[^>]*)?>[\s\S]*?<\/area>/g, '');
}

/**
 * Parses one CAP document into its alert-level fields and its info blocks,
 * each with the zone codes of its areas.
 */
export function parseCapDocument(xml) {
  const alertBody = xml.replace(/<info(?:\s[^>]*)?>[\s\S]*?<\/info>/g, '');
  const alert = {
    identifier: tagValue(alertBody, 'identifier'),
    sent: tagValue(alertBody, 'sent'),
    status: tagValue(alertBody, 'status'),
    msgType: tagValue(alertBody, 'msgType')
  };
  const infos = blocks(xml, 'info').map((info) => {
    const head = stripOuterBlocks(info);
    const parameters = namedValues(head, 'parameter');
    const areas = blocks(info, 'area').map((area) => ({
      areaDesc: tagValue(area, 'areaDesc'),
      zones: Object.values(namedValues(area, 'geocode'))
    }));
    return {
      language: tagValue(head, 'language'),
      event: tagValue(head, 'event'),
      severity: tagValue(head, 'severity'),
      certainty: tagValue(head, 'certainty'),
      phenomenon: splitCode(namedValues(head, 'eventCode')['AEMET-Meteoalerta fenomeno']),
      level: parameters['AEMET-Meteoalerta nivel'] ?? null,
      parameter: splitParameter(parameters['AEMET-Meteoalerta parametro']),
      probability: parameters['AEMET-Meteoalerta probabilidad'] ?? null,
      effective: tagValue(head, 'effective'),
      onset: tagValue(head, 'onset'),
      expires: tagValue(head, 'expires'),
      headline: tagValue(head, 'headline'),
      description: tagValue(head, 'description'),
      instruction: tagValue(head, 'instruction'),
      web: tagValue(head, 'web'),
      areas
    };
  });
  return { alert, infos };
}

function zoneMatches(zones, zoneId) {
  return zones.some((code) => code === zoneId || code === `${zoneId}C`);
}

/**
 * Reduces all CAP documents of an area to the warnings of one zone.
 *
 * - Only `status` Actual and `msgType` Alert/Update count; Test and Cancel
 *   messages are ignored.
 * - `severity` Minor is AEMET's "no warning" message. It is not a warning, but
 *   it proves the zone was covered by the elaboration, which lets the UI say
 *   "no warning listed" honestly instead of "no data".
 * - Expired messages are dropped against `now`.
 * - The Spanish info block is primary; an English block of the same message
 *   is attached as `english`. Nothing is translated here.
 */
export function selectZoneWarnings(documents, { zoneId, now = new Date() }) {
  const warnings = new Map();
  let zoneListed = false;
  const nowMs = now.getTime();

  for (const xml of documents) {
    let parsed;
    try {
      parsed = parseCapDocument(xml);
    } catch {
      continue;
    }
    const { alert, infos } = parsed;
    if (alert.status !== 'Actual' || !['Alert', 'Update'].includes(alert.msgType ?? '')) continue;

    for (const info of infos) {
      const area = info.areas.find((entry) => zoneMatches(entry.zones, zoneId));
      if (!area) continue;
      zoneListed = true;
      if (!info.severity || info.severity === 'Minor') continue;
      const expiresMs = info.expires ? Date.parse(info.expires) : Number.NaN;
      if (Number.isFinite(expiresMs) && expiresMs < nowMs) continue;

      const id = alert.identifier ?? `${info.phenomenon?.code ?? 'unknown'}-${info.onset ?? ''}`;
      const entry = warnings.get(id) ?? { id, msgType: alert.msgType, sent: alert.sent, spanish: null, english: null };
      const language = (info.language ?? '').toLowerCase();
      const record = {
        event: info.event,
        headline: info.headline,
        description: info.description,
        instruction: info.instruction,
        web: info.web
      };
      if (language.startsWith('en')) entry.english = entry.english ?? record;
      else entry.spanish = entry.spanish ?? record;
      if (!entry.severity) {
        Object.assign(entry, {
          severity: info.severity,
          certainty: info.certainty,
          level: info.level,
          phenomenon: info.phenomenon,
          parameter: info.parameter,
          probability: info.probability,
          effective: info.effective,
          onset: info.onset,
          expires: info.expires,
          areaDesc: area.areaDesc,
          zoneCodes: area.zones.filter((code) => code === zoneId || code === `${zoneId}C`)
        });
      }
      warnings.set(id, entry);
    }
  }

  const list = [...warnings.values()]
    .filter((entry) => entry.spanish || entry.english)
    .sort((a, b) => (LEVELS[b.level] ?? 0) - (LEVELS[a.level] ?? 0) || Date.parse(a.onset ?? 0) - Date.parse(b.onset ?? 0));
  return { warnings: list, zoneListed };
}

/* ------------------------------------------------------------------------
 * Fetching
 * ---------------------------------------------------------------------- */

async function readJson(response, providerStep) {
  if (!response.ok) throw new AemetWarningsError(providerStep, 'http', response.status);
  try {
    return await response.json();
  } catch {
    throw new AemetWarningsError(providerStep, 'malformed_response');
  }
}

function validateDataUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new AemetWarningsError('data_url', 'malformed_response');
  }
  if (url.protocol !== 'https:' || url.hostname !== AEMET_DATA_HOST) {
    throw new AemetWarningsError('data_url', 'untrusted_url');
  }
  return url;
}

export async function fetchZoneWarnings({ apiKey, zone = 'tarifa', fetchImpl = fetch, now = () => new Date() }) {
  const config = zoneConfig(zone);
  const fetchedAt = now();
  const initialUrl = new URL(`${AEMET_API_ROOT}/avisos_cap/ultimoelaborado/area/${config.area}`);
  initialUrl.searchParams.set('api_key', apiKey);

  let envelopeResponse;
  try {
    envelopeResponse = await fetchImpl(initialUrl, { method: 'GET', headers: { Accept: 'application/json' } });
  } catch {
    throw new AemetWarningsError('request_url', 'network');
  }
  const envelope = await readJson(envelopeResponse, 'request_url');
  if (envelope?.estado !== 200 || typeof envelope?.datos !== 'string') {
    throw new AemetWarningsError('request_url', 'normalization', envelope?.estado);
  }

  const dataUrl = validateDataUrl(envelope.datos);
  let dataResponse;
  try {
    dataResponse = await fetchImpl(dataUrl, { method: 'GET' });
  } catch {
    throw new AemetWarningsError('warnings', 'network');
  }
  if (!dataResponse.ok) throw new AemetWarningsError('warnings', 'http', dataResponse.status);

  const documents = await extractCapDocuments(new Uint8Array(await dataResponse.arrayBuffer()));
  const { warnings, zoneListed } = selectZoneWarnings(documents, { zoneId: config.zoneId, now: fetchedAt });

  return {
    zone: { id: config.zoneId, name: config.zoneName, area: config.area },
    source: {
      provider: 'AEMET',
      product: 'Avisos CAP · Plan Meteoalerta',
      fetchedAt: fetchedAt.toISOString(),
      officialUrl: config.officialUrl
    },
    coverage: zoneListed ? 'zone-listed' : 'zone-not-listed',
    warnings
  };
}

/* ------------------------------------------------------------------------
 * Route
 * ---------------------------------------------------------------------- */

function jsonResponse(payload, status, cacheControl) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': cacheControl,
      'X-Content-Type-Options': 'nosniff'
    }
  });
}

function publicFailure() {
  return jsonResponse({
    error: {
      code: 'weather_warnings_unavailable',
      message: 'The official warning status is temporarily unavailable.'
    }
  }, 503, 'no-store');
}

export function createZoneWarningsRoute({ zone = 'tarifa', fetchImpl = fetch, cache, now } = {}) {
  zoneConfig(zone);
  return async function handleZoneWarnings({ request, env, waitUntil = undefined }) {
    const apiKey = env?.AEMET_API_KEY?.trim();
    if (!apiKey) return publicFailure();

    const edgeCache = cache ?? globalThis.caches?.default;
    const cacheKey = new Request(new URL(`/api/weather/${zone}-warnings`, request.url), { method: 'GET' });

    if (edgeCache) {
      const cached = await edgeCache.match(cacheKey);
      if (cached) return cached;
    }

    try {
      const payload = await fetchZoneWarnings({ apiKey, zone, fetchImpl, ...(now ? { now } : {}) });
      const response = jsonResponse(payload, 200, PUBLIC_CACHE_CONTROL);
      if (edgeCache) {
        const cacheWrite = edgeCache.put(cacheKey, response.clone()).catch(() => undefined);
        if (typeof waitUntil === 'function') waitUntil(cacheWrite);
        else await cacheWrite;
      }
      return response;
    } catch (error) {
      const diagnostic = error instanceof AemetWarningsError
        ? {
            operation: 'zone-warnings',
            providerStep: error.providerStep,
            ...(error.providerHttpStatus ? { providerHttpStatus: error.providerHttpStatus } : {}),
            category: error.category
          }
        : { operation: 'zone-warnings', providerStep: 'unknown', category: 'unexpected' };
      console.error(JSON.stringify(diagnostic));
      return publicFailure();
    }
  };
}
