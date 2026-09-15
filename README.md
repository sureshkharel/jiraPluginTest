# Playwright + Cucumber + TypeScript

A BDD end-to-end test framework combining Playwright (browser automation) with Cucumber (Gherkin syntax) and TypeScript.

## Project structure

```
.
├── features/
│   ├── example.feature              # Gherkin scenarios
│   ├── step-definitions/
│   │   └── example.steps.ts         # Step implementations
│   └── support/
│       ├── world.ts                 # Custom Cucumber World (holds Playwright page/context)
│       └── hooks.ts                 # Before/After hooks (browser lifecycle, screenshots)
├── src/
│   ├── pages/
│   │   └── SearchPage.ts            # Page Object Model example
│   └── utils/
│       └── generate-report.js       # HTML report generator
├── cucumber.js                      # Cucumber config
├── tsconfig.json
└── package.json
```

## Setup

1. Extract this project and open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright's browser binaries:
   ```bash
   npx playwright install
   ```

## Running tests

Run all scenarios (headless by default):
```bash
npm test
```

Run in headed mode (see the browser):
```bash
HEADLESS=false npm test
```
> On Windows (PowerShell): `$env:HEADLESS="false"; npm test`

Run only scenarios tagged `@smoke`:
```bash
npm run test:tags "@smoke"
```

Generate a styled HTML report after running:
```bash
npm run test:report
```
Then open `reports/cucumber-report-styled.html` in a browser.

## How it fits together

- **Feature files** (`features/*.feature`) describe behavior in Gherkin (Given/When/Then).
- **Step definitions** (`features/step-definitions/*.steps.ts`) map Gherkin steps to TypeScript code that drives Playwright.
- **World** (`features/support/world.ts`) is Cucumber's per-scenario context object; it holds the Playwright `page`/`context` and any Page Objects so steps can share state.
- **Hooks** (`features/support/hooks.ts`) launch one shared browser for the whole run, open a fresh context/page per scenario (test isolation), and attach a screenshot to the report on failure.
- **Page Objects** (`src/pages/*.ts`) encapsulate locators and actions for a page, keeping step definitions thin and readable.

## Customizing

- Change the default `baseUrl` in `features/support/world.ts`, or pass it via Cucumber's `--world-parameters '{"baseUrl":"https://your-site.com"}'`.
- Add new `.feature` files under `features/`, matching step definitions under `features/step-definitions/`.
- Add new Page Objects under `src/pages/` as your app grows.

## Notes

- The example feature targets `https://example.com` by default — swap in your own app's URL to see real scenarios pass/fail.
- `RECORD_VIDEO=true npm test` will record video of each scenario into `reports/videos/`.
