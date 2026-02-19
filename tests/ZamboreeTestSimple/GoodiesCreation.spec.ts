import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';

// function generateLetterOnlyName(prefix = 'Oppo Modal - ', length = 3) {
//     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     let randomStr = '';
//     for (let i = 0; i < length; i++) {
//         randomStr += letters.charAt(Math.floor(Math.random() * letters.length));
//     }
//     return `${prefix}${randomStr}`;
// }

test('', async({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Enter Mobile Number').fill('6070809010');
    await page.check('[type="checkbox"]');
    await page.click('button:has-text("Login/Signup with OTP")');
    
    const toastcontent = page.locator('.Toastify__toast-container');
    await expect(toastcontent).toBeVisible();
    const toasttext = await toastcontent.textContent();
    console.log(toasttext);
    
    const otpnumber = toasttext?.match(/\d{6}/);
    console.log("Extracted OTP is -> " + otpnumber);
    const otp = otpnumber ? otpnumber[0] : '';
    const otpdigits = otp.split('');

    for (let i = 0; i < 6; i++) {
        await page.locator("[inputmode='numeric']").nth(i).fill(otpdigits[i]);
    }
    
    await page.click('button:has-text("Verify OTP")');
    await page.waitForLoadState();
    await expect(page).toHaveURL('http://4.224.127.3:4005/dashboard');
    await page.click('button:has-text("Manage Products")');
    await page.click('button:has-text("Goodies")');
    await page.getByRole('button', { name: 'Add New Goodie' }).click();

    const [image] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('[class="flex flex-col items-center justify-center h-full p-2 text-center"]').click()
    ]);

    await image.setFiles("C:\\Users\\ADMiN\\OneDrive - ZAMBOREE TECHVISION LLP\\Documents\\Image Issues\\Bottle Image.jpg");

    /*

    Approach 1: Using a simple random name generator
    // const generatedName = generateLetterOnlyName();
    // console.log(`Creating goodie: ${generatedName}`);
*/

    // Approach 2: Using faker to generate a product name
    const goodies= faker.commerce.productName();
    console.log(`Created goodie: ${goodies}`);
    
    await page.getByPlaceholder('e.g., Premium Coffee Mug').fill(goodies);
    await page.getByPlaceholder('0.00').fill('800');
    await page.locator('[name="stock"]').fill('10');
    
    await page.waitForTimeout(2000);
    await page.locator('button:has-text("Create Goodie")').click();
    
    // Wait for creation and any modals to appear
    await page.waitForTimeout(3000);
    
    // Now setup dialog handler for delete confirmation
    page.on('dialog', async dialog => {
        console.log('Delete confirmation dialog:', dialog.message());
        await dialog.accept();
        console.log('Delete confirmed');
    });
    
    // Wait a bit for the modal to be fully gone
    await page.waitForTimeout(1000);
    
    // Now try to click delete button
    console.log('Attempting to click delete button...');
    
    const deleteButton = page.locator('[title="Delete"]').first();
    await deleteButton.waitFor({ state: 'visible', timeout: 10000 });
    
    // Try different click methods
    try {
        // Method 1: Regular click
        await deleteButton.click();
        console.log('Regular click successful');
    } catch (error) {
        console.log('Regular click failed, trying force click...');
        
        // Method 2: Force click (bypasses pointer-events check)
        await deleteButton.click({ force: true });
        console.log('Force click successful');
    }   
    
    await page.waitForTimeout(3000);

    // Check if there's a success modal that needs to be closed
    // const modalOverlay = page.locator('div.fixed.inset-0.z-50');
    // const isModalVisible = await modalOverlay.isVisible().catch(() => false);
    
    // if (isModalVisible) {
    //     console.log('Modal overlay detected, trying to close it...');
        
    //     // Try clicking outside the modal (on the overlay)
    //     await modalOverlay.click({ position: { x: 10, y: 10 }, force: true });
    //     console.log('Clicked on overlay to close modal');
        
    //     // Or look for a close button inside the modal
    //     const closeButton = modalOverlay.locator('button').filter({ hasText: /close|x|✕|cancel/i }).first();
    //     if (await closeButton.isVisible().catch(() => false)) {
    //         await closeButton.click();
    //         console.log('Clicked close button');
    //     }
        
    //     // Wait for modal to disappear
    //     await modalOverlay.waitFor({ state: 'detached', timeout: 5000 }).catch(() => {});
    // }
    
});