import { When, Then } from '@cucumber/cucumber';
import type DataTable from '@cucumber/cucumber/lib/models/data_table';
import { expect } from '@playwright/test';
import { TextBoxPage } from '../pageObjects/TextBoxPage.ts';
import type { CustomWorld } from '../../src/support/World.ts';

When('I submit the form with valid personal information',
  async function (this: CustomWorld, table: DataTable) {
    const textBoxPage = new TextBoxPage(this.page);
    const [data] = table.hashes();
    await textBoxPage.fillForm(data.name, data.email, data.currentAddress, data.permanentAddress);
    await textBoxPage.clickSubmit();
  }
);

Then(
  'I should see my submitted information displayed',
  async function (this: CustomWorld) {
    const textBoxPage = new TextBoxPage(this.page);
    await expect(textBoxPage.getOutputSection()).toBeVisible();
  }
);
