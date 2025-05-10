context("Advance UI testing Datepicker", function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false; // Ignore AngularJS errors
    });
  describe("e2e testing", function () {
    it("Datepicker - Set Text", function () {
        let url = "https://jqueryui.com/datepicker/";
        let datepicker = `//input[@id='datepicker']`;

        // get element datepicker
        let date = cy.get('.demo-frame')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap).xpath

        // Insert date
        date.type('10/05/2025');

    })
  })
  
});
  
