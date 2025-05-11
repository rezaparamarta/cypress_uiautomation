import loginPage from "../../pages/loginPage";
import inventoryPage from "../../pages/inventoryPage";

describe("Saucedemo Web Test", function() {
    beforeEach(function () {
        cy.fixture("loginData").as("data");
        cy.fixture("productData").as("products");
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
        loginPage.verifyLoginFailed(this.data.lockedOutUser);
    });

    it("Login with invaliduser", function() {
        loginPage.loginUser(this.data.invalidUser);
        loginPage.verifyLoginFailed(this.data.invalidUser);
    });    

    it("Add to Cart", function () {
        loginPage.loginUser(this.data.validUser);
        inventoryPage.verifyInventoryPage();
    
        // Add to cart 2 products
        inventoryPage.addProductToCart(this.products.productNames);
    
        // Verify products
        inventoryPage.verifyCartItemCount(this.products.productNames.length);
      });

      it("Add to Cart with command login", function () {
        cy.login(Cypress.env("valid_username"), Cypress.env("valid_password"));
        inventoryPage.verifyInventoryPage();
    
        // Add to cart 2 products
        inventoryPage.addProductToCart(this.products.productNames);
    
        // Verify products
        inventoryPage.verifyCartItemCount(this.products.productNames.length);
      });      
});