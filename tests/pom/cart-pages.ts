import {expect } from '@playwright/test';

export class CartOperations{

readonly page;

    constructor(page){
        this.page=page;
    }
 
    async Add_labsbackpack(){
        await this.page.locator('button#add-to-cart-sauce-labs-backpack').click();         
    }
   
    async Add_bikelight(){
        await this.page.locator('button#add-to-cart-sauce-labs-bike-light').click();         
    }

    async Remove_bikelight(){
        //Navigate to cart page
        await this.page.locator('div#shopping_cart_container > a').click();
        let carttext= await this.page.locator('div#header_container > [data-test="secondary-header"] > span'); 
        //Make sure you have landed on the Cart page by checking for -Your Cart- text
        await expect(carttext).toHaveText(/Your Cart/);
        await this.page.locator('button#remove-sauce-labs-bike-light').click()
    }

    async checkoutandConfirm(){
      await this.page.locator('button#checkout').click()
      await this.page.locator('input#first-name').fill('standard');
      await this.page.locator('input#last-name').fill('User');
      await this.page.locator('input#postal-code').fill('HA88RE');
      await this.page.locator('input#continue').click();
      await this.page.locator('button#finish').click();
    }

    
}