import { expect, Locator, Page } from '@playwright/test';

export class BooksPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchedItems: Locator;
//   readonly resultsHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: /search/i });
    this.searchedItems = page.locator('tbody tr td:nth-child(2)');
    // this.resultsHeading = page.getByRole('heading', { level: 1 });
  }

  async goto(baseUrl: string): Promise<void> {
    await this.page.goto(`${baseUrl}books`);
  }
  
  async search(term: string): Promise<void> {
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }
  
//   async getHeadingText(): Promise<string> {
//     return (await this.resultsHeading.textContent()) ?? '';
//   }

async getSearchedItemsText(): Promise<string[]> {
    const items = await this.searchedItems.allTextContents();
    return items.map(item => item.trim());
  }
}