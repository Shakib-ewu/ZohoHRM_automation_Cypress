describe('Fixtures',()=>
{

     it('Data Driven test',()=>
     {
        
        cy.fixture('sakib').then ((data)=>{
        cy.visit("https://practice.cydeo.com/login")

        data.forEach ((userdata) =>{

        cy.get("input[name='username']").type(userdata.username)
        cy.get(" input[name='password']").type(userdata.password)
        cy.get('#wooden_spoon').click();

        if (userdata.username=='tomsmith' && userdata.password=="SuperSecretPassword") 
        {
            
            cy.get("#flash-messages").should('exist')
            //cy.get('.oxd-userdropdown-tab > .oxd-icon').click()  //logout
            //cy.get(':nth-child(4) > .oxd-userdropdown-link').click() //logout

        }
        else{
            cy.get('#flash-messages').should('exist')

        }
       
            })

       

        })   
        
    })
})