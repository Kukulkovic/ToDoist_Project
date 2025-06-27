import { test as base } from '@playwright/test';
import { ILogObj, Logger } from 'tslog';
import { HomePage } from '../pages/HomePage';

interface Pages {
  homePage: HomePage;
}
interface Log {
  log: Logger<ILogObj>;
}

export const test = base.extend<Pages & Log>({
  log: async ({}, use) => {
    await use(new Logger<ILogObj>());
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';
