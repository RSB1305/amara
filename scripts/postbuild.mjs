import { rmSync } from 'node:fs';
import { join } from 'node:path';
import { runStructuredDataAudit } from './check-structured-data.mjs';

const distRoot = join(process.cwd(), 'dist');

rmSync(join(distRoot, 'tools'), { recursive: true, force: true });
runStructuredDataAudit({ distRoot });
