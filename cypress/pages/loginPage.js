class loginPage {
    visit() {
        cy.visit("/")
    }

    fillUsername(username) {
        cy.xpath("//input[@id='user-name']").clear().type(username);
    }

    fillPassword(password) {
        cy.xpath("//input[@id='password']").clear().type(password);
    }

    clickLogin() {
        cy.xpath("//input[@id='login-button']").click();
    }

    loginUser(userData) {
        this.visit();
        this.fillUsername(userData.username);
        this.fillPassword(userData.password);
        this.clickLogin();
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html');
        cy.xpath("//div[@class='app_logo']").should("have.text", "Swag Labs");
    }

    verifyLoginFailed() {
        cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }

    clickSauceLabsBackpakc() {
        cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").click()
    }

    verifySauceLabsBackpakc() {
        cy.xpath("//img[@alt='Sauce Labs Backpack']").should('be.visible');
        cy.xpath("//div[@class='inventory_details_desc large_size']").should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.xpath("//div[@class='inventory_details_price']").should('have.text', '$29.99');
    }

    addSauceLabsBakcPacktoCart() {
        cy.xpath("//button[@id='add-to-cart']").click();
    }

    validationCart() {
        cy.xpath("//span[@class='shopping_cart_badge']").should('have.text', '1');
    }
}

export default new loginPage();