// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    screenshot: 'only-on-failure'
  },
  reporter: [
    ['line'], 
    ['testit-adapter-playwright']
  ],
};

export default config;