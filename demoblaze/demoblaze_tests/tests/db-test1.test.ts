import { test, expect } from '@playwright/test';

// Test One: Goto a Website Page
test('Goto Page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // Assertion: To Verify on correct Webpage
    await expect(page.locator('#nava')).toContainText('PRODUCT STORE');
    await page.close();

})
