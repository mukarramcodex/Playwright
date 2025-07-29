import { test, expect } from '@playwright/test'
import { login, addtocart, Checkout } from './helpers/actions'

test('Login with Valid Credentials', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Website for automation'})).toBeVisible();
    await login(page);
    await expect(page.getByText('Logged in as Mukarram')).toBeVisible();
    await page.close(), setTimeout(() => {}, 3000);
});

test('Add To Cart Product', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Website for automation'})).toBeVisible();
    await login(page);
    await expect(page.getByText('Logged in as Mukarram')).toBeVisible();
    
    await addtocart(page);
    await expect(page.getByText('Home Shopping Cart')).toBeVisible();
    await page.close(), setTimeout(() => {}, 3000);
});

test('Complete Order with Valid User and Card', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Website for automation'})).toBeVisible();
    await login(page);
    await expect(page.getByText('Logged in as Mukarram')).toBeVisible();
    
    await addtocart(page);
    await expect(page.getByText('Home Shopping Cart')).toBeVisible();

    await Checkout(page);
    await expect(page.getByText('Order Placed!')).toBeVisible();
    await page.close(), setTimeout(() => {}, 3000);
});