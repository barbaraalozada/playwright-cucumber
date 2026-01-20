import { When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pageObjects/loginPages/LoginPage';
import { ProfilePage } from '../pageObjects/loginPages/ProfilePage';
import { RegisterPage } from '../pageObjects/loginPages/RegisterPage';
import type { CustomWorld } from '../../src/support/World';
import { EnvConfig } from '../../src/helpers/EnvConfig';
import { getCredentials } from '../data/credentials.factory';
import type { CredentialType } from '../data/types/credentials.types';
import { expect } from '@playwright/test';
import errorMessages from '../data/errorMessages.json';

When('the user logs in with valid credentials', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.submitLoginForm(EnvConfig.getBookStoreUserName(), EnvConfig.getBookStorePassword());
});

Then('the user can see its profile page', async function (this: CustomWorld) {
  const profilePage = new ProfilePage(this.page);
  await profilePage.isPageOpened();
});

When('the user attempts to log in with an {word} username and a valid password', async function (this: CustomWorld, credentialType: CredentialType) {
  const loginPage = new LoginPage(this.page);
  const creds = getCredentials(credentialType);
  await loginPage.submitLoginForm(creds.username, EnvConfig.getBookStorePassword());
});

Then('an authentication error message is displayed', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const message = await loginPage.getOutputMessage();
  expect(message).toContain(errorMessages.login.invalidCredentials);
});

Then('the username field shows validation error', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  const isInvalid = await loginPage.isUserNameInputInvalid();
  expect(isInvalid).toBe(true);
});

When('the user attempts to log in with a deleted account', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.submitLoginForm(EnvConfig.getBookStoreDeletedUserName(), EnvConfig.getBookStoreDeletedPassword());
});

When('the user navigates to the registration page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.clickNewUserButton();
  const registerPage = new RegisterPage(this.page);
  await registerPage.isPageOpened();
});

When('the user clicks on the {string} button', async function (this: CustomWorld, buttonName: string) {
  if (buttonName === 'Back to Login') {
    const registerPage = new RegisterPage(this.page);
    await registerPage.clickBackToLoginButton();
  }
});

Then('the login page is displayed', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  await loginPage.isPageOpened();
});
