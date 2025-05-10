context("Advance UI testing", function () {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false; // Ignore AngularJS errors
  });


  describe("e2e testing", function () {
    it("Static Dropdown By Index", function () {
      let url = "https://demo.automationtesting.in/Register.html";

      // Input data
      cy.visit(url, { failOnStatusCode: false }); // Ignore load error
      cy.xpath("//input[@placeholder='First Name']").type("John");
      cy.xpath("//input[@placeholder='Last Name']").type("Doe");
      cy.get('.col-md-8 > .form-control').click();
      cy.get('.col-md-8 > .form-control').type("Ujung Berung");
      cy.xpath("//input[@type='email']").type("john@doe.com");
      cy.xpath("//input[@type='tel']").type("123456789");
      cy.xpath("//input[@value='Male']").click();
      cy.xpath("//input[@id='checkbox2']").click();
      // Get By Indexical Numbers dropdown select
      cy.xpath("//select[@id='Skills']").select(5);

    });

    it("Static Dropdown By Visible Text", function () {
        let url = "https://demo.automationtesting.in/Register.html";
        let dropdownXpath = `//select[@id='Skills']`;
        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        cy.xpath(dropdownXpath).select('CSS');
      });

    it("Static Dropdown By Value", function () {
        let url = "https://demo.automationtesting.in/Register.html";
        let dropdownXpath = `//select[@id='Skills']`;
        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        cy.xpath(dropdownXpath).select('APIs');
      });

    // it("Static Dropdown By Value2", function () {
    //     let url = "https://demoqa.com/select-menu";
    //     let dropdown = `#oldSelectMenu`;
    //     cy.visit(url, { failOnStatusCode: false }); // Ignore load error
    //     cy.get(dropdown).select(4, { force: true });
    //     //cy.xpath(dropdown).select(5);
    //   });
  });
});