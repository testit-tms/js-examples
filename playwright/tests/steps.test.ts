import { test as base, expect } from "@playwright/test";
import { testit } from "testit-adapter-playwright";

const test = base.extend<{ prepare: void }>({
  prepare: async ({ }, use) => {
    await testit.step("Before Hooks", async () => {
      expect('passed').toBe('passed')
      // expect('fail').toBe('passed') // Для поломки теста
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
