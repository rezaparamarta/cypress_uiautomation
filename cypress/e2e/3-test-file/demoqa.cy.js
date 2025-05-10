context("Advance UI testing", function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false; // Ignore AngularJS errors
    });
  
  
    describe("e2e testing", function () {
      it("Static Dropdown By Value beda Web belajar", function () {
        let url = "https://demoqa.com/select-menu";
        let dropdown = `#oldSelectMenu`;
        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        // Select Dropdown select option value by Index
        cy.xpath("//select[@id='oldSelectMenu']").select(4, { force: true });
      });

      it.only('Get Dropdown Group Value', function(){
        let url = "https://demoqa.com/select-menu";

        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        // Selector components Defined

        // Dropdown #1
        cy.xpath("//div[@id='withOptGroup']").click();
        cy.get('#react-select-2-option-0-0').click();

        // Dropdown #2
        cy.xpath("//div[@id='selectOne']").click();
        cy.get('#react-select-3-option-0-0').click();

        // Dropdown #3
        cy.xpath("//select[@id='oldSelectMenu']").select(4, { force: true });

        // Multiple Dropdown #4
        cy.xpath("//div[contains(@class,'css-1wa3eu0-placeholder')]").click();

        

        // verify dropdown group value, Group 1, option 1
        cy.xpath("(//div[contains(@class,'css-1uccc91-singleValue')])[1]").should('have.text', 'Group 1, option 1');
        // verify dropdown select one value, Dr.
        cy.xpath("(//div[contains(@class,'css-1uccc91-singleValue')])[2]").should('have.text', 'Dr.');
        // Verify Dropdown select option value, purple
        cy.xpath("//option[contains(@value,'4')]").should('have.value', 4);
        // Verify Multiple Dropdown
        


        
        

      })
    });
  });