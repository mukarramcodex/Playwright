import { Page } from '@playwright/test'

export async function login(page: Page) {
    await page.getByRole('link', { name: 'Log in'}).click();
    await page.locator('#loginusername').fill('markofficial2722001')
    await page.locator('#loginpassword').fill('markadmin1234!@#$')
    await page.getByRole('button', { name: 'Log in'}).click();
}

export async function addtocart(page: Page) {
    await page.getByRole('link', { name: 'Iphone 6 32gb' }).click();
    page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
}

export async function checkout(page: Page) {
    await page.getByRole('button', {name: 'Place Order' }).click();
    await page.getByRole('textbox', { name: 'Name:'}).fill('Mark David');
    await page.getByRole('textbox', { name: 'Country:'}).fill('Macxico');
    await page.getByRole('textbox', { name: 'City:'}).fill('Texas');
    await page.getByRole('textbox', { name: 'Credit Card:'}).fill('2697019041256102');
    await page.getByRole('textbox', { name: 'Month:'}).fill('09');
    await page.getByRole('textbox', { name: 'Year:'}).fill('2028')
    await page.getByRole('button', { name: 'Purchase'}).click();
}