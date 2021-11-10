/// <reference types="cypress"/>

describe('teste de login do facebook',()=>{
    beforeEach(()=>{
        cy.visit('https://www.facebook.com/')
    })
    it('Logando no face',()=>{cy.get('#u_0_2_AA').click()
        cy.get('#email').type('bruno_nunes96@outlook.com')
            .should('have.value', 'bruno_nunes96@outlook.com')   
        cy.get('#pass') .type('BrUnO@@@001')    
            .should('have.value', 'BrUnO@@@001')  
                     

    })      

})