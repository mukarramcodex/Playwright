import { test, expect } from '@playwright/test'

// Test Two: Open a Login Dialog Box
test('Click on a Login Button', async ({ page })=> {
    await page.goto('https://www.demoblaze.com/index.html');
    
    // Assertion: To Verify on correct Webpage
    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

    await page.getByRole('link', { name: 'Log in'}).click();

    // Assertion: to Verfiy the Login Dialog Box opened 
    await expect(page.getByRole('heading', { name: 'Log in'})).toBeVisible();
    
    await page.close();
})
