Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
describe('Navigating to Add/Remove Element page', () => {
    it('Visit Add/remove page', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(2) > a').click({force:true})
      cy.get('h3').should('have.text','Add/Remove Elements')
      cy.get('button').click().should('exist')
      cy.get('.added-manually').should('exist')
  
    })
  })