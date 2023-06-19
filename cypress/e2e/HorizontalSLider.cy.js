describe('Navigate to Geo location ', () => {
    it.skip('Validating to Google Map', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(25) > a').click({force:true})
      cy.get("input[value='0']").invoke("val","5").trigger('change')
      cy.get('#range').should('have.text','5')
      cy.get("input[value='0']").invoke("val","2").trigger('change')
      cy.get('#range').should('have.text','2')
      cy.get("input[value='0']").invoke("val","3").trigger('change')
      cy.get('#range').should('have.text','3')
      
      
      
      
      
      
      
  
    })
    it.only ('Amazon slider validation',()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://www.amazon.in/')
        cy.get('.feed-scrollbar-thumb',{ timeout:1000}).invoke("attr","style","width: 309.58px; left: 2990px; display: none;")
    })
  })