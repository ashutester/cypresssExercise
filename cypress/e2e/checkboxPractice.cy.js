import practicePage from "./PageObjects/practicePage";
describe("This to test checkboxes options", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("/practice");
  });

  it.only("This is to test checkboxes", () => {
    practicePage.checkHondaCheckbox();
  });
});
