const { TestItFormatter } = require('testit-adapter-cucumber');

module.exports = class CustomFormatter extends TestItFormatter {
  constructor(options) {
    super(options, {
      url: 'https://test.testit.ru',
      privateToken: 'MU91Rm4wdVlkY1pERUZua0tN',
      projectId: '6786e133-66c2-4f3d-a88f-7d0e0ddc49a7',
      configurationId: '4416d71b-d287-4190-8393-3d441d28abaf'
    });
  }
};
