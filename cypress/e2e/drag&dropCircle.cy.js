describe('Navigating to Drag and Drop ', () => {
    it('Validate drag and drop circle', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(11) > a').click({force:true})
      cy.get('#draggable').drag('#droptarget')
      
      
      
  
    })
  })