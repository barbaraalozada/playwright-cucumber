import type { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  abstract readonly uniqueElement: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async isPageOpened(): Promise<boolean> {
    await this.uniqueElement.waitFor({ state: 'visible' });
    return true;
  }
}
