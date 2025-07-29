import { expect, test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';
import config from '../env/qa.json';

test('Login with Credentials', async({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.login('admin', 'adminpass');
    await expect(page).toHaveURL(/dashboard/);
});

test('Test using JSON Config', async({ page }) => {
    await page.goto(config.baseUrl);
    await page.fill('#username', config.username);
    await page.fill('#password', config.password);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
});