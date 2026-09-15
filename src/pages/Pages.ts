import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { BooksPage } from './BooksPage';

export class Pages {
  readonly home: HomePage;
  readonly books: BooksPage;

  constructor(page: Page) {
    this.home = new HomePage(page);
    this.books = new BooksPage(page);
  }
}