const assert = require('assert');
const {
  Given,
  When,
  Then,
  defineParameterType,
} = require('@cucumber/cucumber');
const { checkNumber } = require('../checkNumber');
const { checkWord } = require('../checkWord');
const { readFileSync } = require('fs');
const { Stream, Readable } = require('stream');
const { join } = require('path');

defineParameterType({
  name: 'boolean',
  regexp: /true|false/,
  transformer: (s) => {
    return s.trim() === 'true';
  },
});
defineParameterType({
  name: 'array',
  regexp: /(\w+\s*(,\s*\w+)+)/,
  transformer: (s) => {
    return s
      .trim()
      .split(',')
      .map((item) => item.trim());
  },
});

Given('String {string}', function (value) {
  this.str = value;
});

When('I execute number check function', function () {
  this.answer = checkNumber(this.str);
});

When('I execute word check function', function () {
  this.answer = checkWord(this.str);
});

Then('Result should be {boolean}', function (expectedAnswer) {
  assert.strictEqual(this.answer, expectedAnswer);
});

Given('Browser is opened', function () {
  const thisFile = join(__dirname, 'stepdefs.js');
  this.addAttachments([thisFile]);
});
Given('Logged in as admin', function () {});
When('Click on user profile button', function () {
  throw new Error('Bad')
});
When('Click on add button', function () {});
Then('Navigate to user profile page', function () {});
Then('Create modal is opened', function () {});
Then('Create modal is not opened', async function () {});

When('{int}+{int}', function (value1, value2) {
  this.addMessage("dfl;ahsd;lfkjasdlkfjl;asdf");
  this.addLinks([
    {
      url: 'https://google.com',
    },
    {
      url: 'https://doka.guide',
      title: 'Doka.guide',
      description: 'Добрая энциклопедия для веб-разработчиков',
    },
  ]);
  this.sum = value1 + value2;
});
Then('Result is {int}', function (expected) {
  assert.strictEqual(this.sum, expected);
});

Given('Long string', function (text) {
  this.str = text;
});
When('Check length', function () {
  this.answer = this.str.length;
});
Then('Length is not {int}', function (exected) {
  assert.notStrictEqual(this.answer, exected);
});
Given('Users data', function (table) {
  this.table = table.hashes();
});
When('Check that {array} contains {string}', function (array, value) {
  this.answer = array.every((key) => {
    return this.table.every((row) => row[key].includes(value));
  });
});
