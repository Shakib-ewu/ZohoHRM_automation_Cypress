describe('Navigate to File Uplo ', () => {
    it('Download all the file', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(19) > a').click({force:true})
      cy.get('#file-upload').attachFile('sakib.txt').click().should('exist');
      cy.get('#file-submit').click().should('exist')
      cy.get('h3').should('have.text','File Uploaded!')
      cy.get('#uploaded-files').should('exist')
      //cy.get('[href="download/some-file.txt"]').click().should('exist')
      
      
      
  
    })
  })