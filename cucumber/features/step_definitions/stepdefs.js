const assert = require('assert');
const {
  When,
  Then,
} = require('@cucumber/cucumber');
const { join } = require('path');

Then('return true', function () {
  assert.ok(true);
});

Then('return false', function () {
  assert.ok(false);
});

When('get parameters {int} {string}', function (number, value) {
  assert.ok(true);
});

When('step01', function () {
});

When('add links', function () {
  this.addLinks([
    {
      url: 'https://test01.example',
      title: 'Example01',
      description: 'Example01 description',
      type: 'Issue',
    },
    {
      url: 'https://test02.example',
      title: 'Example02',
      description: 'Example02 description',
      type: 'Issue',
    },
  ]);
});

When('add attachments', function () {
  this.addAttachments([
    join(__dirname, '../attachments/file02.txt'),
    join(__dirname, '../attachments/file03.txt'),
    join(__dirname, '../attachments/file04.txt')
  ]);
});

When('add message', function () {
  this.addMessage("Message");
});

When('add all methods', function () {
  this.addLinks([
    {
      url: 'https://test01.example',
      title: 'Example01',
      description: 'Example01 description',
      type: 'Issue',
    },
    {
      url: 'https://test02.example',
      title: 'Example02',
      description: 'Example02 description',
      type: 'Issue',
    },
  ]);

  this.addAttachments([
    join(__dirname, '../attachments/file02.txt'),
    join(__dirname, '../attachments/file03.txt'),
    join(__dirname, '../attachments/file04.txt')
  ]);

  this.addMessage("Message");
});
