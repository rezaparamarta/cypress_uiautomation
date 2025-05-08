//require('cypress-xpath');
import loginPage from "../../e2e/pages/loginPage";
import inventoryPage from "../../e2e/pages/inventoryPage";
describe('Saucedemo Web Test', async function(){
    this.beforeEach(() => {
        cy.fixture('loginData').as('data');
        cy.fixture('productData').as('product');
    })
    it('Login with valid data', async function(){
        loginPage.visit();
        loginPage.fillUsername(this.data.validUser.username);
        loginPage.fillPassword(this.data.validUser.password);
        loginPage.clickLogin();
        loginPage.verifyLoginSuccess();

    });

    // it('Add to Cart', function() {
    //     loginPage.fillUsername(this.data.validUser.username);
    //     loginPage.fillPassword(this.data.validUser.password);
    //     loginPage.clickLogin();
    //     loginPage.verifyLoginSuccess();
    //     inventoryPage.verifyInventoryPage();

    //     // Add to Cart two Products
    //     inventoryPage.addProductToCart(this.productData.productNames);
    //     // Verify Products
    //     inventoryPage.verifyCartItemCount(this.productData.productNames.length);
    // })

    // it('Login with invalid data', function() {
    //     loginPage.loginUser(this.data.lockedOutUser);
    //     loginPage.verifyLoginSuccess();
    // });

    // it('Login with valid data', async function(){
    //     cy.visit('/');
    //     // Login
    //     cy.get('#user-name').type('standard_user');
    //     cy.get('#password').type('secret_sauce');
    //     cy.get('[data-test="login-button"]').click();
    //     // Verification Automation
    //     cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    //     cy.get(".app_logo").should('contain', 'Swag Labs');
    //     // Add to cart
    //     cy.get('#add-to-cart-sauce-labs-backpack').click();
    //     cy.get('#add-to-cart-sauce-labs-bike-light').click();
    //     // Verify Products
    //     cy.get('[data-test="shopping-cart-badge"]').should('contain', '2');
    // });
});