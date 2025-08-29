const adapter = require('testcafe-reporter-testit')();

import {
    join
} from "path";

fixture('TestCafé Example Fixture - Documentation').page('http://devexpress.github.io/testcafe/example');

const links = [{
        url: "https://test01.example",
        title: "Example01",
        description: "Example01 description",
        type: "Issue"
    },
    {
        url: "https://test02.example",
        title: "Example02",
        description: "Example02 description",
        type: "Issue"
    },
];

const paths = [
    join(__dirname, "../attachments/file.txt"),
    join(__dirname, "../attachments/image.jpg")
];

test.meta({
    externalId: 'externalId',
    displayName: 'displayName',
    description: 'description',
    title: 'title',
    namespace: 'namespace',
    classname: 'classname',
    workItemIds: ['1678', '1679'],
    labels: ['label1', 'label2'],
})('test', async t => {
    adapter.addMessage(t, "Message");
    adapter.addAttachments(t, paths);
    adapter.addLinks(t, links);
});

test.meta({
    externalId: 'externalId failed',
    displayName: 'displayName failed',
    description: 'description failed',
    title: 'title failed',
    namespace: 'namespace failed',
    classname: 'classname failed',
    workItemIds: ['1678', '1679'],
    labels: ['label1', 'label2'],
})('test failed', async t => {
    await t.expect(false).ok();
});