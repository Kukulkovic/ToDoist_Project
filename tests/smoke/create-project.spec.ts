/* eslint-disable playwright/max-expects */
import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('should create a new project', { tag: ['@project', '@wip'] }, async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();
  await homePage.leftPanel.addNewProject('Test project', 'Łosoś');

  await expect(homePage.leftPanel.getProjectByName('Test project')).toBeVisible();
  
});
