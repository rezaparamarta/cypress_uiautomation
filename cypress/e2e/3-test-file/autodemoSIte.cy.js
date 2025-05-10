// Static Dropdown By Index
// Static Dropdown By Visible Text
// Static Dropdown By Value
// Static Dropdown by Looping
// Dynamic and Autosuggestive Dropdown
// CheckBox Dropdown
context("Advance UI testing", function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false; // Ignore AngularJS errors
    });
  
  
    describe("e2e testing", function () {
      it.only("Static Dropdown By Index", function () {
        let url = "https://demo.automationtesting.in/Register.html";
        let dropDOwn = `#Skills`;
        let dropDownXpath = `//select[@id='Skills']`;
        let optionList = [];
        let skill = [
            'Adobe InDesign', 'Content Managment', 'Data Analytics'
        ];
  
        // Input data
        cy.visit(url, { failOnStatusCode: false }); // Ignore load error
        cy.xpath("//input[@placeholder='First Name']").type("John");
        cy.xpath("//input[@placeholder='Last Name']").type("Doe");
        cy.get('.col-md-8 > .form-control').click();
        cy.get('.col-md-8 > .form-control').type("Ujung Berung");
        cy.xpath("//input[@type='email']").type("john@doe.com");
        cy.xpath("//input[@type='tel']").type("+6281311437251");
        cy.xpath("//input[@value='Male']").click();
        //cy.xpath("//input[@id='checkbox2']").click();
        // Dropdown Checkbox secara manual
        cy.xpath("//input[@type='checkbox']").first().check().should('be.checked');
        // Diclick secara otomatis
        //cy.xpath("//input[@type='checkbox']").check("Movies").should('be.checked');
        // Get by equal 2 by index
        cy.xpath("//input[@type='checkbox']").eq(1).check("Movies").should('be.checked');
        // Unchecked
        cy.xpath("//input[@type='checkbox']").eq(1).uncheck().should('not.be.checked');

        // Get By Indexical Numbers dropdown select
        //cy.xpath("//select[@id='Skills']").select(5);
        // Get Dropdown by looping
        cy.get(dropDOwn).find("option").each(function(option){
            const optionValue = option.val();
            optionList.push(optionValue);
        });
        cy.wrap(optionList).should('include.members', skill);
        //cy.wait(3000);
        cy.get(dropDOwn).select('Content Managment').should('have.value', 'Content Managment');

        cy.xpath("//span[@class='selection']").click();
        cy.xpath("//input[contains(@class,'select2-search__field')]").type('Jap');
        cy.wait(3000);
        cy.xpath("//li[contains(@class,'select2-results__option') and contains(text(),'Japan')]").contains('Japan').click();
        cy.xpath("//select[@id='yearbox']").select("2015", { force: true });
        cy.xpath("//select[@placeholder='Month']").select("January", { force: true });
        cy.xpath("//select[@id='daybox']").select("1", { force: true });
        cy.xpath("//input[@id='firstpassword']").type("123456789");
        cy.xpath("//input[@id='secondpassword']").type("123456789");
        cy.xpath("//button[@id='submitbtn']").click();
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
  
      it("Static Dropdown By Value2", function () {
          let url = "https://demoqa.com/select-menu";
          let dropdown = `#oldSelectMenu`;
          cy.visit(url, { failOnStatusCode: false }); // Ignore load error
          cy.get(dropdown).select(4, { force: true });
          //cy.xpath(dropdown).select(5);
        });
    });
  });