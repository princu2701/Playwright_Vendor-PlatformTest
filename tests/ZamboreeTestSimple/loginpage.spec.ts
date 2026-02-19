import {test,expect} from '@playwright/test';

test('',async({page})=>{

    await page.goto("/",{waitUntil:'domcontentloaded'});
    
    await expect(page.getByRole('heading',{name:'Welcome'}).first()).toBeVisible();

    await page.locator('[inputmode="numeric"]').fill("7070572629");

    await page.keyboard.press('Enter');

    await page.getByRole('checkbox', { name: 'I Agree to Terms and' }).check();
    
    await page.getByRole('button', { name: 'Login/Signup with OTP' }).click();
 
    await page.waitForTimeout(15000);

    await page.getByRole('button', { name: 'Verify OTP' }).click();
    
    await expect(page.getByRole('heading', { name: 'Dashboard'})).toBeVisible()
    
    // await page.pause();


})