import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import type { CustomWorld } from './World';
import { EnvConfig } from '../helpers/EnvConfig.ts';

setDefaultTimeout(EnvConfig.getDefaultTimeout());

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshotPath = `./reports/screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}_${Date.now()}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
  }
  await this.cleanup();
});
