#!/usr/bin/env node
/**
 * Builds the geometry for the Iberian Peninsula orientation map
 * (src/components/location/IberiaOrientationMap.astro).
 *
 * Sources (downloaded on first run into node_modules/.cache/amara-geo/):
 *   - Natural Earth 10m admin-0 countries (public domain)
 *     https://github.com/nvkelso/natural-earth-vector
 *   - Spanish autonomous communities (click_that_hood, ODbL-compatible open data)
 *     https://github.com/codeforgermany/click_that_hood
 *
 * Output: src/content/iberiaOrientationMapGeometry.ts — projected SVG path data
 * (Lambert conformal conic, clipped to the map window, Douglas–Peucker simplified)
 * plus projected city positions and the road-shaped round-trip lines per AMARA base.
 *
 *   node scripts/build-iberia-orientation-map.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cacheDir = path.join(root, 'node_modules', '.cache', 'amara-geo');
const outFile = path.join(root, 'src', 'content', 'iberiaOrientationMapGeometry.ts');

const SOURCES = {
  countries: 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson',
  communities: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/spain-communities.geojson'
};

async function load(name) {
  fs.mkdirSync(cacheDir, { recursive: true });
  const file = path.join(cacheDir, `${name}.geojson`);
  if (!fs.existsSync(file)) {
    process.stdout.write(`downloading ${name} … `);
    const res = await fetch(SOURCES[name]);
    if (!res.ok) throw new Error(`${SOURCES[name]} → ${res.status}`);
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
    console.log('ok');
  }
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

// ---------- projection: Lambert conformal conic (standard parallels 36°/43°) ----------
const D = Math.PI / 180;
const φ1 = 36 * D;
const φ2 = 43 * D;
const φ0 = 40 * D;
const λ0 = -4.2 * D;
const n = Math.log(Math.cos(φ1) / Math.cos(φ2)) / Math.log(Math.tan(Math.PI / 4 + φ2 / 2) / Math.tan(Math.PI / 4 + φ1 / 2));
const F = (Math.cos(φ1) * Math.pow(Math.tan(Math.PI / 4 + φ1 / 2), n)) / n;
const ρ = (φ) => F / Math.pow(Math.tan(Math.PI / 4 + φ / 2), n);
const ρ0 = ρ(φ0);
function projRaw(lon, lat) {
  const r = ρ(lat * D);
  const θ = n * (lon * D - λ0);
  return [r * Math.sin(θ), r * Math.cos(θ) - ρ0];
}

// geographic window → viewBox (whole peninsula, Portugal, Balearics, Biscay, Maghreb coast)
const WIN = { lonMin: -11.3, lonMax: 4.1, latMin: 34.6, latMax: 44.35 };
const WIDTH = 960;
let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;
for (let i = 0; i <= 100; i++) {
  const t = i / 100;
  const lon = WIN.lonMin + t * (WIN.lonMax - WIN.lonMin);
  const lat = WIN.latMin + t * (WIN.latMax - WIN.latMin);
  for (const [x, y] of [projRaw(lon, WIN.latMax), projRaw(lon, WIN.latMin), projRaw(WIN.lonMin, lat), projRaw(WIN.lonMax, lat)]) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
}
const scale = WIDTH / (maxX - minX);
const HEIGHT = Math.round((maxY - minY) * scale);
const proj = (lon, lat) => {
  const [x, y] = projRaw(lon, lat);
  return [(x - minX) * scale, (y - minY) * scale];
};
const r1 = (v) => Math.round(v * 10) / 10;
const pt = ([x, y]) => `${r1(x)} ${r1(y)}`;

// ---------- clipping (Sutherland–Hodgman against the padded viewBox) ----------
function clipPolygon(pts, { x0, y0, x1, y1 }) {
  const inside = [(p) => p[0] >= x0, (p) => p[0] <= x1, (p) => p[1] >= y0, (p) => p[1] <= y1];
  const cross = [
    (a, b) => [x0, a[1] + ((b[1] - a[1]) * (x0 - a[0])) / (b[0] - a[0])],
    (a, b) => [x1, a[1] + ((b[1] - a[1]) * (x1 - a[0])) / (b[0] - a[0])],
    (a, b) => [a[0] + ((b[0] - a[0]) * (y0 - a[1])) / (b[1] - a[1]), y0],
    (a, b) => [a[0] + ((b[0] - a[0]) * (y1 - a[1])) / (b[1] - a[1]), y1]
  ];
  let out = pts;
  for (let e = 0; e < 4; e++) {
    const input = out;
    out = [];
    if (!input.length) break;
    let prev = input[input.length - 1];
    for (const cur of input) {
      const curIn = inside[e](cur);
      const prevIn = inside[e](prev);
      if (curIn) {
        if (!prevIn) out.push(cross[e](prev, cur));
        out.push(cur);
      } else if (prevIn) {
        out.push(cross[e](prev, cur));
      }
      prev = cur;
    }
  }
  return out;
}

// ---------- simplification (Douglas–Peucker) ----------
function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  const sq = tol * tol;
  const keep = new Uint8Array(pts.length);
  keep[0] = 1;
  keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop();
    const [ax, ay] = pts[a];
    const [bx, by] = pts[b];
    const dx = bx - ax;
    const dy = by - ay;
    const len2 = dx * dx + dy * dy;
    let maxD = 0;
    let idx = -1;
    for (let i = a + 1; i < b; i++) {
      const [px, py] = pts[i];
      let t = len2 === 0 ? 0 : ((px - ax) * dx + (py - ay) * dy) / len2;
      t = Math.max(0, Math.min(1, t));
      const d = (px - (ax + t * dx)) ** 2 + (py - (ay + t * dy)) ** 2;
      if (d > maxD) {
        maxD = d;
        idx = i;
      }
    }
    if (maxD > sq && idx > 0) {
      keep[idx] = 1;
      stack.push([a, idx], [idx, b]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}

const PAD = 12; // clip edges sit outside the visible viewBox so no stroke runs along the frame
const CLIP = { x0: -PAD, y0: -PAD, x1: WIDTH + PAD, y1: HEIGHT + PAD };
const TOL = 0.55;

const ringsOf = (geom) => (geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates).map((poly) => poly[0]);

function toPath(rings) {
  const parts = [];
  for (const ring of rings) {
    if (!ring.some(([lon, lat]) => lon > WIN.lonMin - 2 && lon < WIN.lonMax + 2 && lat > WIN.latMin - 2 && lat < WIN.latMax + 2)) continue;
    let pts = clipPolygon(ring.map(([lon, lat]) => proj(lon, lat)), CLIP);
    if (pts.length < 3) continue;
    pts = simplify(pts, TOL);
    if (pts.length < 3) continue;
    parts.push(`M${pts.map(pt).join('L')}Z`);
  }
  return parts.join('');
}

/** Land borders = vertex runs the host polygon shares with its neighbours (Natural Earth shares border vertices exactly). */
function borderLines(hostGeom, neighbourGeoms) {
  const key = ([lon, lat]) => `${lon.toFixed(5)},${lat.toFixed(5)}`;
  const shared = new Set();
  for (const g of neighbourGeoms) for (const ring of ringsOf(g)) for (const p of ring) shared.add(key(p));
  const runs = [];
  for (const ring of ringsOf(hostGeom)) {
    let run = [];
    for (const p of ring) {
      if (shared.has(key(p))) run.push(p);
      else {
        if (run.length > 1) runs.push(run);
        run = [];
      }
    }
    if (run.length > 1) runs.push(run);
  }
  return runs
    .map((run) => simplify(run.map(([lon, lat]) => proj(lon, lat)), TOL))
    .filter((run) => run.length > 1)
    .map((run) => `M${run.map(pt).join('L')}`)
    .join('');
}

