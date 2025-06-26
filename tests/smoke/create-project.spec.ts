/* eslint-disable playwright/max-expects */
import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('should create a new project', { tag: ['@project', '@wip'] }, async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.leftPanel.addNewProject('Test project', 'Łosoś');


  const projectList = page.locator('#projects_list');
  await expect(projectList.locator('li').first()).toHaveText('Test project');

  const projectTitle = page.getByTestId('large-header')
  await expect(projectTitle).toHaveText('Test project')

  await page.waitForTimeout(5000);
});
