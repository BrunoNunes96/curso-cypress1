/// <reference types="cypress"/>


describe('Trabalhando com popup',() =>{


    it.only('deve verificar se o popup foi invocado',()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win =>{
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called') // verificando se foi invocada
// AULA 38 - popaps

})
})
