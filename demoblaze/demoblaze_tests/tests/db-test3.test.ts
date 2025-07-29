import { test, expect } from '@playwright/test'

// Test Three: Login on a Website with Valid Credentials 
test('Fill out the Credentials with Valid Username and Password', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // Assertion: To Verify on correct Webpage
    await expect(page.getByRole('link', { name: 'PRODUCT STORE'})).toBeVisible();

    await page.getByRole('link', { name: 'Log in'}).click();

    // Assertion: to Verfiy the Login Dialog Box opened 
    await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();

    await page.locator('#loginusername').fill('markofficial2722001');
    await page.locator('#loginpassword').fill('markadmin1234!@#$');
    await page.getByRole('button', { name: 'Log in' }).click();

    // Assertion: to Verfiy the Login Successfull
    await expect(page.getByRole('link', { name: 'Welcome markofficial2722001' })).toBeVisible();
    //
    await page.close();
})
