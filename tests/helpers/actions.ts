import { expect, Page } from '@playwright/test'

export async function login(page:Page) {
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('devmukarram@gmail.com');
    await page.getByRole('textbox', {name: 'Password' }).fill('NetHost123!@#');
    await page.getByRole('button', {name: 'Login'}).click();  
}

export async function addtocart(page: Page) {
    await page.getByRole('link', { name: ' Men'}).click();
    await page.getByRole('link', { name: 'Tshirts'}).click();
    await page.locator('div:nth-child(8) > .product-image-wrapper > .choose > .nav > li > a').click();
    await page.getByRole('button', { name: ' Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();
};



