import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { runStructuredDataAudit } from './check-structured-data.mjs';

const distRoot = join(process.cwd(), 'dist');

// Internal tools remain excluded unless a local QA build explicitly opts in.
if (process.env.AMARA_INCLUDE_INTERNAL_TOOLS !== 'true') {
  rmSync(join(distRoot, 'tools'), { recursive: true, force: true });
}

runStructuredDataAudit({ distRoot });
