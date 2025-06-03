import {test,expect} from "@playwright/test";

test("demo test",async ({page})=>{
    await page.goto('http://saucelabs.com/');
    console.log(await page.title());
    await  page.waitForTimeout(5000);
})