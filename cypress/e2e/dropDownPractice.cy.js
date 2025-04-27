import practicePage from "./PageObjects/practicePage";

describe(('This to test dropdown options'),()=>{
    
    it('This is to test dropdowns',()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('/practice');
        practicePage.selectBenzFrmDropdown();
    })

    it('This test is to check radio buttons',()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#bmwradio').check();
        cy.get('#bmwcheck').uncheck();
        cy.get('#bmwradio').should('be.checked');
    })

    it('This is to test dropdowns',()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#autosuggest').type('Ashutosh');
        cy.get('#autosuggest').should('contain.value','Ashutosh')
    })

    it('This is to test enable/disable & hide unhide fields',()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#enabled-example-input').should('be.enabled');
        cy.get('#disabled-button').click();
        cy.get('#enabled-example-input').should('not.be.enabled');

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');  
        cy.get('#displayed-text').type('This is amazing');
        cy.get('#displayed-text').should('have.value','This is amazing');    
    })
    it('This is to test enable/disable & hide unhide fields',()=>{
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('https://www.letskodeit.com/practice');
        cy.get('#enabled-example-input').should('be.enabled');
        cy.get('#disabled-button').click();
        cy.get('#enabled-example-input').should('not.be.enabled');

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');  
        cy.get('#displayed-text').type('This is amazing');
        cy.get('#displayed-text').should('have.value','This is amazing');    
    })


})