import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  // Arrange
  const url = 'https://pwts.dev/';

  // Act
  await page.goto(url);

  // Assert
  await expect(page).toHaveTitle(/pwts/);
});
