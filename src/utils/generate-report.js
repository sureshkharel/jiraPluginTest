const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report-styled.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'Test Environment': process.env.TEST_ENV || 'local',
    Platform: process.platform,
    Executed: 'Local'
  }
};

reporter.generate(options);
