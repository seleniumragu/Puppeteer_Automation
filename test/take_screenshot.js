// const puppeteer = require('puppeteer-core');
// puppeteer.launch({headless: false, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'}).then(async browser => {
//   const page = await browser.newPage();
//   await page.goto('https://www.iherb.com');
//   await page.screenshot({ path: 'iherb_home.jpg', fullPage: true });
//   await browser.close();
// });



const puppeteer = require('puppeteer');
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.iherb.com');
  await browser.close();
});