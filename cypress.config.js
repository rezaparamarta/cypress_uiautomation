const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
    defualtCommandTimeout: 30000,
    baseUrl: "https://www.saucedemo.com/", // in milliseconds
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/commands.js",
    env: {
      valid_username: "standard_user",
      valid_password: "secret_sauce",
    },
    video: false,
  },
});
