const puppeteer = require("puppeteer-core"),
      should = require("should");
let browser = null,
    page = null;
describe("Google Home", function (){
    // this.timeout(60 * 1000);
    before(async () => {
       browser = await puppeteer.launch({headless: false, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // because we are using puppeteer-core so we must define this option
       args: ['--start-maximized'] }) // with visual
       page = await browser.newPage();
});
after(async () => {
   await browser.close();
});
it("Should show home Page Pass", async function() {
   await page.goto("https://www.iherb.com");
   await page.waitFor(1000);
   let title = await page.title();
   title.should.equal("iHerb.com - Vitamins, Supplements & Natural Health Products");
});
it("Should show home Page Fail", async function() {
  await page.goto("https://www.iherb.com");
  await page.waitFor(1000);
  let title = await page.title();
  title.should.equal("iHerb.com");
});
});