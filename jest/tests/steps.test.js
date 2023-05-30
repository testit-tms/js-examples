const { join } = require('path');

test('steps With Title', () => {
  testit.step('Step01 Title');
  testit.step('Step02 Title');

  expect(true).toBe(true);
});

test('steps With Title and Description', () => {
  testit.step('Step01 Title', 'Description');
  testit.step('Step02 Title', 'Description');

  expect(true).toBe(true);
});

test('Steps With Attachments', () => {
  testit.step('Step01 With Attachments');
  testit.addAttachments('Content', 'file01.txt');
  testit.addAttachments([join(__dirname, 'attachments/file02.txt')]);

  testit.step('Step02 With Attachments');
  const paths = [
    join(__dirname, 'attachments/file03.txt'),
    join(__dirname, 'attachments/file04.txt')
  ];
  testit.addAttachments(paths);

  expect(true).toBe(true);
});
