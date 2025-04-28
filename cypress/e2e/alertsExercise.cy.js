import practicePage from "./PageObjects/practicePage";
describe("This to test dialogues and alerts", () => {

  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("/practice");
  });

  it("This is to checktext on the alerts", () => {
    practicePage.checkAlertwithOk();
  });

  it("This is to checktext on the alerts", () => {
    practicePage.checkAlertwithOKCancel();
  });
  
});
