const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t3qxar",
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1366,
    // pageLoadTimeout: 120000,
    // defaultCommandTimeout: 12000
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})