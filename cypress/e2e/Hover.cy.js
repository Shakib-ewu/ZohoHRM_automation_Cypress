describe('Navigate to hover over ', () => {
    it('Validating mouse hover over element', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(26) > a').click({force:true})

      cy.get(':nth-child(3) > img').trigger('mouseover').should('be.visible')
      cy.get('h5').eq(0).should('have.text','name: user1')

      cy.get(':nth-child(4) > img').invoke('show').click().should('be.visible')
      cy.get('h5').eq(1).should('have.text','name: user2')

      cy.get(':nth-child(5) > img').trigger('mouseover').should('be.visible')
      cy.get('h5').eq(2).should('have.text','name: user3')
      
      
      
      
  
    })
  })