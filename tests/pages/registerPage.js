exports.registerPage = class registerPage {

    constructor(page){
        this.page = page;

        this.fnme = page.getByPlaceholder('First Name');
        this.lnme = page.getByPlaceholder('Last Name');
        this.mil = page.getByPlaceholder('E-Mail');
        this.passwrd = page.getByPlaceholder('Password');
    
    }

    async navigateToRegister(){
        await this.page.goto('https://demo.opencart.com/index.php?route=account/register&language=en-gb');

    }
    async userAccount (fName , lName , e_mail , passwrd) {
    //await page.goto('https://demo.opencart.com/index.php?route=account/register&language=en-gb');
    
    await this.fnme.fill(fName);
    await this.lnme.fill(lName);
    await this.mil.fill(e_mail);
    await this.passwrd.fill(passwrd);
    await this.page.getByRole('button', { name: 'Continue' }).click();

    } }


// test('test', async ({ page }) => {
//     await page.goto('https://demo.opencart.com/');
//     await page.getByRole('link', { name: ' My Account ' }).click();
//     await page.getByRole('link', { name: 'Register' }).click();
//     await page.getByPlaceholder('First Name').click();
//     await page.getByPlaceholder('First Name').fill('Naif');
//     await page.getByPlaceholder('Last Name').click();
//     await page.getByPlaceholder('Last Name').fill('Almutairi');
//     await page.getByPlaceholder('E-Mail').click();
//     await page.getByPlaceholder('E-Mail').fill('ff');
//     await page.getByPlaceholder('Password').click();
//     await page.getByPlaceholder('Password').fill('123');
//     await page.getByRole('button', { name: 'Continue' }).click();
  