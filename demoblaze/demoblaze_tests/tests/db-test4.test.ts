import { test, expect } from '@playwright/test'

// Test Four: Purchasing a Product with Valid Credentials and Card Details
test('Purchase a Product with Filling a Details', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

  // Assertion: To Verify on correct Webpage
    await expect(page.locator('#nava')).toContainText('PRODUCT STORE');

    await page.getByRole('link', { name: 'Log in' }).click();
    
    await page.locator('#loginusername').fill('markofficial2722001');
    await page.locator('#loginpassword').fill('markadmin1234!@#$');
    await page.getByRole('button', { name: 'Log in' }).click();
    
  // Assertion: to Verfiy the Login Successfull
    await expect(page.getByRole('link', { name: 'Welcome markofficial2722001' })).toBeVisible();
    
    await page.getByRole('link', { name: 'Iphone 6 32gb' }).click();
    
    page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
    });
    
    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    
  // Asstertion: To Verify that Login on a Cart Page
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
    
    await page.getByRole('button', { name: 'Place Order' }).click();
    
    await page.getByRole('textbox', { name: 'Total: 790 Name:' }).fill('Mark David');
    await page.getByRole('textbox', { name: 'Country:' }).fill('Maxico');
    await page.getByRole('textbox', { name: 'City:' }).fill('Texas');
    await page.getByRole('textbox', { name: 'Credit card:' }).fill('2697019041256102');
    await page.getByRole('textbox', { name: 'Month:' }).fill('09');
    await page.getByRole('textbox', { name: 'Year:' }).fill('2027');
    
    await page.getByRole('button', { name: 'Purchase' }).click();
    
  // Assertion: Confirmation to Order purchase Successful
    await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible();
    
    await page.getByRole('button', { name: 'OK' }).click();

    await page.close();
});