describe('Navigating to Checkboxes', () => {
    it('Validate checkboxes', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(7) > a').click({force:true})
      cy.get('#box1').click().should('be.checked')
      cy.get('#box2').click().should('not.be.checked')
      
  
    })
  })