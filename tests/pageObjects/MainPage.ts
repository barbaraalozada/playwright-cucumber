import type { Page } from '@playwright/test';
import { EnvConfig } from '../../src/helpers/EnvConfig.ts';

export class MainPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto(EnvConfig.getBaseUrl());
  }

  async goToPage(pageName: string): Promise<void> {
    const pageCard = this.page.locator('div.card-body h5', { hasText: pageName });
    await pageCard.click();
  }

  async navigateToMenuItem(menuItem: string): Promise<void> {
    await this.page.locator('span', { hasText: menuItem }).click();
  }
}
