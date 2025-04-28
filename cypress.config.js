const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.letskodeit.com",
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
    excludeSpecPattern: [
      'cypress/e2e/dropDownPractice.cy.js',
      'cypress/e2e/SelectorTesting.cy.js'
    ],
    viewportWidth: 1024,
    viewportHeight: 768,
  },
  defaultCommandTimeout: 20000,
});
