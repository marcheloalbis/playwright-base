import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  reporter: [['html', { outputFolder: 'reports' }]],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,  // permite mostrar el navegador siempre
    trace: 'on',
   // trace: 'off',
   // trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    testIdAttribute: 'data-testid',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   /*  {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
    }, */
  ],
});
