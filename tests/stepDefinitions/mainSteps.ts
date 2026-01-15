import { Given, When } from '@cucumber/cucumber';
import { MainPage } from '../pageObjects/MainPage';
import type { CustomWorld } from '../../src/support/World';

Given('I am on the {string} page', async function (this: CustomWorld, pageName: string) {
  const mainPage = new MainPage(this.page);
  await mainPage.open();
  await mainPage.goToPage(pageName);
});

When('I navigate to {string}', async function (this: CustomWorld, menuItem: string) {
  const mainPage = new MainPage(this.page);
  await mainPage.navigateToMenuItem(menuItem);
});
