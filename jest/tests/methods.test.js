const { join } = require('path');

test('addLinks success', async () => {
  testit.addLinks([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  expect(true).toBe(true);
});

test('addLinks failed', async () => {
  testit.addLinks([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  expect(true).toBe(false);
});

test('addAttachments success', async () => {
  testit.addAttachments('Content', 'file01.txt');
  testit.addAttachments([join(__dirname, 'attachments/file02.txt')]);
  const paths = [
    join(__dirname, 'attachments/file03.txt'),
    join(__dirname, 'attachments/file04.txt')
  ];
  testit.addAttachments(paths);

  expect(true).toBe(true);
});

test('addAttachments failed', async () => {
  testit.addAttachments('Content', 'file01.txt');
  testit.addAttachments([join(__dirname, 'attachments/file02.txt')]);
  const paths = [
    join(__dirname, 'attachments/file03.txt'),
    join(__dirname, 'attachments/file04.txt')
  ];
  testit.addAttachments(paths);

  expect(true).toBe(false);
});

test('addMessage success', async () => {
  testit.addMessage('Message');

  expect(true).toBe(true);
});

test('addMessage failed', async () => {
  testit.addMessage('Message');

  expect(true).toBe(false);
});

test('all Methods success', async () => {
  testit.addLinks([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  testit.addAttachments('Content', 'file01.txt');
  testit.addAttachments([join(__dirname, 'attachments/file02.txt')]);
  const paths = [
    join(__dirname, 'attachments/file03.txt'),
    join(__dirname, 'attachments/file04.txt')
  ];
  testit.addAttachments(paths);

  testit.addMessage('Message');

  expect(true).toBe(true);
});

test('all Methods failed', async () => {
  testit.addLinks([
    { url: 'https://test01.example', title:  'Example01', description: 'Example01 description', type: 'Issue'},
    { url: 'https://test02.example', title:  'Example02', description: 'Example02 description', type: 'Issue'},
  ]);

  testit.addAttachments('Content', 'file01.txt');
  testit.addAttachments([join(__dirname, 'attachments/file02.txt')]);
  const paths = [
    join(__dirname, 'attachments/file03.txt'),
    join(__dirname, 'attachments/file04.txt')
  ];
  testit.addAttachments(paths);

  testit.addMessage('Message');

  expect(true).toBe(false);
});
