import { test,chromium,expect } from '@playwright/test';

let brows;
let contx;
let page;

test.beforeAll(async function(){
 //Lauch the browser
  brows = await chromium.launch({headless:true})
  //Open a new tab it should log in
  contx = await brows.newContext();
  page = await contx.newPage()
})

test.afterAll(async function(){
  await contx.close();
  await page.close();
  await brows.close();
})

export{page}
