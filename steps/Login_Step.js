const puppeteer = require('puppeteer');
const HomePage = require('../page_object/HomePage')
const LoginPage = require('../page_object/LoginPage')
const data = require('../data.json')
var homePage = new HomePage();
var loginPage = new LoginPage();

// puppeteer.launch({headless: false, executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',args: ['--start-fullscreen', '--window-size=1920,1040']}).then(async browser => {
puppeteer.launch({headless:false,defaultViewport: null, args: ['--start-maximized']}).then(async browser => {  
  const page = await browser.newPage();
  // await page.setViewport( { 'width' : 1020, 'height' : 1040 } );
  await page.goto(data.url);
  // await page.screenshot({ path: 'iherb_home1.jpg', fullPage: true });
  await homePage.clickUserBtn(page);
  await loginPage.typeUsername(page, data.username);
  await loginPage.typePassword(page, data.password);
  await loginPage.clickSignInBtn(page);
  await browser.close();
});


