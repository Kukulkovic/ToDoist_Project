<h1>base-setup</h1>
This is a base setup for Playwright with TypeScript, designed to help you kickstart your end-to-end testing journey with best practices and ease of use. With this setup, you'll have a solid foundation to create fast, reliable, and maintainable automated tests, empowering you to deliver high-quality software efficiently.

It includes all necessary configurations and dependencies to get started with automated testing using Playwright and TypeScript, ensuring a seamless setup process and enabling you to focus on writing efficient and robust test cases right from the start.

<h2>Prerequisites</h2>
Before you start, make sure you have the following installed:

<li><a href="https://nodejs.org" rel="nofollow">Node.js</a> (v20 or later)</li>

<li><a href="https://www.npmjs.com/" rel="nofollow">npm</a></li>

<h2>Setup</h2>

<h4>Install dependencies:</h4>

npm install

<h2>Dependencies</h2>
The project includes the following dependencies:

@eslint/js
@faker-js/faker
@playwright/test
@types/node
eslint
eslint-config-prettier
eslint-plugin-playwright
prettier
typescript
typescript-eslint
dotenv
tslog

<h2>Scripts</h2>
The package.json file includes several scripts to help you run and manage your tests:

pretest: Runs TypeScript compiler without emitting files and lints the code using ESLint.
test: Runs all Playwright tests.
test:headed: Runs all Playwright tests in headed mode.
test:debug: Runs all Playwright tests in debug mode.
test:ui: Opens the Playwright test runner UI.
test:nolint: Runs all Playwright tests without linting.
show-report: Opens the Playwright test report.

<h2>Running Tests</h2>
To run the tests, you can use the following commands:

<h4>Install dependencies:</h4>

npm install

Run all tests:

npm run test
Run tests in headed mode:

npm run test:headed
Run tests in debug mode:

npm run test:debug
Open the Playwright test runner UI:

npm run test:ui
Run tests without linting:

npm run test:nolint
Show the Playwright test report:

npm run show-report
Configuration
The project is configured to use Prettier and ESLint for code formatting and linting. The configuration files are located in the .vscode directory and the root of the project:

settings.json: Contains VS Code settings for auto-saving, formatting, and linting.
extensions.json: Recommends extensions for VS Code.
tsconfig.json: TypeScript configuration file.
.prettierignore: Files and directories to ignore for Prettier.
.gitignore: Files and directories to ignore for Git.

<h2>License</h2>
This project is licensed under the ISC License.
