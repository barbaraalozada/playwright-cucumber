import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { mkdir } from 'node:fs/promises';
import { label, tag } from 'allure-js-commons';
import type { CustomWorld } from './World';
import { EnvConfig } from '../helpers/EnvConfig';

setDefaultTimeout(EnvConfig.getDefaultTimeout());

Before(async function (this: CustomWorld, scenario) {
  const featureUri = scenario.gherkinDocument.uri || '';
  const featureName = scenario.gherkinDocument.feature?.name || 'Unknown Feature';

  await label('parentSuite', featureUri.split('/').pop()?.replace('.feature', '') || 'Features');
  await label('suite', featureName);
  await label('subSuite', scenario.pickle.name);

  for (const pickleTag of scenario.pickle.tags) {
    await tag(pickleTag.name.replace('@', ''));
  }

  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED' && this.page) {
    await mkdir('./screenshots', { recursive: true });
    const screenshotPath = `./screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}_${Date.now()}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
  }
  await this.cleanup();
});
