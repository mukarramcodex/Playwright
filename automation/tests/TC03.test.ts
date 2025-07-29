import { test, expect } from '@playwright/test'
import { chromium } from 'playwright';
import { login, addtocart, Checkout } from './helpers/actions'

test('Complete steps of a Tests', async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', { name: 'Website for automation'})).toBeVisible();
    await login(page);
    await expect(page.getByText('Logged in as Mukarram')).toBeVisible();

    await addtocart(page);
    await expect(page.getByText('Home Shopping Cart')).toBeVisible();

    await Checkout(page);
    await expect(page.getByText('Order Placed!')).toBeVisible();
    await browser.close(), setTimeout(() => {}, 30000);
});