import 'cypress-file-upload';
import { each } from 'cypress-recurse';
describe('template spec', () => {

  before(function () {
    cy.fixture('example').then ( function (regData) {
      this.regData = regData;
    }

    )
  })

  it('Test to check all the configuration for the Cypress', () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.contains('Checkboxes').click();
    cy.get('[checked=""]').check();
    
    
  })

  it('Context Menu',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }); 
    cy.visit('/');
    cy.contains('Context Menu').click();
    cy.get('#hot-spot').rightclick();
    cy.on('window:alert',(t)=>{
      expect(t).to.contain('You selected a context menu');
    })
  })

  it('Handling JS Alerts',()=>{
    //cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.contains('JavaScript Alerts').click();
    cy.contains('Click for JS Alert').click();
    cy.on('window:window',(t)=>{
      expect(t).to.contain('sdsds');
    })
  })

  it('Handling confirm Alerts',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.contains('JavaScript Alerts').click();
    cy.contains('Click for JS Confirm').click();
    cy.on('window:confirm',(t)=>{
      expect(t).to.contain('I am a JS Confirm');
    })
  })

  it('Handling confirm Alerts cancel button',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.contains('JavaScript Alerts').click();
    cy.contains('Click for JS Confirm').click();
    cy.on('window:confirm',(t)=>{
      return false;
    })
    cy.get('#result').should('have.text','You clicked: Cancel');
  })

  it('Handling Tabs',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/windows');
    cy.get('.example a')
    .invoke('removeAttr','target')
    .click();
    cy.get('h3').contains('New Window');
    cy.go('back');
    cy.get('.example a').should('be.visible');
  })

  it('This is tocheck broken images',()=>{
    cy.visit('/');
    cy.contains('Broken Images').click();
    // cy.get('[src="asdf.jpg"]')
    // .should('be.visible')
    // .should('have.prop','naturalWidth')
    // .should('be.greaterThan','0');
    cy.get('[src="img/avatar-blank.jpg"]')
    .should('be.visible')
    .should('have.prop','naturalWidth')
    .should('be.greaterThan','0');
  })

  it('This is to check dropdowns',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.contains('Dropdown').click();
    cy.get('#dropdown').select('Option 2');
    
  })

  it('This is to check dropdowns',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.contains('Add/Remove Elements').click();
    cy.get('.added-manually').should('not.exist');
    cy.contains('Add Element').click();
    cy.get('.added-manually').should('be.visible');
    
  })

  it('This is to check basic authentication',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/basic_auth',{
      auth : {
        username: 'admin',
        password: 'admin',
      },
    });
    cy.get('p').should('contain.text','Congratulations! You must have the proper credentials.')
  
    
  })

  it('This is to check dropdowns',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/');
    cy.contains('Dynamic Content').click();
    cy.get('.large-2 img')
    .should('have.length',3)
    .should('have.prop','naturalWidth');
    
    cy.get('.large-10').should('have.da',);
    
  })

  it('This is to check an element which is not visible',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/dynamic_loading');
    cy.get("[href = '/dynamic_loading/1']").click();
    cy.get('button').click();
    cy.get('#finish h4', { timeout: 10000 }).should('not.be.hidden');
    cy.get('#finish h4').should('have.text','Hello World!');
  })



  it('This is to check an element which is not visible',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/dynamic_loading');
    cy.get("[href = '/dynamic_loading/2']").click();
    cy.get('button').click();
    cy.get('#finish h4', { timeout: 10000 }).should('not.be.hidden');
    cy.get('#finish h4').should('have.text','Hello World!');
  
  })
  
  it('This is to check floating Menu and check the URL',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
    cy.visit('/');
    cy.get("[href = '/floating_menu']").click();
    cy.get(':nth-child(1) > a').click();
    cy.url().should('contains','floating_menu#home');
    cy.get('ul > :nth-child(2) > a').click();
    cy.url().should('contains','floating_menu#news');
    cy.get(':nth-child(3) > a').click();
    cy.url().should('contains','floating_menu#contact');
    cy.get(':nth-child(4) > a').click();
    cy.url().should('contains','floating_menu#about');
    
    
  })

  it('Check the selector siblings, child',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://the-internet.herokuapp.com/windows');
    cy.get('h3').siblings('a')
    .invoke('removeAttr','target')
    .click();
    cy.go('back');
  })

  it('Check the selector siblings, child',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.letskodeit.com/practice');
    cy.get('div.mouse-hover-content').invoke('show');
    cy.contains('Reload').click();
    
  })

it('Check the iframe test',()=>{
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('https://www.letskodeit.com/practice');
    
    cy.get('#courses-iframe')
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)

    .contains('ALL COURSES')
    .click();

})


it('This is a test to check Javascript workings',()=>{
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.visit("https://the-internet.herokuapp.com/upload");
  cy.get('#file-upload').attachFile('auto_2.jpg');
  cy.get('#file-submit').click();
  cy.get('#uploaded-files').contains('auto_2');

})

it('This is a test to check Javascript workings',()=>{
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  cy.visit("/");


  // cy.get('#file-upload').attachFile('auto_2.jpg');
  // cy.get('#file-submit').click();
  // cy.get('#uploaded-files').contains('auto_2');

})

})