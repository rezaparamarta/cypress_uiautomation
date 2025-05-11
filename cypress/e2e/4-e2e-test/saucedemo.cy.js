describe("Saucedemo Web Test", function() {
    it("Login with valid data and add Sauce Labs Pack into Cart", function() {
        cy.visit("/")

        // Get Element Selector
        cy.xpath("//input[@id='user-name']").type("standard_user")
        cy.xpath("//input[@id='password']").type("secret_sauce")
        cy.xpath("//input[@id='login-button']").click()


        // Assertion Validation
        cy.url().should('include', '/inventory.html');
        cy.xpath("//div[@class='app_logo']").should('be.visible');


        // Click Sauce Labs Pack
        cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").click()

        // Assertion Validation Products
        cy.xpath("//img[@alt='Sauce Labs Backpack']").should('be.visible');
        cy.xpath("//div[@class='inventory_details_desc large_size']").should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.xpath("//div[@class='inventory_details_price']").should('have.text', '$29.99');


        // Get Element Button to add into cart
        cy.xpath("//button[@id='add-to-cart']").click();

        // Assertion Validation Cart
        cy.xpath("//span[@class='shopping_cart_badge']").should('have.text', '1');
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