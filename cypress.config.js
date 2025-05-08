const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile:"cypress/support/e2e.js",
    defualtCommandTimeout: 30000,
    baseUrl: "https://www.saucedemo.com/", // in milliseconds
  },
});
