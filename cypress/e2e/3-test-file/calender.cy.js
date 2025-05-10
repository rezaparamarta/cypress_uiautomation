context("Advance UI testing Datepicker", function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false; // Ignore AngularJS errors
    });
  describe("e2e testing", function () {
    it("9-Date set text", function () {
        let url = "https://jqueryui.com/datepicker/";
        let datepicker = `//input[@id='datepicker']`;
        let date = "10/05/2025";
  
        cy.visit(url);
        cy.get("iframe.demo-frame").then(($iframe) => {
          const body = $iframe.contents().find("body");
          cy.wrap(body).xpath(datepicker).type(date).should("have.value", date);
        });
      });
      it("10-Date from date picker", function () {
        cy.visit("https://jqueryui.com/datepicker/");
  
        // Masuk ke iframe
        cy.get("iframe.demo-frame").then(($iframe) => {
          const body = $iframe.contents().find("body");
          cy.wrap(body).as("iframeBody");
        });
  
        // Klik input date
        cy.get("@iframeBody").find("#datepicker").click();
  
        const targetMonth = "May";
        const targetYear = "2025";
        const targetDay = "10";
  
        function selectMonthYear() {
          cy.get("@iframeBody")
            .find(".ui-datepicker-title")
            .then(($el) => {
              const currentMonth = $el.find(".ui-datepicker-month").text().trim();
              const currentYear = $el.find(".ui-datepicker-year").text().trim();
  
              if (currentMonth !== targetMonth || currentYear !== targetYear) {
                cy.get("@iframeBody").find(".ui-datepicker-next").click();
                selectMonthYear(); // recursive check again
              }
            });
        }
  
        // Jalankan pemilihan bulan & tahun
        selectMonthYear();
  
        // Setelah bulan & tahun sesuai, klik tanggal
        cy.get("@iframeBody")
          .find(".ui-datepicker-calendar td:not(.ui-datepicker-other-month)")
          .contains(targetDay)
          .click();
  
        // Verifikasi hasil input
        cy.get("@iframeBody")
          .find("#datepicker")
          .should("have.value", "05/10/2025");
      });
    });
  
});
  
