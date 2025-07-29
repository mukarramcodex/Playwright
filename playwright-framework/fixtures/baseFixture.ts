import { test as base } from '@playwright/test'

type TestOptions = {
    baseUrl : string;
};

export const test = base.extend<TestOptions>({
    baseUrl: async ({}, use) => {
        await use('https://qa.yoursite.com');
    },
});

export const expect = test.expect;