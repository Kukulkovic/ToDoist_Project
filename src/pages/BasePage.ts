import { Page } from 'playwright';
import { Logger } from 'tslog';

export abstract class BasePage {
  protected log = new Logger();
  protected url = '/app/today';
  constructor(protected page: Page) {}
}
