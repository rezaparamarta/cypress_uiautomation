context("Advance UI testing", function () {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false; // Ignore AngularJS errors
  });


  describe("e2e testing", function () {
    it("Static Dropdown By Index", function () {
      let url = "https://demo.automationtesting.in/Register.html";
      let dropdown = `#Skills`;
      let dropdownXpath = `//select[@id='Skills']`;
      cy.visit(url, { failOnStatusCode: false }); // Ignore load error
      cy.get(dropdown).select(3);
      //cy.xpath(dropdown).select(5);
    });

    it("Static Dropdown By Visible Text", function () {
        let url = "https://demo.automationtesting.in/Register.html";
        let dropdown = `#Skills`;
        let dropdownXpath = `//select[@id='Skills']`;
        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        cy.get(dropdown).select('CSS');
        //cy.xpath(dropdown).select(5);
      });

    it("Static Dropdown By Value", function () {
        let url = "https://demo.automationtesting.in/Register.html";
        let dropdown = `#Skills`;
        let dropdownXpath = `//select[@id='Skills']`;
        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        cy.get(dropdown).select('CSS');
        //cy.xpath(dropdown).select(5);
      });

    it("Static Dropdown By Value2", function () {
        let url = "https://demoqa.com/select-menu";
        let dropdown = `#oldSelectMenu`;
        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        cy.get(dropdown).select(4, { force: true });
        //cy.xpath(dropdown).select(5);
      });
  });
});