describe('Navigating to Drop down ', () => {
    it('Validating different dropdowns', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://practice.cydeo.com/')   
      cy.get('.list-group > :nth-child(12) > a').click({force:true})
      cy.get('#dropdown').select('Option 1').should('have.value','1')
      cy.get('#dropdown').select('Option 2').should('have.value','2')

      cy.get('#year').select('2021').should('have.value','2021')
      cy.get('#month').select('June').should('have.value','5')
      cy.get('#day').select('12').should('have.value','12')

      cy.get('#state').select('Utah').should('have.value','UT')
      cy.get('[value="js"]').should('exist')
      cy.get('[value="python"]').should('exist')
      cy.get('[value="c"]').should('exist')
      cy.get('#dropdownMenuLink').click().should('be.visible')
      //cy.get('.dropdown-item').eq(0).click()
      //cy.go('back')
      cy.get('[href="https://www.amazon.com/"]').click().should('exist')
      //cy.go('back')
      
      
      
  
    })
  })