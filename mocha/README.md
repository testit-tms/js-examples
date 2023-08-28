# Mocha example
Example of tests with Mocha framework and adapter for Test IT

## Setup

1. Install [node.js version 16+](https://nodejs.org/)
2. Clone this repository `git clone https://github.com/testit-tms/js-examples.git && cd mocha`
3. Install dependencies `npm install`
4. Configure the tests to run in **tms.config.js** file. [How to configure?](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-mocha#configuration)
5. Run tests via `npx mocha` to upload the results to TMS

## Project structure

* **tests/** – test files
    * **attachments/** - attachment files for tests
    * **annotations.spec.js** – simple test examples with [properties testit-adapter-mocha](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-mocha#properties)
    * **methods.spec.js** – simple test examples with [methods testit-adapter-mocha](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-mocha#methods)
    * **steps.spec.js** – simple test examples with [steps testit-adapter-mocha](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-mocha#simple-test)
* **.mocharc.js** - [configuration file of Mocha](https://mochajs.org/#configuring-mocha-nodejs)
* **package.json** - [JSON representation](https://docs.npmjs.com/cli/v9/configuring-npm/package-json?v=true) of a NPM project
* **tms.config.json** - configuration file where specified base options for tests
