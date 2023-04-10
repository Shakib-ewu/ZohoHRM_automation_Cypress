Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    });
describe('Opencart Registration', () => {
    it('Visit Homepage - Democart', () => {
    cy.intercept('/some-3rd-party-script.js*').as('externalScript');
      cy.visit('https://www.zoho.com/commerce/free-demo.html')   
      cy.get('#zcf_reported_by').type('Sakib')
      cy.get('#zcf_email').type("djfgh@gmail.com") 
      cy.get('#zcf_phone').type('756456')
      cy.get('#zcf_address_country').select('Bangladesh').should('have.value','Bangladesh')
      cy.get('#zcf_users').select('Selling offline').should('have.value','Selling offline')
      cy.get('#zcf_sw_currently_used').type('Testing for a reason ')
      cy.get('#zcf_description').type('sakib testing')
      cy.get('#zcf_description').type('dhfgfg')
      cy.get('.zsubmit > .zfields-element').click()

        
  
    })
  })