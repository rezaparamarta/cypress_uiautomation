const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile:"cypress/support/e2e.js",
    defualtCommandTimeout: 30000,
    baseUrl: "https://www.saucedemo.com/", // in milliseconds
    env: {
      
    }
  },
});
