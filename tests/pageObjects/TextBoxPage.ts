import type { Page, Locator } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillFullNameInput(fullName: string): Promise<void> {
    await this.page.locator('#userName').fill(fullName);
  }

  async fillEmailInput(email: string): Promise<void> {
    await this.page.locator('#userEmail').fill(email);
  }

  async fillCurrentAddressInput(address: string): Promise<void> {
    await this.page.locator('#currentAddress').fill(address);
  }

  async fillPermanentAddressInput(permanentAddress: string): Promise<void> {
    await this.page.locator('#permanentAddress').fill(permanentAddress);
  }

  async fillForm(name: string, email: string, currentAddress: string, permanentAddress: string): Promise<void> {
    await this.fillFullNameInput(name);
    await this.fillEmailInput(email);
    await this.fillCurrentAddressInput(currentAddress);
    await this.fillPermanentAddressInput(permanentAddress);
  }

  async clickSubmit(): Promise<void> {
    await this.page.locator('#submit').click();
  }

  getOutputSection(): Locator {
    return this.page.locator('#output');
  }
}
