require('cypress-xpath');
describe('Saucedemo Web Test', async function(){
    it('Login with valid data', async function(){
        cy.visit('https://www.saucedemo.com/');

        // Login
        //cy.get('#user-name').type('standard_user');
        cy.xpath("//input[@id='user-name']").type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Verification Automation
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get(".app_logo").should('contain', 'Swag Labs');
    });

    it('Login with valid data', async function(){
        cy.visit('https://www.saucedemo.com/');
        // Login
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        // Verification Automation
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get(".app_logo").should('contain', 'Swag Labs');
        // Add to cart
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('#add-to-cart-sauce-labs-bike-light').click();
        // Verify Products
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '2');
    });
});