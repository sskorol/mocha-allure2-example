# Allure 2 Mocha Report Examples

This project demonstrates how to use [allure-js](https://github.com/allure-framework/allure-js) with the official allure-decorators module. Note that it's based on the previous [ts-test-decorators](https://github.com/sskorol/ts-test-decorators) implementation.

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

Note that **.env** was pushed to show how to deal with `TMS_URL` / `PMS_URL` environment variables required to be set
while working with `@issue` / `@testCaseId` decorators.

![image](https://user-images.githubusercontent.com/6638780/47686511-3bf8fd00-dbe4-11e8-8732-02db6fd3a2d5.png)
