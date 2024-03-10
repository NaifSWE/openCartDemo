// @ts-check
const { test, expect } = require('@playwright/test');
import { registerPage } from './pages/registerPage';
import { TestHelper } from './pages/helperClass';



test('User registration with valid data', async ({ browser }) => {
  const page = await TestHelper.setupPage(browser);
  const registerPageInstance = new registerPage(page);

  await registerPageInstance.navigateToRegister();

  // Step 1: Provide valid registration data
  const fName = 'John';
  const lName = 'Doe';
  const e_mail = 'john.doe@example.com';
  const passwrd = 'securePassword';

  // Step 2: Perform user registration
  await registerPageInstance.userAccount(fName, lName, e_mail, passwrd);

  // Step 3: Add assertions to validate successful registration
  // Example: await expect(page.locator('Your locator')).toBeVisible();

  // Step 4: Clean up resources after the test
  await TestHelper.closePage(page);
});

// Add more tests as needed, each with its own set of steps
// test('Another test case', async ({ browser }) => {
//   // Test logic here
// });
