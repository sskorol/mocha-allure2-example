# Allure 2 Mocha Report Examples

This project demonstrates how to use [mocha-allure2-reporter](https://github.com/sskorol/mocha-allure2-reporter) with [ts-test-decorators](https://github.com/sskorol/ts-test-decorators).

## Usage

Dependencies installation and tests execution:

```bash
yarn && yarn test
```

Test results report generation and opening:

```bash
yarn allure-report
```

Note that **.env** was pushed to show how to deal with `TMS_URL` / `PMS_URL` environment variables required to be set
while working with `@issue` / `@testCaseId` decorators.

![image](https://user-images.githubusercontent.com/6638780/47686511-3bf8fd00-dbe4-11e8-8732-02db6fd3a2d5.png)
