import type { Locator, Page } from '@playwright/test';
import { BasePage } from '../../../src/pages/BasePage';

export class RegisterPage extends BasePage{
  readonly uniqueElement: Locator;

  constructor(page: Page) {
    super(page);
    this.uniqueElement = this.page.locator('.register-wrapper');
  }
  async clickBackToLoginButton(): Promise<void>{
    const backToLoginButton = this.page.locator('button#gotologin');
    await backToLoginButton.click();
  }
}
