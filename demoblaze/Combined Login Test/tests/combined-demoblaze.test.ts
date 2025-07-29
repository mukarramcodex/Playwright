import { test, expect } from '@playwright/test';

test('Test on Demoblaze website Performing Log-in Fuction', async ({ page }) => {
    // Navigate the Website Page with URL
    await page.goto('https://www.demoblaze.com/index.html');
    
    await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
    // Test Case One: Valid Username and Valid Password
    // Click on a Login button from the navigational bar 
    await page.getByRole('link', { name: 'Log in' }).click();
    // Expertion by Heading of Login Dialog Box Open
    await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();
    // Paste a Valid Username
    await page.locator('#loginusername').fill('markofficial2722001');
    // Paste a Valid Password
    await page.locator('#loginpassword').fill('markadmin1234!@#$');
    // Click on Login Button
    await page.getByRole('button', { name: 'Log in' }).click();
    // Check on a Successful Login by username
    await expect(page.getByRole('link', { name: 'Welcome markofficial2722001' })).toBeVisible();
    // Logout a Userfrom the website by logout button
    await page.getByRole('link', { name: 'Log out' }).click();
    // Add Exerption to check the User Logout by checking the Login link in nav bar
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
    //Test Case Two: Not-Valid Username and Valid Password
    //
    await page.getByRole('link', { name: 'Log in' }).click();
    //
    await page.locator('#loginusername').fill('markofficial');
    //
    await page.locator('#loginpassword').fill('markadmin1234!@#$');
    page.once('dialog', dialog => {
    const message = dialog.message();
    console.log(`Dialog message: ${message}`);
    expect(message).toContain('User does not exist.');
    dialog.dismiss().catch(() => {});
    });
    // 
    await page.getByRole('button', { name: 'Log in' }).click();
    //Test Case Three: Valid Username and Not-Valid Password
    //
    await page.goto('https://www.demoblaze.com/index.html');
    //
    await page.getByRole('link', { name: 'Log in' }).click();
    //
    await page.locator('#loginusername').fill('markofficial2722001');
    //
    await page.locator('#loginpassword').fill('Markadmin1234!@#$');
    //
    page.once('dialog', dialog => {
    const message = dialog.message();
    console.log(`Dialog message: ${message}`);
    expect(message).toContain('Wrong password.');
    dialog.dismiss().catch(() => {});
    });
    //
    await page.getByRole('button', { name: 'Log in' }).click();
    //Test Case Four: Not-Valid Username and Not-Valid Password
    //
    await page.goto('https://www.demoblaze.com/index.html');
    //
    await page.getByRole('link', { name: 'Log in' }).click();
    //
    await page.locator('#loginusername').fill('markadmin');
    //
    await page.locator('#loginpassword').fill('markadmin');
    //
    page.once('dialog', dialog => {
    const message = dialog.message();
    console.log(`Dialog message: ${message}`);
    expect(message).toContain('Wrong password.');
    dialog.dismiss().catch(() => {});
    });
    //
    await page.getByRole('button', { name: 'Log in' }).click();
    //
    await page.getByLabel('Log in').getByText('Close').click();
    //
    // await new Promise(resolve => setTimeout(resolve, 3000));
    //
    await page.close();
});