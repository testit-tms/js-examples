import { tmsCypress } from "testit-adapter-cypress/reporter";

export default {
  e2e: {
    setupNodeEvents(on, config) {
      tmsCypress(on, config);

      return config;
    },
  },
};