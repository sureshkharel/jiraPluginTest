import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the homepage', async function (this: CustomWorld) {
  await this.pages.home.goto(this.baseUrl);
});

Then('the page title should contain {string}', async function (this: CustomWorld, text: string) {
  await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
});

When('I click the Book Store Application', async function (this: CustomWorld) {
  await this.pages.home.visitBooksPage();
});

When('I search for {string}', async function (this: CustomWorld, term: string) {
  await this.pages.books.search(term);
});

Then('I should see results related to {string}', async function (this: CustomWorld, term: string) {
  const results = await this.pages.books.getSearchedItemsText();
  await expect(results).toEqual(expect.arrayContaining([expect.stringMatching(new RegExp(term, 'i'))]));
});
