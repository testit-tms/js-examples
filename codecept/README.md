# CodeceptJS example
Example of tests with CodeceptJS framework and adapter for Test IT

## Setup

1. Install [node.js version 16+](https://nodejs.org/)
2. Clone this repository `git clone https://github.com/testit-tms/js-examples.git && cd codecept`
3. Install dependencies `npm install`
4. Configure the tests to run in **testit-adapter.config.json** file. [How to configure?](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-codecept#configuration)
5. Run tests via `npx codeceptjs run --steps` to upload the results to TMS

## Project structure

* **tests/** – test files
    * **attachments/** - attachment files for tests
    * **annotations_test.ts** – simple test examples with [annotations testit-adapter-codecept](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-codecept#methods)
    * **methods_test.ts** – simple test examples with [methods testit-adapter-codecept](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-codecept#methods)
* **codecept.conf.ts** - [configuration file of CodeceptJS](https://codecept.io/configuration/#dynamic-configuration)
* **package.json** - [JSON representation](https://docs.npmjs.com/cli/v9/configuring-npm/package-json?v=true) of a NPM project
* **steps.d.ts** - file of [types for custom helper or page object](https://codecept.io/typescript/#types-for-custom-helper-or-page-object)
* **testit-adapter.config.json** - configuration file where specified base options for tests
