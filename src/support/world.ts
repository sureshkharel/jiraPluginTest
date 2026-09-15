import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { Pages } from '../pages/Pages';

export interface CustomWorldParameters {
  baseUrl?: string;
}

export class CustomWorld extends World<CustomWorldParameters> {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  pages!: Pages;

  constructor(options: IWorldOptions<CustomWorldParameters>) {
    super(options);
  }

  get baseUrl(): string {
    return this.parameters.baseUrl ?? 'https://demoqa.com/';
  }
}
setWorldConstructor(CustomWorld);