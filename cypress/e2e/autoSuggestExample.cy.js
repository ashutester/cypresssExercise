import practicePage from "./PageObjects/practicePage";
describe("This to check autosuggest results", () => {
  
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("/practice");
  });

  it("This is to test autosuggest results when user enters selenium in the textbox", () => {
    practicePage.checkAutoSuggestResultsContainSelenium();
  });

});
