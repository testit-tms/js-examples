Feature('Annotations tests');

Scenario('Without annotation success', ({ I }) => {

  });

Scenario('Without annotation failed', ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With external id annotation success',
  {
    externalId: 'With_external_id_annotation_success',
  },
  ({ I }) => {
  });

Scenario('With external id annotation failed',
  {
    externalId: 'With_external_id_annotation_failed',
  },
  ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With display name annotation success',
  {
    displayName: 'With_display_name_annotation_success DisplayName',
  },
  ({ I }) => {
  });

Scenario('With display name annotation failed',
  {
    displayName: 'With_display_name_annotation_failed DisplayName',
  },
  ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With title annotation success',
  {
    title: 'title_annotation_success Title',
  },
  ({ I }) => {
  });

Scenario('With title annotation failed',
  {
    title: 'title_annotation_failed Title',
  },
  ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With description annotation success',
  {
    description: 'description_annotation_success Description',
  },
  ({ I }) => {
  });

Scenario('With description annotation failed',
  {
    description: 'description_annotation_failed Description',
  },
  ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With labels annotation success',
  {
    labels: ['Label1', 'Label2'],
  },
  ({ I }) => {
  });

Scenario('With labels annotation failed',
  {
    labels: ['Label1', 'Label2'],
  },
  ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With links annotation success',
  {
    links: [
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
    ],
  },
  ({ I }) => {
  });

Scenario('With links annotation failed',
  {
    links: [
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
    ],
  },
  ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With workitemids annotation success',
  {
    workitemIds: ['29280', '321']
  },
  ({ I }) => {
  });

Scenario('With workitemids annotation failed',
  {
    workitemIds: ['123', '321']
  },
  ({ I }) => {
    I.seeElement('//input');
  });

Scenario('With all annotations success',
  {
    externalId: 'With_all_annotations_success',
    displayName: 'With_all_annotations_success DisplayName',
    title: 'With_all_annotations_success Title',
    description: 'With_all_annotations_success Description',
    labels: ['Label1', 'Label2'],
    links: [
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
    ],
    workitemIds: ['29281', '321']
  },
  ({ I }) => {
  });

Scenario('With all annotations failed',
  {
    externalId: 'With_all_annotations_failed',
    displayName: 'With_all_annotations_failed DisplayName',
    title: 'With_all_annotations_failed Title',
    description: 'With_all_annotations_failed Description',
    labels: ['Label1', 'Label2'],
    links: [
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
    ],
    workitemIds: ['123', '321']
  },
  ({ I }) => {
    I.seeElement('//input');
  });

const data = new DataTable(['number', 'value']);

data.add([1, 'string01']);
data.add([2, 'string02']);
data.add([3, 'string03']);

Data(data).Scenario('Parametrized test success', ({ I, current }) => {
})

Data(data).Scenario('Parametrized test failed', ({ I, current }) => {
  I.seeElement('//input');
})
