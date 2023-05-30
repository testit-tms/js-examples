# Jest example
Example of tests with Jest framework and adapter for Test IT

## Setup

1. Install [node.js version 16+](https://nodejs.org/)
2. Clone this repository `git clone https://github.com/testit-tms/js-examples.git && cd jest`
3. Install dependencies `npm install`
4. Configure the tests to run in **jest.config.js** file. [How to configure?](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-jest#configuration)
5. Run tests via `npm run test` to upload the results to TMS

## Project structure

* **tests/** – test files
    * **attachments/** - attachment files for tests
    * **annotations.test.js** – simple test examples with [annotations testit-adapter-jest](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-jest#methods)
    * **methods.test.js** – simple test examples with [methods testit-adapter-jest](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-jest#methods)
    * **steps.test.js** – simple test examples with [steps testit-adapter-jest](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-jest#methods)
* **jest.config.js** - [configuration file of Jest](https://jestjs.io/docs/configuration)
* **package.json** - [JSON representation](https://docs.npmjs.com/cli/v9/configuring-npm/package-json?v=true) of a NPM project
