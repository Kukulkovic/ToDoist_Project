import { Locator } from 'playwright';
import { expect } from 'playwright/test';
import { BaseComponent } from './BaseModal';

export class AddProjectModal extends BaseComponent {
  // Locators
  readonly addProjectForm = (): Locator => this.page.getByTestId('modal-overlay').locator('form');
  readonly colorPicker = (): Locator => this.addProjectForm().getByRole('combobox').first();

  // Actions
  async addNewProject(name: string, color: string): Promise<void> {
    await this.addProjectForm().locator('input[name="name"]').fill(name);

    await expect(this.colorPicker()).toBeVisible();
    await this.colorPicker().click();

    const projectColorSelector = this.page.getByRole('listbox');
    await expect(projectColorSelector).toBeVisible();
    await projectColorSelector.getByText(color).click();
    await this.addProjectForm().getByRole('button', { name: 'Dodaj' }).click();
  }
}
