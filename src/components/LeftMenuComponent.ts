import { Locator } from 'playwright';
import { BaseComponent } from './BaseComponent';

export class LeftMenuComponent extends BaseComponent {
  // Locators
  private readonly leftMenuLocator = (): Locator => this.page.getByTestId('app-sidebar-container');

  // Actions
  async openProjectsMenu(): Promise<void> {
    await this.leftMenuLocator().getByRole('button', { name: 'Menu Moje projekty ' }).click();
    await this.page.getByLabel('Dodaj projekt').click();

  }
}
