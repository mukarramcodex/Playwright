import { Page } from '@playwright/test'

export async function login(page: Page) {
    await page.getByRole('link', { name: 'Log in'}).click();
    await page.locator('#loginusername').fill('markofficial2722001')
    await page.locator('#loginpassword').fill('markadmin1234!@#$')
    await page.getByRole('button', { name: 'Log in'}).click();
}