/** Catmull-Rom through the waypoints → cubic Bézier path (reads as a road, not a polygon). */
function smoothPath(pts) {
  let d = `M${pt(pts[0])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${pt(c1)} ${pt(c2)} ${pt(p2)}`;
  }
  return d;
}

// ---------- places (lon, lat) ----------
const PLACES = {
  frigiliana: [-3.8954, 36.7892],
  nerja: [-3.8765, 36.7451],
  tarifa: [-5.6044, 36.0128],
  malaga: [-4.4214, 36.7213],
  ronda: [-5.166, 36.742],
  sevilla: [-5.9845, 37.3891],
  cordoba: [-4.7794, 37.8882],
  granada: [-3.5986, 37.1773],
  madrid: [-3.7038, 40.4168],
  lisboa: [-9.1393, 38.7223],
  porto: [-8.6291, 41.1579],
  barcelona: [2.1734, 41.3851],
  valencia: [-0.3763, 39.4699],
  bilbao: [-2.935, 43.263],
  cadiz: [-6.2926, 36.5271]
};

// Round trips from each AMARA base, following the actual road corridors.
const MALAGA_RONDA = [[-4.63, 36.715], [-4.72, 36.8], [-4.85, 36.88], [-5.02, 36.85]]; // A-357 / A-367
const RONDA_SEVILLA = [[-5.41, 36.88], [-5.62, 37.05], [-5.78, 37.18]]; // A-374 / A-375
const SEVILLA_CORDOBA = [[-5.64, 37.47], [-5.08, 37.54], [-4.9, 37.72]]; // A-4
const CORDOBA_GRANADA = [[-4.55, 37.75], [-4.32, 37.62], [-3.93, 37.46], [-3.7, 37.3]]; // N-432
const GRANADA_COSTA_TROPICAL = [[-3.62, 37.02], [-3.55, 36.88], [-3.6, 36.76], [-3.69, 36.735], [-3.74, 36.735], [-3.83, 36.755]]; // A-44 / A-7
const NERJA_MALAGA = [[-3.95, 36.735], [-4.09, 36.74], [-4.28, 36.72]]; // A-7
const ROUTES = {
  // Frigiliana → Nerja → Málaga → Ronda → Sevilla → Córdoba → Granada → coast → Nerja → Frigiliana
  frigiliana: [
    PLACES.frigiliana, PLACES.nerja, ...NERJA_MALAGA, PLACES.malaga, ...MALAGA_RONDA, PLACES.ronda, ...RONDA_SEVILLA,
    PLACES.sevilla, ...SEVILLA_CORDOBA, PLACES.cordoba, ...CORDOBA_GRANADA, PLACES.granada, ...GRANADA_COSTA_TROPICAL,
    PLACES.nerja, PLACES.frigiliana
  ],
  // Nerja → Málaga → Ronda → Sevilla → Córdoba → Granada → coast → Nerja
  nerja: [
    PLACES.nerja, ...NERJA_MALAGA, PLACES.malaga, ...MALAGA_RONDA, PLACES.ronda, ...RONDA_SEVILLA,
    PLACES.sevilla, ...SEVILLA_CORDOBA, PLACES.cordoba, ...CORDOBA_GRANADA, PLACES.granada, ...GRANADA_COSTA_TROPICAL,
    PLACES.nerja
  ],
  // Tarifa → Vejer → Cádiz → Jerez → Sevilla → Córdoba → Granada → Antequera → Málaga → Ronda → Gaucín → Algeciras → Tarifa
  tarifa: [
    PLACES.tarifa, [-5.69, 36.14], [-5.97, 36.25], [-6.15, 36.42], PLACES.cadiz, [-6.14, 36.69], [-6.0, 36.9], [-5.98, 37.15],
    PLACES.sevilla, ...SEVILLA_CORDOBA, PLACES.cordoba, ...CORDOBA_GRANADA, PLACES.granada,
    [-3.85, 37.15], [-4.15, 37.17], [-4.56, 37.02], [-4.5, 36.85], PLACES.malaga,
    ...MALAGA_RONDA, PLACES.ronda, [-5.25, 36.62], [-5.32, 36.52], [-5.4, 36.3], [-5.45, 36.13], PLACES.tarifa
  ]
};

