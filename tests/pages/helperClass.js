// testHelper.js
exports.TestHelper = class TestHelper {
    static async setupPage(browser) {
      const page = await browser.newPage();
      return page;
    }
  
    static async closePage(page) {
      await page.close();
    }
  }
  