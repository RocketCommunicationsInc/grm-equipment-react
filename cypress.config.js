const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
    includeShadowDom: true,
  },

  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
