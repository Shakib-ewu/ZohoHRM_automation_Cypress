describe('Navigating to Drag and Drop ', () => {
    it('Validate drag and drop elements', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(10) > a').click({force:true})
      cy.get('#column-b').drag('#column-a')
      cy.get('h3').should('have.text','Drag and Drop')
      
      
  
    })
  })