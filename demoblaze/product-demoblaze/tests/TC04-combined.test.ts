import { test, expect } from '@playwright/test'
import { login, addtocart, checkout  } from './helpers/actions'

test('Login with Credentials', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await login(page);
    await expect(page.getByRole('link', { name: 'Welcome markofficial2722001'})).toBeVisible();
    await page.close(), setTimeout(() => {}, 30000);
});

test('Add to Cart Product After login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await login(page);
    await addtocart(page);
    await expect(page.getByRole('heading', { name: 'Products'})).toBeVisible();
    await page.close(), setTimeout(() => {}, 30000);
});

test('Complete order with Valid Card Details', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await login(page);
    await addtocart(page);
    await checkout(page);
    await expect(page.getByRole('heading', { name: 'Thank you for your Purchase!'})).toBeVisible();
    await page.close(), setTimeout(() => {}, 30000);
})