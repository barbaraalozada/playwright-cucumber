module.exports = {
  default: {
    import: [
      'tests/stepDefinitions/**/*.ts',
      'src/support/**/*.ts'
    ],
    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      resultsDir: 'allure-results'
    },
    paths: ['tests/features/**/*.feature'],
    parallel: 1
  }
};
