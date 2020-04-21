const puppeteer = require('puppeteer-core');
class LoginPage {
    async typeUsername(page, username){
    await page.waitForSelector('input[id=username_input]',{visible: true});
    await page.click('input[id=username_input]')
    await page.keyboard.type(username);
    await page.waitFor(1000);
    }
    async typePassword(page, password){
        await page.click('input[id=Password]')
        await page.keyboard.type(password);
        await page.waitFor(1000);
    }


    async clickSignInBtn(page){
        await page.waitForSelector('button[id="sign_in_button"]');
        await page.click('button[id="sign_in_button"]');
        await page.waitFor(1000);
    }
}

module.exports = LoginPage;