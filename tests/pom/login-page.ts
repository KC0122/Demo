export class LoginPage{

readonly page;

    constructor(page){
        this.page=page;
    }
 
    async login(){
        await this.page.goto('https://urldefense.com/v3/__https:/www.saucedemo.com/__;!!GfteaDio!bJbR0opX9qdDsnIYX46zmvnz0CZqLAqwUPETJeip65oPqwq1Z3BlphoWbuZsBvh8YyHYcdfp0rnhVf_SKaEF$')
        await this.page.locator('input#user-name').fill('standard_user');
        await this.page.locator('input#password').fill('secret_sauce');
        await this.page.locator('input#login-button').click();
    }

}