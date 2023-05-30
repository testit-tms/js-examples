import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  mocha: {
    "reporterOptions": {
        "mochaFile": "output/result.xml"
    }
  },
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: false,
      browser: 'chromium'
    },
    TestITHelper: {
      require: 'testit-adapter-codecept/build/helper.js'
    }
  },
  plugins: {
    TestITPlugin: {
      require: 'testit-adapter-codecept/build/bootstrap.js',
      enabled: true
    }
  },
  include: {

  },
  name: 'project-codecept',
  fullPromiseBased: false
}