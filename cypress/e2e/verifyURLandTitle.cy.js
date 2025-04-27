
import practicePage from './PageObjects/practicePage.js';
describe('This is to test the amazing world of automation', () => {
    it('This is to test the URL and title', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('/practice');
        practicePage.checkURL();
        practicePage.checkTitle();
    })
})