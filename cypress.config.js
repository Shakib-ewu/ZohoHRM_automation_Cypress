const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      pageLoadTimeout:10000;
      {
        "defaultCommandTimeout"; 10000
      }
      
    },
  },
});
