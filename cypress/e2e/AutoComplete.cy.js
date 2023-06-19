describe('Navigating to Auto Complete PAge', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        });
    it('Auto complete page', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(3) > a').click({force:true})
      cy.get('#myCountry').type('Bangladesh')
      cy.get('.btn').click({force:true})
      cy.get('#result').should('have.text','You selected: Bangladesh')
      
  
    })
  })