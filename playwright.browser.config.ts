import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: false,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  // A healthy run finishes in two to four minutes. Every spec starts its own
  // Astro dev server on port 4322 in this checkout, and when that server is
  // unhealthy (a second dev server on the same checkout, a stale Vite cache
  // right after a build) every test times out at 30 s and a run drags on for
  // 40 minutes. Locally, stop after a few failures and cap the whole run so
  // a sick environment is visible in minutes; CI keeps its full report.
  maxFailures: process.env.CI ? 0 : 3,
  globalTimeout: process.env.CI ? 0 : 12 * 60 * 1000,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4322',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    viewport: { width: 1280, height: 900 }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
