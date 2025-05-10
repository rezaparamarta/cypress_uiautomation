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
        cy.get(':nth-child(2) > .oxd-input').click();
        cy.get(':nth-child(2) > .oxd-input').type('Budi Santoso');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();

    });
});
