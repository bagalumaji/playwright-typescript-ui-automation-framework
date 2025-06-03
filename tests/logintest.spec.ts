import {test,expect } from '@playwright/test'
import {LoginPage} from "../pages/loginpage";

test('verify login test', async({page}) => {
    const username="standard_user";
    const password="secret_sauce";
    await page.goto("https://www.saucedemo.com/");
    const loginPage = new LoginPage(page);
    await loginPage.verifyLoginPage();
    await loginPage.performLogin(username, password);
})