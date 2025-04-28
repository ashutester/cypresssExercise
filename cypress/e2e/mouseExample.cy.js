import practicePage from "./PageObjects/practicePage";
describe("This to test mouse hover events", () => {
  
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("/practice");
  });

  it("This is to test radio buttons", () => {
    practicePage.checkMouseHoverOptions();
  });

});
