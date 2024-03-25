# Playwright API Framework

This is a generic framework for running API tests with Playwright.

## Installation

To install the framework and its dependencies, you can use npm:

```bash
npm install
```

## Usage

### Running Tests

To run the tests, execute the following command:

```bash
npm run tests
```
This command will remove any previous reports, run ESLint to ensure code quality, and then execute the API tests using Playwright.

To run the tests, and view the Allure report right after the execution, run the following command:

```bash
npm run tests-and-allure-report
```

This command will remove any previous reports, run ESLint to ensure code quality, execute the API tests using Playwright, and then form and open Allure report automatically.

To run specifically annotated tests, execute the following command:

```bash
npx playwright test --config=src/config/playwright.config.js --grep @SMOKE
```
This is example of how to run tests annotated with '@SMOKE' tag. Replace '@SMOKE' with a desired annotation.
List of available annotations: 

1. @SMOKE
2. @REGRESSION
3. NEGATIVE
4. @GET 
5. @POST
6. @PUT 
7. @PATCH
8. @DELETE

### Viewing Reports

#### Playwright Report

To view the Playwright report, use the following command:

```bash
npm run playwright-report
```

#### Allure Report

To generate and view an Allure report for the tests, use the following commands:

```bash
npm run allure-report
```

This command will generate Allure reports from the test results and open them in your default browser.

### Continuous Integration

The framework is integrated with Husky to run tests and generate reports before each commit. It ensures that tests pass and reports are up-to-date before code changes are committed.
Test can aslo be run through the Github Actions manually:
1. Go to Actions tab.
2. Select "Palywright API Tests" workflow.
3. Click on "Run workflow button".
   
To view the Allure report after tests have been run:
1. Go to Actions tab.
2. Select "All workflows".
3. Click on the most recent "pages build and deployment" finished workflow.
4. Click on the link in the "deploy" section of the workflow to access the report.
![image](https://github.com/alexkashin90/playwright-api-framework/assets/72413770/37945bc1-8852-4451-a2c9-22e881db395d)


## Author

- **Aleksandr Kashin**
