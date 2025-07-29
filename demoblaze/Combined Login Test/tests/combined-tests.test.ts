import { test, expect, Page } from '@playwright/test';
import { resolve } from 'path';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
});

const login = async (page: Page, username: string, password: string) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill(username)
    await page.locator('#loginpassword').fill(password);
    await page.getByRole('button', { name: 'Log in' }).click();
};

test('TC-01: Login with valid username and password', async ({ page }) => {
    await login(page, 'markofficial2722001', 'markadmin1234!@#$');
    await expect(page.getByRole('link', { name: 'Welcome markofficial2722001' })).toBeVisible();
    await page.getByRole('link', { name: 'Log out' }).click();
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});

test('TC-02: Login with invalid username and valid password', async ({ page }) => {
    await page.getByRole('link', { name: 'Log in'}).click();
    await page.locator('#loginusername').fill('invalidUser');
    await page.locator('#loginpassword').fill('markadmin1234!@#$');

    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('User does not exit.');
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Log in' }).click();
});

test('TC-03: Login with Valid username and invalid password', async ({ page }) => {
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('markofficial2722001');
    await page.locator('#loginpassword').fill('Invalidpassword');

    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('Wrong password.');
        await dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Log in' }).click();
});

test('TC-04: Login with Invalid username and invalid Password', async ({ page }) => {
    await page.getByRole('link', { name: 'Log in'}).click();
    await page.locator('#loginusername').fill('fakeUser');
    await page.locator('#loginpassword').fill('fakePassword');

    page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('User does not exist.');
        // expect(dialog.message).toContain('Wrong password.');
        await dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByLabel('Log in').getByText('Close').click();
});

test.afterAll(async () => {
    // console.log('All test finished....');
    await new Promise(resolve => setTimeout(resolve, 3000));
});
