import { test, expect } from '@playwright/test'
import { login, addtocart } from './helpers/actions'

test('Add to Cart Product After Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await login(page);
    await addtocart(page);
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
    await page.close(), setTimeout(() => {}, 30000);
});