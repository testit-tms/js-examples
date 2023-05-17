# CucumberJS example
Example of tests with CucumberJS framework and adapter for Test IT

## Setup

1. Install [node.js version 16+](https://nodejs.org/)
2. Clone this repository `git clone https://github.com/testit-tms/js-examples.git && cd cucumberJs`
3. Install dependencies `npm install`
4. Configure the tests to run in **testitFormatter.js** file. [How to configure?](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-cucumber#configuration)
5. Run tests via `npm run test` to upload the results to TMS

## Project structure

* **features/** – test files
    * **step_definitions/** – step files
* **cucumber.js** - [configuration file of CucumberJS](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#configuration)
* **package.json** - [JSON representation](https://docs.npmjs.com/cli/v9/configuring-npm/package-json?v=true) of a NPM project
* **testitFormatter.js** - configuration file where specified base options for tests
