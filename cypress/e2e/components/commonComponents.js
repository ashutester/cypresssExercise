class CommonComponents{
    elements = {
        homeLink: '.dynamic-link[href="/home"]',

    };
    goToHomePage(){
        cy.get(this.elements.homeLink).click();
        cy.url().should('include', '/home');
    }
}

export default new CommonComponents();