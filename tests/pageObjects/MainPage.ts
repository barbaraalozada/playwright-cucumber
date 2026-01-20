import type { Locator, Page } from '@playwright/test';
import { EnvConfig } from '../../src/helpers/EnvConfig';
import { BasePage } from '../../src/pages/BasePage';

export class MainPage extends BasePage{
  readonly uniqueElement: Locator;

  constructor(page: Page) {
    super(page);
    this.uniqueElement = this.page.locator('.home-content');
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
