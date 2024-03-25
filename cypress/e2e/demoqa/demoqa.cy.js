import { SelectablePage } from "../../../pageObjects/selectable.page";


describe("DemoQA", () => {
    context("Text Box scenario", () => {
      beforeEach(() => {
        //Open https://demoqa.com/selectable
        SelectablePage.visit();
      });

      it("1st Scenario", () => {
        //Click “Grid”
        SelectablePage.gridOption.click();
        // Click - “Two”, “Four”, “Six”, “Eight”
        SelectablePage.gridContainer.contains("Two").click();
        SelectablePage.gridContainer.contains("Four").click();
        SelectablePage.gridContainer.contains("Six").click();
        SelectablePage.gridContainer.contains("Eight").click();
        // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
        SelectablePage.validateSelectedButtons.should('contain','Two','Four','Six','Eight');
        //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
        SelectablePage.validateNonSelectedButtons.should('contain','One','Three','Seven','Nine');
    });

    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
        });
    });
});