class inventoryPage {
    verifyInventoryPage() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get(".app_logo").should('contain', 'Swag Labs');
    }

    addProductToCart(productNames) {
        productNames.forEach(nama => {
            cy.get(`#add-to-cart-${nama}`).click();
        })
    }

    verifyCartItemCount(expectedCount) {
        cy.get('[data-test="shopping-cart-badge"]').should('contain', expectedCount);
    }
}

export default new inventoryPage();