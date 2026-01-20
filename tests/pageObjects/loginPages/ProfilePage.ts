import type { Locator, Page } from '@playwright/test';
import { BasePage } from '../../../src/pages/BasePage';

export class ProfilePage extends BasePage {
  readonly uniqueElement: Locator;

  constructor(page: Page) {
    super(page);
    this.uniqueElement = this.page.locator('.profile-wrapper');
  }
}
