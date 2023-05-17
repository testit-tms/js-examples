const { TestItFormatter } = require('testit-adapter-cucumber');

module.exports = class CustomFormatter extends TestItFormatter {
  constructor(options) {
    super(options, {
      url: 'URL',
      privateToken: 'USER_PRIVATE_TOKEN',
      projectId: 'PROJECT_ID',
      configurationId: 'CONFIGURATION_ID',
      testRunId: 'TEST_RUN_ID',
    });
  }
};
