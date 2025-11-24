// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/smoke',
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:4173',
    headless: true,
    viewport: { width: 800, height: 600 },
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run dev -- --host --port 4173',
    url: 'http://localhost:4173',
    reuseExistingServer: true,
    timeout: 30_000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
