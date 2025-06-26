/* eslint-disable playwright/max-expects */
import { expect, test } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('should create a new project', { tag: ['@project', '@wip'] }, async ({ page }) => {

  const homePage = new HomePage(page);

  await homePage.open();  // Navigate to the Todoist app

  await homePage.leftPanel.openProjectsMenu();  // Open the projects menu

  const addProjectForm = page.getByTestId('modal-overlay').locator('form');
  await expect(addProjectForm).toBeVisible();

  await addProjectForm.locator('input[name = "name"]').fill('Test project');

  // const colorPicker = addProjectForm.locator('button[aria-labelledby="edit_project_modal_field_color_label"]');
  const colorPicker = addProjectForm.getByRole('combobox').first();
  await expect(colorPicker).toBeVisible();
  await colorPicker.click();

  // const projectColorSelector = page.locator('div .popper');
  // const projectColorSelector = page.locator('.form_field div[role=dialog]');
  const projectColorSelector = page.getByRole('listbox');
  await expect(projectColorSelector).toBeVisible();

  await projectColorSelector.getByText('Intensywny czerwony').click();
  await addProjectForm.getByRole('button', { name: 'Dodaj' }).click();

  const projectList = page.locator('#projects_list');
  await expect(projectList.locator('li').first()).toHaveText('Test project');

  const projectTitle = page.getByTestId('large-header')
  await expect(projectTitle).toHaveText('Test project')

  await page.waitForTimeout(5000);
});
