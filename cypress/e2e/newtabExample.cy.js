import practicePage from "./PageObjects/practicePage";

describe('This is to check multi tab and iframe examples',()=>{

    beforeEach('',()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('/practice');
    });

    it('This is a test to check user is able to open new tab and check the contents on the new tab', () => {
        practicePage.checkNewTab();
    });

    it('This is a test to check iFrame Example',()=>{
        practicePage.checkiFrameElements();
    })
})