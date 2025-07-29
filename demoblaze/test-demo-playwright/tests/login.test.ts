import { test, expect } from '@playwright/test'
import { login } from './helpers/actions'

test('Simple Login in DemoBlaze Website', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await login(page);
    await expect(page.getByRole('link', { name: 'Welcome markofficial2722001' })).toBeVisible();
    await page.close(), setTimeout(() => {}, 30000);
});