import practicePage from "./PageObjects/practicePage";
describe("This to test ratio options", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("/practice");
  });

  it.only("This is to test radio buttons", () => {
    practicePage.selectBMWRadioButton();
  });
});
