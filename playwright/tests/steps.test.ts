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


@testit.displayName('Автотест с вложенными шагами')
def test_nested_steps():
    with testit.step('Шаг 1: Подготовка окружения'):
        with testit.step('Подшаг 1.1: Запуск приложения'):
            with testit.step('Действие 1.1.1: Открыть главную страницу'):
                pass
            with testit.step('Действие 1.1.2: Дождаться загрузки'):
                pass

        with testit.step('Подшаг 1.2: Авторизация'):
            with testit.step('Действие 1.2.1: Ввести логин'):
                pass
            with testit.step('Действие 1.2.2: Ввести пароль'):
                pass

    with testit.step('Шаг 2: Выполнение сценария'):
        with testit.step('Подшаг 2.1: Создание записи'):
            with testit.step('Действие 2.1.1: Открыть форму'):
                pass
            with testit.step('Действие 2.1.2: Заполнить поля'):
                pass

        with testit.step('Подшаг 2.2: Сохранение'):
            with testit.step('Действие 2.2.1: Нажать кнопку «Сохранить»'):
                pass
            with testit.step('Действие 2.2.2: Проверить уведомление'):
                pass

    with testit.step('Шаг 3: Проверка результата'):
        with testit.step('Подшаг 3.1: Проверка данных'):
            with testit.step('Действие 3.1.1: Найти запись в списке'):
                pass
            with testit.step('Действие 3.1.2: Сверить значения полей'):
                pass

    assert True

