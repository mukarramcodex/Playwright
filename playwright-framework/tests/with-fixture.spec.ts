import { test, expect } from '../fixtures/baseFixture';

test('Check title with custom fixture', async ({ page, baseUrl }) => {
    await page.goto(baseUrl);
    await expect(page).toHaveTitle(/Your App/);
});

