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
  };
  checkURL() {
    cy.url().should("include", "practice");
  }
  checkTitle() {
    cy.title().should("eq", "Practice Page");
  }
  selectBenzFrmDropdown() {
    cy.get(this.elements.carSelectDropdown).select("benz");
    cy.get(this.elements.carSelectDropdown).should("have.value", "bmw");
  }
  checkHondaCheckbox() {
      cy.get(this.elements.hondaCheckbox).check();
      cy.get(this.elements.hondaCheckbox).should("not.be.checked");
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
   checkMouseHOverOptions() {
      cy.scrollTo('bottom');
      cy.get(this.elements.mouseHOverButton).realHover();
      cy.get(this.elements.firstMouseHoverOption).should("be.visible");
      cy.xpath(this.elements.secondMouseHoverOption).should("be.visible");
      cy.xpath(this.elements.secondMouseHoverOption).click();
   }
}

export default new PracticePage();
