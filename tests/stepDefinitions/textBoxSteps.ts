import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TextBoxPage } from '../pageObjects/TextBoxPage';
import type { CustomWorld } from '../../src/support/World';
import { getTextBoxData } from '../data/textBox.factory';
import type { TextBoxDataType } from '../data/types/textBox.types';

When('the user submits the form with {word} data', async function (this: CustomWorld, dataType: TextBoxDataType) {
  const textBoxPage = new TextBoxPage(this.page);
  const data = getTextBoxData(dataType);
  await textBoxPage.fillForm(data.name, data.email, data.currentAddress, data.permanentAddress);
  await textBoxPage.clickSubmit();
});

Then('the submitted information is displayed to the user', async function (this: CustomWorld) {
  const textBoxPage = new TextBoxPage(this.page);
  await expect(textBoxPage.getOutputSection()).toBeVisible();
});

Then('the email field shows validation error', async function (this: CustomWorld) {
  const textBoxPage = new TextBoxPage(this.page);
  const isInvalid = await textBoxPage.isEmailInputInvalid();
  expect(isInvalid).toBe(true);
});
