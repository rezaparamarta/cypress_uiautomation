context('Orange HRM Testing UI', function() {
    describe('Login', function() {
        beforeEach(function() {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        });

        it('Login with valid data -- Positive Case', function() {
            cy.xpath("//input[@name='username']").clear().type('Admin');
            cy.xpath("//input[@name='password']").clear().type('admin123');
            cy.xpath("//button[@type='submit']").click();
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        });

        it('Login with invalid data -- Negative Case', function() {
            cy.xpath("//input[@name='username']").clear().type('Admin');
            cy.xpath("//input[@name='password']").clear().type('adminSalah');
            cy.xpath("//button[@type='submit']").click();
            cy.wait(4000); // idealnya ganti dengan explicit wait
            cy.xpath("//p[contains(@class, 'oxd-alert-content-text') and text()='Invalid credentials']")
            .should('be.visible');
        });
        });
    });

    describe('Dashboard Menu', function() {
        beforeEach(function() {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        });

        it('Login and Accessing Admin Module -- Positive Case', function() {
            cy.xpath("//input[@name='username']").clear().type('Admin');
            cy.xpath("//input[@name='password']").clear().type('admin123');
            cy.xpath("//button[@type='submit']").click();
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
            cy.wait(4000);
            cy.get(':nth-child(1) > .oxd-main-menu-item').should('be.visible');
            cy.get(':nth-child(1) > .oxd-main-menu-item').click();

            // Verify Admin Menu
            cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        });
    });


/*
contoh siblings locator advanced
<div>
    <span class="xxx">Label</span>
    <div>Value</div>
</div>;

Use this syntax to get element above
//span[@class='xxx']//following-sibling::div

----- end ---

Jika kondisinya terbalik:
<div>
    <div>Value</div>
    <span class="xxx">Label</span>
</div>;

Use this syntax to get element above
//span[@class='xxx']//preceding-sibling::div
*/