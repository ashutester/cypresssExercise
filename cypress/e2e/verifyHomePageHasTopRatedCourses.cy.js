import commonComponents from "./components/commonComponents";
import homePage from "./PageObjects/homePage";

describe("This Page has few HomePage tests", () => {
  it("Verify that Home Page has section for Top Rated courses", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/practice');
    commonComponents.goToHomePage();
    homePage.checkPageHasTopRatedCourses();
  })
});
