Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe('ZohoHRm Sign-In', () => {
    it('Visit Homepage - Sign IN', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://www.zoho.com/commerce/free-demo.html')   
      cy.get('.zgh-utilities > .zgh-accounts > .zgh-login').click()
      cy.get('#signuplink > a').click()
      cy.get('.signup-form > h3').should('have.text','Get started now')
      cy.get('#email').type('demo@gmail.com')
      cy.get('#password').type('sakib123')
      cy.get('#mobile').type(97448734)
      cy.get('#signup-termservice').click()
      cy.get('#signupbtn').click()
      

        
  
    })
  })