import coursesPage from "./coursesPage";

class PracticePage {
  elements = {
    bmwOptionInDropdown: 'option[value="bmw"]',
    carSelectDropdown: "#carselect",
    hondaCheckbox: "#hondacheck",
    bmwRadioButton: "#bmwradio",
    autosuggestTxtbox: ".inputs.ui-autocomplete-input",
    mouseHOverButton: "#mousehover",
    firstMouseHoverOption: "a[href='#top']",
    secondMouseHoverOption: "//a[normalize-space()='Reload']",
    alertButton: "#alertbtn",
    confirmButton: "#confirmbtn",
    nameInput: 'input[placeholder = "Enter Your Name"]',
    multiSelectDropdown: '#multiple-select-example',
    newTabButton: '#opentab',
    iFrameMastertag: '#courses-iframe'
  };
  checkURL() {
    cy.url().should("include", "practice");
  }
  checkTitle() {
    cy.title().should("eq", "Practice Page");
  }
  selectBenzFrmDropdown() {
    cy.get(this.elements.carSelectDropdown).select("benz");
    cy.get(this.elements.carSelectDropdown).should("have.value", "benz");
  }
  checkHondaCheckbox() {
    cy.get(this.elements.hondaCheckbox).check();
    cy.get(this.elements.hondaCheckbox).should("be.checked");
  }
  selectBMWRadioButton() {
    cy.get(this.elements.bmwRadioButton).check();
    cy.get(this.elements.bmwRadioButton).should("be.checked");
  }
  checkAutoSuggestResultsContainSelenium() {
    cy.get(this.elements.autosuggestTxtbox).type("se");
    cy.get(".ui-menu-item").each(($el, index, $list) => {
      const text = $el.text();
      expect(text.toLowerCase()).to.include("selenium");
    });
  }
  checkMouseHoverOptions() {
    cy.scrollTo("bottom");
    cy.get(this.elements.mouseHOverButton).realHover();
    cy.get(this.elements.firstMouseHoverOption).should("be.visible");
    cy.xpath(this.elements.secondMouseHoverOption).should("be.visible");
    cy.xpath(this.elements.secondMouseHoverOption).click();
  }
  checkAlertwithOk() {
    cy.get(this.elements.nameInput).should("be.visible").type("Ashutosh");
    cy.get(this.elements.alertButton).should("be.visible").click();
    cy.on("window:alert", (t) => {
      expect(t).to.equal(
        "Hello Ashutosh, share this practice page and share your knowledge"
      );
    });
  }
  checkAlertwithOKCancel() {
    cy.get(this.elements.nameInput).should("be.visible").type("Ashutosh");
    cy.get(this.elements.confirmButton).should("be.visible").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.equal("Hello Ashutosh, Are you sure you want to confirm?");
      return true;
    });
    cy.on("window:confirm", (t) => {
      return false;
    });
  }
  checkMultiSelectDropdown(){
    cy.get(this.elements.multiSelectDropdown).select(['apple','orange']).invoke('val').should('deep.equal',['apple','orange']);
  }
  checkNewTab(){
    cy.get(this.elements.newTabButton).invoke('removeAttr','target').click();
    cy.url().should('include','/courses');
    coursesPage.checkHeader();
  }
  checkiFrameElements(){

    cy.frameLoaded(this.elements.iFrameMastertag);
    cy.iframe(this.elements.iFrameMastertag).xpath('//h4[contains(.,"Cypress.io Test Automation")]').should('be.visible');
  }
}

export default new PracticePage();
