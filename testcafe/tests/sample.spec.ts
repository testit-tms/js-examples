import {
    Selector
} from 'testcafe';


fixture`Bug Repro`.page`${'https://testcafe.io'}`

test('Bug Repro', async (t) => {
    await t.expect(Selector('.logo').exists).ok()
})

test('Bug Repro failed', async (t) => {
    await t.expect(Selector('.logo').exists).ok()
    await t.expect(false).ok();
})