context('Orange HRM Admin Module UI Testing', function() {
    beforeEach(function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//input[@name='username']").clear().type('Admin');
        cy.xpath("//input[@name='password']").clear().type('admin123');
        cy.xpath("//button[@type='submit']").click();
        cy.url().should('include', '/dashboard');
        cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible');
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.url().should('include', '/admin/viewSystemUsers');
    });

    it('Searching Budi Santoso', function() {
        // Action for input data
        cy.get(':nth-child(2) > .oxd-input').click();
        cy.get(':nth-child(2) > .oxd-input').type('Admin');

        // verifying input data
        cy.get(':nth-child(2) > .oxd-input').should('have.value', 'Admin');
        // Action for select data
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        cy.xpath("//div[contains(@class,'oxd-select-option')]//span[text()='Admin']").click();

        // verifying select data
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
        .should('have.text', 'Admin');      

        // Action for input data autosuggestive dropdown
        cy.xpath("//input[@placeholder='Type for hints...']").type('Bh');
    });
});


