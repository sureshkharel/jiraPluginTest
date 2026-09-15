import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { CustomWorld } from './world';
import { Pages } from '../pages/Pages';

let browser: Browser;

const HEADLESS = process.env.HEADLESS !== 'false';

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  browser = await chromium.launch({ headless: HEADLESS });
});

Before(async function (this: CustomWorld) {
  this.browser = browser;
  this.context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: process.env.RECORD_VIDEO === 'true' ? { dir: 'reports/videos' } : undefined
  });
  this.page = await this.context.newPage();
  this.pages = new Pages(this.page);
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');
  }
  await this.page?.close();
  await this.context?.close();
});

AfterAll(async function () {
  await browser?.close();
});