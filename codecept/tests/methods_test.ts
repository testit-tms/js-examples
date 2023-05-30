Feature('Methods tests');

Scenario(
  'Add links success', ({ I }) => {
  I.addLinks([
    {
    title: 'Example01',
    description: 'Example01_description',
    url: 'https://test01.example',
    type: 'Issue'
    },
    {
    title: 'Example02',
    description: 'Example02_description',
    url: 'https://test02.example',
    type: 'Issue'
    }
  ]);
});

Scenario(
  'Add links failed', ({ I }) => {
  I.addLinks([
    {
    title: 'Example01',
    description: 'Example01_description',
    url: 'https://test01.example',
    type: 'Issue'
    },
    {
    title: 'Example02',
    description: 'Example02_description',
    url: 'https://test02.example',
    type: 'Issue'
    }
  ]);
  I.seeElement('//input');
});

Scenario(
  'Add attachments success', ({ I }) => {
  I.addAttachments('Content', 'file01.txt');
  I.addAttachments([__dirname + 'attachments/file02.txt']);
  const paths = [
    __dirname + 'attachments/file03.txt',
    __dirname + 'attachments/file04.txt'
  ];
  I.addAttachments(paths);
});

Scenario(
  'Add attachments failed', ({ I }) => {
  I.addAttachments('Content', 'file01.txt');
  I.addAttachments([__dirname + 'attachments/file02.txt']);
  const paths = [
    __dirname + 'attachments/file03.txt',
    __dirname + 'attachments/file04.txt'
  ];
  I.addAttachments(paths);
  I.seeElement('//input');
});

Scenario(
  'Add message success', ({ I }) => {
  I.addMessage('Message');
});

Scenario(
  'Add message failed', ({ I }) => {
  I.addMessage('Message');
  I.seeElement('//input');
});

Scenario(
  'Add all methods success', ({ I }) => {
  I.addLinks([
    {
    title: 'Example01',
    description: 'Example01_description',
    url: 'https://test01.example',
    type: 'Issue'
    },
    {
    title: 'Example02',
    description: 'Example02_description',
    url: 'https://test02.example',
    type: 'Issue'
    }
  ]);
  I.addAttachments('Content', 'file01.txt');
  I.addAttachments([__dirname + 'attachments/file02.txt']);
  const paths = [
    __dirname + 'attachments/file03.txt',
    __dirname + 'attachments/file04.txt'
  ];
  I.addAttachments(paths);
  I.addMessage('Message');
});

Scenario(
  'Add all methods failed', ({ I }) => {
  I.addLinks([
    {
    title: 'Example01',
    description: 'Example01_description',
    url: 'https://test01.example',
    type: 'Issue'
    },
    {
    title: 'Example02',
    description: 'Example02_description',
    url: 'https://test02.example',
    type: 'Issue'
    }
  ]);
  I.addAttachments('Content', 'file01.txt');
  I.addAttachments([__dirname + 'attachments/file02.txt']);
  const paths = [
    __dirname + 'attachments/file03.txt',
    __dirname + 'attachments/file04.txt'
  ];
  I.addAttachments(paths);
  I.addMessage('Message');
  I.seeElement('//input');
});
