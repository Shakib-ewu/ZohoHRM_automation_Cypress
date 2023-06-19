describe('Navigating to Basic Auth', () => {
    it('intregating Basic Auth', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/') 
      cy.get('.list-group > :nth-child(4) > a').click({force:true}) 
      {
        headers:{
            Authorization: "Basic YWRtaW46YWRtaW4="
        }
      }
      cy.get('p').should('include.text','Congratulations! You must have the proper credentials')
      
      
      
  
    })
  })