import { expect, test } from "@playwright/test";
import { login } from "./helpers/actions";

test('test', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', {name: 'Website for automation'})).toBeVisible();
    await login(page);
    await expect(page.getByText('Logged in as Mukarram')).toBeVisible();
    await page.close(), setTimeout( () => {}, 3000 );
})