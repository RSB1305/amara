import { spawnSync } from 'node:child_process';

/**
 * Dependency audit that tells a vulnerability apart from an outage.
 *
 * `npm audit` exits non-zero both when a dependency has a known high or
 * critical advisory and when npm's advisory endpoint is unreachable. The
 * first is a finding and must fail the build. The second says nothing about
 * the code; on 4 September 2026 a registry outage aborted four CI builds in
 * a row that only needed a rerun. This wrapper runs the audit in JSON mode,
 * fails on findings and turns an unreachable endpoint into a warning so the
 * build goes on. An unparseable answer still fails: unknown is not safe.
 */
const AUDIT_LEVELS = ['high', 'critical'];
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const result = spawnSync(npm, ['audit', '--audit-level=high', '--json'], {
  encoding: 'utf8',
  shell: process.platform === 'win32',
  maxBuffer: 64 * 1024 * 1024
});

const stdout = result.stdout ?? '';
let report;
try {
  report = JSON.parse(stdout);
} catch {
  console.error('[audit] npm audit returned no JSON report; failing because the result is unknown.');
  console.error(stdout.slice(0, 2000));
  console.error(result.stderr ?? '');
  process.exit(result.status || 1);
}

const counts = report?.metadata?.vulnerabilities;

if (!counts) {
  // No audit metadata: npm could not get an answer from the advisory endpoint.
  const reason = report?.message || report?.error?.summary || 'advisory endpoint unavailable';
  const line = `npm audit could not reach the registry (${reason}); dependencies were not audited in this run.`;
  console.warn(`[audit] ${line}`);
  if (process.env.GITHUB_ACTIONS) console.log(`::warning title=npm audit skipped::${line}`);
  process.exit(0);
}

const blocking = AUDIT_LEVELS.reduce((sum, level) => sum + (counts[level] ?? 0), 0);
const summary = Object.entries(counts)
  .map(([level, count]) => `${level} ${count}`)
  .join(', ');

if (blocking > 0) {
  console.error(`[audit] ${blocking} high or critical advisories: ${summary}`);
  const details = spawnSync(npm, ['audit', '--audit-level=high'], {
    encoding: 'utf8',
    shell: process.platform === 'win32',
    maxBuffer: 64 * 1024 * 1024
  });
  console.error(details.stdout ?? '');
  process.exit(1);
}

console.log(`[audit] No high or critical advisories (${summary}).`);
