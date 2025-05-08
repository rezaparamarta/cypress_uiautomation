class LoginPage {
    visit() {
        cy.visit('/');
    }

    fillUsername(username) {
        cy.get('#user-name').clear().type(username);
    }

    fillPassword(password) {
        cy.get('#password').clear().type(password);
    }

    clickLogin() {
        cy.get('[data-test="login-button"]').click();
    }

    loginUser(userData) {
        this.visit();
        this.fillUsername(userData.username);
        this.fillPassword(userData.password);
        this.clickLogin();
    }

    verifyLoginSuccess() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get(".app_logo").should('contain', 'Swag Labs');
    }
}

export default new LoginPage();