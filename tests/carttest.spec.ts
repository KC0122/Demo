import { test, expect } from '@playwright/test';
import * as Pg from './hooks/tearup-teardown'
import {LoginPage} from './pom/login-page'
import {CartOperations} from './pom/cart-pages'

let item1 :any
let loginObj :any
let cartObj:any

test.describe.configure({ mode: 'serial' });

test('Login into the site', async function(){
  loginObj= new LoginPage(Pg.page)
  await loginObj.login();
  //After successful login in-Make sure URL has the word Inventory
  await expect(Pg.page).toHaveURL(/inventory/);       
 })

test('Adding product labs-backpack to the cart', async () => {
  cartObj = new CartOperations(Pg.page)
  await cartObj.Add_labsbackpack();
  item1= await Pg.page.locator('button#remove-sauce-labs-backpack')
  //Making sure that the very first product was added and Remove button is visible
  await expect(item1).toHaveText(/Remove/);
  });

test('Adding product bike-light to the cart', async () => {
  await cartObj.Add_bikelight();
  let item2 = await Pg.page.locator('button#remove-sauce-labs-bike-light')
  //Making sure that the bike-light was added -Now the button shows Remove as the text
  await expect(item2).toHaveText(/Remove/);
  });
  
test('Remove bike-light from the cart', async () => {
  //Remove Item2-bike-light
  await cartObj.Remove_bikelight();  
  let  qtycount = await Pg.page.locator('div#shopping_cart_container > a > span')
  //Assert that the Cart has ONLy 1 Qty
  await expect(qtycount).toHaveText(/1/);
  //Asset Item 1 sauce-labs-backpack is visible
  await expect(item1).toBeVisible();
  });

  test('Check Out',async ()=>{
    //Check out and finalise the transaction
    await cartObj.checkoutandConfirm();
    //Asset and capture Thanks you message
    await expect(Pg.page.locator('h2')).toHaveText(/Thank you for your order/);
    //Take a Snapshot
    await Pg.page.screenshot({ path: 'Finalconfirmation.png' });    
  })

 

  