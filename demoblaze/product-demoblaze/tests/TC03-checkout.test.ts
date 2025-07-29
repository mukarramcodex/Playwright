import { test, expect } from '@playwright/test'
import { login, addtocart, checkout } from './helpers/actions'

test('Complete order with valid card details', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await login(page);
    await addtocart(page);
    await checkout(page);
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
    await page.close(), setTimeout(() => {}, 30000);
})