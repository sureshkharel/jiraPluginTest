import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly booksCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.booksCard = page.getByRole('link', { name: /book/i });
  }

  async goto(baseUrl: string) {
    await this.page.goto(baseUrl);
  }

  async visitBooksPage(): Promise<void> {
    await this.booksCard.click();
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
