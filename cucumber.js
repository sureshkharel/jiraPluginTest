const common = {
  requireModule: ['ts-node/register'],
  require: [
    'src/step-definitions/**/*.ts',
    'src/support/**/*.ts'
  ],
  format: [
    'progress-bar',
    'html:reports/cucumber-report.html',
    'json:reports/cucumber-report.json'
  ],
  formatOptions: {
    snippetInterface: 'async-await'
  }
};

module.exports = {
  default: {
    ...common,
    paths: [
      'src/features/**/*.feature'
    ]
  }
};