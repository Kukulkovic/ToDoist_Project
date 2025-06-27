import { expect, Page } from 'playwright/test';
import { Logger } from 'tslog';

export abstract class BasePage {
  protected log = new Logger();
  protected url = '/app/today';
  constructor(protected page: Page) {}

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await expect(this.page.getByTestId('app-sidebar-container')).toBeVisible();
    await expect(this.page.getByTestId('task-selection-list-container')).toBeVisible();
  }
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
