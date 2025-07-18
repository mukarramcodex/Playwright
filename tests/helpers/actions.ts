import { expect, Page } from '@playwright/test'

export async function login(page:Page) {
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('devmukarram@gmail.com');
    await page.getByRole('textbox', {name: 'Password' }).fill('NetHost123!@#');
    await page.getByRole('button', {name: 'Login'}).click();  
}

