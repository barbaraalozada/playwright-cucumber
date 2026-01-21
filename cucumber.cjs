module.exports = {
  default: {
    requireModule: ['tsx', 'allure-cucumberjs'],
    require: [
      'tests/stepDefinitions/**/*.ts',
      'src/support/**/*.ts'
    ],
    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],
    formatOptions: {
      resultsDir: process.env.ALLURE_RESULTS_DIR || 'allure-results'
    },
    paths: ['tests/features/**/*.feature'],
    parallel: 1
  }
};
