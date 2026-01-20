import type { Locator, Page } from '@playwright/test';
import { BasePage } from '../../../src/pages/BasePage';

export class LoginPage extends BasePage {
  readonly uniqueElement: Locator;

  constructor(page: Page) {
    super(page);
    this.uniqueElement = this.page.locator('.login-wrapper');
  }
  async fillUserNameInput(username: string): Promise<void> {
    const userNameInput = this.page.locator('input#userName');
    await userNameInput.fill(username);
  }

  async fillPasswordInput(password: string): Promise<void> {
    const passwordInput = this.page.locator('input#password');
    await passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    const loginButton = this.page.locator('button#login');
    await loginButton.click();
  }

  async submitLoginForm(username: string, password: string): Promise<void> {
    await this.fillUserNameInput(username);
    await this.fillPasswordInput(password);
    await this.clickLoginButton();
  }

  async clickNewUserButton(): Promise<void> {
    const newUserButton = this.page.locator('button#newUser');
    await newUserButton.click();
  }

  async getOutputMessage(): Promise<string | null> {
    const outputMessage = this.page.locator('#output');
    return outputMessage.textContent();
  }

  async isUserNameInputInvalid(): Promise<boolean> {
    const userNameInput = this.page.locator('input#userName');
    const className = await userNameInput.getAttribute('class');
    return className?.includes('is-invalid') ?? false;
  }

  async isPasswordInputInvalid(): Promise<boolean> {
    const passwordInput = this.page.locator('input#password');
    const className = await passwordInput.getAttribute('class');
    return className?.includes('is-invalid') ?? false;
  }
}
