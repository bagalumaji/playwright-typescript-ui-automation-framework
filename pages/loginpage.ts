import {expect, Page} from "@playwright/test";

export class LoginPage {
    constructor(private  page:Page){}

    async enterUsername(username:string){
        await this.userNameTextBoxLocator.fill(username,{timeout:15000});
    }
    async enterPassword(password){
        await this.passwordTextBoxLocator.fill(password);
    }
    async clickLoginButton(){
        await this.loginButtonLocator.click();
    }

    async verifyLoginPage(){
        await expect(this.userNameTextBoxLocator).toBeVisible();
    }

    get userNameTextBoxLocator(){
        return this.page.getByRole("textbox",{name:"Username"});
    }
    get passwordTextBoxLocator(){
        return this.page.getByRole("textbox",{name:"Password"});
    }
    get loginButtonLocator(){
        return this.page.getByRole("button",{name:'Login'});
    }

    async performLogin(username:string,password:string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}