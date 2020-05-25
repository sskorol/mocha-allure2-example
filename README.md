# Allure 2 Mocha Report Examples

This project demonstrates how to use [allure-js](https://github.com/allure-framework/allure-js) with [ts-test-decorators](https://github.com/sskorol/ts-test-decorators).

## Usage

Dependencies installation and tests execution:

```bash
npm install
npm test
```

Test results report generation and opening:

```bash
npm run allure-report
```

Note that **.env** was pushed to show how to work with `TMS_URL` / `PMS_URL` environment variables required to be set
while working with `@issue` / `@testCaseId` decorators.
