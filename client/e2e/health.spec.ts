import { expect, test } from '@playwright/test';

test('home page shows the server as healthy', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Web App' })).toBeVisible();
  await expect(page.getByTestId('server-status')).toHaveText('healthy');
});
