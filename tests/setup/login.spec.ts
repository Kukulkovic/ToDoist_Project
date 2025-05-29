import { expect, test } from 'playwright/test';

test('login to todoist account', { tag: ['@setup', '@wip'] }, async ({ page }) => {
  await page.goto('login');

  const email = process.env.EMAIL
  const password = process.env.PASSWORD

  if (!email || !password) {
    throw new Error('username or password is not defined in env variables');}


  await page.locator('#element-0').pressSequentially(email);
  await page.locator('#element-2').pressSequentially(password);
  await page.getByRole('button', { name: 'Logowanie' }).click();
  await expect(page).toHaveURL('https://app.todoist.com/app/today');
  await expect(page).toHaveTitle(/Dziś/);

  await page.context().storageState({ path: 'tmp/login.json' });
});

test('should be logged in', { tag: ['@setup', '@wip'] }, async ({ page }) => {
  await page.goto('https://app.todoist.com/app/today');

  await expect(page).toHaveURL('https://app.todoist.com/app/today');
  await expect(page).toHaveTitle(/Dziś/);
});