const countriesGeo = await load('countries');
const communitiesGeo = await load('communities');
const byName = Object.fromEntries(countriesGeo.features.map((f) => [f.properties.ADMIN, f.geometry]));

const countries = Object.fromEntries(
  ['Spain', 'Portugal', 'France', 'Morocco', 'Algeria', 'Andorra', 'Gibraltar'].map((name) => [name.toLowerCase(), toPath(ringsOf(byName[name]))])
);
const andalucia = toPath(ringsOf(communitiesGeo.features.find((f) => f.properties.name === 'Andalucia').geometry));
const borders = borderLines(byName.Spain, [byName.Portugal, byName.France, byName.Andorra, byName.Gibraltar]);
const places = Object.fromEntries(Object.entries(PLACES).map(([k, [lon, lat]]) => [k, proj(lon, lat).map(r1)]));
const routes = Object.fromEntries(Object.entries(ROUTES).map(([k, pts]) => [k, smoothPath(pts.map(([lon, lat]) => proj(lon, lat)))]));

const ts = `/**
 * GENERATED by scripts/build-iberia-orientation-map.mjs — do not edit by hand.
 * Iberian Peninsula orientation map: Natural Earth 10m countries (public domain) and the
 * Andalusian autonomous-community outline, Lambert conformal conic (36°/43°), viewBox ${WIDTH}×${HEIGHT}.
 */
export const iberiaOrientationMapGeometry = {
  width: ${WIDTH},
  height: ${HEIGHT},
  countries: ${JSON.stringify(countries, null, 4).replace(/\n/g, '\n  ')},
  andalucia: ${JSON.stringify(andalucia)},
  borders: ${JSON.stringify(borders)},
  routes: ${JSON.stringify(routes, null, 4).replace(/\n/g, '\n  ')},
  places: ${JSON.stringify(places, null, 4).replace(/\n/g, '\n  ')}
} as const;

export type IberiaOrientationMapPlace = keyof typeof iberiaOrientationMapGeometry.places;
`;
fs.writeFileSync(outFile, ts);
console.log(`wrote ${path.relative(root, outFile)} (${(ts.length / 1024).toFixed(1)} kB, viewBox ${WIDTH}×${HEIGHT})`);
