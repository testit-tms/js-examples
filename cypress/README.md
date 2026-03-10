# Cypress example
Example of tests with Cypress framework and adapter for Test IT

## Setup

1. Install [node.js version 16+](https://nodejs.org/)
2. Clone this repository `git clone https://github.com/testit-tms/js-examples.git && cd cypress`
3. Install dependencies `npm install`
4. Configure the tests to run in **tms.config.js** file. [How to configure?](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-cypress#configuration)
5. Run tests via `npx cypress run` to upload the results to TMS

## Project structure

* **cypress/** – cypress files
    * **e2e/** – test files
        * **methods.cy.js** – simple test examples with [methods testit-adapter-cypress](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-cypress#methods)
        * **steps.cy.js** – simple test examples with [steps testit-adapter-cypress](https://github.com/testit-tms/adapters-js/tree/main/testit-adapter-cypress#methods)
    * **support/** – support cypress files
        * **e2e.js** – simple support file for e2e tests
* **cypress.config.js** - [configuration file of Cypress](https://docs.cypress.io/app/references/configuration)
* **package.json** - [JSON representation](https://docs.npmjs.com/cli/v9/configuring-npm/package-json?v=true) of a NPM project
* **tms.config.json** - configuration file where specified base options for tests
