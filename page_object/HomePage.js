const puppeteer = require('puppeteer-core');
class HomePage {
    async clickUserBtn(page){
        await page.waitForSelector('#iherb-account > div.iherb-header-account-sign-in > span.hidden-xs.hidden-sm > label.iherb-header-signed-out.sign-in > a')
        await page.click('#iherb-account > div.iherb-header-account-sign-in > span.hidden-xs.hidden-sm > label.iherb-header-signed-out.sign-in > a')
    }
}
module.exports = HomePage;