<h1>base-setup</h1>
This is a base setup for Playwright with TypeScript, designed to help you kickstart your end-to-end testing journey with best practices and ease of use. With this setup, you'll have a solid foundation to create fast, reliable, and maintainable automated tests, empowering you to deliver high-quality software efficiently.

It includes all necessary configurations and dependencies to get started with automated testing using Playwright and TypeScript, ensuring a seamless setup process and enabling you to focus on writing efficient and robust test cases right from the start.

<h2>Prerequisites</h2>
Before you start, make sure you have the following installed:

<li><a href="https://nodejs.org" rel="nofollow">Node.js</a> (v20 or later)</li>

<li><a href="https://www.npmjs.com/" rel="nofollow">npm</a></li>

<h2>Setup</h2>

<h4>Install dependencies:</h4>

<pre>npm install</pre>

<h2>Dependencies</h2>
The project includes the following dependencies:

<li><code>@eslint/js</code></li>
<li><code>@faker-js/faker</code></li>
<li><code>@playwright/test</code></li>
<li><code>@types/node</code></li>
<li><code>eslint</code></li>
<li><code>eslint-config-prettier</code></li>
<li><code>eslint-plugin-playwright</code></li>
<li><code>prettier</code></li>
<li><code>typescript</code></li>
<li><code>typescript-eslint</code></li>
<li><code>dotenv</code></li>
<li><code>tslog</code></li>

<h2>Scripts</h2>
The <code>package.json</code> file includes several scripts to help you run and manage your tests:

<li><code>pretest:</code></li> Runs TypeScript compiler without emitting files and lints the code using ESLint.
<li><code>test:</code></li> Runs all Playwright tests.
<li><code>test:headed:</code></li> Runs all Playwright tests in headed mode.
<li><code>test:debug:</code></li> Runs all Playwright tests in debug mode.
<li><code>test:ui:</code></li> Opens the Playwright test runner UI.
<li><code>test:nolint:</code></li> Runs all Playwright tests without linting.
<li><code>show-report:</code></li> Opens the Playwright test report.

<h2>Running Tests</h2>
To run the tests, you can use the following commands:
<ol dir="auto">
<li><p dir="auto">Install dependencies:</p>
<pre>npm install</pre></li>
<li><p dir="auto">Run all tests:</p>
<pre>npm run test</pre></li>

<li><p dir="auto">Run tests in headed mode:</p>
<pre>npm run test:headed</pre></li>

<li><p dir="auto">Run tests in debug mode:</p>
<pre>npm run test:debug</pre></li>

<li><p dir="auto">Open the Playwright test runner UI:</p>
<pre>npm run test:ui</pre></li>

<li><p dir="auto">Run tests without linting:</p>
<pre>npm run test:nolint</pre></li>

<li><p dir="auto">Show the Playwright test report:</p>
<pre>npm run show-report</pre></li>
</ol>

<h2>Configuration</h2>
The project is configured to use Prettier and ESLint for code formatting and linting. The configuration files are located in the <code>.vscode</code> directory and the root of the project:

<li><Code>settings.json</Code>: Contains VS Code settings for auto-saving, formatting, and linting.</li>
<li><Code>extensions.json</Code>: Recommends extensions for VS Code.</li>
<li><Code>tsconfig.json</Code>: TypeScript configuration file.</li>
<li><Code>.prettierignore</Code>: Files and directories to ignore for Prettier.</li>
<li><Code>.gitignore</Code>: Files and directories to ignore for Git.</li>

<h2>Reminder</h2>
Remember to create <code>.env</code> file and populate it with credentials as following
<br>USERNAME={your-user-name}
<br>PASSWORD={your-password}
