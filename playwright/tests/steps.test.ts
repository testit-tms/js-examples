import { test as base, expect } from "@playwright/test";
import { testit } from "testit-adapter-playwright";

const test = base.extend<{ prepare: void }>({
  prepare: async ({ }, use) => {
    await testit.step("Before Hooks", async () => {
      //expect('passed').toBe('passed')
      expect('fail').toBe('passed') // Для поломки теста
    });

    await use()

    await testit.step("After Hooks", async () => {
      expect('passed').toBe('passed')
    });
  },
});

test('Тест поломки дерева', async ({ prepare }) => {
  await testit.namespace('Отладка автотестов')
  await testit.classname('Баг поломки дерева');
  await testit.description('Сначал тест запусть успешно, после сломать в фикстуре и запустить ещё раз.');

  await testit.step("Шаг теста", async () => { });
  await testit.step("Шаг теста", async () => { });
  await testit.step("Шаг теста", async () => { });
});



test("test with steps success", async () => {
  testit.step("Step01 Title", async () => {});
  testit.step("Step02 Title", async () => {});

  expect(true).toBe(true);
});

test("test with steps failed", async () => {
  testit.step("Step01 Title", async () => {
    expect(true).toBe(false);
  });
  testit.step("Step02 Title", async () => {
    expect(true).toBe(true);
  });

  expect(true).toBe(false);
});

test("test with steps with attachments", async () => {
  testit.step("Step01 Title", async () => {
    testit.addAttachment("file01.txt", "Content", {
      contentType: "application/json",
    });
  });
  testit.step("Step02 Title", async () => {
    testit.addAttachment("file02.txt", "Content", {
      contentType: "application/json",
    });
  });

  expect(true).toBe(true);
});



test('nested steps three levels deep', async () => {
  testit.externalId('nested_steps_three_levels');
  testit.namespace('Infowatch');
  testit.classname('Steps');

  await testit.step('Level 1 — preparation', async () => {
    await testit.step('Level 2 — open context', async () => {
      await testit.step('Level 3 — load config', async () => {
        expect(true).toBe(true);
      });

      await testit.step('Level 3 — validate environment', async () => {
        expect(process.version).toBeTruthy();
      });
    });

    await testit.step('Level 2 — prepare data', async () => {
      await testit.step('Level 3 — create fixtures', async () => {
        const data = { id: 1, name: 'sample' };
        expect(data.id).toBe(1);
      });

      await testit.step('Level 3 — seed database', async () => {
        expect([1, 2, 3]).toContain(2);
      });
    });
  });

  await testit.step('Level 1 — execution', async () => {
    await testit.step('Level 2 — run scenario', async () => {
      await testit.step('Level 3 — step A', async () => {
        expect('done').toBe('done');
      });

      await testit.step('Level 3 — step B', async () => {
        expect(1 + 1).toBe(2);
      });
    });

    await testit.step('Level 2 — collect results', async () => {
      await testit.step('Level 3 — aggregate metrics', async () => {
        expect(Math.max(1, 5, 3)).toBe(5);
      });
    });
  });

  await testit.step('Level 1 — cleanup', async () => {
    await testit.step('Level 2 — teardown', async () => {
      await testit.step('Level 3 — release resources', async () => {
        expect(true).toBe(true);
      });
    });
  });
});
