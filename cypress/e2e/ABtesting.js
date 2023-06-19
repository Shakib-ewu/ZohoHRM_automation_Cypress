Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
describe('Navigating to homePAge', () => {
    it('Visit A/B testing', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(1) > a').click() 
      cy.get('h3').should('have.text','No A/B Test')    

        
  
    })
  })