import { Page } from 'playwright/test';
import { LeftMenuComponent } from '../components/LeftMenuComponent';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly leftPanel: LeftMenuComponent;

  constructor(protected page: Page) {
    super(page);
    this.leftPanel = new LeftMenuComponent(page);
  }
}
