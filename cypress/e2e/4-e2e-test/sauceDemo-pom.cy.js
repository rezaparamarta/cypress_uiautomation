import loginPage from "../../pages/loginPage";

describe("Saucedemo Web Test", function() {
    this.beforeEach(() => {
        cy.fixture("loginData").as("data");
    });

    it("Login with valid data and add Sauce Labs Pack into Cart", function() {
        loginPage.visit();
        loginPage.fillUsername(this.data.validUser.username);
        loginPage.fillPassword(this.data.validUser.password);
        loginPage.clickLogin();
        loginPage.verifyLoginSuccess();
        // Click Sauce Labs Pack
        loginPage.clickSauceLabsBackpakc();
        // Assertion Validation Products
        loginPage.verifySauceLabsBackpakc();
        // Get Element Button to add into cart
        loginPage.addSauceLabsBakcPacktoCart();
        // Assertion Validation Cart
        loginPage.validationCart();
    });

    it("Second Version", function() {
        loginPage.loginUser(this.data.validUser);
        loginPage.verifyLoginSuccess();
        // Click Sauce Labs Pack
        loginPage.clickSauceLabsBackpakc();
        // Assertion Validation Products
        loginPage.verifySauceLabsBackpakc();
        // Get Element Button to add into cart
        loginPage.addSauceLabsBakcPacktoCart();
        // Assertion Validation Cart
        loginPage.validationCart();
    });

    it("Login with locked out user", function() {
        loginPage.loginUser(this.data.lockedOutUser);
        loginPage.verifyLoginFailed();
    });

    it("Login and add two items into cart", function() {
        cy.visit("/")

        // Login
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should('include', '/inventory.html');
        cy.get(".app_logo").should("have.text", "Swag Labs");

        // Add two items into cart
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#add-to-cart-sauce-labs-bike-light").click();

        // Verify Products
        cy.get("[data-test='shopping-cart-badge']").should('have.text', '2');
    });